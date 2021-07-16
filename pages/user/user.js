// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {}
  },
  getuserinfo(res) {
    console.log("获取用户信息", res);
    this.setData({
      user: res.detail
    })
  },
  getMobile (res) {
    console.log("获取用户的手机号", res);
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  }
})