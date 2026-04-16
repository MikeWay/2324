import { Component } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  imports: [],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  showBuyFlights = true;

  constructor(private stateService: ApplicationState) {}

  get flights(): Flight[] {
    return this.stateService.flights;
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }
}
