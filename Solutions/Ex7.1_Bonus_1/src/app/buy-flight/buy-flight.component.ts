import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  _flights : Flight[];
  showBuyFlights = true;
  selectedFlight : Flight;

  originFilter : string = null;
  destinationFilter : string = null;


  constructor(private flightsService : FlightsService ){}

  onFilterChange(filterValue: string) {
    this.originFilter = filterValue;
  }

  onDestinationFilterChange(filterValue: string) {
    this.destinationFilter = filterValue;
  }


  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  private onFlightClick(flight : Flight){
    this.selectedFlight = flight;
  }

  get flights(): Flight[] {
    if (this.originFilter != null || this.destinationFilter != null) {
      return this._flights.map((flight) => {
        let match = true;
        if(this.originFilter != null) {
          match = flight.origin.startsWith(this.originFilter);
        }
        if(!match){
          return null;
        }
        if (match && this.destinationFilter != null) {
          match = flight.destination.startsWith(this.destinationFilter);
          if (match) {
            return flight;
          } else {
            return null;
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



