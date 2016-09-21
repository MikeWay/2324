// TODO 1 -- Add the MYFLIGHTS array here
let MYFLIGHTS : Flight[] = [
    { "flightNumber": "FS1298", "origin": "LAX", "destination": "LHR", "price": 99.99 },
    { "flightNumber": "FS1201", "origin": "LAX", "destination": "LHR", "price": 199.99 }
];

// TODO 3 --
interface Flight {
    flightNumber: string;
    origin: string;
    destination: string;
    price: number;
}

// TODO 2 -- create the FlightInfo class here

class FlightInfo {
    // TODO get a flight
    getFlight() : Flight {
        return MYFLIGHTS[0];
    }

    getTotalPrice(): number {
        let total = 0.0;
        for (let flight of MYFLIGHTS) {
            total += flight.price;
        }
        return total;
    }
}

let flightInfo: FlightInfo = new FlightInfo();
let theFlight=flightInfo.getFlight();

// TODO - end the class before here




// TODO examine code to update the DOM
document.getElementById('number').innerHTML = theFlight.flightNumber;
document.getElementById('destination').innerHTML = theFlight.destination;
document.getElementById('price').innerHTML = theFlight.price + "";
document.getElementById('totalPrice').innerHTML = flightInfo.getTotalPrice() + "";
