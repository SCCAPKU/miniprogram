var _id = "1";
const app = getApp();

Page({
  data: {
    cat: {},
    url: app.globalData.url,
    relatedCatsId: [],
    photoArray: [],
    audioArr: []
  },

  onLoad: function (options) {
    _id = options._id;
    app.mpServerless.db.collection('SCCAPKU').find({
      _id: _id,
    }, {}).then(res => {
      this.setData({
        cat: res.result[0],
      });
    }).then(res => {
      if (this.data.cat.addPhotoNumber > 0) {
        for (var photoNum = 1; photoNum <= this.data.cat.addPhotoNumber; ++photoNum) {
          this.setData({
            photoArray: this.data.photoArray.concat(photoNum),
          });
        }
      }
      if (this.data.cat.audioNumber > 0) {
        console.log(encodeURIComponent(this.data.cat.name))
        for (var audioNum = 1; audioNum <= this.data.cat.audioNumber; ++audioNum) {
          var audioTemp = {
            bl: false,
            src: this.data.url + encodeURIComponent(this.data.cat.name) + audioNum.toString() + ".m4a"
          }
          this.setData({
            audioArr: this.data.audioArr.concat(audioTemp),
          });
        }
      }
      if (this.data.cat.relatedCats) {
        var relatedCats = this.data.cat.relatedCats.split(" ")
        for (var i = 0; i < relatedCats.length; ++i) {
          app.mpServerless.db.collection('SCCAPKU').find({
            name: relatedCats[i],
          }, {}).then(res => {
            this.setData({
              relatedCatsId: this.data.relatedCatsId.concat(res.result),
            });
          })
        }
        this.setData({
          relatedCats: relatedCats,
        });
      }
    });
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


  previewImage: function (e) {
    let that = this;
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src]
    })
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.cat.name,
      path: '/pages/catDetail/catDetail?_id=' + this.data.cat._id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  onShareTimeline: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.cat.name,
      path: '/pages/catDetail/catDetail?_id=' + this.data.cat._id,
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