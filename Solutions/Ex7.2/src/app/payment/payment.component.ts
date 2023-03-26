import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { Flight } from '../model/flight';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  _selectedFlight: Flight | undefined;
  model: Payment = new Payment();
  @Output() paymentConfirmed: EventEmitter<FlightPaymentEvent> = new EventEmitter();
  payForm =  new FormGroup({
    name: new FormControl<string>('',{validators: [Validators.required,Validators.minLength(5)], nonNullable: true}),
    address: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    email: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    cardNum: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    cardType: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    expDate: new FormControl<string>('', {validators: Validators.required, nonNullable: true})
  });
  
  @Input()
  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  set selectedFlight(flight: Flight | undefined){
    this._selectedFlight = flight;
  }

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }   

  onSubmit(): void {
    if(this.selectedFlight){
      const payment = new FlightPaymentEvent(this.selectedFlight, this.payForm.value as Payment);      
      this.paymentConfirmed.emit(payment);
    }
  }  

  private buildSampleModel(): void {

    this.model.name = 'A Customer';
    this.model.address = 'Customer Address';
    this.model.email = 'a.customer@ltree.com';
    this.model.cardNum = '1234123412341234';
    this.model.cardType = 'VISA';
    this.model.expDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  }  

  ngOnInit(): void {
    this.buildSampleModel();
    this.payForm.setValue(this.model);
  }
}

export class FlightPaymentEvent {
  constructor( public flight: Flight, public payment: Payment){}
}