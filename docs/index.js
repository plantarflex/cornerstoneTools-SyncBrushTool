const imageIds = [
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000000.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000001.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000002.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000003.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000004.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000005.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000006.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000007.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000008.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000009.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000010.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000011.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000012.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000013.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000014.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000015.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000016.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000017.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000018.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000019.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000020.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000021.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000022.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000023.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000024.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000025.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000026.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000027.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000028.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000029.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000030.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000031.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000032.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000033.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000034.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000035.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000036.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000037.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000038.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000039.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000040.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000041.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000042.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000043.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000044.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000045.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000046.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000047.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000048.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000049.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000050.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000051.dcm",
  "https://plantarflex.github.io/cornerstoneTools-SyncBrushTool/data/CT000052.dcm",
]

const init = () => {
  cornerstoneWebImageLoader.external.cornerstone = cornerstone
  cornerstone.registerImageLoader("http", cornerstoneWebImageLoader.loadImage)
  cornerstone.registerImageLoader("https", cornerstoneWebImageLoader.loadImage)
  cornerstoneSideImageLoader.external.cornerstone = cornerstone

  cornerstoneTools.external.cornerstone = cornerstone
  cornerstoneTools.external.Hammer = Hammer
  cornerstoneTools.external.cornerstoneMath = cornerstoneMath
  cornerstoneTools.init()
  cornerstoneTools.toolStyle.setToolWidth(2)
  cornerstoneTools.toolColors.setToolColor("rgb(255, 255, 0)")
  cornerstoneTools.toolColors.setActiveColor("rgb(0, 255, 0)")
  cornerstoneTools.store.state.touchProximity = 40
  const sgm = cornerstoneTools.getModule("segmentation")
  sgm.configuration.fillAlpha = 0.5
  sgm.configuration.fillAlphaInactive = 0
  sgm.configuration.renderOutline = false
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
