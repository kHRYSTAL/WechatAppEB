//app.js
const eb = require('./library/eventbus.js')
App({
  globalData: {
    eventbus: eb.eventbus
  }
})