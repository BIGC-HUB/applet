const util = require('../../packages/bigsea.js')
Page({
  data: {
    type: '',
  },
  onLoad(option) {
    if (option.type) {
      this.setData({
        type: option.type,
      })
    }
  },
  bindToComment() {
    util.path('pages/group/groupComment')
  },
})
