import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  _flights = new Array<Flight>();
  _myFlights: Flight[] = new Array<Flight>();
  currencies: Currency[] = [
    { code: 'GBP', symbol: '£', rate: 1.0 },
    { code: 'USD', symbol: '$', rate: 0.9 },
    { code: 'EUR', symbol: '€', rate: 0.92 },  
    { code: 'SEK', symbol: 'kr ', rate: 12.0 }
  ];
  
  displayCurrency: Currency = this.currencies[1];  

  constructor() {
    this.loadFlights();
  }
  public get flights(): Flight[] {
    return this._flights;
  }

  public get myFlights(): Flight[] {
    return MYFLIGHTS;
  }  

  addMyFlight(flight: Flight): number {
    this.myFlights.push(flight);
    return this.myFlights.length;
  }   

  private loadFlights(){
    this._flights = FLIGHTS; // Simulate load from Web service
  }  
}
