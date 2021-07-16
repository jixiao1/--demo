// app.js
App({
  onLaunch() {
    console.log("global", this.globalData);
    let that = this
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("res", res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSetting({
      withSubscriptions: true,
      success (res) {
        console.log("用户授权",res.authSetting)
        // console.log(res.subscriptionsSetting)
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              // wx.startRecord()
              console.log("用户已经同意地理定位")
              that.globalData.hasLocal = true
            },
            fail () {
              console.log("用户没有同意地理定位");
            }
          })
        } else {
          that.globalData.hasLocal = true
        }
      }
    })
  },
  // 小程序中全局存储数据的
  globalData: {
    userInfo: null,
    hasLocal: false // 用户是否需要获取地理定位
  }
})
