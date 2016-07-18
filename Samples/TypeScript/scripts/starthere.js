var flight = { "id": 11, "flightNumber": "FS1298", "origin": "LAX", "destination": "LHR", "price": 99.99 };
var FlightData = (function () {
    function FlightData(flight) {
        this.id = flight.id;
        this.flightNumber = flight.flightNumber;
        this.origin = flight.origin;
        this.destination = flight.destination;
        this.price = flight.price;
    }
    FlightData.prototype.showFlightInfo = function () {
        return this.flightNumber + " : " + " " + this.origin + " " + this.destination;
    };
    return FlightData;
}());
function getInfo() {
    return "TypeScript is really just JavaScript with a few bits added";
}
var aFlight = new FlightData(flight);
document.body.innerHTML = aFlight.showFlightInfo();
