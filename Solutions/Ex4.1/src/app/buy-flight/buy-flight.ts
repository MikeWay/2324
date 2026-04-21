import { Component, inject } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';
import { Payment } from '../payment/payment';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  imports: [Payment],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  private stateService = inject(ApplicationState);
  showBuyFlights = true;
  selectedFlight: Flight | undefined;

  get flights() {
    return this.stateService.flights;
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight) {
    this.selectedFlight = flight;
  }
}
