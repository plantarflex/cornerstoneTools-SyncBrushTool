export const colorList = [
  [208, 99, 100, 255],
  [226, 183, 72, 255],
  [99, 201, 207, 255],
  [68, 126, 195, 255],
  [99, 207, 111, 255],
  [105, 88, 217, 255],
  [207, 99, 177, 255],
  [46, 43, 187, 255],
  [233, 129, 9, 255],
  [235, 65, 208, 255],
  [247, 253, 154, 255],
  [45, 130, 109, 255],
  [182, 22, 22, 255],
  [88, 82, 30, 255],
  [175, 164, 65, 255],
]

const count = {
  _cnt: new Array(colorList.length).fill(0),
  get current() { return this._cnt },
  refresh: function () {
    this._cnt = new Array(colorList.length).fill(0)
  },
  increase: function (colorLUTIndex) {
    this._cnt[colorLUTIndex] += 1
  },
  decrease: function (colorLUTIndex) {
    this._cnt[colorLUTIndex] -= 1
  },
}

//TODO: integreate with cornerstoneTools-Thresholder
function initThresholdColormap(cornerstoneColormap) {
  cornerstoneColormap.setNumberOfColors(256)
  for (let i = 0; i < 256; i++) {
    cornerstoneColormap.setColor(i, [255, 255, 255, 255])
  }
  cornerstoneColormap.setColor(0, [0, 0, 0, 255])
  cornerstoneColormap.setColor(255, [0, 0, 0, 255])
}

export { count }
