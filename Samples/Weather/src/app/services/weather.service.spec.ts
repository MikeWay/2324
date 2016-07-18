import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('Flights Service', () => {
  beforeEachProviders(() => [WeatherService]);

  it('should ...',
      inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
