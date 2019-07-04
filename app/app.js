const Sea = require('./packages/bigsea.js')
App({
  data: {
    navBar: {
      height: '44',
      marginTop: '20',
    },
  },
  onLaunch() {
    this.initNavBar()
  },
  onShow() {},
  onHide() {},
  initNavBar() {
    const systemInfo = wx.getSystemInfoSync()
    const ios = /ios/i.test(systemInfo.system)
    this.data.navBar = {
      marginTop: systemInfo.statusBarHeight,
      height: ios ? 44 : 48,
    }
  },
})
