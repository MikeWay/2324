"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccount = exports.clearAccount = exports.accountDetails = exports.clearMyFlights = exports.myFlights = exports.flights = void 0;
// The flights array
const fs_1 = __importDefault(require("fs"));
let flightsAsJSON = fs_1.default.readFileSync('./data/flights.json', 'utf8');
// The base list of flights
exports.flights = JSON.parse(flightsAsJSON);
// Flights added by the API
exports.myFlights = new Array();
function clearMyFlights() {
    exports.myFlights = new Array();
}
exports.clearMyFlights = clearMyFlights;
exports.accountDetails = {};
function clearAccount() {
    exports.accountDetails = {};
}
exports.clearAccount = clearAccount;
function updateAccount(account) {
    exports.accountDetails = account;
}
exports.updateAccount = updateAccount;
