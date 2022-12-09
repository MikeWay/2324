// The flights array
import fs from 'fs';
import { Flight } from './flight';


let flightsAsJSON = fs.readFileSync('./data/flights.json', 'utf8');

// The base list of flights
export const flights: Flight[] = JSON.parse(flightsAsJSON);

// Flights added by the API
export let myFlights: Flight[] = new Array<Flight>();

export function clearMyFlights(){
    myFlights  = new Array<Flight>();
}