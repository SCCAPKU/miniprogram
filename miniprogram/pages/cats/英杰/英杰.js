Page({ 
 data: {
catname:"英杰",
 catitems:[ 
{category:"毛色",
 content:" 长毛奶牛",},
{category:"性别",
 content:" 母",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2018夏",},
{category:"外貌",
 content:" 好看的长毛奶牛 白多 小胡子",},
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次被目击时间",
 content:" 2017冬",},
{category:"编写日期",
 content:" 2019-11-15",},
], 
nums:[
{ num: 1 },
{ num: 2 },
]},
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/index/index?pageId='+this.data.catname,//这里在首页的地址后面添加我们需要传值的标识位pageId以及值123(pageId 这个名字你们可以自己随便乱取 如同一个变量名)
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})

