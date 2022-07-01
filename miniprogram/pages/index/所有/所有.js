var app = getApp()
 Page({
data: { 
 catlist: [
{ name:"麻糖"},{ name:"麻薯"},{ name:"黑米粥"},{ name:"云雾"},{ name:"竹妹"},{ name:"秋梨膏"},{ name:"丛云"},{ name:"灰灰"},{ name:"龟苓膏"},{ name:"岭北"},{ name:"漠北"},{ name:"麈尾"},{ name:"蒜香鸡"},{ name:"银桂"},{ name:"云苓"},{ name:"大盘鸡"},{ name:"砂糖橘"},{ name:"姜丝鸭"},{ name:"大哥"},{ name:"小尾巴"},{ name:"唢呐"},{ name:"咸蛋黄"},{ name:"小橘子"},{ name:"黄大孙女"},{ name:"冬笋"},{ name:"杜若"},{ name:"虾球"},{ name:"夕云"},{ name:"虾滑"},{ name:"二姐夫"},{ name:"二姐"},{ name:"五哥"},{ name:"小美"},{ name:"左智"},{ name:"路易"},{ name:"夕照"},{ name:"鸡翅"},{ name:"黄小孙女"},{ name:"鸡米花"},{ name:"凤爪"},{ name:"金桂"},{ name:"奶油鸡"},{ name:"黄连"},{ name:"鸡柳"},{ name:"英杰"},{ name:"一帆"},{ name:"墨方"},{ name:"墨可"},{ name:"墨斜"},{ name:"仙草"},{ name:"太郎"},{ name:"琉青"},{ name:"莫可"},{ name:"冒菜妈"},{ name:"大威"},{ name:"焦糖"},{ name:"花洒"},{ name:"麒麟"},{ name:"山花"},{ name:"野分"},{ name:"爱智"},{ name:"碎月"},{ name:"北极贝"},{ name:"德尔菲"},{ name:"雷雨"},{ name:"藕带"},{ name:"泡菜"},{ name:"哈娜"},{ name:"绯云"},{ name:"薏米"},{ name:"棉花糖"},{ name:"小钒"},{ name:"藕黑"},{ name:"茶叶蛋"},{ name:"雪风"},{ name:"深雪"},{ name:"朝雾"},{ name:"迷雾"},{ name:"八二"},{ name:"于连"},
    ],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0
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
    if(e.detail.value) 
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }
)

