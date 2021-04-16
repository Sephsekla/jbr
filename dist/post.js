/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", "",{"version":3,"sources":["webpack://./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,MAAM;CACN,eAAe;CACf,YAAY;CACZ,UAAU,EAAE,4CAA4C;CACxD,oBAAoB;CACpB,4BAA4B;;CAE5B,yBAAyB;CACzB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;;AAElB;;CAEC;EACC,cAAc;EACd,6BAA6B;CAC9B;;EAEC;GACC,4BAA4B;GAC5B,WAAW;GACX,cAAc;GACd,oBAAoB;GACpB,iBAAiB;EAClB","sourcesContent":["pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/.pnpm/magnific-popup@1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/magnific-popup@1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (true) { 
 // AMD. Register as an anonymous module. 
 !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 
 } else {} 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));

/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-clike.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-clike.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-core.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-core.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	/**
	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
	 * additional languages or plugins yourself.
	 *
	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
	 *
	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
	 * empty Prism object into the global scope before loading the Prism script like this:
	 *
	 * ```js
	 * window.Prism = window.Prism || {};
	 * Prism.manual = true;
	 * // add a new <script> to load Prism's script
	 * ```
	 *
	 * @default false
	 * @type {boolean}
	 * @memberof Prism
	 * @public
	 */
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

	/**
	 * A namespace for utility methods.
	 *
	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
	 * change or disappear at any time.
	 *
	 * @namespace
	 * @memberof Prism
	 */
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		/**
		 * Returns the name of the type of the given value.
		 *
		 * @param {any} o
		 * @returns {string}
		 * @example
		 * type(null)      === 'Null'
		 * type(undefined) === 'Undefined'
		 * type(123)       === 'Number'
		 * type('foo')     === 'String'
		 * type(true)      === 'Boolean'
		 * type([1, 2])    === 'Array'
		 * type({})        === 'Object'
		 * type(String)    === 'Function'
		 * type(/abc+/)    === 'RegExp'
		 */
		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		/**
		 * Returns a unique number for the given object. Later calls will still return the same number.
		 *
		 * @param {Object} obj
		 * @returns {number}
		 */
		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		/**
		 * Creates a deep clone of the given object.
		 *
		 * The main intended use of this function is to clone language definitions.
		 *
		 * @param {T} o
		 * @param {Record<number, any>} [visited]
		 * @returns {T}
		 * @template T
		 */
		clone: function deepClone(o, visited) {
			visited = visited || {};

			var clone, id;
			switch (_.util.type(o)) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = /** @type {Record<string, any>} */ ({});
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return /** @type {any} */ (clone);

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return /** @type {any} */ (clone);

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
				return /** @type {any} */ (document.currentScript);
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		},

		/**
		 * Returns whether a given class is active for `element`.
		 *
		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
		 * given class is just the given class with a `no-` prefix.
		 *
		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
		 *
		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
		 * version of it, the class is considered active.
		 *
		 * @param {Element} element
		 * @param {string} className
		 * @param {boolean} [defaultActivation=false]
		 * @returns {boolean}
		 */
		isActive: function (element, className, defaultActivation) {
			var no = 'no-' + className;

			while (element) {
				var classList = element.classList;
				if (classList.contains(className)) {
					return true;
				}
				if (classList.contains(no)) {
					return false;
				}
				element = element.parentElement;
			}
			return !!defaultActivation;
		}
	},

	/**
	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
	 *
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	languages: {
		/**
		 * Creates a deep copy of the language with the given id and appends the given tokens.
		 *
		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
		 * will be overwritten at its original position.
		 *
		 * ## Best practices
		 *
		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
		 *
		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
		 *
		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
		 * @param {Grammar} redef The new tokens to append.
		 * @returns {Grammar} The new language created.
		 * @public
		 * @example
		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
		 *     // at its original position
		 *     'comment': { ... },
		 *     // CSS doesn't have a 'color' token, so this token will be appended
		 *     'color': /\b(?:red|green|blue)\b/
		 * });
		 */
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Inserts tokens _before_ another token in a language definition or any other grammar.
		 *
		 * ## Usage
		 *
		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
		 * this:
		 *
		 * ```js
		 * Prism.languages.markup.style = {
		 *     // token
		 * };
		 * ```
		 *
		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
		 * before existing tokens. For the CSS example above, you would use it like this:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'cdata', {
		 *     'style': {
		 *         // token
		 *     }
		 * });
		 * ```
		 *
		 * ## Special cases
		 *
		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
		 * will be ignored.
		 *
		 * This behavior can be used to insert tokens after `before`:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'comment', {
		 *     'comment': Prism.languages.markup.comment,
		 *     // tokens after 'comment'
		 * });
		 * ```
		 *
		 * ## Limitations
		 *
		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
		 * deleting properties which is necessary to insert at arbitrary positions.
		 *
		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
		 * Instead, it will create a new object and replace all references to the target object with the new one. This
		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
		 *
		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
		 * you hold the target object in a variable, then the value of the variable will not change.
		 *
		 * ```js
		 * var oldMarkup = Prism.languages.markup;
		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
		 *
		 * assert(oldMarkup !== Prism.languages.markup);
		 * assert(newMarkup === Prism.languages.markup);
		 * ```
		 *
		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
		 * object to be modified.
		 * @param {string} before The key to insert before.
		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
		 * object to be modified.
		 *
		 * Defaults to `Prism.languages`.
		 * @returns {Grammar} The new grammar object.
		 * @public
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || /** @type {any} */ (_.languages);
			var grammar = root[inside];
			/** @type {Grammar} */
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},

	plugins: {},

	/**
	 * This is the most high-level function in Prism’s API.
	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
	 * each one of them.
	 *
	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
	 *
	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
	 * @memberof Prism
	 * @public
	 */
	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	/**
	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
	 * {@link Prism.highlightElement} on each one of them.
	 *
	 * The following hooks will be run:
	 * 1. `before-highlightall`
	 * 2. `before-all-elements-highlight`
	 * 3. All hooks of {@link Prism.highlightElement} for each element.
	 *
	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
	 * @memberof Prism
	 * @public
	 */
	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	/**
	 * Highlights the code inside a single element.
	 *
	 * The following hooks will be run:
	 * 1. `before-sanity-check`
	 * 2. `before-highlight`
	 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
	 * 4. `before-insert`
	 * 5. `after-highlight`
	 * 6. `complete`
	 *
	 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
	 * the element's language.
	 *
	 * @param {Element} element The element containing the code.
	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
	 *
	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
	 * asynchronous highlighting to work. You can build your own bundle on the
	 * [Download page](https://prismjs.com/download.html).
	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
	 * @memberof Prism
	 * @public
	 */
	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentElement;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	/**
	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
	 * and the language definitions to use, and returns a string with the HTML produced.
	 *
	 * The following hooks will be run:
	 * 1. `before-tokenize`
	 * 2. `after-tokenize`
	 * 3. `wrap`: On each {@link Token}.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @param {string} language The name of the language definition passed to `grammar`.
	 * @returns {string} The highlighted HTML.
	 * @memberof Prism
	 * @public
	 * @example
	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
	 */
	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	/**
	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
	 * and the language definitions to use, and returns an array with the tokenized code.
	 *
	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
	 *
	 * This method could be useful in other contexts as well, as a very crude parser.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @returns {TokenStream} An array of strings and tokens, a token stream.
	 * @memberof Prism
	 * @public
	 * @example
	 * let code = `var foo = 0;`;
	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
	 * tokens.forEach(token => {
	 *     if (token instanceof Prism.Token && token.type === 'number') {
	 *         console.log(`Found numeric literal: ${token.content}`);
	 *     }
	 * });
	 */
	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	/**
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	hooks: {
		all: {},

		/**
		 * Adds the given callback to the list of callbacks for the given hook.
		 *
		 * The callback will be invoked when the hook it is registered for is run.
		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
		 *
		 * One callback function can be registered to multiple hooks and the same hook multiple times.
		 *
		 * @param {string} name The name of the hook.
		 * @param {HookCallback} callback The callback function which is given environment variables.
		 * @public
		 */
		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		/**
		 * Runs a hook invoking all registered callbacks with the given environment variables.
		 *
		 * Callbacks will be invoked synchronously and in the order in which they were registered.
		 *
		 * @param {string} name The name of the hook.
		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
		 * @public
		 */
		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};
_self.Prism = _;


// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

/**
 * Creates a new token.
 *
 * @param {string} type See {@link Token#type type}
 * @param {string | TokenStream} content See {@link Token#content content}
 * @param {string|string[]} [alias] The alias(es) of the token.
 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
 * @class
 * @global
 * @public
 */
function Token(type, content, alias, matchedStr) {
	/**
	 * The type of the token.
	 *
	 * This is usually the key of a pattern in a {@link Grammar}.
	 *
	 * @type {string}
	 * @see GrammarToken
	 * @public
	 */
	this.type = type;
	/**
	 * The strings or tokens contained by this token.
	 *
	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
	 *
	 * @type {string | TokenStream}
	 * @public
	 */
	this.content = content;
	/**
	 * The alias(es) of the token.
	 *
	 * @type {string|string[]}
	 * @see GrammarToken
	 * @public
	 */
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length | 0;
}

/**
 * A token stream is an array of strings and {@link Token Token} objects.
 *
 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
 * them.
 *
 * 1. No adjacent strings.
 * 2. No empty strings.
 *
 *    The only exception here is the token stream that only contains the empty string and nothing else.
 *
 * @typedef {Array<string | Token>} TokenStream
 * @global
 * @public
 */

/**
 * Converts the given token or token stream to an HTML representation.
 *
 * The following hooks will be run:
 * 1. `wrap`: On each {@link Token}.
 *
 * @param {string | Token | TokenStream} o The token or token stream to be converted.
 * @param {string} language The name of current language.
 * @returns {string} The HTML representation of the token or token stream.
 * @memberof Token
 * @static
 */
Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {RegExp} pattern
 * @param {number} pos
 * @param {string} text
 * @param {boolean} lookbehind
 * @returns {RegExpExecArray | null}
 */
function matchPattern(pattern, pos, text, lookbehind) {
	pattern.lastIndex = pos;
	var match = pattern.exec(text);
	if (match && lookbehind && match[1]) {
		// change the match to remove the text matched by the Prism lookbehind group
		var lookbehindLength = match[1].length;
		match.index += lookbehindLength;
		match[0] = match[0].slice(lookbehindLength);
	}
	return match;
}

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {RematchOptions} [rematch]
 * @returns {void}
 * @private
 *
 * @typedef RematchOptions
 * @property {string} cause
 * @property {number} reach
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + ',' + j) {
				return;
			}

			var patternObj = patterns[j],
				inside = patternObj.inside,
				lookbehind = !!patternObj.lookbehind,
				greedy = !!patternObj.greedy,
				alias = patternObj.alias;

			if (greedy && !patternObj.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
			}

			/** @type {RegExp} */
			var pattern = patternObj.pattern || patternObj;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				if (rematch && pos >= rematch.reach) {
					break;
				}

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween
				var match;

				if (greedy) {
					match = matchPattern(pattern, pos, text, lookbehind);
					if (!match) {
						break;
					}

					var from = match.index;
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || typeof k.value === 'string');
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					match = matchPattern(pattern, 0, str, lookbehind);
					if (!match) {
						continue;
					}
				}

				var from = match.index,
					matchStr = match[0],
					before = str.slice(0, from),
					after = str.slice(from + matchStr.length);

				var reach = pos + str.length;
				if (rematch && reach > rematch.reach) {
					rematch.reach = reach;
				}

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}

				if (removeCount > 1) {
					// at least one Token object was removed, so we have to do some rematching
					// this can only happen if the current pattern is greedy
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
						cause: token + ',' + j,
						reach: reach
					});
				}
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 * @private
 */

/**
 * @template T
 * @private
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

// Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
*/

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
*/

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack@4.43.0/node_modules/webpack/buildin/global.js */ "./node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-css.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-css.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
				lookbehind: true,
				inside: {
					'attr-value': {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: {
							'style': {
								pattern: /(["'])[\s\S]+(?=["']$)/,
								lookbehind: true,
								alias: 'language-css',
								inside: Prism.languages.css
							},
							'punctuation': [
								{
									pattern: /^=/,
									alias: 'attr-equals'
								},
								/"|'/
							]
						}
					},
					'attr-name': /^style/i
				}
			}
		}, markup.tag);
	}

}(Prism));


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-git.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-git.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.git = {
	/*
	 * A simple one line comment like in a git status command
	 * For instance:
	 * $ git status
	 * # On branch infinite-scroll
	 * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
	 * # and have 1 and 2 different commits each, respectively.
	 * nothing to commit (working directory clean)
	 */
	'comment': /^#.*/m,

	/*
	 * Regexp to match the changed lines in a git diff output. Check the example below.
	 */
	'deleted': /^[-–].*/m,
	'inserted': /^\+.*/m,

	/*
	 * a string (double and simple quote)
	 */
	'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

	/*
	 * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
	 * For instance:
	 * $ git add file.txt
	 */
	'command': {
		pattern: /^.*\$ git .*$/m,
		inside: {
			/*
			 * A git command can contain a parameter starting by a single or a double dash followed by a string
			 * For instance:
			 * $ git diff --cached
			 * $ git log -p
			 */
			'parameter': /\s--?\w+/m
		}
	},

	/*
	 * Coordinates displayed in a git diff command
	 * For instance:
	 * $ git diff
	 * diff --git file.txt file.txt
	 * index 6214953..1d54a52 100644
	 * --- file.txt
	 * +++ file.txt
	 * @@ -1 +1,2 @@
	 * -Here's my tetx file
	 * +Here's my text file
	 * +And this is the second line
	 */
	'coord': /^@@.*@@$/m,

	/*
	 * Match a "commit [SHA1]" line in a git log output.
	 * For instance:
	 * $ git log
	 * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
	 * Author: lgiraudel
	 * Date:   Mon Feb 17 11:18:34 2014 +0100
	 *
	 *     Add of a new line
	 */
	'commit-sha1': /^commit \w{40}$/m
};


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-javascript.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-javascript.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-flags': /[a-z]+$/,
			'regex-delimiter': /^\/|\/$/
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup-templating.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup-templating.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1)
						++i;

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-php.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-php.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 * Rewritten by Tom Pavelec
 *
 * Supports PHP 5.3 - 8.0
 */
