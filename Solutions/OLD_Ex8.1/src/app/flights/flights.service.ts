import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import { throwError, Observable } from 'rxjs';

@Injectable()
export class FlightsService {

  constructor(private http: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';

    return this.http.get<Flight[]>(url).pipe(catchError(this.handleError));
  }


  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

  private handleError (error: HttpErrorResponse )  {
    if(error.error instanceof ErrorEvent){
      // Client error
      console.error('Http communication error:', error.error.message )
    } else {
      // Server error
      console.error(`Server error: ${error.status}. Message body: ${error.message}`)
    }
    return throwError( 'Server error - is the REST server running?');
  }

}
