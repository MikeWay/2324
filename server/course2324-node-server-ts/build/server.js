"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
// import * as jwtVal from 'koa-jwt';
// import serve from 'koa-static';
//import send from 'koa-send';
const koa_router_1 = __importDefault(require("koa-router"));
const fs_1 = __importDefault(require("fs"));
const koa_cors_1 = __importDefault(require("koa-cors"));
// import auth from 'koa-basic-auth';
// import mount from 'koa-mount';
//import { processLoginAndIssueToken } from './jwt'
const ws_1 = __importDefault(require("ws"));
const koa_send_1 = __importDefault(require("koa-send"));
const jwt_1 = require("./jwt");
// For the windows event log
// import {EventLogger} from 'node-windows';
// var log = new EventLogger('Flight Service');
/**
const WebSocket = require('ws');

 */
const app = new koa_1.default();
//const koaBody = new KoaBody();
var PUBLIC_KEY = fs_1.default.readFileSync('./security/public.key');
//
const wss = new ws_1.default.Server({ port: 8081 });
var count = 0;
let theSocket;
let airport = "";
let timerRunning = false;
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
    if (!timerRunning) {
        setInterval(sendMessage, 5000);
        timerRunning = true;
    }
});
//let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
//log.info("Starting Flight Service...");
let flightsAsJSON = fs_1.default.readFileSync('./data/flights.json', 'utf8');
//let flightsAsJSON = fs.readFileSync('C:\\Users\\mjrw\\Documents\\course2324\\server\\course2324-node-server\\data\\flights.json','utf8');
let flights = JSON.parse(flightsAsJSON);
const router = new koa_router_1.default();
// Request for a JSONWebToken - Demo only - not yet enabled in TS version
router.post('/login', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    (0, jwt_1.processLoginAndIssueToken)(ctx);
}));
app.use(function (ctx, next) {
    return next().catch((err) => {
        console.log(err.message + err.originalError);
        console.log(ctx.state.jwtOriginalError);
        console.log(JSON.stringify(ctx.state));
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                error: err.originalError ? err.originalError.message : err.message
            };
        }
        else {
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
router.get('/flightserver(sec)?/allflights', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GET: allflights");
    yield (0, koa_send_1.default)(ctx, './data/flights.json');
}));
router.get('/flightserver(sec)?/flights', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GET: flights");
    ctx.body = JSON.stringify(flights.slice(0, 10));
}));
router.post('/flightserver(sec)?/flights', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let args = ctx.request.body;
    console.log("REQUEST: BODY", args);
    ctx.body = JSON.stringify(flights.slice(args.start, args.start + args.num));
}));
router.get('/flightserver(sec)?/numflights', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    //ctx.body = 'Hello World';
    console.log("GET: numflights");
    ctx.body = flights.length;
}));
router.get('/login', ctx => {
    ctx.body = `<form method='post' action='login'>
        <input name='email' placeholder='email'>
        <input name='password' placeholder='password'>
        <input type='submit'/>
        </form>`;
});
app
    .use((0, koa_cors_1.default)())
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
var messages = new Array("All flights on time", "All flights from LHR grounded due to fog", "Yikes: an Icelandic volcano has errupted - delays expected", "Hurricane expected. US East Coast flights subject to delay", "Heavy snow in Colarado (it's not July)");
