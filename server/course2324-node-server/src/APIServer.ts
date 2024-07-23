import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs';
import cors from 'koa2-cors'
import send from 'koa-send';
import { processLoginAndIssueToken } from './jwt';
import bodyParser from 'koa-bodyparser';
import { Flight } from './flight';
import { initWebSocket } from './socketServer';
import { accountDetails, clearAccount, clearMyFlights, flights, myFlights, updateAccount } from './state';
import { Account } from './Account';

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


    configureFlightListHandlers(router);


    // Fetches the collection of 'my' flights 
    configureMyFlightsHanders(router);

    configureAccountHandlers(router);

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
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE']
        }))
        .use(router.routes());



    console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");

    app.listen(8080);

    return app;

}

function configureFlightListHandlers(router: Router<any, {}>) {

    router.get('/flightserver(sec)?/allflightsSlow', async (ctx) => {
        for(let flight of flights){
            ctx.body+=JSON.stringify(flight);
            await sleep(10);    // Even though we sleep for 10mS per flight, nothing is output until the response is complete
        };     
    });

    router.get('/flightserver(sec)?/allflights', async (ctx) => {
        //console.log("GET: allflights");
        await send(ctx, './data/flights.json');
    });

    router.get('/flightserver(sec)?/flights', async (ctx) => {
        console.log("GET: flights:" + ctx.URL);
        console.log('QS:' + JSON.stringify(ctx.query));
        let params = ctx.query;
        if (params.start && params.num) {
            let args: Args = {
                start: +params.start,
                num: +params.num,
                origin: params.origin as string,
                dest: params.dest as string
            };
            let filteredFlights = filterFlights(flights, args);
            ctx.body = JSON.stringify(filteredFlights);
        } else {
            ctx.body = JSON.stringify(flights.slice(0, 10)); // Default to 10 flights
        }
    });


    router.get('/flightserver(sec)?/numflights', async (ctx) => {
        let params = ctx.query;
        if (params.origin || params.dest) {
            let args  = {
                origin: params.origin as string,
                dest: params.dest as string
            };
            let count = countFlights(flights, args);
            ctx.body = count;
        } else {
            console.log(flights.length);
            ctx.body = flights.length;
        }
    });
}

function configureMyFlightsHanders(router: Router<any, {}>) {
    router.get('/flightserver(sec)?/myflights', async (ctx: Koa.Context) => {
        ctx.body = JSON.stringify(myFlights);
    });

    // Adds flights to the collection of 'my' flights 
    router.post('/flightserver(sec)?/myflights', async (ctx: Koa.Context) => {
        let flights = ctx.request.body as Flight[];
        //console.log(JSON.stringify(flights));
        for (let f of flights) {
            myFlights.push(f);
        }
        ctx.body = JSON.stringify(myFlights.length);
    });


    // Deletes all flights from the collection of 'my' flights 
    router.delete('/flightserver(sec)?/myflights', async (ctx: Koa.Context) => {
        //console.log('Removing all myflights');
        clearMyFlights();
        ctx.body = JSON.stringify(myFlights.length);
    });
}

function configureAccountHandlers(router: Router){
        // Fetches the current account details
        router.get('/flightserver(sec)?/account', async (ctx: Koa.Context) => {
            ctx.body = JSON.stringify(accountDetails);
        });    
    
        // Sets the current values for accountDetails
        router.put('/flightserver(sec)?/account', async (ctx: Koa.Context) => {
            let account = ctx.request.body as Account;
            console.log(`Account added: ${account}`);
            updateAccount(account);
            ctx.body = JSON.stringify(true);
        });
    
    
        // Resets the account details
        router.delete('/flightserver(sec)?/account', async (ctx: Koa.Context) => {
            clearAccount();
            ctx.body = JSON.stringify(myFlights.length);
        });    
}

function countFlights(flights: Flight[], args: {origin: string, dest: string}): number {
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
    }).length
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

function sleep(delay: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }


interface Args {
    start: number,      // Where to start searching the array
    num: number,        // Number of results to return
    origin?: string,    // Origin filter        
    dest?: string       // Destination filter
}    