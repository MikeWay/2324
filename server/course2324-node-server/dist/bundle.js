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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_jwt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_static__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_send__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_send___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_send__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_cors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_body__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_basic_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_basic_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_koa_basic_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_koa_mount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_koa_mount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_koa_mount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jwt__ = __webpack_require__(11);













// For the windows event log
// import {EventLogger} from 'node-windows';
// var log = new EventLogger('Flight Service');

const WebSocket = __webpack_require__(13);
const Koa = __webpack_require__(0);
const koaBody = new __WEBPACK_IMPORTED_MODULE_6_koa_body___default.a();
const app = new Koa();


var PUBLIC_KEY = __WEBPACK_IMPORTED_MODULE_7_fs___default.a.readFileSync('./security/public.key');



//
const wss = new WebSocket.Server({ port: 8081 });
var count = 0;
var theSocket;
let airport = "";

wss.on('connection', function connection(ws) {
    theSocket = ws;
    ws.on('message', function incoming(message) {

        console.log('received: %s', message);
        let msgObj = JSON.parse(message);
        if (msgObj.hasOwnProperty('airport')) {
            airport = msgObj.airport;
            console.log(`Airport now: ${airport}`);
        }
    });

    ws.send(JSON.stringify('waiting for flight status...'));
    setInterval(sendMessage, 5000);
});

//let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
//log.info("Starting Flight Service...");
let flightsAsJSON = __WEBPACK_IMPORTED_MODULE_7_fs___default.a.readFileSync('./data/flights.json', 'utf8');
//let flightsAsJSON = fs.readFileSync('C:\\Users\\mjrw\\Documents\\course2324\\server\\course2324-node-server\\data\\flights.json','utf8');
let flights = JSON.parse(flightsAsJSON);

const router = new __WEBPACK_IMPORTED_MODULE_4_koa_router___default.a();

// Request for a JSONWebToken
router.post('/login', koaBody, async ctx => {
    Object(__WEBPACK_IMPORTED_MODULE_10__jwt__["a" /* processLoginAndIssueToken */])(ctx);
});

app.use(function(ctx, next) {
    return next().catch((err) => {
        console.log(err.message + err.originalError);
        console.log(ctx.state.jwtOriginalError);
        console.log(JSON.stringify(ctx.state));
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                error: err.originalError ? err.originalError.message : err.message
            };
        } else {
            throw err;
        }
    });
});

router.get('/', ctx => {
    ctx.body = "REST data is served from /flightserver/allflights<br/>JWT Tokens are issued from /login";
});

// Need to make sure that jwtValidation is only applied for paths which are not login AND always allow OPTIONS -- for the pre-flight 

// TODO - remove the comments from the line below to require tokens
// app.use(jwtVal({ secret: PUBLIC_KEY }).unless({ path: [/^\/login/], method: 'OPTIONS' }));

router.get('/flightserver(sec)?/allflights', async ctx => {
    console.log("GET: allflights");
    await __WEBPACK_IMPORTED_MODULE_3_koa_send___default()(ctx, './data/flights.json');
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
    ctx.body = flights.length;
});




router.get('/login', ctx => {
    ctx.body = `<form method='post' action='login'>
        <input name='email' placeholder='email'>
        <input name='password' placeholder='password'>
        <input type='submit'/>
        </form>`;
});



app
    .use(__WEBPACK_IMPORTED_MODULE_5_koa_cors___default()())
    .use(router.routes());



console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

app.listen(8080);




//http://localhost:8080/flightserver/numflights








function sendMessage() {
    var message = airport + ':' + messages[getRandomInt(messages.length - 1)];
    theSocket.send(JSON.stringify(message));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var messages = new Array(
    "All flights on time",
    "All flights from LHR grounded due to fog",
    "Yikes: an Icelandic volcano has errupted - delays expected",
    "Hurricane expected. US East Coast flights subject to delay",
    "Heavy snow in Colarado (it's not July)");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-jwt");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-basic-auth");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = processLoginAndIssueToken;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);




const RSA_PRIVATE_KEY = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync('./security/private.key');

function processLoginAndIssueToken(ctx) {
    const email = ctx.request.body.email;
    const password = ctx.request.body.password;

    if (validateEmailAndPassword(email, password)) {
        const userId = "UID: 123456789"; /* IN a full implementation we would call something like: findUserIdForEmail(email);*/

        const jwtBearerToken = __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__["sign"]({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: userId
        });

        ctx.body = JSON.stringify({ token: jwtBearerToken, expiresIn: 120 });
    } else {
        // send status 401 Unauthorized
        ctx.status = 401;
    }
}

function validateEmailAndPassword(email, password) {
    if (email === 'user@learningtree.com' && password === 'password')
        return true;
    return false
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map