# dropDownMenu-wechat 支持三级

感谢：https://github.com/ZBK1nger/dropDownMenu-wechat

#### 微信小程序下拉菜单自定义组件，支持三级

* 级联选择器，例如xx区-xx街道-xx小区,支持三级
* 下拉列表，例如排序，筛选等

![img](https://github.com/totemtec/dropDownMenu-wechat/blob/master/source/Feb-16-2019%2000-49-26.gif)

#### 如何使用

* 支持动态修改Navgation上的Item数量和显示隐藏等

~~~
/*
dropDownMenuTitle:导航标题数组，按顺序填写
dropDownMenuDistrictData:区域数组
--- 以下三种样式一样，按需求添加即可 ---
dropDownMenuSourceData:来源
dropDownMenuStyleData:租售
dropDownMenuFilterData:排序
*/
<dropdownmenu dropDownMenuTitle='{{dropDownMenuTitle}}' dropDownMenuDistrictData='{{dropDownMenuFirstData}}' dropDownMenuSourceData='{{dropDownMenuSecondData}}' dropDownMenuStyleData='{{dropDownMenuThirdData}}' dropDownMenuFilterData='{{dropDownMenuFourthData}}'
  bind:selectedItem='selectedItem' />
~~~
* 将项目中component文件夹拖入项目中
* 在将要使用的该组件的.json文件中引入

~~~

{
  "usingComponents": {
    "dropdownmenu": "/component/dropdownmenu/dropdownmenu"
  }
}

~~~
* 在.wxml文件中引用即可

##### 详情代码以及使用参照示例，如果对你有所帮助的请给个Star✨~