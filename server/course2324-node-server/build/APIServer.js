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
exports.initAPIServer = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const fs_1 = __importDefault(require("fs"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_send_1 = __importDefault(require("koa-send"));
const jwt_1 = require("./jwt");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const state_1 = require("./state");
const app = new koa_1.default(); // The web server instance
var PUBLIC_KEY = fs_1.default.readFileSync('./security/public.key');
function initAPIServer() {
    const router = new koa_router_1.default();
    // Request for a JSONWebToken - Demo only - not yet enabled in TS version
    router.post('/login', (ctx) => __awaiter(this, void 0, void 0, function* () {
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
    router.get('/flightserver(sec)?/allflights', (ctx) => __awaiter(this, void 0, void 0, function* () {
        console.log("GET: allflights");
        yield (0, koa_send_1.default)(ctx, './data/flights.json');
    }));
    router.get('/flightserver(sec)?/flights', (ctx) => __awaiter(this, void 0, void 0, function* () {
        console.log("GET: flights:" + ctx.URL);
        console.log('QS:' + JSON.stringify(ctx.query));
        let params = ctx.query;
        if (params.start && params.num) {
            let args = {
                start: +params.start,
                num: +params.num,
                origin: params.origin,
                dest: params.dest
            };
            let filteredFlights = filterFlights(state_1.flights, args);
            ctx.body = JSON.stringify(filteredFlights);
        }
        else {
            ctx.body = JSON.stringify(state_1.flights.splice(0, 10)); // Default to 10 flights
        }
    }));
    // router.post('/flightserver(sec)?/flights', async (ctx: Koa.Context) => {
    //     let args = ctx.request.body as Args;
    //     console.log("REQUEST: BODY", args);
    //     let filteredFlights = filterFlights(flights, args);
    //     ctx.body = JSON.stringify(filteredFlights);
    // });
    // TODO -- this probably needs to take the filter
    router.get('/flightserver(sec)?/numflights', (ctx) => __awaiter(this, void 0, void 0, function* () {
        //ctx.body = 'Hello World';
        console.log("GET: numflights");
        ctx.body = state_1.flights.length;
    }));
    // Fetches the collection of 'my' flights 
    router.get('/flightserver(sec)?/myflights', (ctx) => __awaiter(this, void 0, void 0, function* () {
        ctx.body = JSON.stringify(state_1.myFlights);
    }));
    // Adds flights to the collection of 'my' flights 
    router.post('/flightserver(sec)?/myflights', (ctx) => __awaiter(this, void 0, void 0, function* () {
        let flights = ctx.request.body;
        console.log(JSON.stringify(flights));
        for (let f of flights) {
            state_1.myFlights.push(f);
        }
        ctx.body = JSON.stringify(state_1.myFlights.length);
    }));
    // Adds flights to the collection of 'my' flights 
    router.delete('/flightserver(sec)?/myflights', (ctx) => __awaiter(this, void 0, void 0, function* () {
        console.log('Removing all myflights');
        (0, state_1.clearMyFlights)();
        ctx.body = JSON.stringify(state_1.myFlights.length);
    }));
    router.get('/login', ctx => {
        ctx.body = `<form method='post' action='login'>
        <input name='email' placeholder='email'>
        <input name='password' placeholder='password'>
        <input type='submit'/>
        </form>`;
    });
    app
        .use((0, koa_bodyparser_1.default)())
        .use((0, koa2_cors_1.default)({
        origin: '*',
        allowMethods: ['GET', 'POST', 'DELETE']
    }))
        .use(router.routes());
    console.log("Flights server active. Waiting on http://localhost:8080/flightserver/flights");
    app.listen(8080);
    return app;
}
exports.initAPIServer = initAPIServer;
function filterFlights(flights, args) {
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
