const Sea = require('../../packages/bigsea.js')
const app = getApp()
Component({
  options: {
    addGlobalClass: false,
  },
  properties: {
    air: {
      type: Boolean,
    },
    theme: {
      type: String,
    },
  },
  observers: {},
  data: {
    navBar: app.data.navBar,
  },
  attached() {},
  methods: {
    bindBack() {
      Sea.back()
    },
  },
})
