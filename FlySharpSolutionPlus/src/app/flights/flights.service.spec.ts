import { TestBed, inject } from '@angular/core/testing';
import { FlightsService } from '../flights/flights.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Flight} from '../model/flight';
import {FLIGHTS, MYFLIGHTS} from '../model/mock-flights';
import { of } from 'rxjs';

describe('FlightsService', () => {

  let service: FlightsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],

      providers: [FlightsService]
    });

    service = TestBed.inject(FlightsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });




  it('should be created',  () => {
    expect(service).toBeTruthy();
  });

  it('should fetch from allflights', () => {
    const testData: Flight[] = MYFLIGHTS;
    //
    // expect(service.getFlights().length).toBe(5);
    service.getFlights().subscribe((flights: Flight[]) => {
      expect(flights).toEqual(FLIGHTS); // verification happens once the req.flush method has been called
    });

    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/allflights');
    req.flush(FLIGHTS); // Supply the data which will be returned

    httpTestingController.verify();
    of(FLIGHTS)
  });

  it('should fetch from flights when getChunkOfFLights is called', () => {
    const testData: Flight[] = MYFLIGHTS;
    //
    // expect(service.getFlights().length).toBe(5);
    service.getChunkOfFlights(0, 100).subscribe((flights: Flight[]) => {
      expect(flights).toEqual(FLIGHTS); // verification happens once the req.flush method has been called
    });

    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/flights');
    req.flush(FLIGHTS); // Supply the data which will be returned

    httpTestingController.verify();
  });


  it('should get the number of flights', () => {
    service.getNumberOfFlights().subscribe((numFlights) =>{
      expect(numFlights).toBe(666);
    })
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/numflights');
    req.flush(666);
    httpTestingController.verify();
  })

  it('should return 2 flights from getMyFlights()', () => {
    expect(service.getMyFlights().length).toBe(2);
  });

  it('should invoke the error handler for errors conditions', () =>
  {
    service.getNumberOfFlights().subscribe(
      () => {},
      err => {expect(err).toBe('Server error - is the REST server running?')}
    );
    const req = httpTestingController.expectOne('http://localhost:8080/flightserver/numflights').error(new ErrorEvent('error'));
    httpTestingController.verify();
  });
});
