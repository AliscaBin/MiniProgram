// components/my-mult-slot/my-mult-slot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options: {
    multipleSlots: true
  },
  /**
   * 定义组件的配置选项
   * 
  * multipleSlots: 在使用多插槽时需要设置为true
  styleIsolation: 设置样式的隔离方式
   */

  /**
   * externalClass: [], 数组内些外部样式名称
   */

  /**
   * 可以监听properties / data的改变
   * 
   * observer: {
      counter: function (newValue) {
        //监听counter的改变，可传入新值为参数
      }
    }

   observers: {
      'numberA, numberB': function (numberA, numberB) {
        // 在 numberA 或者 numberB 被设置时，执行这个函数
        this.setData({
          sum: numberA + numberB
        })
      }
    }
   */

  /**
   * 组件中监听生命周期函数
   */

  //1.所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件在页面显示出来")
    },

    hide(){
      console.log("监听组件在页面隐藏起来")
    },

    resize(){
      console.log("监听页面尺寸的改变")
    }
  },

  //2.组件的生命周期
  lifetimes:{
    created(){
      console.log("组件被创建")
    },

    attached(){
      console.log("组件被添加到页面")
    },

    ready(){
      console.log("组件被渲染出来")
    },

    move(){
      console.log("组件被移动")
    },

    detached(){
      console.log("组件被移除")
    }
  }
})