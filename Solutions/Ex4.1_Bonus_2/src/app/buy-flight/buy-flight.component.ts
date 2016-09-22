import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  flights : Flight[];
  showBuyFlights = true;

  constructor(private flightsService : FlightsService ){}

  ngOnInit() {
    this.flights = this.flightsService.getFlights();
  }

  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }
}



