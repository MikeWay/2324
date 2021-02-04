import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  public getFlights(): Flight[] {
    return FLIGHTS;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }
}
