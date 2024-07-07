import { TestBed } from '@angular/core/testing';

import { ApplicationStateService } from './application-state.service';
import { count } from 'rxjs';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return XX flights from getFlights', () => {
    expect(service.getFlights().length).toBe(5);
  });
  
  it('should return XX flights from getMyFlights', () => {
    expect(service.getMyFlights().length).toBe(2);
  });  
});
