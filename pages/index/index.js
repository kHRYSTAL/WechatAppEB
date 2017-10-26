//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    app.globalData.eventbus.subscribe('key', function (data) {
      that.setData({
        motto: data
      });
    });
  },

  onUnload: function() {
    app.globalData.eventbus.unSubscribe('key')
  }
})
