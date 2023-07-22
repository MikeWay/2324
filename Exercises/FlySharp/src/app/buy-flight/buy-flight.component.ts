import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss']
})
export class BuyFlightComponent implements OnInit {

  _flights!: Flight[] ;
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';

  constructor(private stateService: ApplicationStateService){}
	
  get flights(): Flight[] {
    return this._flights.filter(flight => this.orginDestinationFilter(flight)? flight : null); 
  }

  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight){
    this.selectedFlight = flight;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }
  
  ngOnInit(): void {
    this._flights = this.stateService.getFlights(); 
  } 
  
	
  private orginDestinationFilter(flight: Flight): boolean {
    if (this.originFilter === '') return true;
    if(flight.origin.startsWith(this.originFilter)) return true;
    return false;
  } 
}

