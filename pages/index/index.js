// pages/index/menu.js
const app = getApp()
Page({
  data: {
    dropDownMenuTitle: ['区域', '来源', '租售', '排序'],
    data1: [{
        id: 0,
        title: '不限',
        alias: '',
        level: 1,
      },
      {
        id: 1,
        title: '海淀区',
        level: 1,
        childModel: [
          {
            id: 1,
            title: '全部',
            level: 1,
            alias: '海淀区'
          },
            {
            id: 2,
            title: '上地',
            level: 2,
            childModel: [
              {
                id: 2,
                title: '全部',
                level: 2,
                alias: '上地'
              },
              {
              id: 3,
              title: '辉煌国际',
              level: 3,
            },
            {
              id: 4,
              title: '软件园',
              level: 3,
            }
          ]
          },
          {
            id: 5,
            title: '中关村',
            level: 2,
            childModel: [{
              id: 6,
              title: '北京大学',
              level: 3,
            },
            {
              id: 7,
              title: '科学院小区',
              level: 3,
            }
          ]
          }
        ]
      },
      {
        id: 8,
        title: '朝阳区',
        level:1,
        childModel: [
          {
            id: 8,
            level:1,
            title: '全部',
            alias: '朝阳区',
          },
          {
            id: 10,
            title: '望京',
            level:2,
          },
          {
            id: 11,
            title: '亚运村',
            level:2,
          }
        ]
      },
      {
        id: 12,
        title: '昌平区',
        level:1,
        childModel: [
          {
            id: 12,
            title: '全部',
            level:1,
            alias: '昌平区',
          },
          {
            id: 14,
            title: '回龙观',
            level:2,
          },
          {
            id: 15,
            title: '天通苑',
            level:2,
          }
        ]
      }
    ],
    data2: [{
        id: 1,
        title: '个人房源'
      },
      {
        id: 2,
        title: '经纪人房源'
      }
    ],
    data3: [{
        id: 1,
        title: '出租'
      },
      {
        id: 2,
        title: '出售'
      }
    ],
    data4: [{
      id: 1,
      title: '智能排序'
    }, {
      id: 2,
      title: '发布时间'
    }, {
      id: 3,
      title: '距离优先'
    }],
  },
  onLoad: function() {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  selectedItem: function(e) {
    console.log('id --' + e.detail.id + ", alias = " + e.detail.alias + ", title = " + e.detail.title +  ", level = " + e.detail.level);
  },
  showDialog: function(e) {

  },

})