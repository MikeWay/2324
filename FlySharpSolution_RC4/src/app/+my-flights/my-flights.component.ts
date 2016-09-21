import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service';
import {Flight} from '../model/flight';

@Component({
  moduleId: module.id,
  selector: 'app-my-flights',
  templateUrl: 'my-flights.component.html',
  styleUrls: ['my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {
  private flights : Flight[];
  private selectedFlight : Flight;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flights = this.flightService.getMyFlights();
    this.selectedFlight = this.flights[0];
  }

}
