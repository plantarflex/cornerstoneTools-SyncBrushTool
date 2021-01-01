import { groupBy } from "lodash"

export const getImagePoint = (spIndex, columns) => ({
  x: spIndex % columns,
  y: Math.trunc(spIndex / columns),
})

export const getImagePointArray = (pixelData, columns) => {
  const pointArray = []
  pixelData.forEach((pixel, spIndex) => {
    if (pixel === 0) {
      return
    }
    const imagePoint = getImagePoint(spIndex, columns)
    pointArray.push({
      x: imagePoint.x,
      y: imagePoint.y,
    })
  })
  return pointArray
}

export const getCircle = (radius, rows, columns, xCoord = 0, yCoord = 0) => {
  const x0 = Math.floor(xCoord)
  const y0 = Math.floor(yCoord)
  if (radius === 1) {
    return [[x0, y0]]
  }
  const circleArray = []
  let index = 0
  for (let y = -radius; y <= radius; y++) {
    const yCoord = y0 + y
    if (yCoord > rows || yCoord < 0) {
      continue
    }
    for (let x = -radius; x <= radius; x++) {
      const xCoord = x0 + x
      if (xCoord >= columns || xCoord < 0) {
        continue
      }
      if (x * x + y * y < radius * radius) {
        circleArray[index++] = {
          x: x0 + x,
          y: y0 + y,
        }
      }
    }
  }
  return circleArray
}

export const pivotImagePointArray = (
  sourceImagePointArray,
  sourceImageIdIndex,
  columns,
  targetView,
) => {
  const imagePoint3DArray = []
  sourceImagePointArray.forEach((point) => {
    if (targetView === "sagittal") {
      imagePoint3DArray.push({
        x: point.y,
        y: sourceImageIdIndex,
        z: columns - point.x,
      })
    } else if (targetView === "coronal") {
      imagePoint3DArray.push({
        x: point.x,
        y: sourceImageIdIndex,
        z: point.y,
      })
    } else {
      return
    }
  })
  return groupBy(imagePoint3DArray, (p) => p.z)
}
