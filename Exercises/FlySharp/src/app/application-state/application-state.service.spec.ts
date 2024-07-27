import { TestBed } from '@angular/core/testing';

import { ApplicationStateService } from './application-state.service';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { FlightsService } from '../flights/flights.service';
import { Observable, of } from 'rxjs';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;
  const mockFlightsService: Partial<FlightsService> = {
    getAllFlights: () => of(FLIGHTS),
    getMyFlights: () => of(MYFLIGHTS)
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: FlightsService, useValue: mockFlightsService}]
    });
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have set the flights property to FLIGHTS', () => {
    expect(service.flights).toEqual(FLIGHTS);
  });  
});
