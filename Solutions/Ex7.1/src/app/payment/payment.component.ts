import {Component, OnInit, Input} from '@angular/core';
import {Flight} from "../model/flight";
import {Payment} from "../model/payment";
import {FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
  directives: [ FORM_DIRECTIVES ]
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;
  model: Payment = new Payment();

  constructor() { }

  get jsonModel() { return JSON.stringify(this.model); }

  onSubmit(): void {
    alert(this.jsonModel);
  }

  ngOnInit() {
  }

}
