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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/wid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/.pnpm/gsap@2.1.3/node_modules/gsap/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/.pnpm/gsap@2.1.3/node_modules/gsap/index.js ***!
  \******************************************************************/
/*! exports provided: default, TweenLite, TweenMax, TimelineLite, TimelineMax, CSSPlugin, AttrPlugin, BezierPlugin, RoundPropsPlugin, DirectionalRotationPlugin, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase, _gsScope */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jbr/VVV/www/jbr/public_html/wp-content/themes/jbr/node_modules/.pnpm/gsap@2.1.3/node_modules/gsap/index.js'");

/***/ }),

/***/ "./node_modules/.pnpm/imports-loader@0.7.1/node_modules/imports-loader/index.js?define=>false!./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/imports-loader@0.7.1/node_modules/imports-loader?define=>false!./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.  
 * The most basic requirement is `TweenLite`.
 * 
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
	} else if (true) {
		// CommonJS
		// Loads whole gsap package onto global scope.
		__webpack_require__(/*! gsap */ "./node_modules/.pnpm/gsap@2.1.3/node_modules/gsap/index.js");
		factory(__webpack_require__(/*! scrollmagic */ "./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"), TweenMax, TimelineMax);
	} else {}
}(this, function (ScrollMagic, Tween, Timeline) {
	"use strict";
	var NAMESPACE = "animation.gsap";

	var
		console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}
	if (!Tween) {
		err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
	}

	/*
	 * ----------------------------------------------------------------
	 * Extensions for Scene
	 * ----------------------------------------------------------------
	 */
	/**
	 * Every instance of ScrollMagic.Scene now accepts an additional option.  
	 * See {@link ScrollMagic.Scene} for a complete list of the standard options.
	 * @memberof! animation.GSAP#
	 * @method new ScrollMagic.Scene(options)
	 * @example
	 * var scene = new ScrollMagic.Scene({tweenChanges: true});
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
	 * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
	 												  Does not affect animations where duration is `0`.
	 */
	/**
	 * **Get** or **Set** the tweenChanges option value.  
	 * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
	 * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
	 * @memberof! animation.GSAP#
	 * @method Scene.tweenChanges
	 * 
	 * @example
	 * // get the current tweenChanges option
	 * var tweenChanges = scene.tweenChanges();
	 *
	 * // set new tweenChanges option
	 * scene.tweenChanges(true);
	 *
	 * @fires {@link Scene.change}, when used as setter
	 * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
	 * @returns {boolean} `get` -  Current tweenChanges option value.
	 * @returns {Scene} `set` -  Parent object for chaining.
	 */
	// add option (TODO: DOC (private for dev))
	ScrollMagic.Scene.addOption(
		"tweenChanges", // name
		false, // default
		function (val) { // validation callback
			return !!val;
		}
	);
	// extend scene
	ScrollMagic.Scene.extend(function () {
		var Scene = this,
			_tween;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		// set listeners
		Scene.on("progress.plugin_gsap", function () {
			updateTweenProgress();
		});
		Scene.on("destroy.plugin_gsap", function (e) {
			Scene.removeTween(e.reset);
		});

		/**
		 * Update the tween progress to current position.
		 * @private
		 */
		var updateTweenProgress = function () {
			if (_tween) {
				var
					progress = Scene.progress(),
					state = Scene.state();
				if (_tween.repeat && _tween.repeat() === -1) {
					// infinite loop, so not in relation to progress
					if (state === 'DURING' && _tween.paused()) {
						_tween.play();
					} else if (state !== 'DURING' && !_tween.paused()) {
						_tween.pause();
					}
				} else if (progress != _tween.progress()) { // do we even need to update the progress?
					// no infinite loop - so should we just play or go to a specific point in time?
					if (Scene.duration() === 0) {
						// play the animation
						if (progress > 0) { // play from 0 to 1
							_tween.play();
						} else { // play from 1 to 0
							_tween.reverse();
						}
					} else {
						// go to a specific point in time
						if (Scene.tweenChanges() && _tween.tweenTo) {
							// go smooth
							_tween.tweenTo(progress * _tween.duration());
						} else {
							// just hard set it
							_tween.progress(progress).pause();
						}
					}
				}
			}
		};

		/**
		 * Add a tween to the scene.  
		 * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
		 * 
		 * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
		 * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
		 * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
		 *
		 * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
		 * @memberof! animation.GSAP#
		 *
		 * @example
		 * // add a single tween directly
		 * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
		 *
		 * // add a single tween via variable
		 * var tween = TweenMax.to("obj"), 1, {x: 100};
		 * scene.setTween(tween);
		 *
		 * // add multiple tweens, wrapped in a timeline.
		 * var timeline = new TimelineMax();
		 * var tween1 = TweenMax.from("obj1", 1, {x: 100});
		 * var tween2 = TweenMax.to("obj2", 1, {y: 100});
		 * timeline
		 *		.add(tween1)
		 *		.add(tween2);
		 * scene.addTween(timeline);
		 *
		 * // short hand to add a TweenMax.to() tween
		 * scene.setTween("obj3", 0.5, {y: 100});
		 *
		 * // short hand to add a TweenMax.to() tween for 1 second
		 * // this is useful, when the scene has a duration and the tween duration isn't important anyway
		 * scene.setTween("obj3", {y: 100});
		 *
		 * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
		 * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
		 * @param {object} params - The parameters for the tween
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.setTween = function (TweenObject, duration, params) {
			var newTween;
			if (arguments.length > 1) {
				if (arguments.length < 3) {
					params = duration;
					duration = 1;
				}
				TweenObject = Tween.to(TweenObject, duration, params);
			}
			try {
				// wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
				if (Timeline) {
					newTween = new Timeline({
							smoothChildTiming: true
						})
						.add(TweenObject);
				} else {
					newTween = TweenObject;
				}
				newTween.pause();
			} catch (e) {
				log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
				return Scene;
			}
			if (_tween) { // kill old tween?
				Scene.removeTween();
			}
			_tween = newTween;

			// some properties need to be transferred it to the wrapper, otherwise they would get lost.
			if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
				_tween.repeat(-1);
				_tween.yoyo(TweenObject.yoyo());
			}
			// Some tween validations and debugging helpers

			if (Scene.tweenChanges() && !_tween.tweenTo) {
				log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
			}

			// check if there are position tweens defined for the trigger and warn about it :)
			if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
				var
					triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
					vertical = Scene.controller().info("vertical");
				triggerTweens.forEach(function (value, index) {
					var
						tweenvars = value.vars.css || value.vars,
						condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
					if (condition) {
						log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
						return false;
					}
				});
			}

			// warn about tween overwrites, when an element is tweened multiple times
			if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
				var
					list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween], // get all nested tween objects
					newCallback = function () {
						log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
					};
				for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
					/*jshint loopfunc: true */
					thisTween = list[i];
					if (oldCallback !== newCallback) { // if tweens is added more than once
						oldCallback = thisTween.vars.onOverwrite;
						thisTween.vars.onOverwrite = function () {
							if (oldCallback) {
								oldCallback.apply(this, arguments);
							}
							newCallback.apply(this, arguments);
						};
					}
				}
			}
			log(3, "added tween");

			updateTweenProgress();
			return Scene;
		};

		/**
		 * Remove the tween from the scene.  
		 * This will terminate the control of the Scene over the tween.
		 *
		 * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
		 * @memberof! animation.GSAP#
		 *
		 * @example
		 * // remove the tween from the scene without resetting it
		 * scene.removeTween();
		 *
		 * // remove the tween from the scene and reset it to initial position
		 * scene.removeTween(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.removeTween = function (reset) {
			if (_tween) {
				if (reset) {
					_tween.progress(0).pause();
				}
				_tween.kill();
				_tween = undefined;
				log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

	});
}));


/***/ }),

/***/ "./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.7";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */
		var
			NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */
		var
			Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false, // can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout,
			_refreshTimeout;

		/*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
						param = _options.vertical ? "top" : "left", // which param is of interest ?
						containerOffset = _util.get.offset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */

		var
			NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */

		var
			Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			}, // reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod,
			_controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
						nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
					nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
						list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
					nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene
			.on("change.internal", function (e) {
				if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
					if (e.what === "triggerElement") {
						updateTriggerElementPosition();
					} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
						Scene.update();
					}
				}
			})
			.on("shift.internal", function (e) {
				updateScrollOffset();
				Scene.update(); // update scene to reflect new position
			});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
							scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
					doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
						eventVars = {
							progress: _progress,
							state: _state,
							scrollDirection: scrollDirection
						},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
				elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
				if (telem) { // there currently a triggerElement set
					if (telem.parentNode) { // check if element is still attached to DOM
						var
							controllerInfo = _controller.info(),
							containerOffset = _util.get.offset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];

					} else { // there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};


		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
				changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};


		var
			_pin,
			_pinOptions;

		Scene
			.on("shift.internal", function (e) {
				var durationChanged = e.reason === "duration";
				if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
					// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
					updatePinState();
				}
				if (durationChanged) {
					updatePinDimensions();
				}
			})
			.on("progress.internal", function (e) {
				updatePinState();
			})
			.on("add.internal", function (e) {
				updatePinDimensions();
			})
			.on("destroy.internal", function (e) {
				Scene.removePin(e.reset);
			});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
					containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
						fixedPos = _util.get.offset(_pinOptions.spacer, true), // get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ?
						containerInfo.scrollPos - _scrollOffset.start // quicker
						:
						Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
						newCSS = {
							position: _pinOptions.inFlow ? "relative" : "absolute",
							top: 0,
							left: 0
						},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
					after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild, // usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
				_state === SCENE_STATE_DURING && // element in pinned state?
				( // is width or height relatively sized, but not in relation to body? then we need to recalc.
					((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) ||
					(_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))
				)
			) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
				defaultSettings = {
					pushFollowers: true,
					spacerClass: "scrollmagic-pin-spacer"
				};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
				parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
				inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
				spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow, // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
					pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
							style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
							margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
			_cssClasses,
			_cssClassElems = [];

		Scene
			.on("destroy.internal", function (e) {
				Scene.removeClassToggle(e.reset);
			});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"], // list of options that trigger a `shift` event
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};



	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
	 * TODO: DOCS (private for dev)
	 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
					currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
			loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
				typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.add(classname);
				else
					elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.remove(classname);
				else
					elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
					obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));


	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),

/***/ "./src/js/expertise.js":
/*!*****************************!*\
  !*** ./src/js/expertise.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
$ = jQuery;

/**
 * On mousenter we expand the expertise sections
 *
 */
function expertiseHover() {

  $('.expertise .item').on('mouseenter', function () {
    if (!$(this).find(".linkbox").hasClass("active")) {
      // If active nothing happens

      $('.linkbox.active').removeClass("active"); // Deactivate active
      $(this).find(".linkbox").addClass("active"); // Add active
      $('.expertise-expansion').slideDown(); // Make the container visible


      $('#expand').text($(this).find('.slideout').text()); // Set container text
    }
  });
}

exports.default = expertiseHover;

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.popInStagger = exports.initHeaderScroll = undefined;

var _scrollmagic = __webpack_require__(/*! scrollmagic */ "./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

__webpack_require__(/*! imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap */ "./node_modules/.pnpm/imports-loader@0.7.1/node_modules/imports-loader/index.js?define=>false!./node_modules/.pnpm/scrollmagic@2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js");

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/.pnpm/gsap@2.1.3/node_modules/gsap/index.js");

var _gsap2 = _interopRequireDefault(_gsap);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

$ = jQuery;
//import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";


function initHeaderScroll() {

	var controller = new _scrollmagic2.default.Controller();

	// build scenes
	var headerScroll = new _scrollmagic2.default.Scene({
		offset: 150
	}).setClassToggle("#header-main", "scrolled") // add class toggle
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
}

function popInStagger(items, trigger) {
	var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var triggerPos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;

	var controller = new _scrollmagic2.default.Controller();

	var techIn = new _gsap2.default.staggerFrom(items, 0.2, {
		autoAlpha: 0,
		scale: 2
	}, 0.1);

	var techScroll = new _scrollmagic2.default.Scene({
		triggerElement: trigger,
		duration: duration,
		reverse: false,
		triggerHook: triggerPos
	}).setTween(techIn)
	//.addIndicators()
	.addTo(controller);
}

exports.initHeaderScroll = initHeaderScroll;
exports.popInStagger = popInStagger;

/***/ }),

/***/ "./src/wid.js":
/*!********************!*\
  !*** ./src/wid.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scroll = __webpack_require__(/*! ./js/scroll */ "./src/js/scroll.js");

var _expertise = __webpack_require__(/*! ./js/expertise */ "./src/js/expertise.js");

var _expertise2 = _interopRequireDefault(_expertise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _expertise2.default)();

