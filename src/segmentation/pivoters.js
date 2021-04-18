import { groupBy } from "lodash"

export const pivotBufferAxialToCoronal = (
  axialBuffer,
  axialRows,
  axialColumns,
) => {
  const _axialBuffer = new Array()
  for (let l = 0; l < axialBuffer.length; l += axialRows * axialColumns) {
    _axialBuffer.push(axialBuffer.slice(l, l + axialRows * axialColumns))
  }
  const buffer = new Uint16Array(axialBuffer.length)
  let cnt = 0
  for (let l = 0; l < axialColumns; l += 1) {
    for (let i = 0; i < _axialBuffer.length; i += 1) {
      for (let j = 0; j < axialColumns; j += 1) {
        const k = axialColumns * l + j
        buffer[cnt++] = _axialBuffer[i][k]
      }
    }
  }
  return buffer
}

export const pivotBufferAxialToSagittal = (
  axialBuffer,
  axialRows,
  axialColumns,
) => {
  const _axialBuffer = new Array()
  for (let l = 0; l < axialBuffer.length; l += axialRows * axialColumns) {
    _axialBuffer.push(axialBuffer.slice(l, l + axialRows * axialColumns))
  }
  const buffer = new Uint16Array(axialBuffer.length)
  let cnt = 0
  for (let l = axialColumns - 1; l >= 0; l = l - 1) {
    for (let i = 0; i < _axialBuffer.length; i += 1) {
      for (let j = 0; j < axialColumns; j += 1) {
        const k = j * axialColumns + l
        buffer[cnt++] = _axialBuffer[i][k]
      }
    }
  }
  return buffer
}

export const pivotImagePointArrayTo3D = (
  sourceImagePointArray,
  sourceImageIdIndex,
  columns,
  targetView = "saggital",
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
