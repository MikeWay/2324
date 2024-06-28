import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather/weather.service';

import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {


  let mockWeatherService: any | null = null;
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async () => {
  // TODO 1 Uncomment the next line to create a Spy object  for the WeatherService
  // mockWeatherService = jasmine.createSpyObj('WeatherService',['getForecast']);    

  // TODO 5 - Do this at the end! Remove the comments around the next 3 lines of code to enable the functionality
  // for the getForecast()
  // mockWeatherService.getForecast.and.callFake((city: string) => {
  //   return `Some weather ${city}`;
  // });

  await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
// TODO 2 - Uncomment the next line to provide the fake weather service  
    //  providers: [{provide: WeatherService, useValue: mockWeatherService}]
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

  xit('should call getForecast on the Weather Service', () => {
    const weather = component.forecast;
    expect(mockWeatherService.getForecast).toHaveBeenCalled();
  });  

  // TODO 3 - Examine the test below and then change xit to it in the line below to enable the next test
  xit('should call getForecast passing "Toronto" as the argument', () => {
    component.city = 'Toronto';
    const weather = component.forecast;
    expect(mockWeatherService.getForecast).toHaveBeenCalledWith('Toronto');
  });    

  // TODO 4 - Examine the test below and then change xit to it in the line below to enable the next test
  xit('should return the city as part of the weather string', () => {
    component.city = 'Toronto';
    expect(component.forecast).toContain('Toronto');
  });      
});