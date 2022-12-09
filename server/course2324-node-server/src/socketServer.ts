import WebSocket from 'ws';


const wss = new WebSocket.Server({ port: 8081 });
var count = 0;
let theSocket: WebSocket;

let airport = "";
let timerRunning = false;

export function initWebSocket(): WebSocket {

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
        if (!timerRunning) {
            setInterval(sendMessage, 5000);
            timerRunning = true;
        }
    });

    return theSocket;
}

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