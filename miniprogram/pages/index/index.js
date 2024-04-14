const app = getApp();

Page({
  data: {
    userId: undefined,
    fostered_cat: [],
    unknown_cat: [],
    dead_cat: [],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    navbar: ['在校', '毕业', '休学', '喵星'],
    currentTab: 0,
    url: app.globalData.url,
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  async onLoad(options) {
    if (Object.keys(options).length !== 0) {
      this.setData({
        currentTab: parseInt(options.currentTab),
      });
    }
    this.loadMoreCat_fostered();
    this.loadMoreCat_unknown();
    this.loadMoreCat_dead();
    const {
      result
    } = await app.mpServerless.user.getInfo();
    this.setData({
      userId: result.user.userId
    });
    app.mpServerless.db.collection('SCCAPKUAdministrator').find({
      userId: result.user.userId
    }).then(res => {
      console.log(res.result[0].name)
      if (res.result.length > 0) {
        app.globalData.isAdministrator = true
        app.globalData.Administrator = res.result[0].name
      }
    }).catch(console.error);

    app.mpServerless.db.collection('NewPeople').insertOne({
      userId: result.user.userId,
      time: Date()
    }).then(res => { }).catch(console.error);
  },

  editCat(e) {
    const _id = e.currentTarget.dataset._id;
    if (app.globalData.isAdministrator) {
      wx.navigateTo({
        url: '/pages/editCat/editCat?_id=' + _id,
      });
    }
  },

  imageTap(e) {
    if (app.globalData.isAdministrator) {
      wx.navigateTo({
        url: '/pages/addCat/addCat'
      })
    }
  },

  onReachBottom: function () {
    if (this.data.currentTab === 1) {
      this.loadMoreCat_fostered();
    }
    if (this.data.currentTab === 2) {
      this.loadMoreCat_unknown();
    }
    if (this.data.currentTab === 3) {
      this.loadMoreCat_dead();
    }
  },

  loadMoreCat_fostered() {
    const fostered_cat = this.data.fostered_cat;
    app.mpServerless.db.collection('SCCAPKU').find({
      status: "送养",
    }, {
      sort: { deliveryTime: -1 },
      skip: fostered_cat.length,
      limit: 20,
    }).then(res => {
      const {
        result: data
      } = res;
      this.setData({
        fostered_cat: fostered_cat.concat(data)
      });
    }).catch(console.error);
  },

  loadMoreCat_unknown() {
    const unknown_cat = this.data.unknown_cat;
    app.mpServerless.db.collection('SCCAPKU').find({
      status: "失踪",
    }, {
      sort: { missingTime: -1 },
      skip: unknown_cat.length,
      limit: 20,
    }).then(res => {
      const {
        result: data
      } = res;
      this.setData({
        unknown_cat: unknown_cat.concat(data)
      });
    }).catch(console.error);
  },

  loadMoreCat_dead() {
    const dead_cat = this.data.dead_cat;
    app.mpServerless.db.collection('SCCAPKU').find({
      status: "离世",
    }, {
      sort: { deathTime: -1 },
      skip: dead_cat.length,
      limit: 20,
    }).then(res => {
      const {
        result: data
      } = res;
      this.setData({
        dead_cat: dead_cat.concat(data)
      });
    }).catch(console.error);
  },

  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index?currentTab=' + this.data.currentTab,
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
      path: 'pages/index/index?currentTab=' + this.data.currentTab,
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

})