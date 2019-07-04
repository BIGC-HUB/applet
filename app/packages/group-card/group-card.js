const util = require('../../packages/bigsea.js')
const app = getApp()
Component({
  options: {
    addGlobalClass: false,
  },
  properties: {
    type: {
      type: String,
    },
  },
  observers: {
    type(nv) {
      let card = {}
      if (nv === '#投票') {
        card = Object.assign(card, {
          type: '#投票',
          title: '《期末人格》系列，在学校你见到最多的是哪种学霸？',
          cover: './img/1.png',
          likes: [],
          btn: '投票',
          joined: false,
        })
      } else if (nv === '#问作者') {
        card = Object.assign(card, {
          type: '#问作者',
          title: '我是铲屎官，大家有什么想问的？',
          cover: './img/2.png',
          likes: [
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi92Y0ZGZTlLZzJRMFlmd1F1YWliN3NIdXhsT2gzaHVzazR1ZEJPclRkUXYweWhDUWs2dGljTFFhQlhka2RLaWFWY3k5emwwUzRlYmhYZGZJZUdVZ25HN1NoQS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSlBoTkhZeUJMNWt0U09KUjBWVEMzUHdTVU1QYm5kdVZrdE5vUjNHcWMwSlJZdldUNXpHaWFuQVZIZ3REYTFMRWZGclBkZnA3M2NvNkEvMTMy',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSUtSbzFCMVFoQnRpY1pRNkcwOXM1azNxSkpEcXlkdExyWTI1U3gxM096WE9iVXZybzliY3RuVlV6Wk5iaWFkZ0ZkUk5pY0FoUGNaQzF2Zy8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi8wRFlSaWFsWWVQZUVNdkJodWpIYTNRZWZHRmJoa0dlTjdoS0hHSzRnMzRhdWhMdEFJUnZrZ2trb0FpYU96TFl5d3FlMXNrU25aamYwNVRRM0JreU16cUhnLzEzMg==',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9aWHZXaWNvR2tyVmlhZGZkRU1JVkY4UmtqRVJNMlR6dFVwQ2lhV2Z2VVVBTlZEc0hDazdCQlRZTmljY2liODdxRG95MVJOZ2ZOSEdUMjZpYWI0a1BUMkVqUmRZQS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21taGVhZC9vbWljcEc3RVdmbEw0dmlhYUdhaWNQaWNORUJrSkRkYzk3NWI2eUNYN3pyS1NmVS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUlVa3I5SDNxb0lJQXJodENmMXp5ZXVoYzhpY1J0VGUxY1JuMUkwT2R0WVFmUEVKaWN2VVl0SzdFdDdXMEYwYU5CTDJYbDkwb3RZUjFyQS8xMzI=',
          ],
          btn: '提问',
          joined: true,
        })
      } else if (nv === '#征集') {
        card = Object.assign(card, {
          type: '#征集',
          title: '生活中的那些“小确丧”时刻',
          cover: './img/3.png',
          likes: [
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi92Y0ZGZTlLZzJRMFlmd1F1YWliN3NIdXhsT2gzaHVzazR1ZEJPclRkUXYweWhDUWs2dGljTFFhQlhka2RLaWFWY3k5emwwUzRlYmhYZGZJZUdVZ25HN1NoQS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi8wRFlSaWFsWWVQZUVNdkJodWpIYTNRZWZHRmJoa0dlTjdoS0hHSzRnMzRhdWhMdEFJUnZrZ2trb0FpYU96TFl5d3FlMXNrU25aamYwNVRRM0JreU16cUhnLzEzMg==',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSlBoTkhZeUJMNWt0U09KUjBWVEMzUHdTVU1QYm5kdVZrdE5vUjNHcWMwSlJZdldUNXpHaWFuQVZIZ3REYTFMRWZGclBkZnA3M2NvNkEvMTMy',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUlJN2EwY2ZIYVpmTDNiQ2pYbzF5WDFURzNSaWMxU3ZEOUdpY3VYR2ljemN3bk9ham9IR2plZGJ3bDlKRHBhQlFhTkpnUEIwaFFkcUJiOFEvMTMy',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSUtSbzFCMVFoQnRpY1pRNkcwOXM1azNxSkpEcXlkdExyWTI1U3gxM096WE9iVXZybzliY3RuVlV6Wk5iaWFkZ0ZkUk5pY0FoUGNaQzF2Zy8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9aWHZXaWNvR2tyVmlhZGZkRU1JVkY4UmtqRVJNMlR6dFVwQ2lhV2Z2VVVBTlZEc0hDazdCQlRZTmljY2liODdxRG95MVJOZ2ZOSEdUMjZpYWI0a1BUMkVqUmRZQS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cCUzQS8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBSNXI2eG53MWJXVm1rNno4NUNMRmpjMUhmOUV3Y1NhVkFQcWliZ3ljZmFYYnF2ZW90T2RCVVhNeWtkcGFjY0hOWGZtV1lOcG92OHVnLzEzMg==',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21taGVhZC9vbWljcEc3RVdmbEw0dmlhYUdhaWNQaWNORUJrSkRkYzk3NWI2eUNYN3pyS1NmVS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUlVa3I5SDNxb0lJQXJodENmMXp5ZXVoYzhpY1J0VGUxY1JuMUkwT2R0WVFmUEVKaWN2VVl0SzdFdDdXMEYwYU5CTDJYbDkwb3RZUjFyQS8xMzI=',
          ],
          btn: '参与',
          joined: true,
        })
      } else if (nv === '#讨论') {
        card = Object.assign(card, {
          type: '#讨论',
          title: '你们的男同学是怎么准备女生节的？',
          cover: './img/2.png',
          likes: [
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi92Y0ZGZTlLZzJRMFlmd1F1YWliN3NIdXhsT2gzaHVzazR1ZEJPclRkUXYweWhDUWs2dGljTFFhQlhka2RLaWFWY3k5emwwUzRlYmhYZGZJZUdVZ25HN1NoQS8xMzI=',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cCUzQS8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBSNXI2eG53MWJXVm1rNno4NUNMRmpjMUhmOUV3Y1NhVkFQcWliZ3ljZmFYYnF2ZW90T2RCVVhNeWtkcGFjY0hOWGZtV1lOcG92OHVnLzEzMg==',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUlJN2EwY2ZIYVpmTDNiQ2pYbzF5WDFURzNSaWMxU3ZEOUdpY3VYR2ljemN3bk9ham9IR2plZGJ3bDlKRHBhQlFhTkpnUEIwaFFkcUJiOFEvMTMy',
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSlBoTkhZeUJMNWt0U09KUjBWVEMzUHdTVU1QYm5kdVZrdE5vUjNHcWMwSlJZdldUNXpHaWFuQVZIZ3REYTFMRWZGclBkZnA3M2NvNkEvMTMy',
          ],
          btn: '表态',
          joined: false,
        })
      }
      this.setData({
        card: card,
      })
    },
  },
  data: {
    card: null,
  },
  attached() {},
  methods: {},
})
