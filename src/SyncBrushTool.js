import cornerstoneTools from "cornerstone-tools"
import cornerstone from "cornerstone-core"
import { drawBrushPixels } from "./segmentation/drawBrush"
import { pivotImagePointArrayTo3D } from "./segmentation/pivoters"
import { restoreImagePointArray, getLabelmap2DPatch } from "./utils/patch"

const BaseBrushTool = cornerstoneTools.import("base/BaseBrushTool")
const segmentationModule = cornerstoneTools.getModule("segmentation")
const {
  getDiffBetweenPixelData,
  triggerLabelmapModifiedEvent,
} = cornerstoneTools.import("util/segmentationUtils")
const { getToolState } = cornerstoneTools

export default class SyncBrushTool extends BaseBrushTool {
  constructor(props = {}) {
    const defaultProps = {
      name: "SyncBrush",
      supportedInteractionTypes: ["Mouse", "Touch"],
      mixins: ["renderBrushMixin"],
    }
    super(props, defaultProps)
    this.touchDragCallback = this._paint.bind(this)
  }

  _startPainting(evt) {
    const { configuration, getters, state } = segmentationModule
    const eventData = evt.detail
    const sourceElement = eventData.element
    const sourceImage = eventData.image
    const shouldErase =
      this._isCtrlDown(eventData) || this.configuration.alwaysEraseOnClick
    const toolData = getToolState(sourceElement, "Crosshairs")
    if (!toolData) {
      return
    }
    this.filterData = {
      sourcePixelData: sourceImage.getPixelData(),
      mode: configuration.mode || "plain",
      adaptCache: null,
      closeSize: configuration.closeSize || 1,
      openSize: configuration.openSize || 1,
      reverseOn: configuration.reverseOn || false,
      radius: configuration.radius || 10,

      thresholdOn: configuration.thresholdOn || false,
      thresholdMeta: configuration.thresholdMeta,
    }
    const {
      labelmap3D,
      labelmap2D,
      activeLabelmapIndex,
      currentImageIdIndex,
    } = getters.labelmap2D(sourceElement)

    this.paintEventData = {
      labelmap3D,
      labelmap2D,
      activeLabelmapIndex,
      currentImageIdIndex,
      shouldErase,
    }
    if (configuration.storeHistory) {
      const previousPixelData = this.paintEventData.labelmap2D.pixelData.slice()
      this.paintEventData.previousPixelData = previousPixelData
    }
  }

  _paint(evt) {
    const { configuration, getters } = segmentationModule
    const eventData = evt.detail
    const sourceElement = eventData.element
    const sourceImage = eventData.image
    const sourceImagePoint = eventData.currentPoints.image
    const { rows, columns } = sourceImage
    if (
      sourceImagePoint.x < 0 ||
      sourceImagePoint.x > columns ||
      sourceImagePoint.y < 0 ||
      sourceImagePoint.y > rows
    ) {
      return
    }
    const { labelmap2D, labelmap3D, shouldErase } = this.paintEventData

    const labelmap2DPatch = getLabelmap2DPatch(
      rows,
      columns,
      Math.round(sourceImagePoint.x),
      Math.round(sourceImagePoint.y),
      this.filterData,
    )
    const sourceImagePointArray = restoreImagePointArray(labelmap2DPatch)
    const activeColorLUTIndex = this.paintEventData.activeLabelmapIndex
    drawBrushPixels(
      sourceImagePointArray,
      labelmap2D.pixelData,
      labelmap3D.activeSegmentIndex,
      activeColorLUTIndex,
      columns,
      shouldErase,
      true,
    )
    cornerstone.updateImage(sourceElement)

    const stackToolDataSource = getToolState(sourceElement, "stack")
    if (stackToolDataSource === undefined) {
      return
    }
    const stackData = stackToolDataSource.data[0]
    const sourceImageIdIndex = stackData.currentImageIdIndex
    const toolData = getToolState(sourceElement, "Crosshairs")
    if (!toolData) {
      return
    }

    // brush other views accordingly
    const syncContext = toolData.data[0].synchronizationContext
    const syncElements = syncContext.getSourceElements()
    syncElements.forEach((targetElement) => {
      if (targetElement === sourceElement) {
        return
      }
      const { labelmap3D } = getters.labelmap2D(targetElement)

      const stackToolDataSource = getToolState(targetElement, "stack")
      if (stackToolDataSource === undefined) {
        return
      }
      const stackData = stackToolDataSource.data[0]
      const baseImageId = stackData.imageIds[0]
      const { rows, columns } = cornerstone.metaData.get(
        "imagePlaneModule",
        baseImageId,
      )

      const imagePointArrayGroup = pivotImagePointArrayTo3D(
        sourceImagePointArray,
        sourceImageIdIndex,
        columns,
        targetElement.id,
      )
      for (let key in imagePointArrayGroup) {
        try {
          const imageIdIndex = Number(key)
          const imagePointArray = imagePointArrayGroup[key]
          const labelmap2DForImageIdIndex = getters.labelmap2DByImageIdIndex(
            labelmap3D,
            imageIdIndex,
            rows,
            columns,
          )
          drawBrushPixels(
            imagePointArray,
            labelmap2DForImageIdIndex.pixelData,
            labelmap3D.activeSegmentIndex,
            activeColorLUTIndex,
            columns,
            shouldErase,
            false,
          )
        } catch (e) {
          console.log(e)
        }
      }
      cornerstone.updateImage(targetElement)
    })
  }

  _endPainting(evt) {
    const { configuration, setters } = segmentationModule
    const { labelmap2D, currentImageIdIndex } = this.paintEventData
    const segmentSet = new Set(labelmap2D.pixelData)
    const iterator = segmentSet.values()

    const segmentsOnLabelmap = []
    let done = false
    while (!done) {
      const next = iterator.next()
      done = next.done
      if (!done) {
        segmentsOnLabelmap.push(next.value)
      }
    }

    labelmap2D.segmentsOnLabelmap = segmentsOnLabelmap

    if (configuration.storeHistory) {
      const { previousPixelData } = this.paintEventData
      const newPixelData = labelmap2D.pixelData
      const operation = {
        imageIdIndex: currentImageIdIndex,
        diff: getDiffBetweenPixelData(previousPixelData, newPixelData),
      }
      setters.pushState(this.element, [operation])
    }
    this.filterData = null

    triggerLabelmapModifiedEvent(this.element)
  }

  mouseDragCallback(evt) {
    const { currentPoints } = evt.detail
    this._lastImageCoords = currentPoints.image

    if (this._drawing) {
      this._paint(evt)
    }
  }

  preMouseDownCallback(evt) {
    evt.stopImmediatePropagation()

    const eventData = evt.detail
    const { element, currentPoints } = eventData
    this._startPainting(evt)
    this._lastImageCoords = currentPoints.image
    this._drawing = true
    this._startListeningForMouseUp(element)
    this._paint(evt)
    return true
  }
}
