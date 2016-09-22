import {Component, ViewChild, ChangeDetectionStrategy} from '@angular/core';

import { ForecastComponent } from './forecast/forecast.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherStatsComponent } from './weather-stats/weather-stats.component';
import { WeatherService } from './services/weather.service';
import { ROUTER_DIRECTIVES, Router} from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ForecastComponent, CurrentWeatherComponent, WeatherStatsComponent,ROUTER_DIRECTIVES],
  providers: [WeatherService, HTTP_PROVIDERS ],
  //changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent {
  title = 'app works!';

  constructor(private router : Router){}
  // @ViewChild(CurrentWeatherComponent)
  // currentWeatherComponent : CurrentWeatherComponent;
  //
  //
  // private onClick(){
  //   this.title='new title';
  //   this.currentWeatherComponent.currentCity = "Tokyo";
  // }

  onWeatherUpdated( city : string ){
    console.log("City is : " + city);

  }

  onClickWarnings(){
    console.log("Weather warnings clicked");
    this.router.navigate(['/warnings'])

  }

  onClickForecast(){
    let location = "Paris";
    let units = "Celsius";
    this.router.navigate(['/forecast', location, units ]);

  }


  onClickForecastByQuery(){
    let location = "Paris";
    let units = "Celsius";
    this.router.navigate(['/forecastq'], {queryParams : {'location' : location, 'units' : units}});

  }
}
