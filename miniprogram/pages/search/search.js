const app = getApp();

Page({
  data: {
    cat: [],
    inputValue: "",
    url: app.globalData.url,
  },

  loadMorecat() {
    const cat = this.data.cat;
    app.mpServerless.db.collection('SCCAPKU').find({
      name: {
        $regex: this.data.inputValue
      }
    }, {
      sort: {
        lastEditTime: -1
      },
      // skip: cat.length,
      // limit: 20,
    }).then(res => {
      const {
        result: data
      } = res;
      this.setData({
        cat: data
      });
    }).catch(console.error);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMorecat();
  },

  editCat(e) {
    const _id = e.currentTarget.dataset._id;
    if (app.globalData.isAdministrator) {
      wx.navigateTo({
        url: '/pages/editCat/editCat?_id=' + _id,
      });
    }
  },

  bindKeyInput: function (e) {
    if (e.detail.value == "") {
      this.setData({
        cat: []
      })
    } else {
      this.setData({
        inputValue: "(?i)" + "(.*)(" + e.detail.value.split('').join(')(.*)(') + ")(.*)"
      })
      this.loadMorecat();
    }
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    if (e.detail.value) {
      const cat = this.data.cat;
      app.mpServerless.db.collection('SCCAPKU').find({
        name: e.detail.value
      }, {}).then(res => {
        wx.navigateTo({
          url: '/pages/catDetail/catDetail?_id=' + res.result[0]._id,
        })
      }).catch(console.error);
    }
  },
})