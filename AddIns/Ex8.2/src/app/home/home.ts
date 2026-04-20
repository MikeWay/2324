import { Component } from '@angular/core';
import { FlightStatus } from '../flight-status/flight-status';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlightStatus],
  template: `<h1>Special Offer of the month {{specialOffer}}</h1><app-flight-status/>`
})
export class Home {
  specialOffer = "10% off all round-the-World flights";
}
