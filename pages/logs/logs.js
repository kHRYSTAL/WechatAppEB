//logs.js
const util = require('../../utils/util.js')
Page({
  getInput: function(e) {
     this.text = e.detail.value;
  },

  postClick: function(e) {
    getApp().globalData.eventbus.post('key', this.text);
  }
})
