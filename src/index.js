/**
 *
 */
Component({
  properties: {
    value: {
      type: Number,
      value: 0,
      observer: function(newValue) {
        this._refreshValues(newValue)
      }
    },
    placeholder: {
      type: Number,
      value: 0,
      observer: function(newValue) {
        this._refreshPlaceholders(newValue)
      }
    },
    allowHalf: {
      type: Boolean,
      value: true
    },
    disabled: {
      type: Boolean,
      value: false
    },
    length: {
      type: Number, // 评选数量
      value: 5
    }
  },
  data: {
    iconClassMap: {
      '0': 'empty',
      '0.5': 'half',
      '1': 'full'
    },
    iconText: 'star',
    values: [],
    placeholders: [],
    componentLeftDistance: -1
  },
  ready() {
    if (this.data.value === 0 && this.data.placeholder === 0) {
      this._refreshPlaceholders(0)
    }
  },
  methods: {
    _refreshValues(value) {
      this.setData({
        values: this._generateArray(Number(value))
      }, () => {
        this._setComponentLeftDistance()
      })
    },
    _refreshPlaceholders(value) {
      this.setData({
        placeholders: this._generateArray(Number(value))
      }, () => {
        this._setComponentLeftDistance()
      })
    },
    _setComponentLeftDistance() {
      if (this.data.disabled) {
        return
      }
      // 获取组件距离页面左边的距离
      if (this.data.componentLeftDistance >= 0) {
        return
      }
      let query = this.createSelectorQuery()
      query.select('.rate').boundingClientRect()
      query.exec(res => {
        this.setData({
          componentLeftDistance: Number(res[0].left)
        })
      })
    },
    _generateArray(value) {
      let arr = []

      let fullCount = value
      if (fullCount <= 0) {
        return [0, 0, 0, 0, 0]
      }

      let isAppendHalf = false  // 是否需要加半星
      if (this.data.allowHalf) {
        // 允许半星的向下取整
        if (!isPositiveIntegerNumber(fullCount)) {
          // 非整数
          fullCount = Math.floor(fullCount)
          isAppendHalf = true
        }
      } else {
        // 不允许半星的向上取整
        fullCount = Math.ceil(fullCount)
      }
      // 循环追加完整分数
      for (let i = 0; i < fullCount; i++) {
        arr.push(1)
      }
      if (isAppendHalf) {
        arr.push(0.5)
      }
      // 循环追加空分
      let emptyCount = this.data.length - arr.length
      for (let i = 0; i < emptyCount; i++) {
        arr.push(0)
      }

      // console.log(arr)
      return arr
    },
    choose(e) {
      if (this.data.disabled) {
        return
      }

      let index = Number(e.currentTarget.dataset.index)
      let value = (index + 1) * 2
      if (this.data.allowHalf) {
        // 允许半个
        let iconSize = rpxToPx(56)
        let iconLeft = index * iconSize
        let touchLeft = Number(e.detail.x) - this.data.componentLeftDistance
        if (iconLeft + iconSize / 2 >= touchLeft) {
          // 点了左一半
          value = value - 1
        }
      }
      value = (value / 2).toFixed(1)

      if (value === this.data.value) {
        return
      }
      this.setData({
        value: value
      })
      this.triggerEvent('change', {
        value
      })
    }
  }
})

function rpxToPx(rpx) {
  let sysInfo = wx.getSystemInfoSync()
  return (rpx * sysInfo.windowWidth) / 750
}

// 是否为整数
function isPositiveIntegerNumber(num) {
  let numStr = num.toString()
  return /(^[1-9]\d*$)/.test(numStr)
}
