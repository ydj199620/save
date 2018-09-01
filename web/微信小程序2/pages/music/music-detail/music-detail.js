// pages/music/music-detail/music-detail.js
var initData = require('../../data/music_data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicflag: true,
    scflag: true,
    sctitle:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id
    this.setData({
      initData: initData.itemData[id] //没有这个属性就是添加
    })
    console.log(options.id)
  },
  playMusic: function() {
    var musicurl = this.data.initData.music
    if (this.data.musicflag) {
      wx.playBackgroundAudio({
        dataUrl: musicurl.url,
        title: musicurl.title,
        coverImgUrl: ''
      })
      this.setData({
        musicflag: false
      })
    } else {
      wx.pauseBackgroundAudio();
      this.setData({
        musicflag: true
      })
    }
  },
  playSc: function() {
    if (this.data.scflag) {
      this.setData({
        scflag: false,
        sctitle:'已收藏'
      })
    } else {
      this.setData({
        scflag: true,
        sctitle: '取消收藏'
      })
    }
    wx.showToast({
      title: this.data.sctitle,
      icon: 'success',
      duration: 1000,
      mask:true
    })
  },
  onshare:function(){
    wx.showActionSheet({
      itemList: ['微信', 'QQ', '微博'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})