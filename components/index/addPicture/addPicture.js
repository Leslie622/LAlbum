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
            console.log(res);
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