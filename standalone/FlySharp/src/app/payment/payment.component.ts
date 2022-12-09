import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { Flight } from '../model/flight';
import { Validators, FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() selectedFlight!: Flight;
  @Output() paymentConfirmed: EventEmitter<FlightPayment> = new EventEmitter();

  model: Payment = new Payment();

  payForm =  new FormGroup({
    name: new FormControl<string>('',{validators: [Validators.required,Validators.minLength(5)], nonNullable: true}),
    address: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    email: new FormControl<string>('',{validators: [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")], nonNullable: true}),
    cardNum: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    cardType: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    expDate: new FormControl<Date>(new Date(), {validators: Validators.required, nonNullable: true})

  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.buildSampleModel();
    if(this.model){
      this.payForm.setValue(this.model);
    }
  }

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }


  onSubmit(): void {
    alert(JSON.stringify(this.payForm.value));
    this.paymentConfirmed.emit(new FlightPayment(this.selectedFlight, this.payForm.value as Payment));
  }

  private buildSampleModel(): void {
    this.model.name = 'A Customer';
    this.model.address = 'Customer Address';
    this.model.email = 'a.customer@ltree.com';
    this.model.cardNum = '1234123412341234';
    this.model.cardType = 'VISA';
    //this.model.expDate = formatDate(new Date(), 'yyyy-MM-dd', 'en'); -- as a string type
    this.model.expDate = new Date();

  }  
}

export class FlightPayment {
  constructor( public flight: Flight, public payment: Payment){}
}
