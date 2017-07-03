import koa from 'koa';
import serve from 'koa-static';
import send from 'koa-send';
import Router from 'koa-router';
import cors from 'koa-cors';
import KoaBody from 'koa-body';
import fs from 'fs';


const Koa = require('koa');
const koaBody = new KoaBody();
const app = new Koa();


let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');
let flights = JSON.parse(flightsAsJSON);

const router = new Router();


router.get('/flightserver/flights', async ctx => {
  //ctx.body = 'Hello World';
  await send(ctx, '/data/flights.json');
});

router.post('/flightserver/flights', koaBody, async ctx => {
  let args = ctx.request.body;
  console.log("REQUEST: BODY", args);
  ctx.body = JSON.stringify(flights.slice(args.start, args.start + args.num));
});

router.get('/flightserver/numflights', async ctx => {
  //ctx.body = 'Hello World';
  ctx.body= '10';
});

router.get('/', ctx => {
     ctx.body = "REST data is served from /flightserver/flights";
});


app
  .use(cors())
  .use(router.routes());
  

console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

app.listen(8080);


//http://localhost:8080/flightserver/numflights