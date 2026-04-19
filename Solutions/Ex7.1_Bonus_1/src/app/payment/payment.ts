import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';
import { PaymentModel } from '../model/payment';

@Component({
  selector: 'app-payment',
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  private _selectedFlight: Flight | undefined;
  model: PaymentModel = new PaymentModel();

  @Output()
  paymentConfirmed = new EventEmitter<FlightPaymentEvent>();

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }

  @Input()
  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  set selectedFlight(value: Flight | undefined) {
    this._selectedFlight = value;
  }

  onSubmit(): void {
    if (this._selectedFlight) {
      this.paymentConfirmed.emit(new FlightPaymentEvent(this._selectedFlight, this.model));
    }
  }
}

export class FlightPaymentEvent {
  constructor(public flight: Flight, public payment: PaymentModel) {}
}
