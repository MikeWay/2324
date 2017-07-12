import koa from 'koa';
import serve from 'koa-static';
import send from 'koa-send';
import Router from 'koa-router';
import cors from 'koa-cors';
import KoaBody from 'koa-body';
import fs from 'fs';
import auth from 'koa-basic-auth';
import mount from 'koa-mount';

// For the windows event log
import {EventLogger} from 'node-windows';
var log = new EventLogger('Flight Service');


const Koa = require('koa');
const koaBody = new KoaBody();
const app = new Koa();


//let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
log.info("Starting Flight Service...");
let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
//let flightsAsJSON = fs.readFileSync('C:\\Users\\mjrw\\Documents\\course2324\\server\\course2324-node-server\\data\\flights.json','utf8');
let flights = JSON.parse(flightsAsJSON);

const router = new Router();

// This enables authentication for all requests with a path startgin /flightserversec
//app.use(mount('/flightserversec', auth({ name: 'tobi', pass: 'ferret' })));


//router.get('flightserver(sec)?\/flights', async ctx => {
  //ctx.body = 'Hello World';
router.get('/flightserver(sec)?/allflights', async ctx => {  
  console.log("GET: allflights");
  await send(ctx, './data/flights.json');
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
  .use(cors())
  .use(router.routes());
  

console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

app.listen(8080);


//http://localhost:8080/flightserver/numflights
