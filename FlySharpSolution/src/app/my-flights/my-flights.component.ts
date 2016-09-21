import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import {FlightsService} from "../services/flights.service";

@Component({
  selector: 'app-my-flights',
  templateUrl: 'my-flights.component.html',
  styleUrls: ['my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {
  private flights : Flight[];
  private selectedFlight : Flight;

  constructor(private flightService: FlightsService) {}

  ngOnInit() {
    this.flights = this.flightService.getMyFlights();
    this.selectedFlight = this.flights[0];
  }

}
