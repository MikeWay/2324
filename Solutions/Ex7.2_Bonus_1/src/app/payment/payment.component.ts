import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../model/flight';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Payment } from '../model/payment';
import { formatDate, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{

  private _selectedFlight: Flight | undefined;
  model: Payment = new Payment();
  payForm =  new FormGroup({
    name: new FormControl<string>('',{validators: [Validators.required,Validators.minLength(5)], nonNullable: true}),
    address: new FormControl<string>('',{validators: [Validators.required,Validators.minLength(10), Validators.maxLength(128)], nonNullable: true}),
    email: new FormControl<string>('',{validators: [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")], nonNullable: true}),
    cardNum: new FormControl<string>('',{validators: [Validators.required,Validators.minLength(13)], nonNullable: true}),
    cardType: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    expDate: new FormControl<string>('', {validators: Validators.required, nonNullable: true})
  });

  @Output()
  paymentConfirmed: EventEmitter<FlightPaymentEvent> = new EventEmitter<FlightPaymentEvent>();

  @Input()
  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }
  set selectedFlight(flight: Flight | undefined) {
    this._selectedFlight = flight;
  }
  get jsonModel(): string {
    return JSON.stringify(this.model);
  }

  onSubmit() {
    if(this._selectedFlight){
      this.paymentConfirmed.emit(new FlightPaymentEvent(this._selectedFlight, this.payForm.value as Payment));
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
    this.payForm.setValue(this.model);  }  
}
	
export class FlightPaymentEvent {
  constructor( public flight: Flight, public payment: Payment){}
  
}