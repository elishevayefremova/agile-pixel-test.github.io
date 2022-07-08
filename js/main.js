/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function (event) {\r\n    const body = document.getElementsByTagName('body')[0];\r\n    const logo = document.getElementById(\"logo\");\r\n    const navigation = document.getElementById(\"navigation\");\r\n\r\n    (logo.clientWidth + navigation.clientHeight >= body.clientWidth) ? body.classList.add(\"is-vertical\") : body.classList.remove(\"is-vertical\");\r\n\r\n    window.addEventListener('resize', function (event) {\r\n        (logo.clientWidth + navigation.clientHeight >= body.clientWidth) ? body.classList.add(\"is-vertical\") : body.classList.remove(\"is-vertical\");\r\n    });\r\n\r\n\r\n    setTimeout(function () {\r\n        body.classList.add(\"is-animated\");\r\n    }, 1500);\r\n\r\n\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;