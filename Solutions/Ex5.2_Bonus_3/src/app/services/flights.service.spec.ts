/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightsService } from './flights.service';

describe('Service: Flights', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService]
    });
  });

  it('should be created', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 5 flights from gtFlights()', inject([FlightsService], (service: FlightsService) => {
    expect(service.getFlights().length).toBe(5);
  }));
});
