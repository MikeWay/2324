import { Flight } from './flight';
import { PaymentModel } from './payment';

export class FlightPaymentEvent {
  constructor(public flight: Flight, public payment: PaymentModel) {}
}
