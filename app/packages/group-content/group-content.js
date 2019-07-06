const util = require('../../packages/bigsea.js')
const app = getApp()
Component({
  options: {
    addGlobalClass: false,
  },
  properties: {
    card: {
      type: Object,
    },
  },
  observers: {
    // type(card) {
    //   this.setData({
    //     card: card,
    //   })
    // },
  },
  data: {},
  attached() {},
  methods: {
    bindGroup() {
      util.path('pages/group/group', {
        cardID: this.data.card.type,
      })
    },
  },
})
