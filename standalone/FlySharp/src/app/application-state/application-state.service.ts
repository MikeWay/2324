import { Injectable } from '@angular/core';
import { ReplaySubject, shareReplay } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FlightsService } from '../flights/flights.service';
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

  private flightsSubject = new ReplaySubject<Flight[]>(1);
  flights$: Observable<Flight[]> = this.flightsSubject.asObservable();

  private lastStart: number = 0;
  private lastCount: number = 0;;
  private lastOrigin: string | undefined;
  private lastDestination: string | undefined;
  
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
      next: (res: Flight[]) => this.flightsSubject.next(res)
    })
  } 

}
