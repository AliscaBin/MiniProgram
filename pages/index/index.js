// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    isShow:true
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

  handleincrement(event){
    console.log("------",event)
    this.setData({
      counter: this.data.counter+1
    })
  },

  handleItemClick(event){
    //获取单击事件传递的值
    const index = event.detail.index;
    const itemName = event.detail.itemName;

    console.log("单击事件：\nindex："+index+" itemName："+itemName)
  },

  handleIncrementCpn(){
    //1.获取组件对象   class / id
    const my_sel = this.selectComponent(".sel-class")
    console.log("---------",my_sel)
    //2.修改组件中数据的值（不合理）
    // my_sel.setData({
    //   counter:my_sel.data.counter + 10
    // })

    //3.通过方法对数据进行修改
    my_sel.incrementCounter(10)
  },

  handleChange(){
    this.setData({
isShow:!this.data.isShow
    })
  }
})