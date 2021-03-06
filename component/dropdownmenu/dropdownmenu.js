Component({
  properties: {
    dropDownMenuTitle: {
      type: Array,
      value: [],
    },
    dropDownMenuDistrictData: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal) {
        let model = newVal[0] ? newVal[0] : null
        this.selectDefaultDistrictLeft(model)
      }
    },

    dropDownMenuSourceData: {
      type: Array,
      value: []
    },
    dropDownMenuStyleData: {
      type: Array,
      value: []
    },
    dropDownMenuFilterData: {
      type: Array,
      value: []
    },
  },
  data: {
    // private properity
    district_open: false, // 区域
    source_open: false, // 来源
    style_open: false, // 出租 出售
    filteropen: false, // 筛选
    shownavindex: '',
    dropDownMenuDistrictDataCenter: {},
    dropDownMenuDistrictDataRight: {},

    district_left_select: '',
    district_center_select: '',
    district_right_select: '',
    district_select_name: '',

    selected_style_id: 0,
    selected_style_name: '',
    selected_source_id: 0,
    selected_source_name: '',
    selected_filter_id: 0,
    selected_filter_name: ''
  },
  methods: {

    tapDistrictNav: function(e) {
      if (this.data.district_open) {
        this.setData({
          district_open: false,
          source_open: false,
          style_open: false,
          filter_open: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          district_open: true,
          style_open: false,
          source_open: false,
          filter_open: false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }

    },
    tapSourceNav: function(e) {
      if (this.data.source_open) {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          source_open: true,
          style_open: false,
          district_open: false,
          filter_open: false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
    },
    tapStyleNav: function(e) {
      if (this.data.style_open) {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          source_open: false,
          style_open: true,
          filter_open: false,
          district_open: false,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
      console.log(e.target)
    },
    tapFilterNav: function(e) {
      if (this.data.filter_open) {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: true,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
    },


    selectDefaultDistrictLeft(model) {
      if (!model) {
        return
      }
      var childModel = model.childModel;
      var selectedId = model.id
      var selectedTitle = model.title;
      if (childModel)
      {
        this.setData({
          dropDownMenuDistrictDataCenter: childModel,
          district_left_select: selectedId,
          district_center_select: '',
        })
      }
    },

    closeWithSelectObject: function(data) {
      this.closeHyFilter();
      this.triggerEvent("selectedItem", data.value);
      let alias = data.value.alias;
      let title = data.value.title;
      if(alias) title = alias;
      this.setData({
        district_select_name: title
      });
    },

    selectDistrictLeft: function(e) {
      let childModel = e.target.dataset.model.childModel;
      let selectedId = e.target.dataset.model.id;
      if(childModel)
      {
        this.setData({
          dropDownMenuDistrictDataCenter: childModel,
          district_left_select: selectedId,
          district_center_select: '',
  
          dropDownMenuDistrictDataRight: '',
          district_right_select: '',
        })
      }
      else
      {
        this.setData({
          district_left_select: selectedId,
          dropDownMenuDistrictDataCenter: '',
          dropDownMenuDistrictDataRight: '',
        })

        this.closeWithSelectObject({
          index: this.data.shownavindex,
          value: e.target.dataset.model,
        });
      }      
    },



    selectDistrictCenter: function(e) {
      let childModel = e.target.dataset.model.childModel;
      let selectedId = e.target.dataset.model.id
      if(childModel)
      {
        this.setData({
          dropDownMenuDistrictDataRight: childModel,
          district_center_select: selectedId,
          district_right_select: '',
        })
      }
      else 
      {
        this.setData({
          district_center_select: selectedId,
        })

        this.closeWithSelectObject({
          index: this.data.shownavindex,
          value: e.target.dataset.model,
        });
      }
    },

    selectDistrictRight: function(e) {
      let selectedId = e.target.dataset.model.id
      this.setData({
        district_right_select: selectedId
      })

      this.closeWithSelectObject({
        index: this.data.shownavindex,
        value: e.target.dataset.model,
      });
    },

    selectSourceItem: function(e) {
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selected_source_id: selectedId,
        selected_source_name: selectedTitle
      })
      this.triggerEvent("selectedItem", {
        index: this.data.shownavindex,
        selectedId: selectedId,
        selectedTitle: selectedTitle
      })
    },

    selectFilterItem: function(e) {
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selected_filter_id: selectedId,
        selected_filter_name: selectedTitle
      })
      this.triggerEvent("selectedItem", {
        index: this.data.shownavindex,
        selectedId: selectedId,
        selectedTitle: selectedTitle
      })
    },

    selectStyleItem: function(e) {
      var selectedId = e.target.dataset.model.id
      var selectedTitle = e.target.dataset.model.title;
      this.closeHyFilter();
      this.setData({
        selected_style_id: selectedId,
        selected_style_name: selectedTitle
      })
      this.triggerEvent("selectedItem", {
        index: this.data.shownavindex,
        selectedId: selectedId,
        selectedTitle: selectedTitle
      })
    },

    /**关闭筛选 */
    closeHyFilter: function() {
      if (this.data.district_open) {
        this.setData({
          district_open: false,
          source_open: false,
          style_open: false,
          filter_open: false,
        })
      } else if (this.data.source_open) {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: false,
        })
      } else if (this.data.style_open) {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: false,
        })
      } else if (this.data.filter_open) {
        this.setData({
          source_open: false,
          style_open: false,
          district_open: false,
          filter_open: false,
        })
      }
    },
  },
  //组件生命周期函数，在组件实例进入页面节点树时执行
  attached: function() {


  },

})