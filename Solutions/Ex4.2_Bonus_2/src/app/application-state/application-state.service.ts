import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  flights = FLIGHTS;

  public getFlights(): Flight[] {
    return this.flights;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }

  public loadFlights(start: number, count: number, origin?: string, destination?: string){
    this.flights = FLIGHTS;
    if (origin) {
      this.flights = FLIGHTS.filter((flight: Flight) => {
        return flight.origin.startsWith(origin as string);
      });
    }
    if (destination) {
      this.flights = this.flights.filter((flight: Flight) => {
        return flight.destination.startsWith(destination as string);
      });
    }   
  }  
}
