import { TestBed } from '@angular/core/testing';

import { ApplicationState } from './application-state';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

describe('ApplicationState', () => {
  let service: ApplicationState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return flights confirming loadFlights() was called', () => {
    expect(service.flights).toEqual(FLIGHTS);
  });

  it('should return a non-empty flights array', () => {
    expect(service.flights.length).toBeGreaterThan(0);
  });

  it('should return myFlights', () => {
    expect(service.myFlights).toEqual(MYFLIGHTS);
  });

  it('should default displayCurrency to GBP', () => {
    expect(service.displayCurrency.code).toBe('GBP');
  });

  it('should have 4 currencies', () => {
    expect(service.currencies.length).toBe(4);
  });
});
