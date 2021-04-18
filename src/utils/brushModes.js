export function plain(columns, filterData, pointArray, patchPointArray) {
  const getSpIndex = (x, y, width) => y * width + x
  const patchWidth = filterData.radius * 2
  let patchPixelData = new Uint16Array(patchWidth ** 2).fill(0)
  if (filterData.thresholdOn) {
    const { ww, wc, slope, intercept } = filterData.thresholdMeta
    patchPointArray.forEach((pPoint, idx) => {
      const point = pointArray[idx]
      const spd =
        filterData.sourcePixelData[getSpIndex(point.x, point.y, columns)]
      const mLutSpd = spd * slope + intercept
      const vLutSpd = (mLutSpd - wc) / ww + 0.5
      if (0 < vLutSpd && vLutSpd < 1) {
        patchPixelData[getSpIndex(pPoint.x, pPoint.y, patchWidth)] = 1
      }
    })
  } else {
    patchPointArray.forEach((point) => {
      patchPixelData[getSpIndex(point.x, point.y, patchWidth)] = 1
    })
  }
  return patchPixelData
}

