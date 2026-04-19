import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Weather {

  constructor() { }

  getForecast(city: string): string {
    return `The weather is lovely in ${city} (no, really)`;
  }  
}
