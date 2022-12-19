import { Injectable } from '@angular/core';
import { ReplaySubject} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FlightsService } from '../flights/flights.service';
import { Account } from '../model/account';
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
  // Cache of myFlights
  myFlights: Flight[] = new Array<Flight>();

  // Subjects used to replay the data if the params have not changed
  private flightsSubject = new ReplaySubject<Flight[]>(1);
  private myFlightsSubject = new ReplaySubject<Flight[]>(1);
  private flightsCountSubject = new ReplaySubject<number>(1);

  // Observables that will be consumed by the client
  flights$: Observable<Flight[]> = this.flightsSubject.asObservable();
  flightsCount$: Observable<number> = this.flightsCountSubject.asObservable();
  myFlights$: Observable<Flight[]> = this.myFlightsSubject.asObservable();

  // Variables holding the last used values for counts, org and dest so we can fetch new data if they change
  private lastStart = 0;
  private lastCount = 0;
  private lastOrigin: string | undefined;
  private lastDestination: string | undefined;
  
  currencies: Currency[] = [{code: 'GBP', symbol: '£', rate: 1.0},{code: 'USD', symbol: '$', rate: 0.9}, {code: 'EUR', symbol: '€', rate: 0.92}, {code: 'SEK', symbol: 'kr ', rate: 12.0}];
  displayCurrency: Currency = this.currencies[0];

  constructor(private flightsService: FlightsService) { 
    // Pre-load any myflights from the server
    flightsService.getMyFlights().subscribe((flights:Flight[]) => this.myFlights=flights);
    this.loadMyFlights();
  }

  public loadFlights(start: number, count: number, origin?: string, destination?: string){
    if(start === this.lastStart && count === this .lastCount && origin === this.lastOrigin && destination === this.lastDestination){
      // If the parameters have not changed then don't do a new fetch
      return;
    }
    this.lastStart = start;
    this .lastCount = count;
    this.lastOrigin = origin;
    this.lastDestination = destination;
    this.flightsService.getChunkOfFlights(start, count, origin, destination).subscribe({
      next: (flights: Flight[]) => {
        this.flightsSubject.next(flights);
      }
    });
    this.flightsService.getNumberOfFlights(origin, destination).subscribe({
      next: count => this.flightsCountSubject.next(count)
    });

  } 

  public loadMyFlights(){
    this.flightsService.getMyFlights().subscribe({
      next: (flights: Flight[]) => {
        this.myFlights = flights;
        this.myFlightsSubject.next(flights);
      }
    });
  } 

  addMyFlight(flight: Flight): number {
    this.flightsService.addMyFlight(flight).subscribe({});
    this.myFlights.push(flight);
    return this.myFlights.length;
  }  


  // Pass thru to the flights service - only purpose s to avoid close-coupling of flightsService with components
  public getAccount(): Observable<Account> {
    return this.flightsService.getAccount();
  } 

  // Pass thru to the flights service - only purpose s to avoid close-coupling of flightsService with components
  updateAccount(account: Account): Observable<number> {
    return this.flightsService.updateAccount(account);
  }

}
