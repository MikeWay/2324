/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightsService } from './flights.service';
import { Http } from '@angular/http';

let mockHTTP = {};

describe('Service: Flights', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService, {provide : Http, useValue: mockHTTP}]
    });
  });

  it('should ...', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));
});
