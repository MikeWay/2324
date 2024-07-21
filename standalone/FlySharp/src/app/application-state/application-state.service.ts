import { Injectable } from '@angular/core';
import { ReplaySubject, switchMap, take } from 'rxjs';
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
  // Cache of available flights
  flightCache: Flight[] = new Array<Flight>();

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

  currencies: Currency[] = [{ code: 'GBP', symbol: '£', rate: 1.0 }, { code: 'USD', symbol: '$', rate: 0.9 }, { code: 'EUR', symbol: '€', rate: 0.92 }, { code: 'SEK', symbol: 'kr ', rate: 12.0 }];
  displayCurrency: Currency = this.currencies[0];

  constructor(private flightsService: FlightsService) {
    // Pre-load any myflights from the server
    flightsService.getMyFlights().subscribe((flights: Flight[]) => this.myFlights = flights);
    this.loadFlights();
    this.loadMyFlights();
  }

  /*
    Revised strategy: loadFlights triggers loading of flights from back end.
    FlightsService then loads in batches of 10 into AppState service
    AppService holds the values in a ReplaySubject
    Filtering takes place client side using Observable- Filter

    ! Origin and Dest are never supplied to this method !
   */
  private loadFlights(origin?: string, destination?: string) {
    console.log("Load all flights");
    this.flightsService.getNumberOfFlights(origin, destination).pipe(
      take(1),
      switchMap((totalFlightCount: number) => {
        console.log(`There are ${totalFlightCount} flights available`);
        const start = 0;
        const count = 10;
        this.getFlights(start, count, totalFlightCount, origin, destination);
        return this.flights$;
      })).subscribe();
  }
  /**
   * Recursively fetches flights from the FlightService (which implements HTTP comms)
   * The flights are collected into a cache (this.flightsCache)
   * Each time a set of flights is received into the cache the entire cache is pushed into an Observable Subject
   * called this.flightsSubject this in turn is published as an Observable called flights$
   * @param start 
   * @param count 
   * @param totalFlightCount 
   * @param origin 
   * @param destination 
   */
  private getFlights(start: number, count: number, totalFlightCount: number, origin?: string, destination?: string) {
    this.flightsService.getFlights(start, count, origin, destination).subscribe({
      next: (flights: Flight[]) => {
        totalFlightCount = totalFlightCount - flights.length;
        console.log(`Pushing flight (cache now ${this.flightCache.length})`);
        flights.forEach(flight => this.flightCache.push(flight));
        if (flights.length > 0) {
          this.getFlights(start + count, count, totalFlightCount, origin, destination);
        }
        console.log(`Calling next() on flightsSubject cache size = ${this.flightCache.length}`);
        this.flightsSubject.next(this.flightCache);
      }
    });
  }

  // get flights$() {
  //   //return of(this.flightCache.filter((flight) => flight.origin === 'LHR'));
  //   return this._flights$;
  // }

  public loadMyFlights() {
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

  /**
   * Creates a new observable from the current content of the flight cache
   */
  // get flights$(): Observable<Flight[]>{
  //   console.log(`Getter for flight$ (${this.flightCache.length})`);
  //   return of(this.flightCache);
  // }
}
