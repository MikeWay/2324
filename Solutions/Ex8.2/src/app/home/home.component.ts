import { Component } from "@angular/core";
import { FlightStatusComponent } from "../flight-status/flight-status.component";

@Component({
  selector: 'app-home',
    standalone: true,
    imports: [FlightStatusComponent],
    template: `<h1>Special Offer of the month {{specialOffer}}</h1><app-flight-status/>`,
})
export class HomeComponent {
  specialOffer = '10% off all round-the-World flights';
}