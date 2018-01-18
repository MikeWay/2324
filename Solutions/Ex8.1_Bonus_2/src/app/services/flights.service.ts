import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Flight} from "../model/flight";
import {MYFLIGHTS} from "../model/mock-flights";


@Injectable()
export class FlightsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  public getFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';
    const resultObservable = this.http.get<Flight[]>(url);
    return resultObservable;
  }

  public getChunkOfFlights( start: number, num: number): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/flights';
    const data = {start, num};
    const resultObservable = this.http.post<Flight[]>(url, JSON.stringify(data), {headers: this.headers});
    return resultObservable;
  }


  public getNumberOfFlights(): Observable<number> {
    const url = 'http://localhost:8080/flightserver/numflights';
    return this.http.get<number>(url);
  }
}


// import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Response, Headers } from '@angular/http';
// import { FLIGHTS, MYFLIGHTS } from "../model/mock-flights";
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {Observable} from "rxjs/Observable";
// import {Flight} from "../model/flight";


@Injectable()
export class FlightsServiceX {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public getFlights(): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/allflights';
    const resultObservable = this.http.get<Flight[]>(url);
    return resultObservable;
  }


  public getChunkOfFlights( start: number, num: number): Observable<Flight[]> {
    const url = 'http://localhost:8080/flightserver/flights';
    const data = {start, num};
    const resultObservable = this.http.post<Flight[]>(url, JSON.stringify(data), {headers: this.headers});
    return resultObservable;
  }


  public getNumberOfFlights(): Observable<number> {
    const url = 'http://localhost:8080/flightserver/numflights';
    return this.http.get<number>(url);
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }


  // private handleError (error: Response) {
  //   console.error('Server Error' + error);
  //   return Observable.throw(error.json().body || 'Server error - is the REST server running?');
  // }
}
