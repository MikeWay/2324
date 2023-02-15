import { TestBed } from '@angular/core/testing';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { ApplicationStateService } from './application-state.service';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationStateService]
    });
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return ${FLIGHTS.length} flights from getFlights()`, () => {
    expect(service.getFlights().length).toBe(FLIGHTS.length);
  });

  it(`should return ${MYFLIGHTS.length} flights from getMyFlights()`, () => {
    expect(service.getMyFlights().length).toBe(MYFLIGHTS.length);
  });

  it(`should return 1 flight from getFlights() after a call to loadFlights`, () => {
    service.loadFlights(0,20,'NRT');
    expect(service.getFlights().length).toBe(1);
  });

});
