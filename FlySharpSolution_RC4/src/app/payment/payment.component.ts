import { Component, Input, OnInit } from '@angular/core';

import { Flight } from '../model/flight';
import { Payment } from '../model/payment';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, AbstractControl, Validators} from "@angular/forms";



@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PaymentComponent implements OnInit {

  private model: Payment = new Payment();
  private payForm: FormGroup;
  private name: AbstractControl;
  private address: AbstractControl;
  private email: AbstractControl;

  @Input()
  selectedFlight: Flight;

  constructor(formBuilder : FormBuilder ) {

    this.payForm= formBuilder.group({
    	'name': ['default', Validators.compose([Validators.required, Validators.minLength(5)])],

      'address': ['', Validators.required],
      'email': ['', Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$")],
      'cardNum': ['', Validators.required],
      'cardType': ['', Validators.required],
      'expDate': ['', Validators.required],
    });
    this.name = this.payForm.controls['name'];
    this.address = this.payForm.controls['address'];
    this.email = this.payForm.controls['email'];
  }

  get jsonModel() { return JSON.stringify(this.model); }

  onSubmit(): void {
    alert(this.jsonModel);
  }

  ngOnInit() {
  }

}
