import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationState } from '../application-state/application-state';
import { Payment } from '../payment/payment';
import { Flight } from '../model/flight';
import { FlightFilter } from '../flight-filter/flight-filter';
import { CurrencyConversionPipe } from '../currency-conversion/currency-conversion-pipe';
import { FlightPaymentEvent } from '../model/flight-payment-event';

const FLIGHTS_PER_PAGE = 10;

@Component({
  selector: 'app-buy-flight',
  imports: [Payment, FlightFilter, CurrencyConversionPipe],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight implements OnInit {
  private stateService = inject(ApplicationState);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';
  destinationFilter = '';
  firstDisplayedFlightIndex = 0;
  showNext = false;
  showPrevious = false;
  flightCount = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const origin = params.get('origin');
      if (origin) {
        this.originFilter = origin.toUpperCase();
      }
      const destination = params.get('destination');
      if (destination) {
        this.destinationFilter = destination.toUpperCase();
      }
    });
  }

  get currencySymbol(): string {
    return this.stateService.displayCurrency.symbol;
  }

  get currencyRate(): number {
    return this.stateService.displayCurrency.rate;
  }

  get flights() {
    const filtered = this.stateService.flights.filter((flight: Flight) => this.originDestinationFilter(flight));
    this.flightCount = filtered.length;
    return filtered.slice(this.firstDisplayedFlightIndex, this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE);
  }

  get errorMessage(): string {
    return this.stateService.error;
  }

  onNext() {
    const maxIndex = this.flightCount - FLIGHTS_PER_PAGE;
    this.firstDisplayedFlightIndex = Math.min(this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE, Math.max(maxIndex, 0));
  }

  onPrevious() {
    this.firstDisplayedFlightIndex = Math.max(this.firstDisplayedFlightIndex - FLIGHTS_PER_PAGE, 0);
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight) {
    this.selectedFlight = flight;
  }

  onPaymentConfirmed(event: FlightPaymentEvent) {
    this.router.navigate(['/myflights']);
    this.stateService.addMyFlight(event.flight);
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
