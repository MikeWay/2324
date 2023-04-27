import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightPaymentEvent, PaymentComponent } from '../payment/payment.component';
import { CurrencyConversionPipe } from '../currency-conversion.pipe';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [CommonModule, PaymentComponent, 
            CurrencyConversionPipe, FlightFilterComponent 
            ],
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss']
})
export class BuyFlightComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: variable-name
  //flights: Flight[] = new Array<Flight>();
  flights$ : Observable<Flight[]> = this.state.flights$;
  showBuyFlights = false;
  flightCount = 0;
  // tslint:disable-next-line: variable-name
  _selectedFlight: Flight | undefined;

  originFilter = '';
  destinationFilter = '';
  errorMessage = '';

  conversionRate = 4.0;
  firstDisplayedFlightIndex = 0;
  nextFlightToDisplayIndex = 0;
  numFlights = 0;

  private flightsSubscription: Subscription | undefined;


  constructor(public state: ApplicationStateService, private activatedRoute: ActivatedRoute, private router: Router, public matDialog: MatDialog) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.originFilter = params['origin'];
      this.destinationFilter = params['destination'];});
    this.loadFlights(this.firstDisplayedFlightIndex, 20);
  }

  ngOnDestroy(): void {
    if(this.flightsSubscription){
      this.flightsSubscription.unsubscribe();
    }
  }
  private loadFlights(start: number, count: number) {
    this.state.loadFlights(start, count, this.originFilter, this.destinationFilter);
    this.flightsSubscription = this.state.flights$.subscribe({
      next: (flights: Flight[]) => {
        this.showBuyFlights = true;
        this.nextFlightToDisplayIndex = this.firstDisplayedFlightIndex + flights.length
      },
      error: (error: string) => this.errorMessage = error
    });
    this.state.flightsCount$.subscribe({
      next: (count) => this.flightCount = count
    });
  }

  toggleFlightDisplay(): void {
    this.showBuyFlights = !this.showBuyFlights;
  }

  buyFlight(flight: Flight): void {
    this._selectedFlight = flight;
    this.openModal();
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
    if(this.firstDisplayedFlightIndex >= this.flightCount) return;
    const numFlights = (this.nextFlightToDisplayIndex  + 20 >= this.flightCount)?this.flightCount - this.nextFlightToDisplayIndex: 20;
    this.loadFlights(this.nextFlightToDisplayIndex, numFlights);
    this.firstDisplayedFlightIndex = this.nextFlightToDisplayIndex;
    this.nextFlightToDisplayIndex += numFlights;
  }


  onPrevious(): void {
    // Don't load flights pre 0
    if (this.firstDisplayedFlightIndex > 20) {
      this.firstDisplayedFlightIndex -= 20;
    } else {
      this.firstDisplayedFlightIndex = 0;
    }
    this.loadFlights(this.firstDisplayedFlightIndex, 20);
  }

  /**
   * Process the confirmation that a flight was purchased
   * @param payment
   */

  flightPurchased(payment: FlightPaymentEvent): void {
      // Record Purchase -- maybe one day!

      // Update MyFlights
      this.state.addMyFlight(payment.flight);
      this.router.navigate(['/myflights']);
      // .subscribe({
      //   next: (data) => this.router.navigate(['/myflights']),
      //   error: (msg: string) => this.errorMessage = msg
      // });     
  }


  openModal() {
    const dialogConfig = {
    // The user can't close the dialog by clicking outside its body
      disableClose: true,
      id:"modal-component",
      data: this._selectedFlight
    };

    // https://material.angular.io/components/dialog/overview
    const modalDialogRef = this.matDialog.open(PaymentComponent, dialogConfig);
    modalDialogRef.afterClosed().subscribe((flightPayment: FlightPaymentEvent | null) => {
      // Handle result from the Dialog - null if the dialog was dismissed
      if(flightPayment){
        this.flightPurchased(flightPayment);
      }
    });
  }

}

