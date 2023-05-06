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
  showBuyFlights = true;

  constructor(private stateService: ApplicationStateService){}
	
  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }  

  ngOnInit(): void {
    this.flights = this.stateService.getFlights()
  }  
}


