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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todolist-with-webpack/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _module_scoreEntry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/scoreEntry.js */ \"./src/module/scoreEntry.js\");\n\n\n\n_module_scoreEntry_js__WEBPACK_IMPORTED_MODULE_1__.formOne.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_module_scoreEntry_js__WEBPACK_IMPORTED_MODULE_1__.createNewList)();\n});\n\n_module_scoreEntry_js__WEBPACK_IMPORTED_MODULE_1__.refresh.addEventListener('click', () => {\n  window.location.reload();\n});\n\n\n//# sourceURL=webpack://todolist-with-webpack/./src/index.js?");

/***/ }),

/***/ "./src/module/scoreEntry.js":
/*!**********************************!*\
  !*** ./src/module/scoreEntry.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refresh\": () => (/* binding */ refresh),\n/* harmony export */   \"formOne\": () => (/* binding */ formOne),\n/* harmony export */   \"createNewList\": () => (/* binding */ createNewList)\n/* harmony export */ });\nconst scoreList = document.querySelector('.score__list ul');\nconst inputName = document.querySelector('.input__name');\nconst inputScore = document.querySelector('.input__score');\nconst erorMsg = document.querySelector('.error');\nconst refresh = document.querySelector('.refresh');\nconst formOne = document.querySelector('.form__one');\n\nfunction displayMessage() {\n  erorMsg.innerText = '';\n}\n\nfunction createNewList() {\n  const newLi = document.createElement('li');\n\n  if (inputScore.value.trim() !== '' && inputName.value.trim() !== '') {\n    newLi.innerText = `${inputName.value} ${inputScore.value}`;\n    scoreList.appendChild(newLi);\n  } else {\n    erorMsg.innerText = 'Empty input not allow';\n    setTimeout(displayMessage, 3000);\n  }\n\n  inputName.value = ' ';\n  inputScore.value = ' ';\n}\n\n\n//# sourceURL=webpack://todolist-with-webpack/./src/module/scoreEntry.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;