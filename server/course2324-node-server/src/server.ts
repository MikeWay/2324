import Koa from 'koa';
// import * as jwtVal from 'koa-jwt';
// import serve from 'koa-static';
//import send from 'koa-send';
import Router from 'koa-router';
import fs from 'fs';
import cors from 'koa2-cors'
// import auth from 'koa-basic-auth';
// import mount from 'koa-mount';
//import { processLoginAndIssueToken } from './jwt'
// import WebSocket from 'ws';
import send from 'koa-send';
import { processLoginAndIssueToken } from './jwt';
import bodyParser from 'koa-bodyparser';
import { Flight } from './flight';
import { initWebSocket } from './socketServer';
import { initAPIServer } from './APIServer';
import WebSocket from 'ws';

/**
 * Launch the Koa based HTTP API server and the Web socket flight info service
 */

 let theSocket: WebSocket
 let theAPI: Koa;

 startServer();

export function startServer(){
    theAPI = initAPIServer();    
    theSocket = initWebSocket();
}

export function stopServer(){

}




