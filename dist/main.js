/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/easteregg.js":
/*!*****************************!*\
  !*** ./src/js/easteregg.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Create console easter egg to add 83% more whismy
 *
 */
function createEasterEgg() {
  var easterMessage = "Ah, you have opened the console.\n\nI too like to live dangerously.\n\n\n       *(((((((((((((((((((((((((((((((((((((((((((((((((                       \n         (((((((((((((((((((((((((((((((((((((((((((((((((/                     \n          ((((((((((((((((((((((((((((((((((((((((((((((((((                    \n           (((((       ((((((                   ((((((((     @@@@@@@@@@@@@@     \n            ((((       ((((((                     /(((((      @@@@@@@@@@@@@@@@  \n              ((       ((((((      (((((((((.      (((((       (        @@@@@@@ \n               (       ((((((      ((((((((((       ((((       ((        @@@@@@.\n                       ((((((      (((((((((*      (((((       (((       @@@@@@ \n                &      ((((((                    (((((((       ((((,   @@@@@@@# \n                &@%    ((((((                    (((((((             @@@@@@@@   \n                &@@@   ((((((      (((((((((       (((((              @@@@      \n                &@@@@  ((((((      (((((((((((      ((((       (((((   @@@@     \n*@@@@@@         @@@@@@ ((((((      (((((((((((      ((((       ((((((    @@@    \n@@@@@@@       @@@@@@@ ,(((((      (((((((((        ((((       ((((((((   @@@&  \n @@@@@@@@@@@@@@@@@@&    ((((                     ((((((       (((((((((   @@@@ \n    @@@@@@@@@@@@%        (((                  (((((((((       ((((((((((   @@@@\n                          (((((((((((((((((((((((((((((((((((((((((((((((((((  \n                           /(((((((((((((((((((((((((((((((((((((((((((((((((( \n\n\n\n";
  console.log(easterMessage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEasterEgg);

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNav);

/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadWipe": () => (/* binding */ loadWipe),
/* harmony export */   "unloadWipe": () => (/* binding */ unloadWipe)
/* harmony export */ });
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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_easteregg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/easteregg */ "./src/js/easteregg.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nav */ "./src/js/nav.js");
/* harmony import */ var _js_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");



(0,_js_easteregg__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_js_nav__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_js_preloader__WEBPACK_IMPORTED_MODULE_2__.loadWipe)();
(0,_js_preloader__WEBPACK_IMPORTED_MODULE_2__.unloadWipe)();

