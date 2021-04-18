import cornerstoneTools from "cornerstone-tools"
import { count } from "./colors"

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
  colorCountOn = false,
) => {
  const getSpIndex = (x, y) => y * columns + x
  pointArray.forEach((point) => {
    const spIndex = getSpIndex(point.x, point.y)
    if (shouldErase) {
      if (colorCountOn && pixelData[spIndex] === segmentIndex) {
        count.decrease(colorLUTIndex)
      }
      eraseIfSegmentIndex(spIndex, pixelData, segmentIndex)
    } else {
      if (colorCountOn && pixelData[spIndex] !== segmentIndex) {
        count.increase(colorLUTIndex)
      }
      pixelData[spIndex] = segmentIndex
    }
  })
}
