const app = getApp()
import {request} from "../../request/index"
Page({
  onLoad() {
    request({url: '/blog/category/query?user_id=8'}).then(result => {
      console.log(result);
    })
  }
})