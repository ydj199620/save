// pages/movie/movie-list/movie-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showNavigationBarLoading();
    var title = options.id;
    var url = ''
    switch (title) {
      case "正在上映":
        url = 'https://douban.uieee.com/v2/movie/in_theaters';
        break;
      case "即将上映":
        url = 'https://douban.uieee.com/v2/movie/coming_soon';
        //moviesData = listData01.subjects
        break;
      case "排行榜":
        url = 'https://douban.uieee.com/v2/movie/top250';
        break;
    }
    console.log(url)
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      }, // 默认值
      success: res => {
        this.setData({
          listData: res.data.subjects
        })
      }
    })
    this.setData({
      title: title
    })
    wx.setNavigationBarTitle({
      title: title
    })
  },
  goDetail: function(event) {
    var idName = event.currentTarget.dataset.ids;
    var dyName = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../movie-xq/movie-xq?id=' + dyName + '&movieid=' + idName,
    })
  },
  onReachBottom: function() {
    var url = '';
    switch (this.data.title) {
      case "正在上映":
        url = 'https://douban.uieee.com/v2/movie/in_theaters?start=' + this.data.start * 20;
        break;
      case "即将上映":
        url = 'https://douban.uieee.com/v2/movie/coming_soon?start=' + this.data.start * 20;
        break;
      case "Top250":
        url = 'https://douban.uieee.com/v2/movie/top250?start=' + this.data.start * 20;
        break;
    }
    var start = this.data.start;
    var oldlisdata = this.data.listData;
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      }, // 默认值
      success: res => {
        this.setData({
          start: start + 1,
          listData: oldlisdata.concat(res.data.subjects)
        })
      }
    })
  },
  onReady:function(){
    wx.hideNavigationBarLoading()
  }
})