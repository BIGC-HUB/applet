const util = require('../../packages/bigsea.js')
const app = getApp()
Component({
  options: {
    addGlobalClass: false,
  },
  properties: {
    theme: {
      type: String,
    },
  },
  observers: {},
  data: {
    userInfo: {
      name: '露姐',
      isAdmin: true,
      head:
        'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
    },
    listFeatured: [
      {
        user: {
          name: '露姐',
          isAdmin: true,
          head:
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
        },
        text: '两年老员工报以礼貌的微笑~',
        imgs: ['http://statics01.qingmang.mobi/FuY-Srn-SOeREBBxzcdQ1QL0LEHx'],
        like: [
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcWVPWTZDQUdRb1l3bFlUZklZNExCdFh6cHFDcmljNEIzMkU2bUw0dE15WE9zdWlidWlidmV0SHRkQWljYXBQMUR1M1BNY09BWnZVRVZHSFEvMTMy',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cCUzQS8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBSNXI2eG53MWJXVm1rNno4NUNMRmpjMUhmOUV3Y1NhVkFQcWliZ3ljZmFYYnF2ZW90T2RCVVhNeWtkcGFjY0hOWGZtV1lOcG92OHVnLzEzMg==',
        ],
        likePerson: 14,
        likeHeart: true,
        comments: [],
      },
      {
        user: {
          name: '渔舟唱晚',
          head:
            'http://statics03.qingmang.mobi/image/proxy/aHR0cCUzQS8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBSNXI2eG53MWJXVm1rNno4NUNMRmpjMUhmOUV3Y1NhVkFQcWliZ3ljZmFYYnF2ZW90T2RCVVhNeWtkcGFjY0hOWGZtV1lOcG92OHVnLzEzMg==',
        },
        text:
          '两年老员工报前几天无意中看到的，立马关注，如同发现了新大陆，一有空就阅读学习，收获满满。同时有感于“做这个时代的知识守护者，解决年轻人在成长路上会遇到的问题，也许就是我们的使命”，以后条件允许一定做个师者，传道受业解惑。以礼貌的微笑~',
        imgs: [
          'http://statics01.qingmang.mobi/FuY-Srn-SOeREBBxzcdQ1QL0LEHx',
          'http://statics01.qingmang.mobi/FjuLuRCxNtV06IA7yCS6MkmilPJU',
          'http://qiniuimg.qingmang.mobi/image/orion/3e0d6732a1f7bc273f2f4b6c7ceea3b4_945_628.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/06a7b91f1103407fdb0bfeb7994d37d1_1080_703.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/aa08370f4fcf79e7ca097946d36eec77_900_500.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/105f710672bc2d2c055008a7a1c779f7_1024_768.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/6c2e0a49f0912224d0047dbbcb5752b9_640_396.jpeg',
        ],
        like: [
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cCUzQS8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBSNXI2eG53MWJXVm1rNno4NUNMRmpjMUhmOUV3Y1NhVkFQcWliZ3ljZmFYYnF2ZW90T2RCVVhNeWtkcGFjY0hOWGZtV1lOcG92OHVnLzEzMg==',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcWVPWTZDQUdRb1l3bFlUZklZNExCdFh6cHFDcmljNEIzMkU2bUw0dE15WE9zdWlidWlidmV0SHRkQWljYXBQMUR1M1BNY09BWnZVRVZHSFEvMTMy',
        ],
        likePerson: 3,
        likeHeart: true,
        comments: [
          {
            who: {
              name: '露姐',
              isAdmin: true,
            },
            text: '做最酷的年轻人',
          },
          {
            who: {
              name: '渔舟唱晚 ',
            },
            at: {
              name: '露姐',
              isAdmin: true,
            },
            text: '也给轻芒也打',
          },
          {
            who: {
              name: '露姐',
              isAdmin: true,
            },
            at: {
              name: 'dameng',
            },
            text:
              '嗯 这个话题来眠的夜晚，似乎我们都是不同程度的『麻烦制造者』。当然学校也里有很多让人觉得麻烦的事：为什么宿舍要断电断网、为什么大学还要早读、为什么不允许我们自由表达？ 这是一个长期讨论的话题，欢迎在留言里写下任何你的想法或思考。我们会探索不同的呈现形式，把这些内容呈现出来，比如：表情包、四格漫画、插图等。 #壹周编辑部 ',
          },
          {
            who: {
              name: 'dameng',
            },
            text: '嗯，也给轻芒也打电话',
          },
        ],
      },
    ],
    listNew: [
      {
        user: {
          name: '大海',
          isMine: true,
          head:
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUlJN2EwY2ZIYVpmTDNiQ2pYbzF5WDFURzNSaWMxU3ZEOUdpY3VYR2ljemN3bk9ham9IR2plZGJ3bDlKRHBhQlFhTkpnUEIwaFFkcUJiOFEvMTMy',
        },
        text: '学校的体育馆为啥不给用？留着发霉吗？',
        imgs: [
          'http://statics01.qingmang.mobi/FjuLuRCxNtV06IA7yCS6MkmilPJU',
          'http://qiniuimg.qingmang.mobi/image/orion/aa08370f4fcf79e7ca097946d36eec77_900_500.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/105f710672bc2d2c055008a7a1c779f7_1024_768.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/6c2e0a49f0912224d0047dbbcb5752b9_640_396.jpeg',
        ],
        like: [
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cCUzQS8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBSNXI2eG53MWJXVm1rNno4NUNMRmpjMUhmOUV3Y1NhVkFQcWliZ3ljZmFYYnF2ZW90T2RCVVhNeWtkcGFjY0hOWGZtV1lOcG92OHVnLzEzMg==',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcWVPWTZDQUdRb1l3bFlUZklZNExCdFh6cHFDcmljNEIzMkU2bUw0dE15WE9zdWlidWlidmV0SHRkQWljYXBQMUR1M1BNY09BWnZVRVZHSFEvMTMy',
        ],
        likePerson: 3,
        likeHeart: false,
        comments: [
          {
            who: {
              name: 'dameng',
            },
            text: '一群年轻人的热情',
          },
          {
            who: {
              name: '渔舟唱晚 ',
            },
            at: {
              name: 'dameng',
            },
            text:
              '深有同感！特别是抢课的时间安排在期末考试的前几天......影响 考试心情不止一点点.....',
          },
        ],
      },
      {
        user: {
          name: '学习使我快乐（备考中',
          head:
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcWVPWTZDQUdRb1l3bFlUZklZNExCdFh6cHFDcmljNEIzMkU2bUw0dE15WE9zdWlidWlidmV0SHRkQWljYXBQMUR1M1BNY09BWnZVRVZHSFEvMTMy',
        },
        text:
          '想到被两早一晚支配的恐惧 零下二十多度的十二月早上六点起床 去打一套太极拳 然后集合回教室上半个点早自习 晚上七点到八点半晚自习 回寝室的时候伴着漫天呛人的雾霾 说不下去了π_π都是眼泪…',
        imgs: [],
        like: [
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
        ],
        likePerson: 1,
        likeHeart: true,
        comments: [
          {
            who: {
              name: 'dameng',
            },
            text: '早起一点就好了',
          },
        ],
      },
      {
        user: {
          name: '清清還在。',
          head:
            'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSlBoTkhZeUJMNWt0U09KUjBWVEMzUHdTVU1QYm5kdVZrdE5vUjNHcWMwSlJZdldUNXpHaWFuQVZIZ3REYTFMRWZGclBkZnA3M2NvNkEvMTMy',
        },
        text: '现在大部分大学都在山脚下，只有不分老牌学校在市里，主要还是没地',
        imgs: [
          'http://qiniuimg.qingmang.mobi/image/orion/06a7b91f1103407fdb0bfeb7994d37d1_1080_703.jpeg?imageView2/2/w/750',
          'http://qiniuimg.qingmang.mobi/image/orion/aa08370f4fcf79e7ca097946d36eec77_900_500.jpeg?imageView2/2/w/750',
        ],
        like: [
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUlJN2EwY2ZIYVpmTDNiQ2pYbzF5WDFURzNSaWMxU3ZEOUdpY3VYR2ljemN3bk9ham9IR2plZGJ3bDlKRHBhQlFhTkpnUEIwaFFkcUJiOFEvMTMy',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSlBoTkhZeUJMNWt0U09KUjBWVEMzUHdTVU1QYm5kdVZrdE5vUjNHcWMwSlJZdldUNXpHaWFuQVZIZ3REYTFMRWZGclBkZnA3M2NvNkEvMTMy',
          'http://statics03.qingmang.mobi/image/proxy/aHR0cHMlM0EvL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9EWUFJT2dxODNlcEd4Y29SaWI5aWE3SGdXNWN3akdEbEZrdDhUVExxRmxKaHJtMm5oTmJaQUpkdUMzMlJpYjV1M29RTHBHWlEzSXMyQ09weFh3aWNjUmdNNEEvMTMy',
        ],
        likePerson: 9,
        likeHeart: false,
        comments: [],
      },
    ],
  },
  attached() {},
  methods: {
    bindImg(event) {
      let data = event.currentTarget.dataset
      wx.previewImage({
        current: data.src, // 当前显示图片的http链接
        urls: data.imgs, // 需要预览的图片http链接列表
      })
    },
    bindMore(event) {
      const i = event.currentTarget.dataset.i
      const typeNew = event.currentTarget.dataset.new
      const isAdmin = this.data.userInfo.isAdmin
      const e = typeNew ? this.data.listNew[i] : this.data.listFeatured[i]
      const itemList = ['删除']
      if (isAdmin) {
        itemList.push(typeNew ? '精选' : '取消精选')
        itemList.push('禁言')
      }
      wx.showActionSheet({
        itemList: itemList,
        success: (res) => {
          if (res.tapIndex === 0) {
            if (typeNew) {
              // 最新留言
              this.data.listNew.splice(i, 1)
              this.setData({
                listNew: this.data.listNew,
              })
            } else {
              // 精选留言
              this.data.listFeatured.splice(i, 1)
              this.setData({
                listFeatured: this.data.listFeatured,
              })
            }
            util.tip('删除成功')
          } else if (res.tapIndex === 1) {
            if (typeNew) {
              util.tip('精选成功')
            } else {
              util.tip('取消精选成功')
            }
          } else if (res.tapIndex === 2) {
            util.tip('已禁言')
          }
        },
      })
    },
    bindComment(event) {
      const i = event.currentTarget.dataset.i
      const i2 = event.currentTarget.dataset.i2
      const typeNew = event.currentTarget.dataset.new
      const e = typeNew ? this.data.listNew[i] : this.data.listFeatured[i]
      // 一级评论
      let name = e.user.name
      if (e.user.isAdmin) {
        name = name + '（发起人）'
      }
      // 二级评论
      if (util.has(e, `comments[${i2}].who.name`)) {
        name = e.comments[i2].who.name
        if (e.comments[i2].who.isAdmin) {
          name = name + '（发起人）'
        }
      }
      util.path('/pages/group/groupComment', {
        at: name
      })
    },
    initLike(like, type) {
      let head = this.data.userInfo.head
      let i = like.findIndex((e) => e === head)
      if (type === 'add') {
        if (i === -1) {
          like.push(head)
        }
      } else if (type === 'del') {
        if (i !== -1) {
          like.splice(i, 1)
        }
      }
      return like
    },
    bindHeart(event) {
      const i = event.currentTarget.dataset.i
      const typeNew = event.currentTarget.dataset.new
      const e = typeNew ? this.data.listNew[i] : this.data.listFeatured[i]
      if (e.likeHeart) {
        e.likePerson = e.likePerson - 1
        e.like = this.initLike(e.like, 'del')
      } else {
        e.likePerson = e.likePerson + 1
        e.like = this.initLike(e.like, 'add')
      }
      e.likeHeart = !e.likeHeart
      if (typeNew) {
        this.setData({
          listNew: this.data.listNew,
        })
      } else {
        this.setData({
          listFeatured: this.data.listFeatured,
        })
      }
    },
  },
})
