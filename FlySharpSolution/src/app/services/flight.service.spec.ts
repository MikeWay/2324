import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FlightService } from './flight.service';

describe('Flight Service', () => {
  beforeEachProviders(() => [FlightService]);

  it('should inject OK',
      inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of flights',
      inject([FlightService], (service: FlightService) => {
    expect(service.getFlights()).toBeTruthy();
  }));
});
