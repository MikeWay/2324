import { TestBed, inject } from '@angular/core/testing';
import { FlightsService } from '../flights/flights.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Flight} from '../model/flight';
import {FLIGHTS} from '../model/mock-flights';

describe('FlightsService', () => {

  let httpTestingController: HttpTestingController;

  const A_FLIGHT: Flight = {id: 11, flightNumber : 'FS1298', origin: 'LAX', destination : 'LHR', departDay : 'Thursday',
  departTime : '09:00', arriveDay : 'Monday', arriveTime : '09:00', price : 99.99};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],

      providers: [FlightsService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });




  it('should be created', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));

  it('should do something with HTTP!)', inject([FlightsService], (service: FlightsService) => {
    //
    // expect(service.getFlights().length).toBe(5);
    service.getFlights().subscribe((flights: Flight[]) => {
      expect(flights).toEqual(FLIGHTS); // verification happens once the req.flush method has been called
    });

    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/allflights');
    req.flush(FLIGHTS); // Supply the data which will be returned

    httpTestingController.verify();
  }));


  it('should return flights from getMyFlights()', inject([FlightsService], (service: FlightsService) => {
    service.getMyFlights().subscribe({
      next: (flights: Flight[])=>{
        expect(flights).toEqual(FLIGHTS);
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/myflights');
    expect(req.request.method).toEqual('GET');
    req.flush(FLIGHTS); // Supply the data which will be returned

    httpTestingController.verify();
  }));

  it('should get a chunk of flights',inject([FlightsService], (service: FlightsService) => {
    service.getChunkOfFlights(0,20).subscribe({
      next: (flights: Flight[])=>{
        expect(flights).toEqual(FLIGHTS);
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/flights?start=0&num=20');
    expect(req.request.method).toEqual('GET');
    req.flush(FLIGHTS); // Supply the data which will be returned

    httpTestingController.verify();
  }));

  it('should add a flight to myFlights',inject([FlightsService], (service: FlightsService) => {
    service.addMyFlight(A_FLIGHT).subscribe({
      next: (count: number)=>{
        expect(count).toEqual(1);
      }
    });
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/myflights');
    expect(req.request.method).toEqual('POST');
    expect(JSON.parse(req.request.body)).toEqual([A_FLIGHT]);
    req.flush(1); // Supply the data which will be returned

    httpTestingController.verify();
  }));  
});
