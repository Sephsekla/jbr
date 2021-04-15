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
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_easteregg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/easteregg */ "./src/js/easteregg.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/nav */ "./src/js/nav.js");
/* harmony import */ var _js_preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");




Object(_js_easteregg__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_js_nav__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_js_preloader__WEBPACK_IMPORTED_MODULE_3__["loadWipe"])();
Object(_js_preloader__WEBPACK_IMPORTED_MODULE_3__["unloadWipe"])();

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



/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lYXN0ZXJlZ2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJlbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/ZDkyMCJdLCJuYW1lcyI6WyJjcmVhdGVFYXN0ZXJFZ2ciLCJpbml0TmF2IiwibG9hZFdpcGUiLCJ1bmxvYWRXaXBlIiwid2luZG93IiwicGljdHVyZSIsIiQiLCJjb25zb2xlIiwiYmFubmVyU3R5bGUiLCJkb2N1bWVudCIsImVhc3Rlck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUFBLDZEQUFlO0FBRWZDLHVEQUFPO0FBRVBDLDhEQUFRO0FBQ1JDLGdFQUFVOztBQU9WQyxNQUFNLENBQU5BLFNBQWdCLFlBQVc7QUFDdkIsTUFBTUMsT0FBTyxHQUFHQyxDQUFDLENBQURBLFNBQUMsQ0FBREEsd0JBQWhCO0FBQ0FDLFNBQU8sQ0FBUEE7QUFFQSxNQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBUkEsY0FBbEIsT0FBa0JBLENBQWxCO0FBRUpELGFBQVcsQ0FBWEE7QUFtQkFDLFVBQVEsQ0FBUkE7QUF6QkFMLEU7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCO0FBRzFCLE1BQU1NLGFBQWEsR0FBbkI7QUE0QkFILFNBQU8sQ0FBUEE7QUFFQzs7QUFFRCxnRjs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDZkQsR0FBQyxHQUFEQTtBQUVBQSxHQUFDLENBQURBLGFBQUMsQ0FBREEsT0FBdUIsWUFBWTtBQUMvQkEsS0FBQyxDQUFEQSxNQUFDLENBQURBO0FBREpBO0FBR0g7O0FBRUQsd0U7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBRWhCRixRQUFNLENBQU5BLHFDQUE0QyxpQkFBaUI7QUFDekRFLEtBQUMsQ0FBREEsV0FBQyxDQUFEQTtBQUNBQSxLQUFDLENBQURBLE1BQUMsQ0FBREE7QUFGSkY7QUFNSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFBc0I7QUFFbEJBLFFBQU0sQ0FBTkEsaUNBQXdDLGlCQUFpQjtBQUNyREUsS0FBQyxDQUFEQSxTQUFDLENBQURBO0FBREpGO0FBSUg7Ozs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY3JlYXRlRWFzdGVyRWdnIGZyb20gJy4vanMvZWFzdGVyZWdnJztcbmltcG9ydCBpbml0TmF2IGZyb20gJy4vanMvbmF2JztcbmltcG9ydCB7IGxvYWRXaXBlLCB1bmxvYWRXaXBlIH0gZnJvbSAnLi9qcy9wcmVsb2FkZXInO1xuXG5cblxuY3JlYXRlRWFzdGVyRWdnKCk7XG5cbmluaXROYXYoKTtcblxubG9hZFdpcGUoKTtcbnVubG9hZFdpcGUoKTtcblxuXG5cblxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwaWN0dXJlID0gJCgnLmJhbm5lcicpLmZpbmQoJ3BpY3R1cmUgaW1nJylbMF0uY3VycmVudFNyYztcbiAgICBjb25zb2xlLmxvZyhwaWN0dXJlKTtcblxuICAgIGxldCBiYW5uZXJTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbmJhbm5lclN0eWxlLmlubmVySFRNTCA9IGBcblxuQHN1cHBvcnRzKGJhY2tncm91bmQtY2xpcDogdGV4dCkgb3IgKC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0KXtcblxuLmJhbm5lciAuaW5uZXIgaDE6OmJlZm9yZSB7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwaWN0dXJlfSk7XG5vcGFjaXR5OiAwLjQ7XG59XG5cbkBzdXBwb3J0cyhmaWx0ZXI6IG9wYWNpdHkoMC40KSkge1xuXG4gICAgLmJhbm5lciAuaW5uZXIgaDE6OmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDAuNik7XG4gICAgICAgIH1cbn1cblxufVxuYDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYmFubmVyU3R5bGUpO1xuXG4gIH0iLCJcbi8qKlxuICogQ3JlYXRlIGNvbnNvbGUgZWFzdGVyIGVnZyB0byBhZGQgODMlIG1vcmUgd2hpc215XG4gKlxuICovXG5mdW5jdGlvbiBjcmVhdGVFYXN0ZXJFZ2coKXtcblxuXG5jb25zdCBlYXN0ZXJNZXNzYWdlID0gYEFoLCB5b3UgaGF2ZSBvcGVuZWQgdGhlIGNvbnNvbGUuXG5cbkkgdG9vIGxpa2UgdG8gbGl2ZSBkYW5nZXJvdXNseS5cblxuXG4gICAgICAgKigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKC8gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICgoKCgoICAgICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAoKCgoKCgoKCAgICAgQEBAQEBAQEBAQEBAQEAgICAgIFxuICAgICAgICAgICAgKCgoKCAgICAgICAoKCgoKCggICAgICAgICAgICAgICAgICAgICAvKCgoKCggICAgICBAQEBAQEBAQEBAQEBAQEBAICBcbiAgICAgICAgICAgICAgKCggICAgICAgKCgoKCgoICAgICAgKCgoKCgoKCgoLiAgICAgICgoKCgoICAgICAgICggICAgICAgIEBAQEBAQEAgXG4gICAgICAgICAgICAgICAoICAgICAgICgoKCgoKCAgICAgICgoKCgoKCgoKCggICAgICAgKCgoKCAgICAgICAoKCAgICAgICAgQEBAQEBALlxuICAgICAgICAgICAgICAgICAgICAgICAoKCgoKCggICAgICAoKCgoKCgoKCgqICAgICAgKCgoKCggICAgICAgKCgoICAgICAgIEBAQEBAQCBcbiAgICAgICAgICAgICAgICAmICAgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICAoKCgoKCgoICAgICAgICgoKCgsICAgQEBAQEBAQCMgXG4gICAgICAgICAgICAgICAgJkAlICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCAgICAgICAgICAgICBAQEBAQEBAQCAgIFxuICAgICAgICAgICAgICAgICZAQEAgICAoKCgoKCggICAgICAoKCgoKCgoKCggICAgICAgKCgoKCggICAgICAgICAgICAgIEBAQEAgICAgICBcbiAgICAgICAgICAgICAgICAmQEBAQCAgKCgoKCgoICAgICAgKCgoKCgoKCgoKCggICAgICAoKCgoICAgICAgICgoKCgoICAgQEBAQCAgICAgXG4qQEBAQEBAICAgICAgICAgQEBAQEBAICgoKCgoKCAgICAgICgoKCgoKCgoKCgoICAgICAgKCgoKCAgICAgICAoKCgoKCggICAgQEBAICAgIFxuQEBAQEBAQCAgICAgICBAQEBAQEBAICwoKCgoKCAgICAgICgoKCgoKCgoKCAgICAgICAgKCgoKCAgICAgICAoKCgoKCgoKCAgIEBAQCYgIFxuIEBAQEBAQEBAQEBAQEBAQEBAQCYgICAgKCgoKCAgICAgICAgICAgICAgICAgICAgICgoKCgoKCAgICAgICAoKCgoKCgoKCggICBAQEBAIFxuICAgIEBAQEBAQEBAQEBAQCUgICAgICAgICgoKCAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCAgICAgICAoKCgoKCgoKCgoICAgQEBAQFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLygoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoIFxuXG5cblxuYDtcblxuY29uc29sZS5sb2coZWFzdGVyTWVzc2FnZSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWFzdGVyRWdnOyIsIlxuLyoqXG4gKkFkZCBuYXYgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbiAqXG4gKi9cbmZ1bmN0aW9uIGluaXROYXYoKSB7XG4gICAgJCA9IGpRdWVyeTtcblxuICAgICQoJy50b2dnbGUtbmF2JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdE5hdjsiLCIvKipcbiAqIENyZWF0ZSB3aXBlIGVmZmVjdCBvbiBwYWdlIGxvYWRcbiAqXG4gKi9cbmZ1bmN0aW9uIGxvYWRXaXBlKCkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJCgnLmxvYWRlci0yJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29udGVudC1sb2FkZWQnKTtcbiAgICB9KTtcblxuXG59XG5cbi8qKlxuICogQ3JlYXRlIHdpcGUgZWZmZWN0IG9uIHBhZ2UgdW5sb2FkXG4gKlxuICovXG5mdW5jdGlvbiB1bmxvYWRXaXBlKCkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAkKCcubG9hZGVyJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkV2lwZSxcbiAgICB1bmxvYWRXaXBlXG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=