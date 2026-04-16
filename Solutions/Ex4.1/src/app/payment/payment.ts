import { Component, Input } from '@angular/core';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  @Input() selectedFlight: Flight | undefined;
}
