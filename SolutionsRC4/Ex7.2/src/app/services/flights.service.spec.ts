/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FlightsService } from './flights.service';

describe('Service: Flights', () => {
  beforeEach(() => {
    addProviders([FlightsService]);
  });

  it('should create the service',
    inject([FlightsService],
      (service: FlightsService) => {
        expect(service).toBeTruthy();
      }));

  it('should return 5 flights from getFlights()',
    inject([FlightsService],
      (service: FlightsService) => {
        expect(service.getFlights().length).toBe(5);
      }));

  it('should return 2 flights from getMyFlights()',
    inject([FlightsService],
      (service: FlightsService) => {
        expect(service.getMyFlights().length).toBe(2);
      }));


});
