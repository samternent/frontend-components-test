((typeof self !== 'undefined' ? self : this)["webpackJsonpfrontend_components"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpfrontend_components"] || []).push([[6],{

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
//# sourceMappingURL=frontend-components.umd.6.js.map