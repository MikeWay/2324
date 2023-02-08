import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationStateService } from '../application-state/application-state.service';
import { CurrencyConversionPipe } from '../currency-conversion/currency-conversion.pipe';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { Flight } from '../model/flight';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss'],
  standalone: true,
  imports: [CommonModule, PaymentComponent, FlightFilterComponent, CurrencyConversionPipe],  
})
export class BuyFlightComponent implements OnInit {
  _flights! : Flight[];
  selectedFlight: Flight | undefined;
  showBuyFlights = true;
  originFilter = '';
  destinationFilter ='';

  constructor(private stateService: ApplicationStateService, private activatedRoute: ActivatedRoute){}
  
  get currencySymbol(): string {
    return this.stateService.displayCurrency.symbol
  }

  get currencyRate(): number {
    return this.stateService.displayCurrency.rate
  }

  loadFlights(start: number, count: number){
    this.stateService.loadFlights(start, count, this.originFilter, this.destinationFilter);
    this._flights = this.stateService.getFlights();
  }

  get flights(): Flight[] {
    this.loadFlights(0,20);
    return this._flights;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }  

  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
  }   

  onFlightClick(flight : Flight): void {
    this.selectedFlight = flight;

}  
  
  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.originFilter = params['origin'];
      this.destinationFilter = params['destination'];
    });
  }  

}

