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

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/index.js?!./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader??ref--9!./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/lib/css-base.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/lib/css-base.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-clike.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-clike.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
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
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-core.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-core.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
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

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

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
			if ('currentScript' in document) {
				return document.currentScript;
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
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
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

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

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

	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentNode;
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

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

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

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length|0;
	this.greedy = !!greedy;
}

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
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {boolean} [oneshot=false]
 * @param {string} [target]
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (target && target == token + ',' + j) {
				return;
			}

			var pattern = patterns[j],
				inside = pattern.inside,
				lookbehind = !!pattern.lookbehind,
				greedy = !!pattern.greedy,
				lookbehindLength = 0,
				alias = pattern.alias;

			if (greedy && !pattern.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
				pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
			}

			pattern = pattern.pattern || pattern;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween

				if (greedy && currentNode != tokenList.tail.prev) {
					pattern.lastIndex = pos;
					var match = pattern.exec(text);
					if (!match) {
						break;
					}

					var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
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
						k !== tokenList.tail && (p < to || (typeof k.value === 'string' && !k.prev.value.greedy));
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
					pattern.lastIndex = 0;

					var match = pattern.exec(str);
				}

				if (!match) {
					if (oneshot) {
						break;
					}

					continue;
				}

				if (lookbehind) {
					lookbehindLength = match[1] ? match[1].length : 0;
				}

				var from = match.index + lookbehindLength,
					match = match[0].slice(lookbehindLength),
					to = from + match.length,
					before = str.slice(0, from),
					after = str.slice(to);

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}


				if (removeCount > 1)
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);

				if (oneshot)
					break;
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
 */

/**
 * @template T
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

//Get current script and highlight
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack@4.43.0_webpack@4.43.0/node_modules/webpack/buildin/global.js */ "./node_modules/.pnpm/webpack@4.43.0_webpack@4.43.0/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-css.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-css.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				}
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
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
				pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, markup.tag);
	}

}(Prism));


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-git.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-git.js ***!
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
	'commit_sha1': /^commit \w{40}$/m
};


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-javascript.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-javascript.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
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

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-markup-templating.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-markup-templating.js ***!
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

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-markup.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-markup.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
		greedy: true
	},
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
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
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

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
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-php.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-php.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */
(function (Prism) {
	Prism.languages.php = Prism.languages.extend('clike', {
		'keyword': /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
		'boolean': {
			pattern: /\b(?:false|true)\b/i,
			alias: 'constant'
		},
		'constant': [
			/\b[A-Z_][A-Z0-9_]*\b/,
			/\b(?:null)\b/i,
		],
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('php', 'string', {
		'shell-comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true,
			alias: 'comment'
		}
	});

	Prism.languages.insertBefore('php', 'comment', {
		'delimiter': {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: 'important'
		}
	});

	Prism.languages.insertBefore('php', 'keyword', {
		'variable': /\$+(?:\w+\b|(?={))/i,
		'package': {
			pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
			lookbehind: true,
			inside: {
				punctuation: /\\/
			}
		}
	});

	// Must be defined after the function pattern
	Prism.languages.insertBefore('php', 'operator', {
		'property': {
			pattern: /(->)[\w]+/,
			lookbehind: true
		}
	});

	var string_interpolation = {
		pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
		lookbehind: true,
		inside: Prism.languages.php
	};

	Prism.languages.insertBefore('php', 'string', {
		'nowdoc-string': {
			pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
			greedy: true,
			alias: 'string',
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
		'heredoc-string': {
			pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
			greedy: true,
			alias: 'string',
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
		'single-quoted-string': {
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: true,
			alias: 'string'
		},
		'double-quoted-string': {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: true,
			alias: 'string',
			inside: {
				'interpolation': string_interpolation // See below
			}
		}
	});
	// The different types of PHP strings "replace" the C-like standard string
	delete Prism.languages.php['string'];

	Prism.hooks.add('before-tokenize', function(env) {
		if (!/<\?/.test(env.code)) {
			return;
		}

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));


/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader??ref--9!./prism-line-numbers.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/index.js?!./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader@0.21.0/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.pnpm/style-loader@0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
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
	 * Resizes line numbers spans according to height of line of code
	 * @param {Element} element <pre> element
	 */
	var _resizeElement = function (element) {
		var codeStyles = getStyles(element);
		var whiteSpace = codeStyles['white-space'];

		if (whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line') {
			var codeElement = element.querySelector('code');
			var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
			var lineNumberSizer = element.querySelector('.line-numbers-sizer');
			var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

			if (!lineNumberSizer) {
				lineNumberSizer = document.createElement('span');
				lineNumberSizer.className = 'line-numbers-sizer';

				codeElement.appendChild(lineNumberSizer);
			}

			lineNumberSizer.style.display = 'block';

			codeLines.forEach(function (line, lineNumber) {
				lineNumberSizer.textContent = line || '\n';
				var lineSize = lineNumberSizer.getBoundingClientRect().height;
				lineNumbersWrapper.children[lineNumber].style.height = lineSize + 'px';
			});

			lineNumberSizer.textContent = '';
			lineNumberSizer.style.display = 'none';
		}
	};

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

	window.addEventListener('resize', function () {
		Array.prototype.forEach.call(document.querySelectorAll('pre.' + PLUGIN_NAME), _resizeElement);
	});

	Prism.hooks.add('complete', function (env) {
		if (!env.code) {
			return;
		}

		var code = env.element;
		var pre = code.parentNode;

		// works only for <code> wrapped inside <pre> (not inline)
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		// Abort if line numbers already exists
		if (code.querySelector('.line-numbers-rows')) {
			return;
		}

		var addLineNumbers = false;
		var lineNumbersRegex = /(?:^|\s)line-numbers(?:\s|$)/;

		for (var element = code; element; element = element.parentNode) {
			if (lineNumbersRegex.test(element.className)) {
				addLineNumbers = true;
				break;
			}
		}

		// only add line numbers if <code> or one of its ancestors has the `line-numbers` class
		if (!addLineNumbers) {
			return;
		}

		// Remove the class 'line-numbers' from the <code>
		code.className = code.className.replace(lineNumbersRegex, ' ');
		// Add the class 'line-numbers' to the <pre>
		if (!lineNumbersRegex.test(pre.className)) {
			pre.className += ' line-numbers';
		}

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

		_resizeElement(pre);

		Prism.hooks.run('line-numbers', env);
	});

	Prism.hooks.add('line-numbers', function (env) {
		env.plugins = env.plugins || {};
		env.plugins.lineNumbers = true;
	});

	/**
	 * Global exports
	 */
	Prism.plugins.lineNumbers = {
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
		}
	};

}());


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@0.21.0/node_modules/style-loader/lib/addStyles.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@0.21.0/node_modules/style-loader/lib/addStyles.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/.pnpm/style-loader@0.21.0/node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@0.21.0/node_modules/style-loader/lib/urls.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@0.21.0/node_modules/style-loader/lib/urls.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/.pnpm/webpack@4.43.0_webpack@4.43.0/node_modules/webpack/buildin/global.js":
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prismCore = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-core.js");

var _prismCore2 = _interopRequireDefault(_prismCore);

__webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-clike.js");

__webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-javascript.js");

__webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-css.js");

__webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-markup.js");

__webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-markup-templating.js");

__webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-php.js");

__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.css */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");

__webpack_require__(/*! prismjs/components/prism-git */ "./node_modules/.pnpm/prismjs@1.20.0/node_modules/prismjs/components/prism-git.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

__webpack_require__(/*! submodules/prism-treeview/prism-treeview.js */ "./submodules/prism-treeview/prism-treeview.js");

/**
 * Highlight all code with prismjs
 *
 */
function initHighlight() {
    _prismCore2.default.highlightAll(); // Hightlight all code with prismjs

    setTimeout(function () {
        // Just in case something loads in after page load
        _prismCore2.default.highlightAll();
    }, 0);
}

exports.default = initHighlight;

/***/ }),

/***/ "./src/js/popups.js":
/*!**************************!*\
  !*** ./src/js/popups.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _magnificPopup = __webpack_require__(/*! magnific-popup */ "./node_modules/.pnpm/magnific-popup@1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js");

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

            // Add an object to the imgs array with the img src

        });
    });

    $(galleryLink).magnificPopup({ // Create an mfp instance for the image.
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

exports.default = initGalleryPopups;

/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _popups = __webpack_require__(/*! ./js/popups */ "./src/js/popups.js");

var _popups2 = _interopRequireDefault(_popups);

var _codehighlight = __webpack_require__(/*! ./js/codehighlight */ "./src/js/codehighlight.js");

var _codehighlight2 = _interopRequireDefault(_codehighlight);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _popups2.default)();

(0, _codehighlight2.default)();

/***/ }),

