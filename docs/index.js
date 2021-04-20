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

function init() {
  // Externals
  cornerstoneWADOImageLoader.external.cornerstone = cornerstone
  cornerstoneWADOImageLoader.external.dicomParser = dicomParser
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath
  cornerstoneTools.external.cornerstone = cornerstone
  cornerstoneTools.external.Hammer = Hammer
  cornerstoneSideImageLoader.external.cornerstone = cornerstone

  // Image Loader
  const config = {
    webWorkerPath: `https://tools.cornerstonejs.org/examples/assets/image-loader/cornerstoneWADOImageLoaderWebWorker.js`,
    taskConfiguration: {
      decodeTask: {
        codecsPath: `https://tools.cornerstonejs.org/examples/assets/image-loader/cornerstoneWADOImageLoaderCodecs.js`,
      },
    },
  }
  cornerstoneWADOImageLoader.webWorkerManager.initialize(config)
  cornerstoneTools.init()
}

const synchronizer = new cornerstoneTools.Synchronizer(
  "cornerstonenewimage",
  cornerstoneTools.updateImageSynchronizer,
)

const toolNames = ["StackScrollMouseWheel", "ReferenceLines", "Crosshairs"]

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
  toolNames.forEach((toolName) => {
    const apiTool = cornerstoneTools[`${toolName}Tool`]
    cornerstoneTools.addToolForElement(element, apiTool)
  })
  cornerstoneTools.setToolActive("StackScrollMouseWheel", {
    mouseButtonMask: 0,
  })
  cornerstoneTools.setToolActive("Crosshairs", {
    mouseButtonMask: 1,
    synchronizationContext: synchronizer,
  })
  return Promise.all(
    imageIds.map((imageId) => cornerstone.loadAndCacheImage(imageId)),
  )
}

;(async function () {
  init()
  const axial = document.querySelector("#axial")
  const sagittal = document.querySelector("#sagittal")
  const coronal = document.querySelector("#coronal")
  const { generateSideImages } = cornerstoneSideImageLoader

  const images = await display(axial, imageIds)
  const { coronalImageIds, sagittalImageIds } = generateSideImages(images)
  await display(coronal, coronalImageIds)
  await display(sagittal, sagittalImageIds)
})()
