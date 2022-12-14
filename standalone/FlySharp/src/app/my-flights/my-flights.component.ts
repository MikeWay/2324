import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  error = '';
 
  constructor(public state: ApplicationStateService) {}

}
