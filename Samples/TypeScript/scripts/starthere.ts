interface Flight{
  id : number;
  flightNumber : string;
  origin : string;
  destination : string;
  price : number;
}

var flight : Flight =
    {"id": 11, "flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR", "price" : 99.99};

class FlightData implements Flight {
	id : number;
	flightNumber : string;
	origin : string;
	destination : string;
	price : number;

	constructor(  flight : Flight){
		this.id = flight.id;
		this.flightNumber = flight.flightNumber;
		this.origin = flight.origin;
		this.destination = flight.destination;
		this.price = flight.price;
	}

	showFlightInfo() : string {
		return this.flightNumber + " : " + " "  + this.origin + " " +  this.destination;
	}
}

function getInfo() : string{
	return "TypeScript is really just JavaScript with a few bits added";
}
let aFlight = new FlightData(flight);
document.body.innerHTML = aFlight.showFlightInfo();
