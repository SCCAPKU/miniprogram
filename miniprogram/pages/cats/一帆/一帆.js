Page({ 
 data: {
catname:"一帆",
 catitems:[ 
{category:"毛色",
 content:" 奶牛",},
{category:"性别",
 content:" 公",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"外貌",
 content:" 无情的警长",},
{category:"性格",
 content:" 怕人 安全距离1m以内",},
{category:"第一次被目击时间",
 content:" 2017冬",},
{category:"关系",
 content:" 杰希之子",},
{category:"编写日期",
 content:" 2020-05-04",},
], 
relationship:[{ rela:"杰希"},
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

