import {DebugElement} from "@angular/core";
import {CurrentWeatherComponent} from "./current-weather.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {WeatherService} from "../services/weather.service";
import {WindSpeedPipe} from "../pipe/wind-speed.pipe";
import {Component} from "@angular/core/src/metadata/directives";
import {Preferences} from "../entities/preferences";
import {Weather} from "../entities/weather";
import {Observable} from "rxjs";
import {By} from "@angular/platform-browser";




describe('Component: CurrentWeatherComponent', () => {
  let comp: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentWeatherComponent, MockWindComponent
      ],
      providers: [{provide: WeatherService, useValue: mockWeatherService }]
    });

    fixture = TestBed.createComponent(CurrentWeatherComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('the button should be enabled after onClickOther()',
    ( ) => {
      comp.buttonDisabled = true;
      comp.onClickOther();
      expect(comp.buttonDisabled).toBeFalsy();
    });

  it('the update button should be enabled after clicking the other button',
    ( ) => {
      fixture.detectChanges();
      let buttonEle = fixture.debugElement.query(By.css('#otherButton'));
      buttonEle.triggerEventHandler('click', null);
      let updateButtonEle = fixture.debugElement.query(By.css('#updateButton'));
      expect(updateButtonEle.nativeElement.disabled).toBeFalsy();
    });
});





class MockWeatherService {
  getWeather() : Observable<Weather[]>{
    return new Observable<Weather[]>();
  }
  savePreferences(preferences: Preferences ){}
  updatePreferences(preferences: Preferences ){}
  getWindSpeed(){}
  getForecast( location : string ){}
}
let mockWeatherService = new MockWeatherService;




@Component({
  selector: 'app-wind',
  template: '',
})
export class MockWindComponent  {}
