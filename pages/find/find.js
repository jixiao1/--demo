// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    user: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //  获取当前的位置
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log("res 当前的位置信息", res);
        that.setData({
          user: res
        })
        // const latitude = res.latitude
        // const longitude = res.longitude
        // const speed = res.speed
        // const accuracy = res.accuracy
      }
     })
  },
  goHere () {
    console.log("去这里。。。");
    let { user } = this.data
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        wx.openLocation({
          latitude: user.latitude,
          longitude: user.longitude,
          scale: 20,
          name: '后瑞地铁站',
          address: '深圳市宝安区后瑞地铁站'
        })
      }
     })
  },
  // 拨打电话的函数
  callPhone () {
    wx.makePhoneCall({
      phoneNumber: '15728875102' //仅为示例，并非真实的电话号码
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const app = getApp()
    this.setData({
      isShow: app.globalData.hasLocal
    })
    // wx.getSetting({
    //   withSubscriptions: true,
    //   success (res) {
    //     console.log("用户授权",res.authSetting)
    //     // console.log(res.subscriptionsSetting)
    //     if (!res.authSetting['scope.userLocation']) {
    //       wx.showToast({
    //         title: '当前页面需要定位',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     }
    //   }
    // })
  },
  tapLocaltion () {
    // openSetting只有在点击事件的时候才能触发
    console.log("点击");
    wx.openSetting({
      success (res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})