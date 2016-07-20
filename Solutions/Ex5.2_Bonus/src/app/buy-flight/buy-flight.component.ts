import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";
import {PaymentComponent} from "../payment/payment.component";
import {FlightFilterComponent} from "../flight-filter/flight-filter.component";

@Component({
  moduleId: module.id,
  selector: 'app-buy-flight',
  templateUrl: 'buy-flight.component.html',
  styleUrls: ['buy-flight.component.css'],
  directives: [PaymentComponent, FlightFilterComponent]
})
export class BuyFlightComponent implements OnInit {

  _flights : Flight[];
  showBuyFlights = false;
  selectedFlight : Flight;
  originFilter : string = null;
  originLabel : string = "Origin:"

  constructor( private flightsService : FlightsService ) {}

  get flights(): Flight[] {
    /**
     * Version of the flight getter that implements a simple filter
     */
    if (this.originFilter != null) {
      return this._flights.map((flight) => {
        console.log(flight);
        var match = flight.origin.startsWith(this.originFilter);
        if (match) {
          return flight;
        }
        // the filter expression stops empty elements being returned (drops the null elements)
      }).filter(x => !!x);
    } else {
      return this._flights;
    }
  }

  onFilterChange(filterValue: string) {
    this.originFilter = filterValue;
  }

  onFlightClick(flight : Flight ){
    this.selectedFlight = flight;
  }

  onClickBuyFlights(){
    this.showBuyFlights = ! this.showBuyFlights;
  }

  ngOnInit() {
    this._flights = this.flightsService.getFlights();
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
