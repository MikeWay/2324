import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {
  private _flights = FLIGHTS;

  getFlights(): Flight[] {
    return this._flights;
  }

  get myFlights(): Flight[] {
    return MYFLIGHTS;
  }
}
