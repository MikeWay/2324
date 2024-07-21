import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';
import { PaymentComponent } from '../payment/payment.component';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [PaymentComponent, FlightFilterComponent],
  templateUrl: './buy-flight.component.html',
  styleUrl: './buy-flight.component.scss'
})
export class BuyFlightComponent {
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';

  constructor(private stateService: ApplicationStateService)
  {}

  get flights(){
    return this.stateService.flights.filter((flight)=>this.originDestinationFilter(flight));
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

  originDestinationFilter(flight: Flight): boolean {
    if(this.originFilter != ''){
      if(!flight.origin.startsWith(this.originFilter))return false;
    }
    return true;
  }  
}


