
import {
  DebugElement
} from '@angular/core';


import { ForecastComponent } from './forecast.component';
import {WeatherService, WeatherServiceIF} from "../services/weather.service";
import {Observable} from "rxjs/Rx";
import {Weather} from "../entities/weather";
import {Preferences} from "../entities/preferences";
import {AppComponent} from "../app.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MakeItBold} from "../directives/make-it-bold.directive";
import {HttpModule} from "@angular/http";

class MockWeatherService implements WeatherServiceIF {
  getWeather() : Observable<Weather[]>{
    return new Observable<Weather[]>();
  }
  savePreferences(preferences: Preferences ){}
  updatePreferences(preferences: Preferences ){}
  getWindSpeed(){}
  getForecast( location : string ){}
}




describe('Component: Forecast', () => {

  //beforeEach(() => addProviders([MockWeatherService]));

  // it('should create an instance', inject([MockWeatherService],( weatherService: WeatherServiceIF) => {
  //   let component = new ForecastComponent(weatherService);
  //   expect(component).toBeTruthy();
  // }));

  let comp: ForecastComponent;
  let fixture : ComponentFixture<ForecastComponent>;
  let el: DebugElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      ForecastComponent,
      MakeItBold
    ],
    imports: [HttpModule],
    providers: [WeatherService]
  });

  fixture = TestBed.createComponent(ForecastComponent);
  comp = fixture.componentInstance;

});

it('should create the component', () => {
  let fixture = TestBed.createComponent(ForecastComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});

});
