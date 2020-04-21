Page({ 
 data: {
catname:"小黄鸭",
 catitems:[ 
{category:"毛色",
 content:" 橘白",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 已绝育",},
{category:"绝育时间",
 content:" 2018-11-08",},
{category:"出生时间",
 content:" 2018-03(~)",},
{category:"外貌",
 content:" 非常可爱的橘白",},
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次被目击时间",
 content:" 2018秋",},
{category:"编写日期",
 content:" 2020-04-21",},
], 
nums:[
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
      path: '/pages/index/index?pageId='+this.data.catname,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})

