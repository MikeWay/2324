import {
  addProviders,
  async, inject
} from '@angular/core/testing';

import {
  provide
} from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams, BaseRequestOptions } from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { ForecastComponent } from './forecast.component';
import {WeatherService, WeatherServiceIF} from "../services/weather.service";
import {Observable} from "rxjs/Rx";
import {Weather} from "../entities/weather";
import {Preferences} from "../entities/preferences";


class MockWeatherService implements WeatherServiceIF {
  getWeather() : Observable<Weather[]>{
    return new Observable<Weather[]>();
  }
  savePreferences(preferences: Preferences ){}
  updatePreferences(preferences: Preferences ){}
  getWindSpeed(){}
  getForecast( location : string ){}
}


describe('Component: Forecast', () => {

  beforeEach(() => addProviders([MockWeatherService]));

  it('should create an instance', inject([MockWeatherService],( weatherService: WeatherServiceIF) => {
    let component = new ForecastComponent(weatherService);
    expect(component).toBeTruthy();
  }));

});

