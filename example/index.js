//import cornerstone from "cornerstone-core"
//import cornerstoneTools from "cornerstone-tools"
//import Hammer from "hammerjs"
//import dicomParser from "dicom-parser"
//import cornerstoneMath from "cornerstone-math"
//import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader"
//import cornerstoneWebImageLoader from "cornerstone-web-image-loader"
//import cornerstoneSideImageLoader from "cornerstone-side-image-loader"
//import SyncBrushTool from "cornerstonetools-syncbrush"

const init = () => {
  cornerstoneTools.external.cornerstone = cornerstone
  cornerstoneTools.external.Hammer = Hammer
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath
  cornerstoneTools.init({})
  cornerstoneTools.toolStyle.setToolWidth(2)
  cornerstoneTools.toolColors.setToolColor("rgb(255, 255, 0)")
  cornerstoneTools.toolColors.setActiveColor("rgb(0, 255, 0)")
  cornerstoneTools.store.state.touchProximity = 40
  const sgm = cornerstoneTools.getModule("segmentation")
  sgm.configuration.fillAlpha = 0.5
  sgm.configuration.fillAlphaInactive = 0
  sgm.configuration.renderOutline = false
  cornerstoneWADOImageLoader.webWorkerManager.initialize({
    maxWebWorkers: navigator.hardwareConcurrency || 1,
    startWebWorkersOnDemand: true,
    webWorkerPath: "/cornerstoneWADOImageLoaderWebWorker.min.js",
    webWorkerTaskPaths: [],
    taskConfiguration: {
      decodeTask: {
        loadCodecsOnStartup: true,
        initializeCodecsOnStartup: false,
        codecsPath: "/cornerstoneWADOImageLoaderCodecs.min.js",
        usePDFJS: false,
        strict: false,
      },
    },
  })
  cornerstoneWADOImageLoader.external.cornerstone = cornerstone
  cornerstoneWADOImageLoader.external.dicomParser = dicomParser
  cornerstoneWebImageLoader.external.cornerstone = cornerstone
  cornerstoneSideImageLoader.external.cornerstone = cornerstone
}

const synchronizer = new cornerstoneTools.Synchronizer(
  "cornerstonenewimage",
  cornerstoneTools.updateImageSynchronizer,
)

const display = async (element, imageIds) => {
  const EE = cornerstone.enable(element)
  const image = await cornerstone.loadAndCacheImage(imageIds[0])
  const viewport = cornerstone.getDefaultViewportForImage(EE, image)
  cornerstone.displayImage(EE, image, viewport)
  cornerstone.updateImage(EE)
  synchronizer.add(EE)

  // cornerstoneTools.clearToolState(element, "stack")
  // cornerstoneTools.addStackStateManager(element, [
  //   "stack",
  //   "playClip",
  //   "ReferenceLines",
  //   "Crosshairs",
  // ])
  // cornerstoneTools.addToolState(element, "stack", {
  //   imageIds: [...imageIds],
  //   currentImageIdIndex: Math.floor(imageIds.length / 2),
  // })

  cornerstoneTools.stackPrefetch.enable(EE)
  cornerstoneTools.stackPrefetch.setConfiguration({
    maxImagesToPrefetch: Infinity,
    preserveExistingPool: false,
    maxSimultaneousRequests: 6,
  })

  cornerstoneTools.addToolForElement(EE, StackScrollTool)
  cornerstoneTools.addToolForElement(EE, StackScrollMouseWheelTool)
  cornerstoneTools.addToolForElement(EE, ReferenceLinesTool)
  cornerstoneTools.addToolForElement(EE, CrosshairsTool)
  cornerstoneTools.addToolForElement(EE, SyncBrushTool)

  cornerstoneTools.setToolActive("StackScrollMouseWheel", {
    mouseButtonMask: 0,
    isTouchActive: true,
  })
  cornerstoneTools.setToolActive("Crosshairs", {
    mouseButtonMask: 4,
    synchronizationContext: synchronizer,
  })
  cornerstoneTools.setToolEnabled("ReferenceLines", {
    synchronizationContext: synchronizer,
  })
  return Promise.all(
    imageIds.map((imageId) => cornerstone.loadAndCacheImage(imageId)),
  )
}

const show = (imageIds) => {
  init()
  const axial = document.querySelector("#axial")
  const sagittal = document.querySelector("#sagittal")
  const coronal = document.querySelector("#coronal")
  const { generateSideImages } = cornerstoneSideImageLoader
  display(axial, imageIds).then((images) => {
    const { coronalImageIds, sagittalImageIds } = generateSideImages(images)
    display(coronal, coronalImageIds)
    display(sagittal, sagittalImageIds)
  })
}
