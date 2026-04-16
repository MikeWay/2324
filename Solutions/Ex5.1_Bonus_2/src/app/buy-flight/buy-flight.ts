import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  destinationFilter = '';

  constructor(private stateService: ApplicationState, private route: ActivatedRoute) {
    const origin = this.route.snapshot.paramMap.get('origin');
    if (origin !== null) {
      this.originFilter = origin;
    }
  }

  get flights(): Flight[] {
    return this.stateService.flights.filter((flight) =>
      this.originDestinationFilter(flight)
    );
  }

  private originDestinationFilter(flight: Flight): boolean {
    if (this.originFilter !== '') {
      if (!flight.origin.startsWith(this.originFilter)) return false;
    }
    if (this.destinationFilter !== '') {
      if (!flight.destination.startsWith(this.destinationFilter)) return false;
    }
    return true;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
  }

  onFlightClick(flight: Flight): void {
    this.selectedFlight = flight;
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }
}
