import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() selectedFlight: Flight | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
