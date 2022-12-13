import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  public getFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';

    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  // @Deprecated!
  // public getChunkOfFlightsUsingPost( start: number, num: number, org?: string, dest?: string): Observable<Flight[]> {
  //   const url = 'http://localhost:8080/flightserver/flights';
  //   const data = {start, num};
  //   const resultObservable = this.http.post<Flight[]>(url, JSON.stringify(data), {headers: this.headers})
  //                             .pipe(catchError(this.handleError));
  //   return resultObservable;
  // }


  public getChunkOfFlights( start: number, num: number, org?: string, dest?: string): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/flights';
    
    let params = new HttpParams()
      .set('start', start)
      .set('num', num);
    if(org) params = params.set('origin', org);
    if(dest) params = params.set('dest', dest)
    console.log('QUERY' + JSON.stringify(params) + ' ' + params.toString());
    const resultObservable = this.http.get<Flight[]>(url, {params: params})
                              .pipe(catchError(this.handleError));
    return resultObservable;
  }


  public getNumberOfFlights(): Observable<number> {
    const url = 'http://localhost:8080/flightserver/numflights';
    return this.http.get<number>(url).pipe(catchError(this.handleError));
  }


  public getMyFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/myflights';
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  addMyFlight(flight: Flight) {
    const url = 'http://localhost:8080/flightserver/myflights';
    const resultObservable = this.http.post<Flight[]>(url, JSON.stringify(new Array<Flight>(flight)), {headers: this.headers})
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
