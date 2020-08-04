((typeof self !== 'undefined' ? self : this)["webpackJsonpfrontend_components"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpfrontend_components"] || []).push([[3],{

/***/ "3c93":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "615b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7496":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_samternent_Teamwork_projects_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5530");
/* harmony import */ var _src_components_VApp_VApp_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("df86");
/* harmony import */ var _src_components_VApp_VApp_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VApp_VApp_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7560");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("58df");

// Styles
 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'v-app',
  props: {
    dark: {
      type: Boolean,
      default: undefined
    },
    id: {
      type: String,
      default: 'app'
    },
    light: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    isDark: function isDark() {
      return this.$vuetify.theme.dark;
    }
  },
  beforeCreate: function beforeCreate() {
    if (!this.$vuetify || this.$vuetify === this.$root) {
      throw new Error('Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object');
    }
  },
  render: function render(h) {
    var wrapper = h('div', {
      staticClass: 'v-application--wrap'
    }, this.$slots.default);
    return h('div', {
      staticClass: 'v-application',
      class: Object(_Users_samternent_Teamwork_projects_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl
      }, this.themeClasses),
      attrs: {
        'data-app': true
      },
      domProps: {
        id: this.id
      }
    }, [wrapper]);
  }
}));

/***/ }),

/***/ "7958":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b0af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0481");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4069");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_samternent_Teamwork_projects_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5530");
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("615b");
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("10d2");
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("297c");
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1c87");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("58df");




// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes: function classes() {
      return Object(_Users_samternent_Teamwork_projects_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_samternent_Teamwork_projects_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
        'v-card': true
      }, _mixins_routable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].options.computed.classes.call(this)), {}, {
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised
      }, _VSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.computed.classes.call(this));
    },
    styles: function styles() {
      var style = Object(_Users_samternent_Teamwork_projects_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, _VSheet__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.computed.styles.call(this));

      if (this.img) {
        style.background = "url(\"".concat(this.img, "\") center center / cover no-repeat");
      }

      return style;
    }
  },
  methods: {
    genProgress: function genProgress() {
      var render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }
  },
  render: function render(h) {
    var _this$generateRouteLi = this.generateRouteLink(),
        tag = _this$generateRouteLi.tag,
        data = _this$generateRouteLi.data;

    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }
}));

/***/ }),

/***/ "bd0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "df86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VMain_VMain_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd0c");
/* harmony import */ var _src_components_VMain_VMain_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VMain_VMain_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d10f");
// Styles
 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-main',
  props: {
    tag: {
      type: String,
      default: 'main'
    }
  },
  computed: {
    styles: function styles() {
      var _this$$vuetify$applic = this.$vuetify.application,
          bar = _this$$vuetify$applic.bar,
          top = _this$$vuetify$applic.top,
          right = _this$$vuetify$applic.right,
          footer = _this$$vuetify$applic.footer,
          insetFooter = _this$$vuetify$applic.insetFooter,
          bottom = _this$$vuetify$applic.bottom,
          left = _this$$vuetify$applic.left;
      return {
        paddingTop: "".concat(top + bar, "px"),
        paddingRight: "".concat(right, "px"),
        paddingBottom: "".concat(footer + insetFooter + bottom, "px"),
        paddingLeft: "".concat(left, "px")
      };
    }
  },
  render: function render(h) {
    var data = {
      staticClass: 'v-main',
      style: this.styles,
      ref: 'main'
    };
    return h(this.tag, data, [h('div', {
      staticClass: 'v-main__wrap'
    }, this.$slots.default)]);
  }
}));

/***/ }),

