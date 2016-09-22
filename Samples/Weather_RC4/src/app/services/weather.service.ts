//import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Preferences } from '../entities/preferences'

import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import { Weather } from '../entities/weather';

@Injectable()
export class WeatherService implements WeatherServiceIF{

  constructor(private http: Http) {}

  public getWeather() : Observable<Weather[]>{
    let url = "http://localhost:8080/weather/latest";


    let params = new URLSearchParams();
    params.set('location', 'Newcastle');
    params.set('units', 'C');



  return this.http.get(url, {search : params})
          .map(res => <Weather[]> res.json())
          .do(res => console.log("Result" + JSON.stringify(res)))
          .catch(this.handleError);

  }

  savePreferences(preferences: Preferences ) {
    let body = JSON.stringify( preferences );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = "http://localhost:8080/weather/preferences";
    return this.http.post(url, body, options)
      .map(res => <number> res.json())
      .catch(this.handleError);
  }

  updatePreferences(preferences: Preferences ) {
    let body = JSON.stringify( preferences );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = "http://localhost:8080/weather/updatePreferences";
    console.log("About to PUT");
    return this.http.put(url, body, options)
      .map(res => <number> res.json())
      .do(res => console.log("Result" + res))
      .catch(this.handleError);
  }


  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error("Server Error" + error);
    return Observable.throw(error.json().errorMessage || 'Server error - is the REST server running?');
  }

  public getWindSpeed(){
    return 99;
  }

  public getForecast( location : string ){
    return "sunny";
  }
}


export interface WeatherServiceIF{
  getWeather() : Observable<Weather[]>;
  savePreferences(preferences: Preferences );
  updatePreferences(preferences: Preferences );
  getWindSpeed();
  getForecast( location : string );
}
