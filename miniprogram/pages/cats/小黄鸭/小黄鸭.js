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
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次目击",
 content:" 2018秋",},
{category:"外貌",
 content:" 非常可爱的橘白",},
{category:"关系",
 content:" 与杰希一家关系好，经常跟云雾打架（还打不赢）",},

], 
relationship:[{ rela:"杰希"},
], 
nums:[
],
audioArr: [
{
 src: 'https://pku-lostangel.oss-cn-beijing.aliyuncs.com/%E5%B0%8F%E9%BB%84%E9%B8%AD1.m4a',
bl: false
},
{
 src: 'https://pku-lostangel.oss-cn-beijing.aliyuncs.com/%E5%B0%8F%E9%BB%84%E9%B8%AD2.m4a',
bl: false
},
],
  audKey: '', 
},

  //音频播放  
  audioPlay(e) {
    var that = this,
      id = e.currentTarget.dataset.id,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr;

    //设置状态
    audioArr.forEach((v, i, array) => {
      v.bl = false;
      if (i == key) {
        v.bl = true;
      }
    })
    that.setData({
      audioArr: audioArr,
      audKey: key,
    })

    myaudio.autoplay = true;
    var audKey = that.data.audKey,
      vidSrc = audioArr[audKey].src;
    myaudio.src = vidSrc;

    myaudio.play();

    //开始监听
    myaudio.onPlay(() => {
      console.log('开始播放');
    })

    //结束监听
    myaudio.onEnded(() => {
      console.log('自动播放完毕');
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
    })

    //错误回调
    myaudio.onError((err) => {
      console.log(err);
      audioArr[key].bl = false;
      that.setData({
        audioArr: audioArr,
      })
      return
    })

  },

  // 音频停止
  audioStop(e) {
    var that = this,
      key = e.currentTarget.dataset.key,
      audioArr = that.data.audioArr;
    //设置状态
    audioArr.forEach((v, i, array) => {
      v.bl = false;
    })
    that.setData({
      audioArr: audioArr
    })

    myaudio.stop();

    //停止监听
    myaudio.onStop(() => {
      console.log('停止播放');
    })
  }, 

  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.catname,
      path: '/pages/index/index?pageId='+this.data.catname,
      // imageUrl: 'https://course.pku.edu.cn/bbcswebdav/users/1600011084/猫协小程序图片/'+this.data.catname+'.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})
//创建audio控件
const myaudio = wx.createInnerAudioContext(); 

