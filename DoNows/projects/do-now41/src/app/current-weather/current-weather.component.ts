import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  city= 'Manchester';

  constructor(private weatherService : WeatherService) { }

  get forecast(): string {
    return this.weatherService.getForecast(this.city);
  }

}
