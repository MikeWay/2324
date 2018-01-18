import { Injectable } from '@angular/core';
import {Flight} from "../model/flight";
import {FLIGHTS, MYFLIGHTS} from "../model/mock-flights";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class FlightsService {


  constructor(private http: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    //const url = 'http://localhost:8080/flightserver/flights';
    const url = 'http://localhost:8080/flightserver/allflights';
    return this.http.get<Flight[]>(url);
  }

  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

}
