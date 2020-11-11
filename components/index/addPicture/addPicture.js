Component({
  options: {
    addGlobalClass: true
  },
  data: {
    isClose: true
  },
  methods: {
    switchPopUp() {
      this.setData({
        isClose: !this.data.isClose
      })
    },
    chooseImage() {
      this.switchPopUp()
      setTimeout(() => {
        wx.chooseImage({
          success(res) {
            wx.navigateTo({
              url:'/pages/uploadPix/uploadPix',//跳转页面的路径，可带参数？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
              success:function(){}       
               
          })
          }
        })
      }, 200)
    },
    chooseVideo() {
      this.switchPopUp()
      wx.chooseVideo({
        success: (result) => {
          console.log(result);
        },
      })
    },
    chooseMessageImage() {
      this.switchPopUp()
      setTimeout(() => {
        wx.chooseMessageFile({
          type: "image",
          success(res) {
            console.log(res);
          }
        })
      }, 200)
    },
    chooseMessageVideo() {
      this.switchPopUp()
      setTimeout(() => {
        wx.chooseMessageFile({
          type: "video",
          success(res) {
            console.log(res);
          }
        })
      }, 200)
    }
  }
})