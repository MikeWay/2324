import { Injectable } from '@angular/core';
import { Currency } from '../model/currency';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

@Injectable(
{
  providedIn: 'root'
})

export class ApplicationStateService {

  _myFlights: Flight[] = new Array<Flight>();

  currencies: Currency[] = [
    { code: 'GBP', symbol: '£', rate: 1.0 },
    { code: 'USD', symbol: '$', rate: 0.9 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'SEK', symbol: 'kr ', rate: 12.0 }
  ];

  displayCurrency: Currency = this.currencies[1];

  _flights = FLIGHTS;

  constructor(){
    this.myFlights.push(...MYFLIGHTS);
  }

  public get flights(): Flight[] {
    return this._flights;
  }

  public getFlights(): Flight[]{
    return this._flights;
  }

  public get myFlights(): Flight[] {
    return this._myFlights;
  }

  addMyFlight(flight: Flight): number {
    this.myFlights.push(flight);
    return this.myFlights.length;
  }   

  public loadFlights(start: number, count: number, origin?: string, destination?: string) {
    this._flights = FLIGHTS;
    if (origin) {
      this._flights = FLIGHTS.filter((flight: Flight) => {
        return flight.origin.startsWith(origin as string);
      });
    }
    if (destination) {
      this._flights = this._flights.filter((flight: Flight) => {
        return flight.destination.startsWith(destination as string);
      });
    }
  }
}
