import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationState } from '../application-state/application-state';
import { Flight } from '../model/flight';
import { FlightPaymentEvent, Payment } from '../payment/payment';
import { FlightFilter } from '../flight-filter/flight-filter';
import { CurrencyConversionPipe } from '../currency-conversion/currency-conversion-pipe';

const FLIGHTS_PER_PAGE = 10;

@Component({
  selector: 'app-buy-flight',
  imports: [Payment, FlightFilter, CurrencyConversionPipe],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight {
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';
  destinationFilter = '';
  firstDisplayedFlightIndex = 0;
  flightCount = 0;

  constructor(private stateService: ApplicationState, private route: ActivatedRoute, private router: Router) {
    const origin = this.route.snapshot.paramMap.get('origin');
    if (origin !== null) {
      this.originFilter = origin;
    }
    const destination = this.route.snapshot.paramMap.get('destination');
    if (destination !== null) {
      this.destinationFilter = destination;
    }
  }

  get flights(): Flight[] {
    const filteredFlights = this.stateService.flights.filter((flight) =>
      this.originDestinationFilter(flight)
    );
    this.flightCount = filteredFlights.length;
    return filteredFlights.slice(this.firstDisplayedFlightIndex, this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE);
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

  flightPurchased(event: FlightPaymentEvent): void {
    this.stateService.addMyFlight(event.flight);
    this.router.navigate(['/myflights']);
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onNext(): void {
    if (this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE <= this.flightCount) {
      this.firstDisplayedFlightIndex += FLIGHTS_PER_PAGE;
    }
  }

  onPrevious(): void {
    if (this.firstDisplayedFlightIndex >= FLIGHTS_PER_PAGE) {
      this.firstDisplayedFlightIndex -= FLIGHTS_PER_PAGE;
    }
  }

  get errorMessage(): string {
    return this.stateService.error;
  }

  get currencySymbol(): string {
    return this.stateService.displayCurrency.symbol;
  }

  get currencyRate(): number {
    return this.stateService.displayCurrency.rate;
  }
}
