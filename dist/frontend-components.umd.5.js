((typeof self !== 'undefined' ? self : this)["webpackJsonpfrontend_components"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpfrontend_components"] || []).push([[5,6],{

/***/ "44a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5a5bfc4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navigation/PageNavigationTabs.vue?vue&type=template&id=c25205e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-tabs',{staticClass:"tw-tabs__page",class:{ 'tw-tabs__page-border--bottom': _vm.borderBottom  },attrs:{"value":_vm.activeTab,"color":_vm.tabColor},on:{"change":function($event){return _vm.$emit('input', $event)}}},[_c('v-tabs-slider',{attrs:{"color":_vm.sliderColor}}),_vm._l((_vm.items),function(item){return _c('v-tab',{key:item[_vm.itemPath],attrs:{"to":item[_vm.itemPath],"ripple":false}},[_vm._v(_vm._s(item[_vm.itemText]))])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/navigation/PageNavigationTabs.vue?vue&type=template&id=c25205e6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navigation/PageNavigationTabs.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PageNavigationTabsvue_type_script_lang_js_ = ({
  name: 'PageNavigationTabs',
  props: {
    tabColor: {
      type: String,
      default: '#000'
    },
    sliderColor: {
      type: String,
      default: '#59c894'
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    itemPath: {
      type: String,
      default: 'to'
    },
    itemText: {
      type: String,
      default: 'text'
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  watch: {
    activeTab: {
      immediate: true,
      handler: 'validateProps'
    }
  },
  methods: {
    validateProps: function validateProps() {
      var _this = this;

      var valid = this.items.some(function (tab) {
        return tab[_this.itemPath] === _this.activeTab;
      });
      if (!valid) this.$emit('invalid');
    }
  }
});
// CONCATENATED MODULE: ./src/components/navigation/PageNavigationTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var navigation_PageNavigationTabsvue_type_script_lang_js_ = (PageNavigationTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/navigation/PageNavigationTabs.vue?vue&type=style&index=0&id=c25205e6&lang=scss&scoped=true&
var PageNavigationTabsvue_type_style_index_0_id_c25205e6_lang_scss_scoped_true_ = __webpack_require__("d067");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__("71a3");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 4 modules
var VTabs = __webpack_require__("fe57");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
var VTabsSlider = __webpack_require__("9a96");

// CONCATENATED MODULE: ./src/components/navigation/PageNavigationTabs.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_PageNavigationTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c25205e6",
  null
  
)

/* harmony default export */ var PageNavigationTabs = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VTab: VTab["a" /* default */],VTabs: VTabs["a" /* default */],VTabsSlider: VTabsSlider["a" /* default */]})


/***/ }),

/***/ "4f67":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA7CAYAAAAw23kDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA1LTA2VDE5OjM0OjU4KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNS0wNlQxOTozNzo0MyswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNS0wNlQxOTozNzo0MyswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZGJmN2E1OS02MmU1LTk4NDUtOWMyOS0zOTU1ODdmNTc0MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Y2RiZjdhNTktNjJlNS05ODQ1LTljMjktMzk1NTg3ZjU3NDI3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2RiZjdhNTktNjJlNS05ODQ1LTljMjktMzk1NTg3ZjU3NDI3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZGJmN2E1OS02MmU1LTk4NDUtOWMyOS0zOTU1ODdmNTc0MjciIHN0RXZ0OndoZW49IjIwMjAtMDUtMDZUMTk6MzQ6NTgrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LtVReAAACM0lEQVRo3u3a4XXaMBDA8f/xOoA3KGUCZwM8gdkgMEEYIUxAmCB0guAJcCeoJ3DIBPEGlw9V+vyoaW1VAttP9xVb8LPESfJJqIWqRsAciIEKyEWkYMihqlttjqOqxkNFHfXv8T44nKo+arv4OTTYq7aP+VBcE2Da4fpBwUYZARZgARZg1vOY6ziq6nKMsM94HitMVXV9K5eoqnps/yQi38YIQ0QkZMUBwaqxwg5jTB4FkIhINZYeq4D9LVEAXzpevwe+XwL16Y1WV9ibiOQhKwZYgAVYgAVYgAVYgAVYgAVYf7ctVw2dZUsg5VfBMap9lAMZcJAyPbl4NbARkccrgBbAlnbV1idgI2Va9Xoo6izbAi+0LyGvgaPOsqi3MINaW9wan+MmPULNLVF13LMt7KtHm4vqzMI8oM6wqcdk4artBxtY5Km3UodtLWxgsar66LWp6/+rTfJ4qeNUdVE7ZPauqluLNud9WHnEwOuFeT0C1qoaicjq1mvF3EO7y44HygofsMLTQ3vocO3J8XcXE+CHJ1jc4drMJUrKtJqIyAE/lccumc7lb9jV0/3OA6z1EDcr842j3tr/hpmtiOv/WqfhJWX6xP+Vditg1bRWTBziCst928oyS1dAImVa/AEzZdXEwVPbiMidzc1SppWUadJxWObAXR0F0Hi4xMxB92bdFbXA5EAmInuHy6KpmTIuLZAPwE7KtLGH/3lqxpy3j0z6Pn/vcJW6s9lAfk4f1XnvNMUHsGhhVgKFu+UAAAAASUVORK5CYII="

/***/ }),

