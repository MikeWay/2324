import { TestBed, inject } from '@angular/core/testing';
import { Flights } from '../flights/flights';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Flight } from '../model/flight';
import { FLIGHTS } from '../model/mock-flights';

describe('Flights', () => {

  let httpTestingController: HttpTestingController;

  const A_FLIGHT: Flight = {
    id: 11, flightNumber: 'FS1298', origin: 'LAX', destination: 'LHR', departDay: 'Thursday',
    departTime: '09:00', arriveDay: 'Monday', arriveTime: '09:00', price: 99.99
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [Flights, provideHttpClient(), provideHttpClientTesting()]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });




  it('should be created', inject([Flights], (service: Flights) => {
    expect(service).toBeTruthy();
  }));


  it('should fetch all flights using GET', inject([Flights], (service: Flights) => {

    service.getAllFlights().subscribe((flights: Flight[]) => {
      expect(flights).toEqual(FLIGHTS); // verification happens once the req.flush method has been called
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/allflights');
    expect(req.request.method).toEqual('GET');
    req.flush(FLIGHTS); // Supply the data which will be returned
    httpTestingController.verify();
  }));


  it('should report an error from getAllFlights', inject([Flights], (service: Flights) => {
    service.getAllFlights().subscribe({
      next: (flights: Flight[]) => { throw new Error("An error should have been thrown"); },
      error: (e) => {
        console.log(`[${e}]`);
        expect(e.message).toEqual('Server error - is the REST server running?')
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/allflights');
    req.flush('Failed!', { status: 500, statusText: 'Internal Server Error' }); // Supply the data which will be returned
    httpTestingController.verify();
  }));
/*
  it('should return flights from getMyFlights()', inject([Flights], (service: Flights) => {
    service.getMyFlights().subscribe({
      next: (flights: Flight[]) => {
        expect(flights).toEqual(FLIGHTS);
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/myflights');
    expect(req.request.method).toEqual('GET');
    req.flush(FLIGHTS); // Supply the data which will be returned

    httpTestingController.verify();
  }));
*/
/*
  it('should report an error from addMyFlight', inject([Flights], (service: Flights) => {
    service.getMyFlights().subscribe({
      next: (flights) => { throw new Error("An error should have been thrown"); },
      error: (e) => {
        console.log(`[${e}]`);
        expect(e.message).toEqual('Server error - is the REST server running?')
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/myflights');
    req.flush('Failed!', { status: 500, statusText: 'Internal Server Error' }); // Supply the data which will be returned
    httpTestingController.verify();
  }));
*/
/*
  it('should add a flight to myFlights', inject([Flights], (service: Flights) => {
    service.addMyFlight(A_FLIGHT).subscribe({
      next: (count: number) => {
        expect(count).toEqual(1);
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/myflights');
    expect(req.request.method).toEqual('POST');
    expect(JSON.parse(req.request.body)).toEqual([A_FLIGHT]);
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(1); // Supply the data which will be returned

    httpTestingController.verify();
  }));
*/
/*
  it('should report an error from addMyFlight', inject([Flights], (service: Flights) => {
    service.addMyFlight(A_FLIGHT).subscribe({
      next: (count: number) => { throw new Error("An error should have been thrown"); },
      error: (e) => {
        console.log(`[${e}]`);
        expect(e.message).toEqual('Server error - is the REST server running?')
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/myflights');
    expect(req.request.method).toBe('POST');
    req.flush('Failed!', { status: 500, statusText: 'Internal Server Error' }); // Supply the data which will be returned
    httpTestingController.verify();
  }));
*/
});
