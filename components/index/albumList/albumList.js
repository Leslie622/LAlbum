import {
  request
} from "../../../request/index"

Component({
  data: {
    cateList: []
  },
  created() {
    request({
      url: "/blog/category/query?user_id=8"
    }).then(res => {
      let cateList = res.data.data
      let catelength = cateList.length
      for (let i = 0; i < catelength; i++) {
        request({
          url: `/blog/query/withcategory?cate_id=${res.data.data[i].id}&pageNum=1&pageSize=1`
        }).then(res => {
          cateList[i].cover = res.data.data[0].cover
          this.setData({
            cateList: cateList
          })
        })
      }
    })
  }
})