#!/usr/bin/env node
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_send__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_send___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_send__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_cors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_basic_auth__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_basic_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_basic_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_mount__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_mount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_koa_mount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_node_windows__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_node_windows___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_node_windows__);










// For the windows event log

var log = new __WEBPACK_IMPORTED_MODULE_9_node_windows__["EventLogger"]('Flight Service');


const Koa = __webpack_require__(0);
const koaBody = new __WEBPACK_IMPORTED_MODULE_5_koa_body___default.a();
const app = new Koa();


//let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
log.info("Starting Flight Service...");
let flightsAsJSON = __WEBPACK_IMPORTED_MODULE_6_fs___default.a.readFileSync('C:\\Users\\mjrw\\Documents\\course2324\\server\\course2324-node-server\\data\\flights.json','utf8');
let flights = JSON.parse(flightsAsJSON);

const router = new __WEBPACK_IMPORTED_MODULE_3_koa_router___default.a();

// This enables authentication for all requests with a path startgin /flightserversec
//app.use(mount('/flightserversec', auth({ name: 'tobi', pass: 'ferret' })));


//router.get('flightserver(sec)?\/flights', async ctx => {
  //ctx.body = 'Hello World';
router.get('/flightserver(sec)?/allflights', async ctx => {  
  console.log("GET: allflights");
  await __WEBPACK_IMPORTED_MODULE_2_koa_send___default.a(ctx, './data/flights.json');
});

router.get('/flightserver(sec)?/flights', async ctx => {  
  console.log("GET: flights");
  ctx.body = JSON.stringify(flights.slice(0, 10));
});


router.post('/flightserver(sec)?/flights', koaBody, async ctx => {
  let args = ctx.request.body;
  console.log("REQUEST: BODY", args);
  ctx.body = JSON.stringify(flights.slice(args.start, args.start + args.num));
});

router.get('/flightserver(sec)?/numflights', async ctx => {
  //ctx.body = 'Hello World';
    console.log("GET: numflights");
  ctx.body= flights.length;
});

router.get('/', ctx => {
     ctx.body = "REST data is served from /flightserver/allflights";
});


app
  .use(__WEBPACK_IMPORTED_MODULE_4_koa_cors___default.a())
  .use(router.routes());
  

console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

app.listen(8080);


//http://localhost:8080/flightserver/numflights


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-basic-auth");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-windows");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map