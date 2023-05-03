import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  /**
   * Loads all the flights from the server. Potentially slow over poor link and/or large number of flights
   * @returns An Observable<Flight[]> providing access to all of the loaded flights
   */
  public getAllFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';

    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

/**
 * Loads a block of flights
 * @param start Index of 1st flight to load
 * @param num The number of flights to load
 * @param org Optional origin filter
 * @param dest Optional destination filter
 * @returns An Observable containing the loaded array of flights
 */

  public getFlights( start: number, num: number, org?: string, dest?: string): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/flights';
    
    let params = new HttpParams()
      .set('start', start)
      .set('num', num);
    if(org) params = params.set('origin', org);
    if(dest) params = params.set('dest', dest);
    console.log('QUERY' + JSON.stringify(params) + ' ' + params.toString());
    const resultObservable = this.http.get<Flight[]>(url, {params: params})
                              .pipe(catchError(this.handleError));
    return resultObservable;
  }


  public getNumberOfFlights(origin?: string, destination?: string): Observable<number> {
    let params = new HttpParams();
    if(origin) params = params.set('origin', origin);
    if(destination) params = params.set('dest', destination);
    const url = 'http://localhost:8080/flightserver/numflights';
    return this.http.get<number>(url, {params: params}).pipe(catchError(this.handleError));
  }


  public getMyFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/myflights';
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  addMyFlight(flight: Flight): Observable<number> {
    const url = 'http://localhost:8080/flightserver/myflights';
    const resultObservable = this.http.post<number>(url, JSON.stringify(new Array<Flight>(flight)), {headers: this.headers})
                              .pipe(catchError(this.handleError));
    return resultObservable;
  }

  public getAccount(): Observable<Account> {
    const url = 'http://localhost:8080/flightserver/account';
    return this.http.get<Account>(url).pipe(catchError(this.handleError));
  } 
   
  updateAccount(account: Account): Observable<number> {
    const url = 'http://localhost:8080/flightserver/account';
    const resultObservable = this.http.put<number>(url, JSON.stringify(account), {headers: this.headers})
                              .pipe(catchError(this.handleError));
    return resultObservable;
  }

  private handleError(error: HttpErrorResponse ): Observable<never>  {
    if (error.error instanceof ErrorEvent) {
      // Client error
      console.error('Http communication error:', error.error.message );
    } else {
      // Server error
      console.error(`Server error: ${error.status}. Message body: ${error.message}`);
    }
    return throwError( 'Server error - is the REST server running?');
  }



}
