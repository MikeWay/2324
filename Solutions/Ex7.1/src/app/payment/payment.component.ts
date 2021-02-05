import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() selectedFlight: Flight | undefined;

  model: Payment = new Payment();

  constructor() { }

  ngOnInit(): void {
  }

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }


  onSubmit(): void {
    alert(this.jsonModel);
  }

}
