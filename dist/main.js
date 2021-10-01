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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: none;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Times New Roman', Times, serif;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n#main-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.items-container {\\r\\n  width: 100%;\\r\\n  overflow: auto;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.items-container::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.items-container::-webkit-scrollbar-thumb {\\r\\n  background-color: #888;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.items-container::-webkit-scrollbar-track {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\r\\n  max-width: 500px;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  max-height: 300px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  padding: 10px;\\r\\n  font-size: 1.3rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  font-weight: 100;\\r\\n}\\r\\n\\r\\ni {\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  border-bottom: 1px solid #e0e0e0;\\r\\n}\\r\\n\\r\\n.task p {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid #e0e0e0;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"] {\\r\\n  outline: none;\\r\\n  font-size: 1.3rem;\\r\\n  width: 100%;\\r\\n  max-width: 95%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  margin: 0 10px;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.icon-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.fa-trash-alt:hover {\\r\\n  color: #f00;\\r\\n}\\r\\n\\r\\n.rotate {\\r\\n  transform: rotate(90deg);\\r\\n  color: #ccc;\\r\\n}\\r\\n\\r\\n.delete-container {\\r\\n  padding: 15px 0;\\r\\n  width: 100%;\\r\\n  background-color: #f5f5f5;\\r\\n  text-align: center;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  color: #ccc;\\r\\n}\\r\\n\\r\\n.delete:hover {\\r\\n  color: #6e2f1b;\\r\\n  transition: all ease-out 0.2s;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: double line-through;\\r\\n  opacity: 0.5;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.completed > input {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.textdelete {\\r\\n  font-size: 25px;\\r\\n  font-weight: 500;\\r\\n  color: rgb(49, 48, 48);\\r\\n  font-family: cursive;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  animation: rotate 0.5s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes rotate {\\r\\n  from {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskCompleted\": () => (/* binding */ taskCompleted)\n/* harmony export */ });\nconst taskCompleted = (e, items) => {\r\n  const complete = e.target;\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  if (complete.checked) {\r\n    complete.parentElement.classList.add('completed');\r\n    for (let i = 0; i < items.length; i += 1) {\r\n      // eslint-disable-next-line eqeqeq\r\n      if (complete.parentNode.id == items[i].id) {\r\n        items[i].completed = true;\r\n        localStorage.setItem('items', JSON.stringify(items));\r\n      }\r\n    }\r\n  } else {\r\n    complete.parentElement.classList.remove('completed');\r\n    for (let i = 0; i < items.length; i += 1) {\r\n      // eslint-disable-next-line eqeqeq\r\n      if (complete.parentNode.parentNode.id == items[i].id) {\r\n        items[i].completed = false;\r\n        localStorage.setItem('items', JSON.stringify(items));\r\n      }\r\n    }\r\n  }\r\n};\r\n// eslint-disable-next-line import/prefer-default-export\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/checkbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.js */ \"./src/checkbox.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ \"./src/remove.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst itemsContainer = document.querySelector('.items-container');\r\nconst input = document.createElement('input');\r\nconst inputCont = document.querySelector('.input');\r\nconst title = document.querySelector('.title');\r\nconst titleText = document.createElement('p');\r\nconst deleteCont = document.querySelector('.delete');\r\nconst deleteText = document.createElement('p');\r\nconst icon = document.createElement('i');\r\nconst enter = document.createElement('i');\r\n//  const line= document.createElement('hr');\r\n\r\ninput.type = 'text';\r\ninput.autofocus = true;\r\ninput.setAttribute('placeholder', 'Enter a new task');\r\nenter.classList.add('fas', 'fa-level-down-alt', 'rotate');\r\ninputCont.appendChild(input);\r\ninputCont.appendChild(enter);\r\n\r\ntitleText.textContent = 'Todays todo';\r\nicon.classList.add('fas', 'fa-sync');\r\ndeleteText.classList.add('textdelete');\r\ntitle.appendChild(titleText);\r\ntitle.appendChild(icon);\r\n//  title.appendChild(line);\r\n\r\ndeleteText.textContent = 'Clear all completed';\r\ndeleteCont.appendChild(deleteText);\r\n\r\nlet items = [];\r\nlet indexCont = 0;\r\n\r\nif (localStorage.getItem('items')) {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  items.forEach((item) => {\r\n    const div = document.createElement('div');\r\n    div.classList.add('task');\r\n    div.id = `${indexCont += 1}`;\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('input-container');\r\n\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.checked = item.completed;\r\n    checkbox.addEventListener('change', (e) => (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_1__.taskCompleted)(e, items, deleteCont));\r\n\r\n    const p = document.createElement('input');\r\n    p.type = 'text';\r\n    p.setAttribute('readonly', 'readonly');\r\n    p.value = item.description;\r\n    p.addEventListener('click', (e) => (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__.editContent)(e, p, items));\r\n\r\n    const iconContainer = document.createElement('div');\r\n    iconContainer.classList.add('icon-container');\r\n    const icon = document.createElement('i');\r\n    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');\r\n    const icon2 = document.createElement('i');\r\n    icon2.classList.add('fas', 'fa-trash-alt', 'flex-end');\r\n    icon2.addEventListener('click', (e) => (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__.removeOne)(e, items));\r\n\r\n    iconContainer.appendChild(icon2);\r\n    iconContainer.appendChild(icon);\r\n    inputContainer.appendChild(checkbox);\r\n    inputContainer.appendChild(p);\r\n    div.appendChild(inputContainer);\r\n    div.appendChild(iconContainer);\r\n\r\n    itemsContainer.appendChild(div);\r\n    if (item.completed) {\r\n      div.classList.add('completed');\r\n    }\r\n  });\r\n} else {\r\n  localStorage.setItem('items', JSON.stringify(items));\r\n}\r\nclass Item {\r\n  constructor() {\r\n    this.description = '';\r\n    this.completed = false;\r\n    this.id = '';\r\n  }\r\n}\r\ninput.addEventListener('keydown', (e) => (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__.addTask)(e, items, input, itemsContainer, Item));\r\n\r\ndeleteText.addEventListener('click', (e) => (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__.removeTasks)(e, items, deleteCont, Item));\r\nconst refreshPage = () => {\r\n  icon.classList.add('refresh');\r\n  setTimeout(() => {\r\n    // eslint-disable-next-line no-restricted-globals\r\n    location.reload();\r\n  }, 500);\r\n};\r\n\r\nconst refresh = document.querySelector('.fa-sync');\r\nrefresh.addEventListener('click', refreshPage);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"removeTasks\": () => (/* binding */ removeTasks),\n/* harmony export */   \"editContent\": () => (/* binding */ editContent),\n/* harmony export */   \"removeOne\": () => (/* binding */ removeOne)\n/* harmony export */ });\n/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ \"./src/checkbox.js\");\n\r\n\r\nconst addTask = (e, items, input, itemsContainer, Item) => {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  if (e.keyCode === 13) {\r\n    const newItem = new Item();\r\n    const div = document.createElement('div');\r\n    const checkbox = document.createElement('input');\r\n    const p = document.createElement('input');\r\n    const icon = document.createElement('i');\r\n    div.classList.add('task');\r\n\r\n    newItem.description = input.value;\r\n    newItem.id = items.length + 1;\r\n    newItem.completed = false;\r\n\r\n    checkbox.type = 'checkbox';\r\n    checkbox.classList.add('checkbox');\r\n    checkbox.addEventListener('change', _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.taskCompleted);\r\n\r\n    p.value = input.value;\r\n    p.type = 'text';\r\n    p.setAttribute('readonly', 'readonly');\r\n\r\n    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');\r\n\r\n    div.appendChild(checkbox);\r\n    div.appendChild(p);\r\n    div.appendChild(icon);\r\n\r\n    itemsContainer.appendChild(div);\r\n\r\n    input.value = '';\r\n    items.push(newItem);\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n    // eslint-disable-next-line no-restricted-globals\r\n    location.reload();\r\n  }\r\n};\r\n\r\nconst removeTasks = (e, items) => {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  const checked = document.querySelectorAll('input[type=\"checkbox\"]');\r\n  checked.forEach((checkbox) => {\r\n    if (checkbox.checked) {\r\n      checkbox.parentElement.remove();\r\n    }\r\n  });\r\n\r\n  for (let i = 0; i < items.length; i += 1) {\r\n    items.filter((item) => {\r\n      if (item.completed) {\r\n        const index = items.indexOf(item);\r\n        items.splice(index, 1);\r\n        let i = 0;\r\n        while (i < items.length) {\r\n          if (items[i].id > item.id) {\r\n            items[i].id -= 1;\r\n          }\r\n          i += 1;\r\n        }\r\n        localStorage.setItem('items', JSON.stringify(items));\r\n      }\r\n      return item;\r\n    });\r\n  }\r\n  // eslint-disable-next-line no-restricted-globals\r\n  location.reload();\r\n};\r\n\r\nconst editContent = (e, p, items) => {\r\n  const edit = e.target;\r\n  edit.removeAttribute('readonly');\r\n  edit.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13) {\r\n      edit.setAttribute('readonly', 'readonly');\r\n      edit.value = p.value;\r\n      items.forEach((item) => {\r\n        // eslint-disable-next-line eqeqeq\r\n        if (item.id == edit.parentElement.parentElement.id) {\r\n          item.description = edit.value;\r\n        }\r\n      });\r\n      localStorage.setItem('items', JSON.stringify(items));\r\n    }\r\n  });\r\n};\r\n\r\nconst removeOne = (e, items) => {\r\n  items = [...JSON.parse(localStorage.getItem('items'))];\r\n  const remove = e.target;\r\n  items.forEach((item) => {\r\n    // eslint-disable-next-line eqeqeq\r\n    if (item.id == remove.parentElement.parentElement.id) {\r\n      const index = items.indexOf(item);\r\n      items.splice(index, 1);\r\n      let i = 0;\r\n      while (i < items.length) {\r\n        if (items[i].id > item.id) {\r\n          items[i].id -= 1;\r\n        }\r\n        i += 1;\r\n      }\r\n    }\r\n    remove.parentElement.parentElement.remove();\r\n    localStorage.setItem('items', JSON.stringify(items));\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/remove.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;