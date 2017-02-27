import { Injectable } from '@angular/core';
import {Flight} from "../model/flight";
import {FLIGHTS, MYFLIGHTS} from "../model/mock-flights";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class FlightsService {

  private headers = new Headers({'Content-Type': 'application/json'}); ///

  constructor(private http: Http) { }

  public getFlights() : Observable<Flight[]>{
    let url = "http://localhost:8080/flightserver/allflights";
    let resultObservable = this.http.get(url).catch(this.handleError);
    let flightResults = resultObservable.map(
      res => <Flight[]> res.json()
    );
    return flightResults;
  }


  public getChunkOfFlights(start: number, num : number) : Observable<Flight[]>{

    let url = "http://localhost:8080/flightserver/flights";
    let data = new RequestData(start, num);

    return this.http.post(url, JSON.stringify(data), {headers: this.headers}).catch(this.handleError)
        .map(res => <Flight[]> res.json());

  }

  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

  private handleError (error: Response) {
    console.error("Server Error" + error);
    return Observable.throw(error.json().errorMessage || 'Server error - is the REST server running?');
  }
}


class RequestData {
  constructor( public start: number, public num : number){}
}