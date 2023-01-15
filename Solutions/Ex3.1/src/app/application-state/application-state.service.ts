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
}
