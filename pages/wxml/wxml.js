// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"王斌",
    learn:"miniProgram",
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:40,
    movies:['星际穿越','盗梦空间','幻海迷航','盗墓笔记']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function() {
    setInterval(() => {
      console.log("加载中")
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },

  handleSwitchColor(){
    // if(this.data.isActive == true){
    //   this.setData({
    //     isActive:false
    //   })
    // }else{
    //   this.setData({
    //     isActive: true
    //   })
    // }
    this.setData({
      isActive:!this.data.isActive
    })
  },

  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },

  handleIncreScore(){
    this.setData({
      score:this.data.score += 10
    })
    console.log(this.data.score)
  }
})