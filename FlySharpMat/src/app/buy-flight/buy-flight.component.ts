import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";

const NUM_FLIGHTS_TO_LOAD=10;
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
  errorMessage = "";
  nextFlightIndex = NUM_FLIGHTS_TO_LOAD;
  numFlights=0;


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

  onNext() {

    let numFlights = NUM_FLIGHTS_TO_LOAD;
    if (this.nextFlightIndex + numFlights > this.numFlights) {
      numFlights = this.numFlights = this.numFlights; // Adjsust the number of flights so we don't try and load ones that are not available
    }
    this.flightsService.getChunkOfFlights(this.nextFlightIndex, numFlights).subscribe(
      (flights: Flight[]) => { this._flights = flights; this.showBuyFlights = true },
      (error: any) => this.errorMessage = error);
    if (this.nextFlightIndex <= this.numFlights) {
      this.nextFlightIndex += NUM_FLIGHTS_TO_LOAD; // Move the flightIndex on if there are more flights
    }
  }

  onPrevious() {
      // Don't load flights pre 0
    if (this.nextFlightIndex > NUM_FLIGHTS_TO_LOAD) {
      this.nextFlightIndex -= NUM_FLIGHTS_TO_LOAD;
    } else {
      this.nextFlightIndex = 0;
    }
    this.flightsService.getChunkOfFlights(this.nextFlightIndex, NUM_FLIGHTS_TO_LOAD).subscribe(
      (flights: Flight[]) => { this._flights = flights; this.showBuyFlights = true },
      (error: any) => this.errorMessage = error);
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
    this.flightsService.getChunkOfFlights(0,NUM_FLIGHTS_TO_LOAD).subscribe(
      (flights : Flight[])=>{this._flights = flights; this.showBuyFlights = true},  
      (error : any)=>this.errorMessage = error
    );
      // Get the number of flights available
    this.flightsService.getNumberOfFlights().subscribe(
      num => this.numFlights = num,
      (error: any) => this.errorMessage = error)    
  }
}



