import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  _flights : Flight[];
  showBuyFlights = false;
  selectedFlight : Flight;

  originFilter : string = "";
  destinationFilter : string = "";

  conversionRate = 4.0;
  errorMessage: String =""


  constructor(private flightsService : FlightsService, private activatedRoute: ActivatedRoute ){}

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
        } else {
          return flight;
        }
        // the filter expression stops empty elements being returned (drops the null elements)
      }).filter(x => !!x);
    } else {
      return this._flights;
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(typeof params['origin'] !== 'undefined' ) {
        this.originFilter = params['origin'];
      }
    });
    this.flightsService.getFlights().subscribe(
      (flights: Flight[]) => {this._flights = flights; this.showBuyFlights = true},
      (error: HttpErrorResponse) => this.handleError(error));
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      this.errorMessage = err.error.message;
    } else {
      this.errorMessage = `Error code ${err.status}, body was: ${err.error}`;
    }
  }
}



