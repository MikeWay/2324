
import {TestComponentBuilder, inject, ComponentFixture, addProviders} from "@angular/core/testing";
import {Component, Injectable, provide} from "@angular/core";
import { By } from "@angular/platform-browser";
import {CurrentWeatherComponent} from "./current-weather.component";
import {WeatherServiceIF, WeatherService} from "../services/weather.service";
import {Observable} from "rxjs/Rx";
import {Preferences} from "../entities/preferences";
import {Weather} from "../entities/weather";
import {HTTP_PROVIDERS} from "@angular/http";

@Injectable()
class MockWeatherService implements WeatherServiceIF {
  getWeather() : Observable<Weather[]>{
    return new Observable<Weather[]>();
  }
  savePreferences(preferences: Preferences ){}
  updatePreferences(preferences: Preferences ){}
  getWindSpeed(){}
  getForecast( location : string ){}
}



describe('Component: CurrentWeatherComponent', () => {
  let builder:TestComponentBuilder;


  beforeEach(() => addProviders([MockWeatherService ]));

  beforeEach(inject([TestComponentBuilder], (tcb:TestComponentBuilder) =>
    builder = tcb
  ));


  it('should create the TEST component', (done:() => void) => {
    builder.overrideProviders(CurrentWeatherTestController, [provide(WeatherService, {useClass:MockWeatherService})]);
    return builder
      .createAsync(CurrentWeatherTestController)
      .then((fixture:ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(CurrentWeatherComponent));
        let theComponent = query.componentInstance;
        expect(theComponent).toBeTruthy();
        fixture.detectChanges();
        done();
      });
  });

  it('should disable the other button', (done:() => void) => {
    builder.overrideProviders(CurrentWeatherTestController, [provide(WeatherService, {useClass:MockWeatherService})]);
    return builder
      .createAsync(CurrentWeatherTestController)
      .then((fixture:ComponentFixture<any>) => {
        let nativeElement = fixture.nativeElement;
        nativeElement.querySelector('#updateButton').click();
        fixture.detectChanges();
        let disabled = nativeElement.querySelector('#otherButton').disabled;
        expect(disabled).toBeFalsy();
        done();
      });
  });
});



@Component({
    selector: 'test',
    template: `
    <app-current-weather></app-current-weather>
  `,
    directives: [CurrentWeatherComponent],
    providers: [WeatherService, HTTP_PROVIDERS]

})

class CurrentWeatherTestController {
}

