/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/App.js":
/*!***********************!*\
  !*** ./public/App.js ***!
  \***********************/
/***/ (() => {

eval("const navbar = document.querySelector('.navbar');\nconst brandPictures = document.querySelectorAll('.brand-picture');\nconst brandPicture1 = brandPictures[0];\nconst brandPicture2 = brandPictures[1];\nconst textSection = document.querySelector('.text-section');\n\n\n// BREATHING ANIMATION BRANDPICTURES\nconst toggleBreathe = pic => {\n    if (pic.classList.contains('breathe')) {\n        pic.classList.remove('breathe')\n    }\n    else {\n        pic.classList.add('breathe');\n    }\n}\nconst pictureBreathe = (pic1, pic2, interval) => {\n    setInterval(() => {\n        toggleBreathe(pic1);\n        toggleBreathe(pic2)\n    }, interval)\n}\npictureBreathe(brandPicture1, brandPicture2, 5000);\n// BREATHING ANIMATION BRANDPICTURES END\n\n\n//# sourceURL=webpack://micromerce/./public/App.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/App.js"]();
/******/ 	
/******/ })()
;