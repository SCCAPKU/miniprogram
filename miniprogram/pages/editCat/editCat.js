var _id = "1";
const app = getApp();

Page({
  data: {
    cat: {},
    url: app.globalData.url,
    classification: 0,
    pickers: {
      classification: ['狸花', '橘猫及橘白', '奶牛', '玳瑁及三花', '纯色'],
      gender: ['', '公', '母'],
      isAdoption: ['', '待领养'],
      addPhotoNumber: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      addAudioNumber: ['0', '1', '2', '3'],
      isSterilization: ['', '已绝育', '未绝育'],
      status: ['健康', '送养', '失踪', '离世'],
      character: ['', '亲人可抱', '亲人不可抱 可摸', '薛定谔亲人', '吃东西时可以一直摸', '吃东西时可以摸一下', '怕人 安全距离 1m 以内', '怕人 安全距离 1m 以外'],
    },
    picker_selected: {},
  },

  onLoad: function (options) {
    _id = options._id;
    app.mpServerless.db.collection('SCCAPKU').find({
      _id: _id,
    }, {}).then(res => {
      // console.log(res)
      this.setData({
        cat: res.result[0],
        classification: res.result[0].classification,
      });
    }).then(res => {
      var picker_selected = {};
      const pickers = this.data.pickers;
      console.log(pickers)
      for (const key in pickers) {
        const items = pickers[key];
        const value = this.data.cat[key];
        const idx = items.findIndex((v) => v === value);
        if (idx === -1 && typeof value === "number") {
          picker_selected[key] = value;
        } else {
          picker_selected[key] = idx;
        }
      }
      this.setData({
        picker_selected: picker_selected,
      });
    })
  },

  // 选择日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const key = e.currentTarget.dataset.key;
    const value = e.detail.value;
    console.log(key)
    this.setData({
      ['cat.' + key]: value
    })
  },

  // 选择了东西
  bindPickerChange(e) {
    const key = e.currentTarget.dataset.key;
    const index = e.detail.value;
    var value = this.data.pickers[key][index];
    console.log(value)
    this.setData({
      ['cat.' + key]: value
    });
  },

  // 删除已经选择的日期
  cancelDate(e) {
    const key = e.currentTarget.dataset.key;
    console.log(e)
    wx.showModal({
      title: '提示',
      content: '确定删除吗？',
      content: '确定删除这个日期吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            ['cat.' + key]: ''
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  upload() {
    wx.showModal({
      title: '提示',
      content: '确定提交吗？',
      success: (res) => {
        if (res.confirm) {
          app.mpServerless.db.collection('SCCAPKU').updateMany({
              _id: this.data.cat._id
            }, {
              $set: {
                addPhotoNumber: this.data.cat.addPhotoNumber,
                addAudioNumber: this.data.cat.addAudioNumber,
                isAdoption: this.data.cat.isAdoption,
                nickName: this.data.cat.nickName,
                furColor: this.data.cat.furColor,
                classification: this.data.cat.classification,
                gender: this.data.cat.gender,
                status: this.data.cat.status,
                isSterilization: this.data.cat.isSterilization,
                sterilizationTime: this.data.cat.sterilizationTime,
                character: this.data.cat.character,
                firstSightingTime: this.data.cat.firstSightingTime,
                firstSightingLocation: this.data.cat.firstSightingLocation,
                appearance: this.data.cat.appearance,
                missingTime: this.data.cat.missingTime,
                relationship: this.data.cat.relationship,
                deliveryTime: this.data.cat.deliveryTime,
                deathTime: this.data.cat.deathTime,
                moreInformation: this.data.cat.moreInformation,
                notes: this.data.cat.notes,
                deathReason: this.data.cat.deathReason,
                location: this.data.cat.location,
                birthTime: this.data.cat.birthTime,
                relatedCats: this.data.cat.relatedCats,
                lastEditTime: Date(),
                lastEditAdministrator: app.globalData.Administrator,
              }
            }).then(res => {
              wx.showToast({
                icon: 'success',
                title: '操作成功',
              });
            })
            .catch(err => {
              console.error(err);
              wx.showToast({
                icon: 'error',
                title: '操作失败',
              });
            });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  delete() {
    wx.showModal({
      title: '提示',
      confirmColor: 'red',
      content: '确定删除吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定')
          app.mpServerless.db.collection('SCCAPKU').deleteOne({
            _id: this.data.cat._id
          }).then(res => {
            wx.showToast({
              icon: 'success',
              title: '操作成功',
            });
            wx.navigateBack()
          }).catch(err => {
            console.error(err);
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },


  // 输入了东西
  inputText(e) {
    const key = e.currentTarget.dataset.key;
    const value = e.detail.value;
    this.setData({
      ['cat.' + key]: value
    });
  },
})

//创建audio控件
const myaudio = wx.createInnerAudioContext();