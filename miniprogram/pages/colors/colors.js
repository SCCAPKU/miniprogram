const app = getApp();
var classification = "1";
Page({
  data: {
    cat: [],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    url: app.globalData.url,
  },

  editCat(e) {
    const _id = e.currentTarget.dataset._id;
    if (app.globalData.isAdministrator) {
      wx.navigateTo({
        url: '/pages/editCat/editCat?_id=' + _id,
      });
    }
  },

  onLoad: function (options) {
    classification = options.classification;
    console.log(classification)
    this.loadMoreCat();
  },

  onReachBottom: function () {
    this.loadMoreCat();
  },

  loadMoreCat() {
    const cat = this.data.cat;
    app.mpServerless.db.collection('SCCAPKU').find({
      classification: classification,
      status: "健康"
    }, {
      sort: { 
        isAdoption: -1
       },
      skip: cat.length,
      limit: 20,
    }).then(res => {
      const {
        result: data
      } = res;
      this.setData({
        cat: cat.concat(data)
      });
    }).catch(console.error);
  },
})