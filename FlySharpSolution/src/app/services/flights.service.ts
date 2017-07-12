import { Injectable } from '@angular/core';
import {Flight} from "../model/flight";
import {FLIGHTS, MYFLIGHTS} from "../model/mock-flights";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class FlightsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }

  public getFlights(): Observable<Flight[]> {
    let url = "http://localhost:8080/flightserver/allflights";
    let resultObservable = this.http.get(url)
                                    .catch(this.handleError);
    let flightResults = resultObservable.map(res => <Flight[]> res.json());      
    return flightResults;                              
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

/**
 * An alternative version of the getFlights method which communicates with an endpoint which requires basic authentication
 */
  public getFlightsAuthenticated() : Observable<Flight[]>{
    // In a practical example, the user name and password should be requested from the user or released in some other way
    let userName="user1";
    let password="secret1";
    // Create a Headers object and add the credentials to is as a "Basic" header
    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(userName + ":" + password));
    let options = new RequestOptions({ headers: headers });
    let url = "http://localhost:8080/flightserver/flightssec";
    //let url = "http://localhost:8080/flightssec"; // URL for testing against server running from Eclipse
    let resultObservable = this.http.get(url, options).catch(this.handleError);
    let flightResults = resultObservable.map(res => <Flight[]> res.json());
    return flightResults;
  }

  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

  // private handleError (error: Response) {
  //   console.error("Server Error: " + error + " " + error.json().errorMessage);
  //   return Observable.throw(error.json().errorMessage || 'Server error - is the REST server running?');
  // }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
