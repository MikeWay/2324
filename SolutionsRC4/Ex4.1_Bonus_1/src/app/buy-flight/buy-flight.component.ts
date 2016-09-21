import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";

@Component({
  moduleId: module.id,
  selector: 'app-buy-flight',
  templateUrl: 'buy-flight.component.html',
  styleUrls: ['buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  flights : Flight[];
  showBuyFlights = true;

  constructor(private flightsService : FlightsService ){}


  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  ngOnInit() {
    this.flights = this.flightsService.getFlights();
  }

}

