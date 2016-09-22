import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WindSpeedPipe } from '../pipe/wind-speed.pipe'

@Component({
  moduleId: module.id,
  selector: 'app-wind',
  templateUrl: 'wind.component.html',
  styleUrls: ['wind.component.css'],
  pipes: [WindSpeedPipe]
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
