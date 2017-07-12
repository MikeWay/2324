import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Flight } from "../model/flight";
import { FLIGHTS, MYFLIGHTS } from "../model/mock-flights";


@Injectable()
export class FlightsService {

  //private headers = new Headers({'Content-Type': 'application/json'});
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public getFlights(): Observable<Flight[]> {
    let url = "http://localhost:8080/flightserver/allflights";
    let resultObservable = this.http.get(url)
                                    .catch(this.handleError);
    let flightResults = resultObservable.map(res => <Flight[]> res.json());      
    return flightResults;                              
    //return FLIGHTS;
  }

  public getChunkOfFlights( start: number, num: number): Observable<Flight[]> {
    let url = "http://localhost:8080/flightserver/flights";
    let data = {start, num};
    let resultObservable = this.http.post(url, JSON.stringify(data), {headers: this.headers})
                                                                       .catch(this.handleError);
    let flightResults = resultObservable.map(res => <Flight[]> res.json());      
    return flightResults;                              
  }

  public getNumberOfFlights() : Observable<number>{
    let url = "http://localhost:8080/flightserver/numflights";
    return this.http.get(url).catch(this.handleError).map(res => <number> res.json());
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }


  private handleError (error: Response) {
    console.error("Server Error" + error);
    return Observable.throw(error.json().body || 'Server error - is the REST server running?');
  }
}
