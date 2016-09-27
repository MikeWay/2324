import {Component, OnInit} from '@angular/core';
import {Flight} from "../model/flight";
import {Input} from "@angular/core/src/metadata/directives";
import {Payment} from "../model/payment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selectedFlight: Flight;
  model: Payment = new Payment();
  payForm: FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.payForm = formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.minLength(5)])],
      'address': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")])],
      'cardNum': ['', Validators.required],
      'cardType': ['', Validators.required],
      'expDate': ['', Validators.required],

    });

  }

  ngOnInit() {
  }

  get jsonModel() {
    return JSON.stringify(this.model);
  }

  onSubmit(): void {
    alert(this.jsonModel);
  }
}
