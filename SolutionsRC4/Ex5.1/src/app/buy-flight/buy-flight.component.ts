import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";
import {PaymentComponent} from "../payment/payment.component";

@Component({
  moduleId: module.id,
  selector: 'app-buy-flight',
  templateUrl: 'buy-flight.component.html',
  styleUrls: ['buy-flight.component.css'],
  directives: [PaymentComponent]
})
export class BuyFlightComponent implements OnInit {

  flights : Flight[];
  showBuyFlights = true;
  selectedFlight : Flight;

  constructor(private flightsService : FlightsService ){}


  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  private onFlightClick(flight : Flight){
    this.selectedFlight = flight;

  }

  ngOnInit() {
    this.flights = this.flightsService.getFlights();
  }

}

