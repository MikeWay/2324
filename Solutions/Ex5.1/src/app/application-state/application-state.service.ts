import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  _flights = new Array<Flight>();

  constructor() {
    this.loadFlights();
  }
  public get flights(): Flight[] {
    return this._flights;
  }

  public get myFlights(): Flight[] {
    return MYFLIGHTS;
  }  

  private loadFlights(){
    this._flights = FLIGHTS; // Simulate load from Web service
  }
}
