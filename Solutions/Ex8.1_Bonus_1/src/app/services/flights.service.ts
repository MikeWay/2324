import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Flight } from "../model/flight";
import { FLIGHTS, MYFLIGHTS } from "../model/mock-flights";


@Injectable()
export class FlightsService {

  constructor(private http: Http) { }

  public getFlights(): Observable<Flight[]> {
    let url = "http://localhost:8080/flightserver/allflights";
    let resultObservable = this.http.get(url)
                                    .catch(this.handleError);
    let flightResults = resultObservable.map(res => <Flight[]> res.json());      
    return flightResults;                              
    //return FLIGHTS;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }


  private handleError (error: Response) {
    console.error("Server Error" + error);
    return Observable.throw(error.json().body || 'Server error - is the REST server running?');
  }
}
