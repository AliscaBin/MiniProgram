//使用封装的request请求数据
//js路径/utils/Request.js 在app.js中导入
const app = getApp();//新建页面时，默认引入
const ajax = app.myRequest();//初始化一个request()实例
import request from '../../utils/network.js'
// import request1 from '../../utils/Request.js'

// const ajax = new request1();
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送网络请求
    //get请求不带参数 
    // wx:wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {console.log(res)},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    //get请求带参数，也可以拼接到url后面
    // wx:wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data: {
    //     type:'sell',
    //     page:1
    //   },
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {console.log(res)},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    //post请求携带参数
    // wx:wx.request({
    //   url: 'http://httpbin.org/post',
    //   data: {
    //     name:'wangbin',
    //     age:18
    //   },
    //   header: {},
    //   method: 'post',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {console.log(res)},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    //使用封装的request请求数据
    // ajax.getRequest('/get',{name:'wangbin1',age:19})
    // .then(
    //   (res)=>{
    //     console.log(res)
    //   }
    // ).catch(
    //   (err) => {
    //     console.log(err)
    // })

    request({ url:'http://123.207.32.32:8000/recommend'})
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    ajax.getRequest('/get',{
      name:'wangbin',age:18
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
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

  }
})