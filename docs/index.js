const imageIds = [
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000012.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000017.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000001.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000010.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000018.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000015.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000008.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000006.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000002.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000023.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000003.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000014.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000009.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000007.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000000.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000024.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000016.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000011.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000019.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000025.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000021.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000020.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000004.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000013.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000022.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000005.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000039.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000038.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000026.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000034.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000031.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000032.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000033.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000041.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000030.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000045.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000046.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000040.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000043.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000048.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000047.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000027.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000050.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000049.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000042.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000029.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000035.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000037.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000052.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000044.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000036.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000028.dcm",
  "wadouri:https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000051.dcm",
]

function _init() {
  cornerstoneWADOImageLoader.external.dicomParser = dicomParser
  cornerstoneWADOImageLoader.external.cornerstone = cornerstone
  cornerstoneSideImageLoader.external.cornerstone = cornerstone

  const config = {
    webWorkerPath: `https://tools.cornerstonejs.org/examples/assets/image-loader/cornerstoneWADOImageLoaderWebWorker.js`,
    taskConfiguration: {
      decodeTask: {
        codecsPath: `https://tools.cornerstonejs.org/examples/assets/image-loader/cornerstoneWADOImageLoaderCodecs.js`,
      },
    },
  }
  cornerstoneWADOImageLoader.webWorkerManager.initialize(config)
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath
  cornerstoneTools.external.cornerstone = cornerstone
  cornerstoneTools.external.Hammer = Hammer
  const segModule = cornerstoneTools.getModule("segmentation")
  segModule.configuration.fillAlpha = 0.5
  segModule.configuration.fillAlphaInactive = 0
  segModule.configuration.renderOutline = false
  cornerstoneTools.init({
    showSVGCursors: true,
  })

  cornerstoneTools.toolStyle.setToolWidth(2)
  cornerstoneTools.toolColors.setToolColor("rgb(255, 255, 0)")
  cornerstoneTools.toolColors.setActiveColor("rgb(0, 255, 0)")
  cornerstoneTools.store.state.touchProximity = 40
}

const synchronizer = new cornerstoneTools.Synchronizer(
  "cornerstonenewimage",
  cornerstoneTools.updateImageSynchronizer,
)

const display = async (element, imageIds) => {
  cornerstone.enable(element)
  const image = await cornerstone.loadAndCacheImage(imageIds[0])
  cornerstone.displayImage(element, image)
  synchronizer.add(element)
  cornerstoneTools.addStackStateManager(element, [
    "stack",
    "playClip",
    "Crosshairs",
  ])
  cornerstoneTools.addToolState(element, "stack", {
    imageIds: [...imageIds],
    currentImageIdIndex: 0,
  })
  cornerstoneTools.addToolForElement(
    element,
    cornerstoneTools["StackScrollMouseWheelTool"],
  )
  cornerstoneTools.addToolForElement(
    element,
    cornerstoneTools["CrosshairsTool"],
  )
  cornerstoneTools.setToolActive("StackScrollMouseWheel", {
    mouseButtonMask: 0,
  })
  cornerstoneTools.setToolActive("Crosshairs", {
    mouseButtonMask: 2,
    synchronizationContext: synchronizer,
  })
  cornerstoneTools.addToolForElement(element, SyncBrushTool)
  if (element.id === "axial") {
    cornerstoneTools.setToolActiveForElement(element, "SyncBrush", {
      isTouchActive: true,
      mouseButtonMask: 1,
    })
  } else {
    cornerstoneTools.setToolPassiveForElement(element, "SyncBrush")
  }
  return Promise.all(
    imageIds.map((imageId) => cornerstone.loadAndCacheImage(imageId)),
  )
}

const { generateSideImages } = cornerstoneSideImageLoader

;(async function () {
  _init()
  const axial = document.querySelector("#axial")
  const sagittal = document.querySelector("#sagittal")
  const coronal = document.querySelector("#coronal")

  const images = await display(axial, imageIds)
  const { coronalImageIds, sagittalImageIds } = generateSideImages(images)
  await display(coronal, coronalImageIds)
  await display(sagittal, sagittalImageIds)
})()
