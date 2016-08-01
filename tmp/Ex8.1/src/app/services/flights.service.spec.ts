/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FlightsService } from './flights.service';

describe('Flights Service', () => {
  beforeEachProviders(() => [FlightsService]);

  it('should ...',
      inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));
});
