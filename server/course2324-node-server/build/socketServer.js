"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebSocket = void 0;
const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 8081 });
var count = 0;
let theSocket;
let airport = "";
let timerRunning = false;
function initWebSocket() {
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
    return theSocket;
}
exports.initWebSocket = initWebSocket;
function sendMessage() {
    var message = airport + ':' + messages[getRandomInt(messages.length - 1)];
    theSocket.send(JSON.stringify(message));
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var messages = new Array("All flights on time", "All flights from LHR grounded due to fog", "Yikes: an Icelandic volcano has errupted - delays expected", "Hurricane expected. US East Coast flights subject to delay", "Heavy snow in Colarado (it's not July)");
