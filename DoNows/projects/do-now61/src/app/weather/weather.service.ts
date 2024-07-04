import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class WeatherService {

  constructor() { }

  getForecast(city: string): string {
    return `The weather is lovely in ${city} (no, really)`;
  }  
}
