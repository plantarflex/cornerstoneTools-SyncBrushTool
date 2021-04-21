# cornerstoneTools-SyncBrushTool

A brush that labels 3D views simultaneously.<br> Your axial brushing will be synchronized with sagittal and coronal labelmaps which are displayed via [cornerstoneSideImageLoader](https://github.com/plantarflex/cornerstoneSideImageLoader) This is a 3rd party library of [cornerstoneTools](https://github.com/cornerstonejs/cornerstoneTools).<br>

![92598259-8a4cac00-f2e3-11ea-9224-79a21f3b62a0](https://user-images.githubusercontent.com/31844264/110202428-e3b92080-7eab-11eb-8b27-457069bd26e8.gif)

## Dependencies 

* [cornerstone-core](https://github.com/cornerstonejs/cornerstone)
* [cornerstone-tools](https://github.com/cornerstonejs/cornerstoneTools)
* [cornerstone-side-image-loader](https://github.com/plantarflex/cornerstoneSideImageLoader)

## Demo

Right viewport displays original axial images. Left viewports display reconstructed coronal and sagittal images, by [cornerstone-side-image-loader](https://github.com/plantarflex/cornerstoneSideImageLoader). Currently, brushing only at axial view is supported.

[LIVE DEMONSTRATION](https://plantarflex.github.io/cornerstoneTools-SyncBrushTool//)

## Installation

```sh
$ yarn add cornerstonetools-syncbrush
```

or

```sh
$ npm i cornerstonetools-syncbrush
```

## Example

```js
import SyncBrushTool from "cornerstonetools-syncbrush"

cornerstoneTools.addTool(SyncBrushTool)
cornerstoneTools.setToolActiveForElement(axialElement, "SyncBrush", {
  mouseButtonMask: 1,
})
cornerstoneTools.setToolPassiveForElement(sagittalElement)
cornerstoneTools.setToolPassiveForElement(coronalElement)
```

## LICENSE

MIT