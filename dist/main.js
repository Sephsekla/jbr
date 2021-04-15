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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

var _easteregg = __webpack_require__(/*! ./js/easteregg */ "./src/js/easteregg.js");

var _easteregg2 = _interopRequireDefault(_easteregg);

var _nav = __webpack_require__(/*! ./js/nav */ "./src/js/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _preloader = __webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

(0, _easteregg2.default)();

(0, _nav2.default)();

(0, _preloader.loadWipe)();
(0, _preloader.unloadWipe)();

window.onload = function () {
    var picture = $('.banner').find('picture img')[0].currentSrc;
    console.log(picture);

    var bannerStyle = document.createElement('style');

    bannerStyle.innerHTML = '\n\n@supports(background-clip: text) or (-webkit-background-clip: text){\n\n.banner .inner h1::before {\nbackground-image: url(' + picture + ');\nopacity: 0.4;\n}\n\n@supports(filter: opacity(0.4)) {\n\n    .banner .inner h1::before {\n        opacity: 1;\n    filter: opacity(0.6);\n        }\n}\n\n}\n';
    document.head.appendChild(bannerStyle);
};

/***/ }),

/***/ "./src/js/easteregg.js":
/*!*****************************!*\
  !*** ./src/js/easteregg.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Create console easter egg to add 83% more whismy
 *
 */
function createEasterEgg() {

  var easterMessage = "Ah, you have opened the console.\n\nI too like to live dangerously.\n\n\n       *(((((((((((((((((((((((((((((((((((((((((((((((((                       \n         (((((((((((((((((((((((((((((((((((((((((((((((((/                     \n          ((((((((((((((((((((((((((((((((((((((((((((((((((                    \n           (((((       ((((((                   ((((((((     @@@@@@@@@@@@@@     \n            ((((       ((((((                     /(((((      @@@@@@@@@@@@@@@@  \n              ((       ((((((      (((((((((.      (((((       (        @@@@@@@ \n               (       ((((((      ((((((((((       ((((       ((        @@@@@@.\n                       ((((((      (((((((((*      (((((       (((       @@@@@@ \n                &      ((((((                    (((((((       ((((,   @@@@@@@# \n                &@%    ((((((                    (((((((             @@@@@@@@   \n                &@@@   ((((((      (((((((((       (((((              @@@@      \n                &@@@@  ((((((      (((((((((((      ((((       (((((   @@@@     \n*@@@@@@         @@@@@@ ((((((      (((((((((((      ((((       ((((((    @@@    \n@@@@@@@       @@@@@@@ ,(((((      (((((((((        ((((       ((((((((   @@@&  \n @@@@@@@@@@@@@@@@@@&    ((((                     ((((((       (((((((((   @@@@ \n    @@@@@@@@@@@@%        (((                  (((((((((       ((((((((((   @@@@\n                          (((((((((((((((((((((((((((((((((((((((((((((((((((  \n                           /(((((((((((((((((((((((((((((((((((((((((((((((((( \n\n\n\n";

  console.log(easterMessage);
}

exports.default = createEasterEgg;

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 *Add nav toggle functionality
 *
 */
function initNav() {
    $ = jQuery;

    $('.toggle-nav').click(function () {
        $('body').toggleClass('nav-open');
    });
}

exports.default = initNav;

/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Create wipe effect on page load
 *
 */
function loadWipe() {

    window.addEventListener('DOMContentLoaded', function (event) {
        $('.loader-2').removeClass("active");
        $('body').addClass('content-loaded');
    });
}

/**
 * Create wipe effect on page unload
 *
 */
function unloadWipe() {

    window.addEventListener('beforeunload', function (event) {
        $('.loader').addClass("active");
    });
}

