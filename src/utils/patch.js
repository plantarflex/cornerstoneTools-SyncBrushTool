import { getCircle } from "./pointArray"
import { plain } from "./brushModes"

function getPatchPixelData(rows, columns, xCoord, yCoord, filterData) {
  const pointArray = getCircle(filterData.radius, rows, columns, xCoord, yCoord)
  const patchPointArray = pointArray.map((point) => ({
    x: point.x - xCoord + filterData.radius,
    y: point.y - yCoord + filterData.radius,
  }))

  return plain(columns, filterData, pointArray, patchPointArray)
}

function getLabelmap2DPatch(rows, columns, xCoord = 0, yCoord = 0, filterData) {
  const patchWidth = filterData.radius * 2
  const patchPixelData = getPatchPixelData(
    rows,
    columns,
    xCoord,
    yCoord,
    filterData,
  )
  const labelmap2DPatch = {
    pixelData: patchPixelData,
    width: patchWidth,
    center: { x: xCoord, y: yCoord },
  }
  return labelmap2DPatch
}

function restoreImagePointArray(labelmap2DPatch) {
  const { center, width } = labelmap2DPatch
  const pointArray = []
  const getImagePoint = (spIndex) => ({
    x: spIndex % width,
    y: Math.trunc(spIndex / width),
  })
  labelmap2DPatch.pixelData.forEach((pixel, patchSpIndex) => {
    if (pixel === 0) return
    const imagePoint = getImagePoint(patchSpIndex)
    pointArray.push({
      x: center.x - width / 2 + imagePoint.x,
      y: center.y - width / 2 + imagePoint.y,
    })
  })
  return pointArray
}

export { getLabelmap2DPatch, restoreImagePointArray }
