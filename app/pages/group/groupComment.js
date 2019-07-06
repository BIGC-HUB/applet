Page({
  data: {
    placeholder: '有何看法，展开讲讲'
  },
  onLoad(option) {
    if (option.at) {
      this.setData({
        placeholder: '@' + option.at
      })
    }
  },
})
