import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(city: string): string {
    return `The weather is lovely in ${city} (no, really)`;
  }
}
