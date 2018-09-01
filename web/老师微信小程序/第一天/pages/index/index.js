Page({
  data: {
    text: "This is page data."
  },
  goview: function () {
    wx.navigateTo({
      url: '../logs/logs?id=1'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }





})