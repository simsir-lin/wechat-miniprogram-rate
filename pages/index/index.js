var app = getApp()
Page({
  data: {
    rate: 0
  },
  handleChange: function (e) {
    this.setData({
      rate: e.detail.value
    })
  },
  onLoad: function () {
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
