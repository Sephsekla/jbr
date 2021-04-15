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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/homepage.js");
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

/***/ "./node_modules/.pnpm/he@1.2.0/node_modules/he/he.js":
/*!***********************************************************!*\
  !*** ./node_modules/.pnpm/he@1.2.0/node_modules/he/he.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	// All astral symbols.
	var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	// All ASCII symbols (not just printable ASCII) except those listed in the
	// first column of the overrides table.
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
	var regexAsciiWhitelist = /[\x01-\x7F]/g;
	// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
	// code points listed in the first column of the overrides table on
	// https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
	var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;

	var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
	var encodeMap = {'\xAD':'shy','\u200C':'zwnj','\u200D':'zwj','\u200E':'lrm','\u2063':'ic','\u2062':'it','\u2061':'af','\u200F':'rlm','\u200B':'ZeroWidthSpace','\u2060':'NoBreak','\u0311':'DownBreve','\u20DB':'tdot','\u20DC':'DotDot','\t':'Tab','\n':'NewLine','\u2008':'puncsp','\u205F':'MediumSpace','\u2009':'thinsp','\u200A':'hairsp','\u2004':'emsp13','\u2002':'ensp','\u2005':'emsp14','\u2003':'emsp','\u2007':'numsp','\xA0':'nbsp','\u205F\u200A':'ThickSpace','\u203E':'oline','_':'lowbar','\u2010':'dash','\u2013':'ndash','\u2014':'mdash','\u2015':'horbar',',':'comma',';':'semi','\u204F':'bsemi',':':'colon','\u2A74':'Colone','!':'excl','\xA1':'iexcl','?':'quest','\xBF':'iquest','.':'period','\u2025':'nldr','\u2026':'mldr','\xB7':'middot','\'':'apos','\u2018':'lsquo','\u2019':'rsquo','\u201A':'sbquo','\u2039':'lsaquo','\u203A':'rsaquo','"':'quot','\u201C':'ldquo','\u201D':'rdquo','\u201E':'bdquo','\xAB':'laquo','\xBB':'raquo','(':'lpar',')':'rpar','[':'lsqb',']':'rsqb','{':'lcub','}':'rcub','\u2308':'lceil','\u2309':'rceil','\u230A':'lfloor','\u230B':'rfloor','\u2985':'lopar','\u2986':'ropar','\u298B':'lbrke','\u298C':'rbrke','\u298D':'lbrkslu','\u298E':'rbrksld','\u298F':'lbrksld','\u2990':'rbrkslu','\u2991':'langd','\u2992':'rangd','\u2993':'lparlt','\u2994':'rpargt','\u2995':'gtlPar','\u2996':'ltrPar','\u27E6':'lobrk','\u27E7':'robrk','\u27E8':'lang','\u27E9':'rang','\u27EA':'Lang','\u27EB':'Rang','\u27EC':'loang','\u27ED':'roang','\u2772':'lbbrk','\u2773':'rbbrk','\u2016':'Vert','\xA7':'sect','\xB6':'para','@':'commat','*':'ast','/':'sol','undefined':null,'&':'amp','#':'num','%':'percnt','\u2030':'permil','\u2031':'pertenk','\u2020':'dagger','\u2021':'Dagger','\u2022':'bull','\u2043':'hybull','\u2032':'prime','\u2033':'Prime','\u2034':'tprime','\u2057':'qprime','\u2035':'bprime','\u2041':'caret','`':'grave','\xB4':'acute','\u02DC':'tilde','^':'Hat','\xAF':'macr','\u02D8':'breve','\u02D9':'dot','\xA8':'die','\u02DA':'ring','\u02DD':'dblac','\xB8':'cedil','\u02DB':'ogon','\u02C6':'circ','\u02C7':'caron','\xB0':'deg','\xA9':'copy','\xAE':'reg','\u2117':'copysr','\u2118':'wp','\u211E':'rx','\u2127':'mho','\u2129':'iiota','\u2190':'larr','\u219A':'nlarr','\u2192':'rarr','\u219B':'nrarr','\u2191':'uarr','\u2193':'darr','\u2194':'harr','\u21AE':'nharr','\u2195':'varr','\u2196':'nwarr','\u2197':'nearr','\u2198':'searr','\u2199':'swarr','\u219D':'rarrw','\u219D\u0338':'nrarrw','\u219E':'Larr','\u219F':'Uarr','\u21A0':'Rarr','\u21A1':'Darr','\u21A2':'larrtl','\u21A3':'rarrtl','\u21A4':'mapstoleft','\u21A5':'mapstoup','\u21A6':'map','\u21A7':'mapstodown','\u21A9':'larrhk','\u21AA':'rarrhk','\u21AB':'larrlp','\u21AC':'rarrlp','\u21AD':'harrw','\u21B0':'lsh','\u21B1':'rsh','\u21B2':'ldsh','\u21B3':'rdsh','\u21B5':'crarr','\u21B6':'cularr','\u21B7':'curarr','\u21BA':'olarr','\u21BB':'orarr','\u21BC':'lharu','\u21BD':'lhard','\u21BE':'uharr','\u21BF':'uharl','\u21C0':'rharu','\u21C1':'rhard','\u21C2':'dharr','\u21C3':'dharl','\u21C4':'rlarr','\u21C5':'udarr','\u21C6':'lrarr','\u21C7':'llarr','\u21C8':'uuarr','\u21C9':'rrarr','\u21CA':'ddarr','\u21CB':'lrhar','\u21CC':'rlhar','\u21D0':'lArr','\u21CD':'nlArr','\u21D1':'uArr','\u21D2':'rArr','\u21CF':'nrArr','\u21D3':'dArr','\u21D4':'iff','\u21CE':'nhArr','\u21D5':'vArr','\u21D6':'nwArr','\u21D7':'neArr','\u21D8':'seArr','\u21D9':'swArr','\u21DA':'lAarr','\u21DB':'rAarr','\u21DD':'zigrarr','\u21E4':'larrb','\u21E5':'rarrb','\u21F5':'duarr','\u21FD':'loarr','\u21FE':'roarr','\u21FF':'hoarr','\u2200':'forall','\u2201':'comp','\u2202':'part','\u2202\u0338':'npart','\u2203':'exist','\u2204':'nexist','\u2205':'empty','\u2207':'Del','\u2208':'in','\u2209':'notin','\u220B':'ni','\u220C':'notni','\u03F6':'bepsi','\u220F':'prod','\u2210':'coprod','\u2211':'sum','+':'plus','\xB1':'pm','\xF7':'div','\xD7':'times','<':'lt','\u226E':'nlt','<\u20D2':'nvlt','=':'equals','\u2260':'ne','=\u20E5':'bne','\u2A75':'Equal','>':'gt','\u226F':'ngt','>\u20D2':'nvgt','\xAC':'not','|':'vert','\xA6':'brvbar','\u2212':'minus','\u2213':'mp','\u2214':'plusdo','\u2044':'frasl','\u2216':'setmn','\u2217':'lowast','\u2218':'compfn','\u221A':'Sqrt','\u221D':'prop','\u221E':'infin','\u221F':'angrt','\u2220':'ang','\u2220\u20D2':'nang','\u2221':'angmsd','\u2222':'angsph','\u2223':'mid','\u2224':'nmid','\u2225':'par','\u2226':'npar','\u2227':'and','\u2228':'or','\u2229':'cap','\u2229\uFE00':'caps','\u222A':'cup','\u222A\uFE00':'cups','\u222B':'int','\u222C':'Int','\u222D':'tint','\u2A0C':'qint','\u222E':'oint','\u222F':'Conint','\u2230':'Cconint','\u2231':'cwint','\u2232':'cwconint','\u2233':'awconint','\u2234':'there4','\u2235':'becaus','\u2236':'ratio','\u2237':'Colon','\u2238':'minusd','\u223A':'mDDot','\u223B':'homtht','\u223C':'sim','\u2241':'nsim','\u223C\u20D2':'nvsim','\u223D':'bsim','\u223D\u0331':'race','\u223E':'ac','\u223E\u0333':'acE','\u223F':'acd','\u2240':'wr','\u2242':'esim','\u2242\u0338':'nesim','\u2243':'sime','\u2244':'nsime','\u2245':'cong','\u2247':'ncong','\u2246':'simne','\u2248':'ap','\u2249':'nap','\u224A':'ape','\u224B':'apid','\u224B\u0338':'napid','\u224C':'bcong','\u224D':'CupCap','\u226D':'NotCupCap','\u224D\u20D2':'nvap','\u224E':'bump','\u224E\u0338':'nbump','\u224F':'bumpe','\u224F\u0338':'nbumpe','\u2250':'doteq','\u2250\u0338':'nedot','\u2251':'eDot','\u2252':'efDot','\u2253':'erDot','\u2254':'colone','\u2255':'ecolon','\u2256':'ecir','\u2257':'cire','\u2259':'wedgeq','\u225A':'veeeq','\u225C':'trie','\u225F':'equest','\u2261':'equiv','\u2262':'nequiv','\u2261\u20E5':'bnequiv','\u2264':'le','\u2270':'nle','\u2264\u20D2':'nvle','\u2265':'ge','\u2271':'nge','\u2265\u20D2':'nvge','\u2266':'lE','\u2266\u0338':'nlE','\u2267':'gE','\u2267\u0338':'ngE','\u2268\uFE00':'lvnE','\u2268':'lnE','\u2269':'gnE','\u2269\uFE00':'gvnE','\u226A':'ll','\u226A\u0338':'nLtv','\u226A\u20D2':'nLt','\u226B':'gg','\u226B\u0338':'nGtv','\u226B\u20D2':'nGt','\u226C':'twixt','\u2272':'lsim','\u2274':'nlsim','\u2273':'gsim','\u2275':'ngsim','\u2276':'lg','\u2278':'ntlg','\u2277':'gl','\u2279':'ntgl','\u227A':'pr','\u2280':'npr','\u227B':'sc','\u2281':'nsc','\u227C':'prcue','\u22E0':'nprcue','\u227D':'sccue','\u22E1':'nsccue','\u227E':'prsim','\u227F':'scsim','\u227F\u0338':'NotSucceedsTilde','\u2282':'sub','\u2284':'nsub','\u2282\u20D2':'vnsub','\u2283':'sup','\u2285':'nsup','\u2283\u20D2':'vnsup','\u2286':'sube','\u2288':'nsube','\u2287':'supe','\u2289':'nsupe','\u228A\uFE00':'vsubne','\u228A':'subne','\u228B\uFE00':'vsupne','\u228B':'supne','\u228D':'cupdot','\u228E':'uplus','\u228F':'sqsub','\u228F\u0338':'NotSquareSubset','\u2290':'sqsup','\u2290\u0338':'NotSquareSuperset','\u2291':'sqsube','\u22E2':'nsqsube','\u2292':'sqsupe','\u22E3':'nsqsupe','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u2295':'oplus','\u2296':'ominus','\u2297':'otimes','\u2298':'osol','\u2299':'odot','\u229A':'ocir','\u229B':'oast','\u229D':'odash','\u229E':'plusb','\u229F':'minusb','\u22A0':'timesb','\u22A1':'sdotb','\u22A2':'vdash','\u22AC':'nvdash','\u22A3':'dashv','\u22A4':'top','\u22A5':'bot','\u22A7':'models','\u22A8':'vDash','\u22AD':'nvDash','\u22A9':'Vdash','\u22AE':'nVdash','\u22AA':'Vvdash','\u22AB':'VDash','\u22AF':'nVDash','\u22B0':'prurel','\u22B2':'vltri','\u22EA':'nltri','\u22B3':'vrtri','\u22EB':'nrtri','\u22B4':'ltrie','\u22EC':'nltrie','\u22B4\u20D2':'nvltrie','\u22B5':'rtrie','\u22ED':'nrtrie','\u22B5\u20D2':'nvrtrie','\u22B6':'origof','\u22B7':'imof','\u22B8':'mumap','\u22B9':'hercon','\u22BA':'intcal','\u22BB':'veebar','\u22BD':'barvee','\u22BE':'angrtvb','\u22BF':'lrtri','\u22C0':'Wedge','\u22C1':'Vee','\u22C2':'xcap','\u22C3':'xcup','\u22C4':'diam','\u22C5':'sdot','\u22C6':'Star','\u22C7':'divonx','\u22C8':'bowtie','\u22C9':'ltimes','\u22CA':'rtimes','\u22CB':'lthree','\u22CC':'rthree','\u22CD':'bsime','\u22CE':'cuvee','\u22CF':'cuwed','\u22D0':'Sub','\u22D1':'Sup','\u22D2':'Cap','\u22D3':'Cup','\u22D4':'fork','\u22D5':'epar','\u22D6':'ltdot','\u22D7':'gtdot','\u22D8':'Ll','\u22D8\u0338':'nLl','\u22D9':'Gg','\u22D9\u0338':'nGg','\u22DA\uFE00':'lesg','\u22DA':'leg','\u22DB':'gel','\u22DB\uFE00':'gesl','\u22DE':'cuepr','\u22DF':'cuesc','\u22E6':'lnsim','\u22E7':'gnsim','\u22E8':'prnsim','\u22E9':'scnsim','\u22EE':'vellip','\u22EF':'ctdot','\u22F0':'utdot','\u22F1':'dtdot','\u22F2':'disin','\u22F3':'isinsv','\u22F4':'isins','\u22F5':'isindot','\u22F5\u0338':'notindot','\u22F6':'notinvc','\u22F7':'notinvb','\u22F9':'isinE','\u22F9\u0338':'notinE','\u22FA':'nisd','\u22FB':'xnis','\u22FC':'nis','\u22FD':'notnivc','\u22FE':'notnivb','\u2305':'barwed','\u2306':'Barwed','\u230C':'drcrop','\u230D':'dlcrop','\u230E':'urcrop','\u230F':'ulcrop','\u2310':'bnot','\u2312':'profline','\u2313':'profsurf','\u2315':'telrec','\u2316':'target','\u231C':'ulcorn','\u231D':'urcorn','\u231E':'dlcorn','\u231F':'drcorn','\u2322':'frown','\u2323':'smile','\u232D':'cylcty','\u232E':'profalar','\u2336':'topbot','\u233D':'ovbar','\u233F':'solbar','\u237C':'angzarr','\u23B0':'lmoust','\u23B1':'rmoust','\u23B4':'tbrk','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u23DC':'OverParenthesis','\u23DD':'UnderParenthesis','\u23DE':'OverBrace','\u23DF':'UnderBrace','\u23E2':'trpezium','\u23E7':'elinters','\u2423':'blank','\u2500':'boxh','\u2502':'boxv','\u250C':'boxdr','\u2510':'boxdl','\u2514':'boxur','\u2518':'boxul','\u251C':'boxvr','\u2524':'boxvl','\u252C':'boxhd','\u2534':'boxhu','\u253C':'boxvh','\u2550':'boxH','\u2551':'boxV','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2580':'uhblk','\u2584':'lhblk','\u2588':'block','\u2591':'blk14','\u2592':'blk12','\u2593':'blk34','\u25A1':'squ','\u25AA':'squf','\u25AB':'EmptyVerySmallSquare','\u25AD':'rect','\u25AE':'marker','\u25B1':'fltns','\u25B3':'xutri','\u25B4':'utrif','\u25B5':'utri','\u25B8':'rtrif','\u25B9':'rtri','\u25BD':'xdtri','\u25BE':'dtrif','\u25BF':'dtri','\u25C2':'ltrif','\u25C3':'ltri','\u25CA':'loz','\u25CB':'cir','\u25EC':'tridot','\u25EF':'xcirc','\u25F8':'ultri','\u25F9':'urtri','\u25FA':'lltri','\u25FB':'EmptySmallSquare','\u25FC':'FilledSmallSquare','\u2605':'starf','\u2606':'star','\u260E':'phone','\u2640':'female','\u2642':'male','\u2660':'spades','\u2663':'clubs','\u2665':'hearts','\u2666':'diams','\u266A':'sung','\u2713':'check','\u2717':'cross','\u2720':'malt','\u2736':'sext','\u2758':'VerticalSeparator','\u27C8':'bsolhsub','\u27C9':'suphsol','\u27F5':'xlarr','\u27F6':'xrarr','\u27F7':'xharr','\u27F8':'xlArr','\u27F9':'xrArr','\u27FA':'xhArr','\u27FC':'xmap','\u27FF':'dzigrarr','\u2902':'nvlArr','\u2903':'nvrArr','\u2904':'nvHarr','\u2905':'Map','\u290C':'lbarr','\u290D':'rbarr','\u290E':'lBarr','\u290F':'rBarr','\u2910':'RBarr','\u2911':'DDotrahd','\u2912':'UpArrowBar','\u2913':'DownArrowBar','\u2916':'Rarrtl','\u2919':'latail','\u291A':'ratail','\u291B':'lAtail','\u291C':'rAtail','\u291D':'larrfs','\u291E':'rarrfs','\u291F':'larrbfs','\u2920':'rarrbfs','\u2923':'nwarhk','\u2924':'nearhk','\u2925':'searhk','\u2926':'swarhk','\u2927':'nwnear','\u2928':'toea','\u2929':'tosa','\u292A':'swnwar','\u2933':'rarrc','\u2933\u0338':'nrarrc','\u2935':'cudarrr','\u2936':'ldca','\u2937':'rdca','\u2938':'cudarrl','\u2939':'larrpl','\u293C':'curarrm','\u293D':'cularrp','\u2945':'rarrpl','\u2948':'harrcir','\u2949':'Uarrocir','\u294A':'lurdshar','\u294B':'ldrushar','\u294E':'LeftRightVector','\u294F':'RightUpDownVector','\u2950':'DownLeftRightVector','\u2951':'LeftUpDownVector','\u2952':'LeftVectorBar','\u2953':'RightVectorBar','\u2954':'RightUpVectorBar','\u2955':'RightDownVectorBar','\u2956':'DownLeftVectorBar','\u2957':'DownRightVectorBar','\u2958':'LeftUpVectorBar','\u2959':'LeftDownVectorBar','\u295A':'LeftTeeVector','\u295B':'RightTeeVector','\u295C':'RightUpTeeVector','\u295D':'RightDownTeeVector','\u295E':'DownLeftTeeVector','\u295F':'DownRightTeeVector','\u2960':'LeftUpTeeVector','\u2961':'LeftDownTeeVector','\u2962':'lHar','\u2963':'uHar','\u2964':'rHar','\u2965':'dHar','\u2966':'luruhar','\u2967':'ldrdhar','\u2968':'ruluhar','\u2969':'rdldhar','\u296A':'lharul','\u296B':'llhard','\u296C':'rharul','\u296D':'lrhard','\u296E':'udhar','\u296F':'duhar','\u2970':'RoundImplies','\u2971':'erarr','\u2972':'simrarr','\u2973':'larrsim','\u2974':'rarrsim','\u2975':'rarrap','\u2976':'ltlarr','\u2978':'gtrarr','\u2979':'subrarr','\u297B':'suplarr','\u297C':'lfisht','\u297D':'rfisht','\u297E':'ufisht','\u297F':'dfisht','\u299A':'vzigzag','\u299C':'vangrt','\u299D':'angrtvbd','\u29A4':'ange','\u29A5':'range','\u29A6':'dwangle','\u29A7':'uwangle','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u29B0':'bemptyv','\u29B1':'demptyv','\u29B2':'cemptyv','\u29B3':'raemptyv','\u29B4':'laemptyv','\u29B5':'ohbar','\u29B6':'omid','\u29B7':'opar','\u29B9':'operp','\u29BB':'olcross','\u29BC':'odsold','\u29BE':'olcir','\u29BF':'ofcir','\u29C0':'olt','\u29C1':'ogt','\u29C2':'cirscir','\u29C3':'cirE','\u29C4':'solb','\u29C5':'bsolb','\u29C9':'boxbox','\u29CD':'trisb','\u29CE':'rtriltri','\u29CF':'LeftTriangleBar','\u29CF\u0338':'NotLeftTriangleBar','\u29D0':'RightTriangleBar','\u29D0\u0338':'NotRightTriangleBar','\u29DC':'iinfin','\u29DD':'infintie','\u29DE':'nvinfin','\u29E3':'eparsl','\u29E4':'smeparsl','\u29E5':'eqvparsl','\u29EB':'lozf','\u29F4':'RuleDelayed','\u29F6':'dsol','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A04':'xuplus','\u2A06':'xsqcup','\u2A0D':'fpartint','\u2A10':'cirfnint','\u2A11':'awint','\u2A12':'rppolint','\u2A13':'scpolint','\u2A14':'npolint','\u2A15':'pointint','\u2A16':'quatint','\u2A17':'intlarhk','\u2A22':'pluscir','\u2A23':'plusacir','\u2A24':'simplus','\u2A25':'plusdu','\u2A26':'plussim','\u2A27':'plustwo','\u2A29':'mcomma','\u2A2A':'minusdu','\u2A2D':'loplus','\u2A2E':'roplus','\u2A2F':'Cross','\u2A30':'timesd','\u2A31':'timesbar','\u2A33':'smashp','\u2A34':'lotimes','\u2A35':'rotimes','\u2A36':'otimesas','\u2A37':'Otimes','\u2A38':'odiv','\u2A39':'triplus','\u2A3A':'triminus','\u2A3B':'tritime','\u2A3C':'iprod','\u2A3F':'amalg','\u2A40':'capdot','\u2A42':'ncup','\u2A43':'ncap','\u2A44':'capand','\u2A45':'cupor','\u2A46':'cupcap','\u2A47':'capcup','\u2A48':'cupbrcap','\u2A49':'capbrcup','\u2A4A':'cupcup','\u2A4B':'capcap','\u2A4C':'ccups','\u2A4D':'ccaps','\u2A50':'ccupssm','\u2A53':'And','\u2A54':'Or','\u2A55':'andand','\u2A56':'oror','\u2A57':'orslope','\u2A58':'andslope','\u2A5A':'andv','\u2A5B':'orv','\u2A5C':'andd','\u2A5D':'ord','\u2A5F':'wedbar','\u2A66':'sdote','\u2A6A':'simdot','\u2A6D':'congdot','\u2A6D\u0338':'ncongdot','\u2A6E':'easter','\u2A6F':'apacir','\u2A70':'apE','\u2A70\u0338':'napE','\u2A71':'eplus','\u2A72':'pluse','\u2A73':'Esim','\u2A77':'eDDot','\u2A78':'equivDD','\u2A79':'ltcir','\u2A7A':'gtcir','\u2A7B':'ltquest','\u2A7C':'gtquest','\u2A7D':'les','\u2A7D\u0338':'nles','\u2A7E':'ges','\u2A7E\u0338':'nges','\u2A7F':'lesdot','\u2A80':'gesdot','\u2A81':'lesdoto','\u2A82':'gesdoto','\u2A83':'lesdotor','\u2A84':'gesdotol','\u2A85':'lap','\u2A86':'gap','\u2A87':'lne','\u2A88':'gne','\u2A89':'lnap','\u2A8A':'gnap','\u2A8B':'lEg','\u2A8C':'gEl','\u2A8D':'lsime','\u2A8E':'gsime','\u2A8F':'lsimg','\u2A90':'gsiml','\u2A91':'lgE','\u2A92':'glE','\u2A93':'lesges','\u2A94':'gesles','\u2A95':'els','\u2A96':'egs','\u2A97':'elsdot','\u2A98':'egsdot','\u2A99':'el','\u2A9A':'eg','\u2A9D':'siml','\u2A9E':'simg','\u2A9F':'simlE','\u2AA0':'simgE','\u2AA1':'LessLess','\u2AA1\u0338':'NotNestedLessLess','\u2AA2':'GreaterGreater','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA4':'glj','\u2AA5':'gla','\u2AA6':'ltcc','\u2AA7':'gtcc','\u2AA8':'lescc','\u2AA9':'gescc','\u2AAA':'smt','\u2AAB':'lat','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u2AAD':'late','\u2AAD\uFE00':'lates','\u2AAE':'bumpE','\u2AAF':'pre','\u2AAF\u0338':'npre','\u2AB0':'sce','\u2AB0\u0338':'nsce','\u2AB3':'prE','\u2AB4':'scE','\u2AB5':'prnE','\u2AB6':'scnE','\u2AB7':'prap','\u2AB8':'scap','\u2AB9':'prnap','\u2ABA':'scnap','\u2ABB':'Pr','\u2ABC':'Sc','\u2ABD':'subdot','\u2ABE':'supdot','\u2ABF':'subplus','\u2AC0':'supplus','\u2AC1':'submult','\u2AC2':'supmult','\u2AC3':'subedot','\u2AC4':'supedot','\u2AC5':'subE','\u2AC5\u0338':'nsubE','\u2AC6':'supE','\u2AC6\u0338':'nsupE','\u2AC7':'subsim','\u2AC8':'supsim','\u2ACB\uFE00':'vsubnE','\u2ACB':'subnE','\u2ACC\uFE00':'vsupnE','\u2ACC':'supnE','\u2ACF':'csub','\u2AD0':'csup','\u2AD1':'csube','\u2AD2':'csupe','\u2AD3':'subsup','\u2AD4':'supsub','\u2AD5':'subsub','\u2AD6':'supsup','\u2AD7':'suphsub','\u2AD8':'supdsub','\u2AD9':'forkv','\u2ADA':'topfork','\u2ADB':'mlcp','\u2AE4':'Dashv','\u2AE6':'Vdashl','\u2AE7':'Barv','\u2AE8':'vBar','\u2AE9':'vBarv','\u2AEB':'Vbar','\u2AEC':'Not','\u2AED':'bNot','\u2AEE':'rnmid','\u2AEF':'cirmid','\u2AF0':'midcir','\u2AF1':'topcir','\u2AF2':'nhpar','\u2AF3':'parsim','\u2AFD':'parsl','\u2AFD\u20E5':'nparsl','\u266D':'flat','\u266E':'natur','\u266F':'sharp','\xA4':'curren','\xA2':'cent','$':'dollar','\xA3':'pound','\xA5':'yen','\u20AC':'euro','\xB9':'sup1','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\xB2':'sup2','\u2154':'frac23','\u2156':'frac25','\xB3':'sup3','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\uD835\uDCB6':'ascr','\uD835\uDD52':'aopf','\uD835\uDD1E':'afr','\uD835\uDD38':'Aopf','\uD835\uDD04':'Afr','\uD835\uDC9C':'Ascr','\xAA':'ordf','\xE1':'aacute','\xC1':'Aacute','\xE0':'agrave','\xC0':'Agrave','\u0103':'abreve','\u0102':'Abreve','\xE2':'acirc','\xC2':'Acirc','\xE5':'aring','\xC5':'angst','\xE4':'auml','\xC4':'Auml','\xE3':'atilde','\xC3':'Atilde','\u0105':'aogon','\u0104':'Aogon','\u0101':'amacr','\u0100':'Amacr','\xE6':'aelig','\xC6':'AElig','\uD835\uDCB7':'bscr','\uD835\uDD53':'bopf','\uD835\uDD1F':'bfr','\uD835\uDD39':'Bopf','\u212C':'Bscr','\uD835\uDD05':'Bfr','\uD835\uDD20':'cfr','\uD835\uDCB8':'cscr','\uD835\uDD54':'copf','\u212D':'Cfr','\uD835\uDC9E':'Cscr','\u2102':'Copf','\u0107':'cacute','\u0106':'Cacute','\u0109':'ccirc','\u0108':'Ccirc','\u010D':'ccaron','\u010C':'Ccaron','\u010B':'cdot','\u010A':'Cdot','\xE7':'ccedil','\xC7':'Ccedil','\u2105':'incare','\uD835\uDD21':'dfr','\u2146':'dd','\uD835\uDD55':'dopf','\uD835\uDCB9':'dscr','\uD835\uDC9F':'Dscr','\uD835\uDD07':'Dfr','\u2145':'DD','\uD835\uDD3B':'Dopf','\u010F':'dcaron','\u010E':'Dcaron','\u0111':'dstrok','\u0110':'Dstrok','\xF0':'eth','\xD0':'ETH','\u2147':'ee','\u212F':'escr','\uD835\uDD22':'efr','\uD835\uDD56':'eopf','\u2130':'Escr','\uD835\uDD08':'Efr','\uD835\uDD3C':'Eopf','\xE9':'eacute','\xC9':'Eacute','\xE8':'egrave','\xC8':'Egrave','\xEA':'ecirc','\xCA':'Ecirc','\u011B':'ecaron','\u011A':'Ecaron','\xEB':'euml','\xCB':'Euml','\u0117':'edot','\u0116':'Edot','\u0119':'eogon','\u0118':'Eogon','\u0113':'emacr','\u0112':'Emacr','\uD835\uDD23':'ffr','\uD835\uDD57':'fopf','\uD835\uDCBB':'fscr','\uD835\uDD09':'Ffr','\uD835\uDD3D':'Fopf','\u2131':'Fscr','\uFB00':'fflig','\uFB03':'ffilig','\uFB04':'ffllig','\uFB01':'filig','fj':'fjlig','\uFB02':'fllig','\u0192':'fnof','\u210A':'gscr','\uD835\uDD58':'gopf','\uD835\uDD24':'gfr','\uD835\uDCA2':'Gscr','\uD835\uDD3E':'Gopf','\uD835\uDD0A':'Gfr','\u01F5':'gacute','\u011F':'gbreve','\u011E':'Gbreve','\u011D':'gcirc','\u011C':'Gcirc','\u0121':'gdot','\u0120':'Gdot','\u0122':'Gcedil','\uD835\uDD25':'hfr','\u210E':'planckh','\uD835\uDCBD':'hscr','\uD835\uDD59':'hopf','\u210B':'Hscr','\u210C':'Hfr','\u210D':'Hopf','\u0125':'hcirc','\u0124':'Hcirc','\u210F':'hbar','\u0127':'hstrok','\u0126':'Hstrok','\uD835\uDD5A':'iopf','\uD835\uDD26':'ifr','\uD835\uDCBE':'iscr','\u2148':'ii','\uD835\uDD40':'Iopf','\u2110':'Iscr','\u2111':'Im','\xED':'iacute','\xCD':'Iacute','\xEC':'igrave','\xCC':'Igrave','\xEE':'icirc','\xCE':'Icirc','\xEF':'iuml','\xCF':'Iuml','\u0129':'itilde','\u0128':'Itilde','\u0130':'Idot','\u012F':'iogon','\u012E':'Iogon','\u012B':'imacr','\u012A':'Imacr','\u0133':'ijlig','\u0132':'IJlig','\u0131':'imath','\uD835\uDCBF':'jscr','\uD835\uDD5B':'jopf','\uD835\uDD27':'jfr','\uD835\uDCA5':'Jscr','\uD835\uDD0D':'Jfr','\uD835\uDD41':'Jopf','\u0135':'jcirc','\u0134':'Jcirc','\u0237':'jmath','\uD835\uDD5C':'kopf','\uD835\uDCC0':'kscr','\uD835\uDD28':'kfr','\uD835\uDCA6':'Kscr','\uD835\uDD42':'Kopf','\uD835\uDD0E':'Kfr','\u0137':'kcedil','\u0136':'Kcedil','\uD835\uDD29':'lfr','\uD835\uDCC1':'lscr','\u2113':'ell','\uD835\uDD5D':'lopf','\u2112':'Lscr','\uD835\uDD0F':'Lfr','\uD835\uDD43':'Lopf','\u013A':'lacute','\u0139':'Lacute','\u013E':'lcaron','\u013D':'Lcaron','\u013C':'lcedil','\u013B':'Lcedil','\u0142':'lstrok','\u0141':'Lstrok','\u0140':'lmidot','\u013F':'Lmidot','\uD835\uDD2A':'mfr','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\uD835\uDD10':'Mfr','\uD835\uDD44':'Mopf','\u2133':'Mscr','\uD835\uDD2B':'nfr','\uD835\uDD5F':'nopf','\uD835\uDCC3':'nscr','\u2115':'Nopf','\uD835\uDCA9':'Nscr','\uD835\uDD11':'Nfr','\u0144':'nacute','\u0143':'Nacute','\u0148':'ncaron','\u0147':'Ncaron','\xF1':'ntilde','\xD1':'Ntilde','\u0146':'ncedil','\u0145':'Ncedil','\u2116':'numero','\u014B':'eng','\u014A':'ENG','\uD835\uDD60':'oopf','\uD835\uDD2C':'ofr','\u2134':'oscr','\uD835\uDCAA':'Oscr','\uD835\uDD12':'Ofr','\uD835\uDD46':'Oopf','\xBA':'ordm','\xF3':'oacute','\xD3':'Oacute','\xF2':'ograve','\xD2':'Ograve','\xF4':'ocirc','\xD4':'Ocirc','\xF6':'ouml','\xD6':'Ouml','\u0151':'odblac','\u0150':'Odblac','\xF5':'otilde','\xD5':'Otilde','\xF8':'oslash','\xD8':'Oslash','\u014D':'omacr','\u014C':'Omacr','\u0153':'oelig','\u0152':'OElig','\uD835\uDD2D':'pfr','\uD835\uDCC5':'pscr','\uD835\uDD61':'popf','\u2119':'Popf','\uD835\uDD13':'Pfr','\uD835\uDCAB':'Pscr','\uD835\uDD62':'qopf','\uD835\uDD2E':'qfr','\uD835\uDCC6':'qscr','\uD835\uDCAC':'Qscr','\uD835\uDD14':'Qfr','\u211A':'Qopf','\u0138':'kgreen','\uD835\uDD2F':'rfr','\uD835\uDD63':'ropf','\uD835\uDCC7':'rscr','\u211B':'Rscr','\u211C':'Re','\u211D':'Ropf','\u0155':'racute','\u0154':'Racute','\u0159':'rcaron','\u0158':'Rcaron','\u0157':'rcedil','\u0156':'Rcedil','\uD835\uDD64':'sopf','\uD835\uDCC8':'sscr','\uD835\uDD30':'sfr','\uD835\uDD4A':'Sopf','\uD835\uDD16':'Sfr','\uD835\uDCAE':'Sscr','\u24C8':'oS','\u015B':'sacute','\u015A':'Sacute','\u015D':'scirc','\u015C':'Scirc','\u0161':'scaron','\u0160':'Scaron','\u015F':'scedil','\u015E':'Scedil','\xDF':'szlig','\uD835\uDD31':'tfr','\uD835\uDCC9':'tscr','\uD835\uDD65':'topf','\uD835\uDCAF':'Tscr','\uD835\uDD17':'Tfr','\uD835\uDD4B':'Topf','\u0165':'tcaron','\u0164':'Tcaron','\u0163':'tcedil','\u0162':'Tcedil','\u2122':'trade','\u0167':'tstrok','\u0166':'Tstrok','\uD835\uDCCA':'uscr','\uD835\uDD66':'uopf','\uD835\uDD32':'ufr','\uD835\uDD4C':'Uopf','\uD835\uDD18':'Ufr','\uD835\uDCB0':'Uscr','\xFA':'uacute','\xDA':'Uacute','\xF9':'ugrave','\xD9':'Ugrave','\u016D':'ubreve','\u016C':'Ubreve','\xFB':'ucirc','\xDB':'Ucirc','\u016F':'uring','\u016E':'Uring','\xFC':'uuml','\xDC':'Uuml','\u0171':'udblac','\u0170':'Udblac','\u0169':'utilde','\u0168':'Utilde','\u0173':'uogon','\u0172':'Uogon','\u016B':'umacr','\u016A':'Umacr','\uD835\uDD33':'vfr','\uD835\uDD67':'vopf','\uD835\uDCCB':'vscr','\uD835\uDD19':'Vfr','\uD835\uDD4D':'Vopf','\uD835\uDCB1':'Vscr','\uD835\uDD68':'wopf','\uD835\uDCCC':'wscr','\uD835\uDD34':'wfr','\uD835\uDCB2':'Wscr','\uD835\uDD4E':'Wopf','\uD835\uDD1A':'Wfr','\u0175':'wcirc','\u0174':'Wcirc','\uD835\uDD35':'xfr','\uD835\uDCCD':'xscr','\uD835\uDD69':'xopf','\uD835\uDD4F':'Xopf','\uD835\uDD1B':'Xfr','\uD835\uDCB3':'Xscr','\uD835\uDD36':'yfr','\uD835\uDCCE':'yscr','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDD1C':'Yfr','\uD835\uDD50':'Yopf','\xFD':'yacute','\xDD':'Yacute','\u0177':'ycirc','\u0176':'Ycirc','\xFF':'yuml','\u0178':'Yuml','\uD835\uDCCF':'zscr','\uD835\uDD37':'zfr','\uD835\uDD6B':'zopf','\u2128':'Zfr','\u2124':'Zopf','\uD835\uDCB5':'Zscr','\u017A':'zacute','\u0179':'Zacute','\u017E':'zcaron','\u017D':'Zcaron','\u017C':'zdot','\u017B':'Zdot','\u01B5':'imped','\xFE':'thorn','\xDE':'THORN','\u0149':'napos','\u03B1':'alpha','\u0391':'Alpha','\u03B2':'beta','\u0392':'Beta','\u03B3':'gamma','\u0393':'Gamma','\u03B4':'delta','\u0394':'Delta','\u03B5':'epsi','\u03F5':'epsiv','\u0395':'Epsilon','\u03DD':'gammad','\u03DC':'Gammad','\u03B6':'zeta','\u0396':'Zeta','\u03B7':'eta','\u0397':'Eta','\u03B8':'theta','\u03D1':'thetav','\u0398':'Theta','\u03B9':'iota','\u0399':'Iota','\u03BA':'kappa','\u03F0':'kappav','\u039A':'Kappa','\u03BB':'lambda','\u039B':'Lambda','\u03BC':'mu','\xB5':'micro','\u039C':'Mu','\u03BD':'nu','\u039D':'Nu','\u03BE':'xi','\u039E':'Xi','\u03BF':'omicron','\u039F':'Omicron','\u03C0':'pi','\u03D6':'piv','\u03A0':'Pi','\u03C1':'rho','\u03F1':'rhov','\u03A1':'Rho','\u03C3':'sigma','\u03A3':'Sigma','\u03C2':'sigmaf','\u03C4':'tau','\u03A4':'Tau','\u03C5':'upsi','\u03A5':'Upsilon','\u03D2':'Upsi','\u03C6':'phi','\u03D5':'phiv','\u03A6':'Phi','\u03C7':'chi','\u03A7':'Chi','\u03C8':'psi','\u03A8':'Psi','\u03C9':'omega','\u03A9':'ohm','\u0430':'acy','\u0410':'Acy','\u0431':'bcy','\u0411':'Bcy','\u0432':'vcy','\u0412':'Vcy','\u0433':'gcy','\u0413':'Gcy','\u0453':'gjcy','\u0403':'GJcy','\u0434':'dcy','\u0414':'Dcy','\u0452':'djcy','\u0402':'DJcy','\u0435':'iecy','\u0415':'IEcy','\u0451':'iocy','\u0401':'IOcy','\u0454':'jukcy','\u0404':'Jukcy','\u0436':'zhcy','\u0416':'ZHcy','\u0437':'zcy','\u0417':'Zcy','\u0455':'dscy','\u0405':'DScy','\u0438':'icy','\u0418':'Icy','\u0456':'iukcy','\u0406':'Iukcy','\u0457':'yicy','\u0407':'YIcy','\u0439':'jcy','\u0419':'Jcy','\u0458':'jsercy','\u0408':'Jsercy','\u043A':'kcy','\u041A':'Kcy','\u045C':'kjcy','\u040C':'KJcy','\u043B':'lcy','\u041B':'Lcy','\u0459':'ljcy','\u0409':'LJcy','\u043C':'mcy','\u041C':'Mcy','\u043D':'ncy','\u041D':'Ncy','\u045A':'njcy','\u040A':'NJcy','\u043E':'ocy','\u041E':'Ocy','\u043F':'pcy','\u041F':'Pcy','\u0440':'rcy','\u0420':'Rcy','\u0441':'scy','\u0421':'Scy','\u0442':'tcy','\u0422':'Tcy','\u045B':'tshcy','\u040B':'TSHcy','\u0443':'ucy','\u0423':'Ucy','\u045E':'ubrcy','\u040E':'Ubrcy','\u0444':'fcy','\u0424':'Fcy','\u0445':'khcy','\u0425':'KHcy','\u0446':'tscy','\u0426':'TScy','\u0447':'chcy','\u0427':'CHcy','\u045F':'dzcy','\u040F':'DZcy','\u0448':'shcy','\u0428':'SHcy','\u0449':'shchcy','\u0429':'SHCHcy','\u044A':'hardcy','\u042A':'HARDcy','\u044B':'ycy','\u042B':'Ycy','\u044C':'softcy','\u042C':'SOFTcy','\u044D':'ecy','\u042D':'Ecy','\u044E':'yucy','\u042E':'YUcy','\u044F':'yacy','\u042F':'YAcy','\u2135':'aleph','\u2136':'beth','\u2137':'gimel','\u2138':'daleth'};

	var regexEscape = /["&'<>`]/g;
	var escapeMap = {
		'"': '&quot;',
		'&': '&amp;',
		'\'': '&#x27;',
		'<': '&lt;',
		// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
		// following is not strictly necessary unless it’s part of a tag or an
		// unquoted attribute value. We’re only escaping it to support those
		// situations, and for XML support.
		'>': '&gt;',
		// In Internet Explorer ≤ 8, the backtick character can be used
		// to break out of (un)quoted attribute values or HTML comments.
		// See http://html5sec.org/#102, http://html5sec.org/#108, and
		// http://html5sec.org/#133.
		'`': '&#x60;'
	};

	var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
	var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
	var decodeMap = {'aacute':'\xE1','Aacute':'\xC1','abreve':'\u0103','Abreve':'\u0102','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','acy':'\u0430','Acy':'\u0410','aelig':'\xE6','AElig':'\xC6','af':'\u2061','afr':'\uD835\uDD1E','Afr':'\uD835\uDD04','agrave':'\xE0','Agrave':'\xC0','alefsym':'\u2135','aleph':'\u2135','alpha':'\u03B1','Alpha':'\u0391','amacr':'\u0101','Amacr':'\u0100','amalg':'\u2A3F','amp':'&','AMP':'&','and':'\u2227','And':'\u2A53','andand':'\u2A55','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsd':'\u2221','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','aogon':'\u0105','Aogon':'\u0104','aopf':'\uD835\uDD52','Aopf':'\uD835\uDD38','ap':'\u2248','apacir':'\u2A6F','ape':'\u224A','apE':'\u2A70','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','aring':'\xE5','Aring':'\xC5','ascr':'\uD835\uDCB6','Ascr':'\uD835\uDC9C','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','bcy':'\u0431','Bcy':'\u0411','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','beta':'\u03B2','Beta':'\u0392','beth':'\u2136','between':'\u226C','bfr':'\uD835\uDD1F','Bfr':'\uD835\uDD05','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bnot':'\u2310','bNot':'\u2AED','bopf':'\uD835\uDD53','Bopf':'\uD835\uDD39','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxhD':'\u2565','boxHd':'\u2564','boxHD':'\u2566','boxhu':'\u2534','boxhU':'\u2568','boxHu':'\u2567','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsol':'\\','bsolb':'\u29C5','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpe':'\u224F','bumpE':'\u2AAE','bumpeq':'\u224F','Bumpeq':'\u224E','cacute':'\u0107','Cacute':'\u0106','cap':'\u2229','Cap':'\u22D2','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','ccaron':'\u010D','Ccaron':'\u010C','ccedil':'\xE7','Ccedil':'\xC7','ccirc':'\u0109','Ccirc':'\u0108','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','cdot':'\u010B','Cdot':'\u010A','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','chcy':'\u0447','CHcy':'\u0427','check':'\u2713','checkmark':'\u2713','chi':'\u03C7','Chi':'\u03A7','cir':'\u25CB','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cire':'\u2257','cirE':'\u29C3','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','colone':'\u2254','Colone':'\u2A74','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','cscr':'\uD835\uDCB8','Cscr':'\uD835\uDC9E','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cup':'\u222A','Cup':'\u22D3','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','dArr':'\u21D3','Darr':'\u21A1','dash':'\u2010','dashv':'\u22A3','Dashv':'\u2AE4','dbkarow':'\u290F','dblac':'\u02DD','dcaron':'\u010F','Dcaron':'\u010E','dcy':'\u0434','Dcy':'\u0414','dd':'\u2146','DD':'\u2145','ddagger':'\u2021','ddarr':'\u21CA','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','delta':'\u03B4','Delta':'\u0394','demptyv':'\u29B1','dfisht':'\u297F','dfr':'\uD835\uDD21','Dfr':'\uD835\uDD07','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','djcy':'\u0452','DJcy':'\u0402','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','dopf':'\uD835\uDD55','Dopf':'\uD835\uDD3B','dot':'\u02D9','Dot':'\xA8','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','downarrow':'\u2193','Downarrow':'\u21D3','DownArrow':'\u2193','DownArrowBar':'\u2913','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVector':'\u21BD','DownLeftVectorBar':'\u2956','DownRightTeeVector':'\u295F','DownRightVector':'\u21C1','DownRightVectorBar':'\u2957','DownTee':'\u22A4','DownTeeArrow':'\u21A7','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','dscr':'\uD835\uDCB9','Dscr':'\uD835\uDC9F','dscy':'\u0455','DScy':'\u0405','dsol':'\u29F6','dstrok':'\u0111','Dstrok':'\u0110','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','dzcy':'\u045F','DZcy':'\u040F','dzigrarr':'\u27FF','eacute':'\xE9','Eacute':'\xC9','easter':'\u2A6E','ecaron':'\u011B','Ecaron':'\u011A','ecir':'\u2256','ecirc':'\xEA','Ecirc':'\xCA','ecolon':'\u2255','ecy':'\u044D','Ecy':'\u042D','eDDot':'\u2A77','edot':'\u0117','eDot':'\u2251','Edot':'\u0116','ee':'\u2147','efDot':'\u2252','efr':'\uD835\uDD22','Efr':'\uD835\uDD08','eg':'\u2A9A','egrave':'\xE8','Egrave':'\xC8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','emacr':'\u0113','Emacr':'\u0112','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp':'\u2003','emsp13':'\u2004','emsp14':'\u2005','eng':'\u014B','ENG':'\u014A','ensp':'\u2002','eogon':'\u0119','Eogon':'\u0118','eopf':'\uD835\uDD56','Eopf':'\uD835\uDD3C','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','epsilon':'\u03B5','Epsilon':'\u0395','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','esim':'\u2242','Esim':'\u2A73','eta':'\u03B7','Eta':'\u0397','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','fcy':'\u0444','Fcy':'\u0424','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','ffr':'\uD835\uDD23','Ffr':'\uD835\uDD09','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','fopf':'\uD835\uDD57','Fopf':'\uD835\uDD3D','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','gamma':'\u03B3','Gamma':'\u0393','gammad':'\u03DD','Gammad':'\u03DC','gap':'\u2A86','gbreve':'\u011F','Gbreve':'\u011E','Gcedil':'\u0122','gcirc':'\u011D','Gcirc':'\u011C','gcy':'\u0433','Gcy':'\u0413','gdot':'\u0121','Gdot':'\u0120','ge':'\u2265','gE':'\u2267','gel':'\u22DB','gEl':'\u2A8C','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','ges':'\u2A7E','gescc':'\u2AA9','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','gfr':'\uD835\uDD24','Gfr':'\uD835\uDD0A','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','gjcy':'\u0453','GJcy':'\u0403','gl':'\u2277','gla':'\u2AA5','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','gopf':'\uD835\uDD58','Gopf':'\uD835\uDD3E','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','gscr':'\u210A','Gscr':'\uD835\uDCA2','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gt':'>','Gt':'\u226B','GT':'>','gtcc':'\u2AA7','gtcir':'\u2A7A','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','hardcy':'\u044A','HARDcy':'\u042A','harr':'\u2194','hArr':'\u21D4','harrcir':'\u2948','harrw':'\u21AD','Hat':'^','hbar':'\u210F','hcirc':'\u0125','Hcirc':'\u0124','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','hstrok':'\u0127','Hstrok':'\u0126','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','iacute':'\xED','Iacute':'\xCD','ic':'\u2063','icirc':'\xEE','Icirc':'\xCE','icy':'\u0438','Icy':'\u0418','Idot':'\u0130','iecy':'\u0435','IEcy':'\u0415','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','igrave':'\xEC','Igrave':'\xCC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','ijlig':'\u0133','IJlig':'\u0132','Im':'\u2111','imacr':'\u012B','Imacr':'\u012A','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','in':'\u2208','incare':'\u2105','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','int':'\u222B','Int':'\u222C','intcal':'\u22BA','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','iocy':'\u0451','IOcy':'\u0401','iogon':'\u012F','Iogon':'\u012E','iopf':'\uD835\uDD5A','Iopf':'\uD835\uDD40','iota':'\u03B9','Iota':'\u0399','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','itilde':'\u0129','Itilde':'\u0128','iukcy':'\u0456','Iukcy':'\u0406','iuml':'\xEF','Iuml':'\xCF','jcirc':'\u0135','Jcirc':'\u0134','jcy':'\u0439','Jcy':'\u0419','jfr':'\uD835\uDD27','Jfr':'\uD835\uDD0D','jmath':'\u0237','jopf':'\uD835\uDD5B','Jopf':'\uD835\uDD41','jscr':'\uD835\uDCBF','Jscr':'\uD835\uDCA5','jsercy':'\u0458','Jsercy':'\u0408','jukcy':'\u0454','Jukcy':'\u0404','kappa':'\u03BA','Kappa':'\u039A','kappav':'\u03F0','kcedil':'\u0137','Kcedil':'\u0136','kcy':'\u043A','Kcy':'\u041A','kfr':'\uD835\uDD28','Kfr':'\uD835\uDD0E','kgreen':'\u0138','khcy':'\u0445','KHcy':'\u0425','kjcy':'\u045C','KJcy':'\u040C','kopf':'\uD835\uDD5C','Kopf':'\uD835\uDD42','kscr':'\uD835\uDCC0','Kscr':'\uD835\uDCA6','lAarr':'\u21DA','lacute':'\u013A','Lacute':'\u0139','laemptyv':'\u29B4','lagran':'\u2112','lambda':'\u03BB','Lambda':'\u039B','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larr':'\u2190','lArr':'\u21D0','Larr':'\u219E','larrb':'\u21E4','larrbfs':'\u291F','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','lat':'\u2AAB','latail':'\u2919','lAtail':'\u291B','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','lcaron':'\u013E','Lcaron':'\u013D','lcedil':'\u013C','Lcedil':'\u013B','lceil':'\u2308','lcub':'{','lcy':'\u043B','Lcy':'\u041B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','leftarrow':'\u2190','Leftarrow':'\u21D0','LeftArrow':'\u2190','LeftArrowBar':'\u21E4','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVector':'\u21C3','LeftDownVectorBar':'\u2959','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','Leftrightarrow':'\u21D4','LeftRightArrow':'\u2194','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTee':'\u22A3','LeftTeeArrow':'\u21A4','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangle':'\u22B2','LeftTriangleBar':'\u29CF','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVector':'\u21BF','LeftUpVectorBar':'\u2958','LeftVector':'\u21BC','LeftVectorBar':'\u2952','leg':'\u22DA','lEg':'\u2A8B','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','les':'\u2A7D','lescc':'\u2AA8','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','lfr':'\uD835\uDD29','Lfr':'\uD835\uDD0F','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','ljcy':'\u0459','LJcy':'\u0409','ll':'\u226A','Ll':'\u22D8','llarr':'\u21C7','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','lmidot':'\u0140','Lmidot':'\u013F','lmoust':'\u23B0','lmoustache':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','Longleftarrow':'\u27F8','LongLeftArrow':'\u27F5','longleftrightarrow':'\u27F7','Longleftrightarrow':'\u27FA','LongLeftRightArrow':'\u27F7','longmapsto':'\u27FC','longrightarrow':'\u27F6','Longrightarrow':'\u27F9','LongRightArrow':'\u27F6','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','lopf':'\uD835\uDD5D','Lopf':'\uD835\uDD43','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','lstrok':'\u0142','Lstrok':'\u0141','lt':'<','Lt':'\u226A','LT':'<','ltcc':'\u2AA6','ltcir':'\u2A79','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','map':'\u21A6','Map':'\u2905','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','mcy':'\u043C','Mcy':'\u041C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','mfr':'\uD835\uDD2A','Mfr':'\uD835\uDD10','mho':'\u2127','micro':'\xB5','mid':'\u2223','midast':'*','midcir':'\u2AF0','middot':'\xB7','minus':'\u2212','minusb':'\u229F','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','mopf':'\uD835\uDD5E','Mopf':'\uD835\uDD44','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','mu':'\u03BC','Mu':'\u039C','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','nacute':'\u0144','Nacute':'\u0143','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natur':'\u266E','natural':'\u266E','naturals':'\u2115','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','ncaron':'\u0148','Ncaron':'\u0147','ncedil':'\u0146','Ncedil':'\u0145','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','ncy':'\u043D','Ncy':'\u041D','ndash':'\u2013','ne':'\u2260','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','nfr':'\uD835\uDD2B','Nfr':'\uD835\uDD11','nge':'\u2271','ngE':'\u2267\u0338','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','ngt':'\u226F','nGt':'\u226B\u20D2','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','njcy':'\u045A','NJcy':'\u040A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nle':'\u2270','nlE':'\u2266\u0338','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nlt':'\u226E','nLt':'\u226A\u20D2','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','not':'\xAC','Not':'\u2AEC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangle':'\u22EA','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangle':'\u22EB','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','npar':'\u2226','nparallel':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','npre':'\u2AAF\u0338','nprec':'\u2280','npreceq':'\u2AAF\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrc':'\u2933\u0338','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','nscr':'\uD835\uDCC3','Nscr':'\uD835\uDCA9','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsube':'\u2288','nsubE':'\u2AC5\u0338','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupe':'\u2289','nsupE':'\u2AC6\u0338','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','ntilde':'\xF1','Ntilde':'\xD1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','nu':'\u03BD','Nu':'\u039D','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','oacute':'\xF3','Oacute':'\xD3','oast':'\u229B','ocir':'\u229A','ocirc':'\xF4','Ocirc':'\xD4','ocy':'\u043E','Ocy':'\u041E','odash':'\u229D','odblac':'\u0151','Odblac':'\u0150','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','oelig':'\u0153','OElig':'\u0152','ofcir':'\u29BF','ofr':'\uD835\uDD2C','Ofr':'\uD835\uDD12','ogon':'\u02DB','ograve':'\xF2','Ograve':'\xD2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','omacr':'\u014D','Omacr':'\u014C','omega':'\u03C9','Omega':'\u03A9','omicron':'\u03BF','Omicron':'\u039F','omid':'\u29B6','ominus':'\u2296','oopf':'\uD835\uDD60','Oopf':'\uD835\uDD46','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','or':'\u2228','Or':'\u2A54','orarr':'\u21BB','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','oscr':'\u2134','Oscr':'\uD835\uDCAA','oslash':'\xF8','Oslash':'\xD8','osol':'\u2298','otilde':'\xF5','Otilde':'\xD5','otimes':'\u2297','Otimes':'\u2A37','otimesas':'\u2A36','ouml':'\xF6','Ouml':'\xD6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','par':'\u2225','para':'\xB6','parallel':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','pcy':'\u043F','Pcy':'\u041F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','pfr':'\uD835\uDD2D','Pfr':'\uD835\uDD13','phi':'\u03C6','Phi':'\u03A6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','pi':'\u03C0','Pi':'\u03A0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plus':'+','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','pr':'\u227A','Pr':'\u2ABB','prap':'\u2AB7','prcue':'\u227C','pre':'\u2AAF','prE':'\u2AB3','prec':'\u227A','precapprox':'\u2AB7','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportion':'\u2237','Proportional':'\u221D','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','pscr':'\uD835\uDCC5','Pscr':'\uD835\uDCAB','psi':'\u03C8','Psi':'\u03A8','puncsp':'\u2008','qfr':'\uD835\uDD2E','Qfr':'\uD835\uDD14','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','qscr':'\uD835\uDCC6','Qscr':'\uD835\uDCAC','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','racute':'\u0155','Racute':'\u0154','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarr':'\u2192','rArr':'\u21D2','Rarr':'\u21A0','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','rarrtl':'\u21A3','Rarrtl':'\u2916','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','rcaron':'\u0159','Rcaron':'\u0158','rcedil':'\u0157','Rcedil':'\u0156','rceil':'\u2309','rcub':'}','rcy':'\u0440','Rcy':'\u0420','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','Re':'\u211C','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','rho':'\u03C1','Rho':'\u03A1','rhov':'\u03F1','RightAngleBracket':'\u27E9','rightarrow':'\u2192','Rightarrow':'\u21D2','RightArrow':'\u2192','RightArrowBar':'\u21E5','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVector':'\u21C2','RightDownVectorBar':'\u2955','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTee':'\u22A2','RightTeeArrow':'\u21A6','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangle':'\u22B3','RightTriangleBar':'\u29D0','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVector':'\u21BE','RightUpVectorBar':'\u2954','RightVector':'\u21C0','RightVectorBar':'\u2953','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoust':'\u23B1','rmoustache':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','sacute':'\u015B','Sacute':'\u015A','sbquo':'\u201A','sc':'\u227B','Sc':'\u2ABC','scap':'\u2AB8','scaron':'\u0161','Scaron':'\u0160','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','scedil':'\u015F','Scedil':'\u015E','scirc':'\u015D','Scirc':'\u015C','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','scy':'\u0441','Scy':'\u0421','sdot':'\u22C5','sdotb':'\u22A1','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','sfr':'\uD835\uDD30','Sfr':'\uD835\uDD16','sfrown':'\u2322','sharp':'\u266F','shchcy':'\u0449','SHCHcy':'\u0429','shcy':'\u0448','SHcy':'\u0428','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','sigma':'\u03C3','Sigma':'\u03A3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','softcy':'\u044C','SOFTcy':'\u042C','sol':'/','solb':'\u29C4','solbar':'\u233F','sopf':'\uD835\uDD64','Sopf':'\uD835\uDD4A','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','squ':'\u25A1','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squf':'\u25AA','srarr':'\u2192','sscr':'\uD835\uDCC8','Sscr':'\uD835\uDCAE','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','star':'\u2606','Star':'\u22C6','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','sube':'\u2286','subE':'\u2AC5','subedot':'\u2AC3','submult':'\u2AC1','subne':'\u228A','subnE':'\u2ACB','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succ':'\u227B','succapprox':'\u2AB8','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup':'\u2283','Sup':'\u22D1','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','supdot':'\u2ABE','supdsub':'\u2AD8','supe':'\u2287','supE':'\u2AC6','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supne':'\u228B','supnE':'\u2ACC','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','tau':'\u03C4','Tau':'\u03A4','tbrk':'\u23B4','tcaron':'\u0165','Tcaron':'\u0164','tcedil':'\u0163','Tcedil':'\u0162','tcy':'\u0442','Tcy':'\u0422','tdot':'\u20DB','telrec':'\u2315','tfr':'\uD835\uDD31','Tfr':'\uD835\uDD17','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','theta':'\u03B8','Theta':'\u0398','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','thinsp':'\u2009','ThinSpace':'\u2009','thkap':'\u2248','thksim':'\u223C','thorn':'\xFE','THORN':'\xDE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','times':'\xD7','timesb':'\u22A0','timesbar':'\u2A31','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','top':'\u22A4','topbot':'\u2336','topcir':'\u2AF1','topf':'\uD835\uDD65','Topf':'\uD835\uDD4B','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','tscr':'\uD835\uDCC9','Tscr':'\uD835\uDCAF','tscy':'\u0446','TScy':'\u0426','tshcy':'\u045B','TSHcy':'\u040B','tstrok':'\u0167','Tstrok':'\u0166','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','uacute':'\xFA','Uacute':'\xDA','uarr':'\u2191','uArr':'\u21D1','Uarr':'\u219F','Uarrocir':'\u2949','ubrcy':'\u045E','Ubrcy':'\u040E','ubreve':'\u016D','Ubreve':'\u016C','ucirc':'\xFB','Ucirc':'\xDB','ucy':'\u0443','Ucy':'\u0423','udarr':'\u21C5','udblac':'\u0171','Udblac':'\u0170','udhar':'\u296E','ufisht':'\u297E','ufr':'\uD835\uDD32','Ufr':'\uD835\uDD18','ugrave':'\xF9','Ugrave':'\xD9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','umacr':'\u016B','Umacr':'\u016A','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','uogon':'\u0173','Uogon':'\u0172','uopf':'\uD835\uDD66','Uopf':'\uD835\uDD4C','uparrow':'\u2191','Uparrow':'\u21D1','UpArrow':'\u2191','UpArrowBar':'\u2912','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','Updownarrow':'\u21D5','UpDownArrow':'\u2195','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','upsilon':'\u03C5','Upsilon':'\u03A5','UpTee':'\u22A5','UpTeeArrow':'\u21A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','uring':'\u016F','Uring':'\u016E','urtri':'\u25F9','uscr':'\uD835\uDCCA','Uscr':'\uD835\uDCB0','utdot':'\u22F0','utilde':'\u0169','Utilde':'\u0168','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','uuml':'\xFC','Uuml':'\xDC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','vcy':'\u0432','Vcy':'\u0412','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','vee':'\u2228','Vee':'\u22C1','veebar':'\u22BB','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','vfr':'\uD835\uDD33','Vfr':'\uD835\uDD19','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','vopf':'\uD835\uDD67','Vopf':'\uD835\uDD4D','vprop':'\u221D','vrtri':'\u22B3','vscr':'\uD835\uDCCB','Vscr':'\uD835\uDCB1','vsubne':'\u228A\uFE00','vsubnE':'\u2ACB\uFE00','vsupne':'\u228B\uFE00','vsupnE':'\u2ACC\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','wcirc':'\u0175','Wcirc':'\u0174','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','wfr':'\uD835\uDD34','Wfr':'\uD835\uDD1A','wopf':'\uD835\uDD68','Wopf':'\uD835\uDD4E','wp':'\u2118','wr':'\u2240','wreath':'\u2240','wscr':'\uD835\uDCCC','Wscr':'\uD835\uDCB2','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','xfr':'\uD835\uDD35','Xfr':'\uD835\uDD1B','xharr':'\u27F7','xhArr':'\u27FA','xi':'\u03BE','Xi':'\u039E','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','xopf':'\uD835\uDD69','Xopf':'\uD835\uDD4F','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','xscr':'\uD835\uDCCD','Xscr':'\uD835\uDCB3','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','yacute':'\xFD','Yacute':'\xDD','yacy':'\u044F','YAcy':'\u042F','ycirc':'\u0177','Ycirc':'\u0176','ycy':'\u044B','Ycy':'\u042B','yen':'\xA5','yfr':'\uD835\uDD36','Yfr':'\uD835\uDD1C','yicy':'\u0457','YIcy':'\u0407','yopf':'\uD835\uDD6A','Yopf':'\uD835\uDD50','yscr':'\uD835\uDCCE','Yscr':'\uD835\uDCB4','yucy':'\u044E','YUcy':'\u042E','yuml':'\xFF','Yuml':'\u0178','zacute':'\u017A','Zacute':'\u0179','zcaron':'\u017E','Zcaron':'\u017D','zcy':'\u0437','Zcy':'\u0417','zdot':'\u017C','Zdot':'\u017B','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','zeta':'\u03B6','Zeta':'\u0396','zfr':'\uD835\uDD37','Zfr':'\u2128','zhcy':'\u0436','ZHcy':'\u0416','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','zscr':'\uD835\uDCCF','Zscr':'\uD835\uDCB5','zwj':'\u200D','zwnj':'\u200C'};
	var decodeMapLegacy = {'aacute':'\xE1','Aacute':'\xC1','acirc':'\xE2','Acirc':'\xC2','acute':'\xB4','aelig':'\xE6','AElig':'\xC6','agrave':'\xE0','Agrave':'\xC0','amp':'&','AMP':'&','aring':'\xE5','Aring':'\xC5','atilde':'\xE3','Atilde':'\xC3','auml':'\xE4','Auml':'\xC4','brvbar':'\xA6','ccedil':'\xE7','Ccedil':'\xC7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','eacute':'\xE9','Eacute':'\xC9','ecirc':'\xEA','Ecirc':'\xCA','egrave':'\xE8','Egrave':'\xC8','eth':'\xF0','ETH':'\xD0','euml':'\xEB','Euml':'\xCB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','iacute':'\xED','Iacute':'\xCD','icirc':'\xEE','Icirc':'\xCE','iexcl':'\xA1','igrave':'\xEC','Igrave':'\xCC','iquest':'\xBF','iuml':'\xEF','Iuml':'\xCF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','ntilde':'\xF1','Ntilde':'\xD1','oacute':'\xF3','Oacute':'\xD3','ocirc':'\xF4','Ocirc':'\xD4','ograve':'\xF2','Ograve':'\xD2','ordf':'\xAA','ordm':'\xBA','oslash':'\xF8','Oslash':'\xD8','otilde':'\xF5','Otilde':'\xD5','ouml':'\xF6','Ouml':'\xD6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','thorn':'\xFE','THORN':'\xDE','times':'\xD7','uacute':'\xFA','Uacute':'\xDA','ucirc':'\xFB','Ucirc':'\xDB','ugrave':'\xF9','Ugrave':'\xD9','uml':'\xA8','uuml':'\xFC','Uuml':'\xDC','yacute':'\xFD','Yacute':'\xDD','yen':'\xA5','yuml':'\xFF'};
	var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
	var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var has = function(object, propertyName) {
		return hasOwnProperty.call(object, propertyName);
	};

	var contains = function(array, value) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (array[index] == value) {
				return true;
			}
		}
		return false;
	};

	var merge = function(options, defaults) {
		if (!options) {
			return defaults;
		}
		var result = {};
		var key;
		for (key in defaults) {
			// A `hasOwnProperty` check is not needed here, since only recognized
			// option names are used anyway. Any others are ignored.
			result[key] = has(options, key) ? options[key] : defaults[key];
		}
		return result;
	};

	// Modified version of `ucs2encode`; see https://mths.be/punycode.
	var codePointToSymbol = function(codePoint, strict) {
		var output = '';
		if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
			// See issue #4:
			// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
			// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
			// REPLACEMENT CHARACTER.”
			if (strict) {
				parseError('character reference outside the permissible Unicode range');
			}
			return '\uFFFD';
		}
		if (has(decodeMapNumeric, codePoint)) {
			if (strict) {
				parseError('disallowed character reference');
			}
			return decodeMapNumeric[codePoint];
		}
		if (strict && contains(invalidReferenceCodePoints, codePoint)) {
			parseError('disallowed character reference');
		}
		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}
		output += stringFromCharCode(codePoint);
		return output;
	};

	var hexEscape = function(codePoint) {
		return '&#x' + codePoint.toString(16).toUpperCase() + ';';
	};

	var decEscape = function(codePoint) {
		return '&#' + codePoint + ';';
	};

	var parseError = function(message) {
		throw Error('Parse error: ' + message);
	};

	/*--------------------------------------------------------------------------*/

	var encode = function(string, options) {
		options = merge(options, encode.options);
		var strict = options.strict;
		if (strict && regexInvalidRawCodePoint.test(string)) {
			parseError('forbidden code point');
		}
		var encodeEverything = options.encodeEverything;
		var useNamedReferences = options.useNamedReferences;
		var allowUnsafeSymbols = options.allowUnsafeSymbols;
		var escapeCodePoint = options.decimal ? decEscape : hexEscape;

		var escapeBmpSymbol = function(symbol) {
			return escapeCodePoint(symbol.charCodeAt(0));
		};

		if (encodeEverything) {
			// Encode ASCII symbols.
			string = string.replace(regexAsciiWhitelist, function(symbol) {
				// Use named references if requested & possible.
				if (useNamedReferences && has(encodeMap, symbol)) {
					return '&' + encodeMap[symbol] + ';';
				}
				return escapeBmpSymbol(symbol);
			});
			// Shorten a few escapes that represent two symbols, of which at least one
			// is within the ASCII range.
			if (useNamedReferences) {
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;')
					.replace(/&#x66;&#x6A;/g, '&fjlig;');
			}
			// Encode non-ASCII symbols.
			if (useNamedReferences) {
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			}
			// Note: any remaining non-ASCII symbols are handled outside of the `if`.
		} else if (useNamedReferences) {
			// Apply named character references.
			// Encode `<>"'&` using named character references.
			if (!allowUnsafeSymbols) {
				string = string.replace(regexEscape, function(string) {
					return '&' + encodeMap[string] + ';'; // no need to check `has()` here
				});
			}
			// Shorten escapes that represent two symbols, of which at least one is
			// `<>"'&`.
			string = string
				.replace(/&gt;\u20D2/g, '&nvgt;')
				.replace(/&lt;\u20D2/g, '&nvlt;');
			// Encode non-ASCII symbols that can be replaced with a named reference.
			string = string.replace(regexEncodeNonAscii, function(string) {
				// Note: there is no need to check `has(encodeMap, string)` here.
				return '&' + encodeMap[string] + ';';
			});
		} else if (!allowUnsafeSymbols) {
			// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
			// using named character references.
			string = string.replace(regexEscape, escapeBmpSymbol);
		}
		return string
			// Encode astral symbols.
			.replace(regexAstralSymbols, function($0) {
				// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
				var high = $0.charCodeAt(0);
				var low = $0.charCodeAt(1);
				var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				return escapeCodePoint(codePoint);
			})
			// Encode any remaining BMP symbols that are not printable ASCII symbols
			// using a hexadecimal escape.
			.replace(regexBmpWhitelist, escapeBmpSymbol);
	};
	// Expose default options (so they can be overridden globally).
	encode.options = {
		'allowUnsafeSymbols': false,
		'encodeEverything': false,
		'strict': false,
		'useNamedReferences': false,
		'decimal' : false
	};

	var decode = function(html, options) {
		options = merge(options, decode.options);
		var strict = options.strict;
		if (strict && regexInvalidEntity.test(html)) {
			parseError('malformed character reference');
		}
		return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
			var codePoint;
			var semicolon;
			var decDigits;
			var hexDigits;
			var reference;
			var next;

			if ($1) {
				reference = $1;
				// Note: there is no need to check `has(decodeMap, reference)`.
				return decodeMap[reference];
			}

			if ($2) {
				// Decode named character references without trailing `;`, e.g. `&amp`.
				// This is only a parse error if it gets converted to `&`, or if it is
				// followed by `=` in an attribute context.
				reference = $2;
				next = $3;
				if (next && options.isAttributeValue) {
					if (strict && next == '=') {
						parseError('`&` did not start a character reference');
					}
					return $0;
				} else {
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					// Note: there is no need to check `has(decodeMapLegacy, reference)`.
					return decodeMapLegacy[reference] + (next || '');
				}
			}

			if ($4) {
				// Decode decimal escapes, e.g. `&#119558;`.
				decDigits = $4;
				semicolon = $5;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(decDigits, 10);
				return codePointToSymbol(codePoint, strict);
			}

			if ($6) {
				// Decode hexadecimal escapes, e.g. `&#x1D306;`.
				hexDigits = $6;
				semicolon = $7;
				if (strict && !semicolon) {
					parseError('character reference was not terminated by a semicolon');
				}
				codePoint = parseInt(hexDigits, 16);
				return codePointToSymbol(codePoint, strict);
			}

			// If we’re still here, `if ($7)` is implied; it’s an ambiguous
			// ampersand for sure. https://mths.be/notes/ambiguous-ampersands
			if (strict) {
				parseError(
					'named character reference was not terminated by a semicolon'
				);
			}
			return $0;
		});
	};
	// Expose default options (so they can be overridden globally).
	decode.options = {
		'isAttributeValue': false,
		'strict': false
	};

	var escape = function(string) {
		return string.replace(regexEscape, function($0) {
			// Note: there is no need to check `has(escapeMap, $0)` here.
			return escapeMap[$0];
		});
	};

	/*--------------------------------------------------------------------------*/

	var he = {
		'version': '1.2.0',
		'encode': encode,
		'decode': decode,
		'escape': escape,
		'unescape': decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return he;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack@4.43.0/node_modules/webpack/buildin/module.js */ "./node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack@4.43.0/node_modules/webpack/buildin/global.js */ "./node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/.pnpm/typed.js@2.0.11/node_modules/typed.js/lib/typed.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/typed.js@2.0.11/node_modules/typed.js/lib/typed.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/buildin/global.js":
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

/***/ "./node_modules/.pnpm/webpack@4.43.0/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hometype = __webpack_require__(/*! ./js/hometype.js */ "./src/js/hometype.js");

var _hometype2 = _interopRequireDefault(_hometype);

var _scroll = __webpack_require__(/*! ./js/scroll.js */ "./src/js/scroll.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

$ = jQuery;

(0, _hometype2.default)();

(0, _scroll.initHeaderScroll)();

//popInStagger('.link-wrapper','#links',200,0.8);

/***/ }),

/***/ "./src/js/hometype.js":
/*!****************************!*\
  !*** ./src/js/hometype.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typed = __webpack_require__(/*! typed.js */ "./node_modules/.pnpm/typed.js@2.0.11/node_modules/typed.js/lib/typed.js");

var _typed2 = _interopRequireDefault(_typed);

var _he = __webpack_require__(/*! he */ "./node_modules/.pnpm/he@1.2.0/node_modules/he/he.js");

var _he2 = _interopRequireDefault(_he);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var gitMessage = 'git clone joebr.git\n`Cloning into \'joebr\'...`\n`remote: Enumerating objects: 148, done.`\n`remote: Counting objects: 100% (148/148), done.`\n`remote: Compressing objects: 100% (107/107), done.`\n`remote: Total 1652 (delta 55), reused 113 (delta 36), pack-reused 1504`\n`Receiving objects: 100% (1652/1652), 2.77 MiB | 4.39 MiB/s, done.`\n`Resolving deltas: 100% (920/920), done.`\n\n`Hover over the site to see what\'s going on!`';

/**
 *Add realtime typing to home banners
 *
 */
function homeType() {

    var options = {
        strings: [gitMessage, gitMessage],
        typeSpeed: 30,
        smartBackspace: true,
        shuffle: true,
        loop: false,
        onComplete: function onComplete() {
            initialComplete = true;
        }
    };

    var initialComplete = false; // Ensure that our mouseenter effect only happens once the initial message is completed.

    var typed = new _typed2.default('#home-screen', options); // Onload we type out the git clone message

    $('section, div').mouseenter( // On mouseenter we use the html structure of the div.
    function () {
        if (initialComplete) {
            options.strings = [_he2.default.encode($(this).html())];
            options.typeSpeed = 5;

            typed.destroy();

            typed = new _typed2.default('#home-screen', options);
        }
    });
}

exports.default = homeType;

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2hlQDEuMi4wL25vZGVfbW9kdWxlcy9oZS9oZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vc2Nyb2xsbWFnaWNAMi4wLjcvbm9kZV9tb2R1bGVzL3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9wbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9zY3JvbGxtYWdpY0AyLjAuNy9ub2RlX21vZHVsZXMvc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL1Njcm9sbE1hZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS90eXBlZC5qc0AyLjAuMTEvbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ob21ldHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2Nyb2xsLmpzIl0sIm5hbWVzIjpbIiQiLCJnaXRNZXNzYWdlIiwib3B0aW9ucyIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJzbWFydEJhY2tzcGFjZSIsInNodWZmbGUiLCJsb29wIiwib25Db21wbGV0ZSIsImluaXRpYWxDb21wbGV0ZSIsInR5cGVkIiwiVHlwZWQiLCJoZSIsImhvbWVUeXBlIiwiY29udHJvbGxlciIsIlNjcm9sbE1hZ2ljIiwiaGVhZGVyU2Nyb2xsIiwib2Zmc2V0IiwiZHVyYXRpb24iLCJ0cmlnZ2VyUG9zIiwidGVjaEluIiwiVHdlZW5NYXgiLCJhdXRvQWxwaGEiLCJzY2FsZSIsInRlY2hTY3JvbGwiLCJ0cmlnZ2VyRWxlbWVudCIsInJldmVyc2UiLCJ0cmlnZ2VySG9vayIsImluaXRIZWFkZXJTY3JvbGwiLCJwb3BJblN0YWdnZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CQUFtQixLQUEwQjs7QUFFN0M7QUFDQSxrQkFBa0IsS0FBeUI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDhpQkFBOGlCLHdaQUF3WixXQUFXOztBQUVuK0I7QUFDQTtBQUNBLGNBQWM7QUFDZCxhQUFhO0FBQ2IsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFD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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNB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Ozs7Ozs7O0FBRUFiO0FBSEE7OztBQUtBLDRCQUEyQjs7QUFFM0IsS0FBSWMsYUFBYSxJQUFJQyxzQkFBckIsVUFBaUIsRUFBakI7O0FBRUM7QUFDRCxLQUFJQyxlQUFlLElBQUlELHNCQUFKLE1BQXNCO0FBQ3JDRSxVQUFRO0FBRDZCLEVBQXRCLDZDQUc4QjtBQUM1QztBQUpjLFFBQW5CLFVBQW1CLENBQW5CO0FBT0M7O0FBRUQsc0NBQWdFO0FBQUEsS0FBM0JDLFdBQTJCLG9FQUFsQixDQUFrQjtBQUFBLEtBQWZDLGFBQWUsb0VBQUosR0FBSTs7QUFDL0QsS0FBSUwsYUFBYSxJQUFJQyxzQkFBckIsVUFBaUIsRUFBakI7O0FBRUEsS0FBSUssU0FBUyxJQUFJQyxlQUFKLHdCQUFtQztBQUMvQ0MsYUFEK0M7QUFFL0NDLFNBQU87QUFGd0MsRUFBbkMsRUFBYixHQUFhLENBQWI7O0FBS0EsS0FBSUMsYUFBYSxJQUFJVCxzQkFBSixNQUFzQjtBQUN0Q1Usa0JBRHNDO0FBRXRDUCxZQUZzQztBQUd0Q1EsV0FIc0M7QUFJdENDLGVBQWFSO0FBSnlCLEVBQXRCO0FBT2pCO0FBUGlCLFFBQWpCLFVBQWlCLENBQWpCO0FBVUE7O1FBRVFTLGdCLEdBQUFBLGdCO1FBQWtCQyxZLEdBQUFBLFkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2hvbWVwYWdlLmpzXCIpO1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9oZSB2MS4yLjAgYnkgQG1hdGhpYXMgfCBNSVQgbGljZW5zZSAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGVzIGBleHBvcnRzYC5cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cztcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC5cblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzICYmIG1vZHVsZTtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCwgZnJvbSBOb2RlLmpzIG9yIEJyb3dzZXJpZmllZCBjb2RlLFxuXHQvLyBhbmQgdXNlIGl0IGFzIGByb290YC5cblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsKSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvLyBBbGwgYXN0cmFsIHN5bWJvbHMuXG5cdHZhciByZWdleEFzdHJhbFN5bWJvbHMgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuXHQvLyBBbGwgQVNDSUkgc3ltYm9scyAobm90IGp1c3QgcHJpbnRhYmxlIEFTQ0lJKSBleGNlcHQgdGhvc2UgbGlzdGVkIGluIHRoZVxuXHQvLyBmaXJzdCBjb2x1bW4gb2YgdGhlIG92ZXJyaWRlcyB0YWJsZS5cblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjdGFibGUtY2hhcnJlZi1vdmVycmlkZXNcblx0dmFyIHJlZ2V4QXNjaWlXaGl0ZWxpc3QgPSAvW1xceDAxLVxceDdGXS9nO1xuXHQvLyBBbGwgQk1QIHN5bWJvbHMgdGhhdCBhcmUgbm90IEFTQ0lJIG5ld2xpbmVzLCBwcmludGFibGUgQVNDSUkgc3ltYm9scywgb3Jcblx0Ly8gY29kZSBwb2ludHMgbGlzdGVkIGluIHRoZSBmaXJzdCBjb2x1bW4gb2YgdGhlIG92ZXJyaWRlcyB0YWJsZSBvblxuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCN0YWJsZS1jaGFycmVmLW92ZXJyaWRlcy5cblx0dmFyIHJlZ2V4Qm1wV2hpdGVsaXN0ID0gL1tcXHgwMS1cXHRcXHgwQlxcZlxceDBFLVxceDFGXFx4N0ZcXHg4MVxceDhEXFx4OEZcXHg5MFxceDlEXFx4QTAtXFx1RkZGRl0vZztcblxuXHR2YXIgcmVnZXhFbmNvZGVOb25Bc2NpaSA9IC88XFx1MjBEMnw9XFx1MjBFNXw+XFx1MjBEMnxcXHUyMDVGXFx1MjAwQXxcXHUyMTlEXFx1MDMzOHxcXHUyMjAyXFx1MDMzOHxcXHUyMjIwXFx1MjBEMnxcXHUyMjI5XFx1RkUwMHxcXHUyMjJBXFx1RkUwMHxcXHUyMjNDXFx1MjBEMnxcXHUyMjNEXFx1MDMzMXxcXHUyMjNFXFx1MDMzM3xcXHUyMjQyXFx1MDMzOHxcXHUyMjRCXFx1MDMzOHxcXHUyMjREXFx1MjBEMnxcXHUyMjRFXFx1MDMzOHxcXHUyMjRGXFx1MDMzOHxcXHUyMjUwXFx1MDMzOHxcXHUyMjYxXFx1MjBFNXxcXHUyMjY0XFx1MjBEMnxcXHUyMjY1XFx1MjBEMnxcXHUyMjY2XFx1MDMzOHxcXHUyMjY3XFx1MDMzOHxcXHUyMjY4XFx1RkUwMHxcXHUyMjY5XFx1RkUwMHxcXHUyMjZBXFx1MDMzOHxcXHUyMjZBXFx1MjBEMnxcXHUyMjZCXFx1MDMzOHxcXHUyMjZCXFx1MjBEMnxcXHUyMjdGXFx1MDMzOHxcXHUyMjgyXFx1MjBEMnxcXHUyMjgzXFx1MjBEMnxcXHUyMjhBXFx1RkUwMHxcXHUyMjhCXFx1RkUwMHxcXHUyMjhGXFx1MDMzOHxcXHUyMjkwXFx1MDMzOHxcXHUyMjkzXFx1RkUwMHxcXHUyMjk0XFx1RkUwMHxcXHUyMkI0XFx1MjBEMnxcXHUyMkI1XFx1MjBEMnxcXHUyMkQ4XFx1MDMzOHxcXHUyMkQ5XFx1MDMzOHxcXHUyMkRBXFx1RkUwMHxcXHUyMkRCXFx1RkUwMHxcXHUyMkY1XFx1MDMzOHxcXHUyMkY5XFx1MDMzOHxcXHUyOTMzXFx1MDMzOHxcXHUyOUNGXFx1MDMzOHxcXHUyOUQwXFx1MDMzOHxcXHUyQTZEXFx1MDMzOHxcXHUyQTcwXFx1MDMzOHxcXHUyQTdEXFx1MDMzOHxcXHUyQTdFXFx1MDMzOHxcXHUyQUExXFx1MDMzOHxcXHUyQUEyXFx1MDMzOHxcXHUyQUFDXFx1RkUwMHxcXHUyQUFEXFx1RkUwMHxcXHUyQUFGXFx1MDMzOHxcXHUyQUIwXFx1MDMzOHxcXHUyQUM1XFx1MDMzOHxcXHUyQUM2XFx1MDMzOHxcXHUyQUNCXFx1RkUwMHxcXHUyQUNDXFx1RkUwMHxcXHUyQUZEXFx1MjBFNXxbXFx4QTAtXFx1MDExM1xcdTAxMTYtXFx1MDEyMlxcdTAxMjQtXFx1MDEyQlxcdTAxMkUtXFx1MDE0RFxcdTAxNTAtXFx1MDE3RVxcdTAxOTJcXHUwMUI1XFx1MDFGNVxcdTAyMzdcXHUwMkM2XFx1MDJDN1xcdTAyRDgtXFx1MDJERFxcdTAzMTFcXHUwMzkxLVxcdTAzQTFcXHUwM0EzLVxcdTAzQTlcXHUwM0IxLVxcdTAzQzlcXHUwM0QxXFx1MDNEMlxcdTAzRDVcXHUwM0Q2XFx1MDNEQ1xcdTAzRERcXHUwM0YwXFx1MDNGMVxcdTAzRjVcXHUwM0Y2XFx1MDQwMS1cXHUwNDBDXFx1MDQwRS1cXHUwNDRGXFx1MDQ1MS1cXHUwNDVDXFx1MDQ1RVxcdTA0NUZcXHUyMDAyLVxcdTIwMDVcXHUyMDA3LVxcdTIwMTBcXHUyMDEzLVxcdTIwMTZcXHUyMDE4LVxcdTIwMUFcXHUyMDFDLVxcdTIwMUVcXHUyMDIwLVxcdTIwMjJcXHUyMDI1XFx1MjAyNlxcdTIwMzAtXFx1MjAzNVxcdTIwMzlcXHUyMDNBXFx1MjAzRVxcdTIwNDFcXHUyMDQzXFx1MjA0NFxcdTIwNEZcXHUyMDU3XFx1MjA1Ri1cXHUyMDYzXFx1MjBBQ1xcdTIwREJcXHUyMERDXFx1MjEwMlxcdTIxMDVcXHUyMTBBLVxcdTIxMTNcXHUyMTE1LVxcdTIxMUVcXHUyMTIyXFx1MjEyNFxcdTIxMjctXFx1MjEyOVxcdTIxMkNcXHUyMTJEXFx1MjEyRi1cXHUyMTMxXFx1MjEzMy1cXHUyMTM4XFx1MjE0NS1cXHUyMTQ4XFx1MjE1My1cXHUyMTVFXFx1MjE5MC1cXHUyMTlCXFx1MjE5RC1cXHUyMUE3XFx1MjFBOS1cXHUyMUFFXFx1MjFCMC1cXHUyMUIzXFx1MjFCNS1cXHUyMUI3XFx1MjFCQS1cXHUyMURCXFx1MjFERFxcdTIxRTRcXHUyMUU1XFx1MjFGNVxcdTIxRkQtXFx1MjIwNVxcdTIyMDctXFx1MjIwOVxcdTIyMEJcXHUyMjBDXFx1MjIwRi1cXHUyMjE0XFx1MjIxNi1cXHUyMjE4XFx1MjIxQVxcdTIyMUQtXFx1MjIzOFxcdTIyM0EtXFx1MjI1N1xcdTIyNTlcXHUyMjVBXFx1MjI1Q1xcdTIyNUYtXFx1MjI2MlxcdTIyNjQtXFx1MjI4QlxcdTIyOEQtXFx1MjI5QlxcdTIyOUQtXFx1MjJBNVxcdTIyQTctXFx1MjJCMFxcdTIyQjItXFx1MjJCQlxcdTIyQkQtXFx1MjJEQlxcdTIyREUtXFx1MjJFM1xcdTIyRTYtXFx1MjJGN1xcdTIyRjktXFx1MjJGRVxcdTIzMDVcXHUyMzA2XFx1MjMwOC1cXHUyMzEwXFx1MjMxMlxcdTIzMTNcXHUyMzE1XFx1MjMxNlxcdTIzMUMtXFx1MjMxRlxcdTIzMjJcXHUyMzIzXFx1MjMyRFxcdTIzMkVcXHUyMzM2XFx1MjMzRFxcdTIzM0ZcXHUyMzdDXFx1MjNCMFxcdTIzQjFcXHUyM0I0LVxcdTIzQjZcXHUyM0RDLVxcdTIzREZcXHUyM0UyXFx1MjNFN1xcdTI0MjNcXHUyNEM4XFx1MjUwMFxcdTI1MDJcXHUyNTBDXFx1MjUxMFxcdTI1MTRcXHUyNTE4XFx1MjUxQ1xcdTI1MjRcXHUyNTJDXFx1MjUzNFxcdTI1M0NcXHUyNTUwLVxcdTI1NkNcXHUyNTgwXFx1MjU4NFxcdTI1ODhcXHUyNTkxLVxcdTI1OTNcXHUyNUExXFx1MjVBQVxcdTI1QUJcXHUyNUFEXFx1MjVBRVxcdTI1QjFcXHUyNUIzLVxcdTI1QjVcXHUyNUI4XFx1MjVCOVxcdTI1QkQtXFx1MjVCRlxcdTI1QzJcXHUyNUMzXFx1MjVDQVxcdTI1Q0JcXHUyNUVDXFx1MjVFRlxcdTI1RjgtXFx1MjVGQ1xcdTI2MDVcXHUyNjA2XFx1MjYwRVxcdTI2NDBcXHUyNjQyXFx1MjY2MFxcdTI2NjNcXHUyNjY1XFx1MjY2NlxcdTI2NkFcXHUyNjZELVxcdTI2NkZcXHUyNzEzXFx1MjcxN1xcdTI3MjBcXHUyNzM2XFx1Mjc1OFxcdTI3NzJcXHUyNzczXFx1MjdDOFxcdTI3QzlcXHUyN0U2LVxcdTI3RURcXHUyN0Y1LVxcdTI3RkFcXHUyN0ZDXFx1MjdGRlxcdTI5MDItXFx1MjkwNVxcdTI5MEMtXFx1MjkxM1xcdTI5MTZcXHUyOTE5LVxcdTI5MjBcXHUyOTIzLVxcdTI5MkFcXHUyOTMzXFx1MjkzNS1cXHUyOTM5XFx1MjkzQ1xcdTI5M0RcXHUyOTQ1XFx1Mjk0OC1cXHUyOTRCXFx1Mjk0RS1cXHUyOTc2XFx1Mjk3OFxcdTI5NzlcXHUyOTdCLVxcdTI5N0ZcXHUyOTg1XFx1Mjk4NlxcdTI5OEItXFx1Mjk5NlxcdTI5OUFcXHUyOTlDXFx1Mjk5RFxcdTI5QTQtXFx1MjlCN1xcdTI5QjlcXHUyOUJCXFx1MjlCQ1xcdTI5QkUtXFx1MjlDNVxcdTI5QzlcXHUyOUNELVxcdTI5RDBcXHUyOURDLVxcdTI5REVcXHUyOUUzLVxcdTI5RTVcXHUyOUVCXFx1MjlGNFxcdTI5RjZcXHUyQTAwLVxcdTJBMDJcXHUyQTA0XFx1MkEwNlxcdTJBMENcXHUyQTBEXFx1MkExMC1cXHUyQTE3XFx1MkEyMi1cXHUyQTI3XFx1MkEyOVxcdTJBMkFcXHUyQTJELVxcdTJBMzFcXHUyQTMzLVxcdTJBM0NcXHUyQTNGXFx1MkE0MFxcdTJBNDItXFx1MkE0RFxcdTJBNTBcXHUyQTUzLVxcdTJBNThcXHUyQTVBLVxcdTJBNURcXHUyQTVGXFx1MkE2NlxcdTJBNkFcXHUyQTZELVxcdTJBNzVcXHUyQTc3LVxcdTJBOUFcXHUyQTlELVxcdTJBQTJcXHUyQUE0LVxcdTJBQjBcXHUyQUIzLVxcdTJBQzhcXHUyQUNCXFx1MkFDQ1xcdTJBQ0YtXFx1MkFEQlxcdTJBRTRcXHUyQUU2LVxcdTJBRTlcXHUyQUVCLVxcdTJBRjNcXHUyQUZEXFx1RkIwMC1cXHVGQjA0XXxcXHVEODM1W1xcdURDOUNcXHVEQzlFXFx1REM5RlxcdURDQTJcXHVEQ0E1XFx1RENBNlxcdURDQTktXFx1RENBQ1xcdURDQUUtXFx1RENCOVxcdURDQkJcXHVEQ0JELVxcdURDQzNcXHVEQ0M1LVxcdURDQ0ZcXHVERDA0XFx1REQwNVxcdUREMDctXFx1REQwQVxcdUREMEQtXFx1REQxNFxcdUREMTYtXFx1REQxQ1xcdUREMUUtXFx1REQzOVxcdUREM0ItXFx1REQzRVxcdURENDAtXFx1REQ0NFxcdURENDZcXHVERDRBLVxcdURENTBcXHVERDUyLVxcdURENkJdL2c7XG5cdHZhciBlbmNvZGVNYXAgPSB7J1xceEFEJzonc2h5JywnXFx1MjAwQyc6J3p3bmonLCdcXHUyMDBEJzonendqJywnXFx1MjAwRSc6J2xybScsJ1xcdTIwNjMnOidpYycsJ1xcdTIwNjInOidpdCcsJ1xcdTIwNjEnOidhZicsJ1xcdTIwMEYnOidybG0nLCdcXHUyMDBCJzonWmVyb1dpZHRoU3BhY2UnLCdcXHUyMDYwJzonTm9CcmVhaycsJ1xcdTAzMTEnOidEb3duQnJldmUnLCdcXHUyMERCJzondGRvdCcsJ1xcdTIwREMnOidEb3REb3QnLCdcXHQnOidUYWInLCdcXG4nOidOZXdMaW5lJywnXFx1MjAwOCc6J3B1bmNzcCcsJ1xcdTIwNUYnOidNZWRpdW1TcGFjZScsJ1xcdTIwMDknOid0aGluc3AnLCdcXHUyMDBBJzonaGFpcnNwJywnXFx1MjAwNCc6J2Vtc3AxMycsJ1xcdTIwMDInOidlbnNwJywnXFx1MjAwNSc6J2Vtc3AxNCcsJ1xcdTIwMDMnOidlbXNwJywnXFx1MjAwNyc6J251bXNwJywnXFx4QTAnOiduYnNwJywnXFx1MjA1RlxcdTIwMEEnOidUaGlja1NwYWNlJywnXFx1MjAzRSc6J29saW5lJywnXyc6J2xvd2JhcicsJ1xcdTIwMTAnOidkYXNoJywnXFx1MjAxMyc6J25kYXNoJywnXFx1MjAxNCc6J21kYXNoJywnXFx1MjAxNSc6J2hvcmJhcicsJywnOidjb21tYScsJzsnOidzZW1pJywnXFx1MjA0Ric6J2JzZW1pJywnOic6J2NvbG9uJywnXFx1MkE3NCc6J0NvbG9uZScsJyEnOidleGNsJywnXFx4QTEnOidpZXhjbCcsJz8nOidxdWVzdCcsJ1xceEJGJzonaXF1ZXN0JywnLic6J3BlcmlvZCcsJ1xcdTIwMjUnOidubGRyJywnXFx1MjAyNic6J21sZHInLCdcXHhCNyc6J21pZGRvdCcsJ1xcJyc6J2Fwb3MnLCdcXHUyMDE4JzonbHNxdW8nLCdcXHUyMDE5JzoncnNxdW8nLCdcXHUyMDFBJzonc2JxdW8nLCdcXHUyMDM5JzonbHNhcXVvJywnXFx1MjAzQSc6J3JzYXF1bycsJ1wiJzoncXVvdCcsJ1xcdTIwMUMnOidsZHF1bycsJ1xcdTIwMUQnOidyZHF1bycsJ1xcdTIwMUUnOidiZHF1bycsJ1xceEFCJzonbGFxdW8nLCdcXHhCQic6J3JhcXVvJywnKCc6J2xwYXInLCcpJzoncnBhcicsJ1snOidsc3FiJywnXSc6J3JzcWInLCd7JzonbGN1YicsJ30nOidyY3ViJywnXFx1MjMwOCc6J2xjZWlsJywnXFx1MjMwOSc6J3JjZWlsJywnXFx1MjMwQSc6J2xmbG9vcicsJ1xcdTIzMEInOidyZmxvb3InLCdcXHUyOTg1JzonbG9wYXInLCdcXHUyOTg2Jzoncm9wYXInLCdcXHUyOThCJzonbGJya2UnLCdcXHUyOThDJzoncmJya2UnLCdcXHUyOThEJzonbGJya3NsdScsJ1xcdTI5OEUnOidyYnJrc2xkJywnXFx1Mjk4Ric6J2xicmtzbGQnLCdcXHUyOTkwJzoncmJya3NsdScsJ1xcdTI5OTEnOidsYW5nZCcsJ1xcdTI5OTInOidyYW5nZCcsJ1xcdTI5OTMnOidscGFybHQnLCdcXHUyOTk0JzoncnBhcmd0JywnXFx1Mjk5NSc6J2d0bFBhcicsJ1xcdTI5OTYnOidsdHJQYXInLCdcXHUyN0U2JzonbG9icmsnLCdcXHUyN0U3Jzoncm9icmsnLCdcXHUyN0U4JzonbGFuZycsJ1xcdTI3RTknOidyYW5nJywnXFx1MjdFQSc6J0xhbmcnLCdcXHUyN0VCJzonUmFuZycsJ1xcdTI3RUMnOidsb2FuZycsJ1xcdTI3RUQnOidyb2FuZycsJ1xcdTI3NzInOidsYmJyaycsJ1xcdTI3NzMnOidyYmJyaycsJ1xcdTIwMTYnOidWZXJ0JywnXFx4QTcnOidzZWN0JywnXFx4QjYnOidwYXJhJywnQCc6J2NvbW1hdCcsJyonOidhc3QnLCcvJzonc29sJywndW5kZWZpbmVkJzpudWxsLCcmJzonYW1wJywnIyc6J251bScsJyUnOidwZXJjbnQnLCdcXHUyMDMwJzoncGVybWlsJywnXFx1MjAzMSc6J3BlcnRlbmsnLCdcXHUyMDIwJzonZGFnZ2VyJywnXFx1MjAyMSc6J0RhZ2dlcicsJ1xcdTIwMjInOididWxsJywnXFx1MjA0Myc6J2h5YnVsbCcsJ1xcdTIwMzInOidwcmltZScsJ1xcdTIwMzMnOidQcmltZScsJ1xcdTIwMzQnOid0cHJpbWUnLCdcXHUyMDU3JzoncXByaW1lJywnXFx1MjAzNSc6J2JwcmltZScsJ1xcdTIwNDEnOidjYXJldCcsJ2AnOidncmF2ZScsJ1xceEI0JzonYWN1dGUnLCdcXHUwMkRDJzondGlsZGUnLCdeJzonSGF0JywnXFx4QUYnOidtYWNyJywnXFx1MDJEOCc6J2JyZXZlJywnXFx1MDJEOSc6J2RvdCcsJ1xceEE4JzonZGllJywnXFx1MDJEQSc6J3JpbmcnLCdcXHUwMkREJzonZGJsYWMnLCdcXHhCOCc6J2NlZGlsJywnXFx1MDJEQic6J29nb24nLCdcXHUwMkM2JzonY2lyYycsJ1xcdTAyQzcnOidjYXJvbicsJ1xceEIwJzonZGVnJywnXFx4QTknOidjb3B5JywnXFx4QUUnOidyZWcnLCdcXHUyMTE3JzonY29weXNyJywnXFx1MjExOCc6J3dwJywnXFx1MjExRSc6J3J4JywnXFx1MjEyNyc6J21obycsJ1xcdTIxMjknOidpaW90YScsJ1xcdTIxOTAnOidsYXJyJywnXFx1MjE5QSc6J25sYXJyJywnXFx1MjE5Mic6J3JhcnInLCdcXHUyMTlCJzonbnJhcnInLCdcXHUyMTkxJzondWFycicsJ1xcdTIxOTMnOidkYXJyJywnXFx1MjE5NCc6J2hhcnInLCdcXHUyMUFFJzonbmhhcnInLCdcXHUyMTk1JzondmFycicsJ1xcdTIxOTYnOidud2FycicsJ1xcdTIxOTcnOiduZWFycicsJ1xcdTIxOTgnOidzZWFycicsJ1xcdTIxOTknOidzd2FycicsJ1xcdTIxOUQnOidyYXJydycsJ1xcdTIxOURcXHUwMzM4JzonbnJhcnJ3JywnXFx1MjE5RSc6J0xhcnInLCdcXHUyMTlGJzonVWFycicsJ1xcdTIxQTAnOidSYXJyJywnXFx1MjFBMSc6J0RhcnInLCdcXHUyMUEyJzonbGFycnRsJywnXFx1MjFBMyc6J3JhcnJ0bCcsJ1xcdTIxQTQnOidtYXBzdG9sZWZ0JywnXFx1MjFBNSc6J21hcHN0b3VwJywnXFx1MjFBNic6J21hcCcsJ1xcdTIxQTcnOidtYXBzdG9kb3duJywnXFx1MjFBOSc6J2xhcnJoaycsJ1xcdTIxQUEnOidyYXJyaGsnLCdcXHUyMUFCJzonbGFycmxwJywnXFx1MjFBQyc6J3JhcnJscCcsJ1xcdTIxQUQnOidoYXJydycsJ1xcdTIxQjAnOidsc2gnLCdcXHUyMUIxJzoncnNoJywnXFx1MjFCMic6J2xkc2gnLCdcXHUyMUIzJzoncmRzaCcsJ1xcdTIxQjUnOidjcmFycicsJ1xcdTIxQjYnOidjdWxhcnInLCdcXHUyMUI3JzonY3VyYXJyJywnXFx1MjFCQSc6J29sYXJyJywnXFx1MjFCQic6J29yYXJyJywnXFx1MjFCQyc6J2xoYXJ1JywnXFx1MjFCRCc6J2xoYXJkJywnXFx1MjFCRSc6J3VoYXJyJywnXFx1MjFCRic6J3VoYXJsJywnXFx1MjFDMCc6J3JoYXJ1JywnXFx1MjFDMSc6J3JoYXJkJywnXFx1MjFDMic6J2RoYXJyJywnXFx1MjFDMyc6J2RoYXJsJywnXFx1MjFDNCc6J3JsYXJyJywnXFx1MjFDNSc6J3VkYXJyJywnXFx1MjFDNic6J2xyYXJyJywnXFx1MjFDNyc6J2xsYXJyJywnXFx1MjFDOCc6J3V1YXJyJywnXFx1MjFDOSc6J3JyYXJyJywnXFx1MjFDQSc6J2RkYXJyJywnXFx1MjFDQic6J2xyaGFyJywnXFx1MjFDQyc6J3JsaGFyJywnXFx1MjFEMCc6J2xBcnInLCdcXHUyMUNEJzonbmxBcnInLCdcXHUyMUQxJzondUFycicsJ1xcdTIxRDInOidyQXJyJywnXFx1MjFDRic6J25yQXJyJywnXFx1MjFEMyc6J2RBcnInLCdcXHUyMUQ0JzonaWZmJywnXFx1MjFDRSc6J25oQXJyJywnXFx1MjFENSc6J3ZBcnInLCdcXHUyMUQ2JzonbndBcnInLCdcXHUyMUQ3JzonbmVBcnInLCdcXHUyMUQ4Jzonc2VBcnInLCdcXHUyMUQ5Jzonc3dBcnInLCdcXHUyMURBJzonbEFhcnInLCdcXHUyMURCJzonckFhcnInLCdcXHUyMUREJzonemlncmFycicsJ1xcdTIxRTQnOidsYXJyYicsJ1xcdTIxRTUnOidyYXJyYicsJ1xcdTIxRjUnOidkdWFycicsJ1xcdTIxRkQnOidsb2FycicsJ1xcdTIxRkUnOidyb2FycicsJ1xcdTIxRkYnOidob2FycicsJ1xcdTIyMDAnOidmb3JhbGwnLCdcXHUyMjAxJzonY29tcCcsJ1xcdTIyMDInOidwYXJ0JywnXFx1MjIwMlxcdTAzMzgnOiducGFydCcsJ1xcdTIyMDMnOidleGlzdCcsJ1xcdTIyMDQnOiduZXhpc3QnLCdcXHUyMjA1JzonZW1wdHknLCdcXHUyMjA3JzonRGVsJywnXFx1MjIwOCc6J2luJywnXFx1MjIwOSc6J25vdGluJywnXFx1MjIwQic6J25pJywnXFx1MjIwQyc6J25vdG5pJywnXFx1MDNGNic6J2JlcHNpJywnXFx1MjIwRic6J3Byb2QnLCdcXHUyMjEwJzonY29wcm9kJywnXFx1MjIxMSc6J3N1bScsJysnOidwbHVzJywnXFx4QjEnOidwbScsJ1xceEY3JzonZGl2JywnXFx4RDcnOid0aW1lcycsJzwnOidsdCcsJ1xcdTIyNkUnOidubHQnLCc8XFx1MjBEMic6J252bHQnLCc9JzonZXF1YWxzJywnXFx1MjI2MCc6J25lJywnPVxcdTIwRTUnOidibmUnLCdcXHUyQTc1JzonRXF1YWwnLCc+JzonZ3QnLCdcXHUyMjZGJzonbmd0JywnPlxcdTIwRDInOidudmd0JywnXFx4QUMnOidub3QnLCd8JzondmVydCcsJ1xceEE2JzonYnJ2YmFyJywnXFx1MjIxMic6J21pbnVzJywnXFx1MjIxMyc6J21wJywnXFx1MjIxNCc6J3BsdXNkbycsJ1xcdTIwNDQnOidmcmFzbCcsJ1xcdTIyMTYnOidzZXRtbicsJ1xcdTIyMTcnOidsb3dhc3QnLCdcXHUyMjE4JzonY29tcGZuJywnXFx1MjIxQSc6J1NxcnQnLCdcXHUyMjFEJzoncHJvcCcsJ1xcdTIyMUUnOidpbmZpbicsJ1xcdTIyMUYnOidhbmdydCcsJ1xcdTIyMjAnOidhbmcnLCdcXHUyMjIwXFx1MjBEMic6J25hbmcnLCdcXHUyMjIxJzonYW5nbXNkJywnXFx1MjIyMic6J2FuZ3NwaCcsJ1xcdTIyMjMnOidtaWQnLCdcXHUyMjI0Jzonbm1pZCcsJ1xcdTIyMjUnOidwYXInLCdcXHUyMjI2JzonbnBhcicsJ1xcdTIyMjcnOidhbmQnLCdcXHUyMjI4Jzonb3InLCdcXHUyMjI5JzonY2FwJywnXFx1MjIyOVxcdUZFMDAnOidjYXBzJywnXFx1MjIyQSc6J2N1cCcsJ1xcdTIyMkFcXHVGRTAwJzonY3VwcycsJ1xcdTIyMkInOidpbnQnLCdcXHUyMjJDJzonSW50JywnXFx1MjIyRCc6J3RpbnQnLCdcXHUyQTBDJzoncWludCcsJ1xcdTIyMkUnOidvaW50JywnXFx1MjIyRic6J0NvbmludCcsJ1xcdTIyMzAnOidDY29uaW50JywnXFx1MjIzMSc6J2N3aW50JywnXFx1MjIzMic6J2N3Y29uaW50JywnXFx1MjIzMyc6J2F3Y29uaW50JywnXFx1MjIzNCc6J3RoZXJlNCcsJ1xcdTIyMzUnOidiZWNhdXMnLCdcXHUyMjM2JzoncmF0aW8nLCdcXHUyMjM3JzonQ29sb24nLCdcXHUyMjM4JzonbWludXNkJywnXFx1MjIzQSc6J21ERG90JywnXFx1MjIzQic6J2hvbXRodCcsJ1xcdTIyM0MnOidzaW0nLCdcXHUyMjQxJzonbnNpbScsJ1xcdTIyM0NcXHUyMEQyJzonbnZzaW0nLCdcXHUyMjNEJzonYnNpbScsJ1xcdTIyM0RcXHUwMzMxJzoncmFjZScsJ1xcdTIyM0UnOidhYycsJ1xcdTIyM0VcXHUwMzMzJzonYWNFJywnXFx1MjIzRic6J2FjZCcsJ1xcdTIyNDAnOid3cicsJ1xcdTIyNDInOidlc2ltJywnXFx1MjI0MlxcdTAzMzgnOiduZXNpbScsJ1xcdTIyNDMnOidzaW1lJywnXFx1MjI0NCc6J25zaW1lJywnXFx1MjI0NSc6J2NvbmcnLCdcXHUyMjQ3JzonbmNvbmcnLCdcXHUyMjQ2Jzonc2ltbmUnLCdcXHUyMjQ4JzonYXAnLCdcXHUyMjQ5JzonbmFwJywnXFx1MjI0QSc6J2FwZScsJ1xcdTIyNEInOidhcGlkJywnXFx1MjI0QlxcdTAzMzgnOiduYXBpZCcsJ1xcdTIyNEMnOidiY29uZycsJ1xcdTIyNEQnOidDdXBDYXAnLCdcXHUyMjZEJzonTm90Q3VwQ2FwJywnXFx1MjI0RFxcdTIwRDInOidudmFwJywnXFx1MjI0RSc6J2J1bXAnLCdcXHUyMjRFXFx1MDMzOCc6J25idW1wJywnXFx1MjI0Ric6J2J1bXBlJywnXFx1MjI0RlxcdTAzMzgnOiduYnVtcGUnLCdcXHUyMjUwJzonZG90ZXEnLCdcXHUyMjUwXFx1MDMzOCc6J25lZG90JywnXFx1MjI1MSc6J2VEb3QnLCdcXHUyMjUyJzonZWZEb3QnLCdcXHUyMjUzJzonZXJEb3QnLCdcXHUyMjU0JzonY29sb25lJywnXFx1MjI1NSc6J2Vjb2xvbicsJ1xcdTIyNTYnOidlY2lyJywnXFx1MjI1Nyc6J2NpcmUnLCdcXHUyMjU5Jzond2VkZ2VxJywnXFx1MjI1QSc6J3ZlZWVxJywnXFx1MjI1Qyc6J3RyaWUnLCdcXHUyMjVGJzonZXF1ZXN0JywnXFx1MjI2MSc6J2VxdWl2JywnXFx1MjI2Mic6J25lcXVpdicsJ1xcdTIyNjFcXHUyMEU1JzonYm5lcXVpdicsJ1xcdTIyNjQnOidsZScsJ1xcdTIyNzAnOidubGUnLCdcXHUyMjY0XFx1MjBEMic6J252bGUnLCdcXHUyMjY1JzonZ2UnLCdcXHUyMjcxJzonbmdlJywnXFx1MjI2NVxcdTIwRDInOidudmdlJywnXFx1MjI2Nic6J2xFJywnXFx1MjI2NlxcdTAzMzgnOidubEUnLCdcXHUyMjY3JzonZ0UnLCdcXHUyMjY3XFx1MDMzOCc6J25nRScsJ1xcdTIyNjhcXHVGRTAwJzonbHZuRScsJ1xcdTIyNjgnOidsbkUnLCdcXHUyMjY5JzonZ25FJywnXFx1MjI2OVxcdUZFMDAnOidndm5FJywnXFx1MjI2QSc6J2xsJywnXFx1MjI2QVxcdTAzMzgnOiduTHR2JywnXFx1MjI2QVxcdTIwRDInOiduTHQnLCdcXHUyMjZCJzonZ2cnLCdcXHUyMjZCXFx1MDMzOCc6J25HdHYnLCdcXHUyMjZCXFx1MjBEMic6J25HdCcsJ1xcdTIyNkMnOid0d2l4dCcsJ1xcdTIyNzInOidsc2ltJywnXFx1MjI3NCc6J25sc2ltJywnXFx1MjI3Myc6J2dzaW0nLCdcXHUyMjc1JzonbmdzaW0nLCdcXHUyMjc2JzonbGcnLCdcXHUyMjc4JzonbnRsZycsJ1xcdTIyNzcnOidnbCcsJ1xcdTIyNzknOidudGdsJywnXFx1MjI3QSc6J3ByJywnXFx1MjI4MCc6J25wcicsJ1xcdTIyN0InOidzYycsJ1xcdTIyODEnOiduc2MnLCdcXHUyMjdDJzoncHJjdWUnLCdcXHUyMkUwJzonbnByY3VlJywnXFx1MjI3RCc6J3NjY3VlJywnXFx1MjJFMSc6J25zY2N1ZScsJ1xcdTIyN0UnOidwcnNpbScsJ1xcdTIyN0YnOidzY3NpbScsJ1xcdTIyN0ZcXHUwMzM4JzonTm90U3VjY2VlZHNUaWxkZScsJ1xcdTIyODInOidzdWInLCdcXHUyMjg0JzonbnN1YicsJ1xcdTIyODJcXHUyMEQyJzondm5zdWInLCdcXHUyMjgzJzonc3VwJywnXFx1MjI4NSc6J25zdXAnLCdcXHUyMjgzXFx1MjBEMic6J3Zuc3VwJywnXFx1MjI4Nic6J3N1YmUnLCdcXHUyMjg4JzonbnN1YmUnLCdcXHUyMjg3Jzonc3VwZScsJ1xcdTIyODknOiduc3VwZScsJ1xcdTIyOEFcXHVGRTAwJzondnN1Ym5lJywnXFx1MjI4QSc6J3N1Ym5lJywnXFx1MjI4QlxcdUZFMDAnOid2c3VwbmUnLCdcXHUyMjhCJzonc3VwbmUnLCdcXHUyMjhEJzonY3VwZG90JywnXFx1MjI4RSc6J3VwbHVzJywnXFx1MjI4Ric6J3Nxc3ViJywnXFx1MjI4RlxcdTAzMzgnOidOb3RTcXVhcmVTdWJzZXQnLCdcXHUyMjkwJzonc3FzdXAnLCdcXHUyMjkwXFx1MDMzOCc6J05vdFNxdWFyZVN1cGVyc2V0JywnXFx1MjI5MSc6J3Nxc3ViZScsJ1xcdTIyRTInOiduc3FzdWJlJywnXFx1MjI5Mic6J3Nxc3VwZScsJ1xcdTIyRTMnOiduc3FzdXBlJywnXFx1MjI5Myc6J3NxY2FwJywnXFx1MjI5M1xcdUZFMDAnOidzcWNhcHMnLCdcXHUyMjk0Jzonc3FjdXAnLCdcXHUyMjk0XFx1RkUwMCc6J3NxY3VwcycsJ1xcdTIyOTUnOidvcGx1cycsJ1xcdTIyOTYnOidvbWludXMnLCdcXHUyMjk3Jzonb3RpbWVzJywnXFx1MjI5OCc6J29zb2wnLCdcXHUyMjk5Jzonb2RvdCcsJ1xcdTIyOUEnOidvY2lyJywnXFx1MjI5Qic6J29hc3QnLCdcXHUyMjlEJzonb2Rhc2gnLCdcXHUyMjlFJzoncGx1c2InLCdcXHUyMjlGJzonbWludXNiJywnXFx1MjJBMCc6J3RpbWVzYicsJ1xcdTIyQTEnOidzZG90YicsJ1xcdTIyQTInOid2ZGFzaCcsJ1xcdTIyQUMnOidudmRhc2gnLCdcXHUyMkEzJzonZGFzaHYnLCdcXHUyMkE0JzondG9wJywnXFx1MjJBNSc6J2JvdCcsJ1xcdTIyQTcnOidtb2RlbHMnLCdcXHUyMkE4JzondkRhc2gnLCdcXHUyMkFEJzonbnZEYXNoJywnXFx1MjJBOSc6J1ZkYXNoJywnXFx1MjJBRSc6J25WZGFzaCcsJ1xcdTIyQUEnOidWdmRhc2gnLCdcXHUyMkFCJzonVkRhc2gnLCdcXHUyMkFGJzonblZEYXNoJywnXFx1MjJCMCc6J3BydXJlbCcsJ1xcdTIyQjInOid2bHRyaScsJ1xcdTIyRUEnOidubHRyaScsJ1xcdTIyQjMnOid2cnRyaScsJ1xcdTIyRUInOiducnRyaScsJ1xcdTIyQjQnOidsdHJpZScsJ1xcdTIyRUMnOidubHRyaWUnLCdcXHUyMkI0XFx1MjBEMic6J252bHRyaWUnLCdcXHUyMkI1JzoncnRyaWUnLCdcXHUyMkVEJzonbnJ0cmllJywnXFx1MjJCNVxcdTIwRDInOidudnJ0cmllJywnXFx1MjJCNic6J29yaWdvZicsJ1xcdTIyQjcnOidpbW9mJywnXFx1MjJCOCc6J211bWFwJywnXFx1MjJCOSc6J2hlcmNvbicsJ1xcdTIyQkEnOidpbnRjYWwnLCdcXHUyMkJCJzondmVlYmFyJywnXFx1MjJCRCc6J2JhcnZlZScsJ1xcdTIyQkUnOidhbmdydHZiJywnXFx1MjJCRic6J2xydHJpJywnXFx1MjJDMCc6J1dlZGdlJywnXFx1MjJDMSc6J1ZlZScsJ1xcdTIyQzInOid4Y2FwJywnXFx1MjJDMyc6J3hjdXAnLCdcXHUyMkM0JzonZGlhbScsJ1xcdTIyQzUnOidzZG90JywnXFx1MjJDNic6J1N0YXInLCdcXHUyMkM3JzonZGl2b254JywnXFx1MjJDOCc6J2Jvd3RpZScsJ1xcdTIyQzknOidsdGltZXMnLCdcXHUyMkNBJzoncnRpbWVzJywnXFx1MjJDQic6J2x0aHJlZScsJ1xcdTIyQ0MnOidydGhyZWUnLCdcXHUyMkNEJzonYnNpbWUnLCdcXHUyMkNFJzonY3V2ZWUnLCdcXHUyMkNGJzonY3V3ZWQnLCdcXHUyMkQwJzonU3ViJywnXFx1MjJEMSc6J1N1cCcsJ1xcdTIyRDInOidDYXAnLCdcXHUyMkQzJzonQ3VwJywnXFx1MjJENCc6J2ZvcmsnLCdcXHUyMkQ1JzonZXBhcicsJ1xcdTIyRDYnOidsdGRvdCcsJ1xcdTIyRDcnOidndGRvdCcsJ1xcdTIyRDgnOidMbCcsJ1xcdTIyRDhcXHUwMzM4JzonbkxsJywnXFx1MjJEOSc6J0dnJywnXFx1MjJEOVxcdTAzMzgnOiduR2cnLCdcXHUyMkRBXFx1RkUwMCc6J2xlc2cnLCdcXHUyMkRBJzonbGVnJywnXFx1MjJEQic6J2dlbCcsJ1xcdTIyREJcXHVGRTAwJzonZ2VzbCcsJ1xcdTIyREUnOidjdWVwcicsJ1xcdTIyREYnOidjdWVzYycsJ1xcdTIyRTYnOidsbnNpbScsJ1xcdTIyRTcnOidnbnNpbScsJ1xcdTIyRTgnOidwcm5zaW0nLCdcXHUyMkU5Jzonc2Nuc2ltJywnXFx1MjJFRSc6J3ZlbGxpcCcsJ1xcdTIyRUYnOidjdGRvdCcsJ1xcdTIyRjAnOid1dGRvdCcsJ1xcdTIyRjEnOidkdGRvdCcsJ1xcdTIyRjInOidkaXNpbicsJ1xcdTIyRjMnOidpc2luc3YnLCdcXHUyMkY0JzonaXNpbnMnLCdcXHUyMkY1JzonaXNpbmRvdCcsJ1xcdTIyRjVcXHUwMzM4Jzonbm90aW5kb3QnLCdcXHUyMkY2Jzonbm90aW52YycsJ1xcdTIyRjcnOidub3RpbnZiJywnXFx1MjJGOSc6J2lzaW5FJywnXFx1MjJGOVxcdTAzMzgnOidub3RpbkUnLCdcXHUyMkZBJzonbmlzZCcsJ1xcdTIyRkInOid4bmlzJywnXFx1MjJGQyc6J25pcycsJ1xcdTIyRkQnOidub3RuaXZjJywnXFx1MjJGRSc6J25vdG5pdmInLCdcXHUyMzA1JzonYmFyd2VkJywnXFx1MjMwNic6J0JhcndlZCcsJ1xcdTIzMEMnOidkcmNyb3AnLCdcXHUyMzBEJzonZGxjcm9wJywnXFx1MjMwRSc6J3VyY3JvcCcsJ1xcdTIzMEYnOid1bGNyb3AnLCdcXHUyMzEwJzonYm5vdCcsJ1xcdTIzMTInOidwcm9mbGluZScsJ1xcdTIzMTMnOidwcm9mc3VyZicsJ1xcdTIzMTUnOid0ZWxyZWMnLCdcXHUyMzE2JzondGFyZ2V0JywnXFx1MjMxQyc6J3VsY29ybicsJ1xcdTIzMUQnOid1cmNvcm4nLCdcXHUyMzFFJzonZGxjb3JuJywnXFx1MjMxRic6J2RyY29ybicsJ1xcdTIzMjInOidmcm93bicsJ1xcdTIzMjMnOidzbWlsZScsJ1xcdTIzMkQnOidjeWxjdHknLCdcXHUyMzJFJzoncHJvZmFsYXInLCdcXHUyMzM2JzondG9wYm90JywnXFx1MjMzRCc6J292YmFyJywnXFx1MjMzRic6J3NvbGJhcicsJ1xcdTIzN0MnOidhbmd6YXJyJywnXFx1MjNCMCc6J2xtb3VzdCcsJ1xcdTIzQjEnOidybW91c3QnLCdcXHUyM0I0JzondGJyaycsJ1xcdTIzQjUnOidiYnJrJywnXFx1MjNCNic6J2Jicmt0YnJrJywnXFx1MjNEQyc6J092ZXJQYXJlbnRoZXNpcycsJ1xcdTIzREQnOidVbmRlclBhcmVudGhlc2lzJywnXFx1MjNERSc6J092ZXJCcmFjZScsJ1xcdTIzREYnOidVbmRlckJyYWNlJywnXFx1MjNFMic6J3RycGV6aXVtJywnXFx1MjNFNyc6J2VsaW50ZXJzJywnXFx1MjQyMyc6J2JsYW5rJywnXFx1MjUwMCc6J2JveGgnLCdcXHUyNTAyJzonYm94dicsJ1xcdTI1MEMnOidib3hkcicsJ1xcdTI1MTAnOidib3hkbCcsJ1xcdTI1MTQnOidib3h1cicsJ1xcdTI1MTgnOidib3h1bCcsJ1xcdTI1MUMnOidib3h2cicsJ1xcdTI1MjQnOidib3h2bCcsJ1xcdTI1MkMnOidib3hoZCcsJ1xcdTI1MzQnOidib3hodScsJ1xcdTI1M0MnOidib3h2aCcsJ1xcdTI1NTAnOidib3hIJywnXFx1MjU1MSc6J2JveFYnLCdcXHUyNTUyJzonYm94ZFInLCdcXHUyNTUzJzonYm94RHInLCdcXHUyNTU0JzonYm94RFInLCdcXHUyNTU1JzonYm94ZEwnLCdcXHUyNTU2JzonYm94RGwnLCdcXHUyNTU3JzonYm94REwnLCdcXHUyNTU4JzonYm94dVInLCdcXHUyNTU5JzonYm94VXInLCdcXHUyNTVBJzonYm94VVInLCdcXHUyNTVCJzonYm94dUwnLCdcXHUyNTVDJzonYm94VWwnLCdcXHUyNTVEJzonYm94VUwnLCdcXHUyNTVFJzonYm94dlInLCdcXHUyNTVGJzonYm94VnInLCdcXHUyNTYwJzonYm94VlInLCdcXHUyNTYxJzonYm94dkwnLCdcXHUyNTYyJzonYm94VmwnLCdcXHUyNTYzJzonYm94VkwnLCdcXHUyNTY0JzonYm94SGQnLCdcXHUyNTY1JzonYm94aEQnLCdcXHUyNTY2JzonYm94SEQnLCdcXHUyNTY3JzonYm94SHUnLCdcXHUyNTY4JzonYm94aFUnLCdcXHUyNTY5JzonYm94SFUnLCdcXHUyNTZBJzonYm94dkgnLCdcXHUyNTZCJzonYm94VmgnLCdcXHUyNTZDJzonYm94VkgnLCdcXHUyNTgwJzondWhibGsnLCdcXHUyNTg0JzonbGhibGsnLCdcXHUyNTg4JzonYmxvY2snLCdcXHUyNTkxJzonYmxrMTQnLCdcXHUyNTkyJzonYmxrMTInLCdcXHUyNTkzJzonYmxrMzQnLCdcXHUyNUExJzonc3F1JywnXFx1MjVBQSc6J3NxdWYnLCdcXHUyNUFCJzonRW1wdHlWZXJ5U21hbGxTcXVhcmUnLCdcXHUyNUFEJzoncmVjdCcsJ1xcdTI1QUUnOidtYXJrZXInLCdcXHUyNUIxJzonZmx0bnMnLCdcXHUyNUIzJzoneHV0cmknLCdcXHUyNUI0JzondXRyaWYnLCdcXHUyNUI1JzondXRyaScsJ1xcdTI1QjgnOidydHJpZicsJ1xcdTI1QjknOidydHJpJywnXFx1MjVCRCc6J3hkdHJpJywnXFx1MjVCRSc6J2R0cmlmJywnXFx1MjVCRic6J2R0cmknLCdcXHUyNUMyJzonbHRyaWYnLCdcXHUyNUMzJzonbHRyaScsJ1xcdTI1Q0EnOidsb3onLCdcXHUyNUNCJzonY2lyJywnXFx1MjVFQyc6J3RyaWRvdCcsJ1xcdTI1RUYnOid4Y2lyYycsJ1xcdTI1RjgnOid1bHRyaScsJ1xcdTI1RjknOid1cnRyaScsJ1xcdTI1RkEnOidsbHRyaScsJ1xcdTI1RkInOidFbXB0eVNtYWxsU3F1YXJlJywnXFx1MjVGQyc6J0ZpbGxlZFNtYWxsU3F1YXJlJywnXFx1MjYwNSc6J3N0YXJmJywnXFx1MjYwNic6J3N0YXInLCdcXHUyNjBFJzoncGhvbmUnLCdcXHUyNjQwJzonZmVtYWxlJywnXFx1MjY0Mic6J21hbGUnLCdcXHUyNjYwJzonc3BhZGVzJywnXFx1MjY2Myc6J2NsdWJzJywnXFx1MjY2NSc6J2hlYXJ0cycsJ1xcdTI2NjYnOidkaWFtcycsJ1xcdTI2NkEnOidzdW5nJywnXFx1MjcxMyc6J2NoZWNrJywnXFx1MjcxNyc6J2Nyb3NzJywnXFx1MjcyMCc6J21hbHQnLCdcXHUyNzM2Jzonc2V4dCcsJ1xcdTI3NTgnOidWZXJ0aWNhbFNlcGFyYXRvcicsJ1xcdTI3QzgnOidic29saHN1YicsJ1xcdTI3QzknOidzdXBoc29sJywnXFx1MjdGNSc6J3hsYXJyJywnXFx1MjdGNic6J3hyYXJyJywnXFx1MjdGNyc6J3hoYXJyJywnXFx1MjdGOCc6J3hsQXJyJywnXFx1MjdGOSc6J3hyQXJyJywnXFx1MjdGQSc6J3hoQXJyJywnXFx1MjdGQyc6J3htYXAnLCdcXHUyN0ZGJzonZHppZ3JhcnInLCdcXHUyOTAyJzonbnZsQXJyJywnXFx1MjkwMyc6J252ckFycicsJ1xcdTI5MDQnOidudkhhcnInLCdcXHUyOTA1JzonTWFwJywnXFx1MjkwQyc6J2xiYXJyJywnXFx1MjkwRCc6J3JiYXJyJywnXFx1MjkwRSc6J2xCYXJyJywnXFx1MjkwRic6J3JCYXJyJywnXFx1MjkxMCc6J1JCYXJyJywnXFx1MjkxMSc6J0REb3RyYWhkJywnXFx1MjkxMic6J1VwQXJyb3dCYXInLCdcXHUyOTEzJzonRG93bkFycm93QmFyJywnXFx1MjkxNic6J1JhcnJ0bCcsJ1xcdTI5MTknOidsYXRhaWwnLCdcXHUyOTFBJzoncmF0YWlsJywnXFx1MjkxQic6J2xBdGFpbCcsJ1xcdTI5MUMnOidyQXRhaWwnLCdcXHUyOTFEJzonbGFycmZzJywnXFx1MjkxRSc6J3JhcnJmcycsJ1xcdTI5MUYnOidsYXJyYmZzJywnXFx1MjkyMCc6J3JhcnJiZnMnLCdcXHUyOTIzJzonbndhcmhrJywnXFx1MjkyNCc6J25lYXJoaycsJ1xcdTI5MjUnOidzZWFyaGsnLCdcXHUyOTI2Jzonc3dhcmhrJywnXFx1MjkyNyc6J253bmVhcicsJ1xcdTI5MjgnOid0b2VhJywnXFx1MjkyOSc6J3Rvc2EnLCdcXHUyOTJBJzonc3dud2FyJywnXFx1MjkzMyc6J3JhcnJjJywnXFx1MjkzM1xcdTAzMzgnOiducmFycmMnLCdcXHUyOTM1JzonY3VkYXJycicsJ1xcdTI5MzYnOidsZGNhJywnXFx1MjkzNyc6J3JkY2EnLCdcXHUyOTM4JzonY3VkYXJybCcsJ1xcdTI5MzknOidsYXJycGwnLCdcXHUyOTNDJzonY3VyYXJybScsJ1xcdTI5M0QnOidjdWxhcnJwJywnXFx1Mjk0NSc6J3JhcnJwbCcsJ1xcdTI5NDgnOidoYXJyY2lyJywnXFx1Mjk0OSc6J1VhcnJvY2lyJywnXFx1Mjk0QSc6J2x1cmRzaGFyJywnXFx1Mjk0Qic6J2xkcnVzaGFyJywnXFx1Mjk0RSc6J0xlZnRSaWdodFZlY3RvcicsJ1xcdTI5NEYnOidSaWdodFVwRG93blZlY3RvcicsJ1xcdTI5NTAnOidEb3duTGVmdFJpZ2h0VmVjdG9yJywnXFx1Mjk1MSc6J0xlZnRVcERvd25WZWN0b3InLCdcXHUyOTUyJzonTGVmdFZlY3RvckJhcicsJ1xcdTI5NTMnOidSaWdodFZlY3RvckJhcicsJ1xcdTI5NTQnOidSaWdodFVwVmVjdG9yQmFyJywnXFx1Mjk1NSc6J1JpZ2h0RG93blZlY3RvckJhcicsJ1xcdTI5NTYnOidEb3duTGVmdFZlY3RvckJhcicsJ1xcdTI5NTcnOidEb3duUmlnaHRWZWN0b3JCYXInLCdcXHUyOTU4JzonTGVmdFVwVmVjdG9yQmFyJywnXFx1Mjk1OSc6J0xlZnREb3duVmVjdG9yQmFyJywnXFx1Mjk1QSc6J0xlZnRUZWVWZWN0b3InLCdcXHUyOTVCJzonUmlnaHRUZWVWZWN0b3InLCdcXHUyOTVDJzonUmlnaHRVcFRlZVZlY3RvcicsJ1xcdTI5NUQnOidSaWdodERvd25UZWVWZWN0b3InLCdcXHUyOTVFJzonRG93bkxlZnRUZWVWZWN0b3InLCdcXHUyOTVGJzonRG93blJpZ2h0VGVlVmVjdG9yJywnXFx1Mjk2MCc6J0xlZnRVcFRlZVZlY3RvcicsJ1xcdTI5NjEnOidMZWZ0RG93blRlZVZlY3RvcicsJ1xcdTI5NjInOidsSGFyJywnXFx1Mjk2Myc6J3VIYXInLCdcXHUyOTY0JzonckhhcicsJ1xcdTI5NjUnOidkSGFyJywnXFx1Mjk2Nic6J2x1cnVoYXInLCdcXHUyOTY3JzonbGRyZGhhcicsJ1xcdTI5NjgnOidydWx1aGFyJywnXFx1Mjk2OSc6J3JkbGRoYXInLCdcXHUyOTZBJzonbGhhcnVsJywnXFx1Mjk2Qic6J2xsaGFyZCcsJ1xcdTI5NkMnOidyaGFydWwnLCdcXHUyOTZEJzonbHJoYXJkJywnXFx1Mjk2RSc6J3VkaGFyJywnXFx1Mjk2Ric6J2R1aGFyJywnXFx1Mjk3MCc6J1JvdW5kSW1wbGllcycsJ1xcdTI5NzEnOidlcmFycicsJ1xcdTI5NzInOidzaW1yYXJyJywnXFx1Mjk3Myc6J2xhcnJzaW0nLCdcXHUyOTc0JzoncmFycnNpbScsJ1xcdTI5NzUnOidyYXJyYXAnLCdcXHUyOTc2JzonbHRsYXJyJywnXFx1Mjk3OCc6J2d0cmFycicsJ1xcdTI5NzknOidzdWJyYXJyJywnXFx1Mjk3Qic6J3N1cGxhcnInLCdcXHUyOTdDJzonbGZpc2h0JywnXFx1Mjk3RCc6J3JmaXNodCcsJ1xcdTI5N0UnOid1ZmlzaHQnLCdcXHUyOTdGJzonZGZpc2h0JywnXFx1Mjk5QSc6J3Z6aWd6YWcnLCdcXHUyOTlDJzondmFuZ3J0JywnXFx1Mjk5RCc6J2FuZ3J0dmJkJywnXFx1MjlBNCc6J2FuZ2UnLCdcXHUyOUE1JzoncmFuZ2UnLCdcXHUyOUE2JzonZHdhbmdsZScsJ1xcdTI5QTcnOid1d2FuZ2xlJywnXFx1MjlBOCc6J2FuZ21zZGFhJywnXFx1MjlBOSc6J2FuZ21zZGFiJywnXFx1MjlBQSc6J2FuZ21zZGFjJywnXFx1MjlBQic6J2FuZ21zZGFkJywnXFx1MjlBQyc6J2FuZ21zZGFlJywnXFx1MjlBRCc6J2FuZ21zZGFmJywnXFx1MjlBRSc6J2FuZ21zZGFnJywnXFx1MjlBRic6J2FuZ21zZGFoJywnXFx1MjlCMCc6J2JlbXB0eXYnLCdcXHUyOUIxJzonZGVtcHR5dicsJ1xcdTI5QjInOidjZW1wdHl2JywnXFx1MjlCMyc6J3JhZW1wdHl2JywnXFx1MjlCNCc6J2xhZW1wdHl2JywnXFx1MjlCNSc6J29oYmFyJywnXFx1MjlCNic6J29taWQnLCdcXHUyOUI3Jzonb3BhcicsJ1xcdTI5QjknOidvcGVycCcsJ1xcdTI5QkInOidvbGNyb3NzJywnXFx1MjlCQyc6J29kc29sZCcsJ1xcdTI5QkUnOidvbGNpcicsJ1xcdTI5QkYnOidvZmNpcicsJ1xcdTI5QzAnOidvbHQnLCdcXHUyOUMxJzonb2d0JywnXFx1MjlDMic6J2NpcnNjaXInLCdcXHUyOUMzJzonY2lyRScsJ1xcdTI5QzQnOidzb2xiJywnXFx1MjlDNSc6J2Jzb2xiJywnXFx1MjlDOSc6J2JveGJveCcsJ1xcdTI5Q0QnOid0cmlzYicsJ1xcdTI5Q0UnOidydHJpbHRyaScsJ1xcdTI5Q0YnOidMZWZ0VHJpYW5nbGVCYXInLCdcXHUyOUNGXFx1MDMzOCc6J05vdExlZnRUcmlhbmdsZUJhcicsJ1xcdTI5RDAnOidSaWdodFRyaWFuZ2xlQmFyJywnXFx1MjlEMFxcdTAzMzgnOidOb3RSaWdodFRyaWFuZ2xlQmFyJywnXFx1MjlEQyc6J2lpbmZpbicsJ1xcdTI5REQnOidpbmZpbnRpZScsJ1xcdTI5REUnOidudmluZmluJywnXFx1MjlFMyc6J2VwYXJzbCcsJ1xcdTI5RTQnOidzbWVwYXJzbCcsJ1xcdTI5RTUnOidlcXZwYXJzbCcsJ1xcdTI5RUInOidsb3pmJywnXFx1MjlGNCc6J1J1bGVEZWxheWVkJywnXFx1MjlGNic6J2Rzb2wnLCdcXHUyQTAwJzoneG9kb3QnLCdcXHUyQTAxJzoneG9wbHVzJywnXFx1MkEwMic6J3hvdGltZScsJ1xcdTJBMDQnOid4dXBsdXMnLCdcXHUyQTA2JzoneHNxY3VwJywnXFx1MkEwRCc6J2ZwYXJ0aW50JywnXFx1MkExMCc6J2NpcmZuaW50JywnXFx1MkExMSc6J2F3aW50JywnXFx1MkExMic6J3JwcG9saW50JywnXFx1MkExMyc6J3NjcG9saW50JywnXFx1MkExNCc6J25wb2xpbnQnLCdcXHUyQTE1JzoncG9pbnRpbnQnLCdcXHUyQTE2JzoncXVhdGludCcsJ1xcdTJBMTcnOidpbnRsYXJoaycsJ1xcdTJBMjInOidwbHVzY2lyJywnXFx1MkEyMyc6J3BsdXNhY2lyJywnXFx1MkEyNCc6J3NpbXBsdXMnLCdcXHUyQTI1JzoncGx1c2R1JywnXFx1MkEyNic6J3BsdXNzaW0nLCdcXHUyQTI3JzoncGx1c3R3bycsJ1xcdTJBMjknOidtY29tbWEnLCdcXHUyQTJBJzonbWludXNkdScsJ1xcdTJBMkQnOidsb3BsdXMnLCdcXHUyQTJFJzoncm9wbHVzJywnXFx1MkEyRic6J0Nyb3NzJywnXFx1MkEzMCc6J3RpbWVzZCcsJ1xcdTJBMzEnOid0aW1lc2JhcicsJ1xcdTJBMzMnOidzbWFzaHAnLCdcXHUyQTM0JzonbG90aW1lcycsJ1xcdTJBMzUnOidyb3RpbWVzJywnXFx1MkEzNic6J290aW1lc2FzJywnXFx1MkEzNyc6J090aW1lcycsJ1xcdTJBMzgnOidvZGl2JywnXFx1MkEzOSc6J3RyaXBsdXMnLCdcXHUyQTNBJzondHJpbWludXMnLCdcXHUyQTNCJzondHJpdGltZScsJ1xcdTJBM0MnOidpcHJvZCcsJ1xcdTJBM0YnOidhbWFsZycsJ1xcdTJBNDAnOidjYXBkb3QnLCdcXHUyQTQyJzonbmN1cCcsJ1xcdTJBNDMnOiduY2FwJywnXFx1MkE0NCc6J2NhcGFuZCcsJ1xcdTJBNDUnOidjdXBvcicsJ1xcdTJBNDYnOidjdXBjYXAnLCdcXHUyQTQ3JzonY2FwY3VwJywnXFx1MkE0OCc6J2N1cGJyY2FwJywnXFx1MkE0OSc6J2NhcGJyY3VwJywnXFx1MkE0QSc6J2N1cGN1cCcsJ1xcdTJBNEInOidjYXBjYXAnLCdcXHUyQTRDJzonY2N1cHMnLCdcXHUyQTREJzonY2NhcHMnLCdcXHUyQTUwJzonY2N1cHNzbScsJ1xcdTJBNTMnOidBbmQnLCdcXHUyQTU0JzonT3InLCdcXHUyQTU1JzonYW5kYW5kJywnXFx1MkE1Nic6J29yb3InLCdcXHUyQTU3Jzonb3JzbG9wZScsJ1xcdTJBNTgnOidhbmRzbG9wZScsJ1xcdTJBNUEnOidhbmR2JywnXFx1MkE1Qic6J29ydicsJ1xcdTJBNUMnOidhbmRkJywnXFx1MkE1RCc6J29yZCcsJ1xcdTJBNUYnOid3ZWRiYXInLCdcXHUyQTY2Jzonc2RvdGUnLCdcXHUyQTZBJzonc2ltZG90JywnXFx1MkE2RCc6J2Nvbmdkb3QnLCdcXHUyQTZEXFx1MDMzOCc6J25jb25nZG90JywnXFx1MkE2RSc6J2Vhc3RlcicsJ1xcdTJBNkYnOidhcGFjaXInLCdcXHUyQTcwJzonYXBFJywnXFx1MkE3MFxcdTAzMzgnOiduYXBFJywnXFx1MkE3MSc6J2VwbHVzJywnXFx1MkE3Mic6J3BsdXNlJywnXFx1MkE3Myc6J0VzaW0nLCdcXHUyQTc3JzonZUREb3QnLCdcXHUyQTc4JzonZXF1aXZERCcsJ1xcdTJBNzknOidsdGNpcicsJ1xcdTJBN0EnOidndGNpcicsJ1xcdTJBN0InOidsdHF1ZXN0JywnXFx1MkE3Qyc6J2d0cXVlc3QnLCdcXHUyQTdEJzonbGVzJywnXFx1MkE3RFxcdTAzMzgnOidubGVzJywnXFx1MkE3RSc6J2dlcycsJ1xcdTJBN0VcXHUwMzM4JzonbmdlcycsJ1xcdTJBN0YnOidsZXNkb3QnLCdcXHUyQTgwJzonZ2VzZG90JywnXFx1MkE4MSc6J2xlc2RvdG8nLCdcXHUyQTgyJzonZ2VzZG90bycsJ1xcdTJBODMnOidsZXNkb3RvcicsJ1xcdTJBODQnOidnZXNkb3RvbCcsJ1xcdTJBODUnOidsYXAnLCdcXHUyQTg2JzonZ2FwJywnXFx1MkE4Nyc6J2xuZScsJ1xcdTJBODgnOidnbmUnLCdcXHUyQTg5JzonbG5hcCcsJ1xcdTJBOEEnOidnbmFwJywnXFx1MkE4Qic6J2xFZycsJ1xcdTJBOEMnOidnRWwnLCdcXHUyQThEJzonbHNpbWUnLCdcXHUyQThFJzonZ3NpbWUnLCdcXHUyQThGJzonbHNpbWcnLCdcXHUyQTkwJzonZ3NpbWwnLCdcXHUyQTkxJzonbGdFJywnXFx1MkE5Mic6J2dsRScsJ1xcdTJBOTMnOidsZXNnZXMnLCdcXHUyQTk0JzonZ2VzbGVzJywnXFx1MkE5NSc6J2VscycsJ1xcdTJBOTYnOidlZ3MnLCdcXHUyQTk3JzonZWxzZG90JywnXFx1MkE5OCc6J2Vnc2RvdCcsJ1xcdTJBOTknOidlbCcsJ1xcdTJBOUEnOidlZycsJ1xcdTJBOUQnOidzaW1sJywnXFx1MkE5RSc6J3NpbWcnLCdcXHUyQTlGJzonc2ltbEUnLCdcXHUyQUEwJzonc2ltZ0UnLCdcXHUyQUExJzonTGVzc0xlc3MnLCdcXHUyQUExXFx1MDMzOCc6J05vdE5lc3RlZExlc3NMZXNzJywnXFx1MkFBMic6J0dyZWF0ZXJHcmVhdGVyJywnXFx1MkFBMlxcdTAzMzgnOidOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcicsJ1xcdTJBQTQnOidnbGonLCdcXHUyQUE1JzonZ2xhJywnXFx1MkFBNic6J2x0Y2MnLCdcXHUyQUE3JzonZ3RjYycsJ1xcdTJBQTgnOidsZXNjYycsJ1xcdTJBQTknOidnZXNjYycsJ1xcdTJBQUEnOidzbXQnLCdcXHUyQUFCJzonbGF0JywnXFx1MkFBQyc6J3NtdGUnLCdcXHUyQUFDXFx1RkUwMCc6J3NtdGVzJywnXFx1MkFBRCc6J2xhdGUnLCdcXHUyQUFEXFx1RkUwMCc6J2xhdGVzJywnXFx1MkFBRSc6J2J1bXBFJywnXFx1MkFBRic6J3ByZScsJ1xcdTJBQUZcXHUwMzM4JzonbnByZScsJ1xcdTJBQjAnOidzY2UnLCdcXHUyQUIwXFx1MDMzOCc6J25zY2UnLCdcXHUyQUIzJzoncHJFJywnXFx1MkFCNCc6J3NjRScsJ1xcdTJBQjUnOidwcm5FJywnXFx1MkFCNic6J3NjbkUnLCdcXHUyQUI3JzoncHJhcCcsJ1xcdTJBQjgnOidzY2FwJywnXFx1MkFCOSc6J3BybmFwJywnXFx1MkFCQSc6J3NjbmFwJywnXFx1MkFCQic6J1ByJywnXFx1MkFCQyc6J1NjJywnXFx1MkFCRCc6J3N1YmRvdCcsJ1xcdTJBQkUnOidzdXBkb3QnLCdcXHUyQUJGJzonc3VicGx1cycsJ1xcdTJBQzAnOidzdXBwbHVzJywnXFx1MkFDMSc6J3N1Ym11bHQnLCdcXHUyQUMyJzonc3VwbXVsdCcsJ1xcdTJBQzMnOidzdWJlZG90JywnXFx1MkFDNCc6J3N1cGVkb3QnLCdcXHUyQUM1Jzonc3ViRScsJ1xcdTJBQzVcXHUwMzM4JzonbnN1YkUnLCdcXHUyQUM2Jzonc3VwRScsJ1xcdTJBQzZcXHUwMzM4JzonbnN1cEUnLCdcXHUyQUM3Jzonc3Vic2ltJywnXFx1MkFDOCc6J3N1cHNpbScsJ1xcdTJBQ0JcXHVGRTAwJzondnN1Ym5FJywnXFx1MkFDQic6J3N1Ym5FJywnXFx1MkFDQ1xcdUZFMDAnOid2c3VwbkUnLCdcXHUyQUNDJzonc3VwbkUnLCdcXHUyQUNGJzonY3N1YicsJ1xcdTJBRDAnOidjc3VwJywnXFx1MkFEMSc6J2NzdWJlJywnXFx1MkFEMic6J2NzdXBlJywnXFx1MkFEMyc6J3N1YnN1cCcsJ1xcdTJBRDQnOidzdXBzdWInLCdcXHUyQUQ1Jzonc3Vic3ViJywnXFx1MkFENic6J3N1cHN1cCcsJ1xcdTJBRDcnOidzdXBoc3ViJywnXFx1MkFEOCc6J3N1cGRzdWInLCdcXHUyQUQ5JzonZm9ya3YnLCdcXHUyQURBJzondG9wZm9yaycsJ1xcdTJBREInOidtbGNwJywnXFx1MkFFNCc6J0Rhc2h2JywnXFx1MkFFNic6J1ZkYXNobCcsJ1xcdTJBRTcnOidCYXJ2JywnXFx1MkFFOCc6J3ZCYXInLCdcXHUyQUU5JzondkJhcnYnLCdcXHUyQUVCJzonVmJhcicsJ1xcdTJBRUMnOidOb3QnLCdcXHUyQUVEJzonYk5vdCcsJ1xcdTJBRUUnOidybm1pZCcsJ1xcdTJBRUYnOidjaXJtaWQnLCdcXHUyQUYwJzonbWlkY2lyJywnXFx1MkFGMSc6J3RvcGNpcicsJ1xcdTJBRjInOiduaHBhcicsJ1xcdTJBRjMnOidwYXJzaW0nLCdcXHUyQUZEJzoncGFyc2wnLCdcXHUyQUZEXFx1MjBFNSc6J25wYXJzbCcsJ1xcdTI2NkQnOidmbGF0JywnXFx1MjY2RSc6J25hdHVyJywnXFx1MjY2Ric6J3NoYXJwJywnXFx4QTQnOidjdXJyZW4nLCdcXHhBMic6J2NlbnQnLCckJzonZG9sbGFyJywnXFx4QTMnOidwb3VuZCcsJ1xceEE1JzoneWVuJywnXFx1MjBBQyc6J2V1cm8nLCdcXHhCOSc6J3N1cDEnLCdcXHhCRCc6J2hhbGYnLCdcXHUyMTUzJzonZnJhYzEzJywnXFx4QkMnOidmcmFjMTQnLCdcXHUyMTU1JzonZnJhYzE1JywnXFx1MjE1OSc6J2ZyYWMxNicsJ1xcdTIxNUInOidmcmFjMTgnLCdcXHhCMic6J3N1cDInLCdcXHUyMTU0JzonZnJhYzIzJywnXFx1MjE1Nic6J2ZyYWMyNScsJ1xceEIzJzonc3VwMycsJ1xceEJFJzonZnJhYzM0JywnXFx1MjE1Nyc6J2ZyYWMzNScsJ1xcdTIxNUMnOidmcmFjMzgnLCdcXHUyMTU4JzonZnJhYzQ1JywnXFx1MjE1QSc6J2ZyYWM1NicsJ1xcdTIxNUQnOidmcmFjNTgnLCdcXHUyMTVFJzonZnJhYzc4JywnXFx1RDgzNVxcdURDQjYnOidhc2NyJywnXFx1RDgzNVxcdURENTInOidhb3BmJywnXFx1RDgzNVxcdUREMUUnOidhZnInLCdcXHVEODM1XFx1REQzOCc6J0FvcGYnLCdcXHVEODM1XFx1REQwNCc6J0FmcicsJ1xcdUQ4MzVcXHVEQzlDJzonQXNjcicsJ1xceEFBJzonb3JkZicsJ1xceEUxJzonYWFjdXRlJywnXFx4QzEnOidBYWN1dGUnLCdcXHhFMCc6J2FncmF2ZScsJ1xceEMwJzonQWdyYXZlJywnXFx1MDEwMyc6J2FicmV2ZScsJ1xcdTAxMDInOidBYnJldmUnLCdcXHhFMic6J2FjaXJjJywnXFx4QzInOidBY2lyYycsJ1xceEU1JzonYXJpbmcnLCdcXHhDNSc6J2FuZ3N0JywnXFx4RTQnOidhdW1sJywnXFx4QzQnOidBdW1sJywnXFx4RTMnOidhdGlsZGUnLCdcXHhDMyc6J0F0aWxkZScsJ1xcdTAxMDUnOidhb2dvbicsJ1xcdTAxMDQnOidBb2dvbicsJ1xcdTAxMDEnOidhbWFjcicsJ1xcdTAxMDAnOidBbWFjcicsJ1xceEU2JzonYWVsaWcnLCdcXHhDNic6J0FFbGlnJywnXFx1RDgzNVxcdURDQjcnOidic2NyJywnXFx1RDgzNVxcdURENTMnOidib3BmJywnXFx1RDgzNVxcdUREMUYnOidiZnInLCdcXHVEODM1XFx1REQzOSc6J0JvcGYnLCdcXHUyMTJDJzonQnNjcicsJ1xcdUQ4MzVcXHVERDA1JzonQmZyJywnXFx1RDgzNVxcdUREMjAnOidjZnInLCdcXHVEODM1XFx1RENCOCc6J2NzY3InLCdcXHVEODM1XFx1REQ1NCc6J2NvcGYnLCdcXHUyMTJEJzonQ2ZyJywnXFx1RDgzNVxcdURDOUUnOidDc2NyJywnXFx1MjEwMic6J0NvcGYnLCdcXHUwMTA3JzonY2FjdXRlJywnXFx1MDEwNic6J0NhY3V0ZScsJ1xcdTAxMDknOidjY2lyYycsJ1xcdTAxMDgnOidDY2lyYycsJ1xcdTAxMEQnOidjY2Fyb24nLCdcXHUwMTBDJzonQ2Nhcm9uJywnXFx1MDEwQic6J2Nkb3QnLCdcXHUwMTBBJzonQ2RvdCcsJ1xceEU3JzonY2NlZGlsJywnXFx4QzcnOidDY2VkaWwnLCdcXHUyMTA1JzonaW5jYXJlJywnXFx1RDgzNVxcdUREMjEnOidkZnInLCdcXHUyMTQ2JzonZGQnLCdcXHVEODM1XFx1REQ1NSc6J2RvcGYnLCdcXHVEODM1XFx1RENCOSc6J2RzY3InLCdcXHVEODM1XFx1REM5Ric6J0RzY3InLCdcXHVEODM1XFx1REQwNyc6J0RmcicsJ1xcdTIxNDUnOidERCcsJ1xcdUQ4MzVcXHVERDNCJzonRG9wZicsJ1xcdTAxMEYnOidkY2Fyb24nLCdcXHUwMTBFJzonRGNhcm9uJywnXFx1MDExMSc6J2RzdHJvaycsJ1xcdTAxMTAnOidEc3Ryb2snLCdcXHhGMCc6J2V0aCcsJ1xceEQwJzonRVRIJywnXFx1MjE0Nyc6J2VlJywnXFx1MjEyRic6J2VzY3InLCdcXHVEODM1XFx1REQyMic6J2VmcicsJ1xcdUQ4MzVcXHVERDU2JzonZW9wZicsJ1xcdTIxMzAnOidFc2NyJywnXFx1RDgzNVxcdUREMDgnOidFZnInLCdcXHVEODM1XFx1REQzQyc6J0VvcGYnLCdcXHhFOSc6J2VhY3V0ZScsJ1xceEM5JzonRWFjdXRlJywnXFx4RTgnOidlZ3JhdmUnLCdcXHhDOCc6J0VncmF2ZScsJ1xceEVBJzonZWNpcmMnLCdcXHhDQSc6J0VjaXJjJywnXFx1MDExQic6J2VjYXJvbicsJ1xcdTAxMUEnOidFY2Fyb24nLCdcXHhFQic6J2V1bWwnLCdcXHhDQic6J0V1bWwnLCdcXHUwMTE3JzonZWRvdCcsJ1xcdTAxMTYnOidFZG90JywnXFx1MDExOSc6J2VvZ29uJywnXFx1MDExOCc6J0VvZ29uJywnXFx1MDExMyc6J2VtYWNyJywnXFx1MDExMic6J0VtYWNyJywnXFx1RDgzNVxcdUREMjMnOidmZnInLCdcXHVEODM1XFx1REQ1Nyc6J2ZvcGYnLCdcXHVEODM1XFx1RENCQic6J2ZzY3InLCdcXHVEODM1XFx1REQwOSc6J0ZmcicsJ1xcdUQ4MzVcXHVERDNEJzonRm9wZicsJ1xcdTIxMzEnOidGc2NyJywnXFx1RkIwMCc6J2ZmbGlnJywnXFx1RkIwMyc6J2ZmaWxpZycsJ1xcdUZCMDQnOidmZmxsaWcnLCdcXHVGQjAxJzonZmlsaWcnLCdmaic6J2ZqbGlnJywnXFx1RkIwMic6J2ZsbGlnJywnXFx1MDE5Mic6J2Zub2YnLCdcXHUyMTBBJzonZ3NjcicsJ1xcdUQ4MzVcXHVERDU4JzonZ29wZicsJ1xcdUQ4MzVcXHVERDI0JzonZ2ZyJywnXFx1RDgzNVxcdURDQTInOidHc2NyJywnXFx1RDgzNVxcdUREM0UnOidHb3BmJywnXFx1RDgzNVxcdUREMEEnOidHZnInLCdcXHUwMUY1JzonZ2FjdXRlJywnXFx1MDExRic6J2dicmV2ZScsJ1xcdTAxMUUnOidHYnJldmUnLCdcXHUwMTFEJzonZ2NpcmMnLCdcXHUwMTFDJzonR2NpcmMnLCdcXHUwMTIxJzonZ2RvdCcsJ1xcdTAxMjAnOidHZG90JywnXFx1MDEyMic6J0djZWRpbCcsJ1xcdUQ4MzVcXHVERDI1JzonaGZyJywnXFx1MjEwRSc6J3BsYW5ja2gnLCdcXHVEODM1XFx1RENCRCc6J2hzY3InLCdcXHVEODM1XFx1REQ1OSc6J2hvcGYnLCdcXHUyMTBCJzonSHNjcicsJ1xcdTIxMEMnOidIZnInLCdcXHUyMTBEJzonSG9wZicsJ1xcdTAxMjUnOidoY2lyYycsJ1xcdTAxMjQnOidIY2lyYycsJ1xcdTIxMEYnOidoYmFyJywnXFx1MDEyNyc6J2hzdHJvaycsJ1xcdTAxMjYnOidIc3Ryb2snLCdcXHVEODM1XFx1REQ1QSc6J2lvcGYnLCdcXHVEODM1XFx1REQyNic6J2lmcicsJ1xcdUQ4MzVcXHVEQ0JFJzonaXNjcicsJ1xcdTIxNDgnOidpaScsJ1xcdUQ4MzVcXHVERDQwJzonSW9wZicsJ1xcdTIxMTAnOidJc2NyJywnXFx1MjExMSc6J0ltJywnXFx4RUQnOidpYWN1dGUnLCdcXHhDRCc6J0lhY3V0ZScsJ1xceEVDJzonaWdyYXZlJywnXFx4Q0MnOidJZ3JhdmUnLCdcXHhFRSc6J2ljaXJjJywnXFx4Q0UnOidJY2lyYycsJ1xceEVGJzonaXVtbCcsJ1xceENGJzonSXVtbCcsJ1xcdTAxMjknOidpdGlsZGUnLCdcXHUwMTI4JzonSXRpbGRlJywnXFx1MDEzMCc6J0lkb3QnLCdcXHUwMTJGJzonaW9nb24nLCdcXHUwMTJFJzonSW9nb24nLCdcXHUwMTJCJzonaW1hY3InLCdcXHUwMTJBJzonSW1hY3InLCdcXHUwMTMzJzonaWpsaWcnLCdcXHUwMTMyJzonSUpsaWcnLCdcXHUwMTMxJzonaW1hdGgnLCdcXHVEODM1XFx1RENCRic6J2pzY3InLCdcXHVEODM1XFx1REQ1Qic6J2pvcGYnLCdcXHVEODM1XFx1REQyNyc6J2pmcicsJ1xcdUQ4MzVcXHVEQ0E1JzonSnNjcicsJ1xcdUQ4MzVcXHVERDBEJzonSmZyJywnXFx1RDgzNVxcdURENDEnOidKb3BmJywnXFx1MDEzNSc6J2pjaXJjJywnXFx1MDEzNCc6J0pjaXJjJywnXFx1MDIzNyc6J2ptYXRoJywnXFx1RDgzNVxcdURENUMnOidrb3BmJywnXFx1RDgzNVxcdURDQzAnOidrc2NyJywnXFx1RDgzNVxcdUREMjgnOidrZnInLCdcXHVEODM1XFx1RENBNic6J0tzY3InLCdcXHVEODM1XFx1REQ0Mic6J0tvcGYnLCdcXHVEODM1XFx1REQwRSc6J0tmcicsJ1xcdTAxMzcnOidrY2VkaWwnLCdcXHUwMTM2JzonS2NlZGlsJywnXFx1RDgzNVxcdUREMjknOidsZnInLCdcXHVEODM1XFx1RENDMSc6J2xzY3InLCdcXHUyMTEzJzonZWxsJywnXFx1RDgzNVxcdURENUQnOidsb3BmJywnXFx1MjExMic6J0xzY3InLCdcXHVEODM1XFx1REQwRic6J0xmcicsJ1xcdUQ4MzVcXHVERDQzJzonTG9wZicsJ1xcdTAxM0EnOidsYWN1dGUnLCdcXHUwMTM5JzonTGFjdXRlJywnXFx1MDEzRSc6J2xjYXJvbicsJ1xcdTAxM0QnOidMY2Fyb24nLCdcXHUwMTNDJzonbGNlZGlsJywnXFx1MDEzQic6J0xjZWRpbCcsJ1xcdTAxNDInOidsc3Ryb2snLCdcXHUwMTQxJzonTHN0cm9rJywnXFx1MDE0MCc6J2xtaWRvdCcsJ1xcdTAxM0YnOidMbWlkb3QnLCdcXHVEODM1XFx1REQyQSc6J21mcicsJ1xcdUQ4MzVcXHVERDVFJzonbW9wZicsJ1xcdUQ4MzVcXHVEQ0MyJzonbXNjcicsJ1xcdUQ4MzVcXHVERDEwJzonTWZyJywnXFx1RDgzNVxcdURENDQnOidNb3BmJywnXFx1MjEzMyc6J01zY3InLCdcXHVEODM1XFx1REQyQic6J25mcicsJ1xcdUQ4MzVcXHVERDVGJzonbm9wZicsJ1xcdUQ4MzVcXHVEQ0MzJzonbnNjcicsJ1xcdTIxMTUnOidOb3BmJywnXFx1RDgzNVxcdURDQTknOidOc2NyJywnXFx1RDgzNVxcdUREMTEnOidOZnInLCdcXHUwMTQ0JzonbmFjdXRlJywnXFx1MDE0Myc6J05hY3V0ZScsJ1xcdTAxNDgnOiduY2Fyb24nLCdcXHUwMTQ3JzonTmNhcm9uJywnXFx4RjEnOidudGlsZGUnLCdcXHhEMSc6J050aWxkZScsJ1xcdTAxNDYnOiduY2VkaWwnLCdcXHUwMTQ1JzonTmNlZGlsJywnXFx1MjExNic6J251bWVybycsJ1xcdTAxNEInOidlbmcnLCdcXHUwMTRBJzonRU5HJywnXFx1RDgzNVxcdURENjAnOidvb3BmJywnXFx1RDgzNVxcdUREMkMnOidvZnInLCdcXHUyMTM0Jzonb3NjcicsJ1xcdUQ4MzVcXHVEQ0FBJzonT3NjcicsJ1xcdUQ4MzVcXHVERDEyJzonT2ZyJywnXFx1RDgzNVxcdURENDYnOidPb3BmJywnXFx4QkEnOidvcmRtJywnXFx4RjMnOidvYWN1dGUnLCdcXHhEMyc6J09hY3V0ZScsJ1xceEYyJzonb2dyYXZlJywnXFx4RDInOidPZ3JhdmUnLCdcXHhGNCc6J29jaXJjJywnXFx4RDQnOidPY2lyYycsJ1xceEY2Jzonb3VtbCcsJ1xceEQ2JzonT3VtbCcsJ1xcdTAxNTEnOidvZGJsYWMnLCdcXHUwMTUwJzonT2RibGFjJywnXFx4RjUnOidvdGlsZGUnLCdcXHhENSc6J090aWxkZScsJ1xceEY4Jzonb3NsYXNoJywnXFx4RDgnOidPc2xhc2gnLCdcXHUwMTREJzonb21hY3InLCdcXHUwMTRDJzonT21hY3InLCdcXHUwMTUzJzonb2VsaWcnLCdcXHUwMTUyJzonT0VsaWcnLCdcXHVEODM1XFx1REQyRCc6J3BmcicsJ1xcdUQ4MzVcXHVEQ0M1JzoncHNjcicsJ1xcdUQ4MzVcXHVERDYxJzoncG9wZicsJ1xcdTIxMTknOidQb3BmJywnXFx1RDgzNVxcdUREMTMnOidQZnInLCdcXHVEODM1XFx1RENBQic6J1BzY3InLCdcXHVEODM1XFx1REQ2Mic6J3FvcGYnLCdcXHVEODM1XFx1REQyRSc6J3FmcicsJ1xcdUQ4MzVcXHVEQ0M2JzoncXNjcicsJ1xcdUQ4MzVcXHVEQ0FDJzonUXNjcicsJ1xcdUQ4MzVcXHVERDE0JzonUWZyJywnXFx1MjExQSc6J1FvcGYnLCdcXHUwMTM4Jzona2dyZWVuJywnXFx1RDgzNVxcdUREMkYnOidyZnInLCdcXHVEODM1XFx1REQ2Myc6J3JvcGYnLCdcXHVEODM1XFx1RENDNyc6J3JzY3InLCdcXHUyMTFCJzonUnNjcicsJ1xcdTIxMUMnOidSZScsJ1xcdTIxMUQnOidSb3BmJywnXFx1MDE1NSc6J3JhY3V0ZScsJ1xcdTAxNTQnOidSYWN1dGUnLCdcXHUwMTU5JzoncmNhcm9uJywnXFx1MDE1OCc6J1JjYXJvbicsJ1xcdTAxNTcnOidyY2VkaWwnLCdcXHUwMTU2JzonUmNlZGlsJywnXFx1RDgzNVxcdURENjQnOidzb3BmJywnXFx1RDgzNVxcdURDQzgnOidzc2NyJywnXFx1RDgzNVxcdUREMzAnOidzZnInLCdcXHVEODM1XFx1REQ0QSc6J1NvcGYnLCdcXHVEODM1XFx1REQxNic6J1NmcicsJ1xcdUQ4MzVcXHVEQ0FFJzonU3NjcicsJ1xcdTI0QzgnOidvUycsJ1xcdTAxNUInOidzYWN1dGUnLCdcXHUwMTVBJzonU2FjdXRlJywnXFx1MDE1RCc6J3NjaXJjJywnXFx1MDE1Qyc6J1NjaXJjJywnXFx1MDE2MSc6J3NjYXJvbicsJ1xcdTAxNjAnOidTY2Fyb24nLCdcXHUwMTVGJzonc2NlZGlsJywnXFx1MDE1RSc6J1NjZWRpbCcsJ1xceERGJzonc3psaWcnLCdcXHVEODM1XFx1REQzMSc6J3RmcicsJ1xcdUQ4MzVcXHVEQ0M5JzondHNjcicsJ1xcdUQ4MzVcXHVERDY1JzondG9wZicsJ1xcdUQ4MzVcXHVEQ0FGJzonVHNjcicsJ1xcdUQ4MzVcXHVERDE3JzonVGZyJywnXFx1RDgzNVxcdURENEInOidUb3BmJywnXFx1MDE2NSc6J3RjYXJvbicsJ1xcdTAxNjQnOidUY2Fyb24nLCdcXHUwMTYzJzondGNlZGlsJywnXFx1MDE2Mic6J1RjZWRpbCcsJ1xcdTIxMjInOid0cmFkZScsJ1xcdTAxNjcnOid0c3Ryb2snLCdcXHUwMTY2JzonVHN0cm9rJywnXFx1RDgzNVxcdURDQ0EnOid1c2NyJywnXFx1RDgzNVxcdURENjYnOid1b3BmJywnXFx1RDgzNVxcdUREMzInOid1ZnInLCdcXHVEODM1XFx1REQ0Qyc6J1VvcGYnLCdcXHVEODM1XFx1REQxOCc6J1VmcicsJ1xcdUQ4MzVcXHVEQ0IwJzonVXNjcicsJ1xceEZBJzondWFjdXRlJywnXFx4REEnOidVYWN1dGUnLCdcXHhGOSc6J3VncmF2ZScsJ1xceEQ5JzonVWdyYXZlJywnXFx1MDE2RCc6J3VicmV2ZScsJ1xcdTAxNkMnOidVYnJldmUnLCdcXHhGQic6J3VjaXJjJywnXFx4REInOidVY2lyYycsJ1xcdTAxNkYnOid1cmluZycsJ1xcdTAxNkUnOidVcmluZycsJ1xceEZDJzondXVtbCcsJ1xceERDJzonVXVtbCcsJ1xcdTAxNzEnOid1ZGJsYWMnLCdcXHUwMTcwJzonVWRibGFjJywnXFx1MDE2OSc6J3V0aWxkZScsJ1xcdTAxNjgnOidVdGlsZGUnLCdcXHUwMTczJzondW9nb24nLCdcXHUwMTcyJzonVW9nb24nLCdcXHUwMTZCJzondW1hY3InLCdcXHUwMTZBJzonVW1hY3InLCdcXHVEODM1XFx1REQzMyc6J3ZmcicsJ1xcdUQ4MzVcXHVERDY3Jzondm9wZicsJ1xcdUQ4MzVcXHVEQ0NCJzondnNjcicsJ1xcdUQ4MzVcXHVERDE5JzonVmZyJywnXFx1RDgzNVxcdURENEQnOidWb3BmJywnXFx1RDgzNVxcdURDQjEnOidWc2NyJywnXFx1RDgzNVxcdURENjgnOid3b3BmJywnXFx1RDgzNVxcdURDQ0MnOid3c2NyJywnXFx1RDgzNVxcdUREMzQnOid3ZnInLCdcXHVEODM1XFx1RENCMic6J1dzY3InLCdcXHVEODM1XFx1REQ0RSc6J1dvcGYnLCdcXHVEODM1XFx1REQxQSc6J1dmcicsJ1xcdTAxNzUnOid3Y2lyYycsJ1xcdTAxNzQnOidXY2lyYycsJ1xcdUQ4MzVcXHVERDM1JzoneGZyJywnXFx1RDgzNVxcdURDQ0QnOid4c2NyJywnXFx1RDgzNVxcdURENjknOid4b3BmJywnXFx1RDgzNVxcdURENEYnOidYb3BmJywnXFx1RDgzNVxcdUREMUInOidYZnInLCdcXHVEODM1XFx1RENCMyc6J1hzY3InLCdcXHVEODM1XFx1REQzNic6J3lmcicsJ1xcdUQ4MzVcXHVEQ0NFJzoneXNjcicsJ1xcdUQ4MzVcXHVERDZBJzoneW9wZicsJ1xcdUQ4MzVcXHVEQ0I0JzonWXNjcicsJ1xcdUQ4MzVcXHVERDFDJzonWWZyJywnXFx1RDgzNVxcdURENTAnOidZb3BmJywnXFx4RkQnOid5YWN1dGUnLCdcXHhERCc6J1lhY3V0ZScsJ1xcdTAxNzcnOid5Y2lyYycsJ1xcdTAxNzYnOidZY2lyYycsJ1xceEZGJzoneXVtbCcsJ1xcdTAxNzgnOidZdW1sJywnXFx1RDgzNVxcdURDQ0YnOid6c2NyJywnXFx1RDgzNVxcdUREMzcnOid6ZnInLCdcXHVEODM1XFx1REQ2Qic6J3pvcGYnLCdcXHUyMTI4JzonWmZyJywnXFx1MjEyNCc6J1pvcGYnLCdcXHVEODM1XFx1RENCNSc6J1pzY3InLCdcXHUwMTdBJzonemFjdXRlJywnXFx1MDE3OSc6J1phY3V0ZScsJ1xcdTAxN0UnOid6Y2Fyb24nLCdcXHUwMTdEJzonWmNhcm9uJywnXFx1MDE3Qyc6J3pkb3QnLCdcXHUwMTdCJzonWmRvdCcsJ1xcdTAxQjUnOidpbXBlZCcsJ1xceEZFJzondGhvcm4nLCdcXHhERSc6J1RIT1JOJywnXFx1MDE0OSc6J25hcG9zJywnXFx1MDNCMSc6J2FscGhhJywnXFx1MDM5MSc6J0FscGhhJywnXFx1MDNCMic6J2JldGEnLCdcXHUwMzkyJzonQmV0YScsJ1xcdTAzQjMnOidnYW1tYScsJ1xcdTAzOTMnOidHYW1tYScsJ1xcdTAzQjQnOidkZWx0YScsJ1xcdTAzOTQnOidEZWx0YScsJ1xcdTAzQjUnOidlcHNpJywnXFx1MDNGNSc6J2Vwc2l2JywnXFx1MDM5NSc6J0Vwc2lsb24nLCdcXHUwM0REJzonZ2FtbWFkJywnXFx1MDNEQyc6J0dhbW1hZCcsJ1xcdTAzQjYnOid6ZXRhJywnXFx1MDM5Nic6J1pldGEnLCdcXHUwM0I3JzonZXRhJywnXFx1MDM5Nyc6J0V0YScsJ1xcdTAzQjgnOid0aGV0YScsJ1xcdTAzRDEnOid0aGV0YXYnLCdcXHUwMzk4JzonVGhldGEnLCdcXHUwM0I5JzonaW90YScsJ1xcdTAzOTknOidJb3RhJywnXFx1MDNCQSc6J2thcHBhJywnXFx1MDNGMCc6J2thcHBhdicsJ1xcdTAzOUEnOidLYXBwYScsJ1xcdTAzQkInOidsYW1iZGEnLCdcXHUwMzlCJzonTGFtYmRhJywnXFx1MDNCQyc6J211JywnXFx4QjUnOidtaWNybycsJ1xcdTAzOUMnOidNdScsJ1xcdTAzQkQnOidudScsJ1xcdTAzOUQnOidOdScsJ1xcdTAzQkUnOid4aScsJ1xcdTAzOUUnOidYaScsJ1xcdTAzQkYnOidvbWljcm9uJywnXFx1MDM5Ric6J09taWNyb24nLCdcXHUwM0MwJzoncGknLCdcXHUwM0Q2JzoncGl2JywnXFx1MDNBMCc6J1BpJywnXFx1MDNDMSc6J3JobycsJ1xcdTAzRjEnOidyaG92JywnXFx1MDNBMSc6J1JobycsJ1xcdTAzQzMnOidzaWdtYScsJ1xcdTAzQTMnOidTaWdtYScsJ1xcdTAzQzInOidzaWdtYWYnLCdcXHUwM0M0JzondGF1JywnXFx1MDNBNCc6J1RhdScsJ1xcdTAzQzUnOid1cHNpJywnXFx1MDNBNSc6J1Vwc2lsb24nLCdcXHUwM0QyJzonVXBzaScsJ1xcdTAzQzYnOidwaGknLCdcXHUwM0Q1JzoncGhpdicsJ1xcdTAzQTYnOidQaGknLCdcXHUwM0M3JzonY2hpJywnXFx1MDNBNyc6J0NoaScsJ1xcdTAzQzgnOidwc2knLCdcXHUwM0E4JzonUHNpJywnXFx1MDNDOSc6J29tZWdhJywnXFx1MDNBOSc6J29obScsJ1xcdTA0MzAnOidhY3knLCdcXHUwNDEwJzonQWN5JywnXFx1MDQzMSc6J2JjeScsJ1xcdTA0MTEnOidCY3knLCdcXHUwNDMyJzondmN5JywnXFx1MDQxMic6J1ZjeScsJ1xcdTA0MzMnOidnY3knLCdcXHUwNDEzJzonR2N5JywnXFx1MDQ1Myc6J2dqY3knLCdcXHUwNDAzJzonR0pjeScsJ1xcdTA0MzQnOidkY3knLCdcXHUwNDE0JzonRGN5JywnXFx1MDQ1Mic6J2RqY3knLCdcXHUwNDAyJzonREpjeScsJ1xcdTA0MzUnOidpZWN5JywnXFx1MDQxNSc6J0lFY3knLCdcXHUwNDUxJzonaW9jeScsJ1xcdTA0MDEnOidJT2N5JywnXFx1MDQ1NCc6J2p1a2N5JywnXFx1MDQwNCc6J0p1a2N5JywnXFx1MDQzNic6J3poY3knLCdcXHUwNDE2JzonWkhjeScsJ1xcdTA0MzcnOid6Y3knLCdcXHUwNDE3JzonWmN5JywnXFx1MDQ1NSc6J2RzY3knLCdcXHUwNDA1JzonRFNjeScsJ1xcdTA0MzgnOidpY3knLCdcXHUwNDE4JzonSWN5JywnXFx1MDQ1Nic6J2l1a2N5JywnXFx1MDQwNic6J0l1a2N5JywnXFx1MDQ1Nyc6J3lpY3knLCdcXHUwNDA3JzonWUljeScsJ1xcdTA0MzknOidqY3knLCdcXHUwNDE5JzonSmN5JywnXFx1MDQ1OCc6J2pzZXJjeScsJ1xcdTA0MDgnOidKc2VyY3knLCdcXHUwNDNBJzona2N5JywnXFx1MDQxQSc6J0tjeScsJ1xcdTA0NUMnOidramN5JywnXFx1MDQwQyc6J0tKY3knLCdcXHUwNDNCJzonbGN5JywnXFx1MDQxQic6J0xjeScsJ1xcdTA0NTknOidsamN5JywnXFx1MDQwOSc6J0xKY3knLCdcXHUwNDNDJzonbWN5JywnXFx1MDQxQyc6J01jeScsJ1xcdTA0M0QnOiduY3knLCdcXHUwNDFEJzonTmN5JywnXFx1MDQ1QSc6J25qY3knLCdcXHUwNDBBJzonTkpjeScsJ1xcdTA0M0UnOidvY3knLCdcXHUwNDFFJzonT2N5JywnXFx1MDQzRic6J3BjeScsJ1xcdTA0MUYnOidQY3knLCdcXHUwNDQwJzoncmN5JywnXFx1MDQyMCc6J1JjeScsJ1xcdTA0NDEnOidzY3knLCdcXHUwNDIxJzonU2N5JywnXFx1MDQ0Mic6J3RjeScsJ1xcdTA0MjInOidUY3knLCdcXHUwNDVCJzondHNoY3knLCdcXHUwNDBCJzonVFNIY3knLCdcXHUwNDQzJzondWN5JywnXFx1MDQyMyc6J1VjeScsJ1xcdTA0NUUnOid1YnJjeScsJ1xcdTA0MEUnOidVYnJjeScsJ1xcdTA0NDQnOidmY3knLCdcXHUwNDI0JzonRmN5JywnXFx1MDQ0NSc6J2toY3knLCdcXHUwNDI1JzonS0hjeScsJ1xcdTA0NDYnOid0c2N5JywnXFx1MDQyNic6J1RTY3knLCdcXHUwNDQ3JzonY2hjeScsJ1xcdTA0MjcnOidDSGN5JywnXFx1MDQ1Ric6J2R6Y3knLCdcXHUwNDBGJzonRFpjeScsJ1xcdTA0NDgnOidzaGN5JywnXFx1MDQyOCc6J1NIY3knLCdcXHUwNDQ5Jzonc2hjaGN5JywnXFx1MDQyOSc6J1NIQ0hjeScsJ1xcdTA0NEEnOidoYXJkY3knLCdcXHUwNDJBJzonSEFSRGN5JywnXFx1MDQ0Qic6J3ljeScsJ1xcdTA0MkInOidZY3knLCdcXHUwNDRDJzonc29mdGN5JywnXFx1MDQyQyc6J1NPRlRjeScsJ1xcdTA0NEQnOidlY3knLCdcXHUwNDJEJzonRWN5JywnXFx1MDQ0RSc6J3l1Y3knLCdcXHUwNDJFJzonWVVjeScsJ1xcdTA0NEYnOid5YWN5JywnXFx1MDQyRic6J1lBY3knLCdcXHUyMTM1JzonYWxlcGgnLCdcXHUyMTM2JzonYmV0aCcsJ1xcdTIxMzcnOidnaW1lbCcsJ1xcdTIxMzgnOidkYWxldGgnfTtcblxuXHR2YXIgcmVnZXhFc2NhcGUgPSAvW1wiJic8PmBdL2c7XG5cdHZhciBlc2NhcGVNYXAgPSB7XG5cdFx0J1wiJzogJyZxdW90OycsXG5cdFx0JyYnOiAnJmFtcDsnLFxuXHRcdCdcXCcnOiAnJiN4Mjc7Jyxcblx0XHQnPCc6ICcmbHQ7Jyxcblx0XHQvLyBTZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2FtYmlndW91cy1hbXBlcnNhbmRzOiBpbiBIVE1MLCB0aGVcblx0XHQvLyBmb2xsb3dpbmcgaXMgbm90IHN0cmljdGx5IG5lY2Vzc2FyeSB1bmxlc3MgaXTigJlzIHBhcnQgb2YgYSB0YWcgb3IgYW5cblx0XHQvLyB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUuIFdl4oCZcmUgb25seSBlc2NhcGluZyBpdCB0byBzdXBwb3J0IHRob3NlXG5cdFx0Ly8gc2l0dWF0aW9ucywgYW5kIGZvciBYTUwgc3VwcG9ydC5cblx0XHQnPic6ICcmZ3Q7Jyxcblx0XHQvLyBJbiBJbnRlcm5ldCBFeHBsb3JlciDiiaQgOCwgdGhlIGJhY2t0aWNrIGNoYXJhY3RlciBjYW4gYmUgdXNlZFxuXHRcdC8vIHRvIGJyZWFrIG91dCBvZiAodW4pcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZXMgb3IgSFRNTCBjb21tZW50cy5cblx0XHQvLyBTZWUgaHR0cDovL2h0bWw1c2VjLm9yZy8jMTAyLCBodHRwOi8vaHRtbDVzZWMub3JnLyMxMDgsIGFuZFxuXHRcdC8vIGh0dHA6Ly9odG1sNXNlYy5vcmcvIzEzMy5cblx0XHQnYCc6ICcmI3g2MDsnXG5cdH07XG5cblx0dmFyIHJlZ2V4SW52YWxpZEVudGl0eSA9IC8mIyg/Olt4WF1bXmEtZkEtRjAtOV18W14wLTl4WF0pLztcblx0dmFyIHJlZ2V4SW52YWxpZFJhd0NvZGVQb2ludCA9IC9bXFwwLVxceDA4XFx4MEJcXHgwRS1cXHgxRlxceDdGLVxceDlGXFx1RkREMC1cXHVGREVGXFx1RkZGRVxcdUZGRkZdfFtcXHVEODNGXFx1RDg3RlxcdUQ4QkZcXHVEOEZGXFx1RDkzRlxcdUQ5N0ZcXHVEOUJGXFx1RDlGRlxcdURBM0ZcXHVEQTdGXFx1REFCRlxcdURBRkZcXHVEQjNGXFx1REI3RlxcdURCQkZcXHVEQkZGXVtcXHVERkZFXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vO1xuXHR2YXIgcmVnZXhEZWNvZGUgPSAvJihDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsfERvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvd3xDbG9ja3dpc2VDb250b3VySW50ZWdyYWx8Tm90TmVzdGVkR3JlYXRlckdyZWF0ZXJ8Tm90U3F1YXJlU3VwZXJzZXRFcXVhbHxEaWFjcml0aWNhbERvdWJsZUFjdXRlfE5vdFJpZ2h0VHJpYW5nbGVFcXVhbHxOb3RTdWNjZWVkc1NsYW50RXF1YWx8Tm90UHJlY2VkZXNTbGFudEVxdWFsfENsb3NlQ3VybHlEb3VibGVRdW90ZXxOZWdhdGl2ZVZlcnlUaGluU3BhY2V8RG91YmxlQ29udG91ckludGVncmFsfEZpbGxlZFZlcnlTbWFsbFNxdWFyZXxDYXBpdGFsRGlmZmVyZW50aWFsRHxPcGVuQ3VybHlEb3VibGVRdW90ZXxFbXB0eVZlcnlTbWFsbFNxdWFyZXxOZXN0ZWRHcmVhdGVyR3JlYXRlcnxEb3VibGVMb25nUmlnaHRBcnJvd3xOb3RMZWZ0VHJpYW5nbGVFcXVhbHxOb3RHcmVhdGVyU2xhbnRFcXVhbHxSZXZlcnNlVXBFcXVpbGlicml1bXxEb3VibGVMZWZ0UmlnaHRBcnJvd3xOb3RTcXVhcmVTdWJzZXRFcXVhbHxOb3REb3VibGVWZXJ0aWNhbEJhcnxSaWdodEFycm93TGVmdEFycm93fE5vdEdyZWF0ZXJGdWxsRXF1YWx8Tm90UmlnaHRUcmlhbmdsZUJhcnxTcXVhcmVTdXBlcnNldEVxdWFsfERvd25MZWZ0UmlnaHRWZWN0b3J8RG91YmxlTG9uZ0xlZnRBcnJvd3xsZWZ0cmlnaHRzcXVpZ2Fycm93fExlZnRBcnJvd1JpZ2h0QXJyb3d8TmVnYXRpdmVNZWRpdW1TcGFjZXxibGFja3RyaWFuZ2xlcmlnaHR8UmlnaHREb3duVmVjdG9yQmFyfFByZWNlZGVzU2xhbnRFcXVhbHxSaWdodERvdWJsZUJyYWNrZXR8U3VjY2VlZHNTbGFudEVxdWFsfE5vdExlZnRUcmlhbmdsZUJhcnxSaWdodFRyaWFuZ2xlRXF1YWx8U3F1YXJlSW50ZXJzZWN0aW9ufFJpZ2h0RG93blRlZVZlY3RvcnxSZXZlcnNlRXF1aWxpYnJpdW18TmVnYXRpdmVUaGlja1NwYWNlfGxvbmdsZWZ0cmlnaHRhcnJvd3xMb25nbGVmdHJpZ2h0YXJyb3d8TG9uZ0xlZnRSaWdodEFycm93fERvd25SaWdodFRlZVZlY3RvcnxEb3duUmlnaHRWZWN0b3JCYXJ8R3JlYXRlclNsYW50RXF1YWx8U3F1YXJlU3Vic2V0RXF1YWx8TGVmdERvd25WZWN0b3JCYXJ8TGVmdERvdWJsZUJyYWNrZXR8VmVydGljYWxTZXBhcmF0b3J8cmlnaHRsZWZ0aGFycG9vbnN8Tm90R3JlYXRlckdyZWF0ZXJ8Tm90U3F1YXJlU3VwZXJzZXR8YmxhY2t0cmlhbmdsZWxlZnR8YmxhY2t0cmlhbmdsZWRvd258TmVnYXRpdmVUaGluU3BhY2V8TGVmdERvd25UZWVWZWN0b3J8Tm90TGVzc1NsYW50RXF1YWx8bGVmdHJpZ2h0aGFycG9vbnN8RG91YmxlVXBEb3duQXJyb3d8RG91YmxlVmVydGljYWxCYXJ8TGVmdFRyaWFuZ2xlRXF1YWx8RmlsbGVkU21hbGxTcXVhcmV8dHdvaGVhZHJpZ2h0YXJyb3d8Tm90TmVzdGVkTGVzc0xlc3N8RG93bkxlZnRUZWVWZWN0b3J8RG93bkxlZnRWZWN0b3JCYXJ8UmlnaHRBbmdsZUJyYWNrZXR8Tm90VGlsZGVGdWxsRXF1YWx8Tm90UmV2ZXJzZUVsZW1lbnR8UmlnaHRVcERvd25WZWN0b3J8RGlhY3JpdGljYWxUaWxkZXxOb3RTdWNjZWVkc1RpbGRlfGNpcmNsZWFycm93cmlnaHR8Tm90UHJlY2VkZXNFcXVhbHxyaWdodGhhcnBvb25kb3dufERvdWJsZVJpZ2h0QXJyb3d8Tm90U3VjY2VlZHNFcXVhbHxOb25CcmVha2luZ1NwYWNlfE5vdFJpZ2h0VHJpYW5nbGV8TGVzc0VxdWFsR3JlYXRlcnxSaWdodFVwVGVlVmVjdG9yfExlZnRBbmdsZUJyYWNrZXR8R3JlYXRlckZ1bGxFcXVhbHxEb3duQXJyb3dVcEFycm93fFJpZ2h0VXBWZWN0b3JCYXJ8dHdvaGVhZGxlZnRhcnJvd3xHcmVhdGVyRXF1YWxMZXNzfGRvd25oYXJwb29ucmlnaHR8UmlnaHRUcmlhbmdsZUJhcnxudHJpYW5nbGVyaWdodGVxfE5vdFN1cGVyc2V0RXF1YWx8TGVmdFVwRG93blZlY3RvcnxEaWFjcml0aWNhbEFjdXRlfHJpZ2h0cmlnaHRhcnJvd3N8dmFydHJpYW5nbGVyaWdodHxVcEFycm93RG93bkFycm93fERpYWNyaXRpY2FsR3JhdmV8VW5kZXJQYXJlbnRoZXNpc3xFbXB0eVNtYWxsU3F1YXJlfExlZnRVcFZlY3RvckJhcnxsZWZ0cmlnaHRhcnJvd3N8RG93blJpZ2h0VmVjdG9yfGRvd25oYXJwb29ubGVmdHx0cmlhbmdsZXJpZ2h0ZXF8U2hvcnRSaWdodEFycm93fE92ZXJQYXJlbnRoZXNpc3xEb3VibGVMZWZ0QXJyb3d8RG91YmxlRG93bkFycm93fE5vdFNxdWFyZVN1YnNldHxiaWd0cmlhbmdsZWRvd258bnRyaWFuZ2xlbGVmdGVxfFVwcGVyUmlnaHRBcnJvd3xjdXJ2ZWFycm93cmlnaHR8dmFydHJpYW5nbGVsZWZ0fE5vdExlZnRUcmlhbmdsZXxubGVmdHJpZ2h0YXJyb3d8TG93ZXJSaWdodEFycm93fE5vdEh1bXBEb3duSHVtcHxOb3RHcmVhdGVyVGlsZGV8cmlnaHR0aHJlZXRpbWVzfExlZnRVcFRlZVZlY3RvcnxOb3RHcmVhdGVyRXF1YWx8c3RyYWlnaHRlcHNpbG9ufExlZnRUcmlhbmdsZUJhcnxyaWdodHNxdWlnYXJyb3d8Q29udG91ckludGVncmFsfHJpZ2h0bGVmdGFycm93c3xDbG9zZUN1cmx5UXVvdGV8UmlnaHREb3duVmVjdG9yfExlZnRSaWdodFZlY3RvcnxuTGVmdHJpZ2h0YXJyb3d8bGVmdGhhcnBvb25kb3dufGNpcmNsZWFycm93bGVmdHxTcXVhcmVTdXBlcnNldHxPcGVuQ3VybHlRdW90ZXxob29rcmlnaHRhcnJvd3xIb3Jpem9udGFsTGluZXxEaWFjcml0aWNhbERvdHxOb3RMZXNzR3JlYXRlcnxudHJpYW5nbGVyaWdodHxEb3VibGVSaWdodFRlZXxJbnZpc2libGVDb21tYXxJbnZpc2libGVUaW1lc3xMb3dlckxlZnRBcnJvd3xEb3duTGVmdFZlY3RvcnxOb3RTdWJzZXRFcXVhbHxjdXJ2ZWFycm93bGVmdHx0cmlhbmdsZWxlZnRlcXxOb3RWZXJ0aWNhbEJhcnxUaWxkZUZ1bGxFcXVhbHxkb3duZG93bmFycm93c3xOb3RHcmVhdGVyTGVzc3xSaWdodFRlZVZlY3RvcnxaZXJvV2lkdGhTcGFjZXxsb29wYXJyb3dyaWdodHxMb25nUmlnaHRBcnJvd3xkb3VibGViYXJ3ZWRnZXxTaG9ydExlZnRBcnJvd3xTaG9ydERvd25BcnJvd3xSaWdodFZlY3RvckJhcnxHcmVhdGVyR3JlYXRlcnxSZXZlcnNlRWxlbWVudHxyaWdodGhhcnBvb251cHxMZXNzU2xhbnRFcXVhbHxsZWZ0dGhyZWV0aW1lc3x1cGhhcnBvb25yaWdodHxyaWdodGFycm93dGFpbHxMZWZ0RG93blZlY3RvcnxMb25ncmlnaHRhcnJvd3xOZXN0ZWRMZXNzTGVzc3xVcHBlckxlZnRBcnJvd3xuc2hvcnRwYXJhbGxlbHxsZWZ0bGVmdGFycm93c3xsZWZ0cmlnaHRhcnJvd3xMZWZ0cmlnaHRhcnJvd3xMZWZ0UmlnaHRBcnJvd3xsb25ncmlnaHRhcnJvd3x1cGhhcnBvb25sZWZ0fFJpZ2h0QXJyb3dCYXJ8QXBwbHlGdW5jdGlvbnxMZWZ0VGVlVmVjdG9yfGxlZnRhcnJvd3RhaWx8Tm90RXF1YWxUaWxkZXx2YXJzdWJzZXRuZXFxfHZhcnN1cHNldG5lcXF8UmlnaHRUZWVBcnJvd3xTdWNjZWVkc0VxdWFsfFN1Y2NlZWRzVGlsZGV8TGVmdFZlY3RvckJhcnxTdXBlcnNldEVxdWFsfGhvb2tsZWZ0YXJyb3d8RGlmZmVyZW50aWFsRHxWZXJ0aWNhbFRpbGRlfFZlcnlUaGluU3BhY2V8YmxhY2t0cmlhbmdsZXxiaWd0cmlhbmdsZXVwfExlc3NGdWxsRXF1YWx8ZGl2aWRlb250aW1lc3xsZWZ0aGFycG9vbnVwfFVwRXF1aWxpYnJpdW18bnRyaWFuZ2xlbGVmdHxSaWdodFRyaWFuZ2xlfG1lYXN1cmVkYW5nbGV8c2hvcnRwYXJhbGxlbHxsb25nbGVmdGFycm93fExvbmdsZWZ0YXJyb3d8TG9uZ0xlZnRBcnJvd3xEb3VibGVMZWZ0VGVlfFBvaW5jYXJlcGxhbmV8UHJlY2VkZXNFcXVhbHx0cmlhbmdsZXJpZ2h0fERvdWJsZVVwQXJyb3d8UmlnaHRVcFZlY3RvcnxmYWxsaW5nZG90c2VxfGxvb3BhcnJvd2xlZnR8UHJlY2VkZXNUaWxkZXxOb3RUaWxkZUVxdWFsfE5vdFRpbGRlVGlsZGV8c21hbGxzZXRtaW51c3xQcm9wb3J0aW9uYWx8dHJpYW5nbGVsZWZ0fHRyaWFuZ2xlZG93bnxVbmRlckJyYWNrZXR8Tm90SHVtcEVxdWFsfGV4cG9uZW50aWFsZXxFeHBvbmVudGlhbEV8Tm90TGVzc1RpbGRlfEhpbGJlcnRTcGFjZXxSaWdodENlaWxpbmd8YmxhY2tsb3plbmdlfHZhcnN1cHNldG5lcXxIdW1wRG93bkh1bXB8R3JlYXRlckVxdWFsfFZlcnRpY2FsTGluZXxMZWZ0VGVlQXJyb3d8Tm90TGVzc0VxdWFsfERvd25UZWVBcnJvd3xMZWZ0VHJpYW5nbGV8dmFyc3Vic2V0bmVxfEludGVyc2VjdGlvbnxOb3RDb25ncnVlbnR8RG93bkFycm93QmFyfExlZnRVcFZlY3RvcnxMZWZ0QXJyb3dCYXJ8cmlzaW5nZG90c2VxfEdyZWF0ZXJUaWxkZXxSb3VuZEltcGxpZXN8U3F1YXJlU3Vic2V0fFNob3J0VXBBcnJvd3xOb3RTdXBlcnNldHxxdWF0ZXJuaW9uc3xwcmVjbmFwcHJveHxiYWNrZXBzaWxvbnxwcmVjY3VybHllcXxPdmVyQnJhY2tldHxibGFja3NxdWFyZXxNZWRpdW1TcGFjZXxWZXJ0aWNhbEJhcnxjaXJjbGVkY2lyY3xjaXJjbGVkZGFzaHxDaXJjbGVNaW51c3xDaXJjbGVUaW1lc3xMZXNzR3JlYXRlcnxjdXJseWVxcHJlY3xjdXJseWVxc3VjY3xkaWFtb25kc3VpdHxVcERvd25BcnJvd3xVcGRvd25hcnJvd3xSdWxlRGVsYXllZHxScmlnaHRhcnJvd3x1cGRvd25hcnJvd3xSaWdodFZlY3RvcnxuUmlnaHRhcnJvd3xucmlnaHRhcnJvd3xlcXNsYW50bGVzc3xMZWZ0Q2VpbGluZ3xFcXVpbGlicml1bXxTbWFsbENpcmNsZXxleHBlY3RhdGlvbnxOb3RTdWNjZWVkc3x0aGlja2FwcHJveHxHcmVhdGVyTGVzc3xTcXVhcmVVbmlvbnxOb3RQcmVjZWRlc3xOb3RMZXNzTGVzc3xzdHJhaWdodHBoaXxzdWNjbmFwcHJveHxzdWNjY3VybHllcXxTdWJzZXRFcXVhbHxzcXN1cHNldGVxfFByb3BvcnRpb258TGFwbGFjZXRyZnxJbWFnaW5hcnlJfHN1cHNldG5lcXF8Tm90R3JlYXRlcnxndHJlcXFsZXNzfE5vdEVsZW1lbnR8VGhpY2tTcGFjZXxUaWxkZUVxdWFsfFRpbGRlVGlsZGV8Rm91cmllcnRyZnxybW91c3RhY2hlfEVxdWFsVGlsZGV8ZXFzbGFudGd0cnxVbmRlckJyYWNlfExlZnRWZWN0b3J8VXBBcnJvd0JhcnxuTGVmdGFycm93fG5zdWJzZXRlcXF8c3Vic2V0bmVxcXxuc3Vwc2V0ZXFxfG5sZWZ0YXJyb3d8c3VjY2FwcHJveHxsZXNzYXBwcm94fFVwVGVlQXJyb3d8dXB1cGFycm93c3xjdXJseXdlZGdlfGxlc3NlcXFndHJ8dmFyZXBzaWxvbnx2YXJub3RoaW5nfFJpZ2h0Rmxvb3J8Y29tcGxlbWVudHxDaXJjbGVQbHVzfHNxc3Vic2V0ZXF8TGxlZnRhcnJvd3xjaXJjbGVkYXN0fFJpZ2h0QXJyb3d8UmlnaHRhcnJvd3xyaWdodGFycm93fGxtb3VzdGFjaGV8QmVybm91bGxpc3xwcmVjYXBwcm94fG1hcHN0b2xlZnR8bWFwc3RvZG93bnxsb25nbWFwc3RvfGRvdHNxdWFyZXxkb3duYXJyb3d8RG91YmxlRG90fG5zdWJzZXRlcXxzdXBzZXRuZXF8bGVmdGFycm93fG5zdXBzZXRlcXxzdWJzZXRuZXF8VGhpblNwYWNlfG5nZXFzbGFudHxzdWJzZXRlcXF8SHVtcEVxdWFsfE5vdFN1YnNldHx0cmlhbmdsZXF8Tm90Q3VwQ2FwfGxlc3NlcWd0cnxoZWFydHN1aXR8VHJpcGxlRG90fExlZnRhcnJvd3xDb3Byb2R1Y3R8Q29uZ3J1ZW50fHZhcnByb3B0b3xjb21wbGV4ZXN8Z3ZlcnRuZXFxfExlZnRBcnJvd3xMZXNzVGlsZGV8c3Vwc2V0ZXFxfE1pbnVzUGx1c3xDaXJjbGVEb3R8bmxlcXNsYW50fE5vdEV4aXN0c3xndHJlcWxlc3N8bnBhcmFsbGVsfFVuaW9uUGx1c3xMZWZ0Rmxvb3J8Y2hlY2ttYXJrfENlbnRlckRvdHxjZW50ZXJkb3R8TWVsbGludHJmfGd0cmFwcHJveHxiaWdvdGltZXN8T3ZlckJyYWNlfHNwYWRlc3VpdHx0aGVyZWZvcmV8cGl0Y2hmb3JrfHJhdGlvbmFsc3xQbHVzTWludXN8QmFja3NsYXNofFRoZXJlZm9yZXxEb3duQnJldmV8YmFja3NpbWVxfGJhY2twcmltZXxEb3duQXJyb3d8bnNob3J0bWlkfERvd25hcnJvd3xsdmVydG5lcXF8ZXF2cGFyc2x8aW1hZ2xpbmV8aW1hZ3BhcnR8aW5maW50aWV8aW50ZWdlcnN8SW50ZWdyYWx8aW50ZXJjYWx8TGVzc0xlc3N8VWFycm9jaXJ8aW50bGFyaGt8c3FzdXBzZXR8YW5nbXNkYWZ8c3FzdWJzZXR8bGxjb3JuZXJ8dmFydGhldGF8Y3VwYnJjYXB8bG5hcHByb3h8U3VwZXJzZXR8U3VjaFRoYXR8c3VjY25zaW18c3VjY25lcXF8YW5nbXNkYWd8YmlndXBsdXN8Y3VybHl2ZWV8dHJwZXppdW18U3VjY2VlZHN8Tm90VGlsZGV8Ymlnd2VkZ2V8YW5nbXNkYWh8YW5ncnR2YmR8dHJpbWludXN8Y3djb25pbnR8ZnBhcnRpbnR8bHJjb3JuZXJ8c21lcGFyc2x8c3Vic2V0ZXF8dXJjb3JuZXJ8bHVyZHNoYXJ8bGFlbXB0eXZ8RERvdHJhaGR8YXBwcm94ZXF8bGRydXNoYXJ8YXdjb25pbnR8bWFwc3RvdXB8YmFja2Nvbmd8c2hvcnRtaWR8dHJpYW5nbGV8Z2Vxc2xhbnR8Z2VzZG90b2x8dGltZXNiYXJ8Y2lyY2xlZFJ8Y2lyY2xlZFN8c2V0bWludXN8bXVsdGltYXB8bmF0dXJhbHN8c2Nwb2xpbnR8bmNvbmdkb3R8UmlnaHRUZWV8Ym94bWludXN8Z25hcHByb3h8Ym94dGltZXN8YW5kc2xvcGV8dGhpY2tzaW18YW5nbXNkYWF8dmFyc2lnbWF8Y2lyZm5pbnR8cnRyaWx0cml8YW5nbXNkYWJ8cnBwb2xpbnR8YW5nbXNkYWN8YmFyd2VkZ2V8ZHJia2Fyb3d8Y2x1YnN1aXR8dGhldGFzeW18YnNvbGhzdWJ8Y2FwYnJjdXB8ZHppZ3JhcnJ8ZG90ZXFkb3R8RG90RXF1YWx8ZG90bWludXN8VW5kZXJCYXJ8Tm90RXF1YWx8cmVhbHBhcnR8b3RpbWVzYXN8dWxjb3JuZXJ8aGtzZWFyb3d8aGtzd2Fyb3d8cGFyYWxsZWx8UGFydGlhbER8ZWxpbnRlcnN8ZW1wdHlzZXR8cGx1c2FjaXJ8YmJya3Ricmt8YW5nbXNkYWR8cG9pbnRpbnR8Ymlnb3BsdXN8YW5nbXNkYWV8UHJlY2VkZXN8Ymlnc3FjdXB8dmFya2FwcGF8bm90aW5kb3R8c3Vwc2V0ZXF8cHJlY25lcXF8cHJlY25zaW18cHJvZmFsYXJ8cHJvZmxpbmV8cHJvZnN1cmZ8bGVxc2xhbnR8bGVzZG90b3J8cmFlbXB0eXZ8c3VicGx1c3xub3RuaXZifG5vdG5pdmN8c3VicmFycnx6aWdyYXJyfHZ6aWd6YWd8c3VibXVsdHxzdWJlZG90fEVsZW1lbnR8YmV0d2VlbnxjaXJzY2lyfGxhcnJiZnN8bGFycnNpbXxsb3RpbWVzfGxicmtzbGR8bGJya3NsdXxsb3plbmdlfGxkcmRoYXJ8ZGJrYXJvd3xiaWdjaXJjfGVwc2lsb258c2ltcmFycnxzaW1wbHVzfGx0cXVlc3R8RXBzaWxvbnxsdXJ1aGFyfGd0cXVlc3R8bWFsdGVzZXxucG9saW50fGVxY29sb258bnByZWNlcXxiaWdvZG90fGRkYWdnZXJ8Z3RybGVzc3xibmVxdWl2fGhhcnJjaXJ8ZGRvdHNlcXxlcXVpdkREfGJhY2tzaW18ZGVtcHR5dnxuc3FzdWJlfG5zcXN1cGV8VXBzaWxvbnxuc3Vic2V0fHVwc2lsb258bWludXNkdXxuc3VjY2VxfHN3YXJyb3d8bnN1cHNldHxjb2xvbmVxfHNlYXJyb3d8Ym94cGx1c3xuYXBwcm94fG5hdHVyYWx8YXN5bXBlcXxhbGVmc3ltfGNvbmdkb3R8bmVhcnJvd3xiaWdzdGFyfGRpYW1vbmR8c3VwcGx1c3x0cml0aW1lfExlZnRUZWV8bnZpbmZpbnx0cmlwbHVzfE5ld0xpbmV8bnZsdHJpZXxudnJ0cmllfG53YXJyb3d8bmV4aXN0c3xEaWFtb25kfHJ1bHVoYXJ8SW1wbGllc3xzdXBtdWx0fGFuZ3phcnJ8c3VwbGFycnxzdXBoc3VifHF1ZXN0ZXF8YmVjYXVzZXxkaWdhbW1hfEJlY2F1c2V8b2xjcm9zc3xiZW1wdHl2fG9taWNyb258T21pY3Jvbnxyb3RpbWVzfE5vQnJlYWt8aW50cHJvZHxhbmdydHZifG9yZGVyb2Z8dXdhbmdsZXxzdXBoc29sfGxlc2RvdG98b3JzbG9wZXxEb3duVGVlfHJlYWxpbmV8Y3VkYXJybHxyZGxkaGFyfE92ZXJCYXJ8c3VwZWRvdHxsZXNzZG90fHN1cGRzdWJ8dG9wZm9ya3xzdWNjc2ltfHJicmtzbHV8cmJya3NsZHxwZXJ0ZW5rfGN1ZGFycnJ8aXNpbmRvdHxwbGFuY2tofGxlc3NndHJ8cGx1c2NpcnxnZXNkb3RvfHBsdXNzaW18cGx1c3R3b3xsZXNzc2ltfGN1bGFycnB8cmFycnNpbXxDYXlsZXlzfG5vdGludmF8bm90aW52Ynxub3RpbnZjfFVwQXJyb3d8VXBhcnJvd3x1cGFycm93fE5vdExlc3N8ZHdhbmdsZXxwcmVjc2ltfFByb2R1Y3R8Y3VyYXJybXxDY29uaW50fGRvdHBsdXN8cmFycmJmc3xjY3Vwc3NtfENlZGlsbGF8Y2VtcHR5dnxub3RuaXZhfHF1YXRpbnR8ZnJhYzM1fGZyYWMzOHxmcmFjNDV8ZnJhYzU2fGZyYWM1OHxmcmFjNzh8dHJpZG90fHhvcGx1c3xnYWN1dGV8Z2FtbWFkfEdhbW1hZHxsZmlzaHR8bGZsb29yfGJpZ2N1cHxzcXN1cGV8Z2JyZXZlfEdicmV2ZXxsaGFydWx8c3FzdWJlfHNxY3Vwc3xHY2VkaWx8YXBhY2lyfGxsaGFyZHxsbWlkb3R8TG1pZG90fGxtb3VzdHxhbmRhbmR8c3FjYXBzfGFwcHJveHxBYnJldmV8c3BhZGVzfGNpcmNlcXx0cHJpbWV8ZGl2aWRlfHRvcGNpcnxBc3NpZ258dG9wYm90fGdlc2RvdHxkaXZvbnh8eHVwbHVzfHRpbWVzZHxnZXNsZXN8YXRpbGRlfHNvbGJhcnxTT0ZUY3l8bG9wbHVzfHRpbWVzYnxsb3dhc3R8bG93YmFyfGRsY29ybnxkbGNyb3B8c29mdGN5fGRvbGxhcnxscGFybHR8dGhrc2ltfGxyaGFyZHxBdGlsZGV8bHNhcXVvfHNtYXNocHxiaWd2ZWV8dGhpbnNwfHdyZWF0aHxia2Fyb3d8bHNxdW9yfGxzdHJva3xMc3Ryb2t8bHRocmVlfGx0aW1lc3xsdGxhcnJ8RG90RG90fHNpbWRvdHxsdHJQYXJ8d2VpZXJwfHhzcWN1cHxhbmdtc2R8c2lnbWF2fHNpZ21hZnx6ZWV0cmZ8WmNhcm9ufHpjYXJvbnxtYXBzdG98dnN1cG5lfHRoZXRhdnxjaXJtaWR8bWFya2VyfG1jb21tYXxaYWN1dGV8dnN1Ym5FfHRoZXJlNHxndGxQYXJ8dnN1Ym5lfGJvdHRvbXxndHJhcnJ8U0hDSGN5fHNoY2hjeXxtaWRhc3R8bWlkY2lyfG1pZGRvdHxtaW51c2J8bWludXNkfGd0cmRvdHxib3d0aWV8c2Zyb3dufG1ucGx1c3xtb2RlbHN8Y29sb25lfHNlc3dhcnxDb2xvbmV8bXN0cG9zfHNlYXJoa3xndHJzaW18bmFjdXRlfE5hY3V0ZXxib3hib3h8dGVscmVjfGhhaXJzcHxUY2VkaWx8bmJ1bXBlfHNjbnNpbXxuY2Fyb258TmNhcm9ufG5jZWRpbHxOY2VkaWx8aGFtaWx0fFNjZWRpbHxuZWFyaGt8aGFyZGN5fEhBUkRjeXx0Y2VkaWx8VGNhcm9ufGNvbW1hdHxuZXF1aXZ8bmVzZWFyfHRjYXJvbnx0YXJnZXR8aGVhcnRzfG5leGlzdHx2YXJyaG98c2NlZGlsfFNjYXJvbnxzY2Fyb258aGVsbGlwfFNhY3V0ZXxzYWN1dGV8aGVyY29ufHN3bndhcnxjb21wZm58cnRpbWVzfHJ0aHJlZXxyc3F1b3J8cnNhcXVvfHphY3V0ZXx3ZWRnZXF8aG9tdGh0fGJhcnZlZXxiYXJ3ZWR8QmFyd2VkfHJwYXJndHxob3JiYXJ8Y29uaW50fHN3YXJoa3xyb3BsdXN8bmx0cmllfGhzbGFzaHxoc3Ryb2t8SHN0cm9rfHJtb3VzdHxDb25pbnR8YnByaW1lfGh5YnVsbHxoeXBoZW58aWFjdXRlfElhY3V0ZXxzdXBzdXB8c3Vwc3VifHN1cHNpbXx2YXJwaGl8Y29wcm9kfGJydmJhcnxhZ3JhdmV8U3Vwc2V0fHN1cHNldHxpZ3JhdmV8SWdyYXZlfG5vdGluRXxBZ3JhdmV8aWlpaW50fGlpbmZpbnxjb3B5c3J8d2VkYmFyfFZlcmJhcnx2YW5ncnR8YmVjYXVzfGluY2FyZXx2ZXJiYXJ8aW5vZG90fGJ1bGxldHxkcmNvcm58aW50Y2FsfGRyY3JvcHxjdWxhcnJ8dmVsbGlwfFV0aWxkZXxidW1wZXF8Y3VwY2FwfGRzdHJva3xEc3Ryb2t8Q3VwQ2FwfGN1cGN1cHxjdXBkb3R8ZWFjdXRlfEVhY3V0ZXxzdXBkb3R8aXF1ZXN0fGVhc3RlcnxlY2Fyb258RWNhcm9ufGVjb2xvbnxpc2luc3Z8dXRpbGRlfGl0aWxkZXxJdGlsZGV8Y3VyYXJyfHN1Y2NlcXxCdW1wZXF8Y2FjdXRlfHVsY3JvcHxucGFyc2x8Q2FjdXRlfG5wcmN1ZXxlZ3JhdmV8RWdyYXZlfG5yYXJyY3xucmFycnd8c3Vic3VwfHN1YnN1YnxucnRyaWV8anNlcmN5fG5zY2N1ZXxKc2VyY3l8a2FwcGF2fGtjZWRpbHxLY2VkaWx8c3Vic2ltfHVsY29ybnxuc2ltZXF8ZWdzZG90fHZlZWJhcnxrZ3JlZW58Y2FwYW5kfGVsc2RvdHxTdWJzZXR8c3Vic2V0fGN1cnJlbnxhYWN1dGV8bGFjdXRlfExhY3V0ZXxlbXB0eXZ8bnRpbGRlfE50aWxkZXxsYWdyYW58bGFtYmRhfExhbWJkYXxjYXBjYXB8VWdyYXZlfGxhbmdsZXxzdWJkb3R8ZW1zcDEzfG51bWVyb3xlbXNwMTR8bnZkYXNofG52RGFzaHxuVmRhc2h8blZEYXNofHVncmF2ZXx1ZmlzaHR8bnZIYXJyfGxhcnJmc3xudmxBcnJ8bGFycmhrfGxhcnJscHxsYXJycGx8bnZyQXJyfFVkYmxhY3xud2FyaGt8bGFycnRsfG53bmVhcnxvYWN1dGV8T2FjdXRlfGxhdGFpbHxsQXRhaWx8c3N0YXJmfGxicmFjZXxvZGJsYWN8T2RibGFjfGxicmFja3x1ZGJsYWN8b2Rzb2xkfGVwYXJzbHxsY2Fyb258TGNhcm9ufG9ncmF2ZXxPZ3JhdmV8bGNlZGlsfExjZWRpbHxBYWN1dGV8c3NtaWxlfHNzZXRtbnxzcXVhcmZ8bGRxdW9yfGNhcGN1cHxvbWludXN8Y3lsY3R5fHJoYXJ1bHxlcWNpcmN8ZGFnZ2VyfHJmbG9vcnxyZmlzaHR8RGFnZ2VyfGRhbGV0aHxlcXVhbHN8b3JpZ29mfGNhcGRvdHxlcXVlc3R8ZGNhcm9ufERjYXJvbnxyZHF1b3J8b3NsYXNofE9zbGFzaHxvdGlsZGV8T3RpbGRlfG90aW1lc3xPdGltZXN8dXJjcm9wfFVicmV2ZXx1YnJldmV8WWFjdXRlfFVhY3V0ZXx1YWN1dGV8UmNlZGlsfHJjZWRpbHx1cmNvcm58cGFyc2ltfFJjYXJvbnxWZGFzaGx8cmNhcm9ufFRzdHJva3xwZXJjbnR8cGVyaW9kfHBlcm1pbHxFeGlzdHN8eWFjdXRlfHJicmFja3xyYnJhY2V8cGhtbWF0fGNjYXJvbnxDY2Fyb258cGxhbmNrfGNjZWRpbHxwbGFua3Z8dHN0cm9rfGZlbWFsZXxwbHVzZG98cGx1c2R1fGZmaWxpZ3xwbHVzbW58ZmZsbGlnfENjZWRpbHxyQXRhaWx8ZGZpc2h0fGJlcm5vdXxyYXRhaWx8UmFycnRsfHJhcnJ0bHxhbmdzcGh8cmFycnBsfHJhcnJscHxyYXJyaGt8eHdlZGdlfHhvdGltZXxmb3JhbGx8Rm9yQWxsfFZ2ZGFzaHx2c3VwbkV8cHJlY2VxfGJpZ2NhcHxmcmFjMTJ8ZnJhYzEzfGZyYWMxNHxwcmltZXN8cmFycmZzfHBybnNpbXxmcmFjMTV8U3F1YXJlfGZyYWMxNnxzcXVhcmV8bGVzZG90fGZyYWMxOHxmcmFjMjN8cHJvcHRvfHBydXJlbHxyYXJyYXB8cmFuZ2xlfHB1bmNzcHxmcmFjMjV8UmFjdXRlfHFwcmltZXxyYWN1dGV8bGVzZ2VzfGZyYWMzNHxhYnJldmV8QUVsaWd8ZXFzaW18dXRkb3R8c2V0bW58dXJ0cml8RXF1YWx8VXJpbmd8c2VBcnJ8dXJpbmd8c2VhcnJ8ZGFzaHZ8RGFzaHZ8bXVtYXB8bmFibGF8aW9nb258SW9nb258c2RvdGV8c2RvdGJ8c2NzaW18bmFwaWR8bmFwb3N8ZXF1aXZ8bmF0dXJ8QWNpcmN8ZGJsYWN8ZXJhcnJ8bmJ1bXB8aXByb2R8ZXJEb3R8dWNpcmN8YXdpbnR8ZXNkb3R8YW5ncnR8bmNvbmd8aXNpbkV8c2NuYXB8U2NpcmN8c2NpcmN8bmRhc2h8aXNpbnN8VWJyY3l8bmVhcnJ8bmVBcnJ8aXNpbnZ8bmVkb3R8dWJyY3l8YWN1dGV8WWNpcmN8aXVrY3l8SXVrY3l8eHV0cml8bmVzaW18Y2FyZXR8amNpcmN8SmNpcmN8Y2Fyb258dHdpeHR8ZGRhcnJ8c2NjdWV8ZXhpc3R8am1hdGh8c2JxdW98bmdlcXF8YW5nc3R8Y2NhcHN8bGNlaWx8bmdzaW18VXBUZWV8ZGVsdGF8RGVsdGF8cnRyaWZ8bmhhcnJ8bmhBcnJ8bmhwYXJ8cnRyaWV8anVrY3l8SnVrY3l8a2FwcGF8cnNxdW98S2FwcGF8bmxhcnJ8bmxBcnJ8VFNIY3l8cnJhcnJ8YW9nb258QW9nb258ZmZsaWd8eHJhcnJ8dHNoY3l8Y2NpcmN8bmxlcXF8ZmlsaWd8dXBzaWh8bmxlc3N8ZGhhcmx8bmxzaW18ZmpsaWd8cm9wYXJ8bmx0cml8ZGhhcnJ8cm9icmt8cm9hcnJ8ZmxsaWd8Zmx0bnN8cm9hbmd8cm5taWR8c3VibkV8c3VibmV8bEFhcnJ8dHJpc2J8Q2NpcmN8YWNpcmN8Y2N1cHN8Ymxhbmt8VkRhc2h8Zm9ya3Z8VmRhc2h8bGFuZ2R8Y2VkaWx8YmxrMTJ8YmxrMTR8bGFxdW98c3RybnN8ZGlhbXN8bm90aW58dkRhc2h8bGFycmJ8YmxrMzR8YmxvY2t8ZGlzaW58dXBsdXN8dmRhc2h8dkJhcnZ8YWVsaWd8c3RhcmZ8V2VkZ2V8Y2hlY2t8eHJBcnJ8bGF0ZXN8bGJhcnJ8bEJhcnJ8bm90bml8bGJicmt8YmNvbmd8ZnJhc2x8bGJya2V8ZnJvd258dnJ0cml8dnByb3B8dm5zdXB8Z2FtbWF8R2FtbWF8d2VkZ2V8eG9kb3R8YmRxdW98c3JhcnJ8ZG90ZXF8bGRxdW98Ym94ZGx8Ym94ZEx8Z2NpcmN8R2NpcmN8Ym94RGx8Ym94REx8Ym94ZHJ8Ym94ZFJ8Ym94RHJ8VFJBREV8dHJhZGV8cmxoYXJ8Ym94RFJ8dm5zdWJ8bnBhcnR8dmx0cml8cmxhcnJ8Ym94aGR8Ym94aER8bnByZWN8Z2VzY2N8bnJhcnJ8bnJBcnJ8Ym94SGR8Ym94SER8Ym94aHV8Ym94aFV8bnJ0cml8Ym94SHV8Y2x1YnN8Ym94SFV8dGltZXN8Y29sb258Q29sb258Z2ltZWx8eGxBcnJ8VGlsZGV8bnNpbWV8dGlsZGV8bnNtaWR8bnNwYXJ8VEhPUk58dGhvcm58eGxhcnJ8bnN1YmV8bnN1YkV8dGhrYXB8eGhBcnJ8Y29tbWF8bnN1Y2N8Ym94dWx8Ym94dUx8bnN1cGV8bnN1cEV8Z25lcXF8Z25zaW18Ym94VWx8Ym94VUx8Z3JhdmV8Ym94dXJ8Ym94dVJ8Ym94VXJ8Ym94VVJ8bGVzY2N8YW5nbGV8YmVwc2l8Ym94dmh8dmFycGl8Ym94dkh8bnVtc3B8VGhldGF8Z3NpbWV8Z3NpbWx8dGhldGF8Ym94Vmh8Ym94Vkh8Ym94dmx8Z3RjaXJ8Z3Rkb3R8Ym94dkx8Ym94Vmx8Ym94Vkx8Y3JhcnJ8Y3Jvc3N8Q3Jvc3N8bnZzaW18Ym94dnJ8bndhcnJ8bndBcnJ8c3FzdXB8ZHRkb3R8VW9nb258bGhhcmR8bGhhcnV8ZHRyaWZ8b2NpcmN8T2NpcmN8bGhibGt8ZHVhcnJ8b2Rhc2h8c3FzdWJ8SGFjZWt8c3FjdXB8bGxhcnJ8ZHVoYXJ8b2VsaWd8T0VsaWd8b2ZjaXJ8Ym94dlJ8dW9nb258bGx0cml8Ym94VnJ8Y3N1YmV8dXVhcnJ8b2hiYXJ8Y3N1cGV8Y3Rkb3R8b2xhcnJ8b2xjaXJ8aGFycnd8b2xpbmV8c3FjYXB8b21hY3J8T21hY3J8b21lZ2F8T21lZ2F8Ym94VlJ8YWxlcGh8bG5lcXF8bG5zaW18bG9hbmd8bG9hcnJ8cmhhcnV8bG9icmt8aGNpcmN8b3BlcnB8b3BsdXN8cmhhcmR8SGNpcmN8b3JhcnJ8VW5pb258b3JkZXJ8ZWNpcmN8RWNpcmN8Y3VlcHJ8c3psaWd8Y3Vlc2N8YnJldmV8cmVhbHN8ZUREb3R8QnJldmV8aG9hcnJ8bG9wYXJ8dXRyaWZ8cmRxdW98VW1hY3J8dW1hY3J8ZWZEb3R8c3dBcnJ8dWx0cml8YWxwaGF8cmNlaWx8b3ZiYXJ8c3dhcnJ8V2NpcmN8d2NpcmN8c210ZXN8c21pbGV8YnNlbWl8bHJhcnJ8YXJpbmd8cGFyc2x8bHJoYXJ8YnNpbWV8dWhibGt8bHJ0cml8Y3Vwb3J8QXJpbmd8dWhhcnJ8dWhhcmx8c2xhcnJ8cmJya2V8YnNvbGJ8bHNpbWV8cmJicmt8UkJhcnJ8bHNpbWd8cGhvbmV8ckJhcnJ8cmJhcnJ8aWNpcmN8bHNxdW98SWNpcmN8ZW1hY3J8RW1hY3J8cmF0aW98c2ltbmV8cGx1c2J8c2ltbEV8c2ltZ0V8c2ltZXF8cGx1c2V8bHRjaXJ8bHRkb3R8ZW1wdHl8eGhhcnJ8eGR0cml8aWV4Y2x8QWxwaGF8bHRyaWV8cmFycnd8cG91bmR8bHRyaWZ8eGNpcmN8YnVtcGV8cHJjdWV8YnVtcEV8YXN5bXB8YW1hY3J8Y3V2ZWV8U2lnbWF8c2lnbWF8aWlpbnR8dWRoYXJ8aWlvdGF8aWpsaWd8SUpsaWd8c3VwbkV8aW1hY3J8SW1hY3J8cHJpbWV8UHJpbWV8aW1hZ2V8cHJuYXB8ZW9nb258RW9nb258cmFycmN8bWRhc2h8bUREb3R8Y3V3ZWR8aW1hdGh8c3VwbmV8aW1wZWR8QW1hY3J8dWRhcnJ8cHJzaW18bWljcm98cmFycmJ8Y3dpbnR8cmFxdW98aW5maW58ZXBsdXN8cmFuZ2V8cmFuZ2R8VWNpcmN8cmFkaWN8bWludXN8YW1hbGd8dmVlZXF8ckFhcnJ8ZXBzaXZ8eWNpcmN8cXVlc3R8c2hhcnB8cXVvdHx6d25qfFFzY3J8cmFjZXxxc2NyfFFvcGZ8cW9wZnxxaW50fHJhbmd8UmFuZ3xac2NyfHpzY3J8Wm9wZnx6b3BmfHJhcnJ8ckFycnxSYXJyfFBzY3J8cHNjcnxwcm9wfHByb2R8cHJuRXxwcmVjfFpIY3l8emhjeXxwcmFwfFpldGF8emV0YXxQb3BmfHBvcGZ8WmRvdHxwbHVzfHpkb3R8WXVtbHx5dW1sfHBoaXZ8WVVjeXx5dWN5fFlzY3J8eXNjcnxwZXJwfFlvcGZ8eW9wZnxwYXJ0fHBhcmF8WUljeXxPdW1sfHJjdWJ8eWljeXxZQWN5fHJkY2F8b3VtbHxvc29sfE9zY3J8cmRzaHx5YWN5fHJlYWx8b3Njcnx4dmVlfGFuZGR8cmVjdHxhbmR2fFhzY3J8b3JvcnxvcmRtfG9yZGZ8eHNjcnxhbmdlfGFvcGZ8QW9wZnxySGFyfFhvcGZ8b3BhcnxPb3BmfHhvcGZ8eG5pc3xyaG92fG9vcGZ8b21pZHx4bWFwfG9pbnR8YXBpZHxhcG9zfG9nb258YXNjcnxBc2NyfG9kb3R8b2Rpdnx4Y3VwfHhjYXB8b2NpcnxvYXN0fG52bHR8bnZsZXxudmd0fG52Z2V8bnZhcHxXc2NyfHdzY3J8YXVtbHxudGxnfG50Z2x8bnN1cHxuc3VifG5zaW18TnNjcnxuc2NyfG5zY2V8V29wZnxyaW5nfG5wcmV8d29wZnxucGFyfEF1bWx8QmFydnxiYnJrfE5vcGZ8bm9wZnxubWlkfG5MdHZ8YmV0YXxyb3BmfFJvcGZ8QmV0YXxiZXRofG5sZXN8cnBhcnxubGVxfGJub3R8Yk5vdHxubGRyfE5KY3l8cnNjcnxSc2NyfFZzY3J8dnNjcnxyc3FifG5qY3l8Ym9wZnxuaXNkfEJvcGZ8cnRyaXxWb3BmfG5HdHZ8bmd0cnx2b3BmfGJveGh8Ym94SHxib3h2fG5nZXN8bmdlcXxib3hWfGJzY3J8c2NhcHxCc2NyfGJzaW18VmVydHx2ZXJ0fGJzb2x8YnVsbHxidW1wfGNhcHN8Y2RvdHxuY3VwfHNjbkV8bmNhcHxuYnNwfG5hcEV8Q2RvdHxjZW50fHNkb3R8VmJhcnxuYW5nfHZCYXJ8Y2hjeXxNc2NyfG1zY3J8c2VjdHxzZW1pfENIY3l8TW9wZnxtb3BmfHNleHR8Y2lyY3xjaXJlfG1sZHJ8bWxjcHxjaXJFfGNvbXB8c2hjeXxTSGN5fHZBcnJ8dmFycnxjb25nfGNvcGZ8Q29wZnxjb3B5fENPUFl8bWFsdHxtYWxlfG1hY3J8bHZuRXxjc2NyfGx0cml8c2ltZXxsdGNjfHNpbWd8Q3NjcnxzaW1sfGNzdWJ8VXVtbHxsc3FifGxzaW18dXVtbHxjc3VwfExzY3J8bHNjcnx1dHJpfHNtaWR8bHBhcnxjdXBzfHNtdGV8bG96ZnxkYXJyfExvcGZ8VXNjcnxzb2xifGxvcGZ8c29wZnxTb3BmfGxuZXF8dXNjcnxzcGFyfGRBcnJ8bG5hcHxEYXJyfGRhc2h8U3FydHxMSmN5fGxqY3l8bEhhcnxkSGFyfFVwc2l8dXBzaXxkaWFtfGxlc2d8ZGpjeXxESmN5fGxlcXF8ZG9wZnxEb3BmfGRzY3J8RHNjcnxkc2N5fGxkc2h8bGRjYXxzcXVmfERTY3l8c3NjcnxTc2NyfGRzb2x8bGN1YnxsYXRlfHN0YXJ8U3RhcnxVb3BmfExhcnJ8bEFycnxsYXJyfHVvcGZ8ZHRyaXxkemN5fHN1YmV8c3ViRXxMYW5nfGxhbmd8S3Njcnxrc2NyfEtvcGZ8a29wZnxLSmN5fGtqY3l8S0hjeXxraGN5fERaY3l8ZWNpcnxlZG90fGVEb3R8SnNjcnxqc2NyfHN1Y2N8Sm9wZnxqb3BmfEVkb3R8dUhhcnxlbXNwfGVuc3B8SXVtbHxpdW1sfGVvcGZ8aXNpbnxJc2NyfGlzY3J8RW9wZnxlcGFyfHN1bmd8ZXBzaXxlc2NyfHN1cDF8c3VwMnxzdXAzfElvdGF8aW90YXxzdXBlfHN1cEV8SW9wZnxpb3BmfElPY3l8aW9jeXxFc2NyfGVzaW18RXNpbXxpbW9mfFVhcnJ8UVVPVHx1QXJyfHVhcnJ8ZXVtbHxJRWN5fGllY3l8SWRvdHxFdW1sfGV1cm98ZXhjbHxIc2NyfGhzY3J8SG9wZnxob3BmfFRTY3l8dHNjeXxUc2NyfGhiYXJ8dHNjcnxmbGF0fHRicmt8Zm5vZnxoQXJyfGhhcnJ8aGFsZnxmb3BmfEZvcGZ8dGRvdHxndm5FfGZvcmt8dHJpZXxndGNjfGZzY3J8RnNjcnxnZG90fGdzaW18R3Njcnxnc2NyfEdvcGZ8Z29wZnxnbmVxfEdkb3R8dG9zYXxnbmFwfFRvcGZ8dG9wZnxnZXFxfHRvZWF8R0pjeXxnamN5fHRpbnR8Z2VzbHxtaWR8U2ZyfGdnZ3x0b3B8Z2VzfGdsYXxnbEV8Z2xqfGdlcXxnbmV8Z0VsfGdlbHxnbkV8R2N5fGdjeXxnYXB8VGZyfHRmcnxUY3l8dGN5fEhhdHxUYXV8RmZyfHRhdXxUYWJ8aGZyfEhmcnxmZnJ8RmN5fGZjeXxpY3l8SWN5fGlmZnxFVEh8ZXRofGlmcnxJZnJ8RXRhfGV0YXxpbnR8SW50fFN1cHxzdXB8dWN5fFVjeXxTdW18c3VtfGpjeXxFTkd8dWZyfFVmcnxlbmd8SmN5fGpmcnxlbHN8ZWxsfGVnc3xFZnJ8ZWZyfEpmcnx1bWx8a2N5fEtjeXxFY3l8ZWN5fGtmcnxLZnJ8bGFwfFN1YnxzdWJ8bGF0fGxjeXxMY3l8bGVnfERvdHxkb3R8bEVnfGxlcXxsZXN8c3F1fGRpdnxkaWV8bGZyfExmcnxsZ0V8RGZyfGRmcnxEZWx8ZGVnfERjeXxkY3l8bG5lfGxuRXxzb2x8bG96fHNtdHxDdXB8bHJtfGN1cHxsc2h8THNofHNpbXxzaHl8bWFwfE1hcHxtY3l8TWN5fG1mcnxNZnJ8bWhvfGdmcnxHZnJ8c2ZyfGNpcnxDaGl8Y2hpfG5hcHxDZnJ8dmN5fFZjeXxjZnJ8U2N5fHNjeXxuY3l8TmN5fHZlZXxWZWV8Q2FwfGNhcHxuZnJ8c2NFfHNjZXxOZnJ8bmdlfG5nRXxuR2d8dmZyfFZmcnxuZ3R8Ym90fG5HdHxuaXN8bml2fFJzaHxyc2h8bmxlfG5sRXxibmV8QmZyfGJmcnxuTGx8bmx0fG5MdHxCY3l8YmN5fG5vdHxOb3R8cmxtfHdmcnxXZnJ8bnByfG5zY3xudW18b2N5fGFzdHxPY3l8b2ZyfHhmcnxYZnJ8T2ZyfG9ndHxvaG18YXBFfG9sdHxSaG98YXBlfHJob3xSZnJ8cmZyfG9yZHxSRUd8YW5nfHJlZ3xvcnZ8QW5kfGFuZHxBTVB8UmN5fGFtcHxBZnJ8eWN5fFljeXx5ZW58eWZyfFlmcnxyY3l8cGFyfHBjeXxQY3l8cGZyfFBmcnxwaGl8UGhpfGFmcnxBY3l8YWN5fHpjeXxaY3l8cGl2fGFjRXxhY2R8emZyfFpmcnxwcmV8cHJFfHBzaXxQc2l8cWZyfFFmcnx6d2p8T3J8Z2V8R2d8Z3R8Z2d8ZWx8b1N8bHR8THR8TFR8UmV8bGd8Z2x8ZWd8bmV8SW18aXR8bGV8RER8d3B8d3J8bnV8TnV8ZGR8bEV8U2N8c2N8cGl8UGl8ZWV8YWZ8bGx8TGx8cnh8Z0V8eGl8cG18WGl8aWN8cHJ8UHJ8aW58bml8bXB8bXV8YWN8TXV8b3J8YXB8R3R8R1R8aWkpO3wmKEFhY3V0ZXxBZ3JhdmV8QXRpbGRlfENjZWRpbHxFYWN1dGV8RWdyYXZlfElhY3V0ZXxJZ3JhdmV8TnRpbGRlfE9hY3V0ZXxPZ3JhdmV8T3NsYXNofE90aWxkZXxVYWN1dGV8VWdyYXZlfFlhY3V0ZXxhYWN1dGV8YWdyYXZlfGF0aWxkZXxicnZiYXJ8Y2NlZGlsfGN1cnJlbnxkaXZpZGV8ZWFjdXRlfGVncmF2ZXxmcmFjMTJ8ZnJhYzE0fGZyYWMzNHxpYWN1dGV8aWdyYXZlfGlxdWVzdHxtaWRkb3R8bnRpbGRlfG9hY3V0ZXxvZ3JhdmV8b3NsYXNofG90aWxkZXxwbHVzbW58dWFjdXRlfHVncmF2ZXx5YWN1dGV8QUVsaWd8QWNpcmN8QXJpbmd8RWNpcmN8SWNpcmN8T2NpcmN8VEhPUk58VWNpcmN8YWNpcmN8YWN1dGV8YWVsaWd8YXJpbmd8Y2VkaWx8ZWNpcmN8aWNpcmN8aWV4Y2x8bGFxdW98bWljcm98b2NpcmN8cG91bmR8cmFxdW98c3psaWd8dGhvcm58dGltZXN8dWNpcmN8QXVtbHxDT1BZfEV1bWx8SXVtbHxPdW1sfFFVT1R8VXVtbHxhdW1sfGNlbnR8Y29weXxldW1sfGl1bWx8bWFjcnxuYnNwfG9yZGZ8b3JkbXxvdW1sfHBhcmF8cXVvdHxzZWN0fHN1cDF8c3VwMnxzdXAzfHV1bWx8eXVtbHxBTVB8RVRIfFJFR3xhbXB8ZGVnfGV0aHxub3R8cmVnfHNoeXx1bWx8eWVufEdUfExUfGd0fGx0KSg/ITspKFs9YS16QS1aMC05XT8pfCYjKFswLTldKykoOz8pfCYjW3hYXShbYS1mQS1GMC05XSspKDs/KXwmKFswLTlhLXpBLVpdKykvZztcblx0dmFyIGRlY29kZU1hcCA9IHsnYWFjdXRlJzonXFx4RTEnLCdBYWN1dGUnOidcXHhDMScsJ2FicmV2ZSc6J1xcdTAxMDMnLCdBYnJldmUnOidcXHUwMTAyJywnYWMnOidcXHUyMjNFJywnYWNkJzonXFx1MjIzRicsJ2FjRSc6J1xcdTIyM0VcXHUwMzMzJywnYWNpcmMnOidcXHhFMicsJ0FjaXJjJzonXFx4QzInLCdhY3V0ZSc6J1xceEI0JywnYWN5JzonXFx1MDQzMCcsJ0FjeSc6J1xcdTA0MTAnLCdhZWxpZyc6J1xceEU2JywnQUVsaWcnOidcXHhDNicsJ2FmJzonXFx1MjA2MScsJ2Fmcic6J1xcdUQ4MzVcXHVERDFFJywnQWZyJzonXFx1RDgzNVxcdUREMDQnLCdhZ3JhdmUnOidcXHhFMCcsJ0FncmF2ZSc6J1xceEMwJywnYWxlZnN5bSc6J1xcdTIxMzUnLCdhbGVwaCc6J1xcdTIxMzUnLCdhbHBoYSc6J1xcdTAzQjEnLCdBbHBoYSc6J1xcdTAzOTEnLCdhbWFjcic6J1xcdTAxMDEnLCdBbWFjcic6J1xcdTAxMDAnLCdhbWFsZyc6J1xcdTJBM0YnLCdhbXAnOicmJywnQU1QJzonJicsJ2FuZCc6J1xcdTIyMjcnLCdBbmQnOidcXHUyQTUzJywnYW5kYW5kJzonXFx1MkE1NScsJ2FuZGQnOidcXHUyQTVDJywnYW5kc2xvcGUnOidcXHUyQTU4JywnYW5kdic6J1xcdTJBNUEnLCdhbmcnOidcXHUyMjIwJywnYW5nZSc6J1xcdTI5QTQnLCdhbmdsZSc6J1xcdTIyMjAnLCdhbmdtc2QnOidcXHUyMjIxJywnYW5nbXNkYWEnOidcXHUyOUE4JywnYW5nbXNkYWInOidcXHUyOUE5JywnYW5nbXNkYWMnOidcXHUyOUFBJywnYW5nbXNkYWQnOidcXHUyOUFCJywnYW5nbXNkYWUnOidcXHUyOUFDJywnYW5nbXNkYWYnOidcXHUyOUFEJywnYW5nbXNkYWcnOidcXHUyOUFFJywnYW5nbXNkYWgnOidcXHUyOUFGJywnYW5ncnQnOidcXHUyMjFGJywnYW5ncnR2Yic6J1xcdTIyQkUnLCdhbmdydHZiZCc6J1xcdTI5OUQnLCdhbmdzcGgnOidcXHUyMjIyJywnYW5nc3QnOidcXHhDNScsJ2FuZ3phcnInOidcXHUyMzdDJywnYW9nb24nOidcXHUwMTA1JywnQW9nb24nOidcXHUwMTA0JywnYW9wZic6J1xcdUQ4MzVcXHVERDUyJywnQW9wZic6J1xcdUQ4MzVcXHVERDM4JywnYXAnOidcXHUyMjQ4JywnYXBhY2lyJzonXFx1MkE2RicsJ2FwZSc6J1xcdTIyNEEnLCdhcEUnOidcXHUyQTcwJywnYXBpZCc6J1xcdTIyNEInLCdhcG9zJzonXFwnJywnQXBwbHlGdW5jdGlvbic6J1xcdTIwNjEnLCdhcHByb3gnOidcXHUyMjQ4JywnYXBwcm94ZXEnOidcXHUyMjRBJywnYXJpbmcnOidcXHhFNScsJ0FyaW5nJzonXFx4QzUnLCdhc2NyJzonXFx1RDgzNVxcdURDQjYnLCdBc2NyJzonXFx1RDgzNVxcdURDOUMnLCdBc3NpZ24nOidcXHUyMjU0JywnYXN0JzonKicsJ2FzeW1wJzonXFx1MjI0OCcsJ2FzeW1wZXEnOidcXHUyMjREJywnYXRpbGRlJzonXFx4RTMnLCdBdGlsZGUnOidcXHhDMycsJ2F1bWwnOidcXHhFNCcsJ0F1bWwnOidcXHhDNCcsJ2F3Y29uaW50JzonXFx1MjIzMycsJ2F3aW50JzonXFx1MkExMScsJ2JhY2tjb25nJzonXFx1MjI0QycsJ2JhY2tlcHNpbG9uJzonXFx1MDNGNicsJ2JhY2twcmltZSc6J1xcdTIwMzUnLCdiYWNrc2ltJzonXFx1MjIzRCcsJ2JhY2tzaW1lcSc6J1xcdTIyQ0QnLCdCYWNrc2xhc2gnOidcXHUyMjE2JywnQmFydic6J1xcdTJBRTcnLCdiYXJ2ZWUnOidcXHUyMkJEJywnYmFyd2VkJzonXFx1MjMwNScsJ0JhcndlZCc6J1xcdTIzMDYnLCdiYXJ3ZWRnZSc6J1xcdTIzMDUnLCdiYnJrJzonXFx1MjNCNScsJ2Jicmt0YnJrJzonXFx1MjNCNicsJ2Jjb25nJzonXFx1MjI0QycsJ2JjeSc6J1xcdTA0MzEnLCdCY3knOidcXHUwNDExJywnYmRxdW8nOidcXHUyMDFFJywnYmVjYXVzJzonXFx1MjIzNScsJ2JlY2F1c2UnOidcXHUyMjM1JywnQmVjYXVzZSc6J1xcdTIyMzUnLCdiZW1wdHl2JzonXFx1MjlCMCcsJ2JlcHNpJzonXFx1MDNGNicsJ2Jlcm5vdSc6J1xcdTIxMkMnLCdCZXJub3VsbGlzJzonXFx1MjEyQycsJ2JldGEnOidcXHUwM0IyJywnQmV0YSc6J1xcdTAzOTInLCdiZXRoJzonXFx1MjEzNicsJ2JldHdlZW4nOidcXHUyMjZDJywnYmZyJzonXFx1RDgzNVxcdUREMUYnLCdCZnInOidcXHVEODM1XFx1REQwNScsJ2JpZ2NhcCc6J1xcdTIyQzInLCdiaWdjaXJjJzonXFx1MjVFRicsJ2JpZ2N1cCc6J1xcdTIyQzMnLCdiaWdvZG90JzonXFx1MkEwMCcsJ2JpZ29wbHVzJzonXFx1MkEwMScsJ2JpZ290aW1lcyc6J1xcdTJBMDInLCdiaWdzcWN1cCc6J1xcdTJBMDYnLCdiaWdzdGFyJzonXFx1MjYwNScsJ2JpZ3RyaWFuZ2xlZG93bic6J1xcdTI1QkQnLCdiaWd0cmlhbmdsZXVwJzonXFx1MjVCMycsJ2JpZ3VwbHVzJzonXFx1MkEwNCcsJ2JpZ3ZlZSc6J1xcdTIyQzEnLCdiaWd3ZWRnZSc6J1xcdTIyQzAnLCdia2Fyb3cnOidcXHUyOTBEJywnYmxhY2tsb3plbmdlJzonXFx1MjlFQicsJ2JsYWNrc3F1YXJlJzonXFx1MjVBQScsJ2JsYWNrdHJpYW5nbGUnOidcXHUyNUI0JywnYmxhY2t0cmlhbmdsZWRvd24nOidcXHUyNUJFJywnYmxhY2t0cmlhbmdsZWxlZnQnOidcXHUyNUMyJywnYmxhY2t0cmlhbmdsZXJpZ2h0JzonXFx1MjVCOCcsJ2JsYW5rJzonXFx1MjQyMycsJ2JsazEyJzonXFx1MjU5MicsJ2JsazE0JzonXFx1MjU5MScsJ2JsazM0JzonXFx1MjU5MycsJ2Jsb2NrJzonXFx1MjU4OCcsJ2JuZSc6Jz1cXHUyMEU1JywnYm5lcXVpdic6J1xcdTIyNjFcXHUyMEU1JywnYm5vdCc6J1xcdTIzMTAnLCdiTm90JzonXFx1MkFFRCcsJ2JvcGYnOidcXHVEODM1XFx1REQ1MycsJ0JvcGYnOidcXHVEODM1XFx1REQzOScsJ2JvdCc6J1xcdTIyQTUnLCdib3R0b20nOidcXHUyMkE1JywnYm93dGllJzonXFx1MjJDOCcsJ2JveGJveCc6J1xcdTI5QzknLCdib3hkbCc6J1xcdTI1MTAnLCdib3hkTCc6J1xcdTI1NTUnLCdib3hEbCc6J1xcdTI1NTYnLCdib3hETCc6J1xcdTI1NTcnLCdib3hkcic6J1xcdTI1MEMnLCdib3hkUic6J1xcdTI1NTInLCdib3hEcic6J1xcdTI1NTMnLCdib3hEUic6J1xcdTI1NTQnLCdib3hoJzonXFx1MjUwMCcsJ2JveEgnOidcXHUyNTUwJywnYm94aGQnOidcXHUyNTJDJywnYm94aEQnOidcXHUyNTY1JywnYm94SGQnOidcXHUyNTY0JywnYm94SEQnOidcXHUyNTY2JywnYm94aHUnOidcXHUyNTM0JywnYm94aFUnOidcXHUyNTY4JywnYm94SHUnOidcXHUyNTY3JywnYm94SFUnOidcXHUyNTY5JywnYm94bWludXMnOidcXHUyMjlGJywnYm94cGx1cyc6J1xcdTIyOUUnLCdib3h0aW1lcyc6J1xcdTIyQTAnLCdib3h1bCc6J1xcdTI1MTgnLCdib3h1TCc6J1xcdTI1NUInLCdib3hVbCc6J1xcdTI1NUMnLCdib3hVTCc6J1xcdTI1NUQnLCdib3h1cic6J1xcdTI1MTQnLCdib3h1Uic6J1xcdTI1NTgnLCdib3hVcic6J1xcdTI1NTknLCdib3hVUic6J1xcdTI1NUEnLCdib3h2JzonXFx1MjUwMicsJ2JveFYnOidcXHUyNTUxJywnYm94dmgnOidcXHUyNTNDJywnYm94dkgnOidcXHUyNTZBJywnYm94VmgnOidcXHUyNTZCJywnYm94VkgnOidcXHUyNTZDJywnYm94dmwnOidcXHUyNTI0JywnYm94dkwnOidcXHUyNTYxJywnYm94VmwnOidcXHUyNTYyJywnYm94VkwnOidcXHUyNTYzJywnYm94dnInOidcXHUyNTFDJywnYm94dlInOidcXHUyNTVFJywnYm94VnInOidcXHUyNTVGJywnYm94VlInOidcXHUyNTYwJywnYnByaW1lJzonXFx1MjAzNScsJ2JyZXZlJzonXFx1MDJEOCcsJ0JyZXZlJzonXFx1MDJEOCcsJ2JydmJhcic6J1xceEE2JywnYnNjcic6J1xcdUQ4MzVcXHVEQ0I3JywnQnNjcic6J1xcdTIxMkMnLCdic2VtaSc6J1xcdTIwNEYnLCdic2ltJzonXFx1MjIzRCcsJ2JzaW1lJzonXFx1MjJDRCcsJ2Jzb2wnOidcXFxcJywnYnNvbGInOidcXHUyOUM1JywnYnNvbGhzdWInOidcXHUyN0M4JywnYnVsbCc6J1xcdTIwMjInLCdidWxsZXQnOidcXHUyMDIyJywnYnVtcCc6J1xcdTIyNEUnLCdidW1wZSc6J1xcdTIyNEYnLCdidW1wRSc6J1xcdTJBQUUnLCdidW1wZXEnOidcXHUyMjRGJywnQnVtcGVxJzonXFx1MjI0RScsJ2NhY3V0ZSc6J1xcdTAxMDcnLCdDYWN1dGUnOidcXHUwMTA2JywnY2FwJzonXFx1MjIyOScsJ0NhcCc6J1xcdTIyRDInLCdjYXBhbmQnOidcXHUyQTQ0JywnY2FwYnJjdXAnOidcXHUyQTQ5JywnY2FwY2FwJzonXFx1MkE0QicsJ2NhcGN1cCc6J1xcdTJBNDcnLCdjYXBkb3QnOidcXHUyQTQwJywnQ2FwaXRhbERpZmZlcmVudGlhbEQnOidcXHUyMTQ1JywnY2Fwcyc6J1xcdTIyMjlcXHVGRTAwJywnY2FyZXQnOidcXHUyMDQxJywnY2Fyb24nOidcXHUwMkM3JywnQ2F5bGV5cyc6J1xcdTIxMkQnLCdjY2Fwcyc6J1xcdTJBNEQnLCdjY2Fyb24nOidcXHUwMTBEJywnQ2Nhcm9uJzonXFx1MDEwQycsJ2NjZWRpbCc6J1xceEU3JywnQ2NlZGlsJzonXFx4QzcnLCdjY2lyYyc6J1xcdTAxMDknLCdDY2lyYyc6J1xcdTAxMDgnLCdDY29uaW50JzonXFx1MjIzMCcsJ2NjdXBzJzonXFx1MkE0QycsJ2NjdXBzc20nOidcXHUyQTUwJywnY2RvdCc6J1xcdTAxMEInLCdDZG90JzonXFx1MDEwQScsJ2NlZGlsJzonXFx4QjgnLCdDZWRpbGxhJzonXFx4QjgnLCdjZW1wdHl2JzonXFx1MjlCMicsJ2NlbnQnOidcXHhBMicsJ2NlbnRlcmRvdCc6J1xceEI3JywnQ2VudGVyRG90JzonXFx4QjcnLCdjZnInOidcXHVEODM1XFx1REQyMCcsJ0Nmcic6J1xcdTIxMkQnLCdjaGN5JzonXFx1MDQ0NycsJ0NIY3knOidcXHUwNDI3JywnY2hlY2snOidcXHUyNzEzJywnY2hlY2ttYXJrJzonXFx1MjcxMycsJ2NoaSc6J1xcdTAzQzcnLCdDaGknOidcXHUwM0E3JywnY2lyJzonXFx1MjVDQicsJ2NpcmMnOidcXHUwMkM2JywnY2lyY2VxJzonXFx1MjI1NycsJ2NpcmNsZWFycm93bGVmdCc6J1xcdTIxQkEnLCdjaXJjbGVhcnJvd3JpZ2h0JzonXFx1MjFCQicsJ2NpcmNsZWRhc3QnOidcXHUyMjlCJywnY2lyY2xlZGNpcmMnOidcXHUyMjlBJywnY2lyY2xlZGRhc2gnOidcXHUyMjlEJywnQ2lyY2xlRG90JzonXFx1MjI5OScsJ2NpcmNsZWRSJzonXFx4QUUnLCdjaXJjbGVkUyc6J1xcdTI0QzgnLCdDaXJjbGVNaW51cyc6J1xcdTIyOTYnLCdDaXJjbGVQbHVzJzonXFx1MjI5NScsJ0NpcmNsZVRpbWVzJzonXFx1MjI5NycsJ2NpcmUnOidcXHUyMjU3JywnY2lyRSc6J1xcdTI5QzMnLCdjaXJmbmludCc6J1xcdTJBMTAnLCdjaXJtaWQnOidcXHUyQUVGJywnY2lyc2Npcic6J1xcdTI5QzInLCdDbG9ja3dpc2VDb250b3VySW50ZWdyYWwnOidcXHUyMjMyJywnQ2xvc2VDdXJseURvdWJsZVF1b3RlJzonXFx1MjAxRCcsJ0Nsb3NlQ3VybHlRdW90ZSc6J1xcdTIwMTknLCdjbHVicyc6J1xcdTI2NjMnLCdjbHVic3VpdCc6J1xcdTI2NjMnLCdjb2xvbic6JzonLCdDb2xvbic6J1xcdTIyMzcnLCdjb2xvbmUnOidcXHUyMjU0JywnQ29sb25lJzonXFx1MkE3NCcsJ2NvbG9uZXEnOidcXHUyMjU0JywnY29tbWEnOicsJywnY29tbWF0JzonQCcsJ2NvbXAnOidcXHUyMjAxJywnY29tcGZuJzonXFx1MjIxOCcsJ2NvbXBsZW1lbnQnOidcXHUyMjAxJywnY29tcGxleGVzJzonXFx1MjEwMicsJ2NvbmcnOidcXHUyMjQ1JywnY29uZ2RvdCc6J1xcdTJBNkQnLCdDb25ncnVlbnQnOidcXHUyMjYxJywnY29uaW50JzonXFx1MjIyRScsJ0NvbmludCc6J1xcdTIyMkYnLCdDb250b3VySW50ZWdyYWwnOidcXHUyMjJFJywnY29wZic6J1xcdUQ4MzVcXHVERDU0JywnQ29wZic6J1xcdTIxMDInLCdjb3Byb2QnOidcXHUyMjEwJywnQ29wcm9kdWN0JzonXFx1MjIxMCcsJ2NvcHknOidcXHhBOScsJ0NPUFknOidcXHhBOScsJ2NvcHlzcic6J1xcdTIxMTcnLCdDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsJzonXFx1MjIzMycsJ2NyYXJyJzonXFx1MjFCNScsJ2Nyb3NzJzonXFx1MjcxNycsJ0Nyb3NzJzonXFx1MkEyRicsJ2NzY3InOidcXHVEODM1XFx1RENCOCcsJ0NzY3InOidcXHVEODM1XFx1REM5RScsJ2NzdWInOidcXHUyQUNGJywnY3N1YmUnOidcXHUyQUQxJywnY3N1cCc6J1xcdTJBRDAnLCdjc3VwZSc6J1xcdTJBRDInLCdjdGRvdCc6J1xcdTIyRUYnLCdjdWRhcnJsJzonXFx1MjkzOCcsJ2N1ZGFycnInOidcXHUyOTM1JywnY3VlcHInOidcXHUyMkRFJywnY3Vlc2MnOidcXHUyMkRGJywnY3VsYXJyJzonXFx1MjFCNicsJ2N1bGFycnAnOidcXHUyOTNEJywnY3VwJzonXFx1MjIyQScsJ0N1cCc6J1xcdTIyRDMnLCdjdXBicmNhcCc6J1xcdTJBNDgnLCdjdXBjYXAnOidcXHUyQTQ2JywnQ3VwQ2FwJzonXFx1MjI0RCcsJ2N1cGN1cCc6J1xcdTJBNEEnLCdjdXBkb3QnOidcXHUyMjhEJywnY3Vwb3InOidcXHUyQTQ1JywnY3Vwcyc6J1xcdTIyMkFcXHVGRTAwJywnY3VyYXJyJzonXFx1MjFCNycsJ2N1cmFycm0nOidcXHUyOTNDJywnY3VybHllcXByZWMnOidcXHUyMkRFJywnY3VybHllcXN1Y2MnOidcXHUyMkRGJywnY3VybHl2ZWUnOidcXHUyMkNFJywnY3VybHl3ZWRnZSc6J1xcdTIyQ0YnLCdjdXJyZW4nOidcXHhBNCcsJ2N1cnZlYXJyb3dsZWZ0JzonXFx1MjFCNicsJ2N1cnZlYXJyb3dyaWdodCc6J1xcdTIxQjcnLCdjdXZlZSc6J1xcdTIyQ0UnLCdjdXdlZCc6J1xcdTIyQ0YnLCdjd2NvbmludCc6J1xcdTIyMzInLCdjd2ludCc6J1xcdTIyMzEnLCdjeWxjdHknOidcXHUyMzJEJywnZGFnZ2VyJzonXFx1MjAyMCcsJ0RhZ2dlcic6J1xcdTIwMjEnLCdkYWxldGgnOidcXHUyMTM4JywnZGFycic6J1xcdTIxOTMnLCdkQXJyJzonXFx1MjFEMycsJ0RhcnInOidcXHUyMUExJywnZGFzaCc6J1xcdTIwMTAnLCdkYXNodic6J1xcdTIyQTMnLCdEYXNodic6J1xcdTJBRTQnLCdkYmthcm93JzonXFx1MjkwRicsJ2RibGFjJzonXFx1MDJERCcsJ2RjYXJvbic6J1xcdTAxMEYnLCdEY2Fyb24nOidcXHUwMTBFJywnZGN5JzonXFx1MDQzNCcsJ0RjeSc6J1xcdTA0MTQnLCdkZCc6J1xcdTIxNDYnLCdERCc6J1xcdTIxNDUnLCdkZGFnZ2VyJzonXFx1MjAyMScsJ2RkYXJyJzonXFx1MjFDQScsJ0REb3RyYWhkJzonXFx1MjkxMScsJ2Rkb3RzZXEnOidcXHUyQTc3JywnZGVnJzonXFx4QjAnLCdEZWwnOidcXHUyMjA3JywnZGVsdGEnOidcXHUwM0I0JywnRGVsdGEnOidcXHUwMzk0JywnZGVtcHR5dic6J1xcdTI5QjEnLCdkZmlzaHQnOidcXHUyOTdGJywnZGZyJzonXFx1RDgzNVxcdUREMjEnLCdEZnInOidcXHVEODM1XFx1REQwNycsJ2RIYXInOidcXHUyOTY1JywnZGhhcmwnOidcXHUyMUMzJywnZGhhcnInOidcXHUyMUMyJywnRGlhY3JpdGljYWxBY3V0ZSc6J1xceEI0JywnRGlhY3JpdGljYWxEb3QnOidcXHUwMkQ5JywnRGlhY3JpdGljYWxEb3VibGVBY3V0ZSc6J1xcdTAyREQnLCdEaWFjcml0aWNhbEdyYXZlJzonYCcsJ0RpYWNyaXRpY2FsVGlsZGUnOidcXHUwMkRDJywnZGlhbSc6J1xcdTIyQzQnLCdkaWFtb25kJzonXFx1MjJDNCcsJ0RpYW1vbmQnOidcXHUyMkM0JywnZGlhbW9uZHN1aXQnOidcXHUyNjY2JywnZGlhbXMnOidcXHUyNjY2JywnZGllJzonXFx4QTgnLCdEaWZmZXJlbnRpYWxEJzonXFx1MjE0NicsJ2RpZ2FtbWEnOidcXHUwM0REJywnZGlzaW4nOidcXHUyMkYyJywnZGl2JzonXFx4RjcnLCdkaXZpZGUnOidcXHhGNycsJ2RpdmlkZW9udGltZXMnOidcXHUyMkM3JywnZGl2b254JzonXFx1MjJDNycsJ2RqY3knOidcXHUwNDUyJywnREpjeSc6J1xcdTA0MDInLCdkbGNvcm4nOidcXHUyMzFFJywnZGxjcm9wJzonXFx1MjMwRCcsJ2RvbGxhcic6JyQnLCdkb3BmJzonXFx1RDgzNVxcdURENTUnLCdEb3BmJzonXFx1RDgzNVxcdUREM0InLCdkb3QnOidcXHUwMkQ5JywnRG90JzonXFx4QTgnLCdEb3REb3QnOidcXHUyMERDJywnZG90ZXEnOidcXHUyMjUwJywnZG90ZXFkb3QnOidcXHUyMjUxJywnRG90RXF1YWwnOidcXHUyMjUwJywnZG90bWludXMnOidcXHUyMjM4JywnZG90cGx1cyc6J1xcdTIyMTQnLCdkb3RzcXVhcmUnOidcXHUyMkExJywnZG91YmxlYmFyd2VkZ2UnOidcXHUyMzA2JywnRG91YmxlQ29udG91ckludGVncmFsJzonXFx1MjIyRicsJ0RvdWJsZURvdCc6J1xceEE4JywnRG91YmxlRG93bkFycm93JzonXFx1MjFEMycsJ0RvdWJsZUxlZnRBcnJvdyc6J1xcdTIxRDAnLCdEb3VibGVMZWZ0UmlnaHRBcnJvdyc6J1xcdTIxRDQnLCdEb3VibGVMZWZ0VGVlJzonXFx1MkFFNCcsJ0RvdWJsZUxvbmdMZWZ0QXJyb3cnOidcXHUyN0Y4JywnRG91YmxlTG9uZ0xlZnRSaWdodEFycm93JzonXFx1MjdGQScsJ0RvdWJsZUxvbmdSaWdodEFycm93JzonXFx1MjdGOScsJ0RvdWJsZVJpZ2h0QXJyb3cnOidcXHUyMUQyJywnRG91YmxlUmlnaHRUZWUnOidcXHUyMkE4JywnRG91YmxlVXBBcnJvdyc6J1xcdTIxRDEnLCdEb3VibGVVcERvd25BcnJvdyc6J1xcdTIxRDUnLCdEb3VibGVWZXJ0aWNhbEJhcic6J1xcdTIyMjUnLCdkb3duYXJyb3cnOidcXHUyMTkzJywnRG93bmFycm93JzonXFx1MjFEMycsJ0Rvd25BcnJvdyc6J1xcdTIxOTMnLCdEb3duQXJyb3dCYXInOidcXHUyOTEzJywnRG93bkFycm93VXBBcnJvdyc6J1xcdTIxRjUnLCdEb3duQnJldmUnOidcXHUwMzExJywnZG93bmRvd25hcnJvd3MnOidcXHUyMUNBJywnZG93bmhhcnBvb25sZWZ0JzonXFx1MjFDMycsJ2Rvd25oYXJwb29ucmlnaHQnOidcXHUyMUMyJywnRG93bkxlZnRSaWdodFZlY3Rvcic6J1xcdTI5NTAnLCdEb3duTGVmdFRlZVZlY3Rvcic6J1xcdTI5NUUnLCdEb3duTGVmdFZlY3Rvcic6J1xcdTIxQkQnLCdEb3duTGVmdFZlY3RvckJhcic6J1xcdTI5NTYnLCdEb3duUmlnaHRUZWVWZWN0b3InOidcXHUyOTVGJywnRG93blJpZ2h0VmVjdG9yJzonXFx1MjFDMScsJ0Rvd25SaWdodFZlY3RvckJhcic6J1xcdTI5NTcnLCdEb3duVGVlJzonXFx1MjJBNCcsJ0Rvd25UZWVBcnJvdyc6J1xcdTIxQTcnLCdkcmJrYXJvdyc6J1xcdTI5MTAnLCdkcmNvcm4nOidcXHUyMzFGJywnZHJjcm9wJzonXFx1MjMwQycsJ2RzY3InOidcXHVEODM1XFx1RENCOScsJ0RzY3InOidcXHVEODM1XFx1REM5RicsJ2RzY3knOidcXHUwNDU1JywnRFNjeSc6J1xcdTA0MDUnLCdkc29sJzonXFx1MjlGNicsJ2RzdHJvayc6J1xcdTAxMTEnLCdEc3Ryb2snOidcXHUwMTEwJywnZHRkb3QnOidcXHUyMkYxJywnZHRyaSc6J1xcdTI1QkYnLCdkdHJpZic6J1xcdTI1QkUnLCdkdWFycic6J1xcdTIxRjUnLCdkdWhhcic6J1xcdTI5NkYnLCdkd2FuZ2xlJzonXFx1MjlBNicsJ2R6Y3knOidcXHUwNDVGJywnRFpjeSc6J1xcdTA0MEYnLCdkemlncmFycic6J1xcdTI3RkYnLCdlYWN1dGUnOidcXHhFOScsJ0VhY3V0ZSc6J1xceEM5JywnZWFzdGVyJzonXFx1MkE2RScsJ2VjYXJvbic6J1xcdTAxMUInLCdFY2Fyb24nOidcXHUwMTFBJywnZWNpcic6J1xcdTIyNTYnLCdlY2lyYyc6J1xceEVBJywnRWNpcmMnOidcXHhDQScsJ2Vjb2xvbic6J1xcdTIyNTUnLCdlY3knOidcXHUwNDREJywnRWN5JzonXFx1MDQyRCcsJ2VERG90JzonXFx1MkE3NycsJ2Vkb3QnOidcXHUwMTE3JywnZURvdCc6J1xcdTIyNTEnLCdFZG90JzonXFx1MDExNicsJ2VlJzonXFx1MjE0NycsJ2VmRG90JzonXFx1MjI1MicsJ2Vmcic6J1xcdUQ4MzVcXHVERDIyJywnRWZyJzonXFx1RDgzNVxcdUREMDgnLCdlZyc6J1xcdTJBOUEnLCdlZ3JhdmUnOidcXHhFOCcsJ0VncmF2ZSc6J1xceEM4JywnZWdzJzonXFx1MkE5NicsJ2Vnc2RvdCc6J1xcdTJBOTgnLCdlbCc6J1xcdTJBOTknLCdFbGVtZW50JzonXFx1MjIwOCcsJ2VsaW50ZXJzJzonXFx1MjNFNycsJ2VsbCc6J1xcdTIxMTMnLCdlbHMnOidcXHUyQTk1JywnZWxzZG90JzonXFx1MkE5NycsJ2VtYWNyJzonXFx1MDExMycsJ0VtYWNyJzonXFx1MDExMicsJ2VtcHR5JzonXFx1MjIwNScsJ2VtcHR5c2V0JzonXFx1MjIwNScsJ0VtcHR5U21hbGxTcXVhcmUnOidcXHUyNUZCJywnZW1wdHl2JzonXFx1MjIwNScsJ0VtcHR5VmVyeVNtYWxsU3F1YXJlJzonXFx1MjVBQicsJ2Vtc3AnOidcXHUyMDAzJywnZW1zcDEzJzonXFx1MjAwNCcsJ2Vtc3AxNCc6J1xcdTIwMDUnLCdlbmcnOidcXHUwMTRCJywnRU5HJzonXFx1MDE0QScsJ2Vuc3AnOidcXHUyMDAyJywnZW9nb24nOidcXHUwMTE5JywnRW9nb24nOidcXHUwMTE4JywnZW9wZic6J1xcdUQ4MzVcXHVERDU2JywnRW9wZic6J1xcdUQ4MzVcXHVERDNDJywnZXBhcic6J1xcdTIyRDUnLCdlcGFyc2wnOidcXHUyOUUzJywnZXBsdXMnOidcXHUyQTcxJywnZXBzaSc6J1xcdTAzQjUnLCdlcHNpbG9uJzonXFx1MDNCNScsJ0Vwc2lsb24nOidcXHUwMzk1JywnZXBzaXYnOidcXHUwM0Y1JywnZXFjaXJjJzonXFx1MjI1NicsJ2VxY29sb24nOidcXHUyMjU1JywnZXFzaW0nOidcXHUyMjQyJywnZXFzbGFudGd0cic6J1xcdTJBOTYnLCdlcXNsYW50bGVzcyc6J1xcdTJBOTUnLCdFcXVhbCc6J1xcdTJBNzUnLCdlcXVhbHMnOic9JywnRXF1YWxUaWxkZSc6J1xcdTIyNDInLCdlcXVlc3QnOidcXHUyMjVGJywnRXF1aWxpYnJpdW0nOidcXHUyMUNDJywnZXF1aXYnOidcXHUyMjYxJywnZXF1aXZERCc6J1xcdTJBNzgnLCdlcXZwYXJzbCc6J1xcdTI5RTUnLCdlcmFycic6J1xcdTI5NzEnLCdlckRvdCc6J1xcdTIyNTMnLCdlc2NyJzonXFx1MjEyRicsJ0VzY3InOidcXHUyMTMwJywnZXNkb3QnOidcXHUyMjUwJywnZXNpbSc6J1xcdTIyNDInLCdFc2ltJzonXFx1MkE3MycsJ2V0YSc6J1xcdTAzQjcnLCdFdGEnOidcXHUwMzk3JywnZXRoJzonXFx4RjAnLCdFVEgnOidcXHhEMCcsJ2V1bWwnOidcXHhFQicsJ0V1bWwnOidcXHhDQicsJ2V1cm8nOidcXHUyMEFDJywnZXhjbCc6JyEnLCdleGlzdCc6J1xcdTIyMDMnLCdFeGlzdHMnOidcXHUyMjAzJywnZXhwZWN0YXRpb24nOidcXHUyMTMwJywnZXhwb25lbnRpYWxlJzonXFx1MjE0NycsJ0V4cG9uZW50aWFsRSc6J1xcdTIxNDcnLCdmYWxsaW5nZG90c2VxJzonXFx1MjI1MicsJ2ZjeSc6J1xcdTA0NDQnLCdGY3knOidcXHUwNDI0JywnZmVtYWxlJzonXFx1MjY0MCcsJ2ZmaWxpZyc6J1xcdUZCMDMnLCdmZmxpZyc6J1xcdUZCMDAnLCdmZmxsaWcnOidcXHVGQjA0JywnZmZyJzonXFx1RDgzNVxcdUREMjMnLCdGZnInOidcXHVEODM1XFx1REQwOScsJ2ZpbGlnJzonXFx1RkIwMScsJ0ZpbGxlZFNtYWxsU3F1YXJlJzonXFx1MjVGQycsJ0ZpbGxlZFZlcnlTbWFsbFNxdWFyZSc6J1xcdTI1QUEnLCdmamxpZyc6J2ZqJywnZmxhdCc6J1xcdTI2NkQnLCdmbGxpZyc6J1xcdUZCMDInLCdmbHRucyc6J1xcdTI1QjEnLCdmbm9mJzonXFx1MDE5MicsJ2ZvcGYnOidcXHVEODM1XFx1REQ1NycsJ0ZvcGYnOidcXHVEODM1XFx1REQzRCcsJ2ZvcmFsbCc6J1xcdTIyMDAnLCdGb3JBbGwnOidcXHUyMjAwJywnZm9yayc6J1xcdTIyRDQnLCdmb3Jrdic6J1xcdTJBRDknLCdGb3VyaWVydHJmJzonXFx1MjEzMScsJ2ZwYXJ0aW50JzonXFx1MkEwRCcsJ2ZyYWMxMic6J1xceEJEJywnZnJhYzEzJzonXFx1MjE1MycsJ2ZyYWMxNCc6J1xceEJDJywnZnJhYzE1JzonXFx1MjE1NScsJ2ZyYWMxNic6J1xcdTIxNTknLCdmcmFjMTgnOidcXHUyMTVCJywnZnJhYzIzJzonXFx1MjE1NCcsJ2ZyYWMyNSc6J1xcdTIxNTYnLCdmcmFjMzQnOidcXHhCRScsJ2ZyYWMzNSc6J1xcdTIxNTcnLCdmcmFjMzgnOidcXHUyMTVDJywnZnJhYzQ1JzonXFx1MjE1OCcsJ2ZyYWM1Nic6J1xcdTIxNUEnLCdmcmFjNTgnOidcXHUyMTVEJywnZnJhYzc4JzonXFx1MjE1RScsJ2ZyYXNsJzonXFx1MjA0NCcsJ2Zyb3duJzonXFx1MjMyMicsJ2ZzY3InOidcXHVEODM1XFx1RENCQicsJ0ZzY3InOidcXHUyMTMxJywnZ2FjdXRlJzonXFx1MDFGNScsJ2dhbW1hJzonXFx1MDNCMycsJ0dhbW1hJzonXFx1MDM5MycsJ2dhbW1hZCc6J1xcdTAzREQnLCdHYW1tYWQnOidcXHUwM0RDJywnZ2FwJzonXFx1MkE4NicsJ2dicmV2ZSc6J1xcdTAxMUYnLCdHYnJldmUnOidcXHUwMTFFJywnR2NlZGlsJzonXFx1MDEyMicsJ2djaXJjJzonXFx1MDExRCcsJ0djaXJjJzonXFx1MDExQycsJ2djeSc6J1xcdTA0MzMnLCdHY3knOidcXHUwNDEzJywnZ2RvdCc6J1xcdTAxMjEnLCdHZG90JzonXFx1MDEyMCcsJ2dlJzonXFx1MjI2NScsJ2dFJzonXFx1MjI2NycsJ2dlbCc6J1xcdTIyREInLCdnRWwnOidcXHUyQThDJywnZ2VxJzonXFx1MjI2NScsJ2dlcXEnOidcXHUyMjY3JywnZ2Vxc2xhbnQnOidcXHUyQTdFJywnZ2VzJzonXFx1MkE3RScsJ2dlc2NjJzonXFx1MkFBOScsJ2dlc2RvdCc6J1xcdTJBODAnLCdnZXNkb3RvJzonXFx1MkE4MicsJ2dlc2RvdG9sJzonXFx1MkE4NCcsJ2dlc2wnOidcXHUyMkRCXFx1RkUwMCcsJ2dlc2xlcyc6J1xcdTJBOTQnLCdnZnInOidcXHVEODM1XFx1REQyNCcsJ0dmcic6J1xcdUQ4MzVcXHVERDBBJywnZ2cnOidcXHUyMjZCJywnR2cnOidcXHUyMkQ5JywnZ2dnJzonXFx1MjJEOScsJ2dpbWVsJzonXFx1MjEzNycsJ2dqY3knOidcXHUwNDUzJywnR0pjeSc6J1xcdTA0MDMnLCdnbCc6J1xcdTIyNzcnLCdnbGEnOidcXHUyQUE1JywnZ2xFJzonXFx1MkE5MicsJ2dsaic6J1xcdTJBQTQnLCdnbmFwJzonXFx1MkE4QScsJ2duYXBwcm94JzonXFx1MkE4QScsJ2duZSc6J1xcdTJBODgnLCdnbkUnOidcXHUyMjY5JywnZ25lcSc6J1xcdTJBODgnLCdnbmVxcSc6J1xcdTIyNjknLCdnbnNpbSc6J1xcdTIyRTcnLCdnb3BmJzonXFx1RDgzNVxcdURENTgnLCdHb3BmJzonXFx1RDgzNVxcdUREM0UnLCdncmF2ZSc6J2AnLCdHcmVhdGVyRXF1YWwnOidcXHUyMjY1JywnR3JlYXRlckVxdWFsTGVzcyc6J1xcdTIyREInLCdHcmVhdGVyRnVsbEVxdWFsJzonXFx1MjI2NycsJ0dyZWF0ZXJHcmVhdGVyJzonXFx1MkFBMicsJ0dyZWF0ZXJMZXNzJzonXFx1MjI3NycsJ0dyZWF0ZXJTbGFudEVxdWFsJzonXFx1MkE3RScsJ0dyZWF0ZXJUaWxkZSc6J1xcdTIyNzMnLCdnc2NyJzonXFx1MjEwQScsJ0dzY3InOidcXHVEODM1XFx1RENBMicsJ2dzaW0nOidcXHUyMjczJywnZ3NpbWUnOidcXHUyQThFJywnZ3NpbWwnOidcXHUyQTkwJywnZ3QnOic+JywnR3QnOidcXHUyMjZCJywnR1QnOic+JywnZ3RjYyc6J1xcdTJBQTcnLCdndGNpcic6J1xcdTJBN0EnLCdndGRvdCc6J1xcdTIyRDcnLCdndGxQYXInOidcXHUyOTk1JywnZ3RxdWVzdCc6J1xcdTJBN0MnLCdndHJhcHByb3gnOidcXHUyQTg2JywnZ3RyYXJyJzonXFx1Mjk3OCcsJ2d0cmRvdCc6J1xcdTIyRDcnLCdndHJlcWxlc3MnOidcXHUyMkRCJywnZ3RyZXFxbGVzcyc6J1xcdTJBOEMnLCdndHJsZXNzJzonXFx1MjI3NycsJ2d0cnNpbSc6J1xcdTIyNzMnLCdndmVydG5lcXEnOidcXHUyMjY5XFx1RkUwMCcsJ2d2bkUnOidcXHUyMjY5XFx1RkUwMCcsJ0hhY2VrJzonXFx1MDJDNycsJ2hhaXJzcCc6J1xcdTIwMEEnLCdoYWxmJzonXFx4QkQnLCdoYW1pbHQnOidcXHUyMTBCJywnaGFyZGN5JzonXFx1MDQ0QScsJ0hBUkRjeSc6J1xcdTA0MkEnLCdoYXJyJzonXFx1MjE5NCcsJ2hBcnInOidcXHUyMUQ0JywnaGFycmNpcic6J1xcdTI5NDgnLCdoYXJydyc6J1xcdTIxQUQnLCdIYXQnOideJywnaGJhcic6J1xcdTIxMEYnLCdoY2lyYyc6J1xcdTAxMjUnLCdIY2lyYyc6J1xcdTAxMjQnLCdoZWFydHMnOidcXHUyNjY1JywnaGVhcnRzdWl0JzonXFx1MjY2NScsJ2hlbGxpcCc6J1xcdTIwMjYnLCdoZXJjb24nOidcXHUyMkI5JywnaGZyJzonXFx1RDgzNVxcdUREMjUnLCdIZnInOidcXHUyMTBDJywnSGlsYmVydFNwYWNlJzonXFx1MjEwQicsJ2hrc2Vhcm93JzonXFx1MjkyNScsJ2hrc3dhcm93JzonXFx1MjkyNicsJ2hvYXJyJzonXFx1MjFGRicsJ2hvbXRodCc6J1xcdTIyM0InLCdob29rbGVmdGFycm93JzonXFx1MjFBOScsJ2hvb2tyaWdodGFycm93JzonXFx1MjFBQScsJ2hvcGYnOidcXHVEODM1XFx1REQ1OScsJ0hvcGYnOidcXHUyMTBEJywnaG9yYmFyJzonXFx1MjAxNScsJ0hvcml6b250YWxMaW5lJzonXFx1MjUwMCcsJ2hzY3InOidcXHVEODM1XFx1RENCRCcsJ0hzY3InOidcXHUyMTBCJywnaHNsYXNoJzonXFx1MjEwRicsJ2hzdHJvayc6J1xcdTAxMjcnLCdIc3Ryb2snOidcXHUwMTI2JywnSHVtcERvd25IdW1wJzonXFx1MjI0RScsJ0h1bXBFcXVhbCc6J1xcdTIyNEYnLCdoeWJ1bGwnOidcXHUyMDQzJywnaHlwaGVuJzonXFx1MjAxMCcsJ2lhY3V0ZSc6J1xceEVEJywnSWFjdXRlJzonXFx4Q0QnLCdpYyc6J1xcdTIwNjMnLCdpY2lyYyc6J1xceEVFJywnSWNpcmMnOidcXHhDRScsJ2ljeSc6J1xcdTA0MzgnLCdJY3knOidcXHUwNDE4JywnSWRvdCc6J1xcdTAxMzAnLCdpZWN5JzonXFx1MDQzNScsJ0lFY3knOidcXHUwNDE1JywnaWV4Y2wnOidcXHhBMScsJ2lmZic6J1xcdTIxRDQnLCdpZnInOidcXHVEODM1XFx1REQyNicsJ0lmcic6J1xcdTIxMTEnLCdpZ3JhdmUnOidcXHhFQycsJ0lncmF2ZSc6J1xceENDJywnaWknOidcXHUyMTQ4JywnaWlpaW50JzonXFx1MkEwQycsJ2lpaW50JzonXFx1MjIyRCcsJ2lpbmZpbic6J1xcdTI5REMnLCdpaW90YSc6J1xcdTIxMjknLCdpamxpZyc6J1xcdTAxMzMnLCdJSmxpZyc6J1xcdTAxMzInLCdJbSc6J1xcdTIxMTEnLCdpbWFjcic6J1xcdTAxMkInLCdJbWFjcic6J1xcdTAxMkEnLCdpbWFnZSc6J1xcdTIxMTEnLCdJbWFnaW5hcnlJJzonXFx1MjE0OCcsJ2ltYWdsaW5lJzonXFx1MjExMCcsJ2ltYWdwYXJ0JzonXFx1MjExMScsJ2ltYXRoJzonXFx1MDEzMScsJ2ltb2YnOidcXHUyMkI3JywnaW1wZWQnOidcXHUwMUI1JywnSW1wbGllcyc6J1xcdTIxRDInLCdpbic6J1xcdTIyMDgnLCdpbmNhcmUnOidcXHUyMTA1JywnaW5maW4nOidcXHUyMjFFJywnaW5maW50aWUnOidcXHUyOUREJywnaW5vZG90JzonXFx1MDEzMScsJ2ludCc6J1xcdTIyMkInLCdJbnQnOidcXHUyMjJDJywnaW50Y2FsJzonXFx1MjJCQScsJ2ludGVnZXJzJzonXFx1MjEyNCcsJ0ludGVncmFsJzonXFx1MjIyQicsJ2ludGVyY2FsJzonXFx1MjJCQScsJ0ludGVyc2VjdGlvbic6J1xcdTIyQzInLCdpbnRsYXJoayc6J1xcdTJBMTcnLCdpbnRwcm9kJzonXFx1MkEzQycsJ0ludmlzaWJsZUNvbW1hJzonXFx1MjA2MycsJ0ludmlzaWJsZVRpbWVzJzonXFx1MjA2MicsJ2lvY3knOidcXHUwNDUxJywnSU9jeSc6J1xcdTA0MDEnLCdpb2dvbic6J1xcdTAxMkYnLCdJb2dvbic6J1xcdTAxMkUnLCdpb3BmJzonXFx1RDgzNVxcdURENUEnLCdJb3BmJzonXFx1RDgzNVxcdURENDAnLCdpb3RhJzonXFx1MDNCOScsJ0lvdGEnOidcXHUwMzk5JywnaXByb2QnOidcXHUyQTNDJywnaXF1ZXN0JzonXFx4QkYnLCdpc2NyJzonXFx1RDgzNVxcdURDQkUnLCdJc2NyJzonXFx1MjExMCcsJ2lzaW4nOidcXHUyMjA4JywnaXNpbmRvdCc6J1xcdTIyRjUnLCdpc2luRSc6J1xcdTIyRjknLCdpc2lucyc6J1xcdTIyRjQnLCdpc2luc3YnOidcXHUyMkYzJywnaXNpbnYnOidcXHUyMjA4JywnaXQnOidcXHUyMDYyJywnaXRpbGRlJzonXFx1MDEyOScsJ0l0aWxkZSc6J1xcdTAxMjgnLCdpdWtjeSc6J1xcdTA0NTYnLCdJdWtjeSc6J1xcdTA0MDYnLCdpdW1sJzonXFx4RUYnLCdJdW1sJzonXFx4Q0YnLCdqY2lyYyc6J1xcdTAxMzUnLCdKY2lyYyc6J1xcdTAxMzQnLCdqY3knOidcXHUwNDM5JywnSmN5JzonXFx1MDQxOScsJ2pmcic6J1xcdUQ4MzVcXHVERDI3JywnSmZyJzonXFx1RDgzNVxcdUREMEQnLCdqbWF0aCc6J1xcdTAyMzcnLCdqb3BmJzonXFx1RDgzNVxcdURENUInLCdKb3BmJzonXFx1RDgzNVxcdURENDEnLCdqc2NyJzonXFx1RDgzNVxcdURDQkYnLCdKc2NyJzonXFx1RDgzNVxcdURDQTUnLCdqc2VyY3knOidcXHUwNDU4JywnSnNlcmN5JzonXFx1MDQwOCcsJ2p1a2N5JzonXFx1MDQ1NCcsJ0p1a2N5JzonXFx1MDQwNCcsJ2thcHBhJzonXFx1MDNCQScsJ0thcHBhJzonXFx1MDM5QScsJ2thcHBhdic6J1xcdTAzRjAnLCdrY2VkaWwnOidcXHUwMTM3JywnS2NlZGlsJzonXFx1MDEzNicsJ2tjeSc6J1xcdTA0M0EnLCdLY3knOidcXHUwNDFBJywna2ZyJzonXFx1RDgzNVxcdUREMjgnLCdLZnInOidcXHVEODM1XFx1REQwRScsJ2tncmVlbic6J1xcdTAxMzgnLCdraGN5JzonXFx1MDQ0NScsJ0tIY3knOidcXHUwNDI1Jywna2pjeSc6J1xcdTA0NUMnLCdLSmN5JzonXFx1MDQwQycsJ2tvcGYnOidcXHVEODM1XFx1REQ1QycsJ0tvcGYnOidcXHVEODM1XFx1REQ0MicsJ2tzY3InOidcXHVEODM1XFx1RENDMCcsJ0tzY3InOidcXHVEODM1XFx1RENBNicsJ2xBYXJyJzonXFx1MjFEQScsJ2xhY3V0ZSc6J1xcdTAxM0EnLCdMYWN1dGUnOidcXHUwMTM5JywnbGFlbXB0eXYnOidcXHUyOUI0JywnbGFncmFuJzonXFx1MjExMicsJ2xhbWJkYSc6J1xcdTAzQkInLCdMYW1iZGEnOidcXHUwMzlCJywnbGFuZyc6J1xcdTI3RTgnLCdMYW5nJzonXFx1MjdFQScsJ2xhbmdkJzonXFx1Mjk5MScsJ2xhbmdsZSc6J1xcdTI3RTgnLCdsYXAnOidcXHUyQTg1JywnTGFwbGFjZXRyZic6J1xcdTIxMTInLCdsYXF1byc6J1xceEFCJywnbGFycic6J1xcdTIxOTAnLCdsQXJyJzonXFx1MjFEMCcsJ0xhcnInOidcXHUyMTlFJywnbGFycmInOidcXHUyMUU0JywnbGFycmJmcyc6J1xcdTI5MUYnLCdsYXJyZnMnOidcXHUyOTFEJywnbGFycmhrJzonXFx1MjFBOScsJ2xhcnJscCc6J1xcdTIxQUInLCdsYXJycGwnOidcXHUyOTM5JywnbGFycnNpbSc6J1xcdTI5NzMnLCdsYXJydGwnOidcXHUyMUEyJywnbGF0JzonXFx1MkFBQicsJ2xhdGFpbCc6J1xcdTI5MTknLCdsQXRhaWwnOidcXHUyOTFCJywnbGF0ZSc6J1xcdTJBQUQnLCdsYXRlcyc6J1xcdTJBQURcXHVGRTAwJywnbGJhcnInOidcXHUyOTBDJywnbEJhcnInOidcXHUyOTBFJywnbGJicmsnOidcXHUyNzcyJywnbGJyYWNlJzoneycsJ2xicmFjayc6J1snLCdsYnJrZSc6J1xcdTI5OEInLCdsYnJrc2xkJzonXFx1Mjk4RicsJ2xicmtzbHUnOidcXHUyOThEJywnbGNhcm9uJzonXFx1MDEzRScsJ0xjYXJvbic6J1xcdTAxM0QnLCdsY2VkaWwnOidcXHUwMTNDJywnTGNlZGlsJzonXFx1MDEzQicsJ2xjZWlsJzonXFx1MjMwOCcsJ2xjdWInOid7JywnbGN5JzonXFx1MDQzQicsJ0xjeSc6J1xcdTA0MUInLCdsZGNhJzonXFx1MjkzNicsJ2xkcXVvJzonXFx1MjAxQycsJ2xkcXVvcic6J1xcdTIwMUUnLCdsZHJkaGFyJzonXFx1Mjk2NycsJ2xkcnVzaGFyJzonXFx1Mjk0QicsJ2xkc2gnOidcXHUyMUIyJywnbGUnOidcXHUyMjY0JywnbEUnOidcXHUyMjY2JywnTGVmdEFuZ2xlQnJhY2tldCc6J1xcdTI3RTgnLCdsZWZ0YXJyb3cnOidcXHUyMTkwJywnTGVmdGFycm93JzonXFx1MjFEMCcsJ0xlZnRBcnJvdyc6J1xcdTIxOTAnLCdMZWZ0QXJyb3dCYXInOidcXHUyMUU0JywnTGVmdEFycm93UmlnaHRBcnJvdyc6J1xcdTIxQzYnLCdsZWZ0YXJyb3d0YWlsJzonXFx1MjFBMicsJ0xlZnRDZWlsaW5nJzonXFx1MjMwOCcsJ0xlZnREb3VibGVCcmFja2V0JzonXFx1MjdFNicsJ0xlZnREb3duVGVlVmVjdG9yJzonXFx1Mjk2MScsJ0xlZnREb3duVmVjdG9yJzonXFx1MjFDMycsJ0xlZnREb3duVmVjdG9yQmFyJzonXFx1Mjk1OScsJ0xlZnRGbG9vcic6J1xcdTIzMEEnLCdsZWZ0aGFycG9vbmRvd24nOidcXHUyMUJEJywnbGVmdGhhcnBvb251cCc6J1xcdTIxQkMnLCdsZWZ0bGVmdGFycm93cyc6J1xcdTIxQzcnLCdsZWZ0cmlnaHRhcnJvdyc6J1xcdTIxOTQnLCdMZWZ0cmlnaHRhcnJvdyc6J1xcdTIxRDQnLCdMZWZ0UmlnaHRBcnJvdyc6J1xcdTIxOTQnLCdsZWZ0cmlnaHRhcnJvd3MnOidcXHUyMUM2JywnbGVmdHJpZ2h0aGFycG9vbnMnOidcXHUyMUNCJywnbGVmdHJpZ2h0c3F1aWdhcnJvdyc6J1xcdTIxQUQnLCdMZWZ0UmlnaHRWZWN0b3InOidcXHUyOTRFJywnTGVmdFRlZSc6J1xcdTIyQTMnLCdMZWZ0VGVlQXJyb3cnOidcXHUyMUE0JywnTGVmdFRlZVZlY3Rvcic6J1xcdTI5NUEnLCdsZWZ0dGhyZWV0aW1lcyc6J1xcdTIyQ0InLCdMZWZ0VHJpYW5nbGUnOidcXHUyMkIyJywnTGVmdFRyaWFuZ2xlQmFyJzonXFx1MjlDRicsJ0xlZnRUcmlhbmdsZUVxdWFsJzonXFx1MjJCNCcsJ0xlZnRVcERvd25WZWN0b3InOidcXHUyOTUxJywnTGVmdFVwVGVlVmVjdG9yJzonXFx1Mjk2MCcsJ0xlZnRVcFZlY3Rvcic6J1xcdTIxQkYnLCdMZWZ0VXBWZWN0b3JCYXInOidcXHUyOTU4JywnTGVmdFZlY3Rvcic6J1xcdTIxQkMnLCdMZWZ0VmVjdG9yQmFyJzonXFx1Mjk1MicsJ2xlZyc6J1xcdTIyREEnLCdsRWcnOidcXHUyQThCJywnbGVxJzonXFx1MjI2NCcsJ2xlcXEnOidcXHUyMjY2JywnbGVxc2xhbnQnOidcXHUyQTdEJywnbGVzJzonXFx1MkE3RCcsJ2xlc2NjJzonXFx1MkFBOCcsJ2xlc2RvdCc6J1xcdTJBN0YnLCdsZXNkb3RvJzonXFx1MkE4MScsJ2xlc2RvdG9yJzonXFx1MkE4MycsJ2xlc2cnOidcXHUyMkRBXFx1RkUwMCcsJ2xlc2dlcyc6J1xcdTJBOTMnLCdsZXNzYXBwcm94JzonXFx1MkE4NScsJ2xlc3Nkb3QnOidcXHUyMkQ2JywnbGVzc2VxZ3RyJzonXFx1MjJEQScsJ2xlc3NlcXFndHInOidcXHUyQThCJywnTGVzc0VxdWFsR3JlYXRlcic6J1xcdTIyREEnLCdMZXNzRnVsbEVxdWFsJzonXFx1MjI2NicsJ0xlc3NHcmVhdGVyJzonXFx1MjI3NicsJ2xlc3NndHInOidcXHUyMjc2JywnTGVzc0xlc3MnOidcXHUyQUExJywnbGVzc3NpbSc6J1xcdTIyNzInLCdMZXNzU2xhbnRFcXVhbCc6J1xcdTJBN0QnLCdMZXNzVGlsZGUnOidcXHUyMjcyJywnbGZpc2h0JzonXFx1Mjk3QycsJ2xmbG9vcic6J1xcdTIzMEEnLCdsZnInOidcXHVEODM1XFx1REQyOScsJ0xmcic6J1xcdUQ4MzVcXHVERDBGJywnbGcnOidcXHUyMjc2JywnbGdFJzonXFx1MkE5MScsJ2xIYXInOidcXHUyOTYyJywnbGhhcmQnOidcXHUyMUJEJywnbGhhcnUnOidcXHUyMUJDJywnbGhhcnVsJzonXFx1Mjk2QScsJ2xoYmxrJzonXFx1MjU4NCcsJ2xqY3knOidcXHUwNDU5JywnTEpjeSc6J1xcdTA0MDknLCdsbCc6J1xcdTIyNkEnLCdMbCc6J1xcdTIyRDgnLCdsbGFycic6J1xcdTIxQzcnLCdsbGNvcm5lcic6J1xcdTIzMUUnLCdMbGVmdGFycm93JzonXFx1MjFEQScsJ2xsaGFyZCc6J1xcdTI5NkInLCdsbHRyaSc6J1xcdTI1RkEnLCdsbWlkb3QnOidcXHUwMTQwJywnTG1pZG90JzonXFx1MDEzRicsJ2xtb3VzdCc6J1xcdTIzQjAnLCdsbW91c3RhY2hlJzonXFx1MjNCMCcsJ2xuYXAnOidcXHUyQTg5JywnbG5hcHByb3gnOidcXHUyQTg5JywnbG5lJzonXFx1MkE4NycsJ2xuRSc6J1xcdTIyNjgnLCdsbmVxJzonXFx1MkE4NycsJ2xuZXFxJzonXFx1MjI2OCcsJ2xuc2ltJzonXFx1MjJFNicsJ2xvYW5nJzonXFx1MjdFQycsJ2xvYXJyJzonXFx1MjFGRCcsJ2xvYnJrJzonXFx1MjdFNicsJ2xvbmdsZWZ0YXJyb3cnOidcXHUyN0Y1JywnTG9uZ2xlZnRhcnJvdyc6J1xcdTI3RjgnLCdMb25nTGVmdEFycm93JzonXFx1MjdGNScsJ2xvbmdsZWZ0cmlnaHRhcnJvdyc6J1xcdTI3RjcnLCdMb25nbGVmdHJpZ2h0YXJyb3cnOidcXHUyN0ZBJywnTG9uZ0xlZnRSaWdodEFycm93JzonXFx1MjdGNycsJ2xvbmdtYXBzdG8nOidcXHUyN0ZDJywnbG9uZ3JpZ2h0YXJyb3cnOidcXHUyN0Y2JywnTG9uZ3JpZ2h0YXJyb3cnOidcXHUyN0Y5JywnTG9uZ1JpZ2h0QXJyb3cnOidcXHUyN0Y2JywnbG9vcGFycm93bGVmdCc6J1xcdTIxQUInLCdsb29wYXJyb3dyaWdodCc6J1xcdTIxQUMnLCdsb3Bhcic6J1xcdTI5ODUnLCdsb3BmJzonXFx1RDgzNVxcdURENUQnLCdMb3BmJzonXFx1RDgzNVxcdURENDMnLCdsb3BsdXMnOidcXHUyQTJEJywnbG90aW1lcyc6J1xcdTJBMzQnLCdsb3dhc3QnOidcXHUyMjE3JywnbG93YmFyJzonXycsJ0xvd2VyTGVmdEFycm93JzonXFx1MjE5OScsJ0xvd2VyUmlnaHRBcnJvdyc6J1xcdTIxOTgnLCdsb3onOidcXHUyNUNBJywnbG96ZW5nZSc6J1xcdTI1Q0EnLCdsb3pmJzonXFx1MjlFQicsJ2xwYXInOicoJywnbHBhcmx0JzonXFx1Mjk5MycsJ2xyYXJyJzonXFx1MjFDNicsJ2xyY29ybmVyJzonXFx1MjMxRicsJ2xyaGFyJzonXFx1MjFDQicsJ2xyaGFyZCc6J1xcdTI5NkQnLCdscm0nOidcXHUyMDBFJywnbHJ0cmknOidcXHUyMkJGJywnbHNhcXVvJzonXFx1MjAzOScsJ2xzY3InOidcXHVEODM1XFx1RENDMScsJ0xzY3InOidcXHUyMTEyJywnbHNoJzonXFx1MjFCMCcsJ0xzaCc6J1xcdTIxQjAnLCdsc2ltJzonXFx1MjI3MicsJ2xzaW1lJzonXFx1MkE4RCcsJ2xzaW1nJzonXFx1MkE4RicsJ2xzcWInOidbJywnbHNxdW8nOidcXHUyMDE4JywnbHNxdW9yJzonXFx1MjAxQScsJ2xzdHJvayc6J1xcdTAxNDInLCdMc3Ryb2snOidcXHUwMTQxJywnbHQnOic8JywnTHQnOidcXHUyMjZBJywnTFQnOic8JywnbHRjYyc6J1xcdTJBQTYnLCdsdGNpcic6J1xcdTJBNzknLCdsdGRvdCc6J1xcdTIyRDYnLCdsdGhyZWUnOidcXHUyMkNCJywnbHRpbWVzJzonXFx1MjJDOScsJ2x0bGFycic6J1xcdTI5NzYnLCdsdHF1ZXN0JzonXFx1MkE3QicsJ2x0cmknOidcXHUyNUMzJywnbHRyaWUnOidcXHUyMkI0JywnbHRyaWYnOidcXHUyNUMyJywnbHRyUGFyJzonXFx1Mjk5NicsJ2x1cmRzaGFyJzonXFx1Mjk0QScsJ2x1cnVoYXInOidcXHUyOTY2JywnbHZlcnRuZXFxJzonXFx1MjI2OFxcdUZFMDAnLCdsdm5FJzonXFx1MjI2OFxcdUZFMDAnLCdtYWNyJzonXFx4QUYnLCdtYWxlJzonXFx1MjY0MicsJ21hbHQnOidcXHUyNzIwJywnbWFsdGVzZSc6J1xcdTI3MjAnLCdtYXAnOidcXHUyMUE2JywnTWFwJzonXFx1MjkwNScsJ21hcHN0byc6J1xcdTIxQTYnLCdtYXBzdG9kb3duJzonXFx1MjFBNycsJ21hcHN0b2xlZnQnOidcXHUyMUE0JywnbWFwc3RvdXAnOidcXHUyMUE1JywnbWFya2VyJzonXFx1MjVBRScsJ21jb21tYSc6J1xcdTJBMjknLCdtY3knOidcXHUwNDNDJywnTWN5JzonXFx1MDQxQycsJ21kYXNoJzonXFx1MjAxNCcsJ21ERG90JzonXFx1MjIzQScsJ21lYXN1cmVkYW5nbGUnOidcXHUyMjIxJywnTWVkaXVtU3BhY2UnOidcXHUyMDVGJywnTWVsbGludHJmJzonXFx1MjEzMycsJ21mcic6J1xcdUQ4MzVcXHVERDJBJywnTWZyJzonXFx1RDgzNVxcdUREMTAnLCdtaG8nOidcXHUyMTI3JywnbWljcm8nOidcXHhCNScsJ21pZCc6J1xcdTIyMjMnLCdtaWRhc3QnOicqJywnbWlkY2lyJzonXFx1MkFGMCcsJ21pZGRvdCc6J1xceEI3JywnbWludXMnOidcXHUyMjEyJywnbWludXNiJzonXFx1MjI5RicsJ21pbnVzZCc6J1xcdTIyMzgnLCdtaW51c2R1JzonXFx1MkEyQScsJ01pbnVzUGx1cyc6J1xcdTIyMTMnLCdtbGNwJzonXFx1MkFEQicsJ21sZHInOidcXHUyMDI2JywnbW5wbHVzJzonXFx1MjIxMycsJ21vZGVscyc6J1xcdTIyQTcnLCdtb3BmJzonXFx1RDgzNVxcdURENUUnLCdNb3BmJzonXFx1RDgzNVxcdURENDQnLCdtcCc6J1xcdTIyMTMnLCdtc2NyJzonXFx1RDgzNVxcdURDQzInLCdNc2NyJzonXFx1MjEzMycsJ21zdHBvcyc6J1xcdTIyM0UnLCdtdSc6J1xcdTAzQkMnLCdNdSc6J1xcdTAzOUMnLCdtdWx0aW1hcCc6J1xcdTIyQjgnLCdtdW1hcCc6J1xcdTIyQjgnLCduYWJsYSc6J1xcdTIyMDcnLCduYWN1dGUnOidcXHUwMTQ0JywnTmFjdXRlJzonXFx1MDE0MycsJ25hbmcnOidcXHUyMjIwXFx1MjBEMicsJ25hcCc6J1xcdTIyNDknLCduYXBFJzonXFx1MkE3MFxcdTAzMzgnLCduYXBpZCc6J1xcdTIyNEJcXHUwMzM4JywnbmFwb3MnOidcXHUwMTQ5JywnbmFwcHJveCc6J1xcdTIyNDknLCduYXR1cic6J1xcdTI2NkUnLCduYXR1cmFsJzonXFx1MjY2RScsJ25hdHVyYWxzJzonXFx1MjExNScsJ25ic3AnOidcXHhBMCcsJ25idW1wJzonXFx1MjI0RVxcdTAzMzgnLCduYnVtcGUnOidcXHUyMjRGXFx1MDMzOCcsJ25jYXAnOidcXHUyQTQzJywnbmNhcm9uJzonXFx1MDE0OCcsJ05jYXJvbic6J1xcdTAxNDcnLCduY2VkaWwnOidcXHUwMTQ2JywnTmNlZGlsJzonXFx1MDE0NScsJ25jb25nJzonXFx1MjI0NycsJ25jb25nZG90JzonXFx1MkE2RFxcdTAzMzgnLCduY3VwJzonXFx1MkE0MicsJ25jeSc6J1xcdTA0M0QnLCdOY3knOidcXHUwNDFEJywnbmRhc2gnOidcXHUyMDEzJywnbmUnOidcXHUyMjYwJywnbmVhcmhrJzonXFx1MjkyNCcsJ25lYXJyJzonXFx1MjE5NycsJ25lQXJyJzonXFx1MjFENycsJ25lYXJyb3cnOidcXHUyMTk3JywnbmVkb3QnOidcXHUyMjUwXFx1MDMzOCcsJ05lZ2F0aXZlTWVkaXVtU3BhY2UnOidcXHUyMDBCJywnTmVnYXRpdmVUaGlja1NwYWNlJzonXFx1MjAwQicsJ05lZ2F0aXZlVGhpblNwYWNlJzonXFx1MjAwQicsJ05lZ2F0aXZlVmVyeVRoaW5TcGFjZSc6J1xcdTIwMEInLCduZXF1aXYnOidcXHUyMjYyJywnbmVzZWFyJzonXFx1MjkyOCcsJ25lc2ltJzonXFx1MjI0MlxcdTAzMzgnLCdOZXN0ZWRHcmVhdGVyR3JlYXRlcic6J1xcdTIyNkInLCdOZXN0ZWRMZXNzTGVzcyc6J1xcdTIyNkEnLCdOZXdMaW5lJzonXFxuJywnbmV4aXN0JzonXFx1MjIwNCcsJ25leGlzdHMnOidcXHUyMjA0JywnbmZyJzonXFx1RDgzNVxcdUREMkInLCdOZnInOidcXHVEODM1XFx1REQxMScsJ25nZSc6J1xcdTIyNzEnLCduZ0UnOidcXHUyMjY3XFx1MDMzOCcsJ25nZXEnOidcXHUyMjcxJywnbmdlcXEnOidcXHUyMjY3XFx1MDMzOCcsJ25nZXFzbGFudCc6J1xcdTJBN0VcXHUwMzM4Jywnbmdlcyc6J1xcdTJBN0VcXHUwMzM4JywnbkdnJzonXFx1MjJEOVxcdTAzMzgnLCduZ3NpbSc6J1xcdTIyNzUnLCduZ3QnOidcXHUyMjZGJywnbkd0JzonXFx1MjI2QlxcdTIwRDInLCduZ3RyJzonXFx1MjI2RicsJ25HdHYnOidcXHUyMjZCXFx1MDMzOCcsJ25oYXJyJzonXFx1MjFBRScsJ25oQXJyJzonXFx1MjFDRScsJ25ocGFyJzonXFx1MkFGMicsJ25pJzonXFx1MjIwQicsJ25pcyc6J1xcdTIyRkMnLCduaXNkJzonXFx1MjJGQScsJ25pdic6J1xcdTIyMEInLCduamN5JzonXFx1MDQ1QScsJ05KY3knOidcXHUwNDBBJywnbmxhcnInOidcXHUyMTlBJywnbmxBcnInOidcXHUyMUNEJywnbmxkcic6J1xcdTIwMjUnLCdubGUnOidcXHUyMjcwJywnbmxFJzonXFx1MjI2NlxcdTAzMzgnLCdubGVmdGFycm93JzonXFx1MjE5QScsJ25MZWZ0YXJyb3cnOidcXHUyMUNEJywnbmxlZnRyaWdodGFycm93JzonXFx1MjFBRScsJ25MZWZ0cmlnaHRhcnJvdyc6J1xcdTIxQ0UnLCdubGVxJzonXFx1MjI3MCcsJ25sZXFxJzonXFx1MjI2NlxcdTAzMzgnLCdubGVxc2xhbnQnOidcXHUyQTdEXFx1MDMzOCcsJ25sZXMnOidcXHUyQTdEXFx1MDMzOCcsJ25sZXNzJzonXFx1MjI2RScsJ25MbCc6J1xcdTIyRDhcXHUwMzM4JywnbmxzaW0nOidcXHUyMjc0Jywnbmx0JzonXFx1MjI2RScsJ25MdCc6J1xcdTIyNkFcXHUyMEQyJywnbmx0cmknOidcXHUyMkVBJywnbmx0cmllJzonXFx1MjJFQycsJ25MdHYnOidcXHUyMjZBXFx1MDMzOCcsJ25taWQnOidcXHUyMjI0JywnTm9CcmVhayc6J1xcdTIwNjAnLCdOb25CcmVha2luZ1NwYWNlJzonXFx4QTAnLCdub3BmJzonXFx1RDgzNVxcdURENUYnLCdOb3BmJzonXFx1MjExNScsJ25vdCc6J1xceEFDJywnTm90JzonXFx1MkFFQycsJ05vdENvbmdydWVudCc6J1xcdTIyNjInLCdOb3RDdXBDYXAnOidcXHUyMjZEJywnTm90RG91YmxlVmVydGljYWxCYXInOidcXHUyMjI2JywnTm90RWxlbWVudCc6J1xcdTIyMDknLCdOb3RFcXVhbCc6J1xcdTIyNjAnLCdOb3RFcXVhbFRpbGRlJzonXFx1MjI0MlxcdTAzMzgnLCdOb3RFeGlzdHMnOidcXHUyMjA0JywnTm90R3JlYXRlcic6J1xcdTIyNkYnLCdOb3RHcmVhdGVyRXF1YWwnOidcXHUyMjcxJywnTm90R3JlYXRlckZ1bGxFcXVhbCc6J1xcdTIyNjdcXHUwMzM4JywnTm90R3JlYXRlckdyZWF0ZXInOidcXHUyMjZCXFx1MDMzOCcsJ05vdEdyZWF0ZXJMZXNzJzonXFx1MjI3OScsJ05vdEdyZWF0ZXJTbGFudEVxdWFsJzonXFx1MkE3RVxcdTAzMzgnLCdOb3RHcmVhdGVyVGlsZGUnOidcXHUyMjc1JywnTm90SHVtcERvd25IdW1wJzonXFx1MjI0RVxcdTAzMzgnLCdOb3RIdW1wRXF1YWwnOidcXHUyMjRGXFx1MDMzOCcsJ25vdGluJzonXFx1MjIwOScsJ25vdGluZG90JzonXFx1MjJGNVxcdTAzMzgnLCdub3RpbkUnOidcXHUyMkY5XFx1MDMzOCcsJ25vdGludmEnOidcXHUyMjA5Jywnbm90aW52Yic6J1xcdTIyRjcnLCdub3RpbnZjJzonXFx1MjJGNicsJ05vdExlZnRUcmlhbmdsZSc6J1xcdTIyRUEnLCdOb3RMZWZ0VHJpYW5nbGVCYXInOidcXHUyOUNGXFx1MDMzOCcsJ05vdExlZnRUcmlhbmdsZUVxdWFsJzonXFx1MjJFQycsJ05vdExlc3MnOidcXHUyMjZFJywnTm90TGVzc0VxdWFsJzonXFx1MjI3MCcsJ05vdExlc3NHcmVhdGVyJzonXFx1MjI3OCcsJ05vdExlc3NMZXNzJzonXFx1MjI2QVxcdTAzMzgnLCdOb3RMZXNzU2xhbnRFcXVhbCc6J1xcdTJBN0RcXHUwMzM4JywnTm90TGVzc1RpbGRlJzonXFx1MjI3NCcsJ05vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyJzonXFx1MkFBMlxcdTAzMzgnLCdOb3ROZXN0ZWRMZXNzTGVzcyc6J1xcdTJBQTFcXHUwMzM4Jywnbm90bmknOidcXHUyMjBDJywnbm90bml2YSc6J1xcdTIyMEMnLCdub3RuaXZiJzonXFx1MjJGRScsJ25vdG5pdmMnOidcXHUyMkZEJywnTm90UHJlY2VkZXMnOidcXHUyMjgwJywnTm90UHJlY2VkZXNFcXVhbCc6J1xcdTJBQUZcXHUwMzM4JywnTm90UHJlY2VkZXNTbGFudEVxdWFsJzonXFx1MjJFMCcsJ05vdFJldmVyc2VFbGVtZW50JzonXFx1MjIwQycsJ05vdFJpZ2h0VHJpYW5nbGUnOidcXHUyMkVCJywnTm90UmlnaHRUcmlhbmdsZUJhcic6J1xcdTI5RDBcXHUwMzM4JywnTm90UmlnaHRUcmlhbmdsZUVxdWFsJzonXFx1MjJFRCcsJ05vdFNxdWFyZVN1YnNldCc6J1xcdTIyOEZcXHUwMzM4JywnTm90U3F1YXJlU3Vic2V0RXF1YWwnOidcXHUyMkUyJywnTm90U3F1YXJlU3VwZXJzZXQnOidcXHUyMjkwXFx1MDMzOCcsJ05vdFNxdWFyZVN1cGVyc2V0RXF1YWwnOidcXHUyMkUzJywnTm90U3Vic2V0JzonXFx1MjI4MlxcdTIwRDInLCdOb3RTdWJzZXRFcXVhbCc6J1xcdTIyODgnLCdOb3RTdWNjZWVkcyc6J1xcdTIyODEnLCdOb3RTdWNjZWVkc0VxdWFsJzonXFx1MkFCMFxcdTAzMzgnLCdOb3RTdWNjZWVkc1NsYW50RXF1YWwnOidcXHUyMkUxJywnTm90U3VjY2VlZHNUaWxkZSc6J1xcdTIyN0ZcXHUwMzM4JywnTm90U3VwZXJzZXQnOidcXHUyMjgzXFx1MjBEMicsJ05vdFN1cGVyc2V0RXF1YWwnOidcXHUyMjg5JywnTm90VGlsZGUnOidcXHUyMjQxJywnTm90VGlsZGVFcXVhbCc6J1xcdTIyNDQnLCdOb3RUaWxkZUZ1bGxFcXVhbCc6J1xcdTIyNDcnLCdOb3RUaWxkZVRpbGRlJzonXFx1MjI0OScsJ05vdFZlcnRpY2FsQmFyJzonXFx1MjIyNCcsJ25wYXInOidcXHUyMjI2JywnbnBhcmFsbGVsJzonXFx1MjIyNicsJ25wYXJzbCc6J1xcdTJBRkRcXHUyMEU1JywnbnBhcnQnOidcXHUyMjAyXFx1MDMzOCcsJ25wb2xpbnQnOidcXHUyQTE0JywnbnByJzonXFx1MjI4MCcsJ25wcmN1ZSc6J1xcdTIyRTAnLCducHJlJzonXFx1MkFBRlxcdTAzMzgnLCducHJlYyc6J1xcdTIyODAnLCducHJlY2VxJzonXFx1MkFBRlxcdTAzMzgnLCducmFycic6J1xcdTIxOUInLCduckFycic6J1xcdTIxQ0YnLCducmFycmMnOidcXHUyOTMzXFx1MDMzOCcsJ25yYXJydyc6J1xcdTIxOURcXHUwMzM4JywnbnJpZ2h0YXJyb3cnOidcXHUyMTlCJywnblJpZ2h0YXJyb3cnOidcXHUyMUNGJywnbnJ0cmknOidcXHUyMkVCJywnbnJ0cmllJzonXFx1MjJFRCcsJ25zYyc6J1xcdTIyODEnLCduc2NjdWUnOidcXHUyMkUxJywnbnNjZSc6J1xcdTJBQjBcXHUwMzM4JywnbnNjcic6J1xcdUQ4MzVcXHVEQ0MzJywnTnNjcic6J1xcdUQ4MzVcXHVEQ0E5JywnbnNob3J0bWlkJzonXFx1MjIyNCcsJ25zaG9ydHBhcmFsbGVsJzonXFx1MjIyNicsJ25zaW0nOidcXHUyMjQxJywnbnNpbWUnOidcXHUyMjQ0JywnbnNpbWVxJzonXFx1MjI0NCcsJ25zbWlkJzonXFx1MjIyNCcsJ25zcGFyJzonXFx1MjIyNicsJ25zcXN1YmUnOidcXHUyMkUyJywnbnNxc3VwZSc6J1xcdTIyRTMnLCduc3ViJzonXFx1MjI4NCcsJ25zdWJlJzonXFx1MjI4OCcsJ25zdWJFJzonXFx1MkFDNVxcdTAzMzgnLCduc3Vic2V0JzonXFx1MjI4MlxcdTIwRDInLCduc3Vic2V0ZXEnOidcXHUyMjg4JywnbnN1YnNldGVxcSc6J1xcdTJBQzVcXHUwMzM4JywnbnN1Y2MnOidcXHUyMjgxJywnbnN1Y2NlcSc6J1xcdTJBQjBcXHUwMzM4JywnbnN1cCc6J1xcdTIyODUnLCduc3VwZSc6J1xcdTIyODknLCduc3VwRSc6J1xcdTJBQzZcXHUwMzM4JywnbnN1cHNldCc6J1xcdTIyODNcXHUyMEQyJywnbnN1cHNldGVxJzonXFx1MjI4OScsJ25zdXBzZXRlcXEnOidcXHUyQUM2XFx1MDMzOCcsJ250Z2wnOidcXHUyMjc5JywnbnRpbGRlJzonXFx4RjEnLCdOdGlsZGUnOidcXHhEMScsJ250bGcnOidcXHUyMjc4JywnbnRyaWFuZ2xlbGVmdCc6J1xcdTIyRUEnLCdudHJpYW5nbGVsZWZ0ZXEnOidcXHUyMkVDJywnbnRyaWFuZ2xlcmlnaHQnOidcXHUyMkVCJywnbnRyaWFuZ2xlcmlnaHRlcSc6J1xcdTIyRUQnLCdudSc6J1xcdTAzQkQnLCdOdSc6J1xcdTAzOUQnLCdudW0nOicjJywnbnVtZXJvJzonXFx1MjExNicsJ251bXNwJzonXFx1MjAwNycsJ252YXAnOidcXHUyMjREXFx1MjBEMicsJ252ZGFzaCc6J1xcdTIyQUMnLCdudkRhc2gnOidcXHUyMkFEJywnblZkYXNoJzonXFx1MjJBRScsJ25WRGFzaCc6J1xcdTIyQUYnLCdudmdlJzonXFx1MjI2NVxcdTIwRDInLCdudmd0JzonPlxcdTIwRDInLCdudkhhcnInOidcXHUyOTA0JywnbnZpbmZpbic6J1xcdTI5REUnLCdudmxBcnInOidcXHUyOTAyJywnbnZsZSc6J1xcdTIyNjRcXHUyMEQyJywnbnZsdCc6JzxcXHUyMEQyJywnbnZsdHJpZSc6J1xcdTIyQjRcXHUyMEQyJywnbnZyQXJyJzonXFx1MjkwMycsJ252cnRyaWUnOidcXHUyMkI1XFx1MjBEMicsJ252c2ltJzonXFx1MjIzQ1xcdTIwRDInLCdud2FyaGsnOidcXHUyOTIzJywnbndhcnInOidcXHUyMTk2JywnbndBcnInOidcXHUyMUQ2JywnbndhcnJvdyc6J1xcdTIxOTYnLCdud25lYXInOidcXHUyOTI3Jywnb2FjdXRlJzonXFx4RjMnLCdPYWN1dGUnOidcXHhEMycsJ29hc3QnOidcXHUyMjlCJywnb2Npcic6J1xcdTIyOUEnLCdvY2lyYyc6J1xceEY0JywnT2NpcmMnOidcXHhENCcsJ29jeSc6J1xcdTA0M0UnLCdPY3knOidcXHUwNDFFJywnb2Rhc2gnOidcXHUyMjlEJywnb2RibGFjJzonXFx1MDE1MScsJ09kYmxhYyc6J1xcdTAxNTAnLCdvZGl2JzonXFx1MkEzOCcsJ29kb3QnOidcXHUyMjk5Jywnb2Rzb2xkJzonXFx1MjlCQycsJ29lbGlnJzonXFx1MDE1MycsJ09FbGlnJzonXFx1MDE1MicsJ29mY2lyJzonXFx1MjlCRicsJ29mcic6J1xcdUQ4MzVcXHVERDJDJywnT2ZyJzonXFx1RDgzNVxcdUREMTInLCdvZ29uJzonXFx1MDJEQicsJ29ncmF2ZSc6J1xceEYyJywnT2dyYXZlJzonXFx4RDInLCdvZ3QnOidcXHUyOUMxJywnb2hiYXInOidcXHUyOUI1Jywnb2htJzonXFx1MDNBOScsJ29pbnQnOidcXHUyMjJFJywnb2xhcnInOidcXHUyMUJBJywnb2xjaXInOidcXHUyOUJFJywnb2xjcm9zcyc6J1xcdTI5QkInLCdvbGluZSc6J1xcdTIwM0UnLCdvbHQnOidcXHUyOUMwJywnb21hY3InOidcXHUwMTREJywnT21hY3InOidcXHUwMTRDJywnb21lZ2EnOidcXHUwM0M5JywnT21lZ2EnOidcXHUwM0E5Jywnb21pY3Jvbic6J1xcdTAzQkYnLCdPbWljcm9uJzonXFx1MDM5RicsJ29taWQnOidcXHUyOUI2Jywnb21pbnVzJzonXFx1MjI5NicsJ29vcGYnOidcXHVEODM1XFx1REQ2MCcsJ09vcGYnOidcXHVEODM1XFx1REQ0NicsJ29wYXInOidcXHUyOUI3JywnT3BlbkN1cmx5RG91YmxlUXVvdGUnOidcXHUyMDFDJywnT3BlbkN1cmx5UXVvdGUnOidcXHUyMDE4Jywnb3BlcnAnOidcXHUyOUI5Jywnb3BsdXMnOidcXHUyMjk1Jywnb3InOidcXHUyMjI4JywnT3InOidcXHUyQTU0Jywnb3JhcnInOidcXHUyMUJCJywnb3JkJzonXFx1MkE1RCcsJ29yZGVyJzonXFx1MjEzNCcsJ29yZGVyb2YnOidcXHUyMTM0Jywnb3JkZic6J1xceEFBJywnb3JkbSc6J1xceEJBJywnb3JpZ29mJzonXFx1MjJCNicsJ29yb3InOidcXHUyQTU2Jywnb3JzbG9wZSc6J1xcdTJBNTcnLCdvcnYnOidcXHUyQTVCJywnb1MnOidcXHUyNEM4Jywnb3Njcic6J1xcdTIxMzQnLCdPc2NyJzonXFx1RDgzNVxcdURDQUEnLCdvc2xhc2gnOidcXHhGOCcsJ09zbGFzaCc6J1xceEQ4Jywnb3NvbCc6J1xcdTIyOTgnLCdvdGlsZGUnOidcXHhGNScsJ090aWxkZSc6J1xceEQ1Jywnb3RpbWVzJzonXFx1MjI5NycsJ090aW1lcyc6J1xcdTJBMzcnLCdvdGltZXNhcyc6J1xcdTJBMzYnLCdvdW1sJzonXFx4RjYnLCdPdW1sJzonXFx4RDYnLCdvdmJhcic6J1xcdTIzM0QnLCdPdmVyQmFyJzonXFx1MjAzRScsJ092ZXJCcmFjZSc6J1xcdTIzREUnLCdPdmVyQnJhY2tldCc6J1xcdTIzQjQnLCdPdmVyUGFyZW50aGVzaXMnOidcXHUyM0RDJywncGFyJzonXFx1MjIyNScsJ3BhcmEnOidcXHhCNicsJ3BhcmFsbGVsJzonXFx1MjIyNScsJ3BhcnNpbSc6J1xcdTJBRjMnLCdwYXJzbCc6J1xcdTJBRkQnLCdwYXJ0JzonXFx1MjIwMicsJ1BhcnRpYWxEJzonXFx1MjIwMicsJ3BjeSc6J1xcdTA0M0YnLCdQY3knOidcXHUwNDFGJywncGVyY250JzonJScsJ3BlcmlvZCc6Jy4nLCdwZXJtaWwnOidcXHUyMDMwJywncGVycCc6J1xcdTIyQTUnLCdwZXJ0ZW5rJzonXFx1MjAzMScsJ3Bmcic6J1xcdUQ4MzVcXHVERDJEJywnUGZyJzonXFx1RDgzNVxcdUREMTMnLCdwaGknOidcXHUwM0M2JywnUGhpJzonXFx1MDNBNicsJ3BoaXYnOidcXHUwM0Q1JywncGhtbWF0JzonXFx1MjEzMycsJ3Bob25lJzonXFx1MjYwRScsJ3BpJzonXFx1MDNDMCcsJ1BpJzonXFx1MDNBMCcsJ3BpdGNoZm9yayc6J1xcdTIyRDQnLCdwaXYnOidcXHUwM0Q2JywncGxhbmNrJzonXFx1MjEwRicsJ3BsYW5ja2gnOidcXHUyMTBFJywncGxhbmt2JzonXFx1MjEwRicsJ3BsdXMnOicrJywncGx1c2FjaXInOidcXHUyQTIzJywncGx1c2InOidcXHUyMjlFJywncGx1c2Npcic6J1xcdTJBMjInLCdwbHVzZG8nOidcXHUyMjE0JywncGx1c2R1JzonXFx1MkEyNScsJ3BsdXNlJzonXFx1MkE3MicsJ1BsdXNNaW51cyc6J1xceEIxJywncGx1c21uJzonXFx4QjEnLCdwbHVzc2ltJzonXFx1MkEyNicsJ3BsdXN0d28nOidcXHUyQTI3JywncG0nOidcXHhCMScsJ1BvaW5jYXJlcGxhbmUnOidcXHUyMTBDJywncG9pbnRpbnQnOidcXHUyQTE1JywncG9wZic6J1xcdUQ4MzVcXHVERDYxJywnUG9wZic6J1xcdTIxMTknLCdwb3VuZCc6J1xceEEzJywncHInOidcXHUyMjdBJywnUHInOidcXHUyQUJCJywncHJhcCc6J1xcdTJBQjcnLCdwcmN1ZSc6J1xcdTIyN0MnLCdwcmUnOidcXHUyQUFGJywncHJFJzonXFx1MkFCMycsJ3ByZWMnOidcXHUyMjdBJywncHJlY2FwcHJveCc6J1xcdTJBQjcnLCdwcmVjY3VybHllcSc6J1xcdTIyN0MnLCdQcmVjZWRlcyc6J1xcdTIyN0EnLCdQcmVjZWRlc0VxdWFsJzonXFx1MkFBRicsJ1ByZWNlZGVzU2xhbnRFcXVhbCc6J1xcdTIyN0MnLCdQcmVjZWRlc1RpbGRlJzonXFx1MjI3RScsJ3ByZWNlcSc6J1xcdTJBQUYnLCdwcmVjbmFwcHJveCc6J1xcdTJBQjknLCdwcmVjbmVxcSc6J1xcdTJBQjUnLCdwcmVjbnNpbSc6J1xcdTIyRTgnLCdwcmVjc2ltJzonXFx1MjI3RScsJ3ByaW1lJzonXFx1MjAzMicsJ1ByaW1lJzonXFx1MjAzMycsJ3ByaW1lcyc6J1xcdTIxMTknLCdwcm5hcCc6J1xcdTJBQjknLCdwcm5FJzonXFx1MkFCNScsJ3BybnNpbSc6J1xcdTIyRTgnLCdwcm9kJzonXFx1MjIwRicsJ1Byb2R1Y3QnOidcXHUyMjBGJywncHJvZmFsYXInOidcXHUyMzJFJywncHJvZmxpbmUnOidcXHUyMzEyJywncHJvZnN1cmYnOidcXHUyMzEzJywncHJvcCc6J1xcdTIyMUQnLCdQcm9wb3J0aW9uJzonXFx1MjIzNycsJ1Byb3BvcnRpb25hbCc6J1xcdTIyMUQnLCdwcm9wdG8nOidcXHUyMjFEJywncHJzaW0nOidcXHUyMjdFJywncHJ1cmVsJzonXFx1MjJCMCcsJ3BzY3InOidcXHVEODM1XFx1RENDNScsJ1BzY3InOidcXHVEODM1XFx1RENBQicsJ3BzaSc6J1xcdTAzQzgnLCdQc2knOidcXHUwM0E4JywncHVuY3NwJzonXFx1MjAwOCcsJ3Fmcic6J1xcdUQ4MzVcXHVERDJFJywnUWZyJzonXFx1RDgzNVxcdUREMTQnLCdxaW50JzonXFx1MkEwQycsJ3FvcGYnOidcXHVEODM1XFx1REQ2MicsJ1FvcGYnOidcXHUyMTFBJywncXByaW1lJzonXFx1MjA1NycsJ3FzY3InOidcXHVEODM1XFx1RENDNicsJ1FzY3InOidcXHVEODM1XFx1RENBQycsJ3F1YXRlcm5pb25zJzonXFx1MjEwRCcsJ3F1YXRpbnQnOidcXHUyQTE2JywncXVlc3QnOic/JywncXVlc3RlcSc6J1xcdTIyNUYnLCdxdW90JzonXCInLCdRVU9UJzonXCInLCdyQWFycic6J1xcdTIxREInLCdyYWNlJzonXFx1MjIzRFxcdTAzMzEnLCdyYWN1dGUnOidcXHUwMTU1JywnUmFjdXRlJzonXFx1MDE1NCcsJ3JhZGljJzonXFx1MjIxQScsJ3JhZW1wdHl2JzonXFx1MjlCMycsJ3JhbmcnOidcXHUyN0U5JywnUmFuZyc6J1xcdTI3RUInLCdyYW5nZCc6J1xcdTI5OTInLCdyYW5nZSc6J1xcdTI5QTUnLCdyYW5nbGUnOidcXHUyN0U5JywncmFxdW8nOidcXHhCQicsJ3JhcnInOidcXHUyMTkyJywnckFycic6J1xcdTIxRDInLCdSYXJyJzonXFx1MjFBMCcsJ3JhcnJhcCc6J1xcdTI5NzUnLCdyYXJyYic6J1xcdTIxRTUnLCdyYXJyYmZzJzonXFx1MjkyMCcsJ3JhcnJjJzonXFx1MjkzMycsJ3JhcnJmcyc6J1xcdTI5MUUnLCdyYXJyaGsnOidcXHUyMUFBJywncmFycmxwJzonXFx1MjFBQycsJ3JhcnJwbCc6J1xcdTI5NDUnLCdyYXJyc2ltJzonXFx1Mjk3NCcsJ3JhcnJ0bCc6J1xcdTIxQTMnLCdSYXJydGwnOidcXHUyOTE2JywncmFycncnOidcXHUyMTlEJywncmF0YWlsJzonXFx1MjkxQScsJ3JBdGFpbCc6J1xcdTI5MUMnLCdyYXRpbyc6J1xcdTIyMzYnLCdyYXRpb25hbHMnOidcXHUyMTFBJywncmJhcnInOidcXHUyOTBEJywnckJhcnInOidcXHUyOTBGJywnUkJhcnInOidcXHUyOTEwJywncmJicmsnOidcXHUyNzczJywncmJyYWNlJzonfScsJ3JicmFjayc6J10nLCdyYnJrZSc6J1xcdTI5OEMnLCdyYnJrc2xkJzonXFx1Mjk4RScsJ3JicmtzbHUnOidcXHUyOTkwJywncmNhcm9uJzonXFx1MDE1OScsJ1JjYXJvbic6J1xcdTAxNTgnLCdyY2VkaWwnOidcXHUwMTU3JywnUmNlZGlsJzonXFx1MDE1NicsJ3JjZWlsJzonXFx1MjMwOScsJ3JjdWInOid9JywncmN5JzonXFx1MDQ0MCcsJ1JjeSc6J1xcdTA0MjAnLCdyZGNhJzonXFx1MjkzNycsJ3JkbGRoYXInOidcXHUyOTY5JywncmRxdW8nOidcXHUyMDFEJywncmRxdW9yJzonXFx1MjAxRCcsJ3Jkc2gnOidcXHUyMUIzJywnUmUnOidcXHUyMTFDJywncmVhbCc6J1xcdTIxMUMnLCdyZWFsaW5lJzonXFx1MjExQicsJ3JlYWxwYXJ0JzonXFx1MjExQycsJ3JlYWxzJzonXFx1MjExRCcsJ3JlY3QnOidcXHUyNUFEJywncmVnJzonXFx4QUUnLCdSRUcnOidcXHhBRScsJ1JldmVyc2VFbGVtZW50JzonXFx1MjIwQicsJ1JldmVyc2VFcXVpbGlicml1bSc6J1xcdTIxQ0InLCdSZXZlcnNlVXBFcXVpbGlicml1bSc6J1xcdTI5NkYnLCdyZmlzaHQnOidcXHUyOTdEJywncmZsb29yJzonXFx1MjMwQicsJ3Jmcic6J1xcdUQ4MzVcXHVERDJGJywnUmZyJzonXFx1MjExQycsJ3JIYXInOidcXHUyOTY0JywncmhhcmQnOidcXHUyMUMxJywncmhhcnUnOidcXHUyMUMwJywncmhhcnVsJzonXFx1Mjk2QycsJ3Jobyc6J1xcdTAzQzEnLCdSaG8nOidcXHUwM0ExJywncmhvdic6J1xcdTAzRjEnLCdSaWdodEFuZ2xlQnJhY2tldCc6J1xcdTI3RTknLCdyaWdodGFycm93JzonXFx1MjE5MicsJ1JpZ2h0YXJyb3cnOidcXHUyMUQyJywnUmlnaHRBcnJvdyc6J1xcdTIxOTInLCdSaWdodEFycm93QmFyJzonXFx1MjFFNScsJ1JpZ2h0QXJyb3dMZWZ0QXJyb3cnOidcXHUyMUM0JywncmlnaHRhcnJvd3RhaWwnOidcXHUyMUEzJywnUmlnaHRDZWlsaW5nJzonXFx1MjMwOScsJ1JpZ2h0RG91YmxlQnJhY2tldCc6J1xcdTI3RTcnLCdSaWdodERvd25UZWVWZWN0b3InOidcXHUyOTVEJywnUmlnaHREb3duVmVjdG9yJzonXFx1MjFDMicsJ1JpZ2h0RG93blZlY3RvckJhcic6J1xcdTI5NTUnLCdSaWdodEZsb29yJzonXFx1MjMwQicsJ3JpZ2h0aGFycG9vbmRvd24nOidcXHUyMUMxJywncmlnaHRoYXJwb29udXAnOidcXHUyMUMwJywncmlnaHRsZWZ0YXJyb3dzJzonXFx1MjFDNCcsJ3JpZ2h0bGVmdGhhcnBvb25zJzonXFx1MjFDQycsJ3JpZ2h0cmlnaHRhcnJvd3MnOidcXHUyMUM5JywncmlnaHRzcXVpZ2Fycm93JzonXFx1MjE5RCcsJ1JpZ2h0VGVlJzonXFx1MjJBMicsJ1JpZ2h0VGVlQXJyb3cnOidcXHUyMUE2JywnUmlnaHRUZWVWZWN0b3InOidcXHUyOTVCJywncmlnaHR0aHJlZXRpbWVzJzonXFx1MjJDQycsJ1JpZ2h0VHJpYW5nbGUnOidcXHUyMkIzJywnUmlnaHRUcmlhbmdsZUJhcic6J1xcdTI5RDAnLCdSaWdodFRyaWFuZ2xlRXF1YWwnOidcXHUyMkI1JywnUmlnaHRVcERvd25WZWN0b3InOidcXHUyOTRGJywnUmlnaHRVcFRlZVZlY3Rvcic6J1xcdTI5NUMnLCdSaWdodFVwVmVjdG9yJzonXFx1MjFCRScsJ1JpZ2h0VXBWZWN0b3JCYXInOidcXHUyOTU0JywnUmlnaHRWZWN0b3InOidcXHUyMUMwJywnUmlnaHRWZWN0b3JCYXInOidcXHUyOTUzJywncmluZyc6J1xcdTAyREEnLCdyaXNpbmdkb3RzZXEnOidcXHUyMjUzJywncmxhcnInOidcXHUyMUM0JywncmxoYXInOidcXHUyMUNDJywncmxtJzonXFx1MjAwRicsJ3Jtb3VzdCc6J1xcdTIzQjEnLCdybW91c3RhY2hlJzonXFx1MjNCMScsJ3JubWlkJzonXFx1MkFFRScsJ3JvYW5nJzonXFx1MjdFRCcsJ3JvYXJyJzonXFx1MjFGRScsJ3JvYnJrJzonXFx1MjdFNycsJ3JvcGFyJzonXFx1Mjk4NicsJ3JvcGYnOidcXHVEODM1XFx1REQ2MycsJ1JvcGYnOidcXHUyMTFEJywncm9wbHVzJzonXFx1MkEyRScsJ3JvdGltZXMnOidcXHUyQTM1JywnUm91bmRJbXBsaWVzJzonXFx1Mjk3MCcsJ3JwYXInOicpJywncnBhcmd0JzonXFx1Mjk5NCcsJ3JwcG9saW50JzonXFx1MkExMicsJ3JyYXJyJzonXFx1MjFDOScsJ1JyaWdodGFycm93JzonXFx1MjFEQicsJ3JzYXF1byc6J1xcdTIwM0EnLCdyc2NyJzonXFx1RDgzNVxcdURDQzcnLCdSc2NyJzonXFx1MjExQicsJ3JzaCc6J1xcdTIxQjEnLCdSc2gnOidcXHUyMUIxJywncnNxYic6J10nLCdyc3F1byc6J1xcdTIwMTknLCdyc3F1b3InOidcXHUyMDE5JywncnRocmVlJzonXFx1MjJDQycsJ3J0aW1lcyc6J1xcdTIyQ0EnLCdydHJpJzonXFx1MjVCOScsJ3J0cmllJzonXFx1MjJCNScsJ3J0cmlmJzonXFx1MjVCOCcsJ3J0cmlsdHJpJzonXFx1MjlDRScsJ1J1bGVEZWxheWVkJzonXFx1MjlGNCcsJ3J1bHVoYXInOidcXHUyOTY4JywncngnOidcXHUyMTFFJywnc2FjdXRlJzonXFx1MDE1QicsJ1NhY3V0ZSc6J1xcdTAxNUEnLCdzYnF1byc6J1xcdTIwMUEnLCdzYyc6J1xcdTIyN0InLCdTYyc6J1xcdTJBQkMnLCdzY2FwJzonXFx1MkFCOCcsJ3NjYXJvbic6J1xcdTAxNjEnLCdTY2Fyb24nOidcXHUwMTYwJywnc2NjdWUnOidcXHUyMjdEJywnc2NlJzonXFx1MkFCMCcsJ3NjRSc6J1xcdTJBQjQnLCdzY2VkaWwnOidcXHUwMTVGJywnU2NlZGlsJzonXFx1MDE1RScsJ3NjaXJjJzonXFx1MDE1RCcsJ1NjaXJjJzonXFx1MDE1QycsJ3NjbmFwJzonXFx1MkFCQScsJ3NjbkUnOidcXHUyQUI2Jywnc2Nuc2ltJzonXFx1MjJFOScsJ3NjcG9saW50JzonXFx1MkExMycsJ3Njc2ltJzonXFx1MjI3RicsJ3NjeSc6J1xcdTA0NDEnLCdTY3knOidcXHUwNDIxJywnc2RvdCc6J1xcdTIyQzUnLCdzZG90Yic6J1xcdTIyQTEnLCdzZG90ZSc6J1xcdTJBNjYnLCdzZWFyaGsnOidcXHUyOTI1Jywnc2VhcnInOidcXHUyMTk4Jywnc2VBcnInOidcXHUyMUQ4Jywnc2VhcnJvdyc6J1xcdTIxOTgnLCdzZWN0JzonXFx4QTcnLCdzZW1pJzonOycsJ3Nlc3dhcic6J1xcdTI5MjknLCdzZXRtaW51cyc6J1xcdTIyMTYnLCdzZXRtbic6J1xcdTIyMTYnLCdzZXh0JzonXFx1MjczNicsJ3Nmcic6J1xcdUQ4MzVcXHVERDMwJywnU2ZyJzonXFx1RDgzNVxcdUREMTYnLCdzZnJvd24nOidcXHUyMzIyJywnc2hhcnAnOidcXHUyNjZGJywnc2hjaGN5JzonXFx1MDQ0OScsJ1NIQ0hjeSc6J1xcdTA0MjknLCdzaGN5JzonXFx1MDQ0OCcsJ1NIY3knOidcXHUwNDI4JywnU2hvcnREb3duQXJyb3cnOidcXHUyMTkzJywnU2hvcnRMZWZ0QXJyb3cnOidcXHUyMTkwJywnc2hvcnRtaWQnOidcXHUyMjIzJywnc2hvcnRwYXJhbGxlbCc6J1xcdTIyMjUnLCdTaG9ydFJpZ2h0QXJyb3cnOidcXHUyMTkyJywnU2hvcnRVcEFycm93JzonXFx1MjE5MScsJ3NoeSc6J1xceEFEJywnc2lnbWEnOidcXHUwM0MzJywnU2lnbWEnOidcXHUwM0EzJywnc2lnbWFmJzonXFx1MDNDMicsJ3NpZ21hdic6J1xcdTAzQzInLCdzaW0nOidcXHUyMjNDJywnc2ltZG90JzonXFx1MkE2QScsJ3NpbWUnOidcXHUyMjQzJywnc2ltZXEnOidcXHUyMjQzJywnc2ltZyc6J1xcdTJBOUUnLCdzaW1nRSc6J1xcdTJBQTAnLCdzaW1sJzonXFx1MkE5RCcsJ3NpbWxFJzonXFx1MkE5RicsJ3NpbW5lJzonXFx1MjI0NicsJ3NpbXBsdXMnOidcXHUyQTI0Jywnc2ltcmFycic6J1xcdTI5NzInLCdzbGFycic6J1xcdTIxOTAnLCdTbWFsbENpcmNsZSc6J1xcdTIyMTgnLCdzbWFsbHNldG1pbnVzJzonXFx1MjIxNicsJ3NtYXNocCc6J1xcdTJBMzMnLCdzbWVwYXJzbCc6J1xcdTI5RTQnLCdzbWlkJzonXFx1MjIyMycsJ3NtaWxlJzonXFx1MjMyMycsJ3NtdCc6J1xcdTJBQUEnLCdzbXRlJzonXFx1MkFBQycsJ3NtdGVzJzonXFx1MkFBQ1xcdUZFMDAnLCdzb2Z0Y3knOidcXHUwNDRDJywnU09GVGN5JzonXFx1MDQyQycsJ3NvbCc6Jy8nLCdzb2xiJzonXFx1MjlDNCcsJ3NvbGJhcic6J1xcdTIzM0YnLCdzb3BmJzonXFx1RDgzNVxcdURENjQnLCdTb3BmJzonXFx1RDgzNVxcdURENEEnLCdzcGFkZXMnOidcXHUyNjYwJywnc3BhZGVzdWl0JzonXFx1MjY2MCcsJ3NwYXInOidcXHUyMjI1Jywnc3FjYXAnOidcXHUyMjkzJywnc3FjYXBzJzonXFx1MjI5M1xcdUZFMDAnLCdzcWN1cCc6J1xcdTIyOTQnLCdzcWN1cHMnOidcXHUyMjk0XFx1RkUwMCcsJ1NxcnQnOidcXHUyMjFBJywnc3FzdWInOidcXHUyMjhGJywnc3FzdWJlJzonXFx1MjI5MScsJ3Nxc3Vic2V0JzonXFx1MjI4RicsJ3Nxc3Vic2V0ZXEnOidcXHUyMjkxJywnc3FzdXAnOidcXHUyMjkwJywnc3FzdXBlJzonXFx1MjI5MicsJ3Nxc3Vwc2V0JzonXFx1MjI5MCcsJ3Nxc3Vwc2V0ZXEnOidcXHUyMjkyJywnc3F1JzonXFx1MjVBMScsJ3NxdWFyZSc6J1xcdTI1QTEnLCdTcXVhcmUnOidcXHUyNUExJywnU3F1YXJlSW50ZXJzZWN0aW9uJzonXFx1MjI5MycsJ1NxdWFyZVN1YnNldCc6J1xcdTIyOEYnLCdTcXVhcmVTdWJzZXRFcXVhbCc6J1xcdTIyOTEnLCdTcXVhcmVTdXBlcnNldCc6J1xcdTIyOTAnLCdTcXVhcmVTdXBlcnNldEVxdWFsJzonXFx1MjI5MicsJ1NxdWFyZVVuaW9uJzonXFx1MjI5NCcsJ3NxdWFyZic6J1xcdTI1QUEnLCdzcXVmJzonXFx1MjVBQScsJ3NyYXJyJzonXFx1MjE5MicsJ3NzY3InOidcXHVEODM1XFx1RENDOCcsJ1NzY3InOidcXHVEODM1XFx1RENBRScsJ3NzZXRtbic6J1xcdTIyMTYnLCdzc21pbGUnOidcXHUyMzIzJywnc3N0YXJmJzonXFx1MjJDNicsJ3N0YXInOidcXHUyNjA2JywnU3Rhcic6J1xcdTIyQzYnLCdzdGFyZic6J1xcdTI2MDUnLCdzdHJhaWdodGVwc2lsb24nOidcXHUwM0Y1Jywnc3RyYWlnaHRwaGknOidcXHUwM0Q1Jywnc3RybnMnOidcXHhBRicsJ3N1Yic6J1xcdTIyODInLCdTdWInOidcXHUyMkQwJywnc3ViZG90JzonXFx1MkFCRCcsJ3N1YmUnOidcXHUyMjg2Jywnc3ViRSc6J1xcdTJBQzUnLCdzdWJlZG90JzonXFx1MkFDMycsJ3N1Ym11bHQnOidcXHUyQUMxJywnc3VibmUnOidcXHUyMjhBJywnc3VibkUnOidcXHUyQUNCJywnc3VicGx1cyc6J1xcdTJBQkYnLCdzdWJyYXJyJzonXFx1Mjk3OScsJ3N1YnNldCc6J1xcdTIyODInLCdTdWJzZXQnOidcXHUyMkQwJywnc3Vic2V0ZXEnOidcXHUyMjg2Jywnc3Vic2V0ZXFxJzonXFx1MkFDNScsJ1N1YnNldEVxdWFsJzonXFx1MjI4NicsJ3N1YnNldG5lcSc6J1xcdTIyOEEnLCdzdWJzZXRuZXFxJzonXFx1MkFDQicsJ3N1YnNpbSc6J1xcdTJBQzcnLCdzdWJzdWInOidcXHUyQUQ1Jywnc3Vic3VwJzonXFx1MkFEMycsJ3N1Y2MnOidcXHUyMjdCJywnc3VjY2FwcHJveCc6J1xcdTJBQjgnLCdzdWNjY3VybHllcSc6J1xcdTIyN0QnLCdTdWNjZWVkcyc6J1xcdTIyN0InLCdTdWNjZWVkc0VxdWFsJzonXFx1MkFCMCcsJ1N1Y2NlZWRzU2xhbnRFcXVhbCc6J1xcdTIyN0QnLCdTdWNjZWVkc1RpbGRlJzonXFx1MjI3RicsJ3N1Y2NlcSc6J1xcdTJBQjAnLCdzdWNjbmFwcHJveCc6J1xcdTJBQkEnLCdzdWNjbmVxcSc6J1xcdTJBQjYnLCdzdWNjbnNpbSc6J1xcdTIyRTknLCdzdWNjc2ltJzonXFx1MjI3RicsJ1N1Y2hUaGF0JzonXFx1MjIwQicsJ3N1bSc6J1xcdTIyMTEnLCdTdW0nOidcXHUyMjExJywnc3VuZyc6J1xcdTI2NkEnLCdzdXAnOidcXHUyMjgzJywnU3VwJzonXFx1MjJEMScsJ3N1cDEnOidcXHhCOScsJ3N1cDInOidcXHhCMicsJ3N1cDMnOidcXHhCMycsJ3N1cGRvdCc6J1xcdTJBQkUnLCdzdXBkc3ViJzonXFx1MkFEOCcsJ3N1cGUnOidcXHUyMjg3Jywnc3VwRSc6J1xcdTJBQzYnLCdzdXBlZG90JzonXFx1MkFDNCcsJ1N1cGVyc2V0JzonXFx1MjI4MycsJ1N1cGVyc2V0RXF1YWwnOidcXHUyMjg3Jywnc3VwaHNvbCc6J1xcdTI3QzknLCdzdXBoc3ViJzonXFx1MkFENycsJ3N1cGxhcnInOidcXHUyOTdCJywnc3VwbXVsdCc6J1xcdTJBQzInLCdzdXBuZSc6J1xcdTIyOEInLCdzdXBuRSc6J1xcdTJBQ0MnLCdzdXBwbHVzJzonXFx1MkFDMCcsJ3N1cHNldCc6J1xcdTIyODMnLCdTdXBzZXQnOidcXHUyMkQxJywnc3Vwc2V0ZXEnOidcXHUyMjg3Jywnc3Vwc2V0ZXFxJzonXFx1MkFDNicsJ3N1cHNldG5lcSc6J1xcdTIyOEInLCdzdXBzZXRuZXFxJzonXFx1MkFDQycsJ3N1cHNpbSc6J1xcdTJBQzgnLCdzdXBzdWInOidcXHUyQUQ0Jywnc3Vwc3VwJzonXFx1MkFENicsJ3N3YXJoayc6J1xcdTI5MjYnLCdzd2Fycic6J1xcdTIxOTknLCdzd0Fycic6J1xcdTIxRDknLCdzd2Fycm93JzonXFx1MjE5OScsJ3N3bndhcic6J1xcdTI5MkEnLCdzemxpZyc6J1xceERGJywnVGFiJzonXFx0JywndGFyZ2V0JzonXFx1MjMxNicsJ3RhdSc6J1xcdTAzQzQnLCdUYXUnOidcXHUwM0E0JywndGJyayc6J1xcdTIzQjQnLCd0Y2Fyb24nOidcXHUwMTY1JywnVGNhcm9uJzonXFx1MDE2NCcsJ3RjZWRpbCc6J1xcdTAxNjMnLCdUY2VkaWwnOidcXHUwMTYyJywndGN5JzonXFx1MDQ0MicsJ1RjeSc6J1xcdTA0MjInLCd0ZG90JzonXFx1MjBEQicsJ3RlbHJlYyc6J1xcdTIzMTUnLCd0ZnInOidcXHVEODM1XFx1REQzMScsJ1Rmcic6J1xcdUQ4MzVcXHVERDE3JywndGhlcmU0JzonXFx1MjIzNCcsJ3RoZXJlZm9yZSc6J1xcdTIyMzQnLCdUaGVyZWZvcmUnOidcXHUyMjM0JywndGhldGEnOidcXHUwM0I4JywnVGhldGEnOidcXHUwMzk4JywndGhldGFzeW0nOidcXHUwM0QxJywndGhldGF2JzonXFx1MDNEMScsJ3RoaWNrYXBwcm94JzonXFx1MjI0OCcsJ3RoaWNrc2ltJzonXFx1MjIzQycsJ1RoaWNrU3BhY2UnOidcXHUyMDVGXFx1MjAwQScsJ3RoaW5zcCc6J1xcdTIwMDknLCdUaGluU3BhY2UnOidcXHUyMDA5JywndGhrYXAnOidcXHUyMjQ4JywndGhrc2ltJzonXFx1MjIzQycsJ3Rob3JuJzonXFx4RkUnLCdUSE9STic6J1xceERFJywndGlsZGUnOidcXHUwMkRDJywnVGlsZGUnOidcXHUyMjNDJywnVGlsZGVFcXVhbCc6J1xcdTIyNDMnLCdUaWxkZUZ1bGxFcXVhbCc6J1xcdTIyNDUnLCdUaWxkZVRpbGRlJzonXFx1MjI0OCcsJ3RpbWVzJzonXFx4RDcnLCd0aW1lc2InOidcXHUyMkEwJywndGltZXNiYXInOidcXHUyQTMxJywndGltZXNkJzonXFx1MkEzMCcsJ3RpbnQnOidcXHUyMjJEJywndG9lYSc6J1xcdTI5MjgnLCd0b3AnOidcXHUyMkE0JywndG9wYm90JzonXFx1MjMzNicsJ3RvcGNpcic6J1xcdTJBRjEnLCd0b3BmJzonXFx1RDgzNVxcdURENjUnLCdUb3BmJzonXFx1RDgzNVxcdURENEInLCd0b3Bmb3JrJzonXFx1MkFEQScsJ3Rvc2EnOidcXHUyOTI5JywndHByaW1lJzonXFx1MjAzNCcsJ3RyYWRlJzonXFx1MjEyMicsJ1RSQURFJzonXFx1MjEyMicsJ3RyaWFuZ2xlJzonXFx1MjVCNScsJ3RyaWFuZ2xlZG93bic6J1xcdTI1QkYnLCd0cmlhbmdsZWxlZnQnOidcXHUyNUMzJywndHJpYW5nbGVsZWZ0ZXEnOidcXHUyMkI0JywndHJpYW5nbGVxJzonXFx1MjI1QycsJ3RyaWFuZ2xlcmlnaHQnOidcXHUyNUI5JywndHJpYW5nbGVyaWdodGVxJzonXFx1MjJCNScsJ3RyaWRvdCc6J1xcdTI1RUMnLCd0cmllJzonXFx1MjI1QycsJ3RyaW1pbnVzJzonXFx1MkEzQScsJ1RyaXBsZURvdCc6J1xcdTIwREInLCd0cmlwbHVzJzonXFx1MkEzOScsJ3RyaXNiJzonXFx1MjlDRCcsJ3RyaXRpbWUnOidcXHUyQTNCJywndHJwZXppdW0nOidcXHUyM0UyJywndHNjcic6J1xcdUQ4MzVcXHVEQ0M5JywnVHNjcic6J1xcdUQ4MzVcXHVEQ0FGJywndHNjeSc6J1xcdTA0NDYnLCdUU2N5JzonXFx1MDQyNicsJ3RzaGN5JzonXFx1MDQ1QicsJ1RTSGN5JzonXFx1MDQwQicsJ3RzdHJvayc6J1xcdTAxNjcnLCdUc3Ryb2snOidcXHUwMTY2JywndHdpeHQnOidcXHUyMjZDJywndHdvaGVhZGxlZnRhcnJvdyc6J1xcdTIxOUUnLCd0d29oZWFkcmlnaHRhcnJvdyc6J1xcdTIxQTAnLCd1YWN1dGUnOidcXHhGQScsJ1VhY3V0ZSc6J1xceERBJywndWFycic6J1xcdTIxOTEnLCd1QXJyJzonXFx1MjFEMScsJ1VhcnInOidcXHUyMTlGJywnVWFycm9jaXInOidcXHUyOTQ5JywndWJyY3knOidcXHUwNDVFJywnVWJyY3knOidcXHUwNDBFJywndWJyZXZlJzonXFx1MDE2RCcsJ1VicmV2ZSc6J1xcdTAxNkMnLCd1Y2lyYyc6J1xceEZCJywnVWNpcmMnOidcXHhEQicsJ3VjeSc6J1xcdTA0NDMnLCdVY3knOidcXHUwNDIzJywndWRhcnInOidcXHUyMUM1JywndWRibGFjJzonXFx1MDE3MScsJ1VkYmxhYyc6J1xcdTAxNzAnLCd1ZGhhcic6J1xcdTI5NkUnLCd1ZmlzaHQnOidcXHUyOTdFJywndWZyJzonXFx1RDgzNVxcdUREMzInLCdVZnInOidcXHVEODM1XFx1REQxOCcsJ3VncmF2ZSc6J1xceEY5JywnVWdyYXZlJzonXFx4RDknLCd1SGFyJzonXFx1Mjk2MycsJ3VoYXJsJzonXFx1MjFCRicsJ3VoYXJyJzonXFx1MjFCRScsJ3VoYmxrJzonXFx1MjU4MCcsJ3VsY29ybic6J1xcdTIzMUMnLCd1bGNvcm5lcic6J1xcdTIzMUMnLCd1bGNyb3AnOidcXHUyMzBGJywndWx0cmknOidcXHUyNUY4JywndW1hY3InOidcXHUwMTZCJywnVW1hY3InOidcXHUwMTZBJywndW1sJzonXFx4QTgnLCdVbmRlckJhcic6J18nLCdVbmRlckJyYWNlJzonXFx1MjNERicsJ1VuZGVyQnJhY2tldCc6J1xcdTIzQjUnLCdVbmRlclBhcmVudGhlc2lzJzonXFx1MjNERCcsJ1VuaW9uJzonXFx1MjJDMycsJ1VuaW9uUGx1cyc6J1xcdTIyOEUnLCd1b2dvbic6J1xcdTAxNzMnLCdVb2dvbic6J1xcdTAxNzInLCd1b3BmJzonXFx1RDgzNVxcdURENjYnLCdVb3BmJzonXFx1RDgzNVxcdURENEMnLCd1cGFycm93JzonXFx1MjE5MScsJ1VwYXJyb3cnOidcXHUyMUQxJywnVXBBcnJvdyc6J1xcdTIxOTEnLCdVcEFycm93QmFyJzonXFx1MjkxMicsJ1VwQXJyb3dEb3duQXJyb3cnOidcXHUyMUM1JywndXBkb3duYXJyb3cnOidcXHUyMTk1JywnVXBkb3duYXJyb3cnOidcXHUyMUQ1JywnVXBEb3duQXJyb3cnOidcXHUyMTk1JywnVXBFcXVpbGlicml1bSc6J1xcdTI5NkUnLCd1cGhhcnBvb25sZWZ0JzonXFx1MjFCRicsJ3VwaGFycG9vbnJpZ2h0JzonXFx1MjFCRScsJ3VwbHVzJzonXFx1MjI4RScsJ1VwcGVyTGVmdEFycm93JzonXFx1MjE5NicsJ1VwcGVyUmlnaHRBcnJvdyc6J1xcdTIxOTcnLCd1cHNpJzonXFx1MDNDNScsJ1Vwc2knOidcXHUwM0QyJywndXBzaWgnOidcXHUwM0QyJywndXBzaWxvbic6J1xcdTAzQzUnLCdVcHNpbG9uJzonXFx1MDNBNScsJ1VwVGVlJzonXFx1MjJBNScsJ1VwVGVlQXJyb3cnOidcXHUyMUE1JywndXB1cGFycm93cyc6J1xcdTIxQzgnLCd1cmNvcm4nOidcXHUyMzFEJywndXJjb3JuZXInOidcXHUyMzFEJywndXJjcm9wJzonXFx1MjMwRScsJ3VyaW5nJzonXFx1MDE2RicsJ1VyaW5nJzonXFx1MDE2RScsJ3VydHJpJzonXFx1MjVGOScsJ3VzY3InOidcXHVEODM1XFx1RENDQScsJ1VzY3InOidcXHVEODM1XFx1RENCMCcsJ3V0ZG90JzonXFx1MjJGMCcsJ3V0aWxkZSc6J1xcdTAxNjknLCdVdGlsZGUnOidcXHUwMTY4JywndXRyaSc6J1xcdTI1QjUnLCd1dHJpZic6J1xcdTI1QjQnLCd1dWFycic6J1xcdTIxQzgnLCd1dW1sJzonXFx4RkMnLCdVdW1sJzonXFx4REMnLCd1d2FuZ2xlJzonXFx1MjlBNycsJ3ZhbmdydCc6J1xcdTI5OUMnLCd2YXJlcHNpbG9uJzonXFx1MDNGNScsJ3ZhcmthcHBhJzonXFx1MDNGMCcsJ3Zhcm5vdGhpbmcnOidcXHUyMjA1JywndmFycGhpJzonXFx1MDNENScsJ3ZhcnBpJzonXFx1MDNENicsJ3ZhcnByb3B0byc6J1xcdTIyMUQnLCd2YXJyJzonXFx1MjE5NScsJ3ZBcnInOidcXHUyMUQ1JywndmFycmhvJzonXFx1MDNGMScsJ3ZhcnNpZ21hJzonXFx1MDNDMicsJ3ZhcnN1YnNldG5lcSc6J1xcdTIyOEFcXHVGRTAwJywndmFyc3Vic2V0bmVxcSc6J1xcdTJBQ0JcXHVGRTAwJywndmFyc3Vwc2V0bmVxJzonXFx1MjI4QlxcdUZFMDAnLCd2YXJzdXBzZXRuZXFxJzonXFx1MkFDQ1xcdUZFMDAnLCd2YXJ0aGV0YSc6J1xcdTAzRDEnLCd2YXJ0cmlhbmdsZWxlZnQnOidcXHUyMkIyJywndmFydHJpYW5nbGVyaWdodCc6J1xcdTIyQjMnLCd2QmFyJzonXFx1MkFFOCcsJ1ZiYXInOidcXHUyQUVCJywndkJhcnYnOidcXHUyQUU5JywndmN5JzonXFx1MDQzMicsJ1ZjeSc6J1xcdTA0MTInLCd2ZGFzaCc6J1xcdTIyQTInLCd2RGFzaCc6J1xcdTIyQTgnLCdWZGFzaCc6J1xcdTIyQTknLCdWRGFzaCc6J1xcdTIyQUInLCdWZGFzaGwnOidcXHUyQUU2JywndmVlJzonXFx1MjIyOCcsJ1ZlZSc6J1xcdTIyQzEnLCd2ZWViYXInOidcXHUyMkJCJywndmVlZXEnOidcXHUyMjVBJywndmVsbGlwJzonXFx1MjJFRScsJ3ZlcmJhcic6J3wnLCdWZXJiYXInOidcXHUyMDE2JywndmVydCc6J3wnLCdWZXJ0JzonXFx1MjAxNicsJ1ZlcnRpY2FsQmFyJzonXFx1MjIyMycsJ1ZlcnRpY2FsTGluZSc6J3wnLCdWZXJ0aWNhbFNlcGFyYXRvcic6J1xcdTI3NTgnLCdWZXJ0aWNhbFRpbGRlJzonXFx1MjI0MCcsJ1ZlcnlUaGluU3BhY2UnOidcXHUyMDBBJywndmZyJzonXFx1RDgzNVxcdUREMzMnLCdWZnInOidcXHVEODM1XFx1REQxOScsJ3ZsdHJpJzonXFx1MjJCMicsJ3Zuc3ViJzonXFx1MjI4MlxcdTIwRDInLCd2bnN1cCc6J1xcdTIyODNcXHUyMEQyJywndm9wZic6J1xcdUQ4MzVcXHVERDY3JywnVm9wZic6J1xcdUQ4MzVcXHVERDREJywndnByb3AnOidcXHUyMjFEJywndnJ0cmknOidcXHUyMkIzJywndnNjcic6J1xcdUQ4MzVcXHVEQ0NCJywnVnNjcic6J1xcdUQ4MzVcXHVEQ0IxJywndnN1Ym5lJzonXFx1MjI4QVxcdUZFMDAnLCd2c3VibkUnOidcXHUyQUNCXFx1RkUwMCcsJ3ZzdXBuZSc6J1xcdTIyOEJcXHVGRTAwJywndnN1cG5FJzonXFx1MkFDQ1xcdUZFMDAnLCdWdmRhc2gnOidcXHUyMkFBJywndnppZ3phZyc6J1xcdTI5OUEnLCd3Y2lyYyc6J1xcdTAxNzUnLCdXY2lyYyc6J1xcdTAxNzQnLCd3ZWRiYXInOidcXHUyQTVGJywnd2VkZ2UnOidcXHUyMjI3JywnV2VkZ2UnOidcXHUyMkMwJywnd2VkZ2VxJzonXFx1MjI1OScsJ3dlaWVycCc6J1xcdTIxMTgnLCd3ZnInOidcXHVEODM1XFx1REQzNCcsJ1dmcic6J1xcdUQ4MzVcXHVERDFBJywnd29wZic6J1xcdUQ4MzVcXHVERDY4JywnV29wZic6J1xcdUQ4MzVcXHVERDRFJywnd3AnOidcXHUyMTE4Jywnd3InOidcXHUyMjQwJywnd3JlYXRoJzonXFx1MjI0MCcsJ3dzY3InOidcXHVEODM1XFx1RENDQycsJ1dzY3InOidcXHVEODM1XFx1RENCMicsJ3hjYXAnOidcXHUyMkMyJywneGNpcmMnOidcXHUyNUVGJywneGN1cCc6J1xcdTIyQzMnLCd4ZHRyaSc6J1xcdTI1QkQnLCd4ZnInOidcXHVEODM1XFx1REQzNScsJ1hmcic6J1xcdUQ4MzVcXHVERDFCJywneGhhcnInOidcXHUyN0Y3JywneGhBcnInOidcXHUyN0ZBJywneGknOidcXHUwM0JFJywnWGknOidcXHUwMzlFJywneGxhcnInOidcXHUyN0Y1JywneGxBcnInOidcXHUyN0Y4JywneG1hcCc6J1xcdTI3RkMnLCd4bmlzJzonXFx1MjJGQicsJ3hvZG90JzonXFx1MkEwMCcsJ3hvcGYnOidcXHVEODM1XFx1REQ2OScsJ1hvcGYnOidcXHVEODM1XFx1REQ0RicsJ3hvcGx1cyc6J1xcdTJBMDEnLCd4b3RpbWUnOidcXHUyQTAyJywneHJhcnInOidcXHUyN0Y2JywneHJBcnInOidcXHUyN0Y5JywneHNjcic6J1xcdUQ4MzVcXHVEQ0NEJywnWHNjcic6J1xcdUQ4MzVcXHVEQ0IzJywneHNxY3VwJzonXFx1MkEwNicsJ3h1cGx1cyc6J1xcdTJBMDQnLCd4dXRyaSc6J1xcdTI1QjMnLCd4dmVlJzonXFx1MjJDMScsJ3h3ZWRnZSc6J1xcdTIyQzAnLCd5YWN1dGUnOidcXHhGRCcsJ1lhY3V0ZSc6J1xceEREJywneWFjeSc6J1xcdTA0NEYnLCdZQWN5JzonXFx1MDQyRicsJ3ljaXJjJzonXFx1MDE3NycsJ1ljaXJjJzonXFx1MDE3NicsJ3ljeSc6J1xcdTA0NEInLCdZY3knOidcXHUwNDJCJywneWVuJzonXFx4QTUnLCd5ZnInOidcXHVEODM1XFx1REQzNicsJ1lmcic6J1xcdUQ4MzVcXHVERDFDJywneWljeSc6J1xcdTA0NTcnLCdZSWN5JzonXFx1MDQwNycsJ3lvcGYnOidcXHVEODM1XFx1REQ2QScsJ1lvcGYnOidcXHVEODM1XFx1REQ1MCcsJ3lzY3InOidcXHVEODM1XFx1RENDRScsJ1lzY3InOidcXHVEODM1XFx1RENCNCcsJ3l1Y3knOidcXHUwNDRFJywnWVVjeSc6J1xcdTA0MkUnLCd5dW1sJzonXFx4RkYnLCdZdW1sJzonXFx1MDE3OCcsJ3phY3V0ZSc6J1xcdTAxN0EnLCdaYWN1dGUnOidcXHUwMTc5JywnemNhcm9uJzonXFx1MDE3RScsJ1pjYXJvbic6J1xcdTAxN0QnLCd6Y3knOidcXHUwNDM3JywnWmN5JzonXFx1MDQxNycsJ3pkb3QnOidcXHUwMTdDJywnWmRvdCc6J1xcdTAxN0InLCd6ZWV0cmYnOidcXHUyMTI4JywnWmVyb1dpZHRoU3BhY2UnOidcXHUyMDBCJywnemV0YSc6J1xcdTAzQjYnLCdaZXRhJzonXFx1MDM5NicsJ3pmcic6J1xcdUQ4MzVcXHVERDM3JywnWmZyJzonXFx1MjEyOCcsJ3poY3knOidcXHUwNDM2JywnWkhjeSc6J1xcdTA0MTYnLCd6aWdyYXJyJzonXFx1MjFERCcsJ3pvcGYnOidcXHVEODM1XFx1REQ2QicsJ1pvcGYnOidcXHUyMTI0JywnenNjcic6J1xcdUQ4MzVcXHVEQ0NGJywnWnNjcic6J1xcdUQ4MzVcXHVEQ0I1JywnendqJzonXFx1MjAwRCcsJ3p3bmonOidcXHUyMDBDJ307XG5cdHZhciBkZWNvZGVNYXBMZWdhY3kgPSB7J2FhY3V0ZSc6J1xceEUxJywnQWFjdXRlJzonXFx4QzEnLCdhY2lyYyc6J1xceEUyJywnQWNpcmMnOidcXHhDMicsJ2FjdXRlJzonXFx4QjQnLCdhZWxpZyc6J1xceEU2JywnQUVsaWcnOidcXHhDNicsJ2FncmF2ZSc6J1xceEUwJywnQWdyYXZlJzonXFx4QzAnLCdhbXAnOicmJywnQU1QJzonJicsJ2FyaW5nJzonXFx4RTUnLCdBcmluZyc6J1xceEM1JywnYXRpbGRlJzonXFx4RTMnLCdBdGlsZGUnOidcXHhDMycsJ2F1bWwnOidcXHhFNCcsJ0F1bWwnOidcXHhDNCcsJ2JydmJhcic6J1xceEE2JywnY2NlZGlsJzonXFx4RTcnLCdDY2VkaWwnOidcXHhDNycsJ2NlZGlsJzonXFx4QjgnLCdjZW50JzonXFx4QTInLCdjb3B5JzonXFx4QTknLCdDT1BZJzonXFx4QTknLCdjdXJyZW4nOidcXHhBNCcsJ2RlZyc6J1xceEIwJywnZGl2aWRlJzonXFx4RjcnLCdlYWN1dGUnOidcXHhFOScsJ0VhY3V0ZSc6J1xceEM5JywnZWNpcmMnOidcXHhFQScsJ0VjaXJjJzonXFx4Q0EnLCdlZ3JhdmUnOidcXHhFOCcsJ0VncmF2ZSc6J1xceEM4JywnZXRoJzonXFx4RjAnLCdFVEgnOidcXHhEMCcsJ2V1bWwnOidcXHhFQicsJ0V1bWwnOidcXHhDQicsJ2ZyYWMxMic6J1xceEJEJywnZnJhYzE0JzonXFx4QkMnLCdmcmFjMzQnOidcXHhCRScsJ2d0JzonPicsJ0dUJzonPicsJ2lhY3V0ZSc6J1xceEVEJywnSWFjdXRlJzonXFx4Q0QnLCdpY2lyYyc6J1xceEVFJywnSWNpcmMnOidcXHhDRScsJ2lleGNsJzonXFx4QTEnLCdpZ3JhdmUnOidcXHhFQycsJ0lncmF2ZSc6J1xceENDJywnaXF1ZXN0JzonXFx4QkYnLCdpdW1sJzonXFx4RUYnLCdJdW1sJzonXFx4Q0YnLCdsYXF1byc6J1xceEFCJywnbHQnOic8JywnTFQnOic8JywnbWFjcic6J1xceEFGJywnbWljcm8nOidcXHhCNScsJ21pZGRvdCc6J1xceEI3JywnbmJzcCc6J1xceEEwJywnbm90JzonXFx4QUMnLCdudGlsZGUnOidcXHhGMScsJ050aWxkZSc6J1xceEQxJywnb2FjdXRlJzonXFx4RjMnLCdPYWN1dGUnOidcXHhEMycsJ29jaXJjJzonXFx4RjQnLCdPY2lyYyc6J1xceEQ0Jywnb2dyYXZlJzonXFx4RjInLCdPZ3JhdmUnOidcXHhEMicsJ29yZGYnOidcXHhBQScsJ29yZG0nOidcXHhCQScsJ29zbGFzaCc6J1xceEY4JywnT3NsYXNoJzonXFx4RDgnLCdvdGlsZGUnOidcXHhGNScsJ090aWxkZSc6J1xceEQ1Jywnb3VtbCc6J1xceEY2JywnT3VtbCc6J1xceEQ2JywncGFyYSc6J1xceEI2JywncGx1c21uJzonXFx4QjEnLCdwb3VuZCc6J1xceEEzJywncXVvdCc6J1wiJywnUVVPVCc6J1wiJywncmFxdW8nOidcXHhCQicsJ3JlZyc6J1xceEFFJywnUkVHJzonXFx4QUUnLCdzZWN0JzonXFx4QTcnLCdzaHknOidcXHhBRCcsJ3N1cDEnOidcXHhCOScsJ3N1cDInOidcXHhCMicsJ3N1cDMnOidcXHhCMycsJ3N6bGlnJzonXFx4REYnLCd0aG9ybic6J1xceEZFJywnVEhPUk4nOidcXHhERScsJ3RpbWVzJzonXFx4RDcnLCd1YWN1dGUnOidcXHhGQScsJ1VhY3V0ZSc6J1xceERBJywndWNpcmMnOidcXHhGQicsJ1VjaXJjJzonXFx4REInLCd1Z3JhdmUnOidcXHhGOScsJ1VncmF2ZSc6J1xceEQ5JywndW1sJzonXFx4QTgnLCd1dW1sJzonXFx4RkMnLCdVdW1sJzonXFx4REMnLCd5YWN1dGUnOidcXHhGRCcsJ1lhY3V0ZSc6J1xceEREJywneWVuJzonXFx4QTUnLCd5dW1sJzonXFx4RkYnfTtcblx0dmFyIGRlY29kZU1hcE51bWVyaWMgPSB7JzAnOidcXHVGRkZEJywnMTI4JzonXFx1MjBBQycsJzEzMCc6J1xcdTIwMUEnLCcxMzEnOidcXHUwMTkyJywnMTMyJzonXFx1MjAxRScsJzEzMyc6J1xcdTIwMjYnLCcxMzQnOidcXHUyMDIwJywnMTM1JzonXFx1MjAyMScsJzEzNic6J1xcdTAyQzYnLCcxMzcnOidcXHUyMDMwJywnMTM4JzonXFx1MDE2MCcsJzEzOSc6J1xcdTIwMzknLCcxNDAnOidcXHUwMTUyJywnMTQyJzonXFx1MDE3RCcsJzE0NSc6J1xcdTIwMTgnLCcxNDYnOidcXHUyMDE5JywnMTQ3JzonXFx1MjAxQycsJzE0OCc6J1xcdTIwMUQnLCcxNDknOidcXHUyMDIyJywnMTUwJzonXFx1MjAxMycsJzE1MSc6J1xcdTIwMTQnLCcxNTInOidcXHUwMkRDJywnMTUzJzonXFx1MjEyMicsJzE1NCc6J1xcdTAxNjEnLCcxNTUnOidcXHUyMDNBJywnMTU2JzonXFx1MDE1MycsJzE1OCc6J1xcdTAxN0UnLCcxNTknOidcXHUwMTc4J307XG5cdHZhciBpbnZhbGlkUmVmZXJlbmNlQ29kZVBvaW50cyA9IFsxLDIsMyw0LDUsNiw3LDgsMTEsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMTI3LDEyOCwxMjksMTMwLDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTM5LDE0MCwxNDEsMTQyLDE0MywxNDQsMTQ1LDE0NiwxNDcsMTQ4LDE0OSwxNTAsMTUxLDE1MiwxNTMsMTU0LDE1NSwxNTYsMTU3LDE1OCwxNTksNjQ5NzYsNjQ5NzcsNjQ5NzgsNjQ5NzksNjQ5ODAsNjQ5ODEsNjQ5ODIsNjQ5ODMsNjQ5ODQsNjQ5ODUsNjQ5ODYsNjQ5ODcsNjQ5ODgsNjQ5ODksNjQ5OTAsNjQ5OTEsNjQ5OTIsNjQ5OTMsNjQ5OTQsNjQ5OTUsNjQ5OTYsNjQ5OTcsNjQ5OTgsNjQ5OTksNjUwMDAsNjUwMDEsNjUwMDIsNjUwMDMsNjUwMDQsNjUwMDUsNjUwMDYsNjUwMDcsNjU1MzQsNjU1MzUsMTMxMDcwLDEzMTA3MSwxOTY2MDYsMTk2NjA3LDI2MjE0MiwyNjIxNDMsMzI3Njc4LDMyNzY3OSwzOTMyMTQsMzkzMjE1LDQ1ODc1MCw0NTg3NTEsNTI0Mjg2LDUyNDI4Nyw1ODk4MjIsNTg5ODIzLDY1NTM1OCw2NTUzNTksNzIwODk0LDcyMDg5NSw3ODY0MzAsNzg2NDMxLDg1MTk2Niw4NTE5NjcsOTE3NTAyLDkxNzUwMyw5ODMwMzgsOTgzMDM5LDEwNDg1NzQsMTA0ODU3NSwxMTE0MTEwLDExMTQxMTFdO1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdHZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG5cdHZhciBvYmplY3QgPSB7fTtcblx0dmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0Lmhhc093blByb3BlcnR5O1xuXHR2YXIgaGFzID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcblx0XHRyZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5TmFtZSk7XG5cdH07XG5cblx0dmFyIGNvbnRhaW5zID0gZnVuY3Rpb24oYXJyYXksIHZhbHVlKSB7XG5cdFx0dmFyIGluZGV4ID0gLTE7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdFx0aWYgKGFycmF5W2luZGV4XSA9PSB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHZhciBtZXJnZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG5cdFx0aWYgKCFvcHRpb25zKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdHM7XG5cdFx0fVxuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHR2YXIga2V5O1xuXHRcdGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG5cdFx0XHQvLyBBIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaXMgbm90IG5lZWRlZCBoZXJlLCBzaW5jZSBvbmx5IHJlY29nbml6ZWRcblx0XHRcdC8vIG9wdGlvbiBuYW1lcyBhcmUgdXNlZCBhbnl3YXkuIEFueSBvdGhlcnMgYXJlIGlnbm9yZWQuXG5cdFx0XHRyZXN1bHRba2V5XSA9IGhhcyhvcHRpb25zLCBrZXkpID8gb3B0aW9uc1trZXldIDogZGVmYXVsdHNba2V5XTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBNb2RpZmllZCB2ZXJzaW9uIG9mIGB1Y3MyZW5jb2RlYDsgc2VlIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZS5cblx0dmFyIGNvZGVQb2ludFRvU3ltYm9sID0gZnVuY3Rpb24oY29kZVBvaW50LCBzdHJpY3QpIHtcblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0aWYgKChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHx8IGNvZGVQb2ludCA+IDB4MTBGRkZGKSB7XG5cdFx0XHQvLyBTZWUgaXNzdWUgIzQ6XG5cdFx0XHQvLyDigJxPdGhlcndpc2UsIGlmIHRoZSBudW1iZXIgaXMgaW4gdGhlIHJhbmdlIDB4RDgwMCB0byAweERGRkYgb3IgaXNcblx0XHRcdC8vIGdyZWF0ZXIgdGhhbiAweDEwRkZGRiwgdGhlbiB0aGlzIGlzIGEgcGFyc2UgZXJyb3IuIFJldHVybiBhIFUrRkZGRFxuXHRcdFx0Ly8gUkVQTEFDRU1FTlQgQ0hBUkFDVEVSLuKAnVxuXHRcdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0XHRwYXJzZUVycm9yKCdjaGFyYWN0ZXIgcmVmZXJlbmNlIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIFVuaWNvZGUgcmFuZ2UnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnXFx1RkZGRCc7XG5cdFx0fVxuXHRcdGlmIChoYXMoZGVjb2RlTWFwTnVtZXJpYywgY29kZVBvaW50KSkge1xuXHRcdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0XHRwYXJzZUVycm9yKCdkaXNhbGxvd2VkIGNoYXJhY3RlciByZWZlcmVuY2UnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkZWNvZGVNYXBOdW1lcmljW2NvZGVQb2ludF07XG5cdFx0fVxuXHRcdGlmIChzdHJpY3QgJiYgY29udGFpbnMoaW52YWxpZFJlZmVyZW5jZUNvZGVQb2ludHMsIGNvZGVQb2ludCkpIHtcblx0XHRcdHBhcnNlRXJyb3IoJ2Rpc2FsbG93ZWQgY2hhcmFjdGVyIHJlZmVyZW5jZScpO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG5cdFx0XHRjb2RlUG9pbnQgLT0gMHgxMDAwMDtcblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUoY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGO1xuXHRcdH1cblx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fTtcblxuXHR2YXIgaGV4RXNjYXBlID0gZnVuY3Rpb24oY29kZVBvaW50KSB7XG5cdFx0cmV0dXJuICcmI3gnICsgY29kZVBvaW50LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICsgJzsnO1xuXHR9O1xuXG5cdHZhciBkZWNFc2NhcGUgPSBmdW5jdGlvbihjb2RlUG9pbnQpIHtcblx0XHRyZXR1cm4gJyYjJyArIGNvZGVQb2ludCArICc7Jztcblx0fTtcblxuXHR2YXIgcGFyc2VFcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHR0aHJvdyBFcnJvcignUGFyc2UgZXJyb3I6ICcgKyBtZXNzYWdlKTtcblx0fTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHR2YXIgZW5jb2RlID0gZnVuY3Rpb24oc3RyaW5nLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IG1lcmdlKG9wdGlvbnMsIGVuY29kZS5vcHRpb25zKTtcblx0XHR2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7XG5cdFx0aWYgKHN0cmljdCAmJiByZWdleEludmFsaWRSYXdDb2RlUG9pbnQudGVzdChzdHJpbmcpKSB7XG5cdFx0XHRwYXJzZUVycm9yKCdmb3JiaWRkZW4gY29kZSBwb2ludCcpO1xuXHRcdH1cblx0XHR2YXIgZW5jb2RlRXZlcnl0aGluZyA9IG9wdGlvbnMuZW5jb2RlRXZlcnl0aGluZztcblx0XHR2YXIgdXNlTmFtZWRSZWZlcmVuY2VzID0gb3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXM7XG5cdFx0dmFyIGFsbG93VW5zYWZlU3ltYm9scyA9IG9wdGlvbnMuYWxsb3dVbnNhZmVTeW1ib2xzO1xuXHRcdHZhciBlc2NhcGVDb2RlUG9pbnQgPSBvcHRpb25zLmRlY2ltYWwgPyBkZWNFc2NhcGUgOiBoZXhFc2NhcGU7XG5cblx0XHR2YXIgZXNjYXBlQm1wU3ltYm9sID0gZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gZXNjYXBlQ29kZVBvaW50KHN5bWJvbC5jaGFyQ29kZUF0KDApKTtcblx0XHR9O1xuXG5cdFx0aWYgKGVuY29kZUV2ZXJ5dGhpbmcpIHtcblx0XHRcdC8vIEVuY29kZSBBU0NJSSBzeW1ib2xzLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhBc2NpaVdoaXRlbGlzdCwgZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRcdC8vIFVzZSBuYW1lZCByZWZlcmVuY2VzIGlmIHJlcXVlc3RlZCAmIHBvc3NpYmxlLlxuXHRcdFx0XHRpZiAodXNlTmFtZWRSZWZlcmVuY2VzICYmIGhhcyhlbmNvZGVNYXAsIHN5bWJvbCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyYnICsgZW5jb2RlTWFwW3N5bWJvbF0gKyAnOyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGVzY2FwZUJtcFN5bWJvbChzeW1ib2wpO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBTaG9ydGVuIGEgZmV3IGVzY2FwZXMgdGhhdCByZXByZXNlbnQgdHdvIHN5bWJvbHMsIG9mIHdoaWNoIGF0IGxlYXN0IG9uZVxuXHRcdFx0Ly8gaXMgd2l0aGluIHRoZSBBU0NJSSByYW5nZS5cblx0XHRcdGlmICh1c2VOYW1lZFJlZmVyZW5jZXMpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyZndDtcXHUyMEQyL2csICcmbnZndDsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mbHQ7XFx1MjBEMi9nLCAnJm52bHQ7Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiN4NjY7JiN4NkE7L2csICcmZmpsaWc7Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBFbmNvZGUgbm9uLUFTQ0lJIHN5bWJvbHMuXG5cdFx0XHRpZiAodXNlTmFtZWRSZWZlcmVuY2VzKSB7XG5cdFx0XHRcdC8vIEVuY29kZSBub24tQVNDSUkgc3ltYm9scyB0aGF0IGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgbmFtZWQgcmVmZXJlbmNlLlxuXHRcdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleEVuY29kZU5vbkFzY2lpLCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdFx0XHQvLyBOb3RlOiB0aGVyZSBpcyBubyBuZWVkIHRvIGNoZWNrIGBoYXMoZW5jb2RlTWFwLCBzdHJpbmcpYCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiAnJicgKyBlbmNvZGVNYXBbc3RyaW5nXSArICc7Jztcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RlOiBhbnkgcmVtYWluaW5nIG5vbi1BU0NJSSBzeW1ib2xzIGFyZSBoYW5kbGVkIG91dHNpZGUgb2YgdGhlIGBpZmAuXG5cdFx0fSBlbHNlIGlmICh1c2VOYW1lZFJlZmVyZW5jZXMpIHtcblx0XHRcdC8vIEFwcGx5IG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzLlxuXHRcdFx0Ly8gRW5jb2RlIGA8PlwiJyZgIHVzaW5nIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzLlxuXHRcdFx0aWYgKCFhbGxvd1Vuc2FmZVN5bWJvbHMpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhFc2NhcGUsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0XHRcdHJldHVybiAnJicgKyBlbmNvZGVNYXBbc3RyaW5nXSArICc7JzsgLy8gbm8gbmVlZCB0byBjaGVjayBgaGFzKClgIGhlcmVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTaG9ydGVuIGVzY2FwZXMgdGhhdCByZXByZXNlbnQgdHdvIHN5bWJvbHMsIG9mIHdoaWNoIGF0IGxlYXN0IG9uZSBpc1xuXHRcdFx0Ly8gYDw+XCInJmAuXG5cdFx0XHRzdHJpbmcgPSBzdHJpbmdcblx0XHRcdFx0LnJlcGxhY2UoLyZndDtcXHUyMEQyL2csICcmbnZndDsnKVxuXHRcdFx0XHQucmVwbGFjZSgvJmx0O1xcdTIwRDIvZywgJyZudmx0OycpO1xuXHRcdFx0Ly8gRW5jb2RlIG5vbi1BU0NJSSBzeW1ib2xzIHRoYXQgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBuYW1lZCByZWZlcmVuY2UuXG5cdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleEVuY29kZU5vbkFzY2lpLCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdFx0Ly8gTm90ZTogdGhlcmUgaXMgbm8gbmVlZCB0byBjaGVjayBgaGFzKGVuY29kZU1hcCwgc3RyaW5nKWAgaGVyZS5cblx0XHRcdFx0cmV0dXJuICcmJyArIGVuY29kZU1hcFtzdHJpbmddICsgJzsnO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICghYWxsb3dVbnNhZmVTeW1ib2xzKSB7XG5cdFx0XHQvLyBFbmNvZGUgYDw+XCInJmAgdXNpbmcgaGV4YWRlY2ltYWwgZXNjYXBlcywgbm93IHRoYXQgdGhleeKAmXJlIG5vdCBoYW5kbGVkXG5cdFx0XHQvLyB1c2luZyBuYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlcy5cblx0XHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4RXNjYXBlLCBlc2NhcGVCbXBTeW1ib2wpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyaW5nXG5cdFx0XHQvLyBFbmNvZGUgYXN0cmFsIHN5bWJvbHMuXG5cdFx0XHQucmVwbGFjZShyZWdleEFzdHJhbFN5bWJvbHMsIGZ1bmN0aW9uKCQwKSB7XG5cdFx0XHRcdC8vIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuXHRcdFx0XHR2YXIgaGlnaCA9ICQwLmNoYXJDb2RlQXQoMCk7XG5cdFx0XHRcdHZhciBsb3cgPSAkMC5jaGFyQ29kZUF0KDEpO1xuXHRcdFx0XHR2YXIgY29kZVBvaW50ID0gKGhpZ2ggLSAweEQ4MDApICogMHg0MDAgKyBsb3cgLSAweERDMDAgKyAweDEwMDAwO1xuXHRcdFx0XHRyZXR1cm4gZXNjYXBlQ29kZVBvaW50KGNvZGVQb2ludCk7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gRW5jb2RlIGFueSByZW1haW5pbmcgQk1QIHN5bWJvbHMgdGhhdCBhcmUgbm90IHByaW50YWJsZSBBU0NJSSBzeW1ib2xzXG5cdFx0XHQvLyB1c2luZyBhIGhleGFkZWNpbWFsIGVzY2FwZS5cblx0XHRcdC5yZXBsYWNlKHJlZ2V4Qm1wV2hpdGVsaXN0LCBlc2NhcGVCbXBTeW1ib2wpO1xuXHR9O1xuXHQvLyBFeHBvc2UgZGVmYXVsdCBvcHRpb25zIChzbyB0aGV5IGNhbiBiZSBvdmVycmlkZGVuIGdsb2JhbGx5KS5cblx0ZW5jb2RlLm9wdGlvbnMgPSB7XG5cdFx0J2FsbG93VW5zYWZlU3ltYm9scyc6IGZhbHNlLFxuXHRcdCdlbmNvZGVFdmVyeXRoaW5nJzogZmFsc2UsXG5cdFx0J3N0cmljdCc6IGZhbHNlLFxuXHRcdCd1c2VOYW1lZFJlZmVyZW5jZXMnOiBmYWxzZSxcblx0XHQnZGVjaW1hbCcgOiBmYWxzZVxuXHR9O1xuXG5cdHZhciBkZWNvZGUgPSBmdW5jdGlvbihodG1sLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IG1lcmdlKG9wdGlvbnMsIGRlY29kZS5vcHRpb25zKTtcblx0XHR2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7XG5cdFx0aWYgKHN0cmljdCAmJiByZWdleEludmFsaWRFbnRpdHkudGVzdChodG1sKSkge1xuXHRcdFx0cGFyc2VFcnJvcignbWFsZm9ybWVkIGNoYXJhY3RlciByZWZlcmVuY2UnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGh0bWwucmVwbGFjZShyZWdleERlY29kZSwgZnVuY3Rpb24oJDAsICQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCkge1xuXHRcdFx0dmFyIGNvZGVQb2ludDtcblx0XHRcdHZhciBzZW1pY29sb247XG5cdFx0XHR2YXIgZGVjRGlnaXRzO1xuXHRcdFx0dmFyIGhleERpZ2l0cztcblx0XHRcdHZhciByZWZlcmVuY2U7XG5cdFx0XHR2YXIgbmV4dDtcblxuXHRcdFx0aWYgKCQxKSB7XG5cdFx0XHRcdHJlZmVyZW5jZSA9ICQxO1xuXHRcdFx0XHQvLyBOb3RlOiB0aGVyZSBpcyBubyBuZWVkIHRvIGNoZWNrIGBoYXMoZGVjb2RlTWFwLCByZWZlcmVuY2UpYC5cblx0XHRcdFx0cmV0dXJuIGRlY29kZU1hcFtyZWZlcmVuY2VdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoJDIpIHtcblx0XHRcdFx0Ly8gRGVjb2RlIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIHdpdGhvdXQgdHJhaWxpbmcgYDtgLCBlLmcuIGAmYW1wYC5cblx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGEgcGFyc2UgZXJyb3IgaWYgaXQgZ2V0cyBjb252ZXJ0ZWQgdG8gYCZgLCBvciBpZiBpdCBpc1xuXHRcdFx0XHQvLyBmb2xsb3dlZCBieSBgPWAgaW4gYW4gYXR0cmlidXRlIGNvbnRleHQuXG5cdFx0XHRcdHJlZmVyZW5jZSA9ICQyO1xuXHRcdFx0XHRuZXh0ID0gJDM7XG5cdFx0XHRcdGlmIChuZXh0ICYmIG9wdGlvbnMuaXNBdHRyaWJ1dGVWYWx1ZSkge1xuXHRcdFx0XHRcdGlmIChzdHJpY3QgJiYgbmV4dCA9PSAnPScpIHtcblx0XHRcdFx0XHRcdHBhcnNlRXJyb3IoJ2AmYCBkaWQgbm90IHN0YXJ0IGEgY2hhcmFjdGVyIHJlZmVyZW5jZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gJDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0XHRcdFx0cGFyc2VFcnJvcihcblx0XHRcdFx0XHRcdFx0J25hbWVkIGNoYXJhY3RlciByZWZlcmVuY2Ugd2FzIG5vdCB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTm90ZTogdGhlcmUgaXMgbm8gbmVlZCB0byBjaGVjayBgaGFzKGRlY29kZU1hcExlZ2FjeSwgcmVmZXJlbmNlKWAuXG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZU1hcExlZ2FjeVtyZWZlcmVuY2VdICsgKG5leHQgfHwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICgkNCkge1xuXHRcdFx0XHQvLyBEZWNvZGUgZGVjaW1hbCBlc2NhcGVzLCBlLmcuIGAmIzExOTU1ODtgLlxuXHRcdFx0XHRkZWNEaWdpdHMgPSAkNDtcblx0XHRcdFx0c2VtaWNvbG9uID0gJDU7XG5cdFx0XHRcdGlmIChzdHJpY3QgJiYgIXNlbWljb2xvbikge1xuXHRcdFx0XHRcdHBhcnNlRXJyb3IoJ2NoYXJhY3RlciByZWZlcmVuY2Ugd2FzIG5vdCB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29kZVBvaW50ID0gcGFyc2VJbnQoZGVjRGlnaXRzLCAxMCk7XG5cdFx0XHRcdHJldHVybiBjb2RlUG9pbnRUb1N5bWJvbChjb2RlUG9pbnQsIHN0cmljdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgkNikge1xuXHRcdFx0XHQvLyBEZWNvZGUgaGV4YWRlY2ltYWwgZXNjYXBlcywgZS5nLiBgJiN4MUQzMDY7YC5cblx0XHRcdFx0aGV4RGlnaXRzID0gJDY7XG5cdFx0XHRcdHNlbWljb2xvbiA9ICQ3O1xuXHRcdFx0XHRpZiAoc3RyaWN0ICYmICFzZW1pY29sb24pIHtcblx0XHRcdFx0XHRwYXJzZUVycm9yKCdjaGFyYWN0ZXIgcmVmZXJlbmNlIHdhcyBub3QgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvZGVQb2ludCA9IHBhcnNlSW50KGhleERpZ2l0cywgMTYpO1xuXHRcdFx0XHRyZXR1cm4gY29kZVBvaW50VG9TeW1ib2woY29kZVBvaW50LCBzdHJpY3QpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZeKAmXJlIHN0aWxsIGhlcmUsIGBpZiAoJDcpYCBpcyBpbXBsaWVkOyBpdOKAmXMgYW4gYW1iaWd1b3VzXG5cdFx0XHQvLyBhbXBlcnNhbmQgZm9yIHN1cmUuIGh0dHBzOi8vbXRocy5iZS9ub3Rlcy9hbWJpZ3VvdXMtYW1wZXJzYW5kc1xuXHRcdFx0aWYgKHN0cmljdCkge1xuXHRcdFx0XHRwYXJzZUVycm9yKFxuXHRcdFx0XHRcdCduYW1lZCBjaGFyYWN0ZXIgcmVmZXJlbmNlIHdhcyBub3QgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkMDtcblx0XHR9KTtcblx0fTtcblx0Ly8gRXhwb3NlIGRlZmF1bHQgb3B0aW9ucyAoc28gdGhleSBjYW4gYmUgb3ZlcnJpZGRlbiBnbG9iYWxseSkuXG5cdGRlY29kZS5vcHRpb25zID0ge1xuXHRcdCdpc0F0dHJpYnV0ZVZhbHVlJzogZmFsc2UsXG5cdFx0J3N0cmljdCc6IGZhbHNlXG5cdH07XG5cblx0dmFyIGVzY2FwZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShyZWdleEVzY2FwZSwgZnVuY3Rpb24oJDApIHtcblx0XHRcdC8vIE5vdGU6IHRoZXJlIGlzIG5vIG5lZWQgdG8gY2hlY2sgYGhhcyhlc2NhcGVNYXAsICQwKWAgaGVyZS5cblx0XHRcdHJldHVybiBlc2NhcGVNYXBbJDBdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdHZhciBoZSA9IHtcblx0XHQndmVyc2lvbic6ICcxLjIuMCcsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlc2NhcGUnOiBlc2NhcGUsXG5cdFx0J3VuZXNjYXBlJzogZGVjb2RlXG5cdH07XG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gaGU7XG5cdFx0fSk7XG5cdH1cdGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmICFmcmVlRXhwb3J0cy5ub2RlVHlwZSkge1xuXHRcdGlmIChmcmVlTW9kdWxlKSB7IC8vIGluIE5vZGUuanMsIGlvLmpzLCBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IGhlO1xuXHRcdH0gZWxzZSB7IC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gaGUpIHtcblx0XHRcdFx0aGFzKGhlLCBrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gaGVba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgeyAvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC5oZSA9IGhlO1xuXHR9XG5cbn0odGhpcykpO1xuIiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGRlZmluZSA9IGZhbHNlO1xuXG4vKiFcclxuICogU2Nyb2xsTWFnaWMgdjIuMC43ICgyMDE5LTA1LTA3KVxyXG4gKiBUaGUgamF2YXNjcmlwdCBsaWJyYXJ5IGZvciBtYWdpY2FsIHNjcm9sbCBpbnRlcmFjdGlvbnMuXHJcbiAqIChjKSAyMDE5IEphbiBQYWVwa2UgKEBqYW5wYWVwa2UpXHJcbiAqIFByb2plY3QgV2Vic2l0ZTogaHR0cDovL3Njcm9sbG1hZ2ljLmlvXHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAyLjAuN1xyXG4gKiBAbGljZW5zZSBEdWFsIGxpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlIGFuZCBHUEwuXHJcbiAqIEBhdXRob3IgSmFuIFBhZXBrZSAtIGUtbWFpbEBqYW5wYWVwa2UuZGVcclxuICpcclxuICogQGZpbGUgU2Nyb2xsTWFnaWMgR1NBUCBBbmltYXRpb24gUGx1Z2luLlxyXG4gKlxyXG4gKiByZXF1aXJlczogR1NBUCB+MS4xNFxyXG4gKiBQb3dlcmVkIGJ5IHRoZSBHcmVlbnNvY2sgQW5pbWF0aW9uIFBsYXRmb3JtIChHU0FQKTogaHR0cDovL3d3dy5ncmVlbnNvY2suY29tL2pzXHJcbiAqIEdyZWVuc29jayBMaWNlbnNlIGluZm8gYXQgaHR0cDovL3d3dy5ncmVlbnNvY2suY29tL2xpY2Vuc2luZy9cclxuICovXHJcbi8qKlxyXG4gKiBUaGlzIHBsdWdpbiBpcyBtZWFudCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIEdyZWVuc29jayBBbmltYXRpb24gUGxhdHRmb3JtLiAgXHJcbiAqIEl0IG9mZmVycyBhbiBlYXN5IEFQSSB0byB0cmlnZ2VyIFR3ZWVucyBvciBzeW5jaHJvbml6ZSB0aGVtIHRvIHRoZSBzY3JvbGxiYXIgbW92ZW1lbnQuXHJcbiAqXHJcbiAqIEJvdGggdGhlIGBsaXRlYCBhbmQgdGhlIGBtYXhgIHZlcnNpb25zIG9mIHRoZSBHU0FQIGxpYnJhcnkgYXJlIHN1cHBvcnRlZC4gIFxyXG4gKiBUaGUgbW9zdCBiYXNpYyByZXF1aXJlbWVudCBpcyBgVHdlZW5MaXRlYC5cclxuICogXHJcbiAqIFRvIGhhdmUgYWNjZXNzIHRvIHRoaXMgZXh0ZW5zaW9uLCBwbGVhc2UgaW5jbHVkZSBgcGx1Z2lucy9hbmltYXRpb24uZ3NhcC5qc2AuXHJcbiAqIEByZXF1aXJlcyB7QGxpbmsgaHR0cDovL2dyZWVuc29jay5jb20vZ3NhcHxHU0FQIH4xLjE0Lnh9XHJcbiAqIEBtaXhpbiBhbmltYXRpb24uR1NBUFxyXG4gKi9cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG5cdFx0ZGVmaW5lKFsnU2Nyb2xsTWFnaWMnLCAnVHdlZW5NYXgnLCAnVGltZWxpbmVNYXgnXSwgZmFjdG9yeSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHQvLyBMb2FkcyB3aG9sZSBnc2FwIHBhY2thZ2Ugb250byBnbG9iYWwgc2NvcGUuXHJcblx0XHRyZXF1aXJlKCdnc2FwJyk7XHJcblx0XHRmYWN0b3J5KHJlcXVpcmUoJ3Njcm9sbG1hZ2ljJyksIFR3ZWVuTWF4LCBUaW1lbGluZU1heCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG5cdFx0ZmFjdG9yeShyb290LlNjcm9sbE1hZ2ljIHx8IChyb290LmpRdWVyeSAmJiByb290LmpRdWVyeS5TY3JvbGxNYWdpYyksIHJvb3QuVHdlZW5NYXggfHwgcm9vdC5Ud2VlbkxpdGUsIHJvb3QuVGltZWxpbmVNYXggfHwgcm9vdC5UaW1lbGluZUxpdGUpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoU2Nyb2xsTWFnaWMsIFR3ZWVuLCBUaW1lbGluZSkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cdHZhciBOQU1FU1BBQ0UgPSBcImFuaW1hdGlvbi5nc2FwXCI7XHJcblxyXG5cdHZhclxyXG5cdFx0Y29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9LFxyXG5cdFx0ZXJyID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlLmVycm9yIHx8IGNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uICgpIHt9LCBjb25zb2xlKTtcclxuXHRpZiAoIVNjcm9sbE1hZ2ljKSB7XHJcblx0XHRlcnIoXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT4gRVJST1I6IFRoZSBTY3JvbGxNYWdpYyBtYWluIG1vZHVsZSBjb3VsZCBub3QgYmUgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgaXQncyBsb2FkZWQgYmVmb3JlIHRoaXMgcGx1Z2luIG9yIHVzZSBhbiBhc3luY2hyb25vdXMgbG9hZGVyIGxpa2UgcmVxdWlyZWpzLlwiKTtcclxuXHR9XHJcblx0aWYgKCFUd2Vlbikge1xyXG5cdFx0ZXJyKFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+IEVSUk9SOiBUd2VlbkxpdGUgb3IgVHdlZW5NYXggY291bGQgbm90IGJlIGZvdW5kLiBQbGVhc2UgbWFrZSBzdXJlIEdTQVAgaXMgbG9hZGVkIGJlZm9yZSBTY3JvbGxNYWdpYyBvciB1c2UgYW4gYXN5bmNocm9ub3VzIGxvYWRlciBsaWtlIHJlcXVpcmVqcy5cIik7XHJcblx0fVxyXG5cclxuXHQvKlxyXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgKiBFeHRlbnNpb25zIGZvciBTY2VuZVxyXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgKi9cclxuXHQvKipcclxuXHQgKiBFdmVyeSBpbnN0YW5jZSBvZiBTY3JvbGxNYWdpYy5TY2VuZSBub3cgYWNjZXB0cyBhbiBhZGRpdGlvbmFsIG9wdGlvbi4gIFxyXG5cdCAqIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuU2NlbmV9IGZvciBhIGNvbXBsZXRlIGxpc3Qgb2YgdGhlIHN0YW5kYXJkIG9wdGlvbnMuXHJcblx0ICogQG1lbWJlcm9mISBhbmltYXRpb24uR1NBUCNcclxuXHQgKiBAbWV0aG9kIG5ldyBTY3JvbGxNYWdpYy5TY2VuZShvcHRpb25zKVxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHt0d2VlbkNoYW5nZXM6IHRydWV9KTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIGZvciB0aGUgU2NlbmUuIFRoZSBvcHRpb25zIGNhbiBiZSB1cGRhdGVkIGF0IGFueSB0aW1lLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHdlZW5DaGFuZ2VzPWZhbHNlXSAtIFR3ZWVucyBBbmltYXRpb24gdG8gdGhlIHByb2dyZXNzIHRhcmdldCBpbnN0ZWFkIG9mIHNldHRpbmcgaXQuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBEb2VzIG5vdCBhZmZlY3QgYW5pbWF0aW9ucyB3aGVyZSBkdXJhdGlvbiBpcyBgMGAuXHJcblx0ICovXHJcblx0LyoqXHJcblx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0d2VlbkNoYW5nZXMgb3B0aW9uIHZhbHVlLiAgXHJcblx0ICogVGhpcyBvbmx5IGFmZmVjdHMgc2NlbmVzIHdpdGggYSBkdXJhdGlvbi4gSWYgYHR3ZWVuQ2hhbmdlc2AgaXMgYHRydWVgLCB0aGUgcHJvZ3Jlc3MgdXBkYXRlIHdoZW4gc2Nyb2xsaW5nIHdpbGwgbm90IGJlIGltbWVkaWF0ZSwgYnV0IGluc3RlYWQgdGhlIGFuaW1hdGlvbiB3aWxsIHNtb290aGx5IGFuaW1hdGUgdG8gdGhlIHRhcmdldCBzdGF0ZS4gIFxyXG5cdCAqIEZvciBhIGJldHRlciB1bmRlcnN0YW5kaW5nLCB0cnkgZW5hYmxpbmcgYW5kIGRpc2FibGluZyB0aGlzIG9wdGlvbiBpbiB0aGUgW1NjZW5lIE1hbmlwdWxhdGlvbiBFeGFtcGxlXSguLi9leGFtcGxlcy9iYXNpYy9zY2VuZV9tYW5pcHVsYXRpb24uaHRtbCkuXHJcblx0ICogQG1lbWJlcm9mISBhbmltYXRpb24uR1NBUCNcclxuXHQgKiBAbWV0aG9kIFNjZW5lLnR3ZWVuQ2hhbmdlc1xyXG5cdCAqIFxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHR3ZWVuQ2hhbmdlcyBvcHRpb25cclxuXHQgKiB2YXIgdHdlZW5DaGFuZ2VzID0gc2NlbmUudHdlZW5DaGFuZ2VzKCk7XHJcblx0ICpcclxuXHQgKiAvLyBzZXQgbmV3IHR3ZWVuQ2hhbmdlcyBvcHRpb25cclxuXHQgKiBzY2VuZS50d2VlbkNoYW5nZXModHJ1ZSk7XHJcblx0ICpcclxuXHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdUd2VlbkNoYW5nZXNdIC0gVGhlIG5ldyB0d2VlbkNoYW5nZXMgc2V0dGluZyBvZiB0aGUgc2NlbmUuXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59IGBnZXRgIC0gIEN1cnJlbnQgdHdlZW5DaGFuZ2VzIG9wdGlvbiB2YWx1ZS5cclxuXHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdCAqL1xyXG5cdC8vIGFkZCBvcHRpb24gKFRPRE86IERPQyAocHJpdmF0ZSBmb3IgZGV2KSlcclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5hZGRPcHRpb24oXHJcblx0XHRcInR3ZWVuQ2hhbmdlc1wiLCAvLyBuYW1lXHJcblx0XHRmYWxzZSwgLy8gZGVmYXVsdFxyXG5cdFx0ZnVuY3Rpb24gKHZhbCkgeyAvLyB2YWxpZGF0aW9uIGNhbGxiYWNrXHJcblx0XHRcdHJldHVybiAhIXZhbDtcclxuXHRcdH1cclxuXHQpO1xyXG5cdC8vIGV4dGVuZCBzY2VuZVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLmV4dGVuZChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgU2NlbmUgPSB0aGlzLFxyXG5cdFx0XHRfdHdlZW47XHJcblxyXG5cdFx0dmFyIGxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKFNjZW5lLl9sb2cpIHsgLy8gbm90IGF2YWlsYWJsZSwgd2hlbiBtYWluIHNvdXJjZSBtaW5pZmllZFxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpXCIsIFwiLT5cIik7XHJcblx0XHRcdFx0U2NlbmUuX2xvZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBsaXN0ZW5lcnNcclxuXHRcdFNjZW5lLm9uKFwicHJvZ3Jlc3MucGx1Z2luX2dzYXBcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR1cGRhdGVUd2VlblByb2dyZXNzKCk7XHJcblx0XHR9KTtcclxuXHRcdFNjZW5lLm9uKFwiZGVzdHJveS5wbHVnaW5fZ3NhcFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRTY2VuZS5yZW1vdmVUd2VlbihlLnJlc2V0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSB0d2VlbiBwcm9ncmVzcyB0byBjdXJyZW50IHBvc2l0aW9uLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVR3ZWVuUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfdHdlZW4pIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdHByb2dyZXNzID0gU2NlbmUucHJvZ3Jlc3MoKSxcclxuXHRcdFx0XHRcdHN0YXRlID0gU2NlbmUuc3RhdGUoKTtcclxuXHRcdFx0XHRpZiAoX3R3ZWVuLnJlcGVhdCAmJiBfdHdlZW4ucmVwZWF0KCkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHQvLyBpbmZpbml0ZSBsb29wLCBzbyBub3QgaW4gcmVsYXRpb24gdG8gcHJvZ3Jlc3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZSA9PT0gJ0RVUklORycgJiYgX3R3ZWVuLnBhdXNlZCgpKSB7XHJcblx0XHRcdFx0XHRcdF90d2Vlbi5wbGF5KCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlICE9PSAnRFVSSU5HJyAmJiAhX3R3ZWVuLnBhdXNlZCgpKSB7XHJcblx0XHRcdFx0XHRcdF90d2Vlbi5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgIT0gX3R3ZWVuLnByb2dyZXNzKCkpIHsgLy8gZG8gd2UgZXZlbiBuZWVkIHRvIHVwZGF0ZSB0aGUgcHJvZ3Jlc3M/XHJcblx0XHRcdFx0XHQvLyBubyBpbmZpbml0ZSBsb29wIC0gc28gc2hvdWxkIHdlIGp1c3QgcGxheSBvciBnbyB0byBhIHNwZWNpZmljIHBvaW50IGluIHRpbWU/XHJcblx0XHRcdFx0XHRpZiAoU2NlbmUuZHVyYXRpb24oKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBwbGF5IHRoZSBhbmltYXRpb25cclxuXHRcdFx0XHRcdFx0aWYgKHByb2dyZXNzID4gMCkgeyAvLyBwbGF5IGZyb20gMCB0byAxXHJcblx0XHRcdFx0XHRcdFx0X3R3ZWVuLnBsYXkoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHsgLy8gcGxheSBmcm9tIDEgdG8gMFxyXG5cdFx0XHRcdFx0XHRcdF90d2Vlbi5yZXZlcnNlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIGdvIHRvIGEgc3BlY2lmaWMgcG9pbnQgaW4gdGltZVxyXG5cdFx0XHRcdFx0XHRpZiAoU2NlbmUudHdlZW5DaGFuZ2VzKCkgJiYgX3R3ZWVuLnR3ZWVuVG8pIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBnbyBzbW9vdGhcclxuXHRcdFx0XHRcdFx0XHRfdHdlZW4udHdlZW5Ubyhwcm9ncmVzcyAqIF90d2Vlbi5kdXJhdGlvbigpKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBqdXN0IGhhcmQgc2V0IGl0XHJcblx0XHRcdFx0XHRcdFx0X3R3ZWVuLnByb2dyZXNzKHByb2dyZXNzKS5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIGEgdHdlZW4gdG8gdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBJZiB5b3Ugd2FudCB0byBhZGQgbXVsdGlwbGUgdHdlZW5zLCBhZGQgdGhlbSBpbnRvIGEgR1NBUCBUaW1lbGluZSBvYmplY3QgYW5kIHN1cHBseSBpdCBpbnN0ZWFkIChzZWUgZXhhbXBsZSBiZWxvdykuICBcclxuXHRcdCAqIFxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGhhcyBhIGR1cmF0aW9uLCB0aGUgdHdlZW4ncyBkdXJhdGlvbiB3aWxsIGJlIHByb2plY3RlZCB0byB0aGUgc2Nyb2xsIGRpc3RhbmNlIG9mIHRoZSBzY2VuZSwgbWVhbmluZyBpdHMgcHJvZ3Jlc3Mgd2lsbCBiZSBzeW5jZWQgdG8gc2Nyb2xsYmFyIG1vdmVtZW50LiAgXHJcblx0XHQgKiBGb3IgYSBzY2VuZSB3aXRoIGEgZHVyYXRpb24gb2YgYDBgLCB0aGUgdHdlZW4gd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBzY3JvbGxpbmcgZm9yd2FyZCBwYXN0IHRoZSBzY2VuZSdzIHRyaWdnZXIgcG9zaXRpb24gYW5kIHJldmVyc2VkLCB3aGVuIHNjcm9sbGluZyBiYWNrLiAgXHJcblx0XHQgKiBUbyBnYWluIGJldHRlciB1bmRlcnN0YW5kaW5nLCBjaGVjayBvdXQgdGhlIFtTaW1wbGUgVHdlZW5pbmcgZXhhbXBsZV0oLi4vZXhhbXBsZXMvYmFzaWMvc2ltcGxlX3R3ZWVuaW5nLmh0bWwpLlxyXG5cdFx0ICpcclxuXHRcdCAqIEluc3RlYWQgb2Ygc3VwcGx5aW5nIGEgdHdlZW4gdGhpcyBtZXRob2QgY2FuIGFsc28gYmUgdXNlZCBhcyBhIHNob3J0aGFuZCBmb3IgYFR3ZWVuTWF4LnRvKClgIChzZWUgZXhhbXBsZSBiZWxvdykuXHJcblx0XHQgKiBAbWVtYmVyb2YhIGFuaW1hdGlvbi5HU0FQI1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBhZGQgYSBzaW5nbGUgdHdlZW4gZGlyZWN0bHlcclxuXHRcdCAqIHNjZW5lLnNldFR3ZWVuKFR3ZWVuTWF4LnRvKFwib2JqXCIpLCAxLCB7eDogMTAwfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gYWRkIGEgc2luZ2xlIHR3ZWVuIHZpYSB2YXJpYWJsZVxyXG5cdFx0ICogdmFyIHR3ZWVuID0gVHdlZW5NYXgudG8oXCJvYmpcIiksIDEsIHt4OiAxMDB9O1xyXG5cdFx0ICogc2NlbmUuc2V0VHdlZW4odHdlZW4pO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGFkZCBtdWx0aXBsZSB0d2VlbnMsIHdyYXBwZWQgaW4gYSB0aW1lbGluZS5cclxuXHRcdCAqIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdFx0ICogdmFyIHR3ZWVuMSA9IFR3ZWVuTWF4LmZyb20oXCJvYmoxXCIsIDEsIHt4OiAxMDB9KTtcclxuXHRcdCAqIHZhciB0d2VlbjIgPSBUd2Vlbk1heC50byhcIm9iajJcIiwgMSwge3k6IDEwMH0pO1xyXG5cdFx0ICogdGltZWxpbmVcclxuXHRcdCAqXHRcdC5hZGQodHdlZW4xKVxyXG5cdFx0ICpcdFx0LmFkZCh0d2VlbjIpO1xyXG5cdFx0ICogc2NlbmUuYWRkVHdlZW4odGltZWxpbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNob3J0IGhhbmQgdG8gYWRkIGEgVHdlZW5NYXgudG8oKSB0d2VlblxyXG5cdFx0ICogc2NlbmUuc2V0VHdlZW4oXCJvYmozXCIsIDAuNSwge3k6IDEwMH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNob3J0IGhhbmQgdG8gYWRkIGEgVHdlZW5NYXgudG8oKSB0d2VlbiBmb3IgMSBzZWNvbmRcclxuXHRcdCAqIC8vIHRoaXMgaXMgdXNlZnVsLCB3aGVuIHRoZSBzY2VuZSBoYXMgYSBkdXJhdGlvbiBhbmQgdGhlIHR3ZWVuIGR1cmF0aW9uIGlzbid0IGltcG9ydGFudCBhbnl3YXlcclxuXHRcdCAqIHNjZW5lLnNldFR3ZWVuKFwib2JqM1wiLCB7eTogMTAwfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsob2JqZWN0fHN0cmluZyl9IFR3ZWVuT2JqZWN0IC0gQSBUd2Vlbk1heCwgVHdlZW5MaXRlLCBUaW1lbGluZU1heCBvciBUaW1lbGluZUxpdGUgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIGFuaW1hdGVkIGluIHRoZSBzY2VuZS4gQ2FuIGFsc28gYmUgYSBEb20gRWxlbWVudCBvciBTZWxlY3Rvciwgd2hlbiB1c2luZyBkaXJlY3QgdHdlZW4gZGVmaW5pdGlvbiAoc2VlIGV4YW1wbGVzKS5cclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxvYmplY3QpfSBkdXJhdGlvbiAtIEEgZHVyYXRpb24gZm9yIHRoZSB0d2Vlbiwgb3IgdHdlZW4gcGFyYW1ldGVycy4gSWYgYW4gb2JqZWN0IGNvbnRhaW5pbmcgcGFyYW1ldGVycyBhcmUgc3VwcGxpZWQsIGEgZGVmYXVsdCBkdXJhdGlvbiBvZiAxIHdpbGwgYmUgdXNlZC5cclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyBmb3IgdGhlIHR3ZWVuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHRTY2VuZS5zZXRUd2VlbiA9IGZ1bmN0aW9uIChUd2Vlbk9iamVjdCwgZHVyYXRpb24sIHBhcmFtcykge1xyXG5cdFx0XHR2YXIgbmV3VHdlZW47XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xyXG5cdFx0XHRcdFx0cGFyYW1zID0gZHVyYXRpb247XHJcblx0XHRcdFx0XHRkdXJhdGlvbiA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFR3ZWVuT2JqZWN0ID0gVHdlZW4udG8oVHdlZW5PYmplY3QsIGR1cmF0aW9uLCBwYXJhbXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Ly8gd3JhcCBUd2VlbiBpbnRvIGEgVGltZWxpbmUgT2JqZWN0IGlmIGF2YWlsYWJsZSB0byBpbmNsdWRlIGRlbGF5IGFuZCByZXBlYXRzIGluIHRoZSBkdXJhdGlvbiBhbmQgc3RhbmRhcmRpemUgbWV0aG9kcy5cclxuXHRcdFx0XHRpZiAoVGltZWxpbmUpIHtcclxuXHRcdFx0XHRcdG5ld1R3ZWVuID0gbmV3IFRpbWVsaW5lKHtcclxuXHRcdFx0XHRcdFx0XHRzbW9vdGhDaGlsZFRpbWluZzogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQuYWRkKFR3ZWVuT2JqZWN0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bmV3VHdlZW4gPSBUd2Vlbk9iamVjdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmV3VHdlZW4ucGF1c2UoKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNhbGxpbmcgbWV0aG9kICdzZXRUd2VlbigpJzogU3VwcGxpZWQgYXJndW1lbnQgaXMgbm90IGEgdmFsaWQgVHdlZW5PYmplY3RcIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfdHdlZW4pIHsgLy8ga2lsbCBvbGQgdHdlZW4/XHJcblx0XHRcdFx0U2NlbmUucmVtb3ZlVHdlZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfdHdlZW4gPSBuZXdUd2VlbjtcclxuXHJcblx0XHRcdC8vIHNvbWUgcHJvcGVydGllcyBuZWVkIHRvIGJlIHRyYW5zZmVycmVkIGl0IHRvIHRoZSB3cmFwcGVyLCBvdGhlcndpc2UgdGhleSB3b3VsZCBnZXQgbG9zdC5cclxuXHRcdFx0aWYgKFR3ZWVuT2JqZWN0LnJlcGVhdCAmJiBUd2Vlbk9iamVjdC5yZXBlYXQoKSA9PT0gLTEpIHsgLy8gVHdlZW5NYXggb3IgVGltZWxpbmVNYXggT2JqZWN0P1xyXG5cdFx0XHRcdF90d2Vlbi5yZXBlYXQoLTEpO1xyXG5cdFx0XHRcdF90d2Vlbi55b3lvKFR3ZWVuT2JqZWN0LnlveW8oKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gU29tZSB0d2VlbiB2YWxpZGF0aW9ucyBhbmQgZGVidWdnaW5nIGhlbHBlcnNcclxuXHJcblx0XHRcdGlmIChTY2VuZS50d2VlbkNoYW5nZXMoKSAmJiAhX3R3ZWVuLnR3ZWVuVG8pIHtcclxuXHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiB0d2VlbkNoYW5nZXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIFRpbWVsaW5lTWF4IG9iamVjdCBpcyBhdmFpbGFibGUgZm9yIFNjcm9sbE1hZ2ljLlwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gY2hlY2sgaWYgdGhlcmUgYXJlIHBvc2l0aW9uIHR3ZWVucyBkZWZpbmVkIGZvciB0aGUgdHJpZ2dlciBhbmQgd2FybiBhYm91dCBpdCA6KVxyXG5cdFx0XHRpZiAoX3R3ZWVuICYmIFNjZW5lLmNvbnRyb2xsZXIoKSAmJiBTY2VuZS50cmlnZ2VyRWxlbWVudCgpICYmIFNjZW5lLmxvZ2xldmVsKCkgPj0gMikgeyAvLyBjb250cm9sbGVyIGlzIG5lZWRlZCB0byBrbm93IHNjcm9sbCBkaXJlY3Rpb24uXHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHR0cmlnZ2VyVHdlZW5zID0gVHdlZW4uZ2V0VHdlZW5zT2YoU2NlbmUudHJpZ2dlckVsZW1lbnQoKSksXHJcblx0XHRcdFx0XHR2ZXJ0aWNhbCA9IFNjZW5lLmNvbnRyb2xsZXIoKS5pbmZvKFwidmVydGljYWxcIik7XHJcblx0XHRcdFx0dHJpZ2dlclR3ZWVucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHR0d2VlbnZhcnMgPSB2YWx1ZS52YXJzLmNzcyB8fCB2YWx1ZS52YXJzLFxyXG5cdFx0XHRcdFx0XHRjb25kaXRpb24gPSB2ZXJ0aWNhbCA/ICh0d2VlbnZhcnMudG9wICE9PSB1bmRlZmluZWQgfHwgdHdlZW52YXJzLmJvdHRvbSAhPT0gdW5kZWZpbmVkKSA6ICh0d2VlbnZhcnMubGVmdCAhPT0gdW5kZWZpbmVkIHx8IHR3ZWVudmFycy5yaWdodCAhPT0gdW5kZWZpbmVkKTtcclxuXHRcdFx0XHRcdGlmIChjb25kaXRpb24pIHtcclxuXHRcdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVHdlZW5pbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnQgYWZmZWN0cyB0aGUgc2NlbmUgdGltaW5nIGFuZCBzaG91bGQgYmUgYXZvaWRlZCFcIik7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gd2FybiBhYm91dCB0d2VlbiBvdmVyd3JpdGVzLCB3aGVuIGFuIGVsZW1lbnQgaXMgdHdlZW5lZCBtdWx0aXBsZSB0aW1lc1xyXG5cdFx0XHRpZiAocGFyc2VGbG9hdChUd2VlbkxpdGUudmVyc2lvbikgPj0gMS4xNCkgeyAvLyBvbk92ZXJ3cml0ZSBvbmx5IHByZXNlbnQgc2luY2UgR1NBUCB2MS4xNC4wXHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRsaXN0ID0gX3R3ZWVuLmdldENoaWxkcmVuID8gX3R3ZWVuLmdldENoaWxkcmVuKHRydWUsIHRydWUsIGZhbHNlKSA6IFtfdHdlZW5dLCAvLyBnZXQgYWxsIG5lc3RlZCB0d2VlbiBvYmplY3RzXHJcblx0XHRcdFx0XHRuZXdDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogdHdlZW4gd2FzIG92ZXJ3cml0dGVuIGJ5IGFub3RoZXIuIFRvIGxlYXJuIGhvdyB0byBhdm9pZCB0aGlzIGlzc3VlIHNlZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vamFucGFlcGtlL1Njcm9sbE1hZ2ljL3dpa2kvV0FSTklORzotdHdlZW4td2FzLW92ZXJ3cml0dGVuLWJ5LWFub3RoZXJcIik7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCB0aGlzVHdlZW4sIG9sZENhbGxiYWNrOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0Lypqc2hpbnQgbG9vcGZ1bmM6IHRydWUgKi9cclxuXHRcdFx0XHRcdHRoaXNUd2VlbiA9IGxpc3RbaV07XHJcblx0XHRcdFx0XHRpZiAob2xkQ2FsbGJhY2sgIT09IG5ld0NhbGxiYWNrKSB7IC8vIGlmIHR3ZWVucyBpcyBhZGRlZCBtb3JlIHRoYW4gb25jZVxyXG5cdFx0XHRcdFx0XHRvbGRDYWxsYmFjayA9IHRoaXNUd2Vlbi52YXJzLm9uT3ZlcndyaXRlO1xyXG5cdFx0XHRcdFx0XHR0aGlzVHdlZW4udmFycy5vbk92ZXJ3cml0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAob2xkQ2FsbGJhY2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9sZENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG5ld0NhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxvZygzLCBcImFkZGVkIHR3ZWVuXCIpO1xyXG5cclxuXHRcdFx0dXBkYXRlVHdlZW5Qcm9ncmVzcygpO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSB0d2VlbiBmcm9tIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogVGhpcyB3aWxsIHRlcm1pbmF0ZSB0aGUgY29udHJvbCBvZiB0aGUgU2NlbmUgb3ZlciB0aGUgdHdlZW4uXHJcblx0XHQgKlxyXG5cdFx0ICogVXNpbmcgdGhlIHJlc2V0IG9wdGlvbiB5b3UgY2FuIGRlY2lkZSBpZiB0aGUgdHdlZW4gc2hvdWxkIHJlbWFpbiBpbiB0aGUgY3VycmVudCBzdGF0ZSBvciBiZSByZXdvdW5kIHRvIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnRzIGJhY2sgdG8gdGhlIHN0YXRlIHRoZXkgd2VyZSBpbiBiZWZvcmUgdGhlIHR3ZWVuIHdhcyBhZGRlZCB0byB0aGUgc2NlbmUuXHJcblx0XHQgKiBAbWVtYmVyb2YhIGFuaW1hdGlvbi5HU0FQI1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgdGhlIHR3ZWVuIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXR0aW5nIGl0XHJcblx0XHQgKiBzY2VuZS5yZW1vdmVUd2VlbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgdHdlZW4gZnJvbSB0aGUgc2NlbmUgYW5kIHJlc2V0IGl0IHRvIGluaXRpYWwgcG9zaXRpb25cclxuXHRcdCAqIHNjZW5lLnJlbW92ZVR3ZWVuKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdHdlZW4gd2lsbCBiZSByZXNldCB0byBpdHMgaW5pdGlhbCB2YWx1ZXMuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHRTY2VuZS5yZW1vdmVUd2VlbiA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRpZiAoX3R3ZWVuKSB7XHJcblx0XHRcdFx0aWYgKHJlc2V0KSB7XHJcblx0XHRcdFx0XHRfdHdlZW4ucHJvZ3Jlc3MoMCkucGF1c2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3R3ZWVuLmtpbGwoKTtcclxuXHRcdFx0XHRfdHdlZW4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCB0d2VlbiAocmVzZXQ6IFwiICsgKHJlc2V0ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdH0pO1xyXG59KSk7XG4iLCIvKiFcclxuICogU2Nyb2xsTWFnaWMgdjIuMC43ICgyMDE5LTA1LTA3KVxyXG4gKiBUaGUgamF2YXNjcmlwdCBsaWJyYXJ5IGZvciBtYWdpY2FsIHNjcm9sbCBpbnRlcmFjdGlvbnMuXHJcbiAqIChjKSAyMDE5IEphbiBQYWVwa2UgKEBqYW5wYWVwa2UpXHJcbiAqIFByb2plY3QgV2Vic2l0ZTogaHR0cDovL3Njcm9sbG1hZ2ljLmlvXHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAyLjAuN1xyXG4gKiBAbGljZW5zZSBEdWFsIGxpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlIGFuZCBHUEwuXHJcbiAqIEBhdXRob3IgSmFuIFBhZXBrZSAtIGUtbWFpbEBqYW5wYWVwa2UuZGVcclxuICpcclxuICogQGZpbGUgU2Nyb2xsTWFnaWMgbWFpbiBsaWJyYXJ5LlxyXG4gKi9cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgU2Nyb2xsTWFnaWNcclxuICovXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuXHRcdGRlZmluZShmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBCcm93c2VyIGdsb2JhbFxyXG5cdFx0cm9vdC5TY3JvbGxNYWdpYyA9IGZhY3RvcnkoKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHR2YXIgU2Nyb2xsTWFnaWMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRfdXRpbC5sb2coMiwgJyhDT01QQVRJQklMSVRZIE5PVElDRSkgLT4gQXMgb2YgU2Nyb2xsTWFnaWMgMi4wLjAgeW91IG5lZWQgdG8gdXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKClcXCcgdG8gY3JlYXRlIGEgbmV3IGNvbnRyb2xsZXIgaW5zdGFuY2UuIFVzZSBcXCduZXcgU2Nyb2xsTWFnaWMuU2NlbmUoKVxcJyB0byBpbnN0YW5jZSBhIHNjZW5lLicpO1xyXG5cdH07XHJcblxyXG5cdFNjcm9sbE1hZ2ljLnZlcnNpb24gPSBcIjIuMC43XCI7XHJcblxyXG5cdC8vIFRPRE86IHRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBjaHJvbWUncyBzY3JvbGwgaml0dGVyIGJ1Z1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG5cdC8vIGdsb2JhbCBjb25zdFxyXG5cdHZhciBQSU5fU1BBQ0VSX0FUVFJJQlVURSA9IFwiZGF0YS1zY3JvbGxtYWdpYy1waW4tc3BhY2VyXCI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBtYWluIGNsYXNzIHRoYXQgaXMgbmVlZGVkIG9uY2UgcGVyIHNjcm9sbCBjb250YWluZXIuXHJcblx0ICpcclxuXHQgKiBAY2xhc3NcclxuXHQgKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gYmFzaWMgaW5pdGlhbGl6YXRpb25cclxuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcblx0ICpcclxuXHQgKiAvLyBwYXNzaW5nIG9wdGlvbnNcclxuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKHtjb250YWluZXI6IFwiI215Q29udGFpbmVyXCIsIGxvZ2xldmVsOiAzfSk7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgb3B0aW9ucyBmb3IgdGhlIGNvbnRyb2xsZXIuXHJcblx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLmNvbnRhaW5lcj13aW5kb3ddIC0gQSBzZWxlY3RvciwgRE9NIG9iamVjdCB0aGF0IHJlZmVyZW5jZXMgdGhlIG1haW4gY29udGFpbmVyIGZvciBzY3JvbGxpbmcuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52ZXJ0aWNhbD10cnVlXSAtIFNldHMgdGhlIHNjcm9sbCBtb2RlIHRvIHZlcnRpY2FsIChgdHJ1ZWApIG9yIGhvcml6b250YWwgKGBmYWxzZWApIHNjcm9sbGluZy5cclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zPXt9XSAtIFRoZXNlIG9wdGlvbnMgd2lsbCBiZSBwYXNzZWQgdG8gZXZlcnkgU2NlbmUgdGhhdCBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB1c2luZyB0aGUgYWRkU2NlbmUgbWV0aG9kLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBTY2VuZSBvcHRpb25zIHNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuU2NlbmV9LlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sb2dsZXZlbD0yXSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgMGAgPT4gc2lsZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDFgID0+IGVycm9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDNgID0+IGVycm9ycywgd2FybmluZ3MsIGRlYnVnaW5mb1xyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVmcmVzaEludGVydmFsPTEwMF0gLSBTb21lIGNoYW5nZXMgZG9uJ3QgY2FsbCBldmVudHMgYnkgZGVmYXVsdCwgbGlrZSBjaGFuZ2luZyB0aGUgY29udGFpbmVyIHNpemUgb3IgbW92aW5nIGEgc2NlbmUgdHJpZ2dlciBlbGVtZW50LiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVGhpcyBpbnRlcnZhbCBwb2xscyB0aGVzZSBwYXJhbWV0ZXJzIHRvIGZpcmUgdGhlIG5lY2Vzc2FyeSBldmVudHMuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBJZiB5b3UgZG9uJ3QgdXNlIGN1c3RvbSBjb250YWluZXJzLCB0cmlnZ2VyIGVsZW1lbnRzIG9yIGhhdmUgc3RhdGljIGxheW91dHMsIHdoZXJlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIHRyaWdnZXIgZWxlbWVudHMgZG9uJ3QgY2hhbmdlLCB5b3UgY2FuIHNldCB0aGlzIHRvIDAgZGlzYWJsZSBpbnRlcnZhbCBjaGVja2luZyBhbmQgaW1wcm92ZSBwZXJmb3JtYW5jZS5cclxuXHQgKlxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHNldHRpbmdzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdHZhclxyXG5cdFx0XHROQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuQ29udHJvbGxlcicsXHJcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA9ICdGT1JXQVJEJyxcclxuXHRcdFx0U0NST0xMX0RJUkVDVElPTl9SRVZFUlNFID0gJ1JFVkVSU0UnLFxyXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1BBVVNFRCA9ICdQQVVTRUQnLFxyXG5cdFx0XHRERUZBVUxUX09QVElPTlMgPSBDT05UUk9MTEVSX09QVElPTlMuZGVmYXVsdHM7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHByaXZhdGUgdmFyc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblx0XHR2YXJcclxuXHRcdFx0Q29udHJvbGxlciA9IHRoaXMsXHJcblx0XHRcdF9vcHRpb25zID0gX3V0aWwuZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpLFxyXG5cdFx0XHRfc2NlbmVPYmplY3RzID0gW10sXHJcblx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlLCAvLyBjYW4gYmUgYm9vbGVhbiAodHJ1ZSA9PiBhbGwgc2NlbmVzKSBvciBhbiBhcnJheSBvZiBzY2VuZXMgdG8gYmUgdXBkYXRlZFxyXG5cdFx0XHRfc2Nyb2xsUG9zID0gMCxcclxuXHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VELFxyXG5cdFx0XHRfaXNEb2N1bWVudCA9IHRydWUsXHJcblx0XHRcdF92aWV3UG9ydFNpemUgPSAwLFxyXG5cdFx0XHRfZW5hYmxlZCA9IHRydWUsXHJcblx0XHRcdF91cGRhdGVUaW1lb3V0LFxyXG5cdFx0XHRfcmVmcmVzaFRpbWVvdXQ7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHByaXZhdGUgZnVuY3Rpb25zXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEludGVybmFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMpIHtcclxuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBVbmtub3duIG9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XHJcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gX3V0aWwuZ2V0LmVsZW1lbnRzKF9vcHRpb25zLmNvbnRhaW5lcilbMF07XHJcblx0XHRcdC8vIGNoZWNrIFNjcm9sbENvbnRhaW5lclxyXG5cdFx0XHRpZiAoIV9vcHRpb25zLmNvbnRhaW5lcikge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNyZWF0aW5nIG9iamVjdCBcIiArIE5BTUVTUEFDRSArIFwiOiBObyB2YWxpZCBzY3JvbGwgY29udGFpbmVyIHN1cHBsaWVkXCIpO1xyXG5cdFx0XHRcdHRocm93IE5BTUVTUEFDRSArIFwiIGluaXQgZmFpbGVkLlwiOyAvLyBjYW5jZWxcclxuXHRcdFx0fVxyXG5cdFx0XHRfaXNEb2N1bWVudCA9IF9vcHRpb25zLmNvbnRhaW5lciA9PT0gd2luZG93IHx8IF9vcHRpb25zLmNvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSB8fCAhZG9jdW1lbnQuYm9keS5jb250YWlucyhfb3B0aW9ucy5jb250YWluZXIpO1xyXG5cdFx0XHQvLyBub3JtYWxpemUgdG8gd2luZG93XHJcblx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lciA9IHdpbmRvdztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB1cGRhdGUgY29udGFpbmVyIHNpemUgaW1tZWRpYXRlbHlcclxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpO1xyXG5cdFx0XHQvLyBzZXQgZXZlbnQgaGFuZGxlcnNcclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbkNoYW5nZSk7XHJcblxyXG5cdFx0XHR2YXIgcmkgPSBwYXJzZUludChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwsIDEwKTtcclxuXHRcdFx0X29wdGlvbnMucmVmcmVzaEludGVydmFsID0gX3V0aWwudHlwZS5OdW1iZXIocmkpID8gcmkgOiBERUZBVUxUX09QVElPTlMucmVmcmVzaEludGVydmFsO1xyXG5cdFx0XHRzY2hlZHVsZVJlZnJlc2goKTtcclxuXHJcblx0XHRcdGxvZygzLCBcImFkZGVkIG5ldyBcIiArIE5BTUVTUEFDRSArIFwiIGNvbnRyb2xsZXIgKHZcIiArIFNjcm9sbE1hZ2ljLnZlcnNpb24gKyBcIilcIik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NoZWR1bGUgdGhlIG5leHQgZXhlY3V0aW9uIG9mIHRoZSByZWZyZXNoIGZ1bmN0aW9uXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgc2NoZWR1bGVSZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMucmVmcmVzaEludGVydmFsID4gMCkge1xyXG5cdFx0XHRcdF9yZWZyZXNoVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlZnJlc2gsIF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxQb3MobmV3RnVuY3Rpb24pYFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGdldFNjcm9sbFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LnNjcm9sbFRvcChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LnNjcm9sbExlZnQoX29wdGlvbnMuY29udGFpbmVyKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZpZXdwb3J0IFNpemUgKHdpZHRoIHZvciBob3Jpem9udGFsLCBoZWlnaHQgZm9yIHZlcnRpY2FsKVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGdldFZpZXdwb3J0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LmhlaWdodChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LndpZHRoKF9vcHRpb25zLmNvbnRhaW5lcik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmYXVsdCBmdW5jdGlvbiB0byBzZXQgc2Nyb2xsIHBvcyAtIG92ZXJ3cml0ZWFibGUgdXNpbmcgYENvbnRyb2xsZXIuc2Nyb2xsVG8obmV3RnVuY3Rpb24pYFxyXG5cdFx0ICogTWFrZSBhdmFpbGFibGUgcHVibGljbHkgZm9yIHBpbm5lZCBtb3VzZXdoZWVsIHdvcmthcm91bmQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgc2V0U2Nyb2xsUG9zID0gdGhpcy5fc2V0U2Nyb2xsUG9zID0gZnVuY3Rpb24gKHBvcykge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMudmVydGljYWwpIHtcclxuXHRcdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyhfdXRpbC5nZXQuc2Nyb2xsTGVmdCgpLCBwb3MpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsVG9wID0gcG9zO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyhwb3MsIF91dGlsLmdldC5zY3JvbGxUb3AoKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gcG9zO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhhbmRsZSB1cGRhdGVzIGluIGN5Y2xlcyBpbnN0ZWFkIG9mIG9uIHNjcm9sbCAocGVyZm9ybWFuY2UpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlU2NlbmVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2VuYWJsZWQgJiYgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKSB7XHJcblx0XHRcdFx0Ly8gZGV0ZXJtaW5lIHNjZW5lcyB0byB1cGRhdGVcclxuXHRcdFx0XHR2YXIgc2NlbmVzVG9VcGRhdGUgPSBfdXRpbC50eXBlLkFycmF5KF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSkgPyBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgOiBfc2NlbmVPYmplY3RzLnNsaWNlKDApO1xyXG5cdFx0XHRcdC8vIHJlc2V0IHNjZW5lc1xyXG5cdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHZhciBvbGRTY3JvbGxQb3MgPSBfc2Nyb2xsUG9zO1xyXG5cdFx0XHRcdC8vIHVwZGF0ZSBzY3JvbGwgcG9zIG5vdyBpbnN0ZWFkIG9mIG9uQ2hhbmdlLCBhcyBpdCBtaWdodCBoYXZlIGNoYW5nZWQgc2luY2Ugc2NoZWR1bGluZyAoaS5lLiBpbi1icm93c2VyIHNtb290aCBzY3JvbGwpXHJcblx0XHRcdFx0X3Njcm9sbFBvcyA9IENvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHRcdFx0dmFyIGRlbHRhU2Nyb2xsID0gX3Njcm9sbFBvcyAtIG9sZFNjcm9sbFBvcztcclxuXHRcdFx0XHRpZiAoZGVsdGFTY3JvbGwgIT09IDApIHsgLy8gc2Nyb2xsIHBvc2l0aW9uIGNoYW5nZWQ/XHJcblx0XHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gKGRlbHRhU2Nyb2xsID4gMCkgPyBTQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgOiBTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHJldmVyc2Ugb3JkZXIgb2Ygc2NlbmVzIGlmIHNjcm9sbGluZyByZXZlcnNlXHJcblx0XHRcdFx0aWYgKF9zY3JvbGxEaXJlY3Rpb24gPT09IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRSkge1xyXG5cdFx0XHRcdFx0c2NlbmVzVG9VcGRhdGUucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyB1cGRhdGUgc2NlbmVzXHJcblx0XHRcdFx0c2NlbmVzVG9VcGRhdGUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRsb2coMywgXCJ1cGRhdGluZyBTY2VuZSBcIiArIChpbmRleCArIDEpICsgXCIvXCIgKyBzY2VuZXNUb1VwZGF0ZS5sZW5ndGggKyBcIiAoXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIHRvdGFsKVwiKTtcclxuXHRcdFx0XHRcdHNjZW5lLnVwZGF0ZSh0cnVlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoc2NlbmVzVG9VcGRhdGUubGVuZ3RoID09PSAwICYmIF9vcHRpb25zLmxvZ2xldmVsID49IDMpIHtcclxuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIDAgU2NlbmVzIChub3RoaW5nIGFkZGVkIHRvIGNvbnRyb2xsZXIpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEluaXRpYWxpemVzIHJBRiBjYWxsYmFja1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGRlYm91bmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfdXBkYXRlVGltZW91dCA9IF91dGlsLnJBRih1cGRhdGVTY2VuZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhhbmRsZXMgQ29udGFpbmVyIGNoYW5nZXNcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGxvZygzLCBcImV2ZW50IGZpcmVkIGNhdXNpbmcgYW4gdXBkYXRlOlwiLCBlLnR5cGUpO1xyXG5cdFx0XHRpZiAoZS50eXBlID09IFwicmVzaXplXCIpIHtcclxuXHRcdFx0XHQvLyByZXNpemVcclxuXHRcdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XHJcblx0XHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0ZVxyXG5cdFx0XHRpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlICE9PSB0cnVlKSB7XHJcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gdHJ1ZTtcclxuXHRcdFx0XHRkZWJvdW5jZVVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciByZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoIV9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0Ly8gc2ltdWxhdGUgcmVzaXplIGV2ZW50LiBPbmx5IHdvcmtzIGZvciB2aWV3cG9ydCByZWxldmFudCBwYXJhbSAocGVyZm9ybWFuY2UpXHJcblx0XHRcdFx0aWYgKF92aWV3UG9ydFNpemUgIT0gZ2V0Vmlld3BvcnRTaXplKCkpIHtcclxuXHRcdFx0XHRcdHZhciByZXNpemVFdmVudDtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gbmV3IEV2ZW50KCdyZXNpemUnLCB7XHJcblx0XHRcdFx0XHRcdFx0YnViYmxlczogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7IC8vIHN0dXBpZCBJRVxyXG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50LmluaXRFdmVudChcInJlc2l6ZVwiLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQocmVzaXplRXZlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfc2NlbmVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkgeyAvLyByZWZyZXNoIGFsbCBzY2VuZXNcclxuXHRcdFx0XHRzY2VuZS5yZWZyZXNoKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzY2hlZHVsZVJlZnJlc2goKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZW5kIGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqIHByb3ZpZGVkIHB1YmxpY2x5IHdpdGggX2xvZyBmb3IgcGx1Z2luc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cclxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKi9cclxuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPlwiKTtcclxuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly8gZm9yIHNjZW5lcyB3ZSBoYXZlIGdldHRlcnMgZm9yIGVhY2ggb3B0aW9uLCBidXQgZm9yIHRoZSBjb250cm9sbGVyIHdlIGRvbid0LCBzbyB3ZSBuZWVkIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGV4dGVybmFsbHkgZm9yIHBsdWdpbnNcclxuXHRcdHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNvcnQgc2NlbmVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBzdGFydCBvZmZzZXQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IFNjZW5lc0FycmF5IC0gYW4gYXJyYXkgb2YgU2Nyb2xsTWFnaWMgU2NlbmVzIHRoYXQgc2hvdWxkIGJlIHNvcnRlZFxyXG5cdFx0ICogQHJldHVybiB7YXJyYXl9IFRoZSBzb3J0ZWQgYXJyYXkgb2YgU2NlbmVzLlxyXG5cdFx0ICovXHJcblx0XHR2YXIgc29ydFNjZW5lcyA9IGZ1bmN0aW9uIChTY2VuZXNBcnJheSkge1xyXG5cdFx0XHRpZiAoU2NlbmVzQXJyYXkubGVuZ3RoIDw9IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmVzQXJyYXk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIHNjZW5lcyA9IFNjZW5lc0FycmF5LnNsaWNlKDApO1xyXG5cdFx0XHRcdHNjZW5lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYS5zY3JvbGxPZmZzZXQoKSA+IGIuc2Nyb2xsT2Zmc2V0KCkgPyAxIDogLTE7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHNjZW5lcztcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIG9uZSBvcmUgbW9yZSBzY2VuZShzKSB0byB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUuYWRkVG8oY29udHJvbGxlcilgLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHdpdGggYSBwcmV2aW91c2x5IGRlZmluZWQgc2NlbmVcclxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHdpdGggYSBuZXdseSBjcmVhdGVkIHNjZW5lLlxyXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe2R1cmF0aW9uIDogMH0pKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBhZGRpbmcgbXVsdGlwbGUgc2NlbmVzXHJcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKFtzY2VuZSwgc2NlbmUyLCBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe2R1cmF0aW9uIDogMH0pXSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoU2Nyb2xsTWFnaWMuU2NlbmV8YXJyYXkpfSBuZXdTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0byBiZSBhZGRlZCB0byB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmFkZFNjZW5lID0gZnVuY3Rpb24gKG5ld1NjZW5lKSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KG5ld1NjZW5lKSkge1xyXG5cdFx0XHRcdG5ld1NjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Q29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSBpZiAobmV3U2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkge1xyXG5cdFx0XHRcdGlmIChuZXdTY2VuZS5jb250cm9sbGVyKCkgIT09IENvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRcdG5ld1NjZW5lLmFkZFRvKENvbnRyb2xsZXIpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3NjZW5lT2JqZWN0cy5pbmRleE9mKG5ld1NjZW5lKSA8IDApIHtcclxuXHRcdFx0XHRcdC8vIG5ldyBzY2VuZVxyXG5cdFx0XHRcdFx0X3NjZW5lT2JqZWN0cy5wdXNoKG5ld1NjZW5lKTsgLy8gYWRkIHRvIGFycmF5XHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTsgLy8gc29ydFxyXG5cdFx0XHRcdFx0bmV3U2NlbmUub24oXCJzaGlmdC5jb250cm9sbGVyX3NvcnRcIiwgZnVuY3Rpb24gKCkgeyAvLyByZXNvcnQgd2hlbmV2ZXIgc2NlbmUgbW92ZXNcclxuXHRcdFx0XHRcdFx0X3NjZW5lT2JqZWN0cyA9IHNvcnRTY2VuZXMoX3NjZW5lT2JqZWN0cyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIGluc2VydCBHbG9iYWwgZGVmYXVsdHMuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuZXdTY2VuZVtrZXldKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3U2NlbmVba2V5XS5jYWxsKG5ld1NjZW5lLCBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnNba2V5XSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxvZygzLCBcImFkZGluZyBTY2VuZSAobm93IFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiB0b3RhbClcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBpbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIGZvciAnLmFkZFNjZW5lKCknXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBvbmUgb3JlIG1vcmUgc2NlbmUocykgZnJvbSB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUucmVtb3ZlKClgLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSBhIHNjZW5lIGZyb20gdGhlIGNvbnRyb2xsZXJcclxuXHRcdCAqIGNvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSBtdWx0aXBsZSBzY2VuZXMgZnJvbSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5yZW1vdmVTY2VuZShbc2NlbmUsIHNjZW5lMiwgc2NlbmUzXSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoU2Nyb2xsTWFnaWMuU2NlbmV8YXJyYXkpfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBAcmV0dXJucyB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVtb3ZlU2NlbmUgPSBmdW5jdGlvbiAoU2NlbmUpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XHJcblx0XHRcdFx0U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSBfc2NlbmVPYmplY3RzLmluZGV4T2YoU2NlbmUpO1xyXG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRTY2VuZS5vZmYoXCJzaGlmdC5jb250cm9sbGVyX3NvcnRcIik7XHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRsb2coMywgXCJyZW1vdmluZyBTY2VuZSAobm93IFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiBsZWZ0KVwiKTtcclxuXHRcdFx0XHRcdFNjZW5lLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0ICogVXBkYXRlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBhY2NvcmRpbmcgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUudXBkYXRlKClgLiAgXHJcblx0ICogVGhlIHVwZGF0ZSBtZXRob2QgY2FsY3VsYXRlcyB0aGUgc2NlbmUncyBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIChiYXNlZCBvbiB0aGUgdHJpZ2dlciBlbGVtZW50LCB0cmlnZ2VyIGhvb2ssIGR1cmF0aW9uIGFuZCBvZmZzZXQpIGFuZCBjaGVja3MgaXQgYWdhaW5zdCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxyXG5cdCAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuICBcclxuXHQgKiBfKipOb3RlOioqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGNvbnN0YW50bHkgd2hlbmV2ZXIgQ29udHJvbGxlciBkZXRlY3RzIGEgY2hhbmdlLiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgeW91IGlzIGlmIHlvdSBjaGFuZ2Ugc29tZXRoaW5nIG91dHNpZGUgb2YgdGhlIHJlYWxtIG9mIFNjcm9sbE1hZ2ljLCBsaWtlIG1vdmluZyB0aGUgdHJpZ2dlciBvciBjaGFuZ2luZyB0d2VlbiBwYXJhbWV0ZXJzLl9cclxuXHQgKiBAcHVibGljXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyB1cGRhdGUgYSBzcGVjaWZpYyBzY2VuZSBvbiBuZXh0IGN5Y2xlXHJcbiBcdCAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUpO1xyXG4gXHQgKlxyXG5cdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIGltbWVkaWF0ZWx5XHJcblx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgdHJ1ZSk7XHJcbiBcdCAqXHJcblx0ICogLy8gdXBkYXRlIG11bHRpcGxlIHNjZW5lcyBzY2VuZSBvbiBuZXh0IGN5Y2xlXHJcblx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShbc2NlbmUxLCBzY2VuZTIsIHNjZW5lM10pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTY3JvbGxNYWdpYy5TY2VuZX0gU2NlbmUgLSBTY3JvbGxNYWdpYyBTY2VuZSBvciBBcnJheSBvZiBTY2VuZXMgdGhhdCBpcy9hcmUgc3VwcG9zZWQgdG8gYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlLiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBUaGlzIGlzIHVzZWZ1bCB3aGVuIGNoYW5naW5nIG11bHRpcGxlIHByb3BlcnRpZXMgb2YgdGhlIHNjZW5lIC0gdGhpcyB3YXkgaXQgd2lsbCBvbmx5IGJlIHVwZGF0ZWQgb25jZSBhbGwgbmV3IHByb3BlcnRpZXMgYXJlIHNldCAodXBkYXRlU2NlbmVzKS5cclxuXHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHQgKi9cclxuXHRcdHRoaXMudXBkYXRlU2NlbmUgPSBmdW5jdGlvbiAoU2NlbmUsIGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KFNjZW5lKSkge1xyXG5cdFx0XHRcdFNjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgaW1tZWRpYXRlbHkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlICE9PSB0cnVlICYmIFNjZW5lIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHsgLy8gaWYgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIGlzIHRydWUsIGFsbCBjb25uZWN0ZWQgc2NlbmVzIGFyZSBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgdXBkYXRlXHJcblx0XHRcdFx0XHQvLyBwcmVwIGFycmF5IGZvciBuZXh0IHVwZGF0ZSBjeWNsZVxyXG5cdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIHx8IFtdO1xyXG5cdFx0XHRcdFx0aWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5pbmRleE9mKFNjZW5lKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUucHVzaChTY2VuZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBzb3J0U2NlbmVzKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSk7IC8vIHNvcnRcclxuXHRcdFx0XHRcdGRlYm91bmNlVXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIGNvbnRyb2xsZXIgcGFyYW1zIGFuZCBjYWxscyB1cGRhdGVTY2VuZSBvbiBldmVyeSBzY2VuZSwgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogU2VlIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKClgIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgdGhpcyBtZWFucy4gIFxyXG5cdFx0ICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCBub3QgbmVlZCB0aGlzIGZ1bmN0aW9uLCBhcyBpdCBpcyBjYWxsZWQgY29uc3RhbnRseSwgd2hlbmV2ZXIgU2Nyb2xsTWFnaWMgZGV0ZWN0cyBhIHN0YXRlIGNoYW5nZSBldmVudCwgbGlrZSByZXNpemUgb3Igc2Nyb2xsLiAgXHJcblx0XHQgKiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBtZXRob2QgaXMgd2hlbiBTY3JvbGxNYWdpYyBmYWlscyB0byBkZXRlY3QgdGhlc2UgZXZlbnRzLiAgXHJcblx0XHQgKiBPbmUgYXBwbGljYXRpb24gaXMgd2l0aCBzb21lIGV4dGVybmFsIHNjcm9sbCBsaWJyYXJpZXMgKGxpa2UgaVNjcm9sbCkgdGhhdCBtb3ZlIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBhIG5lZ2F0aXZlIG9mZnNldCBpbnN0ZWFkIG9mIGFjdHVhbGx5IHNjcm9sbGluZy4gSW4gdGhpcyBjYXNlIHRoZSB1cGRhdGUgb24gdGhlIGNvbnRyb2xsZXIgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBjaGlsZCBjb250YWluZXIncyBwb3NpdGlvbiBjaGFuZ2VzLlxyXG5cdFx0ICogRm9yIHRoaXMgY2FzZSB0aGVyZSB3aWxsIGFsc28gYmUgdGhlIG5lZWQgdG8gcHJvdmlkZSBhIGN1c3RvbSBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGNvcnJlY3Qgc2Nyb2xsIHBvc2l0aW9uLiBTZWUgYENvbnRyb2xsZXIuc2Nyb2xsUG9zKClgIGZvciBkZXRhaWxzLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgY29udHJvbGxlciBvbiBuZXh0IGN5Y2xlIChzYXZlcyBwZXJmb3JtYW5jZSBkdWUgdG8gZWxpbWluYXRpb24gb2YgcmVkdW5kYW50IHVwZGF0ZXMpXHJcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgY29udHJvbGxlciBpbW1lZGlhdGVseVxyXG5cdFx0ICogY29udHJvbGxlci51cGRhdGUodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZSAoYmV0dGVyIHBlcmZvcm1hbmNlKVxyXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdG9uQ2hhbmdlKHtcclxuXHRcdFx0XHR0eXBlOiBcInJlc2l6ZVwiXHJcblx0XHRcdH0pOyAvLyB3aWxsIHVwZGF0ZSBzaXplIGFuZCBzZXQgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIHRvIHRydWVcclxuXHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0dXBkYXRlU2NlbmVzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2Nyb2xsIHRvIGEgbnVtZXJpYyBzY3JvbGwgb2Zmc2V0LCBhIERPTSBlbGVtZW50LCB0aGUgc3RhcnQgb2YgYSBzY2VuZSBvciBwcm92aWRlIGFuIGFsdGVybmF0ZSBtZXRob2QgZm9yIHNjcm9sbGluZy4gIFxyXG5cdFx0ICogRm9yIHZlcnRpY2FsIGNvbnRyb2xsZXJzIGl0IHdpbGwgY2hhbmdlIHRoZSB0b3Agc2Nyb2xsIG9mZnNldCBhbmQgZm9yIGhvcml6b250YWwgYXBwbGljYXRpb25zIGl0IHdpbGwgY2hhbmdlIHRoZSBsZWZ0IG9mZnNldC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBzY3JvbGwgdG8gYW4gb2Zmc2V0IG9mIDEwMFxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDApO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNjcm9sbCB0byBhIERPTSBlbGVtZW50XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKFwiI2FuY2hvclwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzY3JvbGwgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHNjZW5lXHJcblx0XHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe29mZnNldDogMjAwfSk7XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKHNjZW5lKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIHBvc2l0aW9uIG1vZGlmaWNhdGlvbiBmdW5jdGlvbiAoalF1ZXJ5IGFuaW1hdGUgaW5zdGVhZCBvZiBqdW1wKVxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zKSB7XHJcblx0XHQgKlx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDApOyAvLyBjYWxsIGFzIHVzdWFsLCBidXQgdGhlIG5ldyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgaW5zdGVhZFxyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBtZXNzYWdlKSB7XHJcblx0XHQgKiAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciB0byB0aGUgZGVmaW5lZCBjdXN0b20gZnVuY3Rpb25cclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCBcIm15IG1lc3NhZ2VcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGNvbnRhaW5pbmcgbXVsdGlwbGUgdmFyaWFibGVzXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG9wdGlvbnMpIHtcclxuXHRcdCAqICBzb21lR2xvYmFsVmFyID0gb3B0aW9ucy5hICsgb3B0aW9ucy5iO1xyXG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIgY29udGFpbmluZyBtdWx0aXBsZSBvcHRpb25zXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwge2E6IDEsIGI6IDJ9KTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYSBjYWxsYmFjayBzdXBwbGllZCBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBjYWxsYmFjaykge1xyXG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9LCA0MDAsIFwic3dpbmdcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciwgd2hpY2ggaXMgdXNlZCBhcyBhIGNhbGxiYWNrIGluIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgY3VzdG9tIHNjcm9sbCBmdW5jdGlvblxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICpcdGNvbnNvbGUubG9nKFwic2Nyb2xsIGhhcyBmaW5pc2hlZC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge21peGVkfSBzY3JvbGxUYXJnZXQgLSBUaGUgc3VwcGxpZWQgYXJndW1lbnQgY2FuIGJlIG9uZSBvZiB0aGVzZSB0eXBlczpcclxuXHRcdCAqIDEuIGBudW1iZXJgIC0+IFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhpcyBuZXcgc2Nyb2xsIG9mZnNldC5cclxuXHRcdCAqIDIuIGBzdHJpbmdgIG9yIGBvYmplY3RgIC0+IENhbiBiZSBhIHNlbGVjdG9yIG9yIGEgRE9NIG9iamVjdC4gIFxyXG5cdFx0ICogIFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhlIHBvc2l0aW9uIG9mIHRoaXMgZWxlbWVudC5cclxuXHRcdCAqIDMuIGBTY3JvbGxNYWdpYyBTY2VuZWAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhpcyBzY2VuZS5cclxuXHRcdCAqIDQuIGBmdW5jdGlvbmAgLT4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGZ1dHVyZSBzY3JvbGwgcG9zaXRpb24gbW9kaWZpY2F0aW9ucy4gIFxyXG5cdFx0ICogIFRoaXMgcHJvdmlkZXMgYSB3YXkgZm9yIHlvdSB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBvZiBzY3JvbGxpbmcgYW5kIGFkZGluZyBuZXcgYmVoYXZpb3VyIGxpa2UgYW5pbWF0aW9uLiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gYXMgYSBwYXJhbWV0ZXIgYW5kIGEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCB1c2luZyBgdGhpc2AuICBcclxuXHRcdCAqICBJdCBtYXkgYWxzbyBvcHRpb25hbGx5IHJlY2VpdmUgYW4gb3B0aW9uYWwgYWRkaXRpb25hbCBwYXJhbWV0ZXIgKHNlZSBiZWxvdykgIFxyXG5cdFx0ICogIF8qKk5PVEU6KiogIFxyXG5cdFx0ICogIEFsbCBvdGhlciBvcHRpb25zIHdpbGwgc3RpbGwgd29yayBhcyBleHBlY3RlZCwgdXNpbmcgdGhlIG5ldyBmdW5jdGlvbiB0byBzY3JvbGwuX1xyXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gW2FkZGl0aW9uYWxQYXJhbWV0ZXJdIC0gSWYgYSBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uIHdhcyBkZWZpbmVkIChzZWUgYWJvdmUgNC4pLCB5b3UgbWF5IHdhbnQgdG8gc3VwcGx5IGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBpdCwgd2hlbiBjYWxsaW5nIGl0LiBZb3UgY2FuIGRvIHRoaXMgdXNpbmcgdGhpcyBwYXJhbWV0ZXIg4oCTIHNlZSBleGFtcGxlcyBmb3IgZGV0YWlscy4gUGxlYXNlIG5vdGUsIHRoYXQgdGhpcyBwYXJhbWV0ZXIgd2lsbCBoYXZlIG5vIGVmZmVjdCwgaWYgeW91IHVzZSB0aGUgZGVmYXVsdCBzY3JvbGxpbmcgZnVuY3Rpb24uXHJcblx0XHQgKiBAcmV0dXJucyB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsVGFyZ2V0LCBhZGRpdGlvbmFsUGFyYW1ldGVyKSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLk51bWJlcihzY3JvbGxUYXJnZXQpKSB7IC8vIGV4Y2VjdXRlXHJcblx0XHRcdFx0c2V0U2Nyb2xsUG9zLmNhbGwoX29wdGlvbnMuY29udGFpbmVyLCBzY3JvbGxUYXJnZXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFRhcmdldCBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7IC8vIHNjcm9sbCB0byBzY2VuZVxyXG5cdFx0XHRcdGlmIChzY3JvbGxUYXJnZXQuY29udHJvbGxlcigpID09PSBDb250cm9sbGVyKSB7IC8vIGNoZWNrIGlmIHRoZSBjb250cm9sbGVyIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNjZW5lXHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnNjcm9sbFRvKHNjcm9sbFRhcmdldC5zY3JvbGxPZmZzZXQoKSwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcInNjcm9sbFRvKCk6IFRoZSBzdXBwbGllZCBzY2VuZSBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBjb250cm9sbGVyLiBTY3JvbGwgY2FuY2VsbGVkLlwiLCBzY3JvbGxUYXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHNjcm9sbFRhcmdldCkpIHsgLy8gYXNzaWduIG5ldyBzY3JvbGwgZnVuY3Rpb25cclxuXHRcdFx0XHRzZXRTY3JvbGxQb3MgPSBzY3JvbGxUYXJnZXQ7XHJcblx0XHRcdH0gZWxzZSB7IC8vIHNjcm9sbCB0byBlbGVtZW50XHJcblx0XHRcdFx0dmFyIGVsZW0gPSBfdXRpbC5nZXQuZWxlbWVudHMoc2Nyb2xsVGFyZ2V0KVswXTtcclxuXHRcdFx0XHRpZiAoZWxlbSkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgcGFyZW50IGlzIHBpbiBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0XHR3aGlsZSAoZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0cGFyYW0gPSBfb3B0aW9ucy52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIiwgLy8gd2hpY2ggcGFyYW0gaXMgb2YgaW50ZXJlc3QgP1xyXG5cdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KF9vcHRpb25zLmNvbnRhaW5lciksIC8vIGNvbnRhaW5lciBwb3NpdGlvbiBpcyBuZWVkZWQgYmVjYXVzZSBlbGVtZW50IG9mZnNldCBpcyByZXR1cm5lZCBpbiByZWxhdGlvbiB0byBkb2N1bWVudCwgbm90IGluIHJlbGF0aW9uIHRvIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdFx0ZWxlbWVudE9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoZWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFfaXNEb2N1bWVudCkgeyAvLyBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCByb290LCBzbyBzdWJzdHJhY3Qgc2Nyb2xsIFBvc2l0aW9uIHRvIGdldCBjb3JyZWN0IHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzY3JvbGxjb250ZW50XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldFtwYXJhbV0gLT0gQ29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnNjcm9sbFRvKGVsZW1lbnRPZmZzZXRbcGFyYW1dIC0gY29udGFpbmVyT2Zmc2V0W3BhcmFtXSwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcInNjcm9sbFRvKCk6IFRoZSBzdXBwbGllZCBhcmd1bWVudCBpcyBpbnZhbGlkLiBTY3JvbGwgY2FuY2VsbGVkLlwiLCBzY3JvbGxUYXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHNjcm9sbFBvc2l0aW9uIG9yICoqU2V0KiogYSBuZXcgbWV0aG9kIHRvIGNhbGN1bGF0ZSBpdC4gIFxyXG5cdFx0ICogLT4gKipHRVQqKjpcclxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIGdldHRlciB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi4gIFxyXG5cdFx0ICogVG8gZ2V0IGEgY2FjaGVkIHZhbHVlIHVzZSBDb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIiksIHdoaWNoIHdpbGwgYmUgdXBkYXRlZCBpbiB0aGUgdXBkYXRlIGN5Y2xlLiAgXHJcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCByZXR1cm4gdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCByZXR1cm4gdGhlIGxlZnQgb2Zmc2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIC0+ICoqU0VUKio6XHJcblx0XHQgKiBXaGVuIHVzZWQgYXMgYSBzZXR0ZXIgdGhpcyBtZXRob2QgcHJvZGVzIGEgd2F5IHRvIHBlcm1hbmVudGx5IG92ZXJ3cml0ZSB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbi4gIFxyXG5cdFx0ICogQSB0eXBpY2FsIHVzZWNhc2UgaXMgd2hlbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIG5vdCByZWZsZWN0ZWQgYnkgdGhlIGNvbnRhaW5lcnMgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgdmFsdWVzLCBidXQgZm9yIGV4YW1wbGUgYnkgdGhlIGlubmVyIG9mZnNldCBvZiBhIGNoaWxkIGNvbnRhaW5lci4gIFxyXG5cdFx0ICogTW92aW5nIGEgY2hpbGQgY29udGFpbmVyIGluc2lkZSBhIHBhcmVudCBpcyBhIGNvbW1vbmx5IHVzZWQgbWV0aG9kIGZvciBzZXZlcmFsIHNjcm9sbGluZyBmcmFtZXdvcmtzLCBpbmNsdWRpbmcgaVNjcm9sbC4gIFxyXG5cdFx0ICogQnkgcHJvdmlkaW5nIGFuIGFsdGVybmF0ZSBjYWxjdWxhdGlvbiBmdW5jdGlvbiB5b3UgY2FuIG1ha2Ugc3VyZSBTY3JvbGxNYWdpYyByZWNlaXZlcyB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uICBcclxuXHRcdCAqIFBsZWFzZSBhbHNvIGJlYXIgaW4gbWluZCB0aGF0IHlvdXIgZnVuY3Rpb24gc2hvdWxkIHJldHVybiB5IHZhbHVlcyBmb3IgdmVydGljYWwgc2Nyb2xscyBhbiB4IGZvciBob3Jpem9udGFscy5cclxuXHRcdCAqXHJcblx0XHQgKiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHBsZWFzZSB1c2UgYENvbnRyb2xsZXIuc2Nyb2xsVG8oKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgUG9zaXRpb25cclxuXHRcdCAqIHZhciBzY3JvbGxQb3MgPSBjb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gbWV0aG9kXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFBvcyhmdW5jdGlvbiAoKSB7XHJcblx0XHQgKlx0cmV0dXJuIHRoaXMuaW5mbyhcInZlcnRpY2FsXCIpID8gLW15Y2hpbGRjb250YWluZXIueSA6IC1teWNoaWxkY29udGFpbmVyLnhcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtzY3JvbGxQb3NNZXRob2RdIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIHRoZSBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gb2YgdGhlIGNvbnRhaW5lci5cclxuXHRcdCAqIEByZXR1cm5zIHsobnVtYmVyfENvbnRyb2xsZXIpfSBDdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBmdW5jdGlvbiAoc2Nyb2xsUG9zTWV0aG9kKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gZ2V0U2Nyb2xsUG9zLmNhbGwoQ29udHJvbGxlcik7XHJcblx0XHRcdH0gZWxzZSB7IC8vIHNldFxyXG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHNjcm9sbFBvc01ldGhvZCkpIHtcclxuXHRcdFx0XHRcdGdldFNjcm9sbFBvcyA9IHNjcm9sbFBvc01ldGhvZDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiUHJvdmlkZWQgdmFsdWUgZm9yIG1ldGhvZCAnc2Nyb2xsUG9zJyBpcyBub3QgYSBmdW5jdGlvbi4gVG8gY2hhbmdlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB1c2UgJ3Njcm9sbFRvKCknLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBhbGwgaW5mb3Mgb3Igb25lIGluIHBhcnRpY3VsYXIgYWJvdXQgdGhlIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmV0dXJucyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gKG51bWJlcilcclxuXHRcdCAqIHZhciBzY3JvbGxQb3MgPSBjb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmV0dXJucyBhbGwgaW5mb3MgYXMgYW4gb2JqZWN0XHJcblx0XHQgKiB2YXIgaW5mb3MgPSBjb250cm9sbGVyLmluZm8oKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2Fib3V0XSAtIElmIHBhc3NlZCBvbmx5IHRoaXMgaW5mbyB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsLiAgXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgVmFsaWQgb3B0aW9ucyBhcmU6XHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2l6ZVwiYCA9PiB0aGUgY3VycmVudCB2aWV3cG9ydCBzaXplIG9mIHRoZSBjb250YWluZXJcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJ2ZXJ0aWNhbFwiYCA9PiB0cnVlIGlmIHZlcnRpY2FsIHNjcm9sbGluZywgb3RoZXJ3aXNlIGZhbHNlXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2Nyb2xsUG9zXCJgID0+IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInNjcm9sbERpcmVjdGlvblwiYCA9PiB0aGUgbGFzdCBrbm93biBkaXJlY3Rpb24gb2YgdGhlIHNjcm9sbFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcImNvbnRhaW5lclwiYCA9PiB0aGUgY29udGFpbmVyIGVsZW1lbnRcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJpc0RvY3VtZW50XCJgID0+IHRydWUgaWYgY29udGFpbmVyIGVsZW1lbnQgaXMgdGhlIGRvY3VtZW50LlxyXG5cdFx0ICogQHJldHVybnMgeyhtaXhlZHxvYmplY3QpfSBUaGUgcmVxdWVzdGVkIGluZm8ocykuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuaW5mbyA9IGZ1bmN0aW9uIChhYm91dCkge1xyXG5cdFx0XHR2YXIgdmFsdWVzID0ge1xyXG5cdFx0XHRcdHNpemU6IF92aWV3UG9ydFNpemUsIC8vIGNvbnRhaW5zIGhlaWdodCBvciB3aWR0aCAoaW4gcmVnYXJkIHRvIG9yaWVudGF0aW9uKTtcclxuXHRcdFx0XHR2ZXJ0aWNhbDogX29wdGlvbnMudmVydGljYWwsXHJcblx0XHRcdFx0c2Nyb2xsUG9zOiBfc2Nyb2xsUG9zLFxyXG5cdFx0XHRcdHNjcm9sbERpcmVjdGlvbjogX3Njcm9sbERpcmVjdGlvbixcclxuXHRcdFx0XHRjb250YWluZXI6IF9vcHRpb25zLmNvbnRhaW5lcixcclxuXHRcdFx0XHRpc0RvY3VtZW50OiBfaXNEb2N1bWVudFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0IGFsbCBhcyBhbiBvYmplY3RcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlc1thYm91dF0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZXNbYWJvdXRdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBvcHRpb24gXFxcIlwiICsgYWJvdXQgKyBcIlxcXCIgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgbG9nbGV2ZWwgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuXHRcdCAqIHZhciBsb2dsZXZlbCA9IGNvbnRyb2xsZXIubG9nbGV2ZWwoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdmFsdWVcclxuXHRcdCAqIGNvbnRyb2xsZXIubG9nbGV2ZWwoMyk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIENvbnRyb2xsZXIuIGBbMC0zXWBcclxuXHRcdCAqIEByZXR1cm5zIHsobnVtYmVyfENvbnRyb2xsZXIpfSBDdXJyZW50IGxvZ2xldmVsIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvZ2xldmVsID0gZnVuY3Rpb24gKG5ld0xvZ2xldmVsKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gX29wdGlvbnMubG9nbGV2ZWw7XHJcblx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMubG9nbGV2ZWwgIT0gbmV3TG9nbGV2ZWwpIHsgLy8gc2V0XHJcblx0XHRcdFx0X29wdGlvbnMubG9nbGV2ZWwgPSBuZXdMb2dsZXZlbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNhYmxlIGFsbCBTY2VuZXMgY29ubmVjdGVkIHRvIHRoZSBjb250cm9sbGVyIHdpdGhvdXQgZGVzdHJveWluZyBvciByZW1vdmluZyB0aGVtLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuXHRcdCAqIHZhciBlbmFibGVkID0gY29udHJvbGxlci5lbmFibGVkKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5lbmFibGVkKGZhbHNlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKiBAcmV0dXJucyB7KGJvb2xlYW58Q29udHJvbGxlcil9IEN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5lbmFibGVkID0gZnVuY3Rpb24gKG5ld1N0YXRlKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gX2VuYWJsZWQ7XHJcblx0XHRcdH0gZWxzZSBpZiAoX2VuYWJsZWQgIT0gbmV3U3RhdGUpIHsgLy8gc2V0XHJcblx0XHRcdFx0X2VuYWJsZWQgPSAhIW5ld1N0YXRlO1xyXG5cdFx0XHRcdENvbnRyb2xsZXIudXBkYXRlU2NlbmUoX3NjZW5lT2JqZWN0cywgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVzdHJveSB0aGUgQ29udHJvbGxlciwgYWxsIFNjZW5lcyBhbmQgZXZlcnl0aGluZy5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gd2l0aG91dCByZXNldHRpbmcgdGhlIHNjZW5lc1xyXG5cdFx0ICogY29udHJvbGxlciA9IGNvbnRyb2xsZXIuZGVzdHJveSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHdpdGggc2NlbmUgcmVzZXRcclxuXHRcdCAqIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLmRlc3Ryb3kodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXRTY2VuZXM9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW5zIGFuZCB0d2VlbnMgKGlmIGV4aXN0ZW50KSBvZiBhbGwgc2NlbmVzIHdpbGwgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVsbH0gTnVsbCB0byB1bnNldCBoYW5kbGVyIHZhcmlhYmxlcy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0U2NlbmVzKSB7XHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoX3JlZnJlc2hUaW1lb3V0KTtcclxuXHRcdFx0dmFyIGkgPSBfc2NlbmVPYmplY3RzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRcdF9zY2VuZU9iamVjdHNbaV0uZGVzdHJveShyZXNldFNjZW5lcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF91dGlsLmNBRihfdXBkYXRlVGltZW91dCk7XHJcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXRTY2VuZXMgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBJTklUXHJcblx0XHRjb25zdHJ1Y3QoKTtcclxuXHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdH07XHJcblxyXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIGNvbnRyb2xsZXIgb3B0aW9uc1xyXG5cdHZhciBDT05UUk9MTEVSX09QVElPTlMgPSB7XHJcblx0XHRkZWZhdWx0czoge1xyXG5cdFx0XHRjb250YWluZXI6IHdpbmRvdyxcclxuXHRcdFx0dmVydGljYWw6IHRydWUsXHJcblx0XHRcdGdsb2JhbFNjZW5lT3B0aW9uczoge30sXHJcblx0XHRcdGxvZ2xldmVsOiAyLFxyXG5cdFx0XHRyZWZyZXNoSW50ZXJ2YWw6IDEwMFxyXG5cdFx0fVxyXG5cdH07XHJcblx0LypcclxuXHQgKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmFkZE9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRcdENPTlRST0xMRVJfT1BUSU9OUy5kZWZhdWx0c1tuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcclxuXHR9O1xyXG5cdC8vIGluc3RhbmNlIGV4dGVuc2lvbiBmdW5jdGlvbiBmb3IgcGx1Z2luc1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xyXG5cdFx0dmFyIG9sZENsYXNzID0gdGhpcztcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHRoaXMuJHN1cGVyID0gX3V0aWwuZXh0ZW5kKHt9LCB0aGlzKTsgLy8gY29weSBwYXJlbnQgc3RhdGVcclxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcblx0XHR9O1xyXG5cdFx0X3V0aWwuZXh0ZW5kKFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIsIG9sZENsYXNzKTsgLy8gY29weSBwcm9wZXJ0aWVzXHJcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLnByb3RvdHlwZSA9IG9sZENsYXNzLnByb3RvdHlwZTsgLy8gY29weSBwcm90b3R5cGVcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuQ29udHJvbGxlcjsgLy8gcmVzdG9yZSBjb25zdHJ1Y3RvclxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBIFNjZW5lIGRlZmluZXMgd2hlcmUgdGhlIGNvbnRyb2xsZXIgc2hvdWxkIHJlYWN0IGFuZCBob3cuXHJcblx0ICpcclxuXHQgKiBAY2xhc3NcclxuXHQgKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gY3JlYXRlIGEgc3RhbmRhcmQgc2NlbmUgYW5kIGFkZCBpdCB0byBhIGNvbnRyb2xsZXJcclxuXHQgKiBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoKVxyXG5cdCAqXHRcdC5hZGRUbyhjb250cm9sbGVyKTtcclxuXHQgKlxyXG5cdCAqIC8vIGNyZWF0ZSBhIHNjZW5lIHdpdGggY3VzdG9tIG9wdGlvbnMgYW5kIGFzc2lnbiBhIGhhbmRsZXIgdG8gaXQuXHJcblx0ICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuXHQgKiBcdFx0ZHVyYXRpb246IDEwMCxcclxuXHQgKlx0XHRvZmZzZXQ6IDIwMCxcclxuXHQgKlx0XHR0cmlnZ2VySG9vazogXCJvbkVudGVyXCIsXHJcblx0ICpcdFx0cmV2ZXJzZTogZmFsc2VcclxuXHQgKiB9KTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIGZvciB0aGUgU2NlbmUuIFRoZSBvcHRpb25zIGNhbiBiZSB1cGRhdGVkIGF0IGFueSB0aW1lLiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0ICAgSW5zdGVhZCBvZiBzZXR0aW5nIHRoZSBvcHRpb25zIGZvciBlYWNoIHNjZW5lIGluZGl2aWR1YWxseSB5b3UgY2FuIGFsc28gc2V0IHRoZW0gZ2xvYmFsbHkgaW4gdGhlIGNvbnRyb2xsZXIgYXMgdGhlIGNvbnRyb2xsZXJzIGBnbG9iYWxTY2VuZU9wdGlvbnNgIG9wdGlvbi4gVGhlIG9iamVjdCBhY2NlcHRzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIG9uZXMgYmVsb3cuICBcclxuXHQgXHRcdFx0XHRcdFx0XHQgICBXaGVuIGEgc2NlbmUgaXMgYWRkZWQgdG8gdGhlIGNvbnRyb2xsZXIgdGhlIG9wdGlvbnMgZGVmaW5lZCB1c2luZyB0aGUgU2NlbmUgY29uc3RydWN0b3Igd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB0aG9zZSBzZXQgaW4gYGdsb2JhbFNjZW5lT3B0aW9uc2AuXHJcblx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZ3xmdW5jdGlvbil9IFtvcHRpb25zLmR1cmF0aW9uPTBdIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZS4gXHJcblx0IFx0XHRcdFx0XHRQbGVhc2Ugc2VlIGBTY2VuZS5kdXJhdGlvbigpYCBmb3IgZGV0YWlscy5cclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMub2Zmc2V0PTBdIC0gT2Zmc2V0IFZhbHVlIGZvciB0aGUgVHJpZ2dlciBQb3NpdGlvbi4gSWYgbm8gdHJpZ2dlckVsZW1lbnQgaXMgZGVmaW5lZCB0aGlzIHdpbGwgYmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydCBvZiB0aGUgcGFnZSwgYWZ0ZXIgd2hpY2ggdGhlIHNjZW5lIHdpbGwgc3RhcnQuXHJcblx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLnRyaWdnZXJFbGVtZW50PW51bGxdIC0gU2VsZWN0b3Igb3IgRE9NIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gSWYgdW5kZWZpbmVkIHRoZSBzY2VuZSB3aWxsIHN0YXJ0IHJpZ2h0IGF0IHRoZSBzdGFydCBvZiB0aGUgcGFnZSAodW5sZXNzIGFuIG9mZnNldCBpcyBzZXQpLlxyXG5cdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbb3B0aW9ucy50cmlnZ2VySG9vaz1cIm9uQ2VudGVyXCJdIC0gQ2FuIGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBkZWZpbmluZyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXIgSG9vayBpbiByZWxhdGlvbiB0byB0aGUgdmlld3BvcnQuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBDYW4gYWxzbyBiZSBkZWZpbmVkIHVzaW5nIGEgc3RyaW5nOlxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uRW50ZXJcImAgPT4gYDFgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25DZW50ZXJcImAgPT4gYDAuNWBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkxlYXZlXCJgID0+IGAwYFxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmV2ZXJzZT10cnVlXSAtIFNob3VsZCB0aGUgc2NlbmUgcmV2ZXJzZSwgd2hlbiBzY3JvbGxpbmcgdXA/XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIC0gTG9nbGV2ZWwgZm9yIGRlYnVnZ2luZy4gTm90ZSB0aGF0IGxvZ2dpbmcgaXMgZGlzYWJsZWQgaW4gdGhlIG1pbmlmaWVkIHZlcnNpb24gb2YgU2Nyb2xsTWFnaWMuXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMGAgPT4gc2lsZW50XHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMWAgPT4gZXJyb3JzXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMmAgPT4gZXJyb3JzLCB3YXJuaW5nc1xyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYDNgID0+IGVycm9ycywgd2FybmluZ3MsIGRlYnVnaW5mb1xyXG5cdCAqIFxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogc2V0dGluZ3NcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHROQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuU2NlbmUnLFxyXG5cdFx0XHRTQ0VORV9TVEFURV9CRUZPUkUgPSAnQkVGT1JFJyxcclxuXHRcdFx0U0NFTkVfU1RBVEVfRFVSSU5HID0gJ0RVUklORycsXHJcblx0XHRcdFNDRU5FX1NUQVRFX0FGVEVSID0gJ0FGVEVSJyxcclxuXHRcdFx0REVGQVVMVF9PUFRJT05TID0gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cztcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSB2YXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0U2NlbmUgPSB0aGlzLFxyXG5cdFx0XHRfb3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSxcclxuXHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFLFxyXG5cdFx0XHRfcHJvZ3Jlc3MgPSAwLFxyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHN0YXJ0OiAwLFxyXG5cdFx0XHRcdGVuZDogMFxyXG5cdFx0XHR9LCAvLyByZWZsZWN0cyB0aGUgY29udHJvbGxlcnMncyBzY3JvbGwgcG9zaXRpb24gZm9yIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzY2VuZSByZXNwZWN0aXZlbHlcclxuXHRcdFx0X3RyaWdnZXJQb3MgPSAwLFxyXG5cdFx0XHRfZW5hYmxlZCA9IHRydWUsXHJcblx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCxcclxuXHRcdFx0X2NvbnRyb2xsZXI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbnRlcm5hbCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgU2Nyb2xsTWFnaWMgU2NlbmVcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucykgeyAvLyBjaGVjayBzdXBwbGllZCBvcHRpb25zXHJcblx0XHRcdFx0aWYgKCFERUZBVUxUX09QVElPTlMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVW5rbm93biBvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIF9vcHRpb25zW2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGFkZCBnZXR0ZXJzL3NldHRlcnMgZm9yIGFsbCBwb3NzaWJsZSBvcHRpb25zXHJcblx0XHRcdGZvciAodmFyIG9wdGlvbk5hbWUgaW4gREVGQVVMVF9PUFRJT05TKSB7XHJcblx0XHRcdFx0YWRkU2NlbmVPcHRpb24ob3B0aW9uTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdmFsaWRhdGUgYWxsIG9wdGlvbnNcclxuXHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIEV2ZW50IE1hbmFnZW1lbnRcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhciBfbGlzdGVuZXJzID0ge307XHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHN0YXJ0IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2Nyb2xsIHBvc2l0aW9uIGl0cyB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSB3aGVuIHNjcm9sbGluZyBiYWNrIHVwIGdvaW5nIG92ZXIgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3N0YXJ0XHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwic3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiSGl0IHN0YXJ0IHBvaW50IG9mIHNjZW5lLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJEVVJJTkdcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBlbmQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBlbmRpbmcgcG9pbnQgb2YgdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSB3aGVuIHNjcm9sbGluZyBiYWNrIHVwIGZyb20gYWZ0ZXIgdGhlIHNjZW5lIGFuZCBnb2luZyBvdmVyIGl0cyBlbmQgcG9zaXRpb24uIElmIHlvdSB3YW50IHNvbWV0aGluZyB0byBoYXBwZW4gb25seSB3aGVuIHNjcm9sbGluZyBkb3duL3JpZ2h0LCB1c2UgdGhlIHNjcm9sbERpcmVjdGlvbiBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbmRcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiSGl0IGVuZCBwb2ludCBvZiBzY2VuZS5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBlbnRlciBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGVudGVycyB0aGUgXCJEVVJJTkdcIiBzdGF0ZS4gIFxyXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGVudGVycyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZW50ZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBlbnRlcmVkLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIC0gYWx3YXlzIGBcIkRVUklOR1wiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGxlYXZlIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUncyBzdGF0ZSBnb2VzIGZyb20gXCJEVVJJTkdcIiB0byBlaXRoZXIgXCJCRUZPUkVcIiBvciBcIkFGVEVSXCIuICBcclxuXHRcdCAqIEtlZXAgaW4gbWluZCB0aGF0IGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHRoZSBzY2VuZSBwbGF5cyBmb3J3YXJkIG9yIGJhY2t3YXJkOiBUaGlzIGV2ZW50IGFsd2F5cyBmaXJlcyB3aGVuIHRoZSBzY2VuZSBsZWF2ZXMgaXRzIGFjdGl2ZSBzY3JvbGwgdGltZWZyYW1lLCByZWdhcmRsZXNzIG9mIHRoZSBzY3JvbGwtZGlyZWN0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2xlYXZlXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwibGVhdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgbGVmdC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSB1cGRhdGUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSBpcyB1cGRhdGVkIChidXQgbm90IG5lY2Vzc2FyaWx5IGNoYW5nZXMgdGhlIHByb2dyZXNzKS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjdXBkYXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIHVwZGF0ZWQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnN0YXJ0UG9zIC0gVGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW4gcmVsYXRpb24gdG8gdGhlIGNvbmFpbmVyKVxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LmVuZFBvcyAtIFRoZSBlbmRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc2Nyb2xsUG9zIC0gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXJcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBwcm9ncmVzcyBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIG9mIHRoZSBzY2VuZSBjaGFuZ2VzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3Byb2dyZXNzXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgcHJvZ3Jlc3MgY2hhbmdlZCB0byBcIiArIGV2ZW50LnByb2dyZXNzKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCwgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgY2hhbmdlIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgYSBwcm9wZXJ0eSBvZiB0aGUgc2NlbmUgaXMgY2hhbmdlZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjY2hhbmdlXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIFByb3BlcnR5IFxcXCJcIiArIGV2ZW50LndoYXQgKyBcIlxcXCIgY2hhbmdlZCB0byBcIiArIGV2ZW50Lm5ld3ZhbCk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQud2hhdCAtIEluZGljYXRlcyB3aGF0IHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bWl4ZWR9IGV2ZW50Lm5ld3ZhbCAtIFRoZSBuZXcgdmFsdWUgb2YgdGhlIGNoYW5nZWQgcHJvcGVydHlcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBzaGlmdCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIHRoZSBzdGFydCBvciBlbmQgKipzY3JvbGwgb2Zmc2V0Kiogb2YgdGhlIHNjZW5lIGNoYW5nZS5cclxuXHRcdCAqIFRoaXMgaGFwcGVucyBleHBsaWNpdGVseSwgd2hlbiBvbmUgb2YgdGhlc2UgdmFsdWVzIGNoYW5nZTogYG9mZnNldGAsIGBkdXJhdGlvbmAgb3IgYHRyaWdnZXJIb29rYC5cclxuXHRcdCAqIEl0IHdpbGwgZmlyZSBpbXBsaWNpdGx5IHdoZW4gdGhlIGB0cmlnZ2VyRWxlbWVudGAgY2hhbmdlcywgaWYgdGhlIG5ldyBlbGVtZW50IGhhcyBhIGRpZmZlcmVudCBwb3NpdGlvbiAobW9zdCBjYXNlcykuXHJcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSBpbXBsaWNpdGx5IHdoZW4gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciBjaGFuZ2VzIGFuZCB0aGUgdHJpZ2dlckhvb2sgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBgb25MZWF2ZWAuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3NoaWZ0XHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJzaGlmdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBtb3ZlZCwgYmVjYXVzZSB0aGUgXCIgKyBldmVudC5yZWFzb24gKyBcIiBoYXMgY2hhbmdlZC4pXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnJlYXNvbiAtIEluZGljYXRlcyB3aHkgdGhlIHNjZW5lIGhhcyBzaGlmdGVkXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgZGVzdHJveSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIHRoZSBzY2VuZSBpcyBkZXN0cm95ZWQuXHJcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHRpZHkgdXAgY3VzdG9tIGJlaGF2aW91ciB1c2VkIGluIGV2ZW50cy5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZGVzdHJveVxyXG5cdFx0ICogQHNpbmNlIDEuMS4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiAgICAgICAgLy8gYWRkIGN1c3RvbSBhY3Rpb25cclxuXHRcdCAqICAgICAgICAkKFwiI215LWVsZW1cIikubGVmdChcIjIwMFwiKTtcclxuXHRcdCAqICAgICAgfSlcclxuXHRcdCAqICAgICAgLm9uKFwiZGVzdHJveVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqICAgICAgICAvLyByZXNldCBteSBlbGVtZW50IHRvIHN0YXJ0IHBvc2l0aW9uXHJcblx0XHQgKiAgICAgICAgaWYgKGV2ZW50LnJlc2V0KSB7XHJcblx0XHQgKiAgICAgICAgICAkKFwiI215LWVsZW1cIikubGVmdChcIjBcIik7XHJcblx0XHQgKiAgICAgICAgfVxyXG5cdFx0ICogICAgICB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGV2ZW50LnJlc2V0IC0gSW5kaWNhdGVzIGlmIHRoZSBkZXN0cm95IG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggcmVzZXQgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgYWRkIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBUaGlzIGlzIG1vc3RseSB1c2VkIGJ5IHBsdWdpbnMgdG8ga25vdyB0aGF0IGNoYW5nZSBtaWdodCBiZSBkdWUuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFxyXG5cdFx0ICogQHNpbmNlIDIuMC4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiYWRkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZygnU2NlbmUgd2FzIGFkZGVkIHRvIGEgbmV3IGNvbnRyb2xsZXIuJyk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGV2ZW50LmNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciBvYmplY3QgdGhlIHNjZW5lIHdhcyBhZGRlZCB0by5cclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSByZW1vdmUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIHJlbW92ZWQgZnJvbSBhIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBUaGlzIGlzIG1vc3RseSB1c2VkIGJ5IHBsdWdpbnMgdG8ga25vdyB0aGF0IGNoYW5nZSBtaWdodCBiZSBkdWUuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxyXG5cdFx0ICogQHNpbmNlIDIuMC4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwicmVtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZygnU2NlbmUgd2FzIHJlbW92ZWQgZnJvbSBpdHMgY29udHJvbGxlci4nKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIG9uZSBvcmUgbW9yZSBldmVudCBsaXN0ZW5lci4gIFxyXG5cdFx0ICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgYXQgdGhlIHJlc3BlY3RpdmUgZXZlbnQsIGFuZCBhbiBvYmplY3QgY29udGFpbmluZyByZWxldmFudCBkYXRhIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb25cclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogZnVuY3Rpb24gY2FsbGJhY2sgKGV2ZW50KSB7XHJcblx0XHQgKiBcdFx0Y29uc29sZS5sb2coXCJFdmVudCBmaXJlZCEgKFwiICsgZXZlbnQudHlwZSArIFwiKVwiKTtcclxuXHRcdCAqIH1cclxuXHRcdCAqIC8vIGFkZCBsaXN0ZW5lcnNcclxuXHRcdCAqIHNjZW5lLm9uKFwiY2hhbmdlIHVwZGF0ZSBwcm9ncmVzcyBzdGFydCBlbmQgZW50ZXIgbGVhdmVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcyAtIFRoZSBuYW1lIG9yIG5hbWVzIG9mIHRoZSBldmVudCB0aGUgY2FsbGJhY2sgc2hvdWxkIGJlIGF0dGFjaGVkIHRvLlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkLCB3aGVuIHRoZSBldmVudCBpcyBkaXNwYXRjaGVkLiBBbiBldmVudCBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5vbiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcblx0XHRcdFx0bmFtZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSkge1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdG5hbWVwYXJ0cyA9IGZ1bGxuYW1lLnNwbGl0KCcuJyksXHJcblx0XHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdO1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50bmFtZSAhPSBcIipcIikgeyAvLyBkaXNhbGxvdyB3aWxkY2FyZHNcclxuXHRcdFx0XHRcdFx0aWYgKCFfbGlzdGVuZXJzW2V2ZW50bmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0XHRfbGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBbXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRfbGlzdGVuZXJzW2V2ZW50bmFtZV0ucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UgfHwgJycsXHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIHdoZW4gY2FsbGluZyAnLm9uKCknOiBTdXBwbGllZCBjYWxsYmFjayBmb3IgJ1wiICsgbmFtZXMgKyBcIicgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24hXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgb25lIG9yIG1vcmUgZXZlbnQgbGlzdGVuZXIuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZlxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogLy8gYWRkIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlXCIsIGNhbGxiYWNrKTtcclxuXHRcdCAqIC8vIHJlbW92ZSBsaXN0ZW5lcnNcclxuXHRcdCAqIHNjZW5lLm9mZihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcyAtIFRoZSBuYW1lIG9yIG5hbWVzIG9mIHRoZSBldmVudCB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgc3BlY2lmaWMgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC4gSWYgbm9uZSBpcyBwYXNzZWQgYWxsIGNhbGxiYWNrcyB0byB0aGUgZXZlbnQgbGlzdGVuZXIgd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5vZmYgPSBmdW5jdGlvbiAobmFtZXMsIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmICghbmFtZXMpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogSW52YWxpZCBldmVudCBuYW1lIHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0bmFtZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnVsbG5hbWUsIGtleSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0bmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSB8fCAnJyxcclxuXHRcdFx0XHRcdHJlbW92ZUxpc3QgPSBldmVudG5hbWUgPT09ICcqJyA/IE9iamVjdC5rZXlzKF9saXN0ZW5lcnMpIDogW2V2ZW50bmFtZV07XHJcblx0XHRcdFx0cmVtb3ZlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdmUpIHtcclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRsaXN0ID0gX2xpc3RlbmVyc1tyZW1vdmVdIHx8IFtdLFxyXG5cdFx0XHRcdFx0XHRpID0gbGlzdC5sZW5ndGg7XHJcblx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsaXN0ZW5lciA9IGxpc3RbaV07XHJcblx0XHRcdFx0XHRcdGlmIChsaXN0ZW5lciAmJiAobmFtZXNwYWNlID09PSBsaXN0ZW5lci5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSAnKicpICYmICghY2FsbGJhY2sgfHwgY2FsbGJhY2sgPT0gbGlzdGVuZXIuY2FsbGJhY2spKSB7XHJcblx0XHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICghbGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9saXN0ZW5lcnNbcmVtb3ZlXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmlnZ2VyIGFuIGV2ZW50LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHRoaXMudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mbyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIHZhcnMpIHtcclxuXHRcdFx0aWYgKG5hbWUpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdG5hbWVwYXJ0cyA9IG5hbWUudHJpbSgpLnNwbGl0KCcuJyksXHJcblx0XHRcdFx0XHRldmVudG5hbWUgPSBuYW1lcGFydHNbMF0sXHJcblx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV0sXHJcblx0XHRcdFx0XHRsaXN0ZW5lcnMgPSBfbGlzdGVuZXJzW2V2ZW50bmFtZV07XHJcblx0XHRcdFx0bG9nKDMsICdldmVudCBmaXJlZDonLCBldmVudG5hbWUsIHZhcnMgPyBcIi0+XCIgOiAnJywgdmFycyB8fCAnJyk7XHJcblx0XHRcdFx0aWYgKGxpc3RlbmVycykge1xyXG5cdFx0XHRcdFx0bGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyLCBrZXkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSBsaXN0ZW5lci5uYW1lc3BhY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5jYWxsKFNjZW5lLCBuZXcgU2Nyb2xsTWFnaWMuRXZlbnQoZXZlbnRuYW1lLCBsaXN0ZW5lci5uYW1lc3BhY2UsIFNjZW5lLCB2YXJzKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogSW52YWxpZCBldmVudCBuYW1lIHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBldmVudCBsaXN0ZW5lcnNcclxuXHRcdFNjZW5lXHJcblx0XHRcdC5vbihcImNoYW5nZS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGlmIChlLndoYXQgIT09IFwibG9nbGV2ZWxcIiAmJiBlLndoYXQgIT09IFwidHdlZW5DaGFuZ2VzXCIpIHsgLy8gbm8gbmVlZCBmb3IgYSBzY2VuZSB1cGRhdGUgc2NlbmUgd2l0aCB0aGVzZSBvcHRpb25zLi4uXHJcblx0XHRcdFx0XHRpZiAoZS53aGF0ID09PSBcInRyaWdnZXJFbGVtZW50XCIpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlLndoYXQgPT09IFwicmV2ZXJzZVwiKSB7IC8vIHRoZSBvbmx5IHByb3BlcnR5IGxlZnQgdGhhdCBtYXkgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUuIEV2ZXJ5dGhpbmcgZWxzZSBpcyBoYW5kbGVkIGJ5IHRoZSBzaGlmdCBldmVudC5cclxuXHRcdFx0XHRcdFx0U2NlbmUudXBkYXRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJzaGlmdC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xyXG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSgpOyAvLyB1cGRhdGUgc2NlbmUgdG8gcmVmbGVjdCBuZXcgcG9zaXRpb25cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZW5kIGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBidXQgcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGxvZ2xldmVsIC0gVGhlIGxvZ2xldmVsIHJlcXVpcmVkIHRvIGluaXRpYXRlIG91dHB1dCBmb3IgdGhlIG1lc3NhZ2UuXHJcblx0XHQgKiBAcGFyYW0gey4uLm1peGVkfSBvdXRwdXQgLSBPbmUgb3IgbW9yZSB2YXJpYWJsZXMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICovXHJcblx0XHR2YXIgbG9nID0gdGhpcy5fbG9nID0gZnVuY3Rpb24gKGxvZ2xldmVsLCBvdXRwdXQpIHtcclxuXHRcdFx0aWYgKF9vcHRpb25zLmxvZ2xldmVsID49IGxvZ2xldmVsKSB7XHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT5cIik7XHJcblx0XHRcdFx0X3V0aWwubG9nLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCB0aGUgc2NlbmUgdG8gYSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKWAuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFRvXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGFkZCBhIHNjZW5lIHRvIGEgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG5cdFx0ICogc2NlbmUuYWRkVG8oY29udHJvbGxlcik7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBjb250cm9sbGVyIC0gVGhlIGNvbnRyb2xsZXIgdG8gd2hpY2ggdGhlIHNjZW5lIHNob3VsZCBiZSBhZGRlZC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuYWRkVG8gPSBmdW5jdGlvbiAoY29udHJvbGxlcikge1xyXG5cdFx0XHRpZiAoIShjb250cm9sbGVyIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcikpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogc3VwcGxpZWQgYXJndW1lbnQgb2YgJ2FkZFRvKCknIGlzIG5vdCBhIHZhbGlkIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcIik7XHJcblx0XHRcdH0gZWxzZSBpZiAoX2NvbnRyb2xsZXIgIT0gY29udHJvbGxlcikge1xyXG5cdFx0XHRcdC8vIG5ldyBjb250cm9sbGVyXHJcblx0XHRcdFx0aWYgKF9jb250cm9sbGVyKSB7IC8vIHdhcyBhc3NvY2lhdGVkIHRvIGEgZGlmZmVyZW50IGNvbnRyb2xsZXIgYmVmb3JlLCBzbyByZW1vdmUgaXQuLi5cclxuXHRcdFx0XHRcdF9jb250cm9sbGVyLnJlbW92ZVNjZW5lKFNjZW5lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG5cdFx0XHRcdHZhbGlkYXRlT3B0aW9uKCk7XHJcblx0XHRcdFx0dXBkYXRlRHVyYXRpb24odHJ1ZSk7XHJcblx0XHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbih0cnVlKTtcclxuXHRcdFx0XHR1cGRhdGVTY3JvbGxPZmZzZXQoKTtcclxuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcclxuXHRcdFx0XHRjb250cm9sbGVyLmFkZFNjZW5lKFNjZW5lKTtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiYWRkXCIsIHtcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IF9jb250cm9sbGVyXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0bG9nKDMsIFwiYWRkZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiB0byBjb250cm9sbGVyXCIpO1xyXG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzYWJsZSB0aGlzIHNjZW5lIHdpdGhvdXQgcmVtb3Zpbmcgb3IgZGVzdHJveWluZyBpdC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZW5hYmxlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuXHRcdCAqIHZhciBlbmFibGVkID0gc2NlbmUuZW5hYmxlZCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRpc2FibGUgdGhlIHNjZW5lXHJcblx0XHQgKiBzY2VuZS5lbmFibGVkKGZhbHNlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIHNjZW5lIGB0cnVlYCBvciBgZmFsc2VgLlxyXG5cdFx0ICogQHJldHVybnMgeyhib29sZWFufFNjZW5lKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcclxuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcclxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhbmV3U3RhdGU7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdGhlIHNjZW5lIGZyb20gdGhlIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpYC5cclxuXHRcdCAqIFRoZSBzY2VuZSB3aWxsIG5vdCBiZSB1cGRhdGVkIGFueW1vcmUgdW50aWwgeW91IHJlYWRkIGl0IHRvIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRvIHJlbW92ZSB0aGUgcGluIG9yIHRoZSB0d2VlbiB5b3UgbmVlZCB0byBjYWxsIHJlbW92ZVR3ZWVuKCkgb3IgcmVtb3ZlUGluKCkgcmVzcGVjdGl2ZWx5LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgdGhlIHNjZW5lIGZyb20gaXRzIGNvbnRyb2xsZXJcclxuXHRcdCAqIHNjZW5lLnJlbW92ZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcclxuXHRcdFx0XHR2YXIgdG1wUGFyZW50ID0gX2NvbnRyb2xsZXI7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0dG1wUGFyZW50LnJlbW92ZVNjZW5lKFNjZW5lKTtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwicmVtb3ZlXCIpO1xyXG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiBmcm9tIGNvbnRyb2xsZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlc3Ryb3kgdGhlIHNjZW5lIGFuZCBldmVyeXRoaW5nLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgd2l0aG91dCByZXNldHRpbmcgdGhlIHBpbiBhbmQgdHdlZW4gdG8gdGhlaXIgaW5pdGlhbCBwb3NpdGlvbnNcclxuXHRcdCAqIHNjZW5lID0gc2NlbmUuZGVzdHJveSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlc3Ryb3kgdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGFuZCB0d2VlblxyXG5cdFx0ICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgcGluIGFuZCB0d2VlbiAoaWYgZXhpc3RlbnQpIHdpbGwgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVsbH0gTnVsbCB0byB1bnNldCBoYW5kbGVyIHZhcmlhYmxlcy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdFNjZW5lLnRyaWdnZXIoXCJkZXN0cm95XCIsIHtcclxuXHRcdFx0XHRyZXNldDogcmVzZXRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFNjZW5lLnJlbW92ZSgpO1xyXG5cdFx0XHRTY2VuZS5vZmYoXCIqLipcIik7XHJcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBTY2VuZSB0byByZWZsZWN0IHRoZSBjdXJyZW50IHN0YXRlLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSlgLiAgXHJcblx0XHQgKiBUaGUgdXBkYXRlIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBzY2VuZSdzIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gKGJhc2VkIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHRyaWdnZXIgaG9vaywgZHVyYXRpb24gYW5kIG9mZnNldCkgYW5kIGNoZWNrcyBpdCBhZ2FpbnN0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0XHQgKiBJdCB0aGVuIHVwZGF0ZXMgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYWNjb3JkaW5nbHkgKG9yIGRvZXMgbm90aGluZywgaWYgdGhlIHN0YXRlIGlzIGFscmVhZHkgY29ycmVjdCkg4oCTIFBpbnMgd2lsbCBiZSBzZXQgdG8gdGhlaXIgY29ycmVjdCBwb3NpdGlvbiBhbmQgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZCB0byB0aGVpciBjb3JyZWN0IHByb2dyZXNzLlxyXG5cdFx0ICogVGhpcyBtZWFucyBhbiB1cGRhdGUgZG9lc24ndCBuZWNlc3NhcmlseSByZXN1bHQgaW4gYSBwcm9ncmVzcyBjaGFuZ2UuIFRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgZmlyZWQgaWYgdGhlIHByb2dyZXNzIGhhcyBpbmRlZWQgY2hhbmdlZCBiZXR3ZWVuIHRoaXMgdXBkYXRlIGFuZCB0aGUgbGFzdC4gIFxyXG5cdFx0ICogXyoqTk9URToqKiBUaGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBjb25zdGFudGx5IHdoZW5ldmVyIFNjcm9sbE1hZ2ljIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIHNjZW5lIG9uIG5leHQgdGlja1xyXG5cdFx0ICogc2NlbmUudXBkYXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBzY2VuZSBpbW1lZGlhdGVseVxyXG5cdFx0ICogc2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyBTY2VuZS51cGRhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIuZW5hYmxlZCgpICYmIF9lbmFibGVkKSB7XHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvcyA9IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIiksXHJcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3M7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoX29wdGlvbnMuZHVyYXRpb24gPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3MgPSAoc2Nyb2xsUG9zIC0gX3Njcm9sbE9mZnNldC5zdGFydCkgLyAoX3Njcm9sbE9mZnNldC5lbmQgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IHNjcm9sbFBvcyA+PSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0ID8gMSA6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJ1cGRhdGVcIiwge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0UG9zOiBfc2Nyb2xsT2Zmc2V0LnN0YXJ0LFxyXG5cdFx0XHRcdFx0XHRcdGVuZFBvczogX3Njcm9sbE9mZnNldC5lbmQsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zOiBzY3JvbGxQb3NcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRTY2VuZS5wcm9ncmVzcyhuZXdQcm9ncmVzcyk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIHVucGluIGluIHBvc2l0aW9uXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9jb250cm9sbGVyLnVwZGF0ZVNjZW5lKFNjZW5lLCBmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIGR5bmFtaWMgc2NlbmUgdmFyaWFibGVzIGxpa2UgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24uXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyLiBTZWUge0BsaW5rIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IG9wdGlvbiBgcmVmcmVzaEludGVydmFsYC5cclxuXHRcdCAqIFxyXG5cdFx0ICogWW91IGNhbiBjYWxsIGl0IHRvIG1pbmltaXplIGxhZywgZm9yIGV4YW1wbGUgd2hlbiB5b3UgaW50ZW50aW9uYWxseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudC5cclxuXHRcdCAqIElmIHlvdSBkb24ndCBpdCB3aWxsIHNpbXBseSBiZSB1cGRhdGVkIGluIHRoZSBuZXh0IHJlZnJlc2ggaW50ZXJ2YWwgb2YgdGhlIGNvbnRhaW5lciwgd2hpY2ggaXMgdXN1YWxseSBzdWZmaWNpZW50LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVmcmVzaFxyXG5cdFx0ICogQHNpbmNlIDEuMS4wXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3RyaWdnZXJFbGVtZW50OiBcIiN0cmlnZ2VyXCJ9KTtcclxuXHRcdCAqIFxyXG5cdFx0ICogLy8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlclxyXG5cdFx0ICogJChcIiN0cmlnZ2VyXCIpLmNzcyhcInRvcFwiLCA1MDApO1xyXG5cdFx0ICogLy8gaW1tZWRpYXRlbHkgbGV0IHRoZSBzY2VuZSBrbm93IG9mIHRoaXMgY2hhbmdlXHJcblx0XHQgKiBzY2VuZS5yZWZyZXNoKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gb3IgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHVwZGF0ZUR1cmF0aW9uKCk7XHJcblx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oKTtcclxuXHRcdFx0Ly8gdXBkYXRlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvblxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBzY2VuZSdzIHByb2dyZXNzLiAgXHJcblx0XHQgKiBVc3VhbGx5IGl0IHNob3VsZG4ndCBiZSBuZWNlc3NhcnkgdG8gdXNlIHRoaXMgYXMgYSBzZXR0ZXIsIGFzIGl0IGlzIHNldCBhdXRvbWF0aWNhbGx5IGJ5IHNjZW5lLnVwZGF0ZSgpLiAgXHJcblx0XHQgKiBUaGUgb3JkZXIgaW4gd2hpY2ggdGhlIGV2ZW50cyBhcmUgZmlyZWQgZGVwZW5kcyBvbiB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lOlxyXG5cdFx0ICogIDEuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA9PSAwYDogIFxyXG5cdFx0ICogIFNjZW5lcyB0aGF0IGhhdmUgbm8gZHVyYXRpb24gYnkgZGVmaW5pdGlvbiBoYXZlIG5vIGVuZGluZy4gVGh1cyB0aGUgYGVuZGAgZXZlbnQgd2lsbCBuZXZlciBiZSBmaXJlZC4gIFxyXG5cdFx0ICogIFdoZW4gdGhlIHRyaWdnZXIgcG9zaXRpb24gb2YgdGhlIHNjZW5lIGlzIHBhc3NlZCB0aGUgZXZlbnRzIGFyZSBhbHdheXMgZmlyZWQgaW4gdGhpcyBvcmRlcjogIFxyXG5cdFx0ICogIGBlbnRlcmAsIGBzdGFydGAsIGBwcm9ncmVzc2Agd2hlbiBzY3JvbGxpbmcgZm9yd2FyZCAgXHJcblx0XHQgKiAgYW5kICBcclxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgc3RhcnRgLCBgbGVhdmVgIHdoZW4gc2Nyb2xsaW5nIGluIHJldmVyc2VcclxuXHRcdCAqICAyLiBTY2VuZXMgd2l0aCBgZHVyYXRpb24gPiAwYDogIFxyXG5cdFx0ICogIFNjZW5lcyB3aXRoIGEgc2V0IGR1cmF0aW9uIGhhdmUgYSBkZWZpbmVkIHN0YXJ0IGFuZCBlbmQgcG9pbnQuICBcclxuXHRcdCAqICBXaGVuIHNjcm9sbGluZyBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXQgd2lsbCBmaXJlIHRoZXNlIGV2ZW50cyBpbiB0aGlzIG9yZGVyOiAgXHJcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCAgXHJcblx0XHQgKiAgV2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBhbmQgcGFzc2luZyB0aGUgZW5kIHBvaW50IGl0IHdpbGwgZmlyZSB0aGVzZSBldmVudHM6ICBcclxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgZW5kYCwgYGxlYXZlYCAgXHJcblx0XHQgKiAgV2hlbiByZXZlcnNpbmcgdGhyb3VnaCB0aGUgZW5kIHBvaW50IHRoZXNlIGV2ZW50cyBhcmUgZmlyZWQ6ICBcclxuXHRcdCAqICBgZW50ZXJgLCBgZW5kYCwgYHByb2dyZXNzYCAgXHJcblx0XHQgKiAgQW5kIHdoZW4gY29udGludWluZyB0byBzY3JvbGwgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24gaW4gcmV2ZXJzZSBpdCB3aWxsIGZpcmU6ICBcclxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgc3RhcnRgLCBgbGVhdmVgICBcclxuXHRcdCAqICBJbiBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgdGhlIGBwcm9ncmVzc2AgZXZlbnQgd2lsbCBiZSBjYWxsZWQgY29uc3RhbnRseSwgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIGNoYW5nZXMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEluIHNob3J0OiAgXHJcblx0XHQgKiBgZW50ZXJgIGV2ZW50cyB3aWxsIGFsd2F5cyB0cmlnZ2VyICoqYmVmb3JlKiogdGhlIHByb2dyZXNzIHVwZGF0ZSBhbmQgYGxlYXZlYCBlbnZlbnRzIHdpbGwgdHJpZ2dlciAqKmFmdGVyKiogdGhlIHByb2dyZXNzIHVwZGF0ZS4gIFxyXG5cdFx0ICogYHN0YXJ0YCBhbmQgYGVuZGAgd2lsbCBhbHdheXMgdHJpZ2dlciBhdCB0aGVpciByZXNwZWN0aXZlIHBvc2l0aW9uLlxyXG5cdFx0ICogXHJcblx0XHQgKiBQbGVhc2UgcmV2aWV3IHRoZSBldmVudCBkZXNjcmlwdGlvbnMgZm9yIGRldGFpbHMgb24gdGhlIGV2ZW50cyBhbmQgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3NcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2NlbmUgcHJvZ3Jlc3NcclxuXHRcdCAqIHZhciBwcm9ncmVzcyA9IHNjZW5lLnByb2dyZXNzKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IG5ldyBzY2VuZSBwcm9ncmVzc1xyXG5cdFx0ICogc2NlbmUucHJvZ3Jlc3MoMC4zKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmVudGVyfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zdGFydH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmVuZH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUubGVhdmV9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtwcm9ncmVzc10gLSBUaGUgbmV3IHByb2dyZXNzIHZhbHVlIG9mIHRoZSBzY2VuZSBgWzAtMV1gLlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBwcm9ncmVzcy5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfcHJvZ3Jlc3M7XHJcblx0XHRcdH0gZWxzZSB7IC8vIHNldFxyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0ZG9VcGRhdGUgPSBmYWxzZSxcclxuXHRcdFx0XHRcdG9sZFN0YXRlID0gX3N0YXRlLFxyXG5cdFx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsRGlyZWN0aW9uXCIpIDogJ1BBVVNFRCcsXHJcblx0XHRcdFx0XHRyZXZlcnNlT3JGb3J3YXJkID0gX29wdGlvbnMucmV2ZXJzZSB8fCBwcm9ncmVzcyA+PSBfcHJvZ3Jlc3M7XHJcblx0XHRcdFx0aWYgKF9vcHRpb25zLmR1cmF0aW9uID09PSAwKSB7XHJcblx0XHRcdFx0XHQvLyB6ZXJvIGR1cmF0aW9uIHNjZW5lc1xyXG5cdFx0XHRcdFx0ZG9VcGRhdGUgPSBfcHJvZ3Jlc3MgIT0gcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSBwcm9ncmVzcyA8IDEgJiYgcmV2ZXJzZU9yRm9yd2FyZCA/IDAgOiAxO1xyXG5cdFx0XHRcdFx0X3N0YXRlID0gX3Byb2dyZXNzID09PSAwID8gU0NFTkVfU1RBVEVfQkVGT1JFIDogU0NFTkVfU1RBVEVfRFVSSU5HO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBzY2VuZXMgd2l0aCBzdGFydCBhbmQgZW5kXHJcblx0XHRcdFx0XHRpZiAocHJvZ3Jlc3MgPCAwICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQkVGT1JFICYmIHJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ28gYmFjayB0byBpbml0aWFsIHN0YXRlXHJcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDA7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0JFRk9SRTtcclxuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSAmJiByZXZlcnNlT3JGb3J3YXJkKSB7XHJcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9EVVJJTkc7XHJcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPj0gMSAmJiBfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0FGVEVSKSB7XHJcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDE7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0FGVEVSO1xyXG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFyZXZlcnNlT3JGb3J3YXJkKSB7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7IC8vIGluIGNhc2Ugd2Ugc2Nyb2xsZWQgYmFja3dhcmRzIG1pZC1zY2VuZSBhbmQgcmV2ZXJzZSBpcyBkaXNhYmxlZCA9PiB1cGRhdGUgdGhlIHBpbiBwb3NpdGlvbiwgc28gaXQgZG9lc24ndCBtb3ZlIGJhY2sgYXMgd2VsbC5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRvVXBkYXRlKSB7XHJcblx0XHRcdFx0XHQvLyBmaXJlIGV2ZW50c1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdGV2ZW50VmFycyA9IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9ncmVzczogX3Byb2dyZXNzLFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlOiBfc3RhdGUsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBzY3JvbGxEaXJlY3Rpb25cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0c3RhdGVDaGFuZ2VkID0gX3N0YXRlICE9IG9sZFN0YXRlO1xyXG5cclxuXHRcdFx0XHRcdHZhciB0cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkgeyAvLyB0bXAgaGVscGVyIHRvIHNpbXBsaWZ5IGNvZGVcclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihldmVudE5hbWUsIGV2ZW50VmFycyk7XHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdGlmIChzdGF0ZUNoYW5nZWQpIHsgLy8gZW50ZXIgZXZlbnRzXHJcblx0XHRcdFx0XHRcdGlmIChvbGRTdGF0ZSAhPT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihcImVudGVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIob2xkU3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSA/IFwic3RhcnRcIiA6IFwiZW5kXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0cmlnZ2VyKFwicHJvZ3Jlc3NcIik7XHJcblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7IC8vIGxlYXZlIGV2ZW50c1xyXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihcImxlYXZlXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSBzdGFydCBhbmQgZW5kIHNjcm9sbE9mZnNldCBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogVGhlIHBvc2l0aW9ucyByZWZsZWN0IHdoYXQgdGhlIGNvbnRyb2xsZXIncyBzY3JvbGwgcG9zaXRpb24gd2lsbCBiZSBhdCB0aGUgc3RhcnQgYW5kIGVuZCByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiBJcyBjYWxsZWQsIHdoZW46XHJcblx0XHQgKiAgIC0gU2NlbmUgZXZlbnQgXCJjaGFuZ2VcIiBpcyBjYWxsZWQgd2l0aDogb2Zmc2V0LCB0cmlnZ2VySG9vaywgZHVyYXRpb24gXHJcblx0XHQgKiAgIC0gc2Nyb2xsIGNvbnRhaW5lciBldmVudCBcInJlc2l6ZVwiIGlzIGNhbGxlZFxyXG5cdFx0ICogICAtIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQgY2hhbmdlc1xyXG5cdFx0ICogICAtIHRoZSBjb250cm9sbGVyIGNoYW5nZXMgLT4gYWRkVG8oKVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3Njcm9sbE9mZnNldCA9IHtcclxuXHRcdFx0XHRzdGFydDogX3RyaWdnZXJQb3MgKyBfb3B0aW9ucy5vZmZzZXRcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XHJcblx0XHRcdFx0Ly8gdGFrZSBhd2F5IHRyaWdnZXJIb29rIHBvcnRpb24gdG8gZ2V0IHJlbGF0aXZlIHRvIHRvcFxyXG5cdFx0XHRcdF9zY3JvbGxPZmZzZXQuc3RhcnQgLT0gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBfb3B0aW9ucy50cmlnZ2VySG9vaztcclxuXHRcdFx0fVxyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0LmVuZCA9IF9zY3JvbGxPZmZzZXQuc3RhcnQgKyBfb3B0aW9ucy5kdXJhdGlvbjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBkdXJhdGlvbiBpZiBzZXQgdG8gYSBkeW5hbWljIGZ1bmN0aW9uLlxyXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlciBhbmQgaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlciB0aHJvdWdoIHNjZW5lLnJlZnJlc2goKS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbc3VwcHJlc3NFdmVudHM9ZmFsc2VdIC0gSWYgdHJ1ZSB0aGUgc2hpZnQgZXZlbnQgd2lsbCBiZSBzdXBwcmVzc2VkLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZUR1cmF0aW9uID0gZnVuY3Rpb24gKHN1cHByZXNzRXZlbnRzKSB7XHJcblx0XHRcdC8vIHVwZGF0ZSBkdXJhdGlvblxyXG5cdFx0XHRpZiAoX2R1cmF0aW9uVXBkYXRlTWV0aG9kKSB7XHJcblx0XHRcdFx0dmFyIHZhcm5hbWUgPSBcImR1cmF0aW9uXCI7XHJcblx0XHRcdFx0aWYgKGNoYW5nZU9wdGlvbih2YXJuYW1lLCBfZHVyYXRpb25VcGRhdGVNZXRob2QuY2FsbChTY2VuZSkpICYmICFzdXBwcmVzc0V2ZW50cykgeyAvLyBzZXRcclxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xyXG5cdFx0XHRcdFx0XHR3aGF0OiB2YXJuYW1lLFxyXG5cdFx0XHRcdFx0XHRuZXd2YWw6IF9vcHRpb25zW3Zhcm5hbWVdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdHJlYXNvbjogdmFybmFtZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50LCBpZiBwcmVzZW50LlxyXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIC4uLlxyXG5cdFx0ICogIC0gLi4uIHdoZW4gdGhlIHRyaWdnZXJFbGVtZW50IGlzIGNoYW5nZWRcclxuXHRcdCAqICAtIC4uLiB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIChuZXcpIGNvbnRyb2xsZXJcclxuXHRcdCAqICAtIC4uLiBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHBvc2l0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdXBwcmVzc0V2ZW50cykge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRlbGVtZW50UG9zID0gMCxcclxuXHRcdFx0XHR0ZWxlbSA9IF9vcHRpb25zLnRyaWdnZXJFbGVtZW50O1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgKHRlbGVtIHx8IF90cmlnZ2VyUG9zID4gMCkpIHsgLy8gZWl0aGVyIGFuIGVsZW1lbnQgZXhpc3RzIG9yIHdhcyByZW1vdmVkIGFuZCB0aGUgdHJpZ2dlclBvcyBpcyBzdGlsbCA+IDBcclxuXHRcdFx0XHRpZiAodGVsZW0pIHsgLy8gdGhlcmUgY3VycmVudGx5IGEgdHJpZ2dlckVsZW1lbnQgc2V0XHJcblx0XHRcdFx0XHRpZiAodGVsZW0ucGFyZW50Tm9kZSkgeyAvLyBjaGVjayBpZiBlbGVtZW50IGlzIHN0aWxsIGF0dGFjaGVkIHRvIERPTVxyXG5cdFx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVySW5mbyA9IF9jb250cm9sbGVyLmluZm8oKSxcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KGNvbnRyb2xsZXJJbmZvLmNvbnRhaW5lciksIC8vIGNvbnRhaW5lciBwb3NpdGlvbiBpcyBuZWVkZWQgYmVjYXVzZSBlbGVtZW50IG9mZnNldCBpcyByZXR1cm5lZCBpbiByZWxhdGlvbiB0byBkb2N1bWVudCwgbm90IGluIHJlbGF0aW9uIHRvIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdFx0XHRwYXJhbSA9IGNvbnRyb2xsZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiOyAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBpZiBwYXJlbnQgaXMgc3BhY2VyLCB1c2Ugc3BhY2VyIHBvc2l0aW9uIGluc3RlYWQgc28gY29ycmVjdCBzdGFydCBwb3NpdGlvbiBpcyByZXR1cm5lZCBmb3IgcGlubmVkIGVsZW1lbnRzLlxyXG5cdFx0XHRcdFx0XHR3aGlsZSAodGVsZW0ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGVsZW0gPSB0ZWxlbS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZWxlbWVudE9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQodGVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFjb250cm9sbGVySW5mby5pc0RvY3VtZW50KSB7IC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXRbcGFyYW1dIC09IF9jb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtZW50UG9zID0gZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7IC8vIHRoZXJlIHdhcyBhbiBlbGVtZW50LCBidXQgaXQgd2FzIHJlbW92ZWQgZnJvbSBET01cclxuXHRcdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogdHJpZ2dlckVsZW1lbnQgd2FzIHJlbW92ZWQgZnJvbSBET00gYW5kIHdpbGwgYmUgcmVzZXQgdG9cIiwgdW5kZWZpbmVkKTtcclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlckVsZW1lbnQodW5kZWZpbmVkKTsgLy8gdW5zZXQsIHNvIGEgY2hhbmdlIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGNoYW5nZWQgPSBlbGVtZW50UG9zICE9IF90cmlnZ2VyUG9zO1xyXG5cdFx0XHRcdF90cmlnZ2VyUG9zID0gZWxlbWVudFBvcztcclxuXHRcdFx0XHRpZiAoY2hhbmdlZCAmJiAhc3VwcHJlc3NFdmVudHMpIHtcclxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdHJlYXNvbjogXCJ0cmlnZ2VyRWxlbWVudFBvc2l0aW9uXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyaWdnZXIgYSBzaGlmdCBldmVudCwgd2hlbiB0aGUgY29udGFpbmVyIGlzIHJlc2l6ZWQgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyA+IDEuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgb25Db250YWluZXJSZXNpemUgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMudHJpZ2dlckhvb2sgPiAwKSB7XHJcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdHJlYXNvbjogXCJjb250YWluZXJSZXNpemVcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXIgX3ZhbGlkYXRlID0gX3V0aWwuZXh0ZW5kKFNDRU5FX09QVElPTlMudmFsaWRhdGUsIHtcclxuXHRcdFx0Ly8gdmFsaWRhdGlvbiBmb3IgZHVyYXRpb24gaGFuZGxlZCBpbnRlcm5hbGx5IGZvciByZWZlcmVuY2UgdG8gcHJpdmF0ZSB2YXIgX2R1cmF0aW9uTWV0aG9kXHJcblx0XHRcdGR1cmF0aW9uOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuU3RyaW5nKHZhbCkgJiYgdmFsLm1hdGNoKC9eKFxcLnxcXGQpKlxcZCslJC8pKSB7XHJcblx0XHRcdFx0XHQvLyBwZXJjZW50YWdlIHZhbHVlXHJcblx0XHRcdFx0XHR2YXIgcGVyYyA9IHBhcnNlRmxvYXQodmFsKSAvIDEwMDtcclxuXHRcdFx0XHRcdHZhbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIF9jb250cm9sbGVyID8gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBwZXJjIDogMDtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHZhbCkpIHtcclxuXHRcdFx0XHRcdC8vIGZ1bmN0aW9uXHJcblx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB2YWw7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KF9kdXJhdGlvblVwZGF0ZU1ldGhvZC5jYWxsKFNjZW5lKSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IC0xOyAvLyB3aWxsIGNhdXNlIGVycm9yIGJlbG93XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHZhbCBoYXMgdG8gYmUgZmxvYXRcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XHJcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpIHx8IHZhbCA8IDApIHtcclxuXHRcdFx0XHRcdGlmIChfZHVyYXRpb25VcGRhdGVNZXRob2QpIHtcclxuXHRcdFx0XHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHJldHVybiB2YWx1ZSBvZiBzdXBwbGllZCBmdW5jdGlvbiBmb3Igb3B0aW9uIFxcXCJkdXJhdGlvblxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImR1cmF0aW9uXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGEgc3BlY2lmaWMgb3IgYWxsIG9wdGlvbnMgYW5kIHJlc2V0IHRvIGRlZmF1bHQgaWYgbmVjY2Vzc2FyeS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB2YWxpZGF0ZU9wdGlvbiA9IGZ1bmN0aW9uIChjaGVjaykge1xyXG5cdFx0XHRjaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPyBbY2hlY2tdIDogT2JqZWN0LmtleXMoX3ZhbGlkYXRlKTtcclxuXHRcdFx0Y2hlY2suZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uTmFtZSwga2V5KSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlO1xyXG5cdFx0XHRcdGlmIChfdmFsaWRhdGVbb3B0aW9uTmFtZV0pIHsgLy8gdGhlcmUgaXMgYSB2YWxpZGF0aW9uIG1ldGhvZCBmb3IgdGhpcyBvcHRpb25cclxuXHRcdFx0XHRcdHRyeSB7IC8vIHZhbGlkYXRlIHZhbHVlXHJcblx0XHRcdFx0XHRcdHZhbHVlID0gX3ZhbGlkYXRlW29wdGlvbk5hbWVdKF9vcHRpb25zW29wdGlvbk5hbWVdKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gdmFsaWRhdGlvbiBmYWlsZWQgLT4gcmVzZXQgdG8gZGVmYXVsdFxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IERFRkFVTFRfT1BUSU9OU1tvcHRpb25OYW1lXTtcclxuXHRcdFx0XHRcdFx0dmFyIGxvZ01TRyA9IF91dGlsLnR5cGUuU3RyaW5nKGUpID8gW2VdIDogZTtcclxuXHRcdFx0XHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobG9nTVNHKSkge1xyXG5cdFx0XHRcdFx0XHRcdGxvZ01TR1swXSA9IFwiRVJST1I6IFwiICsgbG9nTVNHWzBdO1xyXG5cdFx0XHRcdFx0XHRcdGxvZ01TRy51bnNoaWZ0KDEpOyAvLyBsb2dsZXZlbCAxIGZvciBlcnJvciBtc2dcclxuXHRcdFx0XHRcdFx0XHRsb2cuYXBwbHkodGhpcywgbG9nTVNHKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRsb2coMSwgXCJFUlJPUjogUHJvYmxlbSBleGVjdXRpbmcgdmFsaWRhdGlvbiBjYWxsYmFjayBmb3Igb3B0aW9uICdcIiArIG9wdGlvbk5hbWUgKyBcIic6XCIsIGUubWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0XHRcdF9vcHRpb25zW29wdGlvbk5hbWVdID0gdmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIZWxwZXIgdXNlZCBieSB0aGUgc2V0dGVyL2dldHRlcnMgZm9yIHNjZW5lIG9wdGlvbnNcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjaGFuZ2VPcHRpb24gPSBmdW5jdGlvbiAodmFybmFtZSwgbmV3dmFsKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGNoYW5nZWQgPSBmYWxzZSxcclxuXHRcdFx0XHRvbGR2YWwgPSBfb3B0aW9uc1t2YXJuYW1lXTtcclxuXHRcdFx0aWYgKF9vcHRpb25zW3Zhcm5hbWVdICE9IG5ld3ZhbCkge1xyXG5cdFx0XHRcdF9vcHRpb25zW3Zhcm5hbWVdID0gbmV3dmFsO1xyXG5cdFx0XHRcdHZhbGlkYXRlT3B0aW9uKHZhcm5hbWUpOyAvLyByZXNldHMgdG8gZGVmYXVsdCBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRjaGFuZ2VkID0gb2xkdmFsICE9IF9vcHRpb25zW3Zhcm5hbWVdO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjaGFuZ2VkO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBnZW5lcmF0ZSBnZXR0ZXJzL3NldHRlcnMgZm9yIGFsbCBvcHRpb25zXHJcblx0XHR2YXIgYWRkU2NlbmVPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9uTmFtZSkge1xyXG5cdFx0XHRpZiAoIVNjZW5lW29wdGlvbk5hbWVdKSB7XHJcblx0XHRcdFx0U2NlbmVbb3B0aW9uTmFtZV0gPSBmdW5jdGlvbiAobmV3VmFsKSB7XHJcblx0XHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0XHRcdHJldHVybiBfb3B0aW9uc1tvcHRpb25OYW1lXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChvcHRpb25OYW1lID09PSBcImR1cmF0aW9uXCIpIHsgLy8gbmV3IGR1cmF0aW9uIGlzIHNldCwgc28gYW55IHByZXZpb3VzbHkgc2V0IGZ1bmN0aW9uIG11c3QgYmUgdW5zZXRcclxuXHRcdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGNoYW5nZU9wdGlvbihvcHRpb25OYW1lLCBuZXdWYWwpKSB7IC8vIHNldFxyXG5cdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0d2hhdDogb3B0aW9uTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdG5ld3ZhbDogX29wdGlvbnNbb3B0aW9uTmFtZV1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoU0NFTkVfT1BUSU9OUy5zaGlmdHMuaW5kZXhPZihvcHRpb25OYW1lKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFzb246IG9wdGlvbk5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGR1cmF0aW9uIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBBcyBhICoqc2V0dGVyKiogaXQgYWNjZXB0cyB0aHJlZSB0eXBlcyBvZiBwYXJhbWV0ZXJzOlxyXG5cdFx0ICogMS4gYG51bWJlcmA6IFNldHMgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZSB0byBleGFjdGx5IHRoaXMgYW1vdW50IG9mIHBpeGVscy4gIFxyXG5cdFx0ICogICBUaGlzIG1lYW5zIHRoZSBzY2VuZSB3aWxsIGxhc3QgZm9yIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzIHNjcm9sbGVkLiBTdWItUGl4ZWxzIGFyZSBhbHNvIHZhbGlkLlxyXG5cdFx0ICogICBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGF0IHRoZSBzY2VuZSBpcyAnb3BlbiBlbmQnIGFuZCBubyBlbmQgd2lsbCBiZSB0cmlnZ2VyZWQuIFBpbnMgd2lsbCBuZXZlciB1bnBpbiBhbmQgYW5pbWF0aW9ucyB3aWxsIHBsYXkgaW5kZXBlbmRlbnRseSBvZiBzY3JvbGwgcHJvZ3Jlc3MuXHJcblx0XHQgKiAyLiBgc3RyaW5nYDogQWx3YXlzIHVwZGF0ZXMgdGhlIGR1cmF0aW9uIHJlbGF0aXZlIHRvIHBhcmVudCBzY3JvbGwgY29udGFpbmVyLiAgXHJcblx0XHQgKiAgIEZvciBleGFtcGxlIGBcIjEwMCVcImAgd2lsbCBrZWVwIHRoZSBkdXJhdGlvbiBhbHdheXMgZXhhY3RseSBhdCB0aGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSBzY3JvbGwgY29udGFpbmVyLlxyXG5cdFx0ICogICBXaGVuIHNjcm9sbGluZyB2ZXJ0aWNhbGx5IHRoZSB3aWR0aCBpcyB1c2VkIGZvciByZWZlcmVuY2UgcmVzcGVjdGl2ZWx5LlxyXG5cdFx0ICogMy4gYGZ1bmN0aW9uYDogVGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIHJldHVybiB0aGUgc2NlbmUgZHVyYXRpb24uXHJcblx0XHQgKiAgIFRoaXMgaXMgdXNlZnVsIGluIHNldHVwcyB3aGVyZSB0aGUgZHVyYXRpb24gZGVwZW5kcyBvbiBvdGhlciBlbGVtZW50cyB3aG8gbWlnaHQgY2hhbmdlIHNpemUuIEJ5IHN1cHBseWluZyBhIGZ1bmN0aW9uIHlvdSBjYW4gcmV0dXJuIGEgdmFsdWUgaW5zdGVhZCBvZiB1cGRhdGluZyBwb3RlbnRpYWxseSBtdWx0aXBsZSBzY2VuZSBkdXJhdGlvbnMuICBcclxuXHRcdCAqICAgVGhlIHNjZW5lIGNhbiBiZSByZWZlcmVuY2VkIGluc2lkZSB0aGUgY2FsbGJhY2sgdXNpbmcgYHRoaXNgLlxyXG5cdFx0ICogICBfKipXQVJOSU5HOioqIFRoaXMgaXMgYW4gZWFzeSB3YXkgdG8ga2lsbCBwZXJmb3JtYW5jZSwgYXMgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgdGltZSBgU2NlbmUucmVmcmVzaCgpYCBpcyBjYWxsZWQsIHdoaWNoIGhhcHBlbnMgYSBsb3QuIFRoZSBpbnRlcnZhbCBpcyBkZWZpbmVkIGJ5IHRoZSBjb250cm9sbGVyIChzZWUgU2Nyb2xsTWFnaWMuQ29udHJvbGxlciBvcHRpb24gYHJlZnJlc2hJbnRlcnZhbGApLiAgXHJcblx0XHQgKiAgIEl0J3MgcmVjb21lbmRlZCB0byBhdm9pZCBjYWxjdWxhdGlvbnMgd2l0aGluIHRoZSBmdW5jdGlvbiBhbmQgdXNlIGNhY2hlZCB2YXJpYWJsZXMgYXMgcmV0dXJuIHZhbHVlcy4gIFxyXG5cdFx0ICogICBUaGlzIGNvdW50cyBkb3VibGUgaWYgeW91IHVzZSB0aGUgc2FtZSBmdW5jdGlvbiBmb3IgbXVsdGlwbGUgc2NlbmVzLl9cclxuXHRcdCAqXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2R1cmF0aW9uXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IGR1cmF0aW9uIHZhbHVlXHJcblx0XHQgKiB2YXIgZHVyYXRpb24gPSBzY2VuZS5kdXJhdGlvbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyBkdXJhdGlvblxyXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oMzAwKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgZHVyYXRpb24gcmVzcG9uc2l2ZWx5IHRvIGNvbnRhaW5lciBzaXplXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbihcIjEwMCVcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXNlIGEgZnVuY3Rpb24gdG8gcmFuZG9taXplIHRoZSBkdXJhdGlvbiBmb3Igc29tZSByZWFzb24uXHJcblx0XHQgKiB2YXIgZHVyYXRpb25WYWx1ZUNhY2hlO1xyXG5cdFx0ICogZnVuY3Rpb24gZHVyYXRpb25DYWxsYmFjayAoKSB7XHJcblx0XHQgKiAgIHJldHVybiBkdXJhdGlvblZhbHVlQ2FjaGU7XHJcblx0XHQgKiB9XHJcblx0XHQgKiBmdW5jdGlvbiB1cGRhdGVEdXJhdGlvbiAoKSB7XHJcblx0XHQgKiAgIGR1cmF0aW9uVmFsdWVDYWNoZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XHJcblx0XHQgKiB9XHJcblx0XHQgKiB1cGRhdGVEdXJhdGlvbigpOyAvLyBzZXQgdG8gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oZHVyYXRpb25DYWxsYmFjayk7IC8vIHNldCBkdXJhdGlvbiBjYWxsYmFja1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pfSBbbmV3RHVyYXRpb25dIC0gVGhlIG5ldyBkdXJhdGlvbiBzZXR0aW5nIGZvciB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIGR1cmF0aW9uLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBvZmZzZXQgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvZmZzZXRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgb2Zmc2V0XHJcblx0XHQgKiB2YXIgb2Zmc2V0ID0gc2NlbmUub2Zmc2V0KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IG9mZnNldFxyXG5cdFx0ICogc2NlbmUub2Zmc2V0KDEwMCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdPZmZzZXRdIC0gVGhlIG5ldyBvZmZzZXQgb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBvZmZzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHRyaWdnZXJFbGVtZW50IG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIERvZXMgKipub3QqKiBmaXJlIGBTY2VuZS5zaGlmdGAsIGJlY2F1c2UgY2hhbmdpbmcgdGhlIHRyaWdnZXIgRWxlbWVudCBkb2Vzbid0IG5lY2Vzc2FyaWx5IG1lYW4gdGhlIHN0YXJ0IHBvc2l0aW9uIGNoYW5nZXMuIFRoaXMgd2lsbCBiZSBkZXRlcm1pbmVkIGluIGBTY2VuZS5yZWZyZXNoKClgLCB3aGljaCBpcyBhdXRvbWF0aWNhbGx5IHRyaWdnZXJlZC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlckVsZW1lbnRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdHJpZ2dlckVsZW1lbnRcclxuXHRcdCAqIHZhciB0cmlnZ2VyRWxlbWVudCA9IHNjZW5lLnRyaWdnZXJFbGVtZW50KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJFbGVtZW50IHVzaW5nIGEgc2VsZWN0b3JcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KFwiI3RyaWdnZXJcIik7XHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBET00gb2JqZWN0XHJcblx0XHQgKiBzY2VuZS50cmlnZ2VyRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyaWdnZXJcIikpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtuZXdUcmlnZ2VyRWxlbWVudF0gLSBUaGUgbmV3IHRyaWdnZXIgZWxlbWVudCBmb3IgdGhlIHNjZW5lLlxyXG5cdFx0ICogQHJldHVybnMgeyhzdHJpbmd8b2JqZWN0KX0gYGdldGAgLSAgQ3VycmVudCB0cmlnZ2VyRWxlbWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckhvb2sgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VySG9va1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VySG9vayB2YWx1ZVxyXG5cdFx0ICogdmFyIHRyaWdnZXJIb29rID0gc2NlbmUudHJpZ2dlckhvb2soKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckhvb2sgdXNpbmcgYSBzdHJpbmdcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJIb29rKFwib25MZWF2ZVwiKTtcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIG51bWJlclxyXG5cdFx0ICogc2NlbmUudHJpZ2dlckhvb2soMC43KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gW25ld1RyaWdnZXJIb29rXSAtIFRoZSBuZXcgdHJpZ2dlckhvb2sgb2YgdGhlIHNjZW5lLiBTZWUge0BsaW5rIFNjZW5lfSBwYXJhbWV0ZXIgZGVzY3JpcHRpb24gZm9yIHZhbHVlIG9wdGlvbnMuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJIb29rIChBTFdBWVMgbnVtZXJpY2FsKS5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgcmV2ZXJzZSBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JldmVyc2VcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgcmV2ZXJzZSBvcHRpb25cclxuXHRcdCAqIHZhciByZXZlcnNlID0gc2NlbmUucmV2ZXJzZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBuZXcgcmV2ZXJzZSBvcHRpb25cclxuXHRcdCAqIHNjZW5lLnJldmVyc2UoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbmV3UmV2ZXJzZV0gLSBUaGUgbmV3IHJldmVyc2Ugc2V0dGluZyBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYGdldGAgLSAgQ3VycmVudCByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgbG9nbGV2ZWwgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNsb2dsZXZlbFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBsb2dsZXZlbFxyXG5cdFx0ICogdmFyIGxvZ2xldmVsID0gc2NlbmUubG9nbGV2ZWwoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgbmV3IGxvZ2xldmVsXHJcblx0XHQgKiBzY2VuZS5sb2dsZXZlbCgzKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbmV3TG9nbGV2ZWxdIC0gVGhlIG5ldyBsb2dsZXZlbCBzZXR0aW5nIG9mIHRoZSBzY2VuZS4gYFswLTNdYFxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBsb2dsZXZlbC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGFzc29jaWF0ZWQgY29udHJvbGxlci5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjY29udHJvbGxlclxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY29udHJvbGxlciBvZiBhIHNjZW5lXHJcblx0XHQgKiB2YXIgY29udHJvbGxlciA9IHNjZW5lLmNvbnRyb2xsZXIoKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gUGFyZW50IGNvbnRyb2xsZXIgb3IgYHVuZGVmaW5lZGBcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5jb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhdGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRcdCAqIHZhciBzdGF0ZSA9IHNjZW5lLnN0YXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9zdGF0ZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXQgZm9yIHRoZSBzdGFydCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIE1pbmQsIHRoYXQgdGhlIHNjcm9sbE9mZnNldCBpcyByZWxhdGVkIHRvIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXIsIGlmIGB0cmlnZ2VySG9va2AgaXMgYmlnZ2VyIHRoYW4gYDBgIChvciBgXCJvbkxlYXZlXCJgKS4gIFxyXG5cdFx0ICogVGhpcyBtZWFucywgdGhhdCByZXNpemluZyB0aGUgY29udGFpbmVyIG9yIGNoYW5naW5nIHRoZSBgdHJpZ2dlckhvb2tgIHdpbGwgaW5mbHVlbmNlIHRoZSBzY2VuZSdzIHN0YXJ0IG9mZnNldC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2Nyb2xsT2Zmc2V0XHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIHZhciBzdGFydCA9IHNjZW5lLnNjcm9sbE9mZnNldCgpO1xyXG5cdFx0ICogdmFyIGVuZCA9IHNjZW5lLnNjcm9sbE9mZnNldCgpICsgc2NlbmUuZHVyYXRpb24oKTtcclxuXHRcdCAqIGNvbnNvbGUubG9nKFwidGhlIHNjZW5lIHN0YXJ0cyBhdFwiLCBzdGFydCwgXCJhbmQgZW5kcyBhdFwiLCBlbmQpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBzY3JvbGwgb2Zmc2V0IChvZiB0aGUgY29udGFpbmVyKSBhdCB3aGljaCB0aGUgc2NlbmUgd2lsbCB0cmlnZ2VyLiBZIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgWCB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9zY3JvbGxPZmZzZXQuc3RhcnQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluY2x1ZGluZyB0aGUgdmFsdWUgb2YgdGhlIGBvZmZzZXRgIG9wdGlvbikuICBcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlclBvc2l0aW9uXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBzY2VuZSdzIHRyaWdnZXIgcG9zaXRpb25cclxuXHRcdCAqIHZhciB0cmlnZ2VyUG9zaXRpb24gPSBzY2VuZS50cmlnZ2VyUG9zaXRpb24oKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBTdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUuIFRvcCBwb3NpdGlvbiB2YWx1ZSBmb3IgdmVydGljYWwgYW5kIGxlZnQgcG9zaXRpb24gdmFsdWUgZm9yIGhvcml6b250YWwgc2Nyb2xscy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy50cmlnZ2VyUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBwb3MgPSBfb3B0aW9ucy5vZmZzZXQ7IC8vIHRoZSBvZmZzZXQgaXMgdGhlIGJhc2lzXHJcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdC8vIGdldCB0aGUgdHJpZ2dlciBwb3NpdGlvblxyXG5cdFx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VyRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBhcyB0cmlnZ2VyXHJcblx0XHRcdFx0XHRwb3MgKz0gX3RyaWdnZXJQb3M7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB0cmlnZ2VySG9vayB0byBzdGFydCBhdCB0aGUgYmVnaW5uaW5nXHJcblx0XHRcdFx0XHRwb3MgKz0gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBTY2VuZS50cmlnZ2VySG9vaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcG9zO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdF9waW4sXHJcblx0XHRcdF9waW5PcHRpb25zO1xyXG5cclxuXHRcdFNjZW5lXHJcblx0XHRcdC5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIGR1cmF0aW9uQ2hhbmdlZCA9IGUucmVhc29uID09PSBcImR1cmF0aW9uXCI7XHJcblx0XHRcdFx0aWYgKChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSICYmIGR1cmF0aW9uQ2hhbmdlZCkgfHwgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwKSkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgW2R1cmF0aW9uIGNoYW5nZWQgYWZ0ZXIgYSBzY2VuZSAoaW5zaWRlIHNjZW5lIHByb2dyZXNzIHVwZGF0ZXMgcGluIHBvc2l0aW9uKV0gb3IgW2R1cmF0aW9uIGlzIDAsIHdlIGFyZSBpbiBwaW4gcGhhc2UgYW5kIHNvbWUgb3RoZXIgdmFsdWUgY2hhbmdlZF0uXHJcblx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZHVyYXRpb25DaGFuZ2VkKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJwcm9ncmVzcy5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcImFkZC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZVBpbihlLnJlc2V0KTtcclxuXHRcdFx0fSk7XHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZSB0aGUgcGluIHN0YXRlLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVBpblN0YXRlID0gZnVuY3Rpb24gKGZvcmNlVW5waW4pIHtcclxuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGNvbnRhaW5lckluZm8gPSBfY29udHJvbGxlci5pbmZvKCksXHJcblx0XHRcdFx0XHRwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZDsgLy8gbWF5IGJlIHBpbiBlbGVtZW50IG9yIGFub3RoZXIgc3BhY2VyLCBpZiBjYXNjYWRpbmcgcGluc1xyXG5cclxuXHRcdFx0XHRpZiAoIWZvcmNlVW5waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHsgLy8gZHVyaW5nIHNjZW5lIG9yIGlmIGR1cmF0aW9uIGlzIDAgYW5kIHdlIGFyZSBwYXN0IHRoZSB0cmlnZ2VyXHJcblx0XHRcdFx0XHQvLyBwaW5uZWQgc3RhdGVcclxuXHRcdFx0XHRcdGlmIChfdXRpbC5jc3MocGluVGFyZ2V0LCBcInBvc2l0aW9uXCIpICE9IFwiZml4ZWRcIikge1xyXG5cdFx0XHRcdFx0XHQvLyBjaGFuZ2Ugc3RhdGUgYmVmb3JlIHVwZGF0aW5nIHBpbiBzcGFjZXIgKHBvc2l0aW9uIGNoYW5nZXMgZHVlIHRvIGZpeGVkIGNvbGxhcHNpbmcgbWlnaHQgb2NjdXIuKVxyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCB7XHJcblx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0Zml4ZWRQb3MgPSBfdXRpbC5nZXQub2Zmc2V0KF9waW5PcHRpb25zLnNwYWNlciwgdHJ1ZSksIC8vIGdldCB2aWV3cG9ydCBwb3NpdGlvbiBvZiBzcGFjZXJcclxuXHRcdFx0XHRcdFx0c2Nyb2xsRGlzdGFuY2UgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IF9vcHRpb25zLmR1cmF0aW9uID09PSAwID9cclxuXHRcdFx0XHRcdFx0Y29udGFpbmVySW5mby5zY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0IC8vIHF1aWNrZXJcclxuXHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRNYXRoLnJvdW5kKF9wcm9ncmVzcyAqIF9vcHRpb25zLmR1cmF0aW9uICogMTApIC8gMTA7IC8vIGlmIG5vIHJldmVyc2UgYW5kIGR1cmluZyBwaW4gdGhlIHBvc2l0aW9uIG5lZWRzIHRvIGJlIHJlY2FsY3VsYXRlZCB1c2luZyB0aGUgcHJvZ3Jlc3NcclxuXHJcblx0XHRcdFx0XHQvLyBhZGQgc2Nyb2xsRGlzdGFuY2VcclxuXHRcdFx0XHRcdGZpeGVkUG9zW2NvbnRhaW5lckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCJdICs9IHNjcm9sbERpc3RhbmNlO1xyXG5cclxuXHRcdFx0XHRcdC8vIHNldCBuZXcgdmFsdWVzXHJcblx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQsIHtcclxuXHRcdFx0XHRcdFx0dG9wOiBmaXhlZFBvcy50b3AsXHJcblx0XHRcdFx0XHRcdGxlZnQ6IGZpeGVkUG9zLmxlZnRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyB1bnBpbm5lZCBzdGF0ZVxyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdG5ld0NTUyA9IHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogX3Bpbk9wdGlvbnMuaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGNoYW5nZSA9IF91dGlsLmNzcyhwaW5UYXJnZXQsIFwicG9zaXRpb25cIikgIT0gbmV3Q1NTLnBvc2l0aW9uO1xyXG5cclxuXHRcdFx0XHRcdGlmICghX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdFx0XHRuZXdDU1NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMuZHVyYXRpb24gPiAwKSB7IC8vIG9ubHkgY29uY2VybnMgc2NlbmVzIHdpdGggZHVyYXRpb25cclxuXHRcdFx0XHRcdFx0aWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIgJiYgcGFyc2VGbG9hdChfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcInBhZGRpbmctdG9wXCIpKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGlmIGluIGFmdGVyIHN0YXRlIGJ1dCBoYXZlbnQgdXBkYXRlZCBzcGFjZXIgeWV0IChqdW1wZWQgcGFzdCBwaW4pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcGFyc2VGbG9hdChfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcInBhZGRpbmctYm90dG9tXCIpKSA9PT0gMCkgeyAvLyBiZWZvcmVcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSB0cnVlOyAvLyBqdW1wZWQgcGFzdCBmaXhlZCBzdGF0ZSB1cHdhcmQgZGlyZWN0aW9uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIHNldCBuZXcgdmFsdWVzXHJcblx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBuZXdDU1MpO1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5nZSkge1xyXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgcGluIHNwYWNlciBpZiBzdGF0ZSBjaGFuZ2VkXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHBpbiBzcGFjZXIgYW5kL29yIGVsZW1lbnQgc2l6ZS5cclxuXHRcdCAqIFRoZSBzaXplIG9mIHRoZSBzcGFjZXIgbmVlZHMgdG8gYmUgdXBkYXRlZCB3aGVuZXZlciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lIGNoYW5nZXMsIGlmIGl0IGlzIHRvIHB1c2ggZG93biBmb2xsb3dpbmcgZWxlbWVudHMuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIgJiYgX3Bpbk9wdGlvbnMuaW5GbG93KSB7IC8vIG5vIHNwYWNlcnJlc2l6ZSwgaWYgb3JpZ2luYWwgcG9zaXRpb24gaXMgYWJzb2x1dGVcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGFmdGVyID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIpLFxyXG5cdFx0XHRcdFx0YmVmb3JlID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFKSxcclxuXHRcdFx0XHRcdGR1cmluZyA9IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyksXHJcblx0XHRcdFx0XHR2ZXJ0aWNhbCA9IF9jb250cm9sbGVyLmluZm8oXCJ2ZXJ0aWNhbFwiKSxcclxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkLCAvLyB1c3VhbGx5IHRoZSBwaW5lZCBlbGVtZW50IGJ1dCBjYW4gYWxzbyBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucylcclxuXHRcdFx0XHRcdG1hcmdpbkNvbGxhcHNlID0gX3V0aWwuaXNNYXJnaW5Db2xsYXBzZVR5cGUoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJkaXNwbGF5XCIpKSxcclxuXHRcdFx0XHRcdGNzcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvLyBzZXQgbmV3IHNpemVcclxuXHRcdFx0XHQvLyBpZiByZWxzaXplOiBzcGFjZXIgLT4gcGluIHwgZWxzZTogcGluIC0+IHNwYWNlclxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkge1xyXG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogX3V0aWwuZ2V0LndpZHRoKF9waW5PcHRpb25zLnNwYWNlcilcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogXCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIG1pbndpZHRoIGlzIG5lZWRlZCBmb3IgY2FzY2FkZWQgcGlucy5cclxuXHRcdFx0XHRcdGNzc1tcIm1pbi13aWR0aFwiXSA9IF91dGlsLmdldC53aWR0aCh2ZXJ0aWNhbCA/IF9waW4gOiBwaW5UYXJnZXQsIHRydWUsIHRydWUpO1xyXG5cdFx0XHRcdFx0Y3NzLndpZHRoID0gZHVyaW5nID8gY3NzW1wibWluLXdpZHRoXCJdIDogXCJhdXRvXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLmhlaWdodCkge1xyXG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xyXG5cdFx0XHRcdFx0XHQvLyB0aGUgb25seSBwYWRkaW5nIHRoZSBzcGFjZXIgc2hvdWxkIGV2ZXIgaW5jbHVkZSBpcyB0aGUgZHVyYXRpb24gKGlmIHB1c2hGb2xsb3dlcnMgPSB0cnVlKSwgc28gd2UgbmVlZCB0byBzdWJzdHJhY3QgdGhhdC5cclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlcikgLSAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2VycyA/IF9vcHRpb25zLmR1cmF0aW9uIDogMClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IFwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBtYXJnaW4gaXMgb25seSBpbmNsdWRlZCBpZiBpdCdzIGEgY2FzY2FkZWQgcGluIHRvIHJlc29sdmUgYW4gSUU5IGJ1Z1xyXG5cdFx0XHRcdFx0Y3NzW1wibWluLWhlaWdodFwiXSA9IF91dGlsLmdldC5oZWlnaHQodmVydGljYWwgPyBwaW5UYXJnZXQgOiBfcGluLCB0cnVlLCAhbWFyZ2luQ29sbGFwc2UpOyAvLyBuZWVkZWQgZm9yIGNhc2NhZGluZyBwaW5zXHJcblx0XHRcdFx0XHRjc3MuaGVpZ2h0ID0gZHVyaW5nID8gY3NzW1wibWluLWhlaWdodFwiXSA6IFwiYXV0b1wiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHNwYWNlIGZvciBkdXJhdGlvbiBpZiBwdXNoRm9sbG93ZXJzIGlzIHRydWVcclxuXHRcdFx0XHRpZiAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJUb3BcIiA6IFwiTGVmdFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcclxuXHRcdFx0XHRcdGNzc1tcInBhZGRpbmdcIiArICh2ZXJ0aWNhbCA/IFwiQm90dG9tXCIgOiBcIlJpZ2h0XCIpXSA9IF9vcHRpb25zLmR1cmF0aW9uICogKDEgLSBfcHJvZ3Jlc3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBjc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgUGluIHN0YXRlIChpbiBjZXJ0YWluIHNjZW5hcmlvcylcclxuXHRcdCAqIElmIHRoZSBjb250cm9sbGVyIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IGFuZCB3ZSBhcmUgbWlkLXBpbi1waGFzZSBzY3JvbGxpbmcgb3IgcmVzaXppbmcgdGhlIG1haW4gZG9jdW1lbnQgY2FuIHJlc3VsdCB0byB3cm9uZyBwaW4gcG9zaXRpb25zLlxyXG5cdFx0ICogU28gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb24gcmVzaXplIGFuZCBzY3JvbGwgb2YgdGhlIGRvY3VtZW50LlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVBpbkluQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhX2NvbnRyb2xsZXIuaW5mbyhcImlzRG9jdW1lbnRcIikpIHtcclxuXHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgUGluIHNwYWNlciBzaXplIHN0YXRlIChpbiBjZXJ0YWluIHNjZW5hcmlvcylcclxuXHRcdCAqIElmIGNvbnRhaW5lciBpcyByZXNpemVkIGR1cmluZyBwaW4gYW5kIHJlbGF0aXZlbHkgc2l6ZWQgdGhlIHNpemUgb2YgdGhlIHBpbiBtaWdodCBuZWVkIHRvIGJlIHVwZGF0ZWQuLi5cclxuXHRcdCAqIFNvIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHJlc2l6ZSBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiAvLyB3ZWxsLCBkdWhcclxuXHRcdFx0XHRfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAvLyBlbGVtZW50IGluIHBpbm5lZCBzdGF0ZT9cclxuXHRcdFx0XHQoIC8vIGlzIHdpZHRoIG9yIGhlaWdodCByZWxhdGl2ZWx5IHNpemVkLCBidXQgbm90IGluIHJlbGF0aW9uIHRvIGJvZHk/IHRoZW4gd2UgbmVlZCB0byByZWNhbGMuXHJcblx0XHRcdFx0XHQoKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSAmJiBfdXRpbC5nZXQud2lkdGgod2luZG93KSAhPSBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKSB8fFxyXG5cdFx0XHRcdFx0KF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0ICYmIF91dGlsLmdldC5oZWlnaHQod2luZG93KSAhPSBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlKSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIElzIGNhbGxlZCwgd2hlbiB0aGUgbW91c2V3aGVsIGlzIHVzZWQgd2hpbGUgb3ZlciBhIHBpbm5lZCBlbGVtZW50IGluc2lkZSBhIGRpdiBjb250YWluZXIuXHJcblx0XHQgKiBJZiB0aGUgc2NlbmUgaXMgaW4gZml4ZWQgc3RhdGUgc2Nyb2xsIGV2ZW50cyB3b3VsZCBiZSBjb3VudGVkIHRvd2FyZHMgdGhlIGJvZHkuIFRoaXMgZm9yd2FyZHMgdGhlIGV2ZW50IHRvIHRoZSBzY3JvbGwgY29udGFpbmVyLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIG9uTW91c2V3aGVlbE92ZXJQaW4gPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhX2NvbnRyb2xsZXIuaW5mbyhcImlzRG9jdW1lbnRcIikpIHsgLy8gaW4gcGluIHN0YXRlXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLl9zZXRTY3JvbGxQb3MoX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSAtICgoZS53aGVlbERlbHRhIHx8IGVbX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpID8gXCJ3aGVlbERlbHRhWVwiIDogXCJ3aGVlbERlbHRhWFwiXSkgLyAzIHx8IC1lLmRldGFpbCAqIDMwKSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQaW4gYW4gZWxlbWVudCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwIHRoZSBlbGVtZW50IHdpbGwgb25seSBiZSB1bnBpbm5lZCwgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLiAgXHJcblx0XHQgKiBNYWtlIHN1cmUgb25seSBvbmUgcGluIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCBhdCB0aGUgc2FtZSB0aW1lLlxyXG5cdFx0ICogQW4gZWxlbWVudCBjYW4gYmUgcGlubmVkIG11bHRpcGxlIHRpbWVzLCBidXQgb25seSBzdWNjZXNzaXZlbHkuXHJcblx0XHQgKiBfKipOT1RFOioqIFRoZSBvcHRpb24gYHB1c2hGb2xsb3dlcnNgIGhhcyBubyBlZmZlY3QsIHdoZW4gdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAuX1xyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRQaW5cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBwaW4gZWxlbWVudCBhbmQgcHVzaCBhbGwgZm9sbG93aW5nIGVsZW1lbnRzIGRvd24gYnkgdGhlIGFtb3VudCBvZiB0aGUgcGluIGR1cmF0aW9uLlxyXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBwaW4gZWxlbWVudCBhbmQga2VlcGluZyBhbGwgZm9sbG93aW5nIGVsZW1lbnRzIGluIHRoZWlyIHBsYWNlLiBUaGUgcGlubmVkIGVsZW1lbnQgd2lsbCBtb3ZlIHBhc3QgdGhlbS5cclxuXHRcdCAqIHNjZW5lLnNldFBpbihcIiNwaW5cIiwge3B1c2hGb2xsb3dlcnM6IGZhbHNlfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBhbiBlbGVtZW50IG9yIGEgRE9NIG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHBpbm5lZC5cclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbc2V0dGluZ3NdIC0gc2V0dGluZ3MgZm9yIHRoZSBwaW5cclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NldHRpbmdzLnB1c2hGb2xsb3dlcnM9dHJ1ZV0gLSBJZiBgdHJ1ZWAgZm9sbG93aW5nIGVsZW1lbnRzIHdpbGwgYmUgXCJwdXNoZWRcIiBkb3duIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHBpbiwgaWYgYGZhbHNlYCB0aGUgcGlubmVkIGVsZW1lbnQgd2lsbCBqdXN0IHNjcm9sbCBwYXN0IHRoZW0uICBcclxuXHRcdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBJZ25vcmVkLCB3aGVuIGR1cmF0aW9uIGlzIGAwYC5cclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2V0dGluZ3Muc3BhY2VyQ2xhc3M9XCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJdIC0gQ2xhc3NuYW1lIG9mIHRoZSBwaW4gc3BhY2VyIGVsZW1lbnQsIHdoaWNoIGlzIHVzZWQgdG8gcmVwbGFjZSB0aGUgZWxlbWVudC5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNldFBpbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZXR0aW5ncykge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRkZWZhdWx0U2V0dGluZ3MgPSB7XHJcblx0XHRcdFx0XHRwdXNoRm9sbG93ZXJzOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VyQ2xhc3M6IFwic2Nyb2xsbWFnaWMtcGluLXNwYWNlclwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0dmFyIHB1c2hGb2xsb3dlcnNBY3RpdmVseVNldCA9IHNldHRpbmdzICYmIHNldHRpbmdzLmhhc093blByb3BlcnR5KCdwdXNoRm9sbG93ZXJzJyk7XHJcblx0XHRcdHNldHRpbmdzID0gX3V0aWwuZXh0ZW5kKHt9LCBkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcclxuXHJcblx0XHRcdC8vIHZhbGlkYXRlIEVsZW1lbnRcclxuXHRcdFx0ZWxlbWVudCA9IF91dGlsLmdldC5lbGVtZW50cyhlbGVtZW50KVswXTtcclxuXHRcdFx0aWYgKCFlbGVtZW50KSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFBpbigpJzogSW52YWxpZCBwaW4gZWxlbWVudCBzdXBwbGllZC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0fSBlbHNlIGlmIChfdXRpbC5jc3MoZWxlbWVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFBpbigpJzogUGluIGRvZXMgbm90IHdvcmsgd2l0aCBlbGVtZW50cyB0aGF0IGFyZSBwb3NpdGlvbmVkICdmaXhlZCcuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChfcGluKSB7IC8vIHByZWV4aXN0aW5nIHBpbj9cclxuXHRcdFx0XHRpZiAoX3BpbiA9PT0gZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0Ly8gc2FtZSBwaW4gd2UgYWxyZWFkeSBoYXZlIC0+IGRvIG5vdGhpbmdcclxuXHRcdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGtpbGwgb2xkIHBpblxyXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRfcGluID0gZWxlbWVudDtcclxuXHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdHBhcmVudERpc3BsYXkgPSBfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSxcclxuXHRcdFx0XHRib3VuZHNQYXJhbXMgPSBbXCJ0b3BcIiwgXCJsZWZ0XCIsIFwiYm90dG9tXCIsIFwicmlnaHRcIiwgXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl07XHJcblxyXG5cdFx0XHRfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gaGFjayBzdGFydCB0byBmb3JjZSBjc3MgdG8gcmV0dXJuIHN0eWxlc2hlZXQgdmFsdWVzIGluc3RlYWQgb2YgY2FsY3VsYXRlZCBweCB2YWx1ZXMuXHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGluRmxvdyA9IF91dGlsLmNzcyhfcGluLCBcInBvc2l0aW9uXCIpICE9IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRwaW5DU1MgPSBfdXRpbC5jc3MoX3BpbiwgYm91bmRzUGFyYW1zLmNvbmNhdChbXCJkaXNwbGF5XCJdKSksXHJcblx0XHRcdFx0c2l6ZUNTUyA9IF91dGlsLmNzcyhfcGluLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XHJcblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gcGFyZW50RGlzcGxheTsgLy8gaGFjayBlbmQuXHJcblxyXG5cdFx0XHRpZiAoIWluRmxvdyAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogSWYgdGhlIHBpbm5lZCBlbGVtZW50IGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseSBwdXNoRm9sbG93ZXJzIHdpbGwgYmUgZGlzYWJsZWQuXCIpO1xyXG5cdFx0XHRcdHNldHRpbmdzLnB1c2hGb2xsb3dlcnMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IC8vIHdhaXQgdW50aWwgYWxsIGZpbmlzaGVkLCBiZWNhdXNlIHdpdGggcmVzcG9uc2l2ZSBkdXJhdGlvbiBpdCB3aWxsIG9ubHkgYmUgc2V0IGFmdGVyIHNjZW5lIGlzIGFkZGVkIHRvIGNvbnRyb2xsZXJcclxuXHRcdFx0XHRpZiAoX3BpbiAmJiBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCAmJiBwdXNoRm9sbG93ZXJzQWN0aXZlbHlTZXQgJiYgc2V0dGluZ3MucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogcHVzaEZvbGxvd2VycyA9XCIsIHRydWUsIFwiaGFzIG5vIGVmZmVjdCwgd2hlbiBzY2VuZSBkdXJhdGlvbiBpcyAwLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDApO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIHNwYWNlciBhbmQgaW5zZXJ0XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdHNwYWNlciA9IF9waW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIF9waW4pLFxyXG5cdFx0XHRcdHNwYWNlckNTUyA9IF91dGlsLmV4dGVuZChwaW5DU1MsIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBpbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRib3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcclxuXHRcdFx0XHRcdG1vekJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG5cdFx0XHRcdFx0d2Via2l0Qm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICghaW5GbG93KSB7IC8vIGNvcHkgc2l6ZSBpZiBwb3NpdGlvbmVkIGFic29sdXRlbHksIHRvIHdvcmsgZm9yIGJvdHRvbS9yaWdodCBwb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG5cdFx0XHRcdF91dGlsLmV4dGVuZChzcGFjZXJDU1MsIF91dGlsLmNzcyhfcGluLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCBzcGFjZXJDU1MpO1xyXG5cdFx0XHRzcGFjZXIuc2V0QXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFLCBcIlwiKTtcclxuXHRcdFx0X3V0aWwuYWRkQ2xhc3Moc3BhY2VyLCBzZXR0aW5ncy5zcGFjZXJDbGFzcyk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdGhlIHBpbiBPcHRpb25zXHJcblx0XHRcdF9waW5PcHRpb25zID0ge1xyXG5cdFx0XHRcdHNwYWNlcjogc3BhY2VyLFxyXG5cdFx0XHRcdHJlbFNpemU6IHsgLy8gc2F2ZSBpZiBzaXplIGlzIGRlZmluZWQgdXNpbmcgJSB2YWx1ZXMuIGlmIHNvLCBoYW5kbGUgc3BhY2VyIHJlc2l6ZSBkaWZmZXJlbnRseS4uLlxyXG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGguc2xpY2UoLTEpID09PSBcIiVcIixcclxuXHRcdFx0XHRcdGhlaWdodDogc2l6ZUNTUy5oZWlnaHQuc2xpY2UoLTEpID09PSBcIiVcIixcclxuXHRcdFx0XHRcdGF1dG9GdWxsV2lkdGg6IHNpemVDU1Mud2lkdGggPT09IFwiYXV0b1wiICYmIGluRmxvdyAmJiBfdXRpbC5pc01hcmdpbkNvbGxhcHNlVHlwZShwaW5DU1MuZGlzcGxheSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHNldHRpbmdzLnB1c2hGb2xsb3dlcnMsXHJcblx0XHRcdFx0aW5GbG93OiBpbkZsb3csIC8vIHN0b3JlcyBpZiB0aGUgZWxlbWVudCB0YWtlcyB1cCBzcGFjZSBpbiB0aGUgZG9jdW1lbnQgZmxvd1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKCFfcGluLl9fX29yaWdTdHlsZSkge1xyXG5cdFx0XHRcdF9waW4uX19fb3JpZ1N0eWxlID0ge307XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRwaW5JbmxpbmVDU1MgPSBfcGluLnN0eWxlLFxyXG5cdFx0XHRcdFx0Y29weVN0eWxlcyA9IGJvdW5kc1BhcmFtcy5jb25jYXQoW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJwb3NpdGlvblwiLCBcImJveFNpemluZ1wiLCBcIm1vekJveFNpemluZ1wiLCBcIndlYmtpdEJveFNpemluZ1wiXSk7XHJcblx0XHRcdFx0Y29weVN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRcdF9waW4uX19fb3JpZ1N0eWxlW3ZhbF0gPSBwaW5JbmxpbmVDU1NbdmFsXSB8fCBcIlwiO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiByZWxhdGl2ZSBzaXplLCB0cmFuc2ZlciBpdCB0byBzcGFjZXIgYW5kIG1ha2UgcGluIGNhbGN1bGF0ZSBpdC4uLlxyXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCkge1xyXG5cdFx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiBzaXplQ1NTLndpZHRoXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaXplQ1NTLmhlaWdodFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBub3cgcGxhY2UgdGhlIHBpbiBlbGVtZW50IGluc2lkZSB0aGUgc3BhY2VyXHRcclxuXHRcdFx0c3BhY2VyLmFwcGVuZENoaWxkKF9waW4pO1xyXG5cdFx0XHQvLyBhbmQgc2V0IG5ldyBjc3NcclxuXHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdG1hcmdpbjogXCJhdXRvXCIsXHJcblx0XHRcdFx0dG9wOiBcImF1dG9cIixcclxuXHRcdFx0XHRsZWZ0OiBcImF1dG9cIixcclxuXHRcdFx0XHRib3R0b206IFwiYXV0b1wiLFxyXG5cdFx0XHRcdHJpZ2h0OiBcImF1dG9cIlxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkge1xyXG5cdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdFx0bW96Qm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuXHRcdFx0XHRcdHdlYmtpdEJveFNpemluZzogXCJib3JkZXItYm94XCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkIGxpc3RlbmVyIHRvIGRvY3VtZW50IHRvIHVwZGF0ZSBwaW4gcG9zaXRpb24gaW4gY2FzZSBjb250cm9sbGVyIGlzIG5vdCB0aGUgZG9jdW1lbnQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlcik7XHJcblx0XHRcdC8vIGFkZCBtb3VzZXdoZWVsIGxpc3RlbmVyIHRvIGNhdGNoIHNjcm9sbHMgb3ZlciBmaXhlZCBlbGVtZW50c1xyXG5cdFx0XHRfcGluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRfcGluLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHJcblx0XHRcdGxvZygzLCBcImFkZGVkIHBpblwiKTtcclxuXHJcblx0XHRcdC8vIGZpbmFsbHkgdXBkYXRlIHRoZSBwaW4gdG8gaW5pdFxyXG5cdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVQaW5cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyBpdCAodGhlIHNwYWNlciBpcyBub3QgcmVtb3ZlZClcclxuXHRcdCAqIHNjZW5lLnJlbW92ZVBpbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGVsZW1lbnQgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24gKHNwYWNlciBpcyByZW1vdmVkKVxyXG5cdFx0ICogc2NlbmUucmVtb3ZlUGluKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgdGhlIHNwYWNlciB3aWxsIG5vdCBiZSByZW1vdmVkIGFuZCB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIHdpbGwgbm90IGJlIHJlc2V0LlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVQaW4gPSBmdW5jdGlvbiAocmVzZXQpIHtcclxuXHRcdFx0aWYgKF9waW4pIHtcclxuXHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKHRydWUpOyAvLyBmb3JjZSB1bnBpbiBhdCBwb3NpdGlvblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocmVzZXQgfHwgIV9jb250cm9sbGVyKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gY29udHJvbGxlciBubyBwcm9ncmVzcyB3YXMgbWFkZSBhbnl3YXkuLi5cclxuXHRcdFx0XHRcdHZhciBwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZDsgLy8gdXN1YWxseSB0aGUgcGluIGVsZW1lbnQsIGJ1dCBtYXkgYmUgYW5vdGhlciBzcGFjZXIgKGNhc2NhZGVkIHBpbnMpLi4uXHJcblx0XHRcdFx0XHRpZiAocGluVGFyZ2V0Lmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHsgLy8gY29weSBtYXJnaW5zIHRvIGNoaWxkIHNwYWNlclxyXG5cdFx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZSA9IF9waW5PcHRpb25zLnNwYWNlci5zdHlsZSxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZXMgPSBbXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl0sXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2lucyA9IHt9O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luc1t2YWxdID0gc3R5bGVbdmFsXSB8fCBcIlwiO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKHBpblRhcmdldCwgbWFyZ2lucyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGluVGFyZ2V0LCBfcGluT3B0aW9ucy5zcGFjZXIpO1xyXG5cdFx0XHRcdFx0X3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3Bpbk9wdGlvbnMuc3BhY2VyKTtcclxuXHRcdFx0XHRcdGlmICghX3Bpbi5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHsgLy8gaWYgaXQncyB0aGUgbGFzdCBwaW4gZm9yIHRoaXMgZWxlbWVudCAtPiByZXN0b3JlIGlubGluZSBzdHlsZXNcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogb25seSBjb3JyZWN0bHkgc2V0IGZvciBmaXJzdCBwaW4gKHdoZW4gY2FzY2FkaW5nKSAtIGhvdyB0byBmaXg/XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCBfcGluLl9fX29yaWdTdHlsZSk7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZSBfcGluLl9fX29yaWdTdHlsZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlcik7XHJcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHRcdFx0XHRfcGluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHRcdFx0XHRfcGluID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgcGluIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdF9jc3NDbGFzc2VzLFxyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IFtdO1xyXG5cclxuXHRcdFNjZW5lXHJcblx0XHRcdC5vbihcImRlc3Ryb3kuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRTY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZShlLnJlc2V0KTtcclxuXHRcdFx0fSk7XHJcblx0XHQvKipcclxuXHRcdCAqIERlZmluZSBhIGNzcyBjbGFzcyBtb2RpZmljYXRpb24gd2hpbGUgdGhlIHNjZW5lIGlzIGFjdGl2ZS4gIFxyXG5cdFx0ICogV2hlbiB0aGUgc2NlbmUgdHJpZ2dlcnMgdGhlIGNsYXNzZXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgc3VwcGxpZWQgZWxlbWVudCBhbmQgcmVtb3ZlZCwgd2hlbiB0aGUgc2NlbmUgaXMgb3Zlci5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwIHRoZSBjbGFzc2VzIHdpbGwgb25seSBiZSByZW1vdmVkIGlmIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbi5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2V0Q2xhc3NUb2dnbGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBhZGQgdGhlIGNsYXNzICdteWNsYXNzJyB0byB0aGUgZWxlbWVudCB3aXRoIHRoZSBpZCAnbXktZWxlbScgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiI215LWVsZW1cIiwgXCJteWNsYXNzXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGFkZCBtdWx0aXBsZSBjbGFzc2VzIHRvIG11bHRpcGxlIGVsZW1lbnRzIGRlZmluZWQgYnkgdGhlIHNlbGVjdG9yICcuY2xhc3NDaGFuZ2UnXHJcblx0XHQgKiBzY2VuZS5zZXRDbGFzc1RvZ2dsZShcIi5jbGFzc0NoYW5nZVwiLCBcImNsYXNzMSBjbGFzczIgY2xhc3MzXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBlbGVtZW50IC0gQSBTZWxlY3RvciB0YXJnZXRpbmcgb25lIG9yIG1vcmUgZWxlbWVudHMgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgbW9kaWZpZWQuXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyAtIE9uZSBvciBtb3JlIENsYXNzbmFtZXMgKHNlcGFyYXRlZCBieSBzcGFjZSkgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQgZHVyaW5nIHRoZSBzY2VuZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNldENsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuXHRcdFx0dmFyIGVsZW1zID0gX3V0aWwuZ2V0LmVsZW1lbnRzKGVsZW1lbnQpO1xyXG5cdFx0XHRpZiAoZWxlbXMubGVuZ3RoID09PSAwIHx8ICFfdXRpbC50eXBlLlN0cmluZyhjbGFzc2VzKSkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNhbGxpbmcgbWV0aG9kICdzZXRDbGFzc1RvZ2dsZSgpJzogSW52YWxpZCBcIiArIChlbGVtcy5sZW5ndGggPT09IDAgPyBcImVsZW1lbnRcIiA6IFwiY2xhc3Nlc1wiKSArIFwiIHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF9jc3NDbGFzc0VsZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQvLyByZW1vdmUgb2xkIG9uZXNcclxuXHRcdFx0XHRTY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9jc3NDbGFzc2VzID0gY2xhc3NlcztcclxuXHRcdFx0X2Nzc0NsYXNzRWxlbXMgPSBlbGVtcztcclxuXHRcdFx0U2NlbmUub24oXCJlbnRlci5pbnRlcm5hbF9jbGFzcyBsZWF2ZS5pbnRlcm5hbF9jbGFzc1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciB0b2dnbGUgPSBlLnR5cGUgPT09IFwiZW50ZXJcIiA/IF91dGlsLmFkZENsYXNzIDogX3V0aWwucmVtb3ZlQ2xhc3M7XHJcblx0XHRcdFx0X2Nzc0NsYXNzRWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwga2V5KSB7XHJcblx0XHRcdFx0XHR0b2dnbGUoZWxlbSwgX2Nzc0NsYXNzZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgY2xhc3MgYmluZGluZyBmcm9tIHRoZSBzY2VuZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlQ2xhc3NUb2dnbGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgY2xhc3MgYmluZGluZyBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0XHJcblx0XHQgKiBzY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGFuZCByZW1vdmUgdGhlIGNoYW5nZXMgaXQgY2F1c2VkXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgZmFsc2VgIGFuZCB0aGUgY2xhc3NlcyBhcmUgY3VycmVudGx5IGFjdGl2ZSwgdGhleSB3aWxsIHJlbWFpbiBvbiB0aGUgZWxlbWVudC4gSWYgYHRydWVgIHRoZXkgd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVDbGFzc1RvZ2dsZSA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRpZiAocmVzZXQpIHtcclxuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcclxuXHRcdFx0XHRcdF91dGlsLnJlbW92ZUNsYXNzKGVsZW0sIF9jc3NDbGFzc2VzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRTY2VuZS5vZmYoXCJzdGFydC5pbnRlcm5hbF9jbGFzcyBlbmQuaW50ZXJuYWxfY2xhc3NcIik7XHJcblx0XHRcdF9jc3NDbGFzc2VzID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IFtdO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIElOSVRcclxuXHRcdGNvbnN0cnVjdCgpO1xyXG5cdFx0cmV0dXJuIFNjZW5lO1xyXG5cdH07XHJcblxyXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIHNjZW5lIG9wdGlvbnNcclxuXHR2YXIgU0NFTkVfT1BUSU9OUyA9IHtcclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdGR1cmF0aW9uOiAwLFxyXG5cdFx0XHRvZmZzZXQ6IDAsXHJcblx0XHRcdHRyaWdnZXJFbGVtZW50OiB1bmRlZmluZWQsXHJcblx0XHRcdHRyaWdnZXJIb29rOiAwLjUsXHJcblx0XHRcdHJldmVyc2U6IHRydWUsXHJcblx0XHRcdGxvZ2xldmVsOiAyXHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdGU6IHtcclxuXHRcdFx0b2Zmc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdCh2YWwpO1xyXG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSkge1xyXG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJvZmZzZXRcXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0cmlnZ2VyRWxlbWVudDogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdHZhbCA9IHZhbCB8fCB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKHZhbCkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW0gPSBfdXRpbC5nZXQuZWxlbWVudHModmFsKVswXTtcclxuXHRcdFx0XHRcdGlmIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xyXG5cdFx0XHRcdFx0XHR2YWwgPSBlbGVtO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgW1wiRWxlbWVudCBkZWZpbmVkIGluIG9wdGlvbiBcXFwidHJpZ2dlckVsZW1lbnRcXFwiIHdhcyBub3QgZm91bmQ6XCIsIHZhbF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyaWdnZXJIb29rOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFyIHRyYW5zbGF0ZSA9IHtcclxuXHRcdFx0XHRcdFwib25DZW50ZXJcIjogMC41LFxyXG5cdFx0XHRcdFx0XCJvbkVudGVyXCI6IDEsXHJcblx0XHRcdFx0XHRcIm9uTGVhdmVcIjogMFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHZhbCkpIHtcclxuXHRcdFx0XHRcdHZhbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHBhcnNlRmxvYXQodmFsKSwgMSkpOyAvLyAgbWFrZSBzdXJlIGl0cyBiZXR3ZWVlbiAwIGFuZCAxXHJcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgaW4gdHJhbnNsYXRlKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB0cmFuc2xhdGVbdmFsXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJ0cmlnZ2VySG9va1xcXCI6IFwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXZlcnNlOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0cmV0dXJuICEhdmFsOyAvLyBmb3JjZSBib29sZWFuXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ2xldmVsOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gcGFyc2VJbnQodmFsKTtcclxuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCB8fCB2YWwgPiAzKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImxvZ2xldmVsXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fSwgLy8gaG9sZGVyIGZvciAgdmFsaWRhdGlvbiBtZXRob2RzLiBkdXJhdGlvbiB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaW4gJ2dldHRlcnMtc2V0dGVycy5qcydcclxuXHRcdHNoaWZ0czogW1wiZHVyYXRpb25cIiwgXCJvZmZzZXRcIiwgXCJ0cmlnZ2VySG9va1wiXSwgLy8gbGlzdCBvZiBvcHRpb25zIHRoYXQgdHJpZ2dlciBhIGBzaGlmdGAgZXZlbnRcclxuXHR9O1xyXG5cdC8qXHJcblx0ICogbWV0aG9kIHVzZWQgdG8gYWRkIGFuIG9wdGlvbiB0byBTY3JvbGxNYWdpYyBTY2VuZXMuXHJcblx0ICogVE9ETzogRE9DIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUuYWRkT3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgdmFsaWRhdGlvbkNhbGxiYWNrLCBzaGlmdHMpIHtcclxuXHRcdGlmICghKG5hbWUgaW4gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cykpIHtcclxuXHRcdFx0U0NFTkVfT1BUSU9OUy5kZWZhdWx0c1tuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcclxuXHRcdFx0U0NFTkVfT1BUSU9OUy52YWxpZGF0ZVtuYW1lXSA9IHZhbGlkYXRpb25DYWxsYmFjaztcclxuXHRcdFx0aWYgKHNoaWZ0cykge1xyXG5cdFx0XHRcdFNDRU5FX09QVElPTlMuc2hpZnRzLnB1c2gobmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCBcIltzdGF0aWNdIFNjcm9sbE1hZ2ljLlNjZW5lIC0+IENhbm5vdCBhZGQgU2NlbmUgb3B0aW9uICdcIiArIG5hbWUgKyBcIicsIGJlY2F1c2UgaXQgYWxyZWFkeSBleGlzdHMuXCIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXHJcblx0Ly8gVE9ETzogRE9DIChwcml2YXRlIGZvciBkZXYpXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xyXG5cdFx0dmFyIG9sZENsYXNzID0gdGhpcztcclxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvbGRDbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHR0aGlzLiRzdXBlciA9IF91dGlsLmV4dGVuZCh7fSwgdGhpcyk7IC8vIGNvcHkgcGFyZW50IHN0YXRlXHJcblx0XHRcdHJldHVybiBleHRlbnNpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG5cdFx0fTtcclxuXHRcdF91dGlsLmV4dGVuZChTY3JvbGxNYWdpYy5TY2VuZSwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcclxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZSA9IG9sZENsYXNzLnByb3RvdHlwZTsgLy8gY29weSBwcm90b3R5cGVcclxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbE1hZ2ljLlNjZW5lOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICogQGNsYXNzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHJcblx0U2Nyb2xsTWFnaWMuRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZXNwYWNlLCB0YXJnZXQsIHZhcnMpIHtcclxuXHRcdHZhcnMgPSB2YXJzIHx8IHt9O1xyXG5cdFx0Zm9yICh2YXIga2V5IGluIHZhcnMpIHtcclxuXHRcdFx0dGhpc1trZXldID0gdmFyc1trZXldO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgJyc7XHJcblx0XHR0aGlzLnRpbWVTdGFtcCA9IHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qXHJcblx0ICogVE9ETzogRE9DUyAocHJpdmF0ZSBmb3IgZGV2KVxyXG5cdCAqL1xyXG5cclxuXHR2YXIgX3V0aWwgPSBTY3JvbGxNYWdpYy5fdXRpbCA9IChmdW5jdGlvbiAod2luZG93KSB7XHJcblx0XHR2YXIgVSA9IHt9LFxyXG5cdFx0XHRpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBpbnRlcm5hbCBoZWxwZXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8vIHBhcnNlIGZsb2F0IGFuZCBmYWxsIGJhY2sgdG8gMC5cclxuXHRcdHZhciBmbG9hdHZhbCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcclxuXHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQobnVtYmVyKSB8fCAwO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBjdXJyZW50IHN0eWxlIElFIHNhZmUgKG90aGVyd2lzZSBJRSB3b3VsZCByZXR1cm4gY2FsY3VsYXRlZCB2YWx1ZXMgZm9yICdhdXRvJylcclxuXHRcdHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdHJldHVybiBlbGVtLmN1cnJlbnRTdHlsZSA/IGVsZW0uY3VycmVudFN0eWxlIDogd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdldCBlbGVtZW50IGRpbWVuc2lvbiAod2lkdGggb3IgaGVpZ2h0KVxyXG5cdFx0dmFyIF9kaW1lbnNpb24gPSBmdW5jdGlvbiAod2hpY2gsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdGVsZW0gPSAoZWxlbSA9PT0gZG9jdW1lbnQpID8gd2luZG93IDogZWxlbTtcclxuXHRcdFx0aWYgKGVsZW0gPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGluY2x1ZGVNYXJnaW4gPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmICghX3R5cGUuRG9tRWxlbWVudChlbGVtKSkge1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdoaWNoID0gd2hpY2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aGljaC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0dmFyIGRpbWVuc2lvbiA9IChvdXRlciA/IGVsZW1bJ29mZnNldCcgKyB3aGljaF0gfHwgZWxlbVsnb3V0ZXInICsgd2hpY2hdIDogZWxlbVsnY2xpZW50JyArIHdoaWNoXSB8fCBlbGVtWydpbm5lcicgKyB3aGljaF0pIHx8IDA7XHJcblx0XHRcdGlmIChvdXRlciAmJiBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdFx0dmFyIHN0eWxlID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcblx0XHRcdFx0ZGltZW5zaW9uICs9IHdoaWNoID09PSAnSGVpZ2h0JyA/IGZsb2F0dmFsKHN0eWxlLm1hcmdpblRvcCkgKyBmbG9hdHZhbChzdHlsZS5tYXJnaW5Cb3R0b20pIDogZmxvYXR2YWwoc3R5bGUubWFyZ2luTGVmdCkgKyBmbG9hdHZhbChzdHlsZS5tYXJnaW5SaWdodCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRpbWVuc2lvbjtcclxuXHRcdH07XHJcblx0XHQvLyBjb252ZXJ0cyAnbWFyZ2luLXRvcCcgaW50byAnbWFyZ2luVG9wJ1xyXG5cdFx0dmFyIF9jYW1lbENhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XHJcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXlteYS16XSsoW2Etel0pL2csICckMScpLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uIChnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBleHRlcm5hbCBoZWxwZXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8vIGV4dGVuZCBvYmog4oCTIHNhbWUgYXMgalF1ZXJ5LmV4dGVuZCh7fSwgb2JqQSwgb2JqQilcclxuXHRcdFUuZXh0ZW5kID0gZnVuY3Rpb24gKG9iaikge1xyXG5cdFx0XHRvYmogPSBvYmogfHwge307XHJcblx0XHRcdGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoIWFyZ3VtZW50c1tpXSkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuXHRcdFx0XHRcdGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0XHRvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBjaGVjayBpZiBhIGNzcyBkaXNwbGF5IHR5cGUgcmVzdWx0cyBpbiBtYXJnaW4tY29sbGFwc2Ugb3Igbm90XHJcblx0XHRVLmlzTWFyZ2luQ29sbGFwc2VUeXBlID0gZnVuY3Rpb24gKHN0cikge1xyXG5cdFx0XHRyZXR1cm4gW1wiYmxvY2tcIiwgXCJmbGV4XCIsIFwibGlzdC1pdGVtXCIsIFwidGFibGVcIiwgXCItd2Via2l0LWJveFwiXS5pbmRleE9mKHN0cikgPiAtMTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gaW1wbGVtZW50YXRpb24gb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcblx0XHQvLyBiYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MVxyXG5cdFx0dmFyXHJcblx0XHRcdGxhc3RUaW1lID0gMCxcclxuXHRcdFx0dmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XHJcblx0XHR2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblx0XHR2YXIgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG5cdFx0Ly8gdHJ5IHZlbmRvciBwcmVmaXhlcyBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrXHJcblx0XHRmb3IgKGkgPSAwOyAhX3JlcXVlc3RBbmltYXRpb25GcmFtZSAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmFsbGJhY2tzXHJcblx0XHRpZiAoIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdFx0X3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0Y3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuXHRcdFx0XHRcdHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXHJcblx0XHRcdFx0XHRpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuXHRcdFx0XHRcdH0sIHRpbWVUb0NhbGwpO1xyXG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG5cdFx0XHRcdHJldHVybiBpZDtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGlmICghX2NhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0VS5yQUYgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcclxuXHRcdFUuY0FGID0gX2NhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcclxuXHJcblx0XHR2YXJcclxuXHRcdFx0bG9nbGV2ZWxzID0gW1wiZXJyb3JcIiwgXCJ3YXJuXCIsIFwibG9nXCJdLFxyXG5cdFx0XHRjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge307XHJcblxyXG5cdFx0Y29uc29sZS5sb2cgPSBjb25zb2xlLmxvZyB8fCBmdW5jdGlvbiAoKSB7fTsgLy8gbm8gY29uc29sZSBsb2csIHdlbGwgLSBkbyBub3RoaW5nIHRoZW4uLi5cclxuXHRcdC8vIG1ha2Ugc3VyZSBtZXRob2RzIGZvciBhbGwgbGV2ZWxzIGV4aXN0LlxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxvZ2xldmVscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgbWV0aG9kID0gbG9nbGV2ZWxzW2ldO1xyXG5cdFx0XHRpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xyXG5cdFx0XHRcdGNvbnNvbGVbbWV0aG9kXSA9IGNvbnNvbGUubG9nOyAvLyBwcmVmZXIgLmxvZyBvdmVyIG5vdGhpbmdcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0VS5sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwpIHtcclxuXHRcdFx0aWYgKGxvZ2xldmVsID4gbG9nbGV2ZWxzLmxlbmd0aCB8fCBsb2dsZXZlbCA8PSAwKSBsb2dsZXZlbCA9IGxvZ2xldmVscy5sZW5ndGg7XHJcblx0XHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdHRpbWUgPSAoXCIwXCIgKyBub3cuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBub3cuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMDBcIiArIG5vdy5nZXRNaWxsaXNlY29uZHMoKSkuc2xpY2UoLTMpLFxyXG5cdFx0XHRcdG1ldGhvZCA9IGxvZ2xldmVsc1tsb2dsZXZlbCAtIDFdLFxyXG5cdFx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuXHRcdFx0XHRmdW5jID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlW21ldGhvZF0sIGNvbnNvbGUpO1xyXG5cdFx0XHRhcmdzLnVuc2hpZnQodGltZSk7XHJcblx0XHRcdGZ1bmMuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiB0eXBlIHRlc3RpbmdcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyIF90eXBlID0gVS50eXBlID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS5yZXBsYWNlKC9eXFxbb2JqZWN0ICguKylcXF0kLywgXCIkMVwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLlN0cmluZyA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ3N0cmluZyc7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuRnVuY3Rpb24gPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gX3R5cGUodikgPT09ICdmdW5jdGlvbic7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuQXJyYXkgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTtcclxuXHRcdH07XHJcblx0XHRfdHlwZS5OdW1iZXIgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gIV90eXBlLkFycmF5KHYpICYmICh2IC0gcGFyc2VGbG9hdCh2KSArIDEpID49IDA7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuRG9tRWxlbWVudCA9IGZ1bmN0aW9uIChvKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0dHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJmdW5jdGlvblwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG8gaW5zdGFuY2VvZiBTVkdFbGVtZW50IDogLy9ET00yXHJcblx0XHRcdFx0byAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIERPTSBFbGVtZW50IGluZm9cclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblx0XHQvLyBhbHdheXMgcmV0dXJucyBhIGxpc3Qgb2YgbWF0Y2hpbmcgRE9NIGVsZW1lbnRzLCBmcm9tIGEgc2VsZWN0b3IsIGEgRE9NIGVsZW1lbnQgb3IgYW4gbGlzdCBvZiBlbGVtZW50cyBvciBldmVuIGFuIGFycmF5IG9mIHNlbGVjdG9yc1xyXG5cdFx0dmFyIF9nZXQgPSBVLmdldCA9IHt9O1xyXG5cdFx0X2dldC5lbGVtZW50cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cdFx0XHR2YXIgYXJyID0gW107XHJcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcoc2VsZWN0b3IpKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBpbnZhbGlkIHNlbGVjdG9yXHJcblx0XHRcdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3R5cGUoc2VsZWN0b3IpID09PSAnbm9kZWxpc3QnIHx8IF90eXBlLkFycmF5KHNlbGVjdG9yKSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHJlZiA9IGFyci5sZW5ndGggPSBzZWxlY3Rvci5sZW5ndGg7IGkgPCByZWY7IGkrKykgeyAvLyBsaXN0IG9mIGVsZW1lbnRzXHJcblx0XHRcdFx0XHR2YXIgZWxlbSA9IHNlbGVjdG9yW2ldO1xyXG5cdFx0XHRcdFx0YXJyW2ldID0gX3R5cGUuRG9tRWxlbWVudChlbGVtKSA/IGVsZW0gOiBfZ2V0LmVsZW1lbnRzKGVsZW0pOyAvLyBpZiBub3QgYW4gZWxlbWVudCwgdHJ5IHRvIHJlc29sdmUgcmVjdXJzaXZlbHlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoX3R5cGUuRG9tRWxlbWVudChzZWxlY3RvcikgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50IHx8IHNlbGVjdG9yID09PSB3aW5kb3cpIHtcclxuXHRcdFx0XHRhcnIgPSBbc2VsZWN0b3JdOyAvLyBvbmx5IHRoZSBlbGVtZW50XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGFycjtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgc2Nyb2xsIHRvcCB2YWx1ZVxyXG5cdFx0X2dldC5zY3JvbGxUb3AgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsVG9wID09PSAnbnVtYmVyJykgPyBlbGVtLnNjcm9sbFRvcCA6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBzY3JvbGwgbGVmdCB2YWx1ZVxyXG5cdFx0X2dldC5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0cmV0dXJuIChlbGVtICYmIHR5cGVvZiBlbGVtLnNjcm9sbExlZnQgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsTGVmdCA6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBlbGVtZW50IGhlaWdodFxyXG5cdFx0X2dldC53aWR0aCA9IGZ1bmN0aW9uIChlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xyXG5cdFx0XHRyZXR1cm4gX2RpbWVuc2lvbignd2lkdGgnLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbik7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgd2lkdGhcclxuXHRcdF9nZXQuaGVpZ2h0ID0gZnVuY3Rpb24gKGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCdoZWlnaHQnLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdldCBlbGVtZW50IHBvc2l0aW9uIChvcHRpb25hbGx5IHJlbGF0aXZlIHRvIHZpZXdwb3J0KVxyXG5cdFx0X2dldC5vZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSwgcmVsYXRpdmVUb1ZpZXdwb3J0KSB7XHJcblx0XHRcdHZhciBvZmZzZXQgPSB7XHJcblx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHsgLy8gY2hlY2sgaWYgYXZhaWxhYmxlXHJcblx0XHRcdFx0dmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdG9mZnNldC50b3AgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRvZmZzZXQubGVmdCA9IHJlY3QubGVmdDtcclxuXHRcdFx0XHRpZiAoIXJlbGF0aXZlVG9WaWV3cG9ydCkgeyAvLyBjbGllbnRSZWN0IGlzIGJ5IGRlZmF1bHQgcmVsYXRpdmUgdG8gdmlld3BvcnQuLi5cclxuXHRcdFx0XHRcdG9mZnNldC50b3AgKz0gX2dldC5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHRcdG9mZnNldC5sZWZ0ICs9IF9nZXQuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gb2Zmc2V0O1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRE9NIEVsZW1lbnQgbWFuaXB1bGF0aW9uXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdFUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XHJcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QpXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc25hbWU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRVLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsZW0sIGNsYXNzbmFtZSkge1xyXG5cdFx0XHRpZiAoY2xhc3NuYW1lKSB7XHJcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0KVxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzbmFtZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc25hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIHN0cmluZyAtPiByZXR1cm5zIGNzcyB2YWx1ZVxyXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBhcnJheSAtPiByZXR1cm5zIG9iamVjdCB3aXRoIGNzcyB2YWx1ZSBwYWlyc1xyXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBvYmplY3QgLT4gc2V0IG5ldyBjc3MgdmFsdWVzXHJcblx0XHRVLmNzcyA9IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XHJcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcob3B0aW9ucykpIHtcclxuXHRcdFx0XHRyZXR1cm4gX2dldENvbXB1dGVkU3R5bGUoZWxlbSlbX2NhbWVsQ2FzZShvcHRpb25zKV07XHJcblx0XHRcdH0gZWxzZSBpZiAoX3R5cGUuQXJyYXkob3B0aW9ucykpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdG9iaiA9IHt9LFxyXG5cdFx0XHRcdFx0c3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdFx0XHRvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbiwga2V5KSB7XHJcblx0XHRcdFx0XHRvYmpbb3B0aW9uXSA9IHN0eWxlW19jYW1lbENhc2Uob3B0aW9uKV07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIG9iajtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xyXG5cdFx0XHRcdFx0dmFyIHZhbCA9IG9wdGlvbnNbb3B0aW9uXTtcclxuXHRcdFx0XHRcdGlmICh2YWwgPT0gcGFyc2VGbG9hdCh2YWwpKSB7IC8vIGFzc3VtZSBwaXhlbCBmb3Igc2VlbWluZ2x5IG51bWVyaWNhbCB2YWx1ZXNcclxuXHRcdFx0XHRcdFx0dmFsICs9ICdweCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbGVtLnN0eWxlW19jYW1lbENhc2Uob3B0aW9uKV0gPSB2YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBVO1xyXG5cdH0od2luZG93IHx8IHt9KSk7XHJcblxyXG5cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuYWRkSW5kaWNhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIGFkZEluZGljYXRvcnMoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnZGVidWcuYWRkSW5kaWNhdG9yc1xcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvZGVidWcuYWRkSW5kaWNhdG9ycy5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgcmVtb3ZlSW5kaWNhdG9ycygpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdkZWJ1Zy5hZGRJbmRpY2F0b3JzXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnNldFR3ZWVuID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgc2V0VHdlZW4oKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLmdzYXBcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZVR3ZWVuID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgcmVtb3ZlVHdlZW4oKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLmdzYXBcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnNldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgc2V0VmVsb2NpdHkoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLnZlbG9jaXR5XFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9hbmltYXRpb24udmVsb2NpdHkuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlVmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gU2Nyb2xsTWFnaWM7XHJcbn0pKTsiLCIvKiFcbiAqIFxuICogICB0eXBlZC5qcyAtIEEgSmF2YVNjcmlwdCBUeXBpbmcgQW5pbWF0aW9uIExpYnJhcnlcbiAqICAgQXV0aG9yOiBNYXR0IEJvbGR0IDxtZUBtYXR0Ym9sZHQuY29tPlxuICogICBWZXJzaW9uOiB2Mi4wLjExXG4gKiAgIFVybDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRib2xkdC90eXBlZC5qc1xuICogICBMaWNlbnNlKHMpOiBNSVRcbiAqIFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfaW5pdGlhbGl6ZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2h0bWxQYXJzZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHQvKipcblx0ICogV2VsY29tZSB0byBUeXBlZC5qcyFcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBIVE1MIGVsZW1lbnRcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICogQHJldHVybnMge29iamVjdH0gYSBuZXcgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIFR5cGVkID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBUeXBlZChlbGVtZW50SWQsIG9wdGlvbnMpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUeXBlZCk7XG5cdFxuXHQgICAgLy8gSW5pdGlhbGl6ZSBpdCB1cFxuXHQgICAgX2luaXRpYWxpemVySnMuaW5pdGlhbGl6ZXIubG9hZCh0aGlzLCBvcHRpb25zLCBlbGVtZW50SWQpO1xuXHQgICAgLy8gQWxsIHN5c3RlbXMgZ28hXG5cdCAgICB0aGlzLmJlZ2luKCk7XG5cdCAgfVxuXHRcblx0ICAvKipcblx0ICAgKiBUb2dnbGUgc3RhcnQoKSBhbmQgc3RvcCgpIG9mIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAqIEBwdWJsaWNcblx0ICAgKi9cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKFR5cGVkLCBbe1xuXHQgICAga2V5OiAndG9nZ2xlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID8gdGhpcy5zdGFydCgpIDogdGhpcy5zdG9wKCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdG9wIHR5cGluZyAvIGJhY2tzcGFjaW5nIGFuZCBlbmFibGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdG9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RhcnQgdHlwaW5nIC8gYmFja3NwYWNpbmcgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RhcnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAoIXRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gZmFsc2U7XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnR5cGV3cml0ZSkge1xuXHQgICAgICAgIHRoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIERlc3Ryb3kgdGhpcyBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZGVzdHJveScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXNldCBUeXBlZCBhbmQgb3B0aW9uYWxseSByZXN0YXJ0c1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSByZXN0YXJ0XG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXNldCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG5cdCAgICAgIHZhciByZXN0YXJ0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblx0XG5cdCAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dCgnJyk7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvciAmJiB0aGlzLmN1cnNvci5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IgPSBudWxsO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3RyUG9zID0gMDtcblx0ICAgICAgdGhpcy5hcnJheVBvcyA9IDA7XG5cdCAgICAgIHRoaXMuY3VyTG9vcCA9IDA7XG5cdCAgICAgIGlmIChyZXN0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmJlZ2luKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJlZ2lucyB0aGUgdHlwaW5nIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JlZ2luJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiZWdpbigpIHtcblx0ICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkJlZ2luKHRoaXMpO1xuXHQgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKTtcblx0ICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgaWYgKHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMpIHRoaXMuYmluZEZvY3VzRXZlbnRzKCk7XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudCwgaWYgeWVzIHN0YXJ0IGJ5IGJhY2tzcGFjaW5nIHRoZSBkZWZhdWx0IG1lc3NhZ2Vcblx0ICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRFbENvbnRlbnQgfHwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgIF90aGlzLnR5cGV3cml0ZShfdGhpcy5zdHJpbmdzW190aGlzLnNlcXVlbmNlW190aGlzLmFycmF5UG9zXV0sIF90aGlzLnN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIFN0YXJ0IHR5cGluZ1xuXHQgICAgICAgICAgX3RoaXMuYmFja3NwYWNlKF90aGlzLmN1cnJlbnRFbENvbnRlbnQsIF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuc3RhcnREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxsZWQgZm9yIGVhY2ggY2hhcmFjdGVyIHR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZXdyaXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0ICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSkge1xuXHQgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpO1xuXHQgICAgICB2YXIgbnVtQ2hhcnMgPSAxO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjb250YWluIHR5cGluZyBmdW5jdGlvbiBpbiBhIHRpbWVvdXQgaHVtYW5pemUnZCBkZWxheVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBza2lwIG92ZXIgYW55IEhUTUwgY2hhcnNcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIudHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXMyKTtcblx0XG5cdCAgICAgICAgdmFyIHBhdXNlVGltZSA9IDA7XG5cdCAgICAgICAgdmFyIHN1YnN0ciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKTtcblx0ICAgICAgICAvLyBjaGVjayBmb3IgYW4gZXNjYXBlIGNoYXJhY3RlciBiZWZvcmUgYSBwYXVzZSB2YWx1ZVxuXHQgICAgICAgIC8vIGZvcm1hdDogXFxeXFxkKyAuLiBlZzogXjEwMDAgLi4gc2hvdWxkIGJlIGFibGUgdG8gcHJpbnQgdGhlIF4gdG9vIHVzaW5nIF5eXG5cdCAgICAgICAgLy8gc2luZ2xlIF4gYXJlIHJlbW92ZWQgZnJvbSBzdHJpbmdcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ14nKSB7XG5cdCAgICAgICAgICBpZiAoL15cXF5cXGQrLy50ZXN0KHN1YnN0cikpIHtcblx0ICAgICAgICAgICAgdmFyIHNraXAgPSAxOyAvLyBza2lwIGF0IGxlYXN0IDFcblx0ICAgICAgICAgICAgc3Vic3RyID0gL1xcZCsvLmV4ZWMoc3Vic3RyKVswXTtcblx0ICAgICAgICAgICAgc2tpcCArPSBzdWJzdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICBwYXVzZVRpbWUgPSBwYXJzZUludChzdWJzdHIpO1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSB0cnVlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1BhdXNlZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlciBhbmQgcGF1c2UgdmFsdWUgc28gdGhleSdyZSBub3QgcHJpbnRlZFxuXHQgICAgICAgICAgICBjdXJTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcykgKyBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIHNraXApO1xuXHQgICAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBjaGVjayBmb3Igc2tpcCBjaGFyYWN0ZXJzIGZvcm1hdHRlZCBhc1xuXHQgICAgICAgIC8vIFwidGhpcyBpcyBhIGBzdHJpbmcgdG8gcHJpbnQgTk9XYCAuLi5cIlxuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnYCcpIHtcblx0ICAgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIG51bUNoYXJzKS5jaGFyQXQoMCkgIT09ICdgJykge1xuXHQgICAgICAgICAgICBudW1DaGFycysrO1xuXHQgICAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgbnVtQ2hhcnMgPiBjdXJTdHJpbmcubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgYW5kIGFwcGVuZCBhbGwgdGhlIHN0cmluZyBpbiBiZXR3ZWVuXG5cdCAgICAgICAgICB2YXIgc3RyaW5nQmVmb3JlU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdTa2lwcGVkID0gY3VyU3RyaW5nLnN1YnN0cmluZyhzdHJpbmdCZWZvcmVTa2lwLmxlbmd0aCArIDEsIGN1clN0clBvcyArIG51bUNoYXJzKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdBZnRlclNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIG51bUNoYXJzICsgMSk7XG5cdCAgICAgICAgICBjdXJTdHJpbmcgPSBzdHJpbmdCZWZvcmVTa2lwICsgc3RyaW5nU2tpcHBlZCArIHN0cmluZ0FmdGVyU2tpcDtcblx0ICAgICAgICAgIG51bUNoYXJzLS07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyB0aW1lb3V0IGZvciBhbnkgcGF1c2UgYWZ0ZXIgYSBjaGFyYWN0ZXJcblx0ICAgICAgICBfdGhpczIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gQWNjb3VudHMgZm9yIGJsaW5raW5nIHdoaWxlIHBhdXNlZFxuXHQgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0XG5cdCAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBzZW50ZW5jZSFcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPj0gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczIuZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczIua2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gZW5kIG9mIGNoYXJhY3RlciBwYXVzZVxuXHQgICAgICAgICAgaWYgKF90aGlzMi50ZW1wb3JhcnlQYXVzZSkge1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSBmYWxzZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LCBwYXVzZVRpbWUpO1xuXHRcblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDb250aW51ZSB0byB0aGUgbmV4dCBzdHJpbmcgJiBiZWdpbiB0eXBpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdrZWVwVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBrZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycykge1xuXHQgICAgICAvLyBjYWxsIGJlZm9yZSBmdW5jdGlvbnMgaWYgYXBwbGljYWJsZVxuXHQgICAgICBpZiAoY3VyU3RyUG9zID09PSAwKSB7XG5cdCAgICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHN0YXJ0IHR5cGluZyBlYWNoIG5ldyBjaGFyIGludG8gZXhpc3Rpbmcgc3RyaW5nXG5cdCAgICAgIC8vIGN1clN0cmluZzogYXJnLCB0aGlzLmVsLmh0bWw6IG9yaWdpbmFsIHRleHQgaW5zaWRlIGVsZW1lbnRcblx0ICAgICAgY3VyU3RyUG9zICs9IG51bUNoYXJzO1xuXHQgICAgICB2YXIgbmV4dFN0cmluZyA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dChuZXh0U3RyaW5nKTtcblx0ICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgdGhpcy50eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogV2UncmUgZG9uZSB0eXBpbmcgdGhlIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZG9uZVR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIC8vIGZpcmVzIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAvLyBpcyB0aGlzIHRoZSBmaW5hbCBzdHJpbmdcblx0ICAgICAgaWYgKHRoaXMuYXJyYXlQb3MgPT09IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxKSB7XG5cdCAgICAgICAgLy8gY2FsbGJhY2sgdGhhdCBvY2N1cnMgb24gdGhlIGxhc3QgdHlwZWQgc3RyaW5nXG5cdCAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuXHQgICAgICAgIC8vIHF1aXQgaWYgd2Ugd29udCBsb29wIGJhY2tcblx0ICAgICAgICBpZiAodGhpcy5sb29wID09PSBmYWxzZSB8fCB0aGlzLmN1ckxvb3AgPT09IHRoaXMubG9vcENvdW50KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzMy5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICB9LCB0aGlzLmJhY2tEZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2VzIDEgY2hhcmFjdGVyIGF0IGEgdGltZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tzcGFjZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQpIHJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7XG5cdFxuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO1xuXHRcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLmJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXM0KTtcblx0ICAgICAgICAvLyByZXBsYWNlIHRleHQgd2l0aCBiYXNlIHRleHQgKyB0eXBlZCBjaGFyYWN0ZXJzXG5cdCAgICAgICAgdmFyIGN1clN0cmluZ0F0UG9zaXRpb24gPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgX3RoaXM0LnJlcGxhY2VUZXh0KGN1clN0cmluZ0F0UG9zaXRpb24pO1xuXHRcblx0ICAgICAgICAvLyBpZiBzbWFydEJhY2sgaXMgZW5hYmxlZFxuXHQgICAgICAgIGlmIChfdGhpczQuc21hcnRCYWNrc3BhY2UpIHtcblx0ICAgICAgICAgIC8vIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgY3VycmVudCBzdHJpbmcgaXMgZXF1YWwgb2YgdGhlIHNhbWUgcGFydCBvZiB0aGUgbmV3IHN0cmluZ1xuXHQgICAgICAgICAgdmFyIG5leHRTdHJpbmcgPSBfdGhpczQuc3RyaW5nc1tfdGhpczQuYXJyYXlQb3MgKyAxXTtcblx0ICAgICAgICAgIGlmIChuZXh0U3RyaW5nICYmIGN1clN0cmluZ0F0UG9zaXRpb24gPT09IG5leHRTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcykpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSBjdXJTdHJQb3M7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIChpZCBvZiBjaGFyYWN0ZXIgaW4gY3VycmVudCBzdHJpbmcpIGlzXG5cdCAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBzdG9wIG51bWJlciwga2VlcCBnb2luZ1xuXHQgICAgICAgIGlmIChjdXJTdHJQb3MgPiBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gc3VidHJhY3QgY2hhcmFjdGVycyBvbmUgYnkgb25lXG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgICAgICBfdGhpczQuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGN1clN0clBvcyA8PSBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gaWYgdGhlIHN0b3AgbnVtYmVyIGhhcyBiZWVuIHJlYWNoZWQsIGluY3JlYXNlXG5cdCAgICAgICAgICAvLyBhcnJheSBwb3NpdGlvbiB0byBuZXh0IHN0cmluZ1xuXHQgICAgICAgICAgX3RoaXM0LmFycmF5UG9zKys7XG5cdCAgICAgICAgICAvLyBXaGVuIGxvb3BpbmcsIGJlZ2luIGF0IHRoZSBiZWdpbm5pbmcgYWZ0ZXIgYmFja3NwYWNlIGNvbXBsZXRlXG5cdCAgICAgICAgICBpZiAoX3RoaXM0LmFycmF5UG9zID09PSBfdGhpczQuc3RyaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LmFycmF5UG9zID0gMDtcblx0ICAgICAgICAgICAgX3RoaXM0Lm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuYmVnaW4oKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC50eXBld3JpdGUoX3RoaXM0LnN0cmluZ3NbX3RoaXM0LnNlcXVlbmNlW190aGlzNC5hcnJheVBvc11dLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGdWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBsZXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzLmxvb3ApIHtcblx0ICAgICAgICB0aGlzLmN1ckxvb3ArKztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSGFzIHRoZSB0eXBpbmcgYmVlbiBzdG9wcGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVHlwaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UGF1c2VTdGF0dXMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCBpc1R5cGluZykge1xuXHQgICAgICB0aGlzLnBhdXNlLnR5cGV3cml0ZSA9IGlzVHlwaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0cmluZyA9IGN1clN0cmluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJQb3MgPSBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUb2dnbGUgdGhlIGJsaW5raW5nIGN1cnNvclxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc0JsaW5raW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndG9nZ2xlQmxpbmtpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUJsaW5raW5nKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgaWYgKCF0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICAvLyBpZiBpbiBwYXVzZWQgc3RhdGUsIGRvbid0IHRvZ2dsZSBibGlua2luZyBhIDJuZCB0aW1lXG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3JCbGlua2luZyA9PT0gaXNCbGlua2luZykgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvckJsaW5raW5nID0gaXNCbGlua2luZztcblx0ICAgICAgaWYgKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgndHlwZWQtY3Vyc29yLS1ibGluaycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTcGVlZCBpbiBNUyB0byB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdodW1hbml6ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGh1bWFuaXplcihzcGVlZCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3BlZWQgLyAyKSArIHNwZWVkO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU2h1ZmZsZSB0aGUgc2VxdWVuY2Ugb2YgdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaHVmZmxlU3RyaW5nc0lmTmVlZGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2h1ZmZsZSkgcmV0dXJuO1xuXHQgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGZhZGUgb3V0IGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5pdEZhZGVPdXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGYWRlT3V0KCkge1xuXHQgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMuZWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzNS5hcnJheVBvcysrO1xuXHQgICAgICAgIF90aGlzNS5yZXBsYWNlVGV4dCgnJyk7XG5cdFxuXHQgICAgICAgIC8vIFJlc2V0cyBjdXJyZW50IHN0cmluZyBpZiBlbmQgb2YgbG9vcCByZWFjaGVkXG5cdCAgICAgICAgaWYgKF90aGlzNS5zdHJpbmdzLmxlbmd0aCA+IF90aGlzNS5hcnJheVBvcykge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1tfdGhpczUuc2VxdWVuY2VbX3RoaXM1LmFycmF5UG9zXV0sIDApO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzWzBdLCAwKTtcblx0ICAgICAgICAgIF90aGlzNS5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmZhZGVPdXREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXBsYWNlcyBjdXJyZW50IHRleHQgaW4gdGhlIEhUTUwgZWxlbWVudFxuXHQgICAgICogZGVwZW5kaW5nIG9uIGVsZW1lbnQgdHlwZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlcGxhY2VUZXh0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVGV4dChzdHIpIHtcblx0ICAgICAgaWYgKHRoaXMuYXR0cikge1xuXHQgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0ciwgc3RyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGhpcy5pc0lucHV0KSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHN0cjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9IHN0cjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIElmIHVzaW5nIGlucHV0IGVsZW1lbnRzLCBiaW5kIGZvY3VzIGluIG9yZGVyIHRvXG5cdCAgICAgKiBzdGFydCBhbmQgc3RvcCB0aGUgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmluZEZvY3VzRXZlbnRzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG5cdCAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKCF0aGlzLmlzSW5wdXQpIHJldHVybjtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgX3RoaXM2LnN0b3AoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgaWYgKF90aGlzNi5lbC52YWx1ZSAmJiBfdGhpczYuZWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF90aGlzNi5zdGFydCgpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9uIGluaXQsIGluc2VydCB0aGUgY3Vyc29yIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbnNlcnRDdXJzb3InLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEN1cnNvcigpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNob3dDdXJzb3IpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgICB0aGlzLmN1cnNvci5jbGFzc05hbWUgPSAndHlwZWQtY3Vyc29yJztcblx0ICAgICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gdGhpcy5jdXJzb3JDaGFyO1xuXHQgICAgICB0aGlzLmVsLnBhcmVudE5vZGUgJiYgdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvciwgdGhpcy5lbC5uZXh0U2libGluZyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gVHlwZWQ7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBUeXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9kZWZhdWx0c0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzSnMpO1xuXHRcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBJbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSW5pdGlhbGl6ZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEluaXRpYWxpemVyLCBbe1xuXHQgICAga2V5OiAnbG9hZCcsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBMb2FkIHVwIGRlZmF1bHRzICYgb3B0aW9ucyBvbiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIGluc3RhbmNlIG9mIEhUTUwgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHNlbGYsIG9wdGlvbnMsIGVsZW1lbnRJZCkge1xuXHQgICAgICAvLyBjaG9zZW4gZWxlbWVudCB0byBtYW5pcHVsYXRlIHRleHRcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SWQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudElkKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLmVsID0gZWxlbWVudElkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBzZWxmLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRzSnMyWydkZWZhdWx0J10sIG9wdGlvbnMpO1xuXHRcblx0ICAgICAgLy8gYXR0cmlidXRlIHRvIHR5cGUgaW50b1xuXHQgICAgICBzZWxmLmlzSW5wdXQgPSBzZWxmLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jztcblx0ICAgICAgc2VsZi5hdHRyID0gc2VsZi5vcHRpb25zLmF0dHI7XG5cdCAgICAgIHNlbGYuYmluZElucHV0Rm9jdXNFdmVudHMgPSBzZWxmLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHM7XG5cdFxuXHQgICAgICAvLyBzaG93IGN1cnNvclxuXHQgICAgICBzZWxmLnNob3dDdXJzb3IgPSBzZWxmLmlzSW5wdXQgPyBmYWxzZSA6IHNlbGYub3B0aW9ucy5zaG93Q3Vyc29yO1xuXHRcblx0ICAgICAgLy8gY3VzdG9tIGN1cnNvclxuXHQgICAgICBzZWxmLmN1cnNvckNoYXIgPSBzZWxmLm9wdGlvbnMuY3Vyc29yQ2hhcjtcblx0XG5cdCAgICAgIC8vIElzIHRoZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAgc2VsZi5jdXJzb3JCbGlua2luZyA9IHRydWU7XG5cdFxuXHQgICAgICAvLyB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudFxuXHQgICAgICBzZWxmLmVsQ29udGVudCA9IHNlbGYuYXR0ciA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cikgOiBzZWxmLmVsLnRleHRDb250ZW50O1xuXHRcblx0ICAgICAgLy8gaHRtbCBvciBwbGFpbiB0ZXh0XG5cdCAgICAgIHNlbGYuY29udGVudFR5cGUgPSBzZWxmLm9wdGlvbnMuY29udGVudFR5cGU7XG5cdFxuXHQgICAgICAvLyB0eXBpbmcgc3BlZWRcblx0ICAgICAgc2VsZi50eXBlU3BlZWQgPSBzZWxmLm9wdGlvbnMudHlwZVNwZWVkO1xuXHRcblx0ICAgICAgLy8gYWRkIGEgZGVsYXkgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0ICAgICAgc2VsZi5zdGFydERlbGF5ID0gc2VsZi5vcHRpb25zLnN0YXJ0RGVsYXk7XG5cdFxuXHQgICAgICAvLyBiYWNrc3BhY2luZyBzcGVlZFxuXHQgICAgICBzZWxmLmJhY2tTcGVlZCA9IHNlbGYub3B0aW9ucy5iYWNrU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAgICBzZWxmLnNtYXJ0QmFja3NwYWNlID0gc2VsZi5vcHRpb25zLnNtYXJ0QmFja3NwYWNlO1xuXHRcblx0ICAgICAgLy8gYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBiZWZvcmUgYmFja3NwYWNpbmdcblx0ICAgICAgc2VsZi5iYWNrRGVsYXkgPSBzZWxmLm9wdGlvbnMuYmFja0RlbGF5O1xuXHRcblx0ICAgICAgLy8gRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgICAgc2VsZi5mYWRlT3V0ID0gc2VsZi5vcHRpb25zLmZhZGVPdXQ7XG5cdCAgICAgIHNlbGYuZmFkZU91dENsYXNzID0gc2VsZi5vcHRpb25zLmZhZGVPdXRDbGFzcztcblx0ICAgICAgc2VsZi5mYWRlT3V0RGVsYXkgPSBzZWxmLm9wdGlvbnMuZmFkZU91dERlbGF5O1xuXHRcblx0ICAgICAgLy8gdmFyaWFibGUgdG8gY2hlY2sgd2hldGhlciB0eXBpbmcgaXMgY3VycmVudGx5IHBhdXNlZFxuXHQgICAgICBzZWxmLmlzUGF1c2VkID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBpbnB1dCBzdHJpbmdzIG9mIHRleHRcblx0ICAgICAgc2VsZi5zdHJpbmdzID0gc2VsZi5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIC8vIGRpdiBjb250YWluaW5nIHN0cmluZ3Ncblx0ICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc2VsZi5zdHJpbmdzRWxlbWVudCkge1xuXHQgICAgICAgIHNlbGYuc3RyaW5ncyA9IFtdO1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgICAgICB2YXIgc3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKTtcblx0ICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuXHRcblx0ICAgICAgICBpZiAoc3RyaW5nc0xlbmd0aCkge1xuXHQgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzTGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgdmFyIHN0cmluZ0VsID0gc3RyaW5nc1tpXTtcblx0ICAgICAgICAgICAgc2VsZi5zdHJpbmdzLnB1c2goc3RyaW5nRWwuaW5uZXJIVE1MLnRyaW0oKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjaGFyYWN0ZXIgbnVtYmVyIHBvc2l0aW9uIG9mIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgIHNlbGYuc3RyUG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGN1cnJlbnQgYXJyYXkgcG9zaXRpb25cblx0ICAgICAgc2VsZi5hcnJheVBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBpbmRleCBvZiBzdHJpbmcgdG8gc3RvcCBiYWNrc3BhY2luZyBvblxuXHQgICAgICBzZWxmLnN0b3BOdW0gPSAwO1xuXHRcblx0ICAgICAgLy8gTG9vcGluZyBsb2dpY1xuXHQgICAgICBzZWxmLmxvb3AgPSBzZWxmLm9wdGlvbnMubG9vcDtcblx0ICAgICAgc2VsZi5sb29wQ291bnQgPSBzZWxmLm9wdGlvbnMubG9vcENvdW50O1xuXHQgICAgICBzZWxmLmN1ckxvb3AgPSAwO1xuXHRcblx0ICAgICAgLy8gc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAgICBzZWxmLnNodWZmbGUgPSBzZWxmLm9wdGlvbnMuc2h1ZmZsZTtcblx0ICAgICAgLy8gdGhlIG9yZGVyIG9mIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zZXF1ZW5jZSA9IFtdO1xuXHRcblx0ICAgICAgc2VsZi5wYXVzZSA9IHtcblx0ICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXHQgICAgICAgIHR5cGV3cml0ZTogdHJ1ZSxcblx0ICAgICAgICBjdXJTdHJpbmc6ICcnLFxuXHQgICAgICAgIGN1clN0clBvczogMFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgLy8gV2hlbiB0aGUgdHlwaW5nIGlzIGNvbXBsZXRlICh3aGVuIG5vdCBsb29wZWQpXG5cdCAgICAgIHNlbGYudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIFNldCB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0cmluZ3MgYXJlIHR5cGVkXG5cdCAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zdHJpbmdzKSB7XG5cdCAgICAgICAgc2VsZi5zZXF1ZW5jZVtpXSA9IGk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudFxuXHQgICAgICBzZWxmLmN1cnJlbnRFbENvbnRlbnQgPSB0aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoc2VsZik7XG5cdFxuXHQgICAgICBzZWxmLmF1dG9JbnNlcnRDc3MgPSBzZWxmLm9wdGlvbnMuYXV0b0luc2VydENzcztcblx0XG5cdCAgICAgIHRoaXMuYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldEN1cnJlbnRFbENvbnRlbnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRFbENvbnRlbnQoc2VsZikge1xuXHQgICAgICB2YXIgZWxDb250ZW50ID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLmF0dHIpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNJbnB1dCkge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5pbm5lckhUTUw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC50ZXh0Q29udGVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZWxDb250ZW50O1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FwcGVuZEFuaW1hdGlvbkNzcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpIHtcblx0ICAgICAgdmFyIGNzc0RhdGFOYW1lID0gJ2RhdGEtdHlwZWQtanMtY3NzJztcblx0ICAgICAgaWYgKCFzZWxmLmF1dG9JbnNlcnRDc3MpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCFzZWxmLnNob3dDdXJzb3IgJiYgIXNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignWycgKyBjc3NEYXRhTmFtZSArICddJykpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoY3NzRGF0YU5hbWUsIHRydWUpO1xuXHRcblx0ICAgICAgdmFyIGlubmVyQ3NzID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLnNob3dDdXJzb3IpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5re1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChjc3MubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGNzcy5pbm5lckhUTUwgPSBpbm5lckNzcztcblx0ICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEluaXRpYWxpemVyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSW5pdGlhbGl6ZXI7XG5cdHZhciBpbml0aWFsaXplciA9IG5ldyBJbml0aWFsaXplcigpO1xuXHRleHBvcnRzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH0gVHlwZWQgZGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2FycmF5fSBzdHJpbmdzIHN0cmluZ3MgdG8gYmUgdHlwZWRcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RyaW5nc0VsZW1lbnQgSUQgb2YgZWxlbWVudCBjb250YWluaW5nIHN0cmluZyBjaGlsZHJlblxuXHQgICAqL1xuXHQgIHN0cmluZ3M6IFsnVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLicsICdZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/JywgJ1VzZSB5b3VyIG93biEnLCAnSGF2ZSBhIGdyZWF0IGRheSEnXSxcblx0ICBzdHJpbmdzRWxlbWVudDogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGVTcGVlZCB0eXBlIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHR5cGVTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0RGVsYXkgdGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0cyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBzdGFydERlbGF5OiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja1NwZWVkIGJhY2tzcGFjaW5nIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzbWFydEJhY2tzcGFjZSBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAqL1xuXHQgIHNtYXJ0QmFja3NwYWNlOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNodWZmbGUgc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAqL1xuXHQgIHNodWZmbGU6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja0RlbGF5IHRpbWUgYmVmb3JlIGJhY2tzcGFjaW5nIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tEZWxheTogNzAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXQgRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmFkZU91dENsYXNzIGNzcyBjbGFzcyBmb3IgZmFkZSBhbmltYXRpb25cblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXREZWxheSBGYWRlIG91dCBkZWxheSBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBmYWRlT3V0OiBmYWxzZSxcblx0ICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG5cdCAgZmFkZU91dERlbGF5OiA1MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9vcCBsb29wIHN0cmluZ3Ncblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gbG9vcENvdW50IGFtb3VudCBvZiBsb29wc1xuXHQgICAqL1xuXHQgIGxvb3A6IGZhbHNlLFxuXHQgIGxvb3BDb3VudDogSW5maW5pdHksXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2hvd0N1cnNvciBzaG93IGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJzb3JDaGFyIGNoYXJhY3RlciBmb3IgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvSW5zZXJ0Q3NzIGluc2VydCBDU1MgZm9yIGN1cnNvciBhbmQgZmFkZU91dCBpbnRvIEhUTUwgPGhlYWQ+XG5cdCAgICovXG5cdCAgc2hvd0N1cnNvcjogdHJ1ZSxcblx0ICBjdXJzb3JDaGFyOiAnfCcsXG5cdCAgYXV0b0luc2VydENzczogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dHIgYXR0cmlidXRlIGZvciB0eXBpbmdcblx0ICAgKiBFeDogaW5wdXQgcGxhY2Vob2xkZXIsIHZhbHVlLCBvciBqdXN0IEhUTUwgdGV4dFxuXHQgICAqL1xuXHQgIGF0dHI6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYmluZElucHV0Rm9jdXNFdmVudHMgYmluZCB0byBmb2N1cyBhbmQgYmx1ciBpZiBlbCBpcyB0ZXh0IGlucHV0XG5cdCAgICovXG5cdCAgYmluZElucHV0Rm9jdXNFdmVudHM6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFR5cGUgJ2h0bWwnIG9yICdudWxsJyBmb3IgcGxhaW50ZXh0XG5cdCAgICovXG5cdCAgY29udGVudFR5cGU6ICdodG1sJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGl0IGJlZ2lucyB0eXBpbmdcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25CZWdpbjogZnVuY3Rpb24gb25CZWdpbihzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsIHR5cGluZyBpcyBjb21wbGV0ZVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgcHJlU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIHByZVN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdHJpbmdUeXBlZDogZnVuY3Rpb24gb25TdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIER1cmluZyBsb29waW5nLCBhZnRlciBsYXN0IHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOiBmdW5jdGlvbiBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1BhdXNlZDogZnVuY3Rpb24gb25UeXBpbmdQYXVzZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RhcnRlZCBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUmVzdW1lZDogZnVuY3Rpb24gb25UeXBpbmdSZXN1bWVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgcmVzZXRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RvcFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0YXJ0XG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBkZXN0cm95XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KHNlbGYpIHt9XG5cdH07XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0cztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBUT0RPOiBUaGVzZSBtZXRob2RzIGNhbiBwcm9iYWJseSBiZSBjb21iaW5lZCBzb21laG93XG5cdCAqIFBhcnNlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBIVE1MUGFyc2VyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBIVE1MUGFyc2VyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxQYXJzZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxQYXJzZXIsIFt7XG5cdCAgICBrZXk6ICd0eXBlSHRtbENoYXJzJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIFR5cGUgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPCcgfHwgY3VyQ2hhciA9PT0gJyYnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPCcpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc+Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzsnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgMSA+IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2UgSFRNTCB0YWdzIGFuZCBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tTcGFjZUh0bWxDaGFycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc+JyB8fCBjdXJDaGFyID09PSAnOycpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc+Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzwnO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnJic7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyAtIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPCAwKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEhUTUxQYXJzZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIVE1MUGFyc2VyO1xuXHR2YXIgaHRtbFBhcnNlciA9IG5ldyBIVE1MUGFyc2VyKCk7XG5cdGV4cG9ydHMuaHRtbFBhcnNlciA9IGh0bWxQYXJzZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IGhvbWVUeXBlIGZyb20gJy4vanMvaG9tZXR5cGUuanMnO1xuXG5pbXBvcnQge1xuICAgIGluaXRIZWFkZXJTY3JvbGwsXG4gICAgcG9wSW5TdGFnZ2VyXG59IGZyb20gJy4vanMvc2Nyb2xsLmpzJztcblxuJCA9IGpRdWVyeTtcblxuXG5ob21lVHlwZSgpO1xuXG5pbml0SGVhZGVyU2Nyb2xsKCk7XG5cbi8vcG9wSW5TdGFnZ2VyKCcubGluay13cmFwcGVyJywnI2xpbmtzJywyMDAsMC44KTsiLCJpbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xuaW1wb3J0IGhlIGZyb20gJ2hlJztcblxuY29uc3QgZ2l0TWVzc2FnZSA9IGBnaXQgY2xvbmUgam9lYnIuZ2l0XG5cXGBDbG9uaW5nIGludG8gJ2pvZWJyJy4uLlxcYFxuXFxgcmVtb3RlOiBFbnVtZXJhdGluZyBvYmplY3RzOiAxNDgsIGRvbmUuXFxgXG5cXGByZW1vdGU6IENvdW50aW5nIG9iamVjdHM6IDEwMCUgKDE0OC8xNDgpLCBkb25lLlxcYFxuXFxgcmVtb3RlOiBDb21wcmVzc2luZyBvYmplY3RzOiAxMDAlICgxMDcvMTA3KSwgZG9uZS5cXGBcblxcYHJlbW90ZTogVG90YWwgMTY1MiAoZGVsdGEgNTUpLCByZXVzZWQgMTEzIChkZWx0YSAzNiksIHBhY2stcmV1c2VkIDE1MDRcXGBcblxcYFJlY2VpdmluZyBvYmplY3RzOiAxMDAlICgxNjUyLzE2NTIpLCAyLjc3IE1pQiB8IDQuMzkgTWlCL3MsIGRvbmUuXFxgXG5cXGBSZXNvbHZpbmcgZGVsdGFzOiAxMDAlICg5MjAvOTIwKSwgZG9uZS5cXGBcblxuXFxgSG92ZXIgb3ZlciB0aGUgc2l0ZSB0byBzZWUgd2hhdCdzIGdvaW5nIG9uIVxcYGA7XG5cbi8qKlxuICpBZGQgcmVhbHRpbWUgdHlwaW5nIHRvIGhvbWUgYmFubmVyc1xuICpcbiAqL1xuZnVuY3Rpb24gaG9tZVR5cGUoKSB7XG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RyaW5nczogW2dpdE1lc3NhZ2UsIGdpdE1lc3NhZ2VdLFxuICAgICAgICB0eXBlU3BlZWQ6IDMwLFxuICAgICAgICBzbWFydEJhY2tzcGFjZTogdHJ1ZSxcbiAgICAgICAgc2h1ZmZsZTogdHJ1ZSxcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGluaXRpYWxDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGluaXRpYWxDb21wbGV0ZSA9IGZhbHNlOyAvLyBFbnN1cmUgdGhhdCBvdXIgbW91c2VlbnRlciBlZmZlY3Qgb25seSBoYXBwZW5zIG9uY2UgdGhlIGluaXRpYWwgbWVzc2FnZSBpcyBjb21wbGV0ZWQuXG5cbiAgICBsZXQgdHlwZWQgPSBuZXcgVHlwZWQoJyNob21lLXNjcmVlbicsIG9wdGlvbnMpOyAgLy8gT25sb2FkIHdlIHR5cGUgb3V0IHRoZSBnaXQgY2xvbmUgbWVzc2FnZVxuXG4gICAgJCgnc2VjdGlvbiwgZGl2JykubW91c2VlbnRlciggLy8gT24gbW91c2VlbnRlciB3ZSB1c2UgdGhlIGh0bWwgc3RydWN0dXJlIG9mIHRoZSBkaXYuXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpbml0aWFsQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0cmluZ3MgPSBbaGUuZW5jb2RlKCQodGhpcykuaHRtbCgpKV07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlU3BlZWQgPSA1O1xuXG4gICAgICAgICAgICAgICAgdHlwZWQuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgdHlwZWQgPSBuZXcgVHlwZWQoJyNob21lLXNjcmVlbicsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVUeXBlOyIsImltcG9ydCBTY3JvbGxNYWdpYyBmcm9tICdzY3JvbGxtYWdpYyc7XG5pbXBvcnQgJ2ltcG9ydHMtbG9hZGVyP2RlZmluZT0+ZmFsc2Uhc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL3BsdWdpbnMvYW5pbWF0aW9uLmdzYXAnO1xuLy9pbXBvcnQgXCJpbXBvcnRzLWxvYWRlcj9kZWZpbmU9PmZhbHNlIXNjcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9wbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanNcIjtcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcblxuJCA9IGpRdWVyeTtcblxuZnVuY3Rpb24gaW5pdEhlYWRlclNjcm9sbCgpe1xuXG5sZXQgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cblx0Ly8gYnVpbGQgc2NlbmVzXG5sZXQgaGVhZGVyU2Nyb2xsID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICBvZmZzZXQ6IDE1MFxufSlcblx0XHRcdFx0XHQuc2V0Q2xhc3NUb2dnbGUoXCIjaGVhZGVyLW1haW5cIiwgXCJzY3JvbGxlZFwiKSAvLyBhZGQgY2xhc3MgdG9nZ2xlXG5cdFx0XHRcdFx0Ly8uYWRkSW5kaWNhdG9ycygpIC8vIGFkZCBpbmRpY2F0b3JzIChyZXF1aXJlcyBwbHVnaW4pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG59XG5cbmZ1bmN0aW9uIHBvcEluU3RhZ2dlcihpdGVtcyx0cmlnZ2VyLCBkdXJhdGlvbj0wLCB0cmlnZ2VyUG9zPTAuNSl7XG5cdGxldCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcblxuXHRsZXQgdGVjaEluID0gbmV3IFR3ZWVuTWF4LnN0YWdnZXJGcm9tKGl0ZW1zLDAuMix7XG5cdFx0YXV0b0FscGhhOiAwLFxuXHRcdHNjYWxlOiAyXG5cdH0sMC4xKTtcblxuXHRsZXQgdGVjaFNjcm9sbCA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG5cdFx0dHJpZ2dlckVsZW1lbnQ6IHRyaWdnZXIsXG5cdFx0ZHVyYXRpb246IGR1cmF0aW9uLFxuXHRcdHJldmVyc2U6IGZhbHNlLFxuXHRcdHRyaWdnZXJIb29rOiB0cmlnZ2VyUG9zLFxuXHR9KVxuXHQuc2V0VHdlZW4odGVjaEluKVxuXHQvLy5hZGRJbmRpY2F0b3JzKClcblx0LmFkZFRvKGNvbnRyb2xsZXIpO1xuXG59XG5cbmV4cG9ydCB7IGluaXRIZWFkZXJTY3JvbGwsIHBvcEluU3RhZ2dlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=