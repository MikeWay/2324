import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";
import {PaymentComponent} from "../payment/payment.component";
import {FlightFilterComponent} from "../flight-filter/flight-filter.component";
import {CurrencyConversionPipe} from "../currency/currency-conversion.pipe";

@Component({
  moduleId: module.id,
  selector: 'app-buy-flight',
  templateUrl: 'buy-flight.component.html',
  styleUrls: ['buy-flight.component.css'],
  directives: [PaymentComponent, FlightFilterComponent],
  pipes: [CurrencyConversionPipe]
})
export class BuyFlightComponent implements OnInit {

  _flights : Flight[];
  showBuyFlights = true;
  selectedFlight : Flight;
  originFilter : string = null;
  destinationFilter : string = null;

  constructor(private flightsService : FlightsService ){}


  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  private onFlightClick(flight : Flight){
    this.selectedFlight = flight;

  }

  onFilterChange(filterValue : string){
    this.originFilter = filterValue;
  }

  onDestinationFilterChange(filterValue : string){
    this.destinationFilter = filterValue;
  }


  get flights(): Flight[] {

    if (this.originFilter != null || this.destinationFilter != null) {
      return this._flights.map((flight) => {
        let match = true;
        if(this.originFilter != null) {
          match = flight.origin.startsWith(this.originFilter);
        }
        if (match && this.destinationFilter != null) {
          match = flight.destination.startsWith(this.destinationFilter);
          if (match) {
            return flight;
          }
        }
        // the filter expression stops empty elements being returned (drops the null elements)
      }).filter(x => !!x);
    } else {
      return this._flights;
    }
  }

  ngOnInit() {
    this._flights = this.flightsService.getFlights();
  }

}

