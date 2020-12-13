import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather/weather.service';

import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {


  let fakeWeatherService = null;
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async () => {
  // TODO 2 Uncomment the next line to create a Spy object  for the WeatherService
  fakeWeatherService = jasmine.createSpyObj('WeatherService',['getWeather']);    

  // TODO later
  fakeWeatherService.getWeather.and.callFake((city: string) => {
    return `Some weather ${city}`;
  });

  await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
// TODO 3 - Uncomment the next line to provide the fake weather service  
      providers: [{provide: WeatherService, useValue: fakeWeatherService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// TODO 1 enable this test by changin xit -> it
  xit('should call getWeather on the Weather Service', () => {
    const weather = component.weather;
    expect(fakeWeatherService.getWeather).toHaveBeenCalled();
  });  

  // TODO
  xit('should call getWeather passing "Toronto" as the argument', () => {
    component.city = 'Toronto';
    const weather = component.weather;
    expect(fakeWeatherService.getWeather).toHaveBeenCalledWith('Toronto');
  });    

  // TODO
  xit('should return the city as part of the weather string', () => {
    component.city = 'Toronto';
    const weather = component.weather;
    expect(component.weather).toContain('Toronto');
  });      
});
