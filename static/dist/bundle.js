/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/index.ts":
/*!****************************!*\
  !*** ./static/js/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_classes_documentFile_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ts/classes/documentFile.class */ \"./static/ts/classes/documentFile.class.ts\");\n/* harmony import */ var _ts_classes_file_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ts/classes/file.class */ \"./static/ts/classes/file.class.ts\");\n\n\nvar test = new _ts_classes_documentFile_class__WEBPACK_IMPORTED_MODULE_0__.DocumentFile(new _ts_classes_file_class__WEBPACK_IMPORTED_MODULE_1__.File());\ntest.processAction();\n\n//# sourceURL=webpack://watermark-php/./static/js/index.ts?");

/***/ }),

/***/ "./static/ts/classes/documentFile.class.ts":
/*!*************************************************!*\
  !*** ./static/ts/classes/documentFile.class.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DocumentFile\": () => /* binding */ DocumentFile\n/* harmony export */ });\n/* harmony import */ var _enum_filedom_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/filedom.enum */ \"./static/ts/enum/filedom.enum.ts\");\n/* harmony import */ var _documentFileDom_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentFileDom.class */ \"./static/ts/classes/documentFileDom.class.ts\");\n/* harmony import */ var _html_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html.class */ \"./static/ts/classes/html.class.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar DocumentFile = /*#__PURE__*/function () {\n  function DocumentFile(fileUpload) {\n    _classCallCheck(this, DocumentFile);\n\n    this.file = fileUpload;\n    this.button = document.querySelector(_enum_filedom_enum__WEBPACK_IMPORTED_MODULE_0__.FileDom.DOCUMENT_BUTTON);\n    this.fileElement = document.querySelector(_enum_filedom_enum__WEBPACK_IMPORTED_MODULE_0__.FileDom.DOCUMENT_UPLOAD);\n    this.parentListing = document.querySelector(_enum_filedom_enum__WEBPACK_IMPORTED_MODULE_0__.FileDom.DOCUMENT_LISTING);\n  }\n\n  _createClass(DocumentFile, [{\n    key: \"processAction\",\n    value: function processAction() {\n      var that = this;\n      this.button.addEventListener('click', function (e) {\n        e.preventDefault();\n        that.fileElement.click();\n      });\n      this.fileElement.addEventListener('change', function (e) {\n        that.file.setProperty(this, _enum_filedom_enum__WEBPACK_IMPORTED_MODULE_0__.FileDom.FORM_NAME);\n        that.file.processElement(new _html_class__WEBPACK_IMPORTED_MODULE_2__.Html(new _documentFileDom_class__WEBPACK_IMPORTED_MODULE_1__.DocumentDom(), that.parentListing));\n      });\n    }\n  }]);\n\n  return DocumentFile;\n}();\n\n\n\n//# sourceURL=webpack://watermark-php/./static/ts/classes/documentFile.class.ts?");

/***/ }),

/***/ "./static/ts/classes/documentFileDom.class.ts":
/*!****************************************************!*\
  !*** ./static/ts/classes/documentFileDom.class.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DocumentDom\": () => /* binding */ DocumentDom\n/* harmony export */ });\n/* harmony import */ var _enum_file_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/file.enum */ \"./static/ts/enum/file.enum.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DocumentDom = /*#__PURE__*/function () {\n  function DocumentDom() {\n    _classCallCheck(this, DocumentDom);\n  }\n\n  _createClass(DocumentDom, [{\n    key: \"getElementLayout\",\n    value: function getElementLayout(index, file) {\n      var row = document.createElement('div'),\n          list = document.createElement('li'),\n          fileTitleColumn = document.createElement('div'),\n          deleteButtonColumn = document.createElement('div'),\n          headerText = document.createElement('h5'),\n          deleteButton = document.createElement('button');\n      this.setAttribute(row, 'row');\n      this.setAttribute(fileTitleColumn, 'col-md-10');\n      this.setAttribute(deleteButtonColumn, 'col-md-2');\n      this.setAttribute(deleteButton, 'btn btn-danger btn-sm');\n      row.appendChild(fileTitleColumn);\n      row.appendChild(deleteButtonColumn);\n      fileTitleColumn.textContent = \"Size: \".concat(Math.floor(file.size / _enum_file_enum__WEBPACK_IMPORTED_MODULE_0__.File.FILE_SIZE_TO_KILOBYTE), \"KB\");\n      this.setText(deleteButton, 'Delete x');\n      deleteButton.addEventListener('click', this.deleteButtonAction);\n      fileTitleColumn.addEventListener('click', this.showModalDiaglog);\n      headerText.addEventListener('click', this.showModalDiaglog);\n      deleteButtonColumn.appendChild(deleteButton);\n      this.getList(list, index);\n      this.setText(headerText, file.name);\n      list.appendChild(headerText);\n      list.appendChild(row);\n      return list;\n    }\n  }, {\n    key: \"setAttribute\",\n    value: function setAttribute(el, className) {\n      el.className = className;\n      return el;\n    }\n  }, {\n    key: \"setText\",\n    value: function setText(el, text) {\n      el.textContent = text;\n      return el;\n    }\n  }, {\n    key: \"getList\",\n    value: function getList(list, index) {\n      list.className = \"list-group-item file-list file-event\".concat(index);\n      return list;\n    }\n  }, {\n    key: \"deleteButtonAction\",\n    value: function deleteButtonAction(e) {\n      e.preventDefault();\n      alert('hello world');\n    }\n    /**\n     * Using jQuery here is a bad idea\n     * in 2021 🙈.\n     * @param e\n     */\n\n  }, {\n    key: \"showModalDiaglog\",\n    value: function showModalDiaglog(e) {\n      $('#file-preview-modal').modal();\n    }\n  }]);\n\n  return DocumentDom;\n}();\n\n\n\n//# sourceURL=webpack://watermark-php/./static/ts/classes/documentFileDom.class.ts?");

