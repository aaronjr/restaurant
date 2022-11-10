/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody{\\n  min-height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  font-family: 'Allerta Stencil', sans-serif;\\n}\\n\\n.container{\\n  width: 60vw;\\n  min-height: 100vh;\\n  display: grid;\\n  grid-template-rows: 80px 1fr 80px;\\n  position: relative;\\n}\\n\\nnav{\\n  background-color:whitesmoke;\\n  height: 80px;\\n  width:100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content:center;\\n  align-content: center;\\n}\\nnav ul{\\n  justify-self: flex-end;\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-content: start;\\n  gap:10px;\\n  margin-top: 30px;\\n}\\n\\nnav li{\\n  cursor: pointer;\\n}\\n\\nli, .title{\\n  align-self: center;\\n  list-style: none;\\n}\\n\\nli{\\n  font-size: large;\\n}\\n\\n.title{\\n  margin: 30px;\\n}\\n\\n.content{\\n  background-color:white;\\n  padding-bottom: 2.5rem;\\n  width:100%;\\n  display: flex;\\n}\\n\\n.imgHolder{\\n  display: grid;\\n  place-items: center;\\n}\\n.hero{\\n  height: 400px;\\n}\\n\\n.textHolder{\\n  text-align: center;\\n  font-size: xx-large;\\n}\\n\\n.textMain{\\n  white-space: pre-line;\\n}\\n\\nfooter{\\n  background-color:whitesmoke;\\n  height: 80px;\\n  width:100%;\\n  position: absolute;\\n  bottom: 0;\\n}\\n\\n.foot-list{\\n  display: flex;\\n  justify-content: space-evenly;\\n  height: 100%;\\n  align-items: center;\\n}\\n.homeContainer,\\n.contactMain,\\n.menuMain{\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.contactList{\\n  text-align: center;\\n}\\n\\n.mainContainer{\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.homeContainer{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n}\\n\\n.contactMain{\\n  justify-self: center;\\n  align-self: center;\\n  display: flex;\\n  justify-content: space-evenly;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\niframe{\\n  margin-top: 50px;\\n  width: 85%;\\n  height: 50%;\\n}\\n\\n.menuMain{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  gap:10px;\\n\\n}\\n.box{\\n  min-height: 60px;\\n  display: flex;\\n  justify-content: space-between;\\n  flex-direction: column;\\n  padding:10px;\\n  border-bottom: 1px solid black;\\n}\\n\\n.box:last-child{\\n  border-bottom: none\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/changePage.js":
/*!***************************!*\
  !*** ./src/changePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showPage\": () => (/* binding */ showPage)\n/* harmony export */ });\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ \"./src/loadHome.js\");\n/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadContact */ \"./src/loadContact.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n\n\n\n\n// change which page loads in main content\n// file:///Users/AaronRichards_/code/repos/restaurant/dist/index.html\n\nfunction showPage(page){\n    // find content\n    const content = document.querySelector('.content')\n\n    // remove each child to avoid duplication\n    while(content.firstChild){\n        content.removeChild(content.lastChild)\n    }\n\n    if(page == \"Home\"){\n        (0,_loadHome__WEBPACK_IMPORTED_MODULE_0__.home)()\n    }\n    else if(page == \"Contact\"){\n        (0,_loadContact__WEBPACK_IMPORTED_MODULE_1__.contact)()\n    }\n    else{\n        (0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__.menu)()\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/changePage.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEle\": () => (/* binding */ createEle),\n/* harmony export */   \"createImg\": () => (/* binding */ createImg),\n/* harmony export */   \"loop\": () => (/* binding */ loop)\n/* harmony export */ });\n\n// create element with html tag, class and textContents\nfunction createEle(tag, className = \"\", text = \"\"){\n    let element = document.createElement(tag)\n    element.className = className\n    element.textContent = text\n    return element\n}\n\n// create image and set properties\nfunction createImg(className, source, altText){\n    const image = document.createElement('img')\n    image.src = source;\n    image.altText = altText;\n    image.className = className\n    return image\n}\n\n// create function to pass in array and where to append\nfunction loop(array, where){\n    for(let counter in array){\n        where.append(\n            createEle(\n                array[counter][0],\n                array[counter][1],\n                array[counter][2]))\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loadMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMain */ \"./src/loadMain.js\");\n/* harmony import */ var _changePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changePage */ \"./src/changePage.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    // build nav and main page layout - from .loadMain\n    (0,_loadMain__WEBPACK_IMPORTED_MODULE_1__.main)()\n\n    // start on home page\n    ;(0,_changePage__WEBPACK_IMPORTED_MODULE_2__.showPage)(\"Home\")\n    \n    // find nav list, add event listeners then load correct page\n    let list = document.querySelectorAll('.list-item')\n    list.forEach(item => {\n        item.addEventListener(\"click\", () => {\n            // pass through the wanted page\n            ;(0,_changePage__WEBPACK_IMPORTED_MODULE_2__.showPage)(item.textContent)\n        })\n    })\n})\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\n// contact details\nconst contactList = [\n    [\"li\", 'contact-list', \"0117 3790477\"],\n    [\"li\", 'contact-list', \"info@yafo.com\"],\n    [\"li\", 'contact-list', \"238 North Street Southville BS3 1JD\"],\n]\n// create contact page\nfunction contact(){\n    const content = document.querySelector(\".content\")\n\n    // create div for contact section\n    let contactMain = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"div\", \"contactMain\")\n    let frame = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"iframe\", \"frame\")\n\n    // create frame, append to page and set outerHTML\n    content.append(contactMain)\n    contactMain.append(frame)\n    frame.outerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9947.665413177958!2d-2.6179144955262137!3d51.441330029116806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c339e150001%3A0xebc621af79b1bd5c!2sYafo!5e0!3m2!1sen!2suk!4v1668092789996!5m2!1sen!2suk\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>'\n    \n    // create bottom div\n    let ContactHolder =  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"div\", \"ContactHolder\")\n    let listContact =  (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"ul\", \"contactList\")\n\n    // add to page\n    contactMain.append(ContactHolder)\n    ContactHolder.append(listContact)\n\n    // find UL\n    const list = document.querySelector('.contactList')\n\n    // loop through list and add to page\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(contactList, list)\n}\n\n//# sourceURL=webpack://restaurant/./src/loadContact.js?");

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _Yafo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Yafo.png */ \"./src/Yafo.png\");\n\n\n\n// create home page\nconst mainSections = [\n    [\"div\", 'imgHolder'],\n    [\"div\", 'textHolder'],\n]\n\nfunction home(){\n    \n    // find content section of page\n    const content = document.querySelector('.content')\n\n    // make main container for homepage\n    const homeContainer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)('div','homeContainer')\n\n    // add to home screen\n    content.append(homeContainer)\n\n    // add sections to page\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(mainSections, homeContainer)\n\n    // find these areas to add items\n    let imgHolder = document.querySelector(\".imgHolder\")\n    let textHolder = document.querySelector(\".textHolder\")\n\n    // create and add main logo\n    imgHolder.append((0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createImg)('hero', _Yafo_png__WEBPACK_IMPORTED_MODULE_1__, \"YAFO logo\"))\n\n    // add address\n    let text = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"p\", \"textMain\", \"238 North Street \\r\\n Southville BS3 1JD\")\n    textHolder.append(text)\n}\n\n\n//# sourceURL=webpack://restaurant/./src/loadHome.js?");

