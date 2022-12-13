import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';
import { ApplicationStateService } from '../application-state/application-state.service';

@Component({
  selector: 'app-my-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.css']
})
export class MyFlightsComponent {
  flights!: Flight[];
  error: string = '';
  //private selectedFlight: Flight;

  constructor(private state: ApplicationStateService) {}

  ngOnInit(): void {
    this.flights = this.state.myFlights;
    // this.state.getMyFlights().subscribe({
    //   next: (flights: Flight[]) => this.flights = flights,
    //   error: (msg: string) => this.error = msg
    // });
    //this.selectedFlight = this.flights[0];
  }
}
