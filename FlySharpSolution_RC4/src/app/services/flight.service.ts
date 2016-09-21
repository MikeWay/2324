import { Injectable } from '@angular/core';
import {Flight} from '../model/flight';
import {FLIGHTS, MYFLIGHTS} from '../model/mock-flights';

@Injectable()
export class FlightService implements FlightServiceInterface {

  constructor() {}

  public getFlights(){
    return FLIGHTS;
  }

  public getMyFlights(){
    return MYFLIGHTS;
  }
}


export interface FlightServiceInterface {
  getFlights() : Flight[];

  getMyFlights() : Flight[];
}
