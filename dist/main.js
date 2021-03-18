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

/***/ "./src/extractInfo.js":
/*!****************************!*\
  !*** ./src/extractInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"city\": () => (/* binding */ city),\n/* harmony export */   \"cord\": () => (/* binding */ cord),\n/* harmony export */   \"temp\": () => (/* binding */ temp),\n/* harmony export */   \"hum\": () => (/* binding */ hum),\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n/* eslint-disable no-mixed-operators */\n\nconst city = (input) => {\n  const city = input.name;\n  const country = input.sys.country;\n  const output = city + ', ' + country;\n  return output;\n};\n\nconst cord = (input) => {\n  const lat = input.coord.lat;\n  const lon = input.coord.lon;\n  const location = 'Latitude ' + lat + ', Longitude ' + lon;\n  return location;\n};\n\nconst calTempCelcius = (input) => {\n  let temp = Math.round(input - 273.15);\n  temp += 'ºC';\n  return temp;\n};\n\nconst calTempFah = (input) => {\n  let temp = Math.round((input - 273.15) * 9 / 5 + 32);\n  temp += 'ºF';\n  return temp;\n};\n\nconst temp = (input) => {\n  const option = document.getElementById('select-temperature').value;\n  let actual;\n  if (option === 'ºC') {\n    actual = calTempCelcius(input);\n  } else {\n    actual = calTempFah(input);\n  }\n  return actual;\n};\n\nconst hum = (input) => {\n  const humidity = input.main.humidity + '%';\n  return humidity;\n};\n\nconst status = (input) => {\n  const condition = input.weather[0].description;\n  return condition;\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/extractInfo.js?");

/***/ }),

/***/ "./src/getdata.js":
/*!************************!*\
  !*** ./src/getdata.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* eslint-disable prefer-promise-reject-errors */\n\n\n\n\n\nasync function getImage(input, info) {\n  const url = `https://api.unsplash.com/photos/random?orientation=landscape&count=1&client_id=7XimdnnMOSmoeVFofk7rEM4_ApTXYE83u8ZAAlOfPZU&query=${input}`;\n  const response = await fetch(url);\n  const data = await response.json();\n  (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(data[0].urls.regular, info);\n}\n\nasync function fetchData(input) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input},&APPID=694ce3be09a1d625ba532a57008093ca`;\n  const response = await fetch(url);\n  const data = await response.json();\n  return new Promise((resolve, reject) => {\n    if (data.cod === '404') {\n      reject('No valid city');\n    } else {\n      resolve(data);\n    }\n  });\n}\n\nasync function getData(input) {\n  try {\n    const request = await fetchData(input);\n    getImage(request.weather[0].main, request);\n  } catch (error) {\n    const container = document.getElementById('container');\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.clear)(container);\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)('Yes');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://weather-app/./src/getdata.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const { container } = require(\"webpack\");\n\nconst home = (condition) => {\n  const container = document.getElementById('container');\n  const div = document.createElement('div');\n  div.setAttribute('class', 'align-loading');\n  container.appendChild(div);\n  if (condition === 'No') {\n    div.innerHTML = '<span>Waiting for a city ...</span>';\n  } else {\n    div.innerHTML = '<span>No valid city. Try again.</span>';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://weather-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/getdata.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst searchBtn = document.getElementById('search-btn');\nsearchBtn.addEventListener('click', search => {\n  const form = document.getElementsByTagName('form')[0];\n  const input = document.getElementById('search');\n  const location = input.value;\n  (0,_getdata__WEBPACK_IMPORTED_MODULE_0__.default)(location);\n  form.reset();\n});\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)('No');\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\n/* harmony import */ var _extractInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractInfo */ \"./src/extractInfo.js\");\n\n\nfunction clear(container) {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n}\n\nconst render = (img, data) => {\n  const title = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.city)(data);\n  const location = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.cord)(data);\n  const actualTemp = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.temp)(data.main.temp);\n  const feelsLike = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.temp)(data.main.feels_like);\n  const humidity = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.hum)(data);\n  const condition = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.status)(data);\n  const tempMax = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.temp)(data.main.temp_max);\n  const temMin = (0,_extractInfo__WEBPACK_IMPORTED_MODULE_0__.temp)(data.main.temp_min);\n  const container = document.getElementById('container');\n  clear(container);\n  const Card = document.createElement('div');\n  const background = document.createElement('div');\n  container.appendChild(Card);\n  Card.appendChild(background);\n  background.innerHTML = `<img src=\"${img}\" class=\"background\" >`;\n  const changebttn = document.getElementById('select-temperature');\n  const dataContainer = document.createElement('div');\n  const titleCity = document.createElement('p');\n  const ubication = document.createElement('p');\n  const tempNow = document.createElement('p');\n  const feelsTemp = document.createElement('p');\n  const Humidity = document.createElement('p');\n  const description = document.createElement('p');\n  const timeDiv = document.createElement('div');\n  const Max = document.createElement('span');\n  const Min = document.createElement('span');\n  Card.appendChild(dataContainer);\n  dataContainer.appendChild(titleCity);\n  dataContainer.appendChild(ubication);\n  dataContainer.appendChild(tempNow);\n  dataContainer.appendChild(feelsTemp);\n  dataContainer.appendChild(Humidity);\n  dataContainer.appendChild(description);\n  dataContainer.appendChild(timeDiv);\n  timeDiv.appendChild(Max);\n  timeDiv.appendChild(Min);\n  dataContainer.setAttribute('class', 'align-container center');\n  titleCity.setAttribute('class', 'title');\n  ubication.setAttribute('class', 'location normal-margin');\n  tempNow.setAttribute('class', 'tempNow normal-margin');\n  feelsTemp.setAttribute('class', 'feels_like normal-margin');\n  Humidity.setAttribute('class', 'feels_like normal-margin');\n  description.setAttribute('class', 'feels_like normal-margin');\n  titleCity.textContent = `${title}`;\n  ubication.textContent = `${location}`;\n  tempNow.textContent = `${actualTemp}`;\n  feelsTemp.textContent = `Feels like: ${feelsLike}`;\n  Humidity.textContent = `Humidity: ${humidity}`;\n  description.textContent = `${condition}`;\n  timeDiv.setAttribute('class', 'flex');\n  Max.setAttribute('class', 'temp margin-right');\n  Min.setAttribute('class', 'temp');\n  Max.innerHTML = `Max<br>${tempMax}`;\n  Min.innerHTML = `Min<br>${temMin}`;\n  changebttn.addEventListener('click', change => {\n    render(img, data);\n  });\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

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