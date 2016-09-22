import { Component, OnInit } from '@angular/core';

import { Stats } from '../entities/stats'

@Component({
  selector: 'app-weather-stats',
  templateUrl: 'weather-stats.component.html',
  styleUrls: ['weather-stats.component.css']
})
export class WeatherStatsComponent {

  stats: Stats[] = [{
    'date': "July 14",
    'temperature': 23,
    'tempUnits': 'C'
  },
    {
      'date': "July 15",
      'temperature': 25,
      'tempUnits': 'C'
    },
    {
      'date': "July 16",
      'temperature': 21,
      'tempUnits': 'C'
    }];

}
