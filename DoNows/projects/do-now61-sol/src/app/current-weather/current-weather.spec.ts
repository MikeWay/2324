import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Weather } from '../weather/weather';

import { CurrentWeather } from './current-weather';

describe('CurrentWeather', () => {


  let mockWeather: any | null = null;
  let component: CurrentWeather;
  let fixture: ComponentFixture<CurrentWeather>;

  beforeEach(async () => {
  // TODO 1: Uncomment the next line to create a mock object for Weather with a vi.fn() spy for getForecast
  mockWeather = { getForecast: vi.fn() };

  // TODO 5: Uncomment the next line to make getForecast return a value using mockImplementation
  mockWeather.getForecast.mockImplementation((city: string) => {
    return `Some weather ${city}`;
  });

  await TestBed.configureTestingModule({
      imports: [ CurrentWeather ],
  // TODO 2: Uncomment the next line to provide the mock weather service
      providers: [{provide: Weather, useValue: mockWeather}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getForecast on the Weather Service', () => {
    const weather = component.forecast;
    expect(mockWeather.getForecast).toHaveBeenCalled();
  });  

  // TODO 3 - Examine the test below and then change it.skip to it in the line below to enable the next test
  it('should call getForecast passing "Toronto" as the argument', () => {
    component.city = 'Toronto';
    const weather = component.forecast;
    expect(mockWeather.getForecast).toHaveBeenCalledWith('Toronto');
  });    

  // TODO 4 - Examine the test below and then change it.skip to it in the line below to enable the next test
  it('should return the city as part of the weather string', () => {
    component.city = 'Toronto';
    expect(component.forecast).toContain('Toronto');
  });      
});