(function (Prism) {
	var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
	var constant = [
		{
			pattern: /\b(?:false|true)\b/i,
			alias: 'boolean'
		},
		/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
		/\b(?:null)\b/i,
	];
	var number = /\b0b[01]+\b|\b0x[\da-f]+\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+)(?:e[+-]?\d+)?/i;
	var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
	var punctuation = /[{}\[\](),:;]/;

	Prism.languages.php = {
		'delimiter': {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: 'important'
		},
		'comment': comment,
		'variable': /\$+(?:\w+\b|(?={))/i,
		'package': {
			pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
			lookbehind: true,
			inside: {
				'punctuation': /\\/
			}
		},
		'keyword': [
			{
				pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
				alias: 'type-casting',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*[a-z0-9_|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?[a-z0-9_|]\|\s*)(?:null|false)\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
				alias: 'type-declaration',
				greedy: true
			},
			{
				pattern: /(\|\s*)(?:null|false)\b/i,
				alias: 'type-declaration',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b(?:parent|self|static)(?=\s*::)/i,
				alias: 'static-context',
				greedy: true
			},
			/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i
		],
		'argument-name': /\b[a-z_]\w*(?=\s*:(?!:))/i,
		'class-name': [
			{
				pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
				greedy: true
			},
			{
				pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: 'class-name-fully-qualified',
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-declaration',
				greedy: true
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-declaration'],
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*::)/i,
				alias: 'static-context',
				greedy: true
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
				alias: ['class-name-fully-qualified', 'static-context'],
				greedy: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-hint'],
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
				alias: 'return-type',
				greedy: true,
				lookbehind: true
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: ['class-name-fully-qualified', 'return-type'],
				greedy: true,
				lookbehind: true,
				inside: {
					'punctuation': /\\/
				}
			}
		],
		'constant': constant,
		'function': /\w+\s*(?=\()/,
		'property': {
			pattern: /(->)[\w]+/,
			lookbehind: true
		},
		'number': number,
		'operator': operator,
		'punctuation': punctuation
	};

	var string_interpolation = {
		pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
		lookbehind: true,
		inside: Prism.languages.php
	};

	var string = [
		{
			pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
			alias: 'nowdoc-string',
			greedy: true,
			inside: {
				'delimiter': {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<'?|[';]$/
					}
				}
			}
		},
		{
			pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
			alias: 'heredoc-string',
			greedy: true,
			inside: {
				'delimiter': {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<"?|[";]$/
					}
				},
				'interpolation': string_interpolation // See below
			}
		},
		{
			pattern: /`(?:\\[\s\S]|[^\\`])*`/,
			alias: 'backtick-quoted-string',
			greedy: true
		},
		{
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			alias: 'single-quoted-string',
			greedy: true
		},
		{
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			alias: 'double-quoted-string',
			greedy: true,
			inside: {
				'interpolation': string_interpolation // See below
			}
		}
	];

	Prism.languages.insertBefore('php', 'variable', {
		'string': string,
	});

	Prism.languages.insertBefore('php', 'variable', {
		'attribute': {
			pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/mi,
			greedy: true,
			inside: {
				'attribute-content': {
					pattern: /^(#\[)[\s\S]+(?=]$)/,
					lookbehind: true,
					// inside can appear subset of php
					inside: {
						'comment': comment,
						'string': string,
						'attribute-class-name': [
							{
								pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
								alias: 'class-name',
								greedy: true,
								lookbehind: true
							},
							{
								pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
								alias: [
									'class-name',
									'class-name-fully-qualified'
								],
								greedy: true,
								lookbehind: true,
								inside: {
									'punctuation': /\\/
								}
							}
						],
						'constant': constant,
						'number': number,
						'operator': operator,
						'punctuation': punctuation
					}
				},
				'delimiter': {
					pattern: /^#\[|]$/,
					alias: 'punctuation'
				}
			}
		},
	});

	Prism.hooks.add('before-tokenize', function(env) {
		if (!/<\?/.test(env.code)) {
			return;
		}

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/ig;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_2_0_0_webpack_4_43_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../style-loader@2.0.0_webpack@4.43.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@4.43.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_2_0_0_webpack_4_43_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_2_0_0_webpack_4_43_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_cjs_js_ref_7_1_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/cjs.js??ref--7-1!./prism-line-numbers.css */ "./node_modules/.pnpm/css-loader@5.2.1_webpack@4.43.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_2_0_0_webpack_4_43_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_cjs_js_ref_7_1_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_5_2_1_webpack_4_43_0_node_modules_css_loader_dist_cjs_js_ref_7_1_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	/**
	 * Plugin name which is used as a class name for <pre> which is activating the plugin
	 * @type {String}
	 */
	var PLUGIN_NAME = 'line-numbers';

	/**
	 * Regular expression used for determining line breaks
	 * @type {RegExp}
	 */
	var NEW_LINE_EXP = /\n(?!$)/g;


	/**
	 * Global exports
	 */
	var config = Prism.plugins.lineNumbers = {
		/**
		 * Get node for provided line number
		 * @param {Element} element pre element
		 * @param {Number} number line number
		 * @return {Element|undefined}
		 */
		getLine: function (element, number) {
			if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
				return;
			}

			var lineNumberRows = element.querySelector('.line-numbers-rows');
			if (!lineNumberRows) {
				return;
			}
			var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
			var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);

			if (number < lineNumberStart) {
				number = lineNumberStart;
			}
			if (number > lineNumberEnd) {
				number = lineNumberEnd;
			}

			var lineIndex = number - lineNumberStart;

			return lineNumberRows.children[lineIndex];
		},

		/**
		 * Resizes the line numbers of the given element.
		 *
		 * This function will not add line numbers. It will only resize existing ones.
		 * @param {HTMLElement} element A `<pre>` element with line numbers.
		 * @returns {void}
		 */
		resize: function (element) {
			resizeElements([element]);
		},

		/**
		 * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
		 * the current viewport.
		 *
		 * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
		 *
		 * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
		 *
		 * @type {boolean}
		 */
		assumeViewportIndependence: true
	};

	/**
	 * Resizes the given elements.
	 *
	 * @param {HTMLElement[]} elements
	 */
	function resizeElements(elements) {
		elements = elements.filter(function (e) {
			var codeStyles = getStyles(e);
			var whiteSpace = codeStyles['white-space'];
			return whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line';
		});

		if (elements.length == 0) {
			return;
		}

		var infos = elements.map(function (element) {
			var codeElement = element.querySelector('code');
			var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
			if (!codeElement || !lineNumbersWrapper) {
				return undefined;
			}

			/** @type {HTMLElement} */
			var lineNumberSizer = element.querySelector('.line-numbers-sizer');
			var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

			if (!lineNumberSizer) {
				lineNumberSizer = document.createElement('span');
				lineNumberSizer.className = 'line-numbers-sizer';

				codeElement.appendChild(lineNumberSizer);
			}

			lineNumberSizer.innerHTML = '0';
			lineNumberSizer.style.display = 'block';

			var oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
			lineNumberSizer.innerHTML = '';

			return {
				element: element,
				lines: codeLines,
				lineHeights: [],
				oneLinerHeight: oneLinerHeight,
				sizer: lineNumberSizer,
			};
		}).filter(Boolean);

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var lines = info.lines;
			var lineHeights = info.lineHeights;
			var oneLinerHeight = info.oneLinerHeight;

			lineHeights[lines.length - 1] = undefined;
			lines.forEach(function (line, index) {
				if (line && line.length > 1) {
					var e = lineNumberSizer.appendChild(document.createElement('span'));
					e.style.display = 'block';
					e.textContent = line;
				} else {
					lineHeights[index] = oneLinerHeight;
				}
			});
		});

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var lineHeights = info.lineHeights;

			var childIndex = 0;
			for (var i = 0; i < lineHeights.length; i++) {
				if (lineHeights[i] === undefined) {
					lineHeights[i] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
				}
			}
		});

		infos.forEach(function (info) {
			var lineNumberSizer = info.sizer;
			var wrapper = info.element.querySelector('.line-numbers-rows');

			lineNumberSizer.style.display = 'none';
			lineNumberSizer.innerHTML = '';

			info.lineHeights.forEach(function (height, lineNumber) {
				wrapper.children[lineNumber].style.height = height + 'px';
			});
		});
	}

	/**
	 * Returns style declarations for the element
	 * @param {Element} element
	 */
	var getStyles = function (element) {
		if (!element) {
			return null;
		}

		return window.getComputedStyle ? getComputedStyle(element) : (element.currentStyle || null);
	};

	var lastWidth = undefined;
	window.addEventListener('resize', function () {
		if (config.assumeViewportIndependence && lastWidth === window.innerWidth) {
			return;
		}
		lastWidth = window.innerWidth;

		resizeElements(Array.prototype.slice.call(document.querySelectorAll('pre.' + PLUGIN_NAME)));
	});

	Prism.hooks.add('complete', function (env) {
		if (!env.code) {
			return;
		}

		var code = /** @type {Element} */ (env.element);
		var pre = /** @type {HTMLElement} */ (code.parentNode);

		// works only for <code> wrapped inside <pre> (not inline)
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Abort if line numbers already exists
		if (code.querySelector('.line-numbers-rows')) {
			return;
		}

		// only add line numbers if <code> or one of its ancestors has the `line-numbers` class
		if (!Prism.util.isActive(code, PLUGIN_NAME)) {
			return;
		}

		// Remove the class 'line-numbers' from the <code>
		code.classList.remove(PLUGIN_NAME);
		// Add the class 'line-numbers' to the <pre>
		pre.classList.add(PLUGIN_NAME);

		var match = env.code.match(NEW_LINE_EXP);
		var linesNum = match ? match.length + 1 : 1;
		var lineNumbersWrapper;

		var lines = new Array(linesNum + 1).join('<span></span>');

		lineNumbersWrapper = document.createElement('span');
		lineNumbersWrapper.setAttribute('aria-hidden', 'true');
		lineNumbersWrapper.className = 'line-numbers-rows';
		lineNumbersWrapper.innerHTML = lines;

		if (pre.hasAttribute('data-start')) {
			pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
		}

		env.element.appendChild(lineNumbersWrapper);

		resizeElements([pre]);

		Prism.hooks.run('line-numbers', env);
	});

	Prism.hooks.add('line-numbers', function (env) {
		env.plugins = env.plugins || {};
		env.plugins.lineNumbers = true;
	});

}());


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@4.43.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@4.43.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/codehighlight.js":
/*!*********************************!*\
  !*** ./src/js/codehighlight.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-clike.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-markup-templating.js");
/* harmony import */ var prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup_templating__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-php.js");
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.css */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_git__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-git */ "./node_modules/.pnpm/prismjs@1.23.0/node_modules/prismjs/components/prism-git.js");
/* harmony import */ var prismjs_components_prism_git__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_git__WEBPACK_IMPORTED_MODULE_9__);











__webpack_require__(/*! submodules/prism-treeview/prism-treeview.js */ "./submodules/prism-treeview/prism-treeview.js");
/**
 * Highlight all code with prismjs
 *
 */


function initHighlight() {
  //Prism.highlightAll(); // Hightlight all code with prismjs
  setTimeout(function () {// Just in case something loads in after page load
    //  Prism.highlightAll();
  }, 0);
}

/* harmony default export */ __webpack_exports__["default"] = (initHighlight);

/***/ }),

/***/ "./src/js/popups.js":
/*!**************************!*\
  !*** ./src/js/popups.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnific-popup */ "./node_modules/.pnpm/magnific-popup@1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  Create setup for individual gallery
 *
 * @param {*} galleryLink jQuery object (link that a user will click for the gallery)
 */

function prepareGallery(galleryLink) {
  var id = $(galleryLink).attr('href'); // Find the href from the id

  var imgs = [];
  $(id).find('img').each(function () {
    // Loop through each image inside the linked container
    imgs.push({
      src: $(this).attr('src')
    } // Add an object to the imgs array with the img src
    );
  });
  $(galleryLink).magnificPopup({
    // Create an mfp instance for the image.
    type: 'image',
    items: imgs,
    gallery: {
      enabled: true
    }
  });
}
/**
 * Add gallery popup functionality
 */


function initGalleryPopups() {
  $('.mfp-gallery').each(function () {
    // We will loop through each item in the gallery linked to on a mfp-gallery link
    prepareGallery(this);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initGalleryPopups);

/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/popups */ "./src/js/popups.js");
/* harmony import */ var _js_codehighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/codehighlight */ "./src/js/codehighlight.js");


Object(_js_popups__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_js_codehighlight__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./submodules/prism-treeview/prism-treeview.js":
/*!*****************************************************!*\
  !*** ./submodules/prism-treeview/prism-treeview.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.treeview = {
  "treeview-part": {
    pattern: /(^|\n).+/,
    inside: {
      "entry-line": [{
        pattern: /\|-- |├── /,
        alias: "line-h"
      }, {
        pattern: /\|   |│   /,
        alias: "line-v"
      }, {
        pattern: /`-- |└── /,
        alias: "line-v-last"
      }, {
        pattern: / {4}/,
        alias: "line-v-gap"
      }],
      "entry-name": {
        pattern: /.*\S.*/,
        inside: {
          // symlink
          "operator": / -> /
        }
      }
    }
  }
};
Prism.hooks.add('wrap', function (env) {
  if (env.language === 'treeview') {
    // Remove line breaks
    if (env.type === 'treeview-part') {
      env.content = env.content.replace(/\n/g, '') + '<br />';
    }

    if (env.type === 'entry-name') {
      if (/(^|[^\\])\/\s*$/.test(env.content)) {
        env.content = env.content.slice(0, -1); // This is a folder

        env.classes.push('dir');
      } else {
        if (/(^|[^\\])[=*|]\s*$/.test(env.content)) {
          env.content = env.content.slice(0, -1);
        }

        var parts = env.content.toLowerCase().split('.');

        while (parts.length > 1) {
          parts.shift(); // Ex. 'foo.min.js' would become '<span class="token keyword ext-min-js ext-js">foo.min.js</span>'

          env.classes.push('ext-' + parts.join('-'));
        }
      }

      if (env.content.charAt(0) === '.') {
        env.classes.push('dotfile');
      }
    }
  }
});

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMy4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjFfd2VicGFja0A0LjQzLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuMV93ZWJwYWNrQDQuNDMuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vbWFnbmlmaWMtcG9wdXBAMS4xLjAvbm9kZV9tb2R1bGVzL21hZ25pZmljLXBvcHVwL2Rpc3QvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjMuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNsaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjMuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMy4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjMuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcHJpc21qc0AxLjIzLjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjMuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cC10ZW1wbGF0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjMuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcHJpc21qc0AxLjIzLjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1waHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMy4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3M/OWE4ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcHJpc21qc0AxLjIzLjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMi4wLjBfd2VicGFja0A0LjQzLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvZGVoaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zdWJtb2R1bGVzL3ByaXNtLXRyZWV2aWV3L3ByaXNtLXRyZWV2aWV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzZXRUaW1lb3V0IiwiaWQiLCIkIiwiaW1ncyIsInNyYyIsInR5cGUiLCJpdGVtcyIsImdhbGxlcnkiLCJlbmFibGVkIiwicHJlcGFyZUdhbGxlcnkiLCJpbml0R2FsbGVyeVBvcHVwcyIsImluaXRIaWdobGlnaHQiLCJQcmlzbSIsInBhdHRlcm4iLCJpbnNpZGUiLCJhbGlhcyIsImVudiIsInBhcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNrSztBQUM3QjtBQUNySSw4QkFBOEIsbUhBQTJCLENBQUMsc0lBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsMkNBQTJDLHVC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QTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBLGU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7O0FBSUEsNEJBQTRCLG1DO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxpQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxFQUFFOztBQUU5RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxHQUFHO0FBQ0g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGNBQWMsa0JBQWtCLG9CQUFvQixjQUFjO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOzs7OztBQUtGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsOEVBQThFOztBQUU5RTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsTUFBTTs7QUFFZCxPQUFPLFlBQVk7O0FBRW5CLE1BQU0sTUFBTTs7O0FBR1o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7QUFJRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFD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RHVDLENBRXZDOztBQUNBQSxXQUFHLENBQUhBO0FBSEQsYUFJTztBQUVOLFlBQUcsMEJBQTBCQSxHQUFHLENBQWhDLE9BQUcsQ0FBSCxFQUEyQztBQUMxQ0EsYUFBRyxDQUFIQSxVQUFjQSxHQUFHLENBQUhBLGlCQUFvQixDQUFsQ0EsQ0FBY0EsQ0FBZEE7QUFDQTs7QUFFRCxZQUFJQyxLQUFLLEdBQUdELEdBQUcsQ0FBSEEsNEJBQVosR0FBWUEsQ0FBWjs7QUFDQSxlQUFPQyxLQUFLLENBQUxBLFNBQVAsR0FBeUI7QUFDeEJBLGVBQUssQ0FEbUIsS0FDeEJBLEdBRHdCLENBRXhCOztBQUNBRCxhQUFHLENBQUhBLGFBQWlCLFNBQVNDLEtBQUssQ0FBTEEsS0FBMUJELEdBQTBCQyxDQUExQkQ7QUFDQTtBQUNEOztBQUVELFVBQUdBLEdBQUcsQ0FBSEEsc0JBQUgsS0FBZ0M7QUFDL0JBLFdBQUcsQ0FBSEE7QUFDQTtBQUNEO0FBQ0Q7QUE3QkZKLEc7Ozs7Ozs7Ozs7O0FDakNBLHdCIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wb3N0LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJANS4yLjFfd2VicGFja0A0LjQzLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJANS4yLjFfd2VicGFja0A0LjQzLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwicHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAzLjhlbTtcXG5cXHRjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xcbn1cXG5cXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMgPiBjb2RlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0dG9wOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRsZWZ0OiAtMy44ZW07XFxuXFx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcXG5cXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcbn1cXG5cXG5cXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcXG5cXHR9XFxuXFxuXFx0XFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XFxuXFx0XFx0XFx0Y29sb3I6ICM5OTk7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0cGFkZGluZy1yaWdodDogMC44ZW07XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0XFx0fVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjMuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixNQUFNO0NBQ04sZUFBZTtDQUNmLFlBQVk7Q0FDWixVQUFVLEVBQUUsNENBQTRDO0NBQ3hELG9CQUFvQjtDQUNwQiw0QkFBNEI7O0NBRTVCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGlCQUFpQjs7QUFFbEI7O0NBRUM7RUFDQyxjQUFjO0VBQ2QsNkJBQTZCO0NBQzlCOztFQUVDO0dBQ0MsNEJBQTRCO0dBQzVCLFdBQVc7R0FDWCxjQUFjO0dBQ2Qsb0JBQW9CO0dBQ3BCLGlCQUFpQjtFQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMuOGVtO1xcblxcdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XFxufVxcblxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyA+IGNvZGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aGl0ZS1zcGFjZTogaW5oZXJpdDtcXG59XFxuXFxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGxlZnQ6IC0zLjhlbTtcXG5cXHR3aWR0aDogM2VtOyAvKiB3b3JrcyBmb3IgbGluZS1udW1iZXJzIGJlbG93IDEwMDAgbGluZXMgKi9cXG5cXHRsZXR0ZXItc3BhY2luZzogLTFweDtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xcblxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcblxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW4ge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtYmVyO1xcblxcdH1cXG5cXG5cXHRcXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcXG5cXHRcXHRcXHRjb2xvcjogIzk5OTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRcXHR9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qISBNYWduaWZpYyBQb3B1cCAtIHYxLjEuMCAtIDIwMTYtMDItMjBcbiogaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvXG4qIENvcHlyaWdodCAoYykgMjAxNiBEbWl0cnkgU2VtZW5vdjsgKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHsgXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7IFxuIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS4gXG4gZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpOyBcbiB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgeyBcbiAvLyBOb2RlL0NvbW1vbkpTIFxuIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpOyBcbiB9IGVsc2UgeyBcbiAvLyBCcm93c2VyIGdsb2JhbHMgXG4gZmFjdG9yeSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byk7IFxuIH0gXG4gfShmdW5jdGlvbigkKSB7IFxuXG4vKj4+Y29yZSovXG4vKipcbiAqIFxuICogTWFnbmlmaWMgUG9wdXAgQ29yZSBKUyBmaWxlXG4gKiBcbiAqL1xuXG5cbi8qKlxuICogUHJpdmF0ZSBzdGF0aWMgY29uc3RhbnRzXG4gKi9cbnZhciBDTE9TRV9FVkVOVCA9ICdDbG9zZScsXG5cdEJFRk9SRV9DTE9TRV9FVkVOVCA9ICdCZWZvcmVDbG9zZScsXG5cdEFGVEVSX0NMT1NFX0VWRU5UID0gJ0FmdGVyQ2xvc2UnLFxuXHRCRUZPUkVfQVBQRU5EX0VWRU5UID0gJ0JlZm9yZUFwcGVuZCcsXG5cdE1BUktVUF9QQVJTRV9FVkVOVCA9ICdNYXJrdXBQYXJzZScsXG5cdE9QRU5fRVZFTlQgPSAnT3BlbicsXG5cdENIQU5HRV9FVkVOVCA9ICdDaGFuZ2UnLFxuXHROUyA9ICdtZnAnLFxuXHRFVkVOVF9OUyA9ICcuJyArIE5TLFxuXHRSRUFEWV9DTEFTUyA9ICdtZnAtcmVhZHknLFxuXHRSRU1PVklOR19DTEFTUyA9ICdtZnAtcmVtb3ZpbmcnLFxuXHRQUkVWRU5UX0NMT1NFX0NMQVNTID0gJ21mcC1wcmV2ZW50LWNsb3NlJztcblxuXG4vKipcbiAqIFByaXZhdGUgdmFycyBcbiAqL1xuLypqc2hpbnQgLVcwNzkgKi9cbnZhciBtZnAsIC8vIEFzIHdlIGhhdmUgb25seSBvbmUgaW5zdGFuY2Ugb2YgTWFnbmlmaWNQb3B1cCBvYmplY3QsIHdlIGRlZmluZSBpdCBsb2NhbGx5IHRvIG5vdCB0byB1c2UgJ3RoaXMnXG5cdE1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbigpe30sXG5cdF9pc0pRID0gISEod2luZG93LmpRdWVyeSksXG5cdF9wcmV2U3RhdHVzLFxuXHRfd2luZG93ID0gJCh3aW5kb3cpLFxuXHRfZG9jdW1lbnQsXG5cdF9wcmV2Q29udGVudFR5cGUsXG5cdF93cmFwQ2xhc3Nlcyxcblx0X2N1cnJQb3B1cFR5cGU7XG5cblxuLyoqXG4gKiBQcml2YXRlIGZ1bmN0aW9uc1xuICovXG52YXIgX21mcE9uID0gZnVuY3Rpb24obmFtZSwgZikge1xuXHRcdG1mcC5ldi5vbihOUyArIG5hbWUgKyBFVkVOVF9OUywgZik7XG5cdH0sXG5cdF9nZXRFbCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgYXBwZW5kVG8sIGh0bWwsIHJhdykge1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVsLmNsYXNzTmFtZSA9ICdtZnAtJytjbGFzc05hbWU7XG5cdFx0aWYoaHRtbCkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9XG5cdFx0aWYoIXJhdykge1xuXHRcdFx0ZWwgPSAkKGVsKTtcblx0XHRcdGlmKGFwcGVuZFRvKSB7XG5cdFx0XHRcdGVsLmFwcGVuZFRvKGFwcGVuZFRvKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoYXBwZW5kVG8pIHtcblx0XHRcdGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXHRfbWZwVHJpZ2dlciA9IGZ1bmN0aW9uKGUsIGRhdGEpIHtcblx0XHRtZnAuZXYudHJpZ2dlckhhbmRsZXIoTlMgKyBlLCBkYXRhKTtcblxuXHRcdGlmKG1mcC5zdC5jYWxsYmFja3MpIHtcblx0XHRcdC8vIGNvbnZlcnRzIFwibWZwRXZlbnROYW1lXCIgdG8gXCJldmVudE5hbWVcIiBjYWxsYmFjayBhbmQgdHJpZ2dlcnMgaXQgaWYgaXQncyBwcmVzZW50XG5cdFx0XHRlID0gZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGUuc2xpY2UoMSk7XG5cdFx0XHRpZihtZnAuc3QuY2FsbGJhY2tzW2VdKSB7XG5cdFx0XHRcdG1mcC5zdC5jYWxsYmFja3NbZV0uYXBwbHkobWZwLCAkLmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9nZXRDbG9zZUJ0biA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZih0eXBlICE9PSBfY3VyclBvcHVwVHlwZSB8fCAhbWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bikge1xuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0biA9ICQoIG1mcC5zdC5jbG9zZU1hcmt1cC5yZXBsYWNlKCcldGl0bGUlJywgbWZwLnN0LnRDbG9zZSApICk7XG5cdFx0XHRfY3VyclBvcHVwVHlwZSA9IHR5cGU7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuO1xuXHR9LFxuXHQvLyBJbml0aWFsaXplIE1hZ25pZmljIFBvcHVwIG9ubHkgd2hlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRfY2hlY2tJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCEkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UpIHtcblx0XHRcdC8qanNoaW50IC1XMDIwICovXG5cdFx0XHRtZnAgPSBuZXcgTWFnbmlmaWNQb3B1cCgpO1xuXHRcdFx0bWZwLmluaXQoKTtcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSA9IG1mcDtcblx0XHR9XG5cdH0sXG5cdC8vIENTUyB0cmFuc2l0aW9uIGRldGVjdGlvbiwgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjY0ODk5L2RldGVjdC1jc3MtdHJhbnNpdGlvbnMtdXNpbmctamF2YXNjcmlwdC1hbmQtd2l0aG91dC1tb2Rlcm5penJcblx0c3VwcG9ydHNUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLCAvLyAncycgZm9yIHN0eWxlLiBiZXR0ZXIgdG8gY3JlYXRlIGFuIGVsZW1lbnQgaWYgYm9keSB5ZXQgdG8gZXhpc3Rcblx0XHRcdHYgPSBbJ21zJywnTycsJ01veicsJ1dlYmtpdCddOyAvLyAndicgZm9yIHZlbmRvclxuXG5cdFx0aWYoIHNbJ3RyYW5zaXRpb24nXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuIHRydWU7IFxuXHRcdH1cblx0XHRcdFxuXHRcdHdoaWxlKCB2Lmxlbmd0aCApIHtcblx0XHRcdGlmKCB2LnBvcCgpICsgJ1RyYW5zaXRpb24nIGluIHMgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcdFx0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblxuLyoqXG4gKiBQdWJsaWMgZnVuY3Rpb25zXG4gKi9cbk1hZ25pZmljUG9wdXAucHJvdG90eXBlID0ge1xuXG5cdGNvbnN0cnVjdG9yOiBNYWduaWZpY1BvcHVwLFxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBNYWduaWZpYyBQb3B1cCBwbHVnaW4uIFxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBvbmx5IG9uY2Ugd2hlbiAkLmZuLm1hZ25pZmljUG9wdXAgb3IgJC5tYWduaWZpY1BvcHVwIGlzIGV4ZWN1dGVkXG5cdCAqL1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgYXBwVmVyc2lvbiA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdG1mcC5pc0xvd0lFID0gbWZwLmlzSUU4ID0gZG9jdW1lbnQuYWxsICYmICFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXHRcdG1mcC5pc0FuZHJvaWQgPSAoL2FuZHJvaWQvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLmlzSU9TID0gKC9pcGhvbmV8aXBhZHxpcG9kL2dpKS50ZXN0KGFwcFZlcnNpb24pO1xuXHRcdG1mcC5zdXBwb3J0c1RyYW5zaXRpb24gPSBzdXBwb3J0c1RyYW5zaXRpb25zKCk7XG5cblx0XHQvLyBXZSBkaXNhYmxlIGZpeGVkIHBvc2l0aW9uZWQgbGlnaHRib3ggb24gZGV2aWNlcyB0aGF0IGRvbid0IGhhbmRsZSBpdCBuaWNlbHkuXG5cdFx0Ly8gSWYgeW91IGtub3cgYSBiZXR0ZXIgd2F5IG9mIGRldGVjdGluZyB0aGlzIC0gbGV0IG1lIGtub3cuXG5cdFx0bWZwLnByb2JhYmx5TW9iaWxlID0gKG1mcC5pc0FuZHJvaWQgfHwgbWZwLmlzSU9TIHx8IC8oT3BlcmEgTWluaSl8S2luZGxlfHdlYk9TfEJsYWNrQmVycnl8KE9wZXJhIE1vYmkpfChXaW5kb3dzIFBob25lKXxJRU1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKTtcblx0XHRfZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuXHRcdG1mcC5wb3B1cHNDYWNoZSA9IHt9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBPcGVucyBwb3B1cFxuXHQgKiBAcGFyYW0gIGRhdGEgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0b3BlbjogZnVuY3Rpb24oZGF0YSkge1xuXG5cdFx0dmFyIGk7XG5cblx0XHRpZihkYXRhLmlzT2JqID09PSBmYWxzZSkgeyBcblx0XHRcdC8vIGNvbnZlcnQgalF1ZXJ5IGNvbGxlY3Rpb24gdG8gYXJyYXkgdG8gYXZvaWQgY29uZmxpY3RzIGxhdGVyXG5cdFx0XHRtZnAuaXRlbXMgPSBkYXRhLml0ZW1zLnRvQXJyYXkoKTtcblxuXHRcdFx0bWZwLmluZGV4ID0gMDtcblx0XHRcdHZhciBpdGVtcyA9IGRhdGEuaXRlbXMsXG5cdFx0XHRcdGl0ZW07XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRcdGlmKGl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdFx0aXRlbSA9IGl0ZW0uZWxbMF07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoaXRlbSA9PT0gZGF0YS5lbFswXSkge1xuXHRcdFx0XHRcdG1mcC5pbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLml0ZW1zID0gJC5pc0FycmF5KGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtkYXRhLml0ZW1zXTtcblx0XHRcdG1mcC5pbmRleCA9IGRhdGEuaW5kZXggfHwgMDtcblx0XHR9XG5cblx0XHQvLyBpZiBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZCAtIHdlIGp1c3QgdXBkYXRlIHRoZSBjb250ZW50XG5cdFx0aWYobWZwLmlzT3Blbikge1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdG1mcC50eXBlcyA9IFtdOyBcblx0XHRfd3JhcENsYXNzZXMgPSAnJztcblx0XHRpZihkYXRhLm1haW5FbCAmJiBkYXRhLm1haW5FbC5sZW5ndGgpIHtcblx0XHRcdG1mcC5ldiA9IGRhdGEubWFpbkVsLmVxKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuZXYgPSBfZG9jdW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoZGF0YS5rZXkpIHtcblx0XHRcdGlmKCFtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldKSB7XG5cdFx0XHRcdG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0gPSB7fTtcblx0XHRcdH1cblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSBtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlID0ge307XG5cdFx0fVxuXG5cblxuXHRcdG1mcC5zdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIGRhdGEgKTsgXG5cdFx0bWZwLmZpeGVkQ29udGVudFBvcyA9IG1mcC5zdC5maXhlZENvbnRlbnRQb3MgPT09ICdhdXRvJyA/ICFtZnAucHJvYmFibHlNb2JpbGUgOiBtZnAuc3QuZml4ZWRDb250ZW50UG9zO1xuXG5cdFx0aWYobWZwLnN0Lm1vZGFsKSB7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljayA9IGZhbHNlO1xuXHRcdFx0bWZwLnN0LmNsb3NlT25CZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3Quc2hvd0Nsb3NlQnRuID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuZW5hYmxlRXNjYXBlS2V5ID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gQnVpbGRpbmcgbWFya3VwXG5cdFx0Ly8gbWFpbiBjb250YWluZXJzIGFyZSBjcmVhdGVkIG9ubHkgb25jZVxuXHRcdGlmKCFtZnAuYmdPdmVybGF5KSB7XG5cblx0XHRcdC8vIERhcmsgb3ZlcmxheVxuXHRcdFx0bWZwLmJnT3ZlcmxheSA9IF9nZXRFbCgnYmcnKS5vbignY2xpY2snK0VWRU5UX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLndyYXAgPSBfZ2V0RWwoJ3dyYXAnKS5hdHRyKCd0YWJpbmRleCcsIC0xKS5vbignY2xpY2snK0VWRU5UX05TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKG1mcC5fY2hlY2tJZkNsb3NlKGUudGFyZ2V0KSkge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLmNvbnRhaW5lciA9IF9nZXRFbCgnY29udGFpbmVyJywgbWZwLndyYXApO1xuXHRcdH1cblxuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyID0gX2dldEVsKCdjb250ZW50Jyk7XG5cdFx0aWYobWZwLnN0LnByZWxvYWRlcikge1xuXHRcdFx0bWZwLnByZWxvYWRlciA9IF9nZXRFbCgncHJlbG9hZGVyJywgbWZwLmNvbnRhaW5lciwgbWZwLnN0LnRMb2FkaW5nKTtcblx0XHR9XG5cblxuXHRcdC8vIEluaXRpYWxpemluZyBtb2R1bGVzXG5cdFx0dmFyIG1vZHVsZXMgPSAkLm1hZ25pZmljUG9wdXAubW9kdWxlcztcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgbiA9IG1vZHVsZXNbaV07XG5cdFx0XHRuID0gbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG4uc2xpY2UoMSk7XG5cdFx0XHRtZnBbJ2luaXQnK25dLmNhbGwobWZwKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZU9wZW4nKTtcblxuXG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0bikge1xuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uXG5cdFx0XHRpZighbWZwLnN0LmNsb3NlQnRuSW5zaWRlKSB7XG5cdFx0XHRcdG1mcC53cmFwLmFwcGVuZCggX2dldENsb3NlQnRuKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQsIGZ1bmN0aW9uKGUsIHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHRcdFx0XHR2YWx1ZXMuY2xvc2VfcmVwbGFjZVdpdGggPSBfZ2V0Q2xvc2VCdG4oaXRlbS50eXBlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdF93cmFwQ2xhc3NlcyArPSAnIG1mcC1jbG9zZS1idG4taW4nO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKG1mcC5zdC5hbGlnblRvcCkge1xuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWFsaWduLXRvcCc7XG5cdFx0fVxuXG5cdFxuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKHtcblx0XHRcdFx0b3ZlcmZsb3c6IG1mcC5zdC5vdmVyZmxvd1ksXG5cdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXG5cdFx0XHRcdG92ZXJmbG93WTogbWZwLnN0Lm92ZXJmbG93WVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC53cmFwLmNzcyh7IFxuXHRcdFx0XHR0b3A6IF93aW5kb3cuc2Nyb2xsVG9wKCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYoIG1mcC5zdC5maXhlZEJnUG9zID09PSBmYWxzZSB8fCAobWZwLnN0LmZpeGVkQmdQb3MgPT09ICdhdXRvJyAmJiAhbWZwLmZpeGVkQ29udGVudFBvcykgKSB7XG5cdFx0XHRtZnAuYmdPdmVybGF5LmNzcyh7XG5cdFx0XHRcdGhlaWdodDogX2RvY3VtZW50LmhlaWdodCgpLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0XG5cblx0XHRpZihtZnAuc3QuZW5hYmxlRXNjYXBlS2V5KSB7XG5cdFx0XHQvLyBDbG9zZSBvbiBFU0Mga2V5XG5cdFx0XHRfZG9jdW1lbnQub24oJ2tleXVwJyArIEVWRU5UX05TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0X3dpbmRvdy5vbigncmVzaXplJyArIEVWRU5UX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC51cGRhdGVTaXplKCk7XG5cdFx0fSk7XG5cblxuXHRcdGlmKCFtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljaykge1xuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWF1dG8tY3Vyc29yJztcblx0XHR9XG5cdFx0XG5cdFx0aWYoX3dyYXBDbGFzc2VzKVxuXHRcdFx0bWZwLndyYXAuYWRkQ2xhc3MoX3dyYXBDbGFzc2VzKTtcblxuXG5cdFx0Ly8gdGhpcyB0cmlnZ2VycyByZWNhbGN1bGF0aW9uIG9mIGxheW91dCwgc28gd2UgZ2V0IGl0IG9uY2UgdG8gbm90IHRvIHRyaWdnZXIgdHdpY2Vcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gbWZwLndIID0gX3dpbmRvdy5oZWlnaHQoKTtcblxuXHRcdFxuXHRcdHZhciB3aW5kb3dTdHlsZXMgPSB7fTtcblxuXHRcdGlmKCBtZnAuZml4ZWRDb250ZW50UG9zICkge1xuICAgICAgICAgICAgaWYobWZwLl9oYXNTY3JvbGxCYXIod2luZG93SGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBtZnAuX2dldFNjcm9sbGJhclNpemUoKTtcbiAgICAgICAgICAgICAgICBpZihzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1N0eWxlcy5tYXJnaW5SaWdodCA9IHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRpZighbWZwLmlzSUU3KSB7XG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWU3IGRvdWJsZS1zY3JvbGwgYnVnXG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFxuXHRcdFxuXHRcdHZhciBjbGFzc2VzVG9hZGQgPSBtZnAuc3QubWFpbkNsYXNzO1xuXHRcdGlmKG1mcC5pc0lFNykge1xuXHRcdFx0Y2xhc3Nlc1RvYWRkICs9ICcgbWZwLWllNyc7XG5cdFx0fVxuXHRcdGlmKGNsYXNzZXNUb2FkZCkge1xuXHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKCBjbGFzc2VzVG9hZGQgKTtcblx0XHR9XG5cblx0XHQvLyBhZGQgY29udGVudFxuXHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0J1aWxkQ29udHJvbHMnKTtcblxuXHRcdC8vIHJlbW92ZSBzY3JvbGxiYXIsIGFkZCBtYXJnaW4gZS50LmNcblx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0XG5cdFx0Ly8gYWRkIGV2ZXJ5dGhpbmcgdG8gRE9NXG5cdFx0bWZwLmJnT3ZlcmxheS5hZGQobWZwLndyYXApLnByZXBlbmRUbyggbWZwLnN0LnByZXBlbmRUbyB8fCAkKGRvY3VtZW50LmJvZHkpICk7XG5cblx0XHQvLyBTYXZlIGxhc3QgZm9jdXNlZCBlbGVtZW50XG5cdFx0bWZwLl9sYXN0Rm9jdXNlZEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRcblx0XHQvLyBXYWl0IGZvciBuZXh0IGN5Y2xlIHRvIGFsbG93IENTUyB0cmFuc2l0aW9uXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFxuXHRcdFx0aWYobWZwLmNvbnRlbnQpIHtcblx0XHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKFJFQURZX0NMQVNTKTtcblx0XHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgY29udGVudCBpcyBub3QgZGVmaW5lZCAobm90IGxvYWRlZCBlLnQuYykgd2UgYWRkIGNsYXNzIG9ubHkgZm9yIEJHXG5cdFx0XHRcdG1mcC5iZ092ZXJsYXkuYWRkQ2xhc3MoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBUcmFwIHRoZSBmb2N1cyBpbiBwb3B1cFxuXHRcdFx0X2RvY3VtZW50Lm9uKCdmb2N1c2luJyArIEVWRU5UX05TLCBtZnAuX29uRm9jdXNJbik7XG5cblx0XHR9LCAxNik7XG5cblx0XHRtZnAuaXNPcGVuID0gdHJ1ZTtcblx0XHRtZnAudXBkYXRlU2l6ZSh3aW5kb3dIZWlnaHQpO1xuXHRcdF9tZnBUcmlnZ2VyKE9QRU5fRVZFTlQpO1xuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgcG9wdXBcblx0ICovXG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRpZighbWZwLmlzT3BlbikgcmV0dXJuO1xuXHRcdF9tZnBUcmlnZ2VyKEJFRk9SRV9DTE9TRV9FVkVOVCk7XG5cblx0XHRtZnAuaXNPcGVuID0gZmFsc2U7XG5cdFx0Ly8gZm9yIENTUzMgYW5pbWF0aW9uXG5cdFx0aWYobWZwLnN0LnJlbW92YWxEZWxheSAmJiAhbWZwLmlzTG93SUUgJiYgbWZwLnN1cHBvcnRzVHJhbnNpdGlvbiApICB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVNT1ZJTkdfQ0xBU1MpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdFx0fSwgbWZwLnN0LnJlbW92YWxEZWxheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5fY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEhlbHBlciBmb3IgY2xvc2UoKSBmdW5jdGlvblxuXHQgKi9cblx0X2Nsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRfbWZwVHJpZ2dlcihDTE9TRV9FVkVOVCk7XG5cblx0XHR2YXIgY2xhc3Nlc1RvUmVtb3ZlID0gUkVNT1ZJTkdfQ0xBU1MgKyAnICcgKyBSRUFEWV9DTEFTUyArICcgJztcblxuXHRcdG1mcC5iZ092ZXJsYXkuZGV0YWNoKCk7XG5cdFx0bWZwLndyYXAuZGV0YWNoKCk7XG5cdFx0bWZwLmNvbnRhaW5lci5lbXB0eSgpO1xuXG5cdFx0aWYobWZwLnN0Lm1haW5DbGFzcykge1xuXHRcdFx0Y2xhc3Nlc1RvUmVtb3ZlICs9IG1mcC5zdC5tYWluQ2xhc3MgKyAnICc7XG5cdFx0fVxuXG5cdFx0bWZwLl9yZW1vdmVDbGFzc0Zyb21NRlAoY2xhc3Nlc1RvUmVtb3ZlKTtcblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdHZhciB3aW5kb3dTdHlsZXMgPSB7bWFyZ2luUmlnaHQ6ICcnfTtcblx0XHRcdGlmKG1mcC5pc0lFNykge1xuXHRcdFx0XHQkKCdib2R5LCBodG1sJykuY3NzKCdvdmVyZmxvdycsICcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0JCgnaHRtbCcpLmNzcyh3aW5kb3dTdHlsZXMpO1xuXHRcdH1cblx0XHRcblx0XHRfZG9jdW1lbnQub2ZmKCdrZXl1cCcgKyBFVkVOVF9OUyArICcgZm9jdXNpbicgKyBFVkVOVF9OUyk7XG5cdFx0bWZwLmV2Lm9mZihFVkVOVF9OUyk7XG5cblx0XHQvLyBjbGVhbiB1cCBET00gZWxlbWVudHMgdGhhdCBhcmVuJ3QgcmVtb3ZlZFxuXHRcdG1mcC53cmFwLmF0dHIoJ2NsYXNzJywgJ21mcC13cmFwJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHRtZnAuYmdPdmVybGF5LmF0dHIoJ2NsYXNzJywgJ21mcC1iZycpO1xuXHRcdG1mcC5jb250YWluZXIuYXR0cignY2xhc3MnLCAnbWZwLWNvbnRhaW5lcicpO1xuXG5cdFx0Ly8gcmVtb3ZlIGNsb3NlIGJ1dHRvbiBmcm9tIHRhcmdldCBlbGVtZW50XG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJlxuXHRcdCghbWZwLnN0LmNsb3NlQnRuSW5zaWRlIHx8IG1mcC5jdXJyVGVtcGxhdGVbbWZwLmN1cnJJdGVtLnR5cGVdID09PSB0cnVlKSkge1xuXHRcdFx0aWYobWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bilcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bi5kZXRhY2goKTtcblx0XHR9XG5cblxuXHRcdGlmKG1mcC5zdC5hdXRvRm9jdXNMYXN0ICYmIG1mcC5fbGFzdEZvY3VzZWRFbCkge1xuXHRcdFx0JChtZnAuX2xhc3RGb2N1c2VkRWwpLmZvY3VzKCk7IC8vIHB1dCB0YWIgZm9jdXMgYmFja1xuXHRcdH1cblx0XHRtZnAuY3Vyckl0ZW0gPSBudWxsO1x0XG5cdFx0bWZwLmNvbnRlbnQgPSBudWxsO1xuXHRcdG1mcC5jdXJyVGVtcGxhdGUgPSBudWxsO1xuXHRcdG1mcC5wcmV2SGVpZ2h0ID0gMDtcblxuXHRcdF9tZnBUcmlnZ2VyKEFGVEVSX0NMT1NFX0VWRU5UKTtcblx0fSxcblx0XG5cdHVwZGF0ZVNpemU6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xuXG5cdFx0aWYobWZwLmlzSU9TKSB7XG5cdFx0XHQvLyBmaXhlcyBpT1MgbmF2IGJhcnMgaHR0cHM6Ly9naXRodWIuY29tL2RpbXNlbWVub3YvTWFnbmlmaWMtUG9wdXAvaXNzdWVzLzJcblx0XHRcdHZhciB6b29tTGV2ZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB6b29tTGV2ZWw7XG5cdFx0XHRtZnAud3JhcC5jc3MoJ2hlaWdodCcsIGhlaWdodCk7XG5cdFx0XHRtZnAud0ggPSBoZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC53SCA9IHdpbkhlaWdodCB8fCBfd2luZG93LmhlaWdodCgpO1xuXHRcdH1cblx0XHQvLyBGaXhlcyAjODQ6IHBvcHVwIGluY29ycmVjdGx5IHBvc2l0aW9uZWQgd2l0aCBwb3NpdGlvbjpyZWxhdGl2ZSBvbiBib2R5XG5cdFx0aWYoIW1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgbWZwLndIKTtcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcignUmVzaXplJyk7XG5cblx0fSxcblxuXHQvKipcblx0ICogU2V0IGNvbnRlbnQgb2YgcG9wdXAgYmFzZWQgb24gY3VycmVudCBpbmRleFxuXHQgKi9cblx0dXBkYXRlSXRlbUhUTUw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpdGVtID0gbWZwLml0ZW1zW21mcC5pbmRleF07XG5cblx0XHQvLyBEZXRhY2ggYW5kIHBlcmZvcm0gbW9kaWZpY2F0aW9uc1xuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyLmRldGFjaCgpO1xuXG5cdFx0aWYobWZwLmNvbnRlbnQpXG5cdFx0XHRtZnAuY29udGVudC5kZXRhY2goKTtcblxuXHRcdGlmKCFpdGVtLnBhcnNlZCkge1xuXHRcdFx0aXRlbSA9IG1mcC5wYXJzZUVsKCBtZnAuaW5kZXggKTtcblx0XHR9XG5cblx0XHR2YXIgdHlwZSA9IGl0ZW0udHlwZTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdCZWZvcmVDaGFuZ2UnLCBbbWZwLmN1cnJJdGVtID8gbWZwLmN1cnJJdGVtLnR5cGUgOiAnJywgdHlwZV0pO1xuXHRcdC8vIEJlZm9yZUNoYW5nZSBldmVudCB3b3JrcyBsaWtlIHNvOlxuXHRcdC8vIF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHsgfSk7XG5cblx0XHRtZnAuY3Vyckl0ZW0gPSBpdGVtO1xuXG5cdFx0aWYoIW1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pIHtcblx0XHRcdHZhciBtYXJrdXAgPSBtZnAuc3RbdHlwZV0gPyBtZnAuc3RbdHlwZV0ubWFya3VwIDogZmFsc2U7XG5cblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgbWFya3VwXG5cdFx0XHRfbWZwVHJpZ2dlcignRmlyc3RNYXJrdXBQYXJzZScsIG1hcmt1cCk7XG5cblx0XHRcdGlmKG1hcmt1cCkge1xuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID0gJChtYXJrdXApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbWFya3VwIGZvdW5kIHdlIGp1c3QgZGVmaW5lIHRoYXQgdGVtcGxhdGUgaXMgcGFyc2VkXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9wcmV2Q29udGVudFR5cGUgJiYgX3ByZXZDb250ZW50VHlwZSAhPT0gaXRlbS50eXBlKSB7XG5cdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtJytfcHJldkNvbnRlbnRUeXBlKyctaG9sZGVyJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0NvbnRlbnQgPSBtZnBbJ2dldCcgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKV0oaXRlbSwgbWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSk7XG5cdFx0bWZwLmFwcGVuZENvbnRlbnQobmV3Q29udGVudCwgdHlwZSk7XG5cblx0XHRpdGVtLnByZWxvYWRlZCA9IHRydWU7XG5cblx0XHRfbWZwVHJpZ2dlcihDSEFOR0VfRVZFTlQsIGl0ZW0pO1xuXHRcdF9wcmV2Q29udGVudFR5cGUgPSBpdGVtLnR5cGU7XG5cblx0XHQvLyBBcHBlbmQgY29udGFpbmVyIGJhY2sgYWZ0ZXIgaXRzIGNvbnRlbnQgY2hhbmdlZFxuXHRcdG1mcC5jb250YWluZXIucHJlcGVuZChtZnAuY29udGVudENvbnRhaW5lcik7XG5cblx0XHRfbWZwVHJpZ2dlcignQWZ0ZXJDaGFuZ2UnKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBTZXQgSFRNTCBjb250ZW50IG9mIHBvcHVwXG5cdCAqL1xuXHRhcHBlbmRDb250ZW50OiBmdW5jdGlvbihuZXdDb250ZW50LCB0eXBlKSB7XG5cdFx0bWZwLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG5cdFx0aWYobmV3Q29udGVudCkge1xuXHRcdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJiBtZnAuc3QuY2xvc2VCdG5JbnNpZGUgJiZcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAsIHdlIGp1c3QgYXBwZW5kIGNsb3NlIGJ1dHRvbiBlbGVtZW50IGluc2lkZVxuXHRcdFx0XHRpZighbWZwLmNvbnRlbnQuZmluZCgnLm1mcC1jbG9zZScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmFwcGVuZChfZ2V0Q2xvc2VCdG4oKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1mcC5jb250ZW50ID0gbmV3Q29udGVudDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLmNvbnRlbnQgPSAnJztcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcihCRUZPUkVfQVBQRU5EX0VWRU5UKTtcblx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtJyt0eXBlKyctaG9sZGVyJyk7XG5cblx0XHRtZnAuY29udGVudENvbnRhaW5lci5hcHBlbmQobWZwLmNvbnRlbnQpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgTWFnbmlmaWMgUG9wdXAgZGF0YSBvYmplY3QgYmFzZWQgb24gZ2l2ZW4gZGF0YVxuXHQgKiBAcGFyYW0gIHtpbnR9IGluZGV4IEluZGV4IG9mIGl0ZW0gdG8gcGFyc2Vcblx0ICovXG5cdHBhcnNlRWw6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdLFxuXHRcdFx0dHlwZTtcblxuXHRcdGlmKGl0ZW0udGFnTmFtZSkge1xuXHRcdFx0aXRlbSA9IHsgZWw6ICQoaXRlbSkgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHlwZSA9IGl0ZW0udHlwZTtcblx0XHRcdGl0ZW0gPSB7IGRhdGE6IGl0ZW0sIHNyYzogaXRlbS5zcmMgfTtcblx0XHR9XG5cblx0XHRpZihpdGVtLmVsKSB7XG5cdFx0XHR2YXIgdHlwZXMgPSBtZnAudHlwZXM7XG5cblx0XHRcdC8vIGNoZWNrIGZvciAnbWZwLVRZUEUnIGNsYXNzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYoIGl0ZW0uZWwuaGFzQ2xhc3MoJ21mcC0nK3R5cGVzW2ldKSApIHtcblx0XHRcdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2RhdGEtbWZwLXNyYycpO1xuXHRcdFx0aWYoIWl0ZW0uc3JjKSB7XG5cdFx0XHRcdGl0ZW0uc3JjID0gaXRlbS5lbC5hdHRyKCdocmVmJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aXRlbS50eXBlID0gdHlwZSB8fCBtZnAuc3QudHlwZSB8fCAnaW5saW5lJztcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0aXRlbS5wYXJzZWQgPSB0cnVlO1xuXHRcdG1mcC5pdGVtc1tpbmRleF0gPSBpdGVtO1xuXHRcdF9tZnBUcmlnZ2VyKCdFbGVtZW50UGFyc2UnLCBpdGVtKTtcblxuXHRcdHJldHVybiBtZnAuaXRlbXNbaW5kZXhdO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHNpbmdsZSBwb3B1cCBvciBhIGdyb3VwIG9mIHBvcHVwc1xuXHQgKi9cblx0YWRkR3JvdXA6IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIGVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5tZnBFbCA9IHRoaXM7XG5cdFx0XHRtZnAuX29wZW5DbGljayhlLCBlbCwgb3B0aW9ucyk7XG5cdFx0fTtcblxuXHRcdGlmKCFvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0fVxuXG5cdFx0dmFyIGVOYW1lID0gJ2NsaWNrLm1hZ25pZmljUG9wdXAnO1xuXHRcdG9wdGlvbnMubWFpbkVsID0gZWw7XG5cblx0XHRpZihvcHRpb25zLml0ZW1zKSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gdHJ1ZTtcblx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5pc09iaiA9IGZhbHNlO1xuXHRcdFx0aWYob3B0aW9ucy5kZWxlZ2F0ZSkge1xuXHRcdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBvcHRpb25zLmRlbGVnYXRlICwgZUhhbmRsZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9ucy5pdGVtcyA9IGVsO1xuXHRcdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBlSGFuZGxlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfb3BlbkNsaWNrOiBmdW5jdGlvbihlLCBlbCwgb3B0aW9ucykge1xuXHRcdHZhciBtaWRDbGljayA9IG9wdGlvbnMubWlkQ2xpY2sgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWlkQ2xpY2sgOiAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMubWlkQ2xpY2s7XG5cblxuXHRcdGlmKCFtaWRDbGljayAmJiAoIGUud2hpY2ggPT09IDIgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRpc2FibGVPbiA9IG9wdGlvbnMuZGlzYWJsZU9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmRpc2FibGVPbiA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5kaXNhYmxlT247XG5cblx0XHRpZihkaXNhYmxlT24pIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihkaXNhYmxlT24pKSB7XG5cdFx0XHRcdGlmKCAhZGlzYWJsZU9uLmNhbGwobWZwKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHsgLy8gZWxzZSBpdCdzIG51bWJlclxuXHRcdFx0XHRpZiggX3dpbmRvdy53aWR0aCgpIDwgZGlzYWJsZU9uICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoZS50eXBlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIFRoaXMgd2lsbCBwcmV2ZW50IHBvcHVwIGZyb20gY2xvc2luZyBpZiBlbGVtZW50IGlzIGluc2lkZSBhbmQgcG9wdXAgaXMgYWxyZWFkeSBvcGVuZWRcblx0XHRcdGlmKG1mcC5pc09wZW4pIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvcHRpb25zLmVsID0gJChlLm1mcEVsKTtcblx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRvcHRpb25zLml0ZW1zID0gZWwuZmluZChvcHRpb25zLmRlbGVnYXRlKTtcblx0XHR9XG5cdFx0bWZwLm9wZW4ob3B0aW9ucyk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogVXBkYXRlcyB0ZXh0IG9uIHByZWxvYWRlclxuXHQgKi9cblx0dXBkYXRlU3RhdHVzOiBmdW5jdGlvbihzdGF0dXMsIHRleHQpIHtcblxuXHRcdGlmKG1mcC5wcmVsb2FkZXIpIHtcblx0XHRcdGlmKF9wcmV2U3RhdHVzICE9PSBzdGF0dXMpIHtcblx0XHRcdFx0bWZwLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnbWZwLXMtJytfcHJldlN0YXR1cyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCF0ZXh0ICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG5cdFx0XHRcdHRleHQgPSBtZnAuc3QudExvYWRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRzdGF0dXM6IHN0YXR1cyxcblx0XHRcdFx0dGV4dDogdGV4dFxuXHRcdFx0fTtcblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgc3RhdHVzXG5cdFx0XHRfbWZwVHJpZ2dlcignVXBkYXRlU3RhdHVzJywgZGF0YSk7XG5cblx0XHRcdHN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuXHRcdFx0dGV4dCA9IGRhdGEudGV4dDtcblxuXHRcdFx0bWZwLnByZWxvYWRlci5odG1sKHRleHQpO1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLmNvbnRhaW5lci5hZGRDbGFzcygnbWZwLXMtJytzdGF0dXMpO1xuXHRcdFx0X3ByZXZTdGF0dXMgPSBzdGF0dXM7XG5cdFx0fVxuXHR9LFxuXG5cblx0Lypcblx0XHRcIlByaXZhdGVcIiBoZWxwZXJzIHRoYXQgYXJlbid0IHByaXZhdGUgYXQgYWxsXG5cdCAqL1xuXHQvLyBDaGVjayB0byBjbG9zZSBwb3B1cCBvciBub3Rcblx0Ly8gXCJ0YXJnZXRcIiBpcyBhbiBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcblx0X2NoZWNrSWZDbG9zZTogZnVuY3Rpb24odGFyZ2V0KSB7XG5cblx0XHRpZigkKHRhcmdldCkuaGFzQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY2xvc2VPbkNvbnRlbnQgPSBtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljaztcblx0XHR2YXIgY2xvc2VPbkJnID0gbWZwLnN0LmNsb3NlT25CZ0NsaWNrO1xuXG5cdFx0aWYoY2xvc2VPbkNvbnRlbnQgJiYgY2xvc2VPbkJnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBXZSBjbG9zZSB0aGUgcG9wdXAgaWYgY2xpY2sgaXMgb24gY2xvc2UgYnV0dG9uIG9yIG9uIHByZWxvYWRlci4gT3IgaWYgdGhlcmUgaXMgbm8gY29udGVudC5cblx0XHRcdGlmKCFtZnAuY29udGVudCB8fCAkKHRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jbG9zZScpIHx8IChtZnAucHJlbG9hZGVyICYmIHRhcmdldCA9PT0gbWZwLnByZWxvYWRlclswXSkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiBjbGljayBpcyBvdXRzaWRlIHRoZSBjb250ZW50XG5cdFx0XHRpZiggICh0YXJnZXQgIT09IG1mcC5jb250ZW50WzBdICYmICEkLmNvbnRhaW5zKG1mcC5jb250ZW50WzBdLCB0YXJnZXQpKSAgKSB7XG5cdFx0XHRcdGlmKGNsb3NlT25CZykge1xuXHRcdFx0XHRcdC8vIGxhc3QgY2hlY2ssIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQgaXMgaW4gRE9NLCAoaW4gY2FzZSBpdCdzIHJlbW92ZWQgb25jbGljaylcblx0XHRcdFx0XHRpZiggJC5jb250YWlucyhkb2N1bWVudCwgdGFyZ2V0KSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGNsb3NlT25Db250ZW50KSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X2FkZENsYXNzVG9NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhjTmFtZSk7XG5cdFx0bWZwLndyYXAuYWRkQ2xhc3MoY05hbWUpO1xuXHR9LFxuXHRfcmVtb3ZlQ2xhc3NGcm9tTUZQOiBmdW5jdGlvbihjTmFtZSkge1xuXHRcdHRoaXMuYmdPdmVybGF5LnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5yZW1vdmVDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9oYXNTY3JvbGxCYXI6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xuXHRcdHJldHVybiAoICAobWZwLmlzSUU3ID8gX2RvY3VtZW50LmhlaWdodCgpIDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpID4gKHdpbkhlaWdodCB8fCBfd2luZG93LmhlaWdodCgpKSApO1xuXHR9LFxuXHRfc2V0Rm9jdXM6IGZ1bmN0aW9uKCkge1xuXHRcdChtZnAuc3QuZm9jdXMgPyBtZnAuY29udGVudC5maW5kKG1mcC5zdC5mb2N1cykuZXEoMCkgOiBtZnAud3JhcCkuZm9jdXMoKTtcblx0fSxcblx0X29uRm9jdXNJbjogZnVuY3Rpb24oZSkge1xuXHRcdGlmKCBlLnRhcmdldCAhPT0gbWZwLndyYXBbMF0gJiYgISQuY29udGFpbnMobWZwLndyYXBbMF0sIGUudGFyZ2V0KSApIHtcblx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9wYXJzZU1hcmt1cDogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdHZhciBhcnI7XG5cdFx0aWYoaXRlbS5kYXRhKSB7XG5cdFx0XHR2YWx1ZXMgPSAkLmV4dGVuZChpdGVtLmRhdGEsIHZhbHVlcyk7XG5cdFx0fVxuXHRcdF9tZnBUcmlnZ2VyKE1BUktVUF9QQVJTRV9FVkVOVCwgW3RlbXBsYXRlLCB2YWx1ZXMsIGl0ZW1dICk7XG5cblx0XHQkLmVhY2godmFsdWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRpZih2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGFyciA9IGtleS5zcGxpdCgnXycpO1xuXHRcdFx0aWYoYXJyLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dmFyIGVsID0gdGVtcGxhdGUuZmluZChFVkVOVF9OUyArICctJythcnJbMF0pO1xuXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2YXIgYXR0ciA9IGFyclsxXTtcblx0XHRcdFx0XHRpZihhdHRyID09PSAncmVwbGFjZVdpdGgnKSB7XG5cdFx0XHRcdFx0XHRpZihlbFswXSAhPT0gdmFsdWVbMF0pIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgodmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZihhdHRyID09PSAnaW1nJykge1xuXHRcdFx0XHRcdFx0aWYoZWwuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdFx0XHRcdGVsLmF0dHIoJ3NyYycsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVsLnJlcGxhY2VXaXRoKCAkKCc8aW1nPicpLmF0dHIoJ3NyYycsIHZhbHVlKS5hdHRyKCdjbGFzcycsIGVsLmF0dHIoJ2NsYXNzJykpICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsLmF0dHIoYXJyWzFdLCB2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRlbXBsYXRlLmZpbmQoRVZFTlRfTlMgKyAnLScra2V5KS5odG1sKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRfZ2V0U2Nyb2xsYmFyU2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gdGh4IERhdmlkXG5cdFx0aWYobWZwLnNjcm9sbGJhclNpemUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRzY3JvbGxEaXYuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogOTlweDsgaGVpZ2h0OiA5OXB4OyBvdmVyZmxvdzogc2Nyb2xsOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTk5OTlweDsnO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXHRcdFx0bWZwLnNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuc2Nyb2xsYmFyU2l6ZTtcblx0fVxuXG59OyAvKiBNYWduaWZpY1BvcHVwIGNvcmUgcHJvdG90eXBlIGVuZCAqL1xuXG5cblxuXG4vKipcbiAqIFB1YmxpYyBzdGF0aWMgZnVuY3Rpb25zXG4gKi9cbiQubWFnbmlmaWNQb3B1cCA9IHtcblx0aW5zdGFuY2U6IG51bGwsXG5cdHByb3RvOiBNYWduaWZpY1BvcHVwLnByb3RvdHlwZSxcblx0bW9kdWxlczogW10sXG5cblx0b3BlbjogZnVuY3Rpb24ob3B0aW9ucywgaW5kZXgpIHtcblx0XHRfY2hlY2tJbnN0YW5jZSgpO1xuXG5cdFx0aWYoIW9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRvcHRpb25zLmlzT2JqID0gdHJ1ZTtcblx0XHRvcHRpb25zLmluZGV4ID0gaW5kZXggfHwgMDtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5vcGVuKG9wdGlvbnMpO1xuXHR9LFxuXG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlICYmICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZS5jbG9zZSgpO1xuXHR9LFxuXG5cdHJlZ2lzdGVyTW9kdWxlOiBmdW5jdGlvbihuYW1lLCBtb2R1bGUpIHtcblx0XHRpZihtb2R1bGUub3B0aW9ucykge1xuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzW25hbWVdID0gbW9kdWxlLm9wdGlvbnM7XG5cdFx0fVxuXHRcdCQuZXh0ZW5kKHRoaXMucHJvdG8sIG1vZHVsZS5wcm90byk7XG5cdFx0dGhpcy5tb2R1bGVzLnB1c2gobmFtZSk7XG5cdH0sXG5cblx0ZGVmYXVsdHM6IHtcblxuXHRcdC8vIEluZm8gYWJvdXQgb3B0aW9ucyBpcyBpbiBkb2NzOlxuXHRcdC8vIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNvcHRpb25zXG5cblx0XHRkaXNhYmxlT246IDAsXG5cblx0XHRrZXk6IG51bGwsXG5cblx0XHRtaWRDbGljazogZmFsc2UsXG5cblx0XHRtYWluQ2xhc3M6ICcnLFxuXG5cdFx0cHJlbG9hZGVyOiB0cnVlLFxuXG5cdFx0Zm9jdXM6ICcnLCAvLyBDU1Mgc2VsZWN0b3Igb2YgaW5wdXQgdG8gZm9jdXMgYWZ0ZXIgcG9wdXAgaXMgb3BlbmVkXG5cblx0XHRjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcblxuXHRcdGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuXG5cdFx0Y2xvc2VCdG5JbnNpZGU6IHRydWUsXG5cblx0XHRzaG93Q2xvc2VCdG46IHRydWUsXG5cblx0XHRlbmFibGVFc2NhcGVLZXk6IHRydWUsXG5cblx0XHRtb2RhbDogZmFsc2UsXG5cblx0XHRhbGlnblRvcDogZmFsc2UsXG5cblx0XHRyZW1vdmFsRGVsYXk6IDAsXG5cblx0XHRwcmVwZW5kVG86IG51bGwsXG5cblx0XHRmaXhlZENvbnRlbnRQb3M6ICdhdXRvJyxcblxuXHRcdGZpeGVkQmdQb3M6ICdhdXRvJyxcblxuXHRcdG92ZXJmbG93WTogJ2F1dG8nLFxuXG5cdFx0Y2xvc2VNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZVwiPiYjMjE1OzwvYnV0dG9uPicsXG5cblx0XHR0Q2xvc2U6ICdDbG9zZSAoRXNjKScsXG5cblx0XHR0TG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuXG5cdFx0YXV0b0ZvY3VzTGFzdDogdHJ1ZVxuXG5cdH1cbn07XG5cblxuXG4kLmZuLm1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdF9jaGVja0luc3RhbmNlKCk7XG5cblx0dmFyIGpxRWwgPSAkKHRoaXMpO1xuXG5cdC8vIFdlIGNhbGwgc29tZSBBUEkgbWV0aG9kIG9mIGZpcnN0IHBhcmFtIGlzIGEgc3RyaW5nXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdGlmKG9wdGlvbnMgPT09ICdvcGVuJykge1xuXHRcdFx0dmFyIGl0ZW1zLFxuXHRcdFx0XHRpdGVtT3B0cyA9IF9pc0pRID8ganFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJykgOiBqcUVsWzBdLm1hZ25pZmljUG9wdXAsXG5cdFx0XHRcdGluZGV4ID0gcGFyc2VJbnQoYXJndW1lbnRzWzFdLCAxMCkgfHwgMDtcblxuXHRcdFx0aWYoaXRlbU9wdHMuaXRlbXMpIHtcblx0XHRcdFx0aXRlbXMgPSBpdGVtT3B0cy5pdGVtc1tpbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtcyA9IGpxRWw7XG5cdFx0XHRcdGlmKGl0ZW1PcHRzLmRlbGVnYXRlKSB7XG5cdFx0XHRcdFx0aXRlbXMgPSBpdGVtcy5maW5kKGl0ZW1PcHRzLmRlbGVnYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmVxKCBpbmRleCApO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9vcGVuQ2xpY2soe21mcEVsOml0ZW1zfSwganFFbCwgaXRlbU9wdHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihtZnAuaXNPcGVuKVxuXHRcdFx0XHRtZnBbb3B0aW9uc10uYXBwbHkobWZwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHQvLyBjbG9uZSBvcHRpb25zIG9ialxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XG5cblx0XHQvKlxuXHRcdCAqIEFzIFplcHRvIGRvZXNuJ3Qgc3VwcG9ydCAuZGF0YSgpIG1ldGhvZCBmb3Igb2JqZWN0c1xuXHRcdCAqIGFuZCBpdCB3b3JrcyBvbmx5IGluIG5vcm1hbCBicm93c2Vyc1xuXHRcdCAqIHdlIGFzc2lnbiBcIm9wdGlvbnNcIiBvYmplY3QgZGlyZWN0bHkgdG8gdGhlIERPTSBlbGVtZW50LiBGVFchXG5cdFx0ICovXG5cdFx0aWYoX2lzSlEpIHtcblx0XHRcdGpxRWwuZGF0YSgnbWFnbmlmaWNQb3B1cCcsIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcUVsWzBdLm1hZ25pZmljUG9wdXAgPSBvcHRpb25zO1xuXHRcdH1cblxuXHRcdG1mcC5hZGRHcm91cChqcUVsLCBvcHRpb25zKTtcblxuXHR9XG5cdHJldHVybiBqcUVsO1xufTtcblxuLyo+PmNvcmUqL1xuXG4vKj4+aW5saW5lKi9cblxudmFyIElOTElORV9OUyA9ICdpbmxpbmUnLFxuXHRfaGlkZGVuQ2xhc3MsXG5cdF9pbmxpbmVQbGFjZWhvbGRlcixcblx0X2xhc3RJbmxpbmVFbGVtZW50LFxuXHRfcHV0SW5saW5lRWxlbWVudHNCYWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2xhc3RJbmxpbmVFbGVtZW50KSB7XG5cdFx0XHRfaW5saW5lUGxhY2Vob2xkZXIuYWZ0ZXIoIF9sYXN0SW5saW5lRWxlbWVudC5hZGRDbGFzcyhfaGlkZGVuQ2xhc3MpICkuZGV0YWNoKCk7XG5cdFx0XHRfbGFzdElubGluZUVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKElOTElORV9OUywge1xuXHRvcHRpb25zOiB7XG5cdFx0aGlkZGVuQ2xhc3M6ICdoaWRlJywgLy8gd2lsbCBiZSBhcHBlbmRlZCB3aXRoIGBtZnAtYCBwcmVmaXhcblx0XHRtYXJrdXA6ICcnLFxuXHRcdHROb3RGb3VuZDogJ0NvbnRlbnQgbm90IGZvdW5kJ1xuXHR9LFxuXHRwcm90bzoge1xuXG5cdFx0aW5pdElubGluZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChJTkxJTkVfTlMpO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0lOTElORV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9wdXRJbmxpbmVFbGVtZW50c0JhY2soKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXRJbmxpbmU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdF9wdXRJbmxpbmVFbGVtZW50c0JhY2soKTtcblxuXHRcdFx0aWYoaXRlbS5zcmMpIHtcblx0XHRcdFx0dmFyIGlubGluZVN0ID0gbWZwLnN0LmlubGluZSxcblx0XHRcdFx0XHRlbCA9ICQoaXRlbS5zcmMpO1xuXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGFyZ2V0IGVsZW1lbnQgaGFzIHBhcmVudCAtIHdlIHJlcGxhY2UgaXQgd2l0aCBwbGFjZWhvbGRlciBhbmQgcHV0IGl0IGJhY2sgYWZ0ZXIgcG9wdXAgaXMgY2xvc2VkXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9IGVsWzBdLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0aWYocGFyZW50ICYmIHBhcmVudC50YWdOYW1lKSB7XG5cdFx0XHRcdFx0XHRpZighX2lubGluZVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRcdF9oaWRkZW5DbGFzcyA9IGlubGluZVN0LmhpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0XHRfaW5saW5lUGxhY2Vob2xkZXIgPSBfZ2V0RWwoX2hpZGRlbkNsYXNzKTtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gJ21mcC0nK19oaWRkZW5DbGFzcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHJlcGxhY2UgdGFyZ2V0IGlubGluZSBlbGVtZW50IHdpdGggcGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IGVsLmFmdGVyKF9pbmxpbmVQbGFjZWhvbGRlcikuZGV0YWNoKCkucmVtb3ZlQ2xhc3MoX2hpZGRlbkNsYXNzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW5saW5lU3QudE5vdEZvdW5kKTtcblx0XHRcdFx0XHRlbCA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmlubGluZUVsZW1lbnQgPSBlbDtcblx0XHRcdFx0cmV0dXJuIGVsO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge30sIGl0ZW0pO1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5pbmxpbmUqL1xuXG4vKj4+YWpheCovXG52YXIgQUpBWF9OUyA9ICdhamF4Jyxcblx0X2FqYXhDdXIsXG5cdF9yZW1vdmVBamF4Q3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2FqYXhDdXIpIHtcblx0XHRcdCQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdH1cblx0fSxcblx0X2Rlc3Ryb3lBamF4UmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cdFx0aWYobWZwLnJlcSkge1xuXHRcdFx0bWZwLnJlcS5hYm9ydCgpO1xuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEFKQVhfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0c2V0dGluZ3M6IG51bGwsXG5cdFx0Y3Vyc29yOiAnbWZwLWFqYXgtY3VyJyxcblx0XHR0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgY29udGVudDwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0QWpheDogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChBSkFYX05TKTtcblx0XHRcdF9hamF4Q3VyID0gbWZwLnN0LmFqYXguY3Vyc29yO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0FKQVhfTlMsIF9kZXN0cm95QWpheFJlcXVlc3QpO1xuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UuJyArIEFKQVhfTlMsIF9kZXN0cm95QWpheFJlcXVlc3QpO1xuXHRcdH0sXG5cdFx0Z2V0QWpheDogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKF9hamF4Q3VyKTtcblx0XHRcdH1cblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnbG9hZGluZycpO1xuXG5cdFx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKHtcblx0XHRcdFx0dXJsOiBpdGVtLnNyYyxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblx0XHRcdFx0XHR2YXIgdGVtcCA9IHtcblx0XHRcdFx0XHRcdGRhdGE6ZGF0YSxcblx0XHRcdFx0XHRcdHhocjpqcVhIUlxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignUGFyc2VBamF4JywgdGVtcCk7XG5cblx0XHRcdFx0XHRtZnAuYXBwZW5kQ29udGVudCggJCh0ZW1wLmRhdGEpLCBBSkFYX05TICk7XG5cblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cblx0XHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLndyYXAuYWRkQ2xhc3MoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRcdH0sIDE2KTtcblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignQWpheENvbnRlbnRBZGRlZCcpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gaXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgbWZwLnN0LmFqYXgudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgbWZwLnN0LmFqYXguc2V0dGluZ3MpO1xuXG5cdFx0XHRtZnAucmVxID0gJC5hamF4KG9wdHMpO1xuXG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmFqYXgqL1xuXG4vKj4+aW1hZ2UqL1xudmFyIF9pbWdJbnRlcnZhbCxcblx0X2dldFRpdGxlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKGl0ZW0uZGF0YSAmJiBpdGVtLmRhdGEudGl0bGUgIT09IHVuZGVmaW5lZClcblx0XHRcdHJldHVybiBpdGVtLmRhdGEudGl0bGU7XG5cblx0XHR2YXIgc3JjID0gbWZwLnN0LmltYWdlLnRpdGxlU3JjO1xuXG5cdFx0aWYoc3JjKSB7XG5cdFx0XHRpZigkLmlzRnVuY3Rpb24oc3JjKSkge1xuXHRcdFx0XHRyZXR1cm4gc3JjLmNhbGwobWZwLCBpdGVtKTtcblx0XHRcdH0gZWxzZSBpZihpdGVtLmVsKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtLmVsLmF0dHIoc3JjKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ2ltYWdlJywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdCc8ZmlndXJlPicrXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1pbWdcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0JzxmaWdjYXB0aW9uPicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPC9maWdjYXB0aW9uPicrXG5cdFx0XHRcdFx0JzwvZmlndXJlPicrXG5cdFx0XHRcdCc8L2Rpdj4nLFxuXHRcdGN1cnNvcjogJ21mcC16b29tLW91dC1jdXInLFxuXHRcdHRpdGxlU3JjOiAndGl0bGUnLFxuXHRcdHZlcnRpY2FsRml0OiB0cnVlLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SW1hZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGltZ1N0ID0gbWZwLnN0LmltYWdlLFxuXHRcdFx0XHRucyA9ICcuaW1hZ2UnO1xuXG5cdFx0XHRtZnAudHlwZXMucHVzaCgnaW1hZ2UnKTtcblxuXHRcdFx0X21mcE9uKE9QRU5fRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuY3Vyckl0ZW0udHlwZSA9PT0gJ2ltYWdlJyAmJiBpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3dpbmRvdy5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9OUyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdSZXNpemUnK25zLCBtZnAucmVzaXplSW1hZ2UpO1xuXHRcdFx0aWYobWZwLmlzTG93SUUpIHtcblx0XHRcdFx0X21mcE9uKCdBZnRlckNoYW5nZScsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZXNpemVJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5jdXJySXRlbTtcblx0XHRcdGlmKCFpdGVtIHx8ICFpdGVtLmltZykgcmV0dXJuO1xuXG5cdFx0XHRpZihtZnAuc3QuaW1hZ2UudmVydGljYWxGaXQpIHtcblx0XHRcdFx0dmFyIGRlY3IgPSAwO1xuXHRcdFx0XHQvLyBmaXggYm94LXNpemluZyBpbiBpZTcvOFxuXHRcdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRcdGRlY3IgPSBwYXJzZUludChpdGVtLmltZy5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSArIHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcuY3NzKCdtYXgtaGVpZ2h0JywgbWZwLndILWRlY3IpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X29uSW1hZ2VIYXNTaXplOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRpZihpdGVtLmltZykge1xuXG5cdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cblx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlbS5pc0NoZWNraW5nSW1nU2l6ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUhhc1NpemUnLCBpdGVtKTtcblxuXHRcdFx0XHRpZihpdGVtLmltZ0hpZGRlbikge1xuXHRcdFx0XHRcdGlmKG1mcC5jb250ZW50KVxuXHRcdFx0XHRcdFx0bWZwLmNvbnRlbnQucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cblx0XHRcdFx0XHRpdGVtLmltZ0hpZGRlbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdGhhdCBsb29wcyB1bnRpbCB0aGUgaW1hZ2UgaGFzIHNpemUgdG8gZGlzcGxheSBlbGVtZW50cyB0aGF0IHJlbHkgb24gaXQgYXNhcFxuXHRcdCAqL1xuXHRcdGZpbmRJbWFnZVNpemU6IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0dmFyIGNvdW50ZXIgPSAwLFxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXSxcblx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwgPSBmdW5jdGlvbihkZWxheSkge1xuXG5cdFx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGRlY2VsZXJhdGluZyBpbnRlcnZhbCB0aGF0IGNoZWNrcyBmb3Igc2l6ZSBvZiBhbiBpbWFnZVxuXHRcdFx0XHRcdF9pbWdJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID4gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0XHRcdFx0aWYoY291bnRlciA9PT0gMykge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCgxMCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gNDApIHtcblx0XHRcdFx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwoNTApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGNvdW50ZXIgPT09IDEwMCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fTtcblxuXHRcdFx0bWZwU2V0SW50ZXJ2YWwoMSk7XG5cdFx0fSxcblxuXHRcdGdldEltYWdlOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXG5cdFx0XHR2YXIgZ3VhcmQgPSAwLFxuXG5cdFx0XHRcdC8vIGltYWdlIGxvYWQgY29tcGxldGUgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGlmIChpdGVtLmltZ1swXS5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmltZy5vZmYoJy5tZnBsb2FkZXInKTtcblxuXHRcdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xuXHRcdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUxvYWRDb21wbGV0ZScpO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgaW1hZ2UgY29tcGxldGUgY2hlY2sgZmFpbHMgMjAwIHRpbWVzICgyMCBzZWMpLCB3ZSBhc3N1bWUgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IuXG5cdFx0XHRcdFx0XHRcdGd1YXJkKys7XG5cdFx0XHRcdFx0XHRcdGlmKGd1YXJkIDwgMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChvbkxvYWRDb21wbGV0ZSwxMDApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG9uTG9hZEVycm9yKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gaW1hZ2UgZXJyb3IgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRFcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbWdTdC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykgKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltZ1N0ID0gbWZwLnN0LmltYWdlO1xuXG5cblx0XHRcdHZhciBlbCA9IHRlbXBsYXRlLmZpbmQoJy5tZnAtaW1nJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWcuY2xhc3NOYW1lID0gJ21mcC1pbWcnO1xuXHRcdFx0XHRpZihpdGVtLmVsICYmIGl0ZW0uZWwuZmluZCgnaW1nJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aW1nLmFsdCA9IGl0ZW0uZWwuZmluZCgnaW1nJykuYXR0cignYWx0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcgPSAkKGltZykub24oJ2xvYWQubWZwbG9hZGVyJywgb25Mb2FkQ29tcGxldGUpLm9uKCdlcnJvci5tZnBsb2FkZXInLCBvbkxvYWRFcnJvcik7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblxuXHRcdFx0XHQvLyB3aXRob3V0IGNsb25lKCkgXCJlcnJvclwiIGV2ZW50IGlzIG5vdCBmaXJpbmcgd2hlbiBJTUcgaXMgcmVwbGFjZWQgYnkgbmV3IElNR1xuXHRcdFx0XHQvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGF2b2lkIHN1Y2ggY2xvbmluZ1xuXHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRpdGVtLmltZyA9IGl0ZW0uaW1nLmNsb25lKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXTtcblx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYoIWltZy53aWR0aCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIHtcblx0XHRcdFx0dGl0bGU6IF9nZXRUaXRsZShpdGVtKSxcblx0XHRcdFx0aW1nX3JlcGxhY2VXaXRoOiBpdGVtLmltZ1xuXHRcdFx0fSwgaXRlbSk7XG5cblx0XHRcdG1mcC5yZXNpemVJbWFnZSgpO1xuXG5cdFx0XHRpZihpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSBjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cblx0XHRcdFx0aWYoaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRlbXBsYXRlLnJlbW92ZUNsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cdFx0XHRpdGVtLmxvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRpZighaXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gdHJ1ZTtcblx0XHRcdFx0dGVtcGxhdGUuYWRkQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdG1mcC5maW5kSW1hZ2VTaXplKGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmltYWdlKi9cblxuLyo+Pnpvb20qL1xudmFyIGhhc01velRyYW5zZm9ybSxcblx0Z2V0SGFzTW96VHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoaGFzTW96VHJhbnNmb3JtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGhhc01velRyYW5zZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIGhhc01velRyYW5zZm9ybTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCd6b29tJywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRlYXNpbmc6ICdlYXNlLWluLW91dCcsXG5cdFx0ZHVyYXRpb246IDMwMCxcblx0XHRvcGVuZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LmlzKCdpbWcnKSA/IGVsZW1lbnQgOiBlbGVtZW50LmZpbmQoJ2ltZycpO1xuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXG5cdFx0aW5pdFpvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHpvb21TdCA9IG1mcC5zdC56b29tLFxuXHRcdFx0XHRucyA9ICcuem9vbScsXG5cdFx0XHRcdGltYWdlO1xuXG5cdFx0XHRpZighem9vbVN0LmVuYWJsZWQgfHwgIW1mcC5zdXBwb3J0c1RyYW5zaXRpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZHVyYXRpb24gPSB6b29tU3QuZHVyYXRpb24sXG5cdFx0XHRcdGdldEVsVG9BbmltYXRlID0gZnVuY3Rpb24oaW1hZ2UpIHtcblx0XHRcdFx0XHR2YXIgbmV3SW1nID0gaW1hZ2UuY2xvbmUoKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJykuYWRkQ2xhc3MoJ21mcC1hbmltYXRlZC1pbWFnZScpLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbiA9ICdhbGwgJysoem9vbVN0LmR1cmF0aW9uLzEwMDApKydzICcgKyB6b29tU3QuZWFzaW5nLFxuXHRcdFx0XHRcdFx0Y3NzT2JqID0ge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0ekluZGV4OiA5OTk5LFxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRcdCctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHknOiAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHQgPSAndHJhbnNpdGlvbic7XG5cblx0XHRcdFx0XHRjc3NPYmpbJy13ZWJraXQtJyt0XSA9IGNzc09ialsnLW1vei0nK3RdID0gY3NzT2JqWyctby0nK3RdID0gY3NzT2JqW3RdID0gdHJhbnNpdGlvbjtcblxuXHRcdFx0XHRcdG5ld0ltZy5jc3MoY3NzT2JqKTtcblx0XHRcdFx0XHRyZXR1cm4gbmV3SW1nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaG93TWFpbkNvbnRlbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuVGltZW91dCxcblx0XHRcdFx0YW5pbWF0ZWRJbWc7XG5cblx0XHRcdF9tZnBPbignQnVpbGRDb250cm9scycrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQob3BlblRpbWVvdXQpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHRcdC8vIEJhc2ljYWxseSwgYWxsIGNvZGUgYmVsb3cgZG9lcyBpcyBjbG9uZXMgZXhpc3RpbmcgaW1hZ2UsIHB1dHMgaW4gb24gdG9wIG9mIHRoZSBjdXJyZW50IG9uZSBhbmQgYW5pbWF0ZWQgaXRcblxuXHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpO1xuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCgpICk7XG5cblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXG5cdFx0XHRcdFx0b3BlblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCggdHJ1ZSApICk7XG5cdFx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRpbWFnZSA9IGFuaW1hdGVkSW1nID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHRfbWZwVHJpZ2dlcignWm9vbUFuaW1hdGlvbkVuZGVkJyk7XG5cdFx0XHRcdFx0XHRcdH0sIDE2KTsgLy8gYXZvaWQgYmxpbmsgd2hlbiBzd2l0Y2hpbmcgaW1hZ2VzXG5cblx0XHRcdFx0XHRcdH0sIGR1cmF0aW9uKTsgLy8gdGhpcyB0aW1lb3V0IGVxdWFscyBhbmltYXRpb24gZHVyYXRpb25cblxuXHRcdFx0XHRcdH0sIDE2KTsgLy8gYnkgYWRkaW5nIHRoaXMgdGltZW91dCB3ZSBhdm9pZCBzaG9ydCBnbGl0Y2ggYXQgdGhlIGJlZ2lubmluZyBvZiBhbmltYXRpb25cblxuXG5cdFx0XHRcdFx0Ly8gTG90cyBvZiB0aW1lb3V0cy4uLlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9tZnBPbihCRUZPUkVfQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQob3BlblRpbWVvdXQpO1xuXG5cdFx0XHRcdFx0bWZwLnN0LnJlbW92YWxEZWxheSA9IGR1cmF0aW9uO1xuXG5cdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRpbWFnZSA9IG1mcC5fZ2V0SXRlbVRvWm9vbSgpO1xuXHRcdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQodHJ1ZSkgKTtcblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcblx0XHRcdFx0XHR9LCAxNik7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblx0XHRcdFx0XHRpZihhbmltYXRlZEltZykge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGltYWdlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdF9hbGxvd1pvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnO1xuXHRcdH0sXG5cblx0XHRfZ2V0SXRlbVRvWm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihtZnAuY3Vyckl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLmltZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gR2V0IGVsZW1lbnQgcG9zdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuXHRcdF9nZXRPZmZzZXQ6IGZ1bmN0aW9uKGlzTGFyZ2UpIHtcblx0XHRcdHZhciBlbDtcblx0XHRcdGlmKGlzTGFyZ2UpIHtcblx0XHRcdFx0ZWwgPSBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwgPSBtZnAuc3Quem9vbS5vcGVuZXIobWZwLmN1cnJJdGVtLmVsIHx8IG1mcC5jdXJySXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvZmZzZXQgPSBlbC5vZmZzZXQoKTtcblx0XHRcdHZhciBwYWRkaW5nVG9wID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLXRvcCcpLDEwKTtcblx0XHRcdHZhciBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdG9mZnNldC50b3AgLT0gKCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBwYWRkaW5nVG9wICk7XG5cblxuXHRcdFx0LypcblxuXHRcdFx0QW5pbWF0aW5nIGxlZnQgKyB0b3AgKyB3aWR0aC9oZWlnaHQgbG9va3MgZ2xpdGNoeSBpbiBGaXJlZm94LCBidXQgcGVyZmVjdCBpbiBDaHJvbWUuIEFuZCB2aWNlLXZlcnNhLlxuXG5cdFx0XHQgKi9cblx0XHRcdHZhciBvYmogPSB7XG5cdFx0XHRcdHdpZHRoOiBlbC53aWR0aCgpLFxuXHRcdFx0XHQvLyBmaXggWmVwdG8gaGVpZ2h0K3BhZGRpbmcgaXNzdWVcblx0XHRcdFx0aGVpZ2h0OiAoX2lzSlEgPyBlbC5pbm5lckhlaWdodCgpIDogZWxbMF0ub2Zmc2V0SGVpZ2h0KSAtIHBhZGRpbmdCb3R0b20gLSBwYWRkaW5nVG9wXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJIGhhdGUgdG8gZG8gdGhpcywgYnV0IHRoZXJlIGlzIG5vIGFub3RoZXIgb3B0aW9uXG5cdFx0XHRpZiggZ2V0SGFzTW96VHJhbnNmb3JtKCkgKSB7XG5cdFx0XHRcdG9ialsnLW1vei10cmFuc2Zvcm0nXSA9IG9ialsndHJhbnNmb3JtJ10gPSAndHJhbnNsYXRlKCcgKyBvZmZzZXQubGVmdCArICdweCwnICsgb2Zmc2V0LnRvcCArICdweCknO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqLmxlZnQgPSBvZmZzZXQubGVmdDtcblx0XHRcdFx0b2JqLnRvcCA9IG9mZnNldC50b3A7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblxuXHR9XG59KTtcblxuXG5cbi8qPj56b29tKi9cblxuLyo+PmlmcmFtZSovXG5cbnZhciBJRlJBTUVfTlMgPSAnaWZyYW1lJyxcblx0X2VtcHR5UGFnZSA9ICcvL2Fib3V0OmJsYW5rJyxcblxuXHRfZml4SWZyYW1lQnVncyA9IGZ1bmN0aW9uKGlzU2hvd2luZykge1xuXHRcdGlmKG1mcC5jdXJyVGVtcGxhdGVbSUZSQU1FX05TXSkge1xuXHRcdFx0dmFyIGVsID0gbWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdLmZpbmQoJ2lmcmFtZScpO1xuXHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHJlc2V0IHNyYyBhZnRlciB0aGUgcG9wdXAgaXMgY2xvc2VkIHRvIGF2b2lkIFwidmlkZW8ga2VlcHMgcGxheWluZyBhZnRlciBwb3B1cCBpcyBjbG9zZWRcIiBidWdcblx0XHRcdFx0aWYoIWlzU2hvd2luZykge1xuXHRcdFx0XHRcdGVsWzBdLnNyYyA9IF9lbXB0eVBhZ2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTggYmxhY2sgc2NyZWVuIGJ1ZyBmaXhcblx0XHRcdFx0aWYobWZwLmlzSUU4KSB7XG5cdFx0XHRcdFx0ZWwuY3NzKCdkaXNwbGF5JywgaXNTaG93aW5nID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJRlJBTUVfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0bWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgc3JjPVwiLy9hYm91dDpibGFua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nK1xuXHRcdFx0XHQnPC9kaXY+JyxcblxuXHRcdHNyY0FjdGlvbjogJ2lmcmFtZV9zcmMnLFxuXG5cdFx0Ly8gd2UgZG9uJ3QgY2FyZSBhbmQgc3VwcG9ydCBvbmx5IG9uZSBkZWZhdWx0IHR5cGUgb2YgVVJMIGJ5IGRlZmF1bHRcblx0XHRwYXR0ZXJuczoge1xuXHRcdFx0eW91dHViZToge1xuXHRcdFx0XHRpbmRleDogJ3lvdXR1YmUuY29tJyxcblx0XHRcdFx0aWQ6ICd2PScsXG5cdFx0XHRcdHNyYzogJy8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MSdcblx0XHRcdH0sXG5cdFx0XHR2aW1lbzoge1xuXHRcdFx0XHRpbmRleDogJ3ZpbWVvLmNvbS8nLFxuXHRcdFx0XHRpZDogJy8nLFxuXHRcdFx0XHRzcmM6ICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdGdtYXBzOiB7XG5cdFx0XHRcdGluZGV4OiAnLy9tYXBzLmdvb2dsZS4nLFxuXHRcdFx0XHRzcmM6ICclaWQlJm91dHB1dD1lbWJlZCdcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SWZyYW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElGUkFNRV9OUyk7XG5cblx0XHRcdF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHtcblx0XHRcdFx0aWYocHJldlR5cGUgIT09IG5ld1R5cGUpIHtcblx0XHRcdFx0XHRpZihwcmV2VHlwZSA9PT0gSUZSQU1FX05TKSB7XG5cdFx0XHRcdFx0XHRfZml4SWZyYW1lQnVncygpOyAvLyBpZnJhbWUgaWYgcmVtb3ZlZFxuXHRcdFx0XHRcdH0gZWxzZSBpZihuZXdUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKHRydWUpOyAvLyBpZnJhbWUgaXMgc2hvd2luZ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fS8vIGVsc2Uge1xuXHRcdFx0XHRcdC8vIGlmcmFtZSBzb3VyY2UgaXMgc3dpdGNoZWQsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0XHRcdC8vfVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCArICcuJyArIElGUkFNRV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Z2V0SWZyYW1lOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXHRcdFx0dmFyIGVtYmVkU3JjID0gaXRlbS5zcmM7XG5cdFx0XHR2YXIgaWZyYW1lU3QgPSBtZnAuc3QuaWZyYW1lO1xuXG5cdFx0XHQkLmVhY2goaWZyYW1lU3QucGF0dGVybnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihlbWJlZFNyYy5pbmRleE9mKCB0aGlzLmluZGV4ICkgPiAtMSkge1xuXHRcdFx0XHRcdGlmKHRoaXMuaWQpIHtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHRlbWJlZFNyYyA9IGVtYmVkU3JjLnN1YnN0cihlbWJlZFNyYy5sYXN0SW5kZXhPZih0aGlzLmlkKSt0aGlzLmlkLmxlbmd0aCwgZW1iZWRTcmMubGVuZ3RoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5pZC5jYWxsKCB0aGlzLCBlbWJlZFNyYyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbWJlZFNyYyA9IHRoaXMuc3JjLnJlcGxhY2UoJyVpZCUnLCBlbWJlZFNyYyApO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgZGF0YU9iaiA9IHt9O1xuXHRcdFx0aWYoaWZyYW1lU3Quc3JjQWN0aW9uKSB7XG5cdFx0XHRcdGRhdGFPYmpbaWZyYW1lU3Quc3JjQWN0aW9uXSA9IGVtYmVkU3JjO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwgZGF0YU9iaiwgaXRlbSk7XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cblxuLyo+PmlmcmFtZSovXG5cbi8qPj5nYWxsZXJ5Ki9cbi8qKlxuICogR2V0IGxvb3BlZCBpbmRleCBkZXBlbmRpbmcgb24gbnVtYmVyIG9mIHNsaWRlc1xuICovXG52YXIgX2dldExvb3BlZElkID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgbnVtU2xpZGVzID0gbWZwLml0ZW1zLmxlbmd0aDtcblx0XHRpZihpbmRleCA+IG51bVNsaWRlcyAtIDEpIHtcblx0XHRcdHJldHVybiBpbmRleCAtIG51bVNsaWRlcztcblx0XHR9IGVsc2UgIGlmKGluZGV4IDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bVNsaWRlcyArIGluZGV4O1xuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH0sXG5cdF9yZXBsYWNlQ3VyclRvdGFsID0gZnVuY3Rpb24odGV4dCwgY3VyciwgdG90YWwpIHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8lY3VyciUvZ2ksIGN1cnIgKyAxKS5yZXBsYWNlKC8ldG90YWwlL2dpLCB0b3RhbCk7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnZ2FsbGVyeScsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0YXJyb3dNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1hcnJvdyBtZnAtYXJyb3ctJWRpciVcIj48L2J1dHRvbj4nLFxuXHRcdHByZWxvYWQ6IFswLDJdLFxuXHRcdG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcblx0XHRhcnJvd3M6IHRydWUsXG5cblx0XHR0UHJldjogJ1ByZXZpb3VzIChMZWZ0IGFycm93IGtleSknLFxuXHRcdHROZXh0OiAnTmV4dCAoUmlnaHQgYXJyb3cga2V5KScsXG5cdFx0dENvdW50ZXI6ICclY3VyciUgb2YgJXRvdGFsJSdcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRHYWxsZXJ5OiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGdTdCA9IG1mcC5zdC5nYWxsZXJ5LFxuXHRcdFx0XHRucyA9ICcubWZwLWdhbGxlcnknO1xuXG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gdHJ1ZTsgLy8gdHJ1ZSAtIG5leHQsIGZhbHNlIC0gcHJldlxuXG5cdFx0XHRpZighZ1N0IHx8ICFnU3QuZW5hYmxlZCApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWdhbGxlcnknO1xuXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0aWYoZ1N0Lm5hdmlnYXRlQnlJbWdDbGljaykge1xuXHRcdFx0XHRcdG1mcC53cmFwLm9uKCdjbGljaycrbnMsICcubWZwLWltZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2RvY3VtZW50Lm9uKCdrZXlkb3duJytucywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRcdFx0XHRtZnAucHJldigpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignVXBkYXRlU3RhdHVzJytucywgZnVuY3Rpb24oZSwgZGF0YSkge1xuXHRcdFx0XHRpZihkYXRhLnRleHQpIHtcblx0XHRcdFx0XHRkYXRhLnRleHQgPSBfcmVwbGFjZUN1cnJUb3RhbChkYXRhLnRleHQsIG1mcC5jdXJySXRlbS5pbmRleCwgbWZwLml0ZW1zLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oTUFSS1VQX1BBUlNFX0VWRU5UK25zLCBmdW5jdGlvbihlLCBlbGVtZW50LCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHRcdFx0dmFyIGwgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdFx0XHR2YWx1ZXMuY291bnRlciA9IGwgPiAxID8gX3JlcGxhY2VDdXJyVG90YWwoZ1N0LnRDb3VudGVyLCBpdGVtLmluZGV4LCBsKSA6ICcnO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignQnVpbGRDb250cm9scycgKyBucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5pdGVtcy5sZW5ndGggPiAxICYmIGdTdC5hcnJvd3MgJiYgIW1mcC5hcnJvd0xlZnQpIHtcblx0XHRcdFx0XHR2YXIgbWFya3VwID0gZ1N0LmFycm93TWFya3VwLFxuXHRcdFx0XHRcdFx0YXJyb3dMZWZ0ID0gbWZwLmFycm93TGVmdCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudFByZXYpLnJlcGxhY2UoLyVkaXIlL2dpLCAnbGVmdCcpICkuYWRkQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUyksXG5cdFx0XHRcdFx0XHRhcnJvd1JpZ2h0ID0gbWZwLmFycm93UmlnaHQgPSAkKCBtYXJrdXAucmVwbGFjZSgvJXRpdGxlJS9naSwgZ1N0LnROZXh0KS5yZXBsYWNlKC8lZGlyJS9naSwgJ3JpZ2h0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKTtcblxuXHRcdFx0XHRcdGFycm93TGVmdC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YXJyb3dSaWdodC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5uZXh0KCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRtZnAuY29udGFpbmVyLmFwcGVuZChhcnJvd0xlZnQuYWRkKGFycm93UmlnaHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDSEFOR0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX3ByZWxvYWRUaW1lb3V0KSBjbGVhclRpbWVvdXQobWZwLl9wcmVsb2FkVGltZW91dCk7XG5cblx0XHRcdFx0bWZwLl9wcmVsb2FkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bWZwLnByZWxvYWROZWFyYnlJbWFnZXMoKTtcblx0XHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0fSwgMTYpO1xuXHRcdFx0fSk7XG5cblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2RvY3VtZW50Lm9mZihucyk7XG5cdFx0XHRcdG1mcC53cmFwLm9mZignY2xpY2snK25zKTtcblx0XHRcdFx0bWZwLmFycm93UmlnaHQgPSBtZnAuYXJyb3dMZWZ0ID0gbnVsbDtcblx0XHRcdH0pO1xuXG5cdFx0fSxcblx0XHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCArIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmV2OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSBmYWxzZTtcblx0XHRcdG1mcC5pbmRleCA9IF9nZXRMb29wZWRJZChtZnAuaW5kZXggLSAxKTtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdH0sXG5cdFx0Z29UbzogZnVuY3Rpb24obmV3SW5kZXgpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSAobmV3SW5kZXggPj0gbWZwLmluZGV4KTtcblx0XHRcdG1mcC5pbmRleCA9IG5ld0luZGV4O1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmVsb2FkTmVhcmJ5SW1hZ2VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwID0gbWZwLnN0LmdhbGxlcnkucHJlbG9hZCxcblx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRwcmVsb2FkQWZ0ZXIgPSBNYXRoLm1pbihwWzFdLCBtZnAuaXRlbXMubGVuZ3RoKSxcblx0XHRcdFx0aTtcblxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEFmdGVyIDogcHJlbG9hZEJlZm9yZSk7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleCtpKTtcblx0XHRcdH1cblx0XHRcdGZvcihpID0gMTsgaSA8PSAobWZwLmRpcmVjdGlvbiA/IHByZWxvYWRCZWZvcmUgOiBwcmVsb2FkQWZ0ZXIpOyBpKyspIHtcblx0XHRcdFx0bWZwLl9wcmVsb2FkSXRlbShtZnAuaW5kZXgtaSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfcHJlbG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cblx0XHRcdGlmKG1mcC5pdGVtc1tpbmRleF0ucHJlbG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdO1xuXHRcdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdGl0ZW0gPSBtZnAucGFyc2VFbCggaW5kZXggKTtcblx0XHRcdH1cblxuXHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkJywgaXRlbSk7XG5cblx0XHRcdGlmKGl0ZW0udHlwZSA9PT0gJ2ltYWdlJykge1xuXHRcdFx0XHRpdGVtLmltZyA9ICQoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbignbG9hZC5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9KS5vbignZXJyb3IubWZwbG9hZGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkRXJyb3InLCBpdGVtKTtcblx0XHRcdFx0fSkuYXR0cignc3JjJywgaXRlbS5zcmMpO1xuXHRcdFx0fVxuXG5cblx0XHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+Z2FsbGVyeSovXG5cbi8qPj5yZXRpbmEqL1xuXG52YXIgUkVUSU5BX05TID0gJ3JldGluYSc7XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShSRVRJTkFfTlMsIHtcblx0b3B0aW9uczoge1xuXHRcdHJlcGxhY2VTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdHJldHVybiBpdGVtLnNyYy5yZXBsYWNlKC9cXC5cXHcrJC8sIGZ1bmN0aW9uKG0pIHsgcmV0dXJuICdAMngnICsgbTsgfSk7XG5cdFx0fSxcblx0XHRyYXRpbzogMSAvLyBGdW5jdGlvbiBvciBudW1iZXIuICBTZXQgdG8gMSB0byBkaXNhYmxlLlxuXHR9LFxuXHRwcm90bzoge1xuXHRcdGluaXRSZXRpbmE6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG5cblx0XHRcdFx0dmFyIHN0ID0gbWZwLnN0LnJldGluYSxcblx0XHRcdFx0XHRyYXRpbyA9IHN0LnJhdGlvO1xuXG5cdFx0XHRcdHJhdGlvID0gIWlzTmFOKHJhdGlvKSA/IHJhdGlvIDogcmF0aW8oKTtcblxuXHRcdFx0XHRpZihyYXRpbyA+IDEpIHtcblx0XHRcdFx0XHRfbWZwT24oJ0ltYWdlSGFzU2l6ZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdtYXgtd2lkdGgnOiBpdGVtLmltZ1swXS5uYXR1cmFsV2lkdGggLyByYXRpbyxcblx0XHRcdFx0XHRcdFx0J3dpZHRoJzogJzEwMCUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRfbWZwT24oJ0VsZW1lbnRQYXJzZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uc3JjID0gc3QucmVwbGFjZVNyYyhpdGVtLCByYXRpbyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5yZXRpbmEqL1xuIF9jaGVja0luc3RhbmNlKCk7IH0pKTsiLCJQcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG5cdCdjb21tZW50JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0cGF0dGVybjogLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfHRyYWl0fGluc3RhbmNlb2Z8bmV3KVxccyt8XFxiY2F0Y2hcXHMrXFwoKVtcXHcuXFxcXF0rL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLlxcXFxdL1xuXHRcdH1cblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuXHQnZnVuY3Rpb24nOiAvXFx3Kyg/PVxcKCkvLFxuXHQnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCsoPzpcXC5cXGQqKT98XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcblx0J29wZXJhdG9yJzogL1s8Pl09P3xbIT1dPT89P3wtLT98XFwrXFwrP3wmJj98XFx8XFx8P3xbPyovfl4lXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG4iLCIvLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIi8+XG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKlxuICogQGxpY2Vuc2UgTUlUIDxodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVD5cbiAqIEBhdXRob3IgTGVhIFZlcm91IDxodHRwczovL2xlYS52ZXJvdS5tZT5cbiAqIEBuYW1lc3BhY2VcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFByaXNtID0gKGZ1bmN0aW9uIChfc2VsZil7XG5cbi8vIFByaXZhdGUgaGVscGVyIHZhcnNcbnZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG52YXIgdW5pcXVlSWQgPSAwO1xuXG5cbnZhciBfID0ge1xuXHQvKipcblx0ICogQnkgZGVmYXVsdCwgUHJpc20gd2lsbCBhdHRlbXB0IHRvIGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyAoYnkgY2FsbGluZyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsfSkgb24gdGhlXG5cdCAqIGN1cnJlbnQgcGFnZSBhZnRlciB0aGUgcGFnZSBmaW5pc2hlZCBsb2FkaW5nLiBUaGlzIG1pZ2h0IGJlIGEgcHJvYmxlbSBpZiBlLmcuIHlvdSB3YW50ZWQgdG8gYXN5bmNocm9ub3VzbHkgbG9hZFxuXHQgKiBhZGRpdGlvbmFsIGxhbmd1YWdlcyBvciBwbHVnaW5zIHlvdXJzZWxmLlxuXHQgKlxuXHQgKiBCeSBzZXR0aW5nIHRoaXMgdmFsdWUgdG8gYHRydWVgLCBQcmlzbSB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyBvbiB0aGUgcGFnZS5cblx0ICpcblx0ICogWW91IG9idmlvdXNseSBoYXZlIHRvIGNoYW5nZSB0aGlzIHZhbHVlIGJlZm9yZSB0aGUgYXV0b21hdGljIGhpZ2hsaWdodGluZyBzdGFydGVkLiBUbyBkbyB0aGlzLCB5b3UgY2FuIGFkZCBhblxuXHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHQgKlxuXHQgKiBgYGBqc1xuXHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdCAqIFByaXNtLm1hbnVhbCA9IHRydWU7XG5cdCAqIC8vIGFkZCBhIG5ldyA8c2NyaXB0PiB0byBsb2FkIFByaXNtJ3Mgc2NyaXB0XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAZGVmYXVsdCBmYWxzZVxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICogQG1lbWJlcm9mIFByaXNtXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdG1hbnVhbDogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20ubWFudWFsLFxuXHRkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXI6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblxuXHQvKipcblx0ICogQSBuYW1lc3BhY2UgZm9yIHV0aWxpdHkgbWV0aG9kcy5cblx0ICpcblx0ICogQWxsIGZ1bmN0aW9uIGluIHRoaXMgbmFtZXNwYWNlIHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IG1hcmtlZCBhcyBfcHVibGljXyBhcmUgZm9yIF9faW50ZXJuYWwgdXNlIG9ubHlfXyBhbmQgbWF5XG5cdCAqIGNoYW5nZSBvciBkaXNhcHBlYXIgYXQgYW55IHRpbWUuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2Vcblx0ICogQG1lbWJlcm9mIFByaXNtXG5cdCAqL1xuXHR1dGlsOiB7XG5cdFx0ZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodG9rZW5zKSB7XG5cdFx0XHRpZiAodG9rZW5zIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKGVuY29kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgdHlwZSBvZiB0aGUgZ2l2ZW4gdmFsdWUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2FueX0gb1xuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiB0eXBlKG51bGwpICAgICAgPT09ICdOdWxsJ1xuXHRcdCAqIHR5cGUodW5kZWZpbmVkKSA9PT0gJ1VuZGVmaW5lZCdcblx0XHQgKiB0eXBlKDEyMykgICAgICAgPT09ICdOdW1iZXInXG5cdFx0ICogdHlwZSgnZm9vJykgICAgID09PSAnU3RyaW5nJ1xuXHRcdCAqIHR5cGUodHJ1ZSkgICAgICA9PT0gJ0Jvb2xlYW4nXG5cdFx0ICogdHlwZShbMSwgMl0pICAgID09PSAnQXJyYXknXG5cdFx0ICogdHlwZSh7fSkgICAgICAgID09PSAnT2JqZWN0J1xuXHRcdCAqIHR5cGUoU3RyaW5nKSAgICA9PT0gJ0Z1bmN0aW9uJ1xuXHRcdCAqIHR5cGUoL2FiYysvKSAgICA9PT0gJ1JlZ0V4cCdcblx0XHQgKi9cblx0XHR0eXBlOiBmdW5jdGlvbiAobykge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgYSB1bmlxdWUgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LiBMYXRlciBjYWxscyB3aWxsIHN0aWxsIHJldHVybiB0aGUgc2FtZSBudW1iZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb2JqXG5cdFx0ICogQHJldHVybnMge251bWJlcn1cblx0XHQgKi9cblx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIHRoZSBnaXZlbiBvYmplY3QuXG5cdFx0ICpcblx0XHQgKiBUaGUgbWFpbiBpbnRlbmRlZCB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBjbG9uZSBsYW5ndWFnZSBkZWZpbml0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7VH0gb1xuXHRcdCAqIEBwYXJhbSB7UmVjb3JkPG51bWJlciwgYW55Pn0gW3Zpc2l0ZWRdXG5cdFx0ICogQHJldHVybnMge1R9XG5cdFx0ICogQHRlbXBsYXRlIFRcblx0XHQgKi9cblx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHR2YXIgY2xvbmUsIGlkO1xuXHRcdFx0c3dpdGNoIChfLnV0aWwudHlwZShvKSkge1xuXHRcdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi8gKHt9KTtcblx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdCgvKiogQHR5cGUge0FycmF5fSAqLygvKiogQHR5cGUge2FueX0gKi8obykpKS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG5cdFx0XHRcdFx0XHRjbG9uZVtpXSA9IGRlZXBDbG9uZSh2LCB2aXNpdGVkKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBvO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBQcmlzbSBsYW5ndWFnZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBzZXQgYnkgYSBgbGFuZ3VhZ2UteHh4eGAgb3IgYGxhbmcteHh4eGAgY2xhc3MuXG5cdFx0ICpcblx0XHQgKiBJZiBubyBsYW5ndWFnZSBpcyBzZXQgZm9yIHRoZSBlbGVtZW50IG9yIHRoZSBlbGVtZW50IGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgYG5vbmVgIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGdldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0d2hpbGUgKGVsZW1lbnQgJiYgIWxhbmcudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybiAoZWxlbWVudC5jbGFzc05hbWUubWF0Y2gobGFuZykgfHwgWywgJ25vbmUnXSlbMV0udG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnbm9uZSc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIHNjcmlwdCBlbGVtZW50IHRoYXQgaXMgY3VycmVudGx5IGV4ZWN1dGluZy5cblx0XHQgKlxuXHRcdCAqIFRoaXMgZG9lcyBfX25vdF9fIHdvcmsgZm9yIGxpbmUgc2NyaXB0IGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7SFRNTFNjcmlwdEVsZW1lbnQgfCBudWxsfVxuXHRcdCAqL1xuXHRcdGN1cnJlbnRTY3JpcHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCdjdXJyZW50U2NyaXB0JyBpbiBkb2N1bWVudCAmJiAxIDwgMiAvKiBoYWNrIHRvIHRyaXAgVFMnIGZsb3cgYW5hbHlzaXMgKi8pIHtcblx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElFMTEgd29ya2Fyb3VuZFxuXHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHQvLyB0aGlzIHdpbGwgbm90IHdvcmsgZm9yIGlubGluZSBzY3JpcHRzXG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIEdldCBmaWxlIHNyYyB1cmwgZnJvbSBzdGFjay4gU3BlY2lmaWNhbGx5IHdvcmtzIHdpdGggdGhlIGZvcm1hdCBvZiBzdGFjayB0cmFjZXMgaW4gSUUuXG5cdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gRXJyb3Jcblx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHQvLyAgICBhdCBHbG9iYWwgY29kZSAoaHR0cDovL2xvY2FsaG9zdC9jb21wb25lbnRzL3ByaXNtLWNvcmUuanM6NjA2OjEpXG5cblx0XHRcdFx0dmFyIHNyYyA9ICgvYXQgW14oXFxyXFxuXSpcXCgoLiopOi4rOi4rXFwpJC9pLmV4ZWMoZXJyLnN0YWNrKSB8fCBbXSlbMV07XG5cdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNjcmlwdHMpIHtcblx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNjcmlwdHNbaV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHdoZXRoZXIgYSBnaXZlbiBjbGFzcyBpcyBhY3RpdmUgZm9yIGBlbGVtZW50YC5cblx0XHQgKlxuXHRcdCAqIFRoZSBjbGFzcyBjYW4gYmUgYWN0aXZhdGVkIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIGdpdmVuIGNsYXNzIGFuZCBpdCBjYW4gYmUgZGVhY3RpdmF0ZWRcblx0XHQgKiBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGNsYXNzLiBUaGUgX25lZ2F0ZWQgdmVyc2lvbl8gb2YgdGhlXG5cdFx0ICogZ2l2ZW4gY2xhc3MgaXMganVzdCB0aGUgZ2l2ZW4gY2xhc3Mgd2l0aCBhIGBuby1gIHByZWZpeC5cblx0XHQgKlxuXHRcdCAqIFdoZXRoZXIgdGhlIGNsYXNzIGlzIGFjdGl2ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjbG9zZXN0IGFuY2VzdG9yIG9mIGBlbGVtZW50YCAod2hlcmUgYGVsZW1lbnRgIGl0c2VsZiBpc1xuXHRcdCAqIGNsb3Nlc3QgYW5jZXN0b3IpIHRoYXQgaGFzIHRoZSBnaXZlbiBjbGFzcyBvciB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIGl0LiBJZiBuZWl0aGVyIGBlbGVtZW50YCBub3IgYW55IG9mIGl0c1xuXHRcdCAqIGFuY2VzdG9ycyBoYXZlIHRoZSBnaXZlbiBjbGFzcyBvciB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIGl0LCB0aGVuIHRoZSBkZWZhdWx0IGFjdGl2YXRpb24gd2lsbCBiZSByZXR1cm5lZC5cblx0XHQgKlxuXHRcdCAqIEluIHRoZSBwYXJhZG94aWNhbCBzaXR1YXRpb24gd2hlcmUgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgY29udGFpbnMgX19ib3RoX18gdGhlIGdpdmVuIGNsYXNzIGFuZCB0aGUgbmVnYXRlZFxuXHRcdCAqIHZlcnNpb24gb2YgaXQsIHRoZSBjbGFzcyBpcyBjb25zaWRlcmVkIGFjdGl2ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWZhdWx0QWN0aXZhdGlvbj1mYWxzZV1cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0FjdGl2ZTogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZGVmYXVsdEFjdGl2YXRpb24pIHtcblx0XHRcdHZhciBubyA9ICduby0nICsgY2xhc3NOYW1lO1xuXG5cdFx0XHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdFx0XHR2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdFx0XHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMobm8pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gISFkZWZhdWx0QWN0aXZhdGlvbjtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoaXMgbmFtZXNwYWNlIGNvbnRhaW5zIGFsbCBjdXJyZW50bHkgbG9hZGVkIGxhbmd1YWdlcyBhbmQgdGhlIHNvbWUgaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgYW5kIG1vZGlmeSBsYW5ndWFnZXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2Vcblx0ICogQG1lbWJlcm9mIFByaXNtXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdGxhbmd1YWdlczoge1xuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIGxhbmd1YWdlIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBhcHBlbmRzIHRoZSBnaXZlbiB0b2tlbnMuXG5cdFx0ICpcblx0XHQgKiBJZiBhIHRva2VuIGluIGByZWRlZmAgYWxzbyBhcHBlYXJzIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UsIHRoZW4gdGhlIGV4aXN0aW5nIHRva2VuIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2Vcblx0XHQgKiB3aWxsIGJlIG92ZXJ3cml0dGVuIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cblx0XHQgKlxuXHRcdCAqICMjIEJlc3QgcHJhY3RpY2VzXG5cdFx0ICpcblx0XHQgKiBTaW5jZSB0aGUgcG9zaXRpb24gb2Ygb3ZlcndyaXRpbmcgdG9rZW5zICh0b2tlbiBpbiBgcmVkZWZgIHRoYXQgb3ZlcndyaXRlIHRva2VucyBpbiB0aGUgY29waWVkIGxhbmd1YWdlKVxuXHRcdCAqIGRvZXNuJ3QgbWF0dGVyLCB0aGV5IGNhbiB0ZWNobmljYWxseSBiZSBpbiBhbnkgb3JkZXIuIEhvd2V2ZXIsIHRoaXMgY2FuIGJlIGNvbmZ1c2luZyB0byBvdGhlcnMgdGhhdCB0cnlpbmcgdG9cblx0XHQgKiB1bmRlcnN0YW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGJlY2F1c2UsIG5vcm1hbGx5LCB0aGUgb3JkZXIgb2YgdG9rZW5zIG1hdHRlcnMgaW4gUHJpc20gZ3JhbW1hcnMuXG5cdFx0ICpcblx0XHQgKiBUaGVyZWZvcmUsIGl0IGlzIGVuY291cmFnZWQgdG8gb3JkZXIgb3ZlcndyaXRpbmcgdG9rZW5zIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb25zIG9mIHRoZSBvdmVyd3JpdHRlbiB0b2tlbnMuXG5cdFx0ICogRnVydGhlcm1vcmUsIGFsbCBub24tb3ZlcndyaXRpbmcgdG9rZW5zIHNob3VsZCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG92ZXJ3cml0aW5nIG9uZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBsYW5ndWFnZSB0byBleHRlbmQuIFRoaXMgaGFzIHRvIGJlIGEga2V5IGluIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gcmVkZWYgVGhlIG5ldyB0b2tlbnMgdG8gYXBwZW5kLlxuXHRcdCAqIEByZXR1cm5zIHtHcmFtbWFyfSBUaGUgbmV3IGxhbmd1YWdlIGNyZWF0ZWQuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogUHJpc20ubGFuZ3VhZ2VzWydjc3Mtd2l0aC1jb2xvcnMnXSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcblx0XHQgKiAgICAgLy8gUHJpc20ubGFuZ3VhZ2VzLmNzcyBhbHJlYWR5IGhhcyBhICdjb21tZW50JyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIG92ZXJ3cml0ZSBDU1MnICdjb21tZW50JyB0b2tlblxuXHRcdCAqICAgICAvLyBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb25cblx0XHQgKiAgICAgJ2NvbW1lbnQnOiB7IC4uLiB9LFxuXHRcdCAqICAgICAvLyBDU1MgZG9lc24ndCBoYXZlIGEgJ2NvbG9yJyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIGJlIGFwcGVuZGVkXG5cdFx0ICogICAgICdjb2xvcic6IC9cXGIoPzpyZWR8Z3JlZW58Ymx1ZSlcXGIvXG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHR2YXIgbGFuZyA9IF8udXRpbC5jbG9uZShfLmxhbmd1YWdlc1tpZF0pO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEluc2VydHMgdG9rZW5zIF9iZWZvcmVfIGFub3RoZXIgdG9rZW4gaW4gYSBsYW5ndWFnZSBkZWZpbml0aW9uIG9yIGFueSBvdGhlciBncmFtbWFyLlxuXHRcdCAqXG5cdFx0ICogIyMgVXNhZ2Vcblx0XHQgKlxuXHRcdCAqIFRoaXMgaGVscGVyIG1ldGhvZCBtYWtlcyBpdCBlYXN5IHRvIG1vZGlmeSBleGlzdGluZyBsYW5ndWFnZXMuIEZvciBleGFtcGxlLCB0aGUgQ1NTIGxhbmd1YWdlIGRlZmluaXRpb25cblx0XHQgKiBub3Qgb25seSBkZWZpbmVzIENTUyBoaWdobGlnaHRpbmcgZm9yIENTUyBkb2N1bWVudHMsIGJ1dCBhbHNvIG5lZWRzIHRvIGRlZmluZSBoaWdobGlnaHRpbmcgZm9yIENTUyBlbWJlZGRlZFxuXHRcdCAqIGluIEhUTUwgdGhyb3VnaCBgPHN0eWxlPmAgZWxlbWVudHMuIFRvIGRvIHRoaXMsIGl0IG5lZWRzIHRvIG1vZGlmeSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAgYW5kIGFkZCB0aGVcblx0XHQgKiBhcHByb3ByaWF0ZSB0b2tlbnMuIEhvd2V2ZXIsIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYCBpcyBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QgbGl0ZXJhbCwgc28gaWYgeW91IGRvXG5cdFx0ICogdGhpczpcblx0XHQgKlxuXHRcdCAqIGBgYGpzXG5cdFx0ICogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC5zdHlsZSA9IHtcblx0XHQgKiAgICAgLy8gdG9rZW5cblx0XHQgKiB9O1xuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogdGhlbiB0aGUgYHN0eWxlYCB0b2tlbiB3aWxsIGJlIGFkZGVkIChhbmQgcHJvY2Vzc2VkKSBhdCB0aGUgZW5kLiBgaW5zZXJ0QmVmb3JlYCBhbGxvd3MgeW91IHRvIGluc2VydCB0b2tlbnNcblx0XHQgKiBiZWZvcmUgZXhpc3RpbmcgdG9rZW5zLiBGb3IgdGhlIENTUyBleGFtcGxlIGFib3ZlLCB5b3Ugd291bGQgdXNlIGl0IGxpa2UgdGhpczpcblx0XHQgKlxuXHRcdCAqIGBgYGpzXG5cdFx0ICogUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywge1xuXHRcdCAqICAgICAnc3R5bGUnOiB7XG5cdFx0ICogICAgICAgICAvLyB0b2tlblxuXHRcdCAqICAgICB9XG5cdFx0ICogfSk7XG5cdFx0ICogYGBgXG5cdFx0ICpcblx0XHQgKiAjIyBTcGVjaWFsIGNhc2VzXG5cdFx0ICpcblx0XHQgKiBJZiB0aGUgZ3JhbW1hcnMgb2YgYGluc2lkZWAgYW5kIGBpbnNlcnRgIGhhdmUgdG9rZW5zIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhlIHRva2VucyBpbiBgaW5zaWRlYCdzIGdyYW1tYXJcblx0XHQgKiB3aWxsIGJlIGlnbm9yZWQuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGJlaGF2aW9yIGNhbiBiZSB1c2VkIHRvIGluc2VydCB0b2tlbnMgYWZ0ZXIgYGJlZm9yZWA6XG5cdFx0ICpcblx0XHQgKiBgYGBqc1xuXHRcdCAqIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjb21tZW50Jywge1xuXHRcdCAqICAgICAnY29tbWVudCc6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuY29tbWVudCxcblx0XHQgKiAgICAgLy8gdG9rZW5zIGFmdGVyICdjb21tZW50J1xuXHRcdCAqIH0pO1xuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogIyMgTGltaXRhdGlvbnNcblx0XHQgKlxuXHRcdCAqIFRoZSBtYWluIHByb2JsZW0gYGluc2VydEJlZm9yZWAgaGFzIHRvIHNvbHZlIGlzIGl0ZXJhdGlvbiBvcmRlci4gU2luY2UgRVMyMDE1LCB0aGUgaXRlcmF0aW9uIG9yZGVyIGZvciBvYmplY3Rcblx0XHQgKiBwcm9wZXJ0aWVzIGlzIGd1YXJhbnRlZWQgdG8gYmUgdGhlIGluc2VydGlvbiBvcmRlciAoZXhjZXB0IGZvciBpbnRlZ2VyIGtleXMpIGJ1dCBzb21lIGJyb3dzZXJzIGJlaGF2ZVxuXHRcdCAqIGRpZmZlcmVudGx5IHdoZW4ga2V5cyBhcmUgZGVsZXRlZCBhbmQgcmUtaW5zZXJ0ZWQuIFNvIGBpbnNlcnRCZWZvcmVgIGNhbid0IGJlIGltcGxlbWVudGVkIGJ5IHRlbXBvcmFyaWx5XG5cdFx0ICogZGVsZXRpbmcgcHJvcGVydGllcyB3aGljaCBpcyBuZWNlc3NhcnkgdG8gaW5zZXJ0IGF0IGFyYml0cmFyeSBwb3NpdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBUbyBzb2x2ZSB0aGlzIHByb2JsZW0sIGBpbnNlcnRCZWZvcmVgIGRvZXNuJ3QgYWN0dWFsbHkgaW5zZXJ0IHRoZSBnaXZlbiB0b2tlbnMgaW50byB0aGUgdGFyZ2V0IG9iamVjdC5cblx0XHQgKiBJbnN0ZWFkLCBpdCB3aWxsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgbmV3IG9uZS4gVGhpc1xuXHRcdCAqIGNhbiBiZSBkb25lIHdpdGhvdXQgdGVtcG9yYXJpbHkgZGVsZXRpbmcgcHJvcGVydGllcywgc28gdGhlIGl0ZXJhdGlvbiBvcmRlciBpcyB3ZWxsLWRlZmluZWQuXG5cdFx0ICpcblx0XHQgKiBIb3dldmVyLCBvbmx5IHJlZmVyZW5jZXMgdGhhdCBjYW4gYmUgcmVhY2hlZCBmcm9tIGBQcmlzbS5sYW5ndWFnZXNgIG9yIGBpbnNlcnRgIHdpbGwgYmUgcmVwbGFjZWQuIEkuZS4gaWZcblx0XHQgKiB5b3UgaG9sZCB0aGUgdGFyZ2V0IG9iamVjdCBpbiBhIHZhcmlhYmxlLCB0aGVuIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUgd2lsbCBub3QgY2hhbmdlLlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB2YXIgb2xkTWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0XHQgKiB2YXIgbmV3TWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7IC4uLiB9KTtcblx0XHQgKlxuXHRcdCAqIGFzc2VydChvbGRNYXJrdXAgIT09IFByaXNtLmxhbmd1YWdlcy5tYXJrdXApO1xuXHRcdCAqIGFzc2VydChuZXdNYXJrdXAgPT09IFByaXNtLmxhbmd1YWdlcy5tYXJrdXApO1xuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGluc2lkZSBUaGUgcHJvcGVydHkgb2YgYHJvb3RgIChlLmcuIGEgbGFuZ3VhZ2UgaWQgaW4gYFByaXNtLmxhbmd1YWdlc2ApIHRoYXQgY29udGFpbnMgdGhlXG5cdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBiZWZvcmUgVGhlIGtleSB0byBpbnNlcnQgYmVmb3JlLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gaW5zZXJ0IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXktdmFsdWUgcGFpcnMgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBbcm9vdF0gVGhlIG9iamVjdCBjb250YWluaW5nIGBpbnNpZGVgLCBpLmUuIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcblx0XHQgKiBvYmplY3QgdG8gYmUgbW9kaWZpZWQuXG5cdFx0ICpcblx0XHQgKiBEZWZhdWx0cyB0byBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHQgKiBAcmV0dXJucyB7R3JhbW1hcn0gVGhlIG5ldyBncmFtbWFyIG9iamVjdC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoaW5zaWRlLCBiZWZvcmUsIGluc2VydCwgcm9vdCkge1xuXHRcdFx0cm9vdCA9IHJvb3QgfHwgLyoqIEB0eXBlIHthbnl9ICovIChfLmxhbmd1YWdlcyk7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdC8qKiBAdHlwZSB7R3JhbW1hcn0gKi9cblx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRpZiAoZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblxuXHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0aWYgKCFpbnNlcnQuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRyb290W2luc2lkZV0gPSByZXQ7XG5cblx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdHRoaXNba2V5XSA9IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdERGUzogZnVuY3Rpb24gREZTKG8sIGNhbGxiYWNrLCB0eXBlLCB2aXNpdGVkKSB7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIG8pIHtcblx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSBvW2ldLFxuXHRcdFx0XHRcdCAgICBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgaSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHBsdWdpbnM6IHt9LFxuXG5cdC8qKlxuXHQgKiBUaGlzIGlzIHRoZSBtb3N0IGhpZ2gtbGV2ZWwgZnVuY3Rpb24gaW4gUHJpc23igJlzIEFQSS5cblx0ICogSXQgZmV0Y2hlcyBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3MgYW5kIHRoZW4gY2FsbHMge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uXG5cdCAqIGVhY2ggb25lIG9mIHRoZW0uXG5cdCAqXG5cdCAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byBgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjaylgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHQgKiBAcGFyYW0ge0hpZ2hsaWdodENhbGxiYWNrfSBbY2FsbGJhY2tdIFNhbWUgYXMgaW4ge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyfS5cblx0ICogQG1lbWJlcm9mIFByaXNtXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdGhpZ2hsaWdodEFsbDogZnVuY3Rpb24oYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Xy5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKTtcblx0fSxcblxuXHQvKipcblx0ICogRmV0Y2hlcyBhbGwgdGhlIGRlc2NlbmRhbnRzIG9mIGBjb250YWluZXJgIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3MgYW5kIHRoZW4gY2FsbHNcblx0ICoge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uIGVhY2ggb25lIG9mIHRoZW0uXG5cdCAqXG5cdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdCAqIDEuIGBiZWZvcmUtaGlnaGxpZ2h0YWxsYFxuXHQgKiAyLiBgYmVmb3JlLWFsbC1lbGVtZW50cy1oaWdobGlnaHRgXG5cdCAqIDMuIEFsbCBob29rcyBvZiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gZm9yIGVhY2ggZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtQYXJlbnROb2RlfSBjb250YWluZXIgVGhlIHJvb3QgZWxlbWVudCwgd2hvc2UgZGVzY2VuZGFudHMgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyB3aWxsIGJlIGhpZ2hsaWdodGVkLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciBlYWNoIGVsZW1lbnQgaXMgdG8gYmUgaGlnaGxpZ2h0ZWQgYXN5bmNocm9ub3VzbHkgdXNpbmcgV2ViIFdvcmtlcnMuXG5cdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQgYWZ0ZXIgaXRzIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHQgKiBAbWVtYmVyb2YgUHJpc21cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0aGlnaGxpZ2h0QWxsVW5kZXI6IGZ1bmN0aW9uKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0c2VsZWN0b3I6ICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSdcblx0XHR9O1xuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0ZW52LmVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVudi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpKTtcblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgZWxlbWVudCA9IGVudi5lbGVtZW50c1tpKytdOykge1xuXHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogSGlnaGxpZ2h0cyB0aGUgY29kZSBpbnNpZGUgYSBzaW5nbGUgZWxlbWVudC5cblx0ICpcblx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0ICogMS4gYGJlZm9yZS1zYW5pdHktY2hlY2tgXG5cdCAqIDIuIGBiZWZvcmUtaGlnaGxpZ2h0YFxuXHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodH0uIFRoZXNlIGhvb2tzIHdpbGwgYmUgcnVuIGJ5IGFuIGFzeW5jaHJvbm91cyB3b3JrZXIgaWYgYGFzeW5jYCBpcyBgdHJ1ZWAuXG5cdCAqIDQuIGBiZWZvcmUtaW5zZXJ0YFxuXHQgKiA1LiBgYWZ0ZXItaGlnaGxpZ2h0YFxuXHQgKiA2LiBgY29tcGxldGVgXG5cdCAqXG5cdCAqIFNvbWUgdGhlIGFib3ZlIGhvb2tzIHdpbGwgYmUgc2tpcHBlZCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGNvbnRhaW4gYW55IHRleHQgb3IgdGhlcmUgaXMgbm8gZ3JhbW1hciBsb2FkZWQgZm9yXG5cdCAqIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBjb2RlLlxuXHQgKiBJdCBtdXN0IGhhdmUgYSBjbGFzcyBvZiBgbGFuZ3VhZ2UteHh4eGAgdG8gYmUgcHJvY2Vzc2VkLCB3aGVyZSBgeHh4eGAgaXMgYSB2YWxpZCBsYW5ndWFnZSBpZGVudGlmaWVyLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciB0aGUgZWxlbWVudCBpcyB0byBiZSBoaWdobGlnaHRlZCBhc3luY2hyb25vdXNseSB1c2luZyBXZWIgV29ya2Vyc1xuXHQgKiB0byBpbXByb3ZlIHBlcmZvcm1hbmNlIGFuZCBhdm9pZCBibG9ja2luZyB0aGUgVUkgd2hlbiBoaWdobGlnaHRpbmcgdmVyeSBsYXJnZSBjaHVua3Mgb2YgY29kZS4gVGhpcyBvcHRpb24gaXNcblx0ICogW2Rpc2FibGVkIGJ5IGRlZmF1bHRdKGh0dHBzOi8vcHJpc21qcy5jb20vZmFxLmh0bWwjd2h5LWlzLWFzeW5jaHJvbm91cy1oaWdobGlnaHRpbmctZGlzYWJsZWQtYnktZGVmYXVsdCkuXG5cdCAqXG5cdCAqIE5vdGU6IEFsbCBsYW5ndWFnZSBkZWZpbml0aW9ucyByZXF1aXJlZCB0byBoaWdobGlnaHQgdGhlIGNvZGUgbXVzdCBiZSBpbmNsdWRlZCBpbiB0aGUgbWFpbiBgcHJpc20uanNgIGZpbGUgZm9yXG5cdCAqIGFzeW5jaHJvbm91cyBoaWdobGlnaHRpbmcgdG8gd29yay4gWW91IGNhbiBidWlsZCB5b3VyIG93biBidW5kbGUgb24gdGhlXG5cdCAqIFtEb3dubG9hZCBwYWdlXShodHRwczovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWwpLlxuXHQgKiBAcGFyYW0ge0hpZ2hsaWdodENhbGxiYWNrfSBbY2FsbGJhY2tdIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHQgKiBNb3N0bHkgdXNlZnVsIHdoZW4gYGFzeW5jYCBpcyBgdHJ1ZWAsIHNpbmNlIGluIHRoYXQgY2FzZSwgdGhlIGhpZ2hsaWdodGluZyBpcyBkb25lIGFzeW5jaHJvbm91c2x5LlxuXHQgKiBAbWVtYmVyb2YgUHJpc21cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdHZhciBsYW5ndWFnZSA9IF8udXRpbC5nZXRMYW5ndWFnZShlbGVtZW50KTtcblx0XHR2YXIgZ3JhbW1hciA9IF8ubGFuZ3VhZ2VzW2xhbmd1YWdlXTtcblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0dmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncHJlJykge1xuXHRcdFx0cGFyZW50LmNsYXNzTmFtZSA9IHBhcmVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2UsXG5cdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0Y29kZTogY29kZVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBpbnNlcnRIaWdobGlnaHRlZENvZGUoaGlnaGxpZ2h0ZWRDb2RlKSB7XG5cdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWluc2VydCcsIGVudik7XG5cblx0XHRcdGVudi5lbGVtZW50LmlubmVySFRNTCA9IGVudi5oaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdhZnRlci1oaWdobGlnaHQnLCBlbnYpO1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwoZW52LmVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtc2FuaXR5LWNoZWNrJywgZW52KTtcblxuXHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdF8uaG9va3MucnVuKCdjb21wbGV0ZScsIGVudik7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy51dGlsLmVuY29kZShlbnYuY29kZSkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChhc3luYyAmJiBfc2VsZi5Xb3JrZXIpIHtcblx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlOiBlbnYuY29kZSxcblx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy5oaWdobGlnaHQoZW52LmNvZGUsIGVudi5ncmFtbWFyLCBlbnYubGFuZ3VhZ2UpKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIExvdy1sZXZlbCBmdW5jdGlvbiwgb25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3XigJlyZSBkb2luZy4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdCAqIGFuZCB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgdG8gdXNlLCBhbmQgcmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSBIVE1MIHByb2R1Y2VkLlxuXHQgKlxuXHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHQgKiAxLiBgYmVmb3JlLXRva2VuaXplYFxuXHQgKiAyLiBgYWZ0ZXItdG9rZW5pemVgXG5cdCAqIDMuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkLlxuXHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdCAqXG5cdCAqIFVzdWFsbHkgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGxpa2UgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gcGFzc2VkIHRvIGBncmFtbWFyYC5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGhpZ2hsaWdodGVkIEhUTUwuXG5cdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHQgKiBAcHVibGljXG5cdCAqIEBleGFtcGxlXG5cdCAqIFByaXNtLmhpZ2hsaWdodCgndmFyIGZvbyA9IHRydWU7JywgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQsICdqYXZhc2NyaXB0Jyk7XG5cdCAqL1xuXHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoXy51dGlsLmVuY29kZShlbnYudG9rZW5zKSwgZW52Lmxhbmd1YWdlKTtcblx0fSxcblxuXHQvKipcblx0ICogVGhpcyBpcyB0aGUgaGVhcnQgb2YgUHJpc20sIGFuZCB0aGUgbW9zdCBsb3ctbGV2ZWwgZnVuY3Rpb24geW91IGNhbiB1c2UuIEl0IGFjY2VwdHMgYSBzdHJpbmcgb2YgdGV4dCBhcyBpbnB1dFxuXHQgKiBhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb25zIHRvIHVzZSwgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgdG9rZW5pemVkIGNvZGUuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gaW5jbHVkZXMgbmVzdGVkIHRva2VucywgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCByZWN1cnNpdmVseSBvbiBlYWNoIG9mIHRoZXNlIHRva2Vucy5cblx0ICpcblx0ICogVGhpcyBtZXRob2QgY291bGQgYmUgdXNlZnVsIGluIG90aGVyIGNvbnRleHRzIGFzIHdlbGwsIGFzIGEgdmVyeSBjcnVkZSBwYXJzZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWQuXG5cdCAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hciBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdG9rZW5zIHRvIHVzZS5cblx0ICpcblx0ICogVXN1YWxseSBhIGxhbmd1YWdlIGRlZmluaXRpb24gbGlrZSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAuXG5cdCAqIEByZXR1cm5zIHtUb2tlblN0cmVhbX0gQW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgdG9rZW5zLCBhIHRva2VuIHN0cmVhbS5cblx0ICogQG1lbWJlcm9mIFByaXNtXG5cdCAqIEBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogbGV0IGNvZGUgPSBgdmFyIGZvbyA9IDA7YDtcblx0ICogbGV0IHRva2VucyA9IFByaXNtLnRva2VuaXplKGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcblx0ICogdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuXHQgKiAgICAgaWYgKHRva2VuIGluc3RhbmNlb2YgUHJpc20uVG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gJ251bWJlcicpIHtcblx0ICogICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgbnVtZXJpYyBsaXRlcmFsOiAke3Rva2VuLmNvbnRlbnR9YCk7XG5cdCAqICAgICB9XG5cdCAqIH0pO1xuXHQgKi9cblx0dG9rZW5pemU6IGZ1bmN0aW9uKHRleHQsIGdyYW1tYXIpIHtcblx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblx0XHRpZiAocmVzdCkge1xuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdH1cblxuXHRcdHZhciB0b2tlbkxpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuXHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgdG9rZW5MaXN0LmhlYWQsIHRleHQpO1xuXG5cdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgdG9rZW5MaXN0LmhlYWQsIDApO1xuXG5cdFx0cmV0dXJuIHRvQXJyYXkodG9rZW5MaXN0KTtcblx0fSxcblxuXHQvKipcblx0ICogQG5hbWVzcGFjZVxuXHQgKiBAbWVtYmVyb2YgUHJpc21cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0aG9va3M6IHtcblx0XHRhbGw6IHt9LFxuXG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgdG8gdGhlIGxpc3Qgb2YgY2FsbGJhY2tzIGZvciB0aGUgZ2l2ZW4gaG9vay5cblx0XHQgKlxuXHRcdCAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgaG9vayBpdCBpcyByZWdpc3RlcmVkIGZvciBpcyBydW4uXG5cdFx0ICogSG9va3MgYXJlIHVzdWFsbHkgZGlyZWN0bHkgcnVuIGJ5IGEgaGlnaGxpZ2h0IGZ1bmN0aW9uIGJ1dCB5b3UgY2FuIGFsc28gcnVuIGhvb2tzIHlvdXJzZWxmLlxuXHRcdCAqXG5cdFx0ICogT25lIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbiBiZSByZWdpc3RlcmVkIHRvIG11bHRpcGxlIGhvb2tzIGFuZCB0aGUgc2FtZSBob29rIG11bHRpcGxlIHRpbWVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2suXG5cdFx0ICogQHBhcmFtIHtIb29rQ2FsbGJhY2t9IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBnaXZlbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGFkZDogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0aG9va3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgYSBob29rIGludm9raW5nIGFsbCByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBDYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIHN5bmNocm9ub3VzbHkgYW5kIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rLlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gZW52IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb2YgdGhlIGhvb2sgcGFzc2VkIHRvIGFsbCBjYWxsYmFja3MgcmVnaXN0ZXJlZC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tzID0gXy5ob29rcy5hbGxbbmFtZV07XG5cblx0XHRcdGlmICghY2FsbGJhY2tzIHx8ICFjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaT0wLCBjYWxsYmFjazsgY2FsbGJhY2sgPSBjYWxsYmFja3NbaSsrXTspIHtcblx0XHRcdFx0Y2FsbGJhY2soZW52KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0VG9rZW46IFRva2VuXG59O1xuX3NlbGYuUHJpc20gPSBfO1xuXG5cbi8vIFR5cGVzY3JpcHQgbm90ZTpcbi8vIFRoZSBmb2xsb3dpbmcgY2FuIGJlIHVzZWQgdG8gaW1wb3J0IHRoZSBUb2tlbiB0eXBlIGluIEpTRG9jOlxuLy9cbi8vICAgQHR5cGVkZWYge0luc3RhbmNlVHlwZTxpbXBvcnQoXCIuL3ByaXNtLWNvcmVcIilbXCJUb2tlblwiXT59IFRva2VuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBTZWUge0BsaW5rIFRva2VuI3R5cGUgdHlwZX1cbiAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW5TdHJlYW19IGNvbnRlbnQgU2VlIHtAbGluayBUb2tlbiNjb250ZW50IGNvbnRlbnR9XG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWF0Y2hlZFN0cj1cIlwiXSBBIGNvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbS5cbiAqIEBjbGFzc1xuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0cikge1xuXHQvKipcblx0ICogVGhlIHR5cGUgb2YgdGhlIHRva2VuLlxuXHQgKlxuXHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGtleSBvZiBhIHBhdHRlcm4gaW4gYSB7QGxpbmsgR3JhbW1hcn0uXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqIEBzZWUgR3JhbW1hclRva2VuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdHRoaXMudHlwZSA9IHR5cGU7XG5cdC8qKlxuXHQgKiBUaGUgc3RyaW5ncyBvciB0b2tlbnMgY29udGFpbmVkIGJ5IHRoaXMgdG9rZW4uXG5cdCAqXG5cdCAqIFRoaXMgd2lsbCBiZSBhIHRva2VuIHN0cmVhbSBpZiB0aGUgcGF0dGVybiBtYXRjaGVkIGFsc28gZGVmaW5lZCBhbiBgaW5zaWRlYCBncmFtbWFyLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nIHwgVG9rZW5TdHJlYW19XG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdC8qKlxuXHQgKiBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ3xzdHJpbmdbXX1cblx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHQvLyBDb3B5IG9mIHRoZSBmdWxsIHN0cmluZyB0aGlzIHRva2VuIHdhcyBjcmVhdGVkIGZyb21cblx0dGhpcy5sZW5ndGggPSAobWF0Y2hlZFN0ciB8fCAnJykubGVuZ3RoIHwgMDtcbn1cblxuLyoqXG4gKiBBIHRva2VuIHN0cmVhbSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIGFuZCB7QGxpbmsgVG9rZW4gVG9rZW59IG9iamVjdHMuXG4gKlxuICogVG9rZW4gc3RyZWFtcyBoYXZlIHRvIGZ1bGZpbGwgYSBmZXcgcHJvcGVydGllcyB0aGF0IGFyZSBhc3N1bWVkIGJ5IG1vc3QgZnVuY3Rpb25zIChtb3N0bHkgaW50ZXJuYWwgb25lcykgdGhhdCBwcm9jZXNzXG4gKiB0aGVtLlxuICpcbiAqIDEuIE5vIGFkamFjZW50IHN0cmluZ3MuXG4gKiAyLiBObyBlbXB0eSBzdHJpbmdzLlxuICpcbiAqICAgIFRoZSBvbmx5IGV4Y2VwdGlvbiBoZXJlIGlzIHRoZSB0b2tlbiBzdHJlYW0gdGhhdCBvbmx5IGNvbnRhaW5zIHRoZSBlbXB0eSBzdHJpbmcgYW5kIG5vdGhpbmcgZWxzZS5cbiAqXG4gKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nIHwgVG9rZW4+fSBUb2tlblN0cmVhbVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIHRva2VuIG9yIHRva2VuIHN0cmVhbSB0byBhbiBIVE1MIHJlcHJlc2VudGF0aW9uLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG4gKiAxLiBgd3JhcGA6IE9uIGVhY2gge0BsaW5rIFRva2VufS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuIHwgVG9rZW5TdHJlYW19IG8gVGhlIHRva2VuIG9yIHRva2VuIHN0cmVhbSB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgY3VycmVudCBsYW5ndWFnZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG4gKiBAbWVtYmVyb2YgVG9rZW5cbiAqIEBzdGF0aWNcbiAqL1xuVG9rZW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KG8sIGxhbmd1YWdlKSB7XG5cdGlmICh0eXBlb2YgbyA9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBvO1xuXHR9XG5cdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0dmFyIHMgPSAnJztcblx0XHRvLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcblx0XHRcdHMgKz0gc3RyaW5naWZ5KGUsIGxhbmd1YWdlKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdHZhciBlbnYgPSB7XG5cdFx0dHlwZTogby50eXBlLFxuXHRcdGNvbnRlbnQ6IHN0cmluZ2lmeShvLmNvbnRlbnQsIGxhbmd1YWdlKSxcblx0XHR0YWc6ICdzcGFuJyxcblx0XHRjbGFzc2VzOiBbJ3Rva2VuJywgby50eXBlXSxcblx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0fTtcblxuXHR2YXIgYWxpYXNlcyA9IG8uYWxpYXM7XG5cdGlmIChhbGlhc2VzKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYWxpYXNlcykpIHtcblx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVudi5jbGFzc2VzLCBhbGlhc2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW52LmNsYXNzZXMucHVzaChhbGlhc2VzKTtcblx0XHR9XG5cdH1cblxuXHRfLmhvb2tzLnJ1bignd3JhcCcsIGVudik7XG5cblx0dmFyIGF0dHJpYnV0ZXMgPSAnJztcblx0Zm9yICh2YXIgbmFtZSBpbiBlbnYuYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMgKz0gJyAnICsgbmFtZSArICc9XCInICsgKGVudi5hdHRyaWJ1dGVzW25hbWVdIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykgKyAnXCInO1xuXHR9XG5cblx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyBhdHRyaWJ1dGVzICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGxvb2tiZWhpbmRcbiAqIEByZXR1cm5zIHtSZWdFeHBFeGVjQXJyYXkgfCBudWxsfVxuICovXG5mdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKSB7XG5cdHBhdHRlcm4ubGFzdEluZGV4ID0gcG9zO1xuXHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdGlmIChtYXRjaCAmJiBsb29rYmVoaW5kICYmIG1hdGNoWzFdKSB7XG5cdFx0Ly8gY2hhbmdlIHRoZSBtYXRjaCB0byByZW1vdmUgdGhlIHRleHQgbWF0Y2hlZCBieSB0aGUgUHJpc20gbG9va2JlaGluZCBncm91cFxuXHRcdHZhciBsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0ubGVuZ3RoO1xuXHRcdG1hdGNoLmluZGV4ICs9IGxvb2tiZWhpbmRMZW5ndGg7XG5cdFx0bWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZShsb29rYmVoaW5kTGVuZ3RoKTtcblx0fVxuXHRyZXR1cm4gbWF0Y2g7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqIEBwYXJhbSB7TGlua2VkTGlzdDxzdHJpbmcgfCBUb2tlbj59IHRva2VuTGlzdFxuICogQHBhcmFtIHthbnl9IGdyYW1tYXJcbiAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8c3RyaW5nIHwgVG9rZW4+fSBzdGFydE5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFBvc1xuICogQHBhcmFtIHtSZW1hdGNoT3B0aW9uc30gW3JlbWF0Y2hdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKlxuICogQHR5cGVkZWYgUmVtYXRjaE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjYXVzZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHJlYWNoXG4gKi9cbmZ1bmN0aW9uIG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIHN0YXJ0Tm9kZSwgc3RhcnRQb3MsIHJlbWF0Y2gpIHtcblx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRwYXR0ZXJucyA9IEFycmF5LmlzQXJyYXkocGF0dGVybnMpID8gcGF0dGVybnMgOiBbcGF0dGVybnNdO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVtYXRjaC5jYXVzZSA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybk9iaiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRpbnNpZGUgPSBwYXR0ZXJuT2JqLmluc2lkZSxcblx0XHRcdFx0bG9va2JlaGluZCA9ICEhcGF0dGVybk9iai5sb29rYmVoaW5kLFxuXHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm5PYmouZ3JlZWR5LFxuXHRcdFx0XHRhbGlhcyA9IHBhdHRlcm5PYmouYWxpYXM7XG5cblx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm5PYmoucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdHZhciBmbGFncyA9IHBhdHRlcm5PYmoucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW1zdXldKiQvKVswXTtcblx0XHRcdFx0cGF0dGVybk9iai5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm5PYmoucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqIEB0eXBlIHtSZWdFeHB9ICovXG5cdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5PYmoucGF0dGVybiB8fCBwYXR0ZXJuT2JqO1xuXG5cdFx0XHRmb3IgKCAvLyBpdGVyYXRlIHRoZSB0b2tlbiBsaXN0IGFuZCBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHRva2VuL3N0cmluZyBwb3NpdGlvblxuXHRcdFx0XHR2YXIgY3VycmVudE5vZGUgPSBzdGFydE5vZGUubmV4dCwgcG9zID0gc3RhcnRQb3M7XG5cdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0cG9zICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aCwgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG5cdFx0XHQpIHtcblxuXHRcdFx0XHRpZiAocmVtYXRjaCAmJiBwb3MgPj0gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdGlmICh0b2tlbkxpc3QubGVuZ3RoID4gdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHJlbW92ZUNvdW50ID0gMTsgLy8gdGhpcyBpcyB0aGUgdG8gcGFyYW1ldGVyIG9mIHJlbW92ZUJldHdlZW5cblx0XHRcdFx0dmFyIG1hdGNoO1xuXG5cdFx0XHRcdGlmIChncmVlZHkpIHtcblx0XHRcdFx0XHRtYXRjaCA9IG1hdGNoUGF0dGVybihwYXR0ZXJuLCBwb3MsIHRleHQsIGxvb2tiZWhpbmQpO1xuXHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0dmFyIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRcdFx0dmFyIHAgPSBwb3M7XG5cblx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0cCArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKGZyb20gPj0gcCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0cCArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdHAgLT0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdHBvcyA9IHA7XG5cblx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdGlmIChjdXJyZW50Tm9kZS52YWx1ZSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBmaW5kIHRoZSBsYXN0IG5vZGUgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgdGhpcyBtYXRjaFxuXHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0ayAhPT0gdG9rZW5MaXN0LnRhaWwgJiYgKHAgPCB0byB8fCB0eXBlb2Ygay52YWx1ZSA9PT0gJ3N0cmluZycpO1xuXHRcdFx0XHRcdFx0ayA9IGsubmV4dFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQrKztcblx0XHRcdFx0XHRcdHAgKz0gay52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW92ZUNvdW50LS07XG5cblx0XHRcdFx0XHQvLyByZXBsYWNlIHdpdGggdGhlIG5ldyBtYXRjaFxuXHRcdFx0XHRcdHN0ciA9IHRleHQuc2xpY2UocG9zLCBwKTtcblx0XHRcdFx0XHRtYXRjaC5pbmRleCAtPSBwb3M7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgMCwgc3RyLCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4LFxuXHRcdFx0XHRcdG1hdGNoU3RyID0gbWF0Y2hbMF0sXG5cdFx0XHRcdFx0YmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pLFxuXHRcdFx0XHRcdGFmdGVyID0gc3RyLnNsaWNlKGZyb20gKyBtYXRjaFN0ci5sZW5ndGgpO1xuXG5cdFx0XHRcdHZhciByZWFjaCA9IHBvcyArIHN0ci5sZW5ndGg7XG5cdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdHJlbWF0Y2gucmVhY2ggPSByZWFjaDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdFx0cmVtb3ZlRnJvbSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgYmVmb3JlKTtcblx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlbW92ZVJhbmdlKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgcmVtb3ZlQ291bnQpO1xuXG5cdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoU3RyLCBpbnNpZGUpIDogbWF0Y2hTdHIsIGFsaWFzLCBtYXRjaFN0cik7XG5cdFx0XHRcdGN1cnJlbnROb2RlID0gYWRkQWZ0ZXIodG9rZW5MaXN0LCByZW1vdmVGcm9tLCB3cmFwcGVkKTtcblxuXHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIGN1cnJlbnROb2RlLCBhZnRlcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVtb3ZlQ291bnQgPiAxKSB7XG5cdFx0XHRcdFx0Ly8gYXQgbGVhc3Qgb25lIFRva2VuIG9iamVjdCB3YXMgcmVtb3ZlZCwgc28gd2UgaGF2ZSB0byBkbyBzb21lIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHQvLyB0aGlzIGNhbiBvbmx5IGhhcHBlbiBpZiB0aGUgY3VycmVudCBwYXR0ZXJuIGlzIGdyZWVkeVxuXHRcdFx0XHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIGN1cnJlbnROb2RlLnByZXYsIHBvcywge1xuXHRcdFx0XHRcdFx0Y2F1c2U6IHRva2VuICsgJywnICsgaixcblx0XHRcdFx0XHRcdHJlYWNoOiByZWFjaFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcbiAqIEBwcm9wZXJ0eSB7VH0gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7TGlua2VkTGlzdE5vZGU8VD4gfCBudWxsfSBwcmV2IFRoZSBwcmV2aW91cyBub2RlLlxuICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG5cdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdHZhciBoZWFkID0geyB2YWx1ZTogbnVsbCwgcHJldjogbnVsbCwgbmV4dDogbnVsbCB9O1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0aGVhZC5uZXh0ID0gdGFpbDtcblxuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR0aGlzLmhlYWQgPSBoZWFkO1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR0aGlzLnRhaWwgPSB0YWlsO1xuXHR0aGlzLmxlbmd0aCA9IDA7XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG4gKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG4gKiBAcGFyYW0ge1R9IHZhbHVlXG4gKiBAcmV0dXJucyB7TGlua2VkTGlzdE5vZGU8VD59IFRoZSBhZGRlZCBub2RlLlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gYWRkQWZ0ZXIobGlzdCwgbm9kZSwgdmFsdWUpIHtcblx0Ly8gYXNzdW1lcyB0aGF0IG5vZGUgIT0gbGlzdC50YWlsICYmIHZhbHVlcy5sZW5ndGggPj0gMFxuXHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHR2YXIgbmV3Tm9kZSA9IHsgdmFsdWU6IHZhbHVlLCBwcmV2OiBub2RlLCBuZXh0OiBuZXh0IH07XG5cdG5vZGUubmV4dCA9IG5ld05vZGU7XG5cdG5leHQucHJldiA9IG5ld05vZGU7XG5cdGxpc3QubGVuZ3RoKys7XG5cblx0cmV0dXJuIG5ld05vZGU7XG59XG4vKipcbiAqIFJlbW92ZXMgYGNvdW50YCBub2RlcyBhZnRlciB0aGUgZ2l2ZW4gbm9kZS4gVGhlIGdpdmVuIG5vZGUgd2lsbCBub3QgYmUgcmVtb3ZlZC5cbiAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAdGVtcGxhdGUgVFxuICovXG5mdW5jdGlvbiByZW1vdmVSYW5nZShsaXN0LCBub2RlLCBjb3VudCkge1xuXHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudCAmJiBuZXh0ICE9PSBsaXN0LnRhaWw7IGkrKykge1xuXHRcdG5leHQgPSBuZXh0Lm5leHQ7XG5cdH1cblx0bm9kZS5uZXh0ID0gbmV4dDtcblx0bmV4dC5wcmV2ID0gbm9kZTtcblx0bGlzdC5sZW5ndGggLT0gaTtcbn1cbi8qKlxuICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG4gKiBAcmV0dXJucyB7VFtdfVxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XG5cdHZhciBhcnJheSA9IFtdO1xuXHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHR3aGlsZSAobm9kZSAhPT0gbGlzdC50YWlsKSB7XG5cdFx0YXJyYXkucHVzaChub2RlLnZhbHVlKTtcblx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuXG5pZiAoIV9zZWxmLmRvY3VtZW50KSB7XG5cdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdC8vIGluIE5vZGUuanNcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHQvLyBJbiB3b3JrZXJcblx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKSxcblx0XHRcdFx0bGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGUgPSBtZXNzYWdlLmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0X3NlbGYucG9zdE1lc3NhZ2UoXy5oaWdobGlnaHQoY29kZSwgXy5sYW5ndWFnZXNbbGFuZ10sIGxhbmcpKTtcblx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG5cdHJldHVybiBfO1xufVxuXG4vLyBHZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxudmFyIHNjcmlwdCA9IF8udXRpbC5jdXJyZW50U2NyaXB0KCk7XG5cbmlmIChzY3JpcHQpIHtcblx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0aWYgKHNjcmlwdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbWFudWFsJykpIHtcblx0XHRfLm1hbnVhbCA9IHRydWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKCkge1xuXHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0Xy5oaWdobGlnaHRBbGwoKTtcblx0fVxufVxuXG5pZiAoIV8ubWFudWFsKSB7XG5cdC8vIElmIHRoZSBkb2N1bWVudCBzdGF0ZSBpcyBcImxvYWRpbmdcIiwgdGhlbiB3ZSdsbCB1c2UgRE9NQ29udGVudExvYWRlZC5cblx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIiBhbmQgdGhlIHByaXNtLmpzIHNjcmlwdCBpcyBkZWZlcnJlZCwgdGhlbiB3ZSdsbCBhbHNvIHVzZSB0aGVcblx0Ly8gRE9NQ29udGVudExvYWRlZCBldmVudCBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIHNvbWUgcGx1Z2lucyBvciBsYW5ndWFnZXMgd2hpY2ggaGF2ZSBhbHNvIGJlZW4gZGVmZXJyZWQgYW5kIHRoZXlcblx0Ly8gbWlnaHQgdGFrZSBsb25nZXIgb25lIGFuaW1hdGlvbiBmcmFtZSB0byBleGVjdXRlIHdoaWNoIGNhbiBjcmVhdGUgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSBvbmx5IHNvbWUgcGx1Z2lucyBoYXZlXG5cdC8vIGJlZW4gbG9hZGVkIHdoZW4gUHJpc20uaGlnaGxpZ2h0QWxsKCkgaXMgZXhlY3V0ZWQsIGRlcGVuZGluZyBvbiBob3cgZmFzdCByZXNvdXJjZXMgYXJlIGxvYWRlZC5cblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9QcmlzbUpTL3ByaXNtL2lzc3Vlcy8yMTAyXG5cdHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcblx0aWYgKHJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCByZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnICYmIHNjcmlwdCAmJiBzY3JpcHQuZGVmZXIpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKTtcblx0fSBlbHNlIHtcblx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2ssIDE2KTtcblx0XHR9XG5cdH1cbn1cblxucmV0dXJuIF87XG5cbn0pKF9zZWxmKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuXG4vLyBzb21lIGFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbi90eXBlc1xuXG4vKipcbiAqIFRoZSBleHBhbnNpb24gb2YgYSBzaW1wbGUgYFJlZ0V4cGAgbGl0ZXJhbCB0byBzdXBwb3J0IGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAqXG4gKiBAdHlwZWRlZiBHcmFtbWFyVG9rZW5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBwYXR0ZXJuIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gb2YgdGhlIHRva2VuLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbbG9va2JlaGluZD1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBmaXJzdCBjYXB0dXJpbmcgZ3JvdXAgb2YgYHBhdHRlcm5gIHdpbGwgKGVmZmVjdGl2ZWx5KVxuICogYmVoYXZlIGFzIGEgbG9va2JlaGluZCBncm91cCBtZWFuaW5nIHRoYXQgdGhlIGNhcHR1cmVkIHRleHQgd2lsbCBub3QgYmUgcGFydCBvZiB0aGUgbWF0Y2hlZCB0ZXh0IG9mIHRoZSBuZXcgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtncmVlZHk9ZmFsc2VdIFdoZXRoZXIgdGhlIHRva2VuIGlzIGdyZWVkeS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfHN0cmluZ1tdfSBbYWxpYXNdIEFuIG9wdGlvbmFsIGFsaWFzIG9yIGxpc3Qgb2YgYWxpYXNlcy5cbiAqIEBwcm9wZXJ0eSB7R3JhbW1hcn0gW2luc2lkZV0gVGhlIG5lc3RlZCBncmFtbWFyIG9mIHRoaXMgdG9rZW4uXG4gKlxuICogVGhlIGBpbnNpZGVgIGdyYW1tYXIgd2lsbCBiZSB1c2VkIHRvIHRva2VuaXplIHRoZSB0ZXh0IHZhbHVlIG9mIGVhY2ggdG9rZW4gb2YgdGhpcyBraW5kLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbWFrZSBuZXN0ZWQgYW5kIGV2ZW4gcmVjdXJzaXZlIGxhbmd1YWdlIGRlZmluaXRpb25zLlxuICpcbiAqIE5vdGU6IFRoaXMgY2FuIGNhdXNlIGluZmluaXRlIHJlY3Vyc2lvbi4gQmUgY2FyZWZ1bCB3aGVuIHlvdSBlbWJlZCBkaWZmZXJlbnQgbGFuZ3VhZ2VzIG9yIGV2ZW4gdGhlIHNhbWUgbGFuZ3VhZ2UgaW50b1xuICogZWFjaCBhbm90aGVyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBHcmFtbWFyXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgUmVnRXhwIHwgR3JhbW1hclRva2VuIHwgQXJyYXk8UmVnRXhwIHwgR3JhbW1hclRva2VuPj59XG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtyZXN0XSBBbiBvcHRpb25hbCBncmFtbWFyIG9iamVjdCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhpcyBncmFtbWFyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCB3aWxsIGludm9rZWQgYWZ0ZXIgYW4gZWxlbWVudCB3YXMgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICpcbiAqIEBjYWxsYmFjayBIaWdobGlnaHRDYWxsYmFja1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHN1Y2Nlc3NmdWxseSBoaWdobGlnaHRlZC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgSG9va0NhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IGVudiBUaGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIG9mIHRoZSBob29rLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cbiIsIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3MgPSB7XG5cdFx0J2NvbW1lbnQnOiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0J2F0cnVsZSc6IHtcblx0XHRcdHBhdHRlcm46IC9AW1xcdy1dKD86W147e1xcc118XFxzKyg/IVtcXHN7XSkpKig/Ojt8KD89XFxzKlxceykpLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncnVsZSc6IC9eQFtcXHctXSsvLFxuXHRcdFx0XHQnc2VsZWN0b3ItZnVuY3Rpb24tYXJndW1lbnQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhcXGJzZWxlY3RvclxccypcXChcXHMqKD8hW1xccyldKSkoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSkrKD89XFxzKlxcKSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICdzZWxlY3Rvcidcblx0XHRcdFx0fSxcblx0XHRcdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhefFteXFx3LV0pKD86YW5kfG5vdHxvbmx5fG9yKSg/IVtcXHctXSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3VybCc6IHtcblx0XHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXFxcXGJ1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3wnICsgLyg/OlteXFxcXFxcclxcbigpXCInXXxcXFxcW1xcc1xcU10pKi8uc291cmNlICsgJylcXFxcKScsICdpJyksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL151cmwvaSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC8sXG5cdFx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCdeJyArIHN0cmluZy5zb3VyY2UgKyAnJCcpLFxuXHRcdFx0XHRcdGFsaWFzOiAndXJsJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnc2VsZWN0b3InOiBSZWdFeHAoJ1tee31cXFxcc10oPzpbXnt9O1wiXFwnXFxcXHNdfFxcXFxzKyg/IVtcXFxcc3tdKXwnICsgc3RyaW5nLnNvdXJjZSArICcpKig/PVxcXFxzKlxcXFx7KScpLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IC8oPyFcXHMpWy1fYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKjopL2ksXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzogL1stYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3M7XG5cblx0dmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdGlmIChtYXJrdXApIHtcblx0XHRtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLCB7XG5cdFx0XHQnc3R5bGUtYXR0cic6IHtcblx0XHRcdFx0cGF0dGVybjogLyhefFtcIidcXHNdKXN0eWxlXFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonKS9pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspLyxcblx0XHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0XHQnc3R5bGUnOiB7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyhbXCInXSlbXFxzXFxTXSsoPz1bXCInXSQpLyxcblx0XHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtY3NzJyxcblx0XHRcdFx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc3Ncblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm46IC9ePS8sXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0L1wifCcvXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdhdHRyLW5hbWUnOiAvXnN0eWxlL2lcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIG1hcmt1cC50YWcpO1xuXHR9XG5cbn0oUHJpc20pKTtcbiIsIlByaXNtLmxhbmd1YWdlcy5naXQgPSB7XG5cdC8qXG5cdCAqIEEgc2ltcGxlIG9uZSBsaW5lIGNvbW1lbnQgbGlrZSBpbiBhIGdpdCBzdGF0dXMgY29tbWFuZFxuXHQgKiBGb3IgaW5zdGFuY2U6XG5cdCAqICQgZ2l0IHN0YXR1c1xuXHQgKiAjIE9uIGJyYW5jaCBpbmZpbml0ZS1zY3JvbGxcblx0ICogIyBZb3VyIGJyYW5jaCBhbmQgJ29yaWdpbi9zaGFyZWRCcmFuY2hlcy9mcm9udGVuZFRlYW0vaW5maW5pdGUtc2Nyb2xsJyBoYXZlIGRpdmVyZ2VkLFxuXHQgKiAjIGFuZCBoYXZlIDEgYW5kIDIgZGlmZmVyZW50IGNvbW1pdHMgZWFjaCwgcmVzcGVjdGl2ZWx5LlxuXHQgKiBub3RoaW5nIHRvIGNvbW1pdCAod29ya2luZyBkaXJlY3RvcnkgY2xlYW4pXG5cdCAqL1xuXHQnY29tbWVudCc6IC9eIy4qL20sXG5cblx0Lypcblx0ICogUmVnZXhwIHRvIG1hdGNoIHRoZSBjaGFuZ2VkIGxpbmVzIGluIGEgZ2l0IGRpZmYgb3V0cHV0LiBDaGVjayB0aGUgZXhhbXBsZSBiZWxvdy5cblx0ICovXG5cdCdkZWxldGVkJzogL15bLeKAk10uKi9tLFxuXHQnaW5zZXJ0ZWQnOiAvXlxcKy4qL20sXG5cblx0Lypcblx0ICogYSBzdHJpbmcgKGRvdWJsZSBhbmQgc2ltcGxlIHF1b3RlKVxuXHQgKi9cblx0J3N0cmluZyc6IC8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxL20sXG5cblx0Lypcblx0ICogYSBnaXQgY29tbWFuZC4gSXQgc3RhcnRzIHdpdGggYSByYW5kb20gcHJvbXB0IGZpbmlzaGluZyBieSBhICQsIHRoZW4gXCJnaXRcIiB0aGVuIHNvbWUgb3RoZXIgcGFyYW1ldGVyc1xuXHQgKiBGb3IgaW5zdGFuY2U6XG5cdCAqICQgZ2l0IGFkZCBmaWxlLnR4dFxuXHQgKi9cblx0J2NvbW1hbmQnOiB7XG5cdFx0cGF0dGVybjogL14uKlxcJCBnaXQgLiokL20sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQvKlxuXHRcdFx0ICogQSBnaXQgY29tbWFuZCBjYW4gY29udGFpbiBhIHBhcmFtZXRlciBzdGFydGluZyBieSBhIHNpbmdsZSBvciBhIGRvdWJsZSBkYXNoIGZvbGxvd2VkIGJ5IGEgc3RyaW5nXG5cdFx0XHQgKiBGb3IgaW5zdGFuY2U6XG5cdFx0XHQgKiAkIGdpdCBkaWZmIC0tY2FjaGVkXG5cdFx0XHQgKiAkIGdpdCBsb2cgLXBcblx0XHRcdCAqL1xuXHRcdFx0J3BhcmFtZXRlcic6IC9cXHMtLT9cXHcrL21cblx0XHR9XG5cdH0sXG5cblx0Lypcblx0ICogQ29vcmRpbmF0ZXMgZGlzcGxheWVkIGluIGEgZ2l0IGRpZmYgY29tbWFuZFxuXHQgKiBGb3IgaW5zdGFuY2U6XG5cdCAqICQgZ2l0IGRpZmZcblx0ICogZGlmZiAtLWdpdCBmaWxlLnR4dCBmaWxlLnR4dFxuXHQgKiBpbmRleCA2MjE0OTUzLi4xZDU0YTUyIDEwMDY0NFxuXHQgKiAtLS0gZmlsZS50eHRcblx0ICogKysrIGZpbGUudHh0XG5cdCAqIEBAIC0xICsxLDIgQEBcblx0ICogLUhlcmUncyBteSB0ZXR4IGZpbGVcblx0ICogK0hlcmUncyBteSB0ZXh0IGZpbGVcblx0ICogK0FuZCB0aGlzIGlzIHRoZSBzZWNvbmQgbGluZVxuXHQgKi9cblx0J2Nvb3JkJzogL15AQC4qQEAkL20sXG5cblx0Lypcblx0ICogTWF0Y2ggYSBcImNvbW1pdCBbU0hBMV1cIiBsaW5lIGluIGEgZ2l0IGxvZyBvdXRwdXQuXG5cdCAqIEZvciBpbnN0YW5jZTpcblx0ICogJCBnaXQgbG9nXG5cdCAqIGNvbW1pdCBhMTFhMTRlZjdlMjZmMmNhNjJkNGIzNWVhYzQ1NWNlNjM2ZDBkYzA5XG5cdCAqIEF1dGhvcjogbGdpcmF1ZGVsXG5cdCAqIERhdGU6ICAgTW9uIEZlYiAxNyAxMToxODozNCAyMDE0ICswMTAwXG5cdCAqXG5cdCAqICAgICBBZGQgb2YgYSBuZXcgbGluZVxuXHQgKi9cblx0J2NvbW1pdC1zaGExJzogL15jb21taXQgXFx3ezQwfSQvbVxufTtcbiIsIlByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjbGFzcy1uYW1lJzogW1xuXHRcdFByaXNtLmxhbmd1YWdlcy5jbGlrZVsnY2xhc3MtbmFtZSddLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSkoPyFcXHMpW18kQS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2tleXdvcmQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpefH0pXFxzKikoPzpjYXRjaHxmaW5hbGx5KVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmb3J8ZnJvbXxmdW5jdGlvbnwoPzpnZXR8c2V0KSg/PVxccypbXFxbJFxcd1xceEEwLVxcdUZGRkZdKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG5cdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiY9P3xcXHxcXHw9P3xbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/XFw/PT98XFw/XFwuP3xbfjpdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc118XFxiKD86cmV0dXJufHlpZWxkKSlcXHMqKVxcLyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKl18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tnaW15dXNdezAsNn0oPz0oPzpcXHN8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC8pKig/OiR8W1xcclxcbiwuOzp9KVxcXV18XFwvXFwvKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JlZ2V4LXNvdXJjZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1yZWdleCcsXG5cdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnJlZ2V4XG5cdFx0XHR9LFxuXHRcdFx0J3JlZ2V4LWZsYWdzJzogL1thLXpdKyQvLFxuXHRcdFx0J3JlZ2V4LWRlbGltaXRlcic6IC9eXFwvfFxcLyQvXG5cdFx0fVxuXHR9LFxuXHQvLyBUaGlzIG11c3QgYmUgZGVjbGFyZWQgYmVmb3JlIGtleXdvcmQgYmVjYXVzZSB3ZSB1c2UgXCJmdW5jdGlvblwiIGluc2lkZSB0aGUgbG9vay1mb3J3YXJkXG5cdCdmdW5jdGlvbi12YXJpYWJsZSc6IHtcblx0XHRwYXR0ZXJuOiAvIz8oPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKls9Ol1cXHMqKD86YXN5bmNcXHMqKT8oPzpcXGJmdW5jdGlvblxcYnwoPzpcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKXwoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKVxccyo9PikpLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQncGFyYW1ldGVyJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKj0+KS9pLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzooPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKilcXChcXHMqfFxcXVxccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9fCg/IVxcJHspW15cXFxcYF0pKmAvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL15gfGAkLyxcblx0XHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK30vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwke3x9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuIiwiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlIGlkIGFuZCBpbmRleC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5kZXhcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpbmRleCkge1xuXHRcdHJldHVybiAnX19fJyArIGxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgKyBpbmRleCArICdfX18nO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30sIHtcblx0XHRidWlsZFBsYWNlaG9sZGVyczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUb2tlbml6ZSBhbGwgaW5saW5lIHRlbXBsYXRpbmcgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgYHBsYWNlaG9sZGVyUGF0dGVybmAuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYHJlcGxhY2VGaWx0ZXJgIGlzIHByb3ZpZGVkLCBvbmx5IG1hdGNoZXMgb2YgYHBsYWNlaG9sZGVyUGF0dGVybmAgZm9yIHdoaWNoIGByZXBsYWNlRmlsdGVyYCByZXR1cm5zXG5cdFx0XHQgKiBgdHJ1ZWAgd2lsbCBiZSByZXBsYWNlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGJlZm9yZS10b2tlbml6ZWAgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cblx0XHRcdCAqIEBwYXJhbSB7KG1hdGNoOiBzdHJpbmcpID0+IGJvb2xlYW59IFtyZXBsYWNlRmlsdGVyXVxuXHRcdFx0ICovXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UsIHBsYWNlaG9sZGVyUGF0dGVybiwgcmVwbGFjZUZpbHRlcikge1xuXHRcdFx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0b2tlblN0YWNrID0gZW52LnRva2VuU3RhY2sgPSBbXTtcblxuXHRcdFx0XHRlbnYuY29kZSA9IGVudi5jb2RlLnJlcGxhY2UocGxhY2Vob2xkZXJQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2VGaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXJlcGxhY2VGaWx0ZXIobWF0Y2gpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBpID0gdG9rZW5TdGFjay5sZW5ndGg7XG5cdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIGV4aXN0aW5nIHN0cmluZ3Ncblx0XHRcdFx0XHR3aGlsZSAoZW52LmNvZGUuaW5kZXhPZihwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpKSkgIT09IC0xKVxuXHRcdFx0XHRcdFx0KytpO1xuXG5cdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgc3BhcnNlIGFycmF5XG5cdFx0XHRcdFx0dG9rZW5TdGFja1tpXSA9IG1hdGNoO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgdG8gbWFya3VwXG5cdFx0XHRcdGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRva2VuaXplUGxhY2Vob2xkZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYWZ0ZXItdG9rZW5pemVgIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuXHRcdFx0ICovXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UpIHtcblx0XHRcdFx0aWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UgfHwgIWVudi50b2tlblN0YWNrKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcblx0XHRcdFx0ZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdFx0XHRcdHZhciBqID0gMDtcblx0XHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnYudG9rZW5TdGFjayk7XG5cblx0XHRcdFx0ZnVuY3Rpb24gd2Fsa1Rva2Vucyh0b2tlbnMpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Ly8gYWxsIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgYWxyZWFkeVxuXHRcdFx0XHRcdFx0aWYgKGogPj0ga2V5cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnIHx8ICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGsgPSBrZXlzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgdCA9IGVudi50b2tlblN0YWNrW2tdO1xuXHRcdFx0XHRcdFx0XHR2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBrKTtcblxuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdCsrajtcblxuXHRcdFx0XHRcdFx0XHRcdHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihsYW5ndWFnZSwgUHJpc20udG9rZW5pemUodCwgZW52LmdyYW1tYXIpLCAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlLCB0KTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzLnN1YnN0cmluZyhpbmRleCArIHBsYWNlaG9sZGVyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVwbGFjZW1lbnQgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2FmdGVyXSkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRva2VuLmNvbnRlbnQgLyogJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnICovKSB7XG5cdFx0XHRcdFx0XHRcdHdhbGtUb2tlbnModG9rZW4uY29udGVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdhbGtUb2tlbnMoZW52LnRva2Vucyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxufShQcmlzbSkpO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiAvPCEtLVtcXHNcXFNdKj8tLT4vLFxuXHQncHJvbG9nJzogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdCdkb2N0eXBlJzoge1xuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULWRvY3R5cGVkZWNsXG5cdFx0cGF0dGVybjogLzwhRE9DVFlQRSg/OltePlwiJ1tcXF1dfFwiW15cIl0qXCJ8J1teJ10qJykrKD86XFxbKD86W148XCInXFxdXXxcIlteXCJdKlwifCdbXiddKid8PCg/ISEtLSl8PCEtLSg/OlteLV18LSg/IS0+KSkqLS0+KSpcXF1cXHMqKT8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2ludGVybmFsLXN1YnNldCc6IHtcblx0XHRcdFx0cGF0dGVybjogLyhcXFspW1xcc1xcU10rKD89XFxdPiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL1wiW15cIl0qXCJ8J1teJ10qJy8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePCF8PiR8W1tcXF1dLyxcblx0XHRcdCdkb2N0eXBlLXRhZyc6IC9eRE9DVFlQRS8sXG5cdFx0XHQnbmFtZSc6IC9bXlxcczw+J1wiXSsvXG5cdFx0fVxuXHR9LFxuXHQnY2RhdGEnOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+Lyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjxcXC8/Lyxcblx0XHRcdFx0XHQnbmFtZXNwYWNlJzogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdC9cInwnL1xuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC8/Pi8sXG5cdFx0XHQnYXR0ci1uYW1lJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvW15cXHM+XFwvXSsvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnbmFtZXNwYWNlJzogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH0sXG5cdCdlbnRpdHknOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyZbXFxkYS16XXsxLDh9Oy9pLFxuXHRcdFx0YWxpYXM6ICduYW1lZC1lbnRpdHknXG5cdFx0fSxcblx0XHQvJiN4P1tcXGRhLWZdezEsOH07L2lcblx0XVxufTtcblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlWydlbnRpdHknXSA9XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2VudGl0eSddO1xuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZG9jdHlwZSddLmluc2lkZVsnaW50ZXJuYWwtc3Vic2V0J10uaW5zaWRlID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcblByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uIChlbnYpIHtcblxuXHRpZiAoZW52LnR5cGUgPT09ICdlbnRpdHknKSB7XG5cdFx0ZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sICcmJyk7XG5cdH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRJbmxpbmVkJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGA8c3R5bGU+YCB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcblx0ICogY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cblx0ICogQGV4YW1wbGVcblx0ICogYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gYWRkSW5saW5lZCh0YWdOYW1lLCBsYW5nKSB7XG5cdFx0dmFyIGluY2x1ZGVkQ2RhdGFJbnNpZGUgPSB7fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvKF48IVxcW0NEQVRBXFxbKVtcXHNcXFNdKz8oPz1cXF1cXF0+JCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnY2RhdGEnXSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pO1xuXG5cdFx0dmFyIGluc2lkZSA9IHtcblx0XHRcdCdpbmNsdWRlZC1jZGF0YSc6IHtcblx0XHRcdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdFx0XHRpbnNpZGU6IGluY2x1ZGVkQ2RhdGFJbnNpZGVcblx0XHRcdH1cblx0XHR9O1xuXHRcdGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cblx0XHR2YXIgZGVmID0ge307XG5cdFx0ZGVmW3RhZ05hbWVdID0ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oPF9fW14+XSo+KSg/OjwhXFxbQ0RBVEFcXFsoPzpbXlxcXV18XFxdKD8hXFxdPikpKlxcXVxcXT58KD8hPCFcXFtDREFUQVxcWylbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZSgvX18vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFnTmFtZTsgfSksICdpJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBpbnNpZGVcblx0XHR9O1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuc3NtbCA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMuYXRvbSA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMucnNzID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcbiIsIi8qKlxuICogT3JpZ2luYWwgYnkgQWFyb24gSGFydW46IGh0dHA6Ly9hYWhhY3JlYXRpdmUuY29tLzIwMTIvMDcvMzEvcGhwLXN5bnRheC1oaWdobGlnaHRpbmctcHJpc20vXG4gKiBNb2RpZmllZCBieSBNaWxlcyBKb2huc29uOiBodHRwOi8vbWlsZXNqLm1lXG4gKiBSZXdyaXR0ZW4gYnkgVG9tIFBhdmVsZWNcbiAqXG4gKiBTdXBwb3J0cyBQSFAgNS4zIC0gOC4wXG4gKi9cbihmdW5jdGlvbiAoUHJpc20pIHtcblx0dmFyIGNvbW1lbnQgPSAvXFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKnwjKD8hXFxbKS4qLztcblx0dmFyIGNvbnN0YW50ID0gW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi9pLFxuXHRcdFx0YWxpYXM6ICdib29sZWFuJ1xuXHRcdH0sXG5cdFx0L1xcYltBLVpfXVtBLVowLTlfXSpcXGIoPyFcXHMqXFwoKS8sXG5cdFx0L1xcYig/Om51bGwpXFxiL2ksXG5cdF07XG5cdHZhciBudW1iZXIgPSAvXFxiMGJbMDFdK1xcYnxcXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pO1xuXHR2YXIgb3BlcmF0b3IgPSAvPD89PnxcXD9cXD89P3xcXC57M318XFw/Py0+fFshPV09Pz0/fDo6fFxcKlxcKj0/fC0tfFxcK1xcK3wmJnxcXHxcXHx8PDx8Pj58Wz9+XXxbL158JSomPD4uKy1dPT8vO1xuXHR2YXIgcHVuY3R1YXRpb24gPSAvW3t9XFxbXFxdKCksOjtdLztcblxuXHRQcmlzbS5sYW5ndWFnZXMucGhwID0ge1xuXHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFw/PiR8XjxcXD8oPzpwaHAoPz1cXHMpfD0pPy9pLFxuXHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0fSxcblx0XHQnY29tbWVudCc6IGNvbW1lbnQsXG5cdFx0J3ZhcmlhYmxlJzogL1xcJCsoPzpcXHcrXFxifCg/PXspKS9pLFxuXHRcdCdwYWNrYWdlJzoge1xuXHRcdFx0cGF0dGVybjogLyhuYW1lc3BhY2VcXHMrfHVzZVxccysoPzpmdW5jdGlvblxccyspPykoPzpcXFxcP1xcYlthLXpfXVxcdyopK1xcYig/IVxcXFwpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2tleXdvcmQnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKilcXGIoPzpib29sfGJvb2xlYW58aW50fGludGVnZXJ8ZmxvYXR8c3RyaW5nfG9iamVjdHxhcnJheSlcXGIoPz1cXHMqXFwpKS9pLFxuXHRcdFx0XHRhbGlhczogJ3R5cGUtY2FzdGluZycsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhbKCw/XVxccyopXFxiKD86Ym9vbHxpbnR8ZmxvYXR8c3RyaW5nfG9iamVjdHxhcnJheSg/IVxccypcXCgpfG1peGVkfHNlbGZ8c3RhdGljfGNhbGxhYmxlfGl0ZXJhYmxlfCg/Om51bGx8ZmFsc2UpKD89XFxzKlxcfCkpXFxiKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWhpbnQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oWygsP11cXHMqW2EtejAtOV98XVxcfFxccyopKD86bnVsbHxmYWxzZSlcXGIoPz1cXHMqXFwkKS9pLFxuXHRcdFx0XHRhbGlhczogJ3R5cGUtaGludCcsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXClcXHMqOlxccyooPzpcXD9cXHMqKT8pXFxiKD86Ym9vbHxpbnR8ZmxvYXR8c3RyaW5nfG9iamVjdHx2b2lkfGFycmF5KD8hXFxzKlxcKCl8bWl4ZWR8c2VsZnxzdGF0aWN8Y2FsbGFibGV8aXRlcmFibGV8KD86bnVsbHxmYWxzZSkoPz1cXHMqXFx8KSlcXGIvaSxcblx0XHRcdFx0YWxpYXM6ICdyZXR1cm4tdHlwZScsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXClcXHMqOlxccyooPzpcXD9cXHMqKT9bYS16MC05X3xdXFx8XFxzKikoPzpudWxsfGZhbHNlKVxcYi9pLFxuXHRcdFx0XHRhbGlhczogJ3JldHVybi10eXBlJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiKD86Ym9vbHxpbnR8ZmxvYXR8c3RyaW5nfG9iamVjdHx2b2lkfGFycmF5KD8hXFxzKlxcKCl8bWl4ZWR8aXRlcmFibGV8KD86bnVsbHxmYWxzZSkoPz1cXHMqXFx8KSlcXGIvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWRlY2xhcmF0aW9uJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcfFxccyopKD86bnVsbHxmYWxzZSlcXGIvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWRlY2xhcmF0aW9uJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiKD86cGFyZW50fHNlbGZ8c3RhdGljKSg/PVxccyo6OikvaSxcblx0XHRcdFx0YWxpYXM6ICdzdGF0aWMtY29udGV4dCcsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC9cXGIoPzpfX2hhbHRfY29tcGlsZXJ8YWJzdHJhY3R8YW5kfGFycmF5fGFzfGJyZWFrfGNhbGxhYmxlfGNhc2V8Y2F0Y2h8Y2xhc3N8Y2xvbmV8Y29uc3R8Y29udGludWV8ZGVjbGFyZXxkZWZhdWx0fGRpZXxkb3xlY2hvfGVsc2V8ZWxzZWlmfGVtcHR5fGVuZGRlY2xhcmV8ZW5kZm9yfGVuZGZvcmVhY2h8ZW5kaWZ8ZW5kc3dpdGNofGVuZHdoaWxlfGV2YWx8ZXhpdHxleHRlbmRzfGZpbmFsfGZpbmFsbHl8Zm9yfGZvcmVhY2h8ZnVuY3Rpb258Z2xvYmFsfGdvdG98aWZ8aW1wbGVtZW50c3xpbmNsdWRlfGluY2x1ZGVfb25jZXxpbnN0YW5jZW9mfGluc3RlYWRvZnxpbnRlcmZhY2V8aXNzZXR8bGlzdHxuYW1lc3BhY2V8bWF0Y2h8bmV3fG9yfHBhcmVudHxwcmludHxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVxdWlyZXxyZXF1aXJlX29uY2V8cmV0dXJufHNlbGZ8c3RhdGljfHN3aXRjaHx0aHJvd3x0cmFpdHx0cnl8dW5zZXR8dXNlfHZhcnx3aGlsZXx4b3J8eWllbGQpXFxiL2lcblx0XHRdLFxuXHRcdCdhcmd1bWVudC1uYW1lJzogL1xcYlthLXpfXVxcdyooPz1cXHMqOig/ITopKS9pLFxuXHRcdCdjbGFzcy1uYW1lJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcoPyFcXHMrc2VsZnxcXHMrc3RhdGljKSlcXHMrfFxcYmNhdGNoXFxzKlxcKClcXGJbYS16X11cXHcqKD8hXFxcXClcXGIvaSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcfFxccyopXFxiW2Etel9dXFx3Kig/IVxcXFwpXFxiL2ksXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogL1xcYlthLXpfXVxcdyooPyFcXFxcKVxcYig/PVxccypcXHwpL2ksXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXHxcXHMqKSg/OlxcXFw/XFxiW2Etel9dXFx3KikrXFxiL2ksXG5cdFx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKD86XFxcXD9cXGJbYS16X11cXHcqKStcXGIoPz1cXHMqXFx8KS9pLFxuXHRcdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUtZnVsbHktcXVhbGlmaWVkJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFxcXC9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXGIoPzpleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcoPyFcXHMrc2VsZlxcYnxcXHMrc3RhdGljXFxiKSlcXHMrfFxcYmNhdGNoXFxzKlxcKCkoPzpcXFxcP1xcYlthLXpfXVxcdyopK1xcYig/IVxcXFwpL2ksXG5cdFx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiW2Etel9dXFx3Kig/PVxccypcXCQpL2ksXG5cdFx0XHRcdGFsaWFzOiAndHlwZS1kZWNsYXJhdGlvbicsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyg/OlxcXFw/XFxiW2Etel9dXFx3KikrKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6IFsnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLCAndHlwZS1kZWNsYXJhdGlvbiddLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiW2Etel9dXFx3Kig/PVxccyo6OikvaSxcblx0XHRcdFx0YWxpYXM6ICdzdGF0aWMtY29udGV4dCcsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyg/OlxcXFw/XFxiW2Etel9dXFx3KikrKD89XFxzKjo6KS9pLFxuXHRcdFx0XHRhbGlhczogWydjbGFzcy1uYW1lLWZ1bGx5LXF1YWxpZmllZCcsICdzdGF0aWMtY29udGV4dCddLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFsoLD9dXFxzKilbYS16X11cXHcqKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6ICd0eXBlLWhpbnQnLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oWygsP11cXHMqKSg/OlxcXFw/XFxiW2Etel9dXFx3KikrKD89XFxzKlxcJCkvaSxcblx0XHRcdFx0YWxpYXM6IFsnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnLCAndHlwZS1oaW50J10sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcXFwvXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFwpXFxzKjpcXHMqKD86XFw/XFxzKik/KVxcYlthLXpfXVxcdyooPyFcXFxcKVxcYi9pLFxuXHRcdFx0XHRhbGlhczogJ3JldHVybi10eXBlJyxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcKVxccyo6XFxzKig/OlxcP1xccyopPykoPzpcXFxcP1xcYlthLXpfXVxcdyopK1xcYig/IVxcXFwpL2ksXG5cdFx0XHRcdGFsaWFzOiBbJ2NsYXNzLW5hbWUtZnVsbHktcXVhbGlmaWVkJywgJ3JldHVybi10eXBlJ10sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcXFwvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCdjb25zdGFudCc6IGNvbnN0YW50LFxuXHRcdCdmdW5jdGlvbic6IC9cXHcrXFxzKig/PVxcKCkvLFxuXHRcdCdwcm9wZXJ0eSc6IHtcblx0XHRcdHBhdHRlcm46IC8oLT4pW1xcd10rLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0J29wZXJhdG9yJzogb3BlcmF0b3IsXG5cdFx0J3B1bmN0dWF0aW9uJzogcHVuY3R1YXRpb25cblx0fTtcblxuXHR2YXIgc3RyaW5nX2ludGVycG9sYXRpb24gPSB7XG5cdFx0cGF0dGVybjogL3tcXCQoPzp7KD86e1tee31dK318W157fV0rKX18W157fV0pK318KF58W15cXFxce10pXFwkKyg/OlxcdysoPzpcXFtbXlxcclxcblxcW1xcXV0rXFxdfC0+XFx3KykqKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5waHBcblx0fTtcblxuXHR2YXIgc3RyaW5nID0gW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC88PDwnKFteJ10rKSdbXFxyXFxuXSg/Oi4qW1xcclxcbl0pKj9cXDE7Lyxcblx0XHRcdGFsaWFzOiAnbm93ZG9jLXN0cmluZycsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXjw8PCdbXiddKyd8W2Etel9dXFx3KjskL2ksXG5cdFx0XHRcdFx0YWxpYXM6ICdzeW1ib2wnLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148PDwnP3xbJztdJC9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC88PDwoPzpcIihbXlwiXSspXCJbXFxyXFxuXSg/Oi4qW1xcclxcbl0pKj9cXDE7fChbYS16X11cXHcqKVtcXHJcXG5dKD86LipbXFxyXFxuXSkqP1xcMjspL2ksXG5cdFx0XHRhbGlhczogJ2hlcmVkb2Mtc3RyaW5nJyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8KD86XCJbXlwiXStcInxbYS16X11cXHcqKXxbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PFwiP3xbXCI7XSQvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IHN0cmluZ19pbnRlcnBvbGF0aW9uIC8vIFNlZSBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118W15cXFxcYF0pKmAvLFxuXHRcdFx0YWxpYXM6ICdiYWNrdGljay1xdW90ZWQtc3RyaW5nJyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLycoPzpcXFxcW1xcc1xcU118W15cXFxcJ10pKicvLFxuXHRcdFx0YWxpYXM6ICdzaW5nbGUtcXVvdGVkLXN0cmluZycsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9cIig/OlxcXFxbXFxzXFxTXXxbXlxcXFxcIl0pKlwiLyxcblx0XHRcdGFsaWFzOiAnZG91YmxlLXF1b3RlZC1zdHJpbmcnLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdpbnRlcnBvbGF0aW9uJzogc3RyaW5nX2ludGVycG9sYXRpb24gLy8gU2VlIGJlbG93XG5cdFx0XHR9XG5cdFx0fVxuXHRdO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICd2YXJpYWJsZScsIHtcblx0XHQnc3RyaW5nJzogc3RyaW5nLFxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAndmFyaWFibGUnLCB7XG5cdFx0J2F0dHJpYnV0ZSc6IHtcblx0XHRcdHBhdHRlcm46IC8jXFxbKD86W15cIidcXC8jXXxcXC8oPyFbKi9dKXxcXC9cXC8uKiR8Iyg/IVxcWykuKiR8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC98XCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcInwnKD86XFxcXFtcXHNcXFNdfFteXFxcXCddKSonKStcXF0oPz1cXHMqW2EteiQjXSkvbWksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2F0dHJpYnV0ZS1jb250ZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eKCNcXFspW1xcc1xcU10rKD89XSQpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdC8vIGluc2lkZSBjYW4gYXBwZWFyIHN1YnNldCBvZiBwaHBcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdjb21tZW50JzogY29tbWVudCxcblx0XHRcdFx0XHRcdCdzdHJpbmcnOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHQnYXR0cmlidXRlLWNsYXNzLW5hbWUnOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKFteOl18XilcXGJbYS16X11cXHcqKD8hXFxcXClcXGIvaSxcblx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnLFxuXHRcdFx0XHRcdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKFteOl18XikoPzpcXFxcP1xcYlthLXpfXVxcdyopKy9pLFxuXHRcdFx0XHRcdFx0XHRcdGFsaWFzOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHQnY2xhc3MtbmFtZScsXG5cdFx0XHRcdFx0XHRcdFx0XHQnY2xhc3MtbmFtZS1mdWxseS1xdWFsaWZpZWQnXG5cdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXFxcL1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdCdjb25zdGFudCc6IGNvbnN0YW50LFxuXHRcdFx0XHRcdFx0J251bWJlcic6IG51bWJlcixcblx0XHRcdFx0XHRcdCdvcGVyYXRvcic6IG9wZXJhdG9yLFxuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogcHVuY3R1YXRpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL14jXFxbfF0kLyxcblx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHRpZiAoIS88XFw/Ly50ZXN0KGVudi5jb2RlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBwaHBQYXR0ZXJuID0gLzxcXD8oPzpbXlwiJy8jXXxcXC8oPyFbKi9dKXwoXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXwoPzpcXC9cXC98Iyg/IVxcWykpKD86W14/XFxuXFxyXXxcXD8oPyE+KSkqKD89JHxcXD8+fFtcXHJcXG5dKXwjXFxbfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqKD86XFwqXFwvfCQpKSo/KD86XFw/PnwkKS9pZztcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAncGhwJywgcGhwUGF0dGVybik7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAncGhwJyk7XG5cdH0pO1xuXG59KFByaXNtKSk7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyQDIuMC4wX3dlYnBhY2tANC40My4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA1LjIuMV93ZWJwYWNrQDQuNDMuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8ICFzZWxmLlByaXNtIHx8ICFzZWxmLmRvY3VtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbiBuYW1lIHdoaWNoIGlzIHVzZWQgYXMgYSBjbGFzcyBuYW1lIGZvciA8cHJlPiB3aGljaCBpcyBhY3RpdmF0aW5nIHRoZSBwbHVnaW5cblx0ICogQHR5cGUge1N0cmluZ31cblx0ICovXG5cdHZhciBQTFVHSU5fTkFNRSA9ICdsaW5lLW51bWJlcnMnO1xuXG5cdC8qKlxuXHQgKiBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCBmb3IgZGV0ZXJtaW5pbmcgbGluZSBicmVha3Ncblx0ICogQHR5cGUge1JlZ0V4cH1cblx0ICovXG5cdHZhciBORVdfTElORV9FWFAgPSAvXFxuKD8hJCkvZztcblxuXG5cdC8qKlxuXHQgKiBHbG9iYWwgZXhwb3J0c1xuXHQgKi9cblx0dmFyIGNvbmZpZyA9IFByaXNtLnBsdWdpbnMubGluZU51bWJlcnMgPSB7XG5cdFx0LyoqXG5cdFx0ICogR2V0IG5vZGUgZm9yIHByb3ZpZGVkIGxpbmUgbnVtYmVyXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHByZSBlbGVtZW50XG5cdFx0ICogQHBhcmFtIHtOdW1iZXJ9IG51bWJlciBsaW5lIG51bWJlclxuXHRcdCAqIEByZXR1cm4ge0VsZW1lbnR8dW5kZWZpbmVkfVxuXHRcdCAqL1xuXHRcdGdldExpbmU6IGZ1bmN0aW9uIChlbGVtZW50LCBudW1iZXIpIHtcblx0XHRcdGlmIChlbGVtZW50LnRhZ05hbWUgIT09ICdQUkUnIHx8ICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGluZU51bWJlclJvd3MgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0aWYgKCFsaW5lTnVtYmVyUm93cykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgbGluZU51bWJlclN0YXJ0ID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSwgMTApIHx8IDE7XG5cdFx0XHR2YXIgbGluZU51bWJlckVuZCA9IGxpbmVOdW1iZXJTdGFydCArIChsaW5lTnVtYmVyUm93cy5jaGlsZHJlbi5sZW5ndGggLSAxKTtcblxuXHRcdFx0aWYgKG51bWJlciA8IGxpbmVOdW1iZXJTdGFydCkge1xuXHRcdFx0XHRudW1iZXIgPSBsaW5lTnVtYmVyU3RhcnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnVtYmVyID4gbGluZU51bWJlckVuZCkge1xuXHRcdFx0XHRudW1iZXIgPSBsaW5lTnVtYmVyRW5kO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGluZUluZGV4ID0gbnVtYmVyIC0gbGluZU51bWJlclN0YXJ0O1xuXG5cdFx0XHRyZXR1cm4gbGluZU51bWJlclJvd3MuY2hpbGRyZW5bbGluZUluZGV4XTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVzaXplcyB0aGUgbGluZSBudW1iZXJzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogVGhpcyBmdW5jdGlvbiB3aWxsIG5vdCBhZGQgbGluZSBudW1iZXJzLiBJdCB3aWxsIG9ubHkgcmVzaXplIGV4aXN0aW5nIG9uZXMuXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBBIGA8cHJlPmAgZWxlbWVudCB3aXRoIGxpbmUgbnVtYmVycy5cblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRyZXNpemU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRyZXNpemVFbGVtZW50cyhbZWxlbWVudF0pO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBwbHVnaW4gY2FuIGFzc3VtZSB0aGF0IHRoZSB1bml0cyBmb250IHNpemVzIGFuZCBtYXJnaW5zIGFyZSBub3QgZGVwZW5kZWQgb24gdGhlIHNpemUgb2Zcblx0XHQgKiB0aGUgY3VycmVudCB2aWV3cG9ydC5cblx0XHQgKlxuXHRcdCAqIFNldHRpbmcgdGhpcyB0byBgdHJ1ZWAgd2lsbCBhbGxvdyB0aGUgcGx1Z2luIHRvIGRvIGNlcnRhaW4gb3B0aW1pemF0aW9ucyBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuXHRcdCAqXG5cdFx0ICogU2V0IHRoaXMgdG8gYGZhbHNlYCBpZiB5b3UgdXNlIGFueSBvZiB0aGUgZm9sbG93aW5nIENTUyB1bml0czogYHZoYCwgYHZ3YCwgYHZtaW5gLCBgdm1heGAuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRhc3N1bWVWaWV3cG9ydEluZGVwZW5kZW5jZTogdHJ1ZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNpemVzIHRoZSBnaXZlbiBlbGVtZW50cy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gcmVzaXplRWxlbWVudHMoZWxlbWVudHMpIHtcblx0XHRlbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIGNvZGVTdHlsZXMgPSBnZXRTdHlsZXMoZSk7XG5cdFx0XHR2YXIgd2hpdGVTcGFjZSA9IGNvZGVTdHlsZXNbJ3doaXRlLXNwYWNlJ107XG5cdFx0XHRyZXR1cm4gd2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJyB8fCB3aGl0ZVNwYWNlID09PSAncHJlLWxpbmUnO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGluZm9zID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHR2YXIgY29kZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0aWYgKCFjb2RlRWxlbWVudCB8fCAhbGluZU51bWJlcnNXcmFwcGVyKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXNpemVyJyk7XG5cdFx0XHR2YXIgY29kZUxpbmVzID0gY29kZUVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoTkVXX0xJTkVfRVhQKTtcblxuXHRcdFx0aWYgKCFsaW5lTnVtYmVyU2l6ZXIpIHtcblx0XHRcdFx0bGluZU51bWJlclNpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRsaW5lTnVtYmVyU2l6ZXIuY2xhc3NOYW1lID0gJ2xpbmUtbnVtYmVycy1zaXplcic7XG5cblx0XHRcdFx0Y29kZUVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZU51bWJlclNpemVyKTtcblx0XHRcdH1cblxuXHRcdFx0bGluZU51bWJlclNpemVyLmlubmVySFRNTCA9ICcwJztcblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0dmFyIG9uZUxpbmVySGVpZ2h0ID0gbGluZU51bWJlclNpemVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdGxpbmVOdW1iZXJTaXplci5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0bGluZXM6IGNvZGVMaW5lcyxcblx0XHRcdFx0bGluZUhlaWdodHM6IFtdLFxuXHRcdFx0XHRvbmVMaW5lckhlaWdodDogb25lTGluZXJIZWlnaHQsXG5cdFx0XHRcdHNpemVyOiBsaW5lTnVtYmVyU2l6ZXIsXG5cdFx0XHR9O1xuXHRcdH0pLmZpbHRlcihCb29sZWFuKTtcblxuXHRcdGluZm9zLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcblx0XHRcdHZhciBsaW5lTnVtYmVyU2l6ZXIgPSBpbmZvLnNpemVyO1xuXHRcdFx0dmFyIGxpbmVzID0gaW5mby5saW5lcztcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cdFx0XHR2YXIgb25lTGluZXJIZWlnaHQgPSBpbmZvLm9uZUxpbmVySGVpZ2h0O1xuXG5cdFx0XHRsaW5lSGVpZ2h0c1tsaW5lcy5sZW5ndGggLSAxXSA9IHVuZGVmaW5lZDtcblx0XHRcdGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG5cdFx0XHRcdGlmIChsaW5lICYmIGxpbmUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHZhciBlID0gbGluZU51bWJlclNpemVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHRcdFx0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0XHRlLnRleHRDb250ZW50ID0gbGluZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpbmRleF0gPSBvbmVMaW5lckhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG5cdFx0XHR2YXIgbGluZU51bWJlclNpemVyID0gaW5mby5zaXplcjtcblx0XHRcdHZhciBsaW5lSGVpZ2h0cyA9IGluZm8ubGluZUhlaWdodHM7XG5cblx0XHRcdHZhciBjaGlsZEluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGluZUhlaWdodHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGxpbmVIZWlnaHRzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRsaW5lSGVpZ2h0c1tpXSA9IGxpbmVOdW1iZXJTaXplci5jaGlsZHJlbltjaGlsZEluZGV4KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGluZm8uc2l6ZXI7XG5cdFx0XHR2YXIgd3JhcHBlciA9IGluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblxuXHRcdFx0bGluZU51bWJlclNpemVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdGluZm8ubGluZUhlaWdodHMuZm9yRWFjaChmdW5jdGlvbiAoaGVpZ2h0LCBsaW5lTnVtYmVyKSB7XG5cdFx0XHRcdHdyYXBwZXIuY2hpbGRyZW5bbGluZU51bWJlcl0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgc3R5bGUgZGVjbGFyYXRpb25zIGZvciB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSA6IChlbGVtZW50LmN1cnJlbnRTdHlsZSB8fCBudWxsKTtcblx0fTtcblxuXHR2YXIgbGFzdFdpZHRoID0gdW5kZWZpbmVkO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXHRcdGlmIChjb25maWcuYXNzdW1lVmlld3BvcnRJbmRlcGVuZGVuY2UgJiYgbGFzdFdpZHRoID09PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsYXN0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuXHRcdHJlc2l6ZUVsZW1lbnRzKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZS4nICsgUExVR0lOX05BTUUpKSk7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnY29tcGxldGUnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gLyoqIEB0eXBlIHtFbGVtZW50fSAqLyAoZW52LmVsZW1lbnQpO1xuXHRcdHZhciBwcmUgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoY29kZS5wYXJlbnROb2RlKTtcblxuXHRcdC8vIHdvcmtzIG9ubHkgZm9yIDxjb2RlPiB3cmFwcGVkIGluc2lkZSA8cHJlPiAobm90IGlubGluZSlcblx0XHRpZiAoIXByZSB8fCAhL3ByZS9pLnRlc3QocHJlLm5vZGVOYW1lKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0IGlmIGxpbmUgbnVtYmVycyBhbHJlYWR5IGV4aXN0c1xuXHRcdGlmIChjb2RlLnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gb25seSBhZGQgbGluZSBudW1iZXJzIGlmIDxjb2RlPiBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIGBsaW5lLW51bWJlcnNgIGNsYXNzXG5cdFx0aWYgKCFQcmlzbS51dGlsLmlzQWN0aXZlKGNvZGUsIFBMVUdJTl9OQU1FKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgY2xhc3MgJ2xpbmUtbnVtYmVycycgZnJvbSB0aGUgPGNvZGU+XG5cdFx0Y29kZS5jbGFzc0xpc3QucmVtb3ZlKFBMVUdJTl9OQU1FKTtcblx0XHQvLyBBZGQgdGhlIGNsYXNzICdsaW5lLW51bWJlcnMnIHRvIHRoZSA8cHJlPlxuXHRcdHByZS5jbGFzc0xpc3QuYWRkKFBMVUdJTl9OQU1FKTtcblxuXHRcdHZhciBtYXRjaCA9IGVudi5jb2RlLm1hdGNoKE5FV19MSU5FX0VYUCk7XG5cdFx0dmFyIGxpbmVzTnVtID0gbWF0Y2ggPyBtYXRjaC5sZW5ndGggKyAxIDogMTtcblx0XHR2YXIgbGluZU51bWJlcnNXcmFwcGVyO1xuXG5cdFx0dmFyIGxpbmVzID0gbmV3IEFycmF5KGxpbmVzTnVtICsgMSkuam9pbignPHNwYW4+PC9zcGFuPicpO1xuXG5cdFx0bGluZU51bWJlcnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmVOdW1iZXJzV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuY2xhc3NOYW1lID0gJ2xpbmUtbnVtYmVycy1yb3dzJztcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuaW5uZXJIVE1MID0gbGluZXM7XG5cblx0XHRpZiAocHJlLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdGFydCcpKSB7XG5cdFx0XHRwcmUuc3R5bGUuY291bnRlclJlc2V0ID0gJ2xpbmVudW1iZXIgJyArIChwYXJzZUludChwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0JyksIDEwKSAtIDEpO1xuXHRcdH1cblxuXHRcdGVudi5lbGVtZW50LmFwcGVuZENoaWxkKGxpbmVOdW1iZXJzV3JhcHBlcik7XG5cblx0XHRyZXNpemVFbGVtZW50cyhbcHJlXSk7XG5cblx0XHRQcmlzbS5ob29rcy5ydW4oJ2xpbmUtbnVtYmVycycsIGVudik7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnbGluZS1udW1iZXJzJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGVudi5wbHVnaW5zID0gZW52LnBsdWdpbnMgfHwge307XG5cdFx0ZW52LnBsdWdpbnMubGluZU51bWJlcnMgPSB0cnVlO1xuXHR9KTtcblxufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2l0J1xucmVxdWlyZSgnc3VibW9kdWxlcy9wcmlzbS10cmVldmlldy9wcmlzbS10cmVldmlldy5qcycpO1xuXG5cblxuLyoqXG4gKiBIaWdobGlnaHQgYWxsIGNvZGUgd2l0aCBwcmlzbWpzXG4gKlxuICovXG5mdW5jdGlvbiBpbml0SGlnaGxpZ2h0KCkge1xuICAgIC8vUHJpc20uaGlnaGxpZ2h0QWxsKCk7IC8vIEhpZ2h0bGlnaHQgYWxsIGNvZGUgd2l0aCBwcmlzbWpzXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gSnVzdCBpbiBjYXNlIHNvbWV0aGluZyBsb2FkcyBpbiBhZnRlciBwYWdlIGxvYWRcbiAgICAgIC8vICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgICB9LCAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhpZ2hsaWdodDsiLCJpbXBvcnQge1xuICAgIG1hZ25pZmljUG9wdXBcbn0gZnJvbSAnbWFnbmlmaWMtcG9wdXAnO1xuXG5cbi8qKlxuICogIENyZWF0ZSBzZXR1cCBmb3IgaW5kaXZpZHVhbCBnYWxsZXJ5XG4gKlxuICogQHBhcmFtIHsqfSBnYWxsZXJ5TGluayBqUXVlcnkgb2JqZWN0IChsaW5rIHRoYXQgYSB1c2VyIHdpbGwgY2xpY2sgZm9yIHRoZSBnYWxsZXJ5KVxuICovXG5mdW5jdGlvbiBwcmVwYXJlR2FsbGVyeShnYWxsZXJ5TGluaykge1xuXG4gICAgY29uc3QgaWQgPSAkKGdhbGxlcnlMaW5rKS5hdHRyKCdocmVmJyk7IC8vIEZpbmQgdGhlIGhyZWYgZnJvbSB0aGUgaWRcblxuICAgIGxldCBpbWdzID0gW107XG5cbiAgICAkKGlkKS5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8gTG9vcCB0aHJvdWdoIGVhY2ggaW1hZ2UgaW5zaWRlIHRoZSBsaW5rZWQgY29udGFpbmVyXG4gICAgICAgIGltZ3MucHVzaChcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJCh0aGlzKS5hdHRyKCdzcmMnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgYW4gb2JqZWN0IHRvIHRoZSBpbWdzIGFycmF5IHdpdGggdGhlIGltZyBzcmNcblxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgJChnYWxsZXJ5TGluaykubWFnbmlmaWNQb3B1cCh7IC8vIENyZWF0ZSBhbiBtZnAgaW5zdGFuY2UgZm9yIHRoZSBpbWFnZS5cbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuXG4vKipcbiAqIEFkZCBnYWxsZXJ5IHBvcHVwIGZ1bmN0aW9uYWxpdHlcbiAqL1xuZnVuY3Rpb24gaW5pdEdhbGxlcnlQb3B1cHMoKSB7XG5cbiAgICAkKCcubWZwLWdhbGxlcnknKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8gV2Ugd2lsbCBsb29wIHRocm91Z2ggZWFjaCBpdGVtIGluIHRoZSBnYWxsZXJ5IGxpbmtlZCB0byBvbiBhIG1mcC1nYWxsZXJ5IGxpbmtcblxuICAgICAgICBwcmVwYXJlR2FsbGVyeSh0aGlzKTtcblxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEdhbGxlcnlQb3B1cHM7IiwiaW1wb3J0IGluaXRHYWxsZXJ5UG9wdXBzIGZyb20gJy4vanMvcG9wdXBzJztcbmltcG9ydCBpbml0SGlnaGxpZ2h0IGZyb20gJy4vanMvY29kZWhpZ2hsaWdodCc7XG5cbmluaXRHYWxsZXJ5UG9wdXBzKCk7XG5cbmluaXRIaWdobGlnaHQoKTsiLCJQcmlzbS5sYW5ndWFnZXMudHJlZXZpZXcgPSB7XG5cdFwidHJlZXZpZXctcGFydFwiOiB7XG5cdFx0cGF0dGVybjogLyhefFxcbikuKy8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRcImVudHJ5LWxpbmVcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogL1xcfC0tIHzilJzilIDilIAgLyxcblx0XHRcdFx0XHRhbGlhczogXCJsaW5lLWhcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogL1xcfCAgIHzilIIgICAvLFxuXHRcdFx0XHRcdGFsaWFzOiBcImxpbmUtdlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvYC0tIHzilJTilIDilIAgLyxcblx0XHRcdFx0XHRhbGlhczogXCJsaW5lLXYtbGFzdFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvIHs0fS8sXG5cdFx0XHRcdFx0YWxpYXM6IFwibGluZS12LWdhcFwiXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRcImVudHJ5LW5hbWVcIjoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvLipcXFMuKi8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdC8vIHN5bWxpbmtcblx0XHRcdFx0XHRcIm9wZXJhdG9yXCI6IC8gLT4gLyxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24oZW52KSB7XG5cdGlmIChlbnYubGFuZ3VhZ2UgPT09ICd0cmVldmlldycpIHtcblx0XHQvLyBSZW1vdmUgbGluZSBicmVha3Ncblx0XHRpZihlbnYudHlwZSA9PT0gJ3RyZWV2aWV3LXBhcnQnKSB7XG5cdFx0XHRlbnYuY29udGVudCA9IGVudi5jb250ZW50LnJlcGxhY2UoL1xcbi9nLCcnKSsnPGJyIC8+Jztcblx0XHR9XG5cdFx0aWYoZW52LnR5cGUgPT09ICdlbnRyeS1uYW1lJykge1xuXHRcdFx0aWYoLyhefFteXFxcXF0pXFwvXFxzKiQvLnRlc3QoZW52LmNvbnRlbnQpKSB7XG5cdFx0XHRcdGVudi5jb250ZW50ID0gZW52LmNvbnRlbnQuc2xpY2UoMCwtMSk7XG5cdFx0XHRcdC8vIFRoaXMgaXMgYSBmb2xkZXJcblx0XHRcdFx0ZW52LmNsYXNzZXMucHVzaCgnZGlyJyk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmKC8oXnxbXlxcXFxdKVs9KnxdXFxzKiQvLnRlc3QoZW52LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0ZW52LmNvbnRlbnQgPSBlbnYuY29udGVudC5zbGljZSgwLC0xKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHBhcnRzID0gZW52LmNvbnRlbnQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpO1xuXHRcdFx0XHR3aGlsZSAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHBhcnRzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0Ly8gRXguICdmb28ubWluLmpzJyB3b3VsZCBiZWNvbWUgJzxzcGFuIGNsYXNzPVwidG9rZW4ga2V5d29yZCBleHQtbWluLWpzIGV4dC1qc1wiPmZvby5taW4uanM8L3NwYW4+J1xuXHRcdFx0XHRcdGVudi5jbGFzc2VzLnB1c2goJ2V4dC0nICsgcGFydHMuam9pbignLScpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihlbnYuY29udGVudC5jaGFyQXQoMCk9PT0nLicpIHtcblx0XHRcdFx0ZW52LmNsYXNzZXMucHVzaCgnZG90ZmlsZScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==