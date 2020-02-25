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

/***/ "./node_modules/.pnpm/registry.npmjs.org/css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader/index.js?!./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader??ref--9!./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/registry.npmjs.org/css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/registry.npmjs.org/css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader/lib/css-base.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader/lib/css-base.js ***!
  \***********************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/magnific-popup/1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/magnific-popup/1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js ***!
  \******************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-clike.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-clike.js ***!
  \*************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-core.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-core.js ***!
  \************************************************************************************************************/
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
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
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

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
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

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
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

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

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

if (!_.manual) {
	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/4.41.6_webpack@4.41.6/node_modules/webpack/buildin/global.js */ "./node_modules/.pnpm/registry.npmjs.org/webpack/4.41.6_webpack@4.41.6/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-css.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-css.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': {
			pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-javascript.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-javascript.js ***!
  \******************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-markup-templating.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-markup-templating.js ***!
  \*************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-markup.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-markup.js ***!
  \**************************************************************************************************************/
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
			pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-php.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-php.js ***!
  \***********************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader??ref--9!./prism-line-numbers.css */ "./node_modules/.pnpm/registry.npmjs.org/css-loader/1.0.1_webpack@4.41.6/node_modules/css-loader/index.js?!./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "./node_modules/.pnpm/registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
  \******************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js ***!
  \**************************************************************************************************************/
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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/.pnpm/registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/urls.js");

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

/***/ "./node_modules/.pnpm/registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/urls.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/urls.js ***!
  \*********************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/webpack/4.41.6_webpack@4.41.6/node_modules/webpack/buildin/global.js":
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

var _prismCore = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-core.js");

var _prismCore2 = _interopRequireDefault(_prismCore);

__webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-clike.js");

__webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-javascript.js");

__webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-css.js");

__webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-markup.js");

__webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-markup-templating.js");

__webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/components/prism-php.js");

__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.css */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/.pnpm/registry.npmjs.org/prismjs/1.19.0/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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

var _magnificPopup = __webpack_require__(/*! magnific-popup */ "./node_modules/.pnpm/registry.npmjs.org/magnific-popup/1.1.0/node_modules/magnific-popup/dist/jquery.magnific-popup.js");

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

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wcmlzbWpzLzEuMTkuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1qcy5vcmcvY3NzLWxvYWRlci8xLjAuMV93ZWJwYWNrQDQuNDEuNi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9tYWduaWZpYy1wb3B1cC8xLjEuMC9ub2RlX21vZHVsZXMvbWFnbmlmaWMtcG9wdXAvZGlzdC9qcXVlcnkubWFnbmlmaWMtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wcmlzbWpzLzEuMTkuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNsaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1qcy5vcmcvcHJpc21qcy8xLjE5LjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1qcy5vcmcvcHJpc21qcy8xLjE5LjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wcmlzbWpzLzEuMTkuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wcmlzbWpzLzEuMTkuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cC10ZW1wbGF0aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1qcy5vcmcvcHJpc21qcy8xLjE5LjAvbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wcmlzbWpzLzEuMTkuMC9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBocC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtanMub3JnL3ByaXNtanMvMS4xOS4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3M/ZmQ4NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtanMub3JnL3ByaXNtanMvMS4xOS4wL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtanMub3JnL3N0eWxlLWxvYWRlci8wLjIxLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1qcy5vcmcvc3R5bGUtbG9hZGVyLzAuMjEuMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvZGVoaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJQcmlzbSIsInNldFRpbWVvdXQiLCJpbml0SGlnaGxpZ2h0IiwiaWQiLCIkIiwiaW1ncyIsInNyYyIsInR5cGUiLCJpdGVtcyIsImdhbGxlcnkiLCJlbmFibGVkIiwicHJlcGFyZUdhbGxlcnkiLCJpbml0R2FsbGVyeVBvcHVwcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLGtOQUEyRjtBQUM5SDs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsMkNBQTJDLHVCQUF1Qix3QkFBd0IsOEJBQThCLEdBQUcsbURBQW1ELHVCQUF1Qix5QkFBeUIsR0FBRyxzQ0FBc0Ms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OztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsaUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsRUFBRTs7QUFFOUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsR0FBRztBQUNIO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxjQUFjLGtCQUFrQixvQkFBb0IsY0FBYztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7Ozs7QUFLRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDhFQUE4RTs7QUFFOUU7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQU07O0FBRWQsT0FBTyxZQUFZOztBQUVuQixNQUFNLE1BQU07OztBQUdaO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsTUFBTTtBQUNOLDJCQUEyQjtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCOztBQUV4Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEscURBQXFEO0FBQ2xFO0FBQ0E7QUFDQSxhQUFhLHFEQUFxRDtBQUNsRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtCQUFrQixFQUFFO0FBQ3RFLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxrQkFBa0IsRUFBRSxHOzs7Ozs7Ozs7OztBQ24wRHBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esd0NBQXdDLG9CQUFvQjtBQUM1RDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixZQUFZOztBQUVaO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwwQkFBMEIsNkJBQTZCO0FBQ3ZEO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLG1CQUFtQjs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsbUVBQW1FO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDJCQUEyQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUVBQXlFO0FBQ3pFLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZLRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxpSEFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7QUFJQSx5QkFBeUI7QUFDckJBLHdCQURxQixZQUNyQkEsR0FEcUIsQ0FDQzs7QUFFdEJDLGVBQVcsWUFBTTtBQUFFO0FBQ2ZEO0FBREpDO0FBR0g7O2tCQUVjQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7QUFLQTs7Ozs7QUFLQSxxQ0FBcUM7O0FBRWpDLFFBQU1DLEtBQUtDLG9CQUZzQixNQUV0QkEsQ0FBWCxDQUZpQyxDQUVPOztBQUV4QyxRQUFJQyxPQUFKOztBQUVBRCwyQkFBdUIsWUFBWTtBQUFFO0FBQ2pDQyxrQkFFSTtBQUNJQyxpQkFBS0Y7O0FBR1Q7O0FBSkEsU0FGSkM7QUFESkQ7O0FBWUFBLGlDQUE2QixFQUFFO0FBQzNCRyxjQUR5QjtBQUV6QkMsZUFGeUI7QUFHekJDLGlCQUFTO0FBQ0xDLHFCQUFTO0FBREo7O0FBSGdCLEtBQTdCTjtBQVNIOztBQUdEOzs7QUFHQSw2QkFBNkI7O0FBRXpCQSwyQkFBdUIsWUFBWTtBQUFFOztBQUVqQ087QUFGSlA7QUFNSDs7a0JBRWNRLGlCOzs7Ozs7Ozs7Ozs7OztBQ3JEZjs7OztBQUNBOzs7Ozs7OztBQUVBOztBQUVBLCtCOzs7Ozs7Ozs7OztBQ0xBLHdCIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wb3N0LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvMS4wLjFfd2VicGFja0A0LjQxLjYvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMy44ZW07XFxuXFx0Y291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzID4gY29kZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdHRvcDogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0bGVmdDogLTMuOGVtO1xcblxcdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcblxcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk7XFxuXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuXFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxuXFx0fVxcblxcblxcdFxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGxpbmVudW1iZXIpO1xcblxcdFxcdFxcdGNvbG9yOiAjOTk5O1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdFxcdH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKiEgTWFnbmlmaWMgUG9wdXAgLSB2MS4xLjAgLSAyMDE2LTAyLTIwXG4qIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL1xuKiBDb3B5cmlnaHQgKGMpIDIwMTYgRG1pdHJ5IFNlbWVub3Y7ICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7IFxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgeyBcbiAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuIFxuIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTsgXG4gfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHsgXG4gLy8gTm9kZS9Db21tb25KUyBcbiBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTsgXG4gfSBlbHNlIHsgXG4gLy8gQnJvd3NlciBnbG9iYWxzIFxuIGZhY3Rvcnkod2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG8pOyBcbiB9IFxuIH0oZnVuY3Rpb24oJCkgeyBcblxuLyo+PmNvcmUqL1xuLyoqXG4gKiBcbiAqIE1hZ25pZmljIFBvcHVwIENvcmUgSlMgZmlsZVxuICogXG4gKi9cblxuXG4vKipcbiAqIFByaXZhdGUgc3RhdGljIGNvbnN0YW50c1xuICovXG52YXIgQ0xPU0VfRVZFTlQgPSAnQ2xvc2UnLFxuXHRCRUZPUkVfQ0xPU0VfRVZFTlQgPSAnQmVmb3JlQ2xvc2UnLFxuXHRBRlRFUl9DTE9TRV9FVkVOVCA9ICdBZnRlckNsb3NlJyxcblx0QkVGT1JFX0FQUEVORF9FVkVOVCA9ICdCZWZvcmVBcHBlbmQnLFxuXHRNQVJLVVBfUEFSU0VfRVZFTlQgPSAnTWFya3VwUGFyc2UnLFxuXHRPUEVOX0VWRU5UID0gJ09wZW4nLFxuXHRDSEFOR0VfRVZFTlQgPSAnQ2hhbmdlJyxcblx0TlMgPSAnbWZwJyxcblx0RVZFTlRfTlMgPSAnLicgKyBOUyxcblx0UkVBRFlfQ0xBU1MgPSAnbWZwLXJlYWR5Jyxcblx0UkVNT1ZJTkdfQ0xBU1MgPSAnbWZwLXJlbW92aW5nJyxcblx0UFJFVkVOVF9DTE9TRV9DTEFTUyA9ICdtZnAtcHJldmVudC1jbG9zZSc7XG5cblxuLyoqXG4gKiBQcml2YXRlIHZhcnMgXG4gKi9cbi8qanNoaW50IC1XMDc5ICovXG52YXIgbWZwLCAvLyBBcyB3ZSBoYXZlIG9ubHkgb25lIGluc3RhbmNlIG9mIE1hZ25pZmljUG9wdXAgb2JqZWN0LCB3ZSBkZWZpbmUgaXQgbG9jYWxseSB0byBub3QgdG8gdXNlICd0aGlzJ1xuXHRNYWduaWZpY1BvcHVwID0gZnVuY3Rpb24oKXt9LFxuXHRfaXNKUSA9ICEhKHdpbmRvdy5qUXVlcnkpLFxuXHRfcHJldlN0YXR1cyxcblx0X3dpbmRvdyA9ICQod2luZG93KSxcblx0X2RvY3VtZW50LFxuXHRfcHJldkNvbnRlbnRUeXBlLFxuXHRfd3JhcENsYXNzZXMsXG5cdF9jdXJyUG9wdXBUeXBlO1xuXG5cbi8qKlxuICogUHJpdmF0ZSBmdW5jdGlvbnNcbiAqL1xudmFyIF9tZnBPbiA9IGZ1bmN0aW9uKG5hbWUsIGYpIHtcblx0XHRtZnAuZXYub24oTlMgKyBuYW1lICsgRVZFTlRfTlMsIGYpO1xuXHR9LFxuXHRfZ2V0RWwgPSBmdW5jdGlvbihjbGFzc05hbWUsIGFwcGVuZFRvLCBodG1sLCByYXcpIHtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlbC5jbGFzc05hbWUgPSAnbWZwLScrY2xhc3NOYW1lO1xuXHRcdGlmKGh0bWwpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0fVxuXHRcdGlmKCFyYXcpIHtcblx0XHRcdGVsID0gJChlbCk7XG5cdFx0XHRpZihhcHBlbmRUbykge1xuXHRcdFx0XHRlbC5hcHBlbmRUbyhhcHBlbmRUbyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKGFwcGVuZFRvKSB7XG5cdFx0XHRhcHBlbmRUby5hcHBlbmRDaGlsZChlbCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fSxcblx0X21mcFRyaWdnZXIgPSBmdW5jdGlvbihlLCBkYXRhKSB7XG5cdFx0bWZwLmV2LnRyaWdnZXJIYW5kbGVyKE5TICsgZSwgZGF0YSk7XG5cblx0XHRpZihtZnAuc3QuY2FsbGJhY2tzKSB7XG5cdFx0XHQvLyBjb252ZXJ0cyBcIm1mcEV2ZW50TmFtZVwiIHRvIFwiZXZlbnROYW1lXCIgY2FsbGJhY2sgYW5kIHRyaWdnZXJzIGl0IGlmIGl0J3MgcHJlc2VudFxuXHRcdFx0ZSA9IGUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBlLnNsaWNlKDEpO1xuXHRcdFx0aWYobWZwLnN0LmNhbGxiYWNrc1tlXSkge1xuXHRcdFx0XHRtZnAuc3QuY2FsbGJhY2tzW2VdLmFwcGx5KG1mcCwgJC5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfZ2V0Q2xvc2VCdG4gPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0aWYodHlwZSAhPT0gX2N1cnJQb3B1cFR5cGUgfHwgIW1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG4pIHtcblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG4gPSAkKCBtZnAuc3QuY2xvc2VNYXJrdXAucmVwbGFjZSgnJXRpdGxlJScsIG1mcC5zdC50Q2xvc2UgKSApO1xuXHRcdFx0X2N1cnJQb3B1cFR5cGUgPSB0eXBlO1xuXHRcdH1cblx0XHRyZXR1cm4gbWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bjtcblx0fSxcblx0Ly8gSW5pdGlhbGl6ZSBNYWduaWZpYyBQb3B1cCBvbmx5IHdoZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0X2NoZWNrSW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcblx0XHRpZighJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlKSB7XG5cdFx0XHQvKmpzaGludCAtVzAyMCAqL1xuXHRcdFx0bWZwID0gbmV3IE1hZ25pZmljUG9wdXAoKTtcblx0XHRcdG1mcC5pbml0KCk7XG5cdFx0XHQkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UgPSBtZnA7XG5cdFx0fVxuXHR9LFxuXHQvLyBDU1MgdHJhbnNpdGlvbiBkZXRlY3Rpb24sIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzI2NDg5OS9kZXRlY3QtY3NzLXRyYW5zaXRpb25zLXVzaW5nLWphdmFzY3JpcHQtYW5kLXdpdGhvdXQtbW9kZXJuaXpyXG5cdHN1cHBvcnRzVHJhbnNpdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZSwgLy8gJ3MnIGZvciBzdHlsZS4gYmV0dGVyIHRvIGNyZWF0ZSBhbiBlbGVtZW50IGlmIGJvZHkgeWV0IHRvIGV4aXN0XG5cdFx0XHR2ID0gWydtcycsJ08nLCdNb3onLCdXZWJraXQnXTsgLy8gJ3YnIGZvciB2ZW5kb3JcblxuXHRcdGlmKCBzWyd0cmFuc2l0aW9uJ10gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybiB0cnVlOyBcblx0XHR9XG5cdFx0XHRcblx0XHR3aGlsZSggdi5sZW5ndGggKSB7XG5cdFx0XHRpZiggdi5wb3AoKSArICdUcmFuc2l0aW9uJyBpbiBzICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XHRcdFxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cbi8qKlxuICogUHVibGljIGZ1bmN0aW9uc1xuICovXG5NYWduaWZpY1BvcHVwLnByb3RvdHlwZSA9IHtcblxuXHRjb25zdHJ1Y3RvcjogTWFnbmlmaWNQb3B1cCxcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgTWFnbmlmaWMgUG9wdXAgcGx1Z2luLiBcblx0ICogVGhpcyBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgb25seSBvbmNlIHdoZW4gJC5mbi5tYWduaWZpY1BvcHVwIG9yICQubWFnbmlmaWNQb3B1cCBpcyBleGVjdXRlZFxuXHQgKi9cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGFwcFZlcnNpb24gPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcblx0XHRtZnAuaXNMb3dJRSA9IG1mcC5pc0lFOCA9IGRvY3VtZW50LmFsbCAmJiAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcjtcblx0XHRtZnAuaXNBbmRyb2lkID0gKC9hbmRyb2lkL2dpKS50ZXN0KGFwcFZlcnNpb24pO1xuXHRcdG1mcC5pc0lPUyA9ICgvaXBob25lfGlwYWR8aXBvZC9naSkudGVzdChhcHBWZXJzaW9uKTtcblx0XHRtZnAuc3VwcG9ydHNUcmFuc2l0aW9uID0gc3VwcG9ydHNUcmFuc2l0aW9ucygpO1xuXG5cdFx0Ly8gV2UgZGlzYWJsZSBmaXhlZCBwb3NpdGlvbmVkIGxpZ2h0Ym94IG9uIGRldmljZXMgdGhhdCBkb24ndCBoYW5kbGUgaXQgbmljZWx5LlxuXHRcdC8vIElmIHlvdSBrbm93IGEgYmV0dGVyIHdheSBvZiBkZXRlY3RpbmcgdGhpcyAtIGxldCBtZSBrbm93LlxuXHRcdG1mcC5wcm9iYWJseU1vYmlsZSA9IChtZnAuaXNBbmRyb2lkIHx8IG1mcC5pc0lPUyB8fCAvKE9wZXJhIE1pbmkpfEtpbmRsZXx3ZWJPU3xCbGFja0JlcnJ5fChPcGVyYSBNb2JpKXwoV2luZG93cyBQaG9uZSl8SUVNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICk7XG5cdFx0X2RvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cblx0XHRtZnAucG9wdXBzQ2FjaGUgPSB7fTtcblx0fSxcblxuXHQvKipcblx0ICogT3BlbnMgcG9wdXBcblx0ICogQHBhcmFtICBkYXRhIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdG9wZW46IGZ1bmN0aW9uKGRhdGEpIHtcblxuXHRcdHZhciBpO1xuXG5cdFx0aWYoZGF0YS5pc09iaiA9PT0gZmFsc2UpIHsgXG5cdFx0XHQvLyBjb252ZXJ0IGpRdWVyeSBjb2xsZWN0aW9uIHRvIGFycmF5IHRvIGF2b2lkIGNvbmZsaWN0cyBsYXRlclxuXHRcdFx0bWZwLml0ZW1zID0gZGF0YS5pdGVtcy50b0FycmF5KCk7XG5cblx0XHRcdG1mcC5pbmRleCA9IDA7XG5cdFx0XHR2YXIgaXRlbXMgPSBkYXRhLml0ZW1zLFxuXHRcdFx0XHRpdGVtO1xuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aXRlbSA9IGl0ZW1zW2ldO1xuXHRcdFx0XHRpZihpdGVtLnBhcnNlZCkge1xuXHRcdFx0XHRcdGl0ZW0gPSBpdGVtLmVsWzBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGl0ZW0gPT09IGRhdGEuZWxbMF0pIHtcblx0XHRcdFx0XHRtZnAuaW5kZXggPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5pdGVtcyA9ICQuaXNBcnJheShkYXRhLml0ZW1zKSA/IGRhdGEuaXRlbXMgOiBbZGF0YS5pdGVtc107XG5cdFx0XHRtZnAuaW5kZXggPSBkYXRhLmluZGV4IHx8IDA7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgcG9wdXAgaXMgYWxyZWFkeSBvcGVuZWQgLSB3ZSBqdXN0IHVwZGF0ZSB0aGUgY29udGVudFxuXHRcdGlmKG1mcC5pc09wZW4pIHtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRtZnAudHlwZXMgPSBbXTsgXG5cdFx0X3dyYXBDbGFzc2VzID0gJyc7XG5cdFx0aWYoZGF0YS5tYWluRWwgJiYgZGF0YS5tYWluRWwubGVuZ3RoKSB7XG5cdFx0XHRtZnAuZXYgPSBkYXRhLm1haW5FbC5lcSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLmV2ID0gX2RvY3VtZW50O1xuXHRcdH1cblxuXHRcdGlmKGRhdGEua2V5KSB7XG5cdFx0XHRpZighbWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XSkge1xuXHRcdFx0XHRtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldID0ge307XG5cdFx0XHR9XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlID0gbWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IHt9O1xuXHRcdH1cblxuXG5cblx0XHRtZnAuc3QgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLCBkYXRhICk7IFxuXHRcdG1mcC5maXhlZENvbnRlbnRQb3MgPSBtZnAuc3QuZml4ZWRDb250ZW50UG9zID09PSAnYXV0bycgPyAhbWZwLnByb2JhYmx5TW9iaWxlIDogbWZwLnN0LmZpeGVkQ29udGVudFBvcztcblxuXHRcdGlmKG1mcC5zdC5tb2RhbCkge1xuXHRcdFx0bWZwLnN0LmNsb3NlT25Db250ZW50Q2xpY2sgPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5jbG9zZU9uQmdDbGljayA9IGZhbHNlO1xuXHRcdFx0bWZwLnN0LnNob3dDbG9zZUJ0biA9IGZhbHNlO1xuXHRcdFx0bWZwLnN0LmVuYWJsZUVzY2FwZUtleSA9IGZhbHNlO1xuXHRcdH1cblx0XHRcblxuXHRcdC8vIEJ1aWxkaW5nIG1hcmt1cFxuXHRcdC8vIG1haW4gY29udGFpbmVycyBhcmUgY3JlYXRlZCBvbmx5IG9uY2Vcblx0XHRpZighbWZwLmJnT3ZlcmxheSkge1xuXG5cdFx0XHQvLyBEYXJrIG92ZXJsYXlcblx0XHRcdG1mcC5iZ092ZXJsYXkgPSBfZ2V0RWwoJ2JnJykub24oJ2NsaWNrJytFVkVOVF9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdG1mcC53cmFwID0gX2dldEVsKCd3cmFwJykuYXR0cigndGFiaW5kZXgnLCAtMSkub24oJ2NsaWNrJytFVkVOVF9OUywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZihtZnAuX2NoZWNrSWZDbG9zZShlLnRhcmdldCkpIHtcblx0XHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdG1mcC5jb250YWluZXIgPSBfZ2V0RWwoJ2NvbnRhaW5lcicsIG1mcC53cmFwKTtcblx0XHR9XG5cblx0XHRtZnAuY29udGVudENvbnRhaW5lciA9IF9nZXRFbCgnY29udGVudCcpO1xuXHRcdGlmKG1mcC5zdC5wcmVsb2FkZXIpIHtcblx0XHRcdG1mcC5wcmVsb2FkZXIgPSBfZ2V0RWwoJ3ByZWxvYWRlcicsIG1mcC5jb250YWluZXIsIG1mcC5zdC50TG9hZGluZyk7XG5cdFx0fVxuXG5cblx0XHQvLyBJbml0aWFsaXppbmcgbW9kdWxlc1xuXHRcdHZhciBtb2R1bGVzID0gJC5tYWduaWZpY1BvcHVwLm1vZHVsZXM7XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG4gPSBtb2R1bGVzW2ldO1xuXHRcdFx0biA9IG4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuLnNsaWNlKDEpO1xuXHRcdFx0bWZwWydpbml0JytuXS5jYWxsKG1mcCk7XG5cdFx0fVxuXHRcdF9tZnBUcmlnZ2VyKCdCZWZvcmVPcGVuJyk7XG5cblxuXHRcdGlmKG1mcC5zdC5zaG93Q2xvc2VCdG4pIHtcblx0XHRcdC8vIENsb3NlIGJ1dHRvblxuXHRcdFx0aWYoIW1mcC5zdC5jbG9zZUJ0bkluc2lkZSkge1xuXHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoIF9nZXRDbG9zZUJ0bigpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfbWZwT24oTUFSS1VQX1BBUlNFX0VWRU5ULCBmdW5jdGlvbihlLCB0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG5cdFx0XHRcdFx0dmFsdWVzLmNsb3NlX3JlcGxhY2VXaXRoID0gX2dldENsb3NlQnRuKGl0ZW0udHlwZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtY2xvc2UtYnRuLWluJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihtZnAuc3QuYWxpZ25Ub3ApIHtcblx0XHRcdF93cmFwQ2xhc3NlcyArPSAnIG1mcC1hbGlnbi10b3AnO1xuXHRcdH1cblxuXHRcblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdG1mcC53cmFwLmNzcyh7XG5cdFx0XHRcdG92ZXJmbG93OiBtZnAuc3Qub3ZlcmZsb3dZLFxuXHRcdFx0XHRvdmVyZmxvd1g6ICdoaWRkZW4nLFxuXHRcdFx0XHRvdmVyZmxvd1k6IG1mcC5zdC5vdmVyZmxvd1lcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAud3JhcC5jc3MoeyBcblx0XHRcdFx0dG9wOiBfd2luZG93LnNjcm9sbFRvcCgpLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmKCBtZnAuc3QuZml4ZWRCZ1BvcyA9PT0gZmFsc2UgfHwgKG1mcC5zdC5maXhlZEJnUG9zID09PSAnYXV0bycgJiYgIW1mcC5maXhlZENvbnRlbnRQb3MpICkge1xuXHRcdFx0bWZwLmJnT3ZlcmxheS5jc3Moe1xuXHRcdFx0XHRoZWlnaHQ6IF9kb2N1bWVudC5oZWlnaHQoKSxcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZSdcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdFxuXG5cdFx0aWYobWZwLnN0LmVuYWJsZUVzY2FwZUtleSkge1xuXHRcdFx0Ly8gQ2xvc2Ugb24gRVNDIGtleVxuXHRcdFx0X2RvY3VtZW50Lm9uKCdrZXl1cCcgKyBFVkVOVF9OUywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZihlLmtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdF93aW5kb3cub24oJ3Jlc2l6ZScgKyBFVkVOVF9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudXBkYXRlU2l6ZSgpO1xuXHRcdH0pO1xuXG5cblx0XHRpZighbWZwLnN0LmNsb3NlT25Db250ZW50Q2xpY2spIHtcblx0XHRcdF93cmFwQ2xhc3NlcyArPSAnIG1mcC1hdXRvLWN1cnNvcic7XG5cdFx0fVxuXHRcdFxuXHRcdGlmKF93cmFwQ2xhc3Nlcylcblx0XHRcdG1mcC53cmFwLmFkZENsYXNzKF93cmFwQ2xhc3Nlcyk7XG5cblxuXHRcdC8vIHRoaXMgdHJpZ2dlcnMgcmVjYWxjdWxhdGlvbiBvZiBsYXlvdXQsIHNvIHdlIGdldCBpdCBvbmNlIHRvIG5vdCB0byB0cmlnZ2VyIHR3aWNlXG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9IG1mcC53SCA9IF93aW5kb3cuaGVpZ2h0KCk7XG5cblx0XHRcblx0XHR2YXIgd2luZG93U3R5bGVzID0ge307XG5cblx0XHRpZiggbWZwLmZpeGVkQ29udGVudFBvcyApIHtcbiAgICAgICAgICAgIGlmKG1mcC5faGFzU2Nyb2xsQmFyKHdpbmRvd0hlaWdodCkpe1xuICAgICAgICAgICAgICAgIHZhciBzID0gbWZwLl9nZXRTY3JvbGxiYXJTaXplKCk7XG4gICAgICAgICAgICAgICAgaWYocykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dTdHlsZXMubWFyZ2luUmlnaHQgPSBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0aWYoIW1mcC5pc0lFNykge1xuXHRcdFx0XHR3aW5kb3dTdHlsZXMub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGllNyBkb3VibGUtc2Nyb2xsIGJ1Z1xuXHRcdFx0XHQkKCdib2R5LCBodG1sJykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRcblx0XHRcblx0XHR2YXIgY2xhc3Nlc1RvYWRkID0gbWZwLnN0Lm1haW5DbGFzcztcblx0XHRpZihtZnAuaXNJRTcpIHtcblx0XHRcdGNsYXNzZXNUb2FkZCArPSAnIG1mcC1pZTcnO1xuXHRcdH1cblx0XHRpZihjbGFzc2VzVG9hZGQpIHtcblx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUCggY2xhc3Nlc1RvYWRkICk7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIGNvbnRlbnRcblx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdCdWlsZENvbnRyb2xzJyk7XG5cblx0XHQvLyByZW1vdmUgc2Nyb2xsYmFyLCBhZGQgbWFyZ2luIGUudC5jXG5cdFx0JCgnaHRtbCcpLmNzcyh3aW5kb3dTdHlsZXMpO1xuXHRcdFxuXHRcdC8vIGFkZCBldmVyeXRoaW5nIHRvIERPTVxuXHRcdG1mcC5iZ092ZXJsYXkuYWRkKG1mcC53cmFwKS5wcmVwZW5kVG8oIG1mcC5zdC5wcmVwZW5kVG8gfHwgJChkb2N1bWVudC5ib2R5KSApO1xuXG5cdFx0Ly8gU2F2ZSBsYXN0IGZvY3VzZWQgZWxlbWVudFxuXHRcdG1mcC5fbGFzdEZvY3VzZWRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0XG5cdFx0Ly8gV2FpdCBmb3IgbmV4dCBjeWNsZSB0byBhbGxvdyBDU1MgdHJhbnNpdGlvblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcblx0XHRcdGlmKG1mcC5jb250ZW50KSB7XG5cdFx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUChSRUFEWV9DTEFTUyk7XG5cdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGlmIGNvbnRlbnQgaXMgbm90IGRlZmluZWQgKG5vdCBsb2FkZWQgZS50LmMpIHdlIGFkZCBjbGFzcyBvbmx5IGZvciBCR1xuXHRcdFx0XHRtZnAuYmdPdmVybGF5LmFkZENsYXNzKFJFQURZX0NMQVNTKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gVHJhcCB0aGUgZm9jdXMgaW4gcG9wdXBcblx0XHRcdF9kb2N1bWVudC5vbignZm9jdXNpbicgKyBFVkVOVF9OUywgbWZwLl9vbkZvY3VzSW4pO1xuXG5cdFx0fSwgMTYpO1xuXG5cdFx0bWZwLmlzT3BlbiA9IHRydWU7XG5cdFx0bWZwLnVwZGF0ZVNpemUod2luZG93SGVpZ2h0KTtcblx0XHRfbWZwVHJpZ2dlcihPUEVOX0VWRU5UKTtcblxuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDbG9zZXMgdGhlIHBvcHVwXG5cdCAqL1xuXHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIW1mcC5pc09wZW4pIHJldHVybjtcblx0XHRfbWZwVHJpZ2dlcihCRUZPUkVfQ0xPU0VfRVZFTlQpO1xuXG5cdFx0bWZwLmlzT3BlbiA9IGZhbHNlO1xuXHRcdC8vIGZvciBDU1MzIGFuaW1hdGlvblxuXHRcdGlmKG1mcC5zdC5yZW1vdmFsRGVsYXkgJiYgIW1mcC5pc0xvd0lFICYmIG1mcC5zdXBwb3J0c1RyYW5zaXRpb24gKSAge1xuXHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKFJFTU9WSU5HX0NMQVNTKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG1mcC5fY2xvc2UoKTtcblx0XHRcdH0sIG1mcC5zdC5yZW1vdmFsRGVsYXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuX2Nsb3NlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBIZWxwZXIgZm9yIGNsb3NlKCkgZnVuY3Rpb25cblx0ICovXG5cdF9jbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0X21mcFRyaWdnZXIoQ0xPU0VfRVZFTlQpO1xuXG5cdFx0dmFyIGNsYXNzZXNUb1JlbW92ZSA9IFJFTU9WSU5HX0NMQVNTICsgJyAnICsgUkVBRFlfQ0xBU1MgKyAnICc7XG5cblx0XHRtZnAuYmdPdmVybGF5LmRldGFjaCgpO1xuXHRcdG1mcC53cmFwLmRldGFjaCgpO1xuXHRcdG1mcC5jb250YWluZXIuZW1wdHkoKTtcblxuXHRcdGlmKG1mcC5zdC5tYWluQ2xhc3MpIHtcblx0XHRcdGNsYXNzZXNUb1JlbW92ZSArPSBtZnAuc3QubWFpbkNsYXNzICsgJyAnO1xuXHRcdH1cblxuXHRcdG1mcC5fcmVtb3ZlQ2xhc3NGcm9tTUZQKGNsYXNzZXNUb1JlbW92ZSk7XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHR2YXIgd2luZG93U3R5bGVzID0ge21hcmdpblJpZ2h0OiAnJ307XG5cdFx0XHRpZihtZnAuaXNJRTcpIHtcblx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3dTdHlsZXMub3ZlcmZsb3cgPSAnJztcblx0XHRcdH1cblx0XHRcdCQoJ2h0bWwnKS5jc3Mod2luZG93U3R5bGVzKTtcblx0XHR9XG5cdFx0XG5cdFx0X2RvY3VtZW50Lm9mZigna2V5dXAnICsgRVZFTlRfTlMgKyAnIGZvY3VzaW4nICsgRVZFTlRfTlMpO1xuXHRcdG1mcC5ldi5vZmYoRVZFTlRfTlMpO1xuXG5cdFx0Ly8gY2xlYW4gdXAgRE9NIGVsZW1lbnRzIHRoYXQgYXJlbid0IHJlbW92ZWRcblx0XHRtZnAud3JhcC5hdHRyKCdjbGFzcycsICdtZnAtd3JhcCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0bWZwLmJnT3ZlcmxheS5hdHRyKCdjbGFzcycsICdtZnAtYmcnKTtcblx0XHRtZnAuY29udGFpbmVyLmF0dHIoJ2NsYXNzJywgJ21mcC1jb250YWluZXInKTtcblxuXHRcdC8vIHJlbW92ZSBjbG9zZSBidXR0b24gZnJvbSB0YXJnZXQgZWxlbWVudFxuXHRcdGlmKG1mcC5zdC5zaG93Q2xvc2VCdG4gJiZcblx0XHQoIW1mcC5zdC5jbG9zZUJ0bkluc2lkZSB8fCBtZnAuY3VyclRlbXBsYXRlW21mcC5jdXJySXRlbS50eXBlXSA9PT0gdHJ1ZSkpIHtcblx0XHRcdGlmKG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG4pXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG4uZGV0YWNoKCk7XG5cdFx0fVxuXG5cblx0XHRpZihtZnAuc3QuYXV0b0ZvY3VzTGFzdCAmJiBtZnAuX2xhc3RGb2N1c2VkRWwpIHtcblx0XHRcdCQobWZwLl9sYXN0Rm9jdXNlZEVsKS5mb2N1cygpOyAvLyBwdXQgdGFiIGZvY3VzIGJhY2tcblx0XHR9XG5cdFx0bWZwLmN1cnJJdGVtID0gbnVsbDtcdFxuXHRcdG1mcC5jb250ZW50ID0gbnVsbDtcblx0XHRtZnAuY3VyclRlbXBsYXRlID0gbnVsbDtcblx0XHRtZnAucHJldkhlaWdodCA9IDA7XG5cblx0XHRfbWZwVHJpZ2dlcihBRlRFUl9DTE9TRV9FVkVOVCk7XG5cdH0sXG5cdFxuXHR1cGRhdGVTaXplOiBmdW5jdGlvbih3aW5IZWlnaHQpIHtcblxuXHRcdGlmKG1mcC5pc0lPUykge1xuXHRcdFx0Ly8gZml4ZXMgaU9TIG5hdiBiYXJzIGh0dHBzOi8vZ2l0aHViLmNvbS9kaW1zZW1lbm92L01hZ25pZmljLVBvcHVwL2lzc3Vlcy8yXG5cdFx0XHR2YXIgem9vbUxldmVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHR2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogem9vbUxldmVsO1xuXHRcdFx0bWZwLndyYXAuY3NzKCdoZWlnaHQnLCBoZWlnaHQpO1xuXHRcdFx0bWZwLndIID0gaGVpZ2h0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAud0ggPSB3aW5IZWlnaHQgfHwgX3dpbmRvdy5oZWlnaHQoKTtcblx0XHR9XG5cdFx0Ly8gRml4ZXMgIzg0OiBwb3B1cCBpbmNvcnJlY3RseSBwb3NpdGlvbmVkIHdpdGggcG9zaXRpb246cmVsYXRpdmUgb24gYm9keVxuXHRcdGlmKCFtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRtZnAud3JhcC5jc3MoJ2hlaWdodCcsIG1mcC53SCk7XG5cdFx0fVxuXG5cdFx0X21mcFRyaWdnZXIoJ1Jlc2l6ZScpO1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIFNldCBjb250ZW50IG9mIHBvcHVwIGJhc2VkIG9uIGN1cnJlbnQgaW5kZXhcblx0ICovXG5cdHVwZGF0ZUl0ZW1IVE1MOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1ttZnAuaW5kZXhdO1xuXG5cdFx0Ly8gRGV0YWNoIGFuZCBwZXJmb3JtIG1vZGlmaWNhdGlvbnNcblx0XHRtZnAuY29udGVudENvbnRhaW5lci5kZXRhY2goKTtcblxuXHRcdGlmKG1mcC5jb250ZW50KVxuXHRcdFx0bWZwLmNvbnRlbnQuZGV0YWNoKCk7XG5cblx0XHRpZighaXRlbS5wYXJzZWQpIHtcblx0XHRcdGl0ZW0gPSBtZnAucGFyc2VFbCggbWZwLmluZGV4ICk7XG5cdFx0fVxuXG5cdFx0dmFyIHR5cGUgPSBpdGVtLnR5cGU7XG5cblx0XHRfbWZwVHJpZ2dlcignQmVmb3JlQ2hhbmdlJywgW21mcC5jdXJySXRlbSA/IG1mcC5jdXJySXRlbS50eXBlIDogJycsIHR5cGVdKTtcblx0XHQvLyBCZWZvcmVDaGFuZ2UgZXZlbnQgd29ya3MgbGlrZSBzbzpcblx0XHQvLyBfbWZwT24oJ0JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGUsIHByZXZUeXBlLCBuZXdUeXBlKSB7IH0pO1xuXG5cdFx0bWZwLmN1cnJJdGVtID0gaXRlbTtcblxuXHRcdGlmKCFtZnAuY3VyclRlbXBsYXRlW3R5cGVdKSB7XG5cdFx0XHR2YXIgbWFya3VwID0gbWZwLnN0W3R5cGVdID8gbWZwLnN0W3R5cGVdLm1hcmt1cCA6IGZhbHNlO1xuXG5cdFx0XHQvLyBhbGxvd3MgdG8gbW9kaWZ5IG1hcmt1cFxuXHRcdFx0X21mcFRyaWdnZXIoJ0ZpcnN0TWFya3VwUGFyc2UnLCBtYXJrdXApO1xuXG5cdFx0XHRpZihtYXJrdXApIHtcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9ICQobWFya3VwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG1hcmt1cCBmb3VuZCB3ZSBqdXN0IGRlZmluZSB0aGF0IHRlbXBsYXRlIGlzIHBhcnNlZFxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihfcHJldkNvbnRlbnRUeXBlICYmIF9wcmV2Q29udGVudFR5cGUgIT09IGl0ZW0udHlwZSkge1xuXHRcdFx0bWZwLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnbWZwLScrX3ByZXZDb250ZW50VHlwZSsnLWhvbGRlcicpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdDb250ZW50ID0gbWZwWydnZXQnICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSldKGl0ZW0sIG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pO1xuXHRcdG1mcC5hcHBlbmRDb250ZW50KG5ld0NvbnRlbnQsIHR5cGUpO1xuXG5cdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xuXG5cdFx0X21mcFRyaWdnZXIoQ0hBTkdFX0VWRU5ULCBpdGVtKTtcblx0XHRfcHJldkNvbnRlbnRUeXBlID0gaXRlbS50eXBlO1xuXG5cdFx0Ly8gQXBwZW5kIGNvbnRhaW5lciBiYWNrIGFmdGVyIGl0cyBjb250ZW50IGNoYW5nZWRcblx0XHRtZnAuY29udGFpbmVyLnByZXBlbmQobWZwLmNvbnRlbnRDb250YWluZXIpO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0FmdGVyQ2hhbmdlJyk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogU2V0IEhUTUwgY29udGVudCBvZiBwb3B1cFxuXHQgKi9cblx0YXBwZW5kQ29udGVudDogZnVuY3Rpb24obmV3Q29udGVudCwgdHlwZSkge1xuXHRcdG1mcC5jb250ZW50ID0gbmV3Q29udGVudDtcblxuXHRcdGlmKG5ld0NvbnRlbnQpIHtcblx0XHRcdGlmKG1mcC5zdC5zaG93Q2xvc2VCdG4gJiYgbWZwLnN0LmNsb3NlQnRuSW5zaWRlICYmXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbWFya3VwLCB3ZSBqdXN0IGFwcGVuZCBjbG9zZSBidXR0b24gZWxlbWVudCBpbnNpZGVcblx0XHRcdFx0aWYoIW1mcC5jb250ZW50LmZpbmQoJy5tZnAtY2xvc2UnKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRtZnAuY29udGVudC5hcHBlbmQoX2dldENsb3NlQnRuKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZnAuY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5jb250ZW50ID0gJyc7XG5cdFx0fVxuXG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0FQUEVORF9FVkVOVCk7XG5cdFx0bWZwLmNvbnRhaW5lci5hZGRDbGFzcygnbWZwLScrdHlwZSsnLWhvbGRlcicpO1xuXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1mcC5jb250ZW50KTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIE1hZ25pZmljIFBvcHVwIGRhdGEgb2JqZWN0IGJhc2VkIG9uIGdpdmVuIGRhdGFcblx0ICogQHBhcmFtICB7aW50fSBpbmRleCBJbmRleCBvZiBpdGVtIHRvIHBhcnNlXG5cdCAqL1xuXHRwYXJzZUVsOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBpdGVtID0gbWZwLml0ZW1zW2luZGV4XSxcblx0XHRcdHR5cGU7XG5cblx0XHRpZihpdGVtLnRhZ05hbWUpIHtcblx0XHRcdGl0ZW0gPSB7IGVsOiAkKGl0ZW0pIH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHR5cGUgPSBpdGVtLnR5cGU7XG5cdFx0XHRpdGVtID0geyBkYXRhOiBpdGVtLCBzcmM6IGl0ZW0uc3JjIH07XG5cdFx0fVxuXG5cdFx0aWYoaXRlbS5lbCkge1xuXHRcdFx0dmFyIHR5cGVzID0gbWZwLnR5cGVzO1xuXG5cdFx0XHQvLyBjaGVjayBmb3IgJ21mcC1UWVBFJyBjbGFzc1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKCBpdGVtLmVsLmhhc0NsYXNzKCdtZnAtJyt0eXBlc1tpXSkgKSB7XG5cdFx0XHRcdFx0dHlwZSA9IHR5cGVzW2ldO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW0uc3JjID0gaXRlbS5lbC5hdHRyKCdkYXRhLW1mcC1zcmMnKTtcblx0XHRcdGlmKCFpdGVtLnNyYykge1xuXHRcdFx0XHRpdGVtLnNyYyA9IGl0ZW0uZWwuYXR0cignaHJlZicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGl0ZW0udHlwZSA9IHR5cGUgfHwgbWZwLnN0LnR5cGUgfHwgJ2lubGluZSc7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdGl0ZW0ucGFyc2VkID0gdHJ1ZTtcblx0XHRtZnAuaXRlbXNbaW5kZXhdID0gaXRlbTtcblx0XHRfbWZwVHJpZ2dlcignRWxlbWVudFBhcnNlJywgaXRlbSk7XG5cblx0XHRyZXR1cm4gbWZwLml0ZW1zW2luZGV4XTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBzaW5nbGUgcG9wdXAgb3IgYSBncm91cCBvZiBwb3B1cHNcblx0ICovXG5cdGFkZEdyb3VwOiBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xuXHRcdHZhciBlSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUubWZwRWwgPSB0aGlzO1xuXHRcdFx0bWZwLl9vcGVuQ2xpY2soZSwgZWwsIG9wdGlvbnMpO1xuXHRcdH07XG5cblx0XHRpZighb3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdH1cblxuXHRcdHZhciBlTmFtZSA9ICdjbGljay5tYWduaWZpY1BvcHVwJztcblx0XHRvcHRpb25zLm1haW5FbCA9IGVsO1xuXG5cdFx0aWYob3B0aW9ucy5pdGVtcykge1xuXHRcdFx0b3B0aW9ucy5pc09iaiA9IHRydWU7XG5cdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBlSGFuZGxlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdGlvbnMuaXNPYmogPSBmYWxzZTtcblx0XHRcdGlmKG9wdGlvbnMuZGVsZWdhdGUpIHtcblx0XHRcdFx0ZWwub2ZmKGVOYW1lKS5vbihlTmFtZSwgb3B0aW9ucy5kZWxlZ2F0ZSAsIGVIYW5kbGVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnMuaXRlbXMgPSBlbDtcblx0XHRcdFx0ZWwub2ZmKGVOYW1lKS5vbihlTmFtZSwgZUhhbmRsZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X29wZW5DbGljazogZnVuY3Rpb24oZSwgZWwsIG9wdGlvbnMpIHtcblx0XHR2YXIgbWlkQ2xpY2sgPSBvcHRpb25zLm1pZENsaWNrICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1pZENsaWNrIDogJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLm1pZENsaWNrO1xuXG5cblx0XHRpZighbWlkQ2xpY2sgJiYgKCBlLndoaWNoID09PSAyIHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5hbHRLZXkgfHwgZS5zaGlmdEtleSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBkaXNhYmxlT24gPSBvcHRpb25zLmRpc2FibGVPbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5kaXNhYmxlT24gOiAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMuZGlzYWJsZU9uO1xuXG5cdFx0aWYoZGlzYWJsZU9uKSB7XG5cdFx0XHRpZigkLmlzRnVuY3Rpb24oZGlzYWJsZU9uKSkge1xuXHRcdFx0XHRpZiggIWRpc2FibGVPbi5jYWxsKG1mcCkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7IC8vIGVsc2UgaXQncyBudW1iZXJcblx0XHRcdFx0aWYoIF93aW5kb3cud2lkdGgoKSA8IGRpc2FibGVPbiApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGUudHlwZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBUaGlzIHdpbGwgcHJldmVudCBwb3B1cCBmcm9tIGNsb3NpbmcgaWYgZWxlbWVudCBpcyBpbnNpZGUgYW5kIHBvcHVwIGlzIGFscmVhZHkgb3BlbmVkXG5cdFx0XHRpZihtZnAuaXNPcGVuKSB7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b3B0aW9ucy5lbCA9ICQoZS5tZnBFbCk7XG5cdFx0aWYob3B0aW9ucy5kZWxlZ2F0ZSkge1xuXHRcdFx0b3B0aW9ucy5pdGVtcyA9IGVsLmZpbmQob3B0aW9ucy5kZWxlZ2F0ZSk7XG5cdFx0fVxuXHRcdG1mcC5vcGVuKG9wdGlvbnMpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGV4dCBvbiBwcmVsb2FkZXJcblx0ICovXG5cdHVwZGF0ZVN0YXR1czogZnVuY3Rpb24oc3RhdHVzLCB0ZXh0KSB7XG5cblx0XHRpZihtZnAucHJlbG9hZGVyKSB7XG5cdFx0XHRpZihfcHJldlN0YXR1cyAhPT0gc3RhdHVzKSB7XG5cdFx0XHRcdG1mcC5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ21mcC1zLScrX3ByZXZTdGF0dXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighdGV4dCAmJiBzdGF0dXMgPT09ICdsb2FkaW5nJykge1xuXHRcdFx0XHR0ZXh0ID0gbWZwLnN0LnRMb2FkaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0c3RhdHVzOiBzdGF0dXMsXG5cdFx0XHRcdHRleHQ6IHRleHRcblx0XHRcdH07XG5cdFx0XHQvLyBhbGxvd3MgdG8gbW9kaWZ5IHN0YXR1c1xuXHRcdFx0X21mcFRyaWdnZXIoJ1VwZGF0ZVN0YXR1cycsIGRhdGEpO1xuXG5cdFx0XHRzdGF0dXMgPSBkYXRhLnN0YXR1cztcblx0XHRcdHRleHQgPSBkYXRhLnRleHQ7XG5cblx0XHRcdG1mcC5wcmVsb2FkZXIuaHRtbCh0ZXh0KTtcblxuXHRcdFx0bWZwLnByZWxvYWRlci5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdG1mcC5jb250YWluZXIuYWRkQ2xhc3MoJ21mcC1zLScrc3RhdHVzKTtcblx0XHRcdF9wcmV2U3RhdHVzID0gc3RhdHVzO1xuXHRcdH1cblx0fSxcblxuXG5cdC8qXG5cdFx0XCJQcml2YXRlXCIgaGVscGVycyB0aGF0IGFyZW4ndCBwcml2YXRlIGF0IGFsbFxuXHQgKi9cblx0Ly8gQ2hlY2sgdG8gY2xvc2UgcG9wdXAgb3Igbm90XG5cdC8vIFwidGFyZ2V0XCIgaXMgYW4gZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkXG5cdF9jaGVja0lmQ2xvc2U6IGZ1bmN0aW9uKHRhcmdldCkge1xuXG5cdFx0aWYoJCh0YXJnZXQpLmhhc0NsYXNzKFBSRVZFTlRfQ0xPU0VfQ0xBU1MpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGNsb3NlT25Db250ZW50ID0gbWZwLnN0LmNsb3NlT25Db250ZW50Q2xpY2s7XG5cdFx0dmFyIGNsb3NlT25CZyA9IG1mcC5zdC5jbG9zZU9uQmdDbGljaztcblxuXHRcdGlmKGNsb3NlT25Db250ZW50ICYmIGNsb3NlT25CZykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gV2UgY2xvc2UgdGhlIHBvcHVwIGlmIGNsaWNrIGlzIG9uIGNsb3NlIGJ1dHRvbiBvciBvbiBwcmVsb2FkZXIuIE9yIGlmIHRoZXJlIGlzIG5vIGNvbnRlbnQuXG5cdFx0XHRpZighbWZwLmNvbnRlbnQgfHwgJCh0YXJnZXQpLmhhc0NsYXNzKCdtZnAtY2xvc2UnKSB8fCAobWZwLnByZWxvYWRlciAmJiB0YXJnZXQgPT09IG1mcC5wcmVsb2FkZXJbMF0pICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgY2xpY2sgaXMgb3V0c2lkZSB0aGUgY29udGVudFxuXHRcdFx0aWYoICAodGFyZ2V0ICE9PSBtZnAuY29udGVudFswXSAmJiAhJC5jb250YWlucyhtZnAuY29udGVudFswXSwgdGFyZ2V0KSkgICkge1xuXHRcdFx0XHRpZihjbG9zZU9uQmcpIHtcblx0XHRcdFx0XHQvLyBsYXN0IGNoZWNrLCBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IGlzIGluIERPTSwgKGluIGNhc2UgaXQncyByZW1vdmVkIG9uY2xpY2spXG5cdFx0XHRcdFx0aWYoICQuY29udGFpbnMoZG9jdW1lbnQsIHRhcmdldCkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihjbG9zZU9uQ29udGVudCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdF9hZGRDbGFzc1RvTUZQOiBmdW5jdGlvbihjTmFtZSkge1xuXHRcdG1mcC5iZ092ZXJsYXkuYWRkQ2xhc3MoY05hbWUpO1xuXHRcdG1mcC53cmFwLmFkZENsYXNzKGNOYW1lKTtcblx0fSxcblx0X3JlbW92ZUNsYXNzRnJvbU1GUDogZnVuY3Rpb24oY05hbWUpIHtcblx0XHR0aGlzLmJnT3ZlcmxheS5yZW1vdmVDbGFzcyhjTmFtZSk7XG5cdFx0bWZwLndyYXAucmVtb3ZlQ2xhc3MoY05hbWUpO1xuXHR9LFxuXHRfaGFzU2Nyb2xsQmFyOiBmdW5jdGlvbih3aW5IZWlnaHQpIHtcblx0XHRyZXR1cm4gKCAgKG1mcC5pc0lFNyA/IF9kb2N1bWVudC5oZWlnaHQoKSA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSA+ICh3aW5IZWlnaHQgfHwgX3dpbmRvdy5oZWlnaHQoKSkgKTtcblx0fSxcblx0X3NldEZvY3VzOiBmdW5jdGlvbigpIHtcblx0XHQobWZwLnN0LmZvY3VzID8gbWZwLmNvbnRlbnQuZmluZChtZnAuc3QuZm9jdXMpLmVxKDApIDogbWZwLndyYXApLmZvY3VzKCk7XG5cdH0sXG5cdF9vbkZvY3VzSW46IGZ1bmN0aW9uKGUpIHtcblx0XHRpZiggZS50YXJnZXQgIT09IG1mcC53cmFwWzBdICYmICEkLmNvbnRhaW5zKG1mcC53cmFwWzBdLCBlLnRhcmdldCkgKSB7XG5cdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHRfcGFyc2VNYXJrdXA6IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHR2YXIgYXJyO1xuXHRcdGlmKGl0ZW0uZGF0YSkge1xuXHRcdFx0dmFsdWVzID0gJC5leHRlbmQoaXRlbS5kYXRhLCB2YWx1ZXMpO1xuXHRcdH1cblx0XHRfbWZwVHJpZ2dlcihNQVJLVVBfUEFSU0VfRVZFTlQsIFt0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtXSApO1xuXG5cdFx0JC5lYWNoKHZhbHVlcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0aWYodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRhcnIgPSBrZXkuc3BsaXQoJ18nKTtcblx0XHRcdGlmKGFyci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHZhciBlbCA9IHRlbXBsYXRlLmZpbmQoRVZFTlRfTlMgKyAnLScrYXJyWzBdKTtcblxuXHRcdFx0XHRpZihlbC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dmFyIGF0dHIgPSBhcnJbMV07XG5cdFx0XHRcdFx0aWYoYXR0ciA9PT0gJ3JlcGxhY2VXaXRoJykge1xuXHRcdFx0XHRcdFx0aWYoZWxbMF0gIT09IHZhbHVlWzBdKSB7XG5cdFx0XHRcdFx0XHRcdGVsLnJlcGxhY2VXaXRoKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYoYXR0ciA9PT0gJ2ltZycpIHtcblx0XHRcdFx0XHRcdGlmKGVsLmlzKCdpbWcnKSkge1xuXHRcdFx0XHRcdFx0XHRlbC5hdHRyKCdzcmMnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRlbC5yZXBsYWNlV2l0aCggJCgnPGltZz4nKS5hdHRyKCdzcmMnLCB2YWx1ZSkuYXR0cignY2xhc3MnLCBlbC5hdHRyKCdjbGFzcycpKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbC5hdHRyKGFyclsxXSwgdmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2tleSkuaHRtbCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0X2dldFNjcm9sbGJhclNpemU6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIHRoeCBEYXZpZFxuXHRcdGlmKG1mcC5zY3JvbGxiYXJTaXplID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0c2Nyb2xsRGl2LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDk5cHg7IGhlaWdodDogOTlweDsgb3ZlcmZsb3c6IHNjcm9sbDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC05OTk5cHg7Jztcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcblx0XHRcdG1mcC5zY3JvbGxiYXJTaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWZwLnNjcm9sbGJhclNpemU7XG5cdH1cblxufTsgLyogTWFnbmlmaWNQb3B1cCBjb3JlIHByb3RvdHlwZSBlbmQgKi9cblxuXG5cblxuLyoqXG4gKiBQdWJsaWMgc3RhdGljIGZ1bmN0aW9uc1xuICovXG4kLm1hZ25pZmljUG9wdXAgPSB7XG5cdGluc3RhbmNlOiBudWxsLFxuXHRwcm90bzogTWFnbmlmaWNQb3B1cC5wcm90b3R5cGUsXG5cdG1vZHVsZXM6IFtdLFxuXG5cdG9wZW46IGZ1bmN0aW9uKG9wdGlvbnMsIGluZGV4KSB7XG5cdFx0X2NoZWNrSW5zdGFuY2UoKTtcblxuXHRcdGlmKCFvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0b3B0aW9ucy5pc09iaiA9IHRydWU7XG5cdFx0b3B0aW9ucy5pbmRleCA9IGluZGV4IHx8IDA7XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2Uub3BlbihvcHRpb25zKTtcblx0fSxcblxuXHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSAmJiAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UuY2xvc2UoKTtcblx0fSxcblxuXHRyZWdpc3Rlck1vZHVsZTogZnVuY3Rpb24obmFtZSwgbW9kdWxlKSB7XG5cdFx0aWYobW9kdWxlLm9wdGlvbnMpIHtcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5kZWZhdWx0c1tuYW1lXSA9IG1vZHVsZS5vcHRpb25zO1xuXHRcdH1cblx0XHQkLmV4dGVuZCh0aGlzLnByb3RvLCBtb2R1bGUucHJvdG8pO1xuXHRcdHRoaXMubW9kdWxlcy5wdXNoKG5hbWUpO1xuXHR9LFxuXG5cdGRlZmF1bHRzOiB7XG5cblx0XHQvLyBJbmZvIGFib3V0IG9wdGlvbnMgaXMgaW4gZG9jczpcblx0XHQvLyBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9kb2N1bWVudGF0aW9uLmh0bWwjb3B0aW9uc1xuXG5cdFx0ZGlzYWJsZU9uOiAwLFxuXG5cdFx0a2V5OiBudWxsLFxuXG5cdFx0bWlkQ2xpY2s6IGZhbHNlLFxuXG5cdFx0bWFpbkNsYXNzOiAnJyxcblxuXHRcdHByZWxvYWRlcjogdHJ1ZSxcblxuXHRcdGZvY3VzOiAnJywgLy8gQ1NTIHNlbGVjdG9yIG9mIGlucHV0IHRvIGZvY3VzIGFmdGVyIHBvcHVwIGlzIG9wZW5lZFxuXG5cdFx0Y2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG5cblx0XHRjbG9zZU9uQmdDbGljazogdHJ1ZSxcblxuXHRcdGNsb3NlQnRuSW5zaWRlOiB0cnVlLFxuXG5cdFx0c2hvd0Nsb3NlQnRuOiB0cnVlLFxuXG5cdFx0ZW5hYmxlRXNjYXBlS2V5OiB0cnVlLFxuXG5cdFx0bW9kYWw6IGZhbHNlLFxuXG5cdFx0YWxpZ25Ub3A6IGZhbHNlLFxuXG5cdFx0cmVtb3ZhbERlbGF5OiAwLFxuXG5cdFx0cHJlcGVuZFRvOiBudWxsLFxuXG5cdFx0Zml4ZWRDb250ZW50UG9zOiAnYXV0bycsXG5cblx0XHRmaXhlZEJnUG9zOiAnYXV0bycsXG5cblx0XHRvdmVyZmxvd1k6ICdhdXRvJyxcblxuXHRcdGNsb3NlTWFya3VwOiAnPGJ1dHRvbiB0aXRsZT1cIiV0aXRsZSVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZnAtY2xvc2VcIj4mIzIxNTs8L2J1dHRvbj4nLFxuXG5cdFx0dENsb3NlOiAnQ2xvc2UgKEVzYyknLFxuXG5cdFx0dExvYWRpbmc6ICdMb2FkaW5nLi4uJyxcblxuXHRcdGF1dG9Gb2N1c0xhc3Q6IHRydWVcblxuXHR9XG59O1xuXG5cblxuJC5mbi5tYWduaWZpY1BvcHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHRfY2hlY2tJbnN0YW5jZSgpO1xuXG5cdHZhciBqcUVsID0gJCh0aGlzKTtcblxuXHQvLyBXZSBjYWxsIHNvbWUgQVBJIG1ldGhvZCBvZiBmaXJzdCBwYXJhbSBpcyBhIHN0cmluZ1xuXHRpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRpZihvcHRpb25zID09PSAnb3BlbicpIHtcblx0XHRcdHZhciBpdGVtcyxcblx0XHRcdFx0aXRlbU9wdHMgPSBfaXNKUSA/IGpxRWwuZGF0YSgnbWFnbmlmaWNQb3B1cCcpIDoganFFbFswXS5tYWduaWZpY1BvcHVwLFxuXHRcdFx0XHRpbmRleCA9IHBhcnNlSW50KGFyZ3VtZW50c1sxXSwgMTApIHx8IDA7XG5cblx0XHRcdGlmKGl0ZW1PcHRzLml0ZW1zKSB7XG5cdFx0XHRcdGl0ZW1zID0gaXRlbU9wdHMuaXRlbXNbaW5kZXhdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXRlbXMgPSBqcUVsO1xuXHRcdFx0XHRpZihpdGVtT3B0cy5kZWxlZ2F0ZSkge1xuXHRcdFx0XHRcdGl0ZW1zID0gaXRlbXMuZmluZChpdGVtT3B0cy5kZWxlZ2F0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbXMgPSBpdGVtcy5lcSggaW5kZXggKTtcblx0XHRcdH1cblx0XHRcdG1mcC5fb3BlbkNsaWNrKHttZnBFbDppdGVtc30sIGpxRWwsIGl0ZW1PcHRzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYobWZwLmlzT3Blbilcblx0XHRcdFx0bWZwW29wdGlvbnNdLmFwcGx5KG1mcCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cdFx0Ly8gY2xvbmUgb3B0aW9ucyBvYmpcblx0XHRvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXG5cdFx0Lypcblx0XHQgKiBBcyBaZXB0byBkb2Vzbid0IHN1cHBvcnQgLmRhdGEoKSBtZXRob2QgZm9yIG9iamVjdHNcblx0XHQgKiBhbmQgaXQgd29ya3Mgb25seSBpbiBub3JtYWwgYnJvd3NlcnNcblx0XHQgKiB3ZSBhc3NpZ24gXCJvcHRpb25zXCIgb2JqZWN0IGRpcmVjdGx5IHRvIHRoZSBET00gZWxlbWVudC4gRlRXIVxuXHRcdCAqL1xuXHRcdGlmKF9pc0pRKSB7XG5cdFx0XHRqcUVsLmRhdGEoJ21hZ25pZmljUG9wdXAnLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0anFFbFswXS5tYWduaWZpY1BvcHVwID0gb3B0aW9ucztcblx0XHR9XG5cblx0XHRtZnAuYWRkR3JvdXAoanFFbCwgb3B0aW9ucyk7XG5cblx0fVxuXHRyZXR1cm4ganFFbDtcbn07XG5cbi8qPj5jb3JlKi9cblxuLyo+PmlubGluZSovXG5cbnZhciBJTkxJTkVfTlMgPSAnaW5saW5lJyxcblx0X2hpZGRlbkNsYXNzLFxuXHRfaW5saW5lUGxhY2Vob2xkZXIsXG5cdF9sYXN0SW5saW5lRWxlbWVudCxcblx0X3B1dElubGluZUVsZW1lbnRzQmFjayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKF9sYXN0SW5saW5lRWxlbWVudCkge1xuXHRcdFx0X2lubGluZVBsYWNlaG9sZGVyLmFmdGVyKCBfbGFzdElubGluZUVsZW1lbnQuYWRkQ2xhc3MoX2hpZGRlbkNsYXNzKSApLmRldGFjaCgpO1xuXHRcdFx0X2xhc3RJbmxpbmVFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJTkxJTkVfTlMsIHtcblx0b3B0aW9uczoge1xuXHRcdGhpZGRlbkNsYXNzOiAnaGlkZScsIC8vIHdpbGwgYmUgYXBwZW5kZWQgd2l0aCBgbWZwLWAgcHJlZml4XG5cdFx0bWFya3VwOiAnJyxcblx0XHR0Tm90Rm91bmQ6ICdDb250ZW50IG5vdCBmb3VuZCdcblx0fSxcblx0cHJvdG86IHtcblxuXHRcdGluaXRJbmxpbmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnR5cGVzLnB1c2goSU5MSU5FX05TKTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UKycuJytJTkxJTkVfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfcHV0SW5saW5lRWxlbWVudHNCYWNrKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Z2V0SW5saW5lOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXG5cdFx0XHRfcHV0SW5saW5lRWxlbWVudHNCYWNrKCk7XG5cblx0XHRcdGlmKGl0ZW0uc3JjKSB7XG5cdFx0XHRcdHZhciBpbmxpbmVTdCA9IG1mcC5zdC5pbmxpbmUsXG5cdFx0XHRcdFx0ZWwgPSAkKGl0ZW0uc3JjKTtcblxuXHRcdFx0XHRpZihlbC5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdC8vIElmIHRhcmdldCBlbGVtZW50IGhhcyBwYXJlbnQgLSB3ZSByZXBsYWNlIGl0IHdpdGggcGxhY2Vob2xkZXIgYW5kIHB1dCBpdCBiYWNrIGFmdGVyIHBvcHVwIGlzIGNsb3NlZFxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBlbFswXS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdGlmKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSkge1xuXHRcdFx0XHRcdFx0aWYoIV9pbmxpbmVQbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdFx0XHRfaGlkZGVuQ2xhc3MgPSBpbmxpbmVTdC5oaWRkZW5DbGFzcztcblx0XHRcdFx0XHRcdFx0X2lubGluZVBsYWNlaG9sZGVyID0gX2dldEVsKF9oaWRkZW5DbGFzcyk7XG5cdFx0XHRcdFx0XHRcdF9oaWRkZW5DbGFzcyA9ICdtZnAtJytfaGlkZGVuQ2xhc3M7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyByZXBsYWNlIHRhcmdldCBpbmxpbmUgZWxlbWVudCB3aXRoIHBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRfbGFzdElubGluZUVsZW1lbnQgPSBlbC5hZnRlcihfaW5saW5lUGxhY2Vob2xkZXIpLmRldGFjaCgpLnJlbW92ZUNsYXNzKF9oaWRkZW5DbGFzcyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGlubGluZVN0LnROb3RGb3VuZCk7XG5cdFx0XHRcdFx0ZWwgPSAkKCc8ZGl2PicpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlbS5pbmxpbmVFbGVtZW50ID0gZWw7XG5cdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdH1cblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIHt9LCBpdGVtKTtcblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+aW5saW5lKi9cblxuLyo+PmFqYXgqL1xudmFyIEFKQVhfTlMgPSAnYWpheCcsXG5cdF9hamF4Q3VyLFxuXHRfcmVtb3ZlQWpheEN1cnNvciA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKF9hamF4Q3VyKSB7XG5cdFx0XHQkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKF9hamF4Q3VyKTtcblx0XHR9XG5cdH0sXG5cdF9kZXN0cm95QWpheFJlcXVlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xuXHRcdGlmKG1mcC5yZXEpIHtcblx0XHRcdG1mcC5yZXEuYWJvcnQoKTtcblx0XHR9XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShBSkFYX05TLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdHNldHRpbmdzOiBudWxsLFxuXHRcdGN1cnNvcjogJ21mcC1hamF4LWN1cicsXG5cdFx0dEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGNvbnRlbnQ8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdEFqYXg6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnR5cGVzLnB1c2goQUpBWF9OUyk7XG5cdFx0XHRfYWpheEN1ciA9IG1mcC5zdC5hamF4LmN1cnNvcjtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UKycuJytBSkFYX05TLCBfZGVzdHJveUFqYXhSZXF1ZXN0KTtcblx0XHRcdF9tZnBPbignQmVmb3JlQ2hhbmdlLicgKyBBSkFYX05TLCBfZGVzdHJveUFqYXhSZXF1ZXN0KTtcblx0XHR9LFxuXHRcdGdldEFqYXg6IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0aWYoX2FqYXhDdXIpIHtcblx0XHRcdFx0JChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhfYWpheEN1cik7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2xvYWRpbmcnKTtcblxuXHRcdFx0dmFyIG9wdHMgPSAkLmV4dGVuZCh7XG5cdFx0XHRcdHVybDogaXRlbS5zcmMsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG5cdFx0XHRcdFx0dmFyIHRlbXAgPSB7XG5cdFx0XHRcdFx0XHRkYXRhOmRhdGEsXG5cdFx0XHRcdFx0XHR4aHI6anFYSFJcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ1BhcnNlQWpheCcsIHRlbXApO1xuXG5cdFx0XHRcdFx0bWZwLmFwcGVuZENvbnRlbnQoICQodGVtcC5kYXRhKSwgQUpBWF9OUyApO1xuXG5cdFx0XHRcdFx0aXRlbS5maW5pc2hlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xuXG5cdFx0XHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC53cmFwLmFkZENsYXNzKFJFQURZX0NMQVNTKTtcblx0XHRcdFx0XHR9LCAxNik7XG5cblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0FqYXhDb250ZW50QWRkZWQnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cdFx0XHRcdFx0aXRlbS5maW5pc2hlZCA9IGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIG1mcC5zdC5hamF4LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIG1mcC5zdC5hamF4LnNldHRpbmdzKTtcblxuXHRcdFx0bWZwLnJlcSA9ICQuYWpheChvcHRzKTtcblxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5hamF4Ki9cblxuLyo+PmltYWdlKi9cbnZhciBfaW1nSW50ZXJ2YWwsXG5cdF9nZXRUaXRsZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZihpdGVtLmRhdGEgJiYgaXRlbS5kYXRhLnRpdGxlICE9PSB1bmRlZmluZWQpXG5cdFx0XHRyZXR1cm4gaXRlbS5kYXRhLnRpdGxlO1xuXG5cdFx0dmFyIHNyYyA9IG1mcC5zdC5pbWFnZS50aXRsZVNyYztcblxuXHRcdGlmKHNyYykge1xuXHRcdFx0aWYoJC5pc0Z1bmN0aW9uKHNyYykpIHtcblx0XHRcdFx0cmV0dXJuIHNyYy5jYWxsKG1mcCwgaXRlbSk7XG5cdFx0XHR9IGVsc2UgaWYoaXRlbS5lbCkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbS5lbC5hdHRyKHNyYykgfHwgJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCdpbWFnZScsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0bWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1maWd1cmVcIj4nK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHQnPGZpZ3VyZT4nK1xuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtaW1nXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdCc8ZmlnY2FwdGlvbj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+Jytcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0JzwvZmlnY2FwdGlvbj4nK1xuXHRcdFx0XHRcdCc8L2ZpZ3VyZT4nK1xuXHRcdFx0XHQnPC9kaXY+Jyxcblx0XHRjdXJzb3I6ICdtZnAtem9vbS1vdXQtY3VyJyxcblx0XHR0aXRsZVNyYzogJ3RpdGxlJyxcblx0XHR2ZXJ0aWNhbEZpdDogdHJ1ZSxcblx0XHR0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdEltYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbWdTdCA9IG1mcC5zdC5pbWFnZSxcblx0XHRcdFx0bnMgPSAnLmltYWdlJztcblxuXHRcdFx0bWZwLnR5cGVzLnB1c2goJ2ltYWdlJyk7XG5cblx0XHRcdF9tZnBPbihPUEVOX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLmN1cnJJdGVtLnR5cGUgPT09ICdpbWFnZScgJiYgaW1nU3QuY3Vyc29yKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhpbWdTdC5jdXJzb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoaW1nU3QuY3Vyc29yKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhpbWdTdC5jdXJzb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF93aW5kb3cub2ZmKCdyZXNpemUnICsgRVZFTlRfTlMpO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignUmVzaXplJytucywgbWZwLnJlc2l6ZUltYWdlKTtcblx0XHRcdGlmKG1mcC5pc0xvd0lFKSB7XG5cdFx0XHRcdF9tZnBPbignQWZ0ZXJDaGFuZ2UnLCBtZnAucmVzaXplSW1hZ2UpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVzaXplSW1hZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGl0ZW0gPSBtZnAuY3Vyckl0ZW07XG5cdFx0XHRpZighaXRlbSB8fCAhaXRlbS5pbWcpIHJldHVybjtcblxuXHRcdFx0aWYobWZwLnN0LmltYWdlLnZlcnRpY2FsRml0KSB7XG5cdFx0XHRcdHZhciBkZWNyID0gMDtcblx0XHRcdFx0Ly8gZml4IGJveC1zaXppbmcgaW4gaWU3Lzhcblx0XHRcdFx0aWYobWZwLmlzTG93SUUpIHtcblx0XHRcdFx0XHRkZWNyID0gcGFyc2VJbnQoaXRlbS5pbWcuY3NzKCdwYWRkaW5nLXRvcCcpLCAxMCkgKyBwYXJzZUludChpdGVtLmltZy5jc3MoJ3BhZGRpbmctYm90dG9tJyksMTApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW0uaW1nLmNzcygnbWF4LWhlaWdodCcsIG1mcC53SC1kZWNyKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9vbkltYWdlSGFzU2l6ZTogZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0aWYoaXRlbS5pbWcpIHtcblxuXHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXG5cdFx0XHRcdGlmKF9pbWdJbnRlcnZhbCkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZW0uaXNDaGVja2luZ0ltZ1NpemUgPSBmYWxzZTtcblxuXHRcdFx0XHRfbWZwVHJpZ2dlcignSW1hZ2VIYXNTaXplJywgaXRlbSk7XG5cblx0XHRcdFx0aWYoaXRlbS5pbWdIaWRkZW4pIHtcblx0XHRcdFx0XHRpZihtZnAuY29udGVudClcblx0XHRcdFx0XHRcdG1mcC5jb250ZW50LnJlbW92ZUNsYXNzKCdtZnAtbG9hZGluZycpO1xuXG5cdFx0XHRcdFx0aXRlbS5pbWdIaWRkZW4gPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIHRoYXQgbG9vcHMgdW50aWwgdGhlIGltYWdlIGhhcyBzaXplIHRvIGRpc3BsYXkgZWxlbWVudHMgdGhhdCByZWx5IG9uIGl0IGFzYXBcblx0XHQgKi9cblx0XHRmaW5kSW1hZ2VTaXplOiBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdHZhciBjb3VudGVyID0gMCxcblx0XHRcdFx0aW1nID0gaXRlbS5pbWdbMF0sXG5cdFx0XHRcdG1mcFNldEludGVydmFsID0gZnVuY3Rpb24oZGVsYXkpIHtcblxuXHRcdFx0XHRcdGlmKF9pbWdJbnRlcnZhbCkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBkZWNlbGVyYXRpbmcgaW50ZXJ2YWwgdGhhdCBjaGVja3MgZm9yIHNpemUgb2YgYW4gaW1hZ2Vcblx0XHRcdFx0XHRfaW1nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmKGltZy5uYXR1cmFsV2lkdGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYoY291bnRlciA+IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvdW50ZXIrKztcblx0XHRcdFx0XHRcdGlmKGNvdW50ZXIgPT09IDMpIHtcblx0XHRcdFx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwoMTApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGNvdW50ZXIgPT09IDQwKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihjb3VudGVyID09PSAxMDApIHtcblx0XHRcdFx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwoNTAwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkZWxheSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdG1mcFNldEludGVydmFsKDEpO1xuXHRcdH0sXG5cblx0XHRnZXRJbWFnZTogZnVuY3Rpb24oaXRlbSwgdGVtcGxhdGUpIHtcblxuXHRcdFx0dmFyIGd1YXJkID0gMCxcblxuXHRcdFx0XHQvLyBpbWFnZSBsb2FkIGNvbXBsZXRlIGhhbmRsZXJcblx0XHRcdFx0b25Mb2FkQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihpdGVtKSB7XG5cdFx0XHRcdFx0XHRpZiAoaXRlbS5pbWdbMF0uY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdFx0aXRlbS5pbWcub2ZmKCcubWZwbG9hZGVyJyk7XG5cblx0XHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcblx0XHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0XHRfbWZwVHJpZ2dlcignSW1hZ2VMb2FkQ29tcGxldGUnKTtcblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlmIGltYWdlIGNvbXBsZXRlIGNoZWNrIGZhaWxzIDIwMCB0aW1lcyAoMjAgc2VjKSwgd2UgYXNzdW1lIHRoYXQgdGhlcmUgd2FzIGFuIGVycm9yLlxuXHRcdFx0XHRcdFx0XHRndWFyZCsrO1xuXHRcdFx0XHRcdFx0XHRpZihndWFyZCA8IDIwMCkge1xuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQob25Mb2FkQ29tcGxldGUsMTAwKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRvbkxvYWRFcnJvcigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIGltYWdlIGVycm9yIGhhbmRsZXJcblx0XHRcdFx0b25Mb2FkRXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihpdGVtKSB7XG5cdFx0XHRcdFx0XHRpdGVtLmltZy5vZmYoJy5tZnBsb2FkZXInKTtcblx0XHRcdFx0XHRcdGlmKGl0ZW0gPT09IG1mcC5jdXJySXRlbSl7XG5cdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW1nU3QudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpdGVtLmxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbWdTdCA9IG1mcC5zdC5pbWFnZTtcblxuXG5cdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKCcubWZwLWltZycpO1xuXHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdFx0aW1nLmNsYXNzTmFtZSA9ICdtZnAtaW1nJztcblx0XHRcdFx0aWYoaXRlbS5lbCAmJiBpdGVtLmVsLmZpbmQoJ2ltZycpLmxlbmd0aCkge1xuXHRcdFx0XHRcdGltZy5hbHQgPSBpdGVtLmVsLmZpbmQoJ2ltZycpLmF0dHIoJ2FsdCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW0uaW1nID0gJChpbWcpLm9uKCdsb2FkLm1mcGxvYWRlcicsIG9uTG9hZENvbXBsZXRlKS5vbignZXJyb3IubWZwbG9hZGVyJywgb25Mb2FkRXJyb3IpO1xuXHRcdFx0XHRpbWcuc3JjID0gaXRlbS5zcmM7XG5cblx0XHRcdFx0Ly8gd2l0aG91dCBjbG9uZSgpIFwiZXJyb3JcIiBldmVudCBpcyBub3QgZmlyaW5nIHdoZW4gSU1HIGlzIHJlcGxhY2VkIGJ5IG5ldyBJTUdcblx0XHRcdFx0Ly8gVE9ETzogZmluZCBhIHdheSB0byBhdm9pZCBzdWNoIGNsb25pbmdcblx0XHRcdFx0aWYoZWwuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdFx0aXRlbS5pbWcgPSBpdGVtLmltZy5jbG9uZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW1nID0gaXRlbS5pbWdbMF07XG5cdFx0XHRcdGlmKGltZy5uYXR1cmFsV2lkdGggPiAwKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmKCFpbWcud2lkdGgpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCB7XG5cdFx0XHRcdHRpdGxlOiBfZ2V0VGl0bGUoaXRlbSksXG5cdFx0XHRcdGltZ19yZXBsYWNlV2l0aDogaXRlbS5pbWdcblx0XHRcdH0sIGl0ZW0pO1xuXG5cdFx0XHRtZnAucmVzaXplSW1hZ2UoKTtcblxuXHRcdFx0aWYoaXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdGlmKF9pbWdJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXG5cdFx0XHRcdGlmKGl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGUuYWRkQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbWdTdC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZS5yZW1vdmVDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnbG9hZGluZycpO1xuXHRcdFx0aXRlbS5sb2FkaW5nID0gdHJ1ZTtcblxuXHRcdFx0aWYoIWl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRpdGVtLmltZ0hpZGRlbiA9IHRydWU7XG5cdFx0XHRcdHRlbXBsYXRlLmFkZENsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRtZnAuZmluZEltYWdlU2l6ZShpdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5pbWFnZSovXG5cbi8qPj56b29tKi9cbnZhciBoYXNNb3pUcmFuc2Zvcm0sXG5cdGdldEhhc01velRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKGhhc01velRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRoYXNNb3pUcmFuc2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBoYXNNb3pUcmFuc2Zvcm07XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnem9vbScsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0ZWFzaW5nOiAnZWFzZS1pbi1vdXQnLFxuXHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0b3BlbmVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5pcygnaW1nJykgPyBlbGVtZW50IDogZWxlbWVudC5maW5kKCdpbWcnKTtcblx0XHR9XG5cdH0sXG5cblx0cHJvdG86IHtcblxuXHRcdGluaXRab29tOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB6b29tU3QgPSBtZnAuc3Quem9vbSxcblx0XHRcdFx0bnMgPSAnLnpvb20nLFxuXHRcdFx0XHRpbWFnZTtcblxuXHRcdFx0aWYoIXpvb21TdC5lbmFibGVkIHx8ICFtZnAuc3VwcG9ydHNUcmFuc2l0aW9uKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGR1cmF0aW9uID0gem9vbVN0LmR1cmF0aW9uLFxuXHRcdFx0XHRnZXRFbFRvQW5pbWF0ZSA9IGZ1bmN0aW9uKGltYWdlKSB7XG5cdFx0XHRcdFx0dmFyIG5ld0ltZyA9IGltYWdlLmNsb25lKCkucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVBdHRyKCdjbGFzcycpLmFkZENsYXNzKCdtZnAtYW5pbWF0ZWQtaW1hZ2UnKSxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gPSAnYWxsICcrKHpvb21TdC5kdXJhdGlvbi8xMDAwKSsncyAnICsgem9vbVN0LmVhc2luZyxcblx0XHRcdFx0XHRcdGNzc09iaiA9IHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdFx0XHRcdHpJbmRleDogOTk5OSxcblx0XHRcdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdFx0XHQnLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5JzogJ2hpZGRlbidcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0ID0gJ3RyYW5zaXRpb24nO1xuXG5cdFx0XHRcdFx0Y3NzT2JqWyctd2Via2l0LScrdF0gPSBjc3NPYmpbJy1tb3otJyt0XSA9IGNzc09ialsnLW8tJyt0XSA9IGNzc09ialt0XSA9IHRyYW5zaXRpb247XG5cblx0XHRcdFx0XHRuZXdJbWcuY3NzKGNzc09iaik7XG5cdFx0XHRcdFx0cmV0dXJuIG5ld0ltZztcblx0XHRcdFx0fSxcblx0XHRcdFx0c2hvd01haW5Db250ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b3BlblRpbWVvdXQsXG5cdFx0XHRcdGFuaW1hdGVkSW1nO1xuXG5cdFx0XHRfbWZwT24oJ0J1aWxkQ29udHJvbHMnK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KG9wZW5UaW1lb3V0KTtcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0XHQvLyBCYXNpY2FsbHksIGFsbCBjb2RlIGJlbG93IGRvZXMgaXMgY2xvbmVzIGV4aXN0aW5nIGltYWdlLCBwdXRzIGluIG9uIHRvcCBvZiB0aGUgY3VycmVudCBvbmUgYW5kIGFuaW1hdGVkIGl0XG5cblx0XHRcdFx0XHRpbWFnZSA9IG1mcC5fZ2V0SXRlbVRvWm9vbSgpO1xuXG5cdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhbmltYXRlZEltZyA9IGdldEVsVG9BbmltYXRlKGltYWdlKTtcblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoKSApO1xuXG5cdFx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKGFuaW1hdGVkSW1nKTtcblxuXHRcdFx0XHRcdG9wZW5UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoIHRydWUgKSApO1xuXHRcdFx0XHRcdFx0b3BlblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2UgPSBhbmltYXRlZEltZyA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0X21mcFRyaWdnZXIoJ1pvb21BbmltYXRpb25FbmRlZCcpO1xuXHRcdFx0XHRcdFx0XHR9LCAxNik7IC8vIGF2b2lkIGJsaW5rIHdoZW4gc3dpdGNoaW5nIGltYWdlc1xuXG5cdFx0XHRcdFx0XHR9LCBkdXJhdGlvbik7IC8vIHRoaXMgdGltZW91dCBlcXVhbHMgYW5pbWF0aW9uIGR1cmF0aW9uXG5cblx0XHRcdFx0XHR9LCAxNik7IC8vIGJ5IGFkZGluZyB0aGlzIHRpbWVvdXQgd2UgYXZvaWQgc2hvcnQgZ2xpdGNoIGF0IHRoZSBiZWdpbm5pbmcgb2YgYW5pbWF0aW9uXG5cblxuXHRcdFx0XHRcdC8vIExvdHMgb2YgdGltZW91dHMuLi5cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRfbWZwT24oQkVGT1JFX0NMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KG9wZW5UaW1lb3V0KTtcblxuXHRcdFx0XHRcdG1mcC5zdC5yZW1vdmFsRGVsYXkgPSBkdXJhdGlvbjtcblxuXHRcdFx0XHRcdGlmKCFpbWFnZSkge1xuXHRcdFx0XHRcdFx0aW1hZ2UgPSBtZnAuX2dldEl0ZW1Ub1pvb20oKTtcblx0XHRcdFx0XHRcdGlmKCFpbWFnZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZyA9IGdldEVsVG9BbmltYXRlKGltYWdlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KHRydWUpICk7XG5cdFx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKGFuaW1hdGVkSW1nKTtcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCgpICk7XG5cdFx0XHRcdFx0fSwgMTYpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cdFx0XHRcdFx0aWYoYW5pbWF0ZWRJbWcpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbWFnZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRfYWxsb3dab29tOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBtZnAuY3Vyckl0ZW0udHlwZSA9PT0gJ2ltYWdlJztcblx0XHR9LFxuXG5cdFx0X2dldEl0ZW1Ub1pvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYobWZwLmN1cnJJdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0cmV0dXJuIG1mcC5jdXJySXRlbS5pbWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEdldCBlbGVtZW50IHBvc3Rpb24gcmVsYXRpdmUgdG8gdmlld3BvcnRcblx0XHRfZ2V0T2Zmc2V0OiBmdW5jdGlvbihpc0xhcmdlKSB7XG5cdFx0XHR2YXIgZWw7XG5cdFx0XHRpZihpc0xhcmdlKSB7XG5cdFx0XHRcdGVsID0gbWZwLmN1cnJJdGVtLmltZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsID0gbWZwLnN0Lnpvb20ub3BlbmVyKG1mcC5jdXJySXRlbS5lbCB8fCBtZnAuY3Vyckl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb2Zmc2V0ID0gZWwub2Zmc2V0KCk7XG5cdFx0XHR2YXIgcGFkZGluZ1RvcCA9IHBhcnNlSW50KGVsLmNzcygncGFkZGluZy10b3AnKSwxMCk7XG5cdFx0XHR2YXIgcGFkZGluZ0JvdHRvbSA9IHBhcnNlSW50KGVsLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XG5cdFx0XHRvZmZzZXQudG9wIC09ICggJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gcGFkZGluZ1RvcCApO1xuXG5cblx0XHRcdC8qXG5cblx0XHRcdEFuaW1hdGluZyBsZWZ0ICsgdG9wICsgd2lkdGgvaGVpZ2h0IGxvb2tzIGdsaXRjaHkgaW4gRmlyZWZveCwgYnV0IHBlcmZlY3QgaW4gQ2hyb21lLiBBbmQgdmljZS12ZXJzYS5cblxuXHRcdFx0ICovXG5cdFx0XHR2YXIgb2JqID0ge1xuXHRcdFx0XHR3aWR0aDogZWwud2lkdGgoKSxcblx0XHRcdFx0Ly8gZml4IFplcHRvIGhlaWdodCtwYWRkaW5nIGlzc3VlXG5cdFx0XHRcdGhlaWdodDogKF9pc0pRID8gZWwuaW5uZXJIZWlnaHQoKSA6IGVsWzBdLm9mZnNldEhlaWdodCkgLSBwYWRkaW5nQm90dG9tIC0gcGFkZGluZ1RvcFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSSBoYXRlIHRvIGRvIHRoaXMsIGJ1dCB0aGVyZSBpcyBubyBhbm90aGVyIG9wdGlvblxuXHRcdFx0aWYoIGdldEhhc01velRyYW5zZm9ybSgpICkge1xuXHRcdFx0XHRvYmpbJy1tb3otdHJhbnNmb3JtJ10gPSBvYmpbJ3RyYW5zZm9ybSddID0gJ3RyYW5zbGF0ZSgnICsgb2Zmc2V0LmxlZnQgKyAncHgsJyArIG9mZnNldC50b3AgKyAncHgpJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iai5sZWZ0ID0gb2Zmc2V0LmxlZnQ7XG5cdFx0XHRcdG9iai50b3AgPSBvZmZzZXQudG9wO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cblx0fVxufSk7XG5cblxuXG4vKj4+em9vbSovXG5cbi8qPj5pZnJhbWUqL1xuXG52YXIgSUZSQU1FX05TID0gJ2lmcmFtZScsXG5cdF9lbXB0eVBhZ2UgPSAnLy9hYm91dDpibGFuaycsXG5cblx0X2ZpeElmcmFtZUJ1Z3MgPSBmdW5jdGlvbihpc1Nob3dpbmcpIHtcblx0XHRpZihtZnAuY3VyclRlbXBsYXRlW0lGUkFNRV9OU10pIHtcblx0XHRcdHZhciBlbCA9IG1mcC5jdXJyVGVtcGxhdGVbSUZSQU1FX05TXS5maW5kKCdpZnJhbWUnKTtcblx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXHRcdFx0XHQvLyByZXNldCBzcmMgYWZ0ZXIgdGhlIHBvcHVwIGlzIGNsb3NlZCB0byBhdm9pZCBcInZpZGVvIGtlZXBzIHBsYXlpbmcgYWZ0ZXIgcG9wdXAgaXMgY2xvc2VkXCIgYnVnXG5cdFx0XHRcdGlmKCFpc1Nob3dpbmcpIHtcblx0XHRcdFx0XHRlbFswXS5zcmMgPSBfZW1wdHlQYWdlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSUU4IGJsYWNrIHNjcmVlbiBidWcgZml4XG5cdFx0XHRcdGlmKG1mcC5pc0lFOCkge1xuXHRcdFx0XHRcdGVsLmNzcygnZGlzcGxheScsIGlzU2hvd2luZyA/ICdibG9jaycgOiAnbm9uZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSUZSQU1FX05TLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdCc8aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIHNyYz1cIi8vYWJvdXQ6YmxhbmtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+Jytcblx0XHRcdFx0JzwvZGl2PicsXG5cblx0XHRzcmNBY3Rpb246ICdpZnJhbWVfc3JjJyxcblxuXHRcdC8vIHdlIGRvbid0IGNhcmUgYW5kIHN1cHBvcnQgb25seSBvbmUgZGVmYXVsdCB0eXBlIG9mIFVSTCBieSBkZWZhdWx0XG5cdFx0cGF0dGVybnM6IHtcblx0XHRcdHlvdXR1YmU6IHtcblx0XHRcdFx0aW5kZXg6ICd5b3V0dWJlLmNvbScsXG5cdFx0XHRcdGlkOiAndj0nLFxuXHRcdFx0XHRzcmM6ICcvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEnXG5cdFx0XHR9LFxuXHRcdFx0dmltZW86IHtcblx0XHRcdFx0aW5kZXg6ICd2aW1lby5jb20vJyxcblx0XHRcdFx0aWQ6ICcvJyxcblx0XHRcdFx0c3JjOiAnLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyVpZCU/YXV0b3BsYXk9MSdcblx0XHRcdH0sXG5cdFx0XHRnbWFwczoge1xuXHRcdFx0XHRpbmRleDogJy8vbWFwcy5nb29nbGUuJyxcblx0XHRcdFx0c3JjOiAnJWlkJSZvdXRwdXQ9ZW1iZWQnXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdElmcmFtZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChJRlJBTUVfTlMpO1xuXG5cdFx0XHRfbWZwT24oJ0JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGUsIHByZXZUeXBlLCBuZXdUeXBlKSB7XG5cdFx0XHRcdGlmKHByZXZUeXBlICE9PSBuZXdUeXBlKSB7XG5cdFx0XHRcdFx0aWYocHJldlR5cGUgPT09IElGUkFNRV9OUykge1xuXHRcdFx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3MoKTsgLy8gaWZyYW1lIGlmIHJlbW92ZWRcblx0XHRcdFx0XHR9IGVsc2UgaWYobmV3VHlwZSA9PT0gSUZSQU1FX05TKSB7XG5cdFx0XHRcdFx0XHRfZml4SWZyYW1lQnVncyh0cnVlKTsgLy8gaWZyYW1lIGlzIHNob3dpbmdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0vLyBlbHNlIHtcblx0XHRcdFx0XHQvLyBpZnJhbWUgc291cmNlIGlzIHN3aXRjaGVkLCBkb24ndCBkbyBhbnl0aGluZ1xuXHRcdFx0XHQvL31cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQgKyAnLicgKyBJRlJBTUVfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfZml4SWZyYW1lQnVncygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldElmcmFtZTogZnVuY3Rpb24oaXRlbSwgdGVtcGxhdGUpIHtcblx0XHRcdHZhciBlbWJlZFNyYyA9IGl0ZW0uc3JjO1xuXHRcdFx0dmFyIGlmcmFtZVN0ID0gbWZwLnN0LmlmcmFtZTtcblxuXHRcdFx0JC5lYWNoKGlmcmFtZVN0LnBhdHRlcm5zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoZW1iZWRTcmMuaW5kZXhPZiggdGhpcy5pbmRleCApID4gLTEpIHtcblx0XHRcdFx0XHRpZih0aGlzLmlkKSB7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgdGhpcy5pZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0ZW1iZWRTcmMgPSBlbWJlZFNyYy5zdWJzdHIoZW1iZWRTcmMubGFzdEluZGV4T2YodGhpcy5pZCkrdGhpcy5pZC5sZW5ndGgsIGVtYmVkU3JjLmxlbmd0aCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRlbWJlZFNyYyA9IHRoaXMuaWQuY2FsbCggdGhpcywgZW1iZWRTcmMgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW1iZWRTcmMgPSB0aGlzLnNyYy5yZXBsYWNlKCclaWQlJywgZW1iZWRTcmMgKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIGRhdGFPYmogPSB7fTtcblx0XHRcdGlmKGlmcmFtZVN0LnNyY0FjdGlvbikge1xuXHRcdFx0XHRkYXRhT2JqW2lmcmFtZVN0LnNyY0FjdGlvbl0gPSBlbWJlZFNyYztcblx0XHRcdH1cblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIGRhdGFPYmosIGl0ZW0pO1xuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuXG5cbi8qPj5pZnJhbWUqL1xuXG4vKj4+Z2FsbGVyeSovXG4vKipcbiAqIEdldCBsb29wZWQgaW5kZXggZGVwZW5kaW5nIG9uIG51bWJlciBvZiBzbGlkZXNcbiAqL1xudmFyIF9nZXRMb29wZWRJZCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIG51bVNsaWRlcyA9IG1mcC5pdGVtcy5sZW5ndGg7XG5cdFx0aWYoaW5kZXggPiBudW1TbGlkZXMgLSAxKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggLSBudW1TbGlkZXM7XG5cdFx0fSBlbHNlICBpZihpbmRleCA8IDApIHtcblx0XHRcdHJldHVybiBudW1TbGlkZXMgKyBpbmRleDtcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4O1xuXHR9LFxuXHRfcmVwbGFjZUN1cnJUb3RhbCA9IGZ1bmN0aW9uKHRleHQsIGN1cnIsIHRvdGFsKSB7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvJWN1cnIlL2dpLCBjdXJyICsgMSkucmVwbGFjZSgvJXRvdGFsJS9naSwgdG90YWwpO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ2dhbGxlcnknLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdGFycm93TWFya3VwOiAnPGJ1dHRvbiB0aXRsZT1cIiV0aXRsZSVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZnAtYXJyb3cgbWZwLWFycm93LSVkaXIlXCI+PC9idXR0b24+Jyxcblx0XHRwcmVsb2FkOiBbMCwyXSxcblx0XHRuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG5cdFx0YXJyb3dzOiB0cnVlLFxuXG5cdFx0dFByZXY6ICdQcmV2aW91cyAoTGVmdCBhcnJvdyBrZXkpJyxcblx0XHR0TmV4dDogJ05leHQgKFJpZ2h0IGFycm93IGtleSknLFxuXHRcdHRDb3VudGVyOiAnJWN1cnIlIG9mICV0b3RhbCUnXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0R2FsbGVyeTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBnU3QgPSBtZnAuc3QuZ2FsbGVyeSxcblx0XHRcdFx0bnMgPSAnLm1mcC1nYWxsZXJ5JztcblxuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IHRydWU7IC8vIHRydWUgLSBuZXh0LCBmYWxzZSAtIHByZXZcblxuXHRcdFx0aWYoIWdTdCB8fCAhZ1N0LmVuYWJsZWQgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRcdF93cmFwQ2xhc3NlcyArPSAnIG1mcC1nYWxsZXJ5JztcblxuXHRcdFx0X21mcE9uKE9QRU5fRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdGlmKGdTdC5uYXZpZ2F0ZUJ5SW1nQ2xpY2spIHtcblx0XHRcdFx0XHRtZnAud3JhcC5vbignY2xpY2snK25zLCAnLm1mcC1pbWcnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmKG1mcC5pdGVtcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdG1mcC5uZXh0KCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9kb2N1bWVudC5vbigna2V5ZG93bicrbnMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0XHRcdFx0bWZwLnByZXYoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcblx0XHRcdFx0XHRcdG1mcC5uZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oJ1VwZGF0ZVN0YXR1cycrbnMsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcblx0XHRcdFx0aWYoZGF0YS50ZXh0KSB7XG5cdFx0XHRcdFx0ZGF0YS50ZXh0ID0gX3JlcGxhY2VDdXJyVG90YWwoZGF0YS50ZXh0LCBtZnAuY3Vyckl0ZW0uaW5kZXgsIG1mcC5pdGVtcy5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKE1BUktVUF9QQVJTRV9FVkVOVCtucywgZnVuY3Rpb24oZSwgZWxlbWVudCwgdmFsdWVzLCBpdGVtKSB7XG5cdFx0XHRcdHZhciBsID0gbWZwLml0ZW1zLmxlbmd0aDtcblx0XHRcdFx0dmFsdWVzLmNvdW50ZXIgPSBsID4gMSA/IF9yZXBsYWNlQ3VyclRvdGFsKGdTdC50Q291bnRlciwgaXRlbS5pbmRleCwgbCkgOiAnJztcblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oJ0J1aWxkQ29udHJvbHMnICsgbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSAmJiBnU3QuYXJyb3dzICYmICFtZnAuYXJyb3dMZWZ0KSB7XG5cdFx0XHRcdFx0dmFyIG1hcmt1cCA9IGdTdC5hcnJvd01hcmt1cCxcblx0XHRcdFx0XHRcdGFycm93TGVmdCA9IG1mcC5hcnJvd0xlZnQgPSAkKCBtYXJrdXAucmVwbGFjZSgvJXRpdGxlJS9naSwgZ1N0LnRQcmV2KS5yZXBsYWNlKC8lZGlyJS9naSwgJ2xlZnQnKSApLmFkZENsYXNzKFBSRVZFTlRfQ0xPU0VfQ0xBU1MpLFxuXHRcdFx0XHRcdFx0YXJyb3dSaWdodCA9IG1mcC5hcnJvd1JpZ2h0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50TmV4dCkucmVwbGFjZSgvJWRpciUvZ2ksICdyaWdodCcpICkuYWRkQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUyk7XG5cblx0XHRcdFx0XHRhcnJvd0xlZnQuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAucHJldigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGFycm93UmlnaHQuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0bWZwLmNvbnRhaW5lci5hcHBlbmQoYXJyb3dMZWZ0LmFkZChhcnJvd1JpZ2h0KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0hBTkdFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9wcmVsb2FkVGltZW91dCkgY2xlYXJUaW1lb3V0KG1mcC5fcHJlbG9hZFRpbWVvdXQpO1xuXG5cdFx0XHRcdG1mcC5fcHJlbG9hZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG1mcC5wcmVsb2FkTmVhcmJ5SW1hZ2VzKCk7XG5cdFx0XHRcdFx0bWZwLl9wcmVsb2FkVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdH0sIDE2KTtcblx0XHRcdH0pO1xuXG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9kb2N1bWVudC5vZmYobnMpO1xuXHRcdFx0XHRtZnAud3JhcC5vZmYoJ2NsaWNrJytucyk7XG5cdFx0XHRcdG1mcC5hcnJvd1JpZ2h0ID0gbWZwLmFycm93TGVmdCA9IG51bGw7XG5cdFx0XHR9KTtcblxuXHRcdH0sXG5cdFx0bmV4dDogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gdHJ1ZTtcblx0XHRcdG1mcC5pbmRleCA9IF9nZXRMb29wZWRJZChtZnAuaW5kZXggKyAxKTtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdH0sXG5cdFx0cHJldjogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gZmFsc2U7XG5cdFx0XHRtZnAuaW5kZXggPSBfZ2V0TG9vcGVkSWQobWZwLmluZGV4IC0gMSk7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdGdvVG86IGZ1bmN0aW9uKG5ld0luZGV4KSB7XG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gKG5ld0luZGV4ID49IG1mcC5pbmRleCk7XG5cdFx0XHRtZnAuaW5kZXggPSBuZXdJbmRleDtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdH0sXG5cdFx0cHJlbG9hZE5lYXJieUltYWdlczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcCA9IG1mcC5zdC5nYWxsZXJ5LnByZWxvYWQsXG5cdFx0XHRcdHByZWxvYWRCZWZvcmUgPSBNYXRoLm1pbihwWzBdLCBtZnAuaXRlbXMubGVuZ3RoKSxcblx0XHRcdFx0cHJlbG9hZEFmdGVyID0gTWF0aC5taW4ocFsxXSwgbWZwLml0ZW1zLmxlbmd0aCksXG5cdFx0XHRcdGk7XG5cblx0XHRcdGZvcihpID0gMTsgaSA8PSAobWZwLmRpcmVjdGlvbiA/IHByZWxvYWRBZnRlciA6IHByZWxvYWRCZWZvcmUpOyBpKyspIHtcblx0XHRcdFx0bWZwLl9wcmVsb2FkSXRlbShtZnAuaW5kZXgraSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoaSA9IDE7IGkgPD0gKG1mcC5kaXJlY3Rpb24gPyBwcmVsb2FkQmVmb3JlIDogcHJlbG9hZEFmdGVyKTsgaSsrKSB7XG5cdFx0XHRcdG1mcC5fcHJlbG9hZEl0ZW0obWZwLmluZGV4LWkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3ByZWxvYWRJdGVtOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0aW5kZXggPSBfZ2V0TG9vcGVkSWQoaW5kZXgpO1xuXG5cdFx0XHRpZihtZnAuaXRlbXNbaW5kZXhdLnByZWxvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpdGVtID0gbWZwLml0ZW1zW2luZGV4XTtcblx0XHRcdGlmKCFpdGVtLnBhcnNlZCkge1xuXHRcdFx0XHRpdGVtID0gbWZwLnBhcnNlRWwoIGluZGV4ICk7XG5cdFx0XHR9XG5cblx0XHRcdF9tZnBUcmlnZ2VyKCdMYXp5TG9hZCcsIGl0ZW0pO1xuXG5cdFx0XHRpZihpdGVtLnR5cGUgPT09ICdpbWFnZScpIHtcblx0XHRcdFx0aXRlbS5pbWcgPSAkKCc8aW1nIGNsYXNzPVwibWZwLWltZ1wiIC8+Jykub24oJ2xvYWQubWZwbG9hZGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0fSkub24oJ2Vycm9yLm1mcGxvYWRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdFx0aXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdMYXp5TG9hZEVycm9yJywgaXRlbSk7XG5cdFx0XHRcdH0pLmF0dHIoJ3NyYycsIGl0ZW0uc3JjKTtcblx0XHRcdH1cblxuXG5cdFx0XHRpdGVtLnByZWxvYWRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmdhbGxlcnkqL1xuXG4vKj4+cmV0aW5hKi9cblxudmFyIFJFVElOQV9OUyA9ICdyZXRpbmEnO1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoUkVUSU5BX05TLCB7XG5cdG9wdGlvbnM6IHtcblx0XHRyZXBsYWNlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRyZXR1cm4gaXRlbS5zcmMucmVwbGFjZSgvXFwuXFx3KyQvLCBmdW5jdGlvbihtKSB7IHJldHVybiAnQDJ4JyArIG07IH0pO1xuXHRcdH0sXG5cdFx0cmF0aW86IDEgLy8gRnVuY3Rpb24gb3IgbnVtYmVyLiAgU2V0IHRvIDEgdG8gZGlzYWJsZS5cblx0fSxcblx0cHJvdG86IHtcblx0XHRpbml0UmV0aW5hOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSkge1xuXG5cdFx0XHRcdHZhciBzdCA9IG1mcC5zdC5yZXRpbmEsXG5cdFx0XHRcdFx0cmF0aW8gPSBzdC5yYXRpbztcblxuXHRcdFx0XHRyYXRpbyA9ICFpc05hTihyYXRpbykgPyByYXRpbyA6IHJhdGlvKCk7XG5cblx0XHRcdFx0aWYocmF0aW8gPiAxKSB7XG5cdFx0XHRcdFx0X21mcE9uKCdJbWFnZUhhc1NpemUnICsgJy4nICsgUkVUSU5BX05TLCBmdW5jdGlvbihlLCBpdGVtKSB7XG5cdFx0XHRcdFx0XHRpdGVtLmltZy5jc3Moe1xuXHRcdFx0XHRcdFx0XHQnbWF4LXdpZHRoJzogaXRlbS5pbWdbMF0ubmF0dXJhbFdpZHRoIC8gcmF0aW8sXG5cdFx0XHRcdFx0XHRcdCd3aWR0aCc6ICcxMDAlJ1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0X21mcE9uKCdFbGVtZW50UGFyc2UnICsgJy4nICsgUkVUSU5BX05TLCBmdW5jdGlvbihlLCBpdGVtKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnNyYyA9IHN0LnJlcGxhY2VTcmMoaXRlbSwgcmF0aW8pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+cmV0aW5hKi9cbiBfY2hlY2tJbnN0YW5jZSgpOyB9KSk7IiwiUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcblx0J29wZXJhdG9yJzogL1s8Pl09P3xbIT1dPT89P3wtLT98XFwrXFwrP3wmJj98XFx8XFx8P3xbPyovfl4lXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG4iLCJ2YXIgX3NlbGYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG5cdD8gd2luZG93ICAgLy8gaWYgaW4gYnJvd3NlclxuXHQ6IChcblx0XHQodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpXG5cdFx0PyBzZWxmIC8vIGlmIGluIHdvcmtlclxuXHRcdDoge30gICAvLyBpZiBpbiBub2RlIGpzXG5cdCk7XG5cbi8qKlxuICogUHJpc206IExpZ2h0d2VpZ2h0LCByb2J1c3QsIGVsZWdhbnQgc3ludGF4IGhpZ2hsaWdodGluZ1xuICogTUlUIGxpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHAvXG4gKiBAYXV0aG9yIExlYSBWZXJvdSBodHRwOi8vbGVhLnZlcm91Lm1lXG4gKi9cblxudmFyIFByaXNtID0gKGZ1bmN0aW9uIChfc2VsZil7XG5cbi8vIFByaXZhdGUgaGVscGVyIHZhcnNcbnZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG52YXIgdW5pcXVlSWQgPSAwO1xuXG5cbnZhciBfID0ge1xuXHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cdHV0aWw6IHtcblx0XHRlbmNvZGU6IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBfLnV0aWwuZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKF8udXRpbC5lbmNvZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHR9LFxuXG5cdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdH0sXG5cblx0XHQvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHR2YXIgY2xvbmUsIGlkLCB0eXBlID0gXy51dGlsLnR5cGUobyk7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIFByaXNtIGxhbmd1YWdlIG9mIHRoZSBnaXZlbiBlbGVtZW50IHNldCBieSBhIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcy5cblx0XHQgKlxuXHRcdCAqIElmIG5vIGxhbmd1YWdlIGlzIHNldCBmb3IgdGhlIGVsZW1lbnQgb3IgdGhlIGVsZW1lbnQgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBgbm9uZWAgd2lsbCBiZSByZXR1cm5lZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhbGFuZy50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIChlbGVtZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCAnbm9uZSddKVsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICdub25lJztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgc2NyaXB0IGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBkb2VzIF9fbm90X18gd29yayBmb3IgbGluZSBzY3JpcHQgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtIVE1MU2NyaXB0RWxlbWVudCB8IG51bGx9XG5cdFx0ICovXG5cdFx0Y3VycmVudFNjcmlwdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJ2N1cnJlbnRTY3JpcHQnIGluIGRvY3VtZW50KSB7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJRTExIHdvcmthcm91bmRcblx0XHRcdC8vIHdlJ2xsIGdldCB0aGUgc3JjIG9mIHRoZSBjdXJyZW50IHNjcmlwdCBieSBwYXJzaW5nIElFMTEncyBlcnJvciBzdGFjayB0cmFjZVxuXHRcdFx0Ly8gdGhpcyB3aWxsIG5vdCB3b3JrIGZvciBpbmxpbmUgc2NyaXB0c1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBHZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suIFNwZWNpZmljYWxseSB3b3JrcyB3aXRoIHRoZSBmb3JtYXQgb2Ygc3RhY2sgdHJhY2VzIGluIElFLlxuXHRcdFx0XHQvLyBBIHN0YWNrIHdpbGwgbG9vayBsaWtlIHRoaXM6XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIEVycm9yXG5cdFx0XHRcdC8vICAgIGF0IF8udXRpbC5jdXJyZW50U2NyaXB0IChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczoxMTk6NSlcblx0XHRcdFx0Ly8gICAgYXQgR2xvYmFsIGNvZGUgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjYwNjoxKVxuXG5cdFx0XHRcdHZhciBzcmMgPSAoL2F0IFteKFxcclxcbl0qXFwoKC4qKTouKzouK1xcKSQvaS5leGVjKGVyci5zdGFjaykgfHwgW10pWzFdO1xuXHRcdFx0XHRpZiAoc3JjKSB7XG5cdFx0XHRcdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzY3JpcHRzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc2NyaXB0c1tpXS5zcmMgPT0gc3JjKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzY3JpcHRzW2ldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bGFuZ3VhZ2VzOiB7XG5cdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHR2YXIgbGFuZyA9IF8udXRpbC5jbG9uZShfLmxhbmd1YWdlc1tpZF0pO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEluc2VydCBhIHRva2VuIGJlZm9yZSBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgbGl0ZXJhbFxuXHRcdCAqIEFzIHRoaXMgbmVlZHMgdG8gcmVjcmVhdGUgdGhlIG9iamVjdCAod2UgY2Fubm90IGFjdHVhbGx5IGluc2VydCBiZWZvcmUga2V5cyBpbiBvYmplY3QgbGl0ZXJhbHMpLFxuXHRcdCAqIHdlIGNhbm5vdCBqdXN0IHByb3ZpZGUgYW4gb2JqZWN0LCB3ZSBuZWVkIGFuIG9iamVjdCBhbmQgYSBrZXkuXG5cdFx0ICogQHBhcmFtIGluc2lkZSBUaGUga2V5IChvciBsYW5ndWFnZSBpZCkgb2YgdGhlIHBhcmVudFxuXHRcdCAqIEBwYXJhbSBiZWZvcmUgVGhlIGtleSB0byBpbnNlcnQgYmVmb3JlLlxuXHRcdCAqIEBwYXJhbSBpbnNlcnQgT2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyB0byBpbnNlcnRcblx0XHQgKiBAcGFyYW0gcm9vdCBUaGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYGluc2lkZWAuIElmIGVxdWFsIHRvIFByaXNtLmxhbmd1YWdlcywgaXQgY2FuIGJlIG9taXR0ZWQuXG5cdFx0ICovXG5cdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoaW5zaWRlLCBiZWZvcmUsIGluc2VydCwgcm9vdCkge1xuXHRcdFx0cm9vdCA9IHJvb3QgfHwgXy5sYW5ndWFnZXM7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRpZiAoZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblxuXHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0aWYgKCFpbnNlcnQuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRyb290W2luc2lkZV0gPSByZXQ7XG5cblx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdHRoaXNba2V5XSA9IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdERGUzogZnVuY3Rpb24gREZTKG8sIGNhbGxiYWNrLCB0eXBlLCB2aXNpdGVkKSB7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIG8pIHtcblx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSBvW2ldLFxuXHRcdFx0XHRcdCAgICBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgaSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiB7fSxcblxuXHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uKGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdH0sXG5cblx0aGlnaGxpZ2h0QWxsVW5kZXI6IGZ1bmN0aW9uKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0c2VsZWN0b3I6ICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSdcblx0XHR9O1xuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0ZW52LmVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVudi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpKTtcblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgZWxlbWVudCA9IGVudi5lbGVtZW50c1tpKytdOykge1xuXHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBhc3luYywgY2FsbGJhY2spIHtcblx0XHQvLyBGaW5kIGxhbmd1YWdlXG5cdFx0dmFyIGxhbmd1YWdlID0gXy51dGlsLmdldExhbmd1YWdlKGVsZW1lbnQpO1xuXHRcdHZhciBncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBlbGVtZW50LCBpZiBub3QgcHJlc2VudFxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIHBhcmVudCwgZm9yIHN0eWxpbmdcblx0XHR2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnKSB7XG5cdFx0XHRwYXJlbnQuY2xhc3NOYW1lID0gcGFyZW50LmNsYXNzTmFtZS5yZXBsYWNlKGxhbmcsICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykgKyAnIGxhbmd1YWdlLScgKyBsYW5ndWFnZTtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRjb2RlOiBjb2RlXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGluc2VydEhpZ2hsaWdodGVkQ29kZShoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdGVudi5oaWdobGlnaHRlZENvZGUgPSBoaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLWhpZ2hsaWdodCcsIGVudik7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwoZW52LmVsZW1lbnQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLnV0aWwuZW5jb2RlKGVudi5jb2RlKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jICYmIF9zZWxmLldvcmtlcikge1xuXHRcdFx0dmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXy5maWxlbmFtZSk7XG5cblx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdH07XG5cblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGU6IGVudi5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLmhpZ2hsaWdodChlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSkpO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoXy51dGlsLmVuY29kZShlbnYudG9rZW5zKSwgZW52Lmxhbmd1YWdlKTtcblx0fSxcblxuXHRtYXRjaEdyYW1tYXI6IGZ1bmN0aW9uICh0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGluZGV4LCBzdGFydFBvcywgb25lc2hvdCwgdGFyZ2V0KSB7XG5cdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0aWYgKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJucyA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0cGF0dGVybnMgPSBBcnJheS5pc0FycmF5KHBhdHRlcm5zKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRpZiAodGFyZ2V0ICYmIHRhcmdldCA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQgPSAhIXBhdHRlcm4ubG9va2JlaGluZCxcblx0XHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm4uZ3JlZWR5LFxuXHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRcdGFsaWFzID0gcGF0dGVybi5hbGlhcztcblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdFx0dmFyIGZsYWdzID0gcGF0dGVybi5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXN1eV0qJC8pWzBdO1xuXHRcdFx0XHRcdHBhdHRlcm4ucGF0dGVybiA9IFJlZ0V4cChwYXR0ZXJuLnBhdHRlcm4uc291cmNlLCBmbGFncyArICdnJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXR0ZXJuID0gcGF0dGVybi5wYXR0ZXJuIHx8IHBhdHRlcm47XG5cblx0XHRcdFx0Ly8gRG9u4oCZdCBjYWNoZSBsZW5ndGggYXMgaXQgY2hhbmdlcyBkdXJpbmcgdGhlIGxvb3Bcblx0XHRcdFx0Zm9yICh2YXIgaSA9IGluZGV4LCBwb3MgPSBzdGFydFBvczsgaSA8IHN0cmFyci5sZW5ndGg7IHBvcyArPSBzdHJhcnJbaV0ubGVuZ3RoLCArK2kpIHtcblxuXHRcdFx0XHRcdHZhciBzdHIgPSBzdHJhcnJbaV07XG5cblx0XHRcdFx0XHRpZiAoc3RyYXJyLmxlbmd0aCA+IHRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSAmJiBpICE9IHN0cmFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IHBvcztcblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyAobG9va2JlaGluZCAmJiBtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDApLFxuXHRcdFx0XHRcdFx0ICAgIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgsXG5cdFx0XHRcdFx0XHQgICAgayA9IGksXG5cdFx0XHRcdFx0XHQgICAgcCA9IHBvcztcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbGVuID0gc3RyYXJyLmxlbmd0aDsgayA8IGxlbiAmJiAocCA8IHRvIHx8ICghc3RyYXJyW2tdLnR5cGUgJiYgIXN0cmFycltrIC0gMV0uZ3JlZWR5KSk7ICsraykge1xuXHRcdFx0XHRcdFx0XHRwICs9IHN0cmFycltrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdC8vIE1vdmUgdGhlIGluZGV4IGkgdG8gdGhlIGVsZW1lbnQgaW4gc3RyYXJyIHRoYXQgaXMgY2xvc2VzdCB0byBmcm9tXG5cdFx0XHRcdFx0XHRcdGlmIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0XHQrK2k7XG5cdFx0XHRcdFx0XHRcdFx0cG9zID0gcDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJZiBzdHJhcnJbaV0gaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0XHRpZiAoc3RyYXJyW2ldIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE51bWJlciBvZiB0b2tlbnMgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHdpdGggdGhlIG5ldyBtYXRjaFxuXHRcdFx0XHRcdFx0ZGVsTnVtID0gayAtIGk7XG5cdFx0XHRcdFx0XHRzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG5cdFx0XHRcdFx0XHRtYXRjaC5pbmRleCAtPSBwb3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuXHRcdFx0XHRcdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHN0ciksXG5cdFx0XHRcdFx0XHRcdGRlbE51bSA9IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdFx0aWYgKG9uZXNob3QpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGxvb2tiZWhpbmQpIHtcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSBtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleCArIGxvb2tiZWhpbmRMZW5ndGgsXG5cdFx0XHRcdFx0ICAgIG1hdGNoID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCksXG5cdFx0XHRcdFx0ICAgIHRvID0gZnJvbSArIG1hdGNoLmxlbmd0aCxcblx0XHRcdFx0XHQgICAgYmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pLFxuXHRcdFx0XHRcdCAgICBhZnRlciA9IHN0ci5zbGljZSh0byk7XG5cblx0XHRcdFx0XHR2YXIgYXJncyA9IFtpLCBkZWxOdW1dO1xuXG5cdFx0XHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0cG9zICs9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRhcmdzLnB1c2goYmVmb3JlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgd3JhcHBlZCA9IG5ldyBUb2tlbih0b2tlbiwgaW5zaWRlPyBfLnRva2VuaXplKG1hdGNoLCBpbnNpZGUpIDogbWF0Y2gsIGFsaWFzLCBtYXRjaCwgZ3JlZWR5KTtcblxuXHRcdFx0XHRcdGFyZ3MucHVzaCh3cmFwcGVkKTtcblxuXHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGFmdGVyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHN0cmFyciwgYXJncyk7XG5cblx0XHRcdFx0XHRpZiAoZGVsTnVtICE9IDEpXG5cdFx0XHRcdFx0XHRfLm1hdGNoR3JhbW1hcih0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGksIHBvcywgdHJ1ZSwgdG9rZW4gKyAnLCcgKyBqKTtcblxuXHRcdFx0XHRcdGlmIChvbmVzaG90KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0dG9rZW5pemU6IGZ1bmN0aW9uKHRleHQsIGdyYW1tYXIpIHtcblx0XHR2YXIgc3RyYXJyID0gW3RleHRdO1xuXG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cblx0XHRpZiAocmVzdCkge1xuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdH1cblxuXHRcdF8ubWF0Y2hHcmFtbWFyKHRleHQsIHN0cmFyciwgZ3JhbW1hciwgMCwgMCwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIHN0cmFycjtcblx0fSxcblxuXHRob29rczoge1xuXHRcdGFsbDoge30sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdGhvb2tzW25hbWVdID0gaG9va3NbbmFtZV0gfHwgW107XG5cblx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0aWYgKCFjYWxsYmFja3MgfHwgIWNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpPTAsIGNhbGxiYWNrOyBjYWxsYmFjayA9IGNhbGxiYWNrc1tpKytdOykge1xuXHRcdFx0XHRjYWxsYmFjayhlbnYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRUb2tlbjogVG9rZW5cbn07XG5cbl9zZWxmLlByaXNtID0gXztcblxuZnVuY3Rpb24gVG9rZW4odHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIsIGdyZWVkeSkge1xuXHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHR0aGlzLmxlbmd0aCA9IChtYXRjaGVkU3RyIHx8ICcnKS5sZW5ndGh8MDtcblx0dGhpcy5ncmVlZHkgPSAhIWdyZWVkeTtcbn1cblxuVG9rZW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24obywgbGFuZ3VhZ2UpIHtcblx0aWYgKHR5cGVvZiBvID09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIG87XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdHJldHVybiBvLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KGVsZW1lbnQsIGxhbmd1YWdlKTtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdHZhciBlbnYgPSB7XG5cdFx0dHlwZTogby50eXBlLFxuXHRcdGNvbnRlbnQ6IFRva2VuLnN0cmluZ2lmeShvLmNvbnRlbnQsIGxhbmd1YWdlKSxcblx0XHR0YWc6ICdzcGFuJyxcblx0XHRjbGFzc2VzOiBbJ3Rva2VuJywgby50eXBlXSxcblx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0fTtcblxuXHRpZiAoby5hbGlhcykge1xuXHRcdHZhciBhbGlhc2VzID0gQXJyYXkuaXNBcnJheShvLmFsaWFzKSA/IG8uYWxpYXMgOiBbby5hbGlhc107XG5cdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZW52LmNsYXNzZXMsIGFsaWFzZXMpO1xuXHR9XG5cblx0Xy5ob29rcy5ydW4oJ3dyYXAnLCBlbnYpO1xuXG5cdHZhciBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoZW52LmF0dHJpYnV0ZXMpLm1hcChmdW5jdGlvbihuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIChlbnYuYXR0cmlidXRlc1tuYW1lXSB8fCAnJykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpICsgJ1wiJztcblx0fSkuam9pbignICcpO1xuXG5cdHJldHVybiAnPCcgKyBlbnYudGFnICsgJyBjbGFzcz1cIicgKyBlbnYuY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICsgKGF0dHJpYnV0ZXMgPyAnICcgKyBhdHRyaWJ1dGVzIDogJycpICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcbn07XG5cbmlmICghX3NlbGYuZG9jdW1lbnQpIHtcblx0aWYgKCFfc2VsZi5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0Ly8gaW4gTm9kZS5qc1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0aWYgKCFfLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcikge1xuXHRcdC8vIEluIHdvcmtlclxuXHRcdF9zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpLFxuXHRcdFx0XHRsYW5nID0gbWVzc2FnZS5sYW5ndWFnZSxcblx0XHRcdFx0Y29kZSA9IG1lc3NhZ2UuY29kZSxcblx0XHRcdFx0aW1tZWRpYXRlQ2xvc2UgPSBtZXNzYWdlLmltbWVkaWF0ZUNsb3NlO1xuXG5cdFx0XHRfc2VsZi5wb3N0TWVzc2FnZShfLmhpZ2hsaWdodChjb2RlLCBfLmxhbmd1YWdlc1tsYW5nXSwgbGFuZykpO1xuXHRcdFx0aWYgKGltbWVkaWF0ZUNsb3NlKSB7XG5cdFx0XHRcdF9zZWxmLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpO1xuXHR9XG5cblx0cmV0dXJuIF87XG59XG5cbi8vR2V0IGN1cnJlbnQgc2NyaXB0IGFuZCBoaWdobGlnaHRcbnZhciBzY3JpcHQgPSBfLnV0aWwuY3VycmVudFNjcmlwdCgpO1xuXG5pZiAoc2NyaXB0KSB7XG5cdF8uZmlsZW5hbWUgPSBzY3JpcHQuc3JjO1xuXG5cdGlmIChzY3JpcHQuaGFzQXR0cmlidXRlKCdkYXRhLW1hbnVhbCcpKSB7XG5cdFx0Xy5tYW51YWwgPSB0cnVlO1xuXHR9XG59XG5cbmlmICghXy5tYW51YWwpIHtcblx0ZnVuY3Rpb24gaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKCkge1xuXHRcdGlmICghXy5tYW51YWwpIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsKCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwibG9hZGluZ1wiLCB0aGVuIHdlJ2xsIHVzZSBET01Db250ZW50TG9hZGVkLlxuXHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJpbnRlcmFjdGl2ZVwiIGFuZCB0aGUgcHJpc20uanMgc2NyaXB0IGlzIGRlZmVycmVkLCB0aGVuIHdlJ2xsIGFsc28gdXNlIHRoZVxuXHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHQvLyBtaWdodCB0YWtlIGxvbmdlciBvbmUgYW5pbWF0aW9uIGZyYW1lIHRvIGV4ZWN1dGUgd2hpY2ggY2FuIGNyZWF0ZSBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIG9ubHkgc29tZSBwbHVnaW5zIGhhdmVcblx0Ly8gYmVlbiBsb2FkZWQgd2hlbiBQcmlzbS5oaWdobGlnaHRBbGwoKSBpcyBleGVjdXRlZCwgZGVwZW5kaW5nIG9uIGhvdyBmYXN0IHJlc291cmNlcyBhcmUgbG9hZGVkLlxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuXHRpZiAocmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnIHx8IHJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgc2NyaXB0ICYmIHNjcmlwdC5kZWZlcikge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaywgMTYpO1xuXHRcdH1cblx0fVxufVxuXG5yZXR1cm4gXztcblxufSkoX3NlbGYpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG4iLCIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXStbXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdydWxlJzogL0BbXFx3LV0rL1xuXHRcdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3VybCc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgndXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8W15cXG5cXHIoKV0qKVxcXFwpJywgJ2knKSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZnVuY3Rpb24nOiAvXnVybC9pLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxcKHxcXCkkL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NlbGVjdG9yJzogUmVnRXhwKCdbXnt9XFxcXHNdKD86W157fTtcIlxcJ118JyArIHN0cmluZy5zb3VyY2UgKyAnKSo/KD89XFxcXHMqXFxcXHspJyksXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IHN0cmluZyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J3Byb3BlcnR5JzogL1stX2EtelxceEEwLVxcdUZGRkZdWy1cXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqOikvaSxcblx0XHQnaW1wb3J0YW50JzogLyFpbXBvcnRhbnRcXGIvaSxcblx0XHQnZnVuY3Rpb24nOiAvWy1hLXowLTldKyg/PVxcKCkvaSxcblx0XHQncHVuY3R1YXRpb24nOiAvWygpe307OixdL1xuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzcztcblxuXHR2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0aWYgKG1hcmt1cCkge1xuXHRcdG1hcmt1cC50YWcuYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnYXR0ci12YWx1ZScsIHtcblx0XHRcdCdzdHlsZS1hdHRyJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxzKnN0eWxlPShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxccypzdHlsZS9pLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBtYXJrdXAudGFnLmluc2lkZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXHMqPVxccypbJ1wiXXxbJ1wiXVxccyokLyxcblx0XHRcdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC8uKy9pLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGlhczogJ2xhbmd1YWdlLWNzcydcblx0XHRcdH1cblx0XHR9LCBtYXJrdXAudGFnKTtcblx0fVxuXG59KFByaXNtKSk7XG4iLCJQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pW18kQS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxcLig/OnByb3RvdHlwZXxjb25zdHJ1Y3RvcikpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86Xnx9KVxccyopKD86Y2F0Y2h8ZmluYWxseSlcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteLl18XFwuXFwuXFwuXFxzKilcXGIoPzphc3xhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0J251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG5cdC8vIEFsbG93IGZvciBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgKFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMDA4NDQ0KVxuXHQnZnVuY3Rpb24nOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKig/OlxcLlxccyooPzphcHBseXxiaW5kfGNhbGwpXFxzKik/XFwoKS8sXG5cdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiZ8XFx8XFx8fFshPV09PXw8PD0/fD4+Pj89P3xbLSsqLyUmfF4hPTw+XT0/fFxcLnszfXxcXD9bLj9dP3xbfjpdL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdrZXl3b3JkJywge1xuXHQncmVnZXgnOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc10pXFxzKilcXC8oPzpcXFsoPzpbXlxcXVxcXFxcXHJcXG5dfFxcXFwuKSpdfFxcXFwufFteL1xcXFxcXFtcXHJcXG5dKStcXC9bZ2lteXVzXXswLDZ9KD89KD86XFxzfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKig/OiR8W1xcclxcbiwuOzp9KVxcXV18XFwvXFwvKSkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfFtfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccytbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9bXyRhLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKj0+KS9pLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKj0+KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86W18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccyopXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccypcXHspLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fVxuXHRdLFxuXHQnY29uc3RhbnQnOiAvXFxiW0EtWl0oPzpbQS1aX118XFxkeD8pKlxcYi9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3N0cmluZycsIHtcblx0J3RlbXBsYXRlLXN0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK318KD8hXFwkeylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCR7fH0kLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IC9bXFxzXFxTXSsvXG5cdFx0fVxuXHR9XG59KTtcblxuaWYgKFByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZCgnc2NyaXB0JywgJ2phdmFzY3JpcHQnKTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG4iLCIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQgYW5kIGluZGV4LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGluZGV4KSB7XG5cdFx0cmV0dXJuICdfX18nICsgbGFuZ3VhZ2UudG9VcHBlckNhc2UoKSArIGluZGV4ICsgJ19fXyc7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10gPSB7fSwge1xuXHRcdGJ1aWxkUGxhY2Vob2xkZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRva2VuaXplIGFsbCBpbmxpbmUgdGVtcGxhdGluZyBleHByZXNzaW9ucyBtYXRjaGluZyBgcGxhY2Vob2xkZXJQYXR0ZXJuYC5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgcmVwbGFjZUZpbHRlcmAgaXMgcHJvdmlkZWQsIG9ubHkgbWF0Y2hlcyBvZiBgcGxhY2Vob2xkZXJQYXR0ZXJuYCBmb3Igd2hpY2ggYHJlcGxhY2VGaWx0ZXJgIHJldHVybnNcblx0XHRcdCAqIGB0cnVlYCB3aWxsIGJlIHJlcGxhY2VkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYmVmb3JlLXRva2VuaXplYCBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBsYW5ndWFnZSBpZC5cblx0XHRcdCAqIEBwYXJhbSB7UmVnRXhwfSBwbGFjZWhvbGRlclBhdHRlcm4gVGhlIG1hdGNoZXMgb2YgdGhpcyBwYXR0ZXJuIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXJzLlxuXHRcdFx0ICogQHBhcmFtIHsobWF0Y2g6IHN0cmluZykgPT4gYm9vbGVhbn0gW3JlcGxhY2VGaWx0ZXJdXG5cdFx0XHQgKi9cblx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG5cdFx0XHRcdGlmIChlbnYubGFuZ3VhZ2UgIT09IGxhbmd1YWdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRva2VuU3RhY2sgPSBlbnYudG9rZW5TdGFjayA9IFtdO1xuXG5cdFx0XHRcdGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVwbGFjZUZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhcmVwbGFjZUZpbHRlcihtYXRjaCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGkgPSB0b2tlblN0YWNrLmxlbmd0aDtcblx0XHRcdFx0XHR2YXIgcGxhY2Vob2xkZXI7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBmb3IgZXhpc3Rpbmcgc3RyaW5nc1xuXHRcdFx0XHRcdHdoaWxlIChlbnYuY29kZS5pbmRleE9mKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSAhPT0gLTEpXG5cdFx0XHRcdFx0XHQrK2k7XG5cblx0XHRcdFx0XHQvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcblx0XHRcdFx0XHR0b2tlblN0YWNrW2ldID0gbWF0Y2g7XG5cblx0XHRcdFx0XHRyZXR1cm4gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFN3aXRjaCB0aGUgZ3JhbW1hciB0byBtYXJrdXBcblx0XHRcdFx0ZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBwcm9wZXIgdG9rZW5zIGFmdGVyIHRva2VuaXppbmcuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBhZnRlci10b2tlbml6ZWAgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0XHQgKi9cblx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSkge1xuXHRcdFx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgYmFja1xuXHRcdFx0XHRlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdFx0dmFyIGogPSAwO1xuXHRcdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKTtcblxuXHRcdFx0XHRmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHQvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG5cdFx0XHRcdFx0XHRpZiAoaiA+PSBrZXlzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHwgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGtleXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciB0ID0gZW52LnRva2VuU3RhY2tba107XG5cdFx0XHRcdFx0XHRcdHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogdG9rZW4uY29udGVudDtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGspO1xuXG5cdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IHMuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytqO1xuXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHMuc3Vic3RyaW5nKDAsIGluZGV4KTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbWlkZGxlID0gbmV3IFByaXNtLlRva2VuKGxhbmd1YWdlLCBQcmlzbS50b2tlbml6ZSh0LCBlbnYuZ3JhbW1hciksICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UsIHQpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBhZnRlciA9IHMuc3Vic3RyaW5nKGluZGV4ICsgcGxhY2Vob2xkZXIubGVuZ3RoKTtcblxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXBsYWNlbWVudCA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2JlZm9yZV0pKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaChtaWRkbGUpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYWZ0ZXJdKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBbaSwgMV0uY29uY2F0KHJlcGxhY2VtZW50KSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRva2VuLmNvbnRlbnQgPSByZXBsYWNlbWVudDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodG9rZW4uY29udGVudCAvKiAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycgKi8pIHtcblx0XHRcdFx0XHRcdFx0d2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2Fsa1Rva2VucyhlbnYudG9rZW5zKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG59KFByaXNtKSk7XG4iLCJQcmlzbS5sYW5ndWFnZXMubWFya3VwID0ge1xuXHQnY29tbWVudCc6IC88IS0tW1xcc1xcU10qPy0tPi8sXG5cdCdwcm9sb2cnOiAvPFxcP1tcXHNcXFNdKz9cXD8+Lyxcblx0J2RvY3R5cGUnOiB7XG5cdFx0cGF0dGVybjogLzwhRE9DVFlQRSg/OltePlwiJ1tcXF1dfFwiW15cIl0qXCJ8J1teJ10qJykrKD86XFxbKD86KD8hPCEtLSlbXlwiJ1xcXV18XCJbXlwiXSpcInwnW14nXSonfDwhLS1bXFxzXFxTXSo/LS0+KSpcXF1cXHMqKT8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjZGF0YSc6IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP11dPi9pLFxuXHQndGFnJzoge1xuXHRcdHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vaSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHQvXj0vLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVtcIiddfFtcIiddJC8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogLyYjP1tcXGRhLXpdezEsOH07L2lcbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblxuLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcblByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uKGVudikge1xuXG5cdGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcblx0XHRlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgJyYnKTtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG5cdC8qKlxuXHQgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0ICovXG5cdHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcblx0XHR2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG5cblx0XHR2YXIgaW5zaWRlID0ge1xuXHRcdFx0J2luY2x1ZGVkLWNkYXRhJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0XHRcdGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblxuXHRcdHZhciBkZWYgPSB7fTtcblx0XHRkZWZbdGFnTmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyg8X19bXFxzXFxTXSo/PikoPzo8IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT5cXHMqfFtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCB0YWdOYW1lKSwgJ2knKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IGluc2lkZVxuXHRcdH07XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG4iLCIvKipcbiAqIE9yaWdpbmFsIGJ5IEFhcm9uIEhhcnVuOiBodHRwOi8vYWFoYWNyZWF0aXZlLmNvbS8yMDEyLzA3LzMxL3BocC1zeW50YXgtaGlnaGxpZ2h0aW5nLXByaXNtL1xuICogTW9kaWZpZWQgYnkgTWlsZXMgSm9obnNvbjogaHR0cDovL21pbGVzai5tZVxuICpcbiAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XG4gKiBcdFx0LSBFeHRlbmRzIGNsaWtlIHN5bnRheFxuICogXHRcdC0gU3VwcG9ydCBmb3IgUEhQIDUuMysgKG5hbWVzcGFjZXMsIHRyYWl0cywgZ2VuZXJhdG9ycywgZXRjKVxuICogXHRcdC0gU21hcnRlciBjb25zdGFudCBhbmQgZnVuY3Rpb24gbWF0Y2hpbmdcbiAqXG4gKiBBZGRzIHRoZSBmb2xsb3dpbmcgbmV3IHRva2VuIGNsYXNzZXM6XG4gKiBcdFx0Y29uc3RhbnQsIGRlbGltaXRlciwgdmFyaWFibGUsIGZ1bmN0aW9uLCBwYWNrYWdlXG4gKi9cbihmdW5jdGlvbiAoUHJpc20pIHtcblx0UHJpc20ubGFuZ3VhZ2VzLnBocCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHRcdCdrZXl3b3JkJzogL1xcYig/Ol9faGFsdF9jb21waWxlcnxhYnN0cmFjdHxhbmR8YXJyYXl8YXN8YnJlYWt8Y2FsbGFibGV8Y2FzZXxjYXRjaHxjbGFzc3xjbG9uZXxjb25zdHxjb250aW51ZXxkZWNsYXJlfGRlZmF1bHR8ZGllfGRvfGVjaG98ZWxzZXxlbHNlaWZ8ZW1wdHl8ZW5kZGVjbGFyZXxlbmRmb3J8ZW5kZm9yZWFjaHxlbmRpZnxlbmRzd2l0Y2h8ZW5kd2hpbGV8ZXZhbHxleGl0fGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmb3J8Zm9yZWFjaHxmdW5jdGlvbnxnbG9iYWx8Z290b3xpZnxpbXBsZW1lbnRzfGluY2x1ZGV8aW5jbHVkZV9vbmNlfGluc3RhbmNlb2Z8aW5zdGVhZG9mfGludGVyZmFjZXxpc3NldHxsaXN0fG5hbWVzcGFjZXxuZXd8b3J8cGFyZW50fHByaW50fHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXF1aXJlfHJlcXVpcmVfb25jZXxyZXR1cm58c3RhdGljfHN3aXRjaHx0aHJvd3x0cmFpdHx0cnl8dW5zZXR8dXNlfHZhcnx3aGlsZXx4b3J8eWllbGQpXFxiL2ksXG5cdFx0J2Jvb2xlYW4nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvaSxcblx0XHRcdGFsaWFzOiAnY29uc3RhbnQnXG5cdFx0fSxcblx0XHQnY29uc3RhbnQnOiBbXG5cdFx0XHQvXFxiW0EtWl9dW0EtWjAtOV9dKlxcYi8sXG5cdFx0XHQvXFxiKD86bnVsbClcXGIvaSxcblx0XHRdLFxuXHRcdCdjb21tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ3N0cmluZycsIHtcblx0XHQnc2hlbGwtY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdjb21tZW50J1xuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ2NvbW1lbnQnLCB7XG5cdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9cXD8+JHxePFxcPyg/OnBocCg/PVxccyl8PSk/L2ksXG5cdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdrZXl3b3JkJywge1xuXHRcdCd2YXJpYWJsZSc6IC9cXCQrKD86XFx3K1xcYnwoPz17KSkvaSxcblx0XHQncGFja2FnZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxcXHxuYW1lc3BhY2VcXHMrfHVzZVxccyspW1xcd1xcXFxdKy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdHB1bmN0dWF0aW9uOiAvXFxcXC9cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIE11c3QgYmUgZGVmaW5lZCBhZnRlciB0aGUgZnVuY3Rpb24gcGF0dGVyblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAnb3BlcmF0b3InLCB7XG5cdFx0J3Byb3BlcnR5Jzoge1xuXHRcdFx0cGF0dGVybjogLygtPilbXFx3XSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0dmFyIHN0cmluZ19pbnRlcnBvbGF0aW9uID0ge1xuXHRcdHBhdHRlcm46IC97XFwkKD86eyg/OntbXnt9XSt9fFtee31dKyl9fFtee31dKSt9fChefFteXFxcXHtdKVxcJCsoPzpcXHcrKD86XFxbLis/XXwtPlxcdyspKikvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMucGhwXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ3N0cmluZycsIHtcblx0XHQnbm93ZG9jLXN0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC88PDwnKFteJ10rKScoPzpcXHJcXG4/fFxcbikoPzouKig/Olxcclxcbj98XFxuKSkqP1xcMTsvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL148PDwnW14nXSsnfFthLXpfXVxcdyo7JC9pLFxuXHRcdFx0XHRcdGFsaWFzOiAnc3ltYm9sJyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePDw8Jz98Wyc7XSQvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnaGVyZWRvYy1zdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvPDw8KD86XCIoW15cIl0rKVwiKD86XFxyXFxuP3xcXG4pKD86LiooPzpcXHJcXG4/fFxcbikpKj9cXDE7fChbYS16X11cXHcqKSg/Olxcclxcbj98XFxuKSg/Oi4qKD86XFxyXFxuP3xcXG4pKSo/XFwyOykvaSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8KD86XCJbXlwiXStcInxbYS16X11cXHcqKXxbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PFwiP3xbXCI7XSQvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IHN0cmluZ19pbnRlcnBvbGF0aW9uIC8vIFNlZSBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NpbmdsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLycoPzpcXFxcW1xcc1xcU118W15cXFxcJ10pKicvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHQnZG91YmxlLXF1b3RlZC1zdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIi8sXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBzdHJpbmdfaW50ZXJwb2xhdGlvbiAvLyBTZWUgYmVsb3dcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHQvLyBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIFBIUCBzdHJpbmdzIFwicmVwbGFjZVwiIHRoZSBDLWxpa2Ugc3RhbmRhcmQgc3RyaW5nXG5cdGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMucGhwWydzdHJpbmcnXTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuXHRcdGlmICghLzxcXD8vLnRlc3QoZW52LmNvZGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHBocFBhdHRlcm4gPSAvPFxcPyg/OlteXCInLyNdfFxcLyg/IVsqL10pfChcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfCg/OlxcL1xcL3wjKSg/OlteP1xcblxccl18XFw/KD8hPikpKig/PSR8XFw/PnxbXFxyXFxuXSl8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKSkqPyg/OlxcPz58JCkvaWc7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcsIHBocFBhdHRlcm4pO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcpO1xuXHR9KTtcblxufShQcmlzbSkpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvMS4wLjFfd2VicGFja0A0LjQxLjYvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci8wLjIxLjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vY3NzLWxvYWRlci8xLjAuMV93ZWJwYWNrQDQuNDEuNi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05IS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvMS4wLjFfd2VicGFja0A0LjQxLjYvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXNlbGYuUHJpc20gfHwgIXNlbGYuZG9jdW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luIG5hbWUgd2hpY2ggaXMgdXNlZCBhcyBhIGNsYXNzIG5hbWUgZm9yIDxwcmU+IHdoaWNoIGlzIGFjdGl2YXRpbmcgdGhlIHBsdWdpblxuXHQgKiBAdHlwZSB7U3RyaW5nfVxuXHQgKi9cblx0dmFyIFBMVUdJTl9OQU1FID0gJ2xpbmUtbnVtYmVycyc7XG5cblx0LyoqXG5cdCAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIGZvciBkZXRlcm1pbmluZyBsaW5lIGJyZWFrc1xuXHQgKiBAdHlwZSB7UmVnRXhwfVxuXHQgKi9cblx0dmFyIE5FV19MSU5FX0VYUCA9IC9cXG4oPyEkKS9nO1xuXG5cdC8qKlxuXHQgKiBSZXNpemVzIGxpbmUgbnVtYmVycyBzcGFucyBhY2NvcmRpbmcgdG8gaGVpZ2h0IG9mIGxpbmUgb2YgY29kZVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgPHByZT4gZWxlbWVudFxuXHQgKi9cblx0dmFyIF9yZXNpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHR2YXIgY29kZVN0eWxlcyA9IGdldFN0eWxlcyhlbGVtZW50KTtcblx0XHR2YXIgd2hpdGVTcGFjZSA9IGNvZGVTdHlsZXNbJ3doaXRlLXNwYWNlJ107XG5cblx0XHRpZiAod2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJyB8fCB3aGl0ZVNwYWNlID09PSAncHJlLWxpbmUnKSB7XG5cdFx0XHR2YXIgY29kZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1zaXplcicpO1xuXHRcdFx0dmFyIGNvZGVMaW5lcyA9IGNvZGVFbGVtZW50LnRleHRDb250ZW50LnNwbGl0KE5FV19MSU5FX0VYUCk7XG5cblx0XHRcdGlmICghbGluZU51bWJlclNpemVyKSB7XG5cdFx0XHRcdGxpbmVOdW1iZXJTaXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0bGluZU51bWJlclNpemVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtc2l6ZXInO1xuXG5cdFx0XHRcdGNvZGVFbGVtZW50LmFwcGVuZENoaWxkKGxpbmVOdW1iZXJTaXplcik7XG5cdFx0XHR9XG5cblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0Y29kZUxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGxpbmVOdW1iZXIpIHtcblx0XHRcdFx0bGluZU51bWJlclNpemVyLnRleHRDb250ZW50ID0gbGluZSB8fCAnXFxuJztcblx0XHRcdFx0dmFyIGxpbmVTaXplID0gbGluZU51bWJlclNpemVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdFx0bGluZU51bWJlcnNXcmFwcGVyLmNoaWxkcmVuW2xpbmVOdW1iZXJdLnN0eWxlLmhlaWdodCA9IGxpbmVTaXplICsgJ3B4Jztcblx0XHRcdH0pO1xuXG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIudGV4dENvbnRlbnQgPSAnJztcblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBzdHlsZSBkZWNsYXJhdGlvbnMgZm9yIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKi9cblx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IG51bGwpO1xuXHR9O1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUuJyArIFBMVUdJTl9OQU1FKSwgX3Jlc2l6ZUVsZW1lbnQpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IGVudi5lbGVtZW50O1xuXHRcdHZhciBwcmUgPSBjb2RlLnBhcmVudE5vZGU7XG5cblx0XHQvLyB3b3JrcyBvbmx5IGZvciA8Y29kZT4gd3JhcHBlZCBpbnNpZGUgPHByZT4gKG5vdCBpbmxpbmUpXG5cdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBYm9ydCBpZiBsaW5lIG51bWJlcnMgYWxyZWFkeSBleGlzdHNcblx0XHRpZiAoY29kZS5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBhZGRMaW5lTnVtYmVycyA9IGZhbHNlO1xuXHRcdHZhciBsaW5lTnVtYmVyc1JlZ2V4ID0gLyg/Ol58XFxzKWxpbmUtbnVtYmVycyg/Olxcc3wkKS87XG5cblx0XHRmb3IgKHZhciBlbGVtZW50ID0gY29kZTsgZWxlbWVudDsgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0aWYgKGxpbmVOdW1iZXJzUmVnZXgudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0YWRkTGluZU51bWJlcnMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBvbmx5IGFkZCBsaW5lIG51bWJlcnMgaWYgPGNvZGU+IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyB0aGUgYGxpbmUtbnVtYmVyc2AgY2xhc3Ncblx0XHRpZiAoIWFkZExpbmVOdW1iZXJzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyBmcm9tIHRoZSA8Y29kZT5cblx0XHRjb2RlLmNsYXNzTmFtZSA9IGNvZGUuY2xhc3NOYW1lLnJlcGxhY2UobGluZU51bWJlcnNSZWdleCwgJyAnKTtcblx0XHQvLyBBZGQgdGhlIGNsYXNzICdsaW5lLW51bWJlcnMnIHRvIHRoZSA8cHJlPlxuXHRcdGlmICghbGluZU51bWJlcnNSZWdleC50ZXN0KHByZS5jbGFzc05hbWUpKSB7XG5cdFx0XHRwcmUuY2xhc3NOYW1lICs9ICcgbGluZS1udW1iZXJzJztcblx0XHR9XG5cblx0XHR2YXIgbWF0Y2ggPSBlbnYuY29kZS5tYXRjaChORVdfTElORV9FWFApO1xuXHRcdHZhciBsaW5lc051bSA9IG1hdGNoID8gbWF0Y2gubGVuZ3RoICsgMSA6IDE7XG5cdFx0dmFyIGxpbmVOdW1iZXJzV3JhcHBlcjtcblxuXHRcdHZhciBsaW5lcyA9IG5ldyBBcnJheShsaW5lc051bSArIDEpLmpvaW4oJzxzcGFuPjwvc3Bhbj4nKTtcblxuXHRcdGxpbmVOdW1iZXJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtcm93cyc7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmlubmVySFRNTCA9IGxpbmVzO1xuXG5cdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSkge1xuXHRcdFx0cHJlLnN0eWxlLmNvdW50ZXJSZXNldCA9ICdsaW5lbnVtYmVyICcgKyAocGFyc2VJbnQocHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgLSAxKTtcblx0XHR9XG5cblx0XHRlbnYuZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lTnVtYmVyc1dyYXBwZXIpO1xuXG5cdFx0X3Jlc2l6ZUVsZW1lbnQocHJlKTtcblxuXHRcdFByaXNtLmhvb2tzLnJ1bignbGluZS1udW1iZXJzJywgZW52KTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdsaW5lLW51bWJlcnMnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0ZW52LnBsdWdpbnMgPSBlbnYucGx1Z2lucyB8fCB7fTtcblx0XHRlbnYucGx1Z2lucy5saW5lTnVtYmVycyA9IHRydWU7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBHbG9iYWwgZXhwb3J0c1xuXHQgKi9cblx0UHJpc20ucGx1Z2lucy5saW5lTnVtYmVycyA9IHtcblx0XHQvKipcblx0XHQgKiBHZXQgbm9kZSBmb3IgcHJvdmlkZWQgbGluZSBudW1iZXJcblx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgcHJlIGVsZW1lbnRcblx0XHQgKiBAcGFyYW0ge051bWJlcn0gbnVtYmVyIGxpbmUgbnVtYmVyXG5cdFx0ICogQHJldHVybiB7RWxlbWVudHx1bmRlZmluZWR9XG5cdFx0ICovXG5cdFx0Z2V0TGluZTogZnVuY3Rpb24gKGVsZW1lbnQsIG51bWJlcikge1xuXHRcdFx0aWYgKGVsZW1lbnQudGFnTmFtZSAhPT0gJ1BSRScgfHwgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFBMVUdJTl9OQU1FKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaW5lTnVtYmVyUm93cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1yb3dzJyk7XG5cdFx0XHR2YXIgbGluZU51bWJlclN0YXJ0ID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSwgMTApIHx8IDE7XG5cdFx0XHR2YXIgbGluZU51bWJlckVuZCA9IGxpbmVOdW1iZXJTdGFydCArIChsaW5lTnVtYmVyUm93cy5jaGlsZHJlbi5sZW5ndGggLSAxKTtcblxuXHRcdFx0aWYgKG51bWJlciA8IGxpbmVOdW1iZXJTdGFydCkge1xuXHRcdFx0XHRudW1iZXIgPSBsaW5lTnVtYmVyU3RhcnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnVtYmVyID4gbGluZU51bWJlckVuZCkge1xuXHRcdFx0XHRudW1iZXIgPSBsaW5lTnVtYmVyRW5kO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGluZUluZGV4ID0gbnVtYmVyIC0gbGluZU51bWJlclN0YXJ0O1xuXG5cdFx0XHRyZXR1cm4gbGluZU51bWJlclJvd3MuY2hpbGRyZW5bbGluZUluZGV4XTtcblx0XHR9XG5cdH07XG5cbn0oKSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuXG5cbi8qKlxuICogSGlnaGxpZ2h0IGFsbCBjb2RlIHdpdGggcHJpc21qc1xuICpcbiAqL1xuZnVuY3Rpb24gaW5pdEhpZ2hsaWdodCgpIHtcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTsgLy8gSGlnaHRsaWdodCBhbGwgY29kZSB3aXRoIHByaXNtanNcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBKdXN0IGluIGNhc2Ugc29tZXRoaW5nIGxvYWRzIGluIGFmdGVyIHBhZ2UgbG9hZFxuICAgICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgICB9LCAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEhpZ2hsaWdodDsiLCJpbXBvcnQge1xuICAgIG1hZ25pZmljUG9wdXBcbn0gZnJvbSAnbWFnbmlmaWMtcG9wdXAnO1xuXG5cbi8qKlxuICogIENyZWF0ZSBzZXR1cCBmb3IgaW5kaXZpZHVhbCBnYWxsZXJ5XG4gKlxuICogQHBhcmFtIHsqfSBnYWxsZXJ5TGluayBqUXVlcnkgb2JqZWN0IChsaW5rIHRoYXQgYSB1c2VyIHdpbGwgY2xpY2sgZm9yIHRoZSBnYWxsZXJ5KVxuICovXG5mdW5jdGlvbiBwcmVwYXJlR2FsbGVyeShnYWxsZXJ5TGluaykge1xuXG4gICAgY29uc3QgaWQgPSAkKGdhbGxlcnlMaW5rKS5hdHRyKCdocmVmJyk7IC8vIEZpbmQgdGhlIGhyZWYgZnJvbSB0aGUgaWRcblxuICAgIGxldCBpbWdzID0gW107XG5cbiAgICAkKGlkKS5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8gTG9vcCB0aHJvdWdoIGVhY2ggaW1hZ2UgaW5zaWRlIHRoZSBsaW5rZWQgY29udGFpbmVyXG4gICAgICAgIGltZ3MucHVzaChcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJCh0aGlzKS5hdHRyKCdzcmMnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgYW4gb2JqZWN0IHRvIHRoZSBpbWdzIGFycmF5IHdpdGggdGhlIGltZyBzcmNcblxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgJChnYWxsZXJ5TGluaykubWFnbmlmaWNQb3B1cCh7IC8vIENyZWF0ZSBhbiBtZnAgaW5zdGFuY2UgZm9yIHRoZSBpbWFnZS5cbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuXG4vKipcbiAqIEFkZCBnYWxsZXJ5IHBvcHVwIGZ1bmN0aW9uYWxpdHlcbiAqL1xuZnVuY3Rpb24gaW5pdEdhbGxlcnlQb3B1cHMoKSB7XG5cbiAgICAkKCcubWZwLWdhbGxlcnknKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8gV2Ugd2lsbCBsb29wIHRocm91Z2ggZWFjaCBpdGVtIGluIHRoZSBnYWxsZXJ5IGxpbmtlZCB0byBvbiBhIG1mcC1nYWxsZXJ5IGxpbmtcblxuICAgICAgICBwcmVwYXJlR2FsbGVyeSh0aGlzKTtcblxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEdhbGxlcnlQb3B1cHM7IiwiaW1wb3J0IGluaXRHYWxsZXJ5UG9wdXBzIGZyb20gJy4vanMvcG9wdXBzJztcbmltcG9ydCBpbml0SGlnaGxpZ2h0IGZyb20gJy4vanMvY29kZWhpZ2hsaWdodCc7XG5cbmluaXRHYWxsZXJ5UG9wdXBzKCk7XG5cbmluaXRIaWdobGlnaHQoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9