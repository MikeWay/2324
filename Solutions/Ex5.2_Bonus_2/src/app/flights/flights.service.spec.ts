import { TestBed, inject } from '@angular/core/testing';
import { FlightsService } from '../flights/flights.service';

describe('FlightsService', () => {
  let service: FlightsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService]
    });
    service = TestBed.inject(FlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 5 flights from getFlights()', () => {
    expect(service.getFlights().length).toBe(5);
  });

  it('should return 2 flights from getMyFlights()', () => {
    expect(service.getMyFlights().length).toBe(2);
  });
});
