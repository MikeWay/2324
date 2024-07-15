import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  private _selectedFlight: Flight | undefined;
  model: Payment = new Payment();
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
      this.paymentConfirmed.emit(new FlightPaymentEvent(this._selectedFlight, this.model));
    }
  }

}
	
export class FlightPaymentEvent {
  constructor( public flight: Flight, public payment: Payment){}
}