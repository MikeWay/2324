import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [],
  templateUrl: './buy-flight.component.html',
  styleUrl: './buy-flight.component.scss'
})
export class BuyFlightComponent{

  showBuyFlights = true;

  constructor(private stateService: ApplicationStateService)
  {}

  get flights(){
    return this.stateService.flights;
  }
  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }
 
}


