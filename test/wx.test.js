const _ = require('./utils')

test('wx.getSystemInfo', async () => {
  wx.getSystemInfo({
    success(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
    },
    complete(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
    },
  })
})
