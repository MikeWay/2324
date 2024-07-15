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

  it('should return 0 flights from getFlights if loadFlights has not been called', () => {
    expect(service.getFlights().length).toBe(0);
  });

  it('should return 5 flights from getFlights', () => {
    service.loadFlights(0,5)
    expect(service.getFlights().length).toBe(5);
  });
  
  it('should return 2 flights from getMyFlights', () => {
    expect(service.getMyFlights().length).toBe(2);
  });  
});