/***/ }),

/***/ "./static/ts/classes/file.class.ts":
/*!*****************************************!*\
  !*** ./static/ts/classes/file.class.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"File\": () => /* binding */ File\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n *  Handles the file upload logic\n */\nvar File = /*#__PURE__*/function () {\n  function File() {// this.http = httprequest;\n\n    _classCallCheck(this, File);\n  }\n  /**\n   * Set file properties\n   * @param payload\n   */\n\n\n  _createClass(File, [{\n    key: \"setProperty\",\n    value: function setProperty(fileElement, formName) {\n      this.fileObject = fileElement;\n      this.formName = formName;\n    }\n  }, {\n    key: \"getFormData\",\n    value: function getFormData() {\n      var formData = new FormData();\n      formData.append(this.formName, this.fileObject);\n      return formData;\n    }\n    /**\n     *\n     * @param html\n     */\n\n  }, {\n    key: \"processElement\",\n    value: function processElement(html) {\n      var files = this.fileObject.files;\n\n      if (files.length > 0) {\n        var _iterator = _createForOfIteratorHelper(Array.from(files).entries()),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var _step$value = _slicedToArray(_step.value, 2),\n                index = _step$value[0],\n                file = _step$value[1];\n\n            //validation\n            //embed on element\n            html.setElement(index, file);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        html.renderElement(files);\n      }\n    }\n  }, {\n    key: \"save\",\n    value: function save(http) {\n      return this.getFormData();\n    }\n  }]);\n\n  return File;\n}();\n\n\n\n//# sourceURL=webpack://watermark-php/./static/ts/classes/file.class.ts?");

/***/ }),

/***/ "./static/ts/classes/html.class.ts":
/*!*****************************************!*\
  !*** ./static/ts/classes/html.class.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Html\": () => /* binding */ Html\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Html = /*#__PURE__*/function () {\n  function Html(fileHtml, element) {\n    _classCallCheck(this, Html);\n\n    this.parentElement = element;\n    this.fileHtml = fileHtml;\n  }\n\n  _createClass(Html, [{\n    key: \"setElement\",\n    value: function setElement(index, object) {\n      var elem = this.fileHtml.getElementLayout(index, object);\n      this.parentElement.appendChild(elem);\n    }\n  }]);\n\n  return Html;\n}();\n\n\n\n//# sourceURL=webpack://watermark-php/./static/ts/classes/html.class.ts?");

/***/ }),

/***/ "./static/ts/enum/file.enum.ts":
/*!*************************************!*\
  !*** ./static/ts/enum/file.enum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"File\": () => /* binding */ File\n/* harmony export */ });\nvar File;\n\n(function (File) {\n  File[File[\"MAX_FILE_SIZE\"] = 4024] = \"MAX_FILE_SIZE\";\n  File[\"FILE_FORMAT\"] = \"png,jpg,png\";\n  File[File[\"FILE_SIZE_TO_KILOBYTE\"] = 1024] = \"FILE_SIZE_TO_KILOBYTE\";\n})(File || (File = {}));\n\n//# sourceURL=webpack://watermark-php/./static/ts/enum/file.enum.ts?");

/***/ }),

/***/ "./static/ts/enum/filedom.enum.ts":
/*!****************************************!*\
  !*** ./static/ts/enum/filedom.enum.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileDom\": () => /* binding */ FileDom\n/* harmony export */ });\nvar FileDom;\n\n(function (FileDom) {\n  FileDom[\"FORM_NAME\"] = \"stamp\";\n  FileDom[\"DOCUMENT_UPLOAD\"] = \"#document\";\n  FileDom[\"DOCUMENT_LISTING\"] = \".list-group\";\n  FileDom[\"DOCUMENT_BUTTON\"] = \"#upload-document\";\n})(FileDom || (FileDom = {}));\n\n//# sourceURL=webpack://watermark-php/./static/ts/enum/filedom.enum.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./static/js/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;