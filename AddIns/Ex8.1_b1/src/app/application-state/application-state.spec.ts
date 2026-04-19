import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApplicationState } from './application-state';
import { FlightsService } from '../flights/flights.service';
import { FLIGHTS } from '../model/mock-flights';

describe('ApplicationState', () => {
  let service: ApplicationState;
  let mockFlightsService: {
    getAllFlights: ReturnType<typeof vi.fn>,
    getMyFlights: ReturnType<typeof vi.fn>,
    addMyFlight: ReturnType<typeof vi.fn>
  };

  beforeEach(() => {
    mockFlightsService = {
      getAllFlights: vi.fn().mockReturnValue(of(FLIGHTS)),
      getMyFlights: vi.fn().mockReturnValue(of([])),
      addMyFlight: vi.fn().mockReturnValue(of(1))
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: FlightsService, useValue: mockFlightsService }
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
