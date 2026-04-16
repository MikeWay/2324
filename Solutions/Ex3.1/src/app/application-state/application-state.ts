import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

@Injectable({
  providedIn: 'root',
})
export class ApplicationState {
  _flights = FLIGHTS;

  get flights(): Flight[] {
    return this._flights;
  }

  get myFlights(): Flight[] {
    return MYFLIGHTS;
  }
}
