import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  payForm = this.formBuilder.group({
    name: ['', [Validators.required,Validators.minLength(5)]],
    address: ['', Validators.required],
    email: ['', Validators.required],
    cardNum: ['', Validators.required],
    cardType: ['', Validators.required],
    expDate: [new Date(), Validators.required],
   });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildSampleModel();
    this.payForm.setValue(this.model);
  }

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }


  onSubmit(): void {
    alert(this.jsonModel);
  }

  private buildSampleModel(): void {
    this.model.name = 'A Customer';
    this.model.address = 'Customer Address';
    this.model.email = 'a.customer@ltree.com';
    this.model.cardNum = '1234123412341234';
    this.model.cardType = 'VISA';
    this.model.expDate = new Date();
  }  
}
