import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationState } from '../application-state/application-state';
import { Payment } from '../payment/payment';
import { Flight } from '../model/flight';
import { FlightFilter } from '../flight-filter/flight-filter';
import { CurrencyConversionPipe } from '../currency-conversion/currency-conversion-pipe';

@Component({
  selector: 'app-buy-flight',
  imports: [Payment, FlightFilter, CurrencyConversionPipe],
  templateUrl: './buy-flight.html',
  styleUrl: './buy-flight.scss',
})
export class BuyFlight implements OnInit {
  private stateService = inject(ApplicationState);
  private route = inject(ActivatedRoute);
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';
  destinationFilter = '';

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
