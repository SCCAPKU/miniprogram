var app = getApp()
 Page({
data: { 
 fostered_catlist: [
{ name:"二哈"},
{ name:"香波"},
{ name:"鸡腿"},
{ name:"水井"},
{ name:"山竹"},
{ name:"白樱"},
{ name:"大奶牛"},
{ name:"帖木儿"},
{ name:"大福"},
{ name:"安宝"},
{ name:"吹雪"},
{ name:"面粉"},
{ name:"楚天阔"},
{ name:"四哥"},
{ name:"战车"},
{ name:"唐璜"},
{ name:"山茶"},
{ name:"美学"},
{ name:"小黄鸭"},
{ name:"杰希"},
{ name:"尘尘"},
{ name:"晓雾"},
{ name:"丑橘"},
{ name:"芬达"},
{ name:"果冻"},
{ name:"玛奇朵"},
{ name:"蛋粉"},
{ name:"桂圆"},
{ name:"土谦"},
{ name:"山岚"},
{ name:"车桑子"},
{ name:"畅蠢"},
{ name:"茄子"},
{ name:"卤蛋"},
{ name:"小蜜蜂"},
{ name:"卡祖笛"},
{ name:"sin"},
{ name:"cos"},
{ name:"金银朱"},
{ name:"金平糖"},
{ name:"金闪闪"},
{ name:"西瓜"},
{ name:"木糖"},
{ name:"乌糖"},
{ name:"嘤宝"},
{ name:"白露"},
{ name:"雪媚娘"},
{ name:"小一"},
{ name:"雪梨"},
{ name:"泡泡"},
{ name:"咖喱"},
{ name:"鹅黄"},
{ name:"小米"},
{ name:"花彩彩"},
{ name:"甜橙"},
{ name:"花木兰"},
{ name:"七七"},
],
 unknown_catlist: [
{ name:"豆干"},
{ name:"小礼"},
{ name:"毛巾"},
{ name:"八筒"},
{ name:"鱼豆腐"},
{ name:"李美人"},
{ name:"牛黄"},
{ name:"桂香"},
{ name:"花袭人"},
{ name:"白面"},
{ name:"蒙牛"},
{ name:"鸢尾"},
{ name:"小芝麻"},
{ name:"白泽"},
{ name:"雪竹"},
{ name:"姜撞奶"},
{ name:"芝麻糊"},
{ name:"花灵灵"},
{ name:"秋云"},
{ name:"英仙"},
{ name:"甜椒"},
{ name:"三姐"},
{ name:"双皮奶"},
{ name:"夕立"},
{ name:"寿司"},
{ name:"六姐"},
{ name:"拂尘"},
{ name:"谦儿"},
],
 dead_catlist: [
{ name:"小菊"},
{ name:"左斑"},
{ name:"滑板爸"},
{ name:"出竹"},
{ name:"第谷"},
{ name:"牛牛"},
{ name:"奶酪"},
{ name:"藕白"},
{ name:"小雨点"},
{ name:"青天"},
{ name:"黄埔"},
{ name:"小狐狸"},
{ name:"锦缎"},
{ name:"栗子"},
{ name:"安吉"},
{ name:"半糖"},
{ name:"英华"},
],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    navbar: ['在校', '毕业', '休学', '喵星'],
    currentTab: 0,
  },
   navbarTap: function (e) {
     this.setData({
       currentTab: e.currentTarget.dataset.idx
     })
   },

   iconType: [
     'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
   ],

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

  // 转发到朋友圈
  onShareTimeline: function (res) {
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
   },
   copyTBL: function (e) {
     var self = this;
     wx.setClipboardData({
       data: '北大猫协',//需要复制的内容
       success: function (res) {
         // self.setData({copyTip:true}),

       }
     })
   },

})

