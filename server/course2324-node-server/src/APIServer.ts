import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs';
import cors from 'koa2-cors'
import send from 'koa-send';
import { processLoginAndIssueToken } from './jwt';
import bodyParser from 'koa-bodyparser';
import { Flight } from './flight';
import { initWebSocket } from './socketServer';
import { clearMyFlights, flights, myFlights } from './state';

const app = new Koa();  // The web server instance

var PUBLIC_KEY = fs.readFileSync('./security/public.key');




export function initAPIServer(): Koa {

    const router = new Router();

    // Request for a JSONWebToken - Demo only - not yet enabled in TS version
    router.post('/login', async ctx => {
        processLoginAndIssueToken(ctx);
    });

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
        console.log("GET: flights:" + ctx.URL);
        console.log('QS:' + JSON.stringify(ctx.query));
        let params = ctx.query;
        if (params.start && params.num) {
            let args: Args = {
                start: +params.start,
                num: +params.num,
                origin: params.origin as string,
                dest: params.dest as string
            }
            let filteredFlights = filterFlights(flights, args);
            ctx.body = JSON.stringify(filteredFlights);
        } else {
            ctx.body = JSON.stringify(flights.splice(0, 10));    // Default to 10 flights
        }
    });


    // router.post('/flightserver(sec)?/flights', async (ctx: Koa.Context) => {
    //     let args = ctx.request.body as Args;
    //     console.log("REQUEST: BODY", args);

    //     let filteredFlights = filterFlights(flights, args);
    //     ctx.body = JSON.stringify(filteredFlights);
    // });

    // TODO -- this probably needs to take the filter
    router.get('/flightserver(sec)?/numflights', async ctx => {
        //ctx.body = 'Hello World';
        console.log("GET: numflights");
        ctx.body = flights.length;
    });


    // Fetches the collection of 'my' flights 
    router.get('/flightserver(sec)?/myflights', async (ctx: Koa.Context) => {
        ctx.body = JSON.stringify(myFlights);
    });    

    // Adds flights to the collection of 'my' flights 
    router.post('/flightserver(sec)?/myflights', async (ctx: Koa.Context) => {
        let flights = ctx.request.body as Flight[];
        console.log(JSON.stringify(flights));
        for( let f of flights){
            myFlights.push(f);
        }
        ctx.body = JSON.stringify(myFlights.length);
    });


    // Adds flights to the collection of 'my' flights 
    router.delete('/flightserver(sec)?/myflights', async (ctx: Koa.Context) => {
        console.log('Removing all myflights');
        clearMyFlights();
        ctx.body = JSON.stringify(myFlights.length);
    });    

    router.get('/login', ctx => {
        ctx.body = `<form method='post' action='login'>
        <input name='email' placeholder='email'>
        <input name='password' placeholder='password'>
        <input type='submit'/>
        </form>`;
    });

    app
        .use(bodyParser())
        .use(cors({
            origin: '*',
            allowMethods: ['GET', 'POST', 'DELETE']
        }))
        .use(router.routes());



    console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

    app.listen(8080);

    return app;

}

function filterFlights(flights: Flight[], args: Args): Flight[] {
    return flights.filter((flight) => {
        if (args.dest) {
            if (flight.destination !== args.dest) {
                return false;
            }
        }
        if (args.origin) {
            if (flight.origin !== args.origin) {
                return false;
            }
        }
        return true;
    }).slice(args.start, args.start + args.num);
}



interface Args {
    start: number,      // Where to start searching the array
    num: number,        // Number of results to return
    origin?: string,    // Origin filter        
    dest?: string       // Destination filter
}    