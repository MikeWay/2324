import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';
import { FlightPayment, PaymentComponent } from '../payment/payment.component';
import { CurrencyConversionPipe } from '../currency-conversion.pipe';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [CommonModule, PaymentComponent, CurrencyConversionPipe, FlightFilterComponent],
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  flights: Flight[] = new Array<Flight>();
  showBuyFlights = false;
  // tslint:disable-next-line: variable-name
  _selectedFlight: Flight | undefined;

  originFilter = '';
  destinationFilter = '';
  errorMessage = '';

  conversionRate = 4.0;
  nextFlightIndex = 20;
  numFlights = 0;


  constructor(private flightsService: FlightsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.originFilter = params['origin']);
    this.loadFlights(0, 20);
  }

  private loadFlights(start: number, count: number) {
    this.flightsService.getChunkOfFlights(start, count, this.originFilter, this.destinationFilter).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
        this.showBuyFlights = true;
      },
      error: (error: any) => this.errorMessage = error
    });
  }

  onClickBuyFlights(): void {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight): void {
    this._selectedFlight = flight;
  }

  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  set selectedFlight(flight: Flight | undefined) {
    this._selectedFlight = flight;
  }

  set conversionRateString(strRate: string) {
    if (strRate.length > 0) {
      this.conversionRate = parseFloat(strRate);
      if (isNaN(this.conversionRate)) {
        this.conversionRate = 1.0;
      }
    } else {
      this.conversionRate = 1.0;
    }
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
    this.loadFlights(0, 20);
  }

  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
    this.loadFlights(0, 20);
  }

  onNext(): void {
    this.loadFlights(this.nextFlightIndex += 20, 20);
  }


  onPrevious(): void {
    // Don't load flights pre 0
    if (this.nextFlightIndex > 20) {
      this.nextFlightIndex -= 20;
    } else {
      this.nextFlightIndex = 0;
    }
    this.loadFlights(this.nextFlightIndex, 20);
  }

  /**
   * Process the confirmation that a flight was purchased
   * @param payment
   */

  flightPurchased(payment: FlightPayment): void {
      // Record Purchase -- maybe one day!

      // Update MyFlights
      this.flightsService.addMyFlight(payment.flight).subscribe({
        next: (data) => this.router.navigate(['/myflights']),
        error: (msg: string) => this.errorMessage = msg
      });     
  }

}





