import { FLIGHTS } from './../model/mock-flights';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightsService } from './flights.service';
import { Http, ResponseType } from '@angular/http';


export class MockResponse {
  json() {
    return FLIGHTS;
  }

  type = ResponseType.Basic;
}

let mockResponse= new MockResponse();



export class MockHttp {
  private subject = new BehaviorSubject(mockResponse);
  response = <Observable<Response>>this.subject.asObservable();
  constructor() { }

  public get() : Observable<Response>{
    this.subject.next(mockResponse);
    return this.response;
  }


}

let mockHTTP = new MockHttp();

describe('Service: Flights', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService, {provide : Http, useValue: mockHTTP}]
    });
  });

  it('should be created', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 5 flights from gtFlights()', inject([FlightsService], (service: FlightsService) => {
    service.getFlights().subscribe(
      flights => expect(flights.length).toBe(5)
    )
  }));
});
