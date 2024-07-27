import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor(private http: HttpClient) { }

  public getAllFlights(): Observable<Flight[]>{
    const url = "http://localhost:8080/flightserver/allflights";
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  addMyFlight(myFlight: Flight): Observable<number> {
    //throw new Error('Method not implemented.');
    const url = "http://localhost:8080/flightserver/myflights";
    return this.http.post<number>(url, JSON.stringify([myFlight]), {headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(catchError(this.handleError));;
  }

  public getMyFlights(): Observable<Flight[]>{
    const url = "http://localhost:8080/flightserver/myflights";
    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never>{
    if(error.status == 0){
      console.error(`HTTP Communication Error: ${error.error.message}` );
    } else {
      console.error(`Server Error: ${error.status} ${error.error}` );
    }
    return throwError(() => new Error('Server error - is the REST server running?'));
  }
}
