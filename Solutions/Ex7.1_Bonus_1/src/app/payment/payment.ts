import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';
import { PaymentModel } from '../model/payment';
import { FlightPaymentEvent } from '../model/flight-payment-event';

@Component({
  selector: 'app-payment',
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  model: PaymentModel = new PaymentModel();
  @Output() paymentConfirmed = new EventEmitter<FlightPaymentEvent>();
  private _selectedFlight: Flight | undefined;

  @Input() set selectedFlight(value: Flight | undefined) {
    this._selectedFlight = value;
  }

  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }

  onSubmit(): void {
    if (this.selectedFlight) {
      const payment = new FlightPaymentEvent(this.selectedFlight, this.model);
      this.paymentConfirmed.emit(payment);
    }
  }
}