/***/ }),

/***/ "./src/loadMain.js":
/*!*************************!*\
  !*** ./src/loadMain.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _loadNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadNav */ \"./src/loadNav.js\");\n\n\n\nconst toCreate = [\n    [\"nav\", \"nav\"],\n    [\"div\", \"content\"],\n    [\"footer\", \"footer\"],\n]\n\nfunction main (){\n    const container = document.querySelector('.container')\n\n    // add list to container\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(toCreate, container)\n\n    // add nav and footer to page\n    ;(0,_loadNav__WEBPACK_IMPORTED_MODULE_1__.nav)()\n    ;(0,_loadNav__WEBPACK_IMPORTED_MODULE_1__.footer)()\n}\n\n//# sourceURL=webpack://restaurant/./src/loadMain.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\n\n// create manu page\n\nfunction menu(){\n    // add section for menu items\n    const content = document.querySelector('.content')\n    const menuMain = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)('div', 'menuMain')\n    content.append(menuMain)\n\n    // create one box\n    let box = ['div','box','']\n\n    // create menu items\n    let bigList = [[\n        ['p','info','Zaatar Flatbread with tomato fil-fel h’arr, & labneh'],\n        ['p','info-price','£7.50']\n    ],[\n        ['p','info','Yafo Authentic Falafels served with tahini sauce'],\n        ['p','info-price','£8.50']\n    ],[\n        ['p','info','Grilled Sweet & Spicy Peppers served with infused hard Ricotta cheese, zaatar & fresh oregano'],\n        ['p','info-price','£10.50']\n    ],[    \n        ['p','info','Heritage Roasted Carrots spiced with our homemade harissa & maple syrup, served on labneh'],\n        ['p','info-price','£5,95']\n    ],[\n        ['p','info','Corn Ribs Infused in Middle Eastern spices, black garlic, pilpelchuma & dill yogurt'],\n        ['p','info-price','£5,45']\n    ],[\n        ['p','info','Lachmagine authentic flatbread with spiced vegan mince & pine- nut puree, topped with Yafo salad, fried aubergine and drizzled with ambe & tahini'],\n        ['p','info-price','£7,45']\n    ],[\n        ['p','info','Pan Fried Chestnut Mushrooms with black garlic, white wine, sweet pickled chilli, pistachio crumbs & micro coriander'],\n        ['p','info-price','£9,45']\n    ],[\n        ['p','info','Yafo Trayserved with seasoned pitta chips, tahini, preserved lemon mayo & tomato fil-fel h’arr'],\n        ['p','info-price','£3,45']\n    ],[\n        ['p','info','Siikh marinated vegan kebabs, served with roasted aubergine salad & tatbila dressing'],\n        ['p','info-price','£5,66']\n    ],[\n        ['p','info','Sambousek Middle Eastern pastry stuffed with Balkan cheese, kale & potato, served with beetroot puree & spiced pomegranate molasses'],\n        ['p','info-price','£12,45']\n    ]\n\n]\n    // add title to page\n    let title = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)('h1', 'title', \"Our small plates\")\n    menuMain.append(title)\n\n    // make as many boxes as needed\n    for(let i in bigList){\n        menuMain.append(\n            (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createEle)(\n                box[0],\n                box[1],\n                box[2]))\n    }\n\n    // get back boxes from page, to add content\n    const boxes = document.querySelectorAll('.box')\n\n    // add menu items to boxes\n    for(let i in bigList){\n        ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(bigList[i],boxes[i])\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/loadMenu.js?");

