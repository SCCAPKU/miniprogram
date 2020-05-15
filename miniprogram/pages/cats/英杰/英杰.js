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
{category:"性格",
 content:" 薛定谔亲人",},
{category:"第一次目击",
 content:" 2017冬",},
{category:"外貌",
 content:" 好看的长毛奶牛 白多 小胡子",},
{category:"关系",
 content:" 杰希之女",},

], 
relationship:[{ rela:"杰希"},
], 
nums:[
{ num: 1 },
{ num: 2 },
{ num: 3 },
],
audioArr: [
{
 src: 'https://pku-lostangel.oss-cn-beijing.aliyuncs.com/%E8%8B%B1%E6%9D%B01.m4a',
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

