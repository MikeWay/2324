import Koa from 'koa';
// import * as jwtVal from 'koa-jwt';
// import serve from 'koa-static';
//import send from 'koa-send';
import Router from 'koa-router';
import fs from 'fs';
import cors from 'koa-cors'
// import auth from 'koa-basic-auth';
// import mount from 'koa-mount';
//import { processLoginAndIssueToken } from './jwt'
import WebSocket from 'ws';
import send from 'koa-send';
import { processLoginAndIssueToken } from './jwt';


// For the windows event log
// import {EventLogger} from 'node-windows';
// var log = new EventLogger('Flight Service');

/**
const WebSocket = require('ws');

 */

const app = new Koa();
//const koaBody = new KoaBody();

var PUBLIC_KEY = fs.readFileSync('./security/public.key');



//
const wss = new WebSocket.Server({ port: 8081 });
var count = 0;
let theSocket: WebSocket;
let airport = "";
let timerRunning = false;

wss.on('connection', function connection(ws) {
    theSocket = ws;
    ws.on('message', function incoming(message: string) {

        console.log('received: %s', message);
        let msgObj = JSON.parse(message);
        if (msgObj.hasOwnProperty('airport')) {
            airport = msgObj.airport;
            console.log(`Airport now: ${airport}`);
        }
    });

    ws.send(JSON.stringify('waiting for flight status...'));
    if(!timerRunning){
        setInterval(sendMessage, 5000);
        timerRunning = true;
    }
});



//let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
//log.info("Starting Flight Service...");
let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
//let flightsAsJSON = fs.readFileSync('C:\\Users\\mjrw\\Documents\\course2324\\server\\course2324-node-server\\data\\flights.json','utf8');
let flights = JSON.parse(flightsAsJSON);

const router = new Router();

// Request for a JSONWebToken - Demo only - not yet enabled in TS version
router.post('/login', async ctx => {
    processLoginAndIssueToken(ctx);
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
    await send(ctx, './data/flights.json');
});

router.get('/flightserver(sec)?/flights', async ctx => {
    console.log("GET: flights");
    ctx.body = JSON.stringify(flights.slice(0, 10));
});


router.post('/flightserver(sec)?/flights', async (ctx:Koa.Context) => {
    let args = ctx.request.body as Args;
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
    .use(cors())
    .use(router.routes());



console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

app.listen(8080);




//http://localhost:8080/flightserver/numflights








function sendMessage() {
    var message = airport + ':' + messages[getRandomInt(messages.length - 1)];
    theSocket.send(JSON.stringify(message));
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

var messages = new Array(
    "All flights on time",
    "All flights from LHR grounded due to fog",
    "Yikes: an Icelandic volcano has errupted - delays expected",
    "Hurricane expected. US East Coast flights subject to delay",
    "Heavy snow in Colarado (it's not July)");



interface Args {
    start: number,
    num: number
}    