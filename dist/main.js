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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_easteregg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/easteregg */ "./src/js/easteregg.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nav */ "./src/js/nav.js");
/* harmony import */ var _js_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");



Object(_js_easteregg__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_js_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_js_preloader__WEBPACK_IMPORTED_MODULE_2__["loadWipe"])();
Object(_js_preloader__WEBPACK_IMPORTED_MODULE_2__["unloadWipe"])();

window.onload = function () {
  var picture = $('.banner').find('picture img')[0].currentSrc;
  console.log(picture);
  var bannerStyle = document.createElement('style');
  bannerStyle.innerHTML = "\n\n@supports(background-clip: text) or (-webkit-background-clip: text){\n\n.banner .inner h1::before {\nbackground-image: url(".concat(picture, ");\nopacity: 0.4;\n}\n\n@supports(filter: opacity(0.4)) {\n\n    .banner .inner h1::before {\n        opacity: 1;\n    filter: opacity(0.6);\n        }\n}\n\n}\n");
  document.head.appendChild(bannerStyle);
};

/***/ }),

/***/ "./src/js/easteregg.js":
/*!*****************************!*\
  !*** ./src/js/easteregg.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Create console easter egg to add 83% more whismy
 *
 */
function createEasterEgg() {
  var easterMessage = "Ah, you have opened the console.\n\nI too like to live dangerously.\n\n\n       *(((((((((((((((((((((((((((((((((((((((((((((((((                       \n         (((((((((((((((((((((((((((((((((((((((((((((((((/                     \n          ((((((((((((((((((((((((((((((((((((((((((((((((((                    \n           (((((       ((((((                   ((((((((     @@@@@@@@@@@@@@     \n            ((((       ((((((                     /(((((      @@@@@@@@@@@@@@@@  \n              ((       ((((((      (((((((((.      (((((       (        @@@@@@@ \n               (       ((((((      ((((((((((       ((((       ((        @@@@@@.\n                       ((((((      (((((((((*      (((((       (((       @@@@@@ \n                &      ((((((                    (((((((       ((((,   @@@@@@@# \n                &@%    ((((((                    (((((((             @@@@@@@@   \n                &@@@   ((((((      (((((((((       (((((              @@@@      \n                &@@@@  ((((((      (((((((((((      ((((       (((((   @@@@     \n*@@@@@@         @@@@@@ ((((((      (((((((((((      ((((       ((((((    @@@    \n@@@@@@@       @@@@@@@ ,(((((      (((((((((        ((((       ((((((((   @@@&  \n @@@@@@@@@@@@@@@@@@&    ((((                     ((((((       (((((((((   @@@@ \n    @@@@@@@@@@@@%        (((                  (((((((((       ((((((((((   @@@@\n                          (((((((((((((((((((((((((((((((((((((((((((((((((((  \n                           /(((((((((((((((((((((((((((((((((((((((((((((((((( \n\n\n\n";
  console.log(easterMessage);
}

/* harmony default export */ __webpack_exports__["default"] = (createEasterEgg);

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (initNav);

