// pages/sweep/sweep.js
var app = getApp();
Page({
  data: {
    sweepBtn: "../../image/sweep_btn.png",
    gloabal: app.globalData
  },
  getGloadbal(){
    console.log(this.data.gloabal);
  },
  codeEvent: function () {
    // 允许从相机和相册扫码
    // wx.scanCode({
    //   success(res) {
    //     console.log(res)
    //   }
    // })

    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },
  onLoad: function () {

  },
})
