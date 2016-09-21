import { Injectable } from '@angular/core';

import { MYFLIGHTS} from '../model/mock-flights';
import {Flight} from "../model/flight";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class FlightsService {

  constructor(private http : Http) { }

  public getFlights() : Observable<Flight[]>{
    let url : string = "http://localhost:8080/flightserver/flights";
    let resultObservable = this.http.get(url).catch(this.handleError);
    let flightResults = resultObservable.map(res => <Flight[]>res.json())
    return flightResults;

  }

  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

  private handleError (error: Response) {
    console.error("Server Error" + error);
    return Observable.throw(error.json().errorMessage || 'Server error - is the REST server running?');
  }
}