/***/ }),

/***/ "./src/loadNav.js":
/*!************************!*\
  !*** ./src/loadNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\n// create Nav\n// list to pass through createEle function\nconst forNav = [\n    [\"ul\", 'nav-list'],\n]\n\nconst navList = [\n    ['li', 'list-item', 'Home'],\n    ['li', 'list-item', 'Menu'],\n    ['li', 'list-item', 'Contact']\n]\n\nfunction nav (){\n    // create nav with logo and list\n    const nav = document.querySelector('.nav')\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(forNav, nav)\n\n    // fill list\n    const list =  document.querySelector('.nav-list')\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(navList,list)\n}\n\n// create footer\nconst forFoot = [\n    [\"ul\", 'foot-list'],\n]\n\nconst footList = [\n    ['li', 'list-item-foot', '2022'],\n    ['li', 'list-item-foot', 'aaronjr']\n]\n\nfunction footer(){\n    // create footer with info\n    const footer = document.querySelector('.footer')\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(forFoot, footer)\n\n    // fill list\n    const list =  document.querySelector('.foot-list')\n    ;(0,_createElement__WEBPACK_IMPORTED_MODULE_0__.loop)(footList, list)\n}\n\n//# sourceURL=webpack://restaurant/./src/loadNav.js?");

/***/ }),

/***/ "./src/Yafo.png":
/*!**********************!*\
  !*** ./src/Yafo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca509d6bc826511799b9.png\";\n\n//# sourceURL=webpack://restaurant/./src/Yafo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;