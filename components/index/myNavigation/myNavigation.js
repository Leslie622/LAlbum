// components/index/myNavigation/myNavigation.js
Component({

  data: {
    statusBarHeight:""
  },
  lifetimes: {
    ready: function() {
    //   var query = this.createSelectorQuery();
    //   // query.select('.aaa').context(function (res) {
    //   //   console.log(res)
    //   // }).exec();
    //   query.select('.aaa').fields({
    //     computedStyle: ['margin', 'backgroundColor'],
    //   }, function (res) {
    //     console.log(res);
    //   }).exec()
      let sysinfo = wx.getSystemInfoSync();
      this.setData({
        statusBarHeight:sysinfo.statusBarHeight
      })
      
    }
  },


})