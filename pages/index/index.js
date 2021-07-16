// index.js
// 获取应用实例
const app = getApp()
let img = require('../../utils/img')
let initList = [
  {id: 1, name: '', src: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/138623/35/6734/118257/5f462a7dE5aad1d9d/dd3884e19bb6cc59.jpg!q70.dpg.webp'},
      {id: 2, name: '', src: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/138623/35/6734/118257/5f462a7dE5aad1d9d/dd3884e19bb6cc59.jpg!q70.dpg.webp'},
      {id: 3, name: '', src: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/138623/35/6734/118257/5f462a7dE5aad1d9d/dd3884e19bb6cc59.jpg!q70.dpg.webp'},
      {id: 3, name: '', src: '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/138623/35/6734/118257/5f462a7dE5aad1d9d/dd3884e19bb6cc59.jpg!q70.dpg.webp'}
]
Page({
  data: {
    imgArr: [
      { id: 1, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/167727/16/12273/102253/6053aa7aE63df02b7/3d69eb7befd57ff0.jpg!cr_1125x449_0_166!q70.jpg.dpg'},
      { id: 2, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/167727/16/12273/102253/6053aa7aE63df02b7/3d69eb7befd57ff0.jpg!cr_1125x449_0_166!q70.jpg.dpg'},
      { id: 3, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/167727/16/12273/102253/6053aa7aE63df02b7/3d69eb7befd57ff0.jpg!cr_1125x449_0_166!q70.jpg.dpg'}
    ],
    tipArr: [
      { id: 1, place: '智能马桶' },
      { id: 2, place: '小米手机' },
      { id: 3, place: '华为平板' },
      { id: 4, place: '苹果电脑' }
    ],
    date: '2021-6-19',
    date2: '',
    setIndex: 0,
    activityArr: [
      { id: 1, label: '展会活动' },
      { id: 2, label: '促销活动' },
      { id: 3, label: '节日活动' },
      { id: 4, label: '答谢活动' }
    ],
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    list: initList
  },
  onload () {
    console.log("index onload");
  },
    // 表示当前组件出现在前台时
    onShow () {
      let { tipArr } = this.data;
      let index = Math.floor(Math.random()*4);
      this.setData({pla: tipArr[index].place})
      this.caldata()
    },
    onReady () {
      console.log("index onReady")
    },
    onHide () {
      console.log("index onHide")
    },
    bindPickerChange (e) {
      console.log("e",e);
      this.setData({
        setIndex: parseInt(e.detail.value)
      })
    },
    bindDateChange (e) {
      console.log("e====", e)
      // this.setData({
      //   date: e.detail.value
      // })
      this.caldata()
    },
    caldata () {
      let s = Date.now()% (1000*60*60*24);
      console.log("s ===", s);
      let bol = s > 1000*60*60*12
      console.log("bol ===", bol)
      let arr = this.data.date.split('-')
      this.setData({date2: arr[2]+(s?'日下午':'日上午')})
    },
    bindRegionChange (e) {
      console.log("bindRegionChange ====", e)
      this.setData({
        region: e.detail.value
      })
    },
    // 监听用户的下拉刷新
    onPullDownRefresh () {
       // 重新接口
    // 部分数据进行重置
      setTimeout(() => {
        // 数据重置
        this.setData({list: initList})
        wx.stopPullDownRefresh()
      }, 3000)
    },
    //  // 触底分页加载：直接可用
    onReachBottom() {
      this.setData({ list: [...this.data.list, ...initList]})
    },
    // 微信转发
    onShareAppMessage() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: '你真牛逼'
          })
        }, 2000)
      })
      return {
        title: '你真牛逼',
        path: '/page/index/index',
        promise,
        mageUrl: "https://www.baidu.com/img/flexible/logo/pc/result.png"
      }
    }
})
