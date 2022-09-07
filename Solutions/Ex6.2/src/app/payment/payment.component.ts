import { Component, Input } from '@angular/core';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {

  @Input() selectedFlight: Flight | undefined;

  constructor() { }

  

}
