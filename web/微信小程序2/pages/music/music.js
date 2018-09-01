// pages/music/music.js
var itemData = require('../data/music_data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/banner1.jpg',
      '../images/banner2.jpg',
      '../images/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    // 需要在wxml中swiper里添加属性例如：circular="{{circular}}"
    listData: ""
  },
  onLoad: function (options) {
    this.setData({
      listData: itemData.itemData
    })
  },
  setget:function(event){
    console.log(event)
    var musicId = event.currentTarget.dataset.music
    wx.navigateTo({
      url: 'music-detail/music-detail?id='+musicId,
    })
  }
})