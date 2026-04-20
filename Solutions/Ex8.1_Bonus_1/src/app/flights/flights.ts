import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root',
})
export class Flights {
  constructor(private http: HttpClient) {}

  public getAllFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('Http communication error:', error.error.message);
    } else {
      console.error(`Server error: , ${error.status}. Message body: ${error.message}`);
    }
    return throwError(() => Error('Server error - is the REST server running?'));
  }
}
