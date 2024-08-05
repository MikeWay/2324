import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';
import { FlightPaymentEvent, PaymentComponent } from '../payment/payment.component';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyConversionPipe } from '../currency-conversion/currency-conversion.pipe';

import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog'

const FLIGHTS_PER_PAGE = 10;
@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [PaymentComponent, FlightFilterComponent, CurrencyConversionPipe,MatCardModule,MatButtonModule],
  templateUrl: './buy-flight.component.html',
  styleUrl: './buy-flight.component.scss'
})
export class BuyFlightComponent {
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';
  destinationFilter = '';

  firstDisplayedFlightIndex = 0;
  showNext = false;
  showPrevious = false;
  flightCount = 0;


  constructor(private stateService: ApplicationStateService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              public matDialog: MatDialog) { }

  get flights() {
    const filteredFlights = this.stateService.flights.filter((flight) => this.originDestinationFilter(flight));
    this.flightCount = filteredFlights.length;
    return filteredFlights.slice(this.firstDisplayedFlightIndex, this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE);
  }

  get errorMessage() {
    return this.stateService.error;
  }

  get enableNextBut(): boolean {
    return this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE <= this.flightCount;
  }

  get enablePreviousBut(): boolean {
    return this.firstDisplayedFlightIndex > 0;
  }

  onFlightClick(flight: Flight) {
    this.selectedFlight = flight;
    this.openModalBuyFlightDialog();
  }

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  onNext(){
    if(this.firstDisplayedFlightIndex + FLIGHTS_PER_PAGE <= this.flightCount){
      this.firstDisplayedFlightIndex += FLIGHTS_PER_PAGE;
    }

  }

  onPrevious(){
    if(this.firstDisplayedFlightIndex >= FLIGHTS_PER_PAGE){
      this.firstDisplayedFlightIndex -= FLIGHTS_PER_PAGE;
    }
  }


  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
  }

  get currencySymbol(): string {
    return this.stateService.displayCurrency.symbol
  }

  get currencyRate(): number {
    return this.stateService.displayCurrency.rate
  }

  flightPurchased(paymentEvent: FlightPaymentEvent) {
    this.stateService.addMyFlight(paymentEvent.flight);
    this.router.navigate(['/myflights']);
  }

  originDestinationFilter(flight: Flight): boolean {
    if (this.originFilter != '') {
      if (!flight.origin.startsWith(this.originFilter)) return false;
    }
    if (this.destinationFilter != '') {
      if (!flight.destination.startsWith(this.destinationFilter)) return false;
    }
    return true;
  }

  openModalBuyFlightDialog() {
    const dialogConfig = {
    // The user can't close the dialog by clicking outside its body
      disableClose: true,
      id:"modal-component",
      data: this.selectedFlight,
      height: '600px',
      width: '600px'
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


