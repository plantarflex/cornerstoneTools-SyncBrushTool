export function getImagePoint(spIndex, columns) {
  return {
    x: spIndex % columns,
    y: Math.trunc(spIndex / columns),
  }
}

export function getImagePointArray(pixelData, columns) {
  const pointArray = []
  pixelData.forEach((pixel, spIndex) => {
    if (pixel === 0) return
    const imagePoint = getImagePoint(spIndex, columns)
    pointArray.push({
      x: imagePoint.x,
      y: imagePoint.y,
    })
  })
  return pointArray
}

export function getCircle(radius, rows, columns, xCoord = 0, yCoord = 0) {
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

export function getSquare(radius, rows, columns, xCoord = 0, yCoord = 0) {
  const x0 = xCoord
  const y0 = yCoord
  if (radius === 1) {
    return [[x0, y0]]
  }
  const squareArray = []
  let index = 0
  for (let y = -radius; y < radius; y++) {
    const yCoord = y0 + y
    if (yCoord > rows || yCoord < 0) {
      continue
    }
    for (let x = -radius; x < radius; x++) {
      const xCoord = x0 + x
      if (xCoord >= columns || xCoord < 0) {
        continue
      }
      squareArray[index++] = {
        x: x0 + x,
        y: y0 + y,
      }
    }
  }
  return squareArray
}

