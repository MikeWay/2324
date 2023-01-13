import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss']
})
export class BuyFlightComponent implements OnInit {
  flights! : Flight[];
  selectedFlight: Flight | undefined;
  showBuyFlights = true;

  constructor(private stateService: ApplicationStateService){}

  onFlightClick(flight : Flight): void {
    this.selectedFlight = flight;

}  
  
  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }  

  ngOnInit(): void {
    this.flights = this.stateService.getFlights();    
  }

}

