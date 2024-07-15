import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';
import { PaymentComponent } from '../payment/payment.component';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { ActivatedRoute } from '@angular/router';
import { CurrencyConversionPipe } from '../currency-conversion/currency-conversion.pipe';

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [PaymentComponent, FlightFilterComponent, CurrencyConversionPipe],
  templateUrl: './buy-flight.component.html',
  styleUrl: './buy-flight.component.scss'
})
export class BuyFlightComponent implements OnInit {
  _flights!: Flight[];
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';
  destinationFilter = '';

  constructor(private stateService: ApplicationStateService, private activatedRoute: ActivatedRoute)
  {}
  get flights(){
    this.loadFlights(0,20);
    return this._flights;
  }

  loadFlights(start: number, count: number){
    this.stateService.loadFlights(start,count,this.originFilter, this.destinationFilter);
    this._flights = this.stateService._flights;
  }
  onFlightClick(flight: Flight){
    this.selectedFlight = flight;
  }

  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
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

  ngOnInit(): void {
    this._flights = this.stateService.getFlights();  
    this.activatedRoute.params.subscribe(params => {
      this.originFilter = params['origin'] !== undefined ? params['origin'] : '';
      this.destinationFilter = params['destination'] !== undefined ? params['destination'] : '';
    });
  }  
}


