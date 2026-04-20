import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { Currency } from '../model/currency';
import { Flights } from '../flights/flights';

@Injectable({
  providedIn: 'root'
})
export class ApplicationState {

  _flights = new Array<Flight>();
  _myFlights: Flight[] = new Array<Flight>();
  error = '';
  currencies: Currency[] = [
    { code: 'GBP', symbol: '£', rate: 1.0 },
    { code: 'USD', symbol: '$', rate: 0.9 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'SEK', symbol: 'kr ', rate: 12.0 }
  ];

  displayCurrency: Currency = this.currencies[1];

  constructor(private flightsService: Flights) {
    this.loadFlights();
  }

  public get flights(): Flight[] {
    return this._flights;
  }

  public get myFlights(): Flight[] {
    return this._myFlights;
  }

  addMyFlight(flight: Flight): number {
    this.myFlights.push(flight);
    return this.myFlights.length;
  }

  private loadFlights(): void {
    this.error = '';
    this.flightsService.getAllFlights().subscribe({
      next: (flights) => this._flights = flights,
      error: (e) => this.error = e.message,
      complete: () => this.error = ''
    });
  }
}
