!function(i){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=i,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=15)}({1:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},15:function(t,e,i){"use strict";var n,o=i(16),r=(n=o)&&n.__esModule?n:{default:n};$=jQuery;var s=document.getElementById("parallax");new r.default(s,{limitX:10,limitY:10,scalarX:2,scalarY:2})},16:function(t,e,i){(function(e){t.exports=function o(r,s,a){function l(i,t){if(!s[i]){if(!r[i]){if(0,h)return h(i,!0);var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}var n=s[i]={exports:{}};r[i][0].call(n.exports,function(t){var e=r[i][1][t];return l(e||t)},n,n.exports,o,r,s,a)}return s[i].exports}for(var h=!1,t=0;t<a.length;t++)l(a[t]);return l}({1:[function(t,e,i){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
"use strict";var l=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join("")?void 0:1}catch(t){return}}()?Object.assign:function(t,e){for(var i,n,o=function(t){if(null!=t)return Object(t);throw new TypeError("Object.assign cannot be called with null or undefined")}(t),r=1;r<arguments.length;r++){for(var s in i=Object(arguments[r]))h.call(i,s)&&(o[s]=i[s]);if(l){n=l(i);for(var a=0;a<n.length;a++)u.call(i,n[a])&&(o[n[a]]=i[n[a]])}}return o}},{}],2:[function(t,a,e){(function(s){(function(){var t,e,i,n,o,r;"undefined"!=typeof performance&&null!==performance&&performance.now?a.exports=function(){return performance.now()}:null!=s&&s.hrtime?(a.exports=function(){return(t()-o)/1e6},e=s.hrtime,n=(t=function(){var t;return 1e9*(t=e())[0]+t[1]})(),r=1e9*s.uptime(),o=n-r):i=Date.now?(a.exports=function(){return Date.now()-i},Date.now()):(a.exports=function(){return(new Date).getTime()-i},(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){var n,o,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var h,u=[],c=!1,d=-1;function m(){c&&h&&(c=!1,h.length?u=h.concat(u):d=-1,u.length&&p())}function p(){if(!c){var t=l(m);c=!0;for(var e=u.length;e;){for(h=u,u=[];++d<e;)h&&h[d].run();d=-1,e=u.length}h=null,c=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function v(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new f(t,e)),1!==u.length||c||l(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],4:[function(c,d,t){(function(t){for(var n=c("performance-now"),e="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",r=e["request"+o],s=e["cancel"+o]||e["cancelRequest"+o],a=0;!r&&a<i.length;a++)r=e[i[a]+"Request"+o],s=e[i[a]+"Cancel"+o]||e[i[a]+"CancelRequest"+o];if(!r||!s){var l=0,h=0,u=[];r=function(t){if(0===u.length){var e=n(),i=Math.max(0,1e3/60-(e-l));l=i+e,setTimeout(function(){for(var t=u.slice(0),e=u.length=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(l)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return u.push({handle:++h,callback:t,cancelled:!1}),h},s=function(t){for(var e=0;e<u.length;e++)u[e].handle===t&&(u[e].cancelled=!0)}}d.exports=function(t){return r.call(e,t)},d.exports.cancel=function(){s.apply(e,arguments)},d.exports.polyfill=function(){e.requestAnimationFrame=r,e.cancelAnimationFrame=s}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";var n=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=t("raf"),r=t("object-assign"),m={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:i<t?i:t:t<i?i:e<t?e:t},data:function(t,e){return m.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){m.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),m.css(t,"transform-style","preserve-3d"),m.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,r=null,s=null,a=0,l=m.vendors.length;a<l;a++)if(s=null!==m.vendors[a]?(r=m.vendors[a][0]+"transform",m.vendors[a][1]+"Transform"):r="transform",void 0!==e.style[s]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var h=document.body||document.createElement("body"),u=document.documentElement,c=u.style.overflow,d=!1;document.body||(d=!0,u.style.overflow="hidden",u.appendChild(h),h.style.overflow="hidden",h.style.background=""),h.appendChild(e),e.style[s]="translate3d(1px,1px,1px)",n=window.getComputedStyle(e).getPropertyValue(r),o=void 0!==n&&0<n.length&&"none"!==n,u.style.overflow=c,h.removeChild(e),d&&(h.removeAttribute("style"),h.parentNode.removeChild(h))}}return o},css:function(t,e,i){var n=m.propertyCache[e];if(!n)for(var o=0,r=m.vendors.length;o<r;o++)if(n=null!==m.vendors[o]?m.camelCase(m.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){m.propertyCache[e]=n;break}t.style[n]=i}},s={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},o=function(){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.element=t;var i={calibrateX:m.data(this.element,"calibrate-x"),calibrateY:m.data(this.element,"calibrate-y"),invertX:m.data(this.element,"invert-x"),invertY:m.data(this.element,"invert-y"),limitX:m.data(this.element,"limit-x"),limitY:m.data(this.element,"limit-y"),scalarX:m.data(this.element,"scalar-x"),scalarY:m.data(this.element,"scalar-y"),frictionX:m.data(this.element,"friction-x"),frictionY:m.data(this.element,"friction-y"),originX:m.data(this.element,"origin-x"),originY:m.data(this.element,"origin-y"),pointerEvents:m.data(this.element,"pointer-events"),precision:m.data(this.element,"precision"),relativeInput:m.data(this.element,"relative-input"),clipRelativeInput:m.data(this.element,"clip-relative-input"),hoverOnly:m.data(this.element,"hover-only"),inputElement:document.querySelector(m.data(this.element,"input-element")),selector:m.data(this.element,"selector")};for(var n in i)null===i[n]&&delete i[n];r(this,s,i,e),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(o,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=m.transformSupport("2D"),this.transform3DSupport=m.transformSupport("3D")),this.transform3DSupport&&m.accelerate(this.element);var t=window.getComputedStyle(this.element);"static"===t.getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&m.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=m.data(e,"depth")||0;this.depthsX.push(m.data(e,"depth-x")||i),this.depthsY.push(m.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=l(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),l.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?m.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?m.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=m.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=m.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],s=this.velocityX*(o*(this.invertX?-1:1)),a=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,s,a)}this.raf=l(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),o}();e.exports=o},{"object-assign":1,raf:4}]},{},[5])(5)}).call(this,i(1))}});