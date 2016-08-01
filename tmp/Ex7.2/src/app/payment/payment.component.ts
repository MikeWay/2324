import {Component, OnInit, Input} from '@angular/core';
import {Flight} from "../model/flight";
import {Payment} from "../model/payment";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FORM_DIRECTIVES} from "@angular/forms";
import {AbstractControl} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
  directives: [ REACTIVE_FORM_DIRECTIVES]
})
export class PaymentComponent implements OnInit {

  model: Payment = new Payment();

  nameCtrl: AbstractControl;
  emailCtrl: AbstractControl;
  @Input()
  selectedFlight : Flight;
  payForm : FormGroup;

  constructor( formBuilder: FormBuilder ) {
    this.payForm= formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.minLength(5)])],
      'address': ['', Validators.required],
      'email': ['', Validators.required],
      'cardNum': ['', Validators.required],
      'cardType': ['', Validators.required],
      'expDate': ['', Validators.required],
    });

    this.emailCtrl = this.payForm.controls['email'];
  }

  ngOnInit() {
  }


  onSubmit() : void {
    alert(this.jsonModel);
  }

  get jsonModel() { return JSON.stringify(this.model); }
}
