import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss']
})
export class BuyFlightComponent {
  _flights! : Flight[];
  selectedFlight: Flight | undefined;
  showBuyFlights = true;
  originFilter = '';
  destinationFilter ='';

  constructor(private stateService: ApplicationStateService){}

	
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


}

