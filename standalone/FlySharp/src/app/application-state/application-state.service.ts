import { Injectable } from '@angular/core';
import { ReplaySubject, shareReplay, throwIfEmpty } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FlightsService } from '../flights/flights.service';
import { Currency } from '../model/curency';
import { Flight } from '../model/flight';

/**
 * This class holds the application state
 * Available Flights
 * My Flights
 * Account (TODO)
 */

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  myFlights: Flight[] = new Array<Flight>();
  private flightsSubject = new ReplaySubject<Flight[]>(1);
  flights$: Observable<Flight[]> = this.flightsSubject.asObservable();
  //flightsCache!: Flight[];  // Cache of last flights received

  private lastStart: number = 0;
  private lastCount: number = 0;;
  private lastOrigin: string | undefined;
  private lastDestination: string | undefined;
  
  currencies: Currency[] = [{code: 'GBP', symbol: '£', rate: 1.0},{code: 'USD', symbol: '$', rate: 0.9}, {code: 'EUR', symbol: '€', rate: 0.92}, {code: 'SEK', symbol: 'kr ', rate: 12.0}];
  displayCurrency: Currency = this.currencies[0];

  constructor(private flightsService: FlightsService,) { }

  public loadFlights(start: number, count: number, origin?: string, destination?: string){
    if(start === this.lastStart && count === this .lastCount && origin === this.lastOrigin && destination === this.lastDestination){
      return
    }
    this.lastStart = start;
    this .lastCount = count;
    this.lastOrigin = origin;
    this.lastDestination = destination;
    this.flightsService.getChunkOfFlights(start, count, origin, destination).subscribe({
      next: (flights: Flight[]) => {
        this.flightsSubject.next(flights);
//        this.flightsCache = flights;
      }
    })
  } 

  addMyFlight(flight: Flight): number {
    // const url = 'http://localhost:8080/flightserver/myflights';
    // const resultObservable = this.http.post<number>(url, JSON.stringify(new Array<Flight>(flight)), {headers: this.headers})
    //                           .pipe(catchError(this.handleError));
    // return resultObservable;
    this.myFlights.push(flight);
    return this.myFlights.length;
  }  

  // get displayCurrency(): Currency{
  //   return this._displayCurrency;
  // }

  
  // // This setter exists purely so that if the displayCurrency changes we can notify any observers that the page should be redrawn
  // set displayCurrency(c: Currency){
  //   this._displayCurrency = c;
  //   this.flightsSubject.next(this.flightsCache);

  // }


}
