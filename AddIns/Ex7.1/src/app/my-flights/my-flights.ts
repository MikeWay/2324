import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { ApplicationState } from '../application-state/application-state';

@Component({
  selector: 'app-my-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-flights.html',
  styleUrls: ['./my-flights.scss']
})
export class MyFlights {
  flights: Flight[];
  error = '';
 
  constructor(public state: ApplicationState) {
    this.flights = state._myFlights;
  }

}