//index.js

var cat_id = "1";

Page({
  data: {
    cat: {},
    markers: [],
    photoscr: "",
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    cat_id = options.cat_id;
    const that = this;
    console.log("加载detail页码");
    // console.log(cat_id);
    const db = wx.cloud.database();
    db.collection('cat').doc(cat_id).get().then(res => {
      console.log(res);

      this.setData({
        cat: res.data,
        photoscr: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/" + res.data.name + ".png"
      });
    }).then(res => {
      var number = 0
      for (var i in this.data.cat.markers) {
        var marker = [
          {
            iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/" + encodeURIComponent(this.data.cat.name) + ".png",
            latitude: this.data.cat.markers[i].latitude,
            longitude: this.data.cat.markers[i].longitude,
            width: 50,
            height: 50,
            id: number,
          }
        ]
        this.setData({
          markers: this.data.markers.concat(marker),
        });
        // console.log(this.data.markers)
        number++
      }
    });

  },

  includePointsOne() {
    const mapCtx = wx.createMapContext('map', this);
    mapCtx.includePoints({
      padding: [60, 36, 0, 36],
      points: this.data.markers,
      success: res => {
        console.log('includePoints success');
      },
      fail: err => {
        console.log('includePoints fail', err);
      }
    });
  },


  onShow: function (options) {

  },


  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.cat.name,
      path: '/pages/catDetail/catDetail?cat_id=' + this.data.cat._id,
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
      path: '/pages/catDetail/catDetail?cat_id=' + this.data.cat._id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  copyBili: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.cat.officialAccount['bili'],//需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },

  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: this.data.cat.officialAccount['miniprogram'],
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  naviToMini1: function (e) {
    wx.navigateToMiniProgram({
      appId: this.data.cat.officialAccount['miniprogram1'],
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})


