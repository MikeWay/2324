import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root',
})
export class Flights {
  private http = inject(HttpClient);

  public getAllFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  public getMyFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/myflights';
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  public addMyFlight(flight: Flight): Observable<number> {
    const url = 'http://localhost:8080/flightserver/myflights';
    const body = JSON.stringify([flight]);
    return this.http.post<number>(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('Http Communication Error', error.error.message);
    } else {
      console.error('Server Error', error.status, error.error);
    }
    return throwError(() => new Error('Server error - is the REST server running?'));
  }
}