(0, _scroll.popInStagger)('.tech-item', '#technologies', 300);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3Njcm9sbG1hZ2ljQDIuMC43L25vZGVfbW9kdWxlcy9zY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvcGx1Z2lucy9hbmltYXRpb24uZ3NhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vc2Nyb2xsbWFnaWNAMi4wLjcvbm9kZV9tb2R1bGVzL3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXhwZXJ0aXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZC5qcyJdLCJuYW1lcyI6WyIkIiwiZXhwZXJ0aXNlSG92ZXIiLCJjb250cm9sbGVyIiwiU2Nyb2xsTWFnaWMiLCJoZWFkZXJTY3JvbGwiLCJvZmZzZXQiLCJkdXJhdGlvbiIsInRyaWdnZXJQb3MiLCJ0ZWNoSW4iLCJUd2Vlbk1heCIsImF1dG9BbHBoYSIsInNjYWxlIiwidGVjaFNjcm9sbCIsInRyaWdnZXJFbGVtZW50IiwicmV2ZXJzZSIsInRyaWdnZXJIb29rIiwiaW5pdEhlYWRlclNjcm9sbCIsInBvcEluU3RhZ2dlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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QVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy93aWQuanNcIik7XG4iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbi8qIVxyXG4gKiBTY3JvbGxNYWdpYyB2Mi4wLjcgKDIwMTktMDUtMDcpXHJcbiAqIFRoZSBqYXZhc2NyaXB0IGxpYnJhcnkgZm9yIG1hZ2ljYWwgc2Nyb2xsIGludGVyYWN0aW9ucy5cclxuICogKGMpIDIwMTkgSmFuIFBhZXBrZSAoQGphbnBhZXBrZSlcclxuICogUHJvamVjdCBXZWJzaXRlOiBodHRwOi8vc2Nyb2xsbWFnaWMuaW9cclxuICogXHJcbiAqIEB2ZXJzaW9uIDIuMC43XHJcbiAqIEBsaWNlbnNlIER1YWwgbGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2UgYW5kIEdQTC5cclxuICogQGF1dGhvciBKYW4gUGFlcGtlIC0gZS1tYWlsQGphbnBhZXBrZS5kZVxyXG4gKlxyXG4gKiBAZmlsZSBTY3JvbGxNYWdpYyBHU0FQIEFuaW1hdGlvbiBQbHVnaW4uXHJcbiAqXHJcbiAqIHJlcXVpcmVzOiBHU0FQIH4xLjE0XHJcbiAqIFBvd2VyZWQgYnkgdGhlIEdyZWVuc29jayBBbmltYXRpb24gUGxhdGZvcm0gKEdTQVApOiBodHRwOi8vd3d3LmdyZWVuc29jay5jb20vanNcclxuICogR3JlZW5zb2NrIExpY2Vuc2UgaW5mbyBhdCBodHRwOi8vd3d3LmdyZWVuc29jay5jb20vbGljZW5zaW5nL1xyXG4gKi9cclxuLyoqXHJcbiAqIFRoaXMgcGx1Z2luIGlzIG1lYW50IHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgR3JlZW5zb2NrIEFuaW1hdGlvbiBQbGF0dGZvcm0uICBcclxuICogSXQgb2ZmZXJzIGFuIGVhc3kgQVBJIHRvIHRyaWdnZXIgVHdlZW5zIG9yIHN5bmNocm9uaXplIHRoZW0gdG8gdGhlIHNjcm9sbGJhciBtb3ZlbWVudC5cclxuICpcclxuICogQm90aCB0aGUgYGxpdGVgIGFuZCB0aGUgYG1heGAgdmVyc2lvbnMgb2YgdGhlIEdTQVAgbGlicmFyeSBhcmUgc3VwcG9ydGVkLiAgXHJcbiAqIFRoZSBtb3N0IGJhc2ljIHJlcXVpcmVtZW50IGlzIGBUd2VlbkxpdGVgLlxyXG4gKiBcclxuICogVG8gaGF2ZSBhY2Nlc3MgdG8gdGhpcyBleHRlbnNpb24sIHBsZWFzZSBpbmNsdWRlIGBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzYC5cclxuICogQHJlcXVpcmVzIHtAbGluayBodHRwOi8vZ3JlZW5zb2NrLmNvbS9nc2FwfEdTQVAgfjEuMTQueH1cclxuICogQG1peGluIGFuaW1hdGlvbi5HU0FQXHJcbiAqL1xyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcblx0XHRkZWZpbmUoWydTY3JvbGxNYWdpYycsICdUd2Vlbk1heCcsICdUaW1lbGluZU1heCddLCBmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdC8vIExvYWRzIHdob2xlIGdzYXAgcGFja2FnZSBvbnRvIGdsb2JhbCBzY29wZS5cclxuXHRcdHJlcXVpcmUoJ2dzYXAnKTtcclxuXHRcdGZhY3RvcnkocmVxdWlyZSgnc2Nyb2xsbWFnaWMnKSwgVHdlZW5NYXgsIFRpbWVsaW5lTWF4KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXHJcblx0XHRmYWN0b3J5KHJvb3QuU2Nyb2xsTWFnaWMgfHwgKHJvb3QualF1ZXJ5ICYmIHJvb3QualF1ZXJ5LlNjcm9sbE1hZ2ljKSwgcm9vdC5Ud2Vlbk1heCB8fCByb290LlR3ZWVuTGl0ZSwgcm9vdC5UaW1lbGluZU1heCB8fCByb290LlRpbWVsaW5lTGl0ZSk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChTY3JvbGxNYWdpYywgVHdlZW4sIFRpbWVsaW5lKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0dmFyIE5BTUVTUEFDRSA9IFwiYW5pbWF0aW9uLmdzYXBcIjtcclxuXHJcblx0dmFyXHJcblx0XHRjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30sXHJcblx0XHRlcnIgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGUuZXJyb3IgfHwgY29uc29sZS5sb2cgfHwgZnVuY3Rpb24gKCkge30sIGNvbnNvbGUpO1xyXG5cdGlmICghU2Nyb2xsTWFnaWMpIHtcclxuXHRcdGVycihcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPiBFUlJPUjogVGhlIFNjcm9sbE1hZ2ljIG1haW4gbW9kdWxlIGNvdWxkIG5vdCBiZSBmb3VuZC4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIGxvYWRlZCBiZWZvcmUgdGhpcyBwbHVnaW4gb3IgdXNlIGFuIGFzeW5jaHJvbm91cyBsb2FkZXIgbGlrZSByZXF1aXJlanMuXCIpO1xyXG5cdH1cclxuXHRpZiAoIVR3ZWVuKSB7XHJcblx0XHRlcnIoXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT4gRVJST1I6IFR3ZWVuTGl0ZSBvciBUd2Vlbk1heCBjb3VsZCBub3QgYmUgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgR1NBUCBpcyBsb2FkZWQgYmVmb3JlIFNjcm9sbE1hZ2ljIG9yIHVzZSBhbiBhc3luY2hyb25vdXMgbG9hZGVyIGxpa2UgcmVxdWlyZWpzLlwiKTtcclxuXHR9XHJcblxyXG5cdC8qXHJcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAqIEV4dGVuc2lvbnMgZm9yIFNjZW5lXHJcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAqL1xyXG5cdC8qKlxyXG5cdCAqIEV2ZXJ5IGluc3RhbmNlIG9mIFNjcm9sbE1hZ2ljLlNjZW5lIG5vdyBhY2NlcHRzIGFuIGFkZGl0aW9uYWwgb3B0aW9uLiAgXHJcblx0ICogU2VlIHtAbGluayBTY3JvbGxNYWdpYy5TY2VuZX0gZm9yIGEgY29tcGxldGUgbGlzdCBvZiB0aGUgc3RhbmRhcmQgb3B0aW9ucy5cclxuXHQgKiBAbWVtYmVyb2YhIGFuaW1hdGlvbi5HU0FQI1xyXG5cdCAqIEBtZXRob2QgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKG9wdGlvbnMpXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3R3ZWVuQ2hhbmdlczogdHJ1ZX0pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgZm9yIHRoZSBTY2VuZS4gVGhlIG9wdGlvbnMgY2FuIGJlIHVwZGF0ZWQgYXQgYW55IHRpbWUuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50d2VlbkNoYW5nZXM9ZmFsc2VdIC0gVHdlZW5zIEFuaW1hdGlvbiB0byB0aGUgcHJvZ3Jlc3MgdGFyZ2V0IGluc3RlYWQgb2Ygc2V0dGluZyBpdC4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIERvZXMgbm90IGFmZmVjdCBhbmltYXRpb25zIHdoZXJlIGR1cmF0aW9uIGlzIGAwYC5cclxuXHQgKi9cclxuXHQvKipcclxuXHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHR3ZWVuQ2hhbmdlcyBvcHRpb24gdmFsdWUuICBcclxuXHQgKiBUaGlzIG9ubHkgYWZmZWN0cyBzY2VuZXMgd2l0aCBhIGR1cmF0aW9uLiBJZiBgdHdlZW5DaGFuZ2VzYCBpcyBgdHJ1ZWAsIHRoZSBwcm9ncmVzcyB1cGRhdGUgd2hlbiBzY3JvbGxpbmcgd2lsbCBub3QgYmUgaW1tZWRpYXRlLCBidXQgaW5zdGVhZCB0aGUgYW5pbWF0aW9uIHdpbGwgc21vb3RobHkgYW5pbWF0ZSB0byB0aGUgdGFyZ2V0IHN0YXRlLiAgXHJcblx0ICogRm9yIGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcsIHRyeSBlbmFibGluZyBhbmQgZGlzYWJsaW5nIHRoaXMgb3B0aW9uIGluIHRoZSBbU2NlbmUgTWFuaXB1bGF0aW9uIEV4YW1wbGVdKC4uL2V4YW1wbGVzL2Jhc2ljL3NjZW5lX21hbmlwdWxhdGlvbi5odG1sKS5cclxuXHQgKiBAbWVtYmVyb2YhIGFuaW1hdGlvbi5HU0FQI1xyXG5cdCAqIEBtZXRob2QgU2NlbmUudHdlZW5DaGFuZ2VzXHJcblx0ICogXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdHdlZW5DaGFuZ2VzIG9wdGlvblxyXG5cdCAqIHZhciB0d2VlbkNoYW5nZXMgPSBzY2VuZS50d2VlbkNoYW5nZXMoKTtcclxuXHQgKlxyXG5cdCAqIC8vIHNldCBuZXcgdHdlZW5DaGFuZ2VzIG9wdGlvblxyXG5cdCAqIHNjZW5lLnR3ZWVuQ2hhbmdlcyh0cnVlKTtcclxuXHQgKlxyXG5cdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1R3ZWVuQ2hhbmdlc10gLSBUaGUgbmV3IHR3ZWVuQ2hhbmdlcyBzZXR0aW5nIG9mIHRoZSBzY2VuZS5cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYGdldGAgLSAgQ3VycmVudCB0d2VlbkNoYW5nZXMgb3B0aW9uIHZhbHVlLlxyXG5cdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0ICovXHJcblx0Ly8gYWRkIG9wdGlvbiAoVE9ETzogRE9DIChwcml2YXRlIGZvciBkZXYpKVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLmFkZE9wdGlvbihcclxuXHRcdFwidHdlZW5DaGFuZ2VzXCIsIC8vIG5hbWVcclxuXHRcdGZhbHNlLCAvLyBkZWZhdWx0XHJcblx0XHRmdW5jdGlvbiAodmFsKSB7IC8vIHZhbGlkYXRpb24gY2FsbGJhY2tcclxuXHRcdFx0cmV0dXJuICEhdmFsO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0Ly8gZXh0ZW5kIHNjZW5lXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUuZXh0ZW5kKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBTY2VuZSA9IHRoaXMsXHJcblx0XHRcdF90d2VlbjtcclxuXHJcblx0XHR2YXIgbG9nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoU2NlbmUuX2xvZykgeyAvLyBub3QgYXZhaWxhYmxlLCB3aGVuIG1haW4gc291cmNlIG1pbmlmaWVkXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIilcIiwgXCItPlwiKTtcclxuXHRcdFx0XHRTY2VuZS5fbG9nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGxpc3RlbmVyc1xyXG5cdFx0U2NlbmUub24oXCJwcm9ncmVzcy5wbHVnaW5fZ3NhcFwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHVwZGF0ZVR3ZWVuUHJvZ3Jlc3MoKTtcclxuXHRcdH0pO1xyXG5cdFx0U2NlbmUub24oXCJkZXN0cm95LnBsdWdpbl9nc2FwXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFNjZW5lLnJlbW92ZVR3ZWVuKGUucmVzZXQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHR3ZWVuIHByb2dyZXNzIHRvIGN1cnJlbnQgcG9zaXRpb24uXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlVHdlZW5Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF90d2Vlbikge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0cHJvZ3Jlc3MgPSBTY2VuZS5wcm9ncmVzcygpLFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBTY2VuZS5zdGF0ZSgpO1xyXG5cdFx0XHRcdGlmIChfdHdlZW4ucmVwZWF0ICYmIF90d2Vlbi5yZXBlYXQoKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdC8vIGluZmluaXRlIGxvb3AsIHNvIG5vdCBpbiByZWxhdGlvbiB0byBwcm9ncmVzc1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlID09PSAnRFVSSU5HJyAmJiBfdHdlZW4ucGF1c2VkKCkpIHtcclxuXHRcdFx0XHRcdFx0X3R3ZWVuLnBsYXkoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgIT09ICdEVVJJTkcnICYmICFfdHdlZW4ucGF1c2VkKCkpIHtcclxuXHRcdFx0XHRcdFx0X3R3ZWVuLnBhdXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyAhPSBfdHdlZW4ucHJvZ3Jlc3MoKSkgeyAvLyBkbyB3ZSBldmVuIG5lZWQgdG8gdXBkYXRlIHRoZSBwcm9ncmVzcz9cclxuXHRcdFx0XHRcdC8vIG5vIGluZmluaXRlIGxvb3AgLSBzbyBzaG91bGQgd2UganVzdCBwbGF5IG9yIGdvIHRvIGEgc3BlY2lmaWMgcG9pbnQgaW4gdGltZT9cclxuXHRcdFx0XHRcdGlmIChTY2VuZS5kdXJhdGlvbigpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdC8vIHBsYXkgdGhlIGFuaW1hdGlvblxyXG5cdFx0XHRcdFx0XHRpZiAocHJvZ3Jlc3MgPiAwKSB7IC8vIHBsYXkgZnJvbSAwIHRvIDFcclxuXHRcdFx0XHRcdFx0XHRfdHdlZW4ucGxheSgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgeyAvLyBwbGF5IGZyb20gMSB0byAwXHJcblx0XHRcdFx0XHRcdFx0X3R3ZWVuLnJldmVyc2UoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ28gdG8gYSBzcGVjaWZpYyBwb2ludCBpbiB0aW1lXHJcblx0XHRcdFx0XHRcdGlmIChTY2VuZS50d2VlbkNoYW5nZXMoKSAmJiBfdHdlZW4udHdlZW5Ubykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGdvIHNtb290aFxyXG5cdFx0XHRcdFx0XHRcdF90d2Vlbi50d2VlblRvKHByb2dyZXNzICogX3R3ZWVuLmR1cmF0aW9uKCkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGp1c3QgaGFyZCBzZXQgaXRcclxuXHRcdFx0XHRcdFx0XHRfdHdlZW4ucHJvZ3Jlc3MocHJvZ3Jlc3MpLnBhdXNlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgYSB0d2VlbiB0byB0aGUgc2NlbmUuICBcclxuXHRcdCAqIElmIHlvdSB3YW50IHRvIGFkZCBtdWx0aXBsZSB0d2VlbnMsIGFkZCB0aGVtIGludG8gYSBHU0FQIFRpbWVsaW5lIG9iamVjdCBhbmQgc3VwcGx5IGl0IGluc3RlYWQgKHNlZSBleGFtcGxlIGJlbG93KS4gIFxyXG5cdFx0ICogXHJcblx0XHQgKiBJZiB0aGUgc2NlbmUgaGFzIGEgZHVyYXRpb24sIHRoZSB0d2VlbidzIGR1cmF0aW9uIHdpbGwgYmUgcHJvamVjdGVkIHRvIHRoZSBzY3JvbGwgZGlzdGFuY2Ugb2YgdGhlIHNjZW5lLCBtZWFuaW5nIGl0cyBwcm9ncmVzcyB3aWxsIGJlIHN5bmNlZCB0byBzY3JvbGxiYXIgbW92ZW1lbnQuICBcclxuXHRcdCAqIEZvciBhIHNjZW5lIHdpdGggYSBkdXJhdGlvbiBvZiBgMGAsIHRoZSB0d2VlbiB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHNjcm9sbGluZyBmb3J3YXJkIHBhc3QgdGhlIHNjZW5lJ3MgdHJpZ2dlciBwb3NpdGlvbiBhbmQgcmV2ZXJzZWQsIHdoZW4gc2Nyb2xsaW5nIGJhY2suICBcclxuXHRcdCAqIFRvIGdhaW4gYmV0dGVyIHVuZGVyc3RhbmRpbmcsIGNoZWNrIG91dCB0aGUgW1NpbXBsZSBUd2VlbmluZyBleGFtcGxlXSguLi9leGFtcGxlcy9iYXNpYy9zaW1wbGVfdHdlZW5pbmcuaHRtbCkuXHJcblx0XHQgKlxyXG5cdFx0ICogSW5zdGVhZCBvZiBzdXBwbHlpbmcgYSB0d2VlbiB0aGlzIG1ldGhvZCBjYW4gYWxzbyBiZSB1c2VkIGFzIGEgc2hvcnRoYW5kIGZvciBgVHdlZW5NYXgudG8oKWAgKHNlZSBleGFtcGxlIGJlbG93KS5cclxuXHRcdCAqIEBtZW1iZXJvZiEgYW5pbWF0aW9uLkdTQVAjXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGFkZCBhIHNpbmdsZSB0d2VlbiBkaXJlY3RseVxyXG5cdFx0ICogc2NlbmUuc2V0VHdlZW4oVHdlZW5NYXgudG8oXCJvYmpcIiksIDEsIHt4OiAxMDB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBhZGQgYSBzaW5nbGUgdHdlZW4gdmlhIHZhcmlhYmxlXHJcblx0XHQgKiB2YXIgdHdlZW4gPSBUd2Vlbk1heC50byhcIm9ialwiKSwgMSwge3g6IDEwMH07XHJcblx0XHQgKiBzY2VuZS5zZXRUd2Vlbih0d2Vlbik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gYWRkIG11bHRpcGxlIHR3ZWVucywgd3JhcHBlZCBpbiBhIHRpbWVsaW5lLlxyXG5cdFx0ICogdmFyIHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblx0XHQgKiB2YXIgdHdlZW4xID0gVHdlZW5NYXguZnJvbShcIm9iajFcIiwgMSwge3g6IDEwMH0pO1xyXG5cdFx0ICogdmFyIHR3ZWVuMiA9IFR3ZWVuTWF4LnRvKFwib2JqMlwiLCAxLCB7eTogMTAwfSk7XHJcblx0XHQgKiB0aW1lbGluZVxyXG5cdFx0ICpcdFx0LmFkZCh0d2VlbjEpXHJcblx0XHQgKlx0XHQuYWRkKHR3ZWVuMik7XHJcblx0XHQgKiBzY2VuZS5hZGRUd2Vlbih0aW1lbGluZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2hvcnQgaGFuZCB0byBhZGQgYSBUd2Vlbk1heC50bygpIHR3ZWVuXHJcblx0XHQgKiBzY2VuZS5zZXRUd2VlbihcIm9iajNcIiwgMC41LCB7eTogMTAwfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2hvcnQgaGFuZCB0byBhZGQgYSBUd2Vlbk1heC50bygpIHR3ZWVuIGZvciAxIHNlY29uZFxyXG5cdFx0ICogLy8gdGhpcyBpcyB1c2VmdWwsIHdoZW4gdGhlIHNjZW5lIGhhcyBhIGR1cmF0aW9uIGFuZCB0aGUgdHdlZW4gZHVyYXRpb24gaXNuJ3QgaW1wb3J0YW50IGFueXdheVxyXG5cdFx0ICogc2NlbmUuc2V0VHdlZW4oXCJvYmozXCIsIHt5OiAxMDB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhvYmplY3R8c3RyaW5nKX0gVHdlZW5PYmplY3QgLSBBIFR3ZWVuTWF4LCBUd2VlbkxpdGUsIFRpbWVsaW5lTWF4IG9yIFRpbWVsaW5lTGl0ZSBvYmplY3QgdGhhdCBzaG91bGQgYmUgYW5pbWF0ZWQgaW4gdGhlIHNjZW5lLiBDYW4gYWxzbyBiZSBhIERvbSBFbGVtZW50IG9yIFNlbGVjdG9yLCB3aGVuIHVzaW5nIGRpcmVjdCB0d2VlbiBkZWZpbml0aW9uIChzZWUgZXhhbXBsZXMpLlxyXG5cdFx0ICogQHBhcmFtIHsobnVtYmVyfG9iamVjdCl9IGR1cmF0aW9uIC0gQSBkdXJhdGlvbiBmb3IgdGhlIHR3ZWVuLCBvciB0d2VlbiBwYXJhbWV0ZXJzLiBJZiBhbiBvYmplY3QgY29udGFpbmluZyBwYXJhbWV0ZXJzIGFyZSBzdXBwbGllZCwgYSBkZWZhdWx0IGR1cmF0aW9uIG9mIDEgd2lsbCBiZSB1c2VkLlxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgdHdlZW5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdFNjZW5lLnNldFR3ZWVuID0gZnVuY3Rpb24gKFR3ZWVuT2JqZWN0LCBkdXJhdGlvbiwgcGFyYW1zKSB7XHJcblx0XHRcdHZhciBuZXdUd2VlbjtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XHJcblx0XHRcdFx0XHRwYXJhbXMgPSBkdXJhdGlvbjtcclxuXHRcdFx0XHRcdGR1cmF0aW9uID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0VHdlZW5PYmplY3QgPSBUd2Vlbi50byhUd2Vlbk9iamVjdCwgZHVyYXRpb24sIHBhcmFtcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHQvLyB3cmFwIFR3ZWVuIGludG8gYSBUaW1lbGluZSBPYmplY3QgaWYgYXZhaWxhYmxlIHRvIGluY2x1ZGUgZGVsYXkgYW5kIHJlcGVhdHMgaW4gdGhlIGR1cmF0aW9uIGFuZCBzdGFuZGFyZGl6ZSBtZXRob2RzLlxyXG5cdFx0XHRcdGlmIChUaW1lbGluZSkge1xyXG5cdFx0XHRcdFx0bmV3VHdlZW4gPSBuZXcgVGltZWxpbmUoe1xyXG5cdFx0XHRcdFx0XHRcdHNtb290aENoaWxkVGltaW5nOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5hZGQoVHdlZW5PYmplY3QpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRuZXdUd2VlbiA9IFR3ZWVuT2JqZWN0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuZXdUd2Vlbi5wYXVzZSgpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFR3ZWVuKCknOiBTdXBwbGllZCBhcmd1bWVudCBpcyBub3QgYSB2YWxpZCBUd2Vlbk9iamVjdFwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90d2VlbikgeyAvLyBraWxsIG9sZCB0d2Vlbj9cclxuXHRcdFx0XHRTY2VuZS5yZW1vdmVUd2VlbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF90d2VlbiA9IG5ld1R3ZWVuO1xyXG5cclxuXHRcdFx0Ly8gc29tZSBwcm9wZXJ0aWVzIG5lZWQgdG8gYmUgdHJhbnNmZXJyZWQgaXQgdG8gdGhlIHdyYXBwZXIsIG90aGVyd2lzZSB0aGV5IHdvdWxkIGdldCBsb3N0LlxyXG5cdFx0XHRpZiAoVHdlZW5PYmplY3QucmVwZWF0ICYmIFR3ZWVuT2JqZWN0LnJlcGVhdCgpID09PSAtMSkgeyAvLyBUd2Vlbk1heCBvciBUaW1lbGluZU1heCBPYmplY3Q/XHJcblx0XHRcdFx0X3R3ZWVuLnJlcGVhdCgtMSk7XHJcblx0XHRcdFx0X3R3ZWVuLnlveW8oVHdlZW5PYmplY3QueW95bygpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBTb21lIHR3ZWVuIHZhbGlkYXRpb25zIGFuZCBkZWJ1Z2dpbmcgaGVscGVyc1xyXG5cclxuXHRcdFx0aWYgKFNjZW5lLnR3ZWVuQ2hhbmdlcygpICYmICFfdHdlZW4udHdlZW5Ubykge1xyXG5cdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IHR3ZWVuQ2hhbmdlcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgVGltZWxpbmVNYXggb2JqZWN0IGlzIGF2YWlsYWJsZSBmb3IgU2Nyb2xsTWFnaWMuXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgcG9zaXRpb24gdHdlZW5zIGRlZmluZWQgZm9yIHRoZSB0cmlnZ2VyIGFuZCB3YXJuIGFib3V0IGl0IDopXHJcblx0XHRcdGlmIChfdHdlZW4gJiYgU2NlbmUuY29udHJvbGxlcigpICYmIFNjZW5lLnRyaWdnZXJFbGVtZW50KCkgJiYgU2NlbmUubG9nbGV2ZWwoKSA+PSAyKSB7IC8vIGNvbnRyb2xsZXIgaXMgbmVlZGVkIHRvIGtub3cgc2Nyb2xsIGRpcmVjdGlvbi5cclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdHRyaWdnZXJUd2VlbnMgPSBUd2Vlbi5nZXRUd2VlbnNPZihTY2VuZS50cmlnZ2VyRWxlbWVudCgpKSxcclxuXHRcdFx0XHRcdHZlcnRpY2FsID0gU2NlbmUuY29udHJvbGxlcigpLmluZm8oXCJ2ZXJ0aWNhbFwiKTtcclxuXHRcdFx0XHR0cmlnZ2VyVHdlZW5zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdHR3ZWVudmFycyA9IHZhbHVlLnZhcnMuY3NzIHx8IHZhbHVlLnZhcnMsXHJcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9IHZlcnRpY2FsID8gKHR3ZWVudmFycy50b3AgIT09IHVuZGVmaW5lZCB8fCB0d2VlbnZhcnMuYm90dG9tICE9PSB1bmRlZmluZWQpIDogKHR3ZWVudmFycy5sZWZ0ICE9PSB1bmRlZmluZWQgfHwgdHdlZW52YXJzLnJpZ2h0ICE9PSB1bmRlZmluZWQpO1xyXG5cdFx0XHRcdFx0aWYgKGNvbmRpdGlvbikge1xyXG5cdFx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBUd2VlbmluZyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXIgZWxlbWVudCBhZmZlY3RzIHRoZSBzY2VuZSB0aW1pbmcgYW5kIHNob3VsZCBiZSBhdm9pZGVkIVwiKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB3YXJuIGFib3V0IHR3ZWVuIG92ZXJ3cml0ZXMsIHdoZW4gYW4gZWxlbWVudCBpcyB0d2VlbmVkIG11bHRpcGxlIHRpbWVzXHJcblx0XHRcdGlmIChwYXJzZUZsb2F0KFR3ZWVuTGl0ZS52ZXJzaW9uKSA+PSAxLjE0KSB7IC8vIG9uT3ZlcndyaXRlIG9ubHkgcHJlc2VudCBzaW5jZSBHU0FQIHYxLjE0LjBcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGxpc3QgPSBfdHdlZW4uZ2V0Q2hpbGRyZW4gPyBfdHdlZW4uZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpIDogW190d2Vlbl0sIC8vIGdldCBhbGwgbmVzdGVkIHR3ZWVuIG9iamVjdHNcclxuXHRcdFx0XHRcdG5ld0NhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiB0d2VlbiB3YXMgb3ZlcndyaXR0ZW4gYnkgYW5vdGhlci4gVG8gbGVhcm4gaG93IHRvIGF2b2lkIHRoaXMgaXNzdWUgc2VlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5wYWVwa2UvU2Nyb2xsTWFnaWMvd2lraS9XQVJOSU5HOi10d2Vlbi13YXMtb3ZlcndyaXR0ZW4tYnktYW5vdGhlclwiKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHRoaXNUd2Vlbiwgb2xkQ2FsbGJhY2s7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHQvKmpzaGludCBsb29wZnVuYzogdHJ1ZSAqL1xyXG5cdFx0XHRcdFx0dGhpc1R3ZWVuID0gbGlzdFtpXTtcclxuXHRcdFx0XHRcdGlmIChvbGRDYWxsYmFjayAhPT0gbmV3Q2FsbGJhY2spIHsgLy8gaWYgdHdlZW5zIGlzIGFkZGVkIG1vcmUgdGhhbiBvbmNlXHJcblx0XHRcdFx0XHRcdG9sZENhbGxiYWNrID0gdGhpc1R3ZWVuLnZhcnMub25PdmVyd3JpdGU7XHJcblx0XHRcdFx0XHRcdHRoaXNUd2Vlbi52YXJzLm9uT3ZlcndyaXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvbGRDYWxsYmFjaykge1xyXG5cdFx0XHRcdFx0XHRcdFx0b2xkQ2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0bmV3Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgdHdlZW5cIik7XHJcblxyXG5cdFx0XHR1cGRhdGVUd2VlblByb2dyZXNzKCk7XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdGhlIHR3ZWVuIGZyb20gdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBUaGlzIHdpbGwgdGVybWluYXRlIHRoZSBjb250cm9sIG9mIHRoZSBTY2VuZSBvdmVyIHRoZSB0d2Vlbi5cclxuXHRcdCAqXHJcblx0XHQgKiBVc2luZyB0aGUgcmVzZXQgb3B0aW9uIHlvdSBjYW4gZGVjaWRlIGlmIHRoZSB0d2VlbiBzaG91bGQgcmVtYWluIGluIHRoZSBjdXJyZW50IHN0YXRlIG9yIGJlIHJld291bmQgdG8gc2V0IHRoZSB0YXJnZXQgZWxlbWVudHMgYmFjayB0byB0aGUgc3RhdGUgdGhleSB3ZXJlIGluIGJlZm9yZSB0aGUgdHdlZW4gd2FzIGFkZGVkIHRvIHRoZSBzY2VuZS5cclxuXHRcdCAqIEBtZW1iZXJvZiEgYW5pbWF0aW9uLkdTQVAjXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgdHdlZW4gZnJvbSB0aGUgc2NlbmUgd2l0aG91dCByZXNldHRpbmcgaXRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZVR3ZWVuKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSB0d2VlbiBmcm9tIHRoZSBzY2VuZSBhbmQgcmVzZXQgaXQgdG8gaW5pdGlhbCBwb3NpdGlvblxyXG5cdFx0ICogc2NlbmUucmVtb3ZlVHdlZW4odHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB0d2VlbiB3aWxsIGJlIHJlc2V0IHRvIGl0cyBpbml0aWFsIHZhbHVlcy5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdFNjZW5lLnJlbW92ZVR3ZWVuID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdGlmIChfdHdlZW4pIHtcclxuXHRcdFx0XHRpZiAocmVzZXQpIHtcclxuXHRcdFx0XHRcdF90d2Vlbi5wcm9ncmVzcygwKS5wYXVzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdHdlZW4ua2lsbCgpO1xyXG5cdFx0XHRcdF90d2VlbiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRsb2coMywgXCJyZW1vdmVkIHR3ZWVuIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0fSk7XHJcbn0pKTtcbiIsIi8qIVxyXG4gKiBTY3JvbGxNYWdpYyB2Mi4wLjcgKDIwMTktMDUtMDcpXHJcbiAqIFRoZSBqYXZhc2NyaXB0IGxpYnJhcnkgZm9yIG1hZ2ljYWwgc2Nyb2xsIGludGVyYWN0aW9ucy5cclxuICogKGMpIDIwMTkgSmFuIFBhZXBrZSAoQGphbnBhZXBrZSlcclxuICogUHJvamVjdCBXZWJzaXRlOiBodHRwOi8vc2Nyb2xsbWFnaWMuaW9cclxuICogXHJcbiAqIEB2ZXJzaW9uIDIuMC43XHJcbiAqIEBsaWNlbnNlIER1YWwgbGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2UgYW5kIEdQTC5cclxuICogQGF1dGhvciBKYW4gUGFlcGtlIC0gZS1tYWlsQGphbnBhZXBrZS5kZVxyXG4gKlxyXG4gKiBAZmlsZSBTY3JvbGxNYWdpYyBtYWluIGxpYnJhcnkuXHJcbiAqL1xyXG4vKipcclxuICogQG5hbWVzcGFjZSBTY3JvbGxNYWdpY1xyXG4gKi9cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsXHJcblx0XHRyb290LlNjcm9sbE1hZ2ljID0gZmFjdG9yeSgpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHZhciBTY3JvbGxNYWdpYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdF91dGlsLmxvZygyLCAnKENPTVBBVElCSUxJVFkgTk9USUNFKSAtPiBBcyBvZiBTY3JvbGxNYWdpYyAyLjAuMCB5b3UgbmVlZCB0byB1c2UgXFwnbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKVxcJyB0byBjcmVhdGUgYSBuZXcgY29udHJvbGxlciBpbnN0YW5jZS4gVXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXFwnIHRvIGluc3RhbmNlIGEgc2NlbmUuJyk7XHJcblx0fTtcclxuXHJcblx0U2Nyb2xsTWFnaWMudmVyc2lvbiA9IFwiMi4wLjdcIjtcclxuXHJcblx0Ly8gVE9ETzogdGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGNocm9tZSdzIHNjcm9sbCBqaXR0ZXIgYnVnXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblx0Ly8gZ2xvYmFsIGNvbnN0XHJcblx0dmFyIFBJTl9TUEFDRVJfQVRUUklCVVRFID0gXCJkYXRhLXNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIjtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG1haW4gY2xhc3MgdGhhdCBpcyBuZWVkZWQgb25jZSBwZXIgc2Nyb2xsIGNvbnRhaW5lci5cclxuXHQgKlxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBiYXNpYyBpbml0aWFsaXphdGlvblxyXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHQgKlxyXG5cdCAqIC8vIHBhc3Npbmcgb3B0aW9uc1xyXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe2NvbnRhaW5lcjogXCIjbXlDb250YWluZXJcIiwgbG9nbGV2ZWw6IDN9KTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBvbmUgb3IgbW9yZSBvcHRpb25zIGZvciB0aGUgY29udHJvbGxlci5cclxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMuY29udGFpbmVyPXdpbmRvd10gLSBBIHNlbGVjdG9yLCBET00gb2JqZWN0IHRoYXQgcmVmZXJlbmNlcyB0aGUgbWFpbiBjb250YWluZXIgZm9yIHNjcm9sbGluZy5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZlcnRpY2FsPXRydWVdIC0gU2V0cyB0aGUgc2Nyb2xsIG1vZGUgdG8gdmVydGljYWwgKGB0cnVlYCkgb3IgaG9yaXpvbnRhbCAoYGZhbHNlYCkgc2Nyb2xsaW5nLlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnM9e31dIC0gVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHBhc3NlZCB0byBldmVyeSBTY2VuZSB0aGF0IGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHVzaW5nIHRoZSBhZGRTY2VuZSBtZXRob2QuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIFNjZW5lIG9wdGlvbnMgc2VlIHtAbGluayBTY3JvbGxNYWdpYy5TY2VuZX0uXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAwYCA9PiBzaWxlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgMWAgPT4gZXJyb3JzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWw9MTAwXSAtIFNvbWUgY2hhbmdlcyBkb24ndCBjYWxsIGV2ZW50cyBieSBkZWZhdWx0LCBsaWtlIGNoYW5naW5nIHRoZSBjb250YWluZXIgc2l6ZSBvciBtb3ZpbmcgYSBzY2VuZSB0cmlnZ2VyIGVsZW1lbnQuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUaGlzIGludGVydmFsIHBvbGxzIHRoZXNlIHBhcmFtZXRlcnMgdG8gZmlyZSB0aGUgbmVjZXNzYXJ5IGV2ZW50cy4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IElmIHlvdSBkb24ndCB1c2UgY3VzdG9tIGNvbnRhaW5lcnMsIHRyaWdnZXIgZWxlbWVudHMgb3IgaGF2ZSBzdGF0aWMgbGF5b3V0cywgd2hlcmUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgdHJpZ2dlciBlbGVtZW50cyBkb24ndCBjaGFuZ2UsIHlvdSBjYW4gc2V0IHRoaXMgdG8gMCBkaXNhYmxlIGludGVydmFsIGNoZWNraW5nIGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlLlxyXG5cdCAqXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogc2V0dGluZ3NcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cdFx0dmFyXHJcblx0XHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5Db250cm9sbGVyJyxcclxuXHRcdFx0U0NST0xMX0RJUkVDVElPTl9GT1JXQVJEID0gJ0ZPUldBUkQnLFxyXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0UgPSAnUkVWRVJTRScsXHJcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEID0gJ1BBVVNFRCcsXHJcblx0XHRcdERFRkFVTFRfT1BUSU9OUyA9IENPTlRST0xMRVJfT1BUSU9OUy5kZWZhdWx0cztcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSB2YXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdHZhclxyXG5cdFx0XHRDb250cm9sbGVyID0gdGhpcyxcclxuXHRcdFx0X29wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyksXHJcblx0XHRcdF9zY2VuZU9iamVjdHMgPSBbXSxcclxuXHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2UsIC8vIGNhbiBiZSBib29sZWFuICh0cnVlID0+IGFsbCBzY2VuZXMpIG9yIGFuIGFycmF5IG9mIHNjZW5lcyB0byBiZSB1cGRhdGVkXHJcblx0XHRcdF9zY3JvbGxQb3MgPSAwLFxyXG5cdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQsXHJcblx0XHRcdF9pc0RvY3VtZW50ID0gdHJ1ZSxcclxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IDAsXHJcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcclxuXHRcdFx0X3VwZGF0ZVRpbWVvdXQsXHJcblx0XHRcdF9yZWZyZXNoVGltZW91dDtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSBmdW5jdGlvbnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW50ZXJuYWwgY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucykge1xyXG5cdFx0XHRcdGlmICghREVGQVVMVF9PUFRJT05TLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFVua25vd24gb3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIgPSBfdXRpbC5nZXQuZWxlbWVudHMoX29wdGlvbnMuY29udGFpbmVyKVswXTtcclxuXHRcdFx0Ly8gY2hlY2sgU2Nyb2xsQ29udGFpbmVyXHJcblx0XHRcdGlmICghX29wdGlvbnMuY29udGFpbmVyKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY3JlYXRpbmcgb2JqZWN0IFwiICsgTkFNRVNQQUNFICsgXCI6IE5vIHZhbGlkIHNjcm9sbCBjb250YWluZXIgc3VwcGxpZWRcIik7XHJcblx0XHRcdFx0dGhyb3cgTkFNRVNQQUNFICsgXCIgaW5pdCBmYWlsZWQuXCI7IC8vIGNhbmNlbFxyXG5cdFx0XHR9XHJcblx0XHRcdF9pc0RvY3VtZW50ID0gX29wdGlvbnMuY29udGFpbmVyID09PSB3aW5kb3cgfHwgX29wdGlvbnMuY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5IHx8ICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKF9vcHRpb25zLmNvbnRhaW5lcik7XHJcblx0XHRcdC8vIG5vcm1hbGl6ZSB0byB3aW5kb3dcclxuXHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gd2luZG93O1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHVwZGF0ZSBjb250YWluZXIgc2l6ZSBpbW1lZGlhdGVseVxyXG5cdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XHJcblx0XHRcdC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcclxuXHJcblx0XHRcdHZhciByaSA9IHBhcnNlSW50KF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCwgMTApO1xyXG5cdFx0XHRfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPSBfdXRpbC50eXBlLk51bWJlcihyaSkgPyByaSA6IERFRkFVTFRfT1BUSU9OUy5yZWZyZXNoSW50ZXJ2YWw7XHJcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xyXG5cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgbmV3IFwiICsgTkFNRVNQQUNFICsgXCIgY29udHJvbGxlciAodlwiICsgU2Nyb2xsTWFnaWMudmVyc2lvbiArIFwiKVwiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2hlZHVsZSB0aGUgbmV4dCBleGVjdXRpb24gb2YgdGhlIHJlZnJlc2ggZnVuY3Rpb25cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBzY2hlZHVsZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPiAwKSB7XHJcblx0XHRcdFx0X3JlZnJlc2hUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVmcmVzaCwgX29wdGlvbnMucmVmcmVzaEludGVydmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlZmF1bHQgZnVuY3Rpb24gdG8gZ2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFBvcyhuZXdGdW5jdGlvbilgXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0U2Nyb2xsUG9zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuc2Nyb2xsVG9wKF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQuc2Nyb2xsTGVmdChfb3B0aW9ucy5jb250YWluZXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlld3BvcnQgU2l6ZSAod2lkdGggdm9yIGhvcml6b250YWwsIGhlaWdodCBmb3IgdmVydGljYWwpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuaGVpZ2h0KF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQud2lkdGgoX29wdGlvbnMuY29udGFpbmVyKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIHNldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxUbyhuZXdGdW5jdGlvbilgXHJcblx0XHQgKiBNYWtlIGF2YWlsYWJsZSBwdWJsaWNseSBmb3IgcGlubmVkIG1vdXNld2hlZWwgd29ya2Fyb3VuZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBzZXRTY3JvbGxQb3MgPSB0aGlzLl9zZXRTY3JvbGxQb3MgPSBmdW5jdGlvbiAocG9zKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy52ZXJ0aWNhbCkge1xyXG5cdFx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKF91dGlsLmdldC5zY3JvbGxMZWZ0KCksIHBvcyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5zY3JvbGxUb3AgPSBwb3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHBvcywgX3V0aWwuZ2V0LnNjcm9sbFRvcCgpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnNjcm9sbExlZnQgPSBwb3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlIHVwZGF0ZXMgaW4gY3ljbGVzIGluc3RlYWQgb2Ygb24gc2Nyb2xsIChwZXJmb3JtYW5jZSlcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVTY2VuZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfZW5hYmxlZCAmJiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpIHtcclxuXHRcdFx0XHQvLyBkZXRlcm1pbmUgc2NlbmVzIHRvIHVwZGF0ZVxyXG5cdFx0XHRcdHZhciBzY2VuZXNUb1VwZGF0ZSA9IF91dGlsLnR5cGUuQXJyYXkoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKSA/IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA6IF9zY2VuZU9iamVjdHMuc2xpY2UoMCk7XHJcblx0XHRcdFx0Ly8gcmVzZXQgc2NlbmVzXHJcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2U7XHJcblx0XHRcdFx0dmFyIG9sZFNjcm9sbFBvcyA9IF9zY3JvbGxQb3M7XHJcblx0XHRcdFx0Ly8gdXBkYXRlIHNjcm9sbCBwb3Mgbm93IGluc3RlYWQgb2Ygb25DaGFuZ2UsIGFzIGl0IG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBzY2hlZHVsaW5nIChpLmUuIGluLWJyb3dzZXIgc21vb3RoIHNjcm9sbClcclxuXHRcdFx0XHRfc2Nyb2xsUG9zID0gQ29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdFx0XHR2YXIgZGVsdGFTY3JvbGwgPSBfc2Nyb2xsUG9zIC0gb2xkU2Nyb2xsUG9zO1xyXG5cdFx0XHRcdGlmIChkZWx0YVNjcm9sbCAhPT0gMCkgeyAvLyBzY3JvbGwgcG9zaXRpb24gY2hhbmdlZD9cclxuXHRcdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSAoZGVsdGFTY3JvbGwgPiAwKSA/IFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gcmV2ZXJzZSBvcmRlciBvZiBzY2VuZXMgaWYgc2Nyb2xsaW5nIHJldmVyc2VcclxuXHRcdFx0XHRpZiAoX3Njcm9sbERpcmVjdGlvbiA9PT0gU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFKSB7XHJcblx0XHRcdFx0XHRzY2VuZXNUb1VwZGF0ZS5yZXZlcnNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHVwZGF0ZSBzY2VuZXNcclxuXHRcdFx0XHRzY2VuZXNUb1VwZGF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIFNjZW5lIFwiICsgKGluZGV4ICsgMSkgKyBcIi9cIiArIHNjZW5lc1RvVXBkYXRlLmxlbmd0aCArIFwiIChcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xyXG5cdFx0XHRcdFx0c2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChzY2VuZXNUb1VwZGF0ZS5sZW5ndGggPT09IDAgJiYgX29wdGlvbnMubG9nbGV2ZWwgPj0gMykge1xyXG5cdFx0XHRcdFx0bG9nKDMsIFwidXBkYXRpbmcgMCBTY2VuZXMgKG5vdGhpbmcgYWRkZWQgdG8gY29udHJvbGxlcilcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5pdGlhbGl6ZXMgckFGIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZGVib3VuY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF91cGRhdGVUaW1lb3V0ID0gX3V0aWwuckFGKHVwZGF0ZVNjZW5lcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlcyBDb250YWluZXIgY2hhbmdlc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0bG9nKDMsIFwiZXZlbnQgZmlyZWQgY2F1c2luZyBhbiB1cGRhdGU6XCIsIGUudHlwZSk7XHJcblx0XHRcdGlmIChlLnR5cGUgPT0gXCJyZXNpemVcIikge1xyXG5cdFx0XHRcdC8vIHJlc2l6ZVxyXG5cdFx0XHRcdF92aWV3UG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcclxuXHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRlXHJcblx0XHRcdGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUpIHtcclxuXHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSB0cnVlO1xyXG5cdFx0XHRcdGRlYm91bmNlVXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHQvLyBzaW11bGF0ZSByZXNpemUgZXZlbnQuIE9ubHkgd29ya3MgZm9yIHZpZXdwb3J0IHJlbGV2YW50IHBhcmFtIChwZXJmb3JtYW5jZSlcclxuXHRcdFx0XHRpZiAoX3ZpZXdQb3J0U2l6ZSAhPSBnZXRWaWV3cG9ydFNpemUoKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc2l6ZUV2ZW50O1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQgPSBuZXcgRXZlbnQoJ3Jlc2l6ZScsIHtcclxuXHRcdFx0XHRcdFx0XHRidWJibGVzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gc3R1cGlkIElFXHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQuaW5pdEV2ZW50KFwicmVzaXplXCIsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChyZXNpemVFdmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF9zY2VuZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7IC8vIHJlZnJlc2ggYWxsIHNjZW5lc1xyXG5cdFx0XHRcdHNjZW5lLnJlZnJlc2goKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlbmQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICogcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxyXG5cdFx0ICogQHBhcmFtIHsuLi5taXhlZH0gb3V0cHV0IC0gT25lIG9yIG1vcmUgdmFyaWFibGVzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5sb2dsZXZlbCA+PSBsb2dsZXZlbCkge1xyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+XCIpO1xyXG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBmb3Igc2NlbmVzIHdlIGhhdmUgZ2V0dGVycyBmb3IgZWFjaCBvcHRpb24sIGJ1dCBmb3IgdGhlIGNvbnRyb2xsZXIgd2UgZG9uJ3QsIHNvIHdlIG5lZWQgdG8gbWFrZSBpdCBhdmFpbGFibGUgZXh0ZXJuYWxseSBmb3IgcGx1Z2luc1xyXG5cdFx0dGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU29ydCBzY2VuZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIHN0YXJ0IG9mZnNldC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHthcnJheX0gU2NlbmVzQXJyYXkgLSBhbiBhcnJheSBvZiBTY3JvbGxNYWdpYyBTY2VuZXMgdGhhdCBzaG91bGQgYmUgc29ydGVkXHJcblx0XHQgKiBAcmV0dXJuIHthcnJheX0gVGhlIHNvcnRlZCBhcnJheSBvZiBTY2VuZXMuXHJcblx0XHQgKi9cclxuXHRcdHZhciBzb3J0U2NlbmVzID0gZnVuY3Rpb24gKFNjZW5lc0FycmF5KSB7XHJcblx0XHRcdGlmIChTY2VuZXNBcnJheS5sZW5ndGggPD0gMSkge1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZXNBcnJheTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgc2NlbmVzID0gU2NlbmVzQXJyYXkuc2xpY2UoMCk7XHJcblx0XHRcdFx0c2NlbmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBhLnNjcm9sbE9mZnNldCgpID4gYi5zY3JvbGxPZmZzZXQoKSA/IDEgOiAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gc2NlbmVzO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIHNjZW5lKHMpIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5hZGRUbyhjb250cm9sbGVyKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gd2l0aCBhIHByZXZpb3VzbHkgZGVmaW5lZCBzY2VuZVxyXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gd2l0aCBhIG5ld2x5IGNyZWF0ZWQgc2NlbmUuXHJcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSkpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGFkZGluZyBtdWx0aXBsZSBzY2VuZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoW3NjZW5lLCBzY2VuZTIsIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSldKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IG5ld1NjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyLlxyXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuYWRkU2NlbmUgPSBmdW5jdGlvbiAobmV3U2NlbmUpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobmV3U2NlbmUpKSB7XHJcblx0XHRcdFx0bmV3U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7XHJcblx0XHRcdFx0aWYgKG5ld1NjZW5lLmNvbnRyb2xsZXIoKSAhPT0gQ29udHJvbGxlcikge1xyXG5cdFx0XHRcdFx0bmV3U2NlbmUuYWRkVG8oQ29udHJvbGxlcik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfc2NlbmVPYmplY3RzLmluZGV4T2YobmV3U2NlbmUpIDwgMCkge1xyXG5cdFx0XHRcdFx0Ly8gbmV3IHNjZW5lXHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnB1c2gobmV3U2NlbmUpOyAvLyBhZGQgdG8gYXJyYXlcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMgPSBzb3J0U2NlbmVzKF9zY2VuZU9iamVjdHMpOyAvLyBzb3J0XHJcblx0XHRcdFx0XHRuZXdTY2VuZS5vbihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiLCBmdW5jdGlvbiAoKSB7IC8vIHJlc29ydCB3aGVuZXZlciBzY2VuZSBtb3Zlc1xyXG5cdFx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gaW5zZXJ0IEdsb2JhbCBkZWZhdWx0cy5cclxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG5ld1NjZW5lW2tleV0pIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdTY2VuZVtrZXldLmNhbGwobmV3U2NlbmUsIF9vcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9uc1trZXldKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bG9nKDMsIFwiYWRkaW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIHRvdGFsKVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IGludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgZm9yICcuYWRkU2NlbmUoKSdcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBmcm9tIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5yZW1vdmUoKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmVtb3ZlIGEgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIG11bHRpcGxlIHNjZW5lcyBmcm9tIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnJlbW92ZVNjZW5lKFtzY2VuZSwgc2NlbmUyLCBzY2VuZTNdKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSkge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShTY2VuZSkpIHtcclxuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IF9zY2VuZU9iamVjdHMuaW5kZXhPZihTY2VuZSk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdFNjZW5lLm9mZihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiKTtcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdGxvZygzLCBcInJlbW92aW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIGxlZnQpXCIpO1xyXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHQgKiBVcGRhdGUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGFjY29yZGluZyB0byB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS51cGRhdGUoKWAuICBcclxuXHQgKiBUaGUgdXBkYXRlIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBzY2VuZSdzIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gKGJhc2VkIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHRyaWdnZXIgaG9vaywgZHVyYXRpb24gYW5kIG9mZnNldCkgYW5kIGNoZWNrcyBpdCBhZ2FpbnN0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0ICogSXQgdGhlbiB1cGRhdGVzIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFjY29yZGluZ2x5IChvciBkb2VzIG5vdGhpbmcsIGlmIHRoZSBzdGF0ZSBpcyBhbHJlYWR5IGNvcnJlY3QpIOKAkyBQaW5zIHdpbGwgYmUgc2V0IHRvIHRoZWlyIGNvcnJlY3QgcG9zaXRpb24gYW5kIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlaXIgY29ycmVjdCBwcm9ncmVzcy4gIFxyXG5cdCAqIF8qKk5vdGU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBDb250cm9sbGVyIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuIFx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSk7XHJcbiBcdCAqXHJcblx0ICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgaW1tZWRpYXRlbHlcclxuXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCB0cnVlKTtcclxuIFx0ICpcclxuXHQgKiAvLyB1cGRhdGUgbXVsdGlwbGUgc2NlbmVzIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKFtzY2VuZTEsIHNjZW5lMiwgc2NlbmUzXSk7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLlNjZW5lfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0aGF0IGlzL2FyZSBzdXBwb3NlZCB0byBiZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFRoaXMgaXMgdXNlZnVsIHdoZW4gY2hhbmdpbmcgbXVsdGlwbGUgcHJvcGVydGllcyBvZiB0aGUgc2NlbmUgLSB0aGlzIHdheSBpdCB3aWxsIG9ubHkgYmUgdXBkYXRlZCBvbmNlIGFsbCBuZXcgcHJvcGVydGllcyBhcmUgc2V0ICh1cGRhdGVTY2VuZXMpLlxyXG5cdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdCAqL1xyXG5cdFx0dGhpcy51cGRhdGVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSwgaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XHJcblx0XHRcdFx0U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUgJiYgU2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkgeyAvLyBpZiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgaXMgdHJ1ZSwgYWxsIGNvbm5lY3RlZCBzY2VuZXMgYXJlIGFscmVhZHkgc2NoZWR1bGVkIGZvciB1cGRhdGVcclxuXHRcdFx0XHRcdC8vIHByZXAgYXJyYXkgZm9yIG5leHQgdXBkYXRlIGN5Y2xlXHJcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgfHwgW107XHJcblx0XHRcdFx0XHRpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlLmluZGV4T2YoU2NlbmUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5wdXNoKFNjZW5lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IHNvcnRTY2VuZXMoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKTsgLy8gc29ydFxyXG5cdFx0XHRcdFx0ZGVib3VuY2VVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgY29udHJvbGxlciBwYXJhbXMgYW5kIGNhbGxzIHVwZGF0ZVNjZW5lIG9uIGV2ZXJ5IHNjZW5lLCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBTZWUgYENvbnRyb2xsZXIudXBkYXRlU2NlbmUoKWAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCB0aGlzIG1lYW5zLiAgXHJcblx0XHQgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCBuZWVkIHRoaXMgZnVuY3Rpb24sIGFzIGl0IGlzIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgc3RhdGUgY2hhbmdlIGV2ZW50LCBsaWtlIHJlc2l6ZSBvciBzY3JvbGwuICBcclxuXHRcdCAqIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB0aGlzIG1ldGhvZCBpcyB3aGVuIFNjcm9sbE1hZ2ljIGZhaWxzIHRvIGRldGVjdCB0aGVzZSBldmVudHMuICBcclxuXHRcdCAqIE9uZSBhcHBsaWNhdGlvbiBpcyB3aXRoIHNvbWUgZXh0ZXJuYWwgc2Nyb2xsIGxpYnJhcmllcyAobGlrZSBpU2Nyb2xsKSB0aGF0IG1vdmUgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGEgbmVnYXRpdmUgb2Zmc2V0IGluc3RlYWQgb2YgYWN0dWFsbHkgc2Nyb2xsaW5nLiBJbiB0aGlzIGNhc2UgdGhlIHVwZGF0ZSBvbiB0aGUgY29udHJvbGxlciBuZWVkcyB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNoaWxkIGNvbnRhaW5lcidzIHBvc2l0aW9uIGNoYW5nZXMuXHJcblx0XHQgKiBGb3IgdGhpcyBjYXNlIHRoZXJlIHdpbGwgYWxzbyBiZSB0aGUgbmVlZCB0byBwcm92aWRlIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uIFNlZSBgQ29udHJvbGxlci5zY3JvbGxQb3MoKWAgZm9yIGRldGFpbHMuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIG9uIG5leHQgY3ljbGUgKHNhdmVzIHBlcmZvcm1hbmNlIGR1ZSB0byBlbGltaW5hdGlvbiBvZiByZWR1bmRhbnQgdXBkYXRlcylcclxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIGltbWVkaWF0ZWx5XHJcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpXHJcblx0XHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0b25DaGFuZ2Uoe1xyXG5cdFx0XHRcdHR5cGU6IFwicmVzaXplXCJcclxuXHRcdFx0fSk7IC8vIHdpbGwgdXBkYXRlIHNpemUgYW5kIHNldCBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgdG8gdHJ1ZVxyXG5cdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHR1cGRhdGVTY2VuZXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY3JvbGwgdG8gYSBudW1lcmljIHNjcm9sbCBvZmZzZXQsIGEgRE9NIGVsZW1lbnQsIHRoZSBzdGFydCBvZiBhIHNjZW5lIG9yIHByb3ZpZGUgYW4gYWx0ZXJuYXRlIG1ldGhvZCBmb3Igc2Nyb2xsaW5nLiAgXHJcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCBjaGFuZ2UgdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCBjaGFuZ2UgdGhlIGxlZnQgb2Zmc2V0LlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHNjcm9sbCB0byBhbiBvZmZzZXQgb2YgMTAwXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2Nyb2xsIHRvIGEgRE9NIGVsZW1lbnRcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oXCIjYW5jaG9yXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNjcm9sbCB0byB0aGUgYmVnaW5uaW5nIG9mIGEgc2NlbmVcclxuXHRcdCAqIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7b2Zmc2V0OiAyMDB9KTtcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgcG9zaXRpb24gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uIChqUXVlcnkgYW5pbWF0ZSBpbnN0ZWFkIG9mIGp1bXApXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MpIHtcclxuXHRcdCAqXHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7IC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBpbnN0ZWFkXHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG1lc3NhZ2UpIHtcclxuXHRcdCAqICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyIHRvIHRoZSBkZWZpbmVkIGN1c3RvbSBmdW5jdGlvblxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIFwibXkgbWVzc2FnZVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIgY29udGFpbmluZyBtdWx0aXBsZSB2YXJpYWJsZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgb3B0aW9ucykge1xyXG5cdFx0ICogIHNvbWVHbG9iYWxWYXIgPSBvcHRpb25zLmEgKyBvcHRpb25zLmI7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIG9wdGlvbnNcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCB7YTogMSwgYjogMn0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhIGNhbGxiYWNrIHN1cHBsaWVkIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIGNhbGxiYWNrKSB7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30sIDQwMCwgXCJzd2luZ1wiLCBjYWxsYmFjayk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyLCB3aGljaCBpcyB1c2VkIGFzIGEgY2FsbGJhY2sgaW4gdGhlIHByZXZpb3VzbHkgZGVmaW5lZCBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgZnVuY3Rpb24oKSB7XHJcblx0XHQgKlx0Y29uc29sZS5sb2coXCJzY3JvbGwgaGFzIGZpbmlzaGVkLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IHNjcm9sbFRhcmdldCAtIFRoZSBzdXBwbGllZCBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRoZXNlIHR5cGVzOlxyXG5cdFx0ICogMS4gYG51bWJlcmAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGlzIG5ldyBzY3JvbGwgb2Zmc2V0LlxyXG5cdFx0ICogMi4gYHN0cmluZ2Agb3IgYG9iamVjdGAgLT4gQ2FuIGJlIGEgc2VsZWN0b3Igb3IgYSBET00gb2JqZWN0LiAgXHJcblx0XHQgKiAgVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBlbGVtZW50LlxyXG5cdFx0ICogMy4gYFNjcm9sbE1hZ2ljIFNjZW5lYCAtPiBUaGUgY29udGFpbmVyIHdpbGwgc2Nyb2xsIHRvIHRoZSBzdGFydCBvZiB0aGlzIHNjZW5lLlxyXG5cdFx0ICogNC4gYGZ1bmN0aW9uYCAtPiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBmb3IgZnV0dXJlIHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb25zLiAgXHJcblx0XHQgKiAgVGhpcyBwcm92aWRlcyBhIHdheSBmb3IgeW91IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mIHNjcm9sbGluZyBhbmQgYWRkaW5nIG5ldyBiZWhhdmlvdXIgbGlrZSBhbmltYXRpb24uIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBhcyBhIHBhcmFtZXRlciBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHVzaW5nIGB0aGlzYC4gIFxyXG5cdFx0ICogIEl0IG1heSBhbHNvIG9wdGlvbmFsbHkgcmVjZWl2ZSBhbiBvcHRpb25hbCBhZGRpdGlvbmFsIHBhcmFtZXRlciAoc2VlIGJlbG93KSAgXHJcblx0XHQgKiAgXyoqTk9URToqKiAgXHJcblx0XHQgKiAgQWxsIG90aGVyIG9wdGlvbnMgd2lsbCBzdGlsbCB3b3JrIGFzIGV4cGVjdGVkLCB1c2luZyB0aGUgbmV3IGZ1bmN0aW9uIHRvIHNjcm9sbC5fXHJcblx0XHQgKiBAcGFyYW0ge21peGVkfSBbYWRkaXRpb25hbFBhcmFtZXRlcl0gLSBJZiBhIGN1c3RvbSBzY3JvbGwgZnVuY3Rpb24gd2FzIGRlZmluZWQgKHNlZSBhYm92ZSA0LiksIHlvdSBtYXkgd2FudCB0byBzdXBwbHkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGl0LCB3aGVuIGNhbGxpbmcgaXQuIFlvdSBjYW4gZG8gdGhpcyB1c2luZyB0aGlzIHBhcmFtZXRlciDigJMgc2VlIGV4YW1wbGVzIGZvciBkZXRhaWxzLiBQbGVhc2Ugbm90ZSwgdGhhdCB0aGlzIHBhcmFtZXRlciB3aWxsIGhhdmUgbm8gZWZmZWN0LCBpZiB5b3UgdXNlIHRoZSBkZWZhdWx0IHNjcm9sbGluZyBmdW5jdGlvbi5cclxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zY3JvbGxUbyA9IGZ1bmN0aW9uIChzY3JvbGxUYXJnZXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXIpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHNjcm9sbFRhcmdldCkpIHsgLy8gZXhjZWN1dGVcclxuXHRcdFx0XHRzZXRTY3JvbGxQb3MuY2FsbChfb3B0aW9ucy5jb250YWluZXIsIHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsVGFyZ2V0IGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHsgLy8gc2Nyb2xsIHRvIHNjZW5lXHJcblx0XHRcdFx0aWYgKHNjcm9sbFRhcmdldC5jb250cm9sbGVyKCkgPT09IENvbnRyb2xsZXIpIHsgLy8gY2hlY2sgaWYgdGhlIGNvbnRyb2xsZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2NlbmVcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oc2Nyb2xsVGFyZ2V0LnNjcm9sbE9mZnNldCgpLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIHNjZW5lIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGNvbnRyb2xsZXIuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsVGFyZ2V0KSkgeyAvLyBhc3NpZ24gbmV3IHNjcm9sbCBmdW5jdGlvblxyXG5cdFx0XHRcdHNldFNjcm9sbFBvcyA9IHNjcm9sbFRhcmdldDtcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2Nyb2xsIHRvIGVsZW1lbnRcclxuXHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyhzY3JvbGxUYXJnZXQpWzBdO1xyXG5cdFx0XHRcdGlmIChlbGVtKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBwYXJlbnQgaXMgcGluIHNwYWNlciwgdXNlIHNwYWNlciBwb3NpdGlvbiBpbnN0ZWFkIHNvIGNvcnJlY3Qgc3RhcnQgcG9zaXRpb24gaXMgcmV0dXJuZWQgZm9yIHBpbm5lZCBlbGVtZW50cy5cclxuXHRcdFx0XHRcdHdoaWxlIChlbGVtLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xyXG5cdFx0XHRcdFx0XHRlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRwYXJhbSA9IF9vcHRpb25zLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiLCAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoX29wdGlvbnMuY29udGFpbmVyKSwgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0XHRlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChlbGVtKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIV9pc0RvY3VtZW50KSB7IC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBDb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIGFyZ3VtZW50IGlzIGludmFsaWQuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsUG9zaXRpb24gb3IgKipTZXQqKiBhIG5ldyBtZXRob2QgdG8gY2FsY3VsYXRlIGl0LiAgXHJcblx0XHQgKiAtPiAqKkdFVCoqOlxyXG5cdFx0ICogV2hlbiB1c2VkIGFzIGEgZ2V0dGVyIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLiAgXHJcblx0XHQgKiBUbyBnZXQgYSBjYWNoZWQgdmFsdWUgdXNlIENvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSwgd2hpY2ggd2lsbCBiZSB1cGRhdGVkIGluIHRoZSB1cGRhdGUgY3ljbGUuICBcclxuXHRcdCAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIHJldHVybiB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIHJldHVybiB0aGUgbGVmdCBvZmZzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogLT4gKipTRVQqKjpcclxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIHNldHRlciB0aGlzIG1ldGhvZCBwcm9kZXMgYSB3YXkgdG8gcGVybWFuZW50bHkgb3ZlcndyaXRlIHRoZSBjb250cm9sbGVyJ3Mgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uLiAgXHJcblx0XHQgKiBBIHR5cGljYWwgdXNlY2FzZSBpcyB3aGVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgbm90IHJlZmxlY3RlZCBieSB0aGUgY29udGFpbmVycyBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCB2YWx1ZXMsIGJ1dCBmb3IgZXhhbXBsZSBieSB0aGUgaW5uZXIgb2Zmc2V0IG9mIGEgY2hpbGQgY29udGFpbmVyLiAgXHJcblx0XHQgKiBNb3ZpbmcgYSBjaGlsZCBjb250YWluZXIgaW5zaWRlIGEgcGFyZW50IGlzIGEgY29tbW9ubHkgdXNlZCBtZXRob2QgZm9yIHNldmVyYWwgc2Nyb2xsaW5nIGZyYW1ld29ya3MsIGluY2x1ZGluZyBpU2Nyb2xsLiAgXHJcblx0XHQgKiBCeSBwcm92aWRpbmcgYW4gYWx0ZXJuYXRlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHlvdSBjYW4gbWFrZSBzdXJlIFNjcm9sbE1hZ2ljIHJlY2VpdmVzIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gIFxyXG5cdFx0ICogUGxlYXNlIGFsc28gYmVhciBpbiBtaW5kIHRoYXQgeW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHkgdmFsdWVzIGZvciB2ZXJ0aWNhbCBzY3JvbGxzIGFuIHggZm9yIGhvcml6b250YWxzLlxyXG5cdFx0ICpcclxuXHRcdCAqIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gcGxlYXNlIHVzZSBgQ29udHJvbGxlci5zY3JvbGxUbygpYC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBQb3NpdGlvblxyXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBtZXRob2RcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsUG9zKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAqXHRyZXR1cm4gdGhpcy5pbmZvKFwidmVydGljYWxcIikgPyAtbXljaGlsZGNvbnRhaW5lci55IDogLW15Y2hpbGRjb250YWluZXIueFxyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3Njcm9sbFBvc01ldGhvZF0gLSBUaGUgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogQHJldHVybnMgeyhudW1iZXJ8Q29udHJvbGxlcil9IEN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNjcm9sbFBvcyA9IGZ1bmN0aW9uIChzY3JvbGxQb3NNZXRob2QpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBnZXRTY3JvbGxQb3MuY2FsbChDb250cm9sbGVyKTtcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsUG9zTWV0aG9kKSkge1xyXG5cdFx0XHRcdFx0Z2V0U2Nyb2xsUG9zID0gc2Nyb2xsUG9zTWV0aG9kO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJQcm92aWRlZCB2YWx1ZSBmb3IgbWV0aG9kICdzY3JvbGxQb3MnIGlzIG5vdCBhIGZ1bmN0aW9uLiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHVzZSAnc2Nyb2xsVG8oKScuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIGFsbCBpbmZvcyBvciBvbmUgaW4gcGFydGljdWxhciBhYm91dCB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiAobnVtYmVyKVxyXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyByZXR1cm5zIGFsbCBpbmZvcyBhcyBhbiBvYmplY3RcclxuXHRcdCAqIHZhciBpbmZvcyA9IGNvbnRyb2xsZXIuaW5mbygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWJvdXRdIC0gSWYgcGFzc2VkIG9ubHkgdGhpcyBpbmZvIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwuICBcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCBWYWxpZCBvcHRpb25zIGFyZTpcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzaXplXCJgID0+IHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInZlcnRpY2FsXCJgID0+IHRydWUgaWYgdmVydGljYWwgc2Nyb2xsaW5nLCBvdGhlcndpc2UgZmFsc2VcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzY3JvbGxQb3NcImAgPT4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2Nyb2xsRGlyZWN0aW9uXCJgID0+IHRoZSBsYXN0IGtub3duIGRpcmVjdGlvbiBvZiB0aGUgc2Nyb2xsXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwiY29udGFpbmVyXCJgID0+IHRoZSBjb250YWluZXIgZWxlbWVudFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcImlzRG9jdW1lbnRcImAgPT4gdHJ1ZSBpZiBjb250YWluZXIgZWxlbWVudCBpcyB0aGUgZG9jdW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7KG1peGVkfG9iamVjdCl9IFRoZSByZXF1ZXN0ZWQgaW5mbyhzKS5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5pbmZvID0gZnVuY3Rpb24gKGFib3V0KSB7XHJcblx0XHRcdHZhciB2YWx1ZXMgPSB7XHJcblx0XHRcdFx0c2l6ZTogX3ZpZXdQb3J0U2l6ZSwgLy8gY29udGFpbnMgaGVpZ2h0IG9yIHdpZHRoIChpbiByZWdhcmQgdG8gb3JpZW50YXRpb24pO1xyXG5cdFx0XHRcdHZlcnRpY2FsOiBfb3B0aW9ucy52ZXJ0aWNhbCxcclxuXHRcdFx0XHRzY3JvbGxQb3M6IF9zY3JvbGxQb3MsXHJcblx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBfc2Nyb2xsRGlyZWN0aW9uLFxyXG5cdFx0XHRcdGNvbnRhaW5lcjogX29wdGlvbnMuY29udGFpbmVyLFxyXG5cdFx0XHRcdGlzRG9jdW1lbnQ6IF9pc0RvY3VtZW50XHJcblx0XHRcdH07XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXQgYWxsIGFzIGFuIG9iamVjdFxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XHJcblx0XHRcdH0gZWxzZSBpZiAodmFsdWVzW2Fib3V0XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlc1thYm91dF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IG9wdGlvbiBcXFwiXCIgKyBhYm91dCArIFwiXFxcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGxvZ2xldmVsID0gY29udHJvbGxlci5sb2dsZXZlbCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB2YWx1ZVxyXG5cdFx0ICogY29udHJvbGxlci5sb2dsZXZlbCgzKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld0xvZ2xldmVsXSAtIFRoZSBuZXcgbG9nbGV2ZWwgc2V0dGluZyBvZiB0aGUgQ29udHJvbGxlci4gYFswLTNdYFxyXG5cdFx0ICogQHJldHVybnMgeyhudW1iZXJ8Q29udHJvbGxlcil9IEN1cnJlbnQgbG9nbGV2ZWwgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9nbGV2ZWwgPSBmdW5jdGlvbiAobmV3TG9nbGV2ZWwpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfb3B0aW9ucy5sb2dsZXZlbDtcclxuXHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5sb2dsZXZlbCAhPSBuZXdMb2dsZXZlbCkgeyAvLyBzZXRcclxuXHRcdFx0XHRfb3B0aW9ucy5sb2dsZXZlbCA9IG5ld0xvZ2xldmVsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBlbmFibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgYWxsIFNjZW5lcyBjb25uZWN0ZWQgdG8gdGhlIGNvbnRyb2xsZXIgd2l0aG91dCBkZXN0cm95aW5nIG9yIHJlbW92aW5nIHRoZW0uXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGVuYWJsZWQgPSBjb250cm9sbGVyLmVuYWJsZWQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkaXNhYmxlIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLmVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlciBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqIEByZXR1cm5zIHsoYm9vbGVhbnxDb250cm9sbGVyKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcclxuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcclxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhbmV3U3RhdGU7XHJcblx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShfc2NlbmVPYmplY3RzLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXN0cm95IHRoZSBDb250cm9sbGVyLCBhbGwgU2NlbmVzIGFuZCBldmVyeXRoaW5nLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB3aXRob3V0IHJlc2V0dGluZyB0aGUgc2NlbmVzXHJcblx0XHQgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gd2l0aCBzY2VuZSByZXNldFxyXG5cdFx0ICogY29udHJvbGxlciA9IGNvbnRyb2xsZXIuZGVzdHJveSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldFNjZW5lcz1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHBpbnMgYW5kIHR3ZWVucyAoaWYgZXhpc3RlbnQpIG9mIGFsbCBzY2VuZXMgd2lsbCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXRTY2VuZXMpIHtcclxuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChfcmVmcmVzaFRpbWVvdXQpO1xyXG5cdFx0XHR2YXIgaSA9IF9zY2VuZU9iamVjdHMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0X3NjZW5lT2JqZWN0c1tpXS5kZXN0cm95KHJlc2V0U2NlbmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcclxuXHRcdFx0X3V0aWwuY0FGKF91cGRhdGVUaW1lb3V0KTtcclxuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldFNjZW5lcyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIElOSVRcclxuXHRcdGNvbnN0cnVjdCgpO1xyXG5cdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0fTtcclxuXHJcblx0Ly8gc3RvcmUgcGFnZXdpZGUgY29udHJvbGxlciBvcHRpb25zXHJcblx0dmFyIENPTlRST0xMRVJfT1BUSU9OUyA9IHtcclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdGNvbnRhaW5lcjogd2luZG93LFxyXG5cdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdFx0Z2xvYmFsU2NlbmVPcHRpb25zOiB7fSxcclxuXHRcdFx0bG9nbGV2ZWw6IDIsXHJcblx0XHRcdHJlZnJlc2hJbnRlcnZhbDogMTAwXHJcblx0XHR9XHJcblx0fTtcclxuXHQvKlxyXG5cdCAqIG1ldGhvZCB1c2VkIHRvIGFkZCBhbiBvcHRpb24gdG8gU2Nyb2xsTWFnaWMgU2NlbmVzLlxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuYWRkT3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdFx0Q09OVFJPTExFUl9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG5cdH07XHJcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XHJcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b2xkQ2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxyXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuXHRcdH07XHJcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuQ29udHJvbGxlciwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JvbGxNYWdpYy5Db250cm9sbGVyOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgU2NlbmUgZGVmaW5lcyB3aGVyZSB0aGUgY29udHJvbGxlciBzaG91bGQgcmVhY3QgYW5kIGhvdy5cclxuXHQgKlxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBjcmVhdGUgYSBzdGFuZGFyZCBzY2VuZSBhbmQgYWRkIGl0IHRvIGEgY29udHJvbGxlclxyXG5cdCAqIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXHJcblx0ICpcdFx0LmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cdCAqXHJcblx0ICogLy8gY3JlYXRlIGEgc2NlbmUgd2l0aCBjdXN0b20gb3B0aW9ucyBhbmQgYXNzaWduIGEgaGFuZGxlciB0byBpdC5cclxuXHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdCAqIFx0XHRkdXJhdGlvbjogMTAwLFxyXG5cdCAqXHRcdG9mZnNldDogMjAwLFxyXG5cdCAqXHRcdHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcclxuXHQgKlx0XHRyZXZlcnNlOiBmYWxzZVxyXG5cdCAqIH0pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgZm9yIHRoZSBTY2VuZS4gVGhlIG9wdGlvbnMgY2FuIGJlIHVwZGF0ZWQgYXQgYW55IHRpbWUuICBcclxuXHQgXHRcdFx0XHRcdFx0XHQgICBJbnN0ZWFkIG9mIHNldHRpbmcgdGhlIG9wdGlvbnMgZm9yIGVhY2ggc2NlbmUgaW5kaXZpZHVhbGx5IHlvdSBjYW4gYWxzbyBzZXQgdGhlbSBnbG9iYWxseSBpbiB0aGUgY29udHJvbGxlciBhcyB0aGUgY29udHJvbGxlcnMgYGdsb2JhbFNjZW5lT3B0aW9uc2Agb3B0aW9uLiBUaGUgb2JqZWN0IGFjY2VwdHMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgb25lcyBiZWxvdy4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdCAgIFdoZW4gYSBzY2VuZSBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB0aGUgb3B0aW9ucyBkZWZpbmVkIHVzaW5nIHRoZSBTY2VuZSBjb25zdHJ1Y3RvciB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHRob3NlIHNldCBpbiBgZ2xvYmFsU2NlbmVPcHRpb25zYC5cclxuXHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKX0gW29wdGlvbnMuZHVyYXRpb249MF0gLSBUaGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLiBcclxuXHQgXHRcdFx0XHRcdFBsZWFzZSBzZWUgYFNjZW5lLmR1cmF0aW9uKClgIGZvciBkZXRhaWxzLlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5vZmZzZXQ9MF0gLSBPZmZzZXQgVmFsdWUgZm9yIHRoZSBUcmlnZ2VyIFBvc2l0aW9uLiBJZiBubyB0cmlnZ2VyRWxlbWVudCBpcyBkZWZpbmVkIHRoaXMgd2lsbCBiZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBwYWdlLCBhZnRlciB3aGljaCB0aGUgc2NlbmUgd2lsbCBzdGFydC5cclxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMudHJpZ2dlckVsZW1lbnQ9bnVsbF0gLSBTZWxlY3RvciBvciBET00gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHNjZW5lLiBJZiB1bmRlZmluZWQgdGhlIHNjZW5lIHdpbGwgc3RhcnQgcmlnaHQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYWdlICh1bmxlc3MgYW4gb2Zmc2V0IGlzIHNldCkuXHJcblx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IFtvcHRpb25zLnRyaWdnZXJIb29rPVwib25DZW50ZXJcIl0gLSBDYW4gYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGRlZmluaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlciBIb29rIGluIHJlbGF0aW9uIHRvIHRoZSB2aWV3cG9ydC4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIENhbiBhbHNvIGJlIGRlZmluZWQgdXNpbmcgYSBzdHJpbmc6XHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25FbnRlclwiYCA9PiBgMWBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkNlbnRlclwiYCA9PiBgMC41YFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uTGVhdmVcImAgPT4gYDBgXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnNlPXRydWVdIC0gU2hvdWxkIHRoZSBzY2VuZSByZXZlcnNlLCB3aGVuIHNjcm9sbGluZyB1cD9cclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubG9nbGV2ZWw9Ml0gLSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAwYCA9PiBzaWxlbnRcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAxYCA9PiBlcnJvcnNcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXHJcblx0ICogXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBzZXR0aW5nc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5TY2VuZScsXHJcblx0XHRcdFNDRU5FX1NUQVRFX0JFRk9SRSA9ICdCRUZPUkUnLFxyXG5cdFx0XHRTQ0VORV9TVEFURV9EVVJJTkcgPSAnRFVSSU5HJyxcclxuXHRcdFx0U0NFTkVfU1RBVEVfQUZURVIgPSAnQUZURVInLFxyXG5cdFx0XHRERUZBVUxUX09QVElPTlMgPSBTQ0VORV9PUFRJT05TLmRlZmF1bHRzO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBwcml2YXRlIHZhcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRTY2VuZSA9IHRoaXMsXHJcblx0XHRcdF9vcHRpb25zID0gX3V0aWwuZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpLFxyXG5cdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9CRUZPUkUsXHJcblx0XHRcdF9wcm9ncmVzcyA9IDAsXHJcblx0XHRcdF9zY3JvbGxPZmZzZXQgPSB7XHJcblx0XHRcdFx0c3RhcnQ6IDAsXHJcblx0XHRcdFx0ZW5kOiAwXHJcblx0XHRcdH0sIC8vIHJlZmxlY3RzIHRoZSBjb250cm9sbGVycydzIHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lIHJlc3BlY3RpdmVseVxyXG5cdFx0XHRfdHJpZ2dlclBvcyA9IDAsXHJcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcclxuXHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kLFxyXG5cdFx0XHRfY29udHJvbGxlcjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEludGVybmFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBTY3JvbGxNYWdpYyBTY2VuZVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zKSB7IC8vIGNoZWNrIHN1cHBsaWVkIG9wdGlvbnNcclxuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBVbmtub3duIG9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XHJcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gYWRkIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIHBvc3NpYmxlIG9wdGlvbnNcclxuXHRcdFx0Zm9yICh2YXIgb3B0aW9uTmFtZSBpbiBERUZBVUxUX09QVElPTlMpIHtcclxuXHRcdFx0XHRhZGRTY2VuZU9wdGlvbihvcHRpb25OYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB2YWxpZGF0ZSBhbGwgb3B0aW9uc1xyXG5cdFx0XHR2YWxpZGF0ZU9wdGlvbigpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRXZlbnQgTWFuYWdlbWVudFxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyIF9saXN0ZW5lcnMgPSB7fTtcclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgc3RhcnQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZ29pbmcgb3ZlciB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgdG8gaGFwcGVuIG9ubHkgd2hlbiBzY3JvbGxpbmcgZG93bi9yaWdodCwgdXNlIHRoZSBzY3JvbGxEaXJlY3Rpb24gcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhcnRcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgc3RhcnQgcG9pbnQgb2Ygc2NlbmUuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgIG9yIGBcIkRVUklOR1wiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGVuZCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjcm9sbCBwb3NpdGlvbiBpdHMgdGhlIGVuZGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZnJvbSBhZnRlciB0aGUgc2NlbmUgYW5kIGdvaW5nIG92ZXIgaXRzIGVuZCBwb3NpdGlvbi4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2VuZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgZW5kIHBvaW50IG9mIHNjZW5lLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGVudGVyIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUgZW50ZXJzIHRoZSBcIkRVUklOR1wiIHN0YXRlLiAgXHJcblx0XHQgKiBLZWVwIGluIG1pbmQgdGhhdCBpdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2NlbmUgcGxheXMgZm9yd2FyZCBvciBiYWNrd2FyZDogVGhpcyBldmVudCBhbHdheXMgZmlyZXMgd2hlbiB0aGUgc2NlbmUgZW50ZXJzIGl0cyBhY3RpdmUgc2Nyb2xsIHRpbWVmcmFtZSwgcmVnYXJkbGVzcyBvZiB0aGUgc2Nyb2xsLWRpcmVjdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbnRlclxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIGVudGVyZWQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgLSBhbHdheXMgYFwiRFVSSU5HXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgbGVhdmUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSdzIHN0YXRlIGdvZXMgZnJvbSBcIkRVUklOR1wiIHRvIGVpdGhlciBcIkJFRk9SRVwiIG9yIFwiQUZURVJcIi4gIFxyXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGxlYXZlcyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjbGVhdmVcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBsZWZ0LlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHVwZGF0ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGlzIHVwZGF0ZWQgKGJ1dCBub3QgbmVjZXNzYXJpbHkgY2hhbmdlcyB0aGUgcHJvZ3Jlc3MpLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgdXBkYXRlZC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc3RhcnRQb3MgLSBUaGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuZW5kUG9zIC0gVGhlIGVuZGluZyBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluIHJlbGF0aW9uIHRvIHRoZSBjb25haW5lcilcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5zY3JvbGxQb3MgLSBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lclxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHByb2dyZXNzIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lIGNoYW5nZXMuXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3NcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBwcm9ncmVzcyBjaGFuZ2VkIHRvIFwiICsgZXZlbnQucHJvZ3Jlc3MpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBjaGFuZ2UgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW52ZXZlciBhIHByb3BlcnR5IG9mIHRoZSBzY2VuZSBpcyBjaGFuZ2VkLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNjaGFuZ2VcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgUHJvcGVydHkgXFxcIlwiICsgZXZlbnQud2hhdCArIFwiXFxcIiBjaGFuZ2VkIHRvIFwiICsgZXZlbnQubmV3dmFsKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC53aGF0IC0gSW5kaWNhdGVzIHdoYXQgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG5cdFx0ICogQHByb3BlcnR5IHttaXhlZH0gZXZlbnQubmV3dmFsIC0gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2hhbmdlZCBwcm9wZXJ0eVxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHNoaWZ0IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHN0YXJ0IG9yIGVuZCAqKnNjcm9sbCBvZmZzZXQqKiBvZiB0aGUgc2NlbmUgY2hhbmdlLlxyXG5cdFx0ICogVGhpcyBoYXBwZW5zIGV4cGxpY2l0ZWx5LCB3aGVuIG9uZSBvZiB0aGVzZSB2YWx1ZXMgY2hhbmdlOiBgb2Zmc2V0YCwgYGR1cmF0aW9uYCBvciBgdHJpZ2dlckhvb2tgLlxyXG5cdFx0ICogSXQgd2lsbCBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgYHRyaWdnZXJFbGVtZW50YCBjaGFuZ2VzLCBpZiB0aGUgbmV3IGVsZW1lbnQgaGFzIGEgZGlmZmVyZW50IHBvc2l0aW9uIChtb3N0IGNhc2VzKS5cclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGNoYW5nZXMgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGBvbkxlYXZlYC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc2hpZnRcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInNoaWZ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIG1vdmVkLCBiZWNhdXNlIHRoZSBcIiArIGV2ZW50LnJlYXNvbiArIFwiIGhhcyBjaGFuZ2VkLilcIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQucmVhc29uIC0gSW5kaWNhdGVzIHdoeSB0aGUgc2NlbmUgaGFzIHNoaWZ0ZWRcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBkZXN0cm95IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHNjZW5lIGlzIGRlc3Ryb3llZC5cclxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdGlkeSB1cCBjdXN0b20gYmVoYXZpb3VyIHVzZWQgaW4gZXZlbnRzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqICAgICAgICAvLyBhZGQgY3VzdG9tIGFjdGlvblxyXG5cdFx0ICogICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMjAwXCIpO1xyXG5cdFx0ICogICAgICB9KVxyXG5cdFx0ICogICAgICAub24oXCJkZXN0cm95XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogICAgICAgIC8vIHJlc2V0IG15IGVsZW1lbnQgdG8gc3RhcnQgcG9zaXRpb25cclxuXHRcdCAqICAgICAgICBpZiAoZXZlbnQucmVzZXQpIHtcclxuXHRcdCAqICAgICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMFwiKTtcclxuXHRcdCAqICAgICAgICB9XHJcblx0XHQgKiAgICAgIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQucmVzZXQgLSBJbmRpY2F0ZXMgaWYgdGhlIGRlc3Ryb3kgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCByZXNldCBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBhZGQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkXHJcblx0XHQgKiBAc2luY2UgMi4wLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJhZGRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgYWRkZWQgdG8gYSBuZXcgY29udHJvbGxlci4nKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQuY29udHJvbGxlciAtIFRoZSBjb250cm9sbGVyIG9iamVjdCB0aGUgc2NlbmUgd2FzIGFkZGVkIHRvLlxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHJlbW92ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbiB0aGUgc2NlbmUgaXMgcmVtb3ZlZCBmcm9tIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlXHJcblx0XHQgKiBAc2luY2UgMi4wLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJyZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgcmVtb3ZlZCBmcm9tIGl0cyBjb250cm9sbGVyLicpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIGV2ZW50IGxpc3RlbmVyLiAgXHJcblx0XHQgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCBhdCB0aGUgcmVzcGVjdGl2ZSBldmVudCwgYW5kIGFuIG9iamVjdCBjb250YWluaW5nIHJlbGV2YW50IGRhdGEgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvblxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogLy8gYWRkIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlIHByb2dyZXNzIHN0YXJ0IGVuZCBlbnRlciBsZWF2ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoZSBjYWxsYmFjayBzaG91bGQgYmUgYXR0YWNoZWQgdG8uXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQsIHdoZW4gdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQuIEFuIGV2ZW50IG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm9uID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihjYWxsYmFjaykpIHtcclxuXHRcdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRcdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxuYW1lKSB7XHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV07XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRuYW1lICE9IFwiKlwiKSB7IC8vIGRpc2FsbG93IHdpbGRjYXJkc1xyXG5cdFx0XHRcdFx0XHRpZiAoIV9saXN0ZW5lcnNbZXZlbnRuYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXS5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSB8fCAnJyxcclxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1Igd2hlbiBjYWxsaW5nICcub24oKSc6IFN1cHBsaWVkIGNhbGxiYWNrIGZvciAnXCIgKyBuYW1lcyArIFwiJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbiFcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBvbmUgb3IgbW9yZSBldmVudCBsaXN0ZW5lci5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb2ZmXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIGZ1bmN0aW9uIGNhbGxiYWNrIChldmVudCkge1xyXG5cdFx0ICogXHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgZmlyZWQhIChcIiArIGV2ZW50LnR5cGUgKyBcIilcIik7XHJcblx0XHQgKiB9XHJcblx0XHQgKiAvLyBhZGQgbGlzdGVuZXJzXHJcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICogLy8gcmVtb3ZlIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub2ZmKFwiY2hhbmdlIHVwZGF0ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLiBJZiBub25lIGlzIHBhc3NlZCBhbGwgY2FsbGJhY2tzIHRvIHRoZSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm9mZiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKCFuYW1lcykge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSwga2V5KSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxyXG5cdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdIHx8ICcnLFxyXG5cdFx0XHRcdFx0cmVtb3ZlTGlzdCA9IGV2ZW50bmFtZSA9PT0gJyonID8gT2JqZWN0LmtleXMoX2xpc3RlbmVycykgOiBbZXZlbnRuYW1lXTtcclxuXHRcdFx0XHRyZW1vdmVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkge1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdGxpc3QgPSBfbGlzdGVuZXJzW3JlbW92ZV0gfHwgW10sXHJcblx0XHRcdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxpc3RlbmVyID0gbGlzdFtpXTtcclxuXHRcdFx0XHRcdFx0aWYgKGxpc3RlbmVyICYmIChuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09ICcqJykgJiYgKCFjYWxsYmFjayB8fCBjYWxsYmFjayA9PSBsaXN0ZW5lci5jYWxsYmFjaykpIHtcclxuXHRcdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCFsaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgX2xpc3RlbmVyc1tyZW1vdmVdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyaWdnZXIgYW4gZXZlbnQuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogdGhpcy50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFycykge1xyXG5cdFx0XHRpZiAobmFtZSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0bmFtZXBhcnRzID0gbmFtZS50cmltKCkuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSxcclxuXHRcdFx0XHRcdGxpc3RlbmVycyA9IF9saXN0ZW5lcnNbZXZlbnRuYW1lXTtcclxuXHRcdFx0XHRsb2coMywgJ2V2ZW50IGZpcmVkOicsIGV2ZW50bmFtZSwgdmFycyA/IFwiLT5cIiA6ICcnLCB2YXJzIHx8ICcnKTtcclxuXHRcdFx0XHRpZiAobGlzdGVuZXJzKSB7XHJcblx0XHRcdFx0XHRsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIsIGtleSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSkge1xyXG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwoU2NlbmUsIG5ldyBTY3JvbGxNYWdpYy5FdmVudChldmVudG5hbWUsIGxpc3RlbmVyLm5hbWVzcGFjZSwgU2NlbmUsIHZhcnMpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwiY2hhbmdlLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0aWYgKGUud2hhdCAhPT0gXCJsb2dsZXZlbFwiICYmIGUud2hhdCAhPT0gXCJ0d2VlbkNoYW5nZXNcIikgeyAvLyBubyBuZWVkIGZvciBhIHNjZW5lIHVwZGF0ZSBzY2VuZSB3aXRoIHRoZXNlIG9wdGlvbnMuLi5cclxuXHRcdFx0XHRcdGlmIChlLndoYXQgPT09IFwidHJpZ2dlckVsZW1lbnRcIikge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGUud2hhdCA9PT0gXCJyZXZlcnNlXCIpIHsgLy8gdGhlIG9ubHkgcHJvcGVydHkgbGVmdCB0aGF0IG1heSBoYXZlIGFuIGltcGFjdCBvbiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZS4gRXZlcnl0aGluZyBlbHNlIGlzIGhhbmRsZWQgYnkgdGhlIHNoaWZ0IGV2ZW50LlxyXG5cdFx0XHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlU2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKCk7IC8vIHVwZGF0ZSBzY2VuZSB0byByZWZsZWN0IG5ldyBwb3NpdGlvblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlbmQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIGJ1dCBwcm92aWRlZCBwdWJsaWNseSB3aXRoIF9sb2cgZm9yIHBsdWdpbnNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cclxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKi9cclxuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPlwiKTtcclxuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIHRoZSBzY2VuZSB0byBhIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpYC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkVG9cclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gYWRkIGEgc2NlbmUgdG8gYSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcblx0XHQgKiBzY2VuZS5hZGRUbyhjb250cm9sbGVyKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciB0byB3aGljaCB0aGUgc2NlbmUgc2hvdWxkIGJlIGFkZGVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5hZGRUbyA9IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XHJcblx0XHRcdGlmICghKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5Db250cm9sbGVyKSkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBzdXBwbGllZCBhcmd1bWVudCBvZiAnYWRkVG8oKScgaXMgbm90IGEgdmFsaWQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclwiKTtcclxuXHRcdFx0fSBlbHNlIGlmIChfY29udHJvbGxlciAhPSBjb250cm9sbGVyKSB7XHJcblx0XHRcdFx0Ly8gbmV3IGNvbnRyb2xsZXJcclxuXHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHsgLy8gd2FzIGFzc29jaWF0ZWQgdG8gYSBkaWZmZXJlbnQgY29udHJvbGxlciBiZWZvcmUsIHNvIHJlbW92ZSBpdC4uLlxyXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIucmVtb3ZlU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcclxuXHRcdFx0XHR1cGRhdGVEdXJhdGlvbih0cnVlKTtcclxuXHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKHRydWUpO1xyXG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xyXG5cdFx0XHRcdGNvbnRyb2xsZXIuYWRkU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJhZGRcIiwge1xyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogX2NvbnRyb2xsZXJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRsb2coMywgXCJhZGRlZCBcIiArIE5BTUVTUEFDRSArIFwiIHRvIGNvbnRyb2xsZXJcIik7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBlbmFibGVkIHN0YXRlIG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNhYmxlIHRoaXMgc2NlbmUgd2l0aG91dCByZW1vdmluZyBvciBkZXN0cm95aW5nIGl0LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNlbmFibGVkXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGVuYWJsZWQgPSBzY2VuZS5lbmFibGVkKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgc2NlbmVcclxuXHRcdCAqIHNjZW5lLmVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKiBAcmV0dXJucyB7KGJvb2xlYW58U2NlbmUpfSBDdXJyZW50IGVuYWJsZWQgc3RhdGUgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZW5hYmxlZCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9lbmFibGVkO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF9lbmFibGVkICE9IG5ld1N0YXRlKSB7IC8vIHNldFxyXG5cdFx0XHRcdF9lbmFibGVkID0gISFuZXdTdGF0ZTtcclxuXHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSlgLlxyXG5cdFx0ICogVGhlIHNjZW5lIHdpbGwgbm90IGJlIHVwZGF0ZWQgYW55bW9yZSB1bnRpbCB5b3UgcmVhZGQgaXQgdG8gYSBjb250cm9sbGVyLlxyXG5cdFx0ICogVG8gcmVtb3ZlIHRoZSBwaW4gb3IgdGhlIHR3ZWVuIHlvdSBuZWVkIHRvIGNhbGwgcmVtb3ZlVHdlZW4oKSBvciByZW1vdmVQaW4oKSByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgc2NlbmUgZnJvbSBpdHMgY29udHJvbGxlclxyXG5cdFx0ICogc2NlbmUucmVtb3ZlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xyXG5cdFx0XHRcdHZhciB0bXBQYXJlbnQgPSBfY29udHJvbGxlcjtcclxuXHRcdFx0XHRfY29udHJvbGxlciA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHR0bXBQYXJlbnQucmVtb3ZlU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJyZW1vdmVcIik7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBcIiArIE5BTUVTUEFDRSArIFwiIGZyb20gY29udHJvbGxlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVzdHJveSB0aGUgc2NlbmUgYW5kIGV2ZXJ5dGhpbmcuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2Rlc3Ryb3lcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBkZXN0cm95IHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyB0aGUgcGluIGFuZCB0d2VlbiB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xyXG5cdFx0ICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gYW5kIHR3ZWVuXHJcblx0XHQgKiBzY2VuZSA9IHNjZW5lLmRlc3Ryb3kodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW4gYW5kIHR3ZWVuIChpZiBleGlzdGVudCkgd2lsbCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXQpIHtcclxuXHRcdFx0U2NlbmUudHJpZ2dlcihcImRlc3Ryb3lcIiwge1xyXG5cdFx0XHRcdHJlc2V0OiByZXNldFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0U2NlbmUucmVtb3ZlKCk7XHJcblx0XHRcdFNjZW5lLm9mZihcIiouKlwiKTtcclxuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIFNjZW5lIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIGltbWVkaWF0ZWx5KWAuICBcclxuXHRcdCAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHRcdCAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuXHJcblx0XHQgKiBUaGlzIG1lYW5zIGFuIHVwZGF0ZSBkb2Vzbid0IG5lY2Vzc2FyaWx5IHJlc3VsdCBpbiBhIHByb2dyZXNzIGNoYW5nZS4gVGhlIGBwcm9ncmVzc2AgZXZlbnQgd2lsbCBiZSBmaXJlZCBpZiB0aGUgcHJvZ3Jlc3MgaGFzIGluZGVlZCBjaGFuZ2VkIGJldHdlZW4gdGhpcyB1cGRhdGUgYW5kIHRoZSBsYXN0LiAgXHJcblx0XHQgKiBfKipOT1RFOioqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGNvbnN0YW50bHkgd2hlbmV2ZXIgU2Nyb2xsTWFnaWMgZGV0ZWN0cyBhIGNoYW5nZS4gVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHlvdSBpcyBpZiB5b3UgY2hhbmdlIHNvbWV0aGluZyBvdXRzaWRlIG9mIHRoZSByZWFsbSBvZiBTY3JvbGxNYWdpYywgbGlrZSBtb3ZpbmcgdGhlIHRyaWdnZXIgb3IgY2hhbmdpbmcgdHdlZW4gcGFyYW1ldGVycy5fXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgb24gbmV4dCB0aWNrXHJcblx0XHQgKiBzY2VuZS51cGRhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIHNjZW5lIGltbWVkaWF0ZWx5XHJcblx0XHQgKiBzY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIFNjZW5lLnVwZGF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUgKGJldHRlciBwZXJmb3JtYW5jZSkuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHRcdGlmIChfY29udHJvbGxlci5lbmFibGVkKCkgJiYgX2VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zID0gX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSxcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcztcclxuXHJcblx0XHRcdFx0XHRcdGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IChzY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KSAvIChfc2Nyb2xsT2Zmc2V0LmVuZCAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzID0gc2Nyb2xsUG9zID49IF9zY3JvbGxPZmZzZXQuc3RhcnQgPyAxIDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInVwZGF0ZVwiLCB7XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRQb3M6IF9zY3JvbGxPZmZzZXQuc3RhcnQsXHJcblx0XHRcdFx0XHRcdFx0ZW5kUG9zOiBfc2Nyb2xsT2Zmc2V0LmVuZCxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3M6IHNjcm9sbFBvc1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFNjZW5lLnByb2dyZXNzKG5ld1Byb2dyZXNzKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSh0cnVlKTsgLy8gdW5waW4gaW4gcG9zaXRpb25cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIudXBkYXRlU2NlbmUoU2NlbmUsIGZhbHNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgZHluYW1pYyBzY2VuZSB2YXJpYWJsZXMgbGlrZSB0aGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIG9yIHRoZSBkdXJhdGlvbi5cclxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIuIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gb3B0aW9uIGByZWZyZXNoSW50ZXJ2YWxgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBZb3UgY2FuIGNhbGwgaXQgdG8gbWluaW1pemUgbGFnLCBmb3IgZXhhbXBsZSB3aGVuIHlvdSBpbnRlbnRpb25hbGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50LlxyXG5cdFx0ICogSWYgeW91IGRvbid0IGl0IHdpbGwgc2ltcGx5IGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgcmVmcmVzaCBpbnRlcnZhbCBvZiB0aGUgY29udGFpbmVyLCB3aGljaCBpcyB1c3VhbGx5IHN1ZmZpY2llbnQuXHJcblx0XHQgKlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZWZyZXNoXHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7dHJpZ2dlckVsZW1lbnQ6IFwiI3RyaWdnZXJcIn0pO1xyXG5cdFx0ICogXHJcblx0XHQgKiAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyXHJcblx0XHQgKiAkKFwiI3RyaWdnZXJcIikuY3NzKFwidG9wXCIsIDUwMCk7XHJcblx0XHQgKiAvLyBpbW1lZGlhdGVseSBsZXQgdGhlIHNjZW5lIGtub3cgb2YgdGhpcyBjaGFuZ2VcclxuXHRcdCAqIHNjZW5lLnJlZnJlc2goKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dXBkYXRlRHVyYXRpb24oKTtcclxuXHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xyXG5cdFx0XHQvLyB1cGRhdGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uXHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHNjZW5lJ3MgcHJvZ3Jlc3MuICBcclxuXHRcdCAqIFVzdWFsbHkgaXQgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSB0byB1c2UgdGhpcyBhcyBhIHNldHRlciwgYXMgaXQgaXMgc2V0IGF1dG9tYXRpY2FsbHkgYnkgc2NlbmUudXBkYXRlKCkuICBcclxuXHRcdCAqIFRoZSBvcmRlciBpbiB3aGljaCB0aGUgZXZlbnRzIGFyZSBmaXJlZCBkZXBlbmRzIG9uIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmU6XHJcblx0XHQgKiAgMS4gU2NlbmVzIHdpdGggYGR1cmF0aW9uID09IDBgOiAgXHJcblx0XHQgKiAgU2NlbmVzIHRoYXQgaGF2ZSBubyBkdXJhdGlvbiBieSBkZWZpbml0aW9uIGhhdmUgbm8gZW5kaW5nLiBUaHVzIHRoZSBgZW5kYCBldmVudCB3aWxsIG5ldmVyIGJlIGZpcmVkLiAgXHJcblx0XHQgKiAgV2hlbiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXMgcGFzc2VkIHRoZSBldmVudHMgYXJlIGFsd2F5cyBmaXJlZCBpbiB0aGlzIG9yZGVyOiAgXHJcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCB3aGVuIHNjcm9sbGluZyBmb3J3YXJkICBcclxuXHRcdCAqICBhbmQgIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgd2hlbiBzY3JvbGxpbmcgaW4gcmV2ZXJzZVxyXG5cdFx0ICogIDIuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA+IDBgOiAgXHJcblx0XHQgKiAgU2NlbmVzIHdpdGggYSBzZXQgZHVyYXRpb24gaGF2ZSBhIGRlZmluZWQgc3RhcnQgYW5kIGVuZCBwb2ludC4gIFxyXG5cdFx0ICogIFdoZW4gc2Nyb2xsaW5nIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzIGluIHRoaXMgb3JkZXI6ICBcclxuXHRcdCAqICBgZW50ZXJgLCBgc3RhcnRgLCBgcHJvZ3Jlc3NgICBcclxuXHRcdCAqICBXaGVuIGNvbnRpbnVpbmcgdG8gc2Nyb2xsIGFuZCBwYXNzaW5nIHRoZSBlbmQgcG9pbnQgaXQgd2lsbCBmaXJlIHRoZXNlIGV2ZW50czogIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBlbmRgLCBgbGVhdmVgICBcclxuXHRcdCAqICBXaGVuIHJldmVyc2luZyB0aHJvdWdoIHRoZSBlbmQgcG9pbnQgdGhlc2UgZXZlbnRzIGFyZSBmaXJlZDogIFxyXG5cdFx0ICogIGBlbnRlcmAsIGBlbmRgLCBgcHJvZ3Jlc3NgICBcclxuXHRcdCAqICBBbmQgd2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBpbiByZXZlcnNlIGl0IHdpbGwgZmlyZTogIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgIFxyXG5cdFx0ICogIEluIGJldHdlZW4gc3RhcnQgYW5kIGVuZCB0aGUgYHByb2dyZXNzYCBldmVudCB3aWxsIGJlIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciB0aGUgcHJvZ3Jlc3MgY2hhbmdlcy5cclxuXHRcdCAqIFxyXG5cdFx0ICogSW4gc2hvcnQ6ICBcclxuXHRcdCAqIGBlbnRlcmAgZXZlbnRzIHdpbGwgYWx3YXlzIHRyaWdnZXIgKipiZWZvcmUqKiB0aGUgcHJvZ3Jlc3MgdXBkYXRlIGFuZCBgbGVhdmVgIGVudmVudHMgd2lsbCB0cmlnZ2VyICoqYWZ0ZXIqKiB0aGUgcHJvZ3Jlc3MgdXBkYXRlLiAgXHJcblx0XHQgKiBgc3RhcnRgIGFuZCBgZW5kYCB3aWxsIGFsd2F5cyB0cmlnZ2VyIGF0IHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb24uXHJcblx0XHQgKiBcclxuXHRcdCAqIFBsZWFzZSByZXZpZXcgdGhlIGV2ZW50IGRlc2NyaXB0aW9ucyBmb3IgZGV0YWlscyBvbiB0aGUgZXZlbnRzIGFuZCB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIFxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNwcm9ncmVzc1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY2VuZSBwcm9ncmVzc1xyXG5cdFx0ICogdmFyIHByb2dyZXNzID0gc2NlbmUucHJvZ3Jlc3MoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgbmV3IHNjZW5lIHByb2dyZXNzXHJcblx0XHQgKiBzY2VuZS5wcm9ncmVzcygwLjMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW50ZXJ9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnN0YXJ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5wcm9ncmVzc30sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW5kfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5sZWF2ZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW3Byb2dyZXNzXSAtIFRoZSBuZXcgcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIHNjZW5lIGBbMC0xXWAuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIHByb2dyZXNzLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9wcm9ncmVzcztcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0b2xkU3RhdGUgPSBfc3RhdGUsXHJcblx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSBfY29udHJvbGxlciA/IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxEaXJlY3Rpb25cIikgOiAnUEFVU0VEJyxcclxuXHRcdFx0XHRcdHJldmVyc2VPckZvcndhcmQgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IHByb2dyZXNzID49IF9wcm9ncmVzcztcclxuXHRcdFx0XHRpZiAoX29wdGlvbnMuZHVyYXRpb24gPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIHplcm8gZHVyYXRpb24gc2NlbmVzXHJcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IF9wcm9ncmVzcyAhPSBwcm9ncmVzcztcclxuXHRcdFx0XHRcdF9wcm9ncmVzcyA9IHByb2dyZXNzIDwgMSAmJiByZXZlcnNlT3JGb3J3YXJkID8gMCA6IDE7XHJcblx0XHRcdFx0XHRfc3RhdGUgPSBfcHJvZ3Jlc3MgPT09IDAgPyBTQ0VORV9TVEFURV9CRUZPUkUgOiBTQ0VORV9TVEFURV9EVVJJTkc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHNjZW5lcyB3aXRoIHN0YXJ0IGFuZCBlbmRcclxuXHRcdFx0XHRcdGlmIChwcm9ncmVzcyA8IDAgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xyXG5cdFx0XHRcdFx0XHQvLyBnbyBiYWNrIHRvIGluaXRpYWwgc3RhdGVcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMDtcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFO1xyXG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPCAxICYmIHJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0RVUklORztcclxuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQUZURVIpIHtcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMTtcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQUZURVI7XHJcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIXJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTsgLy8gaW4gY2FzZSB3ZSBzY3JvbGxlZCBiYWNrd2FyZHMgbWlkLXNjZW5lIGFuZCByZXZlcnNlIGlzIGRpc2FibGVkID0+IHVwZGF0ZSB0aGUgcGluIHBvc2l0aW9uLCBzbyBpdCBkb2Vzbid0IG1vdmUgYmFjayBhcyB3ZWxsLlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZG9VcGRhdGUpIHtcclxuXHRcdFx0XHRcdC8vIGZpcmUgZXZlbnRzXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0ZXZlbnRWYXJzID0ge1xyXG5cdFx0XHRcdFx0XHRcdHByb2dyZXNzOiBfcHJvZ3Jlc3MsXHJcblx0XHRcdFx0XHRcdFx0c3RhdGU6IF9zdGF0ZSxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvblxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZUNoYW5nZWQgPSBfc3RhdGUgIT0gb2xkU3RhdGU7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7IC8vIHRtcCBoZWxwZXIgdG8gc2ltcGxpZnkgY29kZVxyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnRWYXJzKTtcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlQ2hhbmdlZCkgeyAvLyBlbnRlciBldmVudHNcclxuXHRcdFx0XHRcdFx0aWYgKG9sZFN0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwiZW50ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihvbGRTdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRyaWdnZXIoXCJwcm9ncmVzc1wiKTtcclxuXHRcdFx0XHRcdGlmIChzdGF0ZUNoYW5nZWQpIHsgLy8gbGVhdmUgZXZlbnRzXHJcblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgPyBcInN0YXJ0XCIgOiBcImVuZFwiKTtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwibGVhdmVcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXJ0IGFuZCBlbmQgc2Nyb2xsT2Zmc2V0IG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBUaGUgcG9zaXRpb25zIHJlZmxlY3Qgd2hhdCB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiB3aWxsIGJlIGF0IHRoZSBzdGFydCBhbmQgZW5kIHJlc3BlY3RpdmVseS5cclxuXHRcdCAqIElzIGNhbGxlZCwgd2hlbjpcclxuXHRcdCAqICAgLSBTY2VuZSBldmVudCBcImNoYW5nZVwiIGlzIGNhbGxlZCB3aXRoOiBvZmZzZXQsIHRyaWdnZXJIb29rLCBkdXJhdGlvbiBcclxuXHRcdCAqICAgLSBzY3JvbGwgY29udGFpbmVyIGV2ZW50IFwicmVzaXplXCIgaXMgY2FsbGVkXHJcblx0XHQgKiAgIC0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudCBjaGFuZ2VzXHJcblx0XHQgKiAgIC0gdGhlIGNvbnRyb2xsZXIgY2hhbmdlcyAtPiBhZGRUbygpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlU2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHN0YXJ0OiBfdHJpZ2dlclBvcyArIF9vcHRpb25zLm9mZnNldFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcclxuXHRcdFx0XHQvLyB0YWtlIGF3YXkgdHJpZ2dlckhvb2sgcG9ydGlvbiB0byBnZXQgcmVsYXRpdmUgdG8gdG9wXHJcblx0XHRcdFx0X3Njcm9sbE9mZnNldC5zdGFydCAtPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIF9vcHRpb25zLnRyaWdnZXJIb29rO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9zY3JvbGxPZmZzZXQuZW5kID0gX3Njcm9sbE9mZnNldC5zdGFydCArIF9vcHRpb25zLmR1cmF0aW9uO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIGR1cmF0aW9uIGlmIHNldCB0byBhIGR5bmFtaWMgZnVuY3Rpb24uXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyIGFuZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlRHVyYXRpb24gPSBmdW5jdGlvbiAoc3VwcHJlc3NFdmVudHMpIHtcclxuXHRcdFx0Ly8gdXBkYXRlIGR1cmF0aW9uXHJcblx0XHRcdGlmIChfZHVyYXRpb25VcGRhdGVNZXRob2QpIHtcclxuXHRcdFx0XHR2YXIgdmFybmFtZSA9IFwiZHVyYXRpb25cIjtcclxuXHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKHZhcm5hbWUsIF9kdXJhdGlvblVwZGF0ZU1ldGhvZC5jYWxsKFNjZW5lKSkgJiYgIXN1cHByZXNzRXZlbnRzKSB7IC8vIHNldFxyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XHJcblx0XHRcdFx0XHRcdHdoYXQ6IHZhcm5hbWUsXHJcblx0XHRcdFx0XHRcdG5ld3ZhbDogX29wdGlvbnNbdmFybmFtZV1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0cmVhc29uOiB2YXJuYW1lXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQsIGlmIHByZXNlbnQuXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgLi4uXHJcblx0XHQgKiAgLSAuLi4gd2hlbiB0aGUgdHJpZ2dlckVsZW1lbnQgaXMgY2hhbmdlZFxyXG5cdFx0ICogIC0gLi4uIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgKG5ldykgY29udHJvbGxlclxyXG5cdFx0ICogIC0gLi4uIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIgdGhyb3VnaCBzY2VuZS5yZWZyZXNoKCkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCBpZiB0aGUgcG9zaXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1cHByZXNzRXZlbnRzKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGVsZW1lbnRQb3MgPSAwLFxyXG5cdFx0XHRcdHRlbGVtID0gX29wdGlvbnMudHJpZ2dlckVsZW1lbnQ7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiAodGVsZW0gfHwgX3RyaWdnZXJQb3MgPiAwKSkgeyAvLyBlaXRoZXIgYW4gZWxlbWVudCBleGlzdHMgb3Igd2FzIHJlbW92ZWQgYW5kIHRoZSB0cmlnZ2VyUG9zIGlzIHN0aWxsID4gMFxyXG5cdFx0XHRcdGlmICh0ZWxlbSkgeyAvLyB0aGVyZSBjdXJyZW50bHkgYSB0cmlnZ2VyRWxlbWVudCBzZXRcclxuXHRcdFx0XHRcdGlmICh0ZWxlbS5wYXJlbnROb2RlKSB7IC8vIGNoZWNrIGlmIGVsZW1lbnQgaXMgc3RpbGwgYXR0YWNoZWQgdG8gRE9NXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoY29udHJvbGxlckluZm8uY29udGFpbmVyKSwgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0XHRcdHBhcmFtID0gY29udHJvbGxlckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCI7IC8vIHdoaWNoIHBhcmFtIGlzIG9mIGludGVyZXN0ID9cclxuXHJcblx0XHRcdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0XHRcdHdoaWxlICh0ZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0ZWxlbSA9IHRlbGVtLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciBlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldCh0ZWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWNvbnRyb2xsZXJJbmZvLmlzRG9jdW1lbnQpIHsgLy8gY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgcm9vdCwgc28gc3Vic3RyYWN0IHNjcm9sbCBQb3NpdGlvbiB0byBnZXQgY29ycmVjdCB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2Nyb2xsY29udGVudFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldFtwYXJhbV0gLT0gX2NvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRQb3MgPSBlbGVtZW50T2Zmc2V0W3BhcmFtXSAtIGNvbnRhaW5lck9mZnNldFtwYXJhbV07XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHsgLy8gdGhlcmUgd2FzIGFuIGVsZW1lbnQsIGJ1dCBpdCB3YXMgcmVtb3ZlZCBmcm9tIERPTVxyXG5cdFx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiB0cmlnZ2VyRWxlbWVudCB3YXMgcmVtb3ZlZCBmcm9tIERPTSBhbmQgd2lsbCBiZSByZXNldCB0b1wiLCB1bmRlZmluZWQpO1xyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyRWxlbWVudCh1bmRlZmluZWQpOyAvLyB1bnNldCwgc28gYSBjaGFuZ2UgZXZlbnQgaXMgdHJpZ2dlcmVkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgY2hhbmdlZCA9IGVsZW1lbnRQb3MgIT0gX3RyaWdnZXJQb3M7XHJcblx0XHRcdFx0X3RyaWdnZXJQb3MgPSBlbGVtZW50UG9zO1xyXG5cdFx0XHRcdGlmIChjaGFuZ2VkICYmICFzdXBwcmVzc0V2ZW50cykge1xyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0cmVhc29uOiBcInRyaWdnZXJFbGVtZW50UG9zaXRpb25cIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJpZ2dlciBhIHNoaWZ0IGV2ZW50LCB3aGVuIHRoZSBjb250YWluZXIgaXMgcmVzaXplZCBhbmQgdGhlIHRyaWdnZXJIb29rIGlzID4gMS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBvbkNvbnRhaW5lclJlc2l6ZSA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VySG9vayA+IDApIHtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0cmVhc29uOiBcImNvbnRhaW5lclJlc2l6ZVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHZhciBfdmFsaWRhdGUgPSBfdXRpbC5leHRlbmQoU0NFTkVfT1BUSU9OUy52YWxpZGF0ZSwge1xyXG5cdFx0XHQvLyB2YWxpZGF0aW9uIGZvciBkdXJhdGlvbiBoYW5kbGVkIGludGVybmFsbHkgZm9yIHJlZmVyZW5jZSB0byBwcml2YXRlIHZhciBfZHVyYXRpb25NZXRob2RcclxuXHRcdFx0ZHVyYXRpb246IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5TdHJpbmcodmFsKSAmJiB2YWwubWF0Y2goL14oXFwufFxcZCkqXFxkKyUkLykpIHtcclxuXHRcdFx0XHRcdC8vIHBlcmNlbnRhZ2UgdmFsdWVcclxuXHRcdFx0XHRcdHZhciBwZXJjID0gcGFyc2VGbG9hdCh2YWwpIC8gMTAwO1xyXG5cdFx0XHRcdFx0dmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIHBlcmMgOiAwO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24odmFsKSkge1xyXG5cdFx0XHRcdFx0Ly8gZnVuY3Rpb25cclxuXHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHZhbDtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQoX2R1cmF0aW9uVXBkYXRlTWV0aG9kLmNhbGwoU2NlbmUpKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0dmFsID0gLTE7IC8vIHdpbGwgY2F1c2UgZXJyb3IgYmVsb3dcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdmFsIGhhcyB0byBiZSBmbG9hdFxyXG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcclxuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCkge1xyXG5cdFx0XHRcdFx0aWYgKF9kdXJhdGlvblVwZGF0ZU1ldGhvZCkge1xyXG5cdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgcmV0dXJuIHZhbHVlIG9mIHN1cHBsaWVkIGZ1bmN0aW9uIGZvciBvcHRpb24gXFxcImR1cmF0aW9uXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgYSBzcGVjaWZpYyBvciBhbGwgb3B0aW9ucyBhbmQgcmVzZXQgdG8gZGVmYXVsdCBpZiBuZWNjZXNzYXJ5LlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHZhbGlkYXRlT3B0aW9uID0gZnVuY3Rpb24gKGNoZWNrKSB7XHJcblx0XHRcdGNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA/IFtjaGVja10gOiBPYmplY3Qua2V5cyhfdmFsaWRhdGUpO1xyXG5cdFx0XHRjaGVjay5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25OYW1lLCBrZXkpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWU7XHJcblx0XHRcdFx0aWYgKF92YWxpZGF0ZVtvcHRpb25OYW1lXSkgeyAvLyB0aGVyZSBpcyBhIHZhbGlkYXRpb24gbWV0aG9kIGZvciB0aGlzIG9wdGlvblxyXG5cdFx0XHRcdFx0dHJ5IHsgLy8gdmFsaWRhdGUgdmFsdWVcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBfdmFsaWRhdGVbb3B0aW9uTmFtZV0oX29wdGlvbnNbb3B0aW9uTmFtZV0pO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyB2YWxpZGF0aW9uIGZhaWxlZCAtPiByZXNldCB0byBkZWZhdWx0XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gREVGQVVMVF9PUFRJT05TW29wdGlvbk5hbWVdO1xyXG5cdFx0XHRcdFx0XHR2YXIgbG9nTVNHID0gX3V0aWwudHlwZS5TdHJpbmcoZSkgPyBbZV0gOiBlO1xyXG5cdFx0XHRcdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShsb2dNU0cpKSB7XHJcblx0XHRcdFx0XHRcdFx0bG9nTVNHWzBdID0gXCJFUlJPUjogXCIgKyBsb2dNU0dbMF07XHJcblx0XHRcdFx0XHRcdFx0bG9nTVNHLnVuc2hpZnQoMSk7IC8vIGxvZ2xldmVsIDEgZm9yIGVycm9yIG1zZ1xyXG5cdFx0XHRcdFx0XHRcdGxvZy5hcHBseSh0aGlzLCBsb2dNU0cpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBQcm9ibGVtIGV4ZWN1dGluZyB2YWxpZGF0aW9uIGNhbGxiYWNrIGZvciBvcHRpb24gJ1wiICsgb3B0aW9uTmFtZSArIFwiJzpcIiwgZS5tZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRcdFx0X29wdGlvbnNbb3B0aW9uTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhlbHBlciB1c2VkIGJ5IHRoZSBzZXR0ZXIvZ2V0dGVycyBmb3Igc2NlbmUgb3B0aW9uc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNoYW5nZU9wdGlvbiA9IGZ1bmN0aW9uICh2YXJuYW1lLCBuZXd2YWwpIHtcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0Y2hhbmdlZCA9IGZhbHNlLFxyXG5cdFx0XHRcdG9sZHZhbCA9IF9vcHRpb25zW3Zhcm5hbWVdO1xyXG5cdFx0XHRpZiAoX29wdGlvbnNbdmFybmFtZV0gIT0gbmV3dmFsKSB7XHJcblx0XHRcdFx0X29wdGlvbnNbdmFybmFtZV0gPSBuZXd2YWw7XHJcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24odmFybmFtZSk7IC8vIHJlc2V0cyB0byBkZWZhdWx0IGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGNoYW5nZWQgPSBvbGR2YWwgIT0gX29wdGlvbnNbdmFybmFtZV07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdlbmVyYXRlIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIG9wdGlvbnNcclxuXHRcdHZhciBhZGRTY2VuZU9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25OYW1lKSB7XHJcblx0XHRcdGlmICghU2NlbmVbb3B0aW9uTmFtZV0pIHtcclxuXHRcdFx0XHRTY2VuZVtvcHRpb25OYW1lXSA9IGZ1bmN0aW9uIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRcdFx0cmV0dXJuIF9vcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbk5hbWUgPT09IFwiZHVyYXRpb25cIikgeyAvLyBuZXcgZHVyYXRpb24gaXMgc2V0LCBzbyBhbnkgcHJldmlvdXNseSBzZXQgZnVuY3Rpb24gbXVzdCBiZSB1bnNldFxyXG5cdFx0XHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKG9wdGlvbk5hbWUsIG5ld1ZhbCkpIHsgLy8gc2V0XHJcblx0XHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHR3aGF0OiBvcHRpb25OYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3dmFsOiBfb3B0aW9uc1tvcHRpb25OYW1lXVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChTQ0VORV9PUFRJT05TLnNoaWZ0cy5pbmRleE9mKG9wdGlvbk5hbWUpID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlYXNvbjogb3B0aW9uTmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgZHVyYXRpb24gb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEFzIGEgKipzZXR0ZXIqKiBpdCBhY2NlcHRzIHRocmVlIHR5cGVzIG9mIHBhcmFtZXRlcnM6XHJcblx0XHQgKiAxLiBgbnVtYmVyYDogU2V0cyB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lIHRvIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzLiAgXHJcblx0XHQgKiAgIFRoaXMgbWVhbnMgdGhlIHNjZW5lIHdpbGwgbGFzdCBmb3IgZXhhY3RseSB0aGlzIGFtb3VudCBvZiBwaXhlbHMgc2Nyb2xsZWQuIFN1Yi1QaXhlbHMgYXJlIGFsc28gdmFsaWQuXHJcblx0XHQgKiAgIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoYXQgdGhlIHNjZW5lIGlzICdvcGVuIGVuZCcgYW5kIG5vIGVuZCB3aWxsIGJlIHRyaWdnZXJlZC4gUGlucyB3aWxsIG5ldmVyIHVucGluIGFuZCBhbmltYXRpb25zIHdpbGwgcGxheSBpbmRlcGVuZGVudGx5IG9mIHNjcm9sbCBwcm9ncmVzcy5cclxuXHRcdCAqIDIuIGBzdHJpbmdgOiBBbHdheXMgdXBkYXRlcyB0aGUgZHVyYXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IHNjcm9sbCBjb250YWluZXIuICBcclxuXHRcdCAqICAgRm9yIGV4YW1wbGUgYFwiMTAwJVwiYCB3aWxsIGtlZXAgdGhlIGR1cmF0aW9uIGFsd2F5cyBleGFjdGx5IGF0IHRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIHNjcm9sbCBjb250YWluZXIuXHJcblx0XHQgKiAgIFdoZW4gc2Nyb2xsaW5nIHZlcnRpY2FsbHkgdGhlIHdpZHRoIGlzIHVzZWQgZm9yIHJlZmVyZW5jZSByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiAzLiBgZnVuY3Rpb25gOiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gcmV0dXJuIHRoZSBzY2VuZSBkdXJhdGlvbi5cclxuXHRcdCAqICAgVGhpcyBpcyB1c2VmdWwgaW4gc2V0dXBzIHdoZXJlIHRoZSBkdXJhdGlvbiBkZXBlbmRzIG9uIG90aGVyIGVsZW1lbnRzIHdobyBtaWdodCBjaGFuZ2Ugc2l6ZS4gQnkgc3VwcGx5aW5nIGEgZnVuY3Rpb24geW91IGNhbiByZXR1cm4gYSB2YWx1ZSBpbnN0ZWFkIG9mIHVwZGF0aW5nIHBvdGVudGlhbGx5IG11bHRpcGxlIHNjZW5lIGR1cmF0aW9ucy4gIFxyXG5cdFx0ICogICBUaGUgc2NlbmUgY2FuIGJlIHJlZmVyZW5jZWQgaW5zaWRlIHRoZSBjYWxsYmFjayB1c2luZyBgdGhpc2AuXHJcblx0XHQgKiAgIF8qKldBUk5JTkc6KiogVGhpcyBpcyBhbiBlYXN5IHdheSB0byBraWxsIHBlcmZvcm1hbmNlLCBhcyB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBldmVyeSB0aW1lIGBTY2VuZS5yZWZyZXNoKClgIGlzIGNhbGxlZCwgd2hpY2ggaGFwcGVucyBhIGxvdC4gVGhlIGludGVydmFsIGlzIGRlZmluZWQgYnkgdGhlIGNvbnRyb2xsZXIgKHNlZSBTY3JvbGxNYWdpYy5Db250cm9sbGVyIG9wdGlvbiBgcmVmcmVzaEludGVydmFsYCkuICBcclxuXHRcdCAqICAgSXQncyByZWNvbWVuZGVkIHRvIGF2b2lkIGNhbGN1bGF0aW9ucyB3aXRoaW4gdGhlIGZ1bmN0aW9uIGFuZCB1c2UgY2FjaGVkIHZhcmlhYmxlcyBhcyByZXR1cm4gdmFsdWVzLiAgXHJcblx0XHQgKiAgIFRoaXMgY291bnRzIGRvdWJsZSBpZiB5b3UgdXNlIHRoZSBzYW1lIGZ1bmN0aW9uIGZvciBtdWx0aXBsZSBzY2VuZXMuX1xyXG5cdFx0ICpcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZHVyYXRpb25cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgZHVyYXRpb24gdmFsdWVcclxuXHRcdCAqIHZhciBkdXJhdGlvbiA9IHNjZW5lLmR1cmF0aW9uKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IGR1cmF0aW9uXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbigzMDApO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBkdXJhdGlvbiByZXNwb25zaXZlbHkgdG8gY29udGFpbmVyIHNpemVcclxuXHRcdCAqIHNjZW5lLmR1cmF0aW9uKFwiMTAwJVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1c2UgYSBmdW5jdGlvbiB0byByYW5kb21pemUgdGhlIGR1cmF0aW9uIGZvciBzb21lIHJlYXNvbi5cclxuXHRcdCAqIHZhciBkdXJhdGlvblZhbHVlQ2FjaGU7XHJcblx0XHQgKiBmdW5jdGlvbiBkdXJhdGlvbkNhbGxiYWNrICgpIHtcclxuXHRcdCAqICAgcmV0dXJuIGR1cmF0aW9uVmFsdWVDYWNoZTtcclxuXHRcdCAqIH1cclxuXHRcdCAqIGZ1bmN0aW9uIHVwZGF0ZUR1cmF0aW9uICgpIHtcclxuXHRcdCAqICAgZHVyYXRpb25WYWx1ZUNhY2hlID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcclxuXHRcdCAqIH1cclxuXHRcdCAqIHVwZGF0ZUR1cmF0aW9uKCk7IC8vIHNldCB0byBpbml0aWFsIHZhbHVlXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbihkdXJhdGlvbkNhbGxiYWNrKTsgLy8gc2V0IGR1cmF0aW9uIGNhbGxiYWNrXHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZ3xmdW5jdGlvbil9IFtuZXdEdXJhdGlvbl0gLSBUaGUgbmV3IGR1cmF0aW9uIHNldHRpbmcgZm9yIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgZHVyYXRpb24uXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIG9mZnNldCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZnNldFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBvZmZzZXRcclxuXHRcdCAqIHZhciBvZmZzZXQgPSBzY2VuZS5vZmZzZXQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgb2Zmc2V0XHJcblx0XHQgKiBzY2VuZS5vZmZzZXQoMTAwKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld09mZnNldF0gLSBUaGUgbmV3IG9mZnNldCBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIG9mZnNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckVsZW1lbnQgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogRG9lcyAqKm5vdCoqIGZpcmUgYFNjZW5lLnNoaWZ0YCwgYmVjYXVzZSBjaGFuZ2luZyB0aGUgdHJpZ2dlciBFbGVtZW50IGRvZXNuJ3QgbmVjZXNzYXJpbHkgbWVhbiB0aGUgc3RhcnQgcG9zaXRpb24gY2hhbmdlcy4gVGhpcyB3aWxsIGJlIGRldGVybWluZWQgaW4gYFNjZW5lLnJlZnJlc2goKWAsIHdoaWNoIGlzIGF1dG9tYXRpY2FsbHkgdHJpZ2dlcmVkLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyRWxlbWVudFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VyRWxlbWVudFxyXG5cdFx0ICogdmFyIHRyaWdnZXJFbGVtZW50ID0gc2NlbmUudHJpZ2dlckVsZW1lbnQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBzZWxlY3RvclxyXG5cdFx0ICogc2NlbmUudHJpZ2dlckVsZW1lbnQoXCIjdHJpZ2dlclwiKTtcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VyRWxlbWVudCB1c2luZyBhIERPTSBvYmplY3RcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJpZ2dlclwiKSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW25ld1RyaWdnZXJFbGVtZW50XSAtIFRoZSBuZXcgdHJpZ2dlciBlbGVtZW50IGZvciB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7KHN0cmluZ3xvYmplY3QpfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJFbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0cmlnZ2VySG9vayBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJIb29rXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHRyaWdnZXJIb29rIHZhbHVlXHJcblx0XHQgKiB2YXIgdHJpZ2dlckhvb2sgPSBzY2VuZS50cmlnZ2VySG9vaygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIHN0cmluZ1xyXG5cdFx0ICogc2NlbmUudHJpZ2dlckhvb2soXCJvbkxlYXZlXCIpO1xyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJIb29rIHVzaW5nIGEgbnVtYmVyXHJcblx0XHQgKiBzY2VuZS50cmlnZ2VySG9vaygwLjcpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbbmV3VHJpZ2dlckhvb2tdIC0gVGhlIG5ldyB0cmlnZ2VySG9vayBvZiB0aGUgc2NlbmUuIFNlZSB7QGxpbmsgU2NlbmV9IHBhcmFtZXRlciBkZXNjcmlwdGlvbiBmb3IgdmFsdWUgb3B0aW9ucy5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgdHJpZ2dlckhvb2sgKEFMV0FZUyBudW1lcmljYWwpLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmV2ZXJzZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCByZXZlcnNlIG9wdGlvblxyXG5cdFx0ICogdmFyIHJldmVyc2UgPSBzY2VuZS5yZXZlcnNlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IG5ldyByZXZlcnNlIG9wdGlvblxyXG5cdFx0ICogc2NlbmUucmV2ZXJzZShmYWxzZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdSZXZlcnNlXSAtIFRoZSBuZXcgcmV2ZXJzZSBzZXR0aW5nIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBgZ2V0YCAtICBDdXJyZW50IHJldmVyc2Ugb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2xvZ2xldmVsXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IGxvZ2xldmVsXHJcblx0XHQgKiB2YXIgbG9nbGV2ZWwgPSBzY2VuZS5sb2dsZXZlbCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBuZXcgbG9nbGV2ZWxcclxuXHRcdCAqIHNjZW5lLmxvZ2xldmVsKDMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIHNjZW5lLiBgWzAtM11gXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IGxvZ2xldmVsLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgYXNzb2NpYXRlZCBjb250cm9sbGVyLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNjb250cm9sbGVyXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjb250cm9sbGVyIG9mIGEgc2NlbmVcclxuXHRcdCAqIHZhciBjb250cm9sbGVyID0gc2NlbmUuY29udHJvbGxlcigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBQYXJlbnQgY29udHJvbGxlciBvciBgdW5kZWZpbmVkYFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfY29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzdGF0ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdFx0ICogdmFyIHN0YXRlID0gc2NlbmUuc3RhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBgXCJCRUZPUkVcImAsIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3N0YXRlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogTWluZCwgdGhhdCB0aGUgc2Nyb2xsT2Zmc2V0IGlzIHJlbGF0ZWQgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciwgaWYgYHRyaWdnZXJIb29rYCBpcyBiaWdnZXIgdGhhbiBgMGAgKG9yIGBcIm9uTGVhdmVcImApLiAgXHJcblx0XHQgKiBUaGlzIG1lYW5zLCB0aGF0IHJlc2l6aW5nIHRoZSBjb250YWluZXIgb3IgY2hhbmdpbmcgdGhlIGB0cmlnZ2VySG9va2Agd2lsbCBpbmZsdWVuY2UgdGhlIHNjZW5lJ3Mgc3RhcnQgb2Zmc2V0LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzY3JvbGxPZmZzZXRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogdmFyIHN0YXJ0ID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHQgKiB2YXIgZW5kID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCkgKyBzY2VuZS5kdXJhdGlvbigpO1xyXG5cdFx0ICogY29uc29sZS5sb2coXCJ0aGUgc2NlbmUgc3RhcnRzIGF0XCIsIHN0YXJ0LCBcImFuZCBlbmRzIGF0XCIsIGVuZCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIHNjcm9sbCBvZmZzZXQgKG9mIHRoZSBjb250YWluZXIpIGF0IHdoaWNoIHRoZSBzY2VuZSB3aWxsIHRyaWdnZXIuIFkgdmFsdWUgZm9yIHZlcnRpY2FsIGFuZCBYIHZhbHVlIGZvciBob3Jpem9udGFsIHNjcm9sbHMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3Njcm9sbE9mZnNldC5zdGFydDtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSB0cmlnZ2VyIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW5jbHVkaW5nIHRoZSB2YWx1ZSBvZiB0aGUgYG9mZnNldGAgb3B0aW9uKS4gIFxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyUG9zaXRpb25cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIHNjZW5lJ3MgdHJpZ2dlciBwb3NpdGlvblxyXG5cdFx0ICogdmFyIHRyaWdnZXJQb3NpdGlvbiA9IHNjZW5lLnRyaWdnZXJQb3NpdGlvbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gVG9wIHBvc2l0aW9uIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgbGVmdCBwb3NpdGlvbiB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnRyaWdnZXJQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHBvcyA9IF9vcHRpb25zLm9mZnNldDsgLy8gdGhlIG9mZnNldCBpcyB0aGUgYmFzaXNcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0Ly8gZ2V0IHRoZSB0cmlnZ2VyIHBvc2l0aW9uXHJcblx0XHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XHJcblx0XHRcdFx0XHQvLyBFbGVtZW50IGFzIHRyaWdnZXJcclxuXHRcdFx0XHRcdHBvcyArPSBfdHJpZ2dlclBvcztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHRyaWdnZXJIb29rIHRvIHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmdcclxuXHRcdFx0XHRcdHBvcyArPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIFNjZW5lLnRyaWdnZXJIb29rKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwb3M7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0X3BpbixcclxuXHRcdFx0X3Bpbk9wdGlvbnM7XHJcblxyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwic2hpZnQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgZHVyYXRpb25DaGFuZ2VkID0gZS5yZWFzb24gPT09IFwiZHVyYXRpb25cIjtcclxuXHRcdFx0XHRpZiAoKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIgJiYgZHVyYXRpb25DaGFuZ2VkKSB8fCAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgX29wdGlvbnMuZHVyYXRpb24gPT09IDApKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBbZHVyYXRpb24gY2hhbmdlZCBhZnRlciBhIHNjZW5lIChpbnNpZGUgc2NlbmUgcHJvZ3Jlc3MgdXBkYXRlcyBwaW4gcG9zaXRpb24pXSBvciBbZHVyYXRpb24gaXMgMCwgd2UgYXJlIGluIHBpbiBwaGFzZSBhbmQgc29tZSBvdGhlciB2YWx1ZSBjaGFuZ2VkXS5cclxuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkdXJhdGlvbkNoYW5nZWQpIHtcclxuXHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcInByb2dyZXNzLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwiYWRkLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJkZXN0cm95LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKGUucmVzZXQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSBwaW4gc3RhdGUuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluU3RhdGUgPSBmdW5jdGlvbiAoZm9yY2VVbnBpbikge1xyXG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0Y29udGFpbmVySW5mbyA9IF9jb250cm9sbGVyLmluZm8oKSxcclxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyBtYXkgYmUgcGluIGVsZW1lbnQgb3IgYW5vdGhlciBzcGFjZXIsIGlmIGNhc2NhZGluZyBwaW5zXHJcblxyXG5cdFx0XHRcdGlmICghZm9yY2VVbnBpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykgeyAvLyBkdXJpbmcgc2NlbmUgb3IgaWYgZHVyYXRpb24gaXMgMCBhbmQgd2UgYXJlIHBhc3QgdGhlIHRyaWdnZXJcclxuXHRcdFx0XHRcdC8vIHBpbm5lZCBzdGF0ZVxyXG5cdFx0XHRcdFx0aWYgKF91dGlsLmNzcyhwaW5UYXJnZXQsIFwicG9zaXRpb25cIikgIT0gXCJmaXhlZFwiKSB7XHJcblx0XHRcdFx0XHRcdC8vIGNoYW5nZSBzdGF0ZSBiZWZvcmUgdXBkYXRpbmcgcGluIHNwYWNlciAocG9zaXRpb24gY2hhbmdlcyBkdWUgdG8gZml4ZWQgY29sbGFwc2luZyBtaWdodCBvY2N1ci4pXHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIHtcclxuXHRcdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXJcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRmaXhlZFBvcyA9IF91dGlsLmdldC5vZmZzZXQoX3Bpbk9wdGlvbnMuc3BhY2VyLCB0cnVlKSwgLy8gZ2V0IHZpZXdwb3J0IHBvc2l0aW9uIG9mIHNwYWNlclxyXG5cdFx0XHRcdFx0XHRzY3JvbGxEaXN0YW5jZSA9IF9vcHRpb25zLnJldmVyc2UgfHwgX29wdGlvbnMuZHVyYXRpb24gPT09IDAgP1xyXG5cdFx0XHRcdFx0XHRjb250YWluZXJJbmZvLnNjcm9sbFBvcyAtIF9zY3JvbGxPZmZzZXQuc3RhcnQgLy8gcXVpY2tlclxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3Byb2dyZXNzICogX29wdGlvbnMuZHVyYXRpb24gKiAxMCkgLyAxMDsgLy8gaWYgbm8gcmV2ZXJzZSBhbmQgZHVyaW5nIHBpbiB0aGUgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkIHVzaW5nIHRoZSBwcm9ncmVzc1xyXG5cclxuXHRcdFx0XHRcdC8vIGFkZCBzY3JvbGxEaXN0YW5jZVxyXG5cdFx0XHRcdFx0Zml4ZWRQb3NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gKz0gc2Nyb2xsRGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcclxuXHRcdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCwge1xyXG5cdFx0XHRcdFx0XHR0b3A6IGZpeGVkUG9zLnRvcCxcclxuXHRcdFx0XHRcdFx0bGVmdDogZml4ZWRQb3MubGVmdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHVucGlubmVkIHN0YXRlXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bmV3Q1NTID0ge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBfcGluT3B0aW9ucy5pbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0Y2hhbmdlID0gX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBuZXdDU1MucG9zaXRpb247XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRcdG5ld0NTU1tjb250YWluZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHsgLy8gb25seSBjb25jZXJucyBzY2VuZXMgd2l0aCBkdXJhdGlvblxyXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy10b3BcIikpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8gaWYgaW4gYWZ0ZXIgc3RhdGUgYnV0IGhhdmVudCB1cGRhdGVkIHNwYWNlciB5ZXQgKGp1bXBlZCBwYXN0IHBpbilcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy1ib3R0b21cIikpID09PSAwKSB7IC8vIGJlZm9yZVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGp1bXBlZCBwYXN0IGZpeGVkIHN0YXRlIHVwd2FyZCBkaXJlY3Rpb25cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcclxuXHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG5ld0NTUyk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbmdlKSB7XHJcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyIGlmIHN0YXRlIGNoYW5nZWRcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZSB0aGUgcGluIHNwYWNlciBhbmQvb3IgZWxlbWVudCBzaXplLlxyXG5cdFx0ICogVGhlIHNpemUgb2YgdGhlIHNwYWNlciBuZWVkcyB0byBiZSB1cGRhdGVkIHdoZW5ldmVyIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUgY2hhbmdlcywgaWYgaXQgaXMgdG8gcHVzaCBkb3duIGZvbGxvd2luZyBlbGVtZW50cy5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVQaW5EaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlciAmJiBfcGluT3B0aW9ucy5pbkZsb3cpIHsgLy8gbm8gc3BhY2VycmVzaXplLCBpZiBvcmlnaW5hbCBwb3NpdGlvbiBpcyBhYnNvbHV0ZVxyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0YWZ0ZXIgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiksXHJcblx0XHRcdFx0XHRiZWZvcmUgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUpLFxyXG5cdFx0XHRcdFx0ZHVyaW5nID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSxcclxuXHRcdFx0XHRcdHZlcnRpY2FsID0gX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpLFxyXG5cdFx0XHRcdFx0cGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQsIC8vIHVzdWFsbHkgdGhlIHBpbmVkIGVsZW1lbnQgYnV0IGNhbiBhbHNvIGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKVxyXG5cdFx0XHRcdFx0bWFyZ2luQ29sbGFwc2UgPSBfdXRpbC5pc01hcmdpbkNvbGxhcHNlVHlwZShfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcImRpc3BsYXlcIikpLFxyXG5cdFx0XHRcdFx0Y3NzID0ge307XHJcblxyXG5cdFx0XHRcdC8vIHNldCBuZXcgc2l6ZVxyXG5cdFx0XHRcdC8vIGlmIHJlbHNpemU6IHNwYWNlciAtPiBwaW4gfCBlbHNlOiBwaW4gLT4gc3BhY2VyXHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XHJcblx0XHRcdFx0XHRpZiAoZHVyaW5nKSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBcIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gbWlud2lkdGggaXMgbmVlZGVkIGZvciBjYXNjYWRlZCBwaW5zLlxyXG5cdFx0XHRcdFx0Y3NzW1wibWluLXdpZHRoXCJdID0gX3V0aWwuZ2V0LndpZHRoKHZlcnRpY2FsID8gX3BpbiA6IHBpblRhcmdldCwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRjc3Mud2lkdGggPSBkdXJpbmcgPyBjc3NbXCJtaW4td2lkdGhcIl0gOiBcImF1dG9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRpZiAoZHVyaW5nKSB7XHJcblx0XHRcdFx0XHRcdC8vIHRoZSBvbmx5IHBhZGRpbmcgdGhlIHNwYWNlciBzaG91bGQgZXZlciBpbmNsdWRlIGlzIHRoZSBkdXJhdGlvbiAoaWYgcHVzaEZvbGxvd2VycyA9IHRydWUpLCBzbyB3ZSBuZWVkIHRvIHN1YnN0cmFjdCB0aGF0LlxyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyKSAtIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzID8gX29wdGlvbnMuZHVyYXRpb24gOiAwKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogXCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIG1hcmdpbiBpcyBvbmx5IGluY2x1ZGVkIGlmIGl0J3MgYSBjYXNjYWRlZCBwaW4gdG8gcmVzb2x2ZSBhbiBJRTkgYnVnXHJcblx0XHRcdFx0XHRjc3NbXCJtaW4taGVpZ2h0XCJdID0gX3V0aWwuZ2V0LmhlaWdodCh2ZXJ0aWNhbCA/IHBpblRhcmdldCA6IF9waW4sIHRydWUsICFtYXJnaW5Db2xsYXBzZSk7IC8vIG5lZWRlZCBmb3IgY2FzY2FkaW5nIHBpbnNcclxuXHRcdFx0XHRcdGNzcy5oZWlnaHQgPSBkdXJpbmcgPyBjc3NbXCJtaW4taGVpZ2h0XCJdIDogXCJhdXRvXCI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgc3BhY2UgZm9yIGR1cmF0aW9uIGlmIHB1c2hGb2xsb3dlcnMgaXMgdHJ1ZVxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRjc3NbXCJwYWRkaW5nXCIgKyAodmVydGljYWwgPyBcIlRvcFwiIDogXCJMZWZ0XCIpXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xyXG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJCb3R0b21cIiA6IFwiUmlnaHRcIildID0gX29wdGlvbnMuZHVyYXRpb24gKiAoMSAtIF9wcm9ncmVzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIGNzcyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG5cdFx0ICogSWYgdGhlIGNvbnRyb2xsZXIgY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgYW5kIHdlIGFyZSBtaWQtcGluLXBoYXNlIHNjcm9sbGluZyBvciByZXNpemluZyB0aGUgbWFpbiBkb2N1bWVudCBjYW4gcmVzdWx0IHRvIHdyb25nIHBpbiBwb3NpdGlvbnMuXHJcblx0XHQgKiBTbyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiByZXNpemUgYW5kIHNjcm9sbCBvZiB0aGUgZG9jdW1lbnQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluSW5Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3BhY2VyIHNpemUgc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG5cdFx0ICogSWYgY29udGFpbmVyIGlzIHJlc2l6ZWQgZHVyaW5nIHBpbiBhbmQgcmVsYXRpdmVseSBzaXplZCB0aGUgc2l6ZSBvZiB0aGUgcGluIG1pZ2h0IG5lZWQgdG8gYmUgdXBkYXRlZC4uLlxyXG5cdFx0ICogU28gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb24gcmVzaXplIG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIC8vIHdlbGwsIGR1aFxyXG5cdFx0XHRcdF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmIC8vIGVsZW1lbnQgaW4gcGlubmVkIHN0YXRlP1xyXG5cdFx0XHRcdCggLy8gaXMgd2lkdGggb3IgaGVpZ2h0IHJlbGF0aXZlbHkgc2l6ZWQsIGJ1dCBub3QgaW4gcmVsYXRpb24gdG8gYm9keT8gdGhlbiB3ZSBuZWVkIHRvIHJlY2FsYy5cclxuXHRcdFx0XHRcdCgoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCB8fCBfcGluT3B0aW9ucy5yZWxTaXplLmF1dG9GdWxsV2lkdGgpICYmIF91dGlsLmdldC53aWR0aCh3aW5kb3cpICE9IF91dGlsLmdldC53aWR0aChfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZSkpIHx8XHJcblx0XHRcdFx0XHQoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQgJiYgX3V0aWwuZ2V0LmhlaWdodCh3aW5kb3cpICE9IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSXMgY2FsbGVkLCB3aGVuIHRoZSBtb3VzZXdoZWwgaXMgdXNlZCB3aGlsZSBvdmVyIGEgcGlubmVkIGVsZW1lbnQgaW5zaWRlIGEgZGl2IGNvbnRhaW5lci5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBpcyBpbiBmaXhlZCBzdGF0ZSBzY3JvbGwgZXZlbnRzIHdvdWxkIGJlIGNvdW50ZWQgdG93YXJkcyB0aGUgYm9keS4gVGhpcyBmb3J3YXJkcyB0aGUgZXZlbnQgdG8gdGhlIHNjcm9sbCBjb250YWluZXIuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgb25Nb3VzZXdoZWVsT3ZlclBpbiA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkgeyAvLyBpbiBwaW4gc3RhdGVcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIuX3NldFNjcm9sbFBvcyhfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpIC0gKChlLndoZWVsRGVsdGEgfHwgZVtfY29udHJvbGxlci5pbmZvKFwidmVydGljYWxcIikgPyBcIndoZWVsRGVsdGFZXCIgOiBcIndoZWVsRGVsdGFYXCJdKSAvIDMgfHwgLWUuZGV0YWlsICogMzApKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBpbiBhbiBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGVsZW1lbnQgd2lsbCBvbmx5IGJlIHVucGlubmVkLCBpZiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24uICBcclxuXHRcdCAqIE1ha2Ugc3VyZSBvbmx5IG9uZSBwaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IGF0IHRoZSBzYW1lIHRpbWUuXHJcblx0XHQgKiBBbiBlbGVtZW50IGNhbiBiZSBwaW5uZWQgbXVsdGlwbGUgdGltZXMsIGJ1dCBvbmx5IHN1Y2Nlc3NpdmVseS5cclxuXHRcdCAqIF8qKk5PVEU6KiogVGhlIG9wdGlvbiBgcHVzaEZvbGxvd2Vyc2AgaGFzIG5vIGVmZmVjdCwgd2hlbiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMC5fXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3NldFBpblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBwdXNoIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgZG93biBieSB0aGUgYW1vdW50IG9mIHRoZSBwaW4gZHVyYXRpb24uXHJcblx0XHQgKiBzY2VuZS5zZXRQaW4oXCIjcGluXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBrZWVwaW5nIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgaW4gdGhlaXIgcGxhY2UuIFRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIG1vdmUgcGFzdCB0aGVtLlxyXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiLCB7cHVzaEZvbGxvd2VyczogZmFsc2V9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZWxlbWVudCAtIEEgU2VsZWN0b3IgdGFyZ2V0aW5nIGFuIGVsZW1lbnQgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgcGlubmVkLlxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IFtzZXR0aW5nc10gLSBzZXR0aW5ncyBmb3IgdGhlIHBpblxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbc2V0dGluZ3MucHVzaEZvbGxvd2Vycz10cnVlXSAtIElmIGB0cnVlYCBmb2xsb3dpbmcgZWxlbWVudHMgd2lsbCBiZSBcInB1c2hlZFwiIGRvd24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGluLCBpZiBgZmFsc2VgIHRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIGp1c3Qgc2Nyb2xsIHBhc3QgdGhlbS4gIFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIElnbm9yZWQsIHdoZW4gZHVyYXRpb24gaXMgYDBgLlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZXR0aW5ncy5zcGFjZXJDbGFzcz1cInNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIl0gLSBDbGFzc25hbWUgb2YgdGhlIHBpbiBzcGFjZXIgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byByZXBsYWNlIHRoZSBlbGVtZW50LlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2V0UGluID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNldHRpbmdzKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuXHRcdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZXJDbGFzczogXCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR2YXIgcHVzaEZvbGxvd2Vyc0FjdGl2ZWx5U2V0ID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3B1c2hGb2xsb3dlcnMnKTtcclxuXHRcdFx0c2V0dGluZ3MgPSBfdXRpbC5leHRlbmQoe30sIGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xyXG5cclxuXHRcdFx0Ly8gdmFsaWRhdGUgRWxlbWVudFxyXG5cdFx0XHRlbGVtZW50ID0gX3V0aWwuZ2V0LmVsZW1lbnRzKGVsZW1lbnQpWzBdO1xyXG5cdFx0XHRpZiAoIWVsZW1lbnQpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBJbnZhbGlkIHBpbiBlbGVtZW50IHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxyXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLmNzcyhlbGVtZW50LCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBQaW4gZG9lcyBub3Qgd29yayB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHBvc2l0aW9uZWQgJ2ZpeGVkJy5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKF9waW4pIHsgLy8gcHJlZXhpc3RpbmcgcGluP1xyXG5cdFx0XHRcdGlmIChfcGluID09PSBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHQvLyBzYW1lIHBpbiB3ZSBhbHJlYWR5IGhhdmUgLT4gZG8gbm90aGluZ1xyXG5cdFx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8ga2lsbCBvbGQgcGluXHJcblx0XHRcdFx0XHRTY2VuZS5yZW1vdmVQaW4oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdF9waW4gPSBlbGVtZW50O1xyXG5cclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0cGFyZW50RGlzcGxheSA9IF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5LFxyXG5cdFx0XHRcdGJvdW5kc1BhcmFtcyA9IFtcInRvcFwiLCBcImxlZnRcIiwgXCJib3R0b21cIiwgXCJyaWdodFwiLCBcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXTtcclxuXHJcblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBoYWNrIHN0YXJ0IHRvIGZvcmNlIGNzcyB0byByZXR1cm4gc3R5bGVzaGVldCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxjdWxhdGVkIHB4IHZhbHVlcy5cclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0aW5GbG93ID0gX3V0aWwuY3NzKF9waW4sIFwicG9zaXRpb25cIikgIT0gXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdHBpbkNTUyA9IF91dGlsLmNzcyhfcGluLCBib3VuZHNQYXJhbXMuY29uY2F0KFtcImRpc3BsYXlcIl0pKSxcclxuXHRcdFx0XHRzaXplQ1NTID0gX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKTtcclxuXHRcdFx0X3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBwYXJlbnREaXNwbGF5OyAvLyBoYWNrIGVuZC5cclxuXHJcblx0XHRcdGlmICghaW5GbG93ICYmIHNldHRpbmdzLnB1c2hGb2xsb3dlcnMpIHtcclxuXHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBJZiB0aGUgcGlubmVkIGVsZW1lbnQgaXMgcG9zaXRpb25lZCBhYnNvbHV0ZWx5IHB1c2hGb2xsb3dlcnMgd2lsbCBiZSBkaXNhYmxlZC5cIik7XHJcblx0XHRcdFx0c2V0dGluZ3MucHVzaEZvbGxvd2VycyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gd2FpdCB1bnRpbCBhbGwgZmluaXNoZWQsIGJlY2F1c2Ugd2l0aCByZXNwb25zaXZlIGR1cmF0aW9uIGl0IHdpbGwgb25seSBiZSBzZXQgYWZ0ZXIgc2NlbmUgaXMgYWRkZWQgdG8gY29udHJvbGxlclxyXG5cdFx0XHRcdGlmIChfcGluICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwICYmIHB1c2hGb2xsb3dlcnNBY3RpdmVseVNldCAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBwdXNoRm9sbG93ZXJzID1cIiwgdHJ1ZSwgXCJoYXMgbm8gZWZmZWN0LCB3aGVuIHNjZW5lIGR1cmF0aW9uIGlzIDAuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMCk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgc3BhY2VyIGFuZCBpbnNlcnRcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0c3BhY2VyID0gX3Bpbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgX3BpbiksXHJcblx0XHRcdFx0c3BhY2VyQ1NTID0gX3V0aWwuZXh0ZW5kKHBpbkNTUywge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG5cdFx0XHRcdFx0bW96Qm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXHJcblx0XHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCFpbkZsb3cpIHsgLy8gY29weSBzaXplIGlmIHBvc2l0aW9uZWQgYWJzb2x1dGVseSwgdG8gd29yayBmb3IgYm90dG9tL3JpZ2h0IHBvc2l0aW9uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0X3V0aWwuZXh0ZW5kKHNwYWNlckNTUywgX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHNwYWNlckNTUyk7XHJcblx0XHRcdHNwYWNlci5zZXRBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUsIFwiXCIpO1xyXG5cdFx0XHRfdXRpbC5hZGRDbGFzcyhzcGFjZXIsIHNldHRpbmdzLnNwYWNlckNsYXNzKTtcclxuXHJcblx0XHRcdC8vIHNldCB0aGUgcGluIE9wdGlvbnNcclxuXHRcdFx0X3Bpbk9wdGlvbnMgPSB7XHJcblx0XHRcdFx0c3BhY2VyOiBzcGFjZXIsXHJcblx0XHRcdFx0cmVsU2l6ZTogeyAvLyBzYXZlIGlmIHNpemUgaXMgZGVmaW5lZCB1c2luZyAlIHZhbHVlcy4gaWYgc28sIGhhbmRsZSBzcGFjZXIgcmVzaXplIGRpZmZlcmVudGx5Li4uXHJcblx0XHRcdFx0XHR3aWR0aDogc2l6ZUNTUy53aWR0aC5zbGljZSgtMSkgPT09IFwiJVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaXplQ1NTLmhlaWdodC5zbGljZSgtMSkgPT09IFwiJVwiLFxyXG5cdFx0XHRcdFx0YXV0b0Z1bGxXaWR0aDogc2l6ZUNTUy53aWR0aCA9PT0gXCJhdXRvXCIgJiYgaW5GbG93ICYmIF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKHBpbkNTUy5kaXNwbGF5KVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cHVzaEZvbGxvd2Vyczogc2V0dGluZ3MucHVzaEZvbGxvd2VycyxcclxuXHRcdFx0XHRpbkZsb3c6IGluRmxvdywgLy8gc3RvcmVzIGlmIHRoZSBlbGVtZW50IHRha2VzIHVwIHNwYWNlIGluIHRoZSBkb2N1bWVudCBmbG93XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIV9waW4uX19fb3JpZ1N0eWxlKSB7XHJcblx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGUgPSB7fTtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdHBpbklubGluZUNTUyA9IF9waW4uc3R5bGUsXHJcblx0XHRcdFx0XHRjb3B5U3R5bGVzID0gYm91bmRzUGFyYW1zLmNvbmNhdChbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInBvc2l0aW9uXCIsIFwiYm94U2l6aW5nXCIsIFwibW96Qm94U2l6aW5nXCIsIFwid2Via2l0Qm94U2l6aW5nXCJdKTtcclxuXHRcdFx0XHRjb3B5U3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGVbdmFsXSA9IHBpbklubGluZUNTU1t2YWxdIHx8IFwiXCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIHJlbGF0aXZlIHNpemUsIHRyYW5zZmVyIGl0IHRvIHNwYWNlciBhbmQgbWFrZSBwaW4gY2FsY3VsYXRlIGl0Li4uXHJcblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoKSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGhcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQpIHtcclxuXHRcdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemVDU1MuaGVpZ2h0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG5vdyBwbGFjZSB0aGUgcGluIGVsZW1lbnQgaW5zaWRlIHRoZSBzcGFjZXJcdFxyXG5cdFx0XHRzcGFjZXIuYXBwZW5kQ2hpbGQoX3Bpbik7XHJcblx0XHRcdC8vIGFuZCBzZXQgbmV3IGNzc1xyXG5cdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBpbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0bWFyZ2luOiBcImF1dG9cIixcclxuXHRcdFx0XHR0b3A6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdGxlZnQ6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdGJvdHRvbTogXCJhdXRvXCIsXHJcblx0XHRcdFx0cmlnaHQ6IFwiYXV0b1wiXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdFx0d2Via2l0Qm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgbGlzdGVuZXIgdG8gZG9jdW1lbnQgdG8gdXBkYXRlIHBpbiBwb3NpdGlvbiBpbiBjYXNlIGNvbnRyb2xsZXIgaXMgbm90IHRoZSBkb2N1bWVudC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcclxuXHRcdFx0Ly8gYWRkIG1vdXNld2hlZWwgbGlzdGVuZXIgdG8gY2F0Y2ggc2Nyb2xscyBvdmVyIGZpeGVkIGVsZW1lbnRzXHJcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XHJcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgcGluXCIpO1xyXG5cclxuXHRcdFx0Ly8gZmluYWxseSB1cGRhdGUgdGhlIHBpbiB0byBpbml0XHJcblx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVBpblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXR0aW5nIGl0ICh0aGUgc3BhY2VyIGlzIG5vdCByZW1vdmVkKVxyXG5cdFx0ICogc2NlbmUucmVtb3ZlUGluKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gZWxlbWVudCB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbiAoc3BhY2VyIGlzIHJlbW92ZWQpXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVQaW4odHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYGZhbHNlYCB0aGUgc3BhY2VyIHdpbGwgbm90IGJlIHJlbW92ZWQgYW5kIHRoZSBlbGVtZW50J3MgcG9zaXRpb24gd2lsbCBub3QgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZVBpbiA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRpZiAoX3Bpbikge1xyXG5cdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIGZvcmNlIHVucGluIGF0IHBvc2l0aW9uXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXNldCB8fCAhX2NvbnRyb2xsZXIpIHsgLy8gaWYgdGhlcmUncyBubyBjb250cm9sbGVyIG5vIHByb2dyZXNzIHdhcyBtYWRlIGFueXdheS4uLlxyXG5cdFx0XHRcdFx0dmFyIHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyB1c3VhbGx5IHRoZSBwaW4gZWxlbWVudCwgYnV0IG1heSBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucykuLi5cclxuXHRcdFx0XHRcdGlmIChwaW5UYXJnZXQuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBjb3B5IG1hcmdpbnMgdG8gY2hpbGQgc3BhY2VyXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlID0gX3Bpbk9wdGlvbnMuc3BhY2VyLnN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlcyA9IFtcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zID0ge307XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zW3ZhbF0gPSBzdHlsZVt2YWxdIHx8IFwiXCI7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBtYXJnaW5zKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwaW5UYXJnZXQsIF9waW5PcHRpb25zLnNwYWNlcik7XHJcblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfcGluT3B0aW9ucy5zcGFjZXIpO1xyXG5cdFx0XHRcdFx0aWYgKCFfcGluLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBpZiBpdCdzIHRoZSBsYXN0IHBpbiBmb3IgdGhpcyBlbGVtZW50IC0+IHJlc3RvcmUgaW5saW5lIHN0eWxlc1xyXG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBvbmx5IGNvcnJlY3RseSBzZXQgZm9yIGZpcnN0IHBpbiAod2hlbiBjYXNjYWRpbmcpIC0gaG93IHRvIGZpeD9cclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIF9waW4uX19fb3JpZ1N0eWxlKTtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9waW4uX19fb3JpZ1N0eWxlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcclxuXHRcdFx0XHRfcGluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRcdF9waW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRcdF9waW4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBwaW4gKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0X2Nzc0NsYXNzZXMsXHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XHJcblxyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKGUucmVzZXQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmaW5lIGEgY3NzIGNsYXNzIG1vZGlmaWNhdGlvbiB3aGlsZSB0aGUgc2NlbmUgaXMgYWN0aXZlLiAgXHJcblx0XHQgKiBXaGVuIHRoZSBzY2VuZSB0cmlnZ2VycyB0aGUgY2xhc3NlcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBlbGVtZW50IGFuZCByZW1vdmVkLCB3aGVuIHRoZSBzY2VuZSBpcyBvdmVyLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGNsYXNzZXMgd2lsbCBvbmx5IGJlIHJlbW92ZWQgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRDbGFzc1RvZ2dsZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGFkZCB0aGUgY2xhc3MgJ215Y2xhc3MnIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIGlkICdteS1lbGVtJyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogc2NlbmUuc2V0Q2xhc3NUb2dnbGUoXCIjbXktZWxlbVwiLCBcIm15Y2xhc3NcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gYWRkIG11bHRpcGxlIGNsYXNzZXMgdG8gbXVsdGlwbGUgZWxlbWVudHMgZGVmaW5lZCBieSB0aGUgc2VsZWN0b3IgJy5jbGFzc0NoYW5nZSdcclxuXHRcdCAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiLmNsYXNzQ2hhbmdlXCIsIFwiY2xhc3MxIGNsYXNzMiBjbGFzczNcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBvbmUgb3IgbW9yZSBlbGVtZW50cyBvciBhIERPTSBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBtb2RpZmllZC5cclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIC0gT25lIG9yIG1vcmUgQ2xhc3NuYW1lcyAoc2VwYXJhdGVkIGJ5IHNwYWNlKSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudCBkdXJpbmcgdGhlIHNjZW5lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2V0Q2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3Nlcykge1xyXG5cdFx0XHR2YXIgZWxlbXMgPSBfdXRpbC5nZXQuZWxlbWVudHMoZWxlbWVudCk7XHJcblx0XHRcdGlmIChlbGVtcy5sZW5ndGggPT09IDAgfHwgIV91dGlsLnR5cGUuU3RyaW5nKGNsYXNzZXMpKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldENsYXNzVG9nZ2xlKCknOiBJbnZhbGlkIFwiICsgKGVsZW1zLmxlbmd0aCA9PT0gMCA/IFwiZWxlbWVudFwiIDogXCJjbGFzc2VzXCIpICsgXCIgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX2Nzc0NsYXNzRWxlbXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdC8vIHJlbW92ZSBvbGQgb25lc1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0X2Nzc0NsYXNzZXMgPSBjbGFzc2VzO1xyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IGVsZW1zO1xyXG5cdFx0XHRTY2VuZS5vbihcImVudGVyLmludGVybmFsX2NsYXNzIGxlYXZlLmludGVybmFsX2NsYXNzXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIHRvZ2dsZSA9IGUudHlwZSA9PT0gXCJlbnRlclwiID8gX3V0aWwuYWRkQ2xhc3MgOiBfdXRpbC5yZW1vdmVDbGFzcztcclxuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcclxuXHRcdFx0XHRcdHRvZ2dsZShlbGVtLCBfY3NzQ2xhc3Nlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVDbGFzc1RvZ2dsZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIGNsYXNzIGJpbmRpbmcgYW5kIHJlbW92ZSB0aGUgY2hhbmdlcyBpdCBjYXVzZWRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgYW5kIHRoZSBjbGFzc2VzIGFyZSBjdXJyZW50bHkgYWN0aXZlLCB0aGV5IHdpbGwgcmVtYWluIG9uIHRoZSBlbGVtZW50LiBJZiBgdHJ1ZWAgdGhleSB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZUNsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHRcdF9jc3NDbGFzc0VsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGtleSkge1xyXG5cdFx0XHRcdFx0X3V0aWwucmVtb3ZlQ2xhc3MoZWxlbSwgX2Nzc0NsYXNzZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFNjZW5lLm9mZihcInN0YXJ0LmludGVybmFsX2NsYXNzIGVuZC5pbnRlcm5hbF9jbGFzc1wiKTtcclxuXHRcdFx0X2Nzc0NsYXNzZXMgPSB1bmRlZmluZWQ7XHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gSU5JVFxyXG5cdFx0Y29uc3RydWN0KCk7XHJcblx0XHRyZXR1cm4gU2NlbmU7XHJcblx0fTtcclxuXHJcblx0Ly8gc3RvcmUgcGFnZXdpZGUgc2NlbmUgb3B0aW9uc1xyXG5cdHZhciBTQ0VORV9PUFRJT05TID0ge1xyXG5cdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0ZHVyYXRpb246IDAsXHJcblx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0dHJpZ2dlckVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0dHJpZ2dlckhvb2s6IDAuNSxcclxuXHRcdFx0cmV2ZXJzZTogdHJ1ZSxcclxuXHRcdFx0bG9nbGV2ZWw6IDJcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZToge1xyXG5cdFx0XHRvZmZzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XHJcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIm9mZnNldFxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyaWdnZXJFbGVtZW50OiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gdmFsIHx8IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAodmFsKSB7XHJcblx0XHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyh2YWwpWzBdO1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IGVsZW07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJFbGVtZW50IGRlZmluZWQgaW4gb3B0aW9uIFxcXCJ0cmlnZ2VyRWxlbWVudFxcXCIgd2FzIG5vdCBmb3VuZDpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJpZ2dlckhvb2s6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YXIgdHJhbnNsYXRlID0ge1xyXG5cdFx0XHRcdFx0XCJvbkNlbnRlclwiOiAwLjUsXHJcblx0XHRcdFx0XHRcIm9uRW50ZXJcIjogMSxcclxuXHRcdFx0XHRcdFwib25MZWF2ZVwiOiAwXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5OdW1iZXIodmFsKSkge1xyXG5cdFx0XHRcdFx0dmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFyc2VGbG9hdCh2YWwpLCAxKSk7IC8vICBtYWtlIHN1cmUgaXRzIGJldHdlZWVuIDAgYW5kIDFcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCBpbiB0cmFuc2xhdGUpIHtcclxuXHRcdFx0XHRcdHZhbCA9IHRyYW5zbGF0ZVt2YWxdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInRyaWdnZXJIb29rXFxcIjogXCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJldmVyc2U6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRyZXR1cm4gISF2YWw7IC8vIGZvcmNlIGJvb2xlYW5cclxuXHRcdFx0fSxcclxuXHRcdFx0bG9nbGV2ZWw6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUludCh2YWwpO1xyXG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSB8fCB2YWwgPCAwIHx8IHZhbCA+IDMpIHtcclxuXHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwibG9nbGV2ZWxcXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAvLyBob2xkZXIgZm9yICB2YWxpZGF0aW9uIG1ldGhvZHMuIGR1cmF0aW9uIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBpbiAnZ2V0dGVycy1zZXR0ZXJzLmpzJ1xyXG5cdFx0c2hpZnRzOiBbXCJkdXJhdGlvblwiLCBcIm9mZnNldFwiLCBcInRyaWdnZXJIb29rXCJdLCAvLyBsaXN0IG9mIG9wdGlvbnMgdGhhdCB0cmlnZ2VyIGEgYHNoaWZ0YCBldmVudFxyXG5cdH07XHJcblx0LypcclxuXHQgKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cclxuXHQgKiBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCB2YWxpZGF0aW9uQ2FsbGJhY2ssIHNoaWZ0cykge1xyXG5cdFx0aWYgKCEobmFtZSBpbiBTQ0VORV9PUFRJT05TLmRlZmF1bHRzKSkge1xyXG5cdFx0XHRTQ0VORV9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG5cdFx0XHRTQ0VORV9PUFRJT05TLnZhbGlkYXRlW25hbWVdID0gdmFsaWRhdGlvbkNhbGxiYWNrO1xyXG5cdFx0XHRpZiAoc2hpZnRzKSB7XHJcblx0XHRcdFx0U0NFTkVfT1BUSU9OUy5zaGlmdHMucHVzaChuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsIFwiW3N0YXRpY10gU2Nyb2xsTWFnaWMuU2NlbmUgLT4gQ2Fubm90IGFkZCBTY2VuZSBvcHRpb24gJ1wiICsgbmFtZSArIFwiJywgYmVjYXVzZSBpdCBhbHJlYWR5IGV4aXN0cy5cIik7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvLyBpbnN0YW5jZSBleHRlbnNpb24gZnVuY3Rpb24gZm9yIHBsdWdpbnNcclxuXHQvLyBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XHJcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHRoaXMuJHN1cGVyID0gX3V0aWwuZXh0ZW5kKHt9LCB0aGlzKTsgLy8gY29weSBwYXJlbnQgc3RhdGVcclxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcblx0XHR9O1xyXG5cdFx0X3V0aWwuZXh0ZW5kKFNjcm9sbE1hZ2ljLlNjZW5lLCBvbGRDbGFzcyk7IC8vIGNvcHkgcHJvcGVydGllc1xyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuU2NlbmU7IC8vIHJlc3RvcmUgY29uc3RydWN0b3JcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRPRE86IERPQ1MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKiBAY2xhc3NcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cclxuXHRTY3JvbGxNYWdpYy5FdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lc3BhY2UsIHRhcmdldCwgdmFycykge1xyXG5cdFx0dmFycyA9IHZhcnMgfHwge307XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gdmFycykge1xyXG5cdFx0XHR0aGlzW2tleV0gPSB2YXJzW2tleV07XHJcblx0XHR9XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy50YXJnZXQgPSB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCAnJztcclxuXHRcdHRoaXMudGltZVN0YW1wID0gdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LypcclxuXHQgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICovXHJcblxyXG5cdHZhciBfdXRpbCA9IFNjcm9sbE1hZ2ljLl91dGlsID0gKGZ1bmN0aW9uICh3aW5kb3cpIHtcclxuXHRcdHZhciBVID0ge30sXHJcblx0XHRcdGk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIGludGVybmFsIGhlbHBlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gcGFyc2UgZmxvYXQgYW5kIGZhbGwgYmFjayB0byAwLlxyXG5cdFx0dmFyIGZsb2F0dmFsID0gZnVuY3Rpb24gKG51bWJlcikge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VGbG9hdChudW1iZXIpIHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGN1cnJlbnQgc3R5bGUgSUUgc2FmZSAob3RoZXJ3aXNlIElFIHdvdWxkIHJldHVybiBjYWxjdWxhdGVkIHZhbHVlcyBmb3IgJ2F1dG8nKVxyXG5cdFx0dmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0uY3VycmVudFN0eWxlID8gZWxlbS5jdXJyZW50U3R5bGUgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXHJcblx0XHR2YXIgX2RpbWVuc2lvbiA9IGZ1bmN0aW9uICh3aGljaCwgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0ZWxlbSA9IChlbGVtID09PSBkb2N1bWVudCkgPyB3aW5kb3cgOiBlbGVtO1xyXG5cdFx0XHRpZiAoZWxlbSA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0aW5jbHVkZU1hcmdpbiA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFfdHlwZS5Eb21FbGVtZW50KGVsZW0pKSB7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHRcdFx0d2hpY2ggPSB3aGljaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdoaWNoLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR2YXIgZGltZW5zaW9uID0gKG91dGVyID8gZWxlbVsnb2Zmc2V0JyArIHdoaWNoXSB8fCBlbGVtWydvdXRlcicgKyB3aGljaF0gOiBlbGVtWydjbGllbnQnICsgd2hpY2hdIHx8IGVsZW1bJ2lubmVyJyArIHdoaWNoXSkgfHwgMDtcclxuXHRcdFx0aWYgKG91dGVyICYmIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0XHR2YXIgc3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdFx0XHRkaW1lbnNpb24gKz0gd2hpY2ggPT09ICdIZWlnaHQnID8gZmxvYXR2YWwoc3R5bGUubWFyZ2luVG9wKSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpbkJvdHRvbSkgOiBmbG9hdHZhbChzdHlsZS5tYXJnaW5MZWZ0KSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpblJpZ2h0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZGltZW5zaW9uO1xyXG5cdFx0fTtcclxuXHRcdC8vIGNvbnZlcnRzICdtYXJnaW4tdG9wJyBpbnRvICdtYXJnaW5Ub3AnXHJcblx0XHR2YXIgX2NhbWVsQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eW15hLXpdKyhbYS16XSkvZywgJyQxJykucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKGcpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ1sxXS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIGV4dGVybmFsIGhlbHBlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gZXh0ZW5kIG9iaiDigJMgc2FtZSBhcyBqUXVlcnkuZXh0ZW5kKHt9LCBvYmpBLCBvYmpCKVxyXG5cdFx0VS5leHRlbmQgPSBmdW5jdGlvbiAob2JqKSB7XHJcblx0XHRcdG9iaiA9IG9iaiB8fCB7fTtcclxuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICghYXJndW1lbnRzW2ldKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG5cdFx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRcdG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGNoZWNrIGlmIGEgY3NzIGRpc3BsYXkgdHlwZSByZXN1bHRzIGluIG1hcmdpbi1jb2xsYXBzZSBvciBub3RcclxuXHRcdFUuaXNNYXJnaW5Db2xsYXBzZVR5cGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcblx0XHRcdHJldHVybiBbXCJibG9ja1wiLCBcImZsZXhcIiwgXCJsaXN0LWl0ZW1cIiwgXCJ0YWJsZVwiLCBcIi13ZWJraXQtYm94XCJdLmluZGV4T2Yoc3RyKSA+IC0xO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBpbXBsZW1lbnRhdGlvbiBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuXHRcdC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXHJcblx0XHR2YXJcclxuXHRcdFx0bGFzdFRpbWUgPSAwLFxyXG5cdFx0XHR2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcclxuXHRcdHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHRcdHZhciBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcblx0XHQvLyB0cnkgdmVuZG9yIHByZWZpeGVzIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmtcclxuXHRcdGZvciAoaSA9IDA7ICFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmYWxsYmFja3NcclxuXHRcdGlmICghX3JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHRcdFx0dGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcclxuXHRcdFx0XHRcdGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG5cdFx0XHRcdFx0fSwgdGltZVRvQ2FsbCk7XHJcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcblx0XHRcdFx0cmV0dXJuIGlkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFfY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRVLnJBRiA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG5cdFx0VS5jQUYgPSBfY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRsb2dsZXZlbHMgPSBbXCJlcnJvclwiLCBcIndhcm5cIiwgXCJsb2dcIl0sXHJcblx0XHRcdGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyA9IGNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uICgpIHt9OyAvLyBubyBjb25zb2xlIGxvZywgd2VsbCAtIGRvIG5vdGhpbmcgdGhlbi4uLlxyXG5cdFx0Ly8gbWFrZSBzdXJlIG1ldGhvZHMgZm9yIGFsbCBsZXZlbHMgZXhpc3QuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbG9nbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBtZXRob2QgPSBsb2dsZXZlbHNbaV07XHJcblx0XHRcdGlmICghY29uc29sZVttZXRob2RdKSB7XHJcblx0XHRcdFx0Y29uc29sZVttZXRob2RdID0gY29uc29sZS5sb2c7IC8vIHByZWZlciAubG9nIG92ZXIgbm90aGluZ1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRVLmxvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCkge1xyXG5cdFx0XHRpZiAobG9nbGV2ZWwgPiBsb2dsZXZlbHMubGVuZ3RoIHx8IGxvZ2xldmVsIDw9IDApIGxvZ2xldmVsID0gbG9nbGV2ZWxzLmxlbmd0aDtcclxuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0dGltZSA9IChcIjBcIiArIG5vdy5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgbm93LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwMFwiICsgbm93LmdldE1pbGxpc2Vjb25kcygpKS5zbGljZSgtMyksXHJcblx0XHRcdFx0bWV0aG9kID0gbG9nbGV2ZWxzW2xvZ2xldmVsIC0gMV0sXHJcblx0XHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG5cdFx0XHRcdGZ1bmMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGVbbWV0aG9kXSwgY29uc29sZSk7XHJcblx0XHRcdGFyZ3MudW5zaGlmdCh0aW1lKTtcclxuXHRcdFx0ZnVuYy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHR5cGUgdGVzdGluZ1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXIgX3R5cGUgPSBVLnR5cGUgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnJlcGxhY2UoL15cXFtvYmplY3QgKC4rKVxcXSQvLCBcIiQxXCIpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuU3RyaW5nID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIF90eXBlKHYpID09PSAnc3RyaW5nJztcclxuXHRcdH07XHJcblx0XHRfdHlwZS5GdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ2Z1bmN0aW9uJztcclxuXHRcdH07XHJcblx0XHRfdHlwZS5BcnJheSA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLk51bWJlciA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiAhX3R5cGUuQXJyYXkodikgJiYgKHYgLSBwYXJzZUZsb2F0KHYpICsgMSkgPj0gMDtcclxuXHRcdH07XHJcblx0XHRfdHlwZS5Eb21FbGVtZW50ID0gZnVuY3Rpb24gKG8pIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHR0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcImZ1bmN0aW9uXCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbyBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgOiAvL0RPTTJcclxuXHRcdFx0XHRvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRE9NIEVsZW1lbnQgaW5mb1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdC8vIGFsd2F5cyByZXR1cm5zIGEgbGlzdCBvZiBtYXRjaGluZyBET00gZWxlbWVudHMsIGZyb20gYSBzZWxlY3RvciwgYSBET00gZWxlbWVudCBvciBhbiBsaXN0IG9mIGVsZW1lbnRzIG9yIGV2ZW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3JzXHJcblx0XHR2YXIgX2dldCA9IFUuZ2V0ID0ge307XHJcblx0XHRfZ2V0LmVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblx0XHRcdHZhciBhcnIgPSBbXTtcclxuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhzZWxlY3RvcikpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7IC8vIGludmFsaWQgc2VsZWN0b3JcclxuXHRcdFx0XHRcdHJldHVybiBhcnI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfdHlwZShzZWxlY3RvcikgPT09ICdub2RlbGlzdCcgfHwgX3R5cGUuQXJyYXkoc2VsZWN0b3IpIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgcmVmID0gYXJyLmxlbmd0aCA9IHNlbGVjdG9yLmxlbmd0aDsgaSA8IHJlZjsgaSsrKSB7IC8vIGxpc3Qgb2YgZWxlbWVudHNcclxuXHRcdFx0XHRcdHZhciBlbGVtID0gc2VsZWN0b3JbaV07XHJcblx0XHRcdFx0XHRhcnJbaV0gPSBfdHlwZS5Eb21FbGVtZW50KGVsZW0pID8gZWxlbSA6IF9nZXQuZWxlbWVudHMoZWxlbSk7IC8vIGlmIG5vdCBhbiBlbGVtZW50LCB0cnkgdG8gcmVzb2x2ZSByZWN1cnNpdmVseVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5Eb21FbGVtZW50KHNlbGVjdG9yKSB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQgfHwgc2VsZWN0b3IgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGFyciA9IFtzZWxlY3Rvcl07IC8vIG9ubHkgdGhlIGVsZW1lbnRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBzY3JvbGwgdG9wIHZhbHVlXHJcblx0XHRfZ2V0LnNjcm9sbFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdHJldHVybiAoZWxlbSAmJiB0eXBlb2YgZWxlbS5zY3JvbGxUb3AgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IHNjcm9sbCBsZWZ0IHZhbHVlXHJcblx0XHRfZ2V0LnNjcm9sbExlZnQgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsTGVmdCA9PT0gJ251bWJlcicpID8gZWxlbS5zY3JvbGxMZWZ0IDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgaGVpZ2h0XHJcblx0XHRfZ2V0LndpZHRoID0gZnVuY3Rpb24gKGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCd3aWR0aCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgZWxlbWVudCB3aWR0aFxyXG5cdFx0X2dldC5oZWlnaHQgPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0cmV0dXJuIF9kaW1lbnNpb24oJ2hlaWdodCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgcG9zaXRpb24gKG9wdGlvbmFsbHkgcmVsYXRpdmUgdG8gdmlld3BvcnQpXHJcblx0XHRfZ2V0Lm9mZnNldCA9IGZ1bmN0aW9uIChlbGVtLCByZWxhdGl2ZVRvVmlld3BvcnQpIHtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoZWxlbSAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgeyAvLyBjaGVjayBpZiBhdmFpbGFibGVcclxuXHRcdFx0XHR2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0b2Zmc2V0LnRvcCA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdG9mZnNldC5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRcdGlmICghcmVsYXRpdmVUb1ZpZXdwb3J0KSB7IC8vIGNsaWVudFJlY3QgaXMgYnkgZGVmYXVsdCByZWxhdGl2ZSB0byB2aWV3cG9ydC4uLlxyXG5cdFx0XHRcdFx0b2Zmc2V0LnRvcCArPSBfZ2V0LnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRcdFx0b2Zmc2V0LmxlZnQgKz0gX2dldC5zY3JvbGxMZWZ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvZmZzZXQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBET00gRWxlbWVudCBtYW5pcHVsYXRpb25cclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0VS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcclxuXHRcdFx0aWYgKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRcdGlmIChlbGVtLmNsYXNzTGlzdClcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzbmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdFUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XHJcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QpXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NuYW1lKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdC8vIGlmIG9wdGlvbnMgaXMgc3RyaW5nIC0+IHJldHVybnMgY3NzIHZhbHVlXHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIGFycmF5IC0+IHJldHVybnMgb2JqZWN0IHdpdGggY3NzIHZhbHVlIHBhaXJzXHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIG9iamVjdCAtPiBzZXQgbmV3IGNzcyB2YWx1ZXNcclxuXHRcdFUuY3NzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhvcHRpb25zKSkge1xyXG5cdFx0XHRcdHJldHVybiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtfY2FtZWxDYXNlKG9wdGlvbnMpXTtcclxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5BcnJheShvcHRpb25zKSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0b2JqID0ge30sXHJcblx0XHRcdFx0XHRzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG5cdFx0XHRcdG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uLCBrZXkpIHtcclxuXHRcdFx0XHRcdG9ialtvcHRpb25dID0gc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XHJcblx0XHRcdFx0XHR2YXIgdmFsID0gb3B0aW9uc1tvcHRpb25dO1xyXG5cdFx0XHRcdFx0aWYgKHZhbCA9PSBwYXJzZUZsb2F0KHZhbCkpIHsgLy8gYXNzdW1lIHBpeGVsIGZvciBzZWVtaW5nbHkgbnVtZXJpY2FsIHZhbHVlc1xyXG5cdFx0XHRcdFx0XHR2YWwgKz0gJ3B4JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsZW0uc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXSA9IHZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIFU7XHJcblx0fSh3aW5kb3cgfHwge30pKTtcclxuXHJcblxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5hZGRJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgYWRkSW5kaWNhdG9ycygpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdkZWJ1Zy5hZGRJbmRpY2F0b3JzXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVJbmRpY2F0b3JzKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2RlYnVnLmFkZEluZGljYXRvcnNcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VHdlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlVHdlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZVZlbG9jaXR5KCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi52ZWxvY2l0eVxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLnZlbG9jaXR5LmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHJldHVybiBTY3JvbGxNYWdpYztcclxufSkpOyIsIiQgPSBqUXVlcnk7XG5cbi8qKlxuICogT24gbW91c2VudGVyIHdlIGV4cGFuZCB0aGUgZXhwZXJ0aXNlIHNlY3Rpb25zXG4gKlxuICovXG5mdW5jdGlvbiBleHBlcnRpc2VIb3ZlcigpIHtcblxuXG4gICQoJy5leHBlcnRpc2UgLml0ZW0nKS5vbiggJ21vdXNlZW50ZXInLFxuXG4gICAgZnVuY3Rpb24oKXtcbiAgICAgIGlmICghJCh0aGlzKS5maW5kKFwiLmxpbmtib3hcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHsgLy8gSWYgYWN0aXZlIG5vdGhpbmcgaGFwcGVuc1xuXG4gICAgICAgICQoJy5saW5rYm94LmFjdGl2ZScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpOyAvLyBEZWFjdGl2YXRlIGFjdGl2ZVxuICAgICAgICAkKHRoaXMpLmZpbmQoXCIubGlua2JveFwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgLy8gQWRkIGFjdGl2ZVxuICAgICAgICAkKCcuZXhwZXJ0aXNlLWV4cGFuc2lvbicpLnNsaWRlRG93bigpOyAvLyBNYWtlIHRoZSBjb250YWluZXIgdmlzaWJsZVxuXG5cbiAgICAgICAgJCgnI2V4cGFuZCcpLnRleHQoJCh0aGlzKS5maW5kKCcuc2xpZGVvdXQnKS50ZXh0KCkpOyAvLyBTZXQgY29udGFpbmVyIHRleHRcblxuICAgICAgfVxuICAgIH1cblxuXG4gICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwZXJ0aXNlSG92ZXI7XG4iLCJpbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMnO1xuaW1wb3J0ICdpbXBvcnRzLWxvYWRlcj9kZWZpbmU9PmZhbHNlIXNjcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9wbHVnaW5zL2FuaW1hdGlvbi5nc2FwJztcbi8vaW1wb3J0IFwiaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZSFzY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzXCI7XG5pbXBvcnQgVHdlZW5NYXggZnJvbSAnZ3NhcCc7XG5cbiQgPSBqUXVlcnk7XG5cbmZ1bmN0aW9uIGluaXRIZWFkZXJTY3JvbGwoKXtcblxubGV0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xuXG5cdC8vIGJ1aWxkIHNjZW5lc1xubGV0IGhlYWRlclNjcm9sbCA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgb2Zmc2V0OiAxNTBcbn0pXG5cdFx0XHRcdFx0LnNldENsYXNzVG9nZ2xlKFwiI2hlYWRlci1tYWluXCIsIFwic2Nyb2xsZWRcIikgLy8gYWRkIGNsYXNzIHRvZ2dsZVxuXHRcdFx0XHRcdC8vLmFkZEluZGljYXRvcnMoKSAvLyBhZGQgaW5kaWNhdG9ycyAocmVxdWlyZXMgcGx1Z2luKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIFxufVxuXG5mdW5jdGlvbiBwb3BJblN0YWdnZXIoaXRlbXMsdHJpZ2dlciwgZHVyYXRpb249MCwgdHJpZ2dlclBvcz0wLjUpe1xuXHRsZXQgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cblx0bGV0IHRlY2hJbiA9IG5ldyBUd2Vlbk1heC5zdGFnZ2VyRnJvbShpdGVtcywwLjIse1xuXHRcdGF1dG9BbHBoYTogMCxcblx0XHRzY2FsZTogMlxuXHR9LDAuMSk7XG5cblx0bGV0IHRlY2hTY3JvbGwgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuXHRcdHRyaWdnZXJFbGVtZW50OiB0cmlnZ2VyLFxuXHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRyZXZlcnNlOiBmYWxzZSxcblx0XHR0cmlnZ2VySG9vazogdHJpZ2dlclBvcyxcblx0fSlcblx0LnNldFR3ZWVuKHRlY2hJbilcblx0Ly8uYWRkSW5kaWNhdG9ycygpXG5cdC5hZGRUbyhjb250cm9sbGVyKTtcblxufVxuXG5leHBvcnQgeyBpbml0SGVhZGVyU2Nyb2xsLCBwb3BJblN0YWdnZXIgfTsiLCJpbXBvcnQge1xuICAgIHBvcEluU3RhZ2dlclxufSBmcm9tICcuL2pzL3Njcm9sbCc7XG5pbXBvcnQgZXhwZXJ0aXNlSG92ZXIgZnJvbSAnLi9qcy9leHBlcnRpc2UnO1xuXG5cbmV4cGVydGlzZUhvdmVyKCk7XG5cbnBvcEluU3RhZ2dlcignLnRlY2gtaXRlbScsICcjdGVjaG5vbG9naWVzJywgMzAwKTsiXSwic291cmNlUm9vdCI6IiJ9