import cornerstoneTools from "cornerstone-tools"

const { eraseIfSegmentIndex } = cornerstoneTools.import(
  "util/segmentationUtils",
)

// CAUTION: below cannot erase and brush at the same time
export const drawBrushPixels = (
  pointArray,
  pixelData,
  segmentIndex, // always fixed to 1
  colorLUTIndex,
  columns,
  shouldErase = false,
) => {
  const getSpIndex = (x, y) => y * columns + x
  pointArray.forEach((point) => {
    const spIndex = getSpIndex(point.x, point.y)
    if (shouldErase) {
      eraseIfSegmentIndex(spIndex, pixelData, segmentIndex)
    } else {
      pixelData[spIndex] = segmentIndex
    }
  })
}
