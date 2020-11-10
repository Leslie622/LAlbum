Component({
  options: {
    addGlobalClass: true
  },
  data:{
    isClose:true
  },
  methods:{
    switchPopUp(){
      this.setData({
        isClose: !this.data.isClose
      })
    },
  }
})
