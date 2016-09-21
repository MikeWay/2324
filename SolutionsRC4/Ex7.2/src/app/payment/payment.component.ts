import {Component, OnInit, Input} from '@angular/core';
import {Flight} from "../model/flight";
import {Payment} from "../model/payment";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
  directives: [ REACTIVE_FORM_DIRECTIVES  ]
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;
  model: Payment = new Payment();
  payForm : FormGroup;

  constructor(formBuilder : FormBuilder) {
    this.payForm= formBuilder.group({

      'name': ['', Validators.compose([Validators.required,Validators.minLength(5)])],
      'address': ['', Validators.required],
      'email': ['', Validators.required],
      'cardNum': ['', Validators.required],
      'cardType': ['', Validators.required],
      'expDate': ['', Validators.required],

    });
  }

  get jsonModel() { return JSON.stringify(this.model); }

  onSubmit(): void {
    alert(this.jsonModel);
  }

  ngOnInit() {
  }

}
