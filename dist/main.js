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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\n\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; /* works for line-numbers below 1000 lines */\n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n\n\t.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n\n\t\t.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
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

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],2:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);



}).call(this,require('_process'))

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (global){
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"performance-now":2}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Parallax.js
* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
* @description Creates a parallax effect between an array of layers,
*              driving the motion from the gyroscope output of a smartdevice.
*              If no gyroscope is available, the cursor position is used.
*/

var rqAnFr = require('raf');
var objectAssign = require('object-assign');

var helpers = {
  propertyCache: {},
  vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],

  clamp: function clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
  },
  data: function data(element, name) {
    return helpers.deserialize(element.getAttribute('data-' + name));
  },
  deserialize: function deserialize(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return value;
    }
  },
  camelCase: function camelCase(value) {
    return value.replace(/-+(.)?/g, function (match, character) {
      return character ? character.toUpperCase() : '';
    });
  },
  accelerate: function accelerate(element) {
    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
    helpers.css(element, 'transform-style', 'preserve-3d');
    helpers.css(element, 'backface-visibility', 'hidden');
  },
  transformSupport: function transformSupport(value) {
    var element = document.createElement('div'),
        propertySupport = false,
        propertyValue = null,
        featureSupport = false,
        cssProperty = null,
        jsProperty = null;
    for (var i = 0, l = helpers.vendors.length; i < l; i++) {
      if (helpers.vendors[i] !== null) {
        cssProperty = helpers.vendors[i][0] + 'transform';
        jsProperty = helpers.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch (value) {
      case '2D':
        featureSupport = propertySupport;
        break;
      case '3D':
        if (propertySupport) {
          var body = document.body || document.createElement('body'),
              documentElement = document.documentElement,
              documentOverflow = documentElement.style.overflow,
              isCreatedBody = false;

          if (!document.body) {
            isCreatedBody = true;
            documentElement.style.overflow = 'hidden';
            documentElement.appendChild(body);
            body.style.overflow = 'hidden';
            body.style.background = '';
          }

          body.appendChild(element);
          element.style[jsProperty] = 'translate3d(1px,1px,1px)';
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
          documentElement.style.overflow = documentOverflow;
          body.removeChild(element);

          if (isCreatedBody) {
            body.removeAttribute('style');
            body.parentNode.removeChild(body);
          }
        }
        break;
    }
    return featureSupport;
  },
  css: function css(element, property, value) {
    var jsProperty = helpers.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = helpers.vendors.length; i < l; i++) {
        if (helpers.vendors[i] !== null) {
          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          helpers.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  }
};

var MAGIC_NUMBER = 30,
    DEFAULTS = {
  relativeInput: false,
  clipRelativeInput: false,
  inputElement: null,
  hoverOnly: false,
  calibrationThreshold: 100,
  calibrationDelay: 500,
  supportDelay: 500,
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 10.0,
  scalarY: 10.0,
  frictionX: 0.1,
  frictionY: 0.1,
  originX: 0.5,
  originY: 0.5,
  pointerEvents: false,
  precision: 1,
  onReady: null,
  selector: null
};

var Parallax = function () {
  function Parallax(element, options) {
    _classCallCheck(this, Parallax);

    this.element = element;

    var data = {
      calibrateX: helpers.data(this.element, 'calibrate-x'),
      calibrateY: helpers.data(this.element, 'calibrate-y'),
      invertX: helpers.data(this.element, 'invert-x'),
      invertY: helpers.data(this.element, 'invert-y'),
      limitX: helpers.data(this.element, 'limit-x'),
      limitY: helpers.data(this.element, 'limit-y'),
      scalarX: helpers.data(this.element, 'scalar-x'),
      scalarY: helpers.data(this.element, 'scalar-y'),
      frictionX: helpers.data(this.element, 'friction-x'),
      frictionY: helpers.data(this.element, 'friction-y'),
      originX: helpers.data(this.element, 'origin-x'),
      originY: helpers.data(this.element, 'origin-y'),
      pointerEvents: helpers.data(this.element, 'pointer-events'),
      precision: helpers.data(this.element, 'precision'),
      relativeInput: helpers.data(this.element, 'relative-input'),
      clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
      hoverOnly: helpers.data(this.element, 'hover-only'),
      inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
      selector: helpers.data(this.element, 'selector')
    };

    for (var key in data) {
      if (data[key] === null) {
        delete data[key];
      }
    }

    objectAssign(this, DEFAULTS, data, options);

    if (!this.inputElement) {
      this.inputElement = this.element;
    }

    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depthsX = [];
    this.depthsY = [];
    this.raf = null;

    this.bounds = null;
    this.elementPositionX = 0;
    this.elementPositionY = 0;
    this.elementWidth = 0;
    this.elementHeight = 0;

    this.elementCenterX = 0;
    this.elementCenterY = 0;

    this.elementRangeX = 0;
    this.elementRangeY = 0;

    this.calibrationX = 0;
    this.calibrationY = 0;

    this.inputX = 0;
    this.inputY = 0;

    this.motionX = 0;
    this.motionY = 0;

    this.velocityX = 0;
    this.velocityY = 0;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onMotionTimer = this.onMotionTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    this.windowWidth = null;
    this.windowHeight = null;
    this.windowCenterX = null;
    this.windowCenterY = null;
    this.windowRadiusX = null;
    this.windowRadiusY = null;
    this.portrait = false;
    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
    this.orientationStatus = 0;
    this.motionStatus = 0;

    this.initialise();
  }

  _createClass(Parallax, [{
    key: 'initialise',
    value: function initialise() {
      if (this.transform2DSupport === undefined) {
        this.transform2DSupport = helpers.transformSupport('2D');
        this.transform3DSupport = helpers.transformSupport('3D');
      }

      // Configure Context Styles
      if (this.transform3DSupport) {
        helpers.accelerate(this.element);
      }

      var style = window.getComputedStyle(this.element);
      if (style.getPropertyValue('position') === 'static') {
        this.element.style.position = 'relative';
      }

      // Pointer events
      if (!this.pointerEvents) {
        this.element.style.pointerEvents = 'none';
      }

      // Setup
      this.updateLayers();
      this.updateDimensions();
      this.enable();
      this.queueCalibration(this.calibrationDelay);
    }
  }, {
    key: 'doReadyCallback',
    value: function doReadyCallback() {
      if (this.onReady) {
        this.onReady();
      }
    }
  }, {
    key: 'updateLayers',
    value: function updateLayers() {
      if (this.selector) {
        this.layers = this.element.querySelectorAll(this.selector);
      } else {
        this.layers = this.element.children;
      }

      if (!this.layers.length) {
        console.warn('ParallaxJS: Your scene does not have any layers.');
      }

      this.depthsX = [];
      this.depthsY = [];

      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index];

        if (this.transform3DSupport) {
          helpers.accelerate(layer);
        }

        layer.style.position = index ? 'absolute' : 'relative';
        layer.style.display = 'block';
        layer.style.left = 0;
        layer.style.top = 0;

        var depth = helpers.data(layer, 'depth') || 0;
        this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
        this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
      }
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.windowCenterX = this.windowWidth * this.originX;
      this.windowCenterY = this.windowHeight * this.originY;
      this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
      this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
    }
  }, {
    key: 'updateBounds',
    value: function updateBounds() {
      this.bounds = this.inputElement.getBoundingClientRect();
      this.elementPositionX = this.bounds.left;
      this.elementPositionY = this.bounds.top;
      this.elementWidth = this.bounds.width;
      this.elementHeight = this.bounds.height;
      this.elementCenterX = this.elementWidth * this.originX;
      this.elementCenterY = this.elementHeight * this.originY;
      this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
      this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
    }
  }, {
    key: 'queueCalibration',
    value: function queueCalibration(delay) {
      clearTimeout(this.calibrationTimer);
      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.enabled) {
        return;
      }
      this.enabled = true;

      if (this.orientationSupport) {
        this.portrait = false;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
      } else if (this.motionSupport) {
        this.portrait = false;
        window.addEventListener('devicemotion', this.onDeviceMotion);
        this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
      } else {
        this.calibrationX = 0;
        this.calibrationY = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
        this.doReadyCallback();
      }

      window.addEventListener('resize', this.onWindowResize);
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.enabled) {
        return;
      }
      this.enabled = false;

      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else if (this.motionSupport) {
        window.removeEventListener('devicemotion', this.onDeviceMotion);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }

      window.removeEventListener('resize', this.onWindowResize);
      rqAnFr.cancel(this.raf);
    }
  }, {
    key: 'calibrate',
    value: function calibrate(x, y) {
      this.calibrateX = x === undefined ? this.calibrateX : x;
      this.calibrateY = y === undefined ? this.calibrateY : y;
    }
  }, {
    key: 'invert',
    value: function invert(x, y) {
      this.invertX = x === undefined ? this.invertX : x;
      this.invertY = y === undefined ? this.invertY : y;
    }
  }, {
    key: 'friction',
    value: function friction(x, y) {
      this.frictionX = x === undefined ? this.frictionX : x;
      this.frictionY = y === undefined ? this.frictionY : y;
    }
  }, {
    key: 'scalar',
    value: function scalar(x, y) {
      this.scalarX = x === undefined ? this.scalarX : x;
      this.scalarY = y === undefined ? this.scalarY : y;
    }
  }, {
    key: 'limit',
    value: function limit(x, y) {
      this.limitX = x === undefined ? this.limitX : x;
      this.limitY = y === undefined ? this.limitY : y;
    }
  }, {
    key: 'origin',
    value: function origin(x, y) {
      this.originX = x === undefined ? this.originX : x;
      this.originY = y === undefined ? this.originY : y;
    }
  }, {
    key: 'setInputElement',
    value: function setInputElement(element) {
      this.inputElement = element;
      this.updateDimensions();
    }
  }, {
    key: 'setPosition',
    value: function setPosition(element, x, y) {
      x = x.toFixed(this.precision) + 'px';
      y = y.toFixed(this.precision) + 'px';
      if (this.transform3DSupport) {
        helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
      } else if (this.transform2DSupport) {
        helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
      } else {
        element.style.left = x;
        element.style.top = y;
      }
    }
  }, {
    key: 'onOrientationTimer',
    value: function onOrientationTimer() {
      if (this.orientationSupport && this.orientationStatus === 0) {
        this.disable();
        this.orientationSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onMotionTimer',
    value: function onMotionTimer() {
      if (this.motionSupport && this.motionStatus === 0) {
        this.disable();
        this.motionSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onCalibrationTimer',
    value: function onCalibrationTimer() {
      this.calibrationFlag = true;
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.updateDimensions();
    }
  }, {
    key: 'onAnimationFrame',
    value: function onAnimationFrame() {
      this.updateBounds();
      var calibratedInputX = this.inputX - this.calibrationX,
          calibratedInputY = this.inputY - this.calibrationY;
      if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
        this.queueCalibration(0);
      }
      if (this.portrait) {
        this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
        this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
      } else {
        this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
        this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
      }
      this.motionX *= this.elementWidth * (this.scalarX / 100);
      this.motionY *= this.elementHeight * (this.scalarY / 100);
      if (!isNaN(parseFloat(this.limitX))) {
        this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
      }
      if (!isNaN(parseFloat(this.limitY))) {
        this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
      }
      this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
      this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index],
            depthX = this.depthsX[index],
            depthY = this.depthsY[index],
            xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
            yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
        this.setPosition(layer, xOffset, yOffset);
      }
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'rotate',
    value: function rotate(beta, gamma) {
      // Extract Rotation
      var x = (beta || 0) / MAGIC_NUMBER,
          //  -90 :: 90
      y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180

      // Detect Orientation Change
      var portrait = this.windowHeight > this.windowWidth;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }

      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.calibrationX = x;
        this.calibrationY = y;
      }

      this.inputX = x;
      this.inputY = y;
    }
  }, {
    key: 'onDeviceOrientation',
    value: function onDeviceOrientation(event) {
      var beta = event.beta;
      var gamma = event.gamma;
      if (beta !== null && gamma !== null) {
        this.orientationStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onDeviceMotion',
    value: function onDeviceMotion(event) {
      var beta = event.rotationRate.beta;
      var gamma = event.rotationRate.gamma;
      if (beta !== null && gamma !== null) {
        this.motionStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var clientX = event.clientX,
          clientY = event.clientY;

      // reset input to center if hoverOnly is set and we're not hovering the element
      if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
        this.inputX = 0;
        this.inputY = 0;
        return;
      }

      if (this.relativeInput) {
        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
          clientX = Math.max(clientX, this.elementPositionX);
          clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
          clientY = Math.max(clientY, this.elementPositionY);
          clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
        }
        // Calculate input relative to the element.
        if (this.elementRangeX && this.elementRangeY) {
          this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
          this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
        }
      } else {
        // Calculate input relative to the window.
        if (this.windowRadiusX && this.windowRadiusY) {
          this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
          this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.disable();

      clearTimeout(this.calibrationTimer);
      clearTimeout(this.detectionTimer);

      this.element.removeAttribute('style');
      for (var index = 0; index < this.layers.length; index++) {
        this.layers[index].removeAttribute('style');
      }

      delete this.element;
      delete this.layers;
    }
  }, {
    key: 'version',
    value: function version() {
      return '3.1.0';
    }
  }]);

  return Parallax;
}();

module.exports = Parallax;

},{"object-assign":1,"raf":4}]},{},[5])(5)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwic3JjL3BhcmFsbGF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNEO0FBQ0Q7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNBLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNEO0FBQ0YsT0FiRCxNQWFPO0FBQ0w7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGFBQWhCLElBQWlDLEtBQUssYUFBcEQ7QUFDQSxlQUFLLE1BQUwsR0FBYyxDQUFDLFVBQVUsS0FBSyxhQUFoQixJQUFpQyxLQUFLLGFBQXBEO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVM7QUFDUixXQUFLLE9BQUw7O0FBRUEsbUJBQWEsS0FBSyxnQkFBbEI7QUFDQSxtQkFBYSxLQUFLLGNBQWxCOztBQUVBLFdBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsT0FBN0I7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssTUFBTCxDQUFZLE1BQXhDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3ZELGFBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsZUFBbkIsQ0FBbUMsT0FBbkM7QUFDRDs7QUFFRCxhQUFPLEtBQUssT0FBWjtBQUNBLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sT0FBUDtBQUNEOzs7Ozs7QUFJSCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsIi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxuY29uc3QgcnFBbkZyID0gcmVxdWlyZSgncmFmJylcbmNvbnN0IG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCd3ZWJraXQnXSwgWyctbW96LScsJ01veiddLCBbJy1vLScsJ08nXSwgWyctbXMtJywnbXMnXV0sXG5cbiAgY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heFxuICAgICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxuICB9LFxuXG4gIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScrbmFtZSkpXG4gIH0sXG5cbiAgZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJ1xuICAgIH0pXG4gIH0sXG5cbiAgYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIH0sXG5cbiAgdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJ1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KVxuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSdcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuXG4gICAgICAgICAgaWYgKCBpc0NyZWF0ZWRCb2R5ICkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnRcbiAgfSxcblxuICBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldXG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZVxuICB9XG5cbn1cblxuY29uc3QgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgICBERUZBVUxUUyA9IHtcbiAgICAgICAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgICAgICBob3Zlck9ubHk6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICAgICAgICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gICAgICAgIHN1cHBvcnREZWxheTogNTAwLFxuICAgICAgICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WDogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WTogdHJ1ZSxcbiAgICAgICAgbGltaXRYOiBmYWxzZSxcbiAgICAgICAgbGltaXRZOiBmYWxzZSxcbiAgICAgICAgc2NhbGFyWDogMTAuMCxcbiAgICAgICAgc2NhbGFyWTogMTAuMCxcbiAgICAgICAgZnJpY3Rpb25YOiAwLjEsXG4gICAgICAgIGZyaWN0aW9uWTogMC4xLFxuICAgICAgICBvcmlnaW5YOiAwLjUsXG4gICAgICAgIG9yaWdpblk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gICAgICAgIHByZWNpc2lvbjogMSxcbiAgICAgICAgb25SZWFkeTogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGxcbiAgICAgIH1cblxuY2xhc3MgUGFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucylcblxuICAgIGlmKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsXG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG4gICAgdGhpcy5yYWYgPSBudWxsXG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDBcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDBcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwXG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcblxuICAgIHRoaXMuaW5wdXRYID0gMFxuICAgIHRoaXMuaW5wdXRZID0gMFxuXG4gICAgdGhpcy5tb3Rpb25YID0gMFxuICAgIHRoaXMubW90aW9uWSA9IDBcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMFxuICAgIHRoaXMudmVsb2NpdHlZID0gMFxuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGxcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKVxuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwXG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwXG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJylcbiAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpXG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcbiAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgIGlmKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2V0dXBcbiAgICB0aGlzLnVwZGF0ZUxheWVycygpXG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSlcbiAgfVxuXG4gIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcbiAgICAgIHRoaXMub25SZWFkeSgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGF5ZXJzKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5cbiAgICB9XG5cbiAgICBpZighdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpXG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpXG4gICAgICB9XG5cbiAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJ1xuICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwXG4gICAgICBsYXllci5zdHlsZS50b3AgPSAwXG5cbiAgICAgIGxldCBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMFxuICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKVxuICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSlcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGhcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpXG4gIH1cblxuICBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSlcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKVxuICB9XG5cbiAgY2FsaWJyYXRlKHgsIHkpIHtcbiAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4XG4gICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeVxuICB9XG5cbiAgaW52ZXJ0KHgsIHkpIHtcbiAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4XG4gICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeVxuICB9XG5cbiAgZnJpY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4XG4gICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHlcbiAgfVxuXG4gIHNjYWxhcih4LCB5KSB7XG4gICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeFxuICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHlcbiAgfVxuXG4gIGxpbWl0KHgsIHkpIHtcbiAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeFxuICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5XG4gIH1cblxuICBvcmlnaW4oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHhcbiAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5XG4gIH1cblxuICBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geFxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5XG4gICAgfVxuICB9XG5cbiAgb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25Nb3Rpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlQm91bmRzKClcbiAgICBsZXQgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZXG4gICAgaWYgKChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHx8IChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpKSB7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMClcbiAgICB9XG4gICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgfVxuICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApXG4gICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApXG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKVxuICAgIH1cbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWFxuICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KVxuICAgIH1cbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICByb3RhdGUoYmV0YSwgZ2FtbWEpe1xuICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICBsZXQgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLCAvLyAgLTkwIDo6IDkwXG4gICAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVIgLy8gLTE4MCA6OiAxODBcblxuICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGhcbiAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdFxuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHhcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geVxuICAgIH1cblxuICAgIHRoaXMuaW5wdXRYID0geFxuICAgIHRoaXMuaW5wdXRZID0geVxuICB9XG5cbiAgb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFlcblxuICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICBpZih0aGlzLmhvdmVyT25seSAmJlxuICAgICAgKChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCkgfHxcbiAgICAgIChjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDBcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKVxuICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICBpZih0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICBpZih0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcilcblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudFxuICAgIGRlbGV0ZSB0aGlzLmxheWVyc1xuICB9XG5cbiAgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzMuMS4wJ1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheFxuIl19

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/components/prism-clike.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-clike.js ***!
  \********************************************************/
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
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),

/***/ "./node_modules/prismjs/components/prism-core.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-core.js ***!
  \*******************************************************/
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
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		var elements = container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = 'none', grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
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
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
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

						var from = match.index + (lookbehind ? match[1].length : 0),
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
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

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
	this.length = (matchedStr || "").length|0;
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
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/components/prism-css.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css.js ***!
  \******************************************************/
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

/***/ "./node_modules/prismjs/components/prism-javascript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javascript.js ***!
  \*************************************************************/
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
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
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

/***/ "./node_modules/prismjs/components/prism-markup-templating.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup-templating.js ***!
  \********************************************************************/
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

/***/ "./node_modules/prismjs/components/prism-markup.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
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

/***/ "./node_modules/prismjs/components/prism-php.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-php.js ***!
  \******************************************************/
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
		inside: {
			rest: Prism.languages.php
		}
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

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));


/***/ }),

/***/ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css":
/*!**************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--9!./prism-line-numbers.css */ "./node_modules/css-loader/index.js?!./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
  \*************************************************************************/
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
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

/***/ "./node_modules/webpack/buildin/global.js":
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

var _prismCore = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");

var _prismCore2 = _interopRequireDefault(_prismCore);

__webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");

__webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");

__webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");

__webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");

__webpack_require__(/*! prismjs/components/prism-markup-templating */ "./node_modules/prismjs/components/prism-markup-templating.js");

__webpack_require__(/*! prismjs/components/prism-php */ "./node_modules/prismjs/components/prism-php.js");

__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.css */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css");

__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");

var _parallaxJs = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");

var _parallaxJs2 = _interopRequireDefault(_parallaxJs);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

_prismCore2.default.highlightAll();

$ = jQuery;

$('.toggle-nav').click(function () {
    $('body').toggleClass('nav-open');
});

setTimeout(function () {
    _prismCore2.default.highlightAll();
}, 0);

