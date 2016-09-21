/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FlightsService } from './flights.service';

describe('Service: Flights', () => {
  beforeEach(() => {
    addProviders([FlightsService]);
  });

  it('should ...',
    inject([FlightsService],
      (service: FlightsService) => {
        expect(service).toBeTruthy();
      }));
});
