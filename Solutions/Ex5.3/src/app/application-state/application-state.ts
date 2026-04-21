import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { Currency } from '../model/currency';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

@Injectable({
  providedIn: 'root',
})
export class ApplicationState {
  private _flights: Flight[] = [];
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

  loadFlights() {
    this._flights = FLIGHTS;
  }

  get flights(): Flight[] {
    return this._flights;
  }

  get myFlights(): Flight[] {
    return MYFLIGHTS;
  }


}