exports.loadWipe = loadWipe;
exports.unloadWipe = unloadWipe;

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.43.0/node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/.pnpm/sass-loader@7.3.1_webpack@4.43.0/node_modules/sass-loader/dist/cjs.js):\n\n@import '~bootstrap/scss/bootstrap-grid';\n^\n      File to import not found or unreadable: /Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/bootstrap@4.5.0/node_modules/bootstrap/scss/bootstrap-grid.scss.\n      in /Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/src/sass/style.scss (line 9, column 1)\n    at /Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/sass-loader@7.3.1_webpack@4.43.0/node_modules/sass-loader/dist/index.js:89:7)\n    at Object.done [as callback] (/Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/neo-async@2.6.1/node_modules/neo-async/async.js:8067:18)\n    at options.error (/Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/node-sass@4.14.1/node_modules/node-sass/lib/index.js:294:32)");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lYXN0ZXJlZ2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInBpY3R1cmUiLCIkIiwiY29uc29sZSIsImJhbm5lclN0eWxlIiwiZG9jdW1lbnQiLCJlYXN0ZXJNZXNzYWdlIiwiY3JlYXRlRWFzdGVyRWdnIiwiaW5pdE5hdiIsImxvYWRXaXBlIiwidW5sb2FkV2lwZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFPQUEsZ0JBQWdCLFlBQVc7QUFDdkIsUUFBTUMsVUFBVUMsb0NBQWhCO0FBQ0FDOztBQUVBLFFBQUlDLGNBQWNDLHVCQUFsQixPQUFrQkEsQ0FBbEI7O0FBRUpEO0FBbUJBQztBQXpCQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7O0FBSUEsMkJBQTBCOztBQUcxQixNQUFNTSxnQkFBTjs7QUE0QkFIO0FBRUM7O2tCQUVjSSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2Y7Ozs7QUFJQSxtQkFBbUI7QUFDZkw7O0FBRUFBLDJCQUF1QixZQUFZO0FBQy9CQTtBQURKQTtBQUdIOztrQkFFY00sTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7OztBQUlBLG9CQUFvQjs7QUFFaEJSLGdEQUE0QyxpQkFBaUI7QUFDekRFO0FBQ0FBO0FBRkpGO0FBTUg7O0FBRUQ7Ozs7QUFJQSxzQkFBc0I7O0FBRWxCQSw0Q0FBd0MsaUJBQWlCO0FBQ3JERTtBQURKRjtBQUlIOztRQUdHUyxRLEdBQUFBLFE7UUFDQUMsVSxHQUFBQSxVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUVhc3RlckVnZyBmcm9tICcuL2pzL2Vhc3RlcmVnZyc7XG5pbXBvcnQgaW5pdE5hdiBmcm9tICcuL2pzL25hdic7XG5pbXBvcnQgeyBsb2FkV2lwZSwgdW5sb2FkV2lwZSB9IGZyb20gJy4vanMvcHJlbG9hZGVyJztcblxuXG5cbmNyZWF0ZUVhc3RlckVnZygpO1xuXG5pbml0TmF2KCk7XG5cbmxvYWRXaXBlKCk7XG51bmxvYWRXaXBlKCk7XG5cblxuXG5cblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGljdHVyZSA9ICQoJy5iYW5uZXInKS5maW5kKCdwaWN0dXJlIGltZycpWzBdLmN1cnJlbnRTcmM7XG4gICAgY29uc29sZS5sb2cocGljdHVyZSk7XG5cbiAgICBsZXQgYmFubmVyU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG5iYW5uZXJTdHlsZS5pbm5lckhUTUwgPSBgXG5cbkBzdXBwb3J0cyhiYWNrZ3JvdW5kLWNsaXA6IHRleHQpIG9yICgtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dCl7XG5cbi5iYW5uZXIgLmlubmVyIGgxOjpiZWZvcmUge1xuYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGljdHVyZX0pO1xub3BhY2l0eTogMC40O1xufVxuXG5Ac3VwcG9ydHMoZmlsdGVyOiBvcGFjaXR5KDAuNCkpIHtcblxuICAgIC5iYW5uZXIgLmlubmVyIGgxOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogb3BhY2l0eSgwLjYpO1xuICAgICAgICB9XG59XG5cbn1cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGJhbm5lclN0eWxlKTtcblxuICB9IiwiXG4vKipcbiAqIENyZWF0ZSBjb25zb2xlIGVhc3RlciBlZ2cgdG8gYWRkIDgzJSBtb3JlIHdoaXNteVxuICpcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWFzdGVyRWdnKCl7XG5cblxuY29uc3QgZWFzdGVyTWVzc2FnZSA9IGBBaCwgeW91IGhhdmUgb3BlbmVkIHRoZSBjb25zb2xlLlxuXG5JIHRvbyBsaWtlIHRvIGxpdmUgZGFuZ2Vyb3VzbHkuXG5cblxuICAgICAgICooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgvICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAoKCgoKCAgICAgICAoKCgoKCggICAgICAgICAgICAgICAgICAgKCgoKCgoKCggICAgIEBAQEBAQEBAQEBAQEBAICAgICBcbiAgICAgICAgICAgICgoKCggICAgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICAgLygoKCgoICAgICAgQEBAQEBAQEBAQEBAQEBAQCAgXG4gICAgICAgICAgICAgICgoICAgICAgICgoKCgoKCAgICAgICgoKCgoKCgoKC4gICAgICAoKCgoKCAgICAgICAoICAgICAgICBAQEBAQEBAIFxuICAgICAgICAgICAgICAgKCAgICAgICAoKCgoKCggICAgICAoKCgoKCgoKCgoICAgICAgICgoKCggICAgICAgKCggICAgICAgIEBAQEBAQC5cbiAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoICAgICAgKCgoKCgoKCgoKiAgICAgICgoKCgoICAgICAgICgoKCAgICAgICBAQEBAQEAgXG4gICAgICAgICAgICAgICAgJiAgICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCAgICAgICAoKCgoLCAgIEBAQEBAQEAjIFxuICAgICAgICAgICAgICAgICZAJSAgICAoKCgoKCggICAgICAgICAgICAgICAgICAgICgoKCgoKCggICAgICAgICAgICAgQEBAQEBAQEAgICBcbiAgICAgICAgICAgICAgICAmQEBAICAgKCgoKCgoICAgICAgKCgoKCgoKCgoICAgICAgICgoKCgoICAgICAgICAgICAgICBAQEBAICAgICAgXG4gICAgICAgICAgICAgICAgJkBAQEAgICgoKCgoKCAgICAgICgoKCgoKCgoKCgoICAgICAgKCgoKCAgICAgICAoKCgoKCAgIEBAQEAgICAgIFxuKkBAQEBAQCAgICAgICAgIEBAQEBAQCAoKCgoKCggICAgICAoKCgoKCgoKCgoKCAgICAgICgoKCggICAgICAgKCgoKCgoICAgIEBAQCAgICBcbkBAQEBAQEAgICAgICAgQEBAQEBAQCAsKCgoKCggICAgICAoKCgoKCgoKCggICAgICAgICgoKCggICAgICAgKCgoKCgoKCggICBAQEAmICBcbiBAQEBAQEBAQEBAQEBAQEBAQEAmICAgICgoKCggICAgICAgICAgICAgICAgICAgICAoKCgoKCggICAgICAgKCgoKCgoKCgoICAgQEBAQCBcbiAgICBAQEBAQEBAQEBAQEAlICAgICAgICAoKCggICAgICAgICAgICAgICAgICAoKCgoKCgoKCggICAgICAgKCgoKCgoKCgoKCAgIEBAQEBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCBcblxuXG5cbmA7XG5cbmNvbnNvbGUubG9nKGVhc3Rlck1lc3NhZ2UpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVhc3RlckVnZzsiLCJcbi8qKlxuICpBZGQgbmF2IHRvZ2dsZSBmdW5jdGlvbmFsaXR5XG4gKlxuICovXG5mdW5jdGlvbiBpbml0TmF2KCkge1xuICAgICQgPSBqUXVlcnk7XG5cbiAgICAkKCcudG9nZ2xlLW5hdicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCduYXYtb3BlbicpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXROYXY7IiwiLyoqXG4gKiBDcmVhdGUgd2lwZSBlZmZlY3Qgb24gcGFnZSBsb2FkXG4gKlxuICovXG5mdW5jdGlvbiBsb2FkV2lwZSgpIHtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICQoJy5sb2FkZXItMicpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbnRlbnQtbG9hZGVkJyk7XG4gICAgfSk7XG5cblxufVxuXG4vKipcbiAqIENyZWF0ZSB3aXBlIGVmZmVjdCBvbiBwYWdlIHVubG9hZFxuICpcbiAqL1xuZnVuY3Rpb24gdW5sb2FkV2lwZSgpIHtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJCgnLmxvYWRlcicpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZFdpcGUsXG4gICAgdW5sb2FkV2lwZVxufTsiXSwic291cmNlUm9vdCI6IiJ9