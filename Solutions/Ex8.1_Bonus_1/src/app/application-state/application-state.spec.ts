import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApplicationState } from './application-state';
import { Flights } from '../flights/flights';
import { FLIGHTS } from '../model/mock-flights';

describe('ApplicationState', () => {
  let service: ApplicationState;
  let mockFlightsService: {
    getAllFlights: ReturnType<typeof vi.fn>
  };

  beforeEach(() => {
    mockFlightsService = {
      getAllFlights: vi.fn().mockReturnValue(of(FLIGHTS))
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Flights, useValue: mockFlightsService }
      ]
    });
    service = TestBed.inject(ApplicationState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have set the flights property to FLIGHTS', () => {
    expect(service.flights).toEqual(FLIGHTS);
  });
});
