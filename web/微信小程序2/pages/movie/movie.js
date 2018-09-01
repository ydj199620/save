// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    focus:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      }, // 默认值
      success: res => {
        this.setData({
          listData00: this.getData(res.data, "正在上映"),
        })
      }
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      }, // 默认值
      success: res => {
        this.setData({
          listData01: this.getData(res.data, "即将上映")
        })
      }
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json'
      }, // 默认值
      success: res => {
        this.setData({
          listData02: this.getData(res.data, "排行榜")
        })
      }
    })
  },
  getData: function(data, title) {
    var subjects = data.subjects;
    var arr = [];
    arr.push(subjects[0], subjects[1], subjects[2]);
    return {
      movies: arr,
      title: title
    }
  },

  // 更多
  goMore: function(event) {
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: 'movie-list/movie-list?id=' + title,
    })
  },
  // 详情
  goDetail: function(event) {
    var idName = event.currentTarget.dataset.ids;
    var dyName = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: 'movie-xq/movie-xq?id=' + dyName + '&movieid=' + idName,
    })
  },
  //聚焦时
  bindfocus: function (event){
    this.setData({
      focus:false
    })
  },
  //不聚焦时
  bindblur: function (event) {
    this.setData({
      focus: true,
      searchValue: event.detail.value
    })
  },
  //点击搜索时
  search:function(event){
    if (this.data.searchValue !=''){
     var url = 'https://douban.uieee.com/v2/movie/search?q=' + this.data.searchValue
     wx.request({
       url: url, //仅为示例，并非真实的接口地址
       header: {
         'content-type': 'json'
       }, // 默认值
       success: res => {
         this.setData({
           listData: res.data.subjects,
           focus:false
         })
       }
     })
   }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})