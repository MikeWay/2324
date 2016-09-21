// TODO 1 -- Add the MYFLIGHTS array here
var MYFLIGHTS = [
    { "flightNumber": "FS1298", "origin": "LAX", "destination": "LHR", "price": 99.99 },
    { "flightNumber": "FS1201", "origin": "LAX", "destination": "LHR", "price": 199.99 }
];
// TODO 2 -- create the FlightInfo class here
var FlightInfo = (function () {
    function FlightInfo() {
    }
    // TODO get a flight
    FlightInfo.prototype.getFlight = function () {
        return MYFLIGHTS[0];
    };
    FlightInfo.prototype.getTotalPrice = function () {
        var total = 0.0;
        for (var _i = 0; _i < MYFLIGHTS.length; _i++) {
            var flight = MYFLIGHTS[_i];
            total += flight.price;
        }
        return total;
    };
    return FlightInfo;
})();
var flightInfo = new FlightInfo();
var theFlight = flightInfo.getFlight();
// TODO - end the class before here
// TODO examine code to update the DOM
document.getElementById('number').innerHTML = theFlight.flightNumber;
document.getElementById('destination').innerHTML = theFlight.destination;
document.getElementById('price').innerHTML = theFlight.price + "";
document.getElementById('totalPrice').innerHTML = flightInfo.getTotalPrice() + "";
