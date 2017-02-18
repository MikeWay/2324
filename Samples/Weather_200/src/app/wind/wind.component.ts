import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-wind',
  templateUrl: 'wind.component.html',
  styleUrls: ['wind.component.css'],
})
export class WindComponent implements OnInit {

windSpeedKnots : number = 20;
instabilityIndex : number = 1.8;

highlightSpeed = false;

  constructor(private weatherService : WeatherService) {}

  ngOnInit() {
    this.weatherService.getWindSpeed();
  }

  getStyles() {
    return {
      'font-family' : 'Arial, Helvetica, sans-serif',
      'color' : 'cyan',
      'font-style' : 'italic'
    }
  }

}
