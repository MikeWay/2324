import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';
import { Currency } from '../model/currency';
import { FlightsService } from '../flights/flights.service';

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
  error = '';

  constructor(private flightsService: FlightsService) {
    this.loadFlights();
    this.loadMyFlights();
  }
  public get flights(): Flight[] {
    return this._flights;
  }

  public get myFlights(): Flight[] {
    return this._myFlights;
  }  

  addMyFlight(flight: Flight): number {
    this.myFlights.push(flight);
    this.flightsService.addMyFlight(flight).subscribe({});
    return this.myFlights.length;
  }   

  private loadFlights(){
    this.error='';
    this.flightsService.getAllFlights().subscribe(
      {
        next: (flights) => this._flights = flights,
        error: (err) => this.error = err,
        complete: () => this.error = ''
      }
    )
  }  

  private loadMyFlights(){
    this.error='';
    this.flightsService.getMyFlights().subscribe(
      {
        next: (flights) => this._myFlights = flights,
        error: (err) => this.error = err,
        complete: () => this.error = ''
      }
    )
  }    
}
