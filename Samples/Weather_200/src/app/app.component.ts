import {Component} from '@angular/core';
import { ForecastComponent } from './forecast/forecast.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherStatsComponent } from './weather-stats/weather-stats.component';
import { WeatherService } from './services/weather.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [WeatherService ],
})


export class AppComponent {
  title = 'app works!';
  date = new Date();

  constructor(private router : Router){}

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
    // Optional parameters
    this.router.navigate(['/forecast'], {queryParams : {'location' : location, 'units' : units}});
    // Required parameters
    //this.router.navigate(['/forecastq', location, units]);

  }
}
