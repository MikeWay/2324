import { TestBed } from '@angular/core/testing';

import { ApplicationState } from './application-state';
import { FLIGHTS } from '../model/mock-flights';

describe('ApplicationState', () => {
  let service: ApplicationState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have set the flights property to FLIGHTS', () => {
    expect(service.flights).toEqual(FLIGHTS);
  });  
});
