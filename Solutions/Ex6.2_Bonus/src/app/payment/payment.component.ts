import {Component, OnInit, Input} from '@angular/core';
import {Flight} from "../model/flight";

@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;
  constructor() { }

  ngOnInit() {
  }

}
