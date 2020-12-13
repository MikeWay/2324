import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  city= 'Manchester';

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
  }

  get weather(): string {
    //return 'rain';
    console.log(this.weatherService.getWeather(this.city));
    return this.weatherService.getWeather(this.city);
  }

}
