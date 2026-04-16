import { Component } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';
import { Flight } from '../model/flight';
import { Payment } from '../payment/payment';
import { FlightFilter } from '../flight-filter/flight-filter';

@Component({
  selector: 'app-buy-flight',
  imports: [Payment, FlightFilter],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';

  constructor(private stateService: ApplicationState) {}

  get flights(): Flight[] {
    return this.stateService.flights.filter((flight) =>
      this.originDestinationFilter(flight)
    );
  }

  private originDestinationFilter(flight: Flight): boolean {
    if (this.originFilter !== '') {
      if (!flight.origin.startsWith(this.originFilter)) return false;
    }
    return true;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  onFlightClick(flight: Flight): void {
    this.selectedFlight = flight;
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }
}
