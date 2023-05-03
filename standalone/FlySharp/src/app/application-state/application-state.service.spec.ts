import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FlightsService } from '../flights/flights.service';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { ApplicationStateService } from './application-state.service';
import { Flight } from '../model/flight';


describe('ApplicationStateService', () => {
  let service: ApplicationStateService;
  let getFlightsCallCount = 0;

  const mockFlightsService = jasmine.createSpyObj('FlightsService', {
    //getFlights: {if(++getFlightsCallCount == 0) return FLIGHTS},
    getMyFlights: of(MYFLIGHTS),
    getNumberOfFlights: of(10)
  });

    // getFlights returns an array of Flights
    // on the second call the array is empty indicating that there are no more flights.
  mockFlightsService.getFlights = () => {
    if(++getFlightsCallCount == 0){
      return of(FLIGHTS);
    } else {
      return of(new Array<Flight>());
    }
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{provide: FlightsService, useValue: mockFlightsService}]
    });
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
