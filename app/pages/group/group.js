const util = require('../../packages/bigsea.js')
Page({
  data: {
    card: {},
  },
  onLoad(option) {
    this.initContent(option.type || '#征集')
  },
  initContent(type) {
    let card = {}
    if (type === '#投票') {
    } else if (type === '#问作者') {
    } else if (type === '#征集') {
      card = Object.assign(card, {
        type: '#征集',
        title: '生活中的那些“小确丧”时刻',
        cover: '../group-card/img/3.png',
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
        joined: false,
        btn: '参与',
        content:
          '不知不觉又一年过去了。从零开始创业到现在，一周进步也经历了许多生死存亡的时刻，但我们还是会把这份事业坚持下去，去传播真正有价值的知识。 你有什么在一周进步想看的文章或是想说的话吗，欢迎在此留言^_^',
      })
    } else if (type === '#讨论') {
    }
    this.setData({
      card: card,
    })
  },
  bindToComment() {
    util.path('pages/group/groupComment')
  },
})
