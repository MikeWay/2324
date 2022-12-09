"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopServer = exports.startServer = void 0;
const socketServer_1 = require("./socketServer");
const APIServer_1 = require("./APIServer");
/**
 * Launch the Koa based HTTP API server and the Web socket flight info service
 */
let theSocket;
let theAPI;
startServer();
function startServer() {
    theAPI = (0, APIServer_1.initAPIServer)();
    theSocket = (0, socketServer_1.initWebSocket)();
}
exports.startServer = startServer;
function stopServer() {
}
exports.stopServer = stopServer;
