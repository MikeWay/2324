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

  it('should return myFlights', () => {
    expect(service.myFlights).toEqual(MYFLIGHTS);
  });
});
