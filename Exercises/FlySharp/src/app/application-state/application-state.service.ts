import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  _flights = FLIGHTS;

  public getFlights(): Flight[]{
    return this._flights;
  }

  get myFlights() : Flight[]{
    return MYFLIGHTS;
}
}
