import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe, formatDate } from '@angular/common';
import { Flight } from '../model/flight';
import { PaymentModel } from '../model/payment';
import { FlightPaymentEvent } from '../model/flight-payment-event';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment implements OnInit {
  model: PaymentModel = new PaymentModel();
  @Output() paymentConfirmed = new EventEmitter<FlightPaymentEvent>();
  private _selectedFlight: Flight | undefined;

  payForm = new FormGroup({
    name: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(5)], nonNullable: true }),
    address: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
    email: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
    cardNum: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
    cardType: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
    expDate: new FormControl<string>('', { validators: Validators.required, nonNullable: true })
  });

  @Input() set selectedFlight(value: Flight | undefined) {
    this._selectedFlight = value;
  }

  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  ngOnInit(): void {
    this.buildSampleModel();
    this.payForm.setValue(this.model);
  }

  private buildSampleModel(): void {
    this.model.name = 'A Customer';
    this.model.address = 'Customer Address';
    this.model.email = 'a.customer@ltree.com';
    this.model.cardNum = '1234123412341234';
    this.model.cardType = 'VISA';
    this.model.expDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }

  onSubmit(): void {
    if (this.selectedFlight) {
      const payment = new FlightPaymentEvent(this.selectedFlight, this.payForm.value as PaymentModel);
      this.paymentConfirmed.emit(payment);
    }
  }
}
