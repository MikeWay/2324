import { TestBed } from '@angular/core/testing';
import { FlightsService } from '../flights/flights.service';

import { ApplicationStateService } from './application-state.service';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: FlightsService, useValue: {}}]
    });
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
