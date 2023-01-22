/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/live-blog-block/edit.js":
/*!*************************************!*\
  !*** ./src/live-blog-block/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/live-blog-block/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit(props) {
  var attributes = props.attributes;
  var jm_live_blog_color_scheme = attributes.jm_live_blog_color_scheme,
    jm_live_blog_update_color = attributes.jm_live_blog_update_color,
    jm_live_blog_title = attributes.jm_live_blog_title,
    jm_live_blog_description = attributes.jm_live_blog_description;
  var divStyle = {
    backgroundColor: jm_live_blog_update_color
  };
  return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Live Blog Title', 'jm-live-blog'),
    value: jm_live_blog_title,
    onChange: function onChange(value) {
      return props.setAttributes({
        jm_live_blog_title: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Live Blog Description', 'jm-live-blog'),
    value: jm_live_blog_description,
    onChange: function onChange(value) {
      return props.setAttributes({
        jm_live_blog_description: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Scheme', 'jm-live-blog'),
    value: jm_live_blog_color_scheme,
    options: [{
      value: 'light',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'jm-live-blog')
    }, {
      value: 'dark',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'jm-live-blog')
    }],
    onChange: function onChange(value) {
      return props.setAttributes({
        jm_live_blog_color_scheme: value
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "jm-live-blog",
    className: [jm_live_blog_color_scheme, ' jm-live-blog-outer']
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jm-live-blog-inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "jm-live-blog-title"
  }, jm_live_blog_title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "jm-live-blog-description"
  }, jm_live_blog_description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jm-live-blog-section-outer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    id: "jm-live-blog-new-updates",
    style: divStyle
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('New Updates', 'jm-live-blog')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "jm-live-blog-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can add live updates using the custom fields below.', 'jm-live-blog')))))))];
}

/***/ }),

/***/ "./src/live-blog-block/index.js":
/*!**************************************!*\
  !*** ./src/live-blog-block/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/live-blog-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/live-blog-block/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/live-blog-block/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      version: "1.1",
      id: "Layer_1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 512 512",
      "enable-background": "new 0 0 512 512"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
      id: "SVGID_1_",
      gradientUnits: "userSpaceOnUse",
      x1: "240.3151",
      y1: "25.5783",
      x2: "246.5526",
      y2: "511.4072"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
      offset: "0",
      style: {
        stopColor: '#1B75BC'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
      offset: "1",
      style: {
        stopColor: '#262262'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "url(#SVGID_1_)",
      d: "M474.9,512H12c-6.6,0-12-5.4-12-12V37.1c0-6.6,5.4-12,12-12h462.9c6.6,0,12,5.4,12,12V500 C486.9,506.6,481.5,512,474.9,512z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "36.9",
      y: "106.2",
      fill: "none",
      width: "413",
      height: "226.1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
      transform: "matrix(1 0 0 1 36.9131 318.3914)",
      fill: "#00AEEF",
      "font-family": "'Courier'",
      "font-size": "332px"
    }, "JM"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
      overflow: "visible",
      opacity: "0.75",
      width: "537",
      height: "537",
      href: "data:image/png;base64,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 mH+e/mlHRYsAAAAASUVORK5CYII=",
      transform: "matrix(0.24 0 0 0.24 398.1832 -8)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
      fill: "#ED1C24",
      cx: "462.6",
      cy: "49.4",
      r: "49.4"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "68.8",
      y: "348.7",
      fill: "none",
      width: "349.2",
      height: "117.3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
      transform: "matrix(1 0 0 1 68.8403 426.3329)",
      fill: "#FFFFFF",
      "font-family": "'SignPainter-HouseScript'",
      "font-size": "124px"
    }, "Live Blog"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      x: "450.5",
      y: "24.4",
      fill: "none",
      width: "24.2",
      height: "50"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
      transform: "matrix(1 0 0 1 450.4838 70.6876)",
      fill: "#FFFFFF",
      "font-family": "'DINCondensed-Bold'",
      "font-size": "65px"
    }, "1"))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/live-blog-block/editor.scss":
/*!*****************************************!*\
  !*** ./src/live-blog-block/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/live-blog-block/style.scss":
/*!****************************************!*\
  !*** ./src/live-blog-block/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/live-blog-block/block.json":
/*!****************************************!*\
  !*** ./src/live-blog-block/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jm-live-blog/jm-live-blog-block","version":"2.1","title":"JM Live Blog","category":"widgets","icon":"smiley","description":"Displays a live blog for the post or page","attributes":{"jm_live_blog_color_scheme":{"type":"string","default":"light"},"jm_live_blog_update_color":{"type":"string","default":"#93060A"},"jm_live_blog_title":{"type":"string","default":"Title"},"jm_live_blog_description":{"type":"string","default":"Description"}},"supports":{"align":["wide","full"],"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalLayout":true},"textdomain":"jm-live-blog","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"live-blog-block/index": 0,
/******/ 			"live-blog-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklive_blog"] = self["webpackChunklive_blog"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["live-blog-block/style-index"], function() { return __webpack_require__("./src/live-blog-block/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map