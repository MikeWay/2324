import { Injectable } from '@angular/core';
import {FLIGHTS, MYFLIGHTS} from '../model/mock-flights';
import {Flight} from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  public getFlights(): Flight[] {
    return FLIGHTS;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }
}
