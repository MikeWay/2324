import {Component, OnInit, Input} from '@angular/core';
import {Flight} from "../model/flight";
import {Payment} from "../model/payment";
import {FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class PaymentComponent implements OnInit {

  model: Payment = new Payment();
  @Input()
  selectedFlight : Flight;

  constructor() {}

  ngOnInit() {
  }


  onSubmit() : void {
    alert(this.jsonModel);
  }

  get jsonModel() { return JSON.stringify(this.model); }
}