/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/*! exports provided: loadWipe, unloadWipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWipe", function() { return loadWipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unloadWipe", function() { return unloadWipe; });
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lYXN0ZXJlZ2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVhc3RlckVnZyIsImluaXROYXYiLCJsb2FkV2lwZSIsInVubG9hZFdpcGUiLCJ3aW5kb3ciLCJwaWN0dXJlIiwiJCIsImNvbnNvbGUiLCJiYW5uZXJTdHlsZSIsImRvY3VtZW50IiwiZWFzdGVyTWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBQSw2REFBZTtBQUVmQyx1REFBTztBQUVQQyw4REFBUTtBQUNSQyxnRUFBVTs7QUFPVkMsTUFBTSxDQUFOQSxTQUFnQixZQUFXO0FBQ3ZCLE1BQU1DLE9BQU8sR0FBR0MsQ0FBQyxDQUFEQSxTQUFDLENBQURBLHdCQUFoQjtBQUNBQyxTQUFPLENBQVBBO0FBRUEsTUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQVJBLGNBQWxCLE9BQWtCQSxDQUFsQjtBQUVKRCxhQUFXLENBQVhBO0FBbUJBQyxVQUFRLENBQVJBO0FBekJBTCxFOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQjtBQUcxQixNQUFNTSxhQUFhLEdBQW5CO0FBNEJBSCxTQUFPLENBQVBBO0FBRUM7O0FBRUQsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ2ZELEdBQUMsR0FBREE7QUFFQUEsR0FBQyxDQUFEQSxhQUFDLENBQURBLE9BQXVCLFlBQVk7QUFDL0JBLEtBQUMsQ0FBREEsTUFBQyxDQUFEQTtBQURKQTtBQUdIOztBQUVELHdFOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUVoQkYsUUFBTSxDQUFOQSxxQ0FBNEMsaUJBQWlCO0FBQ3pERSxLQUFDLENBQURBLFdBQUMsQ0FBREE7QUFDQUEsS0FBQyxDQUFEQSxNQUFDLENBQURBO0FBRkpGO0FBTUg7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQXNCO0FBRWxCQSxRQUFNLENBQU5BLGlDQUF3QyxpQkFBaUI7QUFDckRFLEtBQUMsQ0FBREEsU0FBQyxDQUFEQTtBQURKRjtBQUlIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjcmVhdGVFYXN0ZXJFZ2cgZnJvbSAnLi9qcy9lYXN0ZXJlZ2cnO1xuaW1wb3J0IGluaXROYXYgZnJvbSAnLi9qcy9uYXYnO1xuaW1wb3J0IHsgbG9hZFdpcGUsIHVubG9hZFdpcGUgfSBmcm9tICcuL2pzL3ByZWxvYWRlcic7XG5cblxuXG5jcmVhdGVFYXN0ZXJFZ2coKTtcblxuaW5pdE5hdigpO1xuXG5sb2FkV2lwZSgpO1xudW5sb2FkV2lwZSgpO1xuXG5cblxuXG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBpY3R1cmUgPSAkKCcuYmFubmVyJykuZmluZCgncGljdHVyZSBpbWcnKVswXS5jdXJyZW50U3JjO1xuICAgIGNvbnNvbGUubG9nKHBpY3R1cmUpO1xuXG4gICAgbGV0IGJhbm5lclN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuYmFubmVyU3R5bGUuaW5uZXJIVE1MID0gYFxuXG5Ac3VwcG9ydHMoYmFja2dyb3VuZC1jbGlwOiB0ZXh0KSBvciAoLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQpe1xuXG4uYmFubmVyIC5pbm5lciBoMTo6YmVmb3JlIHtcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BpY3R1cmV9KTtcbm9wYWNpdHk6IDAuNDtcbn1cblxuQHN1cHBvcnRzKGZpbHRlcjogb3BhY2l0eSgwLjQpKSB7XG5cbiAgICAuYmFubmVyIC5pbm5lciBoMTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC42KTtcbiAgICAgICAgfVxufVxuXG59XG5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChiYW5uZXJTdHlsZSk7XG5cbiAgfSIsIlxuLyoqXG4gKiBDcmVhdGUgY29uc29sZSBlYXN0ZXIgZWdnIHRvIGFkZCA4MyUgbW9yZSB3aGlzbXlcbiAqXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc3RlckVnZygpe1xuXG5cbmNvbnN0IGVhc3Rlck1lc3NhZ2UgPSBgQWgsIHlvdSBoYXZlIG9wZW5lZCB0aGUgY29uc29sZS5cblxuSSB0b28gbGlrZSB0byBsaXZlIGRhbmdlcm91c2x5LlxuXG5cbiAgICAgICAqKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoLyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgKCgoKCggICAgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICgoKCgoKCgoICAgICBAQEBAQEBAQEBAQEBAQCAgICAgXG4gICAgICAgICAgICAoKCgoICAgICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAgIC8oKCgoKCAgICAgIEBAQEBAQEBAQEBAQEBAQEAgIFxuICAgICAgICAgICAgICAoKCAgICAgICAoKCgoKCggICAgICAoKCgoKCgoKCguICAgICAgKCgoKCggICAgICAgKCAgICAgICAgQEBAQEBAQCBcbiAgICAgICAgICAgICAgICggICAgICAgKCgoKCgoICAgICAgKCgoKCgoKCgoKCAgICAgICAoKCgoICAgICAgICgoICAgICAgICBAQEBAQEAuXG4gICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCAgICAgICgoKCgoKCgoKCogICAgICAoKCgoKCAgICAgICAoKCggICAgICAgQEBAQEBAIFxuICAgICAgICAgICAgICAgICYgICAgICAoKCgoKCggICAgICAgICAgICAgICAgICAgICgoKCgoKCggICAgICAgKCgoKCwgICBAQEBAQEBAIyBcbiAgICAgICAgICAgICAgICAmQCUgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICAoKCgoKCgoICAgICAgICAgICAgIEBAQEBAQEBAICAgXG4gICAgICAgICAgICAgICAgJkBAQCAgICgoKCgoKCAgICAgICgoKCgoKCgoKCAgICAgICAoKCgoKCAgICAgICAgICAgICAgQEBAQCAgICAgIFxuICAgICAgICAgICAgICAgICZAQEBAICAoKCgoKCggICAgICAoKCgoKCgoKCgoKCAgICAgICgoKCggICAgICAgKCgoKCggICBAQEBAICAgICBcbipAQEBAQEAgICAgICAgICBAQEBAQEAgKCgoKCgoICAgICAgKCgoKCgoKCgoKCggICAgICAoKCgoICAgICAgICgoKCgoKCAgICBAQEAgICAgXG5AQEBAQEBAICAgICAgIEBAQEBAQEAgLCgoKCgoICAgICAgKCgoKCgoKCgoICAgICAgICAoKCgoICAgICAgICgoKCgoKCgoICAgQEBAJiAgXG4gQEBAQEBAQEBAQEBAQEBAQEBAJiAgICAoKCgoICAgICAgICAgICAgICAgICAgICAgKCgoKCgoICAgICAgICgoKCgoKCgoKCAgIEBAQEAgXG4gICAgQEBAQEBAQEBAQEBAJSAgICAgICAgKCgoICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoICAgICAgICgoKCgoKCgoKCggICBAQEBAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggXG5cblxuXG5gO1xuXG5jb25zb2xlLmxvZyhlYXN0ZXJNZXNzYWdlKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFYXN0ZXJFZ2c7IiwiXG4vKipcbiAqQWRkIG5hdiB0b2dnbGUgZnVuY3Rpb25hbGl0eVxuICpcbiAqL1xuZnVuY3Rpb24gaW5pdE5hdigpIHtcbiAgICAkID0galF1ZXJ5O1xuXG4gICAgJCgnLnRvZ2dsZS1uYXYnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0TmF2OyIsIi8qKlxuICogQ3JlYXRlIHdpcGUgZWZmZWN0IG9uIHBhZ2UgbG9hZFxuICpcbiAqL1xuZnVuY3Rpb24gbG9hZFdpcGUoKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAkKCcubG9hZGVyLTInKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50LWxvYWRlZCcpO1xuICAgIH0pO1xuXG5cbn1cblxuLyoqXG4gKiBDcmVhdGUgd2lwZSBlZmZlY3Qgb24gcGFnZSB1bmxvYWRcbiAqXG4gKi9cbmZ1bmN0aW9uIHVubG9hZFdpcGUoKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICQoJy5sb2FkZXInKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxufVxuXG5leHBvcnQge1xuICAgIGxvYWRXaXBlLFxuICAgIHVubG9hZFdpcGVcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==