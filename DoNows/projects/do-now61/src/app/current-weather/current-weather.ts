import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather/weather';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  templateUrl: './current-weather.html',
  styleUrls: ['./current-weather.css']
})
export class CurrentWeather {

  city= 'Manchester';

  constructor(private weatherService : Weather) { }

  get forecast(): string {
    return this.weatherService.getForecast(this.city);
  }

}
