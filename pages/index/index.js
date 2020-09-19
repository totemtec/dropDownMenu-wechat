// pages/index/menu.js
const app = getApp()
Page({
  data: {
    dropDownMenuTitle: ['区域', '来源', '租售', '排序'],
    data1: [{
        id: 0,
        title: '不限',
        level: 1,
      },

      {
        id: 1,
        title: '道里区',
        level: 1,
        childModel: [{
            id: '1-1',
            title: '中央大街',
            level: 2,
            childModel: [{
              id: '1-1-1',
              title: '1-1-1',
              level: 3,
            },
            {
              id: '1-1-2',
              title: '1-1-2',
              level: 3,
            }
          ]
          },
          {
            id: '1-2',
            title: '埃德蒙顿路',
            level: 2,
            childModel: [{
              id: '1-2-1',
              title: '1-2-1',
              level: 3,
            },
            {
              id: '1-2-2',
              title: '1-2-2',
              level: 3,
            }
          ]
          }
        ]
      },
      {
        id: 2,
        title: '南岗区',
        level:1,
        childModel: [{
            id: '2-1',
            title: '果戈里',
            level:2,
          },
          {
            id: '2-2',
            title: '通达街',
            level:2,
          }
        ]
      },
      {
        id: 3,
        title: '松北区',
        level:1,
        childModel: [{
            id: '3-1',
            title: '世茂大道',
            level:2,
          },
          {
            id: '3-2',
            title: '市政府',
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
    console.log('id --' + e.detail.selectedId + ", cityname = " + e.detail.selectedTitle +  ", level = " + e.detail.selectedLevel);
  },
  showDialog: function(e) {

  },

})