/***/ "f774":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("c7cd");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.sass
var VNavigationDrawer = __webpack_require__("7958");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__("adda");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/applicationable/index.js
var applicationable = __webpack_require__("3a66");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__("a9ad");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__("b848");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__("e4cd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VOverlay/VOverlay.sass
var VOverlay = __webpack_require__("3c93");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__("7560");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__("f2e7");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__("58df");

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js


// Styles
 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ var VOverlay_VOverlay = (Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-overlay',
  props: {
    absolute: Boolean,
    color: {
      type: String,
      default: '#212121'
    },
    dark: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: [Number, String],
      default: 0.46
    },
    value: {
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: 5
    }
  },
  computed: {
    __scrim: function __scrim() {
      var data = this.setBackgroundColor(this.color, {
        staticClass: 'v-overlay__scrim',
        style: {
          opacity: this.computedOpacity
        }
      });
      return this.$createElement('div', data);
    },
    classes: function classes() {
      return Object(objectSpread2["a" /* default */])({
        'v-overlay--absolute': this.absolute,
        'v-overlay--active': this.isActive
      }, this.themeClasses);
    },
    computedOpacity: function computedOpacity() {
      return Number(this.isActive ? this.opacity : 0);
    },
    styles: function styles() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  methods: {
    genContent: function genContent() {
      return this.$createElement('div', {
        staticClass: 'v-overlay__content'
      }, this.$slots.default);
    }
  },
  render: function render(h) {
    var children = [this.__scrim];
    if (this.isActive) children.push(this.genContent());
    return h('div', {
      staticClass: 'v-overlay',
      class: this.classes,
      style: this.styles
    }, children);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VOverlay/index.js


/* harmony default export */ var components_VOverlay = (VOverlay_VOverlay);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__("80d2");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/overlayable/index.js



// Components
 // Utilities

 // Types


/* @vue/component */

/* harmony default export */ var overlayable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend().extend({
  name: 'overlayable',
  props: {
    hideOverlay: Boolean,
    overlayColor: String,
    overlayOpacity: [Number, String]
  },
  data: function data() {
    return {
      animationFrame: 0,
      overlay: null
    };
  },
  watch: {
    hideOverlay: function hideOverlay(value) {
      if (!this.isActive) return;
      if (value) this.removeOverlay();else this.genOverlay();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeOverlay();
  },
  methods: {
    createOverlay: function createOverlay() {
      var overlay = new components_VOverlay({
        propsData: {
          absolute: this.absolute,
          value: false,
          color: this.overlayColor,
          opacity: this.overlayOpacity
        }
      });
      overlay.$mount();
      var parent = this.absolute ? this.$el.parentNode : document.querySelector('[data-app]');
      parent && parent.insertBefore(overlay.$el, parent.firstChild);
      this.overlay = overlay;
    },
    genOverlay: function genOverlay() {
      var _this = this;

      this.hideScroll();
      if (this.hideOverlay) return;
      if (!this.overlay) this.createOverlay();
      this.animationFrame = requestAnimationFrame(function () {
        if (!_this.overlay) return;

        if (_this.activeZIndex !== undefined) {
          _this.overlay.zIndex = String(_this.activeZIndex - 1);
        } else if (_this.$el) {
          _this.overlay.zIndex = Object(helpers["n" /* getZIndex */])(_this.$el);
        }

        _this.overlay.value = true;
      });
      return true;
    },

    /** removeOverlay(false) will not restore the scollbar afterwards */
    removeOverlay: function removeOverlay() {
      var _this2 = this;

      var showScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.overlay) {
        Object(helpers["a" /* addOnceEventListener */])(this.overlay.$el, 'transitionend', function () {
          if (!_this2.overlay || !_this2.overlay.$el || !_this2.overlay.$el.parentNode || _this2.overlay.value) return;

          _this2.overlay.$el.parentNode.removeChild(_this2.overlay.$el);

          _this2.overlay.$destroy();

          _this2.overlay = null;
        }); // Cancel animation frame in case
        // overlay is removed before it
        // has finished its animation

        cancelAnimationFrame(this.animationFrame);
        this.overlay.value = false;
      }

      showScroll && this.showScroll();
    },
    scrollListener: function scrollListener(e) {
      if (e.type === 'keydown') {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || // https://github.com/vuetifyjs/vuetify/issues/4715
        e.target.isContentEditable) return;
        var up = [helpers["p" /* keyCodes */].up, helpers["p" /* keyCodes */].pageup];
        var down = [helpers["p" /* keyCodes */].down, helpers["p" /* keyCodes */].pagedown];

        if (up.includes(e.keyCode)) {
          e.deltaY = -1;
        } else if (down.includes(e.keyCode)) {
          e.deltaY = 1;
        } else {
          return;
        }
      }

      if (e.target === this.overlay || e.type !== 'keydown' && e.target === document.body || this.checkPath(e)) e.preventDefault();
    },
    hasScrollbar: function hasScrollbar(el) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
      var style = window.getComputedStyle(el);
      return ['auto', 'scroll'].includes(style.overflowY) && el.scrollHeight > el.clientHeight;
    },
    shouldScroll: function shouldScroll(el, delta) {
      if (el.scrollTop === 0 && delta < 0) return true;
      return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0;
    },
    isInside: function isInside(el, parent) {
      if (el === parent) {
        return true;
      } else if (el === null || el === document.body) {
        return false;
      } else {
        return this.isInside(el.parentNode, parent);
      }
    },
    checkPath: function checkPath(e) {
      var path = e.path || this.composedPath(e);
      var delta = e.deltaY;

      if (e.type === 'keydown' && path[0] === document.body) {
        var dialog = this.$refs.dialog; // getSelection returns null in firefox in some edge cases, can be ignored

        var selected = window.getSelection().anchorNode;

        if (dialog && this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
          return this.shouldScroll(dialog, delta);
        }

        return true;
      }

      for (var index = 0; index < path.length; index++) {
        var el = path[index];
        if (el === document) return true;
        if (el === document.documentElement) return true;
        if (el === this.$refs.content) return true;
        if (this.hasScrollbar(el)) return this.shouldScroll(el, delta);
      }

      return true;
    },

    /**
     * Polyfill for Event.prototype.composedPath
     */
    composedPath: function composedPath(e) {
      if (e.composedPath) return e.composedPath();
      var path = [];
      var el = e.target;

      while (el) {
        path.push(el);

        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);
          return path;
        }

        el = el.parentElement;
      }

      return path;
    },
    hideScroll: function hideScroll() {
      if (this.$vuetify.breakpoint.smAndDown) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        Object(helpers["b" /* addPassiveEventListener */])(window, 'wheel', this.scrollListener, {
          passive: false
        });
        window.addEventListener('keydown', this.scrollListener);
      }
    },
    showScroll: function showScroll() {
      document.documentElement.classList.remove('overflow-y-hidden');
      window.removeEventListener('wheel', this.scrollListener);
      window.removeEventListener('keydown', this.scrollListener);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__("d10f");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__("a293");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__("dc22");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__("c3f0");

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js




// Styles
 // Components

 // Mixins







 // Directives



 // Utilities



var baseMixins = Object(mixins["a" /* default */])(Object(applicationable["a" /* default */])('left', ['isActive', 'isMobile', 'miniVariant', 'expandOnHover', 'permanent', 'right', 'temporary', 'width']), colorable["a" /* default */], dependent["a" /* default */], mobile["a" /* default */], overlayable, ssr_bootable["a" /* default */], themeable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VNavigationDrawer_VNavigationDrawer = __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-navigation-drawer',
  provide: function provide() {
    return {
      isInNav: this.tag === 'nav'
    };
  },
  directives: {
    ClickOutside: click_outside["a" /* default */],
    Resize: resize["a" /* default */],
    Touch: touch["a" /* default */]
  },
  props: {
    bottom: Boolean,
    clipped: Boolean,
    disableResizeWatcher: Boolean,
    disableRouteWatcher: Boolean,
    expandOnHover: Boolean,
    floating: Boolean,
    height: {
      type: [Number, String],
      default: function _default() {
        return this.app ? '100vh' : '100%';
      }
    },
    miniVariant: Boolean,
    miniVariantWidth: {
      type: [Number, String],
      default: 56
    },
    permanent: Boolean,
    right: Boolean,
    src: {
      type: [String, Object],
      default: ''
    },
    stateless: Boolean,
    tag: {
      type: String,
      default: function _default() {
        return this.app ? 'nav' : 'aside';
      }
    },
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 256
    },
    value: null
  },
  data: function data() {
    return {
      isMouseover: false,
      touchArea: {
        left: 0,
        right: 0
      },
      stackMinZIndex: 6
    };
  },
  computed: {
    /**
     * Used for setting an app value from a dynamic
     * property. Called from applicationable.js
     */
    applicationProperty: function applicationProperty() {
      return this.right ? 'right' : 'left';
    },
    classes: function classes() {
      return Object(objectSpread2["a" /* default */])({
        'v-navigation-drawer': true,
        'v-navigation-drawer--absolute': this.absolute,
        'v-navigation-drawer--bottom': this.bottom,
        'v-navigation-drawer--clipped': this.clipped,
        'v-navigation-drawer--close': !this.isActive,
        'v-navigation-drawer--fixed': !this.absolute && (this.app || this.fixed),
        'v-navigation-drawer--floating': this.floating,
        'v-navigation-drawer--is-mobile': this.isMobile,
        'v-navigation-drawer--is-mouseover': this.isMouseover,
        'v-navigation-drawer--mini-variant': this.isMiniVariant,
        'v-navigation-drawer--custom-mini-variant': Number(this.miniVariantWidth) !== 56,
        'v-navigation-drawer--open': this.isActive,
        'v-navigation-drawer--open-on-hover': this.expandOnHover,
        'v-navigation-drawer--right': this.right,
        'v-navigation-drawer--temporary': this.temporary
      }, this.themeClasses);
    },
    computedMaxHeight: function computedMaxHeight() {
      if (!this.hasApp) return null;
      var computedMaxHeight = this.$vuetify.application.bottom + this.$vuetify.application.footer + this.$vuetify.application.bar;
      if (!this.clipped) return computedMaxHeight;
      return computedMaxHeight + this.$vuetify.application.top;
    },
    computedTop: function computedTop() {
      if (!this.hasApp) return 0;
      var computedTop = this.$vuetify.application.bar;
      computedTop += this.clipped ? this.$vuetify.application.top : 0;
      return computedTop;
    },
    computedTransform: function computedTransform() {
      if (this.isActive) return 0;
      if (this.isBottom) return 100;
      return this.right ? 100 : -100;
    },
    computedWidth: function computedWidth() {
      return this.isMiniVariant ? this.miniVariantWidth : this.width;
    },
    hasApp: function hasApp() {
      return this.app && !this.isMobile && !this.temporary;
    },
    isBottom: function isBottom() {
      return this.bottom && this.isMobile;
    },
    isMiniVariant: function isMiniVariant() {
      return !this.expandOnHover && this.miniVariant || this.expandOnHover && !this.isMouseover;
    },
    isMobile: function isMobile() {
      return !this.stateless && !this.permanent && mobile["a" /* default */].options.computed.isMobile.call(this);
    },
    reactsToClick: function reactsToClick() {
      return !this.stateless && !this.permanent && (this.isMobile || this.temporary);
    },
    reactsToMobile: function reactsToMobile() {
      return this.app && !this.disableResizeWatcher && !this.permanent && !this.stateless && !this.temporary;
    },
    reactsToResize: function reactsToResize() {
      return !this.disableResizeWatcher && !this.stateless;
    },
    reactsToRoute: function reactsToRoute() {
      return !this.disableRouteWatcher && !this.stateless && (this.temporary || this.isMobile);
    },
    showOverlay: function showOverlay() {
      return !this.hideOverlay && this.isActive && (this.isMobile || this.temporary);
    },
    styles: function styles() {
      var translate = this.isBottom ? 'translateY' : 'translateX';
      var styles = {
        height: Object(helpers["f" /* convertToUnit */])(this.height),
        top: !this.isBottom ? Object(helpers["f" /* convertToUnit */])(this.computedTop) : 'auto',
        maxHeight: this.computedMaxHeight != null ? "calc(100% - ".concat(Object(helpers["f" /* convertToUnit */])(this.computedMaxHeight), ")") : undefined,
        transform: "".concat(translate, "(").concat(Object(helpers["f" /* convertToUnit */])(this.computedTransform, '%'), ")"),
        width: Object(helpers["f" /* convertToUnit */])(this.computedWidth)
      };
      return styles;
    }
  },
  watch: {
    $route: 'onRouteChange',
    isActive: function isActive(val) {
      this.$emit('input', val);
    },

    /**
     * When mobile changes, adjust the active state
     * only when there has been a previous value
     */
    isMobile: function isMobile(val, prev) {
      !val && this.isActive && !this.temporary && this.removeOverlay();
      if (prev == null || !this.reactsToResize || !this.reactsToMobile) return;
      this.isActive = !val;
    },
    permanent: function permanent(val) {
      // If enabling prop enable the drawer
      if (val) this.isActive = true;
    },
    showOverlay: function showOverlay(val) {
      if (val) this.genOverlay();else this.removeOverlay();
    },
    value: function value(val) {
      if (this.permanent) return;

      if (val == null) {
        this.init();
        return;
      }

      if (val !== this.isActive) this.isActive = val;
    },
    expandOnHover: 'updateMiniVariant',
    isMouseover: function isMouseover(val) {
      this.updateMiniVariant(!val);
    }
  },
  beforeMount: function beforeMount() {
    this.init();
  },
  methods: {
    calculateTouchArea: function calculateTouchArea() {
      var parent = this.$el.parentNode;
      if (!parent) return;
      var parentRect = parent.getBoundingClientRect();
      this.touchArea = {
        left: parentRect.left + 50,
        right: parentRect.right - 50
      };
    },
    closeConditional: function closeConditional() {
      return this.isActive && !this._isDestroyed && this.reactsToClick;
    },
    genAppend: function genAppend() {
      return this.genPosition('append');
    },
    genBackground: function genBackground() {
      var props = {
        height: '100%',
        width: '100%',
        src: this.src
      };
      var image = this.$scopedSlots.img ? this.$scopedSlots.img(props) : this.$createElement(VImg["a" /* default */], {
        props: props
      });
      return this.$createElement('div', {
        staticClass: 'v-navigation-drawer__image'
      }, [image]);
    },
    genDirectives: function genDirectives() {
      var _this = this;

      var directives = [{
        name: 'click-outside',
        value: {
          handler: function handler() {
            _this.isActive = false;
          },
          closeConditional: this.closeConditional,
          include: this.getOpenDependentElements
        }
      }];

      if (!this.touchless && !this.stateless) {
        directives.push({
          name: 'touch',
          value: {
            parent: true,
            left: this.swipeLeft,
            right: this.swipeRight
          }
        });
      }

      return directives;
    },
    genListeners: function genListeners() {
      var _this2 = this;

      var on = {
        transitionend: function transitionend(e) {
          if (e.target !== e.currentTarget) return;

          _this2.$emit('transitionend', e); // IE11 does not support new Event('resize')


          var resizeEvent = document.createEvent('UIEvents');
          resizeEvent.initUIEvent('resize', true, false, window, 0);
          window.dispatchEvent(resizeEvent);
        }
      };

      if (this.miniVariant) {
        on.click = function () {
          return _this2.$emit('update:mini-variant', false);
        };
      }

      if (this.expandOnHover) {
        on.mouseenter = function () {
          return _this2.isMouseover = true;
        };

        on.mouseleave = function () {
          return _this2.isMouseover = false;
        };
      }

      return on;
    },
    genPosition: function genPosition(name) {
      var slot = Object(helpers["l" /* getSlot */])(this, name);
      if (!slot) return slot;
      return this.$createElement('div', {
        staticClass: "v-navigation-drawer__".concat(name)
      }, slot);
    },
    genPrepend: function genPrepend() {
      return this.genPosition('prepend');
    },
    genContent: function genContent() {
      return this.$createElement('div', {
        staticClass: 'v-navigation-drawer__content'
      }, this.$slots.default);
    },
    genBorder: function genBorder() {
      return this.$createElement('div', {
        staticClass: 'v-navigation-drawer__border'
      });
    },
    init: function init() {
      if (this.permanent) {
        this.isActive = true;
      } else if (this.stateless || this.value != null) {
        this.isActive = this.value;
      } else if (!this.temporary) {
        this.isActive = !this.isMobile;
      }
    },
    onRouteChange: function onRouteChange() {
      if (this.reactsToRoute && this.closeConditional()) {
        this.isActive = false;
      }
    },
    swipeLeft: function swipeLeft(e) {
      if (this.isActive && this.right) return;
      this.calculateTouchArea();
      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
      if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
    },
    swipeRight: function swipeRight(e) {
      if (this.isActive && !this.right) return;
      this.calculateTouchArea();
      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
      if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
    },

    /**
     * Update the application layout
     */
    updateApplication: function updateApplication() {
      if (!this.isActive || this.isMobile || this.temporary || !this.$el) return 0;
      var width = Number(this.computedWidth);
      return isNaN(width) ? this.$el.clientWidth : width;
    },
    updateMiniVariant: function updateMiniVariant(val) {
      if (this.miniVariant !== val) this.$emit('update:mini-variant', val);
    }
  },
  render: function render(h) {
    var children = [this.genPrepend(), this.genContent(), this.genAppend(), this.genBorder()];
    if (this.src || Object(helpers["l" /* getSlot */])(this, 'img')) children.unshift(this.genBackground());
    return h(this.tag, this.setBackgroundColor(this.color, {
      class: this.classes,
      style: this.styles,
      directives: this.genDirectives(),
      on: this.genListeners()
    }), children);
  }
}));

/***/ })

}]);
//# sourceMappingURL=frontend-components.common.3.js.map