export const request=(params)=>{
  const baseUrl = "https://4xiaer.com:8001/land"
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl + params.url,
      success: (result) => {
        resolve(result)
      },
      fail: (res) => {
        reject(res)
      },
    });
  })
} 