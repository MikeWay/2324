import { Component } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';
import { Flight } from '../model/flight';
import { Payment } from '../payment/payment';

@Component({
  selector: 'app-buy-flight',
  imports: [Payment],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  showBuyFlights = true;
  selectedFlight: Flight | undefined;

  constructor(private stateService: ApplicationState) {}

  get flights(): Flight[] {
    return this.stateService.flights;
  }

  onFlightClick(flight: Flight): void {
    this.selectedFlight = flight;
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }
}