/***/ "./submodules/prism-treeview/prism-treeview.js":
/*!*****************************************************!*\
  !*** ./submodules/prism-treeview/prism-treeview.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
				env.content = env.content.slice(0, -1);
				// This is a folder
				env.classes.push('dir');
			} else {

				if (/(^|[^\\])[=*|]\s*$/.test(env.content)) {
					env.content = env.content.slice(0, -1);
				}

				var parts = env.content.toLowerCase().split('.');
				while (parts.length > 1) {
					parts.shift();
					// Ex. 'foo.min.js' would become '<span class="token keyword ext-min-js ext-js">foo.min.js</span>'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMC4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJAMS4wLjFfd2VicGFja0A0LjQzLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9tYWduaWZpYy1wb3B1cEAxLjEuMC9ub2RlX21vZHVsZXMvbWFnbmlmaWMtcG9wdXAvZGlzdC9qcXVlcnkubWFnbmlmaWMtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMC4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY2xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMC4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcHJpc21qc0AxLjIwLjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMC4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2l0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjAuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMC4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwLXRlbXBsYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaXNtanNAMS4yMC4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjAuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBocC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcHJpc21qc0AxLjIwLjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcz84OGRjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmlzbWpzQDEuMjAuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAwLjIxLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMC4yMS4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29kZWhpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9wdXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3N0LmpzIiwid2VicGFjazovLy8uL3N1Ym1vZHVsZXMvcHJpc20tdHJlZXZpZXcvcHJpc20tdHJlZXZpZXcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlByaXNtIiwic2V0VGltZW91dCIsImluaXRIaWdobGlnaHQiLCJpZCIsIiQiLCJpbWdzIiwic3JjIiwidHlwZSIsIml0ZW1zIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJwcmVwYXJlR2FsbGVyeSIsImluaXRHYWxsZXJ5UG9wdXBzIiwicGF0dGVybiIsImluc2lkZSIsImFsaWFzIiwiZW52IiwicGFydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyw0TEFBd0Y7QUFDM0g7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDJDQUEyQyx1QkFBdUIsd0JBQXdCLDhCQUE4QixHQUFHLG1EQUFtRCx1QkFBdUIseUJBQXlCLEdBQUcsc0NBQXNDLHVCQUF1Qix5QkFBeUIsV0FBVyxvQkFBb0IsaUJBQWlCLGVBQWUsdUVBQXVFLGlDQUFpQyxnQ0FBZ0MsMkJB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QTs7O0FBR0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILGlCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELEVBQUU7O0FBRTlEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLEdBQUc7QUFDSDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYyxrQkFBa0Isb0JBQW9CLGNBQWM7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7Ozs7O0FBS0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw4RUFBOEU7O0FBRTlFOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxNQUFNOztBQUVkLE9BQU8sWUFBWTs7QUFFbkIsTUFBTSxNQUFNOzs7QUFHWjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDZCQUE2QjtBQUN2RDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7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QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtB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UUQsZ0NBQVosR0FBWUEsQ0FBWjtBQUNBLFdBQU9DLGVBQVAsR0FBeUI7QUFDeEJBO0FBQ0E7QUFDQUQsc0JBQWlCLFNBQVNDLFdBQTFCRCxHQUEwQkMsQ0FBMUJEO0FBQ0E7QUFDRDs7QUFFRCxPQUFHQSwwQkFBSCxLQUFnQztBQUMvQkE7QUFDQTtBQUNEO0FBQ0Q7QUE3QkZoQixHOzs7Ozs7Ozs7OztBQ2pDQSx3QiIsImZpbGUiOiJwb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9zdC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDEuMC4xX3dlYnBhY2tANC40My4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXS5saW5lLW51bWJlcnMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMuOGVtO1xcblxcdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XFxufVxcblxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyA+IGNvZGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aGl0ZS1zcGFjZTogaW5oZXJpdDtcXG59XFxuXFxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR0b3A6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGxlZnQ6IC0zLjhlbTtcXG5cXHR3aWR0aDogM2VtOyAvKiB3b3JrcyBmb3IgbGluZS1udW1iZXJzIGJlbG93IDEwMDAgbGluZXMgKi9cXG5cXHRsZXR0ZXItc3BhY2luZzogLTFweDtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xcblxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxufVxcblxcblxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW4ge1xcblxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtYmVyO1xcblxcdH1cXG5cXG5cXHRcXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcXG5cXHRcXHRcXHRjb2xvcjogIzk5OTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRcXHR9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLyohIE1hZ25pZmljIFBvcHVwIC0gdjEuMS4wIC0gMjAxNi0wMi0yMFxuKiBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cbiogQ29weXJpZ2h0IChjKSAyMDE2IERtaXRyeSBTZW1lbm92OyAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkgeyBcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHsgXG4gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLiBcbiBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7IFxuIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7IFxuIC8vIE5vZGUvQ29tbW9uSlMgXG4gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7IFxuIH0gZWxzZSB7IFxuIC8vIEJyb3dzZXIgZ2xvYmFscyBcbiBmYWN0b3J5KHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvKTsgXG4gfSBcbiB9KGZ1bmN0aW9uKCQpIHsgXG5cbi8qPj5jb3JlKi9cbi8qKlxuICogXG4gKiBNYWduaWZpYyBQb3B1cCBDb3JlIEpTIGZpbGVcbiAqIFxuICovXG5cblxuLyoqXG4gKiBQcml2YXRlIHN0YXRpYyBjb25zdGFudHNcbiAqL1xudmFyIENMT1NFX0VWRU5UID0gJ0Nsb3NlJyxcblx0QkVGT1JFX0NMT1NFX0VWRU5UID0gJ0JlZm9yZUNsb3NlJyxcblx0QUZURVJfQ0xPU0VfRVZFTlQgPSAnQWZ0ZXJDbG9zZScsXG5cdEJFRk9SRV9BUFBFTkRfRVZFTlQgPSAnQmVmb3JlQXBwZW5kJyxcblx0TUFSS1VQX1BBUlNFX0VWRU5UID0gJ01hcmt1cFBhcnNlJyxcblx0T1BFTl9FVkVOVCA9ICdPcGVuJyxcblx0Q0hBTkdFX0VWRU5UID0gJ0NoYW5nZScsXG5cdE5TID0gJ21mcCcsXG5cdEVWRU5UX05TID0gJy4nICsgTlMsXG5cdFJFQURZX0NMQVNTID0gJ21mcC1yZWFkeScsXG5cdFJFTU9WSU5HX0NMQVNTID0gJ21mcC1yZW1vdmluZycsXG5cdFBSRVZFTlRfQ0xPU0VfQ0xBU1MgPSAnbWZwLXByZXZlbnQtY2xvc2UnO1xuXG5cbi8qKlxuICogUHJpdmF0ZSB2YXJzIFxuICovXG4vKmpzaGludCAtVzA3OSAqL1xudmFyIG1mcCwgLy8gQXMgd2UgaGF2ZSBvbmx5IG9uZSBpbnN0YW5jZSBvZiBNYWduaWZpY1BvcHVwIG9iamVjdCwgd2UgZGVmaW5lIGl0IGxvY2FsbHkgdG8gbm90IHRvIHVzZSAndGhpcydcblx0TWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKCl7fSxcblx0X2lzSlEgPSAhISh3aW5kb3cualF1ZXJ5KSxcblx0X3ByZXZTdGF0dXMsXG5cdF93aW5kb3cgPSAkKHdpbmRvdyksXG5cdF9kb2N1bWVudCxcblx0X3ByZXZDb250ZW50VHlwZSxcblx0X3dyYXBDbGFzc2VzLFxuXHRfY3VyclBvcHVwVHlwZTtcblxuXG4vKipcbiAqIFByaXZhdGUgZnVuY3Rpb25zXG4gKi9cbnZhciBfbWZwT24gPSBmdW5jdGlvbihuYW1lLCBmKSB7XG5cdFx0bWZwLmV2Lm9uKE5TICsgbmFtZSArIEVWRU5UX05TLCBmKTtcblx0fSxcblx0X2dldEVsID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBhcHBlbmRUbywgaHRtbCwgcmF3KSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZWwuY2xhc3NOYW1lID0gJ21mcC0nK2NsYXNzTmFtZTtcblx0XHRpZihodG1sKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdH1cblx0XHRpZighcmF3KSB7XG5cdFx0XHRlbCA9ICQoZWwpO1xuXHRcdFx0aWYoYXBwZW5kVG8pIHtcblx0XHRcdFx0ZWwuYXBwZW5kVG8oYXBwZW5kVG8pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZihhcHBlbmRUbykge1xuXHRcdFx0YXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cdF9tZnBUcmlnZ2VyID0gZnVuY3Rpb24oZSwgZGF0YSkge1xuXHRcdG1mcC5ldi50cmlnZ2VySGFuZGxlcihOUyArIGUsIGRhdGEpO1xuXG5cdFx0aWYobWZwLnN0LmNhbGxiYWNrcykge1xuXHRcdFx0Ly8gY29udmVydHMgXCJtZnBFdmVudE5hbWVcIiB0byBcImV2ZW50TmFtZVwiIGNhbGxiYWNrIGFuZCB0cmlnZ2VycyBpdCBpZiBpdCdzIHByZXNlbnRcblx0XHRcdGUgPSBlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZS5zbGljZSgxKTtcblx0XHRcdGlmKG1mcC5zdC5jYWxsYmFja3NbZV0pIHtcblx0XHRcdFx0bWZwLnN0LmNhbGxiYWNrc1tlXS5hcHBseShtZnAsICQuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X2dldENsb3NlQnRuID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdGlmKHR5cGUgIT09IF9jdXJyUG9wdXBUeXBlIHx8ICFtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKSB7XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuID0gJCggbWZwLnN0LmNsb3NlTWFya3VwLnJlcGxhY2UoJyV0aXRsZSUnLCBtZnAuc3QudENsb3NlICkgKTtcblx0XHRcdF9jdXJyUG9wdXBUeXBlID0gdHlwZTtcblx0XHR9XG5cdFx0cmV0dXJuIG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG47XG5cdH0sXG5cdC8vIEluaXRpYWxpemUgTWFnbmlmaWMgUG9wdXAgb25seSB3aGVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdF9jaGVja0luc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoISQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSkge1xuXHRcdFx0Lypqc2hpbnQgLVcwMjAgKi9cblx0XHRcdG1mcCA9IG5ldyBNYWduaWZpY1BvcHVwKCk7XG5cdFx0XHRtZnAuaW5pdCgpO1xuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmluc3RhbmNlID0gbWZwO1xuXHRcdH1cblx0fSxcblx0Ly8gQ1NTIHRyYW5zaXRpb24gZGV0ZWN0aW9uLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyNjQ4OTkvZGV0ZWN0LWNzcy10cmFuc2l0aW9ucy11c2luZy1qYXZhc2NyaXB0LWFuZC13aXRob3V0LW1vZGVybml6clxuXHRzdXBwb3J0c1RyYW5zaXRpb25zID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGUsIC8vICdzJyBmb3Igc3R5bGUuIGJldHRlciB0byBjcmVhdGUgYW4gZWxlbWVudCBpZiBib2R5IHlldCB0byBleGlzdFxuXHRcdFx0diA9IFsnbXMnLCdPJywnTW96JywnV2Via2l0J107IC8vICd2JyBmb3IgdmVuZG9yXG5cblx0XHRpZiggc1sndHJhbnNpdGlvbiddICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgXG5cdFx0fVxuXHRcdFx0XG5cdFx0d2hpbGUoIHYubGVuZ3RoICkge1xuXHRcdFx0aWYoIHYucG9wKCkgKyAnVHJhbnNpdGlvbicgaW4gcyApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFx0XHRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXG4vKipcbiAqIFB1YmxpYyBmdW5jdGlvbnNcbiAqL1xuTWFnbmlmaWNQb3B1cC5wcm90b3R5cGUgPSB7XG5cblx0Y29uc3RydWN0b3I6IE1hZ25pZmljUG9wdXAsXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIE1hZ25pZmljIFBvcHVwIHBsdWdpbi4gXG5cdCAqIFRoaXMgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9ubHkgb25jZSB3aGVuICQuZm4ubWFnbmlmaWNQb3B1cCBvciAkLm1hZ25pZmljUG9wdXAgaXMgZXhlY3V0ZWRcblx0ICovXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhcHBWZXJzaW9uID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XG5cdFx0bWZwLmlzTG93SUUgPSBtZnAuaXNJRTggPSBkb2N1bWVudC5hbGwgJiYgIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0bWZwLmlzQW5kcm9pZCA9ICgvYW5kcm9pZC9naSkudGVzdChhcHBWZXJzaW9uKTtcblx0XHRtZnAuaXNJT1MgPSAoL2lwaG9uZXxpcGFkfGlwb2QvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLnN1cHBvcnRzVHJhbnNpdGlvbiA9IHN1cHBvcnRzVHJhbnNpdGlvbnMoKTtcblxuXHRcdC8vIFdlIGRpc2FibGUgZml4ZWQgcG9zaXRpb25lZCBsaWdodGJveCBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgaGFuZGxlIGl0IG5pY2VseS5cblx0XHQvLyBJZiB5b3Uga25vdyBhIGJldHRlciB3YXkgb2YgZGV0ZWN0aW5nIHRoaXMgLSBsZXQgbWUga25vdy5cblx0XHRtZnAucHJvYmFibHlNb2JpbGUgPSAobWZwLmlzQW5kcm9pZCB8fCBtZnAuaXNJT1MgfHwgLyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApO1xuXHRcdF9kb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG5cdFx0bWZwLnBvcHVwc0NhY2hlID0ge307XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9wZW5zIHBvcHVwXG5cdCAqIEBwYXJhbSAgZGF0YSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRvcGVuOiBmdW5jdGlvbihkYXRhKSB7XG5cblx0XHR2YXIgaTtcblxuXHRcdGlmKGRhdGEuaXNPYmogPT09IGZhbHNlKSB7IFxuXHRcdFx0Ly8gY29udmVydCBqUXVlcnkgY29sbGVjdGlvbiB0byBhcnJheSB0byBhdm9pZCBjb25mbGljdHMgbGF0ZXJcblx0XHRcdG1mcC5pdGVtcyA9IGRhdGEuaXRlbXMudG9BcnJheSgpO1xuXG5cdFx0XHRtZnAuaW5kZXggPSAwO1xuXHRcdFx0dmFyIGl0ZW1zID0gZGF0YS5pdGVtcyxcblx0XHRcdFx0aXRlbTtcblx0XHRcdGZvcihpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdFx0aWYoaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0XHRpdGVtID0gaXRlbS5lbFswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihpdGVtID09PSBkYXRhLmVsWzBdKSB7XG5cdFx0XHRcdFx0bWZwLmluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuaXRlbXMgPSAkLmlzQXJyYXkoZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW2RhdGEuaXRlbXNdO1xuXHRcdFx0bWZwLmluZGV4ID0gZGF0YS5pbmRleCB8fCAwO1xuXHRcdH1cblxuXHRcdC8vIGlmIHBvcHVwIGlzIGFscmVhZHkgb3BlbmVkIC0gd2UganVzdCB1cGRhdGUgdGhlIGNvbnRlbnRcblx0XHRpZihtZnAuaXNPcGVuKSB7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0bWZwLnR5cGVzID0gW107IFxuXHRcdF93cmFwQ2xhc3NlcyA9ICcnO1xuXHRcdGlmKGRhdGEubWFpbkVsICYmIGRhdGEubWFpbkVsLmxlbmd0aCkge1xuXHRcdFx0bWZwLmV2ID0gZGF0YS5tYWluRWwuZXEoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5ldiA9IF9kb2N1bWVudDtcblx0XHR9XG5cblx0XHRpZihkYXRhLmtleSkge1xuXHRcdFx0aWYoIW1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0pIHtcblx0XHRcdFx0bWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSB7fTtcblx0XHR9XG5cblxuXG5cdFx0bWZwLnN0ID0gJC5leHRlbmQodHJ1ZSwge30sICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cywgZGF0YSApOyBcblx0XHRtZnAuZml4ZWRDb250ZW50UG9zID0gbWZwLnN0LmZpeGVkQ29udGVudFBvcyA9PT0gJ2F1dG8nID8gIW1mcC5wcm9iYWJseU1vYmlsZSA6IG1mcC5zdC5maXhlZENvbnRlbnRQb3M7XG5cblx0XHRpZihtZnAuc3QubW9kYWwpIHtcblx0XHRcdG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkJnQ2xpY2sgPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5zaG93Q2xvc2VCdG4gPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5lbmFibGVFc2NhcGVLZXkgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cblx0XHQvLyBCdWlsZGluZyBtYXJrdXBcblx0XHQvLyBtYWluIGNvbnRhaW5lcnMgYXJlIGNyZWF0ZWQgb25seSBvbmNlXG5cdFx0aWYoIW1mcC5iZ092ZXJsYXkpIHtcblxuXHRcdFx0Ly8gRGFyayBvdmVybGF5XG5cdFx0XHRtZnAuYmdPdmVybGF5ID0gX2dldEVsKCdiZycpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAud3JhcCA9IF9nZXRFbCgnd3JhcCcpLmF0dHIoJ3RhYmluZGV4JywgLTEpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYobWZwLl9jaGVja0lmQ2xvc2UoZS50YXJnZXQpKSB7XG5cdFx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyID0gX2dldEVsKCdjb250YWluZXInLCBtZnAud3JhcCk7XG5cdFx0fVxuXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIgPSBfZ2V0RWwoJ2NvbnRlbnQnKTtcblx0XHRpZihtZnAuc3QucHJlbG9hZGVyKSB7XG5cdFx0XHRtZnAucHJlbG9hZGVyID0gX2dldEVsKCdwcmVsb2FkZXInLCBtZnAuY29udGFpbmVyLCBtZnAuc3QudExvYWRpbmcpO1xuXHRcdH1cblxuXG5cdFx0Ly8gSW5pdGlhbGl6aW5nIG1vZHVsZXNcblx0XHR2YXIgbW9kdWxlcyA9ICQubWFnbmlmaWNQb3B1cC5tb2R1bGVzO1xuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBuID0gbW9kdWxlc1tpXTtcblx0XHRcdG4gPSBuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbi5zbGljZSgxKTtcblx0XHRcdG1mcFsnaW5pdCcrbl0uY2FsbChtZnApO1xuXHRcdH1cblx0XHRfbWZwVHJpZ2dlcignQmVmb3JlT3BlbicpO1xuXG5cblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuKSB7XG5cdFx0XHQvLyBDbG9zZSBidXR0b25cblx0XHRcdGlmKCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUpIHtcblx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKCBfZ2V0Q2xvc2VCdG4oKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X21mcE9uKE1BUktVUF9QQVJTRV9FVkVOVCwgZnVuY3Rpb24oZSwgdGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHRcdHZhbHVlcy5jbG9zZV9yZXBsYWNlV2l0aCA9IF9nZXRDbG9zZUJ0bihpdGVtLnR5cGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWNsb3NlLWJ0bi1pbic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYobWZwLnN0LmFsaWduVG9wKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYWxpZ24tdG9wJztcblx0XHR9XG5cblx0XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRtZnAud3JhcC5jc3Moe1xuXHRcdFx0XHRvdmVyZmxvdzogbWZwLnN0Lm92ZXJmbG93WSxcblx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcblx0XHRcdFx0b3ZlcmZsb3dZOiBtZnAuc3Qub3ZlcmZsb3dZXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndyYXAuY3NzKHsgXG5cdFx0XHRcdHRvcDogX3dpbmRvdy5zY3JvbGxUb3AoKSxcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZSdcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiggbWZwLnN0LmZpeGVkQmdQb3MgPT09IGZhbHNlIHx8IChtZnAuc3QuZml4ZWRCZ1BvcyA9PT0gJ2F1dG8nICYmICFtZnAuZml4ZWRDb250ZW50UG9zKSApIHtcblx0XHRcdG1mcC5iZ092ZXJsYXkuY3NzKHtcblx0XHRcdFx0aGVpZ2h0OiBfZG9jdW1lbnQuaGVpZ2h0KCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRcblxuXHRcdGlmKG1mcC5zdC5lbmFibGVFc2NhcGVLZXkpIHtcblx0XHRcdC8vIENsb3NlIG9uIEVTQyBrZXlcblx0XHRcdF9kb2N1bWVudC5vbigna2V5dXAnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRfd2luZG93Lm9uKCdyZXNpemUnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnVwZGF0ZVNpemUoKTtcblx0XHR9KTtcblxuXG5cdFx0aWYoIW1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYXV0by1jdXJzb3InO1xuXHRcdH1cblx0XHRcblx0XHRpZihfd3JhcENsYXNzZXMpXG5cdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhfd3JhcENsYXNzZXMpO1xuXG5cblx0XHQvLyB0aGlzIHRyaWdnZXJzIHJlY2FsY3VsYXRpb24gb2YgbGF5b3V0LCBzbyB3ZSBnZXQgaXQgb25jZSB0byBub3QgdG8gdHJpZ2dlciB0d2ljZVxuXHRcdHZhciB3aW5kb3dIZWlnaHQgPSBtZnAud0ggPSBfd2luZG93LmhlaWdodCgpO1xuXG5cdFx0XG5cdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHt9O1xuXG5cdFx0aWYoIG1mcC5maXhlZENvbnRlbnRQb3MgKSB7XG4gICAgICAgICAgICBpZihtZnAuX2hhc1Njcm9sbEJhcih3aW5kb3dIZWlnaHQpKXtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG1mcC5fZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICAgICAgICAgICAgICAgIGlmKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93U3R5bGVzLm1hcmdpblJpZ2h0ID0gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdGlmKCFtZnAuaXNJRTcpIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZTcgZG91YmxlLXNjcm9sbCBidWdcblx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0XG5cdFx0XG5cdFx0dmFyIGNsYXNzZXNUb2FkZCA9IG1mcC5zdC5tYWluQ2xhc3M7XG5cdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRjbGFzc2VzVG9hZGQgKz0gJyBtZnAtaWU3Jztcblx0XHR9XG5cdFx0aWYoY2xhc3Nlc1RvYWRkKSB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoIGNsYXNzZXNUb2FkZCApO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBjb250ZW50XG5cdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cblx0XHRfbWZwVHJpZ2dlcignQnVpbGRDb250cm9scycpO1xuXG5cdFx0Ly8gcmVtb3ZlIHNjcm9sbGJhciwgYWRkIG1hcmdpbiBlLnQuY1xuXHRcdCQoJ2h0bWwnKS5jc3Mod2luZG93U3R5bGVzKTtcblx0XHRcblx0XHQvLyBhZGQgZXZlcnl0aGluZyB0byBET01cblx0XHRtZnAuYmdPdmVybGF5LmFkZChtZnAud3JhcCkucHJlcGVuZFRvKCBtZnAuc3QucHJlcGVuZFRvIHx8ICQoZG9jdW1lbnQuYm9keSkgKTtcblxuXHRcdC8vIFNhdmUgbGFzdCBmb2N1c2VkIGVsZW1lbnRcblx0XHRtZnAuX2xhc3RGb2N1c2VkRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFxuXHRcdC8vIFdhaXQgZm9yIG5leHQgY3ljbGUgdG8gYWxsb3cgQ1NTIHRyYW5zaXRpb25cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XG5cdFx0XHRpZihtZnAuY29udGVudCkge1xuXHRcdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBjb250ZW50IGlzIG5vdCBkZWZpbmVkIChub3QgbG9hZGVkIGUudC5jKSB3ZSBhZGQgY2xhc3Mgb25seSBmb3IgQkdcblx0XHRcdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIFRyYXAgdGhlIGZvY3VzIGluIHBvcHVwXG5cdFx0XHRfZG9jdW1lbnQub24oJ2ZvY3VzaW4nICsgRVZFTlRfTlMsIG1mcC5fb25Gb2N1c0luKTtcblxuXHRcdH0sIDE2KTtcblxuXHRcdG1mcC5pc09wZW4gPSB0cnVlO1xuXHRcdG1mcC51cGRhdGVTaXplKHdpbmRvd0hlaWdodCk7XG5cdFx0X21mcFRyaWdnZXIoT1BFTl9FVkVOVCk7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBwb3B1cFxuXHQgKi9cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFtZnAuaXNPcGVuKSByZXR1cm47XG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0NMT1NFX0VWRU5UKTtcblxuXHRcdG1mcC5pc09wZW4gPSBmYWxzZTtcblx0XHQvLyBmb3IgQ1NTMyBhbmltYXRpb25cblx0XHRpZihtZnAuc3QucmVtb3ZhbERlbGF5ICYmICFtZnAuaXNMb3dJRSAmJiBtZnAuc3VwcG9ydHNUcmFuc2l0aW9uICkgIHtcblx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUChSRU1PVklOR19DTEFTUyk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuX2Nsb3NlKCk7XG5cdFx0XHR9LCBtZnAuc3QucmVtb3ZhbERlbGF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogSGVscGVyIGZvciBjbG9zZSgpIGZ1bmN0aW9uXG5cdCAqL1xuXHRfY2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdF9tZnBUcmlnZ2VyKENMT1NFX0VWRU5UKTtcblxuXHRcdHZhciBjbGFzc2VzVG9SZW1vdmUgPSBSRU1PVklOR19DTEFTUyArICcgJyArIFJFQURZX0NMQVNTICsgJyAnO1xuXG5cdFx0bWZwLmJnT3ZlcmxheS5kZXRhY2goKTtcblx0XHRtZnAud3JhcC5kZXRhY2goKTtcblx0XHRtZnAuY29udGFpbmVyLmVtcHR5KCk7XG5cblx0XHRpZihtZnAuc3QubWFpbkNsYXNzKSB7XG5cdFx0XHRjbGFzc2VzVG9SZW1vdmUgKz0gbWZwLnN0Lm1haW5DbGFzcyArICcgJztcblx0XHR9XG5cblx0XHRtZnAuX3JlbW92ZUNsYXNzRnJvbU1GUChjbGFzc2VzVG9SZW1vdmUpO1xuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHttYXJnaW5SaWdodDogJyd9O1xuXHRcdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0fVxuXHRcdFxuXHRcdF9kb2N1bWVudC5vZmYoJ2tleXVwJyArIEVWRU5UX05TICsgJyBmb2N1c2luJyArIEVWRU5UX05TKTtcblx0XHRtZnAuZXYub2ZmKEVWRU5UX05TKTtcblxuXHRcdC8vIGNsZWFuIHVwIERPTSBlbGVtZW50cyB0aGF0IGFyZW4ndCByZW1vdmVkXG5cdFx0bWZwLndyYXAuYXR0cignY2xhc3MnLCAnbWZwLXdyYXAnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdG1mcC5iZ092ZXJsYXkuYXR0cignY2xhc3MnLCAnbWZwLWJnJyk7XG5cdFx0bWZwLmNvbnRhaW5lci5hdHRyKCdjbGFzcycsICdtZnAtY29udGFpbmVyJyk7XG5cblx0XHQvLyByZW1vdmUgY2xvc2UgYnV0dG9uIGZyb20gdGFyZ2V0IGVsZW1lbnRcblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmXG5cdFx0KCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUgfHwgbWZwLmN1cnJUZW1wbGF0ZVttZnAuY3Vyckl0ZW0udHlwZV0gPT09IHRydWUpKSB7XG5cdFx0XHRpZihtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKVxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpO1xuXHRcdH1cblxuXG5cdFx0aWYobWZwLnN0LmF1dG9Gb2N1c0xhc3QgJiYgbWZwLl9sYXN0Rm9jdXNlZEVsKSB7XG5cdFx0XHQkKG1mcC5fbGFzdEZvY3VzZWRFbCkuZm9jdXMoKTsgLy8gcHV0IHRhYiBmb2N1cyBiYWNrXG5cdFx0fVxuXHRcdG1mcC5jdXJySXRlbSA9IG51bGw7XHRcblx0XHRtZnAuY29udGVudCA9IG51bGw7XG5cdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG51bGw7XG5cdFx0bWZwLnByZXZIZWlnaHQgPSAwO1xuXG5cdFx0X21mcFRyaWdnZXIoQUZURVJfQ0xPU0VfRVZFTlQpO1xuXHR9LFxuXHRcblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cblx0XHRpZihtZnAuaXNJT1MpIHtcblx0XHRcdC8vIGZpeGVzIGlPUyBuYXYgYmFycyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9NYWduaWZpYy1Qb3B1cC9pc3N1ZXMvMlxuXHRcdFx0dmFyIHpvb21MZXZlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHpvb21MZXZlbDtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcblx0XHRcdG1mcC53SCA9IGhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndIID0gd2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCk7XG5cdFx0fVxuXHRcdC8vIEZpeGVzICM4NDogcG9wdXAgaW5jb3JyZWN0bHkgcG9zaXRpb25lZCB3aXRoIHBvc2l0aW9uOnJlbGF0aXZlIG9uIGJvZHlcblx0XHRpZighbWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKCdoZWlnaHQnLCBtZnAud0gpO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKCdSZXNpemUnKTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXQgY29udGVudCBvZiBwb3B1cCBiYXNlZCBvbiBjdXJyZW50IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVJdGVtSFRNTDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbbWZwLmluZGV4XTtcblxuXHRcdC8vIERldGFjaCBhbmQgcGVyZm9ybSBtb2RpZmljYXRpb25zXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCk7XG5cblx0XHRpZihtZnAuY29udGVudClcblx0XHRcdG1mcC5jb250ZW50LmRldGFjaCgpO1xuXG5cdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRpdGVtID0gbWZwLnBhcnNlRWwoIG1mcC5pbmRleCApO1xuXHRcdH1cblxuXHRcdHZhciB0eXBlID0gaXRlbS50eXBlO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZUNoYW5nZScsIFttZnAuY3Vyckl0ZW0gPyBtZnAuY3Vyckl0ZW0udHlwZSA6ICcnLCB0eXBlXSk7XG5cdFx0Ly8gQmVmb3JlQ2hhbmdlIGV2ZW50IHdvcmtzIGxpa2Ugc286XG5cdFx0Ly8gX21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkgeyB9KTtcblxuXHRcdG1mcC5jdXJySXRlbSA9IGl0ZW07XG5cblx0XHRpZighbWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSkge1xuXHRcdFx0dmFyIG1hcmt1cCA9IG1mcC5zdFt0eXBlXSA/IG1mcC5zdFt0eXBlXS5tYXJrdXAgOiBmYWxzZTtcblxuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBtYXJrdXBcblx0XHRcdF9tZnBUcmlnZ2VyKCdGaXJzdE1hcmt1cFBhcnNlJywgbWFya3VwKTtcblxuXHRcdFx0aWYobWFya3VwKSB7XG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSAkKG1hcmt1cCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAgZm91bmQgd2UganVzdCBkZWZpbmUgdGhhdCB0ZW1wbGF0ZSBpcyBwYXJzZWRcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoX3ByZXZDb250ZW50VHlwZSAmJiBfcHJldkNvbnRlbnRUeXBlICE9PSBpdGVtLnR5cGUpIHtcblx0XHRcdG1mcC5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ21mcC0nK19wcmV2Q29udGVudFR5cGUrJy1ob2xkZXInKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3Q29udGVudCA9IG1mcFsnZ2V0JyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpXShpdGVtLCBtZnAuY3VyclRlbXBsYXRlW3R5cGVdKTtcblx0XHRtZnAuYXBwZW5kQ29udGVudChuZXdDb250ZW50LCB0eXBlKTtcblxuXHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblxuXHRcdF9tZnBUcmlnZ2VyKENIQU5HRV9FVkVOVCwgaXRlbSk7XG5cdFx0X3ByZXZDb250ZW50VHlwZSA9IGl0ZW0udHlwZTtcblxuXHRcdC8vIEFwcGVuZCBjb250YWluZXIgYmFjayBhZnRlciBpdHMgY29udGVudCBjaGFuZ2VkXG5cdFx0bWZwLmNvbnRhaW5lci5wcmVwZW5kKG1mcC5jb250ZW50Q29udGFpbmVyKTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdBZnRlckNoYW5nZScpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFNldCBIVE1MIGNvbnRlbnQgb2YgcG9wdXBcblx0ICovXG5cdGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uKG5ld0NvbnRlbnQsIHR5cGUpIHtcblx0XHRtZnAuY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cblx0XHRpZihuZXdDb250ZW50KSB7XG5cdFx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmIG1mcC5zdC5jbG9zZUJ0bkluc2lkZSAmJlxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG1hcmt1cCwgd2UganVzdCBhcHBlbmQgY2xvc2UgYnV0dG9uIGVsZW1lbnQgaW5zaWRlXG5cdFx0XHRcdGlmKCFtZnAuY29udGVudC5maW5kKCcubWZwLWNsb3NlJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuYXBwZW5kKF9nZXRDbG9zZUJ0bigpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWZwLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuY29udGVudCA9ICcnO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKEJFRk9SRV9BUFBFTkRfRVZFTlQpO1xuXHRcdG1mcC5jb250YWluZXIuYWRkQ2xhc3MoJ21mcC0nK3R5cGUrJy1ob2xkZXInKTtcblxuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyLmFwcGVuZChtZnAuY29udGVudCk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBNYWduaWZpYyBQb3B1cCBkYXRhIG9iamVjdCBiYXNlZCBvbiBnaXZlbiBkYXRhXG5cdCAqIEBwYXJhbSAge2ludH0gaW5kZXggSW5kZXggb2YgaXRlbSB0byBwYXJzZVxuXHQgKi9cblx0cGFyc2VFbDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF0sXG5cdFx0XHR0eXBlO1xuXG5cdFx0aWYoaXRlbS50YWdOYW1lKSB7XG5cdFx0XHRpdGVtID0geyBlbDogJChpdGVtKSB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0eXBlID0gaXRlbS50eXBlO1xuXHRcdFx0aXRlbSA9IHsgZGF0YTogaXRlbSwgc3JjOiBpdGVtLnNyYyB9O1xuXHRcdH1cblxuXHRcdGlmKGl0ZW0uZWwpIHtcblx0XHRcdHZhciB0eXBlcyA9IG1mcC50eXBlcztcblxuXHRcdFx0Ly8gY2hlY2sgZm9yICdtZnAtVFlQRScgY2xhc3Ncblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiggaXRlbS5lbC5oYXNDbGFzcygnbWZwLScrdHlwZXNbaV0pICkge1xuXHRcdFx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLnNyYyA9IGl0ZW0uZWwuYXR0cignZGF0YS1tZnAtc3JjJyk7XG5cdFx0XHRpZighaXRlbS5zcmMpIHtcblx0XHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2hyZWYnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpdGVtLnR5cGUgPSB0eXBlIHx8IG1mcC5zdC50eXBlIHx8ICdpbmxpbmUnO1xuXHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHRpdGVtLnBhcnNlZCA9IHRydWU7XG5cdFx0bWZwLml0ZW1zW2luZGV4XSA9IGl0ZW07XG5cdFx0X21mcFRyaWdnZXIoJ0VsZW1lbnRQYXJzZScsIGl0ZW0pO1xuXG5cdFx0cmV0dXJuIG1mcC5pdGVtc1tpbmRleF07XG5cdH0sXG5cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgc2luZ2xlIHBvcHVwIG9yIGEgZ3JvdXAgb2YgcG9wdXBzXG5cdCAqL1xuXHRhZGRHcm91cDogZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcblx0XHR2YXIgZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLm1mcEVsID0gdGhpcztcblx0XHRcdG1mcC5fb3BlbkNsaWNrKGUsIGVsLCBvcHRpb25zKTtcblx0XHR9O1xuXG5cdFx0aWYoIW9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9XG5cblx0XHR2YXIgZU5hbWUgPSAnY2xpY2subWFnbmlmaWNQb3B1cCc7XG5cdFx0b3B0aW9ucy5tYWluRWwgPSBlbDtcblxuXHRcdGlmKG9wdGlvbnMuaXRlbXMpIHtcblx0XHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdFx0ZWwub2ZmKGVOYW1lKS5vbihlTmFtZSwgZUhhbmRsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gZmFsc2U7XG5cdFx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIG9wdGlvbnMuZGVsZWdhdGUgLCBlSGFuZGxlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLml0ZW1zID0gZWw7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9vcGVuQ2xpY2s6IGZ1bmN0aW9uKGUsIGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIG1pZENsaWNrID0gb3B0aW9ucy5taWRDbGljayAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5taWRDbGljayA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5taWRDbGljaztcblxuXG5cdFx0aWYoIW1pZENsaWNrICYmICggZS53aGljaCA9PT0gMiB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGlzYWJsZU9uID0gb3B0aW9ucy5kaXNhYmxlT24gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZGlzYWJsZU9uIDogJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLmRpc2FibGVPbjtcblxuXHRcdGlmKGRpc2FibGVPbikge1xuXHRcdFx0aWYoJC5pc0Z1bmN0aW9uKGRpc2FibGVPbikpIHtcblx0XHRcdFx0aWYoICFkaXNhYmxlT24uY2FsbChtZnApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgeyAvLyBlbHNlIGl0J3MgbnVtYmVyXG5cdFx0XHRcdGlmKCBfd2luZG93LndpZHRoKCkgPCBkaXNhYmxlT24gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihlLnR5cGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gVGhpcyB3aWxsIHByZXZlbnQgcG9wdXAgZnJvbSBjbG9zaW5nIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGFuZCBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZFxuXHRcdFx0aWYobWZwLmlzT3Blbikge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9wdGlvbnMuZWwgPSAkKGUubWZwRWwpO1xuXHRcdGlmKG9wdGlvbnMuZGVsZWdhdGUpIHtcblx0XHRcdG9wdGlvbnMuaXRlbXMgPSBlbC5maW5kKG9wdGlvbnMuZGVsZWdhdGUpO1xuXHRcdH1cblx0XHRtZnAub3BlbihvcHRpb25zKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRleHQgb24gcHJlbG9hZGVyXG5cdCAqL1xuXHR1cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cywgdGV4dCkge1xuXG5cdFx0aWYobWZwLnByZWxvYWRlcikge1xuXHRcdFx0aWYoX3ByZXZTdGF0dXMgIT09IHN0YXR1cykge1xuXHRcdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtcy0nK19wcmV2U3RhdHVzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXRleHQgJiYgc3RhdHVzID09PSAnbG9hZGluZycpIHtcblx0XHRcdFx0dGV4dCA9IG1mcC5zdC50TG9hZGluZztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdHN0YXR1czogc3RhdHVzLFxuXHRcdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0XHR9O1xuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBzdGF0dXNcblx0XHRcdF9tZnBUcmlnZ2VyKCdVcGRhdGVTdGF0dXMnLCBkYXRhKTtcblxuXHRcdFx0c3RhdHVzID0gZGF0YS5zdGF0dXM7XG5cdFx0XHR0ZXh0ID0gZGF0YS50ZXh0O1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmh0bWwodGV4dCk7XG5cblx0XHRcdG1mcC5wcmVsb2FkZXIuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtcy0nK3N0YXR1cyk7XG5cdFx0XHRfcHJldlN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH0sXG5cblxuXHQvKlxuXHRcdFwiUHJpdmF0ZVwiIGhlbHBlcnMgdGhhdCBhcmVuJ3QgcHJpdmF0ZSBhdCBhbGxcblx0ICovXG5cdC8vIENoZWNrIHRvIGNsb3NlIHBvcHVwIG9yIG5vdFxuXHQvLyBcInRhcmdldFwiIGlzIGFuIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxuXHRfY2hlY2tJZkNsb3NlOiBmdW5jdGlvbih0YXJnZXQpIHtcblxuXHRcdGlmKCQodGFyZ2V0KS5oYXNDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjbG9zZU9uQ29udGVudCA9IG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrO1xuXHRcdHZhciBjbG9zZU9uQmcgPSBtZnAuc3QuY2xvc2VPbkJnQ2xpY2s7XG5cblx0XHRpZihjbG9zZU9uQ29udGVudCAmJiBjbG9zZU9uQmcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFdlIGNsb3NlIHRoZSBwb3B1cCBpZiBjbGljayBpcyBvbiBjbG9zZSBidXR0b24gb3Igb24gcHJlbG9hZGVyLiBPciBpZiB0aGVyZSBpcyBubyBjb250ZW50LlxuXHRcdFx0aWYoIW1mcC5jb250ZW50IHx8ICQodGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNsb3NlJykgfHwgKG1mcC5wcmVsb2FkZXIgJiYgdGFyZ2V0ID09PSBtZnAucHJlbG9hZGVyWzBdKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIGNvbnRlbnRcblx0XHRcdGlmKCAgKHRhcmdldCAhPT0gbWZwLmNvbnRlbnRbMF0gJiYgISQuY29udGFpbnMobWZwLmNvbnRlbnRbMF0sIHRhcmdldCkpICApIHtcblx0XHRcdFx0aWYoY2xvc2VPbkJnKSB7XG5cdFx0XHRcdFx0Ly8gbGFzdCBjaGVjaywgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBpbiBET00sIChpbiBjYXNlIGl0J3MgcmVtb3ZlZCBvbmNsaWNrKVxuXHRcdFx0XHRcdGlmKCAkLmNvbnRhaW5zKGRvY3VtZW50LCB0YXJnZXQpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoY2xvc2VPbkNvbnRlbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfYWRkQ2xhc3NUb01GUDogZnVuY3Rpb24oY05hbWUpIHtcblx0XHRtZnAuYmdPdmVybGF5LmFkZENsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5hZGRDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9yZW1vdmVDbGFzc0Zyb21NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0dGhpcy5iZ092ZXJsYXkucmVtb3ZlQ2xhc3MoY05hbWUpO1xuXHRcdG1mcC53cmFwLnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0fSxcblx0X2hhc1Njcm9sbEJhcjogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cdFx0cmV0dXJuICggIChtZnAuaXNJRTcgPyBfZG9jdW1lbnQuaGVpZ2h0KCkgOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkgPiAod2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCkpICk7XG5cdH0sXG5cdF9zZXRGb2N1czogZnVuY3Rpb24oKSB7XG5cdFx0KG1mcC5zdC5mb2N1cyA/IG1mcC5jb250ZW50LmZpbmQobWZwLnN0LmZvY3VzKS5lcSgwKSA6IG1mcC53cmFwKS5mb2N1cygpO1xuXHR9LFxuXHRfb25Gb2N1c0luOiBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIGUudGFyZ2V0ICE9PSBtZnAud3JhcFswXSAmJiAhJC5jb250YWlucyhtZnAud3JhcFswXSwgZS50YXJnZXQpICkge1xuXHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X3BhcnNlTWFya3VwOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG5cdFx0dmFyIGFycjtcblx0XHRpZihpdGVtLmRhdGEpIHtcblx0XHRcdHZhbHVlcyA9ICQuZXh0ZW5kKGl0ZW0uZGF0YSwgdmFsdWVzKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoTUFSS1VQX1BBUlNFX0VWRU5ULCBbdGVtcGxhdGUsIHZhbHVlcywgaXRlbV0gKTtcblxuXHRcdCQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0YXJyID0ga2V5LnNwbGl0KCdfJyk7XG5cdFx0XHRpZihhcnIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2FyclswXSk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBhdHRyID0gYXJyWzFdO1xuXHRcdFx0XHRcdGlmKGF0dHIgPT09ICdyZXBsYWNlV2l0aCcpIHtcblx0XHRcdFx0XHRcdGlmKGVsWzBdICE9PSB2YWx1ZVswXSkge1xuXHRcdFx0XHRcdFx0XHRlbC5yZXBsYWNlV2l0aCh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKGF0dHIgPT09ICdpbWcnKSB7XG5cdFx0XHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRcdFx0ZWwuYXR0cignc3JjJywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgoICQoJzxpbWc+JykuYXR0cignc3JjJywgdmFsdWUpLmF0dHIoJ2NsYXNzJywgZWwuYXR0cignY2xhc3MnKSkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWwuYXR0cihhcnJbMV0sIHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcGxhdGUuZmluZChFVkVOVF9OUyArICctJytrZXkpLmh0bWwodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdF9nZXRTY3JvbGxiYXJTaXplOiBmdW5jdGlvbigpIHtcblx0XHQvLyB0aHggRGF2aWRcblx0XHRpZihtZnAuc2Nyb2xsYmFyU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdHNjcm9sbERpdi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA5OXB4OyBoZWlnaHQ6IDk5cHg7IG92ZXJmbG93OiBzY3JvbGw7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4Oyc7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cdFx0XHRtZnAuc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcblx0XHR9XG5cdFx0cmV0dXJuIG1mcC5zY3JvbGxiYXJTaXplO1xuXHR9XG5cbn07IC8qIE1hZ25pZmljUG9wdXAgY29yZSBwcm90b3R5cGUgZW5kICovXG5cblxuXG5cbi8qKlxuICogUHVibGljIHN0YXRpYyBmdW5jdGlvbnNcbiAqL1xuJC5tYWduaWZpY1BvcHVwID0ge1xuXHRpbnN0YW5jZTogbnVsbCxcblx0cHJvdG86IE1hZ25pZmljUG9wdXAucHJvdG90eXBlLFxuXHRtb2R1bGVzOiBbXSxcblxuXHRvcGVuOiBmdW5jdGlvbihvcHRpb25zLCBpbmRleCkge1xuXHRcdF9jaGVja0luc3RhbmNlKCk7XG5cblx0XHRpZighb3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdG9wdGlvbnMuaW5kZXggPSBpbmRleCB8fCAwO1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlLm9wZW4ob3B0aW9ucyk7XG5cdH0sXG5cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UgJiYgJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlLmNsb3NlKCk7XG5cdH0sXG5cblx0cmVnaXN0ZXJNb2R1bGU6IGZ1bmN0aW9uKG5hbWUsIG1vZHVsZSkge1xuXHRcdGlmKG1vZHVsZS5vcHRpb25zKSB7XG5cdFx0XHQkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHNbbmFtZV0gPSBtb2R1bGUub3B0aW9ucztcblx0XHR9XG5cdFx0JC5leHRlbmQodGhpcy5wcm90bywgbW9kdWxlLnByb3RvKTtcblx0XHR0aGlzLm1vZHVsZXMucHVzaChuYW1lKTtcblx0fSxcblxuXHRkZWZhdWx0czoge1xuXG5cdFx0Ly8gSW5mbyBhYm91dCBvcHRpb25zIGlzIGluIGRvY3M6XG5cdFx0Ly8gaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI29wdGlvbnNcblxuXHRcdGRpc2FibGVPbjogMCxcblxuXHRcdGtleTogbnVsbCxcblxuXHRcdG1pZENsaWNrOiBmYWxzZSxcblxuXHRcdG1haW5DbGFzczogJycsXG5cblx0XHRwcmVsb2FkZXI6IHRydWUsXG5cblx0XHRmb2N1czogJycsIC8vIENTUyBzZWxlY3RvciBvZiBpbnB1dCB0byBmb2N1cyBhZnRlciBwb3B1cCBpcyBvcGVuZWRcblxuXHRcdGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuXG5cdFx0Y2xvc2VPbkJnQ2xpY2s6IHRydWUsXG5cblx0XHRjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcblxuXHRcdHNob3dDbG9zZUJ0bjogdHJ1ZSxcblxuXHRcdGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcblxuXHRcdG1vZGFsOiBmYWxzZSxcblxuXHRcdGFsaWduVG9wOiBmYWxzZSxcblxuXHRcdHJlbW92YWxEZWxheTogMCxcblxuXHRcdHByZXBlbmRUbzogbnVsbCxcblxuXHRcdGZpeGVkQ29udGVudFBvczogJ2F1dG8nLFxuXG5cdFx0Zml4ZWRCZ1BvczogJ2F1dG8nLFxuXG5cdFx0b3ZlcmZsb3dZOiAnYXV0bycsXG5cblx0XHRjbG9zZU1hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlXCI+JiMyMTU7PC9idXR0b24+JyxcblxuXHRcdHRDbG9zZTogJ0Nsb3NlIChFc2MpJyxcblxuXHRcdHRMb2FkaW5nOiAnTG9hZGluZy4uLicsXG5cblx0XHRhdXRvRm9jdXNMYXN0OiB0cnVlXG5cblx0fVxufTtcblxuXG5cbiQuZm4ubWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0X2NoZWNrSW5zdGFuY2UoKTtcblxuXHR2YXIganFFbCA9ICQodGhpcyk7XG5cblx0Ly8gV2UgY2FsbCBzb21lIEFQSSBtZXRob2Qgb2YgZmlyc3QgcGFyYW0gaXMgYSBzdHJpbmdcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0aWYob3B0aW9ucyA9PT0gJ29wZW4nKSB7XG5cdFx0XHR2YXIgaXRlbXMsXG5cdFx0XHRcdGl0ZW1PcHRzID0gX2lzSlEgPyBqcUVsLmRhdGEoJ21hZ25pZmljUG9wdXAnKSA6IGpxRWxbMF0ubWFnbmlmaWNQb3B1cCxcblx0XHRcdFx0aW5kZXggPSBwYXJzZUludChhcmd1bWVudHNbMV0sIDEwKSB8fCAwO1xuXG5cdFx0XHRpZihpdGVtT3B0cy5pdGVtcykge1xuXHRcdFx0XHRpdGVtcyA9IGl0ZW1PcHRzLml0ZW1zW2luZGV4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW1zID0ganFFbDtcblx0XHRcdFx0aWYoaXRlbU9wdHMuZGVsZWdhdGUpIHtcblx0XHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmZpbmQoaXRlbU9wdHMuZGVsZWdhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1zID0gaXRlbXMuZXEoIGluZGV4ICk7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX29wZW5DbGljayh7bWZwRWw6aXRlbXN9LCBqcUVsLCBpdGVtT3B0cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKG1mcC5pc09wZW4pXG5cdFx0XHRcdG1mcFtvcHRpb25zXS5hcHBseShtZnAsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vIGNsb25lIG9wdGlvbnMgb2JqXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuXHRcdC8qXG5cdFx0ICogQXMgWmVwdG8gZG9lc24ndCBzdXBwb3J0IC5kYXRhKCkgbWV0aG9kIGZvciBvYmplY3RzXG5cdFx0ICogYW5kIGl0IHdvcmtzIG9ubHkgaW4gbm9ybWFsIGJyb3dzZXJzXG5cdFx0ICogd2UgYXNzaWduIFwib3B0aW9uc1wiIG9iamVjdCBkaXJlY3RseSB0byB0aGUgRE9NIGVsZW1lbnQuIEZUVyFcblx0XHQgKi9cblx0XHRpZihfaXNKUSkge1xuXHRcdFx0anFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJywgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxRWxbMF0ubWFnbmlmaWNQb3B1cCA9IG9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0bWZwLmFkZEdyb3VwKGpxRWwsIG9wdGlvbnMpO1xuXG5cdH1cblx0cmV0dXJuIGpxRWw7XG59O1xuXG4vKj4+Y29yZSovXG5cbi8qPj5pbmxpbmUqL1xuXG52YXIgSU5MSU5FX05TID0gJ2lubGluZScsXG5cdF9oaWRkZW5DbGFzcyxcblx0X2lubGluZVBsYWNlaG9sZGVyLFxuXHRfbGFzdElubGluZUVsZW1lbnQsXG5cdF9wdXRJbmxpbmVFbGVtZW50c0JhY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfbGFzdElubGluZUVsZW1lbnQpIHtcblx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlci5hZnRlciggX2xhc3RJbmxpbmVFbGVtZW50LmFkZENsYXNzKF9oaWRkZW5DbGFzcykgKS5kZXRhY2goKTtcblx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSU5MSU5FX05TLCB7XG5cdG9wdGlvbnM6IHtcblx0XHRoaWRkZW5DbGFzczogJ2hpZGUnLCAvLyB3aWxsIGJlIGFwcGVuZGVkIHdpdGggYG1mcC1gIHByZWZpeFxuXHRcdG1hcmt1cDogJycsXG5cdFx0dE5vdEZvdW5kOiAnQ29udGVudCBub3QgZm91bmQnXG5cdH0sXG5cdHByb3RvOiB7XG5cblx0XHRpbml0SW5saW5lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElOTElORV9OUyk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrSU5MSU5FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldElubGluZTogZnVuY3Rpb24oaXRlbSwgdGVtcGxhdGUpIHtcblxuXHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXG5cdFx0XHRpZihpdGVtLnNyYykge1xuXHRcdFx0XHR2YXIgaW5saW5lU3QgPSBtZnAuc3QuaW5saW5lLFxuXHRcdFx0XHRcdGVsID0gJChpdGVtLnNyYyk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0YXJnZXQgZWxlbWVudCBoYXMgcGFyZW50IC0gd2UgcmVwbGFjZSBpdCB3aXRoIHBsYWNlaG9sZGVyIGFuZCBwdXQgaXQgYmFjayBhZnRlciBwb3B1cCBpcyBjbG9zZWRcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gZWxbMF0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpZihwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUpIHtcblx0XHRcdFx0XHRcdGlmKCFfaW5saW5lUGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gaW5saW5lU3QuaGlkZGVuQ2xhc3M7XG5cdFx0XHRcdFx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlciA9IF9nZXRFbChfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHRfaGlkZGVuQ2xhc3MgPSAnbWZwLScrX2hpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB0YXJnZXQgaW5saW5lIGVsZW1lbnQgd2l0aCBwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0X2xhc3RJbmxpbmVFbGVtZW50ID0gZWwuYWZ0ZXIoX2lubGluZVBsYWNlaG9sZGVyKS5kZXRhY2goKS5yZW1vdmVDbGFzcyhfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbmxpbmVTdC50Tm90Rm91bmQpO1xuXHRcdFx0XHRcdGVsID0gJCgnPGRpdj4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZW0uaW5saW5lRWxlbWVudCA9IGVsO1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCB7fSwgaXRlbSk7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmlubGluZSovXG5cbi8qPj5hamF4Ki9cbnZhciBBSkFYX05TID0gJ2FqYXgnLFxuXHRfYWpheEN1cixcblx0X3JlbW92ZUFqYXhDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhfYWpheEN1cik7XG5cdFx0fVxuXHR9LFxuXHRfZGVzdHJveUFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRpZihtZnAucmVxKSB7XG5cdFx0XHRtZnAucmVxLmFib3J0KCk7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoQUpBWF9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRzZXR0aW5nczogbnVsbCxcblx0XHRjdXJzb3I6ICdtZnAtYWpheC1jdXInLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBjb250ZW50PC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRBamF4OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKEFKQVhfTlMpO1xuXHRcdFx0X2FqYXhDdXIgPSBtZnAuc3QuYWpheC5jdXJzb3I7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0XHRfbWZwT24oJ0JlZm9yZUNoYW5nZS4nICsgQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0fSxcblx0XHRnZXRBamF4OiBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdGlmKF9hamF4Q3VyKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cblx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe1xuXHRcdFx0XHR1cmw6IGl0ZW0uc3JjLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXHRcdFx0XHRcdHZhciB0ZW1wID0ge1xuXHRcdFx0XHRcdFx0ZGF0YTpkYXRhLFxuXHRcdFx0XHRcdFx0eGhyOmpxWEhSXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdQYXJzZUFqYXgnLCB0ZW1wKTtcblxuXHRcdFx0XHRcdG1mcC5hcHBlbmRDb250ZW50KCAkKHRlbXAuZGF0YSksIEFKQVhfTlMgKTtcblxuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblxuXHRcdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHRcdFx0fSwgMTYpO1xuXG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdBamF4Q29udGVudEFkZGVkJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSBpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBtZnAuc3QuYWpheC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBtZnAuc3QuYWpheC5zZXR0aW5ncyk7XG5cblx0XHRcdG1mcC5yZXEgPSAkLmFqYXgob3B0cyk7XG5cblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+YWpheCovXG5cbi8qPj5pbWFnZSovXG52YXIgX2ltZ0ludGVydmFsLFxuXHRfZ2V0VGl0bGUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoaXRlbS5kYXRhICYmIGl0ZW0uZGF0YS50aXRsZSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0cmV0dXJuIGl0ZW0uZGF0YS50aXRsZTtcblxuXHRcdHZhciBzcmMgPSBtZnAuc3QuaW1hZ2UudGl0bGVTcmM7XG5cblx0XHRpZihzcmMpIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihzcmMpKSB7XG5cdFx0XHRcdHJldHVybiBzcmMuY2FsbChtZnAsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uZWwpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uZWwuYXR0cihzcmMpIHx8ICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnaW1hZ2UnLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxmaWd1cmU+Jytcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWltZ1wiPjwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPGZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicrXG5cdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdCc8L2ZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHQnPC9maWd1cmU+Jytcblx0XHRcdFx0JzwvZGl2PicsXG5cdFx0Y3Vyc29yOiAnbWZwLXpvb20tb3V0LWN1cicsXG5cdFx0dGl0bGVTcmM6ICd0aXRsZScsXG5cdFx0dmVydGljYWxGaXQ6IHRydWUsXG5cdFx0dEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW1nU3QgPSBtZnAuc3QuaW1hZ2UsXG5cdFx0XHRcdG5zID0gJy5pbWFnZSc7XG5cblx0XHRcdG1mcC50eXBlcy5wdXNoKCdpbWFnZScpO1xuXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnICYmIGltZ1N0LmN1cnNvcikge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoaW1nU3QuY3Vyc29yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGltZ1N0LmN1cnNvcikge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoaW1nU3QuY3Vyc29yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfd2luZG93Lm9mZigncmVzaXplJyArIEVWRU5UX05TKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oJ1Jlc2l6ZScrbnMsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRfbWZwT24oJ0FmdGVyQ2hhbmdlJywgbWZwLnJlc2l6ZUltYWdlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlc2l6ZUltYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpdGVtID0gbWZwLmN1cnJJdGVtO1xuXHRcdFx0aWYoIWl0ZW0gfHwgIWl0ZW0uaW1nKSByZXR1cm47XG5cblx0XHRcdGlmKG1mcC5zdC5pbWFnZS52ZXJ0aWNhbEZpdCkge1xuXHRcdFx0XHR2YXIgZGVjciA9IDA7XG5cdFx0XHRcdC8vIGZpeCBib3gtc2l6aW5nIGluIGllNy84XG5cdFx0XHRcdGlmKG1mcC5pc0xvd0lFKSB7XG5cdFx0XHRcdFx0ZGVjciA9IHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy10b3AnKSwgMTApICsgcGFyc2VJbnQoaXRlbS5pbWcuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtLmltZy5jc3MoJ21heC1oZWlnaHQnLCBtZnAud0gtZGVjcik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfb25JbWFnZUhhc1NpemU6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdGlmKGl0ZW0uaW1nKSB7XG5cblx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblxuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmlzQ2hlY2tpbmdJbWdTaXplID0gZmFsc2U7XG5cblx0XHRcdFx0X21mcFRyaWdnZXIoJ0ltYWdlSGFzU2l6ZScsIGl0ZW0pO1xuXG5cdFx0XHRcdGlmKGl0ZW0uaW1nSGlkZGVuKSB7XG5cdFx0XHRcdFx0aWYobWZwLmNvbnRlbnQpXG5cdFx0XHRcdFx0XHRtZnAuY29udGVudC5yZW1vdmVDbGFzcygnbWZwLWxvYWRpbmcnKTtcblxuXHRcdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0aGF0IGxvb3BzIHVudGlsIHRoZSBpbWFnZSBoYXMgc2l6ZSB0byBkaXNwbGF5IGVsZW1lbnRzIHRoYXQgcmVseSBvbiBpdCBhc2FwXG5cdFx0ICovXG5cdFx0ZmluZEltYWdlU2l6ZTogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHR2YXIgY291bnRlciA9IDAsXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdLFxuXHRcdFx0XHRtZnBTZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKGRlbGF5KSB7XG5cblx0XHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZGVjZWxlcmF0aW5nIGludGVydmFsIHRoYXQgY2hlY2tzIGZvciBzaXplIG9mIGFuIGltYWdlXG5cdFx0XHRcdFx0X2ltZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKGNvdW50ZXIgPiAyMDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID09PSAzKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDEwKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihjb3VudGVyID09PSA0MCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gMTAwKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRtZnBTZXRJbnRlcnZhbCgxKTtcblx0XHR9LFxuXG5cdFx0Z2V0SW1hZ2U6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdHZhciBndWFyZCA9IDAsXG5cblx0XHRcdFx0Ly8gaW1hZ2UgbG9hZCBjb21wbGV0ZSBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZENvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uaW1nWzBdLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXG5cdFx0XHRcdFx0XHRcdGlmKGl0ZW0gPT09IG1mcC5jdXJySXRlbSl7XG5cdFx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblxuXHRcdFx0XHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpdGVtLmxvYWRlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0ltYWdlTG9hZENvbXBsZXRlJyk7XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBpZiBpbWFnZSBjb21wbGV0ZSBjaGVjayBmYWlscyAyMDAgdGltZXMgKDIwIHNlYyksIHdlIGFzc3VtZSB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvci5cblx0XHRcdFx0XHRcdFx0Z3VhcmQrKztcblx0XHRcdFx0XHRcdFx0aWYoZ3VhcmQgPCAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KG9uTG9hZENvbXBsZXRlLDEwMCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Mb2FkRXJyb3IoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBpbWFnZSBlcnJvciBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZEVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcub2ZmKCcubWZwbG9hZGVyJyk7XG5cdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aW1nU3QgPSBtZnAuc3QuaW1hZ2U7XG5cblxuXHRcdFx0dmFyIGVsID0gdGVtcGxhdGUuZmluZCgnLm1mcC1pbWcnKTtcblx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdGltZy5jbGFzc05hbWUgPSAnbWZwLWltZyc7XG5cdFx0XHRcdGlmKGl0ZW0uZWwgJiYgaXRlbS5lbC5maW5kKCdpbWcnKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRpbWcuYWx0ID0gaXRlbS5lbC5maW5kKCdpbWcnKS5hdHRyKCdhbHQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtLmltZyA9ICQoaW1nKS5vbignbG9hZC5tZnBsb2FkZXInLCBvbkxvYWRDb21wbGV0ZSkub24oJ2Vycm9yLm1mcGxvYWRlcicsIG9uTG9hZEVycm9yKTtcblx0XHRcdFx0aW1nLnNyYyA9IGl0ZW0uc3JjO1xuXG5cdFx0XHRcdC8vIHdpdGhvdXQgY2xvbmUoKSBcImVycm9yXCIgZXZlbnQgaXMgbm90IGZpcmluZyB3aGVuIElNRyBpcyByZXBsYWNlZCBieSBuZXcgSU1HXG5cdFx0XHRcdC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gYXZvaWQgc3VjaCBjbG9uaW5nXG5cdFx0XHRcdGlmKGVsLmlzKCdpbWcnKSkge1xuXHRcdFx0XHRcdGl0ZW0uaW1nID0gaXRlbS5pbWcuY2xvbmUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdO1xuXHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZighaW1nLndpZHRoKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge1xuXHRcdFx0XHR0aXRsZTogX2dldFRpdGxlKGl0ZW0pLFxuXHRcdFx0XHRpbWdfcmVwbGFjZVdpdGg6IGl0ZW0uaW1nXG5cdFx0XHR9LCBpdGVtKTtcblxuXHRcdFx0bWZwLnJlc2l6ZUltYWdlKCk7XG5cblx0XHRcdGlmKGl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblxuXHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdHRlbXBsYXRlLmFkZENsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW1nU3QudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGVtcGxhdGUucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2xvYWRpbmcnKTtcblx0XHRcdGl0ZW0ubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdGlmKCFpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aXRlbS5pbWdIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0bWZwLmZpbmRJbWFnZVNpemUoaXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+aW1hZ2UqL1xuXG4vKj4+em9vbSovXG52YXIgaGFzTW96VHJhbnNmb3JtLFxuXHRnZXRIYXNNb3pUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcblx0XHRpZihoYXNNb3pUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aGFzTW96VHJhbnNmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzTW96VHJhbnNmb3JtO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ3pvb20nLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdGVhc2luZzogJ2Vhc2UtaW4tb3V0Jyxcblx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdG9wZW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXMoJ2ltZycpID8gZWxlbWVudCA6IGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0fVxuXHR9LFxuXG5cdHByb3RvOiB7XG5cblx0XHRpbml0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgem9vbVN0ID0gbWZwLnN0Lnpvb20sXG5cdFx0XHRcdG5zID0gJy56b29tJyxcblx0XHRcdFx0aW1hZ2U7XG5cblx0XHRcdGlmKCF6b29tU3QuZW5hYmxlZCB8fCAhbWZwLnN1cHBvcnRzVHJhbnNpdGlvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkdXJhdGlvbiA9IHpvb21TdC5kdXJhdGlvbixcblx0XHRcdFx0Z2V0RWxUb0FuaW1hdGUgPSBmdW5jdGlvbihpbWFnZSkge1xuXHRcdFx0XHRcdHZhciBuZXdJbWcgPSBpbWFnZS5jbG9uZSgpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQXR0cignY2xhc3MnKS5hZGRDbGFzcygnbWZwLWFuaW1hdGVkLWltYWdlJyksXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uID0gJ2FsbCAnKyh6b29tU3QuZHVyYXRpb24vMTAwMCkrJ3MgJyArIHpvb21TdC5lYXNpbmcsXG5cdFx0XHRcdFx0XHRjc3NPYmogPSB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IDk5OTksXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdFx0Jy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dCA9ICd0cmFuc2l0aW9uJztcblxuXHRcdFx0XHRcdGNzc09ialsnLXdlYmtpdC0nK3RdID0gY3NzT2JqWyctbW96LScrdF0gPSBjc3NPYmpbJy1vLScrdF0gPSBjc3NPYmpbdF0gPSB0cmFuc2l0aW9uO1xuXG5cdFx0XHRcdFx0bmV3SW1nLmNzcyhjc3NPYmopO1xuXHRcdFx0XHRcdHJldHVybiBuZXdJbWc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNob3dNYWluQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW5UaW1lb3V0LFxuXHRcdFx0XHRhbmltYXRlZEltZztcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJytucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdFx0Ly8gQmFzaWNhbGx5LCBhbGwgY29kZSBiZWxvdyBkb2VzIGlzIGNsb25lcyBleGlzdGluZyBpbWFnZSwgcHV0cyBpbiBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgb25lIGFuZCBhbmltYXRlZCBpdFxuXG5cdFx0XHRcdFx0aW1hZ2UgPSBtZnAuX2dldEl0ZW1Ub1pvb20oKTtcblxuXHRcdFx0XHRcdGlmKCFpbWFnZSkge1xuXHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cblx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcblxuXHRcdFx0XHRcdG1mcC53cmFwLmFwcGVuZChhbmltYXRlZEltZyk7XG5cblx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCB0cnVlICkgKTtcblx0XHRcdFx0XHRcdG9wZW5UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGltYWdlID0gYW5pbWF0ZWRJbWcgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdab29tQW5pbWF0aW9uRW5kZWQnKTtcblx0XHRcdFx0XHRcdFx0fSwgMTYpOyAvLyBhdm9pZCBibGluayB3aGVuIHN3aXRjaGluZyBpbWFnZXNcblxuXHRcdFx0XHRcdFx0fSwgZHVyYXRpb24pOyAvLyB0aGlzIHRpbWVvdXQgZXF1YWxzIGFuaW1hdGlvbiBkdXJhdGlvblxuXG5cdFx0XHRcdFx0fSwgMTYpOyAvLyBieSBhZGRpbmcgdGhpcyB0aW1lb3V0IHdlIGF2b2lkIHNob3J0IGdsaXRjaCBhdCB0aGUgYmVnaW5uaW5nIG9mIGFuaW1hdGlvblxuXG5cblx0XHRcdFx0XHQvLyBMb3RzIG9mIHRpbWVvdXRzLi4uXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X21mcE9uKEJFRk9SRV9DTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cblx0XHRcdFx0XHRtZnAuc3QucmVtb3ZhbERlbGF5ID0gZHVyYXRpb247XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cdFx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCh0cnVlKSApO1xuXHRcdFx0XHRcdG1mcC53cmFwLmFwcGVuZChhbmltYXRlZEltZyk7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoKSApO1xuXHRcdFx0XHRcdH0sIDE2KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xuXHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXHRcdFx0XHRcdGlmKGFuaW1hdGVkSW1nKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW1hZ2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0X2FsbG93Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLnR5cGUgPT09ICdpbWFnZSc7XG5cdFx0fSxcblxuXHRcdF9nZXRJdGVtVG9ab29tOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKG1mcC5jdXJySXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdHJldHVybiBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBHZXQgZWxlbWVudCBwb3N0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG5cdFx0X2dldE9mZnNldDogZnVuY3Rpb24oaXNMYXJnZSkge1xuXHRcdFx0dmFyIGVsO1xuXHRcdFx0aWYoaXNMYXJnZSkge1xuXHRcdFx0XHRlbCA9IG1mcC5jdXJySXRlbS5pbWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbCA9IG1mcC5zdC56b29tLm9wZW5lcihtZnAuY3Vyckl0ZW0uZWwgfHwgbWZwLmN1cnJJdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG9mZnNldCA9IGVsLm9mZnNldCgpO1xuXHRcdFx0dmFyIHBhZGRpbmdUb3AgPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctdG9wJyksMTApO1xuXHRcdFx0dmFyIHBhZGRpbmdCb3R0b20gPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctYm90dG9tJyksMTApO1xuXHRcdFx0b2Zmc2V0LnRvcCAtPSAoICQod2luZG93KS5zY3JvbGxUb3AoKSAtIHBhZGRpbmdUb3AgKTtcblxuXG5cdFx0XHQvKlxuXG5cdFx0XHRBbmltYXRpbmcgbGVmdCArIHRvcCArIHdpZHRoL2hlaWdodCBsb29rcyBnbGl0Y2h5IGluIEZpcmVmb3gsIGJ1dCBwZXJmZWN0IGluIENocm9tZS4gQW5kIHZpY2UtdmVyc2EuXG5cblx0XHRcdCAqL1xuXHRcdFx0dmFyIG9iaiA9IHtcblx0XHRcdFx0d2lkdGg6IGVsLndpZHRoKCksXG5cdFx0XHRcdC8vIGZpeCBaZXB0byBoZWlnaHQrcGFkZGluZyBpc3N1ZVxuXHRcdFx0XHRoZWlnaHQ6IChfaXNKUSA/IGVsLmlubmVySGVpZ2h0KCkgOiBlbFswXS5vZmZzZXRIZWlnaHQpIC0gcGFkZGluZ0JvdHRvbSAtIHBhZGRpbmdUb3Bcblx0XHRcdH07XG5cblx0XHRcdC8vIEkgaGF0ZSB0byBkbyB0aGlzLCBidXQgdGhlcmUgaXMgbm8gYW5vdGhlciBvcHRpb25cblx0XHRcdGlmKCBnZXRIYXNNb3pUcmFuc2Zvcm0oKSApIHtcblx0XHRcdFx0b2JqWyctbW96LXRyYW5zZm9ybSddID0gb2JqWyd0cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGUoJyArIG9mZnNldC5sZWZ0ICsgJ3B4LCcgKyBvZmZzZXQudG9wICsgJ3B4KSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmoubGVmdCA9IG9mZnNldC5sZWZ0O1xuXHRcdFx0XHRvYmoudG9wID0gb2Zmc2V0LnRvcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cblxuLyo+Pnpvb20qL1xuXG4vKj4+aWZyYW1lKi9cblxudmFyIElGUkFNRV9OUyA9ICdpZnJhbWUnLFxuXHRfZW1wdHlQYWdlID0gJy8vYWJvdXQ6YmxhbmsnLFxuXG5cdF9maXhJZnJhbWVCdWdzID0gZnVuY3Rpb24oaXNTaG93aW5nKSB7XG5cdFx0aWYobWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdKSB7XG5cdFx0XHR2YXIgZWwgPSBtZnAuY3VyclRlbXBsYXRlW0lGUkFNRV9OU10uZmluZCgnaWZyYW1lJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gcmVzZXQgc3JjIGFmdGVyIHRoZSBwb3B1cCBpcyBjbG9zZWQgdG8gYXZvaWQgXCJ2aWRlbyBrZWVwcyBwbGF5aW5nIGFmdGVyIHBvcHVwIGlzIGNsb3NlZFwiIGJ1Z1xuXHRcdFx0XHRpZighaXNTaG93aW5nKSB7XG5cdFx0XHRcdFx0ZWxbMF0uc3JjID0gX2VtcHR5UGFnZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElFOCBibGFjayBzY3JlZW4gYnVnIGZpeFxuXHRcdFx0XHRpZihtZnAuaXNJRTgpIHtcblx0XHRcdFx0XHRlbC5jc3MoJ2Rpc3BsYXknLCBpc1Nob3dpbmcgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKElGUkFNRV9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHQnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBzcmM9XCIvL2Fib3V0OmJsYW5rXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicrXG5cdFx0XHRcdCc8L2Rpdj4nLFxuXG5cdFx0c3JjQWN0aW9uOiAnaWZyYW1lX3NyYycsXG5cblx0XHQvLyB3ZSBkb24ndCBjYXJlIGFuZCBzdXBwb3J0IG9ubHkgb25lIGRlZmF1bHQgdHlwZSBvZiBVUkwgYnkgZGVmYXVsdFxuXHRcdHBhdHRlcm5zOiB7XG5cdFx0XHR5b3V0dWJlOiB7XG5cdFx0XHRcdGluZGV4OiAneW91dHViZS5jb20nLFxuXHRcdFx0XHRpZDogJ3Y9Jyxcblx0XHRcdFx0c3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdHZpbWVvOiB7XG5cdFx0XHRcdGluZGV4OiAndmltZW8uY29tLycsXG5cdFx0XHRcdGlkOiAnLycsXG5cdFx0XHRcdHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEnXG5cdFx0XHR9LFxuXHRcdFx0Z21hcHM6IHtcblx0XHRcdFx0aW5kZXg6ICcvL21hcHMuZ29vZ2xlLicsXG5cdFx0XHRcdHNyYzogJyVpZCUmb3V0cHV0PWVtYmVkJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJZnJhbWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnR5cGVzLnB1c2goSUZSQU1FX05TKTtcblxuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkge1xuXHRcdFx0XHRpZihwcmV2VHlwZSAhPT0gbmV3VHlwZSkge1xuXHRcdFx0XHRcdGlmKHByZXZUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7IC8vIGlmcmFtZSBpZiByZW1vdmVkXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG5ld1R5cGUgPT09IElGUkFNRV9OUykge1xuXHRcdFx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3ModHJ1ZSk7IC8vIGlmcmFtZSBpcyBzaG93aW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9Ly8gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaWZyYW1lIHNvdXJjZSBpcyBzd2l0Y2hlZCwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRcdFx0Ly99XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UICsgJy4nICsgSUZSQU1FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3MoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXRJZnJhbWU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cdFx0XHR2YXIgZW1iZWRTcmMgPSBpdGVtLnNyYztcblx0XHRcdHZhciBpZnJhbWVTdCA9IG1mcC5zdC5pZnJhbWU7XG5cblx0XHRcdCQuZWFjaChpZnJhbWVTdC5wYXR0ZXJucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGVtYmVkU3JjLmluZGV4T2YoIHRoaXMuaW5kZXggKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5pZCkge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHRoaXMuaWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gZW1iZWRTcmMuc3Vic3RyKGVtYmVkU3JjLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLCBlbWJlZFNyYy5sZW5ndGgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZW1iZWRTcmMgPSB0aGlzLmlkLmNhbGwoIHRoaXMsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5zcmMucmVwbGFjZSgnJWlkJScsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBkYXRhT2JqID0ge307XG5cdFx0XHRpZihpZnJhbWVTdC5zcmNBY3Rpb24pIHtcblx0XHRcdFx0ZGF0YU9ialtpZnJhbWVTdC5zcmNBY3Rpb25dID0gZW1iZWRTcmM7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCBkYXRhT2JqLCBpdGVtKTtcblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cblxuXG4vKj4+aWZyYW1lKi9cblxuLyo+PmdhbGxlcnkqL1xuLyoqXG4gKiBHZXQgbG9vcGVkIGluZGV4IGRlcGVuZGluZyBvbiBudW1iZXIgb2Ygc2xpZGVzXG4gKi9cbnZhciBfZ2V0TG9vcGVkSWQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBudW1TbGlkZXMgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xuXHRcdFx0cmV0dXJuIGluZGV4IC0gbnVtU2xpZGVzO1xuXHRcdH0gZWxzZSAgaWYoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblx0X3JlcGxhY2VDdXJyVG90YWwgPSBmdW5jdGlvbih0ZXh0LCBjdXJyLCB0b3RhbCkge1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoLyVjdXJyJS9naSwgY3VyciArIDEpLnJlcGxhY2UoLyV0b3RhbCUvZ2ksIHRvdGFsKTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCdnYWxsZXJ5Jywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRhcnJvd01hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWFycm93IG1mcC1hcnJvdy0lZGlyJVwiPjwvYnV0dG9uPicsXG5cdFx0cHJlbG9hZDogWzAsMl0sXG5cdFx0bmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuXHRcdGFycm93czogdHJ1ZSxcblxuXHRcdHRQcmV2OiAnUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KScsXG5cdFx0dE5leHQ6ICdOZXh0IChSaWdodCBhcnJvdyBrZXkpJyxcblx0XHR0Q291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJ1xuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdEdhbGxlcnk6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgZ1N0ID0gbWZwLnN0LmdhbGxlcnksXG5cdFx0XHRcdG5zID0gJy5tZnAtZ2FsbGVyeSc7XG5cblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlOyAvLyB0cnVlIC0gbmV4dCwgZmFsc2UgLSBwcmV2XG5cblx0XHRcdGlmKCFnU3QgfHwgIWdTdC5lbmFibGVkICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtZ2FsbGVyeSc7XG5cblx0XHRcdF9tZnBPbihPUEVOX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRpZihnU3QubmF2aWdhdGVCeUltZ0NsaWNrKSB7XG5cdFx0XHRcdFx0bWZwLndyYXAub24oJ2NsaWNrJytucywgJy5tZnAtaW1nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfZG9jdW1lbnQub24oJ2tleWRvd24nK25zLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdVcGRhdGVTdGF0dXMnK25zLCBmdW5jdGlvbihlLCBkYXRhKSB7XG5cdFx0XHRcdGlmKGRhdGEudGV4dCkge1xuXHRcdFx0XHRcdGRhdGEudGV4dCA9IF9yZXBsYWNlQ3VyclRvdGFsKGRhdGEudGV4dCwgbWZwLmN1cnJJdGVtLmluZGV4LCBtZnAuaXRlbXMubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKGUsIGVsZW1lbnQsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHR2YXIgbCA9IG1mcC5pdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHZhbHVlcy5jb3VudGVyID0gbCA+IDEgPyBfcmVwbGFjZUN1cnJUb3RhbChnU3QudENvdW50ZXIsIGl0ZW0uaW5kZXgsIGwpIDogJyc7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJyArIG5zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEgJiYgZ1N0LmFycm93cyAmJiAhbWZwLmFycm93TGVmdCkge1xuXHRcdFx0XHRcdHZhciBtYXJrdXAgPSBnU3QuYXJyb3dNYXJrdXAsXG5cdFx0XHRcdFx0XHRhcnJvd0xlZnQgPSBtZnAuYXJyb3dMZWZ0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksICdsZWZ0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSxcblx0XHRcdFx0XHRcdGFycm93UmlnaHQgPSBtZnAuYXJyb3dSaWdodCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudE5leHQpLnJlcGxhY2UoLyVkaXIlL2dpLCAncmlnaHQnKSApLmFkZENsYXNzKFBSRVZFTlRfQ0xPU0VfQ0xBU1MpO1xuXG5cdFx0XHRcdFx0YXJyb3dMZWZ0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLnByZXYoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRhcnJvd1JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdG1mcC5jb250YWluZXIuYXBwZW5kKGFycm93TGVmdC5hZGQoYXJyb3dSaWdodCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENIQU5HRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fcHJlbG9hZFRpbWVvdXQpIGNsZWFyVGltZW91dChtZnAuX3ByZWxvYWRUaW1lb3V0KTtcblxuXHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAucHJlbG9hZE5lYXJieUltYWdlcygpO1xuXHRcdFx0XHRcdG1mcC5fcHJlbG9hZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9LCAxNik7XG5cdFx0XHR9KTtcblxuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfZG9jdW1lbnQub2ZmKG5zKTtcblx0XHRcdFx0bWZwLndyYXAub2ZmKCdjbGljaycrbnMpO1xuXHRcdFx0XHRtZnAuYXJyb3dSaWdodCA9IG1mcC5hcnJvd0xlZnQgPSBudWxsO1xuXHRcdFx0fSk7XG5cblx0XHR9LFxuXHRcdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IHRydWU7XG5cdFx0XHRtZnAuaW5kZXggPSBfZ2V0TG9vcGVkSWQobWZwLmluZGV4ICsgMSk7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdHByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IGZhbHNlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCAtIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRnb1RvOiBmdW5jdGlvbihuZXdJbmRleCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IChuZXdJbmRleCA+PSBtZnAuaW5kZXgpO1xuXHRcdFx0bWZwLmluZGV4ID0gbmV3SW5kZXg7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdHByZWxvYWROZWFyYnlJbWFnZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHAgPSBtZnAuc3QuZ2FsbGVyeS5wcmVsb2FkLFxuXHRcdFx0XHRwcmVsb2FkQmVmb3JlID0gTWF0aC5taW4ocFswXSwgbWZwLml0ZW1zLmxlbmd0aCksXG5cdFx0XHRcdHByZWxvYWRBZnRlciA9IE1hdGgubWluKHBbMV0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRpO1xuXG5cdFx0XHRmb3IoaSA9IDE7IGkgPD0gKG1mcC5kaXJlY3Rpb24gPyBwcmVsb2FkQWZ0ZXIgOiBwcmVsb2FkQmVmb3JlKTsgaSsrKSB7XG5cdFx0XHRcdG1mcC5fcHJlbG9hZEl0ZW0obWZwLmluZGV4K2kpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEJlZm9yZSA6IHByZWxvYWRBZnRlcik7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleC1pKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9wcmVsb2FkSXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblxuXHRcdFx0aWYobWZwLml0ZW1zW2luZGV4XS5wcmVsb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF07XG5cdFx0XHRpZighaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0aXRlbSA9IG1mcC5wYXJzZUVsKCBpbmRleCApO1xuXHRcdFx0fVxuXG5cdFx0XHRfbWZwVHJpZ2dlcignTGF6eUxvYWQnLCBpdGVtKTtcblxuXHRcdFx0aWYoaXRlbS50eXBlID09PSAnaW1hZ2UnKSB7XG5cdFx0XHRcdGl0ZW0uaW1nID0gJCgnPGltZyBjbGFzcz1cIm1mcC1pbWdcIiAvPicpLm9uKCdsb2FkLm1mcGxvYWRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdH0pLm9uKCdlcnJvci5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignTGF6eUxvYWRFcnJvcicsIGl0ZW0pO1xuXHRcdFx0XHR9KS5hdHRyKCdzcmMnLCBpdGVtLnNyYyk7XG5cdFx0XHR9XG5cblxuXHRcdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5nYWxsZXJ5Ki9cblxuLyo+PnJldGluYSovXG5cbnZhciBSRVRJTkFfTlMgPSAncmV0aW5hJztcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFJFVElOQV9OUywge1xuXHRvcHRpb25zOiB7XG5cdFx0cmVwbGFjZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0cmV0dXJuIGl0ZW0uc3JjLnJlcGxhY2UoL1xcLlxcdyskLywgZnVuY3Rpb24obSkgeyByZXR1cm4gJ0AyeCcgKyBtOyB9KTtcblx0XHR9LFxuXHRcdHJhdGlvOiAxIC8vIEZ1bmN0aW9uIG9yIG51bWJlci4gIFNldCB0byAxIHRvIGRpc2FibGUuXG5cdH0sXG5cdHByb3RvOiB7XG5cdFx0aW5pdFJldGluYTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcblxuXHRcdFx0XHR2YXIgc3QgPSBtZnAuc3QucmV0aW5hLFxuXHRcdFx0XHRcdHJhdGlvID0gc3QucmF0aW87XG5cblx0XHRcdFx0cmF0aW8gPSAhaXNOYU4ocmF0aW8pID8gcmF0aW8gOiByYXRpbygpO1xuXG5cdFx0XHRcdGlmKHJhdGlvID4gMSkge1xuXHRcdFx0XHRcdF9tZnBPbignSW1hZ2VIYXNTaXplJyArICcuJyArIFJFVElOQV9OUywgZnVuY3Rpb24oZSwgaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcuY3NzKHtcblx0XHRcdFx0XHRcdFx0J21heC13aWR0aCc6IGl0ZW0uaW1nWzBdLm5hdHVyYWxXaWR0aCAvIHJhdGlvLFxuXHRcdFx0XHRcdFx0XHQnd2lkdGgnOiAnMTAwJSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdF9tZnBPbignRWxlbWVudFBhcnNlJyArICcuJyArIFJFVElOQV9OUywgZnVuY3Rpb24oZSwgaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5zcmMgPSBzdC5yZXBsYWNlU3JjKGl0ZW0sIHJhdGlvKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PnJldGluYSovXG4gX2NoZWNrSW5zdGFuY2UoKTsgfSkpOyIsIlByaXNtLmxhbmd1YWdlcy5jbGlrZSA9IHtcblx0J2NvbW1lbnQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2xhc3MtbmFtZSc6IHtcblx0XHRwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzK3xcXGJjYXRjaFxccytcXCgpW1xcdy5cXFxcXSsvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1suXFxcXF0vXG5cdFx0fVxuXHR9LFxuXHQna2V5d29yZCc6IC9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLFxuXHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdCdmdW5jdGlvbic6IC9cXHcrKD89XFwoKS8sXG5cdCdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuIiwidmFyIF9zZWxmID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQ/IHdpbmRvdyAgIC8vIGlmIGluIGJyb3dzZXJcblx0OiAoXG5cdFx0KHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKVxuXHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHQ6IHt9ICAgLy8gaWYgaW4gbm9kZSBqc1xuXHQpO1xuXG4vKipcbiAqIFByaXNtOiBMaWdodHdlaWdodCwgcm9idXN0LCBlbGVnYW50IHN5bnRheCBoaWdobGlnaHRpbmdcbiAqIE1JVCBsaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwL1xuICogQGF1dGhvciBMZWEgVmVyb3UgaHR0cDovL2xlYS52ZXJvdS5tZVxuICovXG5cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpe1xuXG4vLyBQcml2YXRlIGhlbHBlciB2YXJzXG52YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xudmFyIHVuaXF1ZUlkID0gMDtcblxuXG52YXIgXyA9IHtcblx0bWFudWFsOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5tYW51YWwsXG5cdGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyLFxuXHR1dGlsOiB7XG5cdFx0ZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodG9rZW5zKSB7XG5cdFx0XHRpZiAodG9rZW5zIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKGVuY29kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuXHRcdH0sXG5cblx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0fSxcblxuXHRcdC8vIERlZXAgY2xvbmUgYSBsYW5ndWFnZSBkZWZpbml0aW9uIChlLmcuIHRvIGV4dGVuZCBpdClcblx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdHZhciBjbG9uZSwgaWQsIHR5cGUgPSBfLnV0aWwudHlwZShvKTtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvbmUgPSB7fTtcblx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBjbG9uZTtcblxuXHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0Y2xvbmVbaV0gPSBkZWVwQ2xvbmUodiwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgUHJpc20gbGFuZ3VhZ2Ugb2YgdGhlIGdpdmVuIGVsZW1lbnQgc2V0IGJ5IGEgYGxhbmd1YWdlLXh4eHhgIG9yIGBsYW5nLXh4eHhgIGNsYXNzLlxuXHRcdCAqXG5cdFx0ICogSWYgbm8gbGFuZ3VhZ2UgaXMgc2V0IGZvciB0aGUgZWxlbWVudCBvciB0aGUgZWxlbWVudCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIGBub25lYCB3aWxsIGJlIHJldHVybmVkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRnZXRMYW5ndWFnZTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdHdoaWxlIChlbGVtZW50ICYmICFsYW5nLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gKGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJ25vbmUnO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBzY3JpcHQgZWxlbWVudCB0aGF0IGlzIGN1cnJlbnRseSBleGVjdXRpbmcuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGRvZXMgX19ub3RfXyB3b3JrIGZvciBsaW5lIHNjcmlwdCBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge0hUTUxTY3JpcHRFbGVtZW50IHwgbnVsbH1cblx0XHQgKi9cblx0XHRjdXJyZW50U2NyaXB0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElFMTEgd29ya2Fyb3VuZFxuXHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHQvLyB0aGlzIHdpbGwgbm90IHdvcmsgZm9yIGlubGluZSBzY3JpcHRzXG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIEdldCBmaWxlIHNyYyB1cmwgZnJvbSBzdGFjay4gU3BlY2lmaWNhbGx5IHdvcmtzIHdpdGggdGhlIGZvcm1hdCBvZiBzdGFjayB0cmFjZXMgaW4gSUUuXG5cdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gRXJyb3Jcblx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHQvLyAgICBhdCBHbG9iYWwgY29kZSAoaHR0cDovL2xvY2FsaG9zdC9jb21wb25lbnRzL3ByaXNtLWNvcmUuanM6NjA2OjEpXG5cblx0XHRcdFx0dmFyIHNyYyA9ICgvYXQgW14oXFxyXFxuXSpcXCgoLiopOi4rOi4rXFwpJC9pLmV4ZWMoZXJyLnN0YWNrKSB8fCBbXSlbMV07XG5cdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNjcmlwdHMpIHtcblx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNjcmlwdHNbaV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRsYW5ndWFnZXM6IHtcblx0XHRleHRlbmQ6IGZ1bmN0aW9uIChpZCwgcmVkZWYpIHtcblx0XHRcdHZhciBsYW5nID0gXy51dGlsLmNsb25lKF8ubGFuZ3VhZ2VzW2lkXSk7XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiByZWRlZikge1xuXHRcdFx0XHRsYW5nW2tleV0gPSByZWRlZltrZXldO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGFuZztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW5zZXJ0IGEgdG9rZW4gYmVmb3JlIGFub3RoZXIgdG9rZW4gaW4gYSBsYW5ndWFnZSBsaXRlcmFsXG5cdFx0ICogQXMgdGhpcyBuZWVkcyB0byByZWNyZWF0ZSB0aGUgb2JqZWN0ICh3ZSBjYW5ub3QgYWN0dWFsbHkgaW5zZXJ0IGJlZm9yZSBrZXlzIGluIG9iamVjdCBsaXRlcmFscyksXG5cdFx0ICogd2UgY2Fubm90IGp1c3QgcHJvdmlkZSBhbiBvYmplY3QsIHdlIG5lZWQgYW4gb2JqZWN0IGFuZCBhIGtleS5cblx0XHQgKiBAcGFyYW0gaW5zaWRlIFRoZSBrZXkgKG9yIGxhbmd1YWdlIGlkKSBvZiB0aGUgcGFyZW50XG5cdFx0ICogQHBhcmFtIGJlZm9yZSBUaGUga2V5IHRvIGluc2VydCBiZWZvcmUuXG5cdFx0ICogQHBhcmFtIGluc2VydCBPYmplY3Qgd2l0aCB0aGUga2V5L3ZhbHVlIHBhaXJzIHRvIGluc2VydFxuXHRcdCAqIEBwYXJhbSByb290IFRoZSBvYmplY3QgdGhhdCBjb250YWlucyBgaW5zaWRlYC4gSWYgZXF1YWwgdG8gUHJpc20ubGFuZ3VhZ2VzLCBpdCBjYW4gYmUgb21pdHRlZC5cblx0XHQgKi9cblx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG5cdFx0XHRyb290ID0gcm9vdCB8fCBfLmxhbmd1YWdlcztcblx0XHRcdHZhciBncmFtbWFyID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0dmFyIHJldCA9IHt9O1xuXG5cdFx0XHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0XHRcdGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuID09IGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbmV3VG9rZW4gaW4gaW5zZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpbnNlcnQuaGFzT3duUHJvcGVydHkobmV3VG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0W25ld1Rva2VuXSA9IGluc2VydFtuZXdUb2tlbl07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEbyBub3QgaW5zZXJ0IHRva2VuIHdoaWNoIGFsc28gb2NjdXIgaW4gaW5zZXJ0LiBTZWUgIzE1MjVcblx0XHRcdFx0XHRpZiAoIWluc2VydC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblx0XHRcdFx0XHRcdHJldFt0b2tlbl0gPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIG9sZCA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdHJvb3RbaW5zaWRlXSA9IHJldDtcblxuXHRcdFx0Ly8gVXBkYXRlIHJlZmVyZW5jZXMgaW4gb3RoZXIgbGFuZ3VhZ2UgZGVmaW5pdGlvbnNcblx0XHRcdF8ubGFuZ3VhZ2VzLkRGUyhfLmxhbmd1YWdlcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IG9sZCAmJiBrZXkgIT0gaW5zaWRlKSB7XG5cdFx0XHRcdFx0dGhpc1trZXldID0gcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0Ly8gVHJhdmVyc2UgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHdpdGggRGVwdGggRmlyc3QgU2VhcmNoXG5cdFx0REZTOiBmdW5jdGlvbiBERlMobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHR2YXIgb2JqSWQgPSBfLnV0aWwub2JqSWQ7XG5cblx0XHRcdGZvciAodmFyIGkgaW4gbykge1xuXHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwobywgaSwgb1tpXSwgdHlwZSB8fCBpKTtcblxuXHRcdFx0XHRcdHZhciBwcm9wZXJ0eSA9IG9baV0sXG5cdFx0XHRcdFx0ICAgIHByb3BlcnR5VHlwZSA9IF8udXRpbC50eXBlKHByb3BlcnR5KTtcblxuXHRcdFx0XHRcdGlmIChwcm9wZXJ0eVR5cGUgPT09ICdPYmplY3QnICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBudWxsLCB2aXNpdGVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocHJvcGVydHlUeXBlID09PSAnQXJyYXknICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBpLCB2aXNpdGVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHBsdWdpbnM6IHt9LFxuXG5cdGhpZ2hsaWdodEFsbDogZnVuY3Rpb24oYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Xy5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKTtcblx0fSxcblxuXHRoaWdobGlnaHRBbGxVbmRlcjogZnVuY3Rpb24oY29udGFpbmVyLCBhc3luYywgY2FsbGJhY2spIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrLFxuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsXG5cdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdH07XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHRlbnYuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW52LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3RvcikpO1xuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1hbGwtZWxlbWVudHMtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBlbGVtZW50OyBlbGVtZW50ID0gZW52LmVsZW1lbnRzW2krK107KSB7XG5cdFx0XHRfLmhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCwgYXN5bmMgPT09IHRydWUsIGVudi5jYWxsYmFjayk7XG5cdFx0fVxuXHR9LFxuXG5cdGhpZ2hsaWdodEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdC8vIEZpbmQgbGFuZ3VhZ2Vcblx0XHR2YXIgbGFuZ3VhZ2UgPSBfLnV0aWwuZ2V0TGFuZ3VhZ2UoZWxlbWVudCk7XG5cdFx0dmFyIGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIGVsZW1lbnQsIGlmIG5vdCBwcmVzZW50XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKGxhbmcsICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykgKyAnIGxhbmd1YWdlLScgKyBsYW5ndWFnZTtcblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgcGFyZW50LCBmb3Igc3R5bGluZ1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3ByZScpIHtcblx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlLFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGNvZGU6IGNvZGVcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0ZW52LmhpZ2hsaWdodGVkQ29kZSA9IGhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1pbnNlcnQnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItaGlnaGxpZ2h0JywgZW52KTtcblx0XHRcdF8uaG9va3MucnVuKCdjb21wbGV0ZScsIGVudik7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXNhbml0eS1jaGVjaycsIGVudik7XG5cblx0XHRpZiAoIWVudi5jb2RlKSB7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuZ3JhbW1hcikge1xuXHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHR2YXIgd29ya2VyID0gbmV3IFdvcmtlcihfLmZpbGVuYW1lKTtcblxuXHRcdFx0d29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoZXZ0LmRhdGEpO1xuXHRcdFx0fTtcblxuXHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0bGFuZ3VhZ2U6IGVudi5sYW5ndWFnZSxcblx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNvZGU6IHRleHQsXG5cdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdFx0fTtcblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRlbnYudG9rZW5zID0gXy50b2tlbml6ZShlbnYuY29kZSwgZW52LmdyYW1tYXIpO1xuXHRcdF8uaG9va3MucnVuKCdhZnRlci10b2tlbml6ZScsIGVudik7XG5cdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShfLnV0aWwuZW5jb2RlKGVudi50b2tlbnMpLCBlbnYubGFuZ3VhZ2UpO1xuXHR9LFxuXG5cdHRva2VuaXplOiBmdW5jdGlvbih0ZXh0LCBncmFtbWFyKSB7XG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cdFx0aWYgKHJlc3QpIHtcblx0XHRcdGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcblx0XHRcdFx0Z3JhbW1hclt0b2tlbl0gPSByZXN0W3Rva2VuXTtcblx0XHRcdH1cblxuXHRcdFx0ZGVsZXRlIGdyYW1tYXIucmVzdDtcblx0XHR9XG5cblx0XHR2YXIgdG9rZW5MaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIHRva2VuTGlzdC5oZWFkLCB0ZXh0KTtcblxuXHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIHRva2VuTGlzdC5oZWFkLCAwKTtcblxuXHRcdHJldHVybiB0b0FycmF5KHRva2VuTGlzdCk7XG5cdH0sXG5cblx0aG9va3M6IHtcblx0XHRhbGw6IHt9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBob29rcyA9IF8uaG9va3MuYWxsO1xuXG5cdFx0XHRob29rc1tuYW1lXSA9IGhvb2tzW25hbWVdIHx8IFtdO1xuXG5cdFx0XHRob29rc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXG5cdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tzID0gXy5ob29rcy5hbGxbbmFtZV07XG5cblx0XHRcdGlmICghY2FsbGJhY2tzIHx8ICFjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaT0wLCBjYWxsYmFjazsgY2FsbGJhY2sgPSBjYWxsYmFja3NbaSsrXTspIHtcblx0XHRcdFx0Y2FsbGJhY2soZW52KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0VG9rZW46IFRva2VuXG59O1xuXG5fc2VsZi5QcmlzbSA9IF87XG5cbmZ1bmN0aW9uIFRva2VuKHR5cGUsIGNvbnRlbnQsIGFsaWFzLCBtYXRjaGVkU3RyLCBncmVlZHkpIHtcblx0dGhpcy50eXBlID0gdHlwZTtcblx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHQvLyBDb3B5IG9mIHRoZSBmdWxsIHN0cmluZyB0aGlzIHRva2VuIHdhcyBjcmVhdGVkIGZyb21cblx0dGhpcy5sZW5ndGggPSAobWF0Y2hlZFN0ciB8fCAnJykubGVuZ3RofDA7XG5cdHRoaXMuZ3JlZWR5ID0gISFncmVlZHk7XG59XG5cblRva2VuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShvLCBsYW5ndWFnZSkge1xuXHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbztcblx0fVxuXHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdHZhciBzID0gJyc7XG5cdFx0by5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHM7XG5cdH1cblxuXHR2YXIgZW52ID0ge1xuXHRcdHR5cGU6IG8udHlwZSxcblx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0dGFnOiAnc3BhbicsXG5cdFx0Y2xhc3NlczogWyd0b2tlbicsIG8udHlwZV0sXG5cdFx0YXR0cmlidXRlczoge30sXG5cdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdH07XG5cblx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRpZiAoYWxpYXNlcykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFsaWFzZXMpKSB7XG5cdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVudi5jbGFzc2VzLnB1c2goYWxpYXNlcyk7XG5cdFx0fVxuXHR9XG5cblx0Xy5ob29rcy5ydW4oJ3dyYXAnLCBlbnYpO1xuXG5cdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdGZvciAodmFyIG5hbWUgaW4gZW52LmF0dHJpYnV0ZXMpIHtcblx0XHRhdHRyaWJ1dGVzICs9ICcgJyArIG5hbWUgKyAnPVwiJyArIChlbnYuYXR0cmlidXRlc1tuYW1lXSB8fCAnJykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpICsgJ1wiJztcblx0fVxuXG5cdHJldHVybiAnPCcgKyBlbnYudGFnICsgJyBjbGFzcz1cIicgKyBlbnYuY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICsgYXR0cmlidXRlcyArICc+JyArIGVudi5jb250ZW50ICsgJzwvJyArIGVudi50YWcgKyAnPic7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge0xpbmtlZExpc3Q8c3RyaW5nIHwgVG9rZW4+fSB0b2tlbkxpc3RcbiAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG4gKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPHN0cmluZyB8IFRva2VuPn0gc3RhcnROb2RlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRQb3NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uZXNob3Q9ZmFsc2VdXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldF1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgb25lc2hvdCwgdGFyZ2V0KSB7XG5cdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRpZiAoIWdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pIHx8ICFncmFtbWFyW3Rva2VuXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHBhdHRlcm5zID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0cGF0dGVybnMgPSBBcnJheS5pc0FycmF5KHBhdHRlcm5zKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09IHRva2VuICsgJywnICsgaikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJuID0gcGF0dGVybnNbal0sXG5cdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRsb29rYmVoaW5kID0gISFwYXR0ZXJuLmxvb2tiZWhpbmQsXG5cdFx0XHRcdGdyZWVkeSA9ICEhcGF0dGVybi5ncmVlZHksXG5cdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRhbGlhcyA9IHBhdHRlcm4uYWxpYXM7XG5cblx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm4ucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdHZhciBmbGFncyA9IHBhdHRlcm4ucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW1zdXldKiQvKVswXTtcblx0XHRcdFx0cGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdH1cblxuXHRcdFx0cGF0dGVybiA9IHBhdHRlcm4ucGF0dGVybiB8fCBwYXR0ZXJuO1xuXG5cdFx0XHRmb3IgKCAvLyBpdGVyYXRlIHRoZSB0b2tlbiBsaXN0IGFuZCBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHRva2VuL3N0cmluZyBwb3NpdGlvblxuXHRcdFx0XHR2YXIgY3VycmVudE5vZGUgPSBzdGFydE5vZGUubmV4dCwgcG9zID0gc3RhcnRQb3M7XG5cdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0cG9zICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aCwgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG5cdFx0XHQpIHtcblxuXHRcdFx0XHR2YXIgc3RyID0gY3VycmVudE5vZGUudmFsdWU7XG5cblx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdC8vIFNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLCBBQk9SVCwgQUJPUlQhXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHN0ciBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcmVtb3ZlQ291bnQgPSAxOyAvLyB0aGlzIGlzIHRoZSB0byBwYXJhbWV0ZXIgb2YgcmVtb3ZlQmV0d2VlblxuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgY3VycmVudE5vZGUgIT0gdG9rZW5MaXN0LnRhaWwucHJldikge1xuXHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gcG9zO1xuXHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgJiYgbWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKTtcblx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHR2YXIgcCA9IHBvcztcblxuXHRcdFx0XHRcdC8vIGZpbmQgdGhlIG5vZGUgdGhhdCBjb250YWlucyB0aGUgbWF0Y2hcblx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWRqdXN0IHBvcyAoYW5kIHApXG5cdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0cG9zID0gcDtcblxuXHRcdFx0XHRcdC8vIHRoZSBjdXJyZW50IG5vZGUgaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0Zm9yIChcblx0XHRcdFx0XHRcdHZhciBrID0gY3VycmVudE5vZGU7XG5cdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8ICh0eXBlb2Ygay52YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWsucHJldi52YWx1ZS5ncmVlZHkpKTtcblx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUNvdW50Kys7XG5cdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdmVDb3VudC0tO1xuXG5cdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG5cdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuXHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyhzdHIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdGlmIChvbmVzaG90KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChsb29rYmVoaW5kKSB7XG5cdFx0XHRcdFx0bG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyBsb29rYmVoaW5kTGVuZ3RoLFxuXHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCksXG5cdFx0XHRcdFx0dG8gPSBmcm9tICsgbWF0Y2gubGVuZ3RoLFxuXHRcdFx0XHRcdGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKSxcblx0XHRcdFx0XHRhZnRlciA9IHN0ci5zbGljZSh0byk7XG5cblx0XHRcdFx0dmFyIHJlbW92ZUZyb20gPSBjdXJyZW50Tm9kZS5wcmV2O1xuXG5cdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRyZW1vdmVGcm9tID0gYWRkQWZ0ZXIodG9rZW5MaXN0LCByZW1vdmVGcm9tLCBiZWZvcmUpO1xuXHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVtb3ZlUmFuZ2UodG9rZW5MaXN0LCByZW1vdmVGcm9tLCByZW1vdmVDb3VudCk7XG5cblx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZSA/IF8udG9rZW5pemUobWF0Y2gsIGluc2lkZSkgOiBtYXRjaCwgYWxpYXMsIG1hdGNoLCBncmVlZHkpO1xuXHRcdFx0XHRjdXJyZW50Tm9kZSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgd3JhcHBlZCk7XG5cblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWRkQWZ0ZXIodG9rZW5MaXN0LCBjdXJyZW50Tm9kZSwgYWZ0ZXIpO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHRpZiAocmVtb3ZlQ291bnQgPiAxKVxuXHRcdFx0XHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIGN1cnJlbnROb2RlLnByZXYsIHBvcywgdHJ1ZSwgdG9rZW4gKyAnLCcgKyBqKTtcblxuXHRcdFx0XHRpZiAob25lc2hvdClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBMaW5rZWRMaXN0Tm9kZVxuICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IHByZXYgVGhlIHByZXZpb3VzIG5vZGUuXG4gKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gbmV4dCBUaGUgbmV4dCBub2RlLlxuICogQHRlbXBsYXRlIFRcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG5cdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdHZhciBoZWFkID0geyB2YWx1ZTogbnVsbCwgcHJldjogbnVsbCwgbmV4dDogbnVsbCB9O1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0aGVhZC5uZXh0ID0gdGFpbDtcblxuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR0aGlzLmhlYWQgPSBoZWFkO1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR0aGlzLnRhaWwgPSB0YWlsO1xuXHR0aGlzLmxlbmd0aCA9IDA7XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG4gKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG4gKiBAcGFyYW0ge1R9IHZhbHVlXG4gKiBAcmV0dXJucyB7TGlua2VkTGlzdE5vZGU8VD59IFRoZSBhZGRlZCBub2RlLlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gYWRkQWZ0ZXIobGlzdCwgbm9kZSwgdmFsdWUpIHtcblx0Ly8gYXNzdW1lcyB0aGF0IG5vZGUgIT0gbGlzdC50YWlsICYmIHZhbHVlcy5sZW5ndGggPj0gMFxuXHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHR2YXIgbmV3Tm9kZSA9IHsgdmFsdWU6IHZhbHVlLCBwcmV2OiBub2RlLCBuZXh0OiBuZXh0IH07XG5cdG5vZGUubmV4dCA9IG5ld05vZGU7XG5cdG5leHQucHJldiA9IG5ld05vZGU7XG5cdGxpc3QubGVuZ3RoKys7XG5cblx0cmV0dXJuIG5ld05vZGU7XG59XG4vKipcbiAqIFJlbW92ZXMgYGNvdW50YCBub2RlcyBhZnRlciB0aGUgZ2l2ZW4gbm9kZS4gVGhlIGdpdmVuIG5vZGUgd2lsbCBub3QgYmUgcmVtb3ZlZC5cbiAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAdGVtcGxhdGUgVFxuICovXG5mdW5jdGlvbiByZW1vdmVSYW5nZShsaXN0LCBub2RlLCBjb3VudCkge1xuXHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudCAmJiBuZXh0ICE9PSBsaXN0LnRhaWw7IGkrKykge1xuXHRcdG5leHQgPSBuZXh0Lm5leHQ7XG5cdH1cblx0bm9kZS5uZXh0ID0gbmV4dDtcblx0bmV4dC5wcmV2ID0gbm9kZTtcblx0bGlzdC5sZW5ndGggLT0gaTtcbn1cbi8qKlxuICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG4gKiBAcmV0dXJucyB7VFtdfVxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XG5cdHZhciBhcnJheSA9IFtdO1xuXHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHR3aGlsZSAobm9kZSAhPT0gbGlzdC50YWlsKSB7XG5cdFx0YXJyYXkucHVzaChub2RlLnZhbHVlKTtcblx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuXG5pZiAoIV9zZWxmLmRvY3VtZW50KSB7XG5cdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdC8vIGluIE5vZGUuanNcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHQvLyBJbiB3b3JrZXJcblx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKSxcblx0XHRcdFx0bGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGUgPSBtZXNzYWdlLmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0X3NlbGYucG9zdE1lc3NhZ2UoXy5oaWdobGlnaHQoY29kZSwgXy5sYW5ndWFnZXNbbGFuZ10sIGxhbmcpKTtcblx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG5cdHJldHVybiBfO1xufVxuXG4vL0dldCBjdXJyZW50IHNjcmlwdCBhbmQgaGlnaGxpZ2h0XG52YXIgc2NyaXB0ID0gXy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuaWYgKHNjcmlwdCkge1xuXHRfLmZpbGVuYW1lID0gc2NyaXB0LnNyYztcblxuXHRpZiAoc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdF8ubWFudWFsID0gdHJ1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2soKSB7XG5cdGlmICghXy5tYW51YWwpIHtcblx0XHRfLmhpZ2hsaWdodEFsbCgpO1xuXHR9XG59XG5cbmlmICghXy5tYW51YWwpIHtcblx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwibG9hZGluZ1wiLCB0aGVuIHdlJ2xsIHVzZSBET01Db250ZW50TG9hZGVkLlxuXHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJpbnRlcmFjdGl2ZVwiIGFuZCB0aGUgcHJpc20uanMgc2NyaXB0IGlzIGRlZmVycmVkLCB0aGVuIHdlJ2xsIGFsc28gdXNlIHRoZVxuXHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHQvLyBtaWdodCB0YWtlIGxvbmdlciBvbmUgYW5pbWF0aW9uIGZyYW1lIHRvIGV4ZWN1dGUgd2hpY2ggY2FuIGNyZWF0ZSBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIG9ubHkgc29tZSBwbHVnaW5zIGhhdmVcblx0Ly8gYmVlbiBsb2FkZWQgd2hlbiBQcmlzbS5oaWdobGlnaHRBbGwoKSBpcyBleGVjdXRlZCwgZGVwZW5kaW5nIG9uIGhvdyBmYXN0IHJlc291cmNlcyBhcmUgbG9hZGVkLlxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuXHRpZiAocmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnIHx8IHJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgc2NyaXB0ICYmIHNjcmlwdC5kZWZlcikge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaywgMTYpO1xuXHRcdH1cblx0fVxufVxuXG5yZXR1cm4gXztcblxufSkoX3NlbGYpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG4iLCIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXStbXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdydWxlJzogL15AW1xcdy1dKy8sXG5cdFx0XHRcdCdzZWxlY3Rvci1mdW5jdGlvbi1hcmd1bWVudCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcYnNlbGVjdG9yXFxzKlxcKCg/IVxccypcXCkpXFxzKikoPzpbXigpXXxcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSkrPyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ3VybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfFteXFxuXFxyKCldKilcXFxcKScsICdpJyksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL151cmwvaSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzZWxlY3Rvcic6IFJlZ0V4cCgnW157fVxcXFxzXSg/Oltee307XCJcXCddfCcgKyBzdHJpbmcuc291cmNlICsgJykqPyg/PVxcXFxzKlxcXFx7KScpLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IC9bLV9hLXpcXHhBMC1cXHVGRkZGXVstXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKjopL2ksXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzogL1stYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3M7XG5cblx0dmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdGlmIChtYXJrdXApIHtcblx0XHRtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLCB7XG5cdFx0XHQnc3R5bGUtYXR0cic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnYXR0ci1uYW1lJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXHMqc3R5bGUvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogbWFya3VwLnRhZy5pbnNpZGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFxzKj1cXHMqWydcIl18WydcIl1cXHMqJC8sXG5cdFx0XHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvLisvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1jc3MnXG5cdFx0XHR9XG5cdFx0fSwgbWFya3VwLnRhZyk7XG5cdH1cblxufShQcmlzbSkpO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLmdpdCA9IHtcblx0Lypcblx0ICogQSBzaW1wbGUgb25lIGxpbmUgY29tbWVudCBsaWtlIGluIGEgZ2l0IHN0YXR1cyBjb21tYW5kXG5cdCAqIEZvciBpbnN0YW5jZTpcblx0ICogJCBnaXQgc3RhdHVzXG5cdCAqICMgT24gYnJhbmNoIGluZmluaXRlLXNjcm9sbFxuXHQgKiAjIFlvdXIgYnJhbmNoIGFuZCAnb3JpZ2luL3NoYXJlZEJyYW5jaGVzL2Zyb250ZW5kVGVhbS9pbmZpbml0ZS1zY3JvbGwnIGhhdmUgZGl2ZXJnZWQsXG5cdCAqICMgYW5kIGhhdmUgMSBhbmQgMiBkaWZmZXJlbnQgY29tbWl0cyBlYWNoLCByZXNwZWN0aXZlbHkuXG5cdCAqIG5vdGhpbmcgdG8gY29tbWl0ICh3b3JraW5nIGRpcmVjdG9yeSBjbGVhbilcblx0ICovXG5cdCdjb21tZW50JzogL14jLiovbSxcblxuXHQvKlxuXHQgKiBSZWdleHAgdG8gbWF0Y2ggdGhlIGNoYW5nZWQgbGluZXMgaW4gYSBnaXQgZGlmZiBvdXRwdXQuIENoZWNrIHRoZSBleGFtcGxlIGJlbG93LlxuXHQgKi9cblx0J2RlbGV0ZWQnOiAvXlst4oCTXS4qL20sXG5cdCdpbnNlcnRlZCc6IC9eXFwrLiovbSxcblxuXHQvKlxuXHQgKiBhIHN0cmluZyAoZG91YmxlIGFuZCBzaW1wbGUgcXVvdGUpXG5cdCAqL1xuXHQnc3RyaW5nJzogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvbSxcblxuXHQvKlxuXHQgKiBhIGdpdCBjb21tYW5kLiBJdCBzdGFydHMgd2l0aCBhIHJhbmRvbSBwcm9tcHQgZmluaXNoaW5nIGJ5IGEgJCwgdGhlbiBcImdpdFwiIHRoZW4gc29tZSBvdGhlciBwYXJhbWV0ZXJzXG5cdCAqIEZvciBpbnN0YW5jZTpcblx0ICogJCBnaXQgYWRkIGZpbGUudHh0XG5cdCAqL1xuXHQnY29tbWFuZCc6IHtcblx0XHRwYXR0ZXJuOiAvXi4qXFwkIGdpdCAuKiQvbSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdC8qXG5cdFx0XHQgKiBBIGdpdCBjb21tYW5kIGNhbiBjb250YWluIGEgcGFyYW1ldGVyIHN0YXJ0aW5nIGJ5IGEgc2luZ2xlIG9yIGEgZG91YmxlIGRhc2ggZm9sbG93ZWQgYnkgYSBzdHJpbmdcblx0XHRcdCAqIEZvciBpbnN0YW5jZTpcblx0XHRcdCAqICQgZ2l0IGRpZmYgLS1jYWNoZWRcblx0XHRcdCAqICQgZ2l0IGxvZyAtcFxuXHRcdFx0ICovXG5cdFx0XHQncGFyYW1ldGVyJzogL1xccy0tP1xcdysvbVxuXHRcdH1cblx0fSxcblxuXHQvKlxuXHQgKiBDb29yZGluYXRlcyBkaXNwbGF5ZWQgaW4gYSBnaXQgZGlmZiBjb21tYW5kXG5cdCAqIEZvciBpbnN0YW5jZTpcblx0ICogJCBnaXQgZGlmZlxuXHQgKiBkaWZmIC0tZ2l0IGZpbGUudHh0IGZpbGUudHh0XG5cdCAqIGluZGV4IDYyMTQ5NTMuLjFkNTRhNTIgMTAwNjQ0XG5cdCAqIC0tLSBmaWxlLnR4dFxuXHQgKiArKysgZmlsZS50eHRcblx0ICogQEAgLTEgKzEsMiBAQFxuXHQgKiAtSGVyZSdzIG15IHRldHggZmlsZVxuXHQgKiArSGVyZSdzIG15IHRleHQgZmlsZVxuXHQgKiArQW5kIHRoaXMgaXMgdGhlIHNlY29uZCBsaW5lXG5cdCAqL1xuXHQnY29vcmQnOiAvXkBALipAQCQvbSxcblxuXHQvKlxuXHQgKiBNYXRjaCBhIFwiY29tbWl0IFtTSEExXVwiIGxpbmUgaW4gYSBnaXQgbG9nIG91dHB1dC5cblx0ICogRm9yIGluc3RhbmNlOlxuXHQgKiAkIGdpdCBsb2dcblx0ICogY29tbWl0IGExMWExNGVmN2UyNmYyY2E2MmQ0YjM1ZWFjNDU1Y2U2MzZkMGRjMDlcblx0ICogQXV0aG9yOiBsZ2lyYXVkZWxcblx0ICogRGF0ZTogICBNb24gRmViIDE3IDExOjE4OjM0IDIwMTQgKzAxMDBcblx0ICpcblx0ICogICAgIEFkZCBvZiBhIG5ldyBsaW5lXG5cdCAqL1xuXHQnY29tbWl0X3NoYTEnOiAvXmNvbW1pdCBcXHd7NDB9JC9tXG59O1xuIiwiUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmNsaWtlWydjbGFzcy1uYW1lJ10sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtfJEEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXC4oPzpwcm90b3R5cGV8Y29uc3RydWN0b3IpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQna2V5d29yZCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi5dfFxcLlxcLlxcLlxccyopXFxiKD86YXN8YXN5bmMoPz1cXHMqKD86ZnVuY3Rpb25cXGJ8XFwofFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdF0sXG5cdCdudW1iZXInOiAvXFxiKD86KD86MFt4WF0oPzpbXFxkQS1GYS1mXSg/Ol9bXFxkQS1GYS1mXSk/KSt8MFtiQl0oPzpbMDFdKD86X1swMV0pPykrfDBbb09dKD86WzAtN10oPzpfWzAtN10pPykrKW4/fCg/OlxcZCg/Ol9cXGQpPykrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYig/OlxcZCg/Ol9cXGQpPykrXFwuPyg/OlxcZCg/Ol9cXGQpPykqfFxcQlxcLig/OlxcZCg/Ol9cXGQpPykrKSg/OltFZV1bKy1dPyg/OlxcZCg/Ol9cXGQpPykrKT8vLFxuXHQvLyBBbGxvdyBmb3IgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIChTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwODQ0NClcblx0J2Z1bmN0aW9uJzogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuXHQnb3BlcmF0b3InOiAvLS18XFwrXFwrfFxcKlxcKj0/fD0+fCYmfFxcfFxcfHxbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/Wy4/XT98W346XS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcblx0J3JlZ2V4Jzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbXiRcXHdcXHhBMC1cXHVGRkZGLlwiJ1xcXSlcXHNdKVxccyopXFwvKD86XFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1c117MCw2fSg/PSg/Olxcc3xcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKSooPzokfFtcXHJcXG4sLjs6fSlcXF1dfFxcL1xcLykpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQvLyBUaGlzIG11c3QgYmUgZGVjbGFyZWQgYmVmb3JlIGtleXdvcmQgYmVjYXVzZSB3ZSB1c2UgXCJmdW5jdGlvblwiIGluc2lkZSB0aGUgbG9vay1mb3J3YXJkXG5cdCdmdW5jdGlvbi12YXJpYWJsZSc6IHtcblx0XHRwYXR0ZXJuOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKls9Ol1cXHMqKD86YXN5bmNcXHMqKT8oPzpcXGJmdW5jdGlvblxcYnwoPzpcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKXxbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKVxccyo9PikpLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQncGFyYW1ldGVyJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrW18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXCkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvW18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo9PikvaSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccyo9PikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XFxifFxcc3xeKSg/ISg/OmFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHl8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKSg/IVskXFx3XFx4QTAtXFx1RkZGRl0pKSg/OltfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSpcXHMqKVxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9fCg/IVxcJHspW15cXFxcYF0pKmAvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL15gfGAkLyxcblx0XHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK30vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwke3x9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuIiwiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlIGlkIGFuZCBpbmRleC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5kZXhcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpbmRleCkge1xuXHRcdHJldHVybiAnX19fJyArIGxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgKyBpbmRleCArICdfX18nO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30sIHtcblx0XHRidWlsZFBsYWNlaG9sZGVyczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUb2tlbml6ZSBhbGwgaW5saW5lIHRlbXBsYXRpbmcgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgYHBsYWNlaG9sZGVyUGF0dGVybmAuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYHJlcGxhY2VGaWx0ZXJgIGlzIHByb3ZpZGVkLCBvbmx5IG1hdGNoZXMgb2YgYHBsYWNlaG9sZGVyUGF0dGVybmAgZm9yIHdoaWNoIGByZXBsYWNlRmlsdGVyYCByZXR1cm5zXG5cdFx0XHQgKiBgdHJ1ZWAgd2lsbCBiZSByZXBsYWNlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGJlZm9yZS10b2tlbml6ZWAgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cblx0XHRcdCAqIEBwYXJhbSB7KG1hdGNoOiBzdHJpbmcpID0+IGJvb2xlYW59IFtyZXBsYWNlRmlsdGVyXVxuXHRcdFx0ICovXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UsIHBsYWNlaG9sZGVyUGF0dGVybiwgcmVwbGFjZUZpbHRlcikge1xuXHRcdFx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0b2tlblN0YWNrID0gZW52LnRva2VuU3RhY2sgPSBbXTtcblxuXHRcdFx0XHRlbnYuY29kZSA9IGVudi5jb2RlLnJlcGxhY2UocGxhY2Vob2xkZXJQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2VGaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXJlcGxhY2VGaWx0ZXIobWF0Y2gpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBpID0gdG9rZW5TdGFjay5sZW5ndGg7XG5cdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIGV4aXN0aW5nIHN0cmluZ3Ncblx0XHRcdFx0XHR3aGlsZSAoZW52LmNvZGUuaW5kZXhPZihwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpKSkgIT09IC0xKVxuXHRcdFx0XHRcdFx0KytpO1xuXG5cdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgc3BhcnNlIGFycmF5XG5cdFx0XHRcdFx0dG9rZW5TdGFja1tpXSA9IG1hdGNoO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgdG8gbWFya3VwXG5cdFx0XHRcdGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRva2VuaXplUGxhY2Vob2xkZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYWZ0ZXItdG9rZW5pemVgIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuXHRcdFx0ICovXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UpIHtcblx0XHRcdFx0aWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UgfHwgIWVudi50b2tlblN0YWNrKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcblx0XHRcdFx0ZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdFx0XHRcdHZhciBqID0gMDtcblx0XHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnYudG9rZW5TdGFjayk7XG5cblx0XHRcdFx0ZnVuY3Rpb24gd2Fsa1Rva2Vucyh0b2tlbnMpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Ly8gYWxsIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgYWxyZWFkeVxuXHRcdFx0XHRcdFx0aWYgKGogPj0ga2V5cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnIHx8ICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGsgPSBrZXlzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgdCA9IGVudi50b2tlblN0YWNrW2tdO1xuXHRcdFx0XHRcdFx0XHR2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBrKTtcblxuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdCsrajtcblxuXHRcdFx0XHRcdFx0XHRcdHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihsYW5ndWFnZSwgUHJpc20udG9rZW5pemUodCwgZW52LmdyYW1tYXIpLCAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlLCB0KTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzLnN1YnN0cmluZyhpbmRleCArIHBsYWNlaG9sZGVyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVwbGFjZW1lbnQgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2FmdGVyXSkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRva2VuLmNvbnRlbnQgLyogJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnICovKSB7XG5cdFx0XHRcdFx0XHRcdHdhbGtUb2tlbnModG9rZW4uY29udGVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdhbGtUb2tlbnMoZW52LnRva2Vucyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxufShQcmlzbSkpO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiAvPCEtLVtcXHNcXFNdKj8tLT4vLFxuXHQncHJvbG9nJzogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdCdkb2N0eXBlJzoge1xuXHRcdHBhdHRlcm46IC88IURPQ1RZUEUoPzpbXj5cIidbXFxdXXxcIlteXCJdKlwifCdbXiddKicpKyg/OlxcWyg/Oig/ITwhLS0pW15cIidcXF1dfFwiW15cIl0qXCJ8J1teJ10qJ3w8IS0tW1xcc1xcU10qPy0tPikqXFxdXFxzKik/Pi9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2RhdGEnOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0L149Lyxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IC8mIz9bXFxkYS16XXsxLDh9Oy9pXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbihlbnYpIHtcblxuXHRpZiAoZW52LnR5cGUgPT09ICdlbnRpdHknKSB7XG5cdFx0ZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sICcmJyk7XG5cdH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRJbmxpbmVkJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGA8c3R5bGU+YCB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcblx0ICogY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cblx0ICogQGV4YW1wbGVcblx0ICogYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gYWRkSW5saW5lZCh0YWdOYW1lLCBsYW5nKSB7XG5cdFx0dmFyIGluY2x1ZGVkQ2RhdGFJbnNpZGUgPSB7fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvKF48IVxcW0NEQVRBXFxbKVtcXHNcXFNdKz8oPz1cXF1cXF0+JCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnY2RhdGEnXSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pO1xuXG5cdFx0dmFyIGluc2lkZSA9IHtcblx0XHRcdCdpbmNsdWRlZC1jZGF0YSc6IHtcblx0XHRcdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdFx0XHRpbnNpZGU6IGluY2x1ZGVkQ2RhdGFJbnNpZGVcblx0XHRcdH1cblx0XHR9O1xuXHRcdGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cblx0XHR2YXIgZGVmID0ge307XG5cdFx0ZGVmW3RhZ05hbWVdID0ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oPF9fW1xcc1xcU10qPz4pKD86PCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+XFxzKnxbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZSgvX18vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFnTmFtZTsgfSksICdpJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBpbnNpZGVcblx0XHR9O1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMubWF0aG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5zdmcgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuIiwiLyoqXG4gKiBPcmlnaW5hbCBieSBBYXJvbiBIYXJ1bjogaHR0cDovL2FhaGFjcmVhdGl2ZS5jb20vMjAxMi8wNy8zMS9waHAtc3ludGF4LWhpZ2hsaWdodGluZy1wcmlzbS9cbiAqIE1vZGlmaWVkIGJ5IE1pbGVzIEpvaG5zb246IGh0dHA6Ly9taWxlc2oubWVcbiAqXG4gKiBTdXBwb3J0cyB0aGUgZm9sbG93aW5nOlxuICogXHRcdC0gRXh0ZW5kcyBjbGlrZSBzeW50YXhcbiAqIFx0XHQtIFN1cHBvcnQgZm9yIFBIUCA1LjMrIChuYW1lc3BhY2VzLCB0cmFpdHMsIGdlbmVyYXRvcnMsIGV0YylcbiAqIFx0XHQtIFNtYXJ0ZXIgY29uc3RhbnQgYW5kIGZ1bmN0aW9uIG1hdGNoaW5nXG4gKlxuICogQWRkcyB0aGUgZm9sbG93aW5nIG5ldyB0b2tlbiBjbGFzc2VzOlxuICogXHRcdGNvbnN0YW50LCBkZWxpbWl0ZXIsIHZhcmlhYmxlLCBmdW5jdGlvbiwgcGFja2FnZVxuICovXG4oZnVuY3Rpb24gKFByaXNtKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5waHAgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0XHQna2V5d29yZCc6IC9cXGIoPzpfX2hhbHRfY29tcGlsZXJ8YWJzdHJhY3R8YW5kfGFycmF5fGFzfGJyZWFrfGNhbGxhYmxlfGNhc2V8Y2F0Y2h8Y2xhc3N8Y2xvbmV8Y29uc3R8Y29udGludWV8ZGVjbGFyZXxkZWZhdWx0fGRpZXxkb3xlY2hvfGVsc2V8ZWxzZWlmfGVtcHR5fGVuZGRlY2xhcmV8ZW5kZm9yfGVuZGZvcmVhY2h8ZW5kaWZ8ZW5kc3dpdGNofGVuZHdoaWxlfGV2YWx8ZXhpdHxleHRlbmRzfGZpbmFsfGZpbmFsbHl8Zm9yfGZvcmVhY2h8ZnVuY3Rpb258Z2xvYmFsfGdvdG98aWZ8aW1wbGVtZW50c3xpbmNsdWRlfGluY2x1ZGVfb25jZXxpbnN0YW5jZW9mfGluc3RlYWRvZnxpbnRlcmZhY2V8aXNzZXR8bGlzdHxuYW1lc3BhY2V8bmV3fG9yfHBhcmVudHxwcmludHxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVxdWlyZXxyZXF1aXJlX29uY2V8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dGhyb3d8dHJhaXR8dHJ5fHVuc2V0fHVzZXx2YXJ8d2hpbGV8eG9yfHlpZWxkKVxcYi9pLFxuXHRcdCdib29sZWFuJzoge1xuXHRcdFx0cGF0dGVybjogL1xcYig/OmZhbHNlfHRydWUpXFxiL2ksXG5cdFx0XHRhbGlhczogJ2NvbnN0YW50J1xuXHRcdH0sXG5cdFx0J2NvbnN0YW50JzogW1xuXHRcdFx0L1xcYltBLVpfXVtBLVowLTlfXSpcXGIvLFxuXHRcdFx0L1xcYig/Om51bGwpXFxiL2ksXG5cdFx0XSxcblx0XHQnY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiopLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdzdHJpbmcnLCB7XG5cdFx0J3NoZWxsLWNvbW1lbnQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSkjLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnY29tbWVudCdcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdjb21tZW50Jywge1xuXHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFw/PiR8XjxcXD8oPzpwaHAoPz1cXHMpfD0pPy9pLFxuXHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAna2V5d29yZCcsIHtcblx0XHQndmFyaWFibGUnOiAvXFwkKyg/OlxcdytcXGJ8KD89eykpL2ksXG5cdFx0J3BhY2thZ2UnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcXFx8bmFtZXNwYWNlXFxzK3x1c2VcXHMrKVtcXHdcXFxcXSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRwdW5jdHVhdGlvbjogL1xcXFwvXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBNdXN0IGJlIGRlZmluZWQgYWZ0ZXIgdGhlIGZ1bmN0aW9uIHBhdHRlcm5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ29wZXJhdG9yJywge1xuXHRcdCdwcm9wZXJ0eSc6IHtcblx0XHRcdHBhdHRlcm46IC8oLT4pW1xcd10rLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdH0pO1xuXG5cdHZhciBzdHJpbmdfaW50ZXJwb2xhdGlvbiA9IHtcblx0XHRwYXR0ZXJuOiAve1xcJCg/OnsoPzp7W157fV0rfXxbXnt9XSspfXxbXnt9XSkrfXwoXnxbXlxcXFx7XSlcXCQrKD86XFx3Kyg/OlxcWy4rP118LT5cXHcrKSopLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnBocFxuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdzdHJpbmcnLCB7XG5cdFx0J25vd2RvYy1zdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvPDw8JyhbXiddKyknKD86XFxyXFxuP3xcXG4pKD86LiooPzpcXHJcXG4/fFxcbikpKj9cXDE7Lyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8J1teJ10rJ3xbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PCc/fFsnO10kL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2hlcmVkb2Mtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLzw8PCg/OlwiKFteXCJdKylcIig/Olxcclxcbj98XFxuKSg/Oi4qKD86XFxyXFxuP3xcXG4pKSo/XFwxO3woW2Etel9dXFx3KikoPzpcXHJcXG4/fFxcbikoPzouKig/Olxcclxcbj98XFxuKSkqP1xcMjspL2ksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXjw8PCg/OlwiW15cIl0rXCJ8W2Etel9dXFx3Kil8W2Etel9dXFx3KjskL2ksXG5cdFx0XHRcdFx0YWxpYXM6ICdzeW1ib2wnLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148PDxcIj98W1wiO10kL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBzdHJpbmdfaW50ZXJwb2xhdGlvbiAvLyBTZWUgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzaW5nbGUtcXVvdGVkLXN0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC8nKD86XFxcXFtcXHNcXFNdfFteXFxcXCddKSonLyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0J2RvdWJsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL1wiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdpbnRlcnBvbGF0aW9uJzogc3RyaW5nX2ludGVycG9sYXRpb24gLy8gU2VlIGJlbG93XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0Ly8gVGhlIGRpZmZlcmVudCB0eXBlcyBvZiBQSFAgc3RyaW5ncyBcInJlcGxhY2VcIiB0aGUgQy1saWtlIHN0YW5kYXJkIHN0cmluZ1xuXHRkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnBocFsnc3RyaW5nJ107XG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHRpZiAoIS88XFw/Ly50ZXN0KGVudi5jb2RlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBwaHBQYXR0ZXJuID0gLzxcXD8oPzpbXlwiJy8jXXxcXC8oPyFbKi9dKXwoXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXwoPzpcXC9cXC98IykoPzpbXj9cXG5cXHJdfFxcPyg/IT4pKSooPz0kfFxcPz58W1xcclxcbl0pfFxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkpKj8oPzpcXD8+fCQpL2lnO1xuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhlbnYsICdwaHAnLCBwaHBQYXR0ZXJuKTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS50b2tlbml6ZVBsYWNlaG9sZGVycyhlbnYsICdwaHAnKTtcblx0fSk7XG5cbn0oUHJpc20pKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDEuMC4xX3dlYnBhY2tANC40My4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTkhLi9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJAMC4yMS4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXJAMS4wLjFfd2VicGFja0A0LjQzLjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDEuMC4xX3dlYnBhY2tANC40My4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTkhLi9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8ICFzZWxmLlByaXNtIHx8ICFzZWxmLmRvY3VtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbiBuYW1lIHdoaWNoIGlzIHVzZWQgYXMgYSBjbGFzcyBuYW1lIGZvciA8cHJlPiB3aGljaCBpcyBhY3RpdmF0aW5nIHRoZSBwbHVnaW5cblx0ICogQHR5cGUge1N0cmluZ31cblx0ICovXG5cdHZhciBQTFVHSU5fTkFNRSA9ICdsaW5lLW51bWJlcnMnO1xuXG5cdC8qKlxuXHQgKiBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCBmb3IgZGV0ZXJtaW5pbmcgbGluZSBicmVha3Ncblx0ICogQHR5cGUge1JlZ0V4cH1cblx0ICovXG5cdHZhciBORVdfTElORV9FWFAgPSAvXFxuKD8hJCkvZztcblxuXHQvKipcblx0ICogUmVzaXplcyBsaW5lIG51bWJlcnMgc3BhbnMgYWNjb3JkaW5nIHRvIGhlaWdodCBvZiBsaW5lIG9mIGNvZGVcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IDxwcmU+IGVsZW1lbnRcblx0ICovXG5cdHZhciBfcmVzaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0dmFyIGNvZGVTdHlsZXMgPSBnZXRTdHlsZXMoZWxlbWVudCk7XG5cdFx0dmFyIHdoaXRlU3BhY2UgPSBjb2RlU3R5bGVzWyd3aGl0ZS1zcGFjZSddO1xuXG5cdFx0aWYgKHdoaXRlU3BhY2UgPT09ICdwcmUtd3JhcCcgfHwgd2hpdGVTcGFjZSA9PT0gJ3ByZS1saW5lJykge1xuXHRcdFx0dmFyIGNvZGVFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdjb2RlJyk7XG5cdFx0XHR2YXIgbGluZU51bWJlcnNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyU2l6ZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtc2l6ZXInKTtcblx0XHRcdHZhciBjb2RlTGluZXMgPSBjb2RlRWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChORVdfTElORV9FWFApO1xuXG5cdFx0XHRpZiAoIWxpbmVOdW1iZXJTaXplcikge1xuXHRcdFx0XHRsaW5lTnVtYmVyU2l6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGxpbmVOdW1iZXJTaXplci5jbGFzc05hbWUgPSAnbGluZS1udW1iZXJzLXNpemVyJztcblxuXHRcdFx0XHRjb2RlRWxlbWVudC5hcHBlbmRDaGlsZChsaW5lTnVtYmVyU2l6ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdGNvZGVMaW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lLCBsaW5lTnVtYmVyKSB7XG5cdFx0XHRcdGxpbmVOdW1iZXJTaXplci50ZXh0Q29udGVudCA9IGxpbmUgfHwgJ1xcbic7XG5cdFx0XHRcdHZhciBsaW5lU2l6ZSA9IGxpbmVOdW1iZXJTaXplci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0XHRcdGxpbmVOdW1iZXJzV3JhcHBlci5jaGlsZHJlbltsaW5lTnVtYmVyXS5zdHlsZS5oZWlnaHQgPSBsaW5lU2l6ZSArICdweCc7XG5cdFx0XHR9KTtcblxuXHRcdFx0bGluZU51bWJlclNpemVyLnRleHRDb250ZW50ID0gJyc7XG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgc3R5bGUgZGVjbGFyYXRpb25zIGZvciB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSA6IChlbGVtZW50LmN1cnJlbnRTdHlsZSB8fCBudWxsKTtcblx0fTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlLicgKyBQTFVHSU5fTkFNRSksIF9yZXNpemVFbGVtZW50KTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdjb21wbGV0ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZiAoIWVudi5jb2RlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSBlbnYuZWxlbWVudDtcblx0XHR2YXIgcHJlID0gY29kZS5wYXJlbnROb2RlO1xuXG5cdFx0Ly8gd29ya3Mgb25seSBmb3IgPGNvZGU+IHdyYXBwZWQgaW5zaWRlIDxwcmU+IChub3QgaW5saW5lKVxuXHRcdGlmICghcHJlIHx8ICEvcHJlL2kudGVzdChwcmUubm9kZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQWJvcnQgaWYgbGluZSBudW1iZXJzIGFscmVhZHkgZXhpc3RzXG5cdFx0aWYgKGNvZGUucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1yb3dzJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgYWRkTGluZU51bWJlcnMgPSBmYWxzZTtcblx0XHR2YXIgbGluZU51bWJlcnNSZWdleCA9IC8oPzpefFxccylsaW5lLW51bWJlcnMoPzpcXHN8JCkvO1xuXG5cdFx0Zm9yICh2YXIgZWxlbWVudCA9IGNvZGU7IGVsZW1lbnQ7IGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpIHtcblx0XHRcdGlmIChsaW5lTnVtYmVyc1JlZ2V4LnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdGFkZExpbmVOdW1iZXJzID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gb25seSBhZGQgbGluZSBudW1iZXJzIGlmIDxjb2RlPiBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIGBsaW5lLW51bWJlcnNgIGNsYXNzXG5cdFx0aWYgKCFhZGRMaW5lTnVtYmVycykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgY2xhc3MgJ2xpbmUtbnVtYmVycycgZnJvbSB0aGUgPGNvZGU+XG5cdFx0Y29kZS5jbGFzc05hbWUgPSBjb2RlLmNsYXNzTmFtZS5yZXBsYWNlKGxpbmVOdW1iZXJzUmVnZXgsICcgJyk7XG5cdFx0Ly8gQWRkIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyB0byB0aGUgPHByZT5cblx0XHRpZiAoIWxpbmVOdW1iZXJzUmVnZXgudGVzdChwcmUuY2xhc3NOYW1lKSkge1xuXHRcdFx0cHJlLmNsYXNzTmFtZSArPSAnIGxpbmUtbnVtYmVycyc7XG5cdFx0fVxuXG5cdFx0dmFyIG1hdGNoID0gZW52LmNvZGUubWF0Y2goTkVXX0xJTkVfRVhQKTtcblx0XHR2YXIgbGluZXNOdW0gPSBtYXRjaCA/IG1hdGNoLmxlbmd0aCArIDEgOiAxO1xuXHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXI7XG5cblx0XHR2YXIgbGluZXMgPSBuZXcgQXJyYXkobGluZXNOdW0gKyAxKS5qb2luKCc8c3Bhbj48L3NwYW4+Jyk7XG5cblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdGxpbmVOdW1iZXJzV3JhcHBlci5jbGFzc05hbWUgPSAnbGluZS1udW1iZXJzLXJvd3MnO1xuXHRcdGxpbmVOdW1iZXJzV3JhcHBlci5pbm5lckhUTUwgPSBsaW5lcztcblxuXHRcdGlmIChwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXN0YXJ0JykpIHtcblx0XHRcdHByZS5zdHlsZS5jb3VudGVyUmVzZXQgPSAnbGluZW51bWJlciAnICsgKHBhcnNlSW50KHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSwgMTApIC0gMSk7XG5cdFx0fVxuXG5cdFx0ZW52LmVsZW1lbnQuYXBwZW5kQ2hpbGQobGluZU51bWJlcnNXcmFwcGVyKTtcblxuXHRcdF9yZXNpemVFbGVtZW50KHByZSk7XG5cblx0XHRQcmlzbS5ob29rcy5ydW4oJ2xpbmUtbnVtYmVycycsIGVudik7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnbGluZS1udW1iZXJzJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGVudi5wbHVnaW5zID0gZW52LnBsdWdpbnMgfHwge307XG5cdFx0ZW52LnBsdWdpbnMubGluZU51bWJlcnMgPSB0cnVlO1xuXHR9KTtcblxuXHQvKipcblx0ICogR2xvYmFsIGV4cG9ydHNcblx0ICovXG5cdFByaXNtLnBsdWdpbnMubGluZU51bWJlcnMgPSB7XG5cdFx0LyoqXG5cdFx0ICogR2V0IG5vZGUgZm9yIHByb3ZpZGVkIGxpbmUgbnVtYmVyXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHByZSBlbGVtZW50XG5cdFx0ICogQHBhcmFtIHtOdW1iZXJ9IG51bWJlciBsaW5lIG51bWJlclxuXHRcdCAqIEByZXR1cm4ge0VsZW1lbnR8dW5kZWZpbmVkfVxuXHRcdCAqL1xuXHRcdGdldExpbmU6IGZ1bmN0aW9uIChlbGVtZW50LCBudW1iZXIpIHtcblx0XHRcdGlmIChlbGVtZW50LnRhZ05hbWUgIT09ICdQUkUnIHx8ICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhQTFVHSU5fTkFNRSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGluZU51bWJlclJvd3MgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTdGFydCA9IHBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0JyksIDEwKSB8fCAxO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJFbmQgPSBsaW5lTnVtYmVyU3RhcnQgKyAobGluZU51bWJlclJvd3MuY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG5cblx0XHRcdGlmIChudW1iZXIgPCBsaW5lTnVtYmVyU3RhcnQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlclN0YXJ0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG51bWJlciA+IGxpbmVOdW1iZXJFbmQpIHtcblx0XHRcdFx0bnVtYmVyID0gbGluZU51bWJlckVuZDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpbmVJbmRleCA9IG51bWJlciAtIGxpbmVOdW1iZXJTdGFydDtcblxuXHRcdFx0cmV0dXJuIGxpbmVOdW1iZXJSb3dzLmNoaWxkcmVuW2xpbmVJbmRleF07XG5cdFx0fVxuXHR9O1xuXG59KCkpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdpdCdcbnJlcXVpcmUoJ3N1Ym1vZHVsZXMvcHJpc20tdHJlZXZpZXcvcHJpc20tdHJlZXZpZXcuanMnKTtcblxuXG5cbi8qKlxuICogSGlnaGxpZ2h0IGFsbCBjb2RlIHdpdGggcHJpc21qc1xuICpcbiAqL1xuZnVuY3Rpb24gaW5pdEhpZ2hsaWdodCgpIHtcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTsgLy8gSGlnaHRsaWdodCBhbGwgY29kZSB3aXRoIHByaXNtanNcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBKdXN0IGluIGNhc2Ugc29tZXRoaW5nIGxvYWRzIGluIGFmdGVyIHBhZ2UgbG9hZFxuICAgICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgICB9LCAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhpZ2hsaWdodDsiLCJpbXBvcnQge1xuICAgIG1hZ25pZmljUG9wdXBcbn0gZnJvbSAnbWFnbmlmaWMtcG9wdXAnO1xuXG5cbi8qKlxuICogIENyZWF0ZSBzZXR1cCBmb3IgaW5kaXZpZHVhbCBnYWxsZXJ5XG4gKlxuICogQHBhcmFtIHsqfSBnYWxsZXJ5TGluayBqUXVlcnkgb2JqZWN0IChsaW5rIHRoYXQgYSB1c2VyIHdpbGwgY2xpY2sgZm9yIHRoZSBnYWxsZXJ5KVxuICovXG5mdW5jdGlvbiBwcmVwYXJlR2FsbGVyeShnYWxsZXJ5TGluaykge1xuXG4gICAgY29uc3QgaWQgPSAkKGdhbGxlcnlMaW5rKS5hdHRyKCdocmVmJyk7IC8vIEZpbmQgdGhlIGhyZWYgZnJvbSB0aGUgaWRcblxuICAgIGxldCBpbWdzID0gW107XG5cbiAgICAkKGlkKS5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8gTG9vcCB0aHJvdWdoIGVhY2ggaW1hZ2UgaW5zaWRlIHRoZSBsaW5rZWQgY29udGFpbmVyXG4gICAgICAgIGltZ3MucHVzaChcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJCh0aGlzKS5hdHRyKCdzcmMnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgYW4gb2JqZWN0IHRvIHRoZSBpbWdzIGFycmF5IHdpdGggdGhlIGltZyBzcmNcblxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgJChnYWxsZXJ5TGluaykubWFnbmlmaWNQb3B1cCh7IC8vIENyZWF0ZSBhbiBtZnAgaW5zdGFuY2UgZm9yIHRoZSBpbWFnZS5cbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuXG4vKipcbiAqIEFkZCBnYWxsZXJ5IHBvcHVwIGZ1bmN0aW9uYWxpdHlcbiAqL1xuZnVuY3Rpb24gaW5pdEdhbGxlcnlQb3B1cHMoKSB7XG5cbiAgICAkKCcubWZwLWdhbGxlcnknKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8gV2Ugd2lsbCBsb29wIHRocm91Z2ggZWFjaCBpdGVtIGluIHRoZSBnYWxsZXJ5IGxpbmtlZCB0byBvbiBhIG1mcC1nYWxsZXJ5IGxpbmtcblxuICAgICAgICBwcmVwYXJlR2FsbGVyeSh0aGlzKTtcblxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEdhbGxlcnlQb3B1cHM7IiwiaW1wb3J0IGluaXRHYWxsZXJ5UG9wdXBzIGZyb20gJy4vanMvcG9wdXBzJztcbmltcG9ydCBpbml0SGlnaGxpZ2h0IGZyb20gJy4vanMvY29kZWhpZ2hsaWdodCc7XG5cbmluaXRHYWxsZXJ5UG9wdXBzKCk7XG5cbmluaXRIaWdobGlnaHQoKTsiLCJQcmlzbS5sYW5ndWFnZXMudHJlZXZpZXcgPSB7XG5cdFwidHJlZXZpZXctcGFydFwiOiB7XG5cdFx0cGF0dGVybjogLyhefFxcbikuKy8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRcImVudHJ5LWxpbmVcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogL1xcfC0tIHzilJzilIDilIAgLyxcblx0XHRcdFx0XHRhbGlhczogXCJsaW5lLWhcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogL1xcfCAgIHzilIIgICAvLFxuXHRcdFx0XHRcdGFsaWFzOiBcImxpbmUtdlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvYC0tIHzilJTilIDilIAgLyxcblx0XHRcdFx0XHRhbGlhczogXCJsaW5lLXYtbGFzdFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvIHs0fS8sXG5cdFx0XHRcdFx0YWxpYXM6IFwibGluZS12LWdhcFwiXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRcImVudHJ5LW5hbWVcIjoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvLipcXFMuKi8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdC8vIHN5bWxpbmtcblx0XHRcdFx0XHRcIm9wZXJhdG9yXCI6IC8gLT4gLyxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24oZW52KSB7XG5cdGlmIChlbnYubGFuZ3VhZ2UgPT09ICd0cmVldmlldycpIHtcblx0XHQvLyBSZW1vdmUgbGluZSBicmVha3Ncblx0XHRpZihlbnYudHlwZSA9PT0gJ3RyZWV2aWV3LXBhcnQnKSB7XG5cdFx0XHRlbnYuY29udGVudCA9IGVudi5jb250ZW50LnJlcGxhY2UoL1xcbi9nLCcnKSsnPGJyIC8+Jztcblx0XHR9XG5cdFx0aWYoZW52LnR5cGUgPT09ICdlbnRyeS1uYW1lJykge1xuXHRcdFx0aWYoLyhefFteXFxcXF0pXFwvXFxzKiQvLnRlc3QoZW52LmNvbnRlbnQpKSB7XG5cdFx0XHRcdGVudi5jb250ZW50ID0gZW52LmNvbnRlbnQuc2xpY2UoMCwtMSk7XG5cdFx0XHRcdC8vIFRoaXMgaXMgYSBmb2xkZXJcblx0XHRcdFx0ZW52LmNsYXNzZXMucHVzaCgnZGlyJyk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmKC8oXnxbXlxcXFxdKVs9KnxdXFxzKiQvLnRlc3QoZW52LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0ZW52LmNvbnRlbnQgPSBlbnYuY29udGVudC5zbGljZSgwLC0xKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIHBhcnRzID0gZW52LmNvbnRlbnQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpO1xuXHRcdFx0XHR3aGlsZSAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHBhcnRzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0Ly8gRXguICdmb28ubWluLmpzJyB3b3VsZCBiZWNvbWUgJzxzcGFuIGNsYXNzPVwidG9rZW4ga2V5d29yZCBleHQtbWluLWpzIGV4dC1qc1wiPmZvby5taW4uanM8L3NwYW4+J1xuXHRcdFx0XHRcdGVudi5jbGFzc2VzLnB1c2goJ2V4dC0nICsgcGFydHMuam9pbignLScpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihlbnYuY29udGVudC5jaGFyQXQoMCk9PT0nLicpIHtcblx0XHRcdFx0ZW52LmNsYXNzZXMucHVzaCgnZG90ZmlsZScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==