Page({
  data: {
    value: 5
  },
  showResult(e) {
    wx.showToast({
      title: `${e.detail.value}星`,
      icon: 'none'
    })
  },
  setValue(e) {
    this.setData({
      value: e.detail.value
    })
  }
})
