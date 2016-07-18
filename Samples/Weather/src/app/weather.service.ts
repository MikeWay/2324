import { Injectable } from '@angular/core';

@Injectable()
export class XXWeatherService {

  constructor() {}

  getWindSpeed() : number {
    return 22;
  }

  getCurrentWeather(){

  }

  getForecast(location:string) : string {
    return "Weather is forecast for " + location;

  }
}
