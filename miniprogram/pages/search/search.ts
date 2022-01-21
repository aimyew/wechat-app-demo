//search.js

var cu = require('../../utils/consoleUtil.js')
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad search');
  },
  doSout: function (event: any) {
    let msg = event.currentTarget.dataset.value
    if(msg == null) {
      cu.sout()
    } else {
      cu.soutMsg(msg)
    }
  }
})