window.onload = function () {
  var picture = $('.banner').find('picture img')[0].currentSrc;
  console.log(picture);
  var bannerStyle = document.createElement('style');
  bannerStyle.innerHTML = "\n\n@supports(background-clip: text) or (-webkit-background-clip: text){\n\n.banner .inner h1::before {\nbackground-image: url(".concat(picture, ");\nopacity: 0.4;\n}\n\n@supports(filter: opacity(0.4)) {\n\n    .banner .inner h1::before {\n        opacity: 1;\n    filter: opacity(0.6);\n        }\n}\n\n}\n");
  document.body.appendChild(bannerStyle);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYnIvLi9zcmMvanMvZWFzdGVyZWdnLmpzIiwid2VicGFjazovL2pici8uL3NyYy9qcy9uYXYuanMiLCJ3ZWJwYWNrOi8vamJyLy4vc3JjL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9qYnIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamJyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYnIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYnIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYnIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZWFzdGVyTWVzc2FnZSIsImNvbnNvbGUiLCIkIiwid2luZG93IiwiY3JlYXRlRWFzdGVyRWdnIiwiaW5pdE5hdiIsImxvYWRXaXBlIiwidW5sb2FkV2lwZSIsInBpY3R1cmUiLCJiYW5uZXJTdHlsZSIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCO0FBRzFCLE1BQU1BLGFBQWEsR0FBbkI7QUE0QkFDLFNBQU8sQ0FBUEE7QUFFQzs7QUFFRCxrRjs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDZkMsR0FBQyxHQUFEQTtBQUVBQSxHQUFDLENBQURBLGFBQUMsQ0FBREEsT0FBdUIsWUFBWTtBQUMvQkEsS0FBQyxDQUFEQSxNQUFDLENBQURBO0FBREpBO0FBR0g7O0FBRUQsMEU7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBRWhCQyxRQUFNLENBQU5BLHFDQUEyQyxpQkFBVztBQUNsREQsS0FBQyxDQUFEQSxXQUFDLENBQURBO0FBQ0FBLEtBQUMsQ0FBREEsTUFBQyxDQUFEQTtBQUZKQztBQU1IO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLHNCQUFzQjtBQUVsQkEsUUFBTSxDQUFOQSxpQ0FBd0MsaUJBQVc7QUFDL0NELEtBQUMsQ0FBREEsU0FBQyxDQUFEQTtBQURKQztBQUlIOzs7Ozs7OztVQ3hCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBSUFDLHNEQUFlO0FBRWZDLGdEQUFPO0FBRVBDLHVEQUFRO0FBQ1JDLHlEQUFVOztBQU9WSixNQUFNLENBQU5BLFNBQWdCLFlBQVc7QUFDdkIsTUFBTUssT0FBTyxHQUFHTixDQUFDLENBQURBLFNBQUMsQ0FBREEsd0JBQWhCO0FBQ0FELFNBQU8sQ0FBUEE7QUFFQSxNQUFJUSxXQUFXLEdBQUdDLFFBQVEsQ0FBUkEsY0FBbEIsT0FBa0JBLENBQWxCO0FBRUpELGFBQVcsQ0FBWEE7QUFtQkFDLFVBQVEsQ0FBUkE7QUF6QkFQLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDcmVhdGUgY29uc29sZSBlYXN0ZXIgZWdnIHRvIGFkZCA4MyUgbW9yZSB3aGlzbXlcbiAqXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc3RlckVnZygpe1xuXG5cbmNvbnN0IGVhc3Rlck1lc3NhZ2UgPSBgQWgsIHlvdSBoYXZlIG9wZW5lZCB0aGUgY29uc29sZS5cblxuSSB0b28gbGlrZSB0byBsaXZlIGRhbmdlcm91c2x5LlxuXG5cbiAgICAgICAqKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoLyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgKCgoKCggICAgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICgoKCgoKCgoICAgICBAQEBAQEBAQEBAQEBAQCAgICAgXG4gICAgICAgICAgICAoKCgoICAgICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAgIC8oKCgoKCAgICAgIEBAQEBAQEBAQEBAQEBAQEAgIFxuICAgICAgICAgICAgICAoKCAgICAgICAoKCgoKCggICAgICAoKCgoKCgoKCguICAgICAgKCgoKCggICAgICAgKCAgICAgICAgQEBAQEBAQCBcbiAgICAgICAgICAgICAgICggICAgICAgKCgoKCgoICAgICAgKCgoKCgoKCgoKCAgICAgICAoKCgoICAgICAgICgoICAgICAgICBAQEBAQEAuXG4gICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCAgICAgICgoKCgoKCgoKCogICAgICAoKCgoKCAgICAgICAoKCggICAgICAgQEBAQEBAIFxuICAgICAgICAgICAgICAgICYgICAgICAoKCgoKCggICAgICAgICAgICAgICAgICAgICgoKCgoKCggICAgICAgKCgoKCwgICBAQEBAQEBAIyBcbiAgICAgICAgICAgICAgICAmQCUgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICAoKCgoKCgoICAgICAgICAgICAgIEBAQEBAQEBAICAgXG4gICAgICAgICAgICAgICAgJkBAQCAgICgoKCgoKCAgICAgICgoKCgoKCgoKCAgICAgICAoKCgoKCAgICAgICAgICAgICAgQEBAQCAgICAgIFxuICAgICAgICAgICAgICAgICZAQEBAICAoKCgoKCggICAgICAoKCgoKCgoKCgoKCAgICAgICgoKCggICAgICAgKCgoKCggICBAQEBAICAgICBcbipAQEBAQEAgICAgICAgICBAQEBAQEAgKCgoKCgoICAgICAgKCgoKCgoKCgoKCggICAgICAoKCgoICAgICAgICgoKCgoKCAgICBAQEAgICAgXG5AQEBAQEBAICAgICAgIEBAQEBAQEAgLCgoKCgoICAgICAgKCgoKCgoKCgoICAgICAgICAoKCgoICAgICAgICgoKCgoKCgoICAgQEBAJiAgXG4gQEBAQEBAQEBAQEBAQEBAQEBAJiAgICAoKCgoICAgICAgICAgICAgICAgICAgICAgKCgoKCgoICAgICAgICgoKCgoKCgoKCAgIEBAQEAgXG4gICAgQEBAQEBAQEBAQEBAJSAgICAgICAgKCgoICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoICAgICAgICgoKCgoKCgoKCggICBAQEBAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggXG5cblxuXG5gO1xuXG5jb25zb2xlLmxvZyhlYXN0ZXJNZXNzYWdlKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFYXN0ZXJFZ2c7IiwiXG4vKipcbiAqQWRkIG5hdiB0b2dnbGUgZnVuY3Rpb25hbGl0eVxuICpcbiAqL1xuZnVuY3Rpb24gaW5pdE5hdigpIHtcbiAgICAkID0galF1ZXJ5O1xuXG4gICAgJCgnLnRvZ2dsZS1uYXYnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0TmF2OyIsIi8qKlxuICogQ3JlYXRlIHdpcGUgZWZmZWN0IG9uIHBhZ2UgbG9hZFxuICpcbiAqL1xuZnVuY3Rpb24gbG9hZFdpcGUoKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKGV2ZW50KSA9PiB7XG4gICAgICAgICQoJy5sb2FkZXItMicpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2NvbnRlbnQtbG9hZGVkJyk7XG4gICAgfSk7XG5cblxufVxuXG4vKipcbiAqIENyZWF0ZSB3aXBlIGVmZmVjdCBvbiBwYWdlIHVubG9hZFxuICpcbiAqL1xuZnVuY3Rpb24gdW5sb2FkV2lwZSgpIHtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgJCgnLmxvYWRlcicpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZFdpcGUsXG4gICAgdW5sb2FkV2lwZVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFYXN0ZXJFZ2cgZnJvbSAnLi9qcy9lYXN0ZXJlZ2cnO1xuaW1wb3J0IGluaXROYXYgZnJvbSAnLi9qcy9uYXYnO1xuaW1wb3J0IHsgbG9hZFdpcGUsIHVubG9hZFdpcGUgfSBmcm9tICcuL2pzL3ByZWxvYWRlcic7XG5cblxuXG5jcmVhdGVFYXN0ZXJFZ2coKTtcblxuaW5pdE5hdigpO1xuXG5sb2FkV2lwZSgpO1xudW5sb2FkV2lwZSgpO1xuXG5cblxuXG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBpY3R1cmUgPSAkKCcuYmFubmVyJykuZmluZCgncGljdHVyZSBpbWcnKVswXS5jdXJyZW50U3JjO1xuICAgIGNvbnNvbGUubG9nKHBpY3R1cmUpO1xuXG4gICAgbGV0IGJhbm5lclN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuYmFubmVyU3R5bGUuaW5uZXJIVE1MID0gYFxuXG5Ac3VwcG9ydHMoYmFja2dyb3VuZC1jbGlwOiB0ZXh0KSBvciAoLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQpe1xuXG4uYmFubmVyIC5pbm5lciBoMTo6YmVmb3JlIHtcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BpY3R1cmV9KTtcbm9wYWNpdHk6IDAuNDtcbn1cblxuQHN1cHBvcnRzKGZpbHRlcjogb3BhY2l0eSgwLjQpKSB7XG5cbiAgICAuYmFubmVyIC5pbm5lciBoMTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC42KTtcbiAgICAgICAgfVxufVxuXG59XG5gO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYW5uZXJTdHlsZSk7XG5cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=