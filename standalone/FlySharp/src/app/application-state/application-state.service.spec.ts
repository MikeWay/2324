import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FlightsService } from '../flights/flights.service';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { ApplicationStateService } from './application-state.service';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  const mockFlightsService = jasmine.createSpyObj('FlightsService', {
    getFlights: FLIGHTS,
    getMyFlights: of(MYFLIGHTS)
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: FlightsService, useValue: mockFlightsService}]
    });
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
