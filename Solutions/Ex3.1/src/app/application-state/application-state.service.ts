import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  _flights = FLIGHTS;

  public get flights() : Flight[]{
    return this._flights;
 }

  public get myFlights(): Flight[] {
    return MYFLIGHTS;
  }  
}
