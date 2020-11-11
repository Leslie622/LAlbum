// components/index/myNavigation/myNavigation.js
Component({
  properties: {
    navigationTitle: {
      type:String
    }
  },
  data: {
    statusBarHeight: ""
  },
  lifetimes: {
    ready: function () {
      let sysinfo = wx.getSystemInfoSync();
      this.setData({
        statusBarHeight: sysinfo.statusBarHeight
      })

    }
  },


})