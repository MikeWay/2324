import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root',
})
export class ApplicationState {
  _flights = new Array<Flight>();

  currencies: Currency[] = [
    { code: 'GBP', symbol: '£', rate: 1.0 },
    { code: 'USD', symbol: '$', rate: 0.9 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'SEK', symbol: 'kr ', rate: 12.0 }
  ];
  displayCurrency: Currency = this.currencies[0];

  constructor() {
    this.loadFlights();
  }

  private loadFlights() {
    this._flights = FLIGHTS;
  }

  get flights(): Flight[] {
    return this._flights;
  }

  get myFlights(): Flight[] {
    return MYFLIGHTS;
  }
}
