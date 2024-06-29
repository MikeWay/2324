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
export class BuyFlightComponent implements OnInit {
  _flights!: Flight[];
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';

  constructor(private stateService: ApplicationStateService)
  {}

  onFlightClick(flight: Flight){
    this.selectedFlight = flight;
  }

  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  get flights(): Flight[] {
    return this._flights.filter(flight => this.orginDestinationFilter(flight)? flight : null);
  }

  private orginDestinationFilter(flight: Flight): boolean {
    if (this.originFilter === '') return true;
    if(flight.origin.startsWith(this.originFilter)) return true;
      return false;
  }

  ngOnInit(): void {
    this._flights = this.stateService.getFlights();  
  }  
}


