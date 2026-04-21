import { Component, inject } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';

@Component({
  selector: 'app-buy-flight',
  imports: [],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  private stateService = inject(ApplicationState);
  showBuyFlights = true;

  get flights() {
    return this.stateService.flights;
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }
}
