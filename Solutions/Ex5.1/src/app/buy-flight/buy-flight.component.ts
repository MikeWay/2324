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
  showBuyFlights = false;
  selectedFlight : Flight;

  constructor( private flightsService : FlightsService ) {}

  ngOnInit() {
    this.flights = this.flightsService.getFlights();
  }

  onFlightClick(flight : Flight ){
    this.selectedFlight = flight;
  }

  onClickBuyFlights(){
    this.showBuyFlights = ! this.showBuyFlights;
  }
}


var FLIGHTS = [
  {"id": 11, "flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR", "departDay" : "Monday",
    departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
  {"id": 12, "flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR", "departDay" : "Tuesday",
    departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
  {"id": 13, "flightNumber" : "FS1211", "origin": "LHR", "destination" : "ARN", "departDay" : "Wednesday",
    departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
];
