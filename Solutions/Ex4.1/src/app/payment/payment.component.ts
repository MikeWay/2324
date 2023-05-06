import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  @Input() selectedFlight: Flight | undefined;
}
