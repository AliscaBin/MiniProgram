// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:["流行","精选"]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      //取出index
      const index = event.currentTarget.dataset.index
      
      //修改currentIndex
      this.setData({
        currentIndex:index
      })

      //通知页面点击事件
      const itemName=event.currentTarget.dataset.item
      this.triggerEvent("itemClick",{index:index,itemName:itemName},{})
    }
  }
})
