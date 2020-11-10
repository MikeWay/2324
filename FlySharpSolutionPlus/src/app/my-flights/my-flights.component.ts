import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import {FlightsService} from '../flights/flights.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {
  flights : Flight[];
  private selectedFlight : Flight;

  constructor(private flightService: FlightsService) {}

  ngOnInit() {
    this.flights = this.flightService.getMyFlights();
    if(this.flights && this.flights.length > 0){
      this.selectedFlight = this.flights[0];
    }
  }

}
