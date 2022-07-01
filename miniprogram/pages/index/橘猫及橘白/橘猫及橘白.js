var app = getApp()
 Page({
data: { 
 catlist: [
{ name:"毛巾"},{ name:"大盘鸡"},{ name:"砂糖橘"},{ name:"姜丝鸭"},{ name:"大哥"},{ name:"第谷"},{ name:"小尾巴"},{ name:"牛牛"},{ name:"奶酪"},{ name:"黄埔"},{ name:"唢呐"},{ name:"帖木儿"},{ name:"咸蛋黄"},{ name:"小橘子"},{ name:"黄大孙女"},{ name:"冬笋"},{ name:"杜若"},{ name:"香波"},{ name:"虾球"},{ name:"夕云"},{ name:"虾滑"},{ name:"二姐夫"},{ name:"二姐"},{ name:"三姐"},{ name:"四哥"},{ name:"五哥"},
    ],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    url: app.globalData.url,
  },

  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  //转发跳转页面设置
  onLoad: function (options) {
    if (options.pageId) {
      
      wx.navigateTo({
        url: '/pages/cats/' + options.pageId + '/' + options.pageId,
      })
    }
  },

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if(e.detail.value) {
    
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }


})

