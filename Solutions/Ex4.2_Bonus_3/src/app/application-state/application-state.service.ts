import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  _flights = new Array<Flight>();

  public getFlights(): Flight[] {
    return this._flights;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }  

	
  public loadFlights(start: number, count: number, origin?: string, destination?: string){

    this._flights = FLIGHTS; // Simulate load from Web service
    if (origin) {
      this._flights = this._flights.filter((flight: Flight) => {
          return flight.origin.startsWith(origin as string);
      });
    }
    if (destination) {
      this._flights = this._flights.filter((flight: Flight) => {
          return flight.destination.startsWith(destination as string);
      });
    }    
  }
}
