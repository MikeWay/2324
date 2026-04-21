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
  destinationFilter = '';

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
  }

  onDestinationFilterChange(filter: string) {
    this.destinationFilter = filter;
  }

  private originDestinationFilter(flight: Flight): boolean {
    const matchOrigin = !this.originFilter || flight.origin.includes(this.originFilter);
    const matchDest = !this.destinationFilter || flight.destination.includes(this.destinationFilter);
    return matchOrigin && matchDest;
  }
}
