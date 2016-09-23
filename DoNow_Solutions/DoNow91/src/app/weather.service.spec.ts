import {
  beforeEachProviders,
  it,
  describe,
  expect, 
  inject
} from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('Weather Service', () => {
  beforeEachProviders(() => [WeatherService]);

  it('should ...',
      inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));


    it('should return a wind speed of 22',
        inject([WeatherService], (service: WeatherService) => {
      expect(service.getWindSpeed() === 22).toBe(true);
    }));
});
