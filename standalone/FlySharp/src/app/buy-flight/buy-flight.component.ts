import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightPaymentEvent, PaymentComponent } from '../payment/payment.component';
import { CurrencyConversionPipe } from '../currency-conversion.pipe';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Observable, map, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

const FLIGHTS_PER_PAGE = 20;
export const SHOW_BUY_FLIGHTS_STATE = new InjectionToken<boolean>('ShowBuyFlightsState');

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [CommonModule, PaymentComponent, 
            CurrencyConversionPipe, FlightFilterComponent 
            ],
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss']
})
export class BuyFlightComponent implements OnInit{

  showBuyFlights = true; 
  flightCount = 0;
  _selectedFlight: Flight | undefined;

  originFilter = '';
  destinationFilter = '';
  errorMessage = '';

  conversionRate = 4.0;
  firstDisplayedFlightIndex = 0;
  nextFlightToDisplayIndex = 0;
  numFlights = 0;
  showNext = false;
  showPrevious = false;

  constructor(public state: ApplicationStateService, 
                private activatedRoute: ActivatedRoute, 
                private router: Router, 
                public matDialog: MatDialog)  
    {}

  get flights$(): Observable<Flight[]>{
    return this.state.flights$.pipe(
      map((flights: Flight[]) => flights.filter((flight) => this.orgDestFilter(flight))),
      map((flights: Flight[]) => {
        this.flightCount = flights.length;
        const end = this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE <= this.flightCount ? this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE: this.flightCount;
        return flights.slice(this.firstDisplayedFlightIndex,end)     
      }
    ));
  }

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.originFilter = params['origin'];
      this.destinationFilter = params['destination'];});

  }

  ngAfterContentChecked(): void {
    this.showNext = (this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE + 1) < this.flightCount; 
    this.showPrevious = this.firstDisplayedFlightIndex > 0;   
  }

  /**
   * Origin/destination filter function.
   * @param flight 
   * @returns true if the flight matches the origin and destination
   */
  private orgDestFilter(flight: Flight): boolean{
    if(this.originFilter && this.originFilter !== ''){
      if(flight.origin !== this.originFilter) return false;
    }
    if(this.destinationFilter && this.destinationFilter !== ''){
      if(flight.destination !== this.destinationFilter) return false;
    }
    return true;
  }

  toggleFlightDisplay(): void {
    this.showBuyFlights = !this.showBuyFlights;
  }

  buyFlight(flight: Flight): void {
    this._selectedFlight = flight;
    this.openModalBuyFlightDialog();
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
  }

  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
  }

  onNext(): void {
    this.firstDisplayedFlightIndex += FLIGHTS_PER_PAGE;
  }


  onPrevious(): void {
    // Don't load flights pre 0
    if (this.firstDisplayedFlightIndex > FLIGHTS_PER_PAGE) {
      this.firstDisplayedFlightIndex -= FLIGHTS_PER_PAGE;
    } else {
      this.firstDisplayedFlightIndex = 0;
    }
  }

  /**
   * Process the confirmation that a flight was purchased
   * @param payment
   */

  flightPurchased(payment: FlightPaymentEvent): void {
      // Update MyFlights
      this.state.addMyFlight(payment.flight);
      this.router.navigate(['/myflights']);  
  }


  openModalBuyFlightDialog() {
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