var scene = document.getElementById('parallax');
/*var parallaxInstance = new Parallax(scene,{
    limitX: 10,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
});
*/

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcmFsbGF4LWpzL2Rpc3QvcGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jbGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwLXRlbXBsYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1waHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcz80YzczIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzP2QyODkiXSwibmFtZXMiOlsiUHJpc20iLCIkIiwic2V0VGltZW91dCIsInNjZW5lIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyxzRkFBcUM7QUFDeEU7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDJDQUEyQyx1QkFBdUIsd0JBQXdCLDhCQUE4QixHQUFHLG1EQUFtRCx1QkFBdUIseUJBQXlCLEdBQUcsc0NBQXNDLHVCQUF1Qix5QkFBeUIsV0FBVyxvQkFBb0IsaUJBQWlCLGVBQWUsdUVB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Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7QUFFdEMsQ0FBQyxHQUFHO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMscUlBQXFJOztBQUV0SSxDQUFDLEVBQUUsb0JBQW9CO0FBQ3ZCOztBQUVBLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDLEVBQUUsMEJBQTBCLEVBQUUsR0FBRztBQUNsQyxDQUFDO0FBQ0QsMkNBQTJDLGNBQWM7Ozs7Ozs7Ozs7Ozs7QUM1L0J6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esd0NBQXdDLG9CQUFvQjtBQUM1RDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLFlBQVk7O0FBRVo7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUMsbUJBQW1COztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxtRUFBbUU7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5RUFBeUU7QUFDekUsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVELElBQUksS0FBNkI7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RpQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDBCQUEwQixZQUFZLHVDQUF1QztBQUM3RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxFQUFFO0FBQzVHLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLHdHQUF3RyxJQUFJLGtCQUFrQjtBQUM5SDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOGNBQThjO0FBQzljO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGdDQUFnQyxFQUFFLE1BQU0sT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzFGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxjQUFjO0FBQzFCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLDJCQUEyQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7Ozs7Ozs7Ozs7OztBQzFIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRix1QkFBdUIsS0FBSztBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLGFBQWEsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0RBQStELCtDQUErQztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsSUQsY0FBYyxtQkFBTyxDQUFDLHFLQUFpRTs7QUFFdkYsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRGQUF5Qzs7QUFFOUQ7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZLRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7OztBQUVBQTs7QUFFQUM7O0FBRUFBLHVCQUF1QixZQUFZO0FBQy9CQTtBQURKQTs7QUFJQUMsV0FBVyxZQUFNO0FBQ2JGO0FBREpFOztBQUtBLElBQUlDLFFBQVFDLHdCQUFaLFVBQVlBLENBQVo7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkEseUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLmxpbmUtbnVtYmVycyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMy44ZW07XFxuXFx0Y291bnRlci1yZXNldDogbGluZW51bWJlcjtcXG59XFxuXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzID4gY29kZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdHRvcDogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0bGVmdDogLTMuOGVtO1xcblxcdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcblxcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTk7XFxuXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG59XFxuXFxuXFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxuXFx0fVxcblxcblxcdFxcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGxpbmVudW1iZXIpO1xcblxcdFxcdFxcdGNvbG9yOiAjOTk5O1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdFxcdH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5QYXJhbGxheCA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcblxufSx7XCJfcHJvY2Vzc1wiOjN9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuXG59LHtcInBlcmZvcm1hbmNlLW5vd1wiOjJ9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4qIFBhcmFsbGF4LmpzXG4qIEBhdXRob3IgTWF0dGhldyBXYWdlcmZpZWxkIC0gQHdhZ2VyZmllbGQsIFJlbsOpIFJvdGggLSBtYWlsQHJlbmVyb3RoLm9yZ1xuKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIHBhcmFsbGF4IGVmZmVjdCBiZXR3ZWVuIGFuIGFycmF5IG9mIGxheWVycyxcbiogICAgICAgICAgICAgIGRyaXZpbmcgdGhlIG1vdGlvbiBmcm9tIHRoZSBneXJvc2NvcGUgb3V0cHV0IG9mIGEgc21hcnRkZXZpY2UuXG4qICAgICAgICAgICAgICBJZiBubyBneXJvc2NvcGUgaXMgYXZhaWxhYmxlLCB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIHVzZWQuXG4qL1xuXG52YXIgcnFBbkZyID0gcmVxdWlyZSgncmFmJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgaGVscGVycyA9IHtcbiAgcHJvcGVydHlDYWNoZToge30sXG4gIHZlbmRvcnM6IFtudWxsLCBbJy13ZWJraXQtJywgJ3dlYmtpdCddLCBbJy1tb3otJywgJ01veiddLCBbJy1vLScsICdPJ10sIFsnLW1zLScsICdtcyddXSxcblxuICBjbGFtcDogZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heCA/IHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSA6IHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZTtcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YShlbGVtZW50LCBuYW1lKSB7XG4gICAgcmV0dXJuIGhlbHBlcnMuZGVzZXJpYWxpemUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpKTtcbiAgfSxcbiAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSxcbiAgY2FtZWxDYXNlOiBmdW5jdGlvbiBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIGZ1bmN0aW9uIChtYXRjaCwgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICB9KTtcbiAgfSxcbiAgYWNjZWxlcmF0ZTogZnVuY3Rpb24gYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtLXN0eWxlJywgJ3ByZXNlcnZlLTNkJyk7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ2JhY2tmYWNlLXZpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH0sXG4gIHRyYW5zZm9ybVN1cHBvcnQ6IGZ1bmN0aW9uIHRyYW5zZm9ybVN1cHBvcnQodmFsdWUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGwsXG4gICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gZmFsc2UsXG4gICAgICAgIGNzc1Byb3BlcnR5ID0gbnVsbCxcbiAgICAgICAganNQcm9wZXJ0eSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gaGVscGVycy52ZW5kb3JzW2ldWzBdICsgJ3RyYW5zZm9ybSc7XG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgIGpzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnM0QnOlxuICAgICAgICBpZiAocHJvcGVydHlTdXBwb3J0KSB7XG4gICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKSxcbiAgICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICBkb2N1bWVudE92ZXJmbG93ID0gZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93LFxuICAgICAgICAgICAgICBpc0NyZWF0ZWRCb2R5ID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJztcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NQcm9wZXJ0eSk7XG4gICAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcGVydHlWYWx1ZS5sZW5ndGggPiAwICYmIHByb3BlcnR5VmFsdWUgIT09ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93O1xuICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoaXNDcmVhdGVkQm9keSkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnQ7XG4gIH0sXG4gIGNzczogZnVuY3Rpb24gY3NzKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBqc1Byb3BlcnR5ID0gaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XTtcbiAgICBpZiAoIWpzUHJvcGVydHkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMuY2FtZWxDYXNlKGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICctJyArIHByb3BlcnR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhlbHBlcnMucHJvcGVydHlDYWNoZVtwcm9wZXJ0eV0gPSBqc1Byb3BlcnR5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxufTtcblxudmFyIE1BR0lDX05VTUJFUiA9IDMwLFxuICAgIERFRkFVTFRTID0ge1xuICByZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgY2xpcFJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBpbnB1dEVsZW1lbnQ6IG51bGwsXG4gIGhvdmVyT25seTogZmFsc2UsXG4gIGNhbGlicmF0aW9uVGhyZXNob2xkOiAxMDAsXG4gIGNhbGlicmF0aW9uRGVsYXk6IDUwMCxcbiAgc3VwcG9ydERlbGF5OiA1MDAsXG4gIGNhbGlicmF0ZVg6IGZhbHNlLFxuICBjYWxpYnJhdGVZOiB0cnVlLFxuICBpbnZlcnRYOiB0cnVlLFxuICBpbnZlcnRZOiB0cnVlLFxuICBsaW1pdFg6IGZhbHNlLFxuICBsaW1pdFk6IGZhbHNlLFxuICBzY2FsYXJYOiAxMC4wLFxuICBzY2FsYXJZOiAxMC4wLFxuICBmcmljdGlvblg6IDAuMSxcbiAgZnJpY3Rpb25ZOiAwLjEsXG4gIG9yaWdpblg6IDAuNSxcbiAgb3JpZ2luWTogMC41LFxuICBwb2ludGVyRXZlbnRzOiBmYWxzZSxcbiAgcHJlY2lzaW9uOiAxLFxuICBvblJlYWR5OiBudWxsLFxuICBzZWxlY3RvcjogbnVsbFxufTtcblxudmFyIFBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJhbGxheChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGF4KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNhbGlicmF0ZVg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjYWxpYnJhdGUteCcpLFxuICAgICAgY2FsaWJyYXRlWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS15JyksXG4gICAgICBpbnZlcnRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW52ZXJ0LXgnKSxcbiAgICAgIGludmVydFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteScpLFxuICAgICAgbGltaXRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteCcpLFxuICAgICAgbGltaXRZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteScpLFxuICAgICAgc2NhbGFyWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NjYWxhci14JyksXG4gICAgICBzY2FsYXJZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXknKSxcbiAgICAgIGZyaWN0aW9uWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXgnKSxcbiAgICAgIGZyaWN0aW9uWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXknKSxcbiAgICAgIG9yaWdpblg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdvcmlnaW4teCcpLFxuICAgICAgb3JpZ2luWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi15JyksXG4gICAgICBwb2ludGVyRXZlbnRzOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncG9pbnRlci1ldmVudHMnKSxcbiAgICAgIHByZWNpc2lvbjogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3ByZWNpc2lvbicpLFxuICAgICAgcmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3JlbGF0aXZlLWlucHV0JyksXG4gICAgICBjbGlwUmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NsaXAtcmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGhvdmVyT25seTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2hvdmVyLW9ubHknKSxcbiAgICAgIGlucHV0RWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW5wdXQtZWxlbWVudCcpKSxcbiAgICAgIHNlbGVjdG9yOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2VsZWN0b3InKVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsO1xuICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoc1ggPSBbXTtcbiAgICB0aGlzLmRlcHRoc1kgPSBbXTtcbiAgICB0aGlzLnJhZiA9IG51bGw7XG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gMDtcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSAwO1xuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMDtcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDA7XG5cbiAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSAwO1xuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IDA7XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDA7XG4gICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwO1xuXG4gICAgdGhpcy5pbnB1dFggPSAwO1xuICAgIHRoaXMuaW5wdXRZID0gMDtcblxuICAgIHRoaXMubW90aW9uWCA9IDA7XG4gICAgdGhpcy5tb3Rpb25ZID0gMDtcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5WSA9IDA7XG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EZXZpY2VNb3Rpb24gPSB0aGlzLm9uRGV2aWNlTW90aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk9yaWVudGF0aW9uVGltZXIgPSB0aGlzLm9uT3JpZW50YXRpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DYWxpYnJhdGlvblRpbWVyID0gdGhpcy5vbkNhbGlicmF0aW9uVGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQW5pbWF0aW9uRnJhbWUgPSB0aGlzLm9uQW5pbWF0aW9uRnJhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSBudWxsO1xuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBudWxsO1xuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGw7XG4gICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgIHRoaXMuZGVza3RvcCA9ICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnl8QkIxMHxtb2JpfHRhYmxldHxvcGVyYSBtaW5pfG5leHVzIDcpL2kpO1xuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3A7XG4gICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3A7XG4gICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDA7XG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFyYWxsYXgsIFt7XG4gICAga2V5OiAnaW5pdGlhbGlzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnMkQnKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzNEJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbmZpZ3VyZSBDb250ZXh0IFN0eWxlc1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgaWYgKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBvaW50ZXIgZXZlbnRzXG4gICAgICBpZiAoIXRoaXMucG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXBcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJzKCk7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24odGhpcy5jYWxpYnJhdGlvbkRlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkb1JlYWR5Q2FsbGJhY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1JlYWR5Q2FsbGJhY2soKSB7XG4gICAgICBpZiAodGhpcy5vblJlYWR5KSB7XG4gICAgICAgIHRoaXMub25SZWFkeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUxheWVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUxheWVycygpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxheWVycyA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQYXJhbGxheEpTOiBZb3VyIHNjZW5lIGRvZXMgbm90IGhhdmUgYW55IGxheWVycy4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXB0aHNYID0gW107XG4gICAgICB0aGlzLmRlcHRoc1kgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKGxheWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJztcbiAgICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBsYXllci5zdHlsZS50b3AgPSAwO1xuXG4gICAgICAgIHZhciBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMDtcbiAgICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKTtcbiAgICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGltZW5zaW9ucygpIHtcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXJYID0gdGhpcy53aW5kb3dXaWR0aCAqIHRoaXMub3JpZ2luWDtcbiAgICAgIHRoaXMud2luZG93Q2VudGVyWSA9IHRoaXMud2luZG93SGVpZ2h0ICogdGhpcy5vcmlnaW5ZO1xuICAgICAgdGhpcy53aW5kb3dSYWRpdXNYID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJYLCB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy53aW5kb3dDZW50ZXJYKTtcbiAgICAgIHRoaXMud2luZG93UmFkaXVzWSA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWSwgdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLndpbmRvd0NlbnRlclkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUJvdW5kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUJvdW5kcygpIHtcbiAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5pbnB1dEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSB0aGlzLmJvdW5kcy5sZWZ0O1xuICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gdGhpcy5ib3VuZHMudG9wO1xuICAgICAgdGhpcy5lbGVtZW50V2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aDtcbiAgICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgIHRoaXMuZWxlbWVudENlbnRlclggPSB0aGlzLmVsZW1lbnRXaWR0aCAqIHRoaXMub3JpZ2luWDtcbiAgICAgIHRoaXMuZWxlbWVudENlbnRlclkgPSB0aGlzLmVsZW1lbnRIZWlnaHQgKiB0aGlzLm9yaWdpblk7XG4gICAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJYLCB0aGlzLmVsZW1lbnRXaWR0aCAtIHRoaXMuZWxlbWVudENlbnRlclgpO1xuICAgICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWSwgdGhpcy5lbGVtZW50SGVpZ2h0IC0gdGhpcy5lbGVtZW50Q2VudGVyWSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncXVldWVDYWxpYnJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHF1ZXVlQ2FsaWJyYXRpb24oZGVsYXkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpO1xuICAgICAgdGhpcy5jYWxpYnJhdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uQ2FsaWJyYXRpb25UaW1lciwgZGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbk9yaWVudGF0aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pO1xuICAgICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uTW90aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwO1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgdGhpcy5yYWYgPSBycUFuRnIodGhpcy5vbkFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgcnFBbkZyLmNhbmNlbCh0aGlzLnJhZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsaWJyYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsaWJyYXRlKHgsIHkpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRlWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWCA6IHg7XG4gICAgICB0aGlzLmNhbGlicmF0ZVkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ludmVydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGludmVydCh4LCB5KSB7XG4gICAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4O1xuICAgICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmcmljdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyaWN0aW9uKHgsIHkpIHtcbiAgICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4O1xuICAgICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2NhbGFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2NhbGFyKHgsIHkpIHtcbiAgICAgIHRoaXMuc2NhbGFyWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWCA6IHg7XG4gICAgICB0aGlzLnNjYWxhclkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLnNjYWxhclkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xpbWl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGltaXQoeCwgeSkge1xuICAgICAgdGhpcy5saW1pdFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmxpbWl0WCA6IHg7XG4gICAgICB0aGlzLmxpbWl0WSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvcmlnaW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcmlnaW4oeCwgeSkge1xuICAgICAgdGhpcy5vcmlnaW5YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5YIDogeDtcbiAgICAgIHRoaXMub3JpZ2luWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0SW5wdXRFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24oZWxlbWVudCwgeCwgeSkge1xuICAgICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnO1xuICAgICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnO1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHggKyAnLCcgKyB5ICsgJywwKScpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uT3JpZW50YXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3JpZW50YXRpb25UaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3Rpb25UaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLm1vdGlvblN1cHBvcnQgJiYgdGhpcy5tb3Rpb25TdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMubW90aW9uU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNhbGlicmF0aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNhbGlicmF0aW9uVGltZXIoKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25XaW5kb3dSZXNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQW5pbWF0aW9uRnJhbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgdGhpcy51cGRhdGVCb3VuZHMoKTtcbiAgICAgIHZhciBjYWxpYnJhdGVkSW5wdXRYID0gdGhpcy5pbnB1dFggLSB0aGlzLmNhbGlicmF0aW9uWCxcbiAgICAgICAgICBjYWxpYnJhdGVkSW5wdXRZID0gdGhpcy5pbnB1dFkgLSB0aGlzLmNhbGlicmF0aW9uWTtcbiAgICAgIGlmIChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQgfHwgTWF0aC5hYnMoY2FsaWJyYXRlZElucHV0WSkgPiB0aGlzLmNhbGlicmF0aW9uVGhyZXNob2xkKSB7XG4gICAgICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbigwKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvcnRyYWl0KSB7XG4gICAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WTtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYO1xuICAgICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRZIDogdGhpcy5pbnB1dFk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vdGlvblggKj0gdGhpcy5lbGVtZW50V2lkdGggKiAodGhpcy5zY2FsYXJYIC8gMTAwKTtcbiAgICAgIHRoaXMubW90aW9uWSAqPSB0aGlzLmVsZW1lbnRIZWlnaHQgKiAodGhpcy5zY2FsYXJZIC8gMTAwKTtcbiAgICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmxpbWl0WCkpKSB7XG4gICAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmxpbWl0WSkpKSB7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25ZLCAtdGhpcy5saW1pdFksIHRoaXMubGltaXRZKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWDtcbiAgICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdLFxuICAgICAgICAgICAgZGVwdGhYID0gdGhpcy5kZXB0aHNYW2luZGV4XSxcbiAgICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgICB4T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVggKiAoZGVwdGhYICogKHRoaXMuaW52ZXJ0WCA/IC0xIDogMSkpLFxuICAgICAgICAgICAgeU9mZnNldCA9IHRoaXMudmVsb2NpdHlZICogKGRlcHRoWSAqICh0aGlzLmludmVydFkgPyAtMSA6IDEpKTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihsYXllciwgeE9mZnNldCwgeU9mZnNldCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JvdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdGF0ZShiZXRhLCBnYW1tYSkge1xuICAgICAgLy8gRXh0cmFjdCBSb3RhdGlvblxuICAgICAgdmFyIHggPSAoYmV0YSB8fCAwKSAvIE1BR0lDX05VTUJFUixcbiAgICAgICAgICAvLyAgLTkwIDo6IDkwXG4gICAgICB5ID0gKGdhbW1hIHx8IDApIC8gTUFHSUNfTlVNQkVSOyAvLyAtMTgwIDo6IDE4MFxuXG4gICAgICAvLyBEZXRlY3QgT3JpZW50YXRpb24gQ2hhbmdlXG4gICAgICB2YXIgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGg7XG4gICAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IHBvcnRyYWl0O1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhbGlicmF0aW9uRmxhZykge1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHg7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnB1dFggPSB4O1xuICAgICAgdGhpcy5pbnB1dFkgPSB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRGV2aWNlT3JpZW50YXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LmJldGE7XG4gICAgICB2YXIgZ2FtbWEgPSBldmVudC5nYW1tYTtcbiAgICAgIGlmIChiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EZXZpY2VNb3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgICAgdmFyIGJldGEgPSBldmVudC5yb3RhdGlvblJhdGUuYmV0YTtcbiAgICAgIHZhciBnYW1tYSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5nYW1tYTtcbiAgICAgIGlmIChiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubW90aW9uU3RhdHVzID0gMTtcbiAgICAgICAgdGhpcy5yb3RhdGUoYmV0YSwgZ2FtbWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VNb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcblxuICAgICAgLy8gcmVzZXQgaW5wdXQgdG8gY2VudGVyIGlmIGhvdmVyT25seSBpcyBzZXQgYW5kIHdlJ3JlIG5vdCBob3ZlcmluZyB0aGUgZWxlbWVudFxuICAgICAgaWYgKHRoaXMuaG92ZXJPbmx5ICYmIChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCB8fCBjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gMDtcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICAgIGlmICh0aGlzLmNsaXBSZWxhdGl2ZUlucHV0KSB7XG4gICAgICAgICAgY2xpZW50WCA9IE1hdGgubWF4KGNsaWVudFgsIHRoaXMuZWxlbWVudFBvc2l0aW9uWCk7XG4gICAgICAgICAgY2xpZW50WCA9IE1hdGgubWluKGNsaWVudFgsIHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoKTtcbiAgICAgICAgICBjbGllbnRZID0gTWF0aC5tYXgoY2xpZW50WSwgdGhpcy5lbGVtZW50UG9zaXRpb25ZKTtcbiAgICAgICAgICBjbGllbnRZID0gTWF0aC5taW4oY2xpZW50WSwgdGhpcy5lbGVtZW50UG9zaXRpb25ZICsgdGhpcy5lbGVtZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFggPSAoY2xpZW50WCAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWCAtIHRoaXMuZWxlbWVudENlbnRlclgpIC8gdGhpcy5lbGVtZW50UmFuZ2VYO1xuICAgICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvblkgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKSAvIHRoaXMuZWxlbWVudFJhbmdlWTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFggPSAoY2xpZW50WCAtIHRoaXMud2luZG93Q2VudGVyWCkgLyB0aGlzLndpbmRvd1JhZGl1c1g7XG4gICAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMud2luZG93Q2VudGVyWSkgLyB0aGlzLndpbmRvd1JhZGl1c1k7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxpYnJhdGlvblRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRldGVjdGlvblRpbWVyKTtcblxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy5sYXllcnNbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudDtcbiAgICAgIGRlbGV0ZSB0aGlzLmxheWVycztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2ZXJzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiAnMy4xLjAnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXJhbGxheDtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheDtcblxufSx7XCJvYmplY3QtYXNzaWduXCI6MSxcInJhZlwiOjR9XX0se30sWzVdKSg1KVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZiMkpxWldOMExXRnpjMmxuYmk5cGJtUmxlQzVxY3lJc0ltNXZaR1ZmYlc5a2RXeGxjeTl3WlhKbWIzSnRZVzVqWlMxdWIzY3ZiR2xpTDNCbGNtWnZjbTFoYm1ObExXNXZkeTVxY3lJc0ltNXZaR1ZmYlc5a2RXeGxjeTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZjbUZtTDJsdVpHVjRMbXB6SWl3aWMzSmpMM0JoY21Gc2JHRjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkRRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlF6RkdRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3p0QlEzQkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVTjRURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3UVVONFJVRTdPenM3T3pzN08wRkJVVUVzU1VGQlRTeFRRVUZUTEZGQlFWRXNTMEZCVWl4RFFVRm1PMEZCUTBFc1NVRkJUU3hsUVVGbExGRkJRVkVzWlVGQlVpeERRVUZ5UWpzN1FVRkZRU3hKUVVGTkxGVkJRVlU3UVVGRFpDeHBRa0ZCWlN4RlFVUkVPMEZCUldRc1YwRkJVeXhEUVVGRExFbEJRVVFzUlVGQlR5eERRVUZETEZWQlFVUXNSVUZCV1N4UlFVRmFMRU5CUVZBc1JVRkJPRUlzUTBGQlF5eFBRVUZFTEVWQlFWTXNTMEZCVkN4RFFVRTVRaXhGUVVFclF5eERRVUZETEV0QlFVUXNSVUZCVHl4SFFVRlFMRU5CUVM5RExFVkJRVFJFTEVOQlFVTXNUVUZCUkN4RlFVRlJMRWxCUVZJc1EwRkJOVVFzUTBGR1N6czdRVUZKWkN4UFFVcGpMR2xDUVVsU0xFdEJTbEVzUlVGSlJDeEhRVXBETEVWQlNVa3NSMEZLU2l4RlFVbFRPMEZCUTNKQ0xGZEJRVThzVFVGQlRTeEhRVUZPTEVkQlEwWXNVVUZCVVN4SFFVRlNMRWRCUVdNc1IwRkJaQ3hIUVVGdlFpeFJRVUZSTEVkQlFWSXNSMEZCWXl4SFFVRmtMRWRCUVc5Q0xFdEJSSFJETEVkQlJVWXNVVUZCVVN4SFFVRlNMRWRCUVdNc1IwRkJaQ3hIUVVGdlFpeFJRVUZSTEVkQlFWSXNSMEZCWXl4SFFVRmtMRWRCUVc5Q0xFdEJSamRETzBGQlIwUXNSMEZTWVR0QlFWVmtMRTFCVm1Nc1owSkJWVlFzVDBGV1V5eEZRVlZCTEVsQlZrRXNSVUZWVFR0QlFVTnNRaXhYUVVGUExGRkJRVkVzVjBGQlVpeERRVUZ2UWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzVlVGQlVTeEpRVUUzUWl4RFFVRndRaXhEUVVGUU8wRkJRMFFzUjBGYVlUdEJRV05rTEdGQlpHTXNkVUpCWTBZc1MwRmtSU3hGUVdOTE8wRkJRMnBDTEZGQlFVa3NWVUZCVlN4TlFVRmtMRVZCUVhOQ08wRkJRM0JDTEdGQlFVOHNTVUZCVUR0QlFVTkVMRXRCUmtRc1RVRkZUeXhKUVVGSkxGVkJRVlVzVDBGQlpDeEZRVUYxUWp0QlFVTTFRaXhoUVVGUExFdEJRVkE3UVVGRFJDeExRVVpOTEUxQlJVRXNTVUZCU1N4VlFVRlZMRTFCUVdRc1JVRkJjMEk3UVVGRE0wSXNZVUZCVHl4SlFVRlFPMEZCUTBRc1MwRkdUU3hOUVVWQkxFbEJRVWtzUTBGQlF5eE5RVUZOTEZkQlFWY3NTMEZCV0N4RFFVRk9MRU5CUVVRc1NVRkJOa0lzVTBGQlV5eExRVUZVTEVOQlFXcERMRVZCUVd0RU8wRkJRM1pFTEdGQlFVOHNWMEZCVnl4TFFVRllMRU5CUVZBN1FVRkRSQ3hMUVVaTkxFMUJSVUU3UVVGRFRDeGhRVUZQTEV0QlFWQTdRVUZEUkR0QlFVTkdMRWRCTVVKaE8wRkJORUprTEZkQk5VSmpMSEZDUVRSQ1NpeExRVFZDU1N4RlFUUkNSenRCUVVObUxGZEJRVThzVFVGQlRTeFBRVUZPTEVOQlFXTXNVMEZCWkN4RlFVRjVRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFRRVUZTTEVWQlFYTkNPMEZCUTNCRUxHRkJRVThzV1VGQldTeFZRVUZWTEZkQlFWWXNSVUZCV2l4SFFVRnpReXhGUVVFM1F6dEJRVU5FTEV0QlJrMHNRMEZCVUR0QlFVZEVMRWRCYUVOaE8wRkJhME5rTEZsQmJFTmpMSE5DUVd0RFNDeFBRV3hEUnl4RlFXdERUVHRCUVVOc1FpeFpRVUZSTEVkQlFWSXNRMEZCV1N4UFFVRmFMRVZCUVhGQ0xGZEJRWEpDTEVWQlFXdERMSE5EUVVGc1F6dEJRVU5CTEZsQlFWRXNSMEZCVWl4RFFVRlpMRTlCUVZvc1JVRkJjVUlzYVVKQlFYSkNMRVZCUVhkRExHRkJRWGhETzBGQlEwRXNXVUZCVVN4SFFVRlNMRU5CUVZrc1QwRkJXaXhGUVVGeFFpeHhRa0ZCY2tJc1JVRkJORU1zVVVGQk5VTTdRVUZEUkN4SFFYUkRZVHRCUVhkRFpDeHJRa0Y0UTJNc05FSkJkME5ITEV0QmVFTklMRVZCZDBOVk8wRkJRM1JDTEZGQlFVa3NWVUZCVlN4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzUzBGQmRrSXNRMEZCWkR0QlFVRkJMRkZCUTBrc2EwSkJRV3RDTEV0QlJIUkNPMEZCUVVFc1VVRkZTU3huUWtGQlowSXNTVUZHY0VJN1FVRkJRU3hSUVVkSkxHbENRVUZwUWl4TFFVaHlRanRCUVVGQkxGRkJTVWtzWTBGQll5eEpRVXBzUWp0QlFVRkJMRkZCUzBrc1lVRkJZU3hKUVV4cVFqdEJRVTFCTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVZJc1JVRkJWeXhKUVVGSkxGRkJRVkVzVDBGQlVpeERRVUZuUWl4TlFVRndReXhGUVVFMFF5eEpRVUZKTEVOQlFXaEVMRVZCUVcxRUxFZEJRVzVFTEVWQlFYZEVPMEZCUTNSRUxGVkJRVWtzVVVGQlVTeFBRVUZTTEVOQlFXZENMRU5CUVdoQ0xFMUJRWFZDTEVsQlFUTkNMRVZCUVdsRE8wRkJReTlDTEhOQ1FVRmpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEpRVUYzUWl4WFFVRjBRenRCUVVOQkxIRkNRVUZoTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhKUVVGM1FpeFhRVUZ5UXp0QlFVTkVMRTlCU0VRc1RVRkhUenRCUVVOTUxITkNRVUZqTEZkQlFXUTdRVUZEUVN4eFFrRkJZU3hYUVVGaU8wRkJRMFE3UVVGRFJDeFZRVUZKTEZGQlFWRXNTMEZCVWl4RFFVRmpMRlZCUVdRc1RVRkJPRUlzVTBGQmJFTXNSVUZCTmtNN1FVRkRNME1zTUVKQlFXdENMRWxCUVd4Q08wRkJRMEU3UVVGRFJEdEJRVU5HTzBGQlEwUXNXVUZCVHl4TFFVRlFPMEZCUTBVc1YwRkJTeXhKUVVGTU8wRkJRMFVzZVVKQlFXbENMR1ZCUVdwQ08wRkJRMEU3UVVGRFJpeFhRVUZMTEVsQlFVdzdRVUZEUlN4WlFVRkpMR1ZCUVVvc1JVRkJjVUk3UVVGRGJrSXNZMEZCU1N4UFFVRlBMRk5CUVZNc1NVRkJWQ3hKUVVGcFFpeFRRVUZUTEdGQlFWUXNRMEZCZFVJc1RVRkJka0lzUTBGQk5VSTdRVUZCUVN4alFVTkpMR3RDUVVGclFpeFRRVUZUTEdWQlJDOUNPMEZCUVVFc1kwRkZTU3h0UWtGQmJVSXNaMEpCUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRkZCUmpkRE8wRkJRVUVzWTBGSFNTeG5Ra0ZCWjBJc1MwRkljRUk3TzBGQlMwRXNZMEZCU1N4RFFVRkRMRk5CUVZNc1NVRkJaQ3hGUVVGdlFqdEJRVU5zUWl3MFFrRkJaMElzU1VGQmFFSTdRVUZEUVN3MFFrRkJaMElzUzBGQmFFSXNRMEZCYzBJc1VVRkJkRUlzUjBGQmFVTXNVVUZCYWtNN1FVRkRRU3cwUWtGQlowSXNWMEZCYUVJc1EwRkJORUlzU1VGQk5VSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVVVGQldDeEhRVUZ6UWl4UlFVRjBRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4VlFVRllMRWRCUVhkQ0xFVkJRWGhDTzBGQlEwUTdPMEZCUlVRc1pVRkJTeXhYUVVGTUxFTkJRV2xDTEU5QlFXcENPMEZCUTBFc2EwSkJRVkVzUzBGQlVpeERRVUZqTEZWQlFXUXNTVUZCTkVJc01FSkJRVFZDTzBGQlEwRXNNRUpCUVdkQ0xFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNaMEpCUVdwRExFTkJRV3RFTEZkQlFXeEVMRU5CUVdoQ08wRkJRMEVzTWtKQlFXbENMR3RDUVVGclFpeFRRVUZzUWl4SlFVRXJRaXhqUVVGakxFMUJRV1FzUjBGQmRVSXNRMEZCZEVRc1NVRkJNa1FzYTBKQlFXdENMRTFCUVRsR08wRkJRMEVzTUVKQlFXZENMRXRCUVdoQ0xFTkJRWE5DTEZGQlFYUkNMRWRCUVdsRExHZENRVUZxUXp0QlFVTkJMR1ZCUVVzc1YwRkJUQ3hEUVVGcFFpeFBRVUZxUWpzN1FVRkZRU3hqUVVGTExHRkJRVXdzUlVGQmNVSTdRVUZEYmtJc2FVSkJRVXNzWlVGQlRDeERRVUZ4UWl4UFFVRnlRanRCUVVOQkxHbENRVUZMTEZWQlFVd3NRMEZCWjBJc1YwRkJhRUlzUTBGQk5FSXNTVUZCTlVJN1FVRkRSRHRCUVVOR08wRkJRMFE3UVVFdlFrbzdRVUZwUTBFc1YwRkJUeXhqUVVGUU8wRkJRMFFzUjBFNVJtRTdRVUZuUjJRc1MwRm9SMk1zWlVGblIxWXNUMEZvUjFVc1JVRm5SMFFzVVVGb1IwTXNSVUZuUjFNc1MwRm9SMVFzUlVGblIyZENPMEZCUXpWQ0xGRkJRVWtzWVVGQllTeFJRVUZSTEdGQlFWSXNRMEZCYzBJc1VVRkJkRUlzUTBGQmFrSTdRVUZEUVN4UlFVRkpMRU5CUVVNc1ZVRkJUQ3hGUVVGcFFqdEJRVU5tTEZkQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVZJc1JVRkJWeXhKUVVGSkxGRkJRVkVzVDBGQlVpeERRVUZuUWl4TlFVRndReXhGUVVFMFF5eEpRVUZKTEVOQlFXaEVMRVZCUVcxRUxFZEJRVzVFTEVWQlFYZEVPMEZCUTNSRUxGbEJRVWtzVVVGQlVTeFBRVUZTTEVOQlFXZENMRU5CUVdoQ0xFMUJRWFZDTEVsQlFUTkNMRVZCUVdsRE8wRkJReTlDTEhWQ1FVRmhMRkZCUVZFc1UwRkJVaXhEUVVGclFpeFJRVUZSTEU5QlFWSXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1NVRkJkMElzUjBGQmVFSXNSMEZCT0VJc1VVRkJhRVFzUTBGQllqdEJRVU5FTEZOQlJrUXNUVUZGVHp0QlFVTk1MSFZDUVVGaExGRkJRV0k3UVVGRFJEdEJRVU5FTEZsQlFVa3NVVUZCVVN4TFFVRlNMRU5CUVdNc1ZVRkJaQ3hOUVVFNFFpeFRRVUZzUXl4RlFVRTJRenRCUVVNelF5eHJRa0ZCVVN4aFFVRlNMRU5CUVhOQ0xGRkJRWFJDTEVsQlFXdERMRlZCUVd4RE8wRkJRMEU3UVVGRFJEdEJRVU5HTzBGQlEwWTdRVUZEUkN4WlFVRlJMRXRCUVZJc1EwRkJZeXhWUVVGa0xFbEJRVFJDTEV0QlFUVkNPMEZCUTBRN1FVRm9TR0VzUTBGQmFFSTdPMEZCYjBoQkxFbEJRVTBzWlVGQlpTeEZRVUZ5UWp0QlFVRkJMRWxCUTAwc1YwRkJWenRCUVVOVUxHbENRVUZsTEV0QlJFNDdRVUZGVkN4eFFrRkJiVUlzUzBGR1ZqdEJRVWRVTEdkQ1FVRmpMRWxCU0V3N1FVRkpWQ3hoUVVGWExFdEJTa1k3UVVGTFZDeDNRa0ZCYzBJc1IwRk1ZanRCUVUxVUxHOUNRVUZyUWl4SFFVNVVPMEZCVDFRc1owSkJRV01zUjBGUVREdEJRVkZVTEdOQlFWa3NTMEZTU0R0QlFWTlVMR05CUVZrc1NVRlVTRHRCUVZWVUxGZEJRVk1zU1VGV1FUdEJRVmRVTEZkQlFWTXNTVUZZUVR0QlFWbFVMRlZCUVZFc1MwRmFRenRCUVdGVUxGVkJRVkVzUzBGaVF6dEJRV05VTEZkQlFWTXNTVUZrUVR0QlFXVlVMRmRCUVZNc1NVRm1RVHRCUVdkQ1ZDeGhRVUZYTEVkQmFFSkdPMEZCYVVKVUxHRkJRVmNzUjBGcVFrWTdRVUZyUWxRc1YwRkJVeXhIUVd4Q1FUdEJRVzFDVkN4WFFVRlRMRWRCYmtKQk8wRkJiMEpVTEdsQ1FVRmxMRXRCY0VKT08wRkJjVUpVTEdGQlFWY3NRMEZ5UWtZN1FVRnpRbFFzVjBGQlV5eEpRWFJDUVR0QlFYVkNWQ3haUVVGVk8wRkJka0pFTEVOQlJHcENPenRKUVRKQ1RTeFJPMEZCUTBvc2IwSkJRVmtzVDBGQldpeEZRVUZ4UWl4UFFVRnlRaXhGUVVFNFFqdEJRVUZCT3p0QlFVVTFRaXhUUVVGTExFOUJRVXdzUjBGQlpTeFBRVUZtT3p0QlFVVkJMRkZCUVUwc1QwRkJUenRCUVVOWUxHdENRVUZaTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNZVUZCTTBJc1EwRkVSRHRCUVVWWUxHdENRVUZaTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNZVUZCTTBJc1EwRkdSRHRCUVVkWUxHVkJRVk1zVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFZRVUV6UWl4RFFVaEZPMEZCU1Znc1pVRkJVeXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTEVOQlNrVTdRVUZMV0N4alFVRlJMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1UwRkJNMElzUTBGTVJ6dEJRVTFZTEdOQlFWRXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4VFFVRXpRaXhEUVU1SE8wRkJUMWdzWlVGQlV5eFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNMRU5CVUVVN1FVRlJXQ3hsUVVGVExGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzVlVGQk0wSXNRMEZTUlR0QlFWTllMR2xDUVVGWExGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzV1VGQk0wSXNRMEZVUVR0QlFWVllMR2xDUVVGWExGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzV1VGQk0wSXNRMEZXUVR0QlFWZFlMR1ZCUVZNc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhWUVVFelFpeERRVmhGTzBGQldWZ3NaVUZCVXl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ0xFTkJXa1U3UVVGaFdDeHhRa0ZCWlN4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMR2RDUVVFelFpeERRV0pLTzBGQlkxZ3NhVUpCUVZjc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhYUVVFelFpeERRV1JCTzBGQlpWZ3NjVUpCUVdVc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhuUWtGQk0wSXNRMEZtU2p0QlFXZENXQ3g1UWtGQmJVSXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4eFFrRkJNMElzUTBGb1FsSTdRVUZwUWxnc2FVSkJRVmNzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFpRVUV6UWl4RFFXcENRVHRCUVd0Q1dDeHZRa0ZCWXl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeGxRVUV6UWl4RFFVRjJRaXhEUVd4Q1NEdEJRVzFDV0N4blFrRkJWU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTzBGQmJrSkRMRXRCUVdJN08wRkJjMEpCTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xGVkJRVWtzUzBGQlN5eEhRVUZNTEUxQlFXTXNTVUZCYkVJc1JVRkJkMEk3UVVGRGRFSXNaVUZCVHl4TFFVRkxMRWRCUVV3c1EwRkJVRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNhVUpCUVdFc1NVRkJZaXhGUVVGdFFpeFJRVUZ1UWl4RlFVRTJRaXhKUVVFM1FpeEZRVUZ0UXl4UFFVRnVRenM3UVVGRlFTeFJRVUZITEVOQlFVTXNTMEZCU3l4WlFVRlVMRVZCUVhWQ08wRkJRM0pDTEZkQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFOUJRWHBDTzBGQlEwUTdPMEZCUlVRc1UwRkJTeXhuUWtGQlRDeEhRVUYzUWl4SlFVRjRRanRCUVVOQkxGTkJRVXNzWlVGQlRDeEhRVUYxUWl4SlFVRjJRanRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFXWTdRVUZEUVN4VFFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVTBGQlN5eFBRVUZNTEVkQlFXVXNSVUZCWmp0QlFVTkJMRk5CUVVzc1IwRkJUQ3hIUVVGWExFbEJRVmc3TzBGQlJVRXNVMEZCU3l4TlFVRk1MRWRCUVdNc1NVRkJaRHRCUVVOQkxGTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1EwRkJlRUk3UVVGRFFTeFRRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFTkJRWGhDTzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDTzBGQlEwRXNVMEZCU3l4aFFVRk1MRWRCUVhGQ0xFTkJRWEpDT3p0QlFVVkJMRk5CUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWp0QlFVTkJMRk5CUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWpzN1FVRkZRU3hUUVVGTExHRkJRVXdzUjBGQmNVSXNRMEZCY2tJN1FVRkRRU3hUUVVGTExHRkJRVXdzUjBGQmNVSXNRMEZCY2tJN08wRkJSVUVzVTBGQlN5eFpRVUZNTEVkQlFXOUNMRU5CUVhCQ08wRkJRMEVzVTBGQlN5eFpRVUZNTEVkQlFXOUNMRU5CUVhCQ096dEJRVVZCTEZOQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hUUVVGTExFMUJRVXdzUjBGQll5eERRVUZrT3p0QlFVVkJMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMTEU5QlFVd3NSMEZCWlN4RFFVRm1PenRCUVVWQkxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanRCUVVOQkxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanM3UVVGRlFTeFRRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEVsQlFXcENMRU5CUVhOQ0xFbEJRWFJDTEVOQlFXNUNPMEZCUTBFc1UwRkJTeXh0UWtGQlRDeEhRVUV5UWl4TFFVRkxMRzFDUVVGTUxFTkJRWGxDTEVsQlFYcENMRU5CUVRoQ0xFbEJRVGxDTEVOQlFUTkNPMEZCUTBFc1UwRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NZMEZCVEN4RFFVRnZRaXhKUVVGd1FpeERRVUY1UWl4SlFVRjZRaXhEUVVGMFFqdEJRVU5CTEZOQlFVc3NhMEpCUVV3c1IwRkJNRUlzUzBGQlN5eHJRa0ZCVEN4RFFVRjNRaXhKUVVGNFFpeERRVUUyUWl4SlFVRTNRaXhEUVVFeFFqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExHRkJRVXdzUTBGQmJVSXNTVUZCYmtJc1EwRkJkMElzU1VGQmVFSXNRMEZCY2tJN1FVRkRRU3hUUVVGTExHdENRVUZNTEVkQlFUQkNMRXRCUVVzc2EwSkJRVXdzUTBGQmQwSXNTVUZCZUVJc1EwRkJOa0lzU1VGQk4wSXNRMEZCTVVJN1FVRkRRU3hUUVVGTExHZENRVUZNTEVkQlFYZENMRXRCUVVzc1owSkJRVXdzUTBGQmMwSXNTVUZCZEVJc1EwRkJNa0lzU1VGQk0wSXNRMEZCZUVJN1FVRkRRU3hUUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4alFVRk1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFYbENMRWxCUVhwQ0xFTkJRWFJDT3p0QlFVVkJMRk5CUVVzc1YwRkJUQ3hIUVVGdFFpeEpRVUZ1UWp0QlFVTkJMRk5CUVVzc1dVRkJUQ3hIUVVGdlFpeEpRVUZ3UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWp0QlFVTkJMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRVU1zVlVGQlZTeFRRVUZXTEVOQlFXOUNMRXRCUVhCQ0xFTkJRVEJDTERSRlFVRXhRaXhEUVVGb1FqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhEUVVGRExFTkJRVU1zVDBGQlR5eHBRa0ZCVkN4SlFVRTRRaXhEUVVGRExFdEJRVXNzVDBGQmVrUTdRVUZEUVN4VFFVRkxMR3RDUVVGTUxFZEJRVEJDTEVOQlFVTXNRMEZCUXl4UFFVRlBMSE5DUVVGVUxFbEJRVzFETEVOQlFVTXNTMEZCU3l4UFFVRnVSVHRCUVVOQkxGTkJRVXNzYVVKQlFVd3NSMEZCZVVJc1EwRkJla0k3UVVGRFFTeFRRVUZMTEZsQlFVd3NSMEZCYjBJc1EwRkJjRUk3TzBGQlJVRXNVMEZCU3l4VlFVRk1PMEZCUTBRN096czdhVU5CUlZrN1FVRkRXQ3hWUVVGSkxFdEJRVXNzYTBKQlFVd3NTMEZCTkVJc1UwRkJhRU1zUlVGQk1rTTdRVUZEZWtNc1lVRkJTeXhyUWtGQlRDeEhRVUV3UWl4UlFVRlJMR2RDUVVGU0xFTkJRWGxDTEVsQlFYcENMRU5CUVRGQ08wRkJRMEVzWVVGQlN5eHJRa0ZCVEN4SFFVRXdRaXhSUVVGUkxHZENRVUZTTEVOQlFYbENMRWxCUVhwQ0xFTkJRVEZDTzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hWUVVGSkxFdEJRVXNzYTBKQlFWUXNSVUZCTmtJN1FVRkRNMElzWjBKQlFWRXNWVUZCVWl4RFFVRnRRaXhMUVVGTExFOUJRWGhDTzBGQlEwUTdPMEZCUlVRc1ZVRkJTU3hSUVVGUkxFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1MwRkJTeXhQUVVFM1FpeERRVUZhTzBGQlEwRXNWVUZCU1N4TlFVRk5MR2RDUVVGT0xFTkJRWFZDTEZWQlFYWkNMRTFCUVhWRExGRkJRVE5ETEVWQlFYRkVPMEZCUTI1RUxHRkJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZCYlVJc1VVRkJia0lzUjBGQk9FSXNWVUZCT1VJN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZWQlFVY3NRMEZCUXl4TFFVRkxMR0ZCUVZRc1JVRkJkMEk3UVVGRGRFSXNZVUZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhEUVVGdFFpeGhRVUZ1UWl4SFFVRnRReXhOUVVGdVF6dEJRVU5FT3p0QlFVVkVPMEZCUTBFc1YwRkJTeXhaUVVGTU8wRkJRMEVzVjBGQlN5eG5Ra0ZCVER0QlFVTkJMRmRCUVVzc1RVRkJURHRCUVVOQkxGZEJRVXNzWjBKQlFVd3NRMEZCYzBJc1MwRkJTeXhuUWtGQk0wSTdRVUZEUkRzN08zTkRRVVZwUWp0QlFVTm9RaXhWUVVGSExFdEJRVXNzVDBGQlVpeEZRVUZwUWp0QlFVTm1MR0ZCUVVzc1QwRkJURHRCUVVORU8wRkJRMFk3T3p0dFEwRkZZenRCUVVOaUxGVkJRVWNzUzBGQlN5eFJRVUZTTEVWQlFXdENPMEZCUTJoQ0xHRkJRVXNzVFVGQlRDeEhRVUZqTEV0QlFVc3NUMEZCVEN4RFFVRmhMR2RDUVVGaUxFTkJRVGhDTEV0QlFVc3NVVUZCYmtNc1EwRkJaRHRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdGQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1QwRkJUQ3hEUVVGaExGRkJRVE5DTzBGQlEwUTdPMEZCUlVRc1ZVRkJSeXhEUVVGRExFdEJRVXNzVFVGQlRDeERRVUZaTEUxQlFXaENMRVZCUVhkQ08wRkJRM1JDTEdkQ1FVRlJMRWxCUVZJc1EwRkJZU3hyUkVGQllqdEJRVU5FT3p0QlFVVkVMRmRCUVVzc1QwRkJUQ3hIUVVGbExFVkJRV1k3UVVGRFFTeFhRVUZMTEU5QlFVd3NSMEZCWlN4RlFVRm1PenRCUVVWQkxGZEJRVXNzU1VGQlNTeFJRVUZSTEVOQlFXcENMRVZCUVc5Q0xGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NUVUZCZUVNc1JVRkJaMFFzVDBGQmFFUXNSVUZCZVVRN1FVRkRka1FzV1VGQlNTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRXRCUVZvc1EwRkJXanM3UVVGRlFTeFpRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNhMEpCUVZFc1ZVRkJVaXhEUVVGdFFpeExRVUZ1UWp0QlFVTkVPenRCUVVWRUxHTkJRVTBzUzBGQlRpeERRVUZaTEZGQlFWb3NSMEZCZFVJc1VVRkJVU3hWUVVGU0xFZEJRWEZDTEZWQlFUVkRPMEZCUTBFc1kwRkJUU3hMUVVGT0xFTkJRVmtzVDBGQldpeEhRVUZ6UWl4UFFVRjBRanRCUVVOQkxHTkJRVTBzUzBGQlRpeERRVUZaTEVsQlFWb3NSMEZCYlVJc1EwRkJia0k3UVVGRFFTeGpRVUZOTEV0QlFVNHNRMEZCV1N4SFFVRmFMRWRCUVd0Q0xFTkJRV3hDT3p0QlFVVkJMRmxCUVVrc1VVRkJVU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZpTEVWQlFXOUNMRTlCUVhCQ0xFdEJRV2RETEVOQlFUVkRPMEZCUTBFc1lVRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeERRVUZyUWl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGaUxFVkJRVzlDTEZOQlFYQkNMRXRCUVd0RExFdEJRWEJFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRU5CUVdFc1NVRkJZaXhEUVVGclFpeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRmlMRVZCUVc5Q0xGTkJRWEJDTEV0QlFXdERMRXRCUVhCRU8wRkJRMFE3UVVGRFJqczdPM1ZEUVVWclFqdEJRVU5xUWl4WFFVRkxMRmRCUVV3c1IwRkJiVUlzVDBGQlR5eFZRVUV4UWp0QlFVTkJMRmRCUVVzc1dVRkJUQ3hIUVVGdlFpeFBRVUZQTEZkQlFUTkNPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NWMEZCVEN4SFFVRnRRaXhMUVVGTExFOUJRVGRETzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRTlCUVRsRE8wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzWVVGQlpDeEZRVUUyUWl4TFFVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eGhRVUZ5UkN4RFFVRnlRanRCUVVOQkxGZEJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGTExHRkJRV1FzUlVGQk5rSXNTMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzWVVGQmRFUXNRMEZCY2tJN1FVRkRSRHM3TzIxRFFVVmpPMEZCUTJJc1YwRkJTeXhOUVVGTUxFZEJRV01zUzBGQlN5eFpRVUZNTEVOQlFXdENMSEZDUVVGc1FpeEZRVUZrTzBGQlEwRXNWMEZCU3l4blFrRkJUQ3hIUVVGM1FpeExRVUZMTEUxQlFVd3NRMEZCV1N4SlFVRndRenRCUVVOQkxGZEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQmNFTTdRVUZEUVN4WFFVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCYUVNN1FVRkRRU3hYUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1RVRkJha003UVVGRFFTeFhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NUMEZCTDBNN1FVRkRRU3hYUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzVDBGQmFFUTdRVUZEUVN4WFFVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4alFVRmtMRVZCUVRoQ0xFdEJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMR05CUVhaRUxFTkJRWEpDTzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NZMEZCWkN4RlFVRTRRaXhMUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4alFVRjRSQ3hEUVVGeVFqdEJRVU5FT3pzN2NVTkJSV2RDTEVzc1JVRkJUenRCUVVOMFFpeHRRa0ZCWVN4TFFVRkxMR2RDUVVGc1FqdEJRVU5CTEZkQlFVc3NaMEpCUVV3c1IwRkJkMElzVjBGQlZ5eExRVUZMTEd0Q1FVRm9RaXhGUVVGdlF5eExRVUZ3UXl4RFFVRjRRanRCUVVORU96czdOa0pCUlZFN1FVRkRVQ3hWUVVGSkxFdEJRVXNzVDBGQlZDeEZRVUZyUWp0QlFVTm9RanRCUVVORU8wRkJRMFFzVjBGQlN5eFBRVUZNTEVkQlFXVXNTVUZCWmpzN1FVRkZRU3hWUVVGSkxFdEJRVXNzYTBKQlFWUXNSVUZCTmtJN1FVRkRNMElzWVVGQlN5eFJRVUZNTEVkQlFXZENMRXRCUVdoQ08wRkJRMEVzWlVGQlR5eG5Ra0ZCVUN4RFFVRjNRaXh0UWtGQmVFSXNSVUZCTmtNc1MwRkJTeXh0UWtGQmJFUTdRVUZEUVN4aFFVRkxMR05CUVV3c1IwRkJjMElzVjBGQlZ5eExRVUZMTEd0Q1FVRm9RaXhGUVVGdlF5eExRVUZMTEZsQlFYcERMRU5CUVhSQ08wRkJRMFFzVDBGS1JDeE5RVWxQTEVsQlFVa3NTMEZCU3l4aFFVRlVMRVZCUVhkQ08wRkJRemRDTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTEdWQlFVOHNaMEpCUVZBc1EwRkJkMElzWTBGQmVFSXNSVUZCZDBNc1MwRkJTeXhqUVVFM1F6dEJRVU5CTEdGQlFVc3NZMEZCVEN4SFFVRnpRaXhYUVVGWExFdEJRVXNzWVVGQmFFSXNSVUZCSzBJc1MwRkJTeXhaUVVGd1F5eERRVUYwUWp0QlFVTkVMRTlCU2swc1RVRkpRVHRCUVVOTUxHRkJRVXNzV1VGQlRDeEhRVUZ2UWl4RFFVRndRanRCUVVOQkxHRkJRVXNzV1VGQlRDeEhRVUZ2UWl4RFFVRndRanRCUVVOQkxHRkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQkxHVkJRVThzWjBKQlFWQXNRMEZCZDBJc1YwRkJlRUlzUlVGQmNVTXNTMEZCU3l4WFFVRXhRenRCUVVOQkxHRkJRVXNzWlVGQlREdEJRVU5FT3p0QlFVVkVMR0ZCUVU4c1owSkJRVkFzUTBGQmQwSXNVVUZCZUVJc1JVRkJhME1zUzBGQlN5eGpRVUYyUXp0QlFVTkJMRmRCUVVzc1IwRkJUQ3hIUVVGWExFOUJRVThzUzBGQlN5eG5Ra0ZCV2l4RFFVRllPMEZCUTBRN096czRRa0ZGVXp0QlFVTlNMRlZCUVVrc1EwRkJReXhMUVVGTExFOUJRVllzUlVGQmJVSTdRVUZEYWtJN1FVRkRSRHRCUVVORUxGZEJRVXNzVDBGQlRDeEhRVUZsTEV0QlFXWTdPMEZCUlVFc1ZVRkJTU3hMUVVGTExHdENRVUZVTEVWQlFUWkNPMEZCUXpOQ0xHVkJRVThzYlVKQlFWQXNRMEZCTWtJc2JVSkJRVE5DTEVWQlFXZEVMRXRCUVVzc2JVSkJRWEpFTzBGQlEwUXNUMEZHUkN4TlFVVlBMRWxCUVVrc1MwRkJTeXhoUVVGVUxFVkJRWGRDTzBGQlF6ZENMR1ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNZMEZCTTBJc1JVRkJNa01zUzBGQlN5eGpRVUZvUkR0QlFVTkVMRTlCUmswc1RVRkZRVHRCUVVOTUxHVkJRVThzYlVKQlFWQXNRMEZCTWtJc1YwRkJNMElzUlVGQmQwTXNTMEZCU3l4WFFVRTNRenRCUVVORU96dEJRVVZFTEdGQlFVOHNiVUpCUVZBc1EwRkJNa0lzVVVGQk0wSXNSVUZCY1VNc1MwRkJTeXhqUVVFeFF6dEJRVU5CTEdGQlFVOHNUVUZCVUN4RFFVRmpMRXRCUVVzc1IwRkJia0k3UVVGRFJEczdPemhDUVVWVExFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFpDeFhRVUZMTEZWQlFVd3NSMEZCYTBJc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NWVUZCZGtJc1IwRkJiME1zUTBGQmRFUTdRVUZEUVN4WFFVRkxMRlZCUVV3c1IwRkJhMElzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1ZVRkJka0lzUjBGQmIwTXNRMEZCZEVRN1FVRkRSRHM3T3pKQ1FVVk5MRU1zUlVGQlJ5eERMRVZCUVVjN1FVRkRXQ3hYUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEZOQlFVNHNSMEZCYTBJc1MwRkJTeXhQUVVGMlFpeEhRVUZwUXl4RFFVRm9SRHRCUVVOQkxGZEJRVXNzVDBGQlRDeEhRVUZsTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExFOUJRWFpDTEVkQlFXbERMRU5CUVdoRU8wRkJRMFE3T3pzMlFrRkZVU3hETEVWQlFVY3NReXhGUVVGSE8wRkJRMklzVjBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEZOQlFYWkNMRWRCUVcxRExFTkJRWEJFTzBGQlEwRXNWMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRk5CUVhaQ0xFZEJRVzFETEVOQlFYQkVPMEZCUTBRN096c3lRa0ZGVFN4RExFVkJRVWNzUXl4RlFVRkhPMEZCUTFnc1YwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1QwRkJka0lzUjBGQmFVTXNRMEZCYUVRN1FVRkRRU3hYUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEZOQlFVNHNSMEZCYTBJc1MwRkJTeXhQUVVGMlFpeEhRVUZwUXl4RFFVRm9SRHRCUVVORU96czdNRUpCUlVzc1F5eEZRVUZITEVNc1JVRkJSenRCUVVOV0xGZEJRVXNzVFVGQlRDeEhRVUZqTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExFMUJRWFpDTEVkQlFXZERMRU5CUVRsRE8wRkJRMEVzVjBGQlN5eE5RVUZNTEVkQlFXTXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVFVGQmRrSXNSMEZCWjBNc1EwRkJPVU03UVVGRFJEczdPekpDUVVWTkxFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFdDeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5CTEZkQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEU5QlFYWkNMRWRCUVdsRExFTkJRV2hFTzBGQlEwUTdPenR2UTBGRlpTeFBMRVZCUVZNN1FVRkRka0lzVjBGQlN5eFpRVUZNTEVkQlFXOUNMRTlCUVhCQ08wRkJRMEVzVjBGQlN5eG5Ra0ZCVER0QlFVTkVPenM3WjBOQlJWY3NUeXhGUVVGVExFTXNSVUZCUnl4RExFVkJRVWM3UVVGRGVrSXNWVUZCU1N4RlFVRkZMRTlCUVVZc1EwRkJWU3hMUVVGTExGTkJRV1lzU1VGQk5FSXNTVUZCYUVNN1FVRkRRU3hWUVVGSkxFVkJRVVVzVDBGQlJpeERRVUZWTEV0QlFVc3NVMEZCWml4SlFVRTBRaXhKUVVGb1F6dEJRVU5CTEZWQlFVa3NTMEZCU3l4clFrRkJWQ3hGUVVFMlFqdEJRVU16UWl4blFrRkJVU3hIUVVGU0xFTkJRVmtzVDBGQldpeEZRVUZ4UWl4WFFVRnlRaXhGUVVGclF5eHBRa0ZCYVVJc1EwRkJha0lzUjBGQmNVSXNSMEZCY2tJc1IwRkJNa0lzUTBGQk0wSXNSMEZCSzBJc1MwRkJha1U3UVVGRFJDeFBRVVpFTEUxQlJVOHNTVUZCU1N4TFFVRkxMR3RDUVVGVUxFVkJRVFpDTzBGQlEyeERMR2RDUVVGUkxFZEJRVklzUTBGQldTeFBRVUZhTEVWQlFYRkNMRmRCUVhKQ0xFVkJRV3RETEdWQlFXVXNRMEZCWml4SFFVRnRRaXhIUVVGdVFpeEhRVUY1UWl4RFFVRjZRaXhIUVVFMlFpeEhRVUV2UkR0QlFVTkVMRTlCUmswc1RVRkZRVHRCUVVOTUxHZENRVUZSTEV0QlFWSXNRMEZCWXl4SlFVRmtMRWRCUVhGQ0xFTkJRWEpDTzBGQlEwRXNaMEpCUVZFc1MwRkJVaXhEUVVGakxFZEJRV1FzUjBGQmIwSXNRMEZCY0VJN1FVRkRSRHRCUVVOR096czdlVU5CUlc5Q08wRkJRMjVDTEZWQlFVa3NTMEZCU3l4clFrRkJUQ3hKUVVFeVFpeExRVUZMTEdsQ1FVRk1MRXRCUVRKQ0xFTkJRVEZFTEVWQlFUWkVPMEZCUXpORUxHRkJRVXNzVDBGQlREdEJRVU5CTEdGQlFVc3NhMEpCUVV3c1IwRkJNRUlzUzBGQk1VSTdRVUZEUVN4aFFVRkxMRTFCUVV3N1FVRkRSQ3hQUVVwRUxFMUJTVTg3UVVGRFRDeGhRVUZMTEdWQlFVdzdRVUZEUkR0QlFVTkdPenM3YjBOQlJXVTdRVUZEWkN4VlFVRkpMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEZsQlFVd3NTMEZCYzBJc1EwRkJhRVFzUlVGQmJVUTdRVUZEYWtRc1lVRkJTeXhQUVVGTU8wRkJRMEVzWVVGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVhKQ08wRkJRMEVzWVVGQlN5eE5RVUZNTzBGQlEwUXNUMEZLUkN4TlFVbFBPMEZCUTB3c1lVRkJTeXhsUVVGTU8wRkJRMFE3UVVGRFJqczdPM2xEUVVWdlFqdEJRVU51UWl4WFFVRkxMR1ZCUVV3c1IwRkJkVUlzU1VGQmRrSTdRVUZEUkRzN08zRkRRVVZuUWp0QlFVTm1MRmRCUVVzc1owSkJRVXc3UVVGRFJEczdPM1ZEUVVWclFqdEJRVU5xUWl4WFFVRkxMRmxCUVV3N1FVRkRRU3hWUVVGSkxHMUNRVUZ0UWl4TFFVRkxMRTFCUVV3c1IwRkJZeXhMUVVGTExGbEJRVEZETzBGQlFVRXNWVUZEU1N4dFFrRkJiVUlzUzBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4WlFVUXhRenRCUVVWQkxGVkJRVXNzUzBGQlN5eEhRVUZNTEVOQlFWTXNaMEpCUVZRc1NVRkJOa0lzUzBGQlN5eHZRa0ZCYmtNc1NVRkJOa1FzUzBGQlN5eEhRVUZNTEVOQlFWTXNaMEpCUVZRc1NVRkJOa0lzUzBGQlN5eHZRa0ZCYmtjc1JVRkJNRWc3UVVGRGVFZ3NZVUZCU3l4blFrRkJUQ3hEUVVGelFpeERRVUYwUWp0QlFVTkVPMEZCUTBRc1ZVRkJTU3hMUVVGTExGRkJRVlFzUlVGQmJVSTdRVUZEYWtJc1lVRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFZRVUZNTEVkQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4TFFVRkxMRTFCUVhwRU8wRkJRMEVzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwUXNUMEZJUkN4TlFVZFBPMEZCUTB3c1lVRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFZRVUZNTEVkQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4TFFVRkxMRTFCUVhwRU8wRkJRMEVzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwUTdRVUZEUkN4WFFVRkxMRTlCUVV3c1NVRkJaMElzUzBGQlN5eFpRVUZNTEVsQlFYRkNMRXRCUVVzc1QwRkJUQ3hIUVVGbExFZEJRWEJETEVOQlFXaENPMEZCUTBFc1YwRkJTeXhQUVVGTUxFbEJRV2RDTEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExFOUJRVXdzUjBGQlpTeEhRVUZ5UXl4RFFVRm9RanRCUVVOQkxGVkJRVWtzUTBGQlF5eE5RVUZOTEZkQlFWY3NTMEZCU3l4TlFVRm9RaXhEUVVGT0xFTkJRVXdzUlVGQmNVTTdRVUZEYmtNc1lVRkJTeXhQUVVGTUxFZEJRV1VzVVVGQlVTeExRVUZTTEVOQlFXTXNTMEZCU3l4UFFVRnVRaXhGUVVFMFFpeERRVUZETEV0QlFVc3NUVUZCYkVNc1JVRkJNRU1zUzBGQlN5eE5RVUV2UXl4RFFVRm1PMEZCUTBRN1FVRkRSQ3hWUVVGSkxFTkJRVU1zVFVGQlRTeFhRVUZYTEV0QlFVc3NUVUZCYUVJc1EwRkJUaXhEUVVGTUxFVkJRWEZETzBGQlEyNURMR0ZCUVVzc1QwRkJUQ3hIUVVGbExGRkJRVkVzUzBGQlVpeERRVUZqTEV0QlFVc3NUMEZCYmtJc1JVRkJORUlzUTBGQlF5eExRVUZMTEUxQlFXeERMRVZCUVRCRExFdEJRVXNzVFVGQkwwTXNRMEZCWmp0QlFVTkVPMEZCUTBRc1YwRkJTeXhUUVVGTUxFbEJRV3RDTEVOQlFVTXNTMEZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhUUVVGeVFpeEpRVUZyUXl4TFFVRkxMRk5CUVhwRU8wRkJRMEVzVjBGQlN5eFRRVUZNTEVsQlFXdENMRU5CUVVNc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFRRVUZ5UWl4SlFVRnJReXhMUVVGTExGTkJRWHBFTzBGQlEwRXNWMEZCU3l4SlFVRkpMRkZCUVZFc1EwRkJha0lzUlVGQmIwSXNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hOUVVGNFF5eEZRVUZuUkN4UFFVRm9SQ3hGUVVGNVJEdEJRVU4yUkN4WlFVRkpMRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQldpeERRVUZhTzBGQlFVRXNXVUZEU1N4VFFVRlRMRXRCUVVzc1QwRkJUQ3hEUVVGaExFdEJRV0lzUTBGRVlqdEJRVUZCTEZsQlJVa3NVMEZCVXl4TFFVRkxMRTlCUVV3c1EwRkJZU3hMUVVGaUxFTkJSbUk3UVVGQlFTeFpRVWRKTEZWQlFWVXNTMEZCU3l4VFFVRk1MRWxCUVd0Q0xGVkJRVlVzUzBGQlN5eFBRVUZNTEVkQlFXVXNRMEZCUXl4RFFVRm9RaXhIUVVGdlFpeERRVUU1UWl4RFFVRnNRaXhEUVVoa08wRkJRVUVzV1VGSlNTeFZRVUZWTEV0QlFVc3NVMEZCVEN4SlFVRnJRaXhWUVVGVkxFdEJRVXNzVDBGQlRDeEhRVUZsTEVOQlFVTXNRMEZCYUVJc1IwRkJiMElzUTBGQk9VSXNRMEZCYkVJc1EwRktaRHRCUVV0QkxHRkJRVXNzVjBGQlRDeERRVUZwUWl4TFFVRnFRaXhGUVVGM1FpeFBRVUY0UWl4RlFVRnBReXhQUVVGcVF6dEJRVU5FTzBGQlEwUXNWMEZCU3l4SFFVRk1MRWRCUVZjc1QwRkJUeXhMUVVGTExHZENRVUZhTEVOQlFWZzdRVUZEUkRzN096SkNRVVZOTEVrc1JVRkJUU3hMTEVWQlFVMDdRVUZEYWtJN1FVRkRRU3hWUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFWUXNTVUZCWXl4WlFVRjBRanRCUVVGQkxGVkJRVzlETzBGQlEyaERMRlZCUVVrc1EwRkJReXhUUVVGVExFTkJRVllzU1VGQlpTeFpRVVIyUWl4RFFVWnBRaXhEUVVkdFFqczdRVUZGY0VNN1FVRkRRU3hWUVVGSkxGZEJRVmNzUzBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1YwRkJlRU03UVVGRFFTeFZRVUZKTEV0QlFVc3NVVUZCVEN4TFFVRnJRaXhSUVVGMFFpeEZRVUZuUXp0QlFVTTVRaXhoUVVGTExGRkJRVXdzUjBGQlowSXNVVUZCYUVJN1FVRkRRU3hoUVVGTExHVkJRVXdzUjBGQmRVSXNTVUZCZGtJN1FVRkRSRHM3UVVGRlJDeFZRVUZKTEV0QlFVc3NaVUZCVkN4RlFVRXdRanRCUVVONFFpeGhRVUZMTEdWQlFVd3NSMEZCZFVJc1MwRkJka0k3UVVGRFFTeGhRVUZMTEZsQlFVd3NSMEZCYjBJc1EwRkJjRUk3UVVGRFFTeGhRVUZMTEZsQlFVd3NSMEZCYjBJc1EwRkJjRUk3UVVGRFJEczdRVUZGUkN4WFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGa08wRkJRMEVzVjBGQlN5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkVPenM3ZDBOQlJXMUNMRXNzUlVGQlR6dEJRVU42UWl4VlFVRkpMRTlCUVU4c1RVRkJUU3hKUVVGcVFqdEJRVU5CTEZWQlFVa3NVVUZCVVN4TlFVRk5MRXRCUVd4Q08wRkJRMEVzVlVGQlNTeFRRVUZUTEVsQlFWUXNTVUZCYVVJc1ZVRkJWU3hKUVVFdlFpeEZRVUZ4UXp0QlFVTnVReXhoUVVGTExHbENRVUZNTEVkQlFYbENMRU5CUVhwQ08wRkJRMEVzWVVGQlN5eE5RVUZNTEVOQlFWa3NTVUZCV2l4RlFVRnJRaXhMUVVGc1FqdEJRVU5FTzBGQlEwWTdPenR0UTBGRll5eExMRVZCUVU4N1FVRkRjRUlzVlVGQlNTeFBRVUZQTEUxQlFVMHNXVUZCVGl4RFFVRnRRaXhKUVVFNVFqdEJRVU5CTEZWQlFVa3NVVUZCVVN4TlFVRk5MRmxCUVU0c1EwRkJiVUlzUzBGQkwwSTdRVUZEUVN4VlFVRkpMRk5CUVZNc1NVRkJWQ3hKUVVGcFFpeFZRVUZWTEVsQlFTOUNMRVZCUVhGRE8wRkJRMjVETEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1JVRkJhMElzUzBGQmJFSTdRVUZEUkR0QlFVTkdPenM3WjBOQlJWY3NTeXhGUVVGUE8wRkJRMnBDTEZWQlFVa3NWVUZCVlN4TlFVRk5MRTlCUVhCQ08wRkJRVUVzVlVGRFNTeFZRVUZWTEUxQlFVMHNUMEZFY0VJN08wRkJSMEU3UVVGRFFTeFZRVUZITEV0QlFVc3NVMEZCVEN4TFFVTkRMRlZCUVZVc1MwRkJTeXhuUWtGQlppeEpRVUZ0UXl4VlFVRlZMRXRCUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4WlFVRXpSU3hKUVVOQkxGVkJRVlVzUzBGQlN5eG5Ra0ZCWml4SlFVRnRReXhWUVVGVkxFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhoUVVZeFJTeERRVUZJTEVWQlJUaEdPMEZCUXpGR0xHRkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVN4aFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGa08wRkJRMEU3UVVGRFJEczdRVUZGU0N4VlFVRkpMRXRCUVVzc1lVRkJWQ3hGUVVGM1FqdEJRVU4wUWp0QlFVTkJMRmxCUVVrc1MwRkJTeXhwUWtGQlZDeEZRVUUwUWp0QlFVTXhRaXh2UWtGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4UFFVRlVMRVZCUVd0Q0xFdEJRVXNzWjBKQlFYWkNMRU5CUVZZN1FVRkRRU3h2UWtGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4UFFVRlVMRVZCUVd0Q0xFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhaUVVFdlF5eERRVUZXTzBGQlEwRXNiMEpCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zVDBGQlZDeEZRVUZyUWl4TFFVRkxMR2RDUVVGMlFpeERRVUZXTzBGQlEwRXNiMEpCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zVDBGQlZDeEZRVUZyUWl4TFFVRkxMR2RDUVVGTUxFZEJRWGRDTEV0QlFVc3NZVUZCTDBNc1EwRkJWanRCUVVORU8wRkJRMFE3UVVGRFFTeFpRVUZITEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExHRkJRVGxDTEVWQlFUWkRPMEZCUXpORExHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR2RDUVVGbUxFZEJRV3RETEV0QlFVc3NZMEZCZUVNc1NVRkJNRVFzUzBGQlN5eGhRVUUzUlR0QlFVTkJMR1ZCUVVzc1RVRkJUQ3hIUVVGakxFTkJRVU1zVlVGQlZTeExRVUZMTEdkQ1FVRm1MRWRCUVd0RExFdEJRVXNzWTBGQmVFTXNTVUZCTUVRc1MwRkJTeXhoUVVFM1JUdEJRVU5FTzBGQlEwWXNUMEZpUkN4TlFXRlBPMEZCUTB3N1FVRkRRU3haUVVGSExFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMR0ZCUVRsQ0xFVkJRVFpETzBGQlF6TkRMR1ZCUVVzc1RVRkJUQ3hIUVVGakxFTkJRVU1zVlVGQlZTeExRVUZMTEdGQlFXaENMRWxCUVdsRExFdEJRVXNzWVVGQmNFUTdRVUZEUVN4bFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGRExGVkJRVlVzUzBGQlN5eGhRVUZvUWl4SlFVRnBReXhMUVVGTExHRkJRWEJFTzBGQlEwUTdRVUZEUmp0QlFVTkdPenM3T0VKQlJWTTdRVUZEVWl4WFFVRkxMRTlCUVV3N08wRkJSVUVzYlVKQlFXRXNTMEZCU3l4blFrRkJiRUk3UVVGRFFTeHRRa0ZCWVN4TFFVRkxMR05CUVd4Q096dEJRVVZCTEZkQlFVc3NUMEZCVEN4RFFVRmhMR1ZCUVdJc1EwRkJOa0lzVDBGQk4wSTdRVUZEUVN4WFFVRkxMRWxCUVVrc1VVRkJVU3hEUVVGcVFpeEZRVUZ2UWl4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRWGhETEVWQlFXZEVMRTlCUVdoRUxFVkJRWGxFTzBGQlEzWkVMR0ZCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUlVGQmJVSXNaVUZCYmtJc1EwRkJiVU1zVDBGQmJrTTdRVUZEUkRzN1FVRkZSQ3hoUVVGUExFdEJRVXNzVDBGQldqdEJRVU5CTEdGQlFVOHNTMEZCU3l4TlFVRmFPMEZCUTBRN096czRRa0ZGVXp0QlFVTlNMR0ZCUVU4c1QwRkJVRHRCUVVORU96czdPenM3UVVGSlNDeFBRVUZQTEU5QlFWQXNSMEZCYVVJc1VVRkJha0lpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQmxLSFFzYml4eUtYdG1kVzVqZEdsdmJpQnpLRzhzZFNsN2FXWW9JVzViYjEwcGUybG1LQ0YwVzI5ZEtYdDJZWElnWVQxMGVYQmxiMllnY21WeGRXbHlaVDA5WENKbWRXNWpkR2x2Ymx3aUppWnlaWEYxYVhKbE8ybG1LQ0YxSmlaaEtYSmxkSFZ5YmlCaEtHOHNJVEFwTzJsbUtHa3BjbVYwZFhKdUlHa29ieXdoTUNrN2RtRnlJR1k5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXR2SzF3aUoxd2lLVHQwYUhKdmR5Qm1MbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNabjEyWVhJZ2JEMXVXMjlkUFh0bGVIQnZjblJ6T250OWZUdDBXMjlkV3pCZExtTmhiR3dvYkM1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0dVcGUzWmhjaUJ1UFhSYmIxMWJNVjFiWlYwN2NtVjBkWEp1SUhNb2JqOXVPbVVwZlN4c0xHd3VaWGh3YjNKMGN5eGxMSFFzYml4eUtYMXlaWFIxY200Z2JsdHZYUzVsZUhCdmNuUnpmWFpoY2lCcFBYUjVjR1Z2WmlCeVpYRjFhWEpsUFQxY0ltWjFibU4wYVc5dVhDSW1KbkpsY1hWcGNtVTdabTl5S0haaGNpQnZQVEE3Ynp4eUxteGxibWQwYUR0dkt5c3BjeWh5VzI5ZEtUdHlaWFIxY200Z2MzMHBJaXdpTHlwY2JtOWlhbVZqZEMxaGMzTnBaMjVjYmloaktTQlRhVzVrY21VZ1UyOXlhSFZ6WEc1QWJHbGpaVzV6WlNCTlNWUmNiaW92WEc1Y2JpZDFjMlVnYzNSeWFXTjBKenRjYmk4cUlHVnpiR2x1ZEMxa2FYTmhZbXhsSUc1dkxYVnVkWE5sWkMxMllYSnpJQ292WEc1MllYSWdaMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SUQwZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N6dGNiblpoY2lCb1lYTlBkMjVRY205d1pYSjBlU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIazdYRzUyWVhJZ2NISnZjRWx6Ulc1MWJXVnlZV0pzWlNBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVTdYRzVjYm1aMWJtTjBhVzl1SUhSdlQySnFaV04wS0haaGJDa2dlMXh1WEhScFppQW9kbUZzSUQwOVBTQnVkV3hzSUh4OElIWmhiQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzVjZEZ4MGRHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25UMkpxWldOMExtRnpjMmxuYmlCallXNXViM1FnWW1VZ1kyRnNiR1ZrSUhkcGRHZ2diblZzYkNCdmNpQjFibVJsWm1sdVpXUW5LVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJQWW1wbFkzUW9kbUZzS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJodmRXeGtWWE5sVG1GMGFYWmxLQ2tnZTF4dVhIUjBjbmtnZTF4dVhIUmNkR2xtSUNnaFQySnFaV04wTG1GemMybG5iaWtnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEgxY2JseHVYSFJjZEM4dklFUmxkR1ZqZENCaWRXZG5lU0J3Y205d1pYSjBlU0JsYm5WdFpYSmhkR2x2YmlCdmNtUmxjaUJwYmlCdmJHUmxjaUJXT0NCMlpYSnphVzl1Y3k1Y2JseHVYSFJjZEM4dklHaDBkSEJ6T2k4dlluVm5jeTVqYUhKdmJXbDFiUzV2Y21jdmNDOTJPQzlwYzNOMVpYTXZaR1YwWVdsc1AybGtQVFF4TVRoY2JseDBYSFIyWVhJZ2RHVnpkREVnUFNCdVpYY2dVM1J5YVc1bktDZGhZbU1uS1RzZ0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGJtVjNMWGR5WVhCd1pYSnpYRzVjZEZ4MGRHVnpkREZiTlYwZ1BTQW5aR1VuTzF4dVhIUmNkR2xtSUNoUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbE9ZVzFsY3loMFpYTjBNU2xiTUYwZ1BUMDlJQ2MxSnlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSY2RIMWNibHh1WEhSY2RDOHZJR2gwZEhCek9pOHZZblZuY3k1amFISnZiV2wxYlM1dmNtY3ZjQzkyT0M5cGMzTjFaWE12WkdWMFlXbHNQMmxrUFRNd05UWmNibHgwWEhSMllYSWdkR1Z6ZERJZ1BTQjdmVHRjYmx4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJREV3T3lCcEt5c3BJSHRjYmx4MFhIUmNkSFJsYzNReVd5ZGZKeUFySUZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb2FTbGRJRDBnYVR0Y2JseDBYSFI5WEc1Y2RGeDBkbUZ5SUc5eVpHVnlNaUE5SUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6S0hSbGMzUXlLUzV0WVhBb1puVnVZM1JwYjI0Z0tHNHBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBaWE4wTWx0dVhUdGNibHgwWEhSOUtUdGNibHgwWEhScFppQW9iM0prWlhJeUxtcHZhVzRvSnljcElDRTlQU0FuTURFeU16UTFOamM0T1NjcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUjlYRzVjYmx4MFhIUXZMeUJvZEhSd2N6b3ZMMkoxWjNNdVkyaHliMjFwZFcwdWIzSm5MM0F2ZGpndmFYTnpkV1Z6TDJSbGRHRnBiRDlwWkQwek1EVTJYRzVjZEZ4MGRtRnlJSFJsYzNReklEMGdlMzA3WEc1Y2RGeDBKMkZpWTJSbFptZG9hV3ByYkcxdWIzQnhjbk4wSnk1emNHeHBkQ2duSnlrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2JHVjBkR1Z5S1NCN1hHNWNkRngwWEhSMFpYTjBNMXRzWlhSMFpYSmRJRDBnYkdWMGRHVnlPMXh1WEhSY2RIMHBPMXh1WEhSY2RHbG1JQ2hQWW1wbFkzUXVhMlY1Y3loUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMFpYTjBNeWtwTG1wdmFXNG9KeWNwSUNFOVBWeHVYSFJjZEZ4MFhIUW5ZV0pqWkdWbVoyaHBhbXRzYlc1dmNIRnljM1FuS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYRzVjZEgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1WEhSY2RDOHZJRmRsSUdSdmJpZDBJR1Y0Y0dWamRDQmhibmtnYjJZZ2RHaGxJR0ZpYjNabElIUnZJSFJvY205M0xDQmlkWFFnWW1WMGRHVnlJSFJ2SUdKbElITmhabVV1WEc1Y2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUjlYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2MyaHZkV3hrVlhObFRtRjBhWFpsS0NrZ1B5QlBZbXBsWTNRdVlYTnphV2R1SURvZ1puVnVZM1JwYjI0Z0tIUmhjbWRsZEN3Z2MyOTFjbU5sS1NCN1hHNWNkSFpoY2lCbWNtOXRPMXh1WEhSMllYSWdkRzhnUFNCMGIwOWlhbVZqZENoMFlYSm5aWFFwTzF4dVhIUjJZWElnYzNsdFltOXNjenRjYmx4dVhIUm1iM0lnS0haaGNpQnpJRDBnTVRzZ2N5QThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJSE1yS3lrZ2UxeHVYSFJjZEdaeWIyMGdQU0JQWW1wbFkzUW9ZWEpuZFcxbGJuUnpXM05kS1R0Y2JseHVYSFJjZEdadmNpQW9kbUZ5SUd0bGVTQnBiaUJtY205dEtTQjdYRzVjZEZ4MFhIUnBaaUFvYUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNobWNtOXRMQ0JyWlhrcEtTQjdYRzVjZEZ4MFhIUmNkSFJ2VzJ0bGVWMGdQU0JtY205dFcydGxlVjA3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dkbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N5a2dlMXh1WEhSY2RGeDBjM2x0WW05c2N5QTlJR2RsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lobWNtOXRLVHRjYmx4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYzNsdFltOXNjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvY0hKdmNFbHpSVzUxYldWeVlXSnNaUzVqWVd4c0tHWnliMjBzSUhONWJXSnZiSE5iYVYwcEtTQjdYRzVjZEZ4MFhIUmNkRngwZEc5YmMzbHRZbTlzYzF0cFhWMGdQU0JtY205dFczTjViV0p2YkhOYmFWMWRPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJSFJ2TzF4dWZUdGNiaUlzSWk4dklFZGxibVZ5WVhSbFpDQmllU0JEYjJabVpXVlRZM0pwY0hRZ01TNHhNaTR5WEc0b1puVnVZM1JwYjI0b0tTQjdYRzRnSUhaaGNpQm5aWFJPWVc1dlUyVmpiMjVrY3l3Z2FISjBhVzFsTENCc2IyRmtWR2x0WlN3Z2JXOWtkV3hsVEc5aFpGUnBiV1VzSUc1dlpHVk1iMkZrVkdsdFpTd2dkWEJVYVcxbE8xeHVYRzRnSUdsbUlDZ29kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0J1ZFd4c0tTQW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncE8xeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQnBaaUFvS0hSNWNHVnZaaUJ3Y205alpYTnpJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUhCeWIyTmxjM01nSVQwOUlHNTFiR3dwSUNZbUlIQnliMk5sYzNNdWFISjBhVzFsS1NCN1hHNGdJQ0FnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvWjJWMFRtRnViMU5sWTI5dVpITW9LU0F0SUc1dlpHVk1iMkZrVkdsdFpTa2dMeUF4WlRZN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JvY25ScGJXVWdQU0J3Y205alpYTnpMbWh5ZEdsdFpUdGNiaUFnSUNCblpYUk9ZVzV2VTJWamIyNWtjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2h5TzF4dUlDQWdJQ0FnYUhJZ1BTQm9jblJwYldVb0tUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCb2Nsc3dYU0FxSURGbE9TQXJJR2h5V3pGZE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYlc5a2RXeGxURzloWkZScGJXVWdQU0JuWlhST1lXNXZVMlZqYjI1a2N5Z3BPMXh1SUNBZ0lIVndWR2x0WlNBOUlIQnliMk5sYzNNdWRYQjBhVzFsS0NrZ0tpQXhaVGs3WEc0Z0lDQWdibTlrWlV4dllXUlVhVzFsSUQwZ2JXOWtkV3hsVEc5aFpGUnBiV1VnTFNCMWNGUnBiV1U3WEc0Z0lIMGdaV3h6WlNCcFppQW9SR0YwWlM1dWIzY3BJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFUmhkR1V1Ym05M0tDa2dMU0JzYjJGa1ZHbHRaVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHeHZZV1JVYVcxbElEMGdSR0YwWlM1dWIzY29LVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwSUMwZ2JHOWhaRlJwYldVN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JzYjJGa1ZHbHRaU0E5SUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVJQ0I5WEc1Y2JuMHBMbU5oYkd3b2RHaHBjeWs3WEc1Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QWEJsY21admNtMWhibU5sTFc1dmR5NXFjeTV0WVhCY2JpSXNJaTh2SUhOb2FXMGdabTl5SUhWemFXNW5JSEJ5YjJObGMzTWdhVzRnWW5KdmQzTmxjbHh1ZG1GeUlIQnliMk5sYzNNZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdDlPMXh1WEc0dkx5QmpZV05vWldRZ1puSnZiU0IzYUdGMFpYWmxjaUJuYkc5aVlXd2dhWE1nY0hKbGMyVnVkQ0J6YnlCMGFHRjBJSFJsYzNRZ2NuVnVibVZ5Y3lCMGFHRjBJSE4wZFdJZ2FYUmNiaTh2SUdSdmJpZDBJR0p5WldGcklIUm9hVzVuY3k0Z0lFSjFkQ0IzWlNCdVpXVmtJSFJ2SUhkeVlYQWdhWFFnYVc0Z1lTQjBjbmtnWTJGMFkyZ2dhVzRnWTJGelpTQnBkQ0JwYzF4dUx5OGdkM0poY0hCbFpDQnBiaUJ6ZEhKcFkzUWdiVzlrWlNCamIyUmxJSGRvYVdOb0lHUnZaWE51SjNRZ1pHVm1hVzVsSUdGdWVTQm5iRzlpWVd4ekxpQWdTWFFuY3lCcGJuTnBaR1VnWVZ4dUx5OGdablZ1WTNScGIyNGdZbVZqWVhWelpTQjBjbmt2WTJGMFkyaGxjeUJrWlc5d2RHbHRhWHBsSUdsdUlHTmxjblJoYVc0Z1pXNW5hVzVsY3k1Y2JseHVkbUZ5SUdOaFkyaGxaRk5sZEZScGJXVnZkWFE3WEc1MllYSWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBPMXh1WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwVTJWMFZHbHRiM1YwS0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduYzJWMFZHbHRaVzkxZENCb1lYTWdibTkwSUdKbFpXNGdaR1ZtYVc1bFpDY3BPMXh1ZlZ4dVpuVnVZM1JwYjI0Z1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQW9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGpiR1ZoY2xScGJXVnZkWFFnYUdGeklHNXZkQ0JpWldWdUlHUmxabWx1WldRbktUdGNibjFjYmlobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCelpYUlVhVzFsYjNWMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZER0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiR1ZoY2xScGJXVnZkWFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR05zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnZlZ4dWZTQW9LU2xjYm1aMWJtTjBhVzl1SUhKMWJsUnBiV1Z2ZFhRb1puVnVLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFQwOUlITmxkRlJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnTHk5dWIzSnRZV3dnWlc1MmFYSnZiV1Z1ZEhNZ2FXNGdjMkZ1WlNCemFYUjFZWFJwYjI1elhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlITmxkRlJwYldWdmRYUWdkMkZ6YmlkMElHRjJZV2xzWVdKc1pTQmlkWFFnZDJGeklHeGhkSFJsY2lCa1pXWnBibVZrWEc0Z0lDQWdhV1lnS0NoallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwOVBTQmtaV1poZFd4MFUyVjBWR2x0YjNWMElIeDhJQ0ZqWVdOb1pXUlRaWFJVYVcxbGIzVjBLU0FtSmlCelpYUlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0J6WlhSVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhkb1pXNGdjMjl0WldKdlpIa2dhR0Z6SUhOamNtVjNaV1FnZDJsMGFDQnpaWFJVYVcxbGIzVjBJR0oxZENCdWJ5QkpMa1V1SUcxaFpHUnVaWE56WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb1pXNGdkMlVnWVhKbElHbHVJRWt1UlM0Z1luVjBJSFJvWlNCelkzSnBjSFFnYUdGeklHSmxaVzRnWlhaaGJHVmtJSE52SUVrdVJTNGdaRzlsYzI0bmRDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpGTmxkRlJwYldWdmRYUXVZMkZzYkNodWRXeHNMQ0JtZFc0c0lEQXBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9LR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnWm5WdUxDQXdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNTlYRzVtZFc1amRHbHZiaUJ5ZFc1RGJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1kyeGxZWEpVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUM4dmJtOXliV0ZzSUdWdWRtbHliMjFsYm5SeklHbHVJSE5oYm1VZ2MybDBkV0YwYVc5dWMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JR05zWldGeVZHbHRaVzkxZENCM1lYTnVKM1FnWVhaaGFXeGhZbXhsSUdKMWRDQjNZWE1nYkdGMGRHVnlJR1JsWm1sdVpXUmNiaUFnSUNCcFppQW9LR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQjhmQ0FoWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwS1NBbUppQmpiR1ZoY2xScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdZMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDOHZJSGRvWlc0Z2QyaGxiaUJ6YjIxbFltOWtlU0JvWVhNZ2MyTnlaWGRsWkNCM2FYUm9JSE5sZEZScGJXVnZkWFFnWW5WMElHNXZJRWt1UlM0Z2JXRmtaRzVsYzNOY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWMmhsYmlCM1pTQmhjbVVnYVc0Z1NTNUZMaUJpZFhRZ2RHaGxJSE5qY21sd2RDQm9ZWE1nWW1WbGJpQmxkbUZzWldRZ2MyOGdTUzVGTGlCa2IyVnpiaWQwSUNCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDNWpZV3hzS0c1MWJHd3NJRzFoY210bGNpazdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSXVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRiMjFsSUhabGNuTnBiMjV6SUc5bUlFa3VSUzRnYUdGMlpTQmthV1ptWlhKbGJuUWdjblZzWlhNZ1ptOXlJR05zWldGeVZHbHRaVzkxZENCMmN5QnpaWFJVYVcxbGIzVjBYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z2JXRnlhMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzVjYm4xY2JuWmhjaUJ4ZFdWMVpTQTlJRnRkTzF4dWRtRnlJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzUyWVhJZ1kzVnljbVZ1ZEZGMVpYVmxPMXh1ZG1GeUlIRjFaWFZsU1c1a1pYZ2dQU0F0TVR0Y2JseHVablZ1WTNScGIyNGdZMnhsWVc1VmNFNWxlSFJVYVdOcktDa2dlMXh1SUNBZ0lHbG1JQ2doWkhKaGFXNXBibWNnZkh3Z0lXTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNGdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JqZFhKeVpXNTBVWFZsZFdVdVkyOXVZMkYwS0hGMVpYVmxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnWkhKaGFXNVJkV1YxWlNncE8xeHVJQ0FnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWkhKaGFXNVJkV1YxWlNncElIdGNiaUFnSUNCcFppQW9aSEpoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdkR2x0Wlc5MWRDQTlJSEoxYmxScGJXVnZkWFFvWTJ4bFlXNVZjRTVsZUhSVWFXTnJLVHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJSFJ5ZFdVN1hHNWNiaUFnSUNCMllYSWdiR1Z1SUQwZ2NYVmxkV1V1YkdWdVozUm9PMXh1SUNBZ0lIZG9hV3hsS0d4bGJpa2dlMXh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVWFZsZFdVZ1BTQnhkV1YxWlR0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tDc3JjWFZsZFdWSmJtUmxlQ0E4SUd4bGJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SUmRXVjFaVnR4ZFdWMVpVbHVaR1Y0WFM1eWRXNG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ0lDQWdJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ0lDQjlYRzRnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxJRDBnYm5Wc2JEdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQWdJSEoxYmtOc1pXRnlWR2x0Wlc5MWRDaDBhVzFsYjNWMEtUdGNibjFjYmx4dWNISnZZMlZ6Y3k1dVpYaDBWR2xqYXlBOUlHWjFibU4wYVc5dUlDaG1kVzRwSUh0Y2JpQWdJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ2FXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4S1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoY21kelcya2dMU0F4WFNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnhkV1YxWlM1d2RYTm9LRzVsZHlCSmRHVnRLR1oxYml3Z1lYSm5jeWtwTzF4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURFZ0ppWWdJV1J5WVdsdWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhKMWJsUnBiV1Z2ZFhRb1pISmhhVzVSZFdWMVpTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dUx5OGdkamdnYkdsclpYTWdjSEpsWkdsamRHbGliR1VnYjJKcVpXTjBjMXh1Wm5WdVkzUnBiMjRnU1hSbGJTaG1kVzRzSUdGeWNtRjVLU0I3WEc0Z0lDQWdkR2hwY3k1bWRXNGdQU0JtZFc0N1hHNGdJQ0FnZEdocGN5NWhjbkpoZVNBOUlHRnljbUY1TzF4dWZWeHVTWFJsYlM1d2NtOTBiM1I1Y0dVdWNuVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVablZ1TG1Gd2NHeDVLRzUxYkd3c0lIUm9hWE11WVhKeVlYa3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRHbDBiR1VnUFNBblluSnZkM05sY2ljN1hHNXdjbTlqWlhOekxtSnliM2R6WlhJZ1BTQjBjblZsTzF4dWNISnZZMlZ6Y3k1bGJuWWdQU0I3ZlR0Y2JuQnliMk5sYzNNdVlYSm5kaUE5SUZ0ZE8xeHVjSEp2WTJWemN5NTJaWEp6YVc5dUlEMGdKeWM3SUM4dklHVnRjSFI1SUhOMGNtbHVaeUIwYnlCaGRtOXBaQ0J5WldkbGVIQWdhWE56ZFdWelhHNXdjbTlqWlhOekxuWmxjbk5wYjI1eklEMGdlMzA3WEc1Y2JtWjFibU4wYVc5dUlHNXZiM0FvS1NCN2ZWeHVYRzV3Y205alpYTnpMbTl1SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011WVdSa1RHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1dmJtTmxJRDBnYm05dmNEdGNibkJ5YjJObGMzTXViMlptSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y21WdGIzWmxUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNuTWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NWxiV2wwSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFOXVZMlZNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzVjYm5CeWIyTmxjM011YkdsemRHVnVaWEp6SUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUhzZ2NtVjBkWEp1SUZ0ZElIMWNibHh1Y0hKdlkyVnpjeTVpYVc1a2FXNW5JRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVltbHVaR2x1WnlCcGN5QnViM1FnYzNWd2NHOXlkR1ZrSnlrN1hHNTlPMXh1WEc1d2NtOWpaWE56TG1OM1pDQTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUNjdkp5QjlPMXh1Y0hKdlkyVnpjeTVqYUdScGNpQTlJR1oxYm1OMGFXOXVJQ2hrYVhJcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WTJoa2FYSWdhWE1nYm05MElITjFjSEJ2Y25SbFpDY3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRXMWhjMnNnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlEQTdJSDA3WEc0aUxDSjJZWElnYm05M0lEMGdjbVZ4ZFdseVpTZ25jR1Z5Wm05eWJXRnVZMlV0Ym05M0p5bGNiaUFnTENCeWIyOTBJRDBnZEhsd1pXOW1JSGRwYm1SdmR5QTlQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5Qm5iRzlpWVd3Z09pQjNhVzVrYjNkY2JpQWdMQ0IyWlc1a2IzSnpJRDBnV3lkdGIzb25MQ0FuZDJWaWEybDBKMTFjYmlBZ0xDQnpkV1ptYVhnZ1BTQW5RVzVwYldGMGFXOXVSbkpoYldVblhHNGdJQ3dnY21GbUlEMGdjbTl2ZEZzbmNtVnhkV1Z6ZENjZ0t5QnpkV1ptYVhoZFhHNGdJQ3dnWTJGbUlEMGdjbTl2ZEZzblkyRnVZMlZzSnlBcklITjFabVpwZUYwZ2ZId2djbTl2ZEZzblkyRnVZMlZzVW1WeGRXVnpkQ2NnS3lCemRXWm1hWGhkWEc1Y2JtWnZjaWgyWVhJZ2FTQTlJREE3SUNGeVlXWWdKaVlnYVNBOElIWmxibVJ2Y25NdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ2NtRm1JRDBnY205dmRGdDJaVzVrYjNKelcybGRJQ3NnSjFKbGNYVmxjM1FuSUNzZ2MzVm1abWw0WFZ4dUlDQmpZV1lnUFNCeWIyOTBXM1psYm1SdmNuTmJhVjBnS3lBblEyRnVZMlZzSnlBcklITjFabVpwZUYxY2JpQWdJQ0FnSUh4OElISnZiM1JiZG1WdVpHOXljMXRwWFNBcklDZERZVzVqWld4U1pYRjFaWE4wSnlBcklITjFabVpwZUYxY2JuMWNibHh1THk4Z1UyOXRaU0IyWlhKemFXOXVjeUJ2WmlCR1JpQm9ZWFpsSUhKQlJpQmlkWFFnYm05MElHTkJSbHh1YVdZb0lYSmhaaUI4ZkNBaFkyRm1LU0I3WEc0Z0lIWmhjaUJzWVhOMElEMGdNRnh1SUNBZ0lDd2dhV1FnUFNBd1hHNGdJQ0FnTENCeGRXVjFaU0E5SUZ0ZFhHNGdJQ0FnTENCbWNtRnRaVVIxY21GMGFXOXVJRDBnTVRBd01DQXZJRFl3WEc1Y2JpQWdjbUZtSUQwZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzcElIdGNiaUFnSUNCcFppaHhkV1YxWlM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSFpoY2lCZmJtOTNJRDBnYm05M0tDbGNiaUFnSUNBZ0lDQWdMQ0J1WlhoMElEMGdUV0YwYUM1dFlYZ29NQ3dnWm5KaGJXVkVkWEpoZEdsdmJpQXRJQ2hmYm05M0lDMGdiR0Z6ZENrcFhHNGdJQ0FnSUNCc1lYTjBJRDBnYm1WNGRDQXJJRjl1YjNkY2JpQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCamNDQTlJSEYxWlhWbExuTnNhV05sS0RBcFhHNGdJQ0FnSUNBZ0lDOHZJRU5zWldGeUlIRjFaWFZsSUdobGNtVWdkRzhnY0hKbGRtVnVkRnh1SUNBZ0lDQWdJQ0F2THlCallXeHNZbUZqYTNNZ1puSnZiU0JoY0hCbGJtUnBibWNnYkdsemRHVnVaWEp6WEc0Z0lDQWdJQ0FnSUM4dklIUnZJSFJvWlNCamRYSnlaVzUwSUdaeVlXMWxKM01nY1hWbGRXVmNiaUFnSUNBZ0lDQWdjWFZsZFdVdWJHVnVaM1JvSUQwZ01GeHVJQ0FnSUNBZ0lDQm1iM0lvZG1GeUlHa2dQU0F3T3lCcElEd2dZM0F1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlnaFkzQmJhVjB1WTJGdVkyVnNiR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwY25sN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOd1cybGRMbU5oYkd4aVlXTnJLR3hoYzNRcFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdOaGRHTm9LR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncElIc2dkR2h5YjNjZ1pTQjlMQ0F3S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTd2dUV0YwYUM1eWIzVnVaQ2h1WlhoMEtTbGNiaUFnSUNCOVhHNGdJQ0FnY1hWbGRXVXVjSFZ6YUNoN1hHNGdJQ0FnSUNCb1lXNWtiR1U2SUNzcmFXUXNYRzRnSUNBZ0lDQmpZV3hzWW1GamF6b2dZMkZzYkdKaFkyc3NYRzRnSUNBZ0lDQmpZVzVqWld4c1pXUTZJR1poYkhObFhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdhV1JjYmlBZ2ZWeHVYRzRnSUdOaFppQTlJR1oxYm1OMGFXOXVLR2hoYm1Sc1pTa2dlMXh1SUNBZ0lHWnZjaWgyWVhJZ2FTQTlJREE3SUdrZ1BDQnhkV1YxWlM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lvY1hWbGRXVmJhVjB1YUdGdVpHeGxJRDA5UFNCb1lXNWtiR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1ZiYVYwdVkyRnVZMlZzYkdWa0lEMGdkSEoxWlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dadUtTQjdYRzRnSUM4dklGZHlZWEFnYVc0Z1lTQnVaWGNnWm5WdVkzUnBiMjRnZEc4Z2NISmxkbVZ1ZEZ4dUlDQXZMeUJnWTJGdVkyVnNZQ0J3YjNSbGJuUnBZV3hzZVNCaVpXbHVaeUJoYzNOcFoyNWxaRnh1SUNBdkx5QjBieUIwYUdVZ2JtRjBhWFpsSUhKQlJpQm1kVzVqZEdsdmJseHVJQ0J5WlhSMWNtNGdjbUZtTG1OaGJHd29jbTl2ZEN3Z1ptNHBYRzU5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeTVqWVc1alpXd2dQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdZMkZtTG1Gd2NHeDVLSEp2YjNRc0lHRnlaM1Z0Wlc1MGN5bGNibjFjYm0xdlpIVnNaUzVsZUhCdmNuUnpMbkJ2YkhsbWFXeHNJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSEp2YjNRdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJRDBnY21GbVhHNGdJSEp2YjNRdVkyRnVZMlZzUVc1cGJXRjBhVzl1Um5KaGJXVWdQU0JqWVdaY2JuMWNiaUlzSWk4cUtseHVLaUJRWVhKaGJHeGhlQzVxYzF4dUtpQkFZWFYwYUc5eUlFMWhkSFJvWlhjZ1YyRm5aWEptYVdWc1pDQXRJRUIzWVdkbGNtWnBaV3hrTENCU1pXN0RxU0JTYjNSb0lDMGdiV0ZwYkVCeVpXNWxjbTkwYUM1dmNtZGNiaW9nUUdSbGMyTnlhWEIwYVc5dUlFTnlaV0YwWlhNZ1lTQndZWEpoYkd4aGVDQmxabVpsWTNRZ1ltVjBkMlZsYmlCaGJpQmhjbkpoZVNCdlppQnNZWGxsY25Nc1hHNHFJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2NtbDJhVzVuSUhSb1pTQnRiM1JwYjI0Z1puSnZiU0IwYUdVZ1ozbHliM05qYjNCbElHOTFkSEIxZENCdlppQmhJSE50WVhKMFpHVjJhV05sTGx4dUtpQWdJQ0FnSUNBZ0lDQWdJQ0FnU1dZZ2JtOGdaM2x5YjNOamIzQmxJR2x6SUdGMllXbHNZV0pzWlN3Z2RHaGxJR04xY25OdmNpQndiM05wZEdsdmJpQnBjeUIxYzJWa0xseHVLaTljYmx4dVkyOXVjM1FnY25GQmJrWnlJRDBnY21WeGRXbHlaU2duY21GbUp5bGNibU52Ym5OMElHOWlhbVZqZEVGemMybG5iaUE5SUhKbGNYVnBjbVVvSjI5aWFtVmpkQzFoYzNOcFoyNG5LVnh1WEc1amIyNXpkQ0JvWld4d1pYSnpJRDBnZTF4dUlDQndjbTl3WlhKMGVVTmhZMmhsT2lCN2ZTeGNiaUFnZG1WdVpHOXljem9nVzI1MWJHd3NJRnNuTFhkbFltdHBkQzBuTENkM1pXSnJhWFFuWFN3Z1d5Y3RiVzk2TFNjc0owMXZlaWRkTENCYkp5MXZMU2NzSjA4blhTd2dXeWN0YlhNdEp5d25iWE1uWFYwc1hHNWNiaUFnWTJ4aGJYQW9kbUZzZFdVc0lHMXBiaXdnYldGNEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUcxcGJpQThJRzFoZUZ4dUlDQWdJQ0FnUHlBb2RtRnNkV1VnUENCdGFXNGdQeUJ0YVc0Z09pQjJZV3gxWlNBK0lHMWhlQ0EvSUcxaGVDQTZJSFpoYkhWbEtWeHVJQ0FnSUNBZ09pQW9kbUZzZFdVZ1BDQnRZWGdnUHlCdFlYZ2dPaUIyWVd4MVpTQStJRzFwYmlBL0lHMXBiaUE2SUhaaGJIVmxLVnh1SUNCOUxGeHVYRzRnSUdSaGRHRW9aV3hsYldWdWRDd2dibUZ0WlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJvWld4d1pYSnpMbVJsYzJWeWFXRnNhWHBsS0dWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtDZGtZWFJoTFNjcmJtRnRaU2twWEc0Z0lIMHNYRzVjYmlBZ1pHVnpaWEpwWVd4cGVtVW9kbUZzZFdVcElIdGNiaUFnSUNCcFppQW9kbUZzZFdVZ1BUMDlJQ2QwY25WbEp5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1ZjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbElEMDlQU0FuWm1Gc2MyVW5LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0haaGJIVmxJRDA5UFNBbmJuVnNiQ2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGFYTk9ZVTRvY0dGeWMyVkdiRzloZENoMllXeDFaU2twSUNZbUlHbHpSbWx1YVhSbEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCaGNuTmxSbXh2WVhRb2RtRnNkV1VwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMllXeDFaVnh1SUNBZ0lIMWNiaUFnZlN4Y2JseHVJQ0JqWVcxbGJFTmhjMlVvZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1V1Y21Wd2JHRmpaU2d2TFNzb0xpay9MMmNzSUNodFlYUmphQ3dnWTJoaGNtRmpkR1Z5S1NBOVBpQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1kyaGhjbUZqZEdWeUlEOGdZMmhoY21GamRHVnlMblJ2VlhCd1pYSkRZWE5sS0NrZ09pQW5KMXh1SUNBZ0lIMHBYRzRnSUgwc1hHNWNiaUFnWVdOalpXeGxjbUYwWlNobGJHVnRaVzUwS1NCN1hHNGdJQ0FnYUdWc2NHVnljeTVqYzNNb1pXeGxiV1Z1ZEN3Z0ozUnlZVzV6Wm05eWJTY3NJQ2QwY21GdWMyeGhkR1V6WkNnd0xEQXNNQ2tnY205MFlYUmxLREF1TURBd01XUmxaeWtuS1Z4dUlDQWdJR2hsYkhCbGNuTXVZM056S0dWc1pXMWxiblFzSUNkMGNtRnVjMlp2Y20wdGMzUjViR1VuTENBbmNISmxjMlZ5ZG1VdE0yUW5LVnh1SUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2RpWVdOclptRmpaUzEyYVhOcFltbHNhWFI1Snl3Z0oyaHBaR1JsYmljcFhHNGdJSDBzWEc1Y2JpQWdkSEpoYm5ObWIzSnRVM1Z3Y0c5eWRDaDJZV3gxWlNrZ2UxeHVJQ0FnSUd4bGRDQmxiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWtzWEc0Z0lDQWdJQ0FnSUhCeWIzQmxjblI1VTNWd2NHOXlkQ0E5SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0J3Y205d1pYSjBlVlpoYkhWbElEMGdiblZzYkN4Y2JpQWdJQ0FnSUNBZ1ptVmhkSFZ5WlZOMWNIQnZjblFnUFNCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnWTNOelVISnZjR1Z5ZEhrZ1BTQnVkV3hzTEZ4dUlDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdiblZzYkZ4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd0xDQnNJRDBnYUdWc2NHVnljeTUyWlc1a2IzSnpMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHaGxiSEJsY25NdWRtVnVaRzl5YzF0cFhTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0JqYzNOUWNtOXdaWEowZVNBOUlHaGxiSEJsY25NdWRtVnVaRzl5YzF0cFhWc3dYU0FySUNkMGNtRnVjMlp2Y20wblhHNGdJQ0FnSUNBZ0lHcHpVSEp2Y0dWeWRIa2dQU0JvWld4d1pYSnpMblpsYm1SdmNuTmJhVjFiTVYwZ0t5QW5WSEpoYm5ObWIzSnRKMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdZM056VUhKdmNHVnlkSGtnUFNBbmRISmhibk5tYjNKdEoxeHVJQ0FnSUNBZ0lDQnFjMUJ5YjNCbGNuUjVJRDBnSjNSeVlXNXpabTl5YlNkY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaGxiR1Z0Wlc1MExuTjBlV3hsVzJwelVISnZjR1Z5ZEhsZElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjR1Z5ZEhsVGRYQndiM0owSUQwZ2RISjFaVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J6ZDJsMFkyZ29kbUZzZFdVcElIdGNiaUFnSUNBZ0lHTmhjMlVnSnpKRUp6cGNiaUFnSUNBZ0lDQWdabVZoZEhWeVpWTjFjSEJ2Y25RZ1BTQndjbTl3WlhKMGVWTjFjSEJ2Y25SY2JpQWdJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQWdJR05oYzJVZ0p6TkVKenBjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnliM0JsY25SNVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJR3hsZENCaWIyUjVJRDBnWkc5amRXMWxiblF1WW05a2VTQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGliMlI1Snlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUlBkbVZ5Wm14dmR5QTlJR1J2WTNWdFpXNTBSV3hsYldWdWRDNXpkSGxzWlM1dmRtVnlabXh2ZHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhORGNtVmhkR1ZrUW05a2VTQTlJR1poYkhObFhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0lXUnZZM1Z0Wlc1MExtSnZaSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x6UTNKbFlYUmxaRUp2WkhrZ1BTQjBjblZsWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNaVzFsYm5RdWMzUjViR1V1YjNabGNtWnNiM2NnUFNBbmFHbGtaR1Z1SjF4dUlDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR0p2WkhrcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JpYjJSNUxuTjBlV3hsTG05MlpYSm1iRzkzSUQwZ0oyaHBaR1JsYmlkY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2WkhrdWMzUjViR1V1WW1GamEyZHliM1Z1WkNBOUlDY25YRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdZbTlrZVM1aGNIQmxibVJEYUdsc1pDaGxiR1Z0Wlc1MEtWeHVJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdWYmFuTlFjbTl3WlhKMGVWMGdQU0FuZEhKaGJuTnNZWFJsTTJRb01YQjRMREZ3ZUN3eGNIZ3BKMXh1SUNBZ0lDQWdJQ0FnSUhCeWIzQmxjblI1Vm1Gc2RXVWdQU0IzYVc1a2IzY3VaMlYwUTI5dGNIVjBaV1JUZEhsc1pTaGxiR1Z0Wlc1MEtTNW5aWFJRY205d1pYSjBlVlpoYkhWbEtHTnpjMUJ5YjNCbGNuUjVLVnh1SUNBZ0lDQWdJQ0FnSUdabFlYUjFjbVZUZFhCd2IzSjBJRDBnY0hKdmNHVnlkSGxXWVd4MVpTQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIQnliM0JsY25SNVZtRnNkV1V1YkdWdVozUm9JRDRnTUNBbUppQndjbTl3WlhKMGVWWmhiSFZsSUNFOVBTQW5ibTl1WlNkY2JpQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNaVzFsYm5RdWMzUjViR1V1YjNabGNtWnNiM2NnUFNCa2IyTjFiV1Z1ZEU5MlpYSm1iRzkzWEc0Z0lDQWdJQ0FnSUNBZ1ltOWtlUzV5WlcxdmRtVkRhR2xzWkNobGJHVnRaVzUwS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0NCcGMwTnlaV0YwWldSQ2IyUjVJQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZbTlrZVM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjNOMGVXeGxKeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZaSGt1Y0dGeVpXNTBUbTlrWlM1eVpXMXZkbVZEYUdsc1pDaGliMlI1S1Z4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdabVZoZEhWeVpWTjFjSEJ2Y25SY2JpQWdmU3hjYmx4dUlDQmpjM01vWld4bGJXVnVkQ3dnY0hKdmNHVnlkSGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdiR1YwSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxuQnliM0JsY25SNVEyRmphR1ZiY0hKdmNHVnlkSGxkWEc0Z0lDQWdhV1lnS0NGcWMxQnliM0JsY25SNUtTQjdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTUN3Z2JDQTlJR2hsYkhCbGNuTXVkbVZ1Wkc5eWN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHaGxiSEJsY25NdWRtVnVaRzl5YzF0cFhTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxtTmhiV1ZzUTJGelpTaG9aV3h3WlhKekxuWmxibVJ2Y25OYmFWMWJNVjBnS3lBbkxTY2dLeUJ3Y205d1pYSjBlU2xjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdjSEp2Y0dWeWRIbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwWmlBb1pXeGxiV1Z1ZEM1emRIbHNaVnRxYzFCeWIzQmxjblI1WFNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FHVnNjR1Z5Y3k1d2NtOXdaWEowZVVOaFkyaGxXM0J5YjNCbGNuUjVYU0E5SUdwelVISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJR1ZzWlcxbGJuUXVjM1I1YkdWYmFuTlFjbTl3WlhKMGVWMGdQU0IyWVd4MVpWeHVJQ0I5WEc1Y2JuMWNibHh1WTI5dWMzUWdUVUZIU1VOZlRsVk5Ra1ZTSUQwZ016QXNYRzRnSUNBZ0lDQkVSVVpCVlV4VVV5QTlJSHRjYmlBZ0lDQWdJQ0FnY21Wc1lYUnBkbVZKYm5CMWREb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lHTnNhWEJTWld4aGRHbDJaVWx1Y0hWME9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ2FXNXdkWFJGYkdWdFpXNTBPaUJ1ZFd4c0xGeHVJQ0FnSUNBZ0lDQm9iM1psY2s5dWJIazZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQmpZV3hwWW5KaGRHbHZibFJvY21WemFHOXNaRG9nTVRBd0xGeHVJQ0FnSUNBZ0lDQmpZV3hwWW5KaGRHbHZia1JsYkdGNU9pQTFNREFzWEc0Z0lDQWdJQ0FnSUhOMWNIQnZjblJFWld4aGVUb2dOVEF3TEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdWWU9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ1kyRnNhV0p5WVhSbFdUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2FXNTJaWEowV0RvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnYVc1MlpYSjBXVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdiR2x0YVhSWU9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ2JHbHRhWFJaT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHRnlXRG9nTVRBdU1DeGNiaUFnSUNBZ0lDQWdjMk5oYkdGeVdUb2dNVEF1TUN4Y2JpQWdJQ0FnSUNBZ1puSnBZM1JwYjI1WU9pQXdMakVzWEc0Z0lDQWdJQ0FnSUdaeWFXTjBhVzl1V1RvZ01DNHhMRnh1SUNBZ0lDQWdJQ0J2Y21sbmFXNVlPaUF3TGpVc1hHNGdJQ0FnSUNBZ0lHOXlhV2RwYmxrNklEQXVOU3hjYmlBZ0lDQWdJQ0FnY0c5cGJuUmxja1YyWlc1MGN6b2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lIQnlaV05wYzJsdmJqb2dNU3hjYmlBZ0lDQWdJQ0FnYjI1U1pXRmtlVG9nYm5Wc2JDeGNiaUFnSUNBZ0lDQWdjMlZzWldOMGIzSTZJRzUxYkd4Y2JpQWdJQ0FnSUgxY2JseHVZMnhoYzNNZ1VHRnlZV3hzWVhnZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lobGJHVnRaVzUwTENCdmNIUnBiMjV6S1NCN1hHNWNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUWdQU0JsYkdWdFpXNTBYRzVjYmlBZ0lDQmpiMjV6ZENCa1lYUmhJRDBnZTF4dUlDQWdJQ0FnWTJGc2FXSnlZWFJsV0RvZ2FHVnNjR1Z5Y3k1a1lYUmhLSFJvYVhNdVpXeGxiV1Z1ZEN3Z0oyTmhiR2xpY21GMFpTMTRKeWtzWEc0Z0lDQWdJQ0JqWVd4cFluSmhkR1ZaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblkyRnNhV0p5WVhSbExYa25LU3hjYmlBZ0lDQWdJR2x1ZG1WeWRGZzZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RwYm5abGNuUXRlQ2NwTEZ4dUlDQWdJQ0FnYVc1MlpYSjBXVG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjJsdWRtVnlkQzE1Snlrc1hHNGdJQ0FnSUNCc2FXMXBkRmc2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkc2FXMXBkQzE0Snlrc1hHNGdJQ0FnSUNCc2FXMXBkRms2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkc2FXMXBkQzE1Snlrc1hHNGdJQ0FnSUNCelkyRnNZWEpZT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmMyTmhiR0Z5TFhnbktTeGNiaUFnSUNBZ0lITmpZV3hoY2xrNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHpZMkZzWVhJdGVTY3BMRnh1SUNBZ0lDQWdabkpwWTNScGIyNVlPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWm5KcFkzUnBiMjR0ZUNjcExGeHVJQ0FnSUNBZ1puSnBZM1JwYjI1Wk9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5abkpwWTNScGIyNHRlU2NwTEZ4dUlDQWdJQ0FnYjNKcFoybHVXRG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjI5eWFXZHBiaTE0Snlrc1hHNGdJQ0FnSUNCdmNtbG5hVzVaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmIzSnBaMmx1TFhrbktTeGNiaUFnSUNBZ0lIQnZhVzUwWlhKRmRtVnVkSE02SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkd2IybHVkR1Z5TFdWMlpXNTBjeWNwTEZ4dUlDQWdJQ0FnY0hKbFkybHphVzl1T2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmNISmxZMmx6YVc5dUp5a3NYRzRnSUNBZ0lDQnlaV3hoZEdsMlpVbHVjSFYwT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmNtVnNZWFJwZG1VdGFXNXdkWFFuS1N4Y2JpQWdJQ0FnSUdOc2FYQlNaV3hoZEdsMlpVbHVjSFYwT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblkyeHBjQzF5Wld4aGRHbDJaUzFwYm5CMWRDY3BMRnh1SUNBZ0lDQWdhRzkyWlhKUGJteDVPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYUc5MlpYSXRiMjVzZVNjcExGeHVJQ0FnSUNBZ2FXNXdkWFJGYkdWdFpXNTBPaUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHBibkIxZEMxbGJHVnRaVzUwSnlrcExGeHVJQ0FnSUNBZ2MyVnNaV04wYjNJNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHpaV3hsWTNSdmNpY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdSaGRHRXBJSHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhXMnRsZVYwZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdaR1ZzWlhSbElHUmhkR0ZiYTJWNVhWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5aWFtVmpkRUZ6YzJsbmJpaDBhR2x6TENCRVJVWkJWVXhVVXl3Z1pHRjBZU3dnYjNCMGFXOXVjeWxjYmx4dUlDQWdJR2xtS0NGMGFHbHpMbWx1Y0hWMFJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFVnNaVzFsYm5RZ1BTQjBhR2x6TG1Wc1pXMWxiblJjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVqWVd4cFluSmhkR2x2Ymtac1lXY2dQU0IwY25WbFhHNGdJQ0FnZEdocGN5NWxibUZpYkdWa0lEMGdabUZzYzJWY2JpQWdJQ0IwYUdsekxtUmxjSFJvYzFnZ1BTQmJYVnh1SUNBZ0lIUm9hWE11WkdWd2RHaHpXU0E5SUZ0ZFhHNGdJQ0FnZEdocGN5NXlZV1lnUFNCdWRXeHNYRzVjYmlBZ0lDQjBhR2x6TG1KdmRXNWtjeUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dQU0F3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVaSUQwZ01GeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGZHBaSFJvSUQwZ01GeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRFaGxhV2RvZENBOUlEQmNibHh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRU5sYm5SbGNsZ2dQU0F3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUTJWdWRHVnlXU0E5SURCY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGSmhibWRsV0NBOUlEQmNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUlNZVzVuWlZrZ1BTQXdYRzVjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVdDQTlJREJjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ01GeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdNRnh1WEc0Z0lDQWdkR2hwY3k1dGIzUnBiMjVZSUQwZ01GeHVJQ0FnSUhSb2FYTXViVzkwYVc5dVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWUlEMGdNRnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxaSUQwZ01GeHVYRzRnSUNBZ2RHaHBjeTV2YmsxdmRYTmxUVzkyWlNBOUlIUm9hWE11YjI1TmIzVnpaVTF2ZG1VdVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaUE5SUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrUmxkbWxqWlUxdmRHbHZiaUE5SUhSb2FYTXViMjVFWlhacFkyVk5iM1JwYjI0dVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVQY21sbGJuUmhkR2x2YmxScGJXVnlJRDBnZEdocGN5NXZiazl5YVdWdWRHRjBhVzl1VkdsdFpYSXVZbWx1WkNoMGFHbHpLVnh1SUNBZ0lIUm9hWE11YjI1TmIzUnBiMjVVYVcxbGNpQTlJSFJvYVhNdWIyNU5iM1JwYjI1VWFXMWxjaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrTmhiR2xpY21GMGFXOXVWR2x0WlhJZ1BTQjBhR2x6TG05dVEyRnNhV0p5WVhScGIyNVVhVzFsY2k1aWFXNWtLSFJvYVhNcFhHNGdJQ0FnZEdocGN5NXZia0Z1YVcxaGRHbHZia1p5WVcxbElEMGdkR2hwY3k1dmJrRnVhVzFoZEdsdmJrWnlZVzFsTG1KcGJtUW9kR2hwY3lsY2JpQWdJQ0IwYUdsekxtOXVWMmx1Wkc5M1VtVnphWHBsSUQwZ2RHaHBjeTV2YmxkcGJtUnZkMUpsYzJsNlpTNWlhVzVrS0hSb2FYTXBYRzVjYmlBZ0lDQjBhR2x6TG5kcGJtUnZkMWRwWkhSb0lEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWQybHVaRzkzU0dWcFoyaDBJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVkMmx1Wkc5M1EyVnVkR1Z5V0NBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsa2dQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5ZSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNVbUZrYVhWeldTQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0IwYUdsekxtUmxjMnQwYjNBZ1BTQWhibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzV0WVhSamFDZ3ZLR2xRYUc5dVpYeHBVRzlrZkdsUVlXUjhRVzVrY205cFpIeENiR0ZqYTBKbGNuSjVmRUpDTVRCOGJXOWlhWHgwWVdKc1pYUjhiM0JsY21FZ2JXbHVhWHh1WlhoMWN5QTNLUzlwS1Z4dUlDQWdJSFJvYVhNdWJXOTBhVzl1VTNWd2NHOXlkQ0E5SUNFaGQybHVaRzkzTGtSbGRtbGpaVTF2ZEdsdmJrVjJaVzUwSUNZbUlDRjBhR2x6TG1SbGMydDBiM0JjYmlBZ0lDQjBhR2x6TG05eWFXVnVkR0YwYVc5dVUzVndjRzl5ZENBOUlDRWhkMmx1Wkc5M0xrUmxkbWxqWlU5eWFXVnVkR0YwYVc5dVJYWmxiblFnSmlZZ0lYUm9hWE11WkdWemEzUnZjRnh1SUNBZ0lIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRHRjBkWE1nUFNBd1hHNGdJQ0FnZEdocGN5NXRiM1JwYjI1VGRHRjBkWE1nUFNBd1hHNWNiaUFnSUNCMGFHbHpMbWx1YVhScFlXeHBjMlVvS1Z4dUlDQjlYRzVjYmlBZ2FXNXBkR2xoYkdselpTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTUwY21GdWMyWnZjbTB5UkZOMWNIQnZjblFnUFNCb1pXeHdaWEp6TG5SeVlXNXpabTl5YlZOMWNIQnZjblFvSnpKRUp5bGNiaUFnSUNBZ0lIUm9hWE11ZEhKaGJuTm1iM0p0TTBSVGRYQndiM0owSUQwZ2FHVnNjR1Z5Y3k1MGNtRnVjMlp2Y20xVGRYQndiM0owS0NjelJDY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRMjl1Wm1sbmRYSmxJRU52Ym5SbGVIUWdVM1I1YkdWelhHNGdJQ0FnYVdZZ0tIUm9hWE11ZEhKaGJuTm1iM0p0TTBSVGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCb1pXeHdaWEp6TG1GalkyVnNaWEpoZEdVb2RHaHBjeTVsYkdWdFpXNTBLVnh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0J6ZEhsc1pTQTlJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtIUm9hWE11Wld4bGJXVnVkQ2xjYmlBZ0lDQnBaaUFvYzNSNWJHVXVaMlYwVUhKdmNHVnlkSGxXWVd4MVpTZ25jRzl6YVhScGIyNG5LU0E5UFQwZ0ozTjBZWFJwWXljcElIdGNiaUFnSUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2R5Wld4aGRHbDJaU2RjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJRYjJsdWRHVnlJR1YyWlc1MGMxeHVJQ0FnSUdsbUtDRjBhR2x6TG5CdmFXNTBaWEpGZG1WdWRITXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1VblhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1UyVjBkWEJjYmlBZ0lDQjBhR2x6TG5Wd1pHRjBaVXhoZVdWeWN5Z3BYRzRnSUNBZ2RHaHBjeTUxY0dSaGRHVkVhVzFsYm5OcGIyNXpLQ2xjYmlBZ0lDQjBhR2x6TG1WdVlXSnNaU2dwWEc0Z0lDQWdkR2hwY3k1eGRXVjFaVU5oYkdsaWNtRjBhVzl1S0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVFWld4aGVTbGNiaUFnZlZ4dVhHNGdJR1J2VW1WaFpIbERZV3hzWW1GamF5Z3BJSHRjYmlBZ0lDQnBaaWgwYUdsekxtOXVVbVZoWkhrcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1U1pXRmtlU2dwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnZFhCa1lYUmxUR0Y1WlhKektDa2dlMXh1SUNBZ0lHbG1LSFJvYVhNdWMyVnNaV04wYjNJcElIdGNiaUFnSUNBZ0lIUm9hWE11YkdGNVpYSnpJRDBnZEdocGN5NWxiR1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b2RHaHBjeTV6Wld4bFkzUnZjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNuTWdQU0IwYUdsekxtVnNaVzFsYm5RdVkyaHBiR1J5Wlc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlnaGRHaHBjeTVzWVhsbGNuTXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvSjFCaGNtRnNiR0Y0U2xNNklGbHZkWElnYzJObGJtVWdaRzlsY3lCdWIzUWdhR0YyWlNCaGJua2diR0Y1WlhKekxpY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTVrWlhCMGFITllJRDBnVzExY2JpQWdJQ0IwYUdsekxtUmxjSFJvYzFrZ1BTQmJYVnh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhVzVrWlhnZ1BTQXdPeUJwYm1SbGVDQThJSFJvYVhNdWJHRjVaWEp6TG14bGJtZDBhRHNnYVc1a1pYZ3JLeWtnZTF4dUlDQWdJQ0FnYkdWMElHeGhlV1Z5SUQwZ2RHaHBjeTVzWVhsbGNuTmJhVzVrWlhoZFhHNWNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuUnlZVzV6Wm05eWJUTkVVM1Z3Y0c5eWRDa2dlMXh1SUNBZ0lDQWdJQ0JvWld4d1pYSnpMbUZqWTJWc1pYSmhkR1VvYkdGNVpYSXBYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR3hoZVdWeUxuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ2FXNWtaWGdnUHlBbllXSnpiMngxZEdVbklEb2dKM0psYkdGMGFYWmxKMXh1SUNBZ0lDQWdiR0Y1WlhJdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWRjYmlBZ0lDQWdJR3hoZVdWeUxuTjBlV3hsTG14bFpuUWdQU0F3WEc0Z0lDQWdJQ0JzWVhsbGNpNXpkSGxzWlM1MGIzQWdQU0F3WEc1Y2JpQWdJQ0FnSUd4bGRDQmtaWEIwYUNBOUlHaGxiSEJsY25NdVpHRjBZU2hzWVhsbGNpd2dKMlJsY0hSb0p5a2dmSHdnTUZ4dUlDQWdJQ0FnZEdocGN5NWtaWEIwYUhOWUxuQjFjMmdvYUdWc2NHVnljeTVrWVhSaEtHeGhlV1Z5TENBblpHVndkR2d0ZUNjcElIeDhJR1JsY0hSb0tWeHVJQ0FnSUNBZ2RHaHBjeTVrWlhCMGFITlpMbkIxYzJnb2FHVnNjR1Z5Y3k1a1lYUmhLR3hoZVdWeUxDQW5aR1Z3ZEdndGVTY3BJSHg4SUdSbGNIUm9LVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpVUnBiV1Z1YzJsdmJuTW9LU0I3WEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RYYVdSMGFDQTlJSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9YRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZElaV2xuYUhRZ1BTQjNhVzVrYjNjdWFXNXVaWEpJWldsbmFIUmNiaUFnSUNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xnZ1BTQjBhR2x6TG5kcGJtUnZkMWRwWkhSb0lDb2dkR2hwY3k1dmNtbG5hVzVZWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2REWlc1MFpYSlpJRDBnZEdocGN5NTNhVzVrYjNkSVpXbG5hSFFnS2lCMGFHbHpMbTl5YVdkcGJsbGNiaUFnSUNCMGFHbHpMbmRwYm1SdmQxSmhaR2wxYzFnZ1BTQk5ZWFJvTG0xaGVDaDBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3NJSFJvYVhNdWQybHVaRzkzVjJsa2RHZ2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdwWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTlpJRDBnVFdGMGFDNXRZWGdvZEdocGN5NTNhVzVrYjNkRFpXNTBaWEpaTENCMGFHbHpMbmRwYm1SdmQwaGxhV2RvZENBdElIUm9hWE11ZDJsdVpHOTNRMlZ1ZEdWeVdTbGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpVSnZkVzVrY3lncElIdGNiaUFnSUNCMGFHbHpMbUp2ZFc1a2N5QTlJSFJvYVhNdWFXNXdkWFJGYkdWdFpXNTBMbWRsZEVKdmRXNWthVzVuUTJ4cFpXNTBVbVZqZENncFhHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUlEMGdkR2hwY3k1aWIzVnVaSE11YkdWbWRGeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGQnZjMmwwYVc5dVdTQTlJSFJvYVhNdVltOTFibVJ6TG5SdmNGeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGZHBaSFJvSUQwZ2RHaHBjeTVpYjNWdVpITXVkMmxrZEdoY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SSVpXbG5hSFFnUFNCMGFHbHpMbUp2ZFc1a2N5NW9aV2xuYUhSY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZSUQwZ2RHaHBjeTVsYkdWdFpXNTBWMmxrZEdnZ0tpQjBhR2x6TG05eWFXZHBibGhjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSlpJRDBnZEdocGN5NWxiR1Z0Wlc1MFNHVnBaMmgwSUNvZ2RHaHBjeTV2Y21sbmFXNVpYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBVbUZ1WjJWWUlEMGdUV0YwYUM1dFlYZ29kR2hwY3k1bGJHVnRaVzUwUTJWdWRHVnlXQ3dnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dnTFNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWUtWeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGSmhibWRsV1NBOUlFMWhkR2d1YldGNEtIUm9hWE11Wld4bGJXVnVkRU5sYm5SbGNsa3NJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0F0SUhSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xrcFhHNGdJSDFjYmx4dUlDQnhkV1YxWlVOaGJHbGljbUYwYVc5dUtHUmxiR0Y1S1NCN1hHNGdJQ0FnWTJ4bFlYSlVhVzFsYjNWMEtIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFXMWxjaWxjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCelpYUlVhVzFsYjNWMEtIUm9hWE11YjI1RFlXeHBZbkpoZEdsdmJsUnBiV1Z5TENCa1pXeGhlU2xjYmlBZ2ZWeHVYRzRnSUdWdVlXSnNaU2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVsYm1GaWJHVmtLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWxibUZpYkdWa0lEMGdkSEoxWlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ2Y25SeVlXbDBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nka1pYWnBZMlZ2Y21sbGJuUmhkR2x2Ymljc0lIUm9hWE11YjI1RVpYWnBZMlZQY21sbGJuUmhkR2x2YmlsY2JpQWdJQ0FnSUhSb2FYTXVaR1YwWldOMGFXOXVWR2x0WlhJZ1BTQnpaWFJVYVcxbGIzVjBLSFJvYVhNdWIyNVBjbWxsYm5SaGRHbHZibFJwYldWeUxDQjBhR2x6TG5OMWNIQnZjblJFWld4aGVTbGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIUm9hWE11Ylc5MGFXOXVVM1Z3Y0c5eWRDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2IzSjBjbUZwZENBOUlHWmhiSE5sWEc0Z0lDQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25aR1YyYVdObGJXOTBhVzl1Snl3Z2RHaHBjeTV2YmtSbGRtbGpaVTF2ZEdsdmJpbGNiaUFnSUNBZ0lIUm9hWE11WkdWMFpXTjBhVzl1VkdsdFpYSWdQU0J6WlhSVWFXMWxiM1YwS0hSb2FYTXViMjVOYjNScGIyNVVhVzFsY2l3Z2RHaHBjeTV6ZFhCd2IzSjBSR1ZzWVhrcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVlJRDBnTUZ4dUlDQWdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZibGtnUFNBd1hHNGdJQ0FnSUNCMGFHbHpMbkJ2Y25SeVlXbDBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkdGIzVnpaVzF2ZG1VbkxDQjBhR2x6TG05dVRXOTFjMlZOYjNabEtWeHVJQ0FnSUNBZ2RHaHBjeTVrYjFKbFlXUjVRMkZzYkdKaFkyc29LVnh1SUNBZ0lIMWNibHh1SUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkeVpYTnBlbVVuTENCMGFHbHpMbTl1VjJsdVpHOTNVbVZ6YVhwbEtWeHVJQ0FnSUhSb2FYTXVjbUZtSUQwZ2NuRkJia1p5S0hSb2FYTXViMjVCYm1sdFlYUnBiMjVHY21GdFpTbGNiaUFnZlZ4dVhHNGdJR1JwYzJGaWJHVW9LU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbVZ1WVdKc1pXUXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtVnVZV0pzWldRZ1BTQm1ZV3h6WlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCM2FXNWtiM2N1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnblpHVjJhV05sYjNKcFpXNTBZWFJwYjI0bkxDQjBhR2x6TG05dVJHVjJhV05sVDNKcFpXNTBZWFJwYjI0cFhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpMbTF2ZEdsdmJsTjFjSEJ2Y25RcElIdGNiaUFnSUNBZ0lIZHBibVJ2ZHk1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtDZGtaWFpwWTJWdGIzUnBiMjRuTENCMGFHbHpMbTl1UkdWMmFXTmxUVzkwYVc5dUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVnRiM1psSnl3Z2RHaHBjeTV2YmsxdmRYTmxUVzkyWlNsY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduY21WemFYcGxKeXdnZEdocGN5NXZibGRwYm1SdmQxSmxjMmw2WlNsY2JpQWdJQ0J5Y1VGdVJuSXVZMkZ1WTJWc0tIUm9hWE11Y21GbUtWeHVJQ0I5WEc1Y2JpQWdZMkZzYVdKeVlYUmxLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBaVmdnUFNCNElEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbU5oYkdsaWNtRjBaVmdnT2lCNFhHNGdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHVlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NWpZV3hwWW5KaGRHVlpJRG9nZVZ4dUlDQjlYRzVjYmlBZ2FXNTJaWEowS0hnc0lIa3BJSHRjYmlBZ0lDQjBhR2x6TG1sdWRtVnlkRmdnUFNCNElEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbWx1ZG1WeWRGZ2dPaUI0WEc0Z0lDQWdkR2hwY3k1cGJuWmxjblJaSUQwZ2VTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVwYm5abGNuUlpJRG9nZVZ4dUlDQjlYRzVjYmlBZ1puSnBZM1JwYjI0b2VDd2dlU2tnZTF4dUlDQWdJSFJvYVhNdVpuSnBZM1JwYjI1WUlEMGdlQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1bWNtbGpkR2x2YmxnZ09pQjRYRzRnSUNBZ2RHaHBjeTVtY21samRHbHZibGtnUFNCNUlEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbVp5YVdOMGFXOXVXU0E2SUhsY2JpQWdmVnh1WEc0Z0lITmpZV3hoY2loNExDQjVLU0I3WEc0Z0lDQWdkR2hwY3k1elkyRnNZWEpZSUQwZ2VDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTV6WTJGc1lYSllJRG9nZUZ4dUlDQWdJSFJvYVhNdWMyTmhiR0Z5V1NBOUlIa2dQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUm9hWE11YzJOaGJHRnlXU0E2SUhsY2JpQWdmVnh1WEc0Z0lHeHBiV2wwS0hnc0lIa3BJSHRjYmlBZ0lDQjBhR2x6TG14cGJXbDBXQ0E5SUhnZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXViR2x0YVhSWUlEb2dlRnh1SUNBZ0lIUm9hWE11YkdsdGFYUlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXNhVzFwZEZrZ09pQjVYRzRnSUgxY2JseHVJQ0J2Y21sbmFXNG9lQ3dnZVNrZ2UxeHVJQ0FnSUhSb2FYTXViM0pwWjJsdVdDQTlJSGdnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdWIzSnBaMmx1V0NBNklIaGNiaUFnSUNCMGFHbHpMbTl5YVdkcGJsa2dQU0I1SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtOXlhV2RwYmxrZ09pQjVYRzRnSUgxY2JseHVJQ0J6WlhSSmJuQjFkRVZzWlcxbGJuUW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lIUm9hWE11YVc1d2RYUkZiR1Z0Wlc1MElEMGdaV3hsYldWdWRGeHVJQ0FnSUhSb2FYTXVkWEJrWVhSbFJHbHRaVzV6YVc5dWN5Z3BYRzRnSUgxY2JseHVJQ0J6WlhSUWIzTnBkR2x2YmlobGJHVnRaVzUwTENCNExDQjVLU0I3WEc0Z0lDQWdlQ0E5SUhndWRHOUdhWGhsWkNoMGFHbHpMbkJ5WldOcGMybHZiaWtnS3lBbmNIZ25YRzRnSUNBZ2VTQTlJSGt1ZEc5R2FYaGxaQ2gwYUdsekxuQnlaV05wYzJsdmJpa2dLeUFuY0hnblhHNGdJQ0FnYVdZZ0tIUm9hWE11ZEhKaGJuTm1iM0p0TTBSVGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCb1pXeHdaWEp6TG1OemN5aGxiR1Z0Wlc1MExDQW5kSEpoYm5ObWIzSnRKeXdnSjNSeVlXNXpiR0YwWlROa0tDY2dLeUI0SUNzZ0p5d25JQ3NnZVNBcklDY3NNQ2tuS1Z4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUXBJSHRjYmlBZ0lDQWdJR2hsYkhCbGNuTXVZM056S0dWc1pXMWxiblFzSUNkMGNtRnVjMlp2Y20wbkxDQW5kSEpoYm5Oc1lYUmxLQ2NnS3lCNElDc2dKeXduSUNzZ2VTQXJJQ2NwSnlsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1c1pXWjBJRDBnZUZ4dUlDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNTBiM0FnUFNCNVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVBjbWxsYm5SaGRHbHZibFJwYldWeUtDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtOXlhV1Z1ZEdGMGFXOXVVM1Z3Y0c5eWRDQW1KaUIwYUdsekxtOXlhV1Z1ZEdGMGFXOXVVM1JoZEhWeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dmNtbGxiblJoZEdsdmJsTjFjSEJ2Y25RZ1BTQm1ZV3h6WlZ4dUlDQWdJQ0FnZEdocGN5NWxibUZpYkdVb0tWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnZVbVZoWkhsRFlXeHNZbUZqYXlncFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNU5iM1JwYjI1VWFXMWxjaWdwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV0YjNScGIyNVRkWEJ3YjNKMElDWW1JSFJvYVhNdWJXOTBhVzl1VTNSaGRIVnpJRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1ScGMyRmliR1VvS1Z4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1VGRYQndiM0owSUQwZ1ptRnNjMlZjYmlBZ0lDQWdJSFJvYVhNdVpXNWhZbXhsS0NsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1a2IxSmxZV1I1UTJGc2JHSmhZMnNvS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUc5dVEyRnNhV0p5WVhScGIyNVVhVzFsY2lncElIdGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1Um14aFp5QTlJSFJ5ZFdWY2JpQWdmVnh1WEc0Z0lHOXVWMmx1Wkc5M1VtVnphWHBsS0NrZ2UxeHVJQ0FnSUhSb2FYTXVkWEJrWVhSbFJHbHRaVzV6YVc5dWN5Z3BYRzRnSUgxY2JseHVJQ0J2YmtGdWFXMWhkR2x2YmtaeVlXMWxLQ2tnZTF4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUW05MWJtUnpLQ2xjYmlBZ0lDQnNaWFFnWTJGc2FXSnlZWFJsWkVsdWNIVjBXQ0E5SUhSb2FYTXVhVzV3ZFhSWUlDMGdkR2hwY3k1allXeHBZbkpoZEdsdmJsZ3NYRzRnSUNBZ0lDQWdJR05oYkdsaWNtRjBaV1JKYm5CMWRGa2dQU0IwYUdsekxtbHVjSFYwV1NBdElIUm9hWE11WTJGc2FXSnlZWFJwYjI1WlhHNGdJQ0FnYVdZZ0tDaE5ZWFJvTG1GaWN5aGpZV3hwWW5KaGRHVmtTVzV3ZFhSWUtTQStJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVVhSEpsYzJodmJHUXBJSHg4SUNoTllYUm9MbUZpY3loallXeHBZbkpoZEdWa1NXNXdkWFJaS1NBK0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFISmxjMmh2YkdRcEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5GMVpYVmxRMkZzYVdKeVlYUnBiMjRvTUNsY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzl5ZEhKaGFYUXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXOTBhVzl1V0NBOUlIUm9hWE11WTJGc2FXSnlZWFJsV0NBL0lHTmhiR2xpY21GMFpXUkpibkIxZEZrZ09pQjBhR2x6TG1sdWNIVjBXVnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2RHaHBjeTVqWVd4cFluSmhkR1ZaSUQ4Z1kyRnNhV0p5WVhSbFpFbHVjSFYwV0NBNklIUm9hWE11YVc1d2RYUllYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQTlJSFJvYVhNdVkyRnNhV0p5WVhSbFdDQS9JR05oYkdsaWNtRjBaV1JKYm5CMWRGZ2dPaUIwYUdsekxtbHVjSFYwV0Z4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1WklEMGdkR2hwY3k1allXeHBZbkpoZEdWWklEOGdZMkZzYVdKeVlYUmxaRWx1Y0hWMFdTQTZJSFJvYVhNdWFXNXdkWFJaWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0FxUFNCMGFHbHpMbVZzWlcxbGJuUlhhV1IwYUNBcUlDaDBhR2x6TG5OallXeGhjbGdnTHlBeE1EQXBYRzRnSUNBZ2RHaHBjeTV0YjNScGIyNVpJQ285SUhSb2FYTXVaV3hsYldWdWRFaGxhV2RvZENBcUlDaDBhR2x6TG5OallXeGhjbGtnTHlBeE1EQXBYRzRnSUNBZ2FXWWdLQ0ZwYzA1aFRpaHdZWEp6WlVac2IyRjBLSFJvYVhNdWJHbHRhWFJZS1NrcElIdGNiaUFnSUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0E5SUdobGJIQmxjbk11WTJ4aGJYQW9kR2hwY3k1dGIzUnBiMjVZTENBdGRHaHBjeTVzYVcxcGRGZ3NJSFJvYVhNdWJHbHRhWFJZS1Z4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvSVdselRtRk9LSEJoY25ObFJteHZZWFFvZEdocGN5NXNhVzFwZEZrcEtTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2FHVnNjR1Z5Y3k1amJHRnRjQ2gwYUdsekxtMXZkR2x2Ymxrc0lDMTBhR2x6TG14cGJXbDBXU3dnZEdocGN5NXNhVzFwZEZrcFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWUlDczlJQ2gwYUdsekxtMXZkR2x2YmxnZ0xTQjBhR2x6TG5abGJHOWphWFI1V0NrZ0tpQjBhR2x6TG1aeWFXTjBhVzl1V0Z4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWklDczlJQ2gwYUdsekxtMXZkR2x2YmxrZ0xTQjBhR2x6TG5abGJHOWphWFI1V1NrZ0tpQjBhR2x6TG1aeWFXTjBhVzl1V1Z4dUlDQWdJR1p2Y2lBb2JHVjBJR2x1WkdWNElEMGdNRHNnYVc1a1pYZ2dQQ0IwYUdsekxteGhlV1Z5Y3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwSUh0Y2JpQWdJQ0FnSUd4bGRDQnNZWGxsY2lBOUlIUm9hWE11YkdGNVpYSnpXMmx1WkdWNFhTeGNiaUFnSUNBZ0lDQWdJQ0JrWlhCMGFGZ2dQU0IwYUdsekxtUmxjSFJvYzFoYmFXNWtaWGhkTEZ4dUlDQWdJQ0FnSUNBZ0lHUmxjSFJvV1NBOUlIUm9hWE11WkdWd2RHaHpXVnRwYm1SbGVGMHNYRzRnSUNBZ0lDQWdJQ0FnZUU5bVpuTmxkQ0E5SUhSb2FYTXVkbVZzYjJOcGRIbFlJQ29nS0dSbGNIUm9XQ0FxSUNoMGFHbHpMbWx1ZG1WeWRGZ2dQeUF0TVNBNklERXBLU3hjYmlBZ0lDQWdJQ0FnSUNCNVQyWm1jMlYwSUQwZ2RHaHBjeTUyWld4dlkybDBlVmtnS2lBb1pHVndkR2haSUNvZ0tIUm9hWE11YVc1MlpYSjBXU0EvSUMweElEb2dNU2twWEc0Z0lDQWdJQ0IwYUdsekxuTmxkRkJ2YzJsMGFXOXVLR3hoZVdWeUxDQjRUMlptYzJWMExDQjVUMlptYzJWMEtWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuSmhaaUE5SUhKeFFXNUdjaWgwYUdsekxtOXVRVzVwYldGMGFXOXVSbkpoYldVcFhHNGdJSDFjYmx4dUlDQnliM1JoZEdVb1ltVjBZU3dnWjJGdGJXRXBlMXh1SUNBZ0lDOHZJRVY0ZEhKaFkzUWdVbTkwWVhScGIyNWNiaUFnSUNCc1pYUWdlQ0E5SUNoaVpYUmhJSHg4SURBcElDOGdUVUZIU1VOZlRsVk5Ra1ZTTENBdkx5QWdMVGt3SURvNklEa3dYRzRnSUNBZ0lDQWdJSGtnUFNBb1oyRnRiV0VnZkh3Z01Da2dMeUJOUVVkSlExOU9WVTFDUlZJZ0x5OGdMVEU0TUNBNk9pQXhPREJjYmx4dUlDQWdJQzh2SUVSbGRHVmpkQ0JQY21sbGJuUmhkR2x2YmlCRGFHRnVaMlZjYmlBZ0lDQnNaWFFnY0c5eWRISmhhWFFnUFNCMGFHbHpMbmRwYm1SdmQwaGxhV2RvZENBK0lIUm9hWE11ZDJsdVpHOTNWMmxrZEdoY2JpQWdJQ0JwWmlBb2RHaHBjeTV3YjNKMGNtRnBkQ0FoUFQwZ2NHOXlkSEpoYVhRcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5eWRISmhhWFFnUFNCd2IzSjBjbUZwZEZ4dUlDQWdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZia1pzWVdjZ1BTQjBjblZsWEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVHYkdGbktTQjdYRzRnSUNBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVJteGhaeUE5SUdaaGJITmxYRzRnSUNBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVdDQTlJSGhjYmlBZ0lDQWdJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVpJRDBnZVZ4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ2VGeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdlVnh1SUNCOVhHNWNiaUFnYjI1RVpYWnBZMlZQY21sbGJuUmhkR2x2YmlobGRtVnVkQ2tnZTF4dUlDQWdJR3hsZENCaVpYUmhJRDBnWlhabGJuUXVZbVYwWVZ4dUlDQWdJR3hsZENCbllXMXRZU0E5SUdWMlpXNTBMbWRoYlcxaFhHNGdJQ0FnYVdZZ0tHSmxkR0VnSVQwOUlHNTFiR3dnSmlZZ1oyRnRiV0VnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViM0pwWlc1MFlYUnBiMjVUZEdGMGRYTWdQU0F4WEc0Z0lDQWdJQ0IwYUdsekxuSnZkR0YwWlNoaVpYUmhMQ0JuWVcxdFlTbGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZia1JsZG1salpVMXZkR2x2YmlobGRtVnVkQ2tnZTF4dUlDQWdJR3hsZENCaVpYUmhJRDBnWlhabGJuUXVjbTkwWVhScGIyNVNZWFJsTG1KbGRHRmNiaUFnSUNCc1pYUWdaMkZ0YldFZ1BTQmxkbVZ1ZEM1eWIzUmhkR2x2YmxKaGRHVXVaMkZ0YldGY2JpQWdJQ0JwWmlBb1ltVjBZU0FoUFQwZ2JuVnNiQ0FtSmlCbllXMXRZU0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1VGRHRjBkWE1nUFNBeFhHNGdJQ0FnSUNCMGFHbHpMbkp2ZEdGMFpTaGlaWFJoTENCbllXMXRZU2xjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J2YmsxdmRYTmxUVzkyWlNobGRtVnVkQ2tnZTF4dUlDQWdJR3hsZENCamJHbGxiblJZSUQwZ1pYWmxiblF1WTJ4cFpXNTBXQ3hjYmlBZ0lDQWdJQ0FnWTJ4cFpXNTBXU0E5SUdWMlpXNTBMbU5zYVdWdWRGbGNibHh1SUNBZ0lDOHZJSEpsYzJWMElHbHVjSFYwSUhSdklHTmxiblJsY2lCcFppQm9iM1psY2s5dWJIa2dhWE1nYzJWMElHRnVaQ0IzWlNkeVpTQnViM1FnYUc5MlpYSnBibWNnZEdobElHVnNaVzFsYm5SY2JpQWdJQ0JwWmloMGFHbHpMbWh2ZG1WeVQyNXNlU0FtSmx4dUlDQWdJQ0FnS0NoamJHbGxiblJZSUR3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlJSHg4SUdOc2FXVnVkRmdnUGlCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dLeUIwYUdsekxtVnNaVzFsYm5SWGFXUjBhQ2tnZkh4Y2JpQWdJQ0FnSUNoamJHbGxiblJaSUR3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJSHg4SUdOc2FXVnVkRmtnUGlCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa2dLeUIwYUdsekxtVnNaVzFsYm5SSVpXbG5hSFFwS1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBXQ0E5SURCY2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRGa2dQU0F3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVjbVZzWVhScGRtVkpibkIxZENrZ2UxeHVJQ0FnSUNBZ0x5OGdRMnhwY0NCdGIzVnpaU0JqYjI5eVpHbHVZWFJsY3lCcGJuTnBaR1VnWld4bGJXVnVkQ0JpYjNWdVpITXVYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWpiR2x3VW1Wc1lYUnBkbVZKYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0JqYkdsbGJuUllJRDBnVFdGMGFDNXRZWGdvWTJ4cFpXNTBXQ3dnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUtWeHVJQ0FnSUNBZ0lDQmpiR2xsYm5SWUlEMGdUV0YwYUM1dGFXNG9ZMnhwWlc1MFdDd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZSUNzZ2RHaHBjeTVsYkdWdFpXNTBWMmxrZEdncFhHNGdJQ0FnSUNBZ0lHTnNhV1Z1ZEZrZ1BTQk5ZWFJvTG0xaGVDaGpiR2xsYm5SWkxDQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGtwWEc0Z0lDQWdJQ0FnSUdOc2FXVnVkRmtnUFNCTllYUm9MbTFwYmloamJHbGxiblJaTENCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa2dLeUIwYUdsekxtVnNaVzFsYm5SSVpXbG5hSFFwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0F2THlCRFlXeGpkV3hoZEdVZ2FXNXdkWFFnY21Wc1lYUnBkbVVnZEc4Z2RHaGxJR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDQnBaaWgwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmdnSmlZZ2RHaHBjeTVsYkdWdFpXNTBVbUZ1WjJWWktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ0tHTnNhV1Z1ZEZnZ0xTQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGdnTFNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWUtTQXZJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXRnh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwV1NBOUlDaGpiR2xsYm5SWklDMGdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVaSUMwZ2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdTa2dMeUIwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmxjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0x5OGdRMkZzWTNWc1lYUmxJR2x1Y0hWMElISmxiR0YwYVhabElIUnZJSFJvWlNCM2FXNWtiM2N1WEc0Z0lDQWdJQ0JwWmloMGFHbHpMbmRwYm1SdmQxSmhaR2wxYzFnZ0ppWWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTlpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSWUlEMGdLR05zYVdWdWRGZ2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdwSUM4Z2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlpJRDBnS0dOc2FXVnVkRmtnTFNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xrcElDOGdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTlpYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdaR1Z6ZEhKdmVTZ3BJSHRjYmlBZ0lDQjBhR2x6TG1ScGMyRmliR1VvS1Z4dVhHNGdJQ0FnWTJ4bFlYSlVhVzFsYjNWMEtIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFXMWxjaWxjYmlBZ0lDQmpiR1ZoY2xScGJXVnZkWFFvZEdocGN5NWtaWFJsWTNScGIyNVVhVzFsY2lsY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0ozTjBlV3hsSnlsY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwYm1SbGVDQTlJREE3SUdsdVpHVjRJRHdnZEdocGN5NXNZWGxsY25NdWJHVnVaM1JvT3lCcGJtUmxlQ3NyS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeWMxdHBibVJsZUYwdWNtVnRiM1psUVhSMGNtbGlkWFJsS0NkemRIbHNaU2NwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdaR1ZzWlhSbElIUm9hWE11Wld4bGJXVnVkRnh1SUNBZ0lHUmxiR1YwWlNCMGFHbHpMbXhoZVdWeWMxeHVJQ0I5WEc1Y2JpQWdkbVZ5YzJsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0p6TXVNUzR3SjF4dUlDQjlYRzVjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlFZWEpoYkd4aGVGeHVJbDE5XG4iLCJQcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG5cdCdjb21tZW50JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0cGF0dGVybjogLygoPzpcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfHRyYWl0fGluc3RhbmNlb2Z8bmV3KVxccyspfCg/OmNhdGNoXFxzK1xcKCkpW1xcdy5cXFxcXSsvaSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0cHVuY3R1YXRpb246IC9bLlxcXFxdL1xuXHRcdH1cblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuXHQnZnVuY3Rpb24nOiAvXFx3Kyg/PVxcKCkvLFxuXHQnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuXHQnb3BlcmF0b3InOiAvLS0/fFxcK1xcKz98IT0/PT98PD0/fD49P3w9PT89P3wmJj98XFx8XFx8P3xcXD98XFwqfFxcL3x+fFxcXnwlLyxcblx0J3B1bmN0dWF0aW9uJzogL1t7fVtcXF07KCksLjpdL1xufTtcbiIsInZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKiBNSVQgbGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocC9cbiAqIEBhdXRob3IgTGVhIFZlcm91IGh0dHA6Ly9sZWEudmVyb3UubWVcbiAqL1xuXG52YXIgUHJpc20gPSAoZnVuY3Rpb24gKF9zZWxmKXtcblxuLy8gUHJpdmF0ZSBoZWxwZXIgdmFyc1xudmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcbnZhciB1bmlxdWVJZCA9IDA7XG5cbnZhciBfID0ge1xuXHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cdHV0aWw6IHtcblx0XHRlbmNvZGU6IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBfLnV0aWwuZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKF8udXRpbC5lbmNvZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHR9LFxuXG5cdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdH0sXG5cblx0XHQvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHR2YXIgY2xvbmUsIGlkLCB0eXBlID0gXy51dGlsLnR5cGUobyk7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGxhbmd1YWdlczoge1xuXHRcdGV4dGVuZDogZnVuY3Rpb24gKGlkLCByZWRlZikge1xuXHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdGxhbmdba2V5XSA9IHJlZGVmW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsYW5nO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnNlcnQgYSB0b2tlbiBiZWZvcmUgYW5vdGhlciB0b2tlbiBpbiBhIGxhbmd1YWdlIGxpdGVyYWxcblx0XHQgKiBBcyB0aGlzIG5lZWRzIHRvIHJlY3JlYXRlIHRoZSBvYmplY3QgKHdlIGNhbm5vdCBhY3R1YWxseSBpbnNlcnQgYmVmb3JlIGtleXMgaW4gb2JqZWN0IGxpdGVyYWxzKSxcblx0XHQgKiB3ZSBjYW5ub3QganVzdCBwcm92aWRlIGFuIG9iamVjdCwgd2UgbmVlZCBhbiBvYmplY3QgYW5kIGEga2V5LlxuXHRcdCAqIEBwYXJhbSBpbnNpZGUgVGhlIGtleSAob3IgbGFuZ3VhZ2UgaWQpIG9mIHRoZSBwYXJlbnRcblx0XHQgKiBAcGFyYW0gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHQgKiBAcGFyYW0gaW5zZXJ0IE9iamVjdCB3aXRoIHRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gaW5zZXJ0XG5cdFx0ICogQHBhcmFtIHJvb3QgVGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGBpbnNpZGVgLiBJZiBlcXVhbCB0byBQcmlzbS5sYW5ndWFnZXMsIGl0IGNhbiBiZSBvbWl0dGVkLlxuXHRcdCAqL1xuXHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdHJvb3QgPSByb290IHx8IF8ubGFuZ3VhZ2VzO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSByb290W2luc2lkZV07XG5cdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBuZXdUb2tlbiBpbiBpbnNlcnQpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERvIG5vdCBpbnNlcnQgdG9rZW4gd2hpY2ggYWxzbyBvY2N1ciBpbiBpbnNlcnQuIFNlZSAjMTUyNVxuXHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb2xkID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0Xy5sYW5ndWFnZXMuREZTKF8ubGFuZ3VhZ2VzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gb2xkICYmIGtleSAhPSBpbnNpZGUpIHtcblx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvLyBUcmF2ZXJzZSBhIGxhbmd1YWdlIGRlZmluaXRpb24gd2l0aCBEZXB0aCBGaXJzdCBTZWFyY2hcblx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdHZhciBvYmpJZCA9IF8udXRpbC5vYmpJZDtcblxuXHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChvLCBpLCBvW2ldLCB0eXBlIHx8IGkpO1xuXG5cdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXSxcblx0XHRcdFx0XHQgICAgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0aWYgKHByb3BlcnR5VHlwZSA9PT0gJ09iamVjdCcgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cGx1Z2luczoge30sXG5cblx0aGlnaGxpZ2h0QWxsOiBmdW5jdGlvbihhc3luYywgY2FsbGJhY2spIHtcblx0XHRfLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spO1xuXHR9LFxuXG5cdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbihjb250YWluZXIsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdH07XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHR2YXIgZWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpO1xuXG5cdFx0Zm9yICh2YXIgaT0wLCBlbGVtZW50OyBlbGVtZW50ID0gZWxlbWVudHNbaSsrXTspIHtcblx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdHZhciBsYW5ndWFnZSA9ICdub25lJywgZ3JhbW1hciwgcGFyZW50ID0gZWxlbWVudDtcblxuXHRcdHdoaWxlIChwYXJlbnQgJiYgIWxhbmcudGVzdChwYXJlbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0bGFuZ3VhZ2UgPSAocGFyZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXHRcdH1cblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0XHRwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICgvcHJlL2kudGVzdChwYXJlbnQubm9kZU5hbWUpKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlLFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGNvZGU6IGNvZGVcblx0XHR9O1xuXG5cdFx0dmFyIGluc2VydEhpZ2hsaWdodGVkQ29kZSA9IGZ1bmN0aW9uIChoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdGVudi5oaWdobGlnaHRlZENvZGUgPSBoaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLWhpZ2hsaWdodCcsIGVudik7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy51dGlsLmVuY29kZShlbnYuY29kZSkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChhc3luYyAmJiBfc2VsZi5Xb3JrZXIpIHtcblx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlOiBlbnYuY29kZSxcblx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy5oaWdobGlnaHQoZW52LmNvZGUsIGVudi5ncmFtbWFyLCBlbnYubGFuZ3VhZ2UpKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0OiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y29kZTogdGV4dCxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtdG9rZW5pemUnLCBlbnYpO1xuXHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLXRva2VuaXplJywgZW52KTtcblx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdH0sXG5cblx0bWF0Y2hHcmFtbWFyOiBmdW5jdGlvbiAodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpbmRleCwgc3RhcnRQb3MsIG9uZXNob3QsIHRhcmdldCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0b2tlbiA9PSB0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gKF8udXRpbC50eXBlKHBhdHRlcm5zKSA9PT0gXCJBcnJheVwiKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQgPSAhIXBhdHRlcm4ubG9va2JlaGluZCxcblx0XHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm4uZ3JlZWR5LFxuXHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRcdGFsaWFzID0gcGF0dGVybi5hbGlhcztcblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdFx0dmFyIGZsYWdzID0gcGF0dGVybi5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXV5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgXCJnXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGF0dGVybiA9IHBhdHRlcm4ucGF0dGVybiB8fCBwYXR0ZXJuO1xuXG5cdFx0XHRcdC8vIERvbuKAmXQgY2FjaGUgbGVuZ3RoIGFzIGl0IGNoYW5nZXMgZHVyaW5nIHRoZSBsb29wXG5cdFx0XHRcdGZvciAodmFyIGkgPSBpbmRleCwgcG9zID0gc3RhcnRQb3M7IGkgPCBzdHJhcnIubGVuZ3RoOyBwb3MgKz0gc3RyYXJyW2ldLmxlbmd0aCwgKytpKSB7XG5cblx0XHRcdFx0XHR2YXIgc3RyID0gc3RyYXJyW2ldO1xuXG5cdFx0XHRcdFx0aWYgKHN0cmFyci5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncmVlZHkgJiYgaSAhPSBzdHJhcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgPyBtYXRjaFsxXS5sZW5ndGggOiAwKSxcblx0XHRcdFx0XHRcdCAgICB0byA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ICAgIGsgPSBpLFxuXHRcdFx0XHRcdFx0ICAgIHAgPSBwb3M7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGxlbiA9IHN0cmFyci5sZW5ndGg7IGsgPCBsZW4gJiYgKHAgPCB0byB8fCAoIXN0cmFycltrXS50eXBlICYmICFzdHJhcnJbayAtIDFdLmdyZWVkeSkpOyArK2spIHtcblx0XHRcdFx0XHRcdFx0cCArPSBzdHJhcnJba10ubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHQvLyBNb3ZlIHRoZSBpbmRleCBpIHRvIHRoZSBlbGVtZW50IGluIHN0cmFyciB0aGF0IGlzIGNsb3Nlc3QgdG8gZnJvbVxuXHRcdFx0XHRcdFx0XHRpZiAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0XHRcdHBvcyA9IHA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgc3RyYXJyW2ldIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKHN0cmFycltpXSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOdW1iZXIgb2YgdG9rZW5zIHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdGRlbE51bSA9IGsgLSBpO1xuXHRcdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyhzdHIpLFxuXHRcdFx0XHRcdFx0XHRkZWxOdW0gPSAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdGlmIChvbmVzaG90KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihsb29rYmVoaW5kKSB7XG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyBsb29rYmVoaW5kTGVuZ3RoLFxuXHRcdFx0XHRcdCAgICBtYXRjaCA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpLFxuXHRcdFx0XHRcdCAgICB0byA9IGZyb20gKyBtYXRjaC5sZW5ndGgsXG5cdFx0XHRcdFx0ICAgIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKSxcblx0XHRcdFx0XHQgICAgYWZ0ZXIgPSBzdHIuc2xpY2UodG8pO1xuXG5cdFx0XHRcdFx0dmFyIGFyZ3MgPSBbaSwgZGVsTnVtXTtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdCsraTtcblx0XHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGJlZm9yZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZT8gXy50b2tlbml6ZShtYXRjaCwgaW5zaWRlKSA6IG1hdGNoLCBhbGlhcywgbWF0Y2gsIGdyZWVkeSk7XG5cblx0XHRcdFx0XHRhcmdzLnB1c2god3JhcHBlZCk7XG5cblx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdGFyZ3MucHVzaChhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShzdHJhcnIsIGFyZ3MpO1xuXG5cdFx0XHRcdFx0aWYgKGRlbE51bSAhPSAxKVxuXHRcdFx0XHRcdFx0Xy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpLCBwb3MsIHRydWUsIHRva2VuKTtcblxuXHRcdFx0XHRcdGlmIChvbmVzaG90KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0dG9rZW5pemU6IGZ1bmN0aW9uKHRleHQsIGdyYW1tYXIpIHtcblx0XHR2YXIgc3RyYXJyID0gW3RleHRdO1xuXG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cblx0XHRpZiAocmVzdCkge1xuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdH1cblxuXHRcdF8ubWF0Y2hHcmFtbWFyKHRleHQsIHN0cmFyciwgZ3JhbW1hciwgMCwgMCwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIHN0cmFycjtcblx0fSxcblxuXHRob29rczoge1xuXHRcdGFsbDoge30sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdGhvb2tzW25hbWVdID0gaG9va3NbbmFtZV0gfHwgW107XG5cblx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0aWYgKCFjYWxsYmFja3MgfHwgIWNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpPTAsIGNhbGxiYWNrOyBjYWxsYmFjayA9IGNhbGxiYWNrc1tpKytdOykge1xuXHRcdFx0XHRjYWxsYmFjayhlbnYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRUb2tlbjogVG9rZW5cbn07XG5cbl9zZWxmLlByaXNtID0gXztcblxuZnVuY3Rpb24gVG9rZW4odHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIsIGdyZWVkeSkge1xuXHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHR0aGlzLmxlbmd0aCA9IChtYXRjaGVkU3RyIHx8IFwiXCIpLmxlbmd0aHwwO1xuXHR0aGlzLmdyZWVkeSA9ICEhZ3JlZWR5O1xufVxuXG5Ub2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbihvLCBsYW5ndWFnZSkge1xuXHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbztcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0cmV0dXJuIG8ubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoZWxlbWVudCwgbGFuZ3VhZ2UpO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGVudiA9IHtcblx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0Y29udGVudDogVG9rZW4uc3RyaW5naWZ5KG8uY29udGVudCwgbGFuZ3VhZ2UpLFxuXHRcdHRhZzogJ3NwYW4nLFxuXHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHR9O1xuXG5cdGlmIChvLmFsaWFzKSB7XG5cdFx0dmFyIGFsaWFzZXMgPSBBcnJheS5pc0FycmF5KG8uYWxpYXMpID8gby5hbGlhcyA6IFtvLmFsaWFzXTtcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdH1cblxuXHRfLmhvb2tzLnJ1bignd3JhcCcsIGVudik7XG5cblx0dmFyIGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhlbnYuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgKGVudi5hdHRyaWJ1dGVzW25hbWVdIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykgKyAnXCInO1xuXHR9KS5qb2luKCcgJyk7XG5cblx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyAoYXR0cmlidXRlcyA/ICcgJyArIGF0dHJpYnV0ZXMgOiAnJykgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xufTtcblxuaWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHQvLyBpbiBOb2RlLmpzXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRpZiAoIV8uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyKSB7XG5cdFx0Ly8gSW4gd29ya2VyXG5cdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSksXG5cdFx0XHRcdGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlID0gbWVzc2FnZS5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZSA9IG1lc3NhZ2UuaW1tZWRpYXRlQ2xvc2U7XG5cblx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH1cblxuXHRyZXR1cm4gXztcbn1cblxuLy9HZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxudmFyIHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgfHwgW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucG9wKCk7XG5cbmlmIChzY3JpcHQpIHtcblx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0aWYgKCFfLm1hbnVhbCAmJiAhc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8uaGlnaGxpZ2h0QWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KF8uaGlnaGxpZ2h0QWxsLCAxNik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIF8uaGlnaGxpZ2h0QWxsKTtcblx0XHR9XG5cdH1cbn1cblxucmV0dXJuIF87XG5cbn0pKF9zZWxmKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuIiwiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBzdHJpbmcgPSAvKFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzcyA9IHtcblx0XHQnY29tbWVudCc6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHQnYXRydWxlJzoge1xuXHRcdFx0cGF0dGVybjogL0BbXFx3LV0rW1xcc1xcU10qPyg/Ojt8KD89XFxzKlxceykpLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncnVsZSc6IC9AW1xcdy1dKy9cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ3VybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfFteXFxuXFxyKCldKilcXFxcKScsICdpJyksXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL151cmwvaSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzZWxlY3Rvcic6IFJlZ0V4cCgnW157fVxcXFxzXSg/Oltee307XCJcXCddfCcgKyBzdHJpbmcuc291cmNlICsgJykqPyg/PVxcXFxzKlxcXFx7KScpLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IC9bLV9hLXpcXHhBMC1cXHVGRkZGXVstXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKjopL2ksXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzogL1stYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3M7XG5cblx0dmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdGlmIChtYXJrdXApIHtcblx0XHRtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLCB7XG5cdFx0XHQnc3R5bGUtYXR0cic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnYXR0ci1uYW1lJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXHMqc3R5bGUvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogbWFya3VwLnRhZy5pbnNpZGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFxzKj1cXHMqWydcIl18WydcIl1cXHMqJC8sXG5cdFx0XHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvLisvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1jc3MnXG5cdFx0XHR9XG5cdFx0fSwgbWFya3VwLnRhZyk7XG5cdH1cblxufShQcmlzbSkpO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmNsaWtlWydjbGFzcy1uYW1lJ10sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtfJEEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXC4oPzpwcm90b3R5cGV8Y29uc3RydWN0b3IpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQna2V5d29yZCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi5dKVxcYig/OmFzfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRdLFxuXHQnbnVtYmVyJzogL1xcYig/Oig/OjBbeFhdKD86W1xcZEEtRmEtZl0oPzpfW1xcZEEtRmEtZl0pPykrfDBbYkJdKD86WzAxXSg/Ol9bMDFdKT8pK3wwW29PXSg/OlswLTddKD86X1swLTddKT8pKyluP3woPzpcXGQoPzpfXFxkKT8pK258TmFOfEluZmluaXR5KVxcYnwoPzpcXGIoPzpcXGQoPzpfXFxkKT8pK1xcLj8oPzpcXGQoPzpfXFxkKT8pKnxcXEJcXC4oPzpcXGQoPzpfXFxkKT8pKykoPzpbRWVdWystXT8oPzpcXGQoPzpfXFxkKT8pKyk/Lyxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J29wZXJhdG9yJzogLy1bLT1dP3xcXCtbKz1dP3whPT89P3w8PD89P3w+Pj8+Pz0/fD0oPzo9PT98Pik/fCZbJj1dP3xcXHxbfD1dP3xcXCpcXCo/PT98XFwvPT98fnxcXF49P3wlPT98XFw/fFxcLnszfS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcblx0J3JlZ2V4Jzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbXiRcXHdcXHhBMC1cXHVGRkZGLlwiJ1xcXSlcXHNdKVxccyopXFwvKFxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKl18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tnaW15dXNdezAsNn0oPz1cXHMqKCR8W1xcclxcbiwuO30pXFxdXSkpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQvLyBUaGlzIG11c3QgYmUgZGVjbGFyZWQgYmVmb3JlIGtleXdvcmQgYmVjYXVzZSB3ZSB1c2UgXCJmdW5jdGlvblwiIGluc2lkZSB0aGUgbG9vay1mb3J3YXJkXG5cdCdmdW5jdGlvbi12YXJpYWJsZSc6IHtcblx0XHRwYXR0ZXJuOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKls9Ol1cXHMqKD86YXN5bmNcXHMqKT8oPzpcXGJmdW5jdGlvblxcYnwoPzpcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKXxbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKVxccyo9PikpLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQncGFyYW1ldGVyJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrW18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXCkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvW18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo9PikvaSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccyo9PikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XFxifFxcc3xeKSg/ISg/OmFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHl8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKSg/IVskXFx3XFx4QTAtXFx1RkZGRl0pKSg/OltfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSpcXHMqKVxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9fCg/IVxcJHspW15cXFxcYF0pKmAvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL15gfGAkLyxcblx0XHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK30vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwke3x9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuIiwiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlIGlkIGFuZCBpbmRleC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5kZXhcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpbmRleCkge1xuXHRcdHJldHVybiAnX19fJyArIGxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgKyBpbmRleCArICdfX18nO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30sIHtcblx0XHRidWlsZFBsYWNlaG9sZGVyczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUb2tlbml6ZSBhbGwgaW5saW5lIHRlbXBsYXRpbmcgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgYHBsYWNlaG9sZGVyUGF0dGVybmAuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYHJlcGxhY2VGaWx0ZXJgIGlzIHByb3ZpZGVkLCBvbmx5IG1hdGNoZXMgb2YgYHBsYWNlaG9sZGVyUGF0dGVybmAgZm9yIHdoaWNoIGByZXBsYWNlRmlsdGVyYCByZXR1cm5zXG5cdFx0XHQgKiBgdHJ1ZWAgd2lsbCBiZSByZXBsYWNlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGJlZm9yZS10b2tlbml6ZWAgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cblx0XHRcdCAqIEBwYXJhbSB7KG1hdGNoOiBzdHJpbmcpID0+IGJvb2xlYW59IFtyZXBsYWNlRmlsdGVyXVxuXHRcdFx0ICovXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UsIHBsYWNlaG9sZGVyUGF0dGVybiwgcmVwbGFjZUZpbHRlcikge1xuXHRcdFx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0b2tlblN0YWNrID0gZW52LnRva2VuU3RhY2sgPSBbXTtcblxuXHRcdFx0XHRlbnYuY29kZSA9IGVudi5jb2RlLnJlcGxhY2UocGxhY2Vob2xkZXJQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2VGaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXJlcGxhY2VGaWx0ZXIobWF0Y2gpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBpID0gdG9rZW5TdGFjay5sZW5ndGg7XG5cdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZm9yIGV4aXN0aW5nIHN0cmluZ3Ncblx0XHRcdFx0XHR3aGlsZSAoZW52LmNvZGUuaW5kZXhPZihwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpKSkgIT09IC0xKVxuXHRcdFx0XHRcdFx0KytpO1xuXG5cdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgc3BhcnNlIGFycmF5XG5cdFx0XHRcdFx0dG9rZW5TdGFja1tpXSA9IG1hdGNoO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgdG8gbWFya3VwXG5cdFx0XHRcdGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRva2VuaXplUGxhY2Vob2xkZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYWZ0ZXItdG9rZW5pemVgIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuXHRcdFx0ICovXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UpIHtcblx0XHRcdFx0aWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UgfHwgIWVudi50b2tlblN0YWNrKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcblx0XHRcdFx0ZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdFx0XHRcdHZhciBqID0gMDtcblx0XHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnYudG9rZW5TdGFjayk7XG5cblx0XHRcdFx0ZnVuY3Rpb24gd2Fsa1Rva2Vucyh0b2tlbnMpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Ly8gYWxsIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgYWxyZWFkeVxuXHRcdFx0XHRcdFx0aWYgKGogPj0ga2V5cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnIHx8ICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGsgPSBrZXlzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgdCA9IGVudi50b2tlblN0YWNrW2tdO1xuXHRcdFx0XHRcdFx0XHR2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBrKTtcblxuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdCsrajtcblxuXHRcdFx0XHRcdFx0XHRcdHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihsYW5ndWFnZSwgUHJpc20udG9rZW5pemUodCwgZW52LmdyYW1tYXIpLCAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlLCB0KTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzLnN1YnN0cmluZyhpbmRleCArIHBsYWNlaG9sZGVyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVwbGFjZW1lbnQgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2FmdGVyXSkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRva2VuLmNvbnRlbnQgLyogJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnICovKSB7XG5cdFx0XHRcdFx0XHRcdHdhbGtUb2tlbnModG9rZW4uY29udGVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdhbGtUb2tlbnMoZW52LnRva2Vucyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxufShQcmlzbSkpO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiAvPCEtLVtcXHNcXFNdKj8tLT4vLFxuXHQncHJvbG9nJzogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdCdkb2N0eXBlJzogLzwhRE9DVFlQRVtcXHNcXFNdKz8+L2ksXG5cdCdjZGF0YSc6IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP11dPi9pLFxuXHQndGFnJzoge1xuXHRcdHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vaSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHQvXj0vLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVtcIiddfFtcIiddJC8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogLyYjP1tcXGRhLXpdezEsOH07L2lcbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblxuLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcblByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uKGVudikge1xuXG5cdGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcblx0XHRlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgJyYnKTtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG5cdC8qKlxuXHQgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0ICovXG5cdHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcblx0XHR2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG5cblx0XHR2YXIgaW5zaWRlID0ge1xuXHRcdFx0J2luY2x1ZGVkLWNkYXRhJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0XHRcdGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblxuXHRcdHZhciBkZWYgPSB7fTtcblx0XHRkZWZbdGFnTmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyg8X19bXFxzXFxTXSo/PikoPzo8IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT5cXHMqfFtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCB0YWdOYW1lKSwgJ2knKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IGluc2lkZVxuXHRcdH07XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG4iLCIvKipcbiAqIE9yaWdpbmFsIGJ5IEFhcm9uIEhhcnVuOiBodHRwOi8vYWFoYWNyZWF0aXZlLmNvbS8yMDEyLzA3LzMxL3BocC1zeW50YXgtaGlnaGxpZ2h0aW5nLXByaXNtL1xuICogTW9kaWZpZWQgYnkgTWlsZXMgSm9obnNvbjogaHR0cDovL21pbGVzai5tZVxuICpcbiAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XG4gKiBcdFx0LSBFeHRlbmRzIGNsaWtlIHN5bnRheFxuICogXHRcdC0gU3VwcG9ydCBmb3IgUEhQIDUuMysgKG5hbWVzcGFjZXMsIHRyYWl0cywgZ2VuZXJhdG9ycywgZXRjKVxuICogXHRcdC0gU21hcnRlciBjb25zdGFudCBhbmQgZnVuY3Rpb24gbWF0Y2hpbmdcbiAqXG4gKiBBZGRzIHRoZSBmb2xsb3dpbmcgbmV3IHRva2VuIGNsYXNzZXM6XG4gKiBcdFx0Y29uc3RhbnQsIGRlbGltaXRlciwgdmFyaWFibGUsIGZ1bmN0aW9uLCBwYWNrYWdlXG4gKi9cbihmdW5jdGlvbiAoUHJpc20pIHtcblx0UHJpc20ubGFuZ3VhZ2VzLnBocCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHRcdCdrZXl3b3JkJzogL1xcYig/Ol9faGFsdF9jb21waWxlcnxhYnN0cmFjdHxhbmR8YXJyYXl8YXN8YnJlYWt8Y2FsbGFibGV8Y2FzZXxjYXRjaHxjbGFzc3xjbG9uZXxjb25zdHxjb250aW51ZXxkZWNsYXJlfGRlZmF1bHR8ZGllfGRvfGVjaG98ZWxzZXxlbHNlaWZ8ZW1wdHl8ZW5kZGVjbGFyZXxlbmRmb3J8ZW5kZm9yZWFjaHxlbmRpZnxlbmRzd2l0Y2h8ZW5kd2hpbGV8ZXZhbHxleGl0fGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmb3J8Zm9yZWFjaHxmdW5jdGlvbnxnbG9iYWx8Z290b3xpZnxpbXBsZW1lbnRzfGluY2x1ZGV8aW5jbHVkZV9vbmNlfGluc3RhbmNlb2Z8aW5zdGVhZG9mfGludGVyZmFjZXxpc3NldHxsaXN0fG5hbWVzcGFjZXxuZXd8b3J8cGFyZW50fHByaW50fHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXF1aXJlfHJlcXVpcmVfb25jZXxyZXR1cm58c3RhdGljfHN3aXRjaHx0aHJvd3x0cmFpdHx0cnl8dW5zZXR8dXNlfHZhcnx3aGlsZXx4b3J8eWllbGQpXFxiL2ksXG5cdFx0J2Jvb2xlYW4nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvaSxcblx0XHRcdGFsaWFzOiAnY29uc3RhbnQnXG5cdFx0fSxcblx0XHQnY29uc3RhbnQnOiBbXG5cdFx0XHQvXFxiW0EtWl9dW0EtWjAtOV9dKlxcYi8sXG5cdFx0XHQvXFxiKD86bnVsbClcXGIvaSxcblx0XHRdLFxuXHRcdCdjb21tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ3N0cmluZycsIHtcblx0XHQnc2hlbGwtY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdjb21tZW50J1xuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ2NvbW1lbnQnLCB7XG5cdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9cXD8+JHxePFxcPyg/OnBocCg/PVxccyl8PSk/L2ksXG5cdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdrZXl3b3JkJywge1xuXHRcdCd2YXJpYWJsZSc6IC9cXCQrKD86XFx3K1xcYnwoPz17KSkvaSxcblx0XHQncGFja2FnZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxcXHxuYW1lc3BhY2VcXHMrfHVzZVxccyspW1xcd1xcXFxdKy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdHB1bmN0dWF0aW9uOiAvXFxcXC9cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIE11c3QgYmUgZGVmaW5lZCBhZnRlciB0aGUgZnVuY3Rpb24gcGF0dGVyblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAnb3BlcmF0b3InLCB7XG5cdFx0J3Byb3BlcnR5Jzoge1xuXHRcdFx0cGF0dGVybjogLygtPilbXFx3XSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0dmFyIHN0cmluZ19pbnRlcnBvbGF0aW9uID0ge1xuXHRcdHBhdHRlcm46IC97XFwkKD86eyg/OntbXnt9XSt9fFtee31dKyl9fFtee31dKSt9fChefFteXFxcXHtdKVxcJCsoPzpcXHcrKD86XFxbLis/XXwtPlxcdyspKikvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMucGhwXG5cdFx0fVxuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdzdHJpbmcnLCB7XG5cdFx0J25vd2RvYy1zdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvPDw8JyhbXiddKyknKD86XFxyXFxuP3xcXG4pKD86LiooPzpcXHJcXG4/fFxcbikpKj9cXDE7Lyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8J1teJ10rJ3xbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PCc/fFsnO10kL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2hlcmVkb2Mtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLzw8PCg/OlwiKFteXCJdKylcIig/Olxcclxcbj98XFxuKSg/Oi4qKD86XFxyXFxuP3xcXG4pKSo/XFwxO3woW2Etel9dXFx3KikoPzpcXHJcXG4/fFxcbikoPzouKig/Olxcclxcbj98XFxuKSkqP1xcMjspL2ksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXjw8PCg/OlwiW15cIl0rXCJ8W2Etel9dXFx3Kil8W2Etel9dXFx3KjskL2ksXG5cdFx0XHRcdFx0YWxpYXM6ICdzeW1ib2wnLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148PDxcIj98W1wiO10kL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBzdHJpbmdfaW50ZXJwb2xhdGlvbiAvLyBTZWUgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzaW5nbGUtcXVvdGVkLXN0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC8nKD86XFxcXFtcXHNcXFNdfFteXFxcXCddKSonLyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0J2RvdWJsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL1wiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdpbnRlcnBvbGF0aW9uJzogc3RyaW5nX2ludGVycG9sYXRpb24gLy8gU2VlIGJlbG93XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0Ly8gVGhlIGRpZmZlcmVudCB0eXBlcyBvZiBQSFAgc3RyaW5ncyBcInJlcGxhY2VcIiB0aGUgQy1saWtlIHN0YW5kYXJkIHN0cmluZ1xuXHRkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnBocFsnc3RyaW5nJ107XG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHRpZiAoIS88XFw/Ly50ZXN0KGVudi5jb2RlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBwaHBQYXR0ZXJuID0gLzxcXD8oPzpbXlwiJy8jXXxcXC8oPyFbKi9dKXwoXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXwoPzpcXC9cXC98IykoPzpbXj9cXG5cXHJdfFxcPyg/IT4pKSp8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKSkqPyg/OlxcPz58JCkvaWc7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcsIHBocFBhdHRlcm4pO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcpO1xuXHR9KTtcblxufShQcmlzbSkpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05IS4vcHJpc20tbGluZS1udW1iZXJzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOSEuL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIoZnVuY3Rpb24gKCkge1xuXG5cdGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXNlbGYuUHJpc20gfHwgIXNlbGYuZG9jdW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luIG5hbWUgd2hpY2ggaXMgdXNlZCBhcyBhIGNsYXNzIG5hbWUgZm9yIDxwcmU+IHdoaWNoIGlzIGFjdGl2YXRpbmcgdGhlIHBsdWdpblxuXHQgKiBAdHlwZSB7U3RyaW5nfVxuXHQgKi9cblx0dmFyIFBMVUdJTl9OQU1FID0gJ2xpbmUtbnVtYmVycyc7XG5cblx0LyoqXG5cdCAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIGZvciBkZXRlcm1pbmluZyBsaW5lIGJyZWFrc1xuXHQgKiBAdHlwZSB7UmVnRXhwfVxuXHQgKi9cblx0dmFyIE5FV19MSU5FX0VYUCA9IC9cXG4oPyEkKS9nO1xuXG5cdC8qKlxuXHQgKiBSZXNpemVzIGxpbmUgbnVtYmVycyBzcGFucyBhY2NvcmRpbmcgdG8gaGVpZ2h0IG9mIGxpbmUgb2YgY29kZVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgPHByZT4gZWxlbWVudFxuXHQgKi9cblx0dmFyIF9yZXNpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHR2YXIgY29kZVN0eWxlcyA9IGdldFN0eWxlcyhlbGVtZW50KTtcblx0XHR2YXIgd2hpdGVTcGFjZSA9IGNvZGVTdHlsZXNbJ3doaXRlLXNwYWNlJ107XG5cblx0XHRpZiAod2hpdGVTcGFjZSA9PT0gJ3ByZS13cmFwJyB8fCB3aGl0ZVNwYWNlID09PSAncHJlLWxpbmUnKSB7XG5cdFx0XHR2YXIgY29kZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvZGUnKTtcblx0XHRcdHZhciBsaW5lTnVtYmVyc1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcnMtcm93cycpO1xuXHRcdFx0dmFyIGxpbmVOdW1iZXJTaXplciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1zaXplcicpO1xuXHRcdFx0dmFyIGNvZGVMaW5lcyA9IGNvZGVFbGVtZW50LnRleHRDb250ZW50LnNwbGl0KE5FV19MSU5FX0VYUCk7XG5cblx0XHRcdGlmICghbGluZU51bWJlclNpemVyKSB7XG5cdFx0XHRcdGxpbmVOdW1iZXJTaXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0bGluZU51bWJlclNpemVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtc2l6ZXInO1xuXG5cdFx0XHRcdGNvZGVFbGVtZW50LmFwcGVuZENoaWxkKGxpbmVOdW1iZXJTaXplcik7XG5cdFx0XHR9XG5cblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0Y29kZUxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGxpbmVOdW1iZXIpIHtcblx0XHRcdFx0bGluZU51bWJlclNpemVyLnRleHRDb250ZW50ID0gbGluZSB8fCAnXFxuJztcblx0XHRcdFx0dmFyIGxpbmVTaXplID0gbGluZU51bWJlclNpemVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRcdFx0bGluZU51bWJlcnNXcmFwcGVyLmNoaWxkcmVuW2xpbmVOdW1iZXJdLnN0eWxlLmhlaWdodCA9IGxpbmVTaXplICsgJ3B4Jztcblx0XHRcdH0pO1xuXG5cdFx0XHRsaW5lTnVtYmVyU2l6ZXIudGV4dENvbnRlbnQgPSAnJztcblx0XHRcdGxpbmVOdW1iZXJTaXplci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBzdHlsZSBkZWNsYXJhdGlvbnMgZm9yIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHQgKi9cblx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQuY3VycmVudFN0eWxlIHx8IG51bGwpO1xuXHR9O1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUuJyArIFBMVUdJTl9OQU1FKSwgX3Jlc2l6ZUVsZW1lbnQpO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2NvbXBsZXRlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IGVudi5lbGVtZW50O1xuXHRcdHZhciBwcmUgPSBjb2RlLnBhcmVudE5vZGU7XG5cblx0XHQvLyB3b3JrcyBvbmx5IGZvciA8Y29kZT4gd3JhcHBlZCBpbnNpZGUgPHByZT4gKG5vdCBpbmxpbmUpXG5cdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBYm9ydCBpZiBsaW5lIG51bWJlcnMgYWxyZWFkeSBleGlzdHNcblx0XHRpZiAoY29kZS5xdWVyeVNlbGVjdG9yKCcubGluZS1udW1iZXJzLXJvd3MnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBhZGRMaW5lTnVtYmVycyA9IGZhbHNlO1xuXHRcdHZhciBsaW5lTnVtYmVyc1JlZ2V4ID0gLyg/Ol58XFxzKWxpbmUtbnVtYmVycyg/Olxcc3wkKS87XG5cblx0XHRmb3IgKHZhciBlbGVtZW50ID0gY29kZTsgZWxlbWVudDsgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0aWYgKGxpbmVOdW1iZXJzUmVnZXgudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0YWRkTGluZU51bWJlcnMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBvbmx5IGFkZCBsaW5lIG51bWJlcnMgaWYgPGNvZGU+IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyB0aGUgYGxpbmUtbnVtYmVyc2AgY2xhc3Ncblx0XHRpZiAoIWFkZExpbmVOdW1iZXJzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBjbGFzcyAnbGluZS1udW1iZXJzJyBmcm9tIHRoZSA8Y29kZT5cblx0XHRjb2RlLmNsYXNzTmFtZSA9IGNvZGUuY2xhc3NOYW1lLnJlcGxhY2UobGluZU51bWJlcnNSZWdleCwgJyAnKTtcblx0XHQvLyBBZGQgdGhlIGNsYXNzICdsaW5lLW51bWJlcnMnIHRvIHRoZSA8cHJlPlxuXHRcdGlmICghbGluZU51bWJlcnNSZWdleC50ZXN0KHByZS5jbGFzc05hbWUpKSB7XG5cdFx0XHRwcmUuY2xhc3NOYW1lICs9ICcgbGluZS1udW1iZXJzJztcblx0XHR9XG5cblx0XHR2YXIgbWF0Y2ggPSBlbnYuY29kZS5tYXRjaChORVdfTElORV9FWFApO1xuXHRcdHZhciBsaW5lc051bSA9IG1hdGNoID8gbWF0Y2gubGVuZ3RoICsgMSA6IDE7XG5cdFx0dmFyIGxpbmVOdW1iZXJzV3JhcHBlcjtcblxuXHRcdHZhciBsaW5lcyA9IG5ldyBBcnJheShsaW5lc051bSArIDEpLmpvaW4oJzxzcGFuPjwvc3Bhbj4nKTtcblxuXHRcdGxpbmVOdW1iZXJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5lTnVtYmVyc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdsaW5lLW51bWJlcnMtcm93cyc7XG5cdFx0bGluZU51bWJlcnNXcmFwcGVyLmlubmVySFRNTCA9IGxpbmVzO1xuXG5cdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSkge1xuXHRcdFx0cHJlLnN0eWxlLmNvdW50ZXJSZXNldCA9ICdsaW5lbnVtYmVyICcgKyAocGFyc2VJbnQocHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgLSAxKTtcblx0XHR9XG5cblx0XHRlbnYuZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lTnVtYmVyc1dyYXBwZXIpO1xuXG5cdFx0X3Jlc2l6ZUVsZW1lbnQocHJlKTtcblxuXHRcdFByaXNtLmhvb2tzLnJ1bignbGluZS1udW1iZXJzJywgZW52KTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdsaW5lLW51bWJlcnMnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0ZW52LnBsdWdpbnMgPSBlbnYucGx1Z2lucyB8fCB7fTtcblx0XHRlbnYucGx1Z2lucy5saW5lTnVtYmVycyA9IHRydWU7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBHbG9iYWwgZXhwb3J0c1xuXHQgKi9cblx0UHJpc20ucGx1Z2lucy5saW5lTnVtYmVycyA9IHtcblx0XHQvKipcblx0XHQgKiBHZXQgbm9kZSBmb3IgcHJvdmlkZWQgbGluZSBudW1iZXJcblx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgcHJlIGVsZW1lbnRcblx0XHQgKiBAcGFyYW0ge051bWJlcn0gbnVtYmVyIGxpbmUgbnVtYmVyXG5cdFx0ICogQHJldHVybiB7RWxlbWVudHx1bmRlZmluZWR9XG5cdFx0ICovXG5cdFx0Z2V0TGluZTogZnVuY3Rpb24gKGVsZW1lbnQsIG51bWJlcikge1xuXHRcdFx0aWYgKGVsZW1lbnQudGFnTmFtZSAhPT0gJ1BSRScgfHwgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFBMVUdJTl9OQU1FKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsaW5lTnVtYmVyUm93cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycy1yb3dzJyk7XG5cdFx0XHR2YXIgbGluZU51bWJlclN0YXJ0ID0gcGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhcnQnKSwgMTApIHx8IDE7XG5cdFx0XHR2YXIgbGluZU51bWJlckVuZCA9IGxpbmVOdW1iZXJTdGFydCArIChsaW5lTnVtYmVyUm93cy5jaGlsZHJlbi5sZW5ndGggLSAxKTtcblxuXHRcdFx0aWYgKG51bWJlciA8IGxpbmVOdW1iZXJTdGFydCkge1xuXHRcdFx0XHRudW1iZXIgPSBsaW5lTnVtYmVyU3RhcnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAobnVtYmVyID4gbGluZU51bWJlckVuZCkge1xuXHRcdFx0XHRudW1iZXIgPSBsaW5lTnVtYmVyRW5kO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGluZUluZGV4ID0gbnVtYmVyIC0gbGluZU51bWJlclN0YXJ0O1xuXG5cdFx0XHRyZXR1cm4gbGluZU51bWJlclJvd3MuY2hpbGRyZW5bbGluZUluZGV4XTtcblx0XHR9XG5cdH07XG5cbn0oKSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XG5cbmltcG9ydCBQYXJhbGxheCBmcm9tICdwYXJhbGxheC1qcyc7XG4gXG5QcmlzbS5oaWdobGlnaHRBbGwoKTtcblxuJCA9IGpRdWVyeTtcblxuJCgnLnRvZ2dsZS1uYXYnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCduYXYtb3BlbicpO1xufSlcblxuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XG59LCAwKTtcblxuXG52YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgnKTtcbi8qdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUse1xuICAgIGxpbWl0WDogMTAsXG4gICAgbGltaXRZOiAxMCxcbiAgICBzY2FsYXJYOiAyLFxuICAgIHNjYWxhclk6IDIsXG59KTtcbiovXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=