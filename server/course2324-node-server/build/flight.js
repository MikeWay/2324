"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
class Flight {
    constructor(id, flightNumber, origin, destination, departDay, departTime, arriveDay, arriveTime, price) {
        this.id = id;
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departDay = departDay;
        this.departTime = departTime;
        this.arriveDay = arriveDay;
        this.arriveTime = arriveTime;
        this.price = price;
    }
}
exports.Flight = Flight;
