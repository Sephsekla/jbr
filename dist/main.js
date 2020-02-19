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

/***/ "./node_modules/.pnpm/registry.npmjs.org/imports-loader/0.7.1/node_modules/imports-loader/index.js?define=>false!./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/imports-loader/0.7.1/node_modules/imports-loader?define=>false!./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
 * @file Debug Extension for ScrollMagic.
 */
/**
 * This plugin was formerly known as the ScrollMagic debug extension.
 *
 * It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
 *
 * To have access to this extension, please include `plugins/debug.addIndicators.js`.
 * @mixin debug.addIndicators
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic'], factory);
	} else if (true) {
		// CommonJS
		factory(__webpack_require__(/*! scrollmagic */ "./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"));
	} else {}
}(this, function (ScrollMagic) {
	"use strict";
	var NAMESPACE = "debug.addIndicators";

	var
		console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}

	// plugin settings
	var
		FONT_SIZE = "0.85em",
		ZINDEX = "9999",
		EDGE_OFFSET = 15; // minimum edge distance, added to indentation

	// overall vars
	var
		_util = ScrollMagic._util,
		_autoindex = 0;



	ScrollMagic.Scene.extend(function () {
		var
			Scene = this,
			_indicator;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		/**
		 * Add visual indicators for a ScrollMagic.Scene.  
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // add basic indicators
		 * scene.addIndicators()
		 *
		 * // passing options
		 * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
		 *
		 * @param {object} [options] - An object containing one or more options for the indicators.
		 * @param {(string|object)} [options.parent] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
		 														 														 If undefined, the controller's container will be used.
		 * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
		 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
		 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
		 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
		 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
		 */
		Scene.addIndicators = function (options) {
			if (!_indicator) {
				var
					DEFAULT_OPTIONS = {
						name: "",
						indent: 0,
						parent: undefined,
						colorStart: "green",
						colorEnd: "red",
						colorTrigger: "blue",
					};

				options = _util.extend({}, DEFAULT_OPTIONS, options);

				_autoindex++;
				_indicator = new Indicator(Scene, options);

				Scene.on("add.plugin_addIndicators", _indicator.add);
				Scene.on("remove.plugin_addIndicators", _indicator.remove);
				Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

				// it the scene already has a controller we can start right away.
				if (Scene.controller()) {
					_indicator.add();
				}
			}
			return Scene;
		};

		/**
		 * Removes visual indicators from a ScrollMagic.Scene.
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // remove previously added indicators
		 * scene.removeIndicators()
		 *
		 */
		Scene.removeIndicators = function () {
			if (_indicator) {
				_indicator.remove();
				this.off("*.plugin_addIndicators");
				_indicator = undefined;
			}
			return Scene;
		};

	});


	/*
	 * ----------------------------------------------------------------
	 * Extension for controller to store and update related indicators
	 * ----------------------------------------------------------------
	 */
	// add option to globally auto-add indicators to scenes
	/**
	 * Every ScrollMagic.Controller instance now accepts an additional option.  
	 * See {@link ScrollMagic.Controller} for a complete list of the standard options.
	 * @memberof! debug.addIndicators#
	 * @method new ScrollMagic.Controller(options)
	 * @example
	 * // make a controller and add indicators to all scenes attached
	 * var controller = new ScrollMagic.Controller({addIndicators: true});
	 * // this scene will automatically have indicators added to it
	 * new ScrollMagic.Scene()
	 *                .addTo(controller);
	 *
	 * @param {object} [options] - Options for the Controller.
	 * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
	 */
	ScrollMagic.Controller.addOption("addIndicators", false);
	// extend Controller
	ScrollMagic.Controller.extend(function () {
		var
			Controller = this,
			_info = Controller.info(),
			_container = _info.container,
			_isDocument = _info.isDocument,
			_vertical = _info.vertical,
			_indicators = { // container for all indicators and methods
				groups: []
			};

		var log = function () {
			if (Controller._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Controller._log.apply(this, arguments);
			}
		};
		if (Controller._indicators) {
			log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
		}

		// add indicators container
		this._indicators = _indicators;
		/*
			needed updates:
			+++++++++++++++
			start/end position on scene shift (handled in Indicator class)
			trigger parameters on triggerHook value change (handled in Indicator class)
			bounds position on container scroll or resize (to keep alignment to bottom/right)
			trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
		*/

		// event handler for when associated bounds markers need to be repositioned
		var handleBoundsPositionChange = function () {
			_indicators.updateBoundsPositions();
		};

		// event handler for when associated trigger groups need to be repositioned
		var handleTriggerPositionChange = function () {
			_indicators.updateTriggerGroupPositions();
		};

		_container.addEventListener("resize", handleTriggerPositionChange);
		if (!_isDocument) {
			window.addEventListener("resize", handleTriggerPositionChange);
			window.addEventListener("scroll", handleTriggerPositionChange);
		}
		// update all related bounds containers
		_container.addEventListener("resize", handleBoundsPositionChange);
		_container.addEventListener("scroll", handleBoundsPositionChange);


		// updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
		this._indicators.updateBoundsPositions = function (specificIndicator) {
			var // constant for all bounds
				groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
					members: [specificIndicator]
				})] : // create a group with only one element
				_indicators.groups, // use all
				g = groups.length,
				css = {},
				paramPos = _vertical ? "left" : "top",
				paramDimension = _vertical ? "width" : "height",
				edge = _vertical ?
				_util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET :
				_util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
				b, triggerSize, group;
			while (g--) { // group loop
				group = groups[g];
				b = group.members.length;
				triggerSize = _util.get[paramDimension](group.element.firstChild);
				while (b--) { // indicators loop
					css[paramPos] = edge - triggerSize;
					_util.css(group.members[b].bounds, css);
				}
			}
		};

		// updates the positions of all trigger groups attached to a controller or a specific one, if provided
		this._indicators.updateTriggerGroupPositions = function (specificGroup) {
			var // constant vars
				groups = specificGroup ? [specificGroup] : _indicators.groups,
				i = groups.length,
				container = _isDocument ? document.body : _container,
				containerOffset = _isDocument ? {
					top: 0,
					left: 0
				} : _util.get.offset(container, true),
				edge = _vertical ?
				_util.get.width(_container) - EDGE_OFFSET :
				_util.get.height(_container) - EDGE_OFFSET,
				paramDimension = _vertical ? "width" : "height",
				paramTransform = _vertical ? "Y" : "X";
			var // changing vars
				group,
				elem,
				pos,
				elemSize,
				transform;
			while (i--) {
				group = groups[i];
				elem = group.element;
				pos = group.triggerHook * Controller.info("size");
				elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
				transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

				_util.css(elem, {
					top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
					left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
				});
				_util.css(elem.firstChild.firstChild, {
					"-ms-transform": transform,
					"-webkit-transform": transform,
					"transform": transform
				});
			}
		};

		// updates the label for the group to contain the name, if it only has one member
		this._indicators.updateTriggerGroupLabel = function (group) {
			var
				text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
				elem = group.element.firstChild.firstChild,
				doUpdate = elem.textContent !== text;
			if (doUpdate) {
				elem.textContent = text;
				if (_vertical) { // bounds position is dependent on text length, so update
					_indicators.updateBoundsPositions();
				}
			}
		};

		// add indicators if global option is set
		this.addScene = function (newScene) {

			if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
				newScene.addIndicators();
			}
			// call original destroy method
			this.$super.addScene.apply(this, arguments);
		};

		// remove all previously set listeners on destroy
		this.destroy = function () {
			_container.removeEventListener("resize", handleTriggerPositionChange);
			if (!_isDocument) {
				window.removeEventListener("resize", handleTriggerPositionChange);
				window.removeEventListener("scroll", handleTriggerPositionChange);
			}
			_container.removeEventListener("resize", handleBoundsPositionChange);
			_container.removeEventListener("scroll", handleBoundsPositionChange);
			// call original destroy method
			this.$super.destroy.apply(this, arguments);
		};
		return Controller;

	});

	/*
	 * ----------------------------------------------------------------
	 * Internal class for the construction of Indicators
	 * ----------------------------------------------------------------
	 */
	var Indicator = function (Scene, options) {
		var
			Indicator = this,
			_elemBounds = TPL.bounds(),
			_elemStart = TPL.start(options.colorStart),
			_elemEnd = TPL.end(options.colorEnd),
			_boundsContainer = options.parent && _util.get.elements(options.parent)[0],
			_vertical,
			_ctrl;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		options.name = options.name || _autoindex;

		// prepare bounds elements
		_elemStart.firstChild.textContent += " " + options.name;
		_elemEnd.textContent += " " + options.name;
		_elemBounds.appendChild(_elemStart);
		_elemBounds.appendChild(_elemEnd);

		// set public variables
		Indicator.options = options;
		Indicator.bounds = _elemBounds;
		// will be set later
		Indicator.triggerGroup = undefined;

		// add indicators to DOM
		this.add = function () {
			_ctrl = Scene.controller();
			_vertical = _ctrl.info("vertical");

			var isDocument = _ctrl.info("isDocument");

			if (!_boundsContainer) {
				// no parent supplied or doesnt exist
				_boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
			}
			if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
				// position mode needed for correct positioning of indicators
				_util.css(_boundsContainer, {
					position: "relative"
				});
			}

			// add listeners for updates
			Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
			Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

			// updates trigger & bounds (will add elements if needed)
			updateTriggerGroup();
			updateBounds();

			setTimeout(function () { // do after all execution is finished otherwise sometimes size calculations are off
				_ctrl._indicators.updateBoundsPositions(Indicator);
			}, 0);

			log(3, "added indicators");
		};

		// remove indicators from DOM
		this.remove = function () {
			if (Indicator.triggerGroup) { // if not set there's nothing to remove
				Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
				Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

				if (Indicator.triggerGroup.members.length > 1) {
					// just remove from memberlist of old group
					var group = Indicator.triggerGroup;
					group.members.splice(group.members.indexOf(Indicator), 1);
					_ctrl._indicators.updateTriggerGroupLabel(group);
					_ctrl._indicators.updateTriggerGroupPositions(group);
					Indicator.triggerGroup = undefined;
				} else {
					// remove complete group
					removeTriggerGroup();
				}
				removeBounds();

				log(3, "removed indicators");
			}
		};

		/*
		 * ----------------------------------------------------------------
		 * internal Event Handlers
		 * ----------------------------------------------------------------
		 */

		// event handler for when bounds params change
		var handleBoundsParamsChange = function () {
			updateBounds();
		};

		// event handler for when trigger params change
		var handleTriggerParamsChange = function (e) {
			if (e.what === "triggerHook") {
				updateTriggerGroup();
			}
		};

		/*
		 * ----------------------------------------------------------------
		 * Bounds (start / stop) management
		 * ----------------------------------------------------------------
		 */

		// adds an new bounds elements to the array and to the DOM
		var addBounds = function () {
			var v = _ctrl.info("vertical");
			// apply stuff we didn't know before...
			_util.css(_elemStart.firstChild, {
				"border-bottom-width": v ? 1 : 0,
				"border-right-width": v ? 0 : 1,
				"bottom": v ? -1 : options.indent,
				"right": v ? options.indent : -1,
				"padding": v ? "0 8px" : "2px 4px",
			});
			_util.css(_elemEnd, {
				"border-top-width": v ? 1 : 0,
				"border-left-width": v ? 0 : 1,
				"top": v ? "100%" : "",
				"right": v ? options.indent : "",
				"bottom": v ? "" : options.indent,
				"left": v ? "" : "100%",
				"padding": v ? "0 8px" : "2px 4px"
			});
			// append
			_boundsContainer.appendChild(_elemBounds);
		};

		// remove bounds from list and DOM
		var removeBounds = function () {
			_elemBounds.parentNode.removeChild(_elemBounds);
		};

		// update the start and end positions of the scene
		var updateBounds = function () {
			if (_elemBounds.parentNode !== _boundsContainer) {
				addBounds(); // Add Bounds elements (start/end)
			}
			var css = {};
			css[_vertical ? "top" : "left"] = Scene.triggerPosition();
			css[_vertical ? "height" : "width"] = Scene.duration();
			_util.css(_elemBounds, css);
			_util.css(_elemEnd, {
				display: Scene.duration() > 0 ? "" : "none"
			});
		};

		/*
		 * ----------------------------------------------------------------
		 * trigger and trigger group management
		 * ----------------------------------------------------------------
		 */

		// adds an new trigger group to the array and to the DOM
		var addTriggerGroup = function () {
			var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
			var css = {};
			css[_vertical ? "right" : "bottom"] = 0;
			css[_vertical ? "border-top-width" : "border-left-width"] = 1;
			_util.css(triggerElem.firstChild, css);
			_util.css(triggerElem.firstChild.firstChild, {
				padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
			});
			document.body.appendChild(triggerElem); // directly add to body
			var newGroup = {
				triggerHook: Scene.triggerHook(),
				element: triggerElem,
				members: [Indicator]
			};
			_ctrl._indicators.groups.push(newGroup);
			Indicator.triggerGroup = newGroup;
			// update right away
			_ctrl._indicators.updateTriggerGroupLabel(newGroup);
			_ctrl._indicators.updateTriggerGroupPositions(newGroup);
		};

		var removeTriggerGroup = function () {
			_ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
			Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
			Indicator.triggerGroup = undefined;
		};

		// updates the trigger group -> either join existing or add new one
		/*	
		 * Logic:
		 * 1 if a trigger group exist, check if it's in sync with Scene settings – if so, nothing else needs to happen
		 * 2 try to find an existing one that matches Scene parameters
		 * 	 2.1 If a match is found check if already assigned to an existing group
		 *			 If so:
		 *       A: it was the last member of existing group -> kill whole group
		 *       B: the existing group has other members -> just remove from member list
		 *	 2.2 Assign to matching group
		 * 3 if no new match could be found, check if assigned to existing group
		 *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
		 *   B: yes but there are other members -> remove from member list and create a new one
		 *   C: no, so create a new one
		 */
		var updateTriggerGroup = function () {
			var
				triggerHook = Scene.triggerHook(),
				closeEnough = 0.0001;

			// Have a group, check if it still matches
			if (Indicator.triggerGroup) {
				if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
					// _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
					return; // all good
				}
			}
			// Don't have a group, check if a matching one exists
			// _util.log(0, "trigger", options.name, "->", "out of sync!");
			var
				groups = _ctrl._indicators.groups,
				group,
				i = groups.length;
			while (i--) {
				group = groups[i];
				if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
					// found a match!
					// _util.log(0, "trigger", options.name, "->", "found match");
					if (Indicator.triggerGroup) { // do I have an old group that is out of sync?
						if (Indicator.triggerGroup.members.length === 1) { // is it the only remaining group?
							// _util.log(0, "trigger", options.name, "->", "kill");
							// was the last member, remove the whole group
							removeTriggerGroup();
						} else {
							Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
							_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
							_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
							// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
						}
					}
					// join new group
					group.members.push(Indicator);
					Indicator.triggerGroup = group;
					_ctrl._indicators.updateTriggerGroupLabel(group);
					return;
				}
			}

			// at this point I am obviously out of sync and don't match any other group
			if (Indicator.triggerGroup) {
				if (Indicator.triggerGroup.members.length === 1) {
					// _util.log(0, "trigger", options.name, "->", "updating existing");
					// out of sync but i'm the only member => just change and update
					Indicator.triggerGroup.triggerHook = triggerHook;
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					return;
				} else {
					// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
					Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
					_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					Indicator.triggerGroup = undefined; // need a brand new group...
				}
			}
			// _util.log(0, "trigger", options.name, "->", "add a new one");
			// did not find any match, make new trigger group
			addTriggerGroup();
		};
	};

	/*
	 * ----------------------------------------------------------------
	 * Templates for the indicators
	 * ----------------------------------------------------------------
	 */
	var TPL = {
		start: function (color) {
			// inner element (for bottom offset -1, while keeping top position 0)
			var inner = document.createElement("div");
			inner.textContent = "start";
			_util.css(inner, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			var e = document.createElement('div');
			// wrapper
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				width: 0,
				height: 0
			});
			e.appendChild(inner);
			return e;
		},
		end: function (color) {
			var e = document.createElement('div');
			e.textContent = "end";
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			return e;
		},
		bounds: function () {
			var e = document.createElement('div');
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			return e;
		},
		trigger: function (color) {
			// inner to be above or below line but keep position
			var inner = document.createElement('div');
			inner.textContent = "trigger";
			_util.css(inner, {
				position: "relative",
			});
			// inner wrapper for right: 0 and main element has no size
			var w = document.createElement('div');
			_util.css(w, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			w.appendChild(inner);
			// wrapper
			var e = document.createElement('div');
			_util.css(e, {
				position: "fixed",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			e.appendChild(w);
			return e;
		},
	};

}));


/***/ }),

/***/ "./node_modules/.pnpm/registry.npmjs.org/parallax-js/3.1.0/node_modules/parallax-js/dist/parallax.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/parallax-js/3.1.0/node_modules/parallax-js/dist/parallax.js ***!
  \***********************************************************************************************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/4.41.5_webpack@4.41.5/node_modules/webpack/buildin/global.js */ "./node_modules/.pnpm/registry.npmjs.org/webpack/4.41.5_webpack@4.41.5/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js ***!
  \**********************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/registry.npmjs.org/webpack/4.41.5_webpack@4.41.5/node_modules/webpack/buildin/global.js":
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

var _parallaxJs = __webpack_require__(/*! parallax-js */ "./node_modules/.pnpm/registry.npmjs.org/parallax-js/3.1.0/node_modules/parallax-js/dist/parallax.js");

var _parallaxJs2 = _interopRequireDefault(_parallaxJs);

var _scroll = __webpack_require__(/*! ./js/scroll.js */ "./src/js/scroll.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

$ = jQuery;

$('.toggle-nav').click(function () {
  $('body').toggleClass('nav-open');
});

var scene = document.getElementById('parallax');
/*var parallaxInstance = new Parallax(scene,{
    limitX: 10,
    limitY: 10,
    scalarX: 2,
    scalarY: 2,
});
*/

console.log('Ah, you have opened the console.\n\nI too like to live dangerously.\n\n\n       *(((((((((((((((((((((((((((((((((((((((((((((((((                       \n         (((((((((((((((((((((((((((((((((((((((((((((((((/                     \n          ((((((((((((((((((((((((((((((((((((((((((((((((((                    \n           (((((       ((((((                   ((((((((     @@@@@@@@@@@@@@     \n            ((((       ((((((                     /(((((      @@@@@@@@@@@@@@@@  \n              ((       ((((((      (((((((((.      (((((       (        @@@@@@@ \n               (       ((((((      ((((((((((       ((((       ((        @@@@@@.\n                       ((((((      (((((((((*      (((((       (((       @@@@@@ \n                &      ((((((                    (((((((       ((((,   @@@@@@@# \n                &@%    ((((((                    (((((((             @@@@@@@@   \n                &@@@   ((((((      (((((((((       (((((              @@@@      \n                &@@@@  ((((((      (((((((((((      ((((       (((((   @@@@     \n*@@@@@@         @@@@@@ ((((((      (((((((((((      ((((       ((((((    @@@    \n@@@@@@@       @@@@@@@ ,(((((      (((((((((        ((((       ((((((((   @@@&  \n @@@@@@@@@@@@@@@@@@&    ((((                     ((((((       (((((((((   @@@@ \n    @@@@@@@@@@@@%        (((                  (((((((((       ((((((((((   @@@@\n                          (((((((((((((((((((((((((((((((((((((((((((((((((((  \n                           /(((((((((((((((((((((((((((((((((((((((((((((((((( \n\n\n\n');

window.addEventListener('beforeunload', function (event) {
  $('.loader').addClass("active");
});

window.addEventListener('DOMContentLoaded', function (event) {
  $('.loader-2').removeClass("active");
  $('body').addClass('content-loaded');
});

(0, _scroll.initHeaderScroll)();

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
exports.initHeaderScroll = undefined;

var _scrollmagic = __webpack_require__(/*! scrollmagic */ "./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

__webpack_require__(/*! imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js */ "./node_modules/.pnpm/registry.npmjs.org/imports-loader/0.7.1/node_modules/imports-loader/index.js?define=>false!./node_modules/.pnpm/registry.npmjs.org/scrollmagic/2.0.7/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

$ = jQuery;

function initHeaderScroll() {

  var controller = new _scrollmagic2.default.Controller();

  // build scenes
  var headerScroll = new _scrollmagic2.default.Scene({
    offset: 150
  }).setClassToggle("#header-main", "scrolled") // add class toggle
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller);
}

exports.initHeaderScroll = initHeaderScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9zY3JvbGxtYWdpYy8yLjAuNy9ub2RlX21vZHVsZXMvc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL3BsdWdpbnMvZGVidWcuYWRkSW5kaWNhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtanMub3JnL3BhcmFsbGF4LWpzLzMuMS4wL25vZGVfbW9kdWxlcy9wYXJhbGxheC1qcy9kaXN0L3BhcmFsbGF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1qcy5vcmcvc2Nyb2xsbWFnaWMvMi4wLjcvbm9kZV9tb2R1bGVzL3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/MjExMSJdLCJuYW1lcyI6WyIkIiwic2NlbmUiLCJkb2N1bWVudCIsImNvbnNvbGUiLCJ3aW5kb3ciLCJjb250cm9sbGVyIiwiU2Nyb2xsTWFnaWMiLCJoZWFkZXJTY3JvbGwiLCJvZmZzZXQiLCJpbml0SGVhZGVyU2Nyb2xsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUIsNEJBQTRCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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VCx5QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbi8qIVxyXG4gKiBTY3JvbGxNYWdpYyB2Mi4wLjcgKDIwMTktMDUtMDcpXHJcbiAqIFRoZSBqYXZhc2NyaXB0IGxpYnJhcnkgZm9yIG1hZ2ljYWwgc2Nyb2xsIGludGVyYWN0aW9ucy5cclxuICogKGMpIDIwMTkgSmFuIFBhZXBrZSAoQGphbnBhZXBrZSlcclxuICogUHJvamVjdCBXZWJzaXRlOiBodHRwOi8vc2Nyb2xsbWFnaWMuaW9cclxuICogXHJcbiAqIEB2ZXJzaW9uIDIuMC43XHJcbiAqIEBsaWNlbnNlIER1YWwgbGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2UgYW5kIEdQTC5cclxuICogQGF1dGhvciBKYW4gUGFlcGtlIC0gZS1tYWlsQGphbnBhZXBrZS5kZVxyXG4gKlxyXG4gKiBAZmlsZSBEZWJ1ZyBFeHRlbnNpb24gZm9yIFNjcm9sbE1hZ2ljLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoaXMgcGx1Z2luIHdhcyBmb3JtZXJseSBrbm93biBhcyB0aGUgU2Nyb2xsTWFnaWMgZGVidWcgZXh0ZW5zaW9uLlxyXG4gKlxyXG4gKiBJdCBlbmFibGVzIHlvdSB0byBhZGQgdmlzdWFsIGluZGljYXRvcnMgdG8geW91ciBwYWdlLCB0byBiZSBhYmxlIHRvIHNlZSBleGFjdGx5IHdoZW4gYSBzY2VuZSBpcyB0cmlnZ2VyZWQuXHJcbiAqXHJcbiAqIFRvIGhhdmUgYWNjZXNzIHRvIHRoaXMgZXh0ZW5zaW9uLCBwbGVhc2UgaW5jbHVkZSBgcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzYC5cclxuICogQG1peGluIGRlYnVnLmFkZEluZGljYXRvcnNcclxuICovXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuXHRcdGRlZmluZShbJ1Njcm9sbE1hZ2ljJ10sIGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0ZmFjdG9yeShyZXF1aXJlKCdzY3JvbGxtYWdpYycpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gbm8gYnJvd3NlciBnbG9iYWwgZXhwb3J0IG5lZWRlZCwganVzdCBleGVjdXRlXHJcblx0XHRmYWN0b3J5KHJvb3QuU2Nyb2xsTWFnaWMgfHwgKHJvb3QualF1ZXJ5ICYmIHJvb3QualF1ZXJ5LlNjcm9sbE1hZ2ljKSk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChTY3JvbGxNYWdpYykge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdHZhciBOQU1FU1BBQ0UgPSBcImRlYnVnLmFkZEluZGljYXRvcnNcIjtcclxuXHJcblx0dmFyXHJcblx0XHRjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30sXHJcblx0XHRlcnIgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGUuZXJyb3IgfHwgY29uc29sZS5sb2cgfHwgZnVuY3Rpb24gKCkge30sIGNvbnNvbGUpO1xyXG5cdGlmICghU2Nyb2xsTWFnaWMpIHtcclxuXHRcdGVycihcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPiBFUlJPUjogVGhlIFNjcm9sbE1hZ2ljIG1haW4gbW9kdWxlIGNvdWxkIG5vdCBiZSBmb3VuZC4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIGxvYWRlZCBiZWZvcmUgdGhpcyBwbHVnaW4gb3IgdXNlIGFuIGFzeW5jaHJvbm91cyBsb2FkZXIgbGlrZSByZXF1aXJlanMuXCIpO1xyXG5cdH1cclxuXHJcblx0Ly8gcGx1Z2luIHNldHRpbmdzXHJcblx0dmFyXHJcblx0XHRGT05UX1NJWkUgPSBcIjAuODVlbVwiLFxyXG5cdFx0WklOREVYID0gXCI5OTk5XCIsXHJcblx0XHRFREdFX09GRlNFVCA9IDE1OyAvLyBtaW5pbXVtIGVkZ2UgZGlzdGFuY2UsIGFkZGVkIHRvIGluZGVudGF0aW9uXHJcblxyXG5cdC8vIG92ZXJhbGwgdmFyc1xyXG5cdHZhclxyXG5cdFx0X3V0aWwgPSBTY3JvbGxNYWdpYy5fdXRpbCxcclxuXHRcdF9hdXRvaW5kZXggPSAwO1xyXG5cclxuXHJcblxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLmV4dGVuZChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXJcclxuXHRcdFx0U2NlbmUgPSB0aGlzLFxyXG5cdFx0XHRfaW5kaWNhdG9yO1xyXG5cclxuXHRcdHZhciBsb2cgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChTY2VuZS5fbG9nKSB7IC8vIG5vdCBhdmFpbGFibGUsIHdoZW4gbWFpbiBzb3VyY2UgbWluaWZpZWRcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKVwiLCBcIi0+XCIpO1xyXG5cdFx0XHRcdFNjZW5lLl9sb2cuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCB2aXN1YWwgaW5kaWNhdG9ycyBmb3IgYSBTY3JvbGxNYWdpYy5TY2VuZS4gIFxyXG5cdFx0ICogQG1lbWJlcm9mISBkZWJ1Zy5hZGRJbmRpY2F0b3JzI1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBhZGQgYmFzaWMgaW5kaWNhdG9yc1xyXG5cdFx0ICogc2NlbmUuYWRkSW5kaWNhdG9ycygpXHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcGFzc2luZyBvcHRpb25zXHJcblx0XHQgKiBzY2VuZS5hZGRJbmRpY2F0b3JzKHtuYW1lOiBcInBpbiBzY2VuZVwiLCBjb2xvckVuZDogXCIjRkZGRkZGXCJ9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgb3B0aW9ucyBmb3IgdGhlIGluZGljYXRvcnMuXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMucGFyZW50XSAtIEEgc2VsZWN0b3IsIERPTSBPYmplY3Qgb3IgYSBqUXVlcnkgb2JqZWN0IHRoYXQgdGhlIGluZGljYXRvcnMgc2hvdWxkIGJlIGFkZGVkIHRvLiAgXHJcblx0XHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IElmIHVuZGVmaW5lZCwgdGhlIGNvbnRyb2xsZXIncyBjb250YWluZXIgd2lsbCBiZSB1c2VkLlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5hbWU9XCJcIl0gLSBUaGlzIHN0cmluZyB3aWxsIGJlIGRpc3BsYXllZCBhdCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2F0b3JzIG9mIHRoZSBzY2VuZSBmb3IgaWRlbnRpZmljYXRpb24gcHVycG9zZXMuIElmIG5vIG5hbWUgaXMgc3VwcGxpZWQgYW4gYXV0b21hdGljIGluZGV4IHdpbGwgYmUgdXNlZC5cclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5pbmRlbnQ9MF0gLSBBZGRpdGlvbmFsIHBvc2l0aW9uIG9mZnNldCBmb3IgdGhlIGluZGljYXRvcnMgKHVzZWZ1bCwgd2hlbiBoYXZpbmcgbXVsdGlwbGUgc2NlbmVzIHN0YXJ0aW5nIGF0IHRoZSBzYW1lIHBvc2l0aW9uKS5cclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jb2xvclN0YXJ0PWdyZWVuXSAtIENTUyBjb2xvciBkZWZpbml0aW9uIGZvciB0aGUgc3RhcnQgaW5kaWNhdG9yLlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbG9yRW5kPXJlZF0gLSBDU1MgY29sb3IgZGVmaW5pdGlvbiBmb3IgdGhlIGVuZCBpbmRpY2F0b3IuXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY29sb3JUcmlnZ2VyPWJsdWVdIC0gQ1NTIGNvbG9yIGRlZmluaXRpb24gZm9yIHRoZSB0cmlnZ2VyIGluZGljYXRvci5cclxuXHRcdCAqL1xyXG5cdFx0U2NlbmUuYWRkSW5kaWNhdG9ycyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdGlmICghX2luZGljYXRvcikge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0REVGQVVMVF9PUFRJT05TID0ge1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRpbmRlbnQ6IDAsXHJcblx0XHRcdFx0XHRcdHBhcmVudDogdW5kZWZpbmVkLFxyXG5cdFx0XHRcdFx0XHRjb2xvclN0YXJ0OiBcImdyZWVuXCIsXHJcblx0XHRcdFx0XHRcdGNvbG9yRW5kOiBcInJlZFwiLFxyXG5cdFx0XHRcdFx0XHRjb2xvclRyaWdnZXI6IFwiYmx1ZVwiLFxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0b3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdFx0X2F1dG9pbmRleCsrO1xyXG5cdFx0XHRcdF9pbmRpY2F0b3IgPSBuZXcgSW5kaWNhdG9yKFNjZW5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdFx0U2NlbmUub24oXCJhZGQucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgX2luZGljYXRvci5hZGQpO1xyXG5cdFx0XHRcdFNjZW5lLm9uKFwicmVtb3ZlLnBsdWdpbl9hZGRJbmRpY2F0b3JzXCIsIF9pbmRpY2F0b3IucmVtb3ZlKTtcclxuXHRcdFx0XHRTY2VuZS5vbihcImRlc3Ryb3kucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgU2NlbmUucmVtb3ZlSW5kaWNhdG9ycyk7XHJcblxyXG5cdFx0XHRcdC8vIGl0IHRoZSBzY2VuZSBhbHJlYWR5IGhhcyBhIGNvbnRyb2xsZXIgd2UgY2FuIHN0YXJ0IHJpZ2h0IGF3YXkuXHJcblx0XHRcdFx0aWYgKFNjZW5lLmNvbnRyb2xsZXIoKSkge1xyXG5cdFx0XHRcdFx0X2luZGljYXRvci5hZGQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZXMgdmlzdWFsIGluZGljYXRvcnMgZnJvbSBhIFNjcm9sbE1hZ2ljLlNjZW5lLlxyXG5cdFx0ICogQG1lbWJlcm9mISBkZWJ1Zy5hZGRJbmRpY2F0b3JzI1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgcHJldmlvdXNseSBhZGRlZCBpbmRpY2F0b3JzXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVJbmRpY2F0b3JzKClcclxuXHRcdCAqXHJcblx0XHQgKi9cclxuXHRcdFNjZW5lLnJlbW92ZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfaW5kaWNhdG9yKSB7XHJcblx0XHRcdFx0X2luZGljYXRvci5yZW1vdmUoKTtcclxuXHRcdFx0XHR0aGlzLm9mZihcIioucGx1Z2luX2FkZEluZGljYXRvcnNcIik7XHJcblx0XHRcdFx0X2luZGljYXRvciA9IHVuZGVmaW5lZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHR9KTtcclxuXHJcblxyXG5cdC8qXHJcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAqIEV4dGVuc2lvbiBmb3IgY29udHJvbGxlciB0byBzdG9yZSBhbmQgdXBkYXRlIHJlbGF0ZWQgaW5kaWNhdG9yc1xyXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgKi9cclxuXHQvLyBhZGQgb3B0aW9uIHRvIGdsb2JhbGx5IGF1dG8tYWRkIGluZGljYXRvcnMgdG8gc2NlbmVzXHJcblx0LyoqXHJcblx0ICogRXZlcnkgU2Nyb2xsTWFnaWMuQ29udHJvbGxlciBpbnN0YW5jZSBub3cgYWNjZXB0cyBhbiBhZGRpdGlvbmFsIG9wdGlvbi4gIFxyXG5cdCAqIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gZm9yIGEgY29tcGxldGUgbGlzdCBvZiB0aGUgc3RhbmRhcmQgb3B0aW9ucy5cclxuXHQgKiBAbWVtYmVyb2YhIGRlYnVnLmFkZEluZGljYXRvcnMjXHJcblx0ICogQG1ldGhvZCBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcihvcHRpb25zKVxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gbWFrZSBhIGNvbnRyb2xsZXIgYW5kIGFkZCBpbmRpY2F0b3JzIHRvIGFsbCBzY2VuZXMgYXR0YWNoZWRcclxuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKHthZGRJbmRpY2F0b3JzOiB0cnVlfSk7XHJcblx0ICogLy8gdGhpcyBzY2VuZSB3aWxsIGF1dG9tYXRpY2FsbHkgaGF2ZSBpbmRpY2F0b3JzIGFkZGVkIHRvIGl0XHJcblx0ICogbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKClcclxuXHQgKiAgICAgICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBmb3IgdGhlIENvbnRyb2xsZXIuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hZGRJbmRpY2F0b3JzPWZhbHNlXSAtIElmIHNldCB0byBgdHJ1ZWAgZXZlcnkgc2NlbmUgdGhhdCBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB3aWxsIGF1dG9tYXRpY2FsbHkgZ2V0IGluZGljYXRvcnMgYWRkZWQgdG8gaXQuXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5hZGRPcHRpb24oXCJhZGRJbmRpY2F0b3JzXCIsIGZhbHNlKTtcclxuXHQvLyBleHRlbmQgQ29udHJvbGxlclxyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuZXh0ZW5kKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhclxyXG5cdFx0XHRDb250cm9sbGVyID0gdGhpcyxcclxuXHRcdFx0X2luZm8gPSBDb250cm9sbGVyLmluZm8oKSxcclxuXHRcdFx0X2NvbnRhaW5lciA9IF9pbmZvLmNvbnRhaW5lcixcclxuXHRcdFx0X2lzRG9jdW1lbnQgPSBfaW5mby5pc0RvY3VtZW50LFxyXG5cdFx0XHRfdmVydGljYWwgPSBfaW5mby52ZXJ0aWNhbCxcclxuXHRcdFx0X2luZGljYXRvcnMgPSB7IC8vIGNvbnRhaW5lciBmb3IgYWxsIGluZGljYXRvcnMgYW5kIG1ldGhvZHNcclxuXHRcdFx0XHRncm91cHM6IFtdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0dmFyIGxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKENvbnRyb2xsZXIuX2xvZykgeyAvLyBub3QgYXZhaWxhYmxlLCB3aGVuIG1haW4gc291cmNlIG1pbmlmaWVkXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIilcIiwgXCItPlwiKTtcclxuXHRcdFx0XHRDb250cm9sbGVyLl9sb2cuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGlmIChDb250cm9sbGVyLl9pbmRpY2F0b3JzKSB7XHJcblx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFNjZW5lIGFscmVhZHkgaGFzIGEgcHJvcGVydHkgJ19pbmRpY2F0b3JzJywgd2hpY2ggd2lsbCBiZSBvdmVyd3JpdHRlbiBieSBwbHVnaW4uXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFkZCBpbmRpY2F0b3JzIGNvbnRhaW5lclxyXG5cdFx0dGhpcy5faW5kaWNhdG9ycyA9IF9pbmRpY2F0b3JzO1xyXG5cdFx0LypcclxuXHRcdFx0bmVlZGVkIHVwZGF0ZXM6XHJcblx0XHRcdCsrKysrKysrKysrKysrK1xyXG5cdFx0XHRzdGFydC9lbmQgcG9zaXRpb24gb24gc2NlbmUgc2hpZnQgKGhhbmRsZWQgaW4gSW5kaWNhdG9yIGNsYXNzKVxyXG5cdFx0XHR0cmlnZ2VyIHBhcmFtZXRlcnMgb24gdHJpZ2dlckhvb2sgdmFsdWUgY2hhbmdlIChoYW5kbGVkIGluIEluZGljYXRvciBjbGFzcylcclxuXHRcdFx0Ym91bmRzIHBvc2l0aW9uIG9uIGNvbnRhaW5lciBzY3JvbGwgb3IgcmVzaXplICh0byBrZWVwIGFsaWdubWVudCB0byBib3R0b20vcmlnaHQpXHJcblx0XHRcdHRyaWdnZXIgcG9zaXRpb24gb24gY29udGFpbmVyIHJlc2l6ZSwgd2luZG93IHJlc2l6ZSAoaWYgY29udGFpbmVyIGlzbid0IGRvY3VtZW50KSBhbmQgd2luZG93IHNjcm9sbCAoaWYgY29udGFpbmVyIGlzbid0IGRvY3VtZW50KVxyXG5cdFx0Ki9cclxuXHJcblx0XHQvLyBldmVudCBoYW5kbGVyIGZvciB3aGVuIGFzc29jaWF0ZWQgYm91bmRzIG1hcmtlcnMgbmVlZCB0byBiZSByZXBvc2l0aW9uZWRcclxuXHRcdHZhciBoYW5kbGVCb3VuZHNQb3NpdGlvbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X2luZGljYXRvcnMudXBkYXRlQm91bmRzUG9zaXRpb25zKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYXNzb2NpYXRlZCB0cmlnZ2VyIGdyb3VwcyBuZWVkIHRvIGJlIHJlcG9zaXRpb25lZFxyXG5cdFx0dmFyIGhhbmRsZVRyaWdnZXJQb3NpdGlvbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwUG9zaXRpb25zKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdF9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UpO1xyXG5cdFx0aWYgKCFfaXNEb2N1bWVudCkge1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gdXBkYXRlIGFsbCByZWxhdGVkIGJvdW5kcyBjb250YWluZXJzXHJcblx0XHRfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlQm91bmRzUG9zaXRpb25DaGFuZ2UpO1xyXG5cdFx0X2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZUJvdW5kc1Bvc2l0aW9uQ2hhbmdlKTtcclxuXHJcblxyXG5cdFx0Ly8gdXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGJvdW5kcyBjb250YWluZXIgdG8gYWxpZ25lZCB0byB0aGUgcmlnaHQgZm9yIHZlcnRpY2FsIGNvbnRhaW5lcnMgYW5kIHRvIHRoZSBib3R0b20gZm9yIGhvcml6b250YWxcclxuXHRcdHRoaXMuX2luZGljYXRvcnMudXBkYXRlQm91bmRzUG9zaXRpb25zID0gZnVuY3Rpb24gKHNwZWNpZmljSW5kaWNhdG9yKSB7XHJcblx0XHRcdHZhciAvLyBjb25zdGFudCBmb3IgYWxsIGJvdW5kc1xyXG5cdFx0XHRcdGdyb3VwcyA9IHNwZWNpZmljSW5kaWNhdG9yID8gW191dGlsLmV4dGVuZCh7fSwgc3BlY2lmaWNJbmRpY2F0b3IudHJpZ2dlckdyb3VwLCB7XHJcblx0XHRcdFx0XHRtZW1iZXJzOiBbc3BlY2lmaWNJbmRpY2F0b3JdXHJcblx0XHRcdFx0fSldIDogLy8gY3JlYXRlIGEgZ3JvdXAgd2l0aCBvbmx5IG9uZSBlbGVtZW50XHJcblx0XHRcdFx0X2luZGljYXRvcnMuZ3JvdXBzLCAvLyB1c2UgYWxsXHJcblx0XHRcdFx0ZyA9IGdyb3Vwcy5sZW5ndGgsXHJcblx0XHRcdFx0Y3NzID0ge30sXHJcblx0XHRcdFx0cGFyYW1Qb3MgPSBfdmVydGljYWwgPyBcImxlZnRcIiA6IFwidG9wXCIsXHJcblx0XHRcdFx0cGFyYW1EaW1lbnNpb24gPSBfdmVydGljYWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiLFxyXG5cdFx0XHRcdGVkZ2UgPSBfdmVydGljYWwgP1xyXG5cdFx0XHRcdF91dGlsLmdldC5zY3JvbGxMZWZ0KF9jb250YWluZXIpICsgX3V0aWwuZ2V0LndpZHRoKF9jb250YWluZXIpIC0gRURHRV9PRkZTRVQgOlxyXG5cdFx0XHRcdF91dGlsLmdldC5zY3JvbGxUb3AoX2NvbnRhaW5lcikgKyBfdXRpbC5nZXQuaGVpZ2h0KF9jb250YWluZXIpIC0gRURHRV9PRkZTRVQsXHJcblx0XHRcdFx0YiwgdHJpZ2dlclNpemUsIGdyb3VwO1xyXG5cdFx0XHR3aGlsZSAoZy0tKSB7IC8vIGdyb3VwIGxvb3BcclxuXHRcdFx0XHRncm91cCA9IGdyb3Vwc1tnXTtcclxuXHRcdFx0XHRiID0gZ3JvdXAubWVtYmVycy5sZW5ndGg7XHJcblx0XHRcdFx0dHJpZ2dlclNpemUgPSBfdXRpbC5nZXRbcGFyYW1EaW1lbnNpb25dKGdyb3VwLmVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHRcdFx0d2hpbGUgKGItLSkgeyAvLyBpbmRpY2F0b3JzIGxvb3BcclxuXHRcdFx0XHRcdGNzc1twYXJhbVBvc10gPSBlZGdlIC0gdHJpZ2dlclNpemU7XHJcblx0XHRcdFx0XHRfdXRpbC5jc3MoZ3JvdXAubWVtYmVyc1tiXS5ib3VuZHMsIGNzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHVwZGF0ZXMgdGhlIHBvc2l0aW9ucyBvZiBhbGwgdHJpZ2dlciBncm91cHMgYXR0YWNoZWQgdG8gYSBjb250cm9sbGVyIG9yIGEgc3BlY2lmaWMgb25lLCBpZiBwcm92aWRlZFxyXG5cdFx0dGhpcy5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMgPSBmdW5jdGlvbiAoc3BlY2lmaWNHcm91cCkge1xyXG5cdFx0XHR2YXIgLy8gY29uc3RhbnQgdmFyc1xyXG5cdFx0XHRcdGdyb3VwcyA9IHNwZWNpZmljR3JvdXAgPyBbc3BlY2lmaWNHcm91cF0gOiBfaW5kaWNhdG9ycy5ncm91cHMsXHJcblx0XHRcdFx0aSA9IGdyb3Vwcy5sZW5ndGgsXHJcblx0XHRcdFx0Y29udGFpbmVyID0gX2lzRG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogX2NvbnRhaW5lcixcclxuXHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfaXNEb2N1bWVudCA/IHtcclxuXHRcdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0XHR9IDogX3V0aWwuZ2V0Lm9mZnNldChjb250YWluZXIsIHRydWUpLFxyXG5cdFx0XHRcdGVkZ2UgPSBfdmVydGljYWwgP1xyXG5cdFx0XHRcdF91dGlsLmdldC53aWR0aChfY29udGFpbmVyKSAtIEVER0VfT0ZGU0VUIDpcclxuXHRcdFx0XHRfdXRpbC5nZXQuaGVpZ2h0KF9jb250YWluZXIpIC0gRURHRV9PRkZTRVQsXHJcblx0XHRcdFx0cGFyYW1EaW1lbnNpb24gPSBfdmVydGljYWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiLFxyXG5cdFx0XHRcdHBhcmFtVHJhbnNmb3JtID0gX3ZlcnRpY2FsID8gXCJZXCIgOiBcIlhcIjtcclxuXHRcdFx0dmFyIC8vIGNoYW5naW5nIHZhcnNcclxuXHRcdFx0XHRncm91cCxcclxuXHRcdFx0XHRlbGVtLFxyXG5cdFx0XHRcdHBvcyxcclxuXHRcdFx0XHRlbGVtU2l6ZSxcclxuXHRcdFx0XHR0cmFuc2Zvcm07XHJcblx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRncm91cCA9IGdyb3Vwc1tpXTtcclxuXHRcdFx0XHRlbGVtID0gZ3JvdXAuZWxlbWVudDtcclxuXHRcdFx0XHRwb3MgPSBncm91cC50cmlnZ2VySG9vayAqIENvbnRyb2xsZXIuaW5mbyhcInNpemVcIik7XHJcblx0XHRcdFx0ZWxlbVNpemUgPSBfdXRpbC5nZXRbcGFyYW1EaW1lbnNpb25dKGVsZW0uZmlyc3RDaGlsZC5maXJzdENoaWxkKTtcclxuXHRcdFx0XHR0cmFuc2Zvcm0gPSBwb3MgPiBlbGVtU2l6ZSA/IFwidHJhbnNsYXRlXCIgKyBwYXJhbVRyYW5zZm9ybSArIFwiKC0xMDAlKVwiIDogXCJcIjtcclxuXHJcblx0XHRcdFx0X3V0aWwuY3NzKGVsZW0sIHtcclxuXHRcdFx0XHRcdHRvcDogY29udGFpbmVyT2Zmc2V0LnRvcCArIChfdmVydGljYWwgPyBwb3MgOiBlZGdlIC0gZ3JvdXAubWVtYmVyc1swXS5vcHRpb25zLmluZGVudCksXHJcblx0XHRcdFx0XHRsZWZ0OiBjb250YWluZXJPZmZzZXQubGVmdCArIChfdmVydGljYWwgPyBlZGdlIC0gZ3JvdXAubWVtYmVyc1swXS5vcHRpb25zLmluZGVudCA6IHBvcylcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRfdXRpbC5jc3MoZWxlbS5maXJzdENoaWxkLmZpcnN0Q2hpbGQsIHtcclxuXHRcdFx0XHRcdFwiLW1zLXRyYW5zZm9ybVwiOiB0cmFuc2Zvcm0sXHJcblx0XHRcdFx0XHRcIi13ZWJraXQtdHJhbnNmb3JtXCI6IHRyYW5zZm9ybSxcclxuXHRcdFx0XHRcdFwidHJhbnNmb3JtXCI6IHRyYW5zZm9ybVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHVwZGF0ZXMgdGhlIGxhYmVsIGZvciB0aGUgZ3JvdXAgdG8gY29udGFpbiB0aGUgbmFtZSwgaWYgaXQgb25seSBoYXMgb25lIG1lbWJlclxyXG5cdFx0dGhpcy5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBMYWJlbCA9IGZ1bmN0aW9uIChncm91cCkge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHR0ZXh0ID0gXCJ0cmlnZ2VyXCIgKyAoZ3JvdXAubWVtYmVycy5sZW5ndGggPiAxID8gXCJcIiA6IFwiIFwiICsgZ3JvdXAubWVtYmVyc1swXS5vcHRpb25zLm5hbWUpLFxyXG5cdFx0XHRcdGVsZW0gPSBncm91cC5lbGVtZW50LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCxcclxuXHRcdFx0XHRkb1VwZGF0ZSA9IGVsZW0udGV4dENvbnRlbnQgIT09IHRleHQ7XHJcblx0XHRcdGlmIChkb1VwZGF0ZSkge1xyXG5cdFx0XHRcdGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdFx0XHRcdGlmIChfdmVydGljYWwpIHsgLy8gYm91bmRzIHBvc2l0aW9uIGlzIGRlcGVuZGVudCBvbiB0ZXh0IGxlbmd0aCwgc28gdXBkYXRlXHJcblx0XHRcdFx0XHRfaW5kaWNhdG9ycy51cGRhdGVCb3VuZHNQb3NpdGlvbnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gYWRkIGluZGljYXRvcnMgaWYgZ2xvYmFsIG9wdGlvbiBpcyBzZXRcclxuXHRcdHRoaXMuYWRkU2NlbmUgPSBmdW5jdGlvbiAobmV3U2NlbmUpIHtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9vcHRpb25zLmFkZEluZGljYXRvcnMgJiYgbmV3U2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSAmJiBuZXdTY2VuZS5jb250cm9sbGVyKCkgPT09IENvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRuZXdTY2VuZS5hZGRJbmRpY2F0b3JzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY2FsbCBvcmlnaW5hbCBkZXN0cm95IG1ldGhvZFxyXG5cdFx0XHR0aGlzLiRzdXBlci5hZGRTY2VuZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyByZW1vdmUgYWxsIHByZXZpb3VzbHkgc2V0IGxpc3RlbmVycyBvbiBkZXN0cm95XHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UpO1xyXG5cdFx0XHRpZiAoIV9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVHJpZ2dlclBvc2l0aW9uQ2hhbmdlKTtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVUcmlnZ2VyUG9zaXRpb25DaGFuZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVCb3VuZHNQb3NpdGlvbkNoYW5nZSk7XHJcblx0XHRcdF9jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVCb3VuZHNQb3NpdGlvbkNoYW5nZSk7XHJcblx0XHRcdC8vIGNhbGwgb3JpZ2luYWwgZGVzdHJveSBtZXRob2RcclxuXHRcdFx0dGhpcy4kc3VwZXIuZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cclxuXHR9KTtcclxuXHJcblx0LypcclxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICogSW50ZXJuYWwgY2xhc3MgZm9yIHRoZSBjb25zdHJ1Y3Rpb24gb2YgSW5kaWNhdG9yc1xyXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgKi9cclxuXHR2YXIgSW5kaWNhdG9yID0gZnVuY3Rpb24gKFNjZW5lLCBvcHRpb25zKSB7XHJcblx0XHR2YXJcclxuXHRcdFx0SW5kaWNhdG9yID0gdGhpcyxcclxuXHRcdFx0X2VsZW1Cb3VuZHMgPSBUUEwuYm91bmRzKCksXHJcblx0XHRcdF9lbGVtU3RhcnQgPSBUUEwuc3RhcnQob3B0aW9ucy5jb2xvclN0YXJ0KSxcclxuXHRcdFx0X2VsZW1FbmQgPSBUUEwuZW5kKG9wdGlvbnMuY29sb3JFbmQpLFxyXG5cdFx0XHRfYm91bmRzQ29udGFpbmVyID0gb3B0aW9ucy5wYXJlbnQgJiYgX3V0aWwuZ2V0LmVsZW1lbnRzKG9wdGlvbnMucGFyZW50KVswXSxcclxuXHRcdFx0X3ZlcnRpY2FsLFxyXG5cdFx0XHRfY3RybDtcclxuXHJcblx0XHR2YXIgbG9nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoU2NlbmUuX2xvZykgeyAvLyBub3QgYXZhaWxhYmxlLCB3aGVuIG1haW4gc291cmNlIG1pbmlmaWVkXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIilcIiwgXCItPlwiKTtcclxuXHRcdFx0XHRTY2VuZS5fbG9nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0b3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IF9hdXRvaW5kZXg7XHJcblxyXG5cdFx0Ly8gcHJlcGFyZSBib3VuZHMgZWxlbWVudHNcclxuXHRcdF9lbGVtU3RhcnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCArPSBcIiBcIiArIG9wdGlvbnMubmFtZTtcclxuXHRcdF9lbGVtRW5kLnRleHRDb250ZW50ICs9IFwiIFwiICsgb3B0aW9ucy5uYW1lO1xyXG5cdFx0X2VsZW1Cb3VuZHMuYXBwZW5kQ2hpbGQoX2VsZW1TdGFydCk7XHJcblx0XHRfZWxlbUJvdW5kcy5hcHBlbmRDaGlsZChfZWxlbUVuZCk7XHJcblxyXG5cdFx0Ly8gc2V0IHB1YmxpYyB2YXJpYWJsZXNcclxuXHRcdEluZGljYXRvci5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdEluZGljYXRvci5ib3VuZHMgPSBfZWxlbUJvdW5kcztcclxuXHRcdC8vIHdpbGwgYmUgc2V0IGxhdGVyXHJcblx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdC8vIGFkZCBpbmRpY2F0b3JzIHRvIERPTVxyXG5cdFx0dGhpcy5hZGQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9jdHJsID0gU2NlbmUuY29udHJvbGxlcigpO1xyXG5cdFx0XHRfdmVydGljYWwgPSBfY3RybC5pbmZvKFwidmVydGljYWxcIik7XHJcblxyXG5cdFx0XHR2YXIgaXNEb2N1bWVudCA9IF9jdHJsLmluZm8oXCJpc0RvY3VtZW50XCIpO1xyXG5cclxuXHRcdFx0aWYgKCFfYm91bmRzQ29udGFpbmVyKSB7XHJcblx0XHRcdFx0Ly8gbm8gcGFyZW50IHN1cHBsaWVkIG9yIGRvZXNudCBleGlzdFxyXG5cdFx0XHRcdF9ib3VuZHNDb250YWluZXIgPSBpc0RvY3VtZW50ID8gZG9jdW1lbnQuYm9keSA6IF9jdHJsLmluZm8oXCJjb250YWluZXJcIik7IC8vIGNoZWNrIGlmIHdpbmRvdy9kb2N1bWVudCAodGhlbiB1c2UgYm9keSlcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWlzRG9jdW1lbnQgJiYgX3V0aWwuY3NzKF9ib3VuZHNDb250YWluZXIsIFwicG9zaXRpb25cIikgPT09ICdzdGF0aWMnKSB7XHJcblx0XHRcdFx0Ly8gcG9zaXRpb24gbW9kZSBuZWVkZWQgZm9yIGNvcnJlY3QgcG9zaXRpb25pbmcgb2YgaW5kaWNhdG9yc1xyXG5cdFx0XHRcdF91dGlsLmNzcyhfYm91bmRzQ29udGFpbmVyLCB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGFkZCBsaXN0ZW5lcnMgZm9yIHVwZGF0ZXNcclxuXHRcdFx0U2NlbmUub24oXCJjaGFuZ2UucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgaGFuZGxlVHJpZ2dlclBhcmFtc0NoYW5nZSk7XHJcblx0XHRcdFNjZW5lLm9uKFwic2hpZnQucGx1Z2luX2FkZEluZGljYXRvcnNcIiwgaGFuZGxlQm91bmRzUGFyYW1zQ2hhbmdlKTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZXMgdHJpZ2dlciAmIGJvdW5kcyAod2lsbCBhZGQgZWxlbWVudHMgaWYgbmVlZGVkKVxyXG5cdFx0XHR1cGRhdGVUcmlnZ2VyR3JvdXAoKTtcclxuXHRcdFx0dXBkYXRlQm91bmRzKCk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gZG8gYWZ0ZXIgYWxsIGV4ZWN1dGlvbiBpcyBmaW5pc2hlZCBvdGhlcndpc2Ugc29tZXRpbWVzIHNpemUgY2FsY3VsYXRpb25zIGFyZSBvZmZcclxuXHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVCb3VuZHNQb3NpdGlvbnMoSW5kaWNhdG9yKTtcclxuXHRcdFx0fSwgMCk7XHJcblxyXG5cdFx0XHRsb2coMywgXCJhZGRlZCBpbmRpY2F0b3JzXCIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyByZW1vdmUgaW5kaWNhdG9ycyBmcm9tIERPTVxyXG5cdFx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChJbmRpY2F0b3IudHJpZ2dlckdyb3VwKSB7IC8vIGlmIG5vdCBzZXQgdGhlcmUncyBub3RoaW5nIHRvIHJlbW92ZVxyXG5cdFx0XHRcdFNjZW5lLm9mZihcImNoYW5nZS5wbHVnaW5fYWRkSW5kaWNhdG9yc1wiLCBoYW5kbGVUcmlnZ2VyUGFyYW1zQ2hhbmdlKTtcclxuXHRcdFx0XHRTY2VuZS5vZmYoXCJzaGlmdC5wbHVnaW5fYWRkSW5kaWNhdG9yc1wiLCBoYW5kbGVCb3VuZHNQYXJhbXNDaGFuZ2UpO1xyXG5cclxuXHRcdFx0XHRpZiAoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC5tZW1iZXJzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdC8vIGp1c3QgcmVtb3ZlIGZyb20gbWVtYmVybGlzdCBvZiBvbGQgZ3JvdXBcclxuXHRcdFx0XHRcdHZhciBncm91cCA9IEluZGljYXRvci50cmlnZ2VyR3JvdXA7XHJcblx0XHRcdFx0XHRncm91cC5tZW1iZXJzLnNwbGljZShncm91cC5tZW1iZXJzLmluZGV4T2YoSW5kaWNhdG9yKSwgMSk7XHJcblx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBMYWJlbChncm91cCk7XHJcblx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMoZ3JvdXApO1xyXG5cdFx0XHRcdFx0SW5kaWNhdG9yLnRyaWdnZXJHcm91cCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGNvbXBsZXRlIGdyb3VwXHJcblx0XHRcdFx0XHRyZW1vdmVUcmlnZ2VyR3JvdXAoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVtb3ZlQm91bmRzKCk7XHJcblxyXG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgaW5kaWNhdG9yc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogaW50ZXJuYWwgRXZlbnQgSGFuZGxlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8vIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYm91bmRzIHBhcmFtcyBjaGFuZ2VcclxuXHRcdHZhciBoYW5kbGVCb3VuZHNQYXJhbXNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHVwZGF0ZUJvdW5kcygpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBldmVudCBoYW5kbGVyIGZvciB3aGVuIHRyaWdnZXIgcGFyYW1zIGNoYW5nZVxyXG5cdFx0dmFyIGhhbmRsZVRyaWdnZXJQYXJhbXNDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpZiAoZS53aGF0ID09PSBcInRyaWdnZXJIb29rXCIpIHtcclxuXHRcdFx0XHR1cGRhdGVUcmlnZ2VyR3JvdXAoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogQm91bmRzIChzdGFydCAvIHN0b3ApIG1hbmFnZW1lbnRcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8vIGFkZHMgYW4gbmV3IGJvdW5kcyBlbGVtZW50cyB0byB0aGUgYXJyYXkgYW5kIHRvIHRoZSBET01cclxuXHRcdHZhciBhZGRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB2ID0gX2N0cmwuaW5mbyhcInZlcnRpY2FsXCIpO1xyXG5cdFx0XHQvLyBhcHBseSBzdHVmZiB3ZSBkaWRuJ3Qga25vdyBiZWZvcmUuLi5cclxuXHRcdFx0X3V0aWwuY3NzKF9lbGVtU3RhcnQuZmlyc3RDaGlsZCwge1xyXG5cdFx0XHRcdFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiOiB2ID8gMSA6IDAsXHJcblx0XHRcdFx0XCJib3JkZXItcmlnaHQtd2lkdGhcIjogdiA/IDAgOiAxLFxyXG5cdFx0XHRcdFwiYm90dG9tXCI6IHYgPyAtMSA6IG9wdGlvbnMuaW5kZW50LFxyXG5cdFx0XHRcdFwicmlnaHRcIjogdiA/IG9wdGlvbnMuaW5kZW50IDogLTEsXHJcblx0XHRcdFx0XCJwYWRkaW5nXCI6IHYgPyBcIjAgOHB4XCIgOiBcIjJweCA0cHhcIixcclxuXHRcdFx0fSk7XHJcblx0XHRcdF91dGlsLmNzcyhfZWxlbUVuZCwge1xyXG5cdFx0XHRcdFwiYm9yZGVyLXRvcC13aWR0aFwiOiB2ID8gMSA6IDAsXHJcblx0XHRcdFx0XCJib3JkZXItbGVmdC13aWR0aFwiOiB2ID8gMCA6IDEsXHJcblx0XHRcdFx0XCJ0b3BcIjogdiA/IFwiMTAwJVwiIDogXCJcIixcclxuXHRcdFx0XHRcInJpZ2h0XCI6IHYgPyBvcHRpb25zLmluZGVudCA6IFwiXCIsXHJcblx0XHRcdFx0XCJib3R0b21cIjogdiA/IFwiXCIgOiBvcHRpb25zLmluZGVudCxcclxuXHRcdFx0XHRcImxlZnRcIjogdiA/IFwiXCIgOiBcIjEwMCVcIixcclxuXHRcdFx0XHRcInBhZGRpbmdcIjogdiA/IFwiMCA4cHhcIiA6IFwiMnB4IDRweFwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBhcHBlbmRcclxuXHRcdFx0X2JvdW5kc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbUJvdW5kcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHJlbW92ZSBib3VuZHMgZnJvbSBsaXN0IGFuZCBET01cclxuXHRcdHZhciByZW1vdmVCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9lbGVtQm91bmRzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2VsZW1Cb3VuZHMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyB1cGRhdGUgdGhlIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb25zIG9mIHRoZSBzY2VuZVxyXG5cdFx0dmFyIHVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9lbGVtQm91bmRzLnBhcmVudE5vZGUgIT09IF9ib3VuZHNDb250YWluZXIpIHtcclxuXHRcdFx0XHRhZGRCb3VuZHMoKTsgLy8gQWRkIEJvdW5kcyBlbGVtZW50cyAoc3RhcnQvZW5kKVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjc3MgPSB7fTtcclxuXHRcdFx0Y3NzW192ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gPSBTY2VuZS50cmlnZ2VyUG9zaXRpb24oKTtcclxuXHRcdFx0Y3NzW192ZXJ0aWNhbCA/IFwiaGVpZ2h0XCIgOiBcIndpZHRoXCJdID0gU2NlbmUuZHVyYXRpb24oKTtcclxuXHRcdFx0X3V0aWwuY3NzKF9lbGVtQm91bmRzLCBjc3MpO1xyXG5cdFx0XHRfdXRpbC5jc3MoX2VsZW1FbmQsIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBTY2VuZS5kdXJhdGlvbigpID4gMCA/IFwiXCIgOiBcIm5vbmVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHRyaWdnZXIgYW5kIHRyaWdnZXIgZ3JvdXAgbWFuYWdlbWVudFxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gYWRkcyBhbiBuZXcgdHJpZ2dlciBncm91cCB0byB0aGUgYXJyYXkgYW5kIHRvIHRoZSBET01cclxuXHRcdHZhciBhZGRUcmlnZ2VyR3JvdXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB0cmlnZ2VyRWxlbSA9IFRQTC50cmlnZ2VyKG9wdGlvbnMuY29sb3JUcmlnZ2VyKTsgLy8gbmV3IHRyaWdnZXIgZWxlbWVudFxyXG5cdFx0XHR2YXIgY3NzID0ge307XHJcblx0XHRcdGNzc1tfdmVydGljYWwgPyBcInJpZ2h0XCIgOiBcImJvdHRvbVwiXSA9IDA7XHJcblx0XHRcdGNzc1tfdmVydGljYWwgPyBcImJvcmRlci10b3Atd2lkdGhcIiA6IFwiYm9yZGVyLWxlZnQtd2lkdGhcIl0gPSAxO1xyXG5cdFx0XHRfdXRpbC5jc3ModHJpZ2dlckVsZW0uZmlyc3RDaGlsZCwgY3NzKTtcclxuXHRcdFx0X3V0aWwuY3NzKHRyaWdnZXJFbGVtLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCwge1xyXG5cdFx0XHRcdHBhZGRpbmc6IF92ZXJ0aWNhbCA/IFwiMCA4cHggM3B4IDhweFwiIDogXCIzcHggNHB4XCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHJpZ2dlckVsZW0pOyAvLyBkaXJlY3RseSBhZGQgdG8gYm9keVxyXG5cdFx0XHR2YXIgbmV3R3JvdXAgPSB7XHJcblx0XHRcdFx0dHJpZ2dlckhvb2s6IFNjZW5lLnRyaWdnZXJIb29rKCksXHJcblx0XHRcdFx0ZWxlbWVudDogdHJpZ2dlckVsZW0sXHJcblx0XHRcdFx0bWVtYmVyczogW0luZGljYXRvcl1cclxuXHRcdFx0fTtcclxuXHRcdFx0X2N0cmwuX2luZGljYXRvcnMuZ3JvdXBzLnB1c2gobmV3R3JvdXApO1xyXG5cdFx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwID0gbmV3R3JvdXA7XHJcblx0XHRcdC8vIHVwZGF0ZSByaWdodCBhd2F5XHJcblx0XHRcdF9jdHJsLl9pbmRpY2F0b3JzLnVwZGF0ZVRyaWdnZXJHcm91cExhYmVsKG5ld0dyb3VwKTtcclxuXHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwUG9zaXRpb25zKG5ld0dyb3VwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHJlbW92ZVRyaWdnZXJHcm91cCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X2N0cmwuX2luZGljYXRvcnMuZ3JvdXBzLnNwbGljZShfY3RybC5faW5kaWNhdG9ycy5ncm91cHMuaW5kZXhPZihJbmRpY2F0b3IudHJpZ2dlckdyb3VwKSwgMSk7XHJcblx0XHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEluZGljYXRvci50cmlnZ2VyR3JvdXAuZWxlbWVudCk7XHJcblx0XHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAgPSB1bmRlZmluZWQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHVwZGF0ZXMgdGhlIHRyaWdnZXIgZ3JvdXAgLT4gZWl0aGVyIGpvaW4gZXhpc3Rpbmcgb3IgYWRkIG5ldyBvbmVcclxuXHRcdC8qXHRcclxuXHRcdCAqIExvZ2ljOlxyXG5cdFx0ICogMSBpZiBhIHRyaWdnZXIgZ3JvdXAgZXhpc3QsIGNoZWNrIGlmIGl0J3MgaW4gc3luYyB3aXRoIFNjZW5lIHNldHRpbmdzIOKAkyBpZiBzbywgbm90aGluZyBlbHNlIG5lZWRzIHRvIGhhcHBlblxyXG5cdFx0ICogMiB0cnkgdG8gZmluZCBhbiBleGlzdGluZyBvbmUgdGhhdCBtYXRjaGVzIFNjZW5lIHBhcmFtZXRlcnNcclxuXHRcdCAqIFx0IDIuMSBJZiBhIG1hdGNoIGlzIGZvdW5kIGNoZWNrIGlmIGFscmVhZHkgYXNzaWduZWQgdG8gYW4gZXhpc3RpbmcgZ3JvdXBcclxuXHRcdCAqXHRcdFx0IElmIHNvOlxyXG5cdFx0ICogICAgICAgQTogaXQgd2FzIHRoZSBsYXN0IG1lbWJlciBvZiBleGlzdGluZyBncm91cCAtPiBraWxsIHdob2xlIGdyb3VwXHJcblx0XHQgKiAgICAgICBCOiB0aGUgZXhpc3RpbmcgZ3JvdXAgaGFzIG90aGVyIG1lbWJlcnMgLT4ganVzdCByZW1vdmUgZnJvbSBtZW1iZXIgbGlzdFxyXG5cdFx0ICpcdCAyLjIgQXNzaWduIHRvIG1hdGNoaW5nIGdyb3VwXHJcblx0XHQgKiAzIGlmIG5vIG5ldyBtYXRjaCBjb3VsZCBiZSBmb3VuZCwgY2hlY2sgaWYgYXNzaWduZWQgdG8gZXhpc3RpbmcgZ3JvdXBcclxuXHRcdCAqICAgQTogeWVzLCBhbmQgaXQncyB0aGUgb25seSBtZW1iZXIgLT4ganVzdCB1cGRhdGUgcGFyYW1ldGVycyBhbmQgcG9zaXRpb25zIGFuZCBrZWVwIHVzaW5nIHRoaXMgZ3JvdXBcclxuXHRcdCAqICAgQjogeWVzIGJ1dCB0aGVyZSBhcmUgb3RoZXIgbWVtYmVycyAtPiByZW1vdmUgZnJvbSBtZW1iZXIgbGlzdCBhbmQgY3JlYXRlIGEgbmV3IG9uZVxyXG5cdFx0ICogICBDOiBubywgc28gY3JlYXRlIGEgbmV3IG9uZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlVHJpZ2dlckdyb3VwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHR0cmlnZ2VySG9vayA9IFNjZW5lLnRyaWdnZXJIb29rKCksXHJcblx0XHRcdFx0Y2xvc2VFbm91Z2ggPSAwLjAwMDE7XHJcblxyXG5cdFx0XHQvLyBIYXZlIGEgZ3JvdXAsIGNoZWNrIGlmIGl0IHN0aWxsIG1hdGNoZXNcclxuXHRcdFx0aWYgKEluZGljYXRvci50cmlnZ2VyR3JvdXApIHtcclxuXHRcdFx0XHRpZiAoTWF0aC5hYnMoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC50cmlnZ2VySG9vayAtIHRyaWdnZXJIb29rKSA8IGNsb3NlRW5vdWdoKSB7XHJcblx0XHRcdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcIm5vIG5lZWQgdG8gY2hhbmdlLCBzdGlsbCBpbiBzeW5jXCIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhbGwgZ29vZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBEb24ndCBoYXZlIGEgZ3JvdXAsIGNoZWNrIGlmIGEgbWF0Y2hpbmcgb25lIGV4aXN0c1xyXG5cdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcIm91dCBvZiBzeW5jIVwiKTtcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0Z3JvdXBzID0gX2N0cmwuX2luZGljYXRvcnMuZ3JvdXBzLFxyXG5cdFx0XHRcdGdyb3VwLFxyXG5cdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0Z3JvdXAgPSBncm91cHNbaV07XHJcblx0XHRcdFx0aWYgKE1hdGguYWJzKGdyb3VwLnRyaWdnZXJIb29rIC0gdHJpZ2dlckhvb2spIDwgY2xvc2VFbm91Z2gpIHtcclxuXHRcdFx0XHRcdC8vIGZvdW5kIGEgbWF0Y2ghXHJcblx0XHRcdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcImZvdW5kIG1hdGNoXCIpO1xyXG5cdFx0XHRcdFx0aWYgKEluZGljYXRvci50cmlnZ2VyR3JvdXApIHsgLy8gZG8gSSBoYXZlIGFuIG9sZCBncm91cCB0aGF0IGlzIG91dCBvZiBzeW5jP1xyXG5cdFx0XHRcdFx0XHRpZiAoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC5tZW1iZXJzLmxlbmd0aCA9PT0gMSkgeyAvLyBpcyBpdCB0aGUgb25seSByZW1haW5pbmcgZ3JvdXA/XHJcblx0XHRcdFx0XHRcdFx0Ly8gX3V0aWwubG9nKDAsIFwidHJpZ2dlclwiLCBvcHRpb25zLm5hbWUsIFwiLT5cIiwgXCJraWxsXCIpO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHdhcyB0aGUgbGFzdCBtZW1iZXIsIHJlbW92ZSB0aGUgd2hvbGUgZ3JvdXBcclxuXHRcdFx0XHRcdFx0XHRyZW1vdmVUcmlnZ2VyR3JvdXAoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwLm1lbWJlcnMuc3BsaWNlKEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5pbmRleE9mKEluZGljYXRvciksIDEpOyAvLyBqdXN0IHJlbW92ZSBmcm9tIG1lbWJlcmxpc3Qgb2Ygb2xkIGdyb3VwXHJcblx0XHRcdFx0XHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwTGFiZWwoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCk7XHJcblx0XHRcdFx0XHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwUG9zaXRpb25zKEluZGljYXRvci50cmlnZ2VyR3JvdXApO1xyXG5cdFx0XHRcdFx0XHRcdC8vIF91dGlsLmxvZygwLCBcInRyaWdnZXJcIiwgb3B0aW9ucy5uYW1lLCBcIi0+XCIsIFwicmVtb3ZpbmcgZnJvbSBwcmV2aW91cyBtZW1iZXIgbGlzdFwiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gam9pbiBuZXcgZ3JvdXBcclxuXHRcdFx0XHRcdGdyb3VwLm1lbWJlcnMucHVzaChJbmRpY2F0b3IpO1xyXG5cdFx0XHRcdFx0SW5kaWNhdG9yLnRyaWdnZXJHcm91cCA9IGdyb3VwO1xyXG5cdFx0XHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwTGFiZWwoZ3JvdXApO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYXQgdGhpcyBwb2ludCBJIGFtIG9idmlvdXNseSBvdXQgb2Ygc3luYyBhbmQgZG9uJ3QgbWF0Y2ggYW55IG90aGVyIGdyb3VwXHJcblx0XHRcdGlmIChJbmRpY2F0b3IudHJpZ2dlckdyb3VwKSB7XHJcblx0XHRcdFx0aWYgKEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRcdC8vIF91dGlsLmxvZygwLCBcInRyaWdnZXJcIiwgb3B0aW9ucy5uYW1lLCBcIi0+XCIsIFwidXBkYXRpbmcgZXhpc3RpbmdcIik7XHJcblx0XHRcdFx0XHQvLyBvdXQgb2Ygc3luYyBidXQgaSdtIHRoZSBvbmx5IG1lbWJlciA9PiBqdXN0IGNoYW5nZSBhbmQgdXBkYXRlXHJcblx0XHRcdFx0XHRJbmRpY2F0b3IudHJpZ2dlckdyb3VwLnRyaWdnZXJIb29rID0gdHJpZ2dlckhvb2s7XHJcblx0XHRcdFx0XHRfY3RybC5faW5kaWNhdG9ycy51cGRhdGVUcmlnZ2VyR3JvdXBQb3NpdGlvbnMoSW5kaWNhdG9yLnRyaWdnZXJHcm91cCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIF91dGlsLmxvZygwLCBcInRyaWdnZXJcIiwgb3B0aW9ucy5uYW1lLCBcIi0+XCIsIFwicmVtb3ZpbmcgZnJvbSBwcmV2aW91cyBtZW1iZXIgbGlzdFwiKTtcclxuXHRcdFx0XHRcdEluZGljYXRvci50cmlnZ2VyR3JvdXAubWVtYmVycy5zcGxpY2UoSW5kaWNhdG9yLnRyaWdnZXJHcm91cC5tZW1iZXJzLmluZGV4T2YoSW5kaWNhdG9yKSwgMSk7IC8vIGp1c3QgcmVtb3ZlIGZyb20gbWVtYmVybGlzdCBvZiBvbGQgZ3JvdXBcclxuXHRcdFx0XHRcdF9jdHJsLl9pbmRpY2F0b3JzLnVwZGF0ZVRyaWdnZXJHcm91cExhYmVsKEluZGljYXRvci50cmlnZ2VyR3JvdXApO1xyXG5cdFx0XHRcdFx0X2N0cmwuX2luZGljYXRvcnMudXBkYXRlVHJpZ2dlckdyb3VwUG9zaXRpb25zKEluZGljYXRvci50cmlnZ2VyR3JvdXApO1xyXG5cdFx0XHRcdFx0SW5kaWNhdG9yLnRyaWdnZXJHcm91cCA9IHVuZGVmaW5lZDsgLy8gbmVlZCBhIGJyYW5kIG5ldyBncm91cC4uLlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBfdXRpbC5sb2coMCwgXCJ0cmlnZ2VyXCIsIG9wdGlvbnMubmFtZSwgXCItPlwiLCBcImFkZCBhIG5ldyBvbmVcIik7XHJcblx0XHRcdC8vIGRpZCBub3QgZmluZCBhbnkgbWF0Y2gsIG1ha2UgbmV3IHRyaWdnZXIgZ3JvdXBcclxuXHRcdFx0YWRkVHJpZ2dlckdyb3VwKCk7XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdC8qXHJcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAqIFRlbXBsYXRlcyBmb3IgdGhlIGluZGljYXRvcnNcclxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICovXHJcblx0dmFyIFRQTCA9IHtcclxuXHRcdHN0YXJ0OiBmdW5jdGlvbiAoY29sb3IpIHtcclxuXHRcdFx0Ly8gaW5uZXIgZWxlbWVudCAoZm9yIGJvdHRvbSBvZmZzZXQgLTEsIHdoaWxlIGtlZXBpbmcgdG9wIHBvc2l0aW9uIDApXHJcblx0XHRcdHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGlubmVyLnRleHRDb250ZW50ID0gXCJzdGFydFwiO1xyXG5cdFx0XHRfdXRpbC5jc3MoaW5uZXIsIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcInZpc2libGVcIixcclxuXHRcdFx0XHRcImJvcmRlci13aWR0aFwiOiAwLFxyXG5cdFx0XHRcdFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcclxuXHRcdFx0XHRjb2xvcjogY29sb3IsXHJcblx0XHRcdFx0XCJib3JkZXItY29sb3JcIjogY29sb3JcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdC8vIHdyYXBwZXJcclxuXHRcdFx0X3V0aWwuY3NzKGUsIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcInZpc2libGVcIixcclxuXHRcdFx0XHR3aWR0aDogMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDBcclxuXHRcdFx0fSk7XHJcblx0XHRcdGUuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG5cdFx0XHRyZXR1cm4gZTtcclxuXHRcdH0sXHJcblx0XHRlbmQ6IGZ1bmN0aW9uIChjb2xvcikge1xyXG5cdFx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRlLnRleHRDb250ZW50ID0gXCJlbmRcIjtcclxuXHRcdFx0X3V0aWwuY3NzKGUsIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcInZpc2libGVcIixcclxuXHRcdFx0XHRcImJvcmRlci13aWR0aFwiOiAwLFxyXG5cdFx0XHRcdFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcclxuXHRcdFx0XHRjb2xvcjogY29sb3IsXHJcblx0XHRcdFx0XCJib3JkZXItY29sb3JcIjogY29sb3JcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBlO1xyXG5cdFx0fSxcclxuXHRcdGJvdW5kczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRfdXRpbC5jc3MoZSwge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxyXG5cdFx0XHRcdFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuXHRcdFx0XHRcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiLFxyXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IEZPTlRfU0laRVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZS5zdHlsZS56SW5kZXggPSBaSU5ERVg7XHJcblx0XHRcdHJldHVybiBlO1xyXG5cdFx0fSxcclxuXHRcdHRyaWdnZXI6IGZ1bmN0aW9uIChjb2xvcikge1xyXG5cdFx0XHQvLyBpbm5lciB0byBiZSBhYm92ZSBvciBiZWxvdyBsaW5lIGJ1dCBrZWVwIHBvc2l0aW9uXHJcblx0XHRcdHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRpbm5lci50ZXh0Q29udGVudCA9IFwidHJpZ2dlclwiO1xyXG5cdFx0XHRfdXRpbC5jc3MoaW5uZXIsIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gaW5uZXIgd3JhcHBlciBmb3IgcmlnaHQ6IDAgYW5kIG1haW4gZWxlbWVudCBoYXMgbm8gc2l6ZVxyXG5cdFx0XHR2YXIgdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRfdXRpbC5jc3Modywge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxyXG5cdFx0XHRcdFwiYm9yZGVyLXdpZHRoXCI6IDAsXHJcblx0XHRcdFx0XCJib3JkZXItc3R5bGVcIjogXCJzb2xpZFwiLFxyXG5cdFx0XHRcdGNvbG9yOiBjb2xvcixcclxuXHRcdFx0XHRcImJvcmRlci1jb2xvclwiOiBjb2xvclxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dy5hcHBlbmRDaGlsZChpbm5lcik7XHJcblx0XHRcdC8vIHdyYXBwZXJcclxuXHRcdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0X3V0aWwuY3NzKGUsIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcInZpc2libGVcIixcclxuXHRcdFx0XHRcIndoaXRlLXNwYWNlXCI6IFwibm93cmFwXCIsXHJcblx0XHRcdFx0XCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBGT05UX1NJWkVcclxuXHRcdFx0fSk7XHJcblx0XHRcdGUuc3R5bGUuekluZGV4ID0gWklOREVYO1xyXG5cdFx0XHRlLmFwcGVuZENoaWxkKHcpO1xyXG5cdFx0XHRyZXR1cm4gZTtcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcbn0pKTtcbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLlBhcmFsbGF4ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuXG59LHtcIl9wcm9jZXNzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG5cbn0se1wicGVyZm9ybWFuY2Utbm93XCI6Mn1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiogUGFyYWxsYXguanNcbiogQGF1dGhvciBNYXR0aGV3IFdhZ2VyZmllbGQgLSBAd2FnZXJmaWVsZCwgUmVuw6kgUm90aCAtIG1haWxAcmVuZXJvdGgub3JnXG4qIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcGFyYWxsYXggZWZmZWN0IGJldHdlZW4gYW4gYXJyYXkgb2YgbGF5ZXJzLFxuKiAgICAgICAgICAgICAgZHJpdmluZyB0aGUgbW90aW9uIGZyb20gdGhlIGd5cm9zY29wZSBvdXRwdXQgb2YgYSBzbWFydGRldmljZS5cbiogICAgICAgICAgICAgIElmIG5vIGd5cm9zY29wZSBpcyBhdmFpbGFibGUsIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgdXNlZC5cbiovXG5cbnZhciBycUFuRnIgPSByZXF1aXJlKCdyYWYnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCAnd2Via2l0J10sIFsnLW1vei0nLCAnTW96J10sIFsnLW8tJywgJ08nXSwgWyctbXMtJywgJ21zJ11dLFxuXG4gIGNsYW1wOiBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbWluIDwgbWF4ID8gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlIDogdmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlO1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gaGVscGVycy5kZXNlcmlhbGl6ZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkpO1xuICB9LFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LFxuICBjYW1lbENhc2U6IGZ1bmN0aW9uIGNhbWVsQ2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24gKG1hdGNoLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgIH0pO1xuICB9LFxuICBhY2NlbGVyYXRlOiBmdW5jdGlvbiBhY2NlbGVyYXRlKGVsZW1lbnQpIHtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMC4wMDAxZGVnKScpO1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAnYmFja2ZhY2UtdmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfSxcbiAgdHJhbnNmb3JtU3VwcG9ydDogZnVuY3Rpb24gdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMF0gKyAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICdUcmFuc2Zvcm0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnMkQnOlxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5U3VwcG9ydDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczRCc6XG4gICAgICAgIGlmIChwcm9wZXJ0eVN1cHBvcnQpIHtcbiAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpLFxuICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgIGRvY3VtZW50T3ZlcmZsb3cgPSBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3csXG4gICAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSBmYWxzZTtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KTtcbiAgICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eVZhbHVlLmxlbmd0aCA+IDAgJiYgcHJvcGVydHlWYWx1ZSAhPT0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY3VtZW50T3ZlcmZsb3c7XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgIGlmIChpc0NyZWF0ZWRCb2R5KSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlU3VwcG9ydDtcbiAgfSxcbiAgY3NzOiBmdW5jdGlvbiBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldO1xuICAgIGlmICghanNQcm9wZXJ0eSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy5jYW1lbENhc2UoaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJy0nICsgcHJvcGVydHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG59O1xuXG52YXIgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgREVGQVVMVFMgPSB7XG4gIHJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBjbGlwUmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gIGlucHV0RWxlbWVudDogbnVsbCxcbiAgaG92ZXJPbmx5OiBmYWxzZSxcbiAgY2FsaWJyYXRpb25UaHJlc2hvbGQ6IDEwMCxcbiAgY2FsaWJyYXRpb25EZWxheTogNTAwLFxuICBzdXBwb3J0RGVsYXk6IDUwMCxcbiAgY2FsaWJyYXRlWDogZmFsc2UsXG4gIGNhbGlicmF0ZVk6IHRydWUsXG4gIGludmVydFg6IHRydWUsXG4gIGludmVydFk6IHRydWUsXG4gIGxpbWl0WDogZmFsc2UsXG4gIGxpbWl0WTogZmFsc2UsXG4gIHNjYWxhclg6IDEwLjAsXG4gIHNjYWxhclk6IDEwLjAsXG4gIGZyaWN0aW9uWDogMC4xLFxuICBmcmljdGlvblk6IDAuMSxcbiAgb3JpZ2luWDogMC41LFxuICBvcmlnaW5ZOiAwLjUsXG4gIHBvaW50ZXJFdmVudHM6IGZhbHNlLFxuICBwcmVjaXNpb246IDEsXG4gIG9uUmVhZHk6IG51bGwsXG4gIHNlbGVjdG9yOiBudWxsXG59O1xuXG52YXIgUGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcmFsbGF4KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsYXgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JqZWN0QXNzaWduKHRoaXMsIERFRkFVTFRTLCBkYXRhLCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IG51bGw7XG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVwdGhzWCA9IFtdO1xuICAgIHRoaXMuZGVwdGhzWSA9IFtdO1xuICAgIHRoaXMucmFmID0gbnVsbDtcblxuICAgIHRoaXMuYm91bmRzID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwO1xuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IDA7XG4gICAgdGhpcy5lbGVtZW50V2lkdGggPSAwO1xuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDA7XG5cbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gMDtcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gMDtcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gMDtcblxuICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMDtcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDA7XG5cbiAgICB0aGlzLmlucHV0WCA9IDA7XG4gICAgdGhpcy5pbnB1dFkgPSAwO1xuXG4gICAgdGhpcy5tb3Rpb25YID0gMDtcbiAgICB0aGlzLm1vdGlvblkgPSAwO1xuXG4gICAgdGhpcy52ZWxvY2l0eVggPSAwO1xuICAgIHRoaXMudmVsb2NpdHlZID0gMDtcblxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uID0gdGhpcy5vbkRldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uT3JpZW50YXRpb25UaW1lciA9IHRoaXMub25PcmllbnRhdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdGlvblRpbWVyID0gdGhpcy5vbk1vdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BbmltYXRpb25GcmFtZSA9IHRoaXMub25BbmltYXRpb25GcmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dDZW50ZXJYID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsO1xuICAgIHRoaXMud2luZG93UmFkaXVzWCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gbnVsbDtcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgdGhpcy5kZXNrdG9wID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxCQjEwfG1vYml8dGFibGV0fG9wZXJhIG1pbml8bmV4dXMgNykvaSk7XG4gICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcDtcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcDtcbiAgICB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID0gMDtcbiAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDA7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXJhbGxheCwgW3tcbiAgICBrZXk6ICdpbml0aWFsaXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCcyRCcpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnM0QnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIH1cblxuICAgICAgLy8gUG9pbnRlciBldmVudHNcbiAgICAgIGlmICghdGhpcy5wb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cFxuICAgICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbih0aGlzLmNhbGlicmF0aW9uRGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RvUmVhZHlDYWxsYmFjaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICAgIGlmICh0aGlzLm9uUmVhZHkpIHtcbiAgICAgICAgdGhpcy5vblJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlTGF5ZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTGF5ZXJzKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlcHRoc1ggPSBbXTtcbiAgICAgIHRoaXMuZGVwdGhzWSA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XTtcblxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBpbmRleCA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnO1xuICAgICAgICBsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbGF5ZXIuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGxheWVyLnN0eWxlLnRvcCA9IDA7XG5cbiAgICAgICAgdmFyIGRlcHRoID0gaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgnKSB8fCAwO1xuICAgICAgICB0aGlzLmRlcHRoc1gucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC14JykgfHwgZGVwdGgpO1xuICAgICAgICB0aGlzLmRlcHRoc1kucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC15JykgfHwgZGVwdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpbWVuc2lvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaW1lbnNpb25zKCkge1xuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpblk7XG4gICAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpO1xuICAgICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlQm91bmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQm91bmRzKCkge1xuICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmlucHV0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IHRoaXMuYm91bmRzLmxlZnQ7XG4gICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSB0aGlzLmJvdW5kcy50b3A7XG4gICAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IHRoaXMuYm91bmRzLndpZHRoO1xuICAgICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IHRoaXMuZWxlbWVudFdpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IHRoaXMuZWxlbWVudEhlaWdodCAqIHRoaXMub3JpZ2luWTtcbiAgICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclgsIHRoaXMuZWxlbWVudFdpZHRoIC0gdGhpcy5lbGVtZW50Q2VudGVyWCk7XG4gICAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJZLCB0aGlzLmVsZW1lbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdxdWV1ZUNhbGlicmF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVldWVDYWxpYnJhdGlvbihkZWxheSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcik7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pO1xuICAgICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uT3JpZW50YXRpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSAwO1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDA7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxpYnJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxpYnJhdGUoeCwgeSkge1xuICAgICAgdGhpcy5jYWxpYnJhdGVYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVYIDogeDtcbiAgICAgIHRoaXMuY2FsaWJyYXRlWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW52ZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW52ZXJ0KHgsIHkpIHtcbiAgICAgIHRoaXMuaW52ZXJ0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WCA6IHg7XG4gICAgICB0aGlzLmludmVydFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZyaWN0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJpY3Rpb24oeCwgeSkge1xuICAgICAgdGhpcy5mcmljdGlvblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWCA6IHg7XG4gICAgICB0aGlzLmZyaWN0aW9uWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY2FsYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY2FsYXIoeCwgeSkge1xuICAgICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeDtcbiAgICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGltaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW1pdCh4LCB5KSB7XG4gICAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeDtcbiAgICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29yaWdpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9yaWdpbih4LCB5KSB7XG4gICAgICB0aGlzLm9yaWdpblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblggOiB4O1xuICAgICAgdGhpcy5vcmlnaW5ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRJbnB1dEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgICB4ID0geC50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCc7XG4gICAgICB5ID0geS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCc7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgeCArICcsJyArIHkgKyAnLDApJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB4O1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25PcmllbnRhdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0ICYmIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW90aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMubW90aW9uU3VwcG9ydCAmJiB0aGlzLm1vdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2FsaWJyYXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbldpbmRvd1Jlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25BbmltYXRpb25GcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdmFyIGNhbGlicmF0ZWRJbnB1dFggPSB0aGlzLmlucHV0WCAtIHRoaXMuY2FsaWJyYXRpb25YLFxuICAgICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZO1xuICAgICAgaWYgKE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFgpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCB8fCBNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHtcbiAgICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKDApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZO1xuICAgICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApO1xuICAgICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApO1xuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblgsIC10aGlzLmxpbWl0WCwgdGhpcy5saW1pdFgpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRZKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpO1xuICAgICAgfVxuICAgICAgdGhpcy52ZWxvY2l0eVggKz0gKHRoaXMubW90aW9uWCAtIHRoaXMudmVsb2NpdHlYKSAqIHRoaXMuZnJpY3Rpb25YO1xuICAgICAgdGhpcy52ZWxvY2l0eVkgKz0gKHRoaXMubW90aW9uWSAtIHRoaXMudmVsb2NpdHlZKSAqIHRoaXMuZnJpY3Rpb25ZO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF0sXG4gICAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgICAgZGVwdGhZID0gdGhpcy5kZXB0aHNZW2luZGV4XSxcbiAgICAgICAgICAgIHhPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WCAqIChkZXB0aFggKiAodGhpcy5pbnZlcnRYID8gLTEgOiAxKSksXG4gICAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncm90YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm90YXRlKGJldGEsIGdhbW1hKSB7XG4gICAgICAvLyBFeHRyYWN0IFJvdGF0aW9uXG4gICAgICB2YXIgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLFxuICAgICAgICAgIC8vICAtOTAgOjogOTBcbiAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVI7IC8vIC0xODAgOjogMTgwXG5cbiAgICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICAgIHZhciBwb3J0cmFpdCA9IHRoaXMud2luZG93SGVpZ2h0ID4gdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIGlmICh0aGlzLnBvcnRyYWl0ICE9PSBwb3J0cmFpdCkge1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gcG9ydHJhaXQ7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0geDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSB5O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlucHV0WCA9IHg7XG4gICAgICB0aGlzLmlucHV0WSA9IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EZXZpY2VPcmllbnRhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlT3JpZW50YXRpb24oZXZlbnQpIHtcbiAgICAgIHZhciBiZXRhID0gZXZlbnQuYmV0YTtcbiAgICAgIHZhciBnYW1tYSA9IGV2ZW50LmdhbW1hO1xuICAgICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDE7XG4gICAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRldmljZU1vdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlTW90aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5iZXRhO1xuICAgICAgdmFyIGdhbW1hID0gZXZlbnQucm90YXRpb25SYXRlLmdhbW1hO1xuICAgICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICAvLyByZXNldCBpbnB1dCB0byBjZW50ZXIgaWYgaG92ZXJPbmx5IGlzIHNldCBhbmQgd2UncmUgbm90IGhvdmVyaW5nIHRoZSBlbGVtZW50XG4gICAgICBpZiAodGhpcy5ob3Zlck9ubHkgJiYgKGNsaWVudFggPCB0aGlzLmVsZW1lbnRQb3NpdGlvblggfHwgY2xpZW50WCA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoIHx8IGNsaWVudFkgPCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgfHwgY2xpZW50WSA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodCkpIHtcbiAgICAgICAgdGhpcy5pbnB1dFggPSAwO1xuICAgICAgICB0aGlzLmlucHV0WSA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgICAvLyBDbGlwIG1vdXNlIGNvb3JkaW5hdGVzIGluc2lkZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgICAgaWYgKHRoaXMuY2xpcFJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKTtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJhbmdlWCAmJiB0aGlzLmVsZW1lbnRSYW5nZVkpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb25YIC0gdGhpcy5lbGVtZW50Q2VudGVyWCkgLyB0aGlzLmVsZW1lbnRSYW5nZVg7XG4gICAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWSAtIHRoaXMuZWxlbWVudENlbnRlclkpIC8gdGhpcy5lbGVtZW50UmFuZ2VZO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIHdpbmRvdy5cbiAgICAgICAgaWYgKHRoaXMud2luZG93UmFkaXVzWCAmJiB0aGlzLndpbmRvd1JhZGl1c1kpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy53aW5kb3dDZW50ZXJYKSAvIHRoaXMud2luZG93UmFkaXVzWDtcbiAgICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy53aW5kb3dDZW50ZXJZKSAvIHRoaXMud2luZG93UmFkaXVzWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGV0ZWN0aW9uVGltZXIpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5lbGVtZW50O1xuICAgICAgZGVsZXRlIHRoaXMubGF5ZXJzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgcmV0dXJuICczLjEuMCc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhcmFsbGF4O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmFsbGF4O1xuXG59LHtcIm9iamVjdC1hc3NpZ25cIjoxLFwicmFmXCI6NH1dfSx7fSxbNV0pKDUpXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmIySnFaV04wTFdGemMybG5iaTlwYm1SbGVDNXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OXdaWEptYjNKdFlXNWpaUzF1YjNjdmJHbGlMM0JsY21admNtMWhibU5sTFc1dmR5NXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmNtRm1MMmx1WkdWNExtcHpJaXdpYzNKakwzQmhjbUZzYkdGNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUXpGR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenRCUTNCRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVONFRFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdRVU40UlVFN096czdPenM3TzBGQlVVRXNTVUZCVFN4VFFVRlRMRkZCUVZFc1MwRkJVaXhEUVVGbU8wRkJRMEVzU1VGQlRTeGxRVUZsTEZGQlFWRXNaVUZCVWl4RFFVRnlRanM3UVVGRlFTeEpRVUZOTEZWQlFWVTdRVUZEWkN4cFFrRkJaU3hGUVVSRU8wRkJSV1FzVjBGQlV5eERRVUZETEVsQlFVUXNSVUZCVHl4RFFVRkRMRlZCUVVRc1JVRkJXU3hSUVVGYUxFTkJRVkFzUlVGQk9FSXNRMEZCUXl4UFFVRkVMRVZCUVZNc1MwRkJWQ3hEUVVFNVFpeEZRVUVyUXl4RFFVRkRMRXRCUVVRc1JVRkJUeXhIUVVGUUxFTkJRUzlETEVWQlFUUkVMRU5CUVVNc1RVRkJSQ3hGUVVGUkxFbEJRVklzUTBGQk5VUXNRMEZHU3pzN1FVRkpaQ3hQUVVwakxHbENRVWxTTEV0QlNsRXNSVUZKUkN4SFFVcERMRVZCU1Vrc1IwRktTaXhGUVVsVE8wRkJRM0pDTEZkQlFVOHNUVUZCVFN4SFFVRk9MRWRCUTBZc1VVRkJVU3hIUVVGU0xFZEJRV01zUjBGQlpDeEhRVUZ2UWl4UlFVRlJMRWRCUVZJc1IwRkJZeXhIUVVGa0xFZEJRVzlDTEV0QlJIUkRMRWRCUlVZc1VVRkJVU3hIUVVGU0xFZEJRV01zUjBGQlpDeEhRVUZ2UWl4UlFVRlJMRWRCUVZJc1IwRkJZeXhIUVVGa0xFZEJRVzlDTEV0QlJqZERPMEZCUjBRc1IwRlNZVHRCUVZWa0xFMUJWbU1zWjBKQlZWUXNUMEZXVXl4RlFWVkJMRWxCVmtFc1JVRlZUVHRCUVVOc1FpeFhRVUZQTEZGQlFWRXNWMEZCVWl4RFFVRnZRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNWVUZCVVN4SlFVRTNRaXhEUVVGd1FpeERRVUZRTzBGQlEwUXNSMEZhWVR0QlFXTmtMR0ZCWkdNc2RVSkJZMFlzUzBGa1JTeEZRV05MTzBGQlEycENMRkZCUVVrc1ZVRkJWU3hOUVVGa0xFVkJRWE5DTzBGQlEzQkNMR0ZCUVU4c1NVRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR5eEpRVUZKTEZWQlFWVXNUMEZCWkN4RlFVRjFRanRCUVVNMVFpeGhRVUZQTEV0QlFWQTdRVUZEUkN4TFFVWk5MRTFCUlVFc1NVRkJTU3hWUVVGVkxFMUJRV1FzUlVGQmMwSTdRVUZETTBJc1lVRkJUeXhKUVVGUU8wRkJRMFFzUzBGR1RTeE5RVVZCTEVsQlFVa3NRMEZCUXl4TlFVRk5MRmRCUVZjc1MwRkJXQ3hEUVVGT0xFTkJRVVFzU1VGQk5rSXNVMEZCVXl4TFFVRlVMRU5CUVdwRExFVkJRV3RFTzBGQlEzWkVMR0ZCUVU4c1YwRkJWeXhMUVVGWUxFTkJRVkE3UVVGRFJDeExRVVpOTEUxQlJVRTdRVUZEVEN4aFFVRlBMRXRCUVZBN1FVRkRSRHRCUVVOR0xFZEJNVUpoTzBGQk5FSmtMRmRCTlVKakxIRkNRVFJDU2l4TFFUVkNTU3hGUVRSQ1J6dEJRVU5tTEZkQlFVOHNUVUZCVFN4UFFVRk9MRU5CUVdNc1UwRkJaQ3hGUVVGNVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4VFFVRlNMRVZCUVhOQ08wRkJRM0JFTEdGQlFVOHNXVUZCV1N4VlFVRlZMRmRCUVZZc1JVRkJXaXhIUVVGelF5eEZRVUUzUXp0QlFVTkVMRXRCUmswc1EwRkJVRHRCUVVkRUxFZEJhRU5oTzBGQmEwTmtMRmxCYkVOakxITkNRV3REU0N4UFFXeERSeXhGUVd0RFRUdEJRVU5zUWl4WlFVRlJMRWRCUVZJc1EwRkJXU3hQUVVGYUxFVkJRWEZDTEZkQlFYSkNMRVZCUVd0RExITkRRVUZzUXp0QlFVTkJMRmxCUVZFc1IwRkJVaXhEUVVGWkxFOUJRVm9zUlVGQmNVSXNhVUpCUVhKQ0xFVkJRWGRETEdGQlFYaERPMEZCUTBFc1dVRkJVU3hIUVVGU0xFTkJRVmtzVDBGQldpeEZRVUZ4UWl4eFFrRkJja0lzUlVGQk5FTXNVVUZCTlVNN1FVRkRSQ3hIUVhSRFlUdEJRWGREWkN4clFrRjRRMk1zTkVKQmQwTkhMRXRCZUVOSUxFVkJkME5WTzBGQlEzUkNMRkZCUVVrc1ZVRkJWU3hUUVVGVExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJaRHRCUVVGQkxGRkJRMGtzYTBKQlFXdENMRXRCUkhSQ08wRkJRVUVzVVVGRlNTeG5Ra0ZCWjBJc1NVRkdjRUk3UVVGQlFTeFJRVWRKTEdsQ1FVRnBRaXhMUVVoeVFqdEJRVUZCTEZGQlNVa3NZMEZCWXl4SlFVcHNRanRCUVVGQkxGRkJTMGtzWVVGQllTeEpRVXhxUWp0QlFVMUJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRVklzUlVGQlZ5eEpRVUZKTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhOUVVGd1F5eEZRVUUwUXl4SlFVRkpMRU5CUVdoRUxFVkJRVzFFTEVkQlFXNUVMRVZCUVhkRU8wRkJRM1JFTEZWQlFVa3NVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEUxQlFYVkNMRWxCUVROQ0xFVkJRV2xETzBGQlF5OUNMSE5DUVVGakxGRkJRVkVzVDBGQlVpeERRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhYUVVGMFF6dEJRVU5CTEhGQ1FVRmhMRkZCUVZFc1QwRkJVaXhEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEpRVUYzUWl4WFFVRnlRenRCUVVORUxFOUJTRVFzVFVGSFR6dEJRVU5NTEhOQ1FVRmpMRmRCUVdRN1FVRkRRU3h4UWtGQllTeFhRVUZpTzBGQlEwUTdRVUZEUkN4VlFVRkpMRkZCUVZFc1MwRkJVaXhEUVVGakxGVkJRV1FzVFVGQk9FSXNVMEZCYkVNc1JVRkJOa003UVVGRE0wTXNNRUpCUVd0Q0xFbEJRV3hDTzBGQlEwRTdRVUZEUkR0QlFVTkdPMEZCUTBRc1dVRkJUeXhMUVVGUU8wRkJRMFVzVjBGQlN5eEpRVUZNTzBGQlEwVXNlVUpCUVdsQ0xHVkJRV3BDTzBGQlEwRTdRVUZEUml4WFFVRkxMRWxCUVV3N1FVRkRSU3haUVVGSkxHVkJRVW9zUlVGQmNVSTdRVUZEYmtJc1kwRkJTU3hQUVVGUExGTkJRVk1zU1VGQlZDeEpRVUZwUWl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVFVGQmRrSXNRMEZCTlVJN1FVRkJRU3hqUVVOSkxHdENRVUZyUWl4VFFVRlRMR1ZCUkM5Q08wRkJRVUVzWTBGRlNTeHRRa0ZCYlVJc1owSkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xGRkJSamRETzBGQlFVRXNZMEZIU1N4blFrRkJaMElzUzBGSWNFSTdPMEZCUzBFc1kwRkJTU3hEUVVGRExGTkJRVk1zU1VGQlpDeEZRVUZ2UWp0QlFVTnNRaXcwUWtGQlowSXNTVUZCYUVJN1FVRkRRU3cwUWtGQlowSXNTMEZCYUVJc1EwRkJjMElzVVVGQmRFSXNSMEZCYVVNc1VVRkJha003UVVGRFFTdzBRa0ZCWjBJc1YwRkJhRUlzUTBGQk5FSXNTVUZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NVVUZCV0N4SFFVRnpRaXhSUVVGMFFqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhWUVVGWUxFZEJRWGRDTEVWQlFYaENPMEZCUTBRN08wRkJSVVFzWlVGQlN5eFhRVUZNTEVOQlFXbENMRTlCUVdwQ08wRkJRMEVzYTBKQlFWRXNTMEZCVWl4RFFVRmpMRlZCUVdRc1NVRkJORUlzTUVKQlFUVkNPMEZCUTBFc01FSkJRV2RDTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVNc1owSkJRV3BETEVOQlFXdEVMRmRCUVd4RUxFTkJRV2hDTzBGQlEwRXNNa0pCUVdsQ0xHdENRVUZyUWl4VFFVRnNRaXhKUVVFclFpeGpRVUZqTEUxQlFXUXNSMEZCZFVJc1EwRkJkRVFzU1VGQk1rUXNhMEpCUVd0Q0xFMUJRVGxHTzBGQlEwRXNNRUpCUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRkZCUVhSQ0xFZEJRV2xETEdkQ1FVRnFRenRCUVVOQkxHVkJRVXNzVjBGQlRDeERRVUZwUWl4UFFVRnFRanM3UVVGRlFTeGpRVUZMTEdGQlFVd3NSVUZCY1VJN1FVRkRia0lzYVVKQlFVc3NaVUZCVEN4RFFVRnhRaXhQUVVGeVFqdEJRVU5CTEdsQ1FVRkxMRlZCUVV3c1EwRkJaMElzVjBGQmFFSXNRMEZCTkVJc1NVRkJOVUk3UVVGRFJEdEJRVU5HTzBGQlEwUTdRVUV2UWtvN1FVRnBRMEVzVjBGQlR5eGpRVUZRTzBGQlEwUXNSMEU1Um1FN1FVRm5SMlFzUzBGb1IyTXNaVUZuUjFZc1QwRm9SMVVzUlVGblIwUXNVVUZvUjBNc1JVRm5SMU1zUzBGb1IxUXNSVUZuUjJkQ08wRkJRelZDTEZGQlFVa3NZVUZCWVN4UlFVRlJMR0ZCUVZJc1EwRkJjMElzVVVGQmRFSXNRMEZCYWtJN1FVRkRRU3hSUVVGSkxFTkJRVU1zVlVGQlRDeEZRVUZwUWp0QlFVTm1MRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVklzUlVGQlZ5eEpRVUZKTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhOUVVGd1F5eEZRVUUwUXl4SlFVRkpMRU5CUVdoRUxFVkJRVzFFTEVkQlFXNUVMRVZCUVhkRU8wRkJRM1JFTEZsQlFVa3NVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEUxQlFYVkNMRWxCUVROQ0xFVkJRV2xETzBGQlF5OUNMSFZDUVVGaExGRkJRVkVzVTBGQlVpeERRVUZyUWl4UlFVRlJMRTlCUVZJc1EwRkJaMElzUTBGQmFFSXNSVUZCYlVJc1EwRkJia0lzU1VGQmQwSXNSMEZCZUVJc1IwRkJPRUlzVVVGQmFFUXNRMEZCWWp0QlFVTkVMRk5CUmtRc1RVRkZUenRCUVVOTUxIVkNRVUZoTEZGQlFXSTdRVUZEUkR0QlFVTkVMRmxCUVVrc1VVRkJVU3hMUVVGU0xFTkJRV01zVlVGQlpDeE5RVUU0UWl4VFFVRnNReXhGUVVFMlF6dEJRVU16UXl4clFrRkJVU3hoUVVGU0xFTkJRWE5DTEZGQlFYUkNMRWxCUVd0RExGVkJRV3hETzBGQlEwRTdRVUZEUkR0QlFVTkdPMEZCUTBZN1FVRkRSQ3haUVVGUkxFdEJRVklzUTBGQll5eFZRVUZrTEVsQlFUUkNMRXRCUVRWQ08wRkJRMFE3UVVGb1NHRXNRMEZCYUVJN08wRkJiMGhCTEVsQlFVMHNaVUZCWlN4RlFVRnlRanRCUVVGQkxFbEJRMDBzVjBGQlZ6dEJRVU5VTEdsQ1FVRmxMRXRCUkU0N1FVRkZWQ3h4UWtGQmJVSXNTMEZHVmp0QlFVZFVMR2RDUVVGakxFbEJTRXc3UVVGSlZDeGhRVUZYTEV0QlNrWTdRVUZMVkN4M1FrRkJjMElzUjBGTVlqdEJRVTFVTEc5Q1FVRnJRaXhIUVU1VU8wRkJUMVFzWjBKQlFXTXNSMEZRVER0QlFWRlVMR05CUVZrc1MwRlNTRHRCUVZOVUxHTkJRVmtzU1VGVVNEdEJRVlZVTEZkQlFWTXNTVUZXUVR0QlFWZFVMRmRCUVZNc1NVRllRVHRCUVZsVUxGVkJRVkVzUzBGYVF6dEJRV0ZVTEZWQlFWRXNTMEZpUXp0QlFXTlVMRmRCUVZNc1NVRmtRVHRCUVdWVUxGZEJRVk1zU1VGbVFUdEJRV2RDVkN4aFFVRlhMRWRCYUVKR08wRkJhVUpVTEdGQlFWY3NSMEZxUWtZN1FVRnJRbFFzVjBGQlV5eEhRV3hDUVR0QlFXMUNWQ3hYUVVGVExFZEJia0pCTzBGQmIwSlVMR2xDUVVGbExFdEJjRUpPTzBGQmNVSlVMR0ZCUVZjc1EwRnlRa1k3UVVGelFsUXNWMEZCVXl4SlFYUkNRVHRCUVhWQ1ZDeFpRVUZWTzBGQmRrSkVMRU5CUkdwQ096dEpRVEpDVFN4Uk8wRkJRMG9zYjBKQlFWa3NUMEZCV2l4RlFVRnhRaXhQUVVGeVFpeEZRVUU0UWp0QlFVRkJPenRCUVVVMVFpeFRRVUZMTEU5QlFVd3NSMEZCWlN4UFFVRm1PenRCUVVWQkxGRkJRVTBzVDBGQlR6dEJRVU5ZTEd0Q1FVRlpMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1lVRkJNMElzUTBGRVJEdEJRVVZZTEd0Q1FVRlpMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1lVRkJNMElzUTBGR1JEdEJRVWRZTEdWQlFWTXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4VlFVRXpRaXhEUVVoRk8wRkJTVmdzWlVGQlV5eFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNMRU5CU2tVN1FVRkxXQ3hqUVVGUkxGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzVTBGQk0wSXNRMEZNUnp0QlFVMVlMR05CUVZFc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhUUVVFelFpeERRVTVITzBGQlQxZ3NaVUZCVXl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ0xFTkJVRVU3UVVGUldDeGxRVUZUTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNWVUZCTTBJc1EwRlNSVHRCUVZOWUxHbENRVUZYTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNXVUZCTTBJc1EwRlVRVHRCUVZWWUxHbENRVUZYTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNXVUZCTTBJc1EwRldRVHRCUVZkWUxHVkJRVk1zVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFZRVUV6UWl4RFFWaEZPMEZCV1Znc1pVRkJVeXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTEVOQldrVTdRVUZoV0N4eFFrRkJaU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xHZENRVUV6UWl4RFFXSktPMEZCWTFnc2FVSkJRVmNzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFhRVUV6UWl4RFFXUkJPMEZCWlZnc2NVSkJRV1VzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeG5Ra0ZCTTBJc1EwRm1TanRCUVdkQ1dDeDVRa0ZCYlVJc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXh4UWtGQk0wSXNRMEZvUWxJN1FVRnBRbGdzYVVKQlFWY3NVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4WlFVRXpRaXhEUVdwQ1FUdEJRV3RDV0N4dlFrRkJZeXhUUVVGVExHRkJRVlFzUTBGQmRVSXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4bFFVRXpRaXhEUVVGMlFpeERRV3hDU0R0QlFXMUNXQ3huUWtGQlZTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNPMEZCYmtKRExFdEJRV0k3TzBGQmMwSkJMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEZWQlFVa3NTMEZCU3l4SFFVRk1MRTFCUVdNc1NVRkJiRUlzUlVGQmQwSTdRVUZEZEVJc1pVRkJUeXhMUVVGTExFZEJRVXdzUTBGQlVEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc2FVSkJRV0VzU1VGQllpeEZRVUZ0UWl4UlFVRnVRaXhGUVVFMlFpeEpRVUUzUWl4RlFVRnRReXhQUVVGdVF6czdRVUZGUVN4UlFVRkhMRU5CUVVNc1MwRkJTeXhaUVVGVUxFVkJRWFZDTzBGQlEzSkNMRmRCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEU5QlFYcENPMEZCUTBRN08wRkJSVVFzVTBGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGNFFqdEJRVU5CTEZOQlFVc3NaVUZCVEN4SFFVRjFRaXhKUVVGMlFqdEJRVU5CTEZOQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVdZN1FVRkRRU3hUUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNVMEZCU3l4UFFVRk1MRWRCUVdVc1JVRkJaanRCUVVOQkxGTkJRVXNzUjBGQlRDeEhRVUZYTEVsQlFWZzdPMEZCUlVFc1UwRkJTeXhOUVVGTUxFZEJRV01zU1VGQlpEdEJRVU5CTEZOQlFVc3NaMEpCUVV3c1IwRkJkMElzUTBGQmVFSTdRVUZEUVN4VFFVRkxMR2RDUVVGTUxFZEJRWGRDTEVOQlFYaENPMEZCUTBFc1UwRkJTeXhaUVVGTUxFZEJRVzlDTEVOQlFYQkNPMEZCUTBFc1UwRkJTeXhoUVVGTUxFZEJRWEZDTEVOQlFYSkNPenRCUVVWQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanM3UVVGRlFTeFRRVUZMTEdGQlFVd3NSMEZCY1VJc1EwRkJja0k3UVVGRFFTeFRRVUZMTEdGQlFVd3NSMEZCY1VJc1EwRkJja0k3TzBGQlJVRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDTzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDT3p0QlFVVkJMRk5CUVVzc1RVRkJUQ3hIUVVGakxFTkJRV1E3UVVGRFFTeFRRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRmtPenRCUVVWQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbU96dEJRVVZCTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqdEJRVU5CTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqczdRVUZGUVN4VFFVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eFhRVUZNTEVOQlFXbENMRWxCUVdwQ0xFTkJRWE5DTEVsQlFYUkNMRU5CUVc1Q08wRkJRMEVzVTBGQlN5eHRRa0ZCVEN4SFFVRXlRaXhMUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVsQlFUbENMRU5CUVROQ08wRkJRMEVzVTBGQlN5eGpRVUZNTEVkQlFYTkNMRXRCUVVzc1kwRkJUQ3hEUVVGdlFpeEpRVUZ3UWl4RFFVRjVRaXhKUVVGNlFpeERRVUYwUWp0QlFVTkJMRk5CUVVzc2EwSkJRVXdzUjBGQk1FSXNTMEZCU3l4clFrRkJUQ3hEUVVGM1FpeEpRVUY0UWl4RFFVRTJRaXhKUVVFM1FpeERRVUV4UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEdGQlFVd3NRMEZCYlVJc1NVRkJia0lzUTBGQmQwSXNTVUZCZUVJc1EwRkJja0k3UVVGRFFTeFRRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFdEJRVXNzYTBKQlFVd3NRMEZCZDBJc1NVRkJlRUlzUTBGQk5rSXNTVUZCTjBJc1EwRkJNVUk3UVVGRFFTeFRRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFdEJRVXNzWjBKQlFVd3NRMEZCYzBJc1NVRkJkRUlzUTBGQk1rSXNTVUZCTTBJc1EwRkJlRUk3UVVGRFFTeFRRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFYUkNPenRCUVVWQkxGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4SlFVRnVRanRCUVVOQkxGTkJRVXNzV1VGQlRDeEhRVUZ2UWl4SlFVRndRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFVTXNWVUZCVlN4VFFVRldMRU5CUVc5Q0xFdEJRWEJDTEVOQlFUQkNMRFJGUVVFeFFpeERRVUZvUWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeERRVUZETEVOQlFVTXNUMEZCVHl4cFFrRkJWQ3hKUVVFNFFpeERRVUZETEV0QlFVc3NUMEZCZWtRN1FVRkRRU3hUUVVGTExHdENRVUZNTEVkQlFUQkNMRU5CUVVNc1EwRkJReXhQUVVGUExITkNRVUZVTEVsQlFXMURMRU5CUVVNc1MwRkJTeXhQUVVGdVJUdEJRVU5CTEZOQlFVc3NhVUpCUVV3c1IwRkJlVUlzUTBGQmVrSTdRVUZEUVN4VFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdPMEZCUlVFc1UwRkJTeXhWUVVGTU8wRkJRMFE3T3pzN2FVTkJSVms3UVVGRFdDeFZRVUZKTEV0QlFVc3NhMEpCUVV3c1MwRkJORUlzVTBGQmFFTXNSVUZCTWtNN1FVRkRla01zWVVGQlN5eHJRa0ZCVEN4SFFVRXdRaXhSUVVGUkxHZENRVUZTTEVOQlFYbENMRWxCUVhwQ0xFTkJRVEZDTzBGQlEwRXNZVUZCU3l4clFrRkJUQ3hIUVVFd1FpeFJRVUZSTEdkQ1FVRlNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFURkNPMEZCUTBRN08wRkJSVVE3UVVGRFFTeFZRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNaMEpCUVZFc1ZVRkJVaXhEUVVGdFFpeExRVUZMTEU5QlFYaENPMEZCUTBRN08wRkJSVVFzVlVGQlNTeFJRVUZSTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzUzBGQlN5eFBRVUUzUWl4RFFVRmFPMEZCUTBFc1ZVRkJTU3hOUVVGTkxHZENRVUZPTEVOQlFYVkNMRlZCUVhaQ0xFMUJRWFZETEZGQlFUTkRMRVZCUVhGRU8wRkJRMjVFTEdGQlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkJiVUlzVVVGQmJrSXNSMEZCT0VJc1ZVRkJPVUk3UVVGRFJEczdRVUZGUkR0QlFVTkJMRlZCUVVjc1EwRkJReXhMUVVGTExHRkJRVlFzUlVGQmQwSTdRVUZEZEVJc1lVRkJTeXhQUVVGTUxFTkJRV0VzUzBGQllpeERRVUZ0UWl4aFFVRnVRaXhIUVVGdFF5eE5RVUZ1UXp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVjBGQlN5eFpRVUZNTzBGQlEwRXNWMEZCU3l4blFrRkJURHRCUVVOQkxGZEJRVXNzVFVGQlREdEJRVU5CTEZkQlFVc3NaMEpCUVV3c1EwRkJjMElzUzBGQlN5eG5Ra0ZCTTBJN1FVRkRSRHM3TzNORFFVVnBRanRCUVVOb1FpeFZRVUZITEV0QlFVc3NUMEZCVWl4RlFVRnBRanRCUVVObUxHRkJRVXNzVDBGQlREdEJRVU5FTzBGQlEwWTdPenR0UTBGRll6dEJRVU5pTEZWQlFVY3NTMEZCU3l4UlFVRlNMRVZCUVd0Q08wRkJRMmhDTEdGQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1QwRkJUQ3hEUVVGaExHZENRVUZpTEVOQlFUaENMRXRCUVVzc1VVRkJia01zUTBGQlpEdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1MR0ZCUVVzc1RVRkJUQ3hIUVVGakxFdEJRVXNzVDBGQlRDeERRVUZoTEZGQlFUTkNPMEZCUTBRN08wRkJSVVFzVlVGQlJ5eERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzUkNMR2RDUVVGUkxFbEJRVklzUTBGQllTeHJSRUZCWWp0QlFVTkVPenRCUVVWRUxGZEJRVXNzVDBGQlRDeEhRVUZsTEVWQlFXWTdRVUZEUVN4WFFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbU96dEJRVVZCTEZkQlFVc3NTVUZCU1N4UlFVRlJMRU5CUVdwQ0xFVkJRVzlDTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1RVRkJlRU1zUlVGQlowUXNUMEZCYUVRc1JVRkJlVVE3UVVGRGRrUXNXVUZCU1N4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQldqczdRVUZGUVN4WlFVRkpMRXRCUVVzc2EwSkJRVlFzUlVGQk5rSTdRVUZETTBJc2EwSkJRVkVzVlVGQlVpeERRVUZ0UWl4TFFVRnVRanRCUVVORU96dEJRVVZFTEdOQlFVMHNTMEZCVGl4RFFVRlpMRkZCUVZvc1IwRkJkVUlzVVVGQlVTeFZRVUZTTEVkQlFYRkNMRlZCUVRWRE8wRkJRMEVzWTBGQlRTeExRVUZPTEVOQlFWa3NUMEZCV2l4SFFVRnpRaXhQUVVGMFFqdEJRVU5CTEdOQlFVMHNTMEZCVGl4RFFVRlpMRWxCUVZvc1IwRkJiVUlzUTBGQmJrSTdRVUZEUVN4alFVRk5MRXRCUVU0c1EwRkJXU3hIUVVGYUxFZEJRV3RDTEVOQlFXeENPenRCUVVWQkxGbEJRVWtzVVVGQlVTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRmlMRVZCUVc5Q0xFOUJRWEJDTEV0QlFXZERMRU5CUVRWRE8wRkJRMEVzWVVGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWl4RFFVRnJRaXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZpTEVWQlFXOUNMRk5CUVhCQ0xFdEJRV3RETEV0QlFYQkVPMEZCUTBFc1lVRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeERRVUZyUWl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGaUxFVkJRVzlDTEZOQlFYQkNMRXRCUVd0RExFdEJRWEJFTzBGQlEwUTdRVUZEUmpzN08zVkRRVVZyUWp0QlFVTnFRaXhYUVVGTExGZEJRVXdzUjBGQmJVSXNUMEZCVHl4VlFVRXhRanRCUVVOQkxGZEJRVXNzV1VGQlRDeEhRVUZ2UWl4UFFVRlBMRmRCUVROQ08wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEU5QlFUZERPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFOUJRVGxETzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NZVUZCWkN4RlFVRTJRaXhMUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4aFFVRnlSQ3hEUVVGeVFqdEJRVU5CTEZkQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEdGQlFXUXNSVUZCTmtJc1MwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NZVUZCZEVRc1EwRkJja0k3UVVGRFJEczdPMjFEUVVWak8wRkJRMklzVjBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4WlFVRk1MRU5CUVd0Q0xIRkNRVUZzUWl4RlFVRmtPMEZCUTBFc1YwRkJTeXhuUWtGQlRDeEhRVUYzUWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGd1F6dEJRVU5CTEZkQlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCY0VNN1FVRkRRU3hYUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJhRU03UVVGRFFTeFhRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhOUVVGTUxFTkJRVmtzVFVGQmFrTTdRVUZEUVN4WFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1QwRkJMME03UVVGRFFTeFhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NUMEZCYUVRN1FVRkRRU3hYUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhqUVVGa0xFVkJRVGhDTEV0QlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExHTkJRWFpFTEVOQlFYSkNPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1kwRkJaQ3hGUVVFNFFpeExRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhqUVVGNFJDeERRVUZ5UWp0QlFVTkVPenM3Y1VOQlJXZENMRXNzUlVGQlR6dEJRVU4wUWl4dFFrRkJZU3hMUVVGTExHZENRVUZzUWp0QlFVTkJMRmRCUVVzc1owSkJRVXdzUjBGQmQwSXNWMEZCVnl4TFFVRkxMR3RDUVVGb1FpeEZRVUZ2UXl4TFFVRndReXhEUVVGNFFqdEJRVU5FT3pzN05rSkJSVkU3UVVGRFVDeFZRVUZKTEV0QlFVc3NUMEZCVkN4RlFVRnJRanRCUVVOb1FqdEJRVU5FTzBGQlEwUXNWMEZCU3l4UFFVRk1MRWRCUVdVc1NVRkJaanM3UVVGRlFTeFZRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNZVUZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRV2hDTzBGQlEwRXNaVUZCVHl4blFrRkJVQ3hEUVVGM1FpeHRRa0ZCZUVJc1JVRkJOa01zUzBGQlN5eHRRa0ZCYkVRN1FVRkRRU3hoUVVGTExHTkJRVXdzUjBGQmMwSXNWMEZCVnl4TFFVRkxMR3RDUVVGb1FpeEZRVUZ2UXl4TFFVRkxMRmxCUVhwRExFTkJRWFJDTzBGQlEwUXNUMEZLUkN4TlFVbFBMRWxCUVVrc1MwRkJTeXhoUVVGVUxFVkJRWGRDTzBGQlF6ZENMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWp0QlFVTkJMR1ZCUVU4c1owSkJRVkFzUTBGQmQwSXNZMEZCZUVJc1JVRkJkME1zUzBGQlN5eGpRVUUzUXp0QlFVTkJMR0ZCUVVzc1kwRkJUQ3hIUVVGelFpeFhRVUZYTEV0QlFVc3NZVUZCYUVJc1JVRkJLMElzUzBGQlN5eFpRVUZ3UXl4RFFVRjBRanRCUVVORUxFOUJTazBzVFVGSlFUdEJRVU5NTEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTEdWQlFVOHNaMEpCUVZBc1EwRkJkMElzVjBGQmVFSXNSVUZCY1VNc1MwRkJTeXhYUVVFeFF6dEJRVU5CTEdGQlFVc3NaVUZCVER0QlFVTkVPenRCUVVWRUxHRkJRVThzWjBKQlFWQXNRMEZCZDBJc1VVRkJlRUlzUlVGQmEwTXNTMEZCU3l4alFVRjJRenRCUVVOQkxGZEJRVXNzUjBGQlRDeEhRVUZYTEU5QlFVOHNTMEZCU3l4blFrRkJXaXhEUVVGWU8wRkJRMFE3T3pzNFFrRkZVenRCUVVOU0xGVkJRVWtzUTBGQlF5eExRVUZMTEU5QlFWWXNSVUZCYlVJN1FVRkRha0k3UVVGRFJEdEJRVU5FTEZkQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVdZN08wRkJSVUVzVlVGQlNTeExRVUZMTEd0Q1FVRlVMRVZCUVRaQ08wRkJRek5DTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzYlVKQlFUTkNMRVZCUVdkRUxFdEJRVXNzYlVKQlFYSkVPMEZCUTBRc1QwRkdSQ3hOUVVWUExFbEJRVWtzUzBGQlN5eGhRVUZVTEVWQlFYZENPMEZCUXpkQ0xHVkJRVThzYlVKQlFWQXNRMEZCTWtJc1kwRkJNMElzUlVGQk1rTXNTMEZCU3l4alFVRm9SRHRCUVVORUxFOUJSazBzVFVGRlFUdEJRVU5NTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzVjBGQk0wSXNSVUZCZDBNc1MwRkJTeXhYUVVFM1F6dEJRVU5FT3p0QlFVVkVMR0ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNVVUZCTTBJc1JVRkJjVU1zUzBGQlN5eGpRVUV4UXp0QlFVTkJMR0ZCUVU4c1RVRkJVQ3hEUVVGakxFdEJRVXNzUjBGQmJrSTdRVUZEUkRzN096aENRVVZUTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEWkN4WFFVRkxMRlZCUVV3c1IwRkJhMElzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1ZVRkJka0lzUjBGQmIwTXNRMEZCZEVRN1FVRkRRU3hYUVVGTExGVkJRVXdzUjBGQmEwSXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVlVGQmRrSXNSMEZCYjBNc1EwRkJkRVE3UVVGRFJEczdPekpDUVVWTkxFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFdDeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5CTEZkQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEU5QlFYWkNMRWRCUVdsRExFTkJRV2hFTzBGQlEwUTdPenMyUWtGRlVTeERMRVZCUVVjc1F5eEZRVUZITzBGQlEySXNWMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRk5CUVhaQ0xFZEJRVzFETEVOQlFYQkVPMEZCUTBFc1YwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExGTkJRWFpDTEVkQlFXMURMRU5CUVhCRU8wRkJRMFE3T3pzeVFrRkZUU3hETEVWQlFVY3NReXhGUVVGSE8wRkJRMWdzVjBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVDBGQmRrSXNSMEZCYVVNc1EwRkJhRVE3UVVGRFFTeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5FT3pzN01FSkJSVXNzUXl4RlFVRkhMRU1zUlVGQlJ6dEJRVU5XTEZkQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEUxQlFYWkNMRWRCUVdkRExFTkJRVGxETzBGQlEwRXNWMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NUVUZCZGtJc1IwRkJaME1zUTBGQk9VTTdRVUZEUkRzN096SkNRVVZOTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEV0N4WFFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTkxGTkJRVTRzUjBGQmEwSXNTMEZCU3l4UFFVRjJRaXhIUVVGcFF5eERRVUZvUkR0QlFVTkJMRmRCUVVzc1QwRkJUQ3hIUVVGbExFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRTlCUVhaQ0xFZEJRV2xETEVOQlFXaEVPMEZCUTBRN096dHZRMEZGWlN4UExFVkJRVk03UVVGRGRrSXNWMEZCU3l4WlFVRk1MRWRCUVc5Q0xFOUJRWEJDTzBGQlEwRXNWMEZCU3l4blFrRkJURHRCUVVORU96czdaME5CUlZjc1R5eEZRVUZUTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEZWtJc1ZVRkJTU3hGUVVGRkxFOUJRVVlzUTBGQlZTeExRVUZMTEZOQlFXWXNTVUZCTkVJc1NVRkJhRU03UVVGRFFTeFZRVUZKTEVWQlFVVXNUMEZCUml4RFFVRlZMRXRCUVVzc1UwRkJaaXhKUVVFMFFpeEpRVUZvUXp0QlFVTkJMRlZCUVVrc1MwRkJTeXhyUWtGQlZDeEZRVUUyUWp0QlFVTXpRaXhuUWtGQlVTeEhRVUZTTEVOQlFWa3NUMEZCV2l4RlFVRnhRaXhYUVVGeVFpeEZRVUZyUXl4cFFrRkJhVUlzUTBGQmFrSXNSMEZCY1VJc1IwRkJja0lzUjBGQk1rSXNRMEZCTTBJc1IwRkJLMElzUzBGQmFrVTdRVUZEUkN4UFFVWkVMRTFCUlU4c1NVRkJTU3hMUVVGTExHdENRVUZVTEVWQlFUWkNPMEZCUTJ4RExHZENRVUZSTEVkQlFWSXNRMEZCV1N4UFFVRmFMRVZCUVhGQ0xGZEJRWEpDTEVWQlFXdERMR1ZCUVdVc1EwRkJaaXhIUVVGdFFpeEhRVUZ1UWl4SFFVRjVRaXhEUVVGNlFpeEhRVUUyUWl4SFFVRXZSRHRCUVVORUxFOUJSazBzVFVGRlFUdEJRVU5NTEdkQ1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFZEJRWEZDTEVOQlFYSkNPMEZCUTBFc1owSkJRVkVzUzBGQlVpeERRVUZqTEVkQlFXUXNSMEZCYjBJc1EwRkJjRUk3UVVGRFJEdEJRVU5HT3pzN2VVTkJSVzlDTzBGQlEyNUNMRlZCUVVrc1MwRkJTeXhyUWtGQlRDeEpRVUV5UWl4TFFVRkxMR2xDUVVGTUxFdEJRVEpDTEVOQlFURkVMRVZCUVRaRU8wRkJRek5FTEdGQlFVc3NUMEZCVER0QlFVTkJMR0ZCUVVzc2EwSkJRVXdzUjBGQk1FSXNTMEZCTVVJN1FVRkRRU3hoUVVGTExFMUJRVXc3UVVGRFJDeFBRVXBFTEUxQlNVODdRVUZEVEN4aFFVRkxMR1ZCUVV3N1FVRkRSRHRCUVVOR096czdiME5CUldVN1FVRkRaQ3hWUVVGSkxFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMRmxCUVV3c1MwRkJjMElzUTBGQmFFUXNSVUZCYlVRN1FVRkRha1FzWVVGQlN5eFBRVUZNTzBGQlEwRXNZVUZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRWEpDTzBGQlEwRXNZVUZCU3l4TlFVRk1PMEZCUTBRc1QwRktSQ3hOUVVsUE8wRkJRMHdzWVVGQlN5eGxRVUZNTzBGQlEwUTdRVUZEUmpzN08zbERRVVZ2UWp0QlFVTnVRaXhYUVVGTExHVkJRVXdzUjBGQmRVSXNTVUZCZGtJN1FVRkRSRHM3TzNGRFFVVm5RanRCUVVObUxGZEJRVXNzWjBKQlFVdzdRVUZEUkRzN08zVkRRVVZyUWp0QlFVTnFRaXhYUVVGTExGbEJRVXc3UVVGRFFTeFZRVUZKTEcxQ1FVRnRRaXhMUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEZsQlFURkRPMEZCUVVFc1ZVRkRTU3h0UWtGQmJVSXNTMEZCU3l4TlFVRk1MRWRCUVdNc1MwRkJTeXhaUVVReFF6dEJRVVZCTEZWQlFVc3NTMEZCU3l4SFFVRk1MRU5CUVZNc1owSkJRVlFzU1VGQk5rSXNTMEZCU3l4dlFrRkJia01zU1VGQk5rUXNTMEZCU3l4SFFVRk1MRU5CUVZNc1owSkJRVlFzU1VGQk5rSXNTMEZCU3l4dlFrRkJia2NzUlVGQk1FZzdRVUZEZUVnc1lVRkJTeXhuUWtGQlRDeERRVUZ6UWl4RFFVRjBRanRCUVVORU8wRkJRMFFzVlVGQlNTeExRVUZMTEZGQlFWUXNSVUZCYlVJN1FVRkRha0lzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBRc1QwRklSQ3hOUVVkUE8wRkJRMHdzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBRN1FVRkRSQ3hYUVVGTExFOUJRVXdzU1VGQlowSXNTMEZCU3l4WlFVRk1MRWxCUVhGQ0xFdEJRVXNzVDBGQlRDeEhRVUZsTEVkQlFYQkRMRU5CUVdoQ08wRkJRMEVzVjBGQlN5eFBRVUZNTEVsQlFXZENMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEU5QlFVd3NSMEZCWlN4SFFVRnlReXhEUVVGb1FqdEJRVU5CTEZWQlFVa3NRMEZCUXl4TlFVRk5MRmRCUVZjc1MwRkJTeXhOUVVGb1FpeERRVUZPTEVOQlFVd3NSVUZCY1VNN1FVRkRia01zWVVGQlN5eFBRVUZNTEVkQlFXVXNVVUZCVVN4TFFVRlNMRU5CUVdNc1MwRkJTeXhQUVVGdVFpeEZRVUUwUWl4RFFVRkRMRXRCUVVzc1RVRkJiRU1zUlVGQk1FTXNTMEZCU3l4TlFVRXZReXhEUVVGbU8wRkJRMFE3UVVGRFJDeFZRVUZKTEVOQlFVTXNUVUZCVFN4WFFVRlhMRXRCUVVzc1RVRkJhRUlzUTBGQlRpeERRVUZNTEVWQlFYRkRPMEZCUTI1RExHRkJRVXNzVDBGQlRDeEhRVUZsTEZGQlFWRXNTMEZCVWl4RFFVRmpMRXRCUVVzc1QwRkJia0lzUlVGQk5FSXNRMEZCUXl4TFFVRkxMRTFCUVd4RExFVkJRVEJETEV0QlFVc3NUVUZCTDBNc1EwRkJaanRCUVVORU8wRkJRMFFzVjBGQlN5eFRRVUZNTEVsQlFXdENMRU5CUVVNc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFRRVUZ5UWl4SlFVRnJReXhMUVVGTExGTkJRWHBFTzBGQlEwRXNWMEZCU3l4VFFVRk1MRWxCUVd0Q0xFTkJRVU1zUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VFFVRnlRaXhKUVVGclF5eExRVUZMTEZOQlFYcEVPMEZCUTBFc1YwRkJTeXhKUVVGSkxGRkJRVkVzUTBGQmFrSXNSVUZCYjBJc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeE5RVUY0UXl4RlFVRm5SQ3hQUVVGb1JDeEZRVUY1UkR0QlFVTjJSQ3haUVVGSkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRmFPMEZCUVVFc1dVRkRTU3hUUVVGVExFdEJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZFWWp0QlFVRkJMRmxCUlVrc1UwRkJVeXhMUVVGTExFOUJRVXdzUTBGQllTeExRVUZpTEVOQlJtSTdRVUZCUVN4WlFVZEpMRlZCUVZVc1MwRkJTeXhUUVVGTUxFbEJRV3RDTEZWQlFWVXNTMEZCU3l4UFFVRk1MRWRCUVdVc1EwRkJReXhEUVVGb1FpeEhRVUZ2UWl4RFFVRTVRaXhEUVVGc1FpeERRVWhrTzBGQlFVRXNXVUZKU1N4VlFVRlZMRXRCUVVzc1UwRkJUQ3hKUVVGclFpeFZRVUZWTEV0QlFVc3NUMEZCVEN4SFFVRmxMRU5CUVVNc1EwRkJhRUlzUjBGQmIwSXNRMEZCT1VJc1EwRkJiRUlzUTBGS1pEdEJRVXRCTEdGQlFVc3NWMEZCVEN4RFFVRnBRaXhMUVVGcVFpeEZRVUYzUWl4UFFVRjRRaXhGUVVGcFF5eFBRVUZxUXp0QlFVTkVPMEZCUTBRc1YwRkJTeXhIUVVGTUxFZEJRVmNzVDBGQlR5eExRVUZMTEdkQ1FVRmFMRU5CUVZnN1FVRkRSRHM3T3pKQ1FVVk5MRWtzUlVGQlRTeExMRVZCUVUwN1FVRkRha0k3UVVGRFFTeFZRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVZRc1NVRkJZeXhaUVVGMFFqdEJRVUZCTEZWQlFXOURPMEZCUTJoRExGVkJRVWtzUTBGQlF5eFRRVUZUTEVOQlFWWXNTVUZCWlN4WlFVUjJRaXhEUVVacFFpeERRVWR0UWpzN1FVRkZjRU03UVVGRFFTeFZRVUZKTEZkQlFWY3NTMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzVjBGQmVFTTdRVUZEUVN4VlFVRkpMRXRCUVVzc1VVRkJUQ3hMUVVGclFpeFJRVUYwUWl4RlFVRm5RenRCUVVNNVFpeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJhRUk3UVVGRFFTeGhRVUZMTEdWQlFVd3NSMEZCZFVJc1NVRkJka0k3UVVGRFJEczdRVUZGUkN4VlFVRkpMRXRCUVVzc1pVRkJWQ3hGUVVFd1FqdEJRVU40UWl4aFFVRkxMR1ZCUVV3c1IwRkJkVUlzUzBGQmRrSTdRVUZEUVN4aFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdRVUZEUVN4aFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwRXNWMEZCU3l4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVORU96czdkME5CUlcxQ0xFc3NSVUZCVHp0QlFVTjZRaXhWUVVGSkxFOUJRVThzVFVGQlRTeEpRVUZxUWp0QlFVTkJMRlZCUVVrc1VVRkJVU3hOUVVGTkxFdEJRV3hDTzBGQlEwRXNWVUZCU1N4VFFVRlRMRWxCUVZRc1NVRkJhVUlzVlVGQlZTeEpRVUV2UWl4RlFVRnhRenRCUVVOdVF5eGhRVUZMTEdsQ1FVRk1MRWRCUVhsQ0xFTkJRWHBDTzBGQlEwRXNZVUZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhGUVVGclFpeExRVUZzUWp0QlFVTkVPMEZCUTBZN096dHRRMEZGWXl4TExFVkJRVTg3UVVGRGNFSXNWVUZCU1N4UFFVRlBMRTFCUVUwc1dVRkJUaXhEUVVGdFFpeEpRVUU1UWp0QlFVTkJMRlZCUVVrc1VVRkJVU3hOUVVGTkxGbEJRVTRzUTBGQmJVSXNTMEZCTDBJN1FVRkRRU3hWUVVGSkxGTkJRVk1zU1VGQlZDeEpRVUZwUWl4VlFVRlZMRWxCUVM5Q0xFVkJRWEZETzBGQlEyNURMR0ZCUVVzc1dVRkJUQ3hIUVVGdlFpeERRVUZ3UWp0QlFVTkJMR0ZCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUlVGQmEwSXNTMEZCYkVJN1FVRkRSRHRCUVVOR096czdaME5CUlZjc1N5eEZRVUZQTzBGQlEycENMRlZCUVVrc1ZVRkJWU3hOUVVGTkxFOUJRWEJDTzBGQlFVRXNWVUZEU1N4VlFVRlZMRTFCUVUwc1QwRkVjRUk3TzBGQlIwRTdRVUZEUVN4VlFVRkhMRXRCUVVzc1UwRkJUQ3hMUVVORExGVkJRVlVzUzBGQlN5eG5Ra0ZCWml4SlFVRnRReXhWUVVGVkxFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhaUVVFelJTeEpRVU5CTEZWQlFWVXNTMEZCU3l4blFrRkJaaXhKUVVGdFF5eFZRVUZWTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eGhRVVl4UlN4RFFVRklMRVZCUlRoR08wRkJRekZHTEdGQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hoUVVGTExFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwRTdRVUZEUkRzN1FVRkZTQ3hWUVVGSkxFdEJRVXNzWVVGQlZDeEZRVUYzUWp0QlFVTjBRanRCUVVOQkxGbEJRVWtzUzBGQlN5eHBRa0ZCVkN4RlFVRTBRanRCUVVNeFFpeHZRa0ZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhQUVVGVUxFVkJRV3RDTEV0QlFVc3NaMEpCUVhaQ0xFTkJRVlk3UVVGRFFTeHZRa0ZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhQUVVGVUxFVkJRV3RDTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eFpRVUV2UXl4RFFVRldPMEZCUTBFc2IwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNUMEZCVkN4RlFVRnJRaXhMUVVGTExHZENRVUYyUWl4RFFVRldPMEZCUTBFc2IwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNUMEZCVkN4RlFVRnJRaXhMUVVGTExHZENRVUZNTEVkQlFYZENMRXRCUVVzc1lVRkJMME1zUTBGQlZqdEJRVU5FTzBGQlEwUTdRVUZEUVN4WlFVRkhMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEdGQlFUbENMRVZCUVRaRE8wRkJRek5ETEdWQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVVNc1ZVRkJWU3hMUVVGTExHZENRVUZtTEVkQlFXdERMRXRCUVVzc1kwRkJlRU1zU1VGQk1FUXNTMEZCU3l4aFFVRTNSVHRCUVVOQkxHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR2RDUVVGbUxFZEJRV3RETEV0QlFVc3NZMEZCZUVNc1NVRkJNRVFzUzBGQlN5eGhRVUUzUlR0QlFVTkVPMEZCUTBZc1QwRmlSQ3hOUVdGUE8wRkJRMHc3UVVGRFFTeFpRVUZITEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExHRkJRVGxDTEVWQlFUWkRPMEZCUXpORExHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR0ZCUVdoQ0xFbEJRV2xETEV0QlFVc3NZVUZCY0VRN1FVRkRRU3hsUVVGTExFMUJRVXdzUjBGQll5eERRVUZETEZWQlFWVXNTMEZCU3l4aFFVRm9RaXhKUVVGcFF5eExRVUZMTEdGQlFYQkVPMEZCUTBRN1FVRkRSanRCUVVOR096czdPRUpCUlZNN1FVRkRVaXhYUVVGTExFOUJRVXc3TzBGQlJVRXNiVUpCUVdFc1MwRkJTeXhuUWtGQmJFSTdRVUZEUVN4dFFrRkJZU3hMUVVGTExHTkJRV3hDT3p0QlFVVkJMRmRCUVVzc1QwRkJUQ3hEUVVGaExHVkJRV0lzUTBGQk5rSXNUMEZCTjBJN1FVRkRRU3hYUVVGTExFbEJRVWtzVVVGQlVTeERRVUZxUWl4RlFVRnZRaXhSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEUxQlFYaERMRVZCUVdkRUxFOUJRV2hFTEVWQlFYbEVPMEZCUTNaRUxHRkJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NSVUZCYlVJc1pVRkJia0lzUTBGQmJVTXNUMEZCYmtNN1FVRkRSRHM3UVVGRlJDeGhRVUZQTEV0QlFVc3NUMEZCV2p0QlFVTkJMR0ZCUVU4c1MwRkJTeXhOUVVGYU8wRkJRMFE3T3pzNFFrRkZVenRCUVVOU0xHRkJRVThzVDBGQlVEdEJRVU5FT3pzN096czdRVUZKU0N4UFFVRlBMRTlCUVZBc1IwRkJhVUlzVVVGQmFrSWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCbEtIUXNiaXh5S1h0bWRXNWpkR2x2YmlCektHOHNkU2w3YVdZb0lXNWJiMTBwZTJsbUtDRjBXMjlkS1h0MllYSWdZVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJsbUtDRjFKaVpoS1hKbGRIVnliaUJoS0c4c0lUQXBPMmxtS0drcGNtVjBkWEp1SUdrb2J5d2hNQ2s3ZG1GeUlHWTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHZLMXdpSjF3aUtUdDBhSEp2ZHlCbUxtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1puMTJZWElnYkQxdVcyOWRQWHRsZUhCdmNuUnpPbnQ5ZlR0MFcyOWRXekJkTG1OaGJHd29iQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLR1VwZTNaaGNpQnVQWFJiYjExYk1WMWJaVjA3Y21WMGRYSnVJSE1vYmo5dU9tVXBmU3hzTEd3dVpYaHdiM0owY3l4bExIUXNiaXh5S1gxeVpYUjFjbTRnYmx0dlhTNWxlSEJ2Y25SemZYWmhjaUJwUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN1ptOXlLSFpoY2lCdlBUQTdienh5TG14bGJtZDBhRHR2S3lzcGN5aHlXMjlkS1R0eVpYUjFjbTRnYzMwcElpd2lMeXBjYm05aWFtVmpkQzFoYzNOcFoyNWNiaWhqS1NCVGFXNWtjbVVnVTI5eWFIVnpYRzVBYkdsalpXNXpaU0JOU1ZSY2Jpb3ZYRzVjYmlkMWMyVWdjM1J5YVdOMEp6dGNiaThxSUdWemJHbHVkQzFrYVhOaFlteGxJRzV2TFhWdWRYTmxaQzEyWVhKeklDb3ZYRzUyWVhJZ1oyVjBUM2R1VUhKdmNHVnlkSGxUZVcxaWIyeHpJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3p0Y2JuWmhjaUJvWVhOUGQyNVFjbTl3WlhKMGVTQTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNTJZWElnY0hKdmNFbHpSVzUxYldWeVlXSnNaU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVN1hHNWNibVoxYm1OMGFXOXVJSFJ2VDJKcVpXTjBLSFpoYkNrZ2UxeHVYSFJwWmlBb2RtRnNJRDA5UFNCdWRXeHNJSHg4SUhaaGJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblQySnFaV04wTG1GemMybG5iaUJqWVc1dWIzUWdZbVVnWTJGc2JHVmtJSGRwZEdnZ2JuVnNiQ0J2Y2lCMWJtUmxabWx1WldRbktUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQlBZbXBsWTNRb2RtRnNLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjMmh2ZFd4a1ZYTmxUbUYwYVhabEtDa2dlMXh1WEhSMGNua2dlMXh1WEhSY2RHbG1JQ2doVDJKcVpXTjBMbUZ6YzJsbmJpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUVSbGRHVmpkQ0JpZFdkbmVTQndjbTl3WlhKMGVTQmxiblZ0WlhKaGRHbHZiaUJ2Y21SbGNpQnBiaUJ2YkdSbGNpQldPQ0IyWlhKemFXOXVjeTVjYmx4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WW5WbmN5NWphSEp2YldsMWJTNXZjbWN2Y0M5Mk9DOXBjM04xWlhNdlpHVjBZV2xzUDJsa1BUUXhNVGhjYmx4MFhIUjJZWElnZEdWemRERWdQU0J1WlhjZ1UzUnlhVzVuS0NkaFltTW5LVHNnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0Ym1WM0xYZHlZWEJ3WlhKelhHNWNkRngwZEdWemRERmJOVjBnUFNBblpHVW5PMXh1WEhSY2RHbG1JQ2hQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsT1lXMWxjeWgwWlhOME1TbGJNRjBnUFQwOUlDYzFKeWtnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEgxY2JseHVYSFJjZEM4dklHaDBkSEJ6T2k4dlluVm5jeTVqYUhKdmJXbDFiUzV2Y21jdmNDOTJPQzlwYzNOMVpYTXZaR1YwWVdsc1AybGtQVE13TlRaY2JseDBYSFIyWVhJZ2RHVnpkRElnUFNCN2ZUdGNibHgwWEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElERXdPeUJwS3lzcElIdGNibHgwWEhSY2RIUmxjM1F5V3lkZkp5QXJJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvYVNsZElEMGdhVHRjYmx4MFhIUjlYRzVjZEZ4MGRtRnlJRzl5WkdWeU1pQTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVU1aGJXVnpLSFJsYzNReUtTNXRZWEFvWm5WdVkzUnBiMjRnS0c0cElIdGNibHgwWEhSY2RISmxkSFZ5YmlCMFpYTjBNbHR1WFR0Y2JseDBYSFI5S1R0Y2JseDBYSFJwWmlBb2IzSmtaWEl5TG1wdmFXNG9KeWNwSUNFOVBTQW5NREV5TXpRMU5qYzRPU2NwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhSOVhHNWNibHgwWEhRdkx5Qm9kSFJ3Y3pvdkwySjFaM011WTJoeWIyMXBkVzB1YjNKbkwzQXZkamd2YVhOemRXVnpMMlJsZEdGcGJEOXBaRDB6TURVMlhHNWNkRngwZG1GeUlIUmxjM1F6SUQwZ2UzMDdYRzVjZEZ4MEoyRmlZMlJsWm1kb2FXcHJiRzF1YjNCeGNuTjBKeTV6Y0d4cGRDZ25KeWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYkdWMGRHVnlLU0I3WEc1Y2RGeDBYSFIwWlhOME0xdHNaWFIwWlhKZElEMGdiR1YwZEdWeU8xeHVYSFJjZEgwcE8xeHVYSFJjZEdsbUlDaFBZbXBsWTNRdWEyVjVjeWhQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0IwWlhOME15a3BMbXB2YVc0b0p5Y3BJQ0U5UFZ4dVhIUmNkRngwWEhRbllXSmpaR1ZtWjJocGFtdHNiVzV2Y0hGeWMzUW5LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJSFJ5ZFdVN1hHNWNkSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVYSFJjZEM4dklGZGxJR1J2YmlkMElHVjRjR1ZqZENCaGJua2diMllnZEdobElHRmliM1psSUhSdklIUm9jbTkzTENCaWRYUWdZbVYwZEdWeUlIUnZJR0psSUhOaFptVXVYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSOVhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYzJodmRXeGtWWE5sVG1GMGFYWmxLQ2tnUHlCUFltcGxZM1F1WVhOemFXZHVJRG9nWm5WdVkzUnBiMjRnS0hSaGNtZGxkQ3dnYzI5MWNtTmxLU0I3WEc1Y2RIWmhjaUJtY205dE8xeHVYSFIyWVhJZ2RHOGdQU0IwYjA5aWFtVmpkQ2gwWVhKblpYUXBPMXh1WEhSMllYSWdjM2x0WW05c2N6dGNibHh1WEhSbWIzSWdLSFpoY2lCeklEMGdNVHNnY3lBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lITXJLeWtnZTF4dVhIUmNkR1p5YjIwZ1BTQlBZbXBsWTNRb1lYSm5kVzFsYm5SelczTmRLVHRjYmx4dVhIUmNkR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQm1jbTl0S1NCN1hHNWNkRngwWEhScFppQW9hR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2htY205dExDQnJaWGtwS1NCN1hHNWNkRngwWEhSY2RIUnZXMnRsZVYwZ1BTQm1jbTl0VzJ0bGVWMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLR2RsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lrZ2UxeHVYSFJjZEZ4MGMzbHRZbTlzY3lBOUlHZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjeWhtY205dEtUdGNibHgwWEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM2x0WW05c2N5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwWEhScFppQW9jSEp2Y0VselJXNTFiV1Z5WVdKc1pTNWpZV3hzS0daeWIyMHNJSE41YldKdmJITmJhVjBwS1NCN1hHNWNkRngwWEhSY2RGeDBkRzliYzNsdFltOXNjMXRwWFYwZ1BTQm1jbTl0VzNONWJXSnZiSE5iYVYxZE8xeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlIUnZPMXh1ZlR0Y2JpSXNJaTh2SUVkbGJtVnlZWFJsWkNCaWVTQkRiMlptWldWVFkzSnBjSFFnTVM0eE1pNHlYRzRvWm5WdVkzUnBiMjRvS1NCN1hHNGdJSFpoY2lCblpYUk9ZVzV2VTJWamIyNWtjeXdnYUhKMGFXMWxMQ0JzYjJGa1ZHbHRaU3dnYlc5a2RXeGxURzloWkZScGJXVXNJRzV2WkdWTWIyRmtWR2x0WlN3Z2RYQlVhVzFsTzF4dVhHNGdJR2xtSUNnb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSEJsY21admNtMWhibU5sSUNFOVBTQnVkV3hzS1NBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwTzF4dUlDQWdJSDA3WEc0Z0lIMGdaV3h6WlNCcFppQW9LSFI1Y0dWdlppQndjbTlqWlhOeklDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSEJ5YjJObGMzTWdJVDA5SUc1MWJHd3BJQ1ltSUhCeWIyTmxjM011YUhKMGFXMWxLU0I3WEc0Z0lDQWdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9aMlYwVG1GdWIxTmxZMjl1WkhNb0tTQXRJRzV2WkdWTWIyRmtWR2x0WlNrZ0x5QXhaVFk3WEc0Z0lDQWdmVHRjYmlBZ0lDQm9jblJwYldVZ1BTQndjbTlqWlhOekxtaHlkR2x0WlR0Y2JpQWdJQ0JuWlhST1lXNXZVMlZqYjI1a2N5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHaHlPMXh1SUNBZ0lDQWdhSElnUFNCb2NuUnBiV1VvS1R0Y2JpQWdJQ0FnSUhKbGRIVnliaUJvY2xzd1hTQXFJREZsT1NBcklHaHlXekZkTzF4dUlDQWdJSDA3WEc0Z0lDQWdiVzlrZFd4bFRHOWhaRlJwYldVZ1BTQm5aWFJPWVc1dlUyVmpiMjVrY3lncE8xeHVJQ0FnSUhWd1ZHbHRaU0E5SUhCeWIyTmxjM011ZFhCMGFXMWxLQ2tnS2lBeFpUazdYRzRnSUNBZ2JtOWtaVXh2WVdSVWFXMWxJRDBnYlc5a2RXeGxURzloWkZScGJXVWdMU0IxY0ZScGJXVTdYRzRnSUgwZ1pXeHpaU0JwWmlBb1JHRjBaUzV1YjNjcElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVSaGRHVXVibTkzS0NrZ0xTQnNiMkZrVkdsdFpUdGNiaUFnSUNCOU8xeHVJQ0FnSUd4dllXUlVhVzFsSUQwZ1JHRjBaUzV1YjNjb0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BJQzBnYkc5aFpGUnBiV1U3WEc0Z0lDQWdmVHRjYmlBZ0lDQnNiMkZrVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dUlDQjlYRzVjYm4wcExtTmhiR3dvZEdocGN5azdYRzVjYmk4dkl5QnpiM1Z5WTJWTllYQndhVzVuVlZKTVBYQmxjbVp2Y20xaGJtTmxMVzV2ZHk1cWN5NXRZWEJjYmlJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzRpTENKMllYSWdibTkzSUQwZ2NtVnhkV2x5WlNnbmNHVnlabTl5YldGdVkyVXRibTkzSnlsY2JpQWdMQ0J5YjI5MElEMGdkSGx3Wlc5bUlIZHBibVJ2ZHlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCbmJHOWlZV3dnT2lCM2FXNWtiM2RjYmlBZ0xDQjJaVzVrYjNKeklEMGdXeWR0YjNvbkxDQW5kMlZpYTJsMEoxMWNiaUFnTENCemRXWm1hWGdnUFNBblFXNXBiV0YwYVc5dVJuSmhiV1VuWEc0Z0lDd2djbUZtSUQwZ2NtOXZkRnNuY21WeGRXVnpkQ2NnS3lCemRXWm1hWGhkWEc0Z0lDd2dZMkZtSUQwZ2NtOXZkRnNuWTJGdVkyVnNKeUFySUhOMVptWnBlRjBnZkh3Z2NtOXZkRnNuWTJGdVkyVnNVbVZ4ZFdWemRDY2dLeUJ6ZFdabWFYaGRYRzVjYm1admNpaDJZWElnYVNBOUlEQTdJQ0Z5WVdZZ0ppWWdhU0E4SUhabGJtUnZjbk11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnY21GbUlEMGdjbTl2ZEZ0MlpXNWtiM0p6VzJsZElDc2dKMUpsY1hWbGMzUW5JQ3NnYzNWbVptbDRYVnh1SUNCallXWWdQU0J5YjI5MFczWmxibVJ2Y25OYmFWMGdLeUFuUTJGdVkyVnNKeUFySUhOMVptWnBlRjFjYmlBZ0lDQWdJSHg4SUhKdmIzUmJkbVZ1Wkc5eWMxdHBYU0FySUNkRFlXNWpaV3hTWlhGMVpYTjBKeUFySUhOMVptWnBlRjFjYm4xY2JseHVMeThnVTI5dFpTQjJaWEp6YVc5dWN5QnZaaUJHUmlCb1lYWmxJSEpCUmlCaWRYUWdibTkwSUdOQlJseHVhV1lvSVhKaFppQjhmQ0FoWTJGbUtTQjdYRzRnSUhaaGNpQnNZWE4wSUQwZ01GeHVJQ0FnSUN3Z2FXUWdQU0F3WEc0Z0lDQWdMQ0J4ZFdWMVpTQTlJRnRkWEc0Z0lDQWdMQ0JtY21GdFpVUjFjbUYwYVc5dUlEMGdNVEF3TUNBdklEWXdYRzVjYmlBZ2NtRm1JRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0JwWmloeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lIWmhjaUJmYm05M0lEMGdibTkzS0NsY2JpQWdJQ0FnSUNBZ0xDQnVaWGgwSUQwZ1RXRjBhQzV0WVhnb01Dd2dabkpoYldWRWRYSmhkR2x2YmlBdElDaGZibTkzSUMwZ2JHRnpkQ2twWEc0Z0lDQWdJQ0JzWVhOMElEMGdibVY0ZENBcklGOXViM2RjYmlBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqY0NBOUlIRjFaWFZsTG5Oc2FXTmxLREFwWEc0Z0lDQWdJQ0FnSUM4dklFTnNaV0Z5SUhGMVpYVmxJR2hsY21VZ2RHOGdjSEpsZG1WdWRGeHVJQ0FnSUNBZ0lDQXZMeUJqWVd4c1ltRmphM01nWm5KdmJTQmhjSEJsYm1ScGJtY2diR2x6ZEdWdVpYSnpYRzRnSUNBZ0lDQWdJQzh2SUhSdklIUm9aU0JqZFhKeVpXNTBJR1p5WVcxbEozTWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ2NYVmxkV1V1YkdWdVozUm9JRDBnTUZ4dUlDQWdJQ0FnSUNCbWIzSW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1kzQXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaWdoWTNCYmFWMHVZMkZ1WTJWc2JHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbmw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR053VzJsZExtTmhiR3hpWVdOcktHeGhjM1FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUhzZ2RHaHliM2NnWlNCOUxDQXdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlN3Z1RXRjBhQzV5YjNWdVpDaHVaWGgwS1NsY2JpQWdJQ0I5WEc0Z0lDQWdjWFZsZFdVdWNIVnphQ2g3WEc0Z0lDQWdJQ0JvWVc1a2JHVTZJQ3NyYVdRc1hHNGdJQ0FnSUNCallXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc1hHNGdJQ0FnSUNCallXNWpaV3hzWldRNklHWmhiSE5sWEc0Z0lDQWdmU2xjYmlBZ0lDQnlaWFIxY200Z2FXUmNiaUFnZlZ4dVhHNGdJR05oWmlBOUlHWjFibU4wYVc5dUtHaGhibVJzWlNrZ2UxeHVJQ0FnSUdadmNpaDJZWElnYVNBOUlEQTdJR2tnUENCeGRXVjFaUzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWW9jWFZsZFdWYmFWMHVhR0Z1Wkd4bElEMDlQU0JvWVc1a2JHVXBJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVmJhVjB1WTJGdVkyVnNiR1ZrSUQwZ2RISjFaVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1p1S1NCN1hHNGdJQzh2SUZkeVlYQWdhVzRnWVNCdVpYY2dablZ1WTNScGIyNGdkRzhnY0hKbGRtVnVkRnh1SUNBdkx5QmdZMkZ1WTJWc1lDQndiM1JsYm5ScFlXeHNlU0JpWldsdVp5QmhjM05wWjI1bFpGeHVJQ0F2THlCMGJ5QjBhR1VnYm1GMGFYWmxJSEpCUmlCbWRXNWpkR2x2Ymx4dUlDQnlaWFIxY200Z2NtRm1MbU5oYkd3b2NtOXZkQ3dnWm00cFhHNTlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5NWpZVzVqWld3Z1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ1kyRm1MbUZ3Y0d4NUtISnZiM1FzSUdGeVozVnRaVzUwY3lsY2JuMWNibTF2WkhWc1pTNWxlSEJ2Y25SekxuQnZiSGxtYVd4c0lEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lISnZiM1F1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElEMGdjbUZtWEc0Z0lISnZiM1F1WTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVZ1BTQmpZV1pjYm4xY2JpSXNJaThxS2x4dUtpQlFZWEpoYkd4aGVDNXFjMXh1S2lCQVlYVjBhRzl5SUUxaGRIUm9aWGNnVjJGblpYSm1hV1ZzWkNBdElFQjNZV2RsY21acFpXeGtMQ0JTWlc3RHFTQlNiM1JvSUMwZ2JXRnBiRUJ5Wlc1bGNtOTBhQzV2Y21kY2Jpb2dRR1JsYzJOeWFYQjBhVzl1SUVOeVpXRjBaWE1nWVNCd1lYSmhiR3hoZUNCbFptWmxZM1FnWW1WMGQyVmxiaUJoYmlCaGNuSmhlU0J2WmlCc1lYbGxjbk1zWEc0cUlDQWdJQ0FnSUNBZ0lDQWdJQ0JrY21sMmFXNW5JSFJvWlNCdGIzUnBiMjRnWm5KdmJTQjBhR1VnWjNseWIzTmpiM0JsSUc5MWRIQjFkQ0J2WmlCaElITnRZWEowWkdWMmFXTmxMbHh1S2lBZ0lDQWdJQ0FnSUNBZ0lDQWdTV1lnYm04Z1ozbHliM05qYjNCbElHbHpJR0YyWVdsc1lXSnNaU3dnZEdobElHTjFjbk52Y2lCd2IzTnBkR2x2YmlCcGN5QjFjMlZrTGx4dUtpOWNibHh1WTI5dWMzUWdjbkZCYmtaeUlEMGdjbVZ4ZFdseVpTZ25jbUZtSnlsY2JtTnZibk4wSUc5aWFtVmpkRUZ6YzJsbmJpQTlJSEpsY1hWcGNtVW9KMjlpYW1WamRDMWhjM05wWjI0bktWeHVYRzVqYjI1emRDQm9aV3h3WlhKeklEMGdlMXh1SUNCd2NtOXdaWEowZVVOaFkyaGxPaUI3ZlN4Y2JpQWdkbVZ1Wkc5eWN6b2dXMjUxYkd3c0lGc25MWGRsWW10cGRDMG5MQ2QzWldKcmFYUW5YU3dnV3ljdGJXOTZMU2NzSjAxdmVpZGRMQ0JiSnkxdkxTY3NKMDhuWFN3Z1d5Y3RiWE10Snl3bmJYTW5YVjBzWEc1Y2JpQWdZMnhoYlhBb2RtRnNkV1VzSUcxcGJpd2diV0Y0S1NCN1hHNGdJQ0FnY21WMGRYSnVJRzFwYmlBOElHMWhlRnh1SUNBZ0lDQWdQeUFvZG1Gc2RXVWdQQ0J0YVc0Z1B5QnRhVzRnT2lCMllXeDFaU0ErSUcxaGVDQS9JRzFoZUNBNklIWmhiSFZsS1Z4dUlDQWdJQ0FnT2lBb2RtRnNkV1VnUENCdFlYZ2dQeUJ0WVhnZ09pQjJZV3gxWlNBK0lHMXBiaUEvSUcxcGJpQTZJSFpoYkhWbEtWeHVJQ0I5TEZ4dVhHNGdJR1JoZEdFb1pXeGxiV1Z1ZEN3Z2JtRnRaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm9aV3h3WlhKekxtUmxjMlZ5YVdGc2FYcGxLR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMU2NyYm1GdFpTa3BYRzRnSUgwc1hHNWNiaUFnWkdWelpYSnBZV3hwZW1Vb2RtRnNkV1VwSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1VnUFQwOUlDZDBjblZsSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiSFZsSUQwOVBTQW5abUZzYzJVbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbElEMDlQU0FuYm5Wc2JDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doYVhOT1lVNG9jR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTa3BJQ1ltSUdselJtbHVhWFJsS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpWeHVJQ0FnSUgxY2JpQWdmU3hjYmx4dUlDQmpZVzFsYkVOaGMyVW9kbUZzZFdVcElIdGNiaUFnSUNCeVpYUjFjbTRnZG1Gc2RXVXVjbVZ3YkdGalpTZ3ZMU3NvTGlrL0wyY3NJQ2h0WVhSamFDd2dZMmhoY21GamRHVnlLU0E5UGlCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWTJoaGNtRmpkR1Z5SUQ4Z1kyaGhjbUZqZEdWeUxuUnZWWEJ3WlhKRFlYTmxLQ2tnT2lBbkoxeHVJQ0FnSUgwcFhHNGdJSDBzWEc1Y2JpQWdZV05qWld4bGNtRjBaU2hsYkdWdFpXNTBLU0I3WEc0Z0lDQWdhR1ZzY0dWeWN5NWpjM01vWld4bGJXVnVkQ3dnSjNSeVlXNXpabTl5YlNjc0lDZDBjbUZ1YzJ4aGRHVXpaQ2d3TERBc01Da2djbTkwWVhSbEtEQXVNREF3TVdSbFp5a25LVnh1SUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2QwY21GdWMyWnZjbTB0YzNSNWJHVW5MQ0FuY0hKbGMyVnlkbVV0TTJRbktWeHVJQ0FnSUdobGJIQmxjbk11WTNOektHVnNaVzFsYm5Rc0lDZGlZV05yWm1GalpTMTJhWE5wWW1sc2FYUjVKeXdnSjJocFpHUmxiaWNwWEc0Z0lIMHNYRzVjYmlBZ2RISmhibk5tYjNKdFUzVndjRzl5ZENoMllXeDFaU2tnZTF4dUlDQWdJR3hsZENCbGJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5a3NYRzRnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVVM1Z3Y0c5eWRDQTlJR1poYkhObExGeHVJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWWmhiSFZsSUQwZ2JuVnNiQ3hjYmlBZ0lDQWdJQ0FnWm1WaGRIVnlaVk4xY0hCdmNuUWdQU0JtWVd4elpTeGNiaUFnSUNBZ0lDQWdZM056VUhKdmNHVnlkSGtnUFNCdWRXeHNMRnh1SUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ2JuVnNiRnh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdhR1ZzY0dWeWN5NTJaVzVrYjNKekxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lnS0dobGJIQmxjbk11ZG1WdVpHOXljMXRwWFNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQmpjM05RY205d1pYSjBlU0E5SUdobGJIQmxjbk11ZG1WdVpHOXljMXRwWFZzd1hTQXJJQ2QwY21GdWMyWnZjbTBuWEc0Z0lDQWdJQ0FnSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxuWmxibVJ2Y25OYmFWMWJNVjBnS3lBblZISmhibk5tYjNKdEoxeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kzTnpVSEp2Y0dWeWRIa2dQU0FuZEhKaGJuTm1iM0p0SjF4dUlDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdKM1J5WVc1elptOXliU2RjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNobGJHVnRaVzUwTG5OMGVXeGxXMnB6VUhKdmNHVnlkSGxkSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNHVnlkSGxUZFhCd2IzSjBJRDBnZEhKMVpWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnpkMmwwWTJnb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdKekpFSnpwY2JpQWdJQ0FnSUNBZ1ptVmhkSFZ5WlZOMWNIQnZjblFnUFNCd2NtOXdaWEowZVZOMWNIQnZjblJjYmlBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lHTmhjMlVnSnpORUp6cGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQmxjblI1VTNWd2NHOXlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHeGxkQ0JpYjJSNUlEMGdaRzlqZFcxbGJuUXVZbTlrZVNCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaWIyUjVKeWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR1J2WTNWdFpXNTBSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SUGRtVnlabXh2ZHlBOUlHUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1emRIbHNaUzV2ZG1WeVpteHZkeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhWE5EY21WaGRHVmtRbTlrZVNBOUlHWmhiSE5sWEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvSVdSdlkzVnRaVzUwTG1KdlpIa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHpRM0psWVhSbFpFSnZaSGtnUFNCMGNuVmxYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzNSNWJHVXViM1psY21ac2IzY2dQU0FuYUdsa1pHVnVKMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHSnZaSGtwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmliMlI1TG5OMGVXeGxMbTkyWlhKbWJHOTNJRDBnSjJocFpHUmxiaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZaSGt1YzNSNWJHVXVZbUZqYTJkeWIzVnVaQ0E5SUNjblhHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ1ltOWtlUzVoY0hCbGJtUkRhR2xzWkNobGJHVnRaVzUwS1Z4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1ZiYW5OUWNtOXdaWEowZVYwZ1BTQW5kSEpoYm5Oc1lYUmxNMlFvTVhCNExERndlQ3d4Y0hncEoxeHVJQ0FnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVWbUZzZFdVZ1BTQjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNobGJHVnRaVzUwS1M1blpYUlFjbTl3WlhKMGVWWmhiSFZsS0dOemMxQnliM0JsY25SNUtWeHVJQ0FnSUNBZ0lDQWdJR1psWVhSMWNtVlRkWEJ3YjNKMElEMGdjSEp2Y0dWeWRIbFdZV3gxWlNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhCeWIzQmxjblI1Vm1Gc2RXVXViR1Z1WjNSb0lENGdNQ0FtSmlCd2NtOXdaWEowZVZaaGJIVmxJQ0U5UFNBbmJtOXVaU2RjYmlBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzNSNWJHVXViM1psY21ac2IzY2dQU0JrYjJOMWJXVnVkRTkyWlhKbWJHOTNYRzRnSUNBZ0lDQWdJQ0FnWW05a2VTNXlaVzF2ZG1WRGFHbHNaQ2hsYkdWdFpXNTBLVnh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ0JwYzBOeVpXRjBaV1JDYjJSNUlDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ltOWtlUzV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9KM04wZVd4bEp5bGNiaUFnSUNBZ0lDQWdJQ0FnSUdKdlpIa3VjR0Z5Wlc1MFRtOWtaUzV5WlcxdmRtVkRhR2xzWkNoaWIyUjVLVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1ptVmhkSFZ5WlZOMWNIQnZjblJjYmlBZ2ZTeGNibHh1SUNCamMzTW9aV3hsYldWdWRDd2djSEp2Y0dWeWRIa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ2JHVjBJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG5CeWIzQmxjblI1UTJGamFHVmJjSEp2Y0dWeWRIbGRYRzRnSUNBZ2FXWWdLQ0ZxYzFCeWIzQmxjblI1S1NCN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNQ3dnYkNBOUlHaGxiSEJsY25NdWRtVnVaRzl5Y3k1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dobGJIQmxjbk11ZG1WdVpHOXljMXRwWFNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG1OaGJXVnNRMkZ6WlNob1pXeHdaWEp6TG5abGJtUnZjbk5iYVYxYk1WMGdLeUFuTFNjZ0t5QndjbTl3WlhKMGVTbGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ2NISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvWld4bGJXVnVkQzV6ZEhsc1pWdHFjMUJ5YjNCbGNuUjVYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnYUdWc2NHVnljeTV3Y205d1pYSjBlVU5oWTJobFczQnliM0JsY25SNVhTQTlJR3B6VUhKdmNHVnlkSGxjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHVnNaVzFsYm5RdWMzUjViR1ZiYW5OUWNtOXdaWEowZVYwZ1BTQjJZV3gxWlZ4dUlDQjlYRzVjYm4xY2JseHVZMjl1YzNRZ1RVRkhTVU5mVGxWTlFrVlNJRDBnTXpBc1hHNGdJQ0FnSUNCRVJVWkJWVXhVVXlBOUlIdGNiaUFnSUNBZ0lDQWdjbVZzWVhScGRtVkpibkIxZERvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUdOc2FYQlNaV3hoZEdsMlpVbHVjSFYwT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYVc1d2RYUkZiR1Z0Wlc1ME9pQnVkV3hzTEZ4dUlDQWdJQ0FnSUNCb2IzWmxjazl1YkhrNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdsdmJsUm9jbVZ6YUc5c1pEb2dNVEF3TEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdsdmJrUmxiR0Y1T2lBMU1EQXNYRzRnSUNBZ0lDQWdJSE4xY0hCdmNuUkVaV3hoZVRvZ05UQXdMRnh1SUNBZ0lDQWdJQ0JqWVd4cFluSmhkR1ZZT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnWTJGc2FXSnlZWFJsV1RvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnYVc1MlpYSjBXRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdhVzUyWlhKMFdUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2JHbHRhWFJZT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYkdsdGFYUlpPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdjMk5oYkdGeVdEb2dNVEF1TUN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR0Z5V1RvZ01UQXVNQ3hjYmlBZ0lDQWdJQ0FnWm5KcFkzUnBiMjVZT2lBd0xqRXNYRzRnSUNBZ0lDQWdJR1p5YVdOMGFXOXVXVG9nTUM0eExGeHVJQ0FnSUNBZ0lDQnZjbWxuYVc1WU9pQXdMalVzWEc0Z0lDQWdJQ0FnSUc5eWFXZHBibGs2SURBdU5TeGNiaUFnSUNBZ0lDQWdjRzlwYm5SbGNrVjJaVzUwY3pvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhCeVpXTnBjMmx2YmpvZ01TeGNiaUFnSUNBZ0lDQWdiMjVTWldGa2VUb2diblZzYkN4Y2JpQWdJQ0FnSUNBZ2MyVnNaV04wYjNJNklHNTFiR3hjYmlBZ0lDQWdJSDFjYmx4dVkyeGhjM01nVUdGeVlXeHNZWGdnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBMQ0J2Y0hScGIyNXpLU0I3WEc1Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RZ1BTQmxiR1Z0Wlc1MFhHNWNiaUFnSUNCamIyNXpkQ0JrWVhSaElEMGdlMXh1SUNBZ0lDQWdZMkZzYVdKeVlYUmxXRG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjJOaGJHbGljbUYwWlMxNEp5a3NYRzRnSUNBZ0lDQmpZV3hwWW5KaGRHVlpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWTJGc2FXSnlZWFJsTFhrbktTeGNiaUFnSUNBZ0lHbHVkbVZ5ZEZnNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHBiblpsY25RdGVDY3BMRnh1SUNBZ0lDQWdhVzUyWlhKMFdUb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMmx1ZG1WeWRDMTVKeWtzWEc0Z0lDQWdJQ0JzYVcxcGRGZzZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RzYVcxcGRDMTRKeWtzWEc0Z0lDQWdJQ0JzYVcxcGRGazZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RzYVcxcGRDMTVKeWtzWEc0Z0lDQWdJQ0J6WTJGc1lYSllPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYzJOaGJHRnlMWGduS1N4Y2JpQWdJQ0FnSUhOallXeGhjbGs2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkelkyRnNZWEl0ZVNjcExGeHVJQ0FnSUNBZ1puSnBZM1JwYjI1WU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5abkpwWTNScGIyNHRlQ2NwTEZ4dUlDQWdJQ0FnWm5KcFkzUnBiMjVaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblpuSnBZM1JwYjI0dGVTY3BMRnh1SUNBZ0lDQWdiM0pwWjJsdVdEb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMjl5YVdkcGJpMTRKeWtzWEc0Z0lDQWdJQ0J2Y21sbmFXNVpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYjNKcFoybHVMWGtuS1N4Y2JpQWdJQ0FnSUhCdmFXNTBaWEpGZG1WdWRITTZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2R3YjJsdWRHVnlMV1YyWlc1MGN5Y3BMRnh1SUNBZ0lDQWdjSEpsWTJsemFXOXVPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuY0hKbFkybHphVzl1Snlrc1hHNGdJQ0FnSUNCeVpXeGhkR2wyWlVsdWNIVjBPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuY21Wc1lYUnBkbVV0YVc1d2RYUW5LU3hjYmlBZ0lDQWdJR05zYVhCU1pXeGhkR2wyWlVsdWNIVjBPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWTJ4cGNDMXlaV3hoZEdsMlpTMXBibkIxZENjcExGeHVJQ0FnSUNBZ2FHOTJaWEpQYm14NU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5hRzkyWlhJdGIyNXNlU2NwTEZ4dUlDQWdJQ0FnYVc1d2RYUkZiR1Z0Wlc1ME9pQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkcGJuQjFkQzFsYkdWdFpXNTBKeWtwTEZ4dUlDQWdJQ0FnYzJWc1pXTjBiM0k2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkelpXeGxZM1J2Y2ljcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR1JoZEdFcElIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaFcydGxlVjBnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ1pHVnNaWFJsSUdSaGRHRmJhMlY1WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzlpYW1WamRFRnpjMmxuYmloMGFHbHpMQ0JFUlVaQlZVeFVVeXdnWkdGMFlTd2diM0IwYVc5dWN5bGNibHh1SUNBZ0lHbG1LQ0YwYUdsekxtbHVjSFYwUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXBibkIxZEVWc1pXMWxiblFnUFNCMGFHbHpMbVZzWlcxbGJuUmNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZia1pzWVdjZ1BTQjBjblZsWEc0Z0lDQWdkR2hwY3k1bGJtRmliR1ZrSUQwZ1ptRnNjMlZjYmlBZ0lDQjBhR2x6TG1SbGNIUm9jMWdnUFNCYlhWeHVJQ0FnSUhSb2FYTXVaR1Z3ZEdoeldTQTlJRnRkWEc0Z0lDQWdkR2hwY3k1eVlXWWdQU0J1ZFd4c1hHNWNiaUFnSUNCMGFHbHpMbUp2ZFc1a2N5QTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ1BTQXdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJRDBnTUZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZkcFpIUm9JRDBnTUZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0E5SURCY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xnZ1BTQXdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXQ0E5SURCY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmtnUFNBd1hHNWNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V0NBOUlEQmNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnTUZ4dUlDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ01GeHVYRzRnSUNBZ2RHaHBjeTV0YjNScGIyNVlJRDBnTUZ4dUlDQWdJSFJvYVhNdWJXOTBhVzl1V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxZSUQwZ01GeHVJQ0FnSUhSb2FYTXVkbVZzYjJOcGRIbFpJRDBnTUZ4dVhHNGdJQ0FnZEdocGN5NXZiazF2ZFhObFRXOTJaU0E5SUhSb2FYTXViMjVOYjNWelpVMXZkbVV1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpQTlJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtSbGRtbGpaVTF2ZEdsdmJpQTlJSFJvYVhNdWIyNUVaWFpwWTJWTmIzUnBiMjR1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNVBjbWxsYm5SaGRHbHZibFJwYldWeUlEMGdkR2hwY3k1dmJrOXlhV1Z1ZEdGMGFXOXVWR2x0WlhJdVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVOYjNScGIyNVVhVzFsY2lBOUlIUm9hWE11YjI1TmIzUnBiMjVVYVcxbGNpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtOaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCMGFHbHpMbTl1UTJGc2FXSnlZWFJwYjI1VWFXMWxjaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrRnVhVzFoZEdsdmJrWnlZVzFsSUQwZ2RHaHBjeTV2YmtGdWFXMWhkR2x2YmtaeVlXMWxMbUpwYm1Rb2RHaHBjeWxjYmlBZ0lDQjBhR2x6TG05dVYybHVaRzkzVW1WemFYcGxJRDBnZEdocGN5NXZibGRwYm1SdmQxSmxjMmw2WlM1aWFXNWtLSFJvYVhNcFhHNWNiaUFnSUNCMGFHbHpMbmRwYm1SdmQxZHBaSFJvSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNTR1ZwWjJoMElEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWQybHVaRzkzUTJWdWRHVnlXQ0E5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xrZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTllJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVkMmx1Wkc5M1VtRmthWFZ6V1NBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG5CdmNuUnlZV2wwSUQwZ1ptRnNjMlZjYmlBZ0lDQjBhR2x6TG1SbGMydDBiM0FnUFNBaGJtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXRZWFJqYUNndktHbFFhRzl1Wlh4cFVHOWtmR2xRWVdSOFFXNWtjbTlwWkh4Q2JHRmphMEpsY25KNWZFSkNNVEI4Ylc5aWFYeDBZV0pzWlhSOGIzQmxjbUVnYldsdWFYeHVaWGgxY3lBM0tTOXBLVnh1SUNBZ0lIUm9hWE11Ylc5MGFXOXVVM1Z3Y0c5eWRDQTlJQ0VoZDJsdVpHOTNMa1JsZG1salpVMXZkR2x2YmtWMlpXNTBJQ1ltSUNGMGFHbHpMbVJsYzJ0MGIzQmNiaUFnSUNCMGFHbHpMbTl5YVdWdWRHRjBhVzl1VTNWd2NHOXlkQ0E5SUNFaGQybHVaRzkzTGtSbGRtbGpaVTl5YVdWdWRHRjBhVzl1UlhabGJuUWdKaVlnSVhSb2FYTXVaR1Z6YTNSdmNGeHVJQ0FnSUhSb2FYTXViM0pwWlc1MFlYUnBiMjVUZEdGMGRYTWdQU0F3WEc0Z0lDQWdkR2hwY3k1dGIzUnBiMjVUZEdGMGRYTWdQU0F3WEc1Y2JpQWdJQ0IwYUdsekxtbHVhWFJwWVd4cGMyVW9LVnh1SUNCOVhHNWNiaUFnYVc1cGRHbGhiR2x6WlNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUWdQU0JvWld4d1pYSnpMblJ5WVc1elptOXliVk4xY0hCdmNuUW9KekpFSnlsY2JpQWdJQ0FnSUhSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBJRDBnYUdWc2NHVnljeTUwY21GdWMyWnZjbTFUZFhCd2IzSjBLQ2N6UkNjcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1EyOXVabWxuZFhKbElFTnZiblJsZUhRZ1UzUjViR1Z6WEc0Z0lDQWdhV1lnS0hSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0JvWld4d1pYSnpMbUZqWTJWc1pYSmhkR1VvZEdocGN5NWxiR1Z0Wlc1MEtWeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnpkSGxzWlNBOUlIZHBibVJ2ZHk1blpYUkRiMjF3ZFhSbFpGTjBlV3hsS0hSb2FYTXVaV3hsYldWdWRDbGNiaUFnSUNCcFppQW9jM1I1YkdVdVoyVjBVSEp2Y0dWeWRIbFdZV3gxWlNnbmNHOXphWFJwYjI0bktTQTlQVDBnSjNOMFlYUnBZeWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZHlaV3hoZEdsMlpTZGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlFiMmx1ZEdWeUlHVjJaVzUwYzF4dUlDQWdJR2xtS0NGMGFHbHpMbkJ2YVc1MFpYSkZkbVZ1ZEhNcElIdGNiaUFnSUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuWEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnVTJWMGRYQmNiaUFnSUNCMGFHbHpMblZ3WkdGMFpVeGhlV1Z5Y3lncFhHNGdJQ0FnZEdocGN5NTFjR1JoZEdWRWFXMWxibk5wYjI1ektDbGNiaUFnSUNCMGFHbHpMbVZ1WVdKc1pTZ3BYRzRnSUNBZ2RHaHBjeTV4ZFdWMVpVTmhiR2xpY21GMGFXOXVLSFJvYVhNdVkyRnNhV0p5WVhScGIyNUVaV3hoZVNsY2JpQWdmVnh1WEc0Z0lHUnZVbVZoWkhsRFlXeHNZbUZqYXlncElIdGNiaUFnSUNCcFppaDBhR2x6TG05dVVtVmhaSGtwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVTWldGa2VTZ3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbFRHRjVaWEp6S0NrZ2UxeHVJQ0FnSUdsbUtIUm9hWE11YzJWc1pXTjBiM0lwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR0Y1WlhKeklEMGdkR2hwY3k1bGJHVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvZEdocGN5NXpaV3hsWTNSdmNpbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY25NZ1BTQjBhR2x6TG1Wc1pXMWxiblF1WTJocGJHUnlaVzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaWdoZEdocGN5NXNZWGxsY25NdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCamIyNXpiMnhsTG5kaGNtNG9KMUJoY21Gc2JHRjRTbE02SUZsdmRYSWdjMk5sYm1VZ1pHOWxjeUJ1YjNRZ2FHRjJaU0JoYm5rZ2JHRjVaWEp6TGljcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NWtaWEIwYUhOWUlEMGdXMTFjYmlBZ0lDQjBhR2x6TG1SbGNIUm9jMWtnUFNCYlhWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FXNWtaWGdnUFNBd095QnBibVJsZUNBOElIUm9hWE11YkdGNVpYSnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdiR1YwSUd4aGVXVnlJRDBnZEdocGN5NXNZWGxsY25OYmFXNWtaWGhkWEc1Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG5SeVlXNXpabTl5YlRORVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ0lDQm9aV3h3WlhKekxtRmpZMlZzWlhKaGRHVW9iR0Y1WlhJcFhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHeGhlV1Z5TG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnYVc1a1pYZ2dQeUFuWVdKemIyeDFkR1VuSURvZ0ozSmxiR0YwYVhabEoxeHVJQ0FnSUNBZ2JHRjVaWEl1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2RpYkc5amF5ZGNiaUFnSUNBZ0lHeGhlV1Z5TG5OMGVXeGxMbXhsWm5RZ1BTQXdYRzRnSUNBZ0lDQnNZWGxsY2k1emRIbHNaUzUwYjNBZ1BTQXdYRzVjYmlBZ0lDQWdJR3hsZENCa1pYQjBhQ0E5SUdobGJIQmxjbk11WkdGMFlTaHNZWGxsY2l3Z0oyUmxjSFJvSnlrZ2ZId2dNRnh1SUNBZ0lDQWdkR2hwY3k1a1pYQjBhSE5ZTG5CMWMyZ29hR1ZzY0dWeWN5NWtZWFJoS0d4aGVXVnlMQ0FuWkdWd2RHZ3RlQ2NwSUh4OElHUmxjSFJvS1Z4dUlDQWdJQ0FnZEdocGN5NWtaWEIwYUhOWkxuQjFjMmdvYUdWc2NHVnljeTVrWVhSaEtHeGhlV1Z5TENBblpHVndkR2d0ZVNjcElIeDhJR1JsY0hSb0tWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVScGJXVnVjMmx2Ym5Nb0tTQjdYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFhhV1IwYUNBOUlIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb1hHNGdJQ0FnZEdocGN5NTNhVzVrYjNkSVpXbG5hSFFnUFNCM2FXNWtiM2N1YVc1dVpYSklaV2xuYUhSY2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdnUFNCMGFHbHpMbmRwYm1SdmQxZHBaSFJvSUNvZ2RHaHBjeTV2Y21sbmFXNVlYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZERaVzUwWlhKWklEMGdkR2hwY3k1M2FXNWtiM2RJWldsbmFIUWdLaUIwYUdsekxtOXlhV2RwYmxsY2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDFKaFpHbDFjMWdnUFNCTllYUm9MbTFoZUNoMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xnc0lIUm9hWE11ZDJsdVpHOTNWMmxrZEdnZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3BYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWklEMGdUV0YwYUM1dFlYZ29kR2hwY3k1M2FXNWtiM2REWlc1MFpYSlpMQ0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ0F0SUhSb2FYTXVkMmx1Wkc5M1EyVnVkR1Z5V1NsY2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVKdmRXNWtjeWdwSUh0Y2JpQWdJQ0IwYUdsekxtSnZkVzVrY3lBOUlIUm9hWE11YVc1d2RYUkZiR1Z0Wlc1MExtZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkQ2dwWEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZSUQwZ2RHaHBjeTVpYjNWdVpITXViR1ZtZEZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZCdmMybDBhVzl1V1NBOUlIUm9hWE11WW05MWJtUnpMblJ2Y0Z4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZkcFpIUm9JRDBnZEdocGN5NWliM1Z1WkhNdWQybGtkR2hjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUWdQU0IwYUdsekxtSnZkVzVrY3k1b1pXbG5hSFJjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSllJRDBnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dnS2lCMGFHbHpMbTl5YVdkcGJsaGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWklEMGdkR2hwY3k1bGJHVnRaVzUwU0dWcFoyaDBJQ29nZEdocGN5NXZjbWxuYVc1WlhHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFVtRnVaMlZZSUQwZ1RXRjBhQzV0WVhnb2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdDd2dkR2hwY3k1bGJHVnRaVzUwVjJsa2RHZ2dMU0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZS1Z4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXU0E5SUUxaGRHZ3ViV0Y0S0hSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xrc0lIUm9hWE11Wld4bGJXVnVkRWhsYVdkb2RDQXRJSFJvYVhNdVpXeGxiV1Z1ZEVObGJuUmxjbGtwWEc0Z0lIMWNibHh1SUNCeGRXVjFaVU5oYkdsaWNtRjBhVzl1S0dSbGJHRjVLU0I3WEc0Z0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYVcxbGNpbGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0J6WlhSVWFXMWxiM1YwS0hSb2FYTXViMjVEWVd4cFluSmhkR2x2YmxScGJXVnlMQ0JrWld4aGVTbGNiaUFnZlZ4dVhHNGdJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWxibUZpYkdWa0tTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1bGJtRmliR1ZrSUQwZ2RISjFaVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0pwWlc1MFlYUnBiMjVUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RrWlhacFkyVnZjbWxsYm5SaGRHbHZiaWNzSUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaWxjYmlBZ0lDQWdJSFJvYVhNdVpHVjBaV04wYVc5dVZHbHRaWElnUFNCelpYUlVhVzFsYjNWMEtIUm9hWE11YjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5TENCMGFHbHpMbk4xY0hCdmNuUkVaV3hoZVNsY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXViVzkwYVc5dVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjNKMGNtRnBkQ0E5SUdaaGJITmxYRzRnSUNBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblpHVjJhV05sYlc5MGFXOXVKeXdnZEdocGN5NXZia1JsZG1salpVMXZkR2x2YmlsY2JpQWdJQ0FnSUhSb2FYTXVaR1YwWldOMGFXOXVWR2x0WlhJZ1BTQnpaWFJVYVcxbGIzVjBLSFJvYVhNdWIyNU5iM1JwYjI1VWFXMWxjaXdnZEdocGN5NXpkWEJ3YjNKMFJHVnNZWGtwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1WUlEMGdNRnh1SUNBZ0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJsa2dQU0F3WEc0Z0lDQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R0YjNWelpXMXZkbVVuTENCMGFHbHpMbTl1VFc5MWMyVk5iM1psS1Z4dUlDQWdJQ0FnZEdocGN5NWtiMUpsWVdSNVEyRnNiR0poWTJzb0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R5WlhOcGVtVW5MQ0IwYUdsekxtOXVWMmx1Wkc5M1VtVnphWHBsS1Z4dUlDQWdJSFJvYVhNdWNtRm1JRDBnY25GQmJrWnlLSFJvYVhNdWIyNUJibWx0WVhScGIyNUdjbUZ0WlNsY2JpQWdmVnh1WEc0Z0lHUnBjMkZpYkdVb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtVnVZV0pzWldRcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1WdVlXSnNaV1FnUFNCbVlXeHpaVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0pwWlc1MFlYUnBiMjVUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduWkdWMmFXTmxiM0pwWlc1MFlYUnBiMjRuTENCMGFHbHpMbTl1UkdWMmFXTmxUM0pwWlc1MFlYUnBiMjRwWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtMXZkR2x2YmxOMWNIQnZjblFwSUh0Y2JpQWdJQ0FnSUhkcGJtUnZkeTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0Nka1pYWnBZMlZ0YjNScGIyNG5MQ0IwYUdsekxtOXVSR1YyYVdObFRXOTBhVzl1S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWdGIzWmxKeXdnZEdocGN5NXZiazF2ZFhObFRXOTJaU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25jbVZ6YVhwbEp5d2dkR2hwY3k1dmJsZHBibVJ2ZDFKbGMybDZaU2xjYmlBZ0lDQnljVUZ1Um5JdVkyRnVZMlZzS0hSb2FYTXVjbUZtS1Z4dUlDQjlYRzVjYmlBZ1kyRnNhV0p5WVhSbEtIZ3NJSGtwSUh0Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMFpWZ2dQU0I0SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtTmhiR2xpY21GMFpWZ2dPaUI0WEc0Z0lDQWdkR2hwY3k1allXeHBZbkpoZEdWWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1allXeHBZbkpoZEdWWklEb2dlVnh1SUNCOVhHNWNiaUFnYVc1MlpYSjBLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbWx1ZG1WeWRGZ2dQU0I0SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtbHVkbVZ5ZEZnZ09pQjRYRzRnSUNBZ2RHaHBjeTVwYm5abGNuUlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXBiblpsY25SWklEb2dlVnh1SUNCOVhHNWNiaUFnWm5KcFkzUnBiMjRvZUN3Z2VTa2dlMXh1SUNBZ0lIUm9hWE11Wm5KcFkzUnBiMjVZSUQwZ2VDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVtY21samRHbHZibGdnT2lCNFhHNGdJQ0FnZEdocGN5NW1jbWxqZEdsdmJsa2dQU0I1SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtWnlhV04wYVc5dVdTQTZJSGxjYmlBZ2ZWeHVYRzRnSUhOallXeGhjaWg0TENCNUtTQjdYRzRnSUNBZ2RHaHBjeTV6WTJGc1lYSllJRDBnZUNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXpZMkZzWVhKWUlEb2dlRnh1SUNBZ0lIUm9hWE11YzJOaGJHRnlXU0E5SUhrZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXVjMk5oYkdGeVdTQTZJSGxjYmlBZ2ZWeHVYRzRnSUd4cGJXbDBLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbXhwYldsMFdDQTlJSGdnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdWJHbHRhWFJZSURvZ2VGeHVJQ0FnSUhSb2FYTXViR2x0YVhSWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1c2FXMXBkRmtnT2lCNVhHNGdJSDFjYmx4dUlDQnZjbWxuYVc0b2VDd2dlU2tnZTF4dUlDQWdJSFJvYVhNdWIzSnBaMmx1V0NBOUlIZ2dQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUm9hWE11YjNKcFoybHVXQ0E2SUhoY2JpQWdJQ0IwYUdsekxtOXlhV2RwYmxrZ1BTQjVJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG05eWFXZHBibGtnT2lCNVhHNGdJSDFjYmx4dUlDQnpaWFJKYm5CMWRFVnNaVzFsYm5Rb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSRmJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZEZ4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUkdsdFpXNXphVzl1Y3lncFhHNGdJSDFjYmx4dUlDQnpaWFJRYjNOcGRHbHZiaWhsYkdWdFpXNTBMQ0I0TENCNUtTQjdYRzRnSUNBZ2VDQTlJSGd1ZEc5R2FYaGxaQ2gwYUdsekxuQnlaV05wYzJsdmJpa2dLeUFuY0hnblhHNGdJQ0FnZVNBOUlIa3VkRzlHYVhobFpDaDBhR2x6TG5CeVpXTnBjMmx2YmlrZ0t5QW5jSGduWEc0Z0lDQWdhV1lnS0hSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0JvWld4d1pYSnpMbU56Y3lobGJHVnRaVzUwTENBbmRISmhibk5tYjNKdEp5d2dKM1J5WVc1emJHRjBaVE5rS0NjZ0t5QjRJQ3NnSnl3bklDc2dlU0FySUNjc01Da25LVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RcElIdGNiaUFnSUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2QwY21GdWMyWnZjbTBuTENBbmRISmhibk5zWVhSbEtDY2dLeUI0SUNzZ0p5d25JQ3NnZVNBcklDY3BKeWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVzWldaMElEMGdlRnh1SUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1MGIzQWdQU0I1WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG05eWFXVnVkR0YwYVc5dVUzVndjRzl5ZENBbUppQjBhR2x6TG05eWFXVnVkR0YwYVc5dVUzUmhkSFZ6SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnBjMkZpYkdVb0tWeHVJQ0FnSUNBZ2RHaHBjeTV2Y21sbGJuUmhkR2x2YmxOMWNIQnZjblFnUFNCbVlXeHpaVnh1SUNBZ0lDQWdkR2hwY3k1bGJtRmliR1VvS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG1SdlVtVmhaSGxEWVd4c1ltRmpheWdwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1TmIzUnBiMjVVYVcxbGNpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXRiM1JwYjI1VGRYQndiM0owSUNZbUlIUm9hWE11Ylc5MGFXOXVVM1JoZEhWeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVUZFhCd2IzSjBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIUm9hWE11Wlc1aFlteGxLQ2xjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVrYjFKbFlXUjVRMkZzYkdKaFkyc29LVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1UTJGc2FXSnlZWFJwYjI1VWFXMWxjaWdwSUh0Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVSbXhoWnlBOUlIUnlkV1ZjYmlBZ2ZWeHVYRzRnSUc5dVYybHVaRzkzVW1WemFYcGxLQ2tnZTF4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUkdsdFpXNXphVzl1Y3lncFhHNGdJSDFjYmx4dUlDQnZia0Z1YVcxaGRHbHZia1p5WVcxbEtDa2dlMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxRbTkxYm1SektDbGNiaUFnSUNCc1pYUWdZMkZzYVdKeVlYUmxaRWx1Y0hWMFdDQTlJSFJvYVhNdWFXNXdkWFJZSUMwZ2RHaHBjeTVqWVd4cFluSmhkR2x2Ymxnc1hHNGdJQ0FnSUNBZ0lHTmhiR2xpY21GMFpXUkpibkIxZEZrZ1BTQjBhR2x6TG1sdWNIVjBXU0F0SUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVaWEc0Z0lDQWdhV1lnS0NoTllYUm9MbUZpY3loallXeHBZbkpoZEdWa1NXNXdkWFJZS1NBK0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFISmxjMmh2YkdRcElIeDhJQ2hOWVhSb0xtRmljeWhqWVd4cFluSmhkR1ZrU1c1d2RYUlpLU0ErSUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYUhKbGMyaHZiR1FwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkYxWlhWbFEyRnNhV0p5WVhScGIyNG9NQ2xjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHOXlkSEpoYVhRcElIdGNiaUFnSUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0E5SUhSb2FYTXVZMkZzYVdKeVlYUmxXQ0EvSUdOaGJHbGljbUYwWldSSmJuQjFkRmtnT2lCMGFHbHpMbWx1Y0hWMFdWeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnZEdocGN5NWpZV3hwWW5KaGRHVlpJRDhnWTJGc2FXSnlZWFJsWkVsdWNIVjBXQ0E2SUhSb2FYTXVhVzV3ZFhSWVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXOTBhVzl1V0NBOUlIUm9hWE11WTJGc2FXSnlZWFJsV0NBL0lHTmhiR2xpY21GMFpXUkpibkIxZEZnZ09pQjBhR2x6TG1sdWNIVjBXRnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2RHaHBjeTVqWVd4cFluSmhkR1ZaSUQ4Z1kyRnNhV0p5WVhSbFpFbHVjSFYwV1NBNklIUm9hWE11YVc1d2RYUlpYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQXFQU0IwYUdsekxtVnNaVzFsYm5SWGFXUjBhQ0FxSUNoMGFHbHpMbk5qWVd4aGNsZ2dMeUF4TURBcFhHNGdJQ0FnZEdocGN5NXRiM1JwYjI1WklDbzlJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0FxSUNoMGFHbHpMbk5qWVd4aGNsa2dMeUF4TURBcFhHNGdJQ0FnYVdZZ0tDRnBjMDVoVGlod1lYSnpaVVpzYjJGMEtIUm9hWE11YkdsdGFYUllLU2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQTlJR2hsYkhCbGNuTXVZMnhoYlhBb2RHaHBjeTV0YjNScGIyNVlMQ0F0ZEdocGN5NXNhVzFwZEZnc0lIUm9hWE11YkdsdGFYUllLVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9JV2x6VG1GT0tIQmhjbk5sUm14dllYUW9kR2hwY3k1c2FXMXBkRmtwS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnYUdWc2NHVnljeTVqYkdGdGNDaDBhR2x6TG0xdmRHbHZibGtzSUMxMGFHbHpMbXhwYldsMFdTd2dkR2hwY3k1c2FXMXBkRmtwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxZSUNzOUlDaDBhR2x6TG0xdmRHbHZibGdnTFNCMGFHbHpMblpsYkc5amFYUjVXQ2tnS2lCMGFHbHpMbVp5YVdOMGFXOXVXRnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxaSUNzOUlDaDBhR2x6TG0xdmRHbHZibGtnTFNCMGFHbHpMblpsYkc5amFYUjVXU2tnS2lCMGFHbHpMbVp5YVdOMGFXOXVXVnh1SUNBZ0lHWnZjaUFvYkdWMElHbHVaR1Y0SUQwZ01Ec2dhVzVrWlhnZ1BDQjBhR2x6TG14aGVXVnljeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BJSHRjYmlBZ0lDQWdJR3hsZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhKelcybHVaR1Y0WFN4Y2JpQWdJQ0FnSUNBZ0lDQmtaWEIwYUZnZ1BTQjBhR2x6TG1SbGNIUm9jMWhiYVc1a1pYaGRMRnh1SUNBZ0lDQWdJQ0FnSUdSbGNIUm9XU0E5SUhSb2FYTXVaR1Z3ZEdoeldWdHBibVJsZUYwc1hHNGdJQ0FnSUNBZ0lDQWdlRTltWm5ObGRDQTlJSFJvYVhNdWRtVnNiMk5wZEhsWUlDb2dLR1JsY0hSb1dDQXFJQ2gwYUdsekxtbHVkbVZ5ZEZnZ1B5QXRNU0E2SURFcEtTeGNiaUFnSUNBZ0lDQWdJQ0I1VDJabWMyVjBJRDBnZEdocGN5NTJaV3h2WTJsMGVWa2dLaUFvWkdWd2RHaFpJQ29nS0hSb2FYTXVhVzUyWlhKMFdTQS9JQzB4SURvZ01Ta3BYRzRnSUNBZ0lDQjBhR2x6TG5ObGRGQnZjMmwwYVc5dUtHeGhlV1Z5TENCNFQyWm1jMlYwTENCNVQyWm1jMlYwS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5KaFppQTlJSEp4UVc1R2NpaDBhR2x6TG05dVFXNXBiV0YwYVc5dVJuSmhiV1VwWEc0Z0lIMWNibHh1SUNCeWIzUmhkR1VvWW1WMFlTd2daMkZ0YldFcGUxeHVJQ0FnSUM4dklFVjRkSEpoWTNRZ1VtOTBZWFJwYjI1Y2JpQWdJQ0JzWlhRZ2VDQTlJQ2hpWlhSaElIeDhJREFwSUM4Z1RVRkhTVU5mVGxWTlFrVlNMQ0F2THlBZ0xUa3dJRG82SURrd1hHNGdJQ0FnSUNBZ0lIa2dQU0FvWjJGdGJXRWdmSHdnTUNrZ0x5Qk5RVWRKUTE5T1ZVMUNSVklnTHk4Z0xURTRNQ0E2T2lBeE9EQmNibHh1SUNBZ0lDOHZJRVJsZEdWamRDQlBjbWxsYm5SaGRHbHZiaUJEYUdGdVoyVmNiaUFnSUNCc1pYUWdjRzl5ZEhKaGFYUWdQU0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ0ErSUhSb2FYTXVkMmx1Wkc5M1YybGtkR2hjYmlBZ0lDQnBaaUFvZEdocGN5NXdiM0owY21GcGRDQWhQVDBnY0c5eWRISmhhWFFwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjRzl5ZEhKaGFYUWdQU0J3YjNKMGNtRnBkRnh1SUNBZ0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJrWnNZV2NnUFNCMGNuVmxYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVkyRnNhV0p5WVhScGIyNUdiR0ZuS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1Um14aFp5QTlJR1poYkhObFhHNGdJQ0FnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V0NBOUlIaGNiaUFnSUNBZ0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1WklEMGdlVnh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnZUZ4dUlDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ2VWeHVJQ0I5WEc1Y2JpQWdiMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaWhsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JpWlhSaElEMGdaWFpsYm5RdVltVjBZVnh1SUNBZ0lHeGxkQ0JuWVcxdFlTQTlJR1YyWlc1MExtZGhiVzFoWEc0Z0lDQWdhV1lnS0dKbGRHRWdJVDA5SUc1MWJHd2dKaVlnWjJGdGJXRWdJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWIzSnBaVzUwWVhScGIyNVRkR0YwZFhNZ1BTQXhYRzRnSUNBZ0lDQjBhR2x6TG5KdmRHRjBaU2hpWlhSaExDQm5ZVzF0WVNsY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCdmJrUmxkbWxqWlUxdmRHbHZiaWhsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JpWlhSaElEMGdaWFpsYm5RdWNtOTBZWFJwYjI1U1lYUmxMbUpsZEdGY2JpQWdJQ0JzWlhRZ1oyRnRiV0VnUFNCbGRtVnVkQzV5YjNSaGRHbHZibEpoZEdVdVoyRnRiV0ZjYmlBZ0lDQnBaaUFvWW1WMFlTQWhQVDBnYm5Wc2JDQW1KaUJuWVcxdFlTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVUZEdGMGRYTWdQU0F4WEc0Z0lDQWdJQ0IwYUdsekxuSnZkR0YwWlNoaVpYUmhMQ0JuWVcxdFlTbGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZiazF2ZFhObFRXOTJaU2hsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JqYkdsbGJuUllJRDBnWlhabGJuUXVZMnhwWlc1MFdDeGNiaUFnSUNBZ0lDQWdZMnhwWlc1MFdTQTlJR1YyWlc1MExtTnNhV1Z1ZEZsY2JseHVJQ0FnSUM4dklISmxjMlYwSUdsdWNIVjBJSFJ2SUdObGJuUmxjaUJwWmlCb2IzWmxjazl1YkhrZ2FYTWdjMlYwSUdGdVpDQjNaU2R5WlNCdWIzUWdhRzkyWlhKcGJtY2dkR2hsSUdWc1pXMWxiblJjYmlBZ0lDQnBaaWgwYUdsekxtaHZkbVZ5VDI1c2VTQW1KbHh1SUNBZ0lDQWdLQ2hqYkdsbGJuUllJRHdnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUlIeDhJR05zYVdWdWRGZ2dQaUIwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ0t5QjBhR2x6TG1Wc1pXMWxiblJYYVdSMGFDa2dmSHhjYmlBZ0lDQWdJQ2hqYkdsbGJuUlpJRHdnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WklIeDhJR05zYVdWdWRGa2dQaUIwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrZ0t5QjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUXBLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFdDQTlJREJjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEZrZ1BTQXdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNtVnNZWFJwZG1WSmJuQjFkQ2tnZTF4dUlDQWdJQ0FnTHk4Z1EyeHBjQ0J0YjNWelpTQmpiMjl5WkdsdVlYUmxjeUJwYm5OcFpHVWdaV3hsYldWdWRDQmliM1Z1WkhNdVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1amJHbHdVbVZzWVhScGRtVkpibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQmpiR2xsYm5SWUlEMGdUV0YwYUM1dFlYZ29ZMnhwWlc1MFdDd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZS1Z4dUlDQWdJQ0FnSUNCamJHbGxiblJZSUQwZ1RXRjBhQzV0YVc0b1kyeHBaVzUwV0N3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlJQ3NnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dwWEc0Z0lDQWdJQ0FnSUdOc2FXVnVkRmtnUFNCTllYUm9MbTFoZUNoamJHbGxiblJaTENCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa3BYRzRnSUNBZ0lDQWdJR05zYVdWdWRGa2dQU0JOWVhSb0xtMXBiaWhqYkdsbGJuUlpMQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrZ0t5QjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZMeUJEWVd4amRXeGhkR1VnYVc1d2RYUWdjbVZzWVhScGRtVWdkRzhnZEdobElHVnNaVzFsYm5RdVhHNGdJQ0FnSUNCcFppaDBhR2x6TG1Wc1pXMWxiblJTWVc1blpWZ2dKaVlnZEdocGN5NWxiR1Z0Wlc1MFVtRnVaMlZaS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnS0dOc2FXVnVkRmdnTFNCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dMU0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZS1NBdklIUm9hWE11Wld4bGJXVnVkRkpoYm1kbFdGeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBXU0E5SUNoamJHbGxiblJaSUMwZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJQzBnZEdocGN5NWxiR1Z0Wlc1MFEyVnVkR1Z5V1NrZ0x5QjBhR2x6TG1Wc1pXMWxiblJTWVc1blpWbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnTHk4Z1EyRnNZM1ZzWVhSbElHbHVjSFYwSUhKbGJHRjBhWFpsSUhSdklIUm9aU0IzYVc1a2IzY3VYRzRnSUNBZ0lDQnBaaWgwYUdsekxuZHBibVJ2ZDFKaFpHbDFjMWdnSmlZZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ0tHTnNhV1Z1ZEZnZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3BJQzhnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5ZWEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdLR05zYVdWdWRGa2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGtwSUM4Z2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWlhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1pHVnpkSEp2ZVNncElIdGNiaUFnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1WEc0Z0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYVcxbGNpbGNiaUFnSUNCamJHVmhjbFJwYldWdmRYUW9kR2hwY3k1a1pYUmxZM1JwYjI1VWFXMWxjaWxjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjNOMGVXeGxKeWxjYmlBZ0lDQm1iM0lnS0d4bGRDQnBibVJsZUNBOUlEQTdJR2x1WkdWNElEd2dkR2hwY3k1c1lYbGxjbk11YkdWdVozUm9PeUJwYm1SbGVDc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5YzF0cGJtUmxlRjB1Y21WdGIzWmxRWFIwY21saWRYUmxLQ2R6ZEhsc1pTY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1pHVnNaWFJsSUhSb2FYTXVaV3hsYldWdWRGeHVJQ0FnSUdSbGJHVjBaU0IwYUdsekxteGhlV1Z5YzF4dUlDQjlYRzVjYmlBZ2RtVnljMmx2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnSnpNdU1TNHdKMXh1SUNCOVhHNWNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCUVlYSmhiR3hoZUZ4dUlsMTlcbiIsIi8qIVxyXG4gKiBTY3JvbGxNYWdpYyB2Mi4wLjcgKDIwMTktMDUtMDcpXHJcbiAqIFRoZSBqYXZhc2NyaXB0IGxpYnJhcnkgZm9yIG1hZ2ljYWwgc2Nyb2xsIGludGVyYWN0aW9ucy5cclxuICogKGMpIDIwMTkgSmFuIFBhZXBrZSAoQGphbnBhZXBrZSlcclxuICogUHJvamVjdCBXZWJzaXRlOiBodHRwOi8vc2Nyb2xsbWFnaWMuaW9cclxuICogXHJcbiAqIEB2ZXJzaW9uIDIuMC43XHJcbiAqIEBsaWNlbnNlIER1YWwgbGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2UgYW5kIEdQTC5cclxuICogQGF1dGhvciBKYW4gUGFlcGtlIC0gZS1tYWlsQGphbnBhZXBrZS5kZVxyXG4gKlxyXG4gKiBAZmlsZSBTY3JvbGxNYWdpYyBtYWluIGxpYnJhcnkuXHJcbiAqL1xyXG4vKipcclxuICogQG5hbWVzcGFjZSBTY3JvbGxNYWdpY1xyXG4gKi9cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsXHJcblx0XHRyb290LlNjcm9sbE1hZ2ljID0gZmFjdG9yeSgpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHZhciBTY3JvbGxNYWdpYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdF91dGlsLmxvZygyLCAnKENPTVBBVElCSUxJVFkgTk9USUNFKSAtPiBBcyBvZiBTY3JvbGxNYWdpYyAyLjAuMCB5b3UgbmVlZCB0byB1c2UgXFwnbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKVxcJyB0byBjcmVhdGUgYSBuZXcgY29udHJvbGxlciBpbnN0YW5jZS4gVXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXFwnIHRvIGluc3RhbmNlIGEgc2NlbmUuJyk7XHJcblx0fTtcclxuXHJcblx0U2Nyb2xsTWFnaWMudmVyc2lvbiA9IFwiMi4wLjdcIjtcclxuXHJcblx0Ly8gVE9ETzogdGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGNocm9tZSdzIHNjcm9sbCBqaXR0ZXIgYnVnXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblx0Ly8gZ2xvYmFsIGNvbnN0XHJcblx0dmFyIFBJTl9TUEFDRVJfQVRUUklCVVRFID0gXCJkYXRhLXNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIjtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG1haW4gY2xhc3MgdGhhdCBpcyBuZWVkZWQgb25jZSBwZXIgc2Nyb2xsIGNvbnRhaW5lci5cclxuXHQgKlxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBiYXNpYyBpbml0aWFsaXphdGlvblxyXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHQgKlxyXG5cdCAqIC8vIHBhc3Npbmcgb3B0aW9uc1xyXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe2NvbnRhaW5lcjogXCIjbXlDb250YWluZXJcIiwgbG9nbGV2ZWw6IDN9KTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBvbmUgb3IgbW9yZSBvcHRpb25zIGZvciB0aGUgY29udHJvbGxlci5cclxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMuY29udGFpbmVyPXdpbmRvd10gLSBBIHNlbGVjdG9yLCBET00gb2JqZWN0IHRoYXQgcmVmZXJlbmNlcyB0aGUgbWFpbiBjb250YWluZXIgZm9yIHNjcm9sbGluZy5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZlcnRpY2FsPXRydWVdIC0gU2V0cyB0aGUgc2Nyb2xsIG1vZGUgdG8gdmVydGljYWwgKGB0cnVlYCkgb3IgaG9yaXpvbnRhbCAoYGZhbHNlYCkgc2Nyb2xsaW5nLlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnM9e31dIC0gVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHBhc3NlZCB0byBldmVyeSBTY2VuZSB0aGF0IGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHVzaW5nIHRoZSBhZGRTY2VuZSBtZXRob2QuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIFNjZW5lIG9wdGlvbnMgc2VlIHtAbGluayBTY3JvbGxNYWdpYy5TY2VuZX0uXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAwYCA9PiBzaWxlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgMWAgPT4gZXJyb3JzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWw9MTAwXSAtIFNvbWUgY2hhbmdlcyBkb24ndCBjYWxsIGV2ZW50cyBieSBkZWZhdWx0LCBsaWtlIGNoYW5naW5nIHRoZSBjb250YWluZXIgc2l6ZSBvciBtb3ZpbmcgYSBzY2VuZSB0cmlnZ2VyIGVsZW1lbnQuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUaGlzIGludGVydmFsIHBvbGxzIHRoZXNlIHBhcmFtZXRlcnMgdG8gZmlyZSB0aGUgbmVjZXNzYXJ5IGV2ZW50cy4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IElmIHlvdSBkb24ndCB1c2UgY3VzdG9tIGNvbnRhaW5lcnMsIHRyaWdnZXIgZWxlbWVudHMgb3IgaGF2ZSBzdGF0aWMgbGF5b3V0cywgd2hlcmUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgdHJpZ2dlciBlbGVtZW50cyBkb24ndCBjaGFuZ2UsIHlvdSBjYW4gc2V0IHRoaXMgdG8gMCBkaXNhYmxlIGludGVydmFsIGNoZWNraW5nIGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlLlxyXG5cdCAqXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogc2V0dGluZ3NcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cdFx0dmFyXHJcblx0XHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5Db250cm9sbGVyJyxcclxuXHRcdFx0U0NST0xMX0RJUkVDVElPTl9GT1JXQVJEID0gJ0ZPUldBUkQnLFxyXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0UgPSAnUkVWRVJTRScsXHJcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEID0gJ1BBVVNFRCcsXHJcblx0XHRcdERFRkFVTFRfT1BUSU9OUyA9IENPTlRST0xMRVJfT1BUSU9OUy5kZWZhdWx0cztcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSB2YXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdHZhclxyXG5cdFx0XHRDb250cm9sbGVyID0gdGhpcyxcclxuXHRcdFx0X29wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyksXHJcblx0XHRcdF9zY2VuZU9iamVjdHMgPSBbXSxcclxuXHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2UsIC8vIGNhbiBiZSBib29sZWFuICh0cnVlID0+IGFsbCBzY2VuZXMpIG9yIGFuIGFycmF5IG9mIHNjZW5lcyB0byBiZSB1cGRhdGVkXHJcblx0XHRcdF9zY3JvbGxQb3MgPSAwLFxyXG5cdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQsXHJcblx0XHRcdF9pc0RvY3VtZW50ID0gdHJ1ZSxcclxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IDAsXHJcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcclxuXHRcdFx0X3VwZGF0ZVRpbWVvdXQsXHJcblx0XHRcdF9yZWZyZXNoVGltZW91dDtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSBmdW5jdGlvbnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW50ZXJuYWwgY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucykge1xyXG5cdFx0XHRcdGlmICghREVGQVVMVF9PUFRJT05TLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFVua25vd24gb3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIgPSBfdXRpbC5nZXQuZWxlbWVudHMoX29wdGlvbnMuY29udGFpbmVyKVswXTtcclxuXHRcdFx0Ly8gY2hlY2sgU2Nyb2xsQ29udGFpbmVyXHJcblx0XHRcdGlmICghX29wdGlvbnMuY29udGFpbmVyKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY3JlYXRpbmcgb2JqZWN0IFwiICsgTkFNRVNQQUNFICsgXCI6IE5vIHZhbGlkIHNjcm9sbCBjb250YWluZXIgc3VwcGxpZWRcIik7XHJcblx0XHRcdFx0dGhyb3cgTkFNRVNQQUNFICsgXCIgaW5pdCBmYWlsZWQuXCI7IC8vIGNhbmNlbFxyXG5cdFx0XHR9XHJcblx0XHRcdF9pc0RvY3VtZW50ID0gX29wdGlvbnMuY29udGFpbmVyID09PSB3aW5kb3cgfHwgX29wdGlvbnMuY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5IHx8ICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKF9vcHRpb25zLmNvbnRhaW5lcik7XHJcblx0XHRcdC8vIG5vcm1hbGl6ZSB0byB3aW5kb3dcclxuXHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gd2luZG93O1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHVwZGF0ZSBjb250YWluZXIgc2l6ZSBpbW1lZGlhdGVseVxyXG5cdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XHJcblx0XHRcdC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcclxuXHJcblx0XHRcdHZhciByaSA9IHBhcnNlSW50KF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCwgMTApO1xyXG5cdFx0XHRfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPSBfdXRpbC50eXBlLk51bWJlcihyaSkgPyByaSA6IERFRkFVTFRfT1BUSU9OUy5yZWZyZXNoSW50ZXJ2YWw7XHJcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xyXG5cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgbmV3IFwiICsgTkFNRVNQQUNFICsgXCIgY29udHJvbGxlciAodlwiICsgU2Nyb2xsTWFnaWMudmVyc2lvbiArIFwiKVwiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2hlZHVsZSB0aGUgbmV4dCBleGVjdXRpb24gb2YgdGhlIHJlZnJlc2ggZnVuY3Rpb25cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBzY2hlZHVsZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPiAwKSB7XHJcblx0XHRcdFx0X3JlZnJlc2hUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVmcmVzaCwgX29wdGlvbnMucmVmcmVzaEludGVydmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlZmF1bHQgZnVuY3Rpb24gdG8gZ2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFBvcyhuZXdGdW5jdGlvbilgXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0U2Nyb2xsUG9zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuc2Nyb2xsVG9wKF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQuc2Nyb2xsTGVmdChfb3B0aW9ucy5jb250YWluZXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlld3BvcnQgU2l6ZSAod2lkdGggdm9yIGhvcml6b250YWwsIGhlaWdodCBmb3IgdmVydGljYWwpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuaGVpZ2h0KF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQud2lkdGgoX29wdGlvbnMuY29udGFpbmVyKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIHNldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxUbyhuZXdGdW5jdGlvbilgXHJcblx0XHQgKiBNYWtlIGF2YWlsYWJsZSBwdWJsaWNseSBmb3IgcGlubmVkIG1vdXNld2hlZWwgd29ya2Fyb3VuZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBzZXRTY3JvbGxQb3MgPSB0aGlzLl9zZXRTY3JvbGxQb3MgPSBmdW5jdGlvbiAocG9zKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy52ZXJ0aWNhbCkge1xyXG5cdFx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKF91dGlsLmdldC5zY3JvbGxMZWZ0KCksIHBvcyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5zY3JvbGxUb3AgPSBwb3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHBvcywgX3V0aWwuZ2V0LnNjcm9sbFRvcCgpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnNjcm9sbExlZnQgPSBwb3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlIHVwZGF0ZXMgaW4gY3ljbGVzIGluc3RlYWQgb2Ygb24gc2Nyb2xsIChwZXJmb3JtYW5jZSlcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVTY2VuZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfZW5hYmxlZCAmJiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpIHtcclxuXHRcdFx0XHQvLyBkZXRlcm1pbmUgc2NlbmVzIHRvIHVwZGF0ZVxyXG5cdFx0XHRcdHZhciBzY2VuZXNUb1VwZGF0ZSA9IF91dGlsLnR5cGUuQXJyYXkoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKSA/IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA6IF9zY2VuZU9iamVjdHMuc2xpY2UoMCk7XHJcblx0XHRcdFx0Ly8gcmVzZXQgc2NlbmVzXHJcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2U7XHJcblx0XHRcdFx0dmFyIG9sZFNjcm9sbFBvcyA9IF9zY3JvbGxQb3M7XHJcblx0XHRcdFx0Ly8gdXBkYXRlIHNjcm9sbCBwb3Mgbm93IGluc3RlYWQgb2Ygb25DaGFuZ2UsIGFzIGl0IG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBzY2hlZHVsaW5nIChpLmUuIGluLWJyb3dzZXIgc21vb3RoIHNjcm9sbClcclxuXHRcdFx0XHRfc2Nyb2xsUG9zID0gQ29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdFx0XHR2YXIgZGVsdGFTY3JvbGwgPSBfc2Nyb2xsUG9zIC0gb2xkU2Nyb2xsUG9zO1xyXG5cdFx0XHRcdGlmIChkZWx0YVNjcm9sbCAhPT0gMCkgeyAvLyBzY3JvbGwgcG9zaXRpb24gY2hhbmdlZD9cclxuXHRcdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSAoZGVsdGFTY3JvbGwgPiAwKSA/IFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gcmV2ZXJzZSBvcmRlciBvZiBzY2VuZXMgaWYgc2Nyb2xsaW5nIHJldmVyc2VcclxuXHRcdFx0XHRpZiAoX3Njcm9sbERpcmVjdGlvbiA9PT0gU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFKSB7XHJcblx0XHRcdFx0XHRzY2VuZXNUb1VwZGF0ZS5yZXZlcnNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHVwZGF0ZSBzY2VuZXNcclxuXHRcdFx0XHRzY2VuZXNUb1VwZGF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIFNjZW5lIFwiICsgKGluZGV4ICsgMSkgKyBcIi9cIiArIHNjZW5lc1RvVXBkYXRlLmxlbmd0aCArIFwiIChcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xyXG5cdFx0XHRcdFx0c2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChzY2VuZXNUb1VwZGF0ZS5sZW5ndGggPT09IDAgJiYgX29wdGlvbnMubG9nbGV2ZWwgPj0gMykge1xyXG5cdFx0XHRcdFx0bG9nKDMsIFwidXBkYXRpbmcgMCBTY2VuZXMgKG5vdGhpbmcgYWRkZWQgdG8gY29udHJvbGxlcilcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5pdGlhbGl6ZXMgckFGIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZGVib3VuY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF91cGRhdGVUaW1lb3V0ID0gX3V0aWwuckFGKHVwZGF0ZVNjZW5lcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlcyBDb250YWluZXIgY2hhbmdlc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0bG9nKDMsIFwiZXZlbnQgZmlyZWQgY2F1c2luZyBhbiB1cGRhdGU6XCIsIGUudHlwZSk7XHJcblx0XHRcdGlmIChlLnR5cGUgPT0gXCJyZXNpemVcIikge1xyXG5cdFx0XHRcdC8vIHJlc2l6ZVxyXG5cdFx0XHRcdF92aWV3UG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcclxuXHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRlXHJcblx0XHRcdGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUpIHtcclxuXHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSB0cnVlO1xyXG5cdFx0XHRcdGRlYm91bmNlVXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHQvLyBzaW11bGF0ZSByZXNpemUgZXZlbnQuIE9ubHkgd29ya3MgZm9yIHZpZXdwb3J0IHJlbGV2YW50IHBhcmFtIChwZXJmb3JtYW5jZSlcclxuXHRcdFx0XHRpZiAoX3ZpZXdQb3J0U2l6ZSAhPSBnZXRWaWV3cG9ydFNpemUoKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc2l6ZUV2ZW50O1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQgPSBuZXcgRXZlbnQoJ3Jlc2l6ZScsIHtcclxuXHRcdFx0XHRcdFx0XHRidWJibGVzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gc3R1cGlkIElFXHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQuaW5pdEV2ZW50KFwicmVzaXplXCIsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChyZXNpemVFdmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF9zY2VuZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7IC8vIHJlZnJlc2ggYWxsIHNjZW5lc1xyXG5cdFx0XHRcdHNjZW5lLnJlZnJlc2goKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlbmQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICogcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxyXG5cdFx0ICogQHBhcmFtIHsuLi5taXhlZH0gb3V0cHV0IC0gT25lIG9yIG1vcmUgdmFyaWFibGVzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5sb2dsZXZlbCA+PSBsb2dsZXZlbCkge1xyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+XCIpO1xyXG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBmb3Igc2NlbmVzIHdlIGhhdmUgZ2V0dGVycyBmb3IgZWFjaCBvcHRpb24sIGJ1dCBmb3IgdGhlIGNvbnRyb2xsZXIgd2UgZG9uJ3QsIHNvIHdlIG5lZWQgdG8gbWFrZSBpdCBhdmFpbGFibGUgZXh0ZXJuYWxseSBmb3IgcGx1Z2luc1xyXG5cdFx0dGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU29ydCBzY2VuZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIHN0YXJ0IG9mZnNldC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHthcnJheX0gU2NlbmVzQXJyYXkgLSBhbiBhcnJheSBvZiBTY3JvbGxNYWdpYyBTY2VuZXMgdGhhdCBzaG91bGQgYmUgc29ydGVkXHJcblx0XHQgKiBAcmV0dXJuIHthcnJheX0gVGhlIHNvcnRlZCBhcnJheSBvZiBTY2VuZXMuXHJcblx0XHQgKi9cclxuXHRcdHZhciBzb3J0U2NlbmVzID0gZnVuY3Rpb24gKFNjZW5lc0FycmF5KSB7XHJcblx0XHRcdGlmIChTY2VuZXNBcnJheS5sZW5ndGggPD0gMSkge1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZXNBcnJheTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgc2NlbmVzID0gU2NlbmVzQXJyYXkuc2xpY2UoMCk7XHJcblx0XHRcdFx0c2NlbmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBhLnNjcm9sbE9mZnNldCgpID4gYi5zY3JvbGxPZmZzZXQoKSA/IDEgOiAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gc2NlbmVzO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIHNjZW5lKHMpIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5hZGRUbyhjb250cm9sbGVyKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gd2l0aCBhIHByZXZpb3VzbHkgZGVmaW5lZCBzY2VuZVxyXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gd2l0aCBhIG5ld2x5IGNyZWF0ZWQgc2NlbmUuXHJcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSkpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGFkZGluZyBtdWx0aXBsZSBzY2VuZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoW3NjZW5lLCBzY2VuZTIsIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSldKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IG5ld1NjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyLlxyXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuYWRkU2NlbmUgPSBmdW5jdGlvbiAobmV3U2NlbmUpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobmV3U2NlbmUpKSB7XHJcblx0XHRcdFx0bmV3U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7XHJcblx0XHRcdFx0aWYgKG5ld1NjZW5lLmNvbnRyb2xsZXIoKSAhPT0gQ29udHJvbGxlcikge1xyXG5cdFx0XHRcdFx0bmV3U2NlbmUuYWRkVG8oQ29udHJvbGxlcik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfc2NlbmVPYmplY3RzLmluZGV4T2YobmV3U2NlbmUpIDwgMCkge1xyXG5cdFx0XHRcdFx0Ly8gbmV3IHNjZW5lXHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnB1c2gobmV3U2NlbmUpOyAvLyBhZGQgdG8gYXJyYXlcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMgPSBzb3J0U2NlbmVzKF9zY2VuZU9iamVjdHMpOyAvLyBzb3J0XHJcblx0XHRcdFx0XHRuZXdTY2VuZS5vbihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiLCBmdW5jdGlvbiAoKSB7IC8vIHJlc29ydCB3aGVuZXZlciBzY2VuZSBtb3Zlc1xyXG5cdFx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gaW5zZXJ0IEdsb2JhbCBkZWZhdWx0cy5cclxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG5ld1NjZW5lW2tleV0pIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdTY2VuZVtrZXldLmNhbGwobmV3U2NlbmUsIF9vcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9uc1trZXldKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bG9nKDMsIFwiYWRkaW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIHRvdGFsKVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IGludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgZm9yICcuYWRkU2NlbmUoKSdcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBmcm9tIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5yZW1vdmUoKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmVtb3ZlIGEgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIG11bHRpcGxlIHNjZW5lcyBmcm9tIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnJlbW92ZVNjZW5lKFtzY2VuZSwgc2NlbmUyLCBzY2VuZTNdKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSkge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShTY2VuZSkpIHtcclxuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IF9zY2VuZU9iamVjdHMuaW5kZXhPZihTY2VuZSk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdFNjZW5lLm9mZihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiKTtcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdGxvZygzLCBcInJlbW92aW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIGxlZnQpXCIpO1xyXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHQgKiBVcGRhdGUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGFjY29yZGluZyB0byB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS51cGRhdGUoKWAuICBcclxuXHQgKiBUaGUgdXBkYXRlIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBzY2VuZSdzIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gKGJhc2VkIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHRyaWdnZXIgaG9vaywgZHVyYXRpb24gYW5kIG9mZnNldCkgYW5kIGNoZWNrcyBpdCBhZ2FpbnN0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0ICogSXQgdGhlbiB1cGRhdGVzIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFjY29yZGluZ2x5IChvciBkb2VzIG5vdGhpbmcsIGlmIHRoZSBzdGF0ZSBpcyBhbHJlYWR5IGNvcnJlY3QpIOKAkyBQaW5zIHdpbGwgYmUgc2V0IHRvIHRoZWlyIGNvcnJlY3QgcG9zaXRpb24gYW5kIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlaXIgY29ycmVjdCBwcm9ncmVzcy4gIFxyXG5cdCAqIF8qKk5vdGU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBDb250cm9sbGVyIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuIFx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSk7XHJcbiBcdCAqXHJcblx0ICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgaW1tZWRpYXRlbHlcclxuXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCB0cnVlKTtcclxuIFx0ICpcclxuXHQgKiAvLyB1cGRhdGUgbXVsdGlwbGUgc2NlbmVzIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKFtzY2VuZTEsIHNjZW5lMiwgc2NlbmUzXSk7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLlNjZW5lfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0aGF0IGlzL2FyZSBzdXBwb3NlZCB0byBiZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFRoaXMgaXMgdXNlZnVsIHdoZW4gY2hhbmdpbmcgbXVsdGlwbGUgcHJvcGVydGllcyBvZiB0aGUgc2NlbmUgLSB0aGlzIHdheSBpdCB3aWxsIG9ubHkgYmUgdXBkYXRlZCBvbmNlIGFsbCBuZXcgcHJvcGVydGllcyBhcmUgc2V0ICh1cGRhdGVTY2VuZXMpLlxyXG5cdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdCAqL1xyXG5cdFx0dGhpcy51cGRhdGVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSwgaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XHJcblx0XHRcdFx0U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUgJiYgU2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkgeyAvLyBpZiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgaXMgdHJ1ZSwgYWxsIGNvbm5lY3RlZCBzY2VuZXMgYXJlIGFscmVhZHkgc2NoZWR1bGVkIGZvciB1cGRhdGVcclxuXHRcdFx0XHRcdC8vIHByZXAgYXJyYXkgZm9yIG5leHQgdXBkYXRlIGN5Y2xlXHJcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgfHwgW107XHJcblx0XHRcdFx0XHRpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlLmluZGV4T2YoU2NlbmUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5wdXNoKFNjZW5lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IHNvcnRTY2VuZXMoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKTsgLy8gc29ydFxyXG5cdFx0XHRcdFx0ZGVib3VuY2VVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgY29udHJvbGxlciBwYXJhbXMgYW5kIGNhbGxzIHVwZGF0ZVNjZW5lIG9uIGV2ZXJ5IHNjZW5lLCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBTZWUgYENvbnRyb2xsZXIudXBkYXRlU2NlbmUoKWAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCB0aGlzIG1lYW5zLiAgXHJcblx0XHQgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCBuZWVkIHRoaXMgZnVuY3Rpb24sIGFzIGl0IGlzIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgc3RhdGUgY2hhbmdlIGV2ZW50LCBsaWtlIHJlc2l6ZSBvciBzY3JvbGwuICBcclxuXHRcdCAqIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB0aGlzIG1ldGhvZCBpcyB3aGVuIFNjcm9sbE1hZ2ljIGZhaWxzIHRvIGRldGVjdCB0aGVzZSBldmVudHMuICBcclxuXHRcdCAqIE9uZSBhcHBsaWNhdGlvbiBpcyB3aXRoIHNvbWUgZXh0ZXJuYWwgc2Nyb2xsIGxpYnJhcmllcyAobGlrZSBpU2Nyb2xsKSB0aGF0IG1vdmUgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGEgbmVnYXRpdmUgb2Zmc2V0IGluc3RlYWQgb2YgYWN0dWFsbHkgc2Nyb2xsaW5nLiBJbiB0aGlzIGNhc2UgdGhlIHVwZGF0ZSBvbiB0aGUgY29udHJvbGxlciBuZWVkcyB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNoaWxkIGNvbnRhaW5lcidzIHBvc2l0aW9uIGNoYW5nZXMuXHJcblx0XHQgKiBGb3IgdGhpcyBjYXNlIHRoZXJlIHdpbGwgYWxzbyBiZSB0aGUgbmVlZCB0byBwcm92aWRlIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uIFNlZSBgQ29udHJvbGxlci5zY3JvbGxQb3MoKWAgZm9yIGRldGFpbHMuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIG9uIG5leHQgY3ljbGUgKHNhdmVzIHBlcmZvcm1hbmNlIGR1ZSB0byBlbGltaW5hdGlvbiBvZiByZWR1bmRhbnQgdXBkYXRlcylcclxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIGltbWVkaWF0ZWx5XHJcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpXHJcblx0XHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0b25DaGFuZ2Uoe1xyXG5cdFx0XHRcdHR5cGU6IFwicmVzaXplXCJcclxuXHRcdFx0fSk7IC8vIHdpbGwgdXBkYXRlIHNpemUgYW5kIHNldCBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgdG8gdHJ1ZVxyXG5cdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHR1cGRhdGVTY2VuZXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY3JvbGwgdG8gYSBudW1lcmljIHNjcm9sbCBvZmZzZXQsIGEgRE9NIGVsZW1lbnQsIHRoZSBzdGFydCBvZiBhIHNjZW5lIG9yIHByb3ZpZGUgYW4gYWx0ZXJuYXRlIG1ldGhvZCBmb3Igc2Nyb2xsaW5nLiAgXHJcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCBjaGFuZ2UgdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCBjaGFuZ2UgdGhlIGxlZnQgb2Zmc2V0LlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHNjcm9sbCB0byBhbiBvZmZzZXQgb2YgMTAwXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2Nyb2xsIHRvIGEgRE9NIGVsZW1lbnRcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oXCIjYW5jaG9yXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNjcm9sbCB0byB0aGUgYmVnaW5uaW5nIG9mIGEgc2NlbmVcclxuXHRcdCAqIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7b2Zmc2V0OiAyMDB9KTtcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgcG9zaXRpb24gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uIChqUXVlcnkgYW5pbWF0ZSBpbnN0ZWFkIG9mIGp1bXApXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MpIHtcclxuXHRcdCAqXHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7IC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBpbnN0ZWFkXHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG1lc3NhZ2UpIHtcclxuXHRcdCAqICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyIHRvIHRoZSBkZWZpbmVkIGN1c3RvbSBmdW5jdGlvblxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIFwibXkgbWVzc2FnZVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIgY29udGFpbmluZyBtdWx0aXBsZSB2YXJpYWJsZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgb3B0aW9ucykge1xyXG5cdFx0ICogIHNvbWVHbG9iYWxWYXIgPSBvcHRpb25zLmEgKyBvcHRpb25zLmI7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIG9wdGlvbnNcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCB7YTogMSwgYjogMn0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhIGNhbGxiYWNrIHN1cHBsaWVkIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIGNhbGxiYWNrKSB7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30sIDQwMCwgXCJzd2luZ1wiLCBjYWxsYmFjayk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyLCB3aGljaCBpcyB1c2VkIGFzIGEgY2FsbGJhY2sgaW4gdGhlIHByZXZpb3VzbHkgZGVmaW5lZCBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgZnVuY3Rpb24oKSB7XHJcblx0XHQgKlx0Y29uc29sZS5sb2coXCJzY3JvbGwgaGFzIGZpbmlzaGVkLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IHNjcm9sbFRhcmdldCAtIFRoZSBzdXBwbGllZCBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRoZXNlIHR5cGVzOlxyXG5cdFx0ICogMS4gYG51bWJlcmAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGlzIG5ldyBzY3JvbGwgb2Zmc2V0LlxyXG5cdFx0ICogMi4gYHN0cmluZ2Agb3IgYG9iamVjdGAgLT4gQ2FuIGJlIGEgc2VsZWN0b3Igb3IgYSBET00gb2JqZWN0LiAgXHJcblx0XHQgKiAgVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBlbGVtZW50LlxyXG5cdFx0ICogMy4gYFNjcm9sbE1hZ2ljIFNjZW5lYCAtPiBUaGUgY29udGFpbmVyIHdpbGwgc2Nyb2xsIHRvIHRoZSBzdGFydCBvZiB0aGlzIHNjZW5lLlxyXG5cdFx0ICogNC4gYGZ1bmN0aW9uYCAtPiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBmb3IgZnV0dXJlIHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb25zLiAgXHJcblx0XHQgKiAgVGhpcyBwcm92aWRlcyBhIHdheSBmb3IgeW91IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mIHNjcm9sbGluZyBhbmQgYWRkaW5nIG5ldyBiZWhhdmlvdXIgbGlrZSBhbmltYXRpb24uIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBhcyBhIHBhcmFtZXRlciBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHVzaW5nIGB0aGlzYC4gIFxyXG5cdFx0ICogIEl0IG1heSBhbHNvIG9wdGlvbmFsbHkgcmVjZWl2ZSBhbiBvcHRpb25hbCBhZGRpdGlvbmFsIHBhcmFtZXRlciAoc2VlIGJlbG93KSAgXHJcblx0XHQgKiAgXyoqTk9URToqKiAgXHJcblx0XHQgKiAgQWxsIG90aGVyIG9wdGlvbnMgd2lsbCBzdGlsbCB3b3JrIGFzIGV4cGVjdGVkLCB1c2luZyB0aGUgbmV3IGZ1bmN0aW9uIHRvIHNjcm9sbC5fXHJcblx0XHQgKiBAcGFyYW0ge21peGVkfSBbYWRkaXRpb25hbFBhcmFtZXRlcl0gLSBJZiBhIGN1c3RvbSBzY3JvbGwgZnVuY3Rpb24gd2FzIGRlZmluZWQgKHNlZSBhYm92ZSA0LiksIHlvdSBtYXkgd2FudCB0byBzdXBwbHkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGl0LCB3aGVuIGNhbGxpbmcgaXQuIFlvdSBjYW4gZG8gdGhpcyB1c2luZyB0aGlzIHBhcmFtZXRlciDigJMgc2VlIGV4YW1wbGVzIGZvciBkZXRhaWxzLiBQbGVhc2Ugbm90ZSwgdGhhdCB0aGlzIHBhcmFtZXRlciB3aWxsIGhhdmUgbm8gZWZmZWN0LCBpZiB5b3UgdXNlIHRoZSBkZWZhdWx0IHNjcm9sbGluZyBmdW5jdGlvbi5cclxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zY3JvbGxUbyA9IGZ1bmN0aW9uIChzY3JvbGxUYXJnZXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXIpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHNjcm9sbFRhcmdldCkpIHsgLy8gZXhjZWN1dGVcclxuXHRcdFx0XHRzZXRTY3JvbGxQb3MuY2FsbChfb3B0aW9ucy5jb250YWluZXIsIHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsVGFyZ2V0IGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHsgLy8gc2Nyb2xsIHRvIHNjZW5lXHJcblx0XHRcdFx0aWYgKHNjcm9sbFRhcmdldC5jb250cm9sbGVyKCkgPT09IENvbnRyb2xsZXIpIHsgLy8gY2hlY2sgaWYgdGhlIGNvbnRyb2xsZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2NlbmVcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oc2Nyb2xsVGFyZ2V0LnNjcm9sbE9mZnNldCgpLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIHNjZW5lIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGNvbnRyb2xsZXIuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsVGFyZ2V0KSkgeyAvLyBhc3NpZ24gbmV3IHNjcm9sbCBmdW5jdGlvblxyXG5cdFx0XHRcdHNldFNjcm9sbFBvcyA9IHNjcm9sbFRhcmdldDtcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2Nyb2xsIHRvIGVsZW1lbnRcclxuXHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyhzY3JvbGxUYXJnZXQpWzBdO1xyXG5cdFx0XHRcdGlmIChlbGVtKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBwYXJlbnQgaXMgcGluIHNwYWNlciwgdXNlIHNwYWNlciBwb3NpdGlvbiBpbnN0ZWFkIHNvIGNvcnJlY3Qgc3RhcnQgcG9zaXRpb24gaXMgcmV0dXJuZWQgZm9yIHBpbm5lZCBlbGVtZW50cy5cclxuXHRcdFx0XHRcdHdoaWxlIChlbGVtLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xyXG5cdFx0XHRcdFx0XHRlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRwYXJhbSA9IF9vcHRpb25zLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiLCAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoX29wdGlvbnMuY29udGFpbmVyKSwgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0XHRlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChlbGVtKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIV9pc0RvY3VtZW50KSB7IC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBDb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIGFyZ3VtZW50IGlzIGludmFsaWQuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsUG9zaXRpb24gb3IgKipTZXQqKiBhIG5ldyBtZXRob2QgdG8gY2FsY3VsYXRlIGl0LiAgXHJcblx0XHQgKiAtPiAqKkdFVCoqOlxyXG5cdFx0ICogV2hlbiB1c2VkIGFzIGEgZ2V0dGVyIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLiAgXHJcblx0XHQgKiBUbyBnZXQgYSBjYWNoZWQgdmFsdWUgdXNlIENvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSwgd2hpY2ggd2lsbCBiZSB1cGRhdGVkIGluIHRoZSB1cGRhdGUgY3ljbGUuICBcclxuXHRcdCAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIHJldHVybiB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIHJldHVybiB0aGUgbGVmdCBvZmZzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogLT4gKipTRVQqKjpcclxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIHNldHRlciB0aGlzIG1ldGhvZCBwcm9kZXMgYSB3YXkgdG8gcGVybWFuZW50bHkgb3ZlcndyaXRlIHRoZSBjb250cm9sbGVyJ3Mgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uLiAgXHJcblx0XHQgKiBBIHR5cGljYWwgdXNlY2FzZSBpcyB3aGVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgbm90IHJlZmxlY3RlZCBieSB0aGUgY29udGFpbmVycyBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCB2YWx1ZXMsIGJ1dCBmb3IgZXhhbXBsZSBieSB0aGUgaW5uZXIgb2Zmc2V0IG9mIGEgY2hpbGQgY29udGFpbmVyLiAgXHJcblx0XHQgKiBNb3ZpbmcgYSBjaGlsZCBjb250YWluZXIgaW5zaWRlIGEgcGFyZW50IGlzIGEgY29tbW9ubHkgdXNlZCBtZXRob2QgZm9yIHNldmVyYWwgc2Nyb2xsaW5nIGZyYW1ld29ya3MsIGluY2x1ZGluZyBpU2Nyb2xsLiAgXHJcblx0XHQgKiBCeSBwcm92aWRpbmcgYW4gYWx0ZXJuYXRlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHlvdSBjYW4gbWFrZSBzdXJlIFNjcm9sbE1hZ2ljIHJlY2VpdmVzIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gIFxyXG5cdFx0ICogUGxlYXNlIGFsc28gYmVhciBpbiBtaW5kIHRoYXQgeW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHkgdmFsdWVzIGZvciB2ZXJ0aWNhbCBzY3JvbGxzIGFuIHggZm9yIGhvcml6b250YWxzLlxyXG5cdFx0ICpcclxuXHRcdCAqIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gcGxlYXNlIHVzZSBgQ29udHJvbGxlci5zY3JvbGxUbygpYC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBQb3NpdGlvblxyXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBtZXRob2RcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsUG9zKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAqXHRyZXR1cm4gdGhpcy5pbmZvKFwidmVydGljYWxcIikgPyAtbXljaGlsZGNvbnRhaW5lci55IDogLW15Y2hpbGRjb250YWluZXIueFxyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3Njcm9sbFBvc01ldGhvZF0gLSBUaGUgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogQHJldHVybnMgeyhudW1iZXJ8Q29udHJvbGxlcil9IEN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNjcm9sbFBvcyA9IGZ1bmN0aW9uIChzY3JvbGxQb3NNZXRob2QpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBnZXRTY3JvbGxQb3MuY2FsbChDb250cm9sbGVyKTtcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsUG9zTWV0aG9kKSkge1xyXG5cdFx0XHRcdFx0Z2V0U2Nyb2xsUG9zID0gc2Nyb2xsUG9zTWV0aG9kO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJQcm92aWRlZCB2YWx1ZSBmb3IgbWV0aG9kICdzY3JvbGxQb3MnIGlzIG5vdCBhIGZ1bmN0aW9uLiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHVzZSAnc2Nyb2xsVG8oKScuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIGFsbCBpbmZvcyBvciBvbmUgaW4gcGFydGljdWxhciBhYm91dCB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiAobnVtYmVyKVxyXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyByZXR1cm5zIGFsbCBpbmZvcyBhcyBhbiBvYmplY3RcclxuXHRcdCAqIHZhciBpbmZvcyA9IGNvbnRyb2xsZXIuaW5mbygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWJvdXRdIC0gSWYgcGFzc2VkIG9ubHkgdGhpcyBpbmZvIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwuICBcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCBWYWxpZCBvcHRpb25zIGFyZTpcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzaXplXCJgID0+IHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInZlcnRpY2FsXCJgID0+IHRydWUgaWYgdmVydGljYWwgc2Nyb2xsaW5nLCBvdGhlcndpc2UgZmFsc2VcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzY3JvbGxQb3NcImAgPT4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2Nyb2xsRGlyZWN0aW9uXCJgID0+IHRoZSBsYXN0IGtub3duIGRpcmVjdGlvbiBvZiB0aGUgc2Nyb2xsXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwiY29udGFpbmVyXCJgID0+IHRoZSBjb250YWluZXIgZWxlbWVudFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcImlzRG9jdW1lbnRcImAgPT4gdHJ1ZSBpZiBjb250YWluZXIgZWxlbWVudCBpcyB0aGUgZG9jdW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7KG1peGVkfG9iamVjdCl9IFRoZSByZXF1ZXN0ZWQgaW5mbyhzKS5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5pbmZvID0gZnVuY3Rpb24gKGFib3V0KSB7XHJcblx0XHRcdHZhciB2YWx1ZXMgPSB7XHJcblx0XHRcdFx0c2l6ZTogX3ZpZXdQb3J0U2l6ZSwgLy8gY29udGFpbnMgaGVpZ2h0IG9yIHdpZHRoIChpbiByZWdhcmQgdG8gb3JpZW50YXRpb24pO1xyXG5cdFx0XHRcdHZlcnRpY2FsOiBfb3B0aW9ucy52ZXJ0aWNhbCxcclxuXHRcdFx0XHRzY3JvbGxQb3M6IF9zY3JvbGxQb3MsXHJcblx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBfc2Nyb2xsRGlyZWN0aW9uLFxyXG5cdFx0XHRcdGNvbnRhaW5lcjogX29wdGlvbnMuY29udGFpbmVyLFxyXG5cdFx0XHRcdGlzRG9jdW1lbnQ6IF9pc0RvY3VtZW50XHJcblx0XHRcdH07XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXQgYWxsIGFzIGFuIG9iamVjdFxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XHJcblx0XHRcdH0gZWxzZSBpZiAodmFsdWVzW2Fib3V0XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlc1thYm91dF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IG9wdGlvbiBcXFwiXCIgKyBhYm91dCArIFwiXFxcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGxvZ2xldmVsID0gY29udHJvbGxlci5sb2dsZXZlbCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB2YWx1ZVxyXG5cdFx0ICogY29udHJvbGxlci5sb2dsZXZlbCgzKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld0xvZ2xldmVsXSAtIFRoZSBuZXcgbG9nbGV2ZWwgc2V0dGluZyBvZiB0aGUgQ29udHJvbGxlci4gYFswLTNdYFxyXG5cdFx0ICogQHJldHVybnMgeyhudW1iZXJ8Q29udHJvbGxlcil9IEN1cnJlbnQgbG9nbGV2ZWwgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9nbGV2ZWwgPSBmdW5jdGlvbiAobmV3TG9nbGV2ZWwpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfb3B0aW9ucy5sb2dsZXZlbDtcclxuXHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5sb2dsZXZlbCAhPSBuZXdMb2dsZXZlbCkgeyAvLyBzZXRcclxuXHRcdFx0XHRfb3B0aW9ucy5sb2dsZXZlbCA9IG5ld0xvZ2xldmVsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBlbmFibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgYWxsIFNjZW5lcyBjb25uZWN0ZWQgdG8gdGhlIGNvbnRyb2xsZXIgd2l0aG91dCBkZXN0cm95aW5nIG9yIHJlbW92aW5nIHRoZW0uXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGVuYWJsZWQgPSBjb250cm9sbGVyLmVuYWJsZWQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkaXNhYmxlIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLmVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlciBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqIEByZXR1cm5zIHsoYm9vbGVhbnxDb250cm9sbGVyKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcclxuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcclxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhbmV3U3RhdGU7XHJcblx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShfc2NlbmVPYmplY3RzLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXN0cm95IHRoZSBDb250cm9sbGVyLCBhbGwgU2NlbmVzIGFuZCBldmVyeXRoaW5nLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB3aXRob3V0IHJlc2V0dGluZyB0aGUgc2NlbmVzXHJcblx0XHQgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gd2l0aCBzY2VuZSByZXNldFxyXG5cdFx0ICogY29udHJvbGxlciA9IGNvbnRyb2xsZXIuZGVzdHJveSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldFNjZW5lcz1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHBpbnMgYW5kIHR3ZWVucyAoaWYgZXhpc3RlbnQpIG9mIGFsbCBzY2VuZXMgd2lsbCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXRTY2VuZXMpIHtcclxuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChfcmVmcmVzaFRpbWVvdXQpO1xyXG5cdFx0XHR2YXIgaSA9IF9zY2VuZU9iamVjdHMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0X3NjZW5lT2JqZWN0c1tpXS5kZXN0cm95KHJlc2V0U2NlbmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcclxuXHRcdFx0X3V0aWwuY0FGKF91cGRhdGVUaW1lb3V0KTtcclxuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldFNjZW5lcyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIElOSVRcclxuXHRcdGNvbnN0cnVjdCgpO1xyXG5cdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0fTtcclxuXHJcblx0Ly8gc3RvcmUgcGFnZXdpZGUgY29udHJvbGxlciBvcHRpb25zXHJcblx0dmFyIENPTlRST0xMRVJfT1BUSU9OUyA9IHtcclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdGNvbnRhaW5lcjogd2luZG93LFxyXG5cdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdFx0Z2xvYmFsU2NlbmVPcHRpb25zOiB7fSxcclxuXHRcdFx0bG9nbGV2ZWw6IDIsXHJcblx0XHRcdHJlZnJlc2hJbnRlcnZhbDogMTAwXHJcblx0XHR9XHJcblx0fTtcclxuXHQvKlxyXG5cdCAqIG1ldGhvZCB1c2VkIHRvIGFkZCBhbiBvcHRpb24gdG8gU2Nyb2xsTWFnaWMgU2NlbmVzLlxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuYWRkT3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdFx0Q09OVFJPTExFUl9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG5cdH07XHJcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XHJcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b2xkQ2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxyXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuXHRcdH07XHJcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuQ29udHJvbGxlciwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JvbGxNYWdpYy5Db250cm9sbGVyOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgU2NlbmUgZGVmaW5lcyB3aGVyZSB0aGUgY29udHJvbGxlciBzaG91bGQgcmVhY3QgYW5kIGhvdy5cclxuXHQgKlxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBjcmVhdGUgYSBzdGFuZGFyZCBzY2VuZSBhbmQgYWRkIGl0IHRvIGEgY29udHJvbGxlclxyXG5cdCAqIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXHJcblx0ICpcdFx0LmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cdCAqXHJcblx0ICogLy8gY3JlYXRlIGEgc2NlbmUgd2l0aCBjdXN0b20gb3B0aW9ucyBhbmQgYXNzaWduIGEgaGFuZGxlciB0byBpdC5cclxuXHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdCAqIFx0XHRkdXJhdGlvbjogMTAwLFxyXG5cdCAqXHRcdG9mZnNldDogMjAwLFxyXG5cdCAqXHRcdHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcclxuXHQgKlx0XHRyZXZlcnNlOiBmYWxzZVxyXG5cdCAqIH0pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgZm9yIHRoZSBTY2VuZS4gVGhlIG9wdGlvbnMgY2FuIGJlIHVwZGF0ZWQgYXQgYW55IHRpbWUuICBcclxuXHQgXHRcdFx0XHRcdFx0XHQgICBJbnN0ZWFkIG9mIHNldHRpbmcgdGhlIG9wdGlvbnMgZm9yIGVhY2ggc2NlbmUgaW5kaXZpZHVhbGx5IHlvdSBjYW4gYWxzbyBzZXQgdGhlbSBnbG9iYWxseSBpbiB0aGUgY29udHJvbGxlciBhcyB0aGUgY29udHJvbGxlcnMgYGdsb2JhbFNjZW5lT3B0aW9uc2Agb3B0aW9uLiBUaGUgb2JqZWN0IGFjY2VwdHMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgb25lcyBiZWxvdy4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdCAgIFdoZW4gYSBzY2VuZSBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB0aGUgb3B0aW9ucyBkZWZpbmVkIHVzaW5nIHRoZSBTY2VuZSBjb25zdHJ1Y3RvciB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHRob3NlIHNldCBpbiBgZ2xvYmFsU2NlbmVPcHRpb25zYC5cclxuXHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKX0gW29wdGlvbnMuZHVyYXRpb249MF0gLSBUaGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLiBcclxuXHQgXHRcdFx0XHRcdFBsZWFzZSBzZWUgYFNjZW5lLmR1cmF0aW9uKClgIGZvciBkZXRhaWxzLlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5vZmZzZXQ9MF0gLSBPZmZzZXQgVmFsdWUgZm9yIHRoZSBUcmlnZ2VyIFBvc2l0aW9uLiBJZiBubyB0cmlnZ2VyRWxlbWVudCBpcyBkZWZpbmVkIHRoaXMgd2lsbCBiZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBwYWdlLCBhZnRlciB3aGljaCB0aGUgc2NlbmUgd2lsbCBzdGFydC5cclxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMudHJpZ2dlckVsZW1lbnQ9bnVsbF0gLSBTZWxlY3RvciBvciBET00gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHNjZW5lLiBJZiB1bmRlZmluZWQgdGhlIHNjZW5lIHdpbGwgc3RhcnQgcmlnaHQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYWdlICh1bmxlc3MgYW4gb2Zmc2V0IGlzIHNldCkuXHJcblx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IFtvcHRpb25zLnRyaWdnZXJIb29rPVwib25DZW50ZXJcIl0gLSBDYW4gYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGRlZmluaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlciBIb29rIGluIHJlbGF0aW9uIHRvIHRoZSB2aWV3cG9ydC4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIENhbiBhbHNvIGJlIGRlZmluZWQgdXNpbmcgYSBzdHJpbmc6XHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25FbnRlclwiYCA9PiBgMWBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkNlbnRlclwiYCA9PiBgMC41YFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uTGVhdmVcImAgPT4gYDBgXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnNlPXRydWVdIC0gU2hvdWxkIHRoZSBzY2VuZSByZXZlcnNlLCB3aGVuIHNjcm9sbGluZyB1cD9cclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubG9nbGV2ZWw9Ml0gLSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAwYCA9PiBzaWxlbnRcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAxYCA9PiBlcnJvcnNcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXHJcblx0ICogXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBzZXR0aW5nc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5TY2VuZScsXHJcblx0XHRcdFNDRU5FX1NUQVRFX0JFRk9SRSA9ICdCRUZPUkUnLFxyXG5cdFx0XHRTQ0VORV9TVEFURV9EVVJJTkcgPSAnRFVSSU5HJyxcclxuXHRcdFx0U0NFTkVfU1RBVEVfQUZURVIgPSAnQUZURVInLFxyXG5cdFx0XHRERUZBVUxUX09QVElPTlMgPSBTQ0VORV9PUFRJT05TLmRlZmF1bHRzO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBwcml2YXRlIHZhcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRTY2VuZSA9IHRoaXMsXHJcblx0XHRcdF9vcHRpb25zID0gX3V0aWwuZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpLFxyXG5cdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9CRUZPUkUsXHJcblx0XHRcdF9wcm9ncmVzcyA9IDAsXHJcblx0XHRcdF9zY3JvbGxPZmZzZXQgPSB7XHJcblx0XHRcdFx0c3RhcnQ6IDAsXHJcblx0XHRcdFx0ZW5kOiAwXHJcblx0XHRcdH0sIC8vIHJlZmxlY3RzIHRoZSBjb250cm9sbGVycydzIHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lIHJlc3BlY3RpdmVseVxyXG5cdFx0XHRfdHJpZ2dlclBvcyA9IDAsXHJcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcclxuXHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kLFxyXG5cdFx0XHRfY29udHJvbGxlcjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEludGVybmFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBTY3JvbGxNYWdpYyBTY2VuZVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zKSB7IC8vIGNoZWNrIHN1cHBsaWVkIG9wdGlvbnNcclxuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBVbmtub3duIG9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XHJcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gYWRkIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIHBvc3NpYmxlIG9wdGlvbnNcclxuXHRcdFx0Zm9yICh2YXIgb3B0aW9uTmFtZSBpbiBERUZBVUxUX09QVElPTlMpIHtcclxuXHRcdFx0XHRhZGRTY2VuZU9wdGlvbihvcHRpb25OYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB2YWxpZGF0ZSBhbGwgb3B0aW9uc1xyXG5cdFx0XHR2YWxpZGF0ZU9wdGlvbigpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRXZlbnQgTWFuYWdlbWVudFxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyIF9saXN0ZW5lcnMgPSB7fTtcclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgc3RhcnQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZ29pbmcgb3ZlciB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgdG8gaGFwcGVuIG9ubHkgd2hlbiBzY3JvbGxpbmcgZG93bi9yaWdodCwgdXNlIHRoZSBzY3JvbGxEaXJlY3Rpb24gcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhcnRcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgc3RhcnQgcG9pbnQgb2Ygc2NlbmUuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgIG9yIGBcIkRVUklOR1wiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGVuZCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjcm9sbCBwb3NpdGlvbiBpdHMgdGhlIGVuZGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZnJvbSBhZnRlciB0aGUgc2NlbmUgYW5kIGdvaW5nIG92ZXIgaXRzIGVuZCBwb3NpdGlvbi4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2VuZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgZW5kIHBvaW50IG9mIHNjZW5lLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGVudGVyIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUgZW50ZXJzIHRoZSBcIkRVUklOR1wiIHN0YXRlLiAgXHJcblx0XHQgKiBLZWVwIGluIG1pbmQgdGhhdCBpdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2NlbmUgcGxheXMgZm9yd2FyZCBvciBiYWNrd2FyZDogVGhpcyBldmVudCBhbHdheXMgZmlyZXMgd2hlbiB0aGUgc2NlbmUgZW50ZXJzIGl0cyBhY3RpdmUgc2Nyb2xsIHRpbWVmcmFtZSwgcmVnYXJkbGVzcyBvZiB0aGUgc2Nyb2xsLWRpcmVjdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbnRlclxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIGVudGVyZWQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgLSBhbHdheXMgYFwiRFVSSU5HXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgbGVhdmUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSdzIHN0YXRlIGdvZXMgZnJvbSBcIkRVUklOR1wiIHRvIGVpdGhlciBcIkJFRk9SRVwiIG9yIFwiQUZURVJcIi4gIFxyXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGxlYXZlcyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjbGVhdmVcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBsZWZ0LlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHVwZGF0ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGlzIHVwZGF0ZWQgKGJ1dCBub3QgbmVjZXNzYXJpbHkgY2hhbmdlcyB0aGUgcHJvZ3Jlc3MpLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgdXBkYXRlZC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc3RhcnRQb3MgLSBUaGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuZW5kUG9zIC0gVGhlIGVuZGluZyBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluIHJlbGF0aW9uIHRvIHRoZSBjb25haW5lcilcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5zY3JvbGxQb3MgLSBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lclxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHByb2dyZXNzIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lIGNoYW5nZXMuXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3NcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBwcm9ncmVzcyBjaGFuZ2VkIHRvIFwiICsgZXZlbnQucHJvZ3Jlc3MpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBjaGFuZ2UgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW52ZXZlciBhIHByb3BlcnR5IG9mIHRoZSBzY2VuZSBpcyBjaGFuZ2VkLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNjaGFuZ2VcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgUHJvcGVydHkgXFxcIlwiICsgZXZlbnQud2hhdCArIFwiXFxcIiBjaGFuZ2VkIHRvIFwiICsgZXZlbnQubmV3dmFsKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC53aGF0IC0gSW5kaWNhdGVzIHdoYXQgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG5cdFx0ICogQHByb3BlcnR5IHttaXhlZH0gZXZlbnQubmV3dmFsIC0gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2hhbmdlZCBwcm9wZXJ0eVxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHNoaWZ0IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHN0YXJ0IG9yIGVuZCAqKnNjcm9sbCBvZmZzZXQqKiBvZiB0aGUgc2NlbmUgY2hhbmdlLlxyXG5cdFx0ICogVGhpcyBoYXBwZW5zIGV4cGxpY2l0ZWx5LCB3aGVuIG9uZSBvZiB0aGVzZSB2YWx1ZXMgY2hhbmdlOiBgb2Zmc2V0YCwgYGR1cmF0aW9uYCBvciBgdHJpZ2dlckhvb2tgLlxyXG5cdFx0ICogSXQgd2lsbCBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgYHRyaWdnZXJFbGVtZW50YCBjaGFuZ2VzLCBpZiB0aGUgbmV3IGVsZW1lbnQgaGFzIGEgZGlmZmVyZW50IHBvc2l0aW9uIChtb3N0IGNhc2VzKS5cclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGNoYW5nZXMgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGBvbkxlYXZlYC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc2hpZnRcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInNoaWZ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIG1vdmVkLCBiZWNhdXNlIHRoZSBcIiArIGV2ZW50LnJlYXNvbiArIFwiIGhhcyBjaGFuZ2VkLilcIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQucmVhc29uIC0gSW5kaWNhdGVzIHdoeSB0aGUgc2NlbmUgaGFzIHNoaWZ0ZWRcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBkZXN0cm95IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHNjZW5lIGlzIGRlc3Ryb3llZC5cclxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdGlkeSB1cCBjdXN0b20gYmVoYXZpb3VyIHVzZWQgaW4gZXZlbnRzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqICAgICAgICAvLyBhZGQgY3VzdG9tIGFjdGlvblxyXG5cdFx0ICogICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMjAwXCIpO1xyXG5cdFx0ICogICAgICB9KVxyXG5cdFx0ICogICAgICAub24oXCJkZXN0cm95XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogICAgICAgIC8vIHJlc2V0IG15IGVsZW1lbnQgdG8gc3RhcnQgcG9zaXRpb25cclxuXHRcdCAqICAgICAgICBpZiAoZXZlbnQucmVzZXQpIHtcclxuXHRcdCAqICAgICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMFwiKTtcclxuXHRcdCAqICAgICAgICB9XHJcblx0XHQgKiAgICAgIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQucmVzZXQgLSBJbmRpY2F0ZXMgaWYgdGhlIGRlc3Ryb3kgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCByZXNldCBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBhZGQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkXHJcblx0XHQgKiBAc2luY2UgMi4wLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJhZGRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgYWRkZWQgdG8gYSBuZXcgY29udHJvbGxlci4nKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQuY29udHJvbGxlciAtIFRoZSBjb250cm9sbGVyIG9iamVjdCB0aGUgc2NlbmUgd2FzIGFkZGVkIHRvLlxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHJlbW92ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbiB0aGUgc2NlbmUgaXMgcmVtb3ZlZCBmcm9tIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlXHJcblx0XHQgKiBAc2luY2UgMi4wLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJyZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgcmVtb3ZlZCBmcm9tIGl0cyBjb250cm9sbGVyLicpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIGV2ZW50IGxpc3RlbmVyLiAgXHJcblx0XHQgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCBhdCB0aGUgcmVzcGVjdGl2ZSBldmVudCwgYW5kIGFuIG9iamVjdCBjb250YWluaW5nIHJlbGV2YW50IGRhdGEgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvblxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogLy8gYWRkIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlIHByb2dyZXNzIHN0YXJ0IGVuZCBlbnRlciBsZWF2ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoZSBjYWxsYmFjayBzaG91bGQgYmUgYXR0YWNoZWQgdG8uXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQsIHdoZW4gdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQuIEFuIGV2ZW50IG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm9uID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihjYWxsYmFjaykpIHtcclxuXHRcdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRcdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxuYW1lKSB7XHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV07XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRuYW1lICE9IFwiKlwiKSB7IC8vIGRpc2FsbG93IHdpbGRjYXJkc1xyXG5cdFx0XHRcdFx0XHRpZiAoIV9saXN0ZW5lcnNbZXZlbnRuYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXS5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSB8fCAnJyxcclxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1Igd2hlbiBjYWxsaW5nICcub24oKSc6IFN1cHBsaWVkIGNhbGxiYWNrIGZvciAnXCIgKyBuYW1lcyArIFwiJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbiFcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBvbmUgb3IgbW9yZSBldmVudCBsaXN0ZW5lci5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb2ZmXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIGZ1bmN0aW9uIGNhbGxiYWNrIChldmVudCkge1xyXG5cdFx0ICogXHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgZmlyZWQhIChcIiArIGV2ZW50LnR5cGUgKyBcIilcIik7XHJcblx0XHQgKiB9XHJcblx0XHQgKiAvLyBhZGQgbGlzdGVuZXJzXHJcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICogLy8gcmVtb3ZlIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub2ZmKFwiY2hhbmdlIHVwZGF0ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLiBJZiBub25lIGlzIHBhc3NlZCBhbGwgY2FsbGJhY2tzIHRvIHRoZSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm9mZiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKCFuYW1lcykge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSwga2V5KSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxyXG5cdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdIHx8ICcnLFxyXG5cdFx0XHRcdFx0cmVtb3ZlTGlzdCA9IGV2ZW50bmFtZSA9PT0gJyonID8gT2JqZWN0LmtleXMoX2xpc3RlbmVycykgOiBbZXZlbnRuYW1lXTtcclxuXHRcdFx0XHRyZW1vdmVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkge1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdGxpc3QgPSBfbGlzdGVuZXJzW3JlbW92ZV0gfHwgW10sXHJcblx0XHRcdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxpc3RlbmVyID0gbGlzdFtpXTtcclxuXHRcdFx0XHRcdFx0aWYgKGxpc3RlbmVyICYmIChuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09ICcqJykgJiYgKCFjYWxsYmFjayB8fCBjYWxsYmFjayA9PSBsaXN0ZW5lci5jYWxsYmFjaykpIHtcclxuXHRcdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCFsaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgX2xpc3RlbmVyc1tyZW1vdmVdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyaWdnZXIgYW4gZXZlbnQuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogdGhpcy50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFycykge1xyXG5cdFx0XHRpZiAobmFtZSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0bmFtZXBhcnRzID0gbmFtZS50cmltKCkuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSxcclxuXHRcdFx0XHRcdGxpc3RlbmVycyA9IF9saXN0ZW5lcnNbZXZlbnRuYW1lXTtcclxuXHRcdFx0XHRsb2coMywgJ2V2ZW50IGZpcmVkOicsIGV2ZW50bmFtZSwgdmFycyA/IFwiLT5cIiA6ICcnLCB2YXJzIHx8ICcnKTtcclxuXHRcdFx0XHRpZiAobGlzdGVuZXJzKSB7XHJcblx0XHRcdFx0XHRsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIsIGtleSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSkge1xyXG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwoU2NlbmUsIG5ldyBTY3JvbGxNYWdpYy5FdmVudChldmVudG5hbWUsIGxpc3RlbmVyLm5hbWVzcGFjZSwgU2NlbmUsIHZhcnMpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwiY2hhbmdlLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0aWYgKGUud2hhdCAhPT0gXCJsb2dsZXZlbFwiICYmIGUud2hhdCAhPT0gXCJ0d2VlbkNoYW5nZXNcIikgeyAvLyBubyBuZWVkIGZvciBhIHNjZW5lIHVwZGF0ZSBzY2VuZSB3aXRoIHRoZXNlIG9wdGlvbnMuLi5cclxuXHRcdFx0XHRcdGlmIChlLndoYXQgPT09IFwidHJpZ2dlckVsZW1lbnRcIikge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGUud2hhdCA9PT0gXCJyZXZlcnNlXCIpIHsgLy8gdGhlIG9ubHkgcHJvcGVydHkgbGVmdCB0aGF0IG1heSBoYXZlIGFuIGltcGFjdCBvbiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZS4gRXZlcnl0aGluZyBlbHNlIGlzIGhhbmRsZWQgYnkgdGhlIHNoaWZ0IGV2ZW50LlxyXG5cdFx0XHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlU2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKCk7IC8vIHVwZGF0ZSBzY2VuZSB0byByZWZsZWN0IG5ldyBwb3NpdGlvblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlbmQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIGJ1dCBwcm92aWRlZCBwdWJsaWNseSB3aXRoIF9sb2cgZm9yIHBsdWdpbnNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cclxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKi9cclxuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPlwiKTtcclxuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIHRoZSBzY2VuZSB0byBhIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpYC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkVG9cclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gYWRkIGEgc2NlbmUgdG8gYSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcblx0XHQgKiBzY2VuZS5hZGRUbyhjb250cm9sbGVyKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciB0byB3aGljaCB0aGUgc2NlbmUgc2hvdWxkIGJlIGFkZGVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5hZGRUbyA9IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XHJcblx0XHRcdGlmICghKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5Db250cm9sbGVyKSkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBzdXBwbGllZCBhcmd1bWVudCBvZiAnYWRkVG8oKScgaXMgbm90IGEgdmFsaWQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclwiKTtcclxuXHRcdFx0fSBlbHNlIGlmIChfY29udHJvbGxlciAhPSBjb250cm9sbGVyKSB7XHJcblx0XHRcdFx0Ly8gbmV3IGNvbnRyb2xsZXJcclxuXHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHsgLy8gd2FzIGFzc29jaWF0ZWQgdG8gYSBkaWZmZXJlbnQgY29udHJvbGxlciBiZWZvcmUsIHNvIHJlbW92ZSBpdC4uLlxyXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIucmVtb3ZlU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcclxuXHRcdFx0XHR1cGRhdGVEdXJhdGlvbih0cnVlKTtcclxuXHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKHRydWUpO1xyXG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xyXG5cdFx0XHRcdGNvbnRyb2xsZXIuYWRkU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJhZGRcIiwge1xyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogX2NvbnRyb2xsZXJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRsb2coMywgXCJhZGRlZCBcIiArIE5BTUVTUEFDRSArIFwiIHRvIGNvbnRyb2xsZXJcIik7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBlbmFibGVkIHN0YXRlIG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNhYmxlIHRoaXMgc2NlbmUgd2l0aG91dCByZW1vdmluZyBvciBkZXN0cm95aW5nIGl0LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNlbmFibGVkXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGVuYWJsZWQgPSBzY2VuZS5lbmFibGVkKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgc2NlbmVcclxuXHRcdCAqIHNjZW5lLmVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKiBAcmV0dXJucyB7KGJvb2xlYW58U2NlbmUpfSBDdXJyZW50IGVuYWJsZWQgc3RhdGUgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZW5hYmxlZCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9lbmFibGVkO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF9lbmFibGVkICE9IG5ld1N0YXRlKSB7IC8vIHNldFxyXG5cdFx0XHRcdF9lbmFibGVkID0gISFuZXdTdGF0ZTtcclxuXHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSlgLlxyXG5cdFx0ICogVGhlIHNjZW5lIHdpbGwgbm90IGJlIHVwZGF0ZWQgYW55bW9yZSB1bnRpbCB5b3UgcmVhZGQgaXQgdG8gYSBjb250cm9sbGVyLlxyXG5cdFx0ICogVG8gcmVtb3ZlIHRoZSBwaW4gb3IgdGhlIHR3ZWVuIHlvdSBuZWVkIHRvIGNhbGwgcmVtb3ZlVHdlZW4oKSBvciByZW1vdmVQaW4oKSByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgc2NlbmUgZnJvbSBpdHMgY29udHJvbGxlclxyXG5cdFx0ICogc2NlbmUucmVtb3ZlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xyXG5cdFx0XHRcdHZhciB0bXBQYXJlbnQgPSBfY29udHJvbGxlcjtcclxuXHRcdFx0XHRfY29udHJvbGxlciA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHR0bXBQYXJlbnQucmVtb3ZlU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJyZW1vdmVcIik7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBcIiArIE5BTUVTUEFDRSArIFwiIGZyb20gY29udHJvbGxlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVzdHJveSB0aGUgc2NlbmUgYW5kIGV2ZXJ5dGhpbmcuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2Rlc3Ryb3lcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBkZXN0cm95IHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyB0aGUgcGluIGFuZCB0d2VlbiB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xyXG5cdFx0ICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gYW5kIHR3ZWVuXHJcblx0XHQgKiBzY2VuZSA9IHNjZW5lLmRlc3Ryb3kodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW4gYW5kIHR3ZWVuIChpZiBleGlzdGVudCkgd2lsbCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXQpIHtcclxuXHRcdFx0U2NlbmUudHJpZ2dlcihcImRlc3Ryb3lcIiwge1xyXG5cdFx0XHRcdHJlc2V0OiByZXNldFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0U2NlbmUucmVtb3ZlKCk7XHJcblx0XHRcdFNjZW5lLm9mZihcIiouKlwiKTtcclxuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIFNjZW5lIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIGltbWVkaWF0ZWx5KWAuICBcclxuXHRcdCAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHRcdCAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuXHJcblx0XHQgKiBUaGlzIG1lYW5zIGFuIHVwZGF0ZSBkb2Vzbid0IG5lY2Vzc2FyaWx5IHJlc3VsdCBpbiBhIHByb2dyZXNzIGNoYW5nZS4gVGhlIGBwcm9ncmVzc2AgZXZlbnQgd2lsbCBiZSBmaXJlZCBpZiB0aGUgcHJvZ3Jlc3MgaGFzIGluZGVlZCBjaGFuZ2VkIGJldHdlZW4gdGhpcyB1cGRhdGUgYW5kIHRoZSBsYXN0LiAgXHJcblx0XHQgKiBfKipOT1RFOioqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGNvbnN0YW50bHkgd2hlbmV2ZXIgU2Nyb2xsTWFnaWMgZGV0ZWN0cyBhIGNoYW5nZS4gVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHlvdSBpcyBpZiB5b3UgY2hhbmdlIHNvbWV0aGluZyBvdXRzaWRlIG9mIHRoZSByZWFsbSBvZiBTY3JvbGxNYWdpYywgbGlrZSBtb3ZpbmcgdGhlIHRyaWdnZXIgb3IgY2hhbmdpbmcgdHdlZW4gcGFyYW1ldGVycy5fXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgb24gbmV4dCB0aWNrXHJcblx0XHQgKiBzY2VuZS51cGRhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIHNjZW5lIGltbWVkaWF0ZWx5XHJcblx0XHQgKiBzY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIFNjZW5lLnVwZGF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUgKGJldHRlciBwZXJmb3JtYW5jZSkuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHRcdGlmIChfY29udHJvbGxlci5lbmFibGVkKCkgJiYgX2VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zID0gX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSxcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcztcclxuXHJcblx0XHRcdFx0XHRcdGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IChzY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KSAvIChfc2Nyb2xsT2Zmc2V0LmVuZCAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzID0gc2Nyb2xsUG9zID49IF9zY3JvbGxPZmZzZXQuc3RhcnQgPyAxIDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInVwZGF0ZVwiLCB7XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRQb3M6IF9zY3JvbGxPZmZzZXQuc3RhcnQsXHJcblx0XHRcdFx0XHRcdFx0ZW5kUG9zOiBfc2Nyb2xsT2Zmc2V0LmVuZCxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3M6IHNjcm9sbFBvc1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFNjZW5lLnByb2dyZXNzKG5ld1Byb2dyZXNzKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSh0cnVlKTsgLy8gdW5waW4gaW4gcG9zaXRpb25cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIudXBkYXRlU2NlbmUoU2NlbmUsIGZhbHNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgZHluYW1pYyBzY2VuZSB2YXJpYWJsZXMgbGlrZSB0aGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIG9yIHRoZSBkdXJhdGlvbi5cclxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIuIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gb3B0aW9uIGByZWZyZXNoSW50ZXJ2YWxgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBZb3UgY2FuIGNhbGwgaXQgdG8gbWluaW1pemUgbGFnLCBmb3IgZXhhbXBsZSB3aGVuIHlvdSBpbnRlbnRpb25hbGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50LlxyXG5cdFx0ICogSWYgeW91IGRvbid0IGl0IHdpbGwgc2ltcGx5IGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgcmVmcmVzaCBpbnRlcnZhbCBvZiB0aGUgY29udGFpbmVyLCB3aGljaCBpcyB1c3VhbGx5IHN1ZmZpY2llbnQuXHJcblx0XHQgKlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZWZyZXNoXHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7dHJpZ2dlckVsZW1lbnQ6IFwiI3RyaWdnZXJcIn0pO1xyXG5cdFx0ICogXHJcblx0XHQgKiAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyXHJcblx0XHQgKiAkKFwiI3RyaWdnZXJcIikuY3NzKFwidG9wXCIsIDUwMCk7XHJcblx0XHQgKiAvLyBpbW1lZGlhdGVseSBsZXQgdGhlIHNjZW5lIGtub3cgb2YgdGhpcyBjaGFuZ2VcclxuXHRcdCAqIHNjZW5lLnJlZnJlc2goKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dXBkYXRlRHVyYXRpb24oKTtcclxuXHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xyXG5cdFx0XHQvLyB1cGRhdGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uXHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHNjZW5lJ3MgcHJvZ3Jlc3MuICBcclxuXHRcdCAqIFVzdWFsbHkgaXQgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSB0byB1c2UgdGhpcyBhcyBhIHNldHRlciwgYXMgaXQgaXMgc2V0IGF1dG9tYXRpY2FsbHkgYnkgc2NlbmUudXBkYXRlKCkuICBcclxuXHRcdCAqIFRoZSBvcmRlciBpbiB3aGljaCB0aGUgZXZlbnRzIGFyZSBmaXJlZCBkZXBlbmRzIG9uIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmU6XHJcblx0XHQgKiAgMS4gU2NlbmVzIHdpdGggYGR1cmF0aW9uID09IDBgOiAgXHJcblx0XHQgKiAgU2NlbmVzIHRoYXQgaGF2ZSBubyBkdXJhdGlvbiBieSBkZWZpbml0aW9uIGhhdmUgbm8gZW5kaW5nLiBUaHVzIHRoZSBgZW5kYCBldmVudCB3aWxsIG5ldmVyIGJlIGZpcmVkLiAgXHJcblx0XHQgKiAgV2hlbiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXMgcGFzc2VkIHRoZSBldmVudHMgYXJlIGFsd2F5cyBmaXJlZCBpbiB0aGlzIG9yZGVyOiAgXHJcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCB3aGVuIHNjcm9sbGluZyBmb3J3YXJkICBcclxuXHRcdCAqICBhbmQgIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgd2hlbiBzY3JvbGxpbmcgaW4gcmV2ZXJzZVxyXG5cdFx0ICogIDIuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA+IDBgOiAgXHJcblx0XHQgKiAgU2NlbmVzIHdpdGggYSBzZXQgZHVyYXRpb24gaGF2ZSBhIGRlZmluZWQgc3RhcnQgYW5kIGVuZCBwb2ludC4gIFxyXG5cdFx0ICogIFdoZW4gc2Nyb2xsaW5nIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzIGluIHRoaXMgb3JkZXI6ICBcclxuXHRcdCAqICBgZW50ZXJgLCBgc3RhcnRgLCBgcHJvZ3Jlc3NgICBcclxuXHRcdCAqICBXaGVuIGNvbnRpbnVpbmcgdG8gc2Nyb2xsIGFuZCBwYXNzaW5nIHRoZSBlbmQgcG9pbnQgaXQgd2lsbCBmaXJlIHRoZXNlIGV2ZW50czogIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBlbmRgLCBgbGVhdmVgICBcclxuXHRcdCAqICBXaGVuIHJldmVyc2luZyB0aHJvdWdoIHRoZSBlbmQgcG9pbnQgdGhlc2UgZXZlbnRzIGFyZSBmaXJlZDogIFxyXG5cdFx0ICogIGBlbnRlcmAsIGBlbmRgLCBgcHJvZ3Jlc3NgICBcclxuXHRcdCAqICBBbmQgd2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBpbiByZXZlcnNlIGl0IHdpbGwgZmlyZTogIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgIFxyXG5cdFx0ICogIEluIGJldHdlZW4gc3RhcnQgYW5kIGVuZCB0aGUgYHByb2dyZXNzYCBldmVudCB3aWxsIGJlIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciB0aGUgcHJvZ3Jlc3MgY2hhbmdlcy5cclxuXHRcdCAqIFxyXG5cdFx0ICogSW4gc2hvcnQ6ICBcclxuXHRcdCAqIGBlbnRlcmAgZXZlbnRzIHdpbGwgYWx3YXlzIHRyaWdnZXIgKipiZWZvcmUqKiB0aGUgcHJvZ3Jlc3MgdXBkYXRlIGFuZCBgbGVhdmVgIGVudmVudHMgd2lsbCB0cmlnZ2VyICoqYWZ0ZXIqKiB0aGUgcHJvZ3Jlc3MgdXBkYXRlLiAgXHJcblx0XHQgKiBgc3RhcnRgIGFuZCBgZW5kYCB3aWxsIGFsd2F5cyB0cmlnZ2VyIGF0IHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb24uXHJcblx0XHQgKiBcclxuXHRcdCAqIFBsZWFzZSByZXZpZXcgdGhlIGV2ZW50IGRlc2NyaXB0aW9ucyBmb3IgZGV0YWlscyBvbiB0aGUgZXZlbnRzIGFuZCB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIFxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNwcm9ncmVzc1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY2VuZSBwcm9ncmVzc1xyXG5cdFx0ICogdmFyIHByb2dyZXNzID0gc2NlbmUucHJvZ3Jlc3MoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgbmV3IHNjZW5lIHByb2dyZXNzXHJcblx0XHQgKiBzY2VuZS5wcm9ncmVzcygwLjMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW50ZXJ9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnN0YXJ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5wcm9ncmVzc30sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW5kfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5sZWF2ZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW3Byb2dyZXNzXSAtIFRoZSBuZXcgcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIHNjZW5lIGBbMC0xXWAuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIHByb2dyZXNzLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9wcm9ncmVzcztcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0b2xkU3RhdGUgPSBfc3RhdGUsXHJcblx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSBfY29udHJvbGxlciA/IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxEaXJlY3Rpb25cIikgOiAnUEFVU0VEJyxcclxuXHRcdFx0XHRcdHJldmVyc2VPckZvcndhcmQgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IHByb2dyZXNzID49IF9wcm9ncmVzcztcclxuXHRcdFx0XHRpZiAoX29wdGlvbnMuZHVyYXRpb24gPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIHplcm8gZHVyYXRpb24gc2NlbmVzXHJcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IF9wcm9ncmVzcyAhPSBwcm9ncmVzcztcclxuXHRcdFx0XHRcdF9wcm9ncmVzcyA9IHByb2dyZXNzIDwgMSAmJiByZXZlcnNlT3JGb3J3YXJkID8gMCA6IDE7XHJcblx0XHRcdFx0XHRfc3RhdGUgPSBfcHJvZ3Jlc3MgPT09IDAgPyBTQ0VORV9TVEFURV9CRUZPUkUgOiBTQ0VORV9TVEFURV9EVVJJTkc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHNjZW5lcyB3aXRoIHN0YXJ0IGFuZCBlbmRcclxuXHRcdFx0XHRcdGlmIChwcm9ncmVzcyA8IDAgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xyXG5cdFx0XHRcdFx0XHQvLyBnbyBiYWNrIHRvIGluaXRpYWwgc3RhdGVcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMDtcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFO1xyXG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPCAxICYmIHJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0RVUklORztcclxuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQUZURVIpIHtcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMTtcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQUZURVI7XHJcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIXJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTsgLy8gaW4gY2FzZSB3ZSBzY3JvbGxlZCBiYWNrd2FyZHMgbWlkLXNjZW5lIGFuZCByZXZlcnNlIGlzIGRpc2FibGVkID0+IHVwZGF0ZSB0aGUgcGluIHBvc2l0aW9uLCBzbyBpdCBkb2Vzbid0IG1vdmUgYmFjayBhcyB3ZWxsLlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZG9VcGRhdGUpIHtcclxuXHRcdFx0XHRcdC8vIGZpcmUgZXZlbnRzXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0ZXZlbnRWYXJzID0ge1xyXG5cdFx0XHRcdFx0XHRcdHByb2dyZXNzOiBfcHJvZ3Jlc3MsXHJcblx0XHRcdFx0XHRcdFx0c3RhdGU6IF9zdGF0ZSxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvblxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZUNoYW5nZWQgPSBfc3RhdGUgIT0gb2xkU3RhdGU7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7IC8vIHRtcCBoZWxwZXIgdG8gc2ltcGxpZnkgY29kZVxyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnRWYXJzKTtcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlQ2hhbmdlZCkgeyAvLyBlbnRlciBldmVudHNcclxuXHRcdFx0XHRcdFx0aWYgKG9sZFN0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwiZW50ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihvbGRTdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRyaWdnZXIoXCJwcm9ncmVzc1wiKTtcclxuXHRcdFx0XHRcdGlmIChzdGF0ZUNoYW5nZWQpIHsgLy8gbGVhdmUgZXZlbnRzXHJcblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgPyBcInN0YXJ0XCIgOiBcImVuZFwiKTtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwibGVhdmVcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXJ0IGFuZCBlbmQgc2Nyb2xsT2Zmc2V0IG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBUaGUgcG9zaXRpb25zIHJlZmxlY3Qgd2hhdCB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiB3aWxsIGJlIGF0IHRoZSBzdGFydCBhbmQgZW5kIHJlc3BlY3RpdmVseS5cclxuXHRcdCAqIElzIGNhbGxlZCwgd2hlbjpcclxuXHRcdCAqICAgLSBTY2VuZSBldmVudCBcImNoYW5nZVwiIGlzIGNhbGxlZCB3aXRoOiBvZmZzZXQsIHRyaWdnZXJIb29rLCBkdXJhdGlvbiBcclxuXHRcdCAqICAgLSBzY3JvbGwgY29udGFpbmVyIGV2ZW50IFwicmVzaXplXCIgaXMgY2FsbGVkXHJcblx0XHQgKiAgIC0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudCBjaGFuZ2VzXHJcblx0XHQgKiAgIC0gdGhlIGNvbnRyb2xsZXIgY2hhbmdlcyAtPiBhZGRUbygpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlU2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHN0YXJ0OiBfdHJpZ2dlclBvcyArIF9vcHRpb25zLm9mZnNldFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcclxuXHRcdFx0XHQvLyB0YWtlIGF3YXkgdHJpZ2dlckhvb2sgcG9ydGlvbiB0byBnZXQgcmVsYXRpdmUgdG8gdG9wXHJcblx0XHRcdFx0X3Njcm9sbE9mZnNldC5zdGFydCAtPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIF9vcHRpb25zLnRyaWdnZXJIb29rO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9zY3JvbGxPZmZzZXQuZW5kID0gX3Njcm9sbE9mZnNldC5zdGFydCArIF9vcHRpb25zLmR1cmF0aW9uO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIGR1cmF0aW9uIGlmIHNldCB0byBhIGR5bmFtaWMgZnVuY3Rpb24uXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyIGFuZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlRHVyYXRpb24gPSBmdW5jdGlvbiAoc3VwcHJlc3NFdmVudHMpIHtcclxuXHRcdFx0Ly8gdXBkYXRlIGR1cmF0aW9uXHJcblx0XHRcdGlmIChfZHVyYXRpb25VcGRhdGVNZXRob2QpIHtcclxuXHRcdFx0XHR2YXIgdmFybmFtZSA9IFwiZHVyYXRpb25cIjtcclxuXHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKHZhcm5hbWUsIF9kdXJhdGlvblVwZGF0ZU1ldGhvZC5jYWxsKFNjZW5lKSkgJiYgIXN1cHByZXNzRXZlbnRzKSB7IC8vIHNldFxyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XHJcblx0XHRcdFx0XHRcdHdoYXQ6IHZhcm5hbWUsXHJcblx0XHRcdFx0XHRcdG5ld3ZhbDogX29wdGlvbnNbdmFybmFtZV1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0cmVhc29uOiB2YXJuYW1lXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQsIGlmIHByZXNlbnQuXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgLi4uXHJcblx0XHQgKiAgLSAuLi4gd2hlbiB0aGUgdHJpZ2dlckVsZW1lbnQgaXMgY2hhbmdlZFxyXG5cdFx0ICogIC0gLi4uIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgKG5ldykgY29udHJvbGxlclxyXG5cdFx0ICogIC0gLi4uIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIgdGhyb3VnaCBzY2VuZS5yZWZyZXNoKCkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCBpZiB0aGUgcG9zaXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1cHByZXNzRXZlbnRzKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGVsZW1lbnRQb3MgPSAwLFxyXG5cdFx0XHRcdHRlbGVtID0gX29wdGlvbnMudHJpZ2dlckVsZW1lbnQ7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiAodGVsZW0gfHwgX3RyaWdnZXJQb3MgPiAwKSkgeyAvLyBlaXRoZXIgYW4gZWxlbWVudCBleGlzdHMgb3Igd2FzIHJlbW92ZWQgYW5kIHRoZSB0cmlnZ2VyUG9zIGlzIHN0aWxsID4gMFxyXG5cdFx0XHRcdGlmICh0ZWxlbSkgeyAvLyB0aGVyZSBjdXJyZW50bHkgYSB0cmlnZ2VyRWxlbWVudCBzZXRcclxuXHRcdFx0XHRcdGlmICh0ZWxlbS5wYXJlbnROb2RlKSB7IC8vIGNoZWNrIGlmIGVsZW1lbnQgaXMgc3RpbGwgYXR0YWNoZWQgdG8gRE9NXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoY29udHJvbGxlckluZm8uY29udGFpbmVyKSwgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0XHRcdHBhcmFtID0gY29udHJvbGxlckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCI7IC8vIHdoaWNoIHBhcmFtIGlzIG9mIGludGVyZXN0ID9cclxuXHJcblx0XHRcdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0XHRcdHdoaWxlICh0ZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0ZWxlbSA9IHRlbGVtLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciBlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldCh0ZWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWNvbnRyb2xsZXJJbmZvLmlzRG9jdW1lbnQpIHsgLy8gY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgcm9vdCwgc28gc3Vic3RyYWN0IHNjcm9sbCBQb3NpdGlvbiB0byBnZXQgY29ycmVjdCB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2Nyb2xsY29udGVudFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldFtwYXJhbV0gLT0gX2NvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRQb3MgPSBlbGVtZW50T2Zmc2V0W3BhcmFtXSAtIGNvbnRhaW5lck9mZnNldFtwYXJhbV07XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHsgLy8gdGhlcmUgd2FzIGFuIGVsZW1lbnQsIGJ1dCBpdCB3YXMgcmVtb3ZlZCBmcm9tIERPTVxyXG5cdFx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiB0cmlnZ2VyRWxlbWVudCB3YXMgcmVtb3ZlZCBmcm9tIERPTSBhbmQgd2lsbCBiZSByZXNldCB0b1wiLCB1bmRlZmluZWQpO1xyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyRWxlbWVudCh1bmRlZmluZWQpOyAvLyB1bnNldCwgc28gYSBjaGFuZ2UgZXZlbnQgaXMgdHJpZ2dlcmVkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgY2hhbmdlZCA9IGVsZW1lbnRQb3MgIT0gX3RyaWdnZXJQb3M7XHJcblx0XHRcdFx0X3RyaWdnZXJQb3MgPSBlbGVtZW50UG9zO1xyXG5cdFx0XHRcdGlmIChjaGFuZ2VkICYmICFzdXBwcmVzc0V2ZW50cykge1xyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0cmVhc29uOiBcInRyaWdnZXJFbGVtZW50UG9zaXRpb25cIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJpZ2dlciBhIHNoaWZ0IGV2ZW50LCB3aGVuIHRoZSBjb250YWluZXIgaXMgcmVzaXplZCBhbmQgdGhlIHRyaWdnZXJIb29rIGlzID4gMS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBvbkNvbnRhaW5lclJlc2l6ZSA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VySG9vayA+IDApIHtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0cmVhc29uOiBcImNvbnRhaW5lclJlc2l6ZVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHZhciBfdmFsaWRhdGUgPSBfdXRpbC5leHRlbmQoU0NFTkVfT1BUSU9OUy52YWxpZGF0ZSwge1xyXG5cdFx0XHQvLyB2YWxpZGF0aW9uIGZvciBkdXJhdGlvbiBoYW5kbGVkIGludGVybmFsbHkgZm9yIHJlZmVyZW5jZSB0byBwcml2YXRlIHZhciBfZHVyYXRpb25NZXRob2RcclxuXHRcdFx0ZHVyYXRpb246IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5TdHJpbmcodmFsKSAmJiB2YWwubWF0Y2goL14oXFwufFxcZCkqXFxkKyUkLykpIHtcclxuXHRcdFx0XHRcdC8vIHBlcmNlbnRhZ2UgdmFsdWVcclxuXHRcdFx0XHRcdHZhciBwZXJjID0gcGFyc2VGbG9hdCh2YWwpIC8gMTAwO1xyXG5cdFx0XHRcdFx0dmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIHBlcmMgOiAwO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24odmFsKSkge1xyXG5cdFx0XHRcdFx0Ly8gZnVuY3Rpb25cclxuXHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHZhbDtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQoX2R1cmF0aW9uVXBkYXRlTWV0aG9kLmNhbGwoU2NlbmUpKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0dmFsID0gLTE7IC8vIHdpbGwgY2F1c2UgZXJyb3IgYmVsb3dcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdmFsIGhhcyB0byBiZSBmbG9hdFxyXG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcclxuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCkge1xyXG5cdFx0XHRcdFx0aWYgKF9kdXJhdGlvblVwZGF0ZU1ldGhvZCkge1xyXG5cdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgcmV0dXJuIHZhbHVlIG9mIHN1cHBsaWVkIGZ1bmN0aW9uIGZvciBvcHRpb24gXFxcImR1cmF0aW9uXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgYSBzcGVjaWZpYyBvciBhbGwgb3B0aW9ucyBhbmQgcmVzZXQgdG8gZGVmYXVsdCBpZiBuZWNjZXNzYXJ5LlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHZhbGlkYXRlT3B0aW9uID0gZnVuY3Rpb24gKGNoZWNrKSB7XHJcblx0XHRcdGNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA/IFtjaGVja10gOiBPYmplY3Qua2V5cyhfdmFsaWRhdGUpO1xyXG5cdFx0XHRjaGVjay5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25OYW1lLCBrZXkpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWU7XHJcblx0XHRcdFx0aWYgKF92YWxpZGF0ZVtvcHRpb25OYW1lXSkgeyAvLyB0aGVyZSBpcyBhIHZhbGlkYXRpb24gbWV0aG9kIGZvciB0aGlzIG9wdGlvblxyXG5cdFx0XHRcdFx0dHJ5IHsgLy8gdmFsaWRhdGUgdmFsdWVcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBfdmFsaWRhdGVbb3B0aW9uTmFtZV0oX29wdGlvbnNbb3B0aW9uTmFtZV0pO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyB2YWxpZGF0aW9uIGZhaWxlZCAtPiByZXNldCB0byBkZWZhdWx0XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gREVGQVVMVF9PUFRJT05TW29wdGlvbk5hbWVdO1xyXG5cdFx0XHRcdFx0XHR2YXIgbG9nTVNHID0gX3V0aWwudHlwZS5TdHJpbmcoZSkgPyBbZV0gOiBlO1xyXG5cdFx0XHRcdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShsb2dNU0cpKSB7XHJcblx0XHRcdFx0XHRcdFx0bG9nTVNHWzBdID0gXCJFUlJPUjogXCIgKyBsb2dNU0dbMF07XHJcblx0XHRcdFx0XHRcdFx0bG9nTVNHLnVuc2hpZnQoMSk7IC8vIGxvZ2xldmVsIDEgZm9yIGVycm9yIG1zZ1xyXG5cdFx0XHRcdFx0XHRcdGxvZy5hcHBseSh0aGlzLCBsb2dNU0cpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBQcm9ibGVtIGV4ZWN1dGluZyB2YWxpZGF0aW9uIGNhbGxiYWNrIGZvciBvcHRpb24gJ1wiICsgb3B0aW9uTmFtZSArIFwiJzpcIiwgZS5tZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRcdFx0X29wdGlvbnNbb3B0aW9uTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhlbHBlciB1c2VkIGJ5IHRoZSBzZXR0ZXIvZ2V0dGVycyBmb3Igc2NlbmUgb3B0aW9uc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNoYW5nZU9wdGlvbiA9IGZ1bmN0aW9uICh2YXJuYW1lLCBuZXd2YWwpIHtcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0Y2hhbmdlZCA9IGZhbHNlLFxyXG5cdFx0XHRcdG9sZHZhbCA9IF9vcHRpb25zW3Zhcm5hbWVdO1xyXG5cdFx0XHRpZiAoX29wdGlvbnNbdmFybmFtZV0gIT0gbmV3dmFsKSB7XHJcblx0XHRcdFx0X29wdGlvbnNbdmFybmFtZV0gPSBuZXd2YWw7XHJcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24odmFybmFtZSk7IC8vIHJlc2V0cyB0byBkZWZhdWx0IGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGNoYW5nZWQgPSBvbGR2YWwgIT0gX29wdGlvbnNbdmFybmFtZV07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdlbmVyYXRlIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIG9wdGlvbnNcclxuXHRcdHZhciBhZGRTY2VuZU9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25OYW1lKSB7XHJcblx0XHRcdGlmICghU2NlbmVbb3B0aW9uTmFtZV0pIHtcclxuXHRcdFx0XHRTY2VuZVtvcHRpb25OYW1lXSA9IGZ1bmN0aW9uIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRcdFx0cmV0dXJuIF9vcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbk5hbWUgPT09IFwiZHVyYXRpb25cIikgeyAvLyBuZXcgZHVyYXRpb24gaXMgc2V0LCBzbyBhbnkgcHJldmlvdXNseSBzZXQgZnVuY3Rpb24gbXVzdCBiZSB1bnNldFxyXG5cdFx0XHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKG9wdGlvbk5hbWUsIG5ld1ZhbCkpIHsgLy8gc2V0XHJcblx0XHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHR3aGF0OiBvcHRpb25OYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3dmFsOiBfb3B0aW9uc1tvcHRpb25OYW1lXVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChTQ0VORV9PUFRJT05TLnNoaWZ0cy5pbmRleE9mKG9wdGlvbk5hbWUpID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlYXNvbjogb3B0aW9uTmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgZHVyYXRpb24gb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEFzIGEgKipzZXR0ZXIqKiBpdCBhY2NlcHRzIHRocmVlIHR5cGVzIG9mIHBhcmFtZXRlcnM6XHJcblx0XHQgKiAxLiBgbnVtYmVyYDogU2V0cyB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lIHRvIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzLiAgXHJcblx0XHQgKiAgIFRoaXMgbWVhbnMgdGhlIHNjZW5lIHdpbGwgbGFzdCBmb3IgZXhhY3RseSB0aGlzIGFtb3VudCBvZiBwaXhlbHMgc2Nyb2xsZWQuIFN1Yi1QaXhlbHMgYXJlIGFsc28gdmFsaWQuXHJcblx0XHQgKiAgIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoYXQgdGhlIHNjZW5lIGlzICdvcGVuIGVuZCcgYW5kIG5vIGVuZCB3aWxsIGJlIHRyaWdnZXJlZC4gUGlucyB3aWxsIG5ldmVyIHVucGluIGFuZCBhbmltYXRpb25zIHdpbGwgcGxheSBpbmRlcGVuZGVudGx5IG9mIHNjcm9sbCBwcm9ncmVzcy5cclxuXHRcdCAqIDIuIGBzdHJpbmdgOiBBbHdheXMgdXBkYXRlcyB0aGUgZHVyYXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IHNjcm9sbCBjb250YWluZXIuICBcclxuXHRcdCAqICAgRm9yIGV4YW1wbGUgYFwiMTAwJVwiYCB3aWxsIGtlZXAgdGhlIGR1cmF0aW9uIGFsd2F5cyBleGFjdGx5IGF0IHRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIHNjcm9sbCBjb250YWluZXIuXHJcblx0XHQgKiAgIFdoZW4gc2Nyb2xsaW5nIHZlcnRpY2FsbHkgdGhlIHdpZHRoIGlzIHVzZWQgZm9yIHJlZmVyZW5jZSByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiAzLiBgZnVuY3Rpb25gOiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gcmV0dXJuIHRoZSBzY2VuZSBkdXJhdGlvbi5cclxuXHRcdCAqICAgVGhpcyBpcyB1c2VmdWwgaW4gc2V0dXBzIHdoZXJlIHRoZSBkdXJhdGlvbiBkZXBlbmRzIG9uIG90aGVyIGVsZW1lbnRzIHdobyBtaWdodCBjaGFuZ2Ugc2l6ZS4gQnkgc3VwcGx5aW5nIGEgZnVuY3Rpb24geW91IGNhbiByZXR1cm4gYSB2YWx1ZSBpbnN0ZWFkIG9mIHVwZGF0aW5nIHBvdGVudGlhbGx5IG11bHRpcGxlIHNjZW5lIGR1cmF0aW9ucy4gIFxyXG5cdFx0ICogICBUaGUgc2NlbmUgY2FuIGJlIHJlZmVyZW5jZWQgaW5zaWRlIHRoZSBjYWxsYmFjayB1c2luZyBgdGhpc2AuXHJcblx0XHQgKiAgIF8qKldBUk5JTkc6KiogVGhpcyBpcyBhbiBlYXN5IHdheSB0byBraWxsIHBlcmZvcm1hbmNlLCBhcyB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBldmVyeSB0aW1lIGBTY2VuZS5yZWZyZXNoKClgIGlzIGNhbGxlZCwgd2hpY2ggaGFwcGVucyBhIGxvdC4gVGhlIGludGVydmFsIGlzIGRlZmluZWQgYnkgdGhlIGNvbnRyb2xsZXIgKHNlZSBTY3JvbGxNYWdpYy5Db250cm9sbGVyIG9wdGlvbiBgcmVmcmVzaEludGVydmFsYCkuICBcclxuXHRcdCAqICAgSXQncyByZWNvbWVuZGVkIHRvIGF2b2lkIGNhbGN1bGF0aW9ucyB3aXRoaW4gdGhlIGZ1bmN0aW9uIGFuZCB1c2UgY2FjaGVkIHZhcmlhYmxlcyBhcyByZXR1cm4gdmFsdWVzLiAgXHJcblx0XHQgKiAgIFRoaXMgY291bnRzIGRvdWJsZSBpZiB5b3UgdXNlIHRoZSBzYW1lIGZ1bmN0aW9uIGZvciBtdWx0aXBsZSBzY2VuZXMuX1xyXG5cdFx0ICpcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZHVyYXRpb25cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgZHVyYXRpb24gdmFsdWVcclxuXHRcdCAqIHZhciBkdXJhdGlvbiA9IHNjZW5lLmR1cmF0aW9uKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IGR1cmF0aW9uXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbigzMDApO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBkdXJhdGlvbiByZXNwb25zaXZlbHkgdG8gY29udGFpbmVyIHNpemVcclxuXHRcdCAqIHNjZW5lLmR1cmF0aW9uKFwiMTAwJVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1c2UgYSBmdW5jdGlvbiB0byByYW5kb21pemUgdGhlIGR1cmF0aW9uIGZvciBzb21lIHJlYXNvbi5cclxuXHRcdCAqIHZhciBkdXJhdGlvblZhbHVlQ2FjaGU7XHJcblx0XHQgKiBmdW5jdGlvbiBkdXJhdGlvbkNhbGxiYWNrICgpIHtcclxuXHRcdCAqICAgcmV0dXJuIGR1cmF0aW9uVmFsdWVDYWNoZTtcclxuXHRcdCAqIH1cclxuXHRcdCAqIGZ1bmN0aW9uIHVwZGF0ZUR1cmF0aW9uICgpIHtcclxuXHRcdCAqICAgZHVyYXRpb25WYWx1ZUNhY2hlID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcclxuXHRcdCAqIH1cclxuXHRcdCAqIHVwZGF0ZUR1cmF0aW9uKCk7IC8vIHNldCB0byBpbml0aWFsIHZhbHVlXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbihkdXJhdGlvbkNhbGxiYWNrKTsgLy8gc2V0IGR1cmF0aW9uIGNhbGxiYWNrXHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZ3xmdW5jdGlvbil9IFtuZXdEdXJhdGlvbl0gLSBUaGUgbmV3IGR1cmF0aW9uIHNldHRpbmcgZm9yIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgZHVyYXRpb24uXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIG9mZnNldCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZnNldFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBvZmZzZXRcclxuXHRcdCAqIHZhciBvZmZzZXQgPSBzY2VuZS5vZmZzZXQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgb2Zmc2V0XHJcblx0XHQgKiBzY2VuZS5vZmZzZXQoMTAwKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld09mZnNldF0gLSBUaGUgbmV3IG9mZnNldCBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIG9mZnNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckVsZW1lbnQgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogRG9lcyAqKm5vdCoqIGZpcmUgYFNjZW5lLnNoaWZ0YCwgYmVjYXVzZSBjaGFuZ2luZyB0aGUgdHJpZ2dlciBFbGVtZW50IGRvZXNuJ3QgbmVjZXNzYXJpbHkgbWVhbiB0aGUgc3RhcnQgcG9zaXRpb24gY2hhbmdlcy4gVGhpcyB3aWxsIGJlIGRldGVybWluZWQgaW4gYFNjZW5lLnJlZnJlc2goKWAsIHdoaWNoIGlzIGF1dG9tYXRpY2FsbHkgdHJpZ2dlcmVkLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyRWxlbWVudFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VyRWxlbWVudFxyXG5cdFx0ICogdmFyIHRyaWdnZXJFbGVtZW50ID0gc2NlbmUudHJpZ2dlckVsZW1lbnQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBzZWxlY3RvclxyXG5cdFx0ICogc2NlbmUudHJpZ2dlckVsZW1lbnQoXCIjdHJpZ2dlclwiKTtcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VyRWxlbWVudCB1c2luZyBhIERPTSBvYmplY3RcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJpZ2dlclwiKSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW25ld1RyaWdnZXJFbGVtZW50XSAtIFRoZSBuZXcgdHJpZ2dlciBlbGVtZW50IGZvciB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7KHN0cmluZ3xvYmplY3QpfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJFbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0cmlnZ2VySG9vayBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJIb29rXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHRyaWdnZXJIb29rIHZhbHVlXHJcblx0XHQgKiB2YXIgdHJpZ2dlckhvb2sgPSBzY2VuZS50cmlnZ2VySG9vaygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIHN0cmluZ1xyXG5cdFx0ICogc2NlbmUudHJpZ2dlckhvb2soXCJvbkxlYXZlXCIpO1xyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJIb29rIHVzaW5nIGEgbnVtYmVyXHJcblx0XHQgKiBzY2VuZS50cmlnZ2VySG9vaygwLjcpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbbmV3VHJpZ2dlckhvb2tdIC0gVGhlIG5ldyB0cmlnZ2VySG9vayBvZiB0aGUgc2NlbmUuIFNlZSB7QGxpbmsgU2NlbmV9IHBhcmFtZXRlciBkZXNjcmlwdGlvbiBmb3IgdmFsdWUgb3B0aW9ucy5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgdHJpZ2dlckhvb2sgKEFMV0FZUyBudW1lcmljYWwpLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmV2ZXJzZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCByZXZlcnNlIG9wdGlvblxyXG5cdFx0ICogdmFyIHJldmVyc2UgPSBzY2VuZS5yZXZlcnNlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IG5ldyByZXZlcnNlIG9wdGlvblxyXG5cdFx0ICogc2NlbmUucmV2ZXJzZShmYWxzZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdSZXZlcnNlXSAtIFRoZSBuZXcgcmV2ZXJzZSBzZXR0aW5nIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBgZ2V0YCAtICBDdXJyZW50IHJldmVyc2Ugb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2xvZ2xldmVsXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IGxvZ2xldmVsXHJcblx0XHQgKiB2YXIgbG9nbGV2ZWwgPSBzY2VuZS5sb2dsZXZlbCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBuZXcgbG9nbGV2ZWxcclxuXHRcdCAqIHNjZW5lLmxvZ2xldmVsKDMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIHNjZW5lLiBgWzAtM11gXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IGxvZ2xldmVsLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgYXNzb2NpYXRlZCBjb250cm9sbGVyLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNjb250cm9sbGVyXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjb250cm9sbGVyIG9mIGEgc2NlbmVcclxuXHRcdCAqIHZhciBjb250cm9sbGVyID0gc2NlbmUuY29udHJvbGxlcigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBQYXJlbnQgY29udHJvbGxlciBvciBgdW5kZWZpbmVkYFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfY29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzdGF0ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdFx0ICogdmFyIHN0YXRlID0gc2NlbmUuc3RhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBgXCJCRUZPUkVcImAsIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3N0YXRlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogTWluZCwgdGhhdCB0aGUgc2Nyb2xsT2Zmc2V0IGlzIHJlbGF0ZWQgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciwgaWYgYHRyaWdnZXJIb29rYCBpcyBiaWdnZXIgdGhhbiBgMGAgKG9yIGBcIm9uTGVhdmVcImApLiAgXHJcblx0XHQgKiBUaGlzIG1lYW5zLCB0aGF0IHJlc2l6aW5nIHRoZSBjb250YWluZXIgb3IgY2hhbmdpbmcgdGhlIGB0cmlnZ2VySG9va2Agd2lsbCBpbmZsdWVuY2UgdGhlIHNjZW5lJ3Mgc3RhcnQgb2Zmc2V0LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzY3JvbGxPZmZzZXRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogdmFyIHN0YXJ0ID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHQgKiB2YXIgZW5kID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCkgKyBzY2VuZS5kdXJhdGlvbigpO1xyXG5cdFx0ICogY29uc29sZS5sb2coXCJ0aGUgc2NlbmUgc3RhcnRzIGF0XCIsIHN0YXJ0LCBcImFuZCBlbmRzIGF0XCIsIGVuZCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIHNjcm9sbCBvZmZzZXQgKG9mIHRoZSBjb250YWluZXIpIGF0IHdoaWNoIHRoZSBzY2VuZSB3aWxsIHRyaWdnZXIuIFkgdmFsdWUgZm9yIHZlcnRpY2FsIGFuZCBYIHZhbHVlIGZvciBob3Jpem9udGFsIHNjcm9sbHMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3Njcm9sbE9mZnNldC5zdGFydDtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSB0cmlnZ2VyIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW5jbHVkaW5nIHRoZSB2YWx1ZSBvZiB0aGUgYG9mZnNldGAgb3B0aW9uKS4gIFxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyUG9zaXRpb25cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIHNjZW5lJ3MgdHJpZ2dlciBwb3NpdGlvblxyXG5cdFx0ICogdmFyIHRyaWdnZXJQb3NpdGlvbiA9IHNjZW5lLnRyaWdnZXJQb3NpdGlvbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gVG9wIHBvc2l0aW9uIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgbGVmdCBwb3NpdGlvbiB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnRyaWdnZXJQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHBvcyA9IF9vcHRpb25zLm9mZnNldDsgLy8gdGhlIG9mZnNldCBpcyB0aGUgYmFzaXNcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0Ly8gZ2V0IHRoZSB0cmlnZ2VyIHBvc2l0aW9uXHJcblx0XHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XHJcblx0XHRcdFx0XHQvLyBFbGVtZW50IGFzIHRyaWdnZXJcclxuXHRcdFx0XHRcdHBvcyArPSBfdHJpZ2dlclBvcztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHRyaWdnZXJIb29rIHRvIHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmdcclxuXHRcdFx0XHRcdHBvcyArPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIFNjZW5lLnRyaWdnZXJIb29rKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwb3M7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0X3BpbixcclxuXHRcdFx0X3Bpbk9wdGlvbnM7XHJcblxyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwic2hpZnQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgZHVyYXRpb25DaGFuZ2VkID0gZS5yZWFzb24gPT09IFwiZHVyYXRpb25cIjtcclxuXHRcdFx0XHRpZiAoKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIgJiYgZHVyYXRpb25DaGFuZ2VkKSB8fCAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgX29wdGlvbnMuZHVyYXRpb24gPT09IDApKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBbZHVyYXRpb24gY2hhbmdlZCBhZnRlciBhIHNjZW5lIChpbnNpZGUgc2NlbmUgcHJvZ3Jlc3MgdXBkYXRlcyBwaW4gcG9zaXRpb24pXSBvciBbZHVyYXRpb24gaXMgMCwgd2UgYXJlIGluIHBpbiBwaGFzZSBhbmQgc29tZSBvdGhlciB2YWx1ZSBjaGFuZ2VkXS5cclxuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkdXJhdGlvbkNoYW5nZWQpIHtcclxuXHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcInByb2dyZXNzLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwiYWRkLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJkZXN0cm95LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKGUucmVzZXQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSBwaW4gc3RhdGUuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluU3RhdGUgPSBmdW5jdGlvbiAoZm9yY2VVbnBpbikge1xyXG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0Y29udGFpbmVySW5mbyA9IF9jb250cm9sbGVyLmluZm8oKSxcclxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyBtYXkgYmUgcGluIGVsZW1lbnQgb3IgYW5vdGhlciBzcGFjZXIsIGlmIGNhc2NhZGluZyBwaW5zXHJcblxyXG5cdFx0XHRcdGlmICghZm9yY2VVbnBpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykgeyAvLyBkdXJpbmcgc2NlbmUgb3IgaWYgZHVyYXRpb24gaXMgMCBhbmQgd2UgYXJlIHBhc3QgdGhlIHRyaWdnZXJcclxuXHRcdFx0XHRcdC8vIHBpbm5lZCBzdGF0ZVxyXG5cdFx0XHRcdFx0aWYgKF91dGlsLmNzcyhwaW5UYXJnZXQsIFwicG9zaXRpb25cIikgIT0gXCJmaXhlZFwiKSB7XHJcblx0XHRcdFx0XHRcdC8vIGNoYW5nZSBzdGF0ZSBiZWZvcmUgdXBkYXRpbmcgcGluIHNwYWNlciAocG9zaXRpb24gY2hhbmdlcyBkdWUgdG8gZml4ZWQgY29sbGFwc2luZyBtaWdodCBvY2N1ci4pXHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIHtcclxuXHRcdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXJcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRmaXhlZFBvcyA9IF91dGlsLmdldC5vZmZzZXQoX3Bpbk9wdGlvbnMuc3BhY2VyLCB0cnVlKSwgLy8gZ2V0IHZpZXdwb3J0IHBvc2l0aW9uIG9mIHNwYWNlclxyXG5cdFx0XHRcdFx0XHRzY3JvbGxEaXN0YW5jZSA9IF9vcHRpb25zLnJldmVyc2UgfHwgX29wdGlvbnMuZHVyYXRpb24gPT09IDAgP1xyXG5cdFx0XHRcdFx0XHRjb250YWluZXJJbmZvLnNjcm9sbFBvcyAtIF9zY3JvbGxPZmZzZXQuc3RhcnQgLy8gcXVpY2tlclxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3Byb2dyZXNzICogX29wdGlvbnMuZHVyYXRpb24gKiAxMCkgLyAxMDsgLy8gaWYgbm8gcmV2ZXJzZSBhbmQgZHVyaW5nIHBpbiB0aGUgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkIHVzaW5nIHRoZSBwcm9ncmVzc1xyXG5cclxuXHRcdFx0XHRcdC8vIGFkZCBzY3JvbGxEaXN0YW5jZVxyXG5cdFx0XHRcdFx0Zml4ZWRQb3NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gKz0gc2Nyb2xsRGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcclxuXHRcdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCwge1xyXG5cdFx0XHRcdFx0XHR0b3A6IGZpeGVkUG9zLnRvcCxcclxuXHRcdFx0XHRcdFx0bGVmdDogZml4ZWRQb3MubGVmdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHVucGlubmVkIHN0YXRlXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bmV3Q1NTID0ge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBfcGluT3B0aW9ucy5pbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0Y2hhbmdlID0gX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBuZXdDU1MucG9zaXRpb247XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRcdG5ld0NTU1tjb250YWluZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHsgLy8gb25seSBjb25jZXJucyBzY2VuZXMgd2l0aCBkdXJhdGlvblxyXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy10b3BcIikpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8gaWYgaW4gYWZ0ZXIgc3RhdGUgYnV0IGhhdmVudCB1cGRhdGVkIHNwYWNlciB5ZXQgKGp1bXBlZCBwYXN0IHBpbilcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy1ib3R0b21cIikpID09PSAwKSB7IC8vIGJlZm9yZVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGp1bXBlZCBwYXN0IGZpeGVkIHN0YXRlIHVwd2FyZCBkaXJlY3Rpb25cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcclxuXHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG5ld0NTUyk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbmdlKSB7XHJcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyIGlmIHN0YXRlIGNoYW5nZWRcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZSB0aGUgcGluIHNwYWNlciBhbmQvb3IgZWxlbWVudCBzaXplLlxyXG5cdFx0ICogVGhlIHNpemUgb2YgdGhlIHNwYWNlciBuZWVkcyB0byBiZSB1cGRhdGVkIHdoZW5ldmVyIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUgY2hhbmdlcywgaWYgaXQgaXMgdG8gcHVzaCBkb3duIGZvbGxvd2luZyBlbGVtZW50cy5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVQaW5EaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlciAmJiBfcGluT3B0aW9ucy5pbkZsb3cpIHsgLy8gbm8gc3BhY2VycmVzaXplLCBpZiBvcmlnaW5hbCBwb3NpdGlvbiBpcyBhYnNvbHV0ZVxyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0YWZ0ZXIgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiksXHJcblx0XHRcdFx0XHRiZWZvcmUgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUpLFxyXG5cdFx0XHRcdFx0ZHVyaW5nID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSxcclxuXHRcdFx0XHRcdHZlcnRpY2FsID0gX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpLFxyXG5cdFx0XHRcdFx0cGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQsIC8vIHVzdWFsbHkgdGhlIHBpbmVkIGVsZW1lbnQgYnV0IGNhbiBhbHNvIGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKVxyXG5cdFx0XHRcdFx0bWFyZ2luQ29sbGFwc2UgPSBfdXRpbC5pc01hcmdpbkNvbGxhcHNlVHlwZShfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcImRpc3BsYXlcIikpLFxyXG5cdFx0XHRcdFx0Y3NzID0ge307XHJcblxyXG5cdFx0XHRcdC8vIHNldCBuZXcgc2l6ZVxyXG5cdFx0XHRcdC8vIGlmIHJlbHNpemU6IHNwYWNlciAtPiBwaW4gfCBlbHNlOiBwaW4gLT4gc3BhY2VyXHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XHJcblx0XHRcdFx0XHRpZiAoZHVyaW5nKSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBcIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gbWlud2lkdGggaXMgbmVlZGVkIGZvciBjYXNjYWRlZCBwaW5zLlxyXG5cdFx0XHRcdFx0Y3NzW1wibWluLXdpZHRoXCJdID0gX3V0aWwuZ2V0LndpZHRoKHZlcnRpY2FsID8gX3BpbiA6IHBpblRhcmdldCwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRjc3Mud2lkdGggPSBkdXJpbmcgPyBjc3NbXCJtaW4td2lkdGhcIl0gOiBcImF1dG9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRpZiAoZHVyaW5nKSB7XHJcblx0XHRcdFx0XHRcdC8vIHRoZSBvbmx5IHBhZGRpbmcgdGhlIHNwYWNlciBzaG91bGQgZXZlciBpbmNsdWRlIGlzIHRoZSBkdXJhdGlvbiAoaWYgcHVzaEZvbGxvd2VycyA9IHRydWUpLCBzbyB3ZSBuZWVkIHRvIHN1YnN0cmFjdCB0aGF0LlxyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyKSAtIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzID8gX29wdGlvbnMuZHVyYXRpb24gOiAwKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogXCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIG1hcmdpbiBpcyBvbmx5IGluY2x1ZGVkIGlmIGl0J3MgYSBjYXNjYWRlZCBwaW4gdG8gcmVzb2x2ZSBhbiBJRTkgYnVnXHJcblx0XHRcdFx0XHRjc3NbXCJtaW4taGVpZ2h0XCJdID0gX3V0aWwuZ2V0LmhlaWdodCh2ZXJ0aWNhbCA/IHBpblRhcmdldCA6IF9waW4sIHRydWUsICFtYXJnaW5Db2xsYXBzZSk7IC8vIG5lZWRlZCBmb3IgY2FzY2FkaW5nIHBpbnNcclxuXHRcdFx0XHRcdGNzcy5oZWlnaHQgPSBkdXJpbmcgPyBjc3NbXCJtaW4taGVpZ2h0XCJdIDogXCJhdXRvXCI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgc3BhY2UgZm9yIGR1cmF0aW9uIGlmIHB1c2hGb2xsb3dlcnMgaXMgdHJ1ZVxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRjc3NbXCJwYWRkaW5nXCIgKyAodmVydGljYWwgPyBcIlRvcFwiIDogXCJMZWZ0XCIpXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xyXG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJCb3R0b21cIiA6IFwiUmlnaHRcIildID0gX29wdGlvbnMuZHVyYXRpb24gKiAoMSAtIF9wcm9ncmVzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIGNzcyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG5cdFx0ICogSWYgdGhlIGNvbnRyb2xsZXIgY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgYW5kIHdlIGFyZSBtaWQtcGluLXBoYXNlIHNjcm9sbGluZyBvciByZXNpemluZyB0aGUgbWFpbiBkb2N1bWVudCBjYW4gcmVzdWx0IHRvIHdyb25nIHBpbiBwb3NpdGlvbnMuXHJcblx0XHQgKiBTbyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiByZXNpemUgYW5kIHNjcm9sbCBvZiB0aGUgZG9jdW1lbnQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluSW5Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3BhY2VyIHNpemUgc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG5cdFx0ICogSWYgY29udGFpbmVyIGlzIHJlc2l6ZWQgZHVyaW5nIHBpbiBhbmQgcmVsYXRpdmVseSBzaXplZCB0aGUgc2l6ZSBvZiB0aGUgcGluIG1pZ2h0IG5lZWQgdG8gYmUgdXBkYXRlZC4uLlxyXG5cdFx0ICogU28gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb24gcmVzaXplIG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIC8vIHdlbGwsIGR1aFxyXG5cdFx0XHRcdF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmIC8vIGVsZW1lbnQgaW4gcGlubmVkIHN0YXRlP1xyXG5cdFx0XHRcdCggLy8gaXMgd2lkdGggb3IgaGVpZ2h0IHJlbGF0aXZlbHkgc2l6ZWQsIGJ1dCBub3QgaW4gcmVsYXRpb24gdG8gYm9keT8gdGhlbiB3ZSBuZWVkIHRvIHJlY2FsYy5cclxuXHRcdFx0XHRcdCgoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCB8fCBfcGluT3B0aW9ucy5yZWxTaXplLmF1dG9GdWxsV2lkdGgpICYmIF91dGlsLmdldC53aWR0aCh3aW5kb3cpICE9IF91dGlsLmdldC53aWR0aChfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZSkpIHx8XHJcblx0XHRcdFx0XHQoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQgJiYgX3V0aWwuZ2V0LmhlaWdodCh3aW5kb3cpICE9IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSXMgY2FsbGVkLCB3aGVuIHRoZSBtb3VzZXdoZWwgaXMgdXNlZCB3aGlsZSBvdmVyIGEgcGlubmVkIGVsZW1lbnQgaW5zaWRlIGEgZGl2IGNvbnRhaW5lci5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBpcyBpbiBmaXhlZCBzdGF0ZSBzY3JvbGwgZXZlbnRzIHdvdWxkIGJlIGNvdW50ZWQgdG93YXJkcyB0aGUgYm9keS4gVGhpcyBmb3J3YXJkcyB0aGUgZXZlbnQgdG8gdGhlIHNjcm9sbCBjb250YWluZXIuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgb25Nb3VzZXdoZWVsT3ZlclBpbiA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkgeyAvLyBpbiBwaW4gc3RhdGVcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIuX3NldFNjcm9sbFBvcyhfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpIC0gKChlLndoZWVsRGVsdGEgfHwgZVtfY29udHJvbGxlci5pbmZvKFwidmVydGljYWxcIikgPyBcIndoZWVsRGVsdGFZXCIgOiBcIndoZWVsRGVsdGFYXCJdKSAvIDMgfHwgLWUuZGV0YWlsICogMzApKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBpbiBhbiBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGVsZW1lbnQgd2lsbCBvbmx5IGJlIHVucGlubmVkLCBpZiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24uICBcclxuXHRcdCAqIE1ha2Ugc3VyZSBvbmx5IG9uZSBwaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IGF0IHRoZSBzYW1lIHRpbWUuXHJcblx0XHQgKiBBbiBlbGVtZW50IGNhbiBiZSBwaW5uZWQgbXVsdGlwbGUgdGltZXMsIGJ1dCBvbmx5IHN1Y2Nlc3NpdmVseS5cclxuXHRcdCAqIF8qKk5PVEU6KiogVGhlIG9wdGlvbiBgcHVzaEZvbGxvd2Vyc2AgaGFzIG5vIGVmZmVjdCwgd2hlbiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMC5fXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3NldFBpblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBwdXNoIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgZG93biBieSB0aGUgYW1vdW50IG9mIHRoZSBwaW4gZHVyYXRpb24uXHJcblx0XHQgKiBzY2VuZS5zZXRQaW4oXCIjcGluXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBrZWVwaW5nIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgaW4gdGhlaXIgcGxhY2UuIFRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIG1vdmUgcGFzdCB0aGVtLlxyXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiLCB7cHVzaEZvbGxvd2VyczogZmFsc2V9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZWxlbWVudCAtIEEgU2VsZWN0b3IgdGFyZ2V0aW5nIGFuIGVsZW1lbnQgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgcGlubmVkLlxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IFtzZXR0aW5nc10gLSBzZXR0aW5ncyBmb3IgdGhlIHBpblxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbc2V0dGluZ3MucHVzaEZvbGxvd2Vycz10cnVlXSAtIElmIGB0cnVlYCBmb2xsb3dpbmcgZWxlbWVudHMgd2lsbCBiZSBcInB1c2hlZFwiIGRvd24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGluLCBpZiBgZmFsc2VgIHRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIGp1c3Qgc2Nyb2xsIHBhc3QgdGhlbS4gIFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIElnbm9yZWQsIHdoZW4gZHVyYXRpb24gaXMgYDBgLlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZXR0aW5ncy5zcGFjZXJDbGFzcz1cInNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIl0gLSBDbGFzc25hbWUgb2YgdGhlIHBpbiBzcGFjZXIgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byByZXBsYWNlIHRoZSBlbGVtZW50LlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2V0UGluID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNldHRpbmdzKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuXHRcdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZXJDbGFzczogXCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR2YXIgcHVzaEZvbGxvd2Vyc0FjdGl2ZWx5U2V0ID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3B1c2hGb2xsb3dlcnMnKTtcclxuXHRcdFx0c2V0dGluZ3MgPSBfdXRpbC5leHRlbmQoe30sIGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xyXG5cclxuXHRcdFx0Ly8gdmFsaWRhdGUgRWxlbWVudFxyXG5cdFx0XHRlbGVtZW50ID0gX3V0aWwuZ2V0LmVsZW1lbnRzKGVsZW1lbnQpWzBdO1xyXG5cdFx0XHRpZiAoIWVsZW1lbnQpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBJbnZhbGlkIHBpbiBlbGVtZW50IHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxyXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLmNzcyhlbGVtZW50LCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBQaW4gZG9lcyBub3Qgd29yayB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHBvc2l0aW9uZWQgJ2ZpeGVkJy5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKF9waW4pIHsgLy8gcHJlZXhpc3RpbmcgcGluP1xyXG5cdFx0XHRcdGlmIChfcGluID09PSBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHQvLyBzYW1lIHBpbiB3ZSBhbHJlYWR5IGhhdmUgLT4gZG8gbm90aGluZ1xyXG5cdFx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8ga2lsbCBvbGQgcGluXHJcblx0XHRcdFx0XHRTY2VuZS5yZW1vdmVQaW4oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdF9waW4gPSBlbGVtZW50O1xyXG5cclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0cGFyZW50RGlzcGxheSA9IF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5LFxyXG5cdFx0XHRcdGJvdW5kc1BhcmFtcyA9IFtcInRvcFwiLCBcImxlZnRcIiwgXCJib3R0b21cIiwgXCJyaWdodFwiLCBcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXTtcclxuXHJcblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBoYWNrIHN0YXJ0IHRvIGZvcmNlIGNzcyB0byByZXR1cm4gc3R5bGVzaGVldCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxjdWxhdGVkIHB4IHZhbHVlcy5cclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0aW5GbG93ID0gX3V0aWwuY3NzKF9waW4sIFwicG9zaXRpb25cIikgIT0gXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdHBpbkNTUyA9IF91dGlsLmNzcyhfcGluLCBib3VuZHNQYXJhbXMuY29uY2F0KFtcImRpc3BsYXlcIl0pKSxcclxuXHRcdFx0XHRzaXplQ1NTID0gX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKTtcclxuXHRcdFx0X3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBwYXJlbnREaXNwbGF5OyAvLyBoYWNrIGVuZC5cclxuXHJcblx0XHRcdGlmICghaW5GbG93ICYmIHNldHRpbmdzLnB1c2hGb2xsb3dlcnMpIHtcclxuXHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBJZiB0aGUgcGlubmVkIGVsZW1lbnQgaXMgcG9zaXRpb25lZCBhYnNvbHV0ZWx5IHB1c2hGb2xsb3dlcnMgd2lsbCBiZSBkaXNhYmxlZC5cIik7XHJcblx0XHRcdFx0c2V0dGluZ3MucHVzaEZvbGxvd2VycyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gd2FpdCB1bnRpbCBhbGwgZmluaXNoZWQsIGJlY2F1c2Ugd2l0aCByZXNwb25zaXZlIGR1cmF0aW9uIGl0IHdpbGwgb25seSBiZSBzZXQgYWZ0ZXIgc2NlbmUgaXMgYWRkZWQgdG8gY29udHJvbGxlclxyXG5cdFx0XHRcdGlmIChfcGluICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwICYmIHB1c2hGb2xsb3dlcnNBY3RpdmVseVNldCAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBwdXNoRm9sbG93ZXJzID1cIiwgdHJ1ZSwgXCJoYXMgbm8gZWZmZWN0LCB3aGVuIHNjZW5lIGR1cmF0aW9uIGlzIDAuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMCk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgc3BhY2VyIGFuZCBpbnNlcnRcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0c3BhY2VyID0gX3Bpbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgX3BpbiksXHJcblx0XHRcdFx0c3BhY2VyQ1NTID0gX3V0aWwuZXh0ZW5kKHBpbkNTUywge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG5cdFx0XHRcdFx0bW96Qm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXHJcblx0XHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCFpbkZsb3cpIHsgLy8gY29weSBzaXplIGlmIHBvc2l0aW9uZWQgYWJzb2x1dGVseSwgdG8gd29yayBmb3IgYm90dG9tL3JpZ2h0IHBvc2l0aW9uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0X3V0aWwuZXh0ZW5kKHNwYWNlckNTUywgX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHNwYWNlckNTUyk7XHJcblx0XHRcdHNwYWNlci5zZXRBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUsIFwiXCIpO1xyXG5cdFx0XHRfdXRpbC5hZGRDbGFzcyhzcGFjZXIsIHNldHRpbmdzLnNwYWNlckNsYXNzKTtcclxuXHJcblx0XHRcdC8vIHNldCB0aGUgcGluIE9wdGlvbnNcclxuXHRcdFx0X3Bpbk9wdGlvbnMgPSB7XHJcblx0XHRcdFx0c3BhY2VyOiBzcGFjZXIsXHJcblx0XHRcdFx0cmVsU2l6ZTogeyAvLyBzYXZlIGlmIHNpemUgaXMgZGVmaW5lZCB1c2luZyAlIHZhbHVlcy4gaWYgc28sIGhhbmRsZSBzcGFjZXIgcmVzaXplIGRpZmZlcmVudGx5Li4uXHJcblx0XHRcdFx0XHR3aWR0aDogc2l6ZUNTUy53aWR0aC5zbGljZSgtMSkgPT09IFwiJVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaXplQ1NTLmhlaWdodC5zbGljZSgtMSkgPT09IFwiJVwiLFxyXG5cdFx0XHRcdFx0YXV0b0Z1bGxXaWR0aDogc2l6ZUNTUy53aWR0aCA9PT0gXCJhdXRvXCIgJiYgaW5GbG93ICYmIF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKHBpbkNTUy5kaXNwbGF5KVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cHVzaEZvbGxvd2Vyczogc2V0dGluZ3MucHVzaEZvbGxvd2VycyxcclxuXHRcdFx0XHRpbkZsb3c6IGluRmxvdywgLy8gc3RvcmVzIGlmIHRoZSBlbGVtZW50IHRha2VzIHVwIHNwYWNlIGluIHRoZSBkb2N1bWVudCBmbG93XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIV9waW4uX19fb3JpZ1N0eWxlKSB7XHJcblx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGUgPSB7fTtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdHBpbklubGluZUNTUyA9IF9waW4uc3R5bGUsXHJcblx0XHRcdFx0XHRjb3B5U3R5bGVzID0gYm91bmRzUGFyYW1zLmNvbmNhdChbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInBvc2l0aW9uXCIsIFwiYm94U2l6aW5nXCIsIFwibW96Qm94U2l6aW5nXCIsIFwid2Via2l0Qm94U2l6aW5nXCJdKTtcclxuXHRcdFx0XHRjb3B5U3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGVbdmFsXSA9IHBpbklubGluZUNTU1t2YWxdIHx8IFwiXCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIHJlbGF0aXZlIHNpemUsIHRyYW5zZmVyIGl0IHRvIHNwYWNlciBhbmQgbWFrZSBwaW4gY2FsY3VsYXRlIGl0Li4uXHJcblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoKSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGhcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQpIHtcclxuXHRcdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemVDU1MuaGVpZ2h0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG5vdyBwbGFjZSB0aGUgcGluIGVsZW1lbnQgaW5zaWRlIHRoZSBzcGFjZXJcdFxyXG5cdFx0XHRzcGFjZXIuYXBwZW5kQ2hpbGQoX3Bpbik7XHJcblx0XHRcdC8vIGFuZCBzZXQgbmV3IGNzc1xyXG5cdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBpbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0bWFyZ2luOiBcImF1dG9cIixcclxuXHRcdFx0XHR0b3A6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdGxlZnQ6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdGJvdHRvbTogXCJhdXRvXCIsXHJcblx0XHRcdFx0cmlnaHQ6IFwiYXV0b1wiXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdFx0d2Via2l0Qm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgbGlzdGVuZXIgdG8gZG9jdW1lbnQgdG8gdXBkYXRlIHBpbiBwb3NpdGlvbiBpbiBjYXNlIGNvbnRyb2xsZXIgaXMgbm90IHRoZSBkb2N1bWVudC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcclxuXHRcdFx0Ly8gYWRkIG1vdXNld2hlZWwgbGlzdGVuZXIgdG8gY2F0Y2ggc2Nyb2xscyBvdmVyIGZpeGVkIGVsZW1lbnRzXHJcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XHJcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgcGluXCIpO1xyXG5cclxuXHRcdFx0Ly8gZmluYWxseSB1cGRhdGUgdGhlIHBpbiB0byBpbml0XHJcblx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVBpblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXR0aW5nIGl0ICh0aGUgc3BhY2VyIGlzIG5vdCByZW1vdmVkKVxyXG5cdFx0ICogc2NlbmUucmVtb3ZlUGluKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gZWxlbWVudCB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbiAoc3BhY2VyIGlzIHJlbW92ZWQpXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVQaW4odHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYGZhbHNlYCB0aGUgc3BhY2VyIHdpbGwgbm90IGJlIHJlbW92ZWQgYW5kIHRoZSBlbGVtZW50J3MgcG9zaXRpb24gd2lsbCBub3QgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZVBpbiA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRpZiAoX3Bpbikge1xyXG5cdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIGZvcmNlIHVucGluIGF0IHBvc2l0aW9uXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXNldCB8fCAhX2NvbnRyb2xsZXIpIHsgLy8gaWYgdGhlcmUncyBubyBjb250cm9sbGVyIG5vIHByb2dyZXNzIHdhcyBtYWRlIGFueXdheS4uLlxyXG5cdFx0XHRcdFx0dmFyIHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyB1c3VhbGx5IHRoZSBwaW4gZWxlbWVudCwgYnV0IG1heSBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucykuLi5cclxuXHRcdFx0XHRcdGlmIChwaW5UYXJnZXQuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBjb3B5IG1hcmdpbnMgdG8gY2hpbGQgc3BhY2VyXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlID0gX3Bpbk9wdGlvbnMuc3BhY2VyLnN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlcyA9IFtcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zID0ge307XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zW3ZhbF0gPSBzdHlsZVt2YWxdIHx8IFwiXCI7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBtYXJnaW5zKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwaW5UYXJnZXQsIF9waW5PcHRpb25zLnNwYWNlcik7XHJcblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfcGluT3B0aW9ucy5zcGFjZXIpO1xyXG5cdFx0XHRcdFx0aWYgKCFfcGluLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBpZiBpdCdzIHRoZSBsYXN0IHBpbiBmb3IgdGhpcyBlbGVtZW50IC0+IHJlc3RvcmUgaW5saW5lIHN0eWxlc1xyXG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBvbmx5IGNvcnJlY3RseSBzZXQgZm9yIGZpcnN0IHBpbiAod2hlbiBjYXNjYWRpbmcpIC0gaG93IHRvIGZpeD9cclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIF9waW4uX19fb3JpZ1N0eWxlKTtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9waW4uX19fb3JpZ1N0eWxlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcclxuXHRcdFx0XHRfcGluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRcdF9waW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRcdF9waW4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBwaW4gKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0X2Nzc0NsYXNzZXMsXHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XHJcblxyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKGUucmVzZXQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmaW5lIGEgY3NzIGNsYXNzIG1vZGlmaWNhdGlvbiB3aGlsZSB0aGUgc2NlbmUgaXMgYWN0aXZlLiAgXHJcblx0XHQgKiBXaGVuIHRoZSBzY2VuZSB0cmlnZ2VycyB0aGUgY2xhc3NlcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBlbGVtZW50IGFuZCByZW1vdmVkLCB3aGVuIHRoZSBzY2VuZSBpcyBvdmVyLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGNsYXNzZXMgd2lsbCBvbmx5IGJlIHJlbW92ZWQgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRDbGFzc1RvZ2dsZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGFkZCB0aGUgY2xhc3MgJ215Y2xhc3MnIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIGlkICdteS1lbGVtJyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogc2NlbmUuc2V0Q2xhc3NUb2dnbGUoXCIjbXktZWxlbVwiLCBcIm15Y2xhc3NcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gYWRkIG11bHRpcGxlIGNsYXNzZXMgdG8gbXVsdGlwbGUgZWxlbWVudHMgZGVmaW5lZCBieSB0aGUgc2VsZWN0b3IgJy5jbGFzc0NoYW5nZSdcclxuXHRcdCAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiLmNsYXNzQ2hhbmdlXCIsIFwiY2xhc3MxIGNsYXNzMiBjbGFzczNcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBvbmUgb3IgbW9yZSBlbGVtZW50cyBvciBhIERPTSBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBtb2RpZmllZC5cclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIC0gT25lIG9yIG1vcmUgQ2xhc3NuYW1lcyAoc2VwYXJhdGVkIGJ5IHNwYWNlKSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudCBkdXJpbmcgdGhlIHNjZW5lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2V0Q2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3Nlcykge1xyXG5cdFx0XHR2YXIgZWxlbXMgPSBfdXRpbC5nZXQuZWxlbWVudHMoZWxlbWVudCk7XHJcblx0XHRcdGlmIChlbGVtcy5sZW5ndGggPT09IDAgfHwgIV91dGlsLnR5cGUuU3RyaW5nKGNsYXNzZXMpKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldENsYXNzVG9nZ2xlKCknOiBJbnZhbGlkIFwiICsgKGVsZW1zLmxlbmd0aCA9PT0gMCA/IFwiZWxlbWVudFwiIDogXCJjbGFzc2VzXCIpICsgXCIgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX2Nzc0NsYXNzRWxlbXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdC8vIHJlbW92ZSBvbGQgb25lc1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0X2Nzc0NsYXNzZXMgPSBjbGFzc2VzO1xyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IGVsZW1zO1xyXG5cdFx0XHRTY2VuZS5vbihcImVudGVyLmludGVybmFsX2NsYXNzIGxlYXZlLmludGVybmFsX2NsYXNzXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIHRvZ2dsZSA9IGUudHlwZSA9PT0gXCJlbnRlclwiID8gX3V0aWwuYWRkQ2xhc3MgOiBfdXRpbC5yZW1vdmVDbGFzcztcclxuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcclxuXHRcdFx0XHRcdHRvZ2dsZShlbGVtLCBfY3NzQ2xhc3Nlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVDbGFzc1RvZ2dsZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIGNsYXNzIGJpbmRpbmcgYW5kIHJlbW92ZSB0aGUgY2hhbmdlcyBpdCBjYXVzZWRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgYW5kIHRoZSBjbGFzc2VzIGFyZSBjdXJyZW50bHkgYWN0aXZlLCB0aGV5IHdpbGwgcmVtYWluIG9uIHRoZSBlbGVtZW50LiBJZiBgdHJ1ZWAgdGhleSB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZUNsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHRcdF9jc3NDbGFzc0VsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGtleSkge1xyXG5cdFx0XHRcdFx0X3V0aWwucmVtb3ZlQ2xhc3MoZWxlbSwgX2Nzc0NsYXNzZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFNjZW5lLm9mZihcInN0YXJ0LmludGVybmFsX2NsYXNzIGVuZC5pbnRlcm5hbF9jbGFzc1wiKTtcclxuXHRcdFx0X2Nzc0NsYXNzZXMgPSB1bmRlZmluZWQ7XHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gSU5JVFxyXG5cdFx0Y29uc3RydWN0KCk7XHJcblx0XHRyZXR1cm4gU2NlbmU7XHJcblx0fTtcclxuXHJcblx0Ly8gc3RvcmUgcGFnZXdpZGUgc2NlbmUgb3B0aW9uc1xyXG5cdHZhciBTQ0VORV9PUFRJT05TID0ge1xyXG5cdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0ZHVyYXRpb246IDAsXHJcblx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0dHJpZ2dlckVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0dHJpZ2dlckhvb2s6IDAuNSxcclxuXHRcdFx0cmV2ZXJzZTogdHJ1ZSxcclxuXHRcdFx0bG9nbGV2ZWw6IDJcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZToge1xyXG5cdFx0XHRvZmZzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XHJcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIm9mZnNldFxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyaWdnZXJFbGVtZW50OiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gdmFsIHx8IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAodmFsKSB7XHJcblx0XHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyh2YWwpWzBdO1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IGVsZW07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJFbGVtZW50IGRlZmluZWQgaW4gb3B0aW9uIFxcXCJ0cmlnZ2VyRWxlbWVudFxcXCIgd2FzIG5vdCBmb3VuZDpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJpZ2dlckhvb2s6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YXIgdHJhbnNsYXRlID0ge1xyXG5cdFx0XHRcdFx0XCJvbkNlbnRlclwiOiAwLjUsXHJcblx0XHRcdFx0XHRcIm9uRW50ZXJcIjogMSxcclxuXHRcdFx0XHRcdFwib25MZWF2ZVwiOiAwXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5OdW1iZXIodmFsKSkge1xyXG5cdFx0XHRcdFx0dmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFyc2VGbG9hdCh2YWwpLCAxKSk7IC8vICBtYWtlIHN1cmUgaXRzIGJldHdlZWVuIDAgYW5kIDFcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCBpbiB0cmFuc2xhdGUpIHtcclxuXHRcdFx0XHRcdHZhbCA9IHRyYW5zbGF0ZVt2YWxdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInRyaWdnZXJIb29rXFxcIjogXCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJldmVyc2U6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRyZXR1cm4gISF2YWw7IC8vIGZvcmNlIGJvb2xlYW5cclxuXHRcdFx0fSxcclxuXHRcdFx0bG9nbGV2ZWw6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUludCh2YWwpO1xyXG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSB8fCB2YWwgPCAwIHx8IHZhbCA+IDMpIHtcclxuXHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwibG9nbGV2ZWxcXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAvLyBob2xkZXIgZm9yICB2YWxpZGF0aW9uIG1ldGhvZHMuIGR1cmF0aW9uIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBpbiAnZ2V0dGVycy1zZXR0ZXJzLmpzJ1xyXG5cdFx0c2hpZnRzOiBbXCJkdXJhdGlvblwiLCBcIm9mZnNldFwiLCBcInRyaWdnZXJIb29rXCJdLCAvLyBsaXN0IG9mIG9wdGlvbnMgdGhhdCB0cmlnZ2VyIGEgYHNoaWZ0YCBldmVudFxyXG5cdH07XHJcblx0LypcclxuXHQgKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cclxuXHQgKiBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCB2YWxpZGF0aW9uQ2FsbGJhY2ssIHNoaWZ0cykge1xyXG5cdFx0aWYgKCEobmFtZSBpbiBTQ0VORV9PUFRJT05TLmRlZmF1bHRzKSkge1xyXG5cdFx0XHRTQ0VORV9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG5cdFx0XHRTQ0VORV9PUFRJT05TLnZhbGlkYXRlW25hbWVdID0gdmFsaWRhdGlvbkNhbGxiYWNrO1xyXG5cdFx0XHRpZiAoc2hpZnRzKSB7XHJcblx0XHRcdFx0U0NFTkVfT1BUSU9OUy5zaGlmdHMucHVzaChuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsIFwiW3N0YXRpY10gU2Nyb2xsTWFnaWMuU2NlbmUgLT4gQ2Fubm90IGFkZCBTY2VuZSBvcHRpb24gJ1wiICsgbmFtZSArIFwiJywgYmVjYXVzZSBpdCBhbHJlYWR5IGV4aXN0cy5cIik7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvLyBpbnN0YW5jZSBleHRlbnNpb24gZnVuY3Rpb24gZm9yIHBsdWdpbnNcclxuXHQvLyBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XHJcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHRoaXMuJHN1cGVyID0gX3V0aWwuZXh0ZW5kKHt9LCB0aGlzKTsgLy8gY29weSBwYXJlbnQgc3RhdGVcclxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcblx0XHR9O1xyXG5cdFx0X3V0aWwuZXh0ZW5kKFNjcm9sbE1hZ2ljLlNjZW5lLCBvbGRDbGFzcyk7IC8vIGNvcHkgcHJvcGVydGllc1xyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuU2NlbmU7IC8vIHJlc3RvcmUgY29uc3RydWN0b3JcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRPRE86IERPQ1MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKiBAY2xhc3NcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cclxuXHRTY3JvbGxNYWdpYy5FdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lc3BhY2UsIHRhcmdldCwgdmFycykge1xyXG5cdFx0dmFycyA9IHZhcnMgfHwge307XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gdmFycykge1xyXG5cdFx0XHR0aGlzW2tleV0gPSB2YXJzW2tleV07XHJcblx0XHR9XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy50YXJnZXQgPSB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCAnJztcclxuXHRcdHRoaXMudGltZVN0YW1wID0gdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LypcclxuXHQgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICovXHJcblxyXG5cdHZhciBfdXRpbCA9IFNjcm9sbE1hZ2ljLl91dGlsID0gKGZ1bmN0aW9uICh3aW5kb3cpIHtcclxuXHRcdHZhciBVID0ge30sXHJcblx0XHRcdGk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIGludGVybmFsIGhlbHBlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gcGFyc2UgZmxvYXQgYW5kIGZhbGwgYmFjayB0byAwLlxyXG5cdFx0dmFyIGZsb2F0dmFsID0gZnVuY3Rpb24gKG51bWJlcikge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VGbG9hdChudW1iZXIpIHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGN1cnJlbnQgc3R5bGUgSUUgc2FmZSAob3RoZXJ3aXNlIElFIHdvdWxkIHJldHVybiBjYWxjdWxhdGVkIHZhbHVlcyBmb3IgJ2F1dG8nKVxyXG5cdFx0dmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0uY3VycmVudFN0eWxlID8gZWxlbS5jdXJyZW50U3R5bGUgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXHJcblx0XHR2YXIgX2RpbWVuc2lvbiA9IGZ1bmN0aW9uICh3aGljaCwgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0ZWxlbSA9IChlbGVtID09PSBkb2N1bWVudCkgPyB3aW5kb3cgOiBlbGVtO1xyXG5cdFx0XHRpZiAoZWxlbSA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0aW5jbHVkZU1hcmdpbiA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFfdHlwZS5Eb21FbGVtZW50KGVsZW0pKSB7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHRcdFx0d2hpY2ggPSB3aGljaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdoaWNoLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR2YXIgZGltZW5zaW9uID0gKG91dGVyID8gZWxlbVsnb2Zmc2V0JyArIHdoaWNoXSB8fCBlbGVtWydvdXRlcicgKyB3aGljaF0gOiBlbGVtWydjbGllbnQnICsgd2hpY2hdIHx8IGVsZW1bJ2lubmVyJyArIHdoaWNoXSkgfHwgMDtcclxuXHRcdFx0aWYgKG91dGVyICYmIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0XHR2YXIgc3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdFx0XHRkaW1lbnNpb24gKz0gd2hpY2ggPT09ICdIZWlnaHQnID8gZmxvYXR2YWwoc3R5bGUubWFyZ2luVG9wKSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpbkJvdHRvbSkgOiBmbG9hdHZhbChzdHlsZS5tYXJnaW5MZWZ0KSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpblJpZ2h0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZGltZW5zaW9uO1xyXG5cdFx0fTtcclxuXHRcdC8vIGNvbnZlcnRzICdtYXJnaW4tdG9wJyBpbnRvICdtYXJnaW5Ub3AnXHJcblx0XHR2YXIgX2NhbWVsQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eW15hLXpdKyhbYS16XSkvZywgJyQxJykucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKGcpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ1sxXS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIGV4dGVybmFsIGhlbHBlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gZXh0ZW5kIG9iaiDigJMgc2FtZSBhcyBqUXVlcnkuZXh0ZW5kKHt9LCBvYmpBLCBvYmpCKVxyXG5cdFx0VS5leHRlbmQgPSBmdW5jdGlvbiAob2JqKSB7XHJcblx0XHRcdG9iaiA9IG9iaiB8fCB7fTtcclxuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICghYXJndW1lbnRzW2ldKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG5cdFx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRcdG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGNoZWNrIGlmIGEgY3NzIGRpc3BsYXkgdHlwZSByZXN1bHRzIGluIG1hcmdpbi1jb2xsYXBzZSBvciBub3RcclxuXHRcdFUuaXNNYXJnaW5Db2xsYXBzZVR5cGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcblx0XHRcdHJldHVybiBbXCJibG9ja1wiLCBcImZsZXhcIiwgXCJsaXN0LWl0ZW1cIiwgXCJ0YWJsZVwiLCBcIi13ZWJraXQtYm94XCJdLmluZGV4T2Yoc3RyKSA+IC0xO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBpbXBsZW1lbnRhdGlvbiBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuXHRcdC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXHJcblx0XHR2YXJcclxuXHRcdFx0bGFzdFRpbWUgPSAwLFxyXG5cdFx0XHR2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcclxuXHRcdHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHRcdHZhciBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcblx0XHQvLyB0cnkgdmVuZG9yIHByZWZpeGVzIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmtcclxuXHRcdGZvciAoaSA9IDA7ICFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmYWxsYmFja3NcclxuXHRcdGlmICghX3JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHRcdFx0dGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcclxuXHRcdFx0XHRcdGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG5cdFx0XHRcdFx0fSwgdGltZVRvQ2FsbCk7XHJcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcblx0XHRcdFx0cmV0dXJuIGlkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFfY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRVLnJBRiA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG5cdFx0VS5jQUYgPSBfY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRsb2dsZXZlbHMgPSBbXCJlcnJvclwiLCBcIndhcm5cIiwgXCJsb2dcIl0sXHJcblx0XHRcdGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyA9IGNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uICgpIHt9OyAvLyBubyBjb25zb2xlIGxvZywgd2VsbCAtIGRvIG5vdGhpbmcgdGhlbi4uLlxyXG5cdFx0Ly8gbWFrZSBzdXJlIG1ldGhvZHMgZm9yIGFsbCBsZXZlbHMgZXhpc3QuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbG9nbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBtZXRob2QgPSBsb2dsZXZlbHNbaV07XHJcblx0XHRcdGlmICghY29uc29sZVttZXRob2RdKSB7XHJcblx0XHRcdFx0Y29uc29sZVttZXRob2RdID0gY29uc29sZS5sb2c7IC8vIHByZWZlciAubG9nIG92ZXIgbm90aGluZ1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRVLmxvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCkge1xyXG5cdFx0XHRpZiAobG9nbGV2ZWwgPiBsb2dsZXZlbHMubGVuZ3RoIHx8IGxvZ2xldmVsIDw9IDApIGxvZ2xldmVsID0gbG9nbGV2ZWxzLmxlbmd0aDtcclxuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0dGltZSA9IChcIjBcIiArIG5vdy5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgbm93LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwMFwiICsgbm93LmdldE1pbGxpc2Vjb25kcygpKS5zbGljZSgtMyksXHJcblx0XHRcdFx0bWV0aG9kID0gbG9nbGV2ZWxzW2xvZ2xldmVsIC0gMV0sXHJcblx0XHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG5cdFx0XHRcdGZ1bmMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGVbbWV0aG9kXSwgY29uc29sZSk7XHJcblx0XHRcdGFyZ3MudW5zaGlmdCh0aW1lKTtcclxuXHRcdFx0ZnVuYy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHR5cGUgdGVzdGluZ1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXIgX3R5cGUgPSBVLnR5cGUgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnJlcGxhY2UoL15cXFtvYmplY3QgKC4rKVxcXSQvLCBcIiQxXCIpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuU3RyaW5nID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIF90eXBlKHYpID09PSAnc3RyaW5nJztcclxuXHRcdH07XHJcblx0XHRfdHlwZS5GdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ2Z1bmN0aW9uJztcclxuXHRcdH07XHJcblx0XHRfdHlwZS5BcnJheSA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLk51bWJlciA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiAhX3R5cGUuQXJyYXkodikgJiYgKHYgLSBwYXJzZUZsb2F0KHYpICsgMSkgPj0gMDtcclxuXHRcdH07XHJcblx0XHRfdHlwZS5Eb21FbGVtZW50ID0gZnVuY3Rpb24gKG8pIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHR0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcImZ1bmN0aW9uXCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbyBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgOiAvL0RPTTJcclxuXHRcdFx0XHRvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRE9NIEVsZW1lbnQgaW5mb1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdC8vIGFsd2F5cyByZXR1cm5zIGEgbGlzdCBvZiBtYXRjaGluZyBET00gZWxlbWVudHMsIGZyb20gYSBzZWxlY3RvciwgYSBET00gZWxlbWVudCBvciBhbiBsaXN0IG9mIGVsZW1lbnRzIG9yIGV2ZW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3JzXHJcblx0XHR2YXIgX2dldCA9IFUuZ2V0ID0ge307XHJcblx0XHRfZ2V0LmVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblx0XHRcdHZhciBhcnIgPSBbXTtcclxuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhzZWxlY3RvcikpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7IC8vIGludmFsaWQgc2VsZWN0b3JcclxuXHRcdFx0XHRcdHJldHVybiBhcnI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfdHlwZShzZWxlY3RvcikgPT09ICdub2RlbGlzdCcgfHwgX3R5cGUuQXJyYXkoc2VsZWN0b3IpIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgcmVmID0gYXJyLmxlbmd0aCA9IHNlbGVjdG9yLmxlbmd0aDsgaSA8IHJlZjsgaSsrKSB7IC8vIGxpc3Qgb2YgZWxlbWVudHNcclxuXHRcdFx0XHRcdHZhciBlbGVtID0gc2VsZWN0b3JbaV07XHJcblx0XHRcdFx0XHRhcnJbaV0gPSBfdHlwZS5Eb21FbGVtZW50KGVsZW0pID8gZWxlbSA6IF9nZXQuZWxlbWVudHMoZWxlbSk7IC8vIGlmIG5vdCBhbiBlbGVtZW50LCB0cnkgdG8gcmVzb2x2ZSByZWN1cnNpdmVseVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5Eb21FbGVtZW50KHNlbGVjdG9yKSB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQgfHwgc2VsZWN0b3IgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGFyciA9IFtzZWxlY3Rvcl07IC8vIG9ubHkgdGhlIGVsZW1lbnRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBzY3JvbGwgdG9wIHZhbHVlXHJcblx0XHRfZ2V0LnNjcm9sbFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdHJldHVybiAoZWxlbSAmJiB0eXBlb2YgZWxlbS5zY3JvbGxUb3AgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IHNjcm9sbCBsZWZ0IHZhbHVlXHJcblx0XHRfZ2V0LnNjcm9sbExlZnQgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsTGVmdCA9PT0gJ251bWJlcicpID8gZWxlbS5zY3JvbGxMZWZ0IDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgaGVpZ2h0XHJcblx0XHRfZ2V0LndpZHRoID0gZnVuY3Rpb24gKGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCd3aWR0aCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgZWxlbWVudCB3aWR0aFxyXG5cdFx0X2dldC5oZWlnaHQgPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0cmV0dXJuIF9kaW1lbnNpb24oJ2hlaWdodCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgcG9zaXRpb24gKG9wdGlvbmFsbHkgcmVsYXRpdmUgdG8gdmlld3BvcnQpXHJcblx0XHRfZ2V0Lm9mZnNldCA9IGZ1bmN0aW9uIChlbGVtLCByZWxhdGl2ZVRvVmlld3BvcnQpIHtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoZWxlbSAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgeyAvLyBjaGVjayBpZiBhdmFpbGFibGVcclxuXHRcdFx0XHR2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0b2Zmc2V0LnRvcCA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdG9mZnNldC5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRcdGlmICghcmVsYXRpdmVUb1ZpZXdwb3J0KSB7IC8vIGNsaWVudFJlY3QgaXMgYnkgZGVmYXVsdCByZWxhdGl2ZSB0byB2aWV3cG9ydC4uLlxyXG5cdFx0XHRcdFx0b2Zmc2V0LnRvcCArPSBfZ2V0LnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRcdFx0b2Zmc2V0LmxlZnQgKz0gX2dldC5zY3JvbGxMZWZ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvZmZzZXQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBET00gRWxlbWVudCBtYW5pcHVsYXRpb25cclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0VS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcclxuXHRcdFx0aWYgKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRcdGlmIChlbGVtLmNsYXNzTGlzdClcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzbmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdFUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XHJcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QpXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NuYW1lKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdC8vIGlmIG9wdGlvbnMgaXMgc3RyaW5nIC0+IHJldHVybnMgY3NzIHZhbHVlXHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIGFycmF5IC0+IHJldHVybnMgb2JqZWN0IHdpdGggY3NzIHZhbHVlIHBhaXJzXHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIG9iamVjdCAtPiBzZXQgbmV3IGNzcyB2YWx1ZXNcclxuXHRcdFUuY3NzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhvcHRpb25zKSkge1xyXG5cdFx0XHRcdHJldHVybiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtfY2FtZWxDYXNlKG9wdGlvbnMpXTtcclxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5BcnJheShvcHRpb25zKSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0b2JqID0ge30sXHJcblx0XHRcdFx0XHRzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG5cdFx0XHRcdG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uLCBrZXkpIHtcclxuXHRcdFx0XHRcdG9ialtvcHRpb25dID0gc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XHJcblx0XHRcdFx0XHR2YXIgdmFsID0gb3B0aW9uc1tvcHRpb25dO1xyXG5cdFx0XHRcdFx0aWYgKHZhbCA9PSBwYXJzZUZsb2F0KHZhbCkpIHsgLy8gYXNzdW1lIHBpeGVsIGZvciBzZWVtaW5nbHkgbnVtZXJpY2FsIHZhbHVlc1xyXG5cdFx0XHRcdFx0XHR2YWwgKz0gJ3B4JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsZW0uc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXSA9IHZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIFU7XHJcblx0fSh3aW5kb3cgfHwge30pKTtcclxuXHJcblxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5hZGRJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgYWRkSW5kaWNhdG9ycygpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdkZWJ1Zy5hZGRJbmRpY2F0b3JzXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVJbmRpY2F0b3JzKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2RlYnVnLmFkZEluZGljYXRvcnNcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VHdlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlVHdlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZVZlbG9jaXR5KCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi52ZWxvY2l0eVxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLnZlbG9jaXR5LmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHJldHVybiBTY3JvbGxNYWdpYztcclxufSkpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnO1xuIFxuXG4kID0galF1ZXJ5O1xuXG4kKCcudG9nZ2xlLW5hdicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XG59KVxuXG5cblxuXG52YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgnKTtcbi8qdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUse1xuICAgIGxpbWl0WDogMTAsXG4gICAgbGltaXRZOiAxMCxcbiAgICBzY2FsYXJYOiAyLFxuICAgIHNjYWxhclk6IDIsXG59KTtcbiovXG5cblxuY29uc29sZS5sb2coYEFoLCB5b3UgaGF2ZSBvcGVuZWQgdGhlIGNvbnNvbGUuXG5cbkkgdG9vIGxpa2UgdG8gbGl2ZSBkYW5nZXJvdXNseS5cblxuXG4gICAgICAgKigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKC8gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICgoKCgoICAgICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAoKCgoKCgoKCAgICAgQEBAQEBAQEBAQEBAQEAgICAgIFxuICAgICAgICAgICAgKCgoKCAgICAgICAoKCgoKCggICAgICAgICAgICAgICAgICAgICAvKCgoKCggICAgICBAQEBAQEBAQEBAQEBAQEBAICBcbiAgICAgICAgICAgICAgKCggICAgICAgKCgoKCgoICAgICAgKCgoKCgoKCgoLiAgICAgICgoKCgoICAgICAgICggICAgICAgIEBAQEBAQEAgXG4gICAgICAgICAgICAgICAoICAgICAgICgoKCgoKCAgICAgICgoKCgoKCgoKCggICAgICAgKCgoKCAgICAgICAoKCAgICAgICAgQEBAQEBALlxuICAgICAgICAgICAgICAgICAgICAgICAoKCgoKCggICAgICAoKCgoKCgoKCgqICAgICAgKCgoKCggICAgICAgKCgoICAgICAgIEBAQEBAQCBcbiAgICAgICAgICAgICAgICAmICAgICAgKCgoKCgoICAgICAgICAgICAgICAgICAgICAoKCgoKCgoICAgICAgICgoKCgsICAgQEBAQEBAQCMgXG4gICAgICAgICAgICAgICAgJkAlICAgICgoKCgoKCAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCAgICAgICAgICAgICBAQEBAQEBAQCAgIFxuICAgICAgICAgICAgICAgICZAQEAgICAoKCgoKCggICAgICAoKCgoKCgoKCggICAgICAgKCgoKCggICAgICAgICAgICAgIEBAQEAgICAgICBcbiAgICAgICAgICAgICAgICAmQEBAQCAgKCgoKCgoICAgICAgKCgoKCgoKCgoKCggICAgICAoKCgoICAgICAgICgoKCgoICAgQEBAQCAgICAgXG4qQEBAQEBAICAgICAgICAgQEBAQEBAICgoKCgoKCAgICAgICgoKCgoKCgoKCgoICAgICAgKCgoKCAgICAgICAoKCgoKCggICAgQEBAICAgIFxuQEBAQEBAQCAgICAgICBAQEBAQEBAICwoKCgoKCAgICAgICgoKCgoKCgoKCAgICAgICAgKCgoKCAgICAgICAoKCgoKCgoKCAgIEBAQCYgIFxuIEBAQEBAQEBAQEBAQEBAQEBAQCYgICAgKCgoKCAgICAgICAgICAgICAgICAgICAgICgoKCgoKCAgICAgICAoKCgoKCgoKCggICBAQEBAIFxuICAgIEBAQEBAQEBAQEBAQCUgICAgICAgICgoKCAgICAgICAgICAgICAgICAgICgoKCgoKCgoKCAgICAgICAoKCgoKCgoKCgoICAgQEBAQFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCggIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLygoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoIFxuXG5cblxuYCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoJy5sb2FkZXInKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoJy5sb2FkZXItMicpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnY29udGVudC1sb2FkZWQnKTtcbiAgfSk7IFxuXG5cbmltcG9ydCB7IGluaXRIZWFkZXJTY3JvbGwgfSBmcm9tICcuL2pzL3Njcm9sbC5qcyc7XG5cbmluaXRIZWFkZXJTY3JvbGwoKTsiLCJpbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMnO1xuaW1wb3J0IFwiaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZSFzY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzXCI7XG5cbiQgPSBqUXVlcnk7XG5cbmZ1bmN0aW9uIGluaXRIZWFkZXJTY3JvbGwoKXtcblxubGV0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xuXG5cdC8vIGJ1aWxkIHNjZW5lc1xubGV0IGhlYWRlclNjcm9sbCA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgb2Zmc2V0OiAxNTBcbn0pXG5cdFx0XHRcdFx0LnNldENsYXNzVG9nZ2xlKFwiI2hlYWRlci1tYWluXCIsIFwic2Nyb2xsZWRcIikgLy8gYWRkIGNsYXNzIHRvZ2dsZVxuXHRcdFx0XHRcdC8vLmFkZEluZGljYXRvcnMoKSAvLyBhZGQgaW5kaWNhdG9ycyAocmVxdWlyZXMgcGx1Z2luKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIFxufVxuXG5leHBvcnQgeyBpbml0SGVhZGVyU2Nyb2xsIH07IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9