/***/ "5ea1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a5a5bfc4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layout/TheHeader.vue?vue&type=template&id=9c8c1aa8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('v-app-bar',{attrs:{"color":"#181631","dense":"","dark":"","flat":""}},[_c('v-toolbar-title',{staticClass:"tw-app__top-navbar__title"},[_c('a',{attrs:{"href":"/#"}},[_c('v-img',{attrs:{"src":__webpack_require__("4f67"),"alt":"Teamwork","width":"20"}})],1)]),(_vm.$vuetify.breakpoint.mdAndUp)?_c('PageNavigationTabs',{attrs:{"items":_vm.navItems,"border-bottom":false,"item-path":"path","item-text":"name","slider-color":"#ff22b1","tab-color":"#fff"},model:{value:(_vm.selectedTab),callback:function ($$v) {_vm.selectedTab=$$v},expression:"selectedTab"}}):_vm._e(),_c('v-spacer'),(_vm.hasSearch)?_c('v-text-field',{staticClass:"mr-5",attrs:{"id":"searchField","flat":"","solo-inverted":"","dense":"","hide-details":"","clearable":"","prepend-inner-icon":"mdi-magnify","label":"Search"}}):_vm._e(),(_vm.hasMenu)?_c('v-menu',{attrs:{"transition":"scroll-x-transition","offset-y":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-btn',_vm._g({staticClass:"mr-3",attrs:{"small":"","icon":""}},on),[_c('v-icon',{attrs:{"size":"20px"}},[_vm._v("mdi-plus")])],1)]}}],null,false,922157974)},[_vm._v("> ")]):_vm._e(),(_vm.hasChat)?_c('v-btn',{staticClass:"mr-3",attrs:{"small":"","icon":""}},[_c('v-icon',{attrs:{"size":"20px"}},[_vm._v("mdi-comment-processing")])],1):_vm._e(),(_vm.hasAppSwitcher)?_c('v-btn',{staticClass:"mr-3",attrs:{"small":"","icon":""}},[_c('v-icon',{attrs:{"size":"20px"}},[_vm._v("mdi-apps")])],1):_vm._e(),(_vm.hasNotifications)?_c('v-badge',{attrs:{"dot":"","content":"12","color":"green","overlap":"","offset-x":"22","offset-y":"22"}},[_c('v-btn',{staticClass:"mr-3",attrs:{"small":"","icon":""}},[_c('v-icon',{attrs:{"size":"20px"}},[_vm._v("mdi-bell")])],1)],1):_vm._e(),[_c('v-menu',{attrs:{"transition":"scroll-x-transition","offset-y":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-btn',_vm._g({staticClass:"tw-app__top-navbar__btn-profile",attrs:{"text":""}},on),[_c('v-avatar',{staticClass:"ml-2",attrs:{"size":"32px","item":""}},[_c('v-img',{attrs:{"src":_vm.user.avatarUrl,"alt":_vm.user.name}})],1),_c('v-icon',[_vm._v("mdi-menu-down")])],1)]}}])},[_c('v-list',{staticClass:"v-list--teamwork",attrs:{"dense":""}},[_c('v-list-item',{attrs:{"two-line":"","href":'#/people/1'}},[_c('v-list-item-avatar',[_c('img',{attrs:{"src":_vm.user.avatarUrl}})]),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(" "+_vm._s(_vm.user.name)+" ")]),_c('v-list-item-subtitle',[_vm._v("View Profile")])],1)],1)],1)],1)]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layout/TheHeader.vue?vue&type=template&id=9c8c1aa8&

// EXTERNAL MODULE: ./src/components/navigation/PageNavigationTabs.vue + 4 modules
var PageNavigationTabs = __webpack_require__("44a4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layout/TheHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  name: 'TheHeader',
  components: {
    PageNavigationTabs: PageNavigationTabs["default"]
  },
  data: function data() {
    return {
      selectedTab: null
    };
  },
  props: {
    navItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hasSearch: {
      type: Boolean,
      default: true
    },
    hasChat: {
      type: Boolean,
      default: true
    },
    hasMenu: {
      type: Boolean,
      default: true
    },
    hasNotifications: {
      type: Boolean,
      default: true
    },
    hasAppSwitcher: {
      type: Boolean,
      default: true
    },
    user: {
      type: Object,
      default: function _default() {
        return {
          name: 'Ozsu Akan',
          avatarUrl: 'https://avatars.dicebear.com/v2/female/d004f91f8e9c6aad0e60748b72a50d3c.svg'
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/layout/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 2 modules
var VAppBar = __webpack_require__("40dc");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__("8212");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js + 1 modules
var VBadge = __webpack_require__("4ca6");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__("8336");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__("132d");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__("adda");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__("8860");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__("da13");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__("8270");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 4 modules
var components_VList = __webpack_require__("5d23");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 7 modules
var VMenu = __webpack_require__("e449");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__("2fa4");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 10 modules
var VTextField = __webpack_require__("8654");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__("2a7f");

// CONCATENATED MODULE: ./src/components/layout/TheHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */

















installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VAvatar: VAvatar["a" /* default */],VBadge: VBadge["a" /* default */],VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */],VToolbarTitle: VToolbar["a" /* VToolbarTitle */]})


/***/ }),

/***/ "d067":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNavigationTabs_vue_vue_type_style_index_0_id_c25205e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d655");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNavigationTabs_vue_vue_type_style_index_0_id_c25205e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNavigationTabs_vue_vue_type_style_index_0_id_c25205e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNavigationTabs_vue_vue_type_style_index_0_id_c25205e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d655":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=frontend-components.umd.5.js.map