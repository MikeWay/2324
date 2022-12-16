import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { Flight } from '../model/flight';
import { Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Payment } from '../model/payment';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatButtonModule],
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
        email: new FormControl<string>('',{validators: [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")], nonNullable: true}),
    cardNum: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    cardType: new FormControl<string>('',{validators: Validators.required, nonNullable: true}),
    expDate: new FormControl<string>('', {validators: [Validators.required, Validators.min(6)], nonNullable: true})

  })

  constructor( @Inject(MAT_DIALOG_DATA) flight: Flight,  public dialogRef: MatDialogRef<PaymentComponent>) { 
    this.selectedFlight = flight;
  }

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
    //alert(JSON.stringify(this.payForm.value));
    const payment = new FlightPayment(this.selectedFlight, this.payForm.value as Payment)
    this.paymentConfirmed.emit(payment);
    this.dialogRef.close(payment);
  }

  private buildSampleModel(): void {
    this.model.name = 'A Customer';
    this.model.address = 'Customer Address';
    this.model.email = 'a.customer@ltree.com';
    this.model.cardNum = '1234123412341234';
    this.model.cardType = 'VISA';
    this.model.expDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');// -- as a string type
    //this.model.expDate = new Date();

  }  

  close() {
    this.dialogRef.close(new FlightPayment(this.selectedFlight, this.payForm.value as Payment));
  }
}

export class FlightPayment {
  constructor( public flight: Flight, public payment: Payment){}
}
