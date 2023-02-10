import { Injectable } from '@angular/core';
import { Currency } from 'currency';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

@Injectable(
{
  providedIn: null
})

export class ApplicationStateService {

  currencies: Currency[] = [
    { code: 'GBP', symbol: '£', rate: 1.0 },
    { code: 'USD', symbol: '$', rate: 0.9 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'SEK', symbol: 'kr ', rate: 12.0 }
  ];

  displayCurrency: Currency = this.currencies[1];

  flights = FLIGHTS;

  public getFlights(): Flight[] {
    return this.flights;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }

  public loadFlights(start: number, count: number, origin?: string, destination?: string) {
    this.flights = FLIGHTS;
    if (origin) {
      this.flights = FLIGHTS.filter((flight: Flight) => {
        return flight.origin.startsWith(origin as string);
      });
    }
    if (destination) {
      this.flights = this.flights.filter((flight: Flight) => {
        return flight.destination.startsWith(destination as string);
      });
    }
  }
}
