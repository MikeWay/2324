import { Component, inject } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';
import { Payment } from '../payment/payment';
import { Flight } from '../model/flight';
import { FlightFilter } from '../flight-filter/flight-filter';

@Component({
  selector: 'app-buy-flight',
  imports: [Payment, FlightFilter],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  private stateService = inject(ApplicationState);
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';


  get flights() {
    return this.stateService.flights.filter((flight: Flight) => this.originDestinationFilter(flight));
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight) {
    this.selectedFlight = flight;
  }

  onOriginFilterChange(filter: string) {
    this.originFilter = filter;
    this.stateService.originFilter = filter;
  }

  private originDestinationFilter(flight: Flight): boolean {
    return !this.originFilter || flight.origin.includes(this.originFilter);
  }
}
