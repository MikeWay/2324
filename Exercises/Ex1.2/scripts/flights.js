// var MYFLIGHTS: Flight[] = [
//     {"id": 11, "flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR", "departDay" : "Thursday",
//      departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99}];
// TODO 1 - add a flight to this declaration
var MYFLIGHTS = [
    { "flightNumber": "FS1298", "origin": "LAX", "destination": "LHR", "price": "99.99" },
    { "flightNumber": "FS1201", "origin": "LAX", "destination": "LHR", "price": "199.99" },
];
// TODO 2 -- create this class
var FlightInfo = (function () {
    function FlightInfo() {
    }
    FlightInfo.prototype.getFlight = function () {
        return MYFLIGHTS[0];
    };
    FlightInfo.prototype.getTotalPrice = function () {
        var total = 0.0;
        for (var _i = 0, MYFLIGHTS_1 = MYFLIGHTS; _i < MYFLIGHTS_1.length; _i++) {
            var flight = MYFLIGHTS_1[_i];
            total += flight.price;
        }
        return total;
    };
    return FlightInfo;
}());
// TODO get a flight
var flightInfo = new FlightInfo();
var theFlight = flightInfo.getFlight();
// TODO examine code to update the DOM
document.getElementById('number').innerHTML = theFlight.flightNumber;
document.getElementById('destination').innerHTML = theFlight.destination;
document.getElementById('price').innerHTML = theFlight.price;
document.getElementById('totalPrice').innerHTML = flightInfo.getTotalPrice();
