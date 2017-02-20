import { Component, OnInit } from '@angular/core';
import {Flight} from "../model/flight";
import {Input} from "@angular/core/src/metadata/directives";
import {Payment} from "../model/payment";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;
  model: Payment = new Payment();

  constructor() { }

  ngOnInit() {
  }
  get jsonModel() {
    return JSON.stringify(this.model);
  }

  onSubmit(): void {
    alert(this.jsonModel);
  }
}
