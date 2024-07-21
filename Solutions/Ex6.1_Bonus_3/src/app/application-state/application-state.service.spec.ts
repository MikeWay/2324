import { TestBed } from '@angular/core/testing';

import { ApplicationStateService } from './application-state.service';
import { FLIGHTS } from '../model/mock-flights';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the flights property should have the value FLIGHTS', () => {
    expect(service.flights).toEqual(FLIGHTS);
  });  
});
