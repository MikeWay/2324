import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BuyFlightMatDataSource } from './buy-flight-mat-datasource';
import { Flight } from "../model/flight";
import { FlightsService } from '../services/flights.service';
import { ActivatedRoute } from '@angular/router';

const NUM_FLIGHTS_TO_LOAD=1;

@Component({
  selector: 'buy-flight-mat',
  templateUrl: './buy-flight-mat.component.html',
  styleUrls: ['./buy-flight-mat.component.css']
})
export class BuyFlightMatComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource: BuyFlightMatDataSource;

  _flights : Flight[] = new Array<Flight>();
  showBuyFlights = false;
  selectedFlight : Flight;

  originFilter : string = "";
  destinationFilter : string = "";

  conversionRate = 4.0;
  errorMessage = "";
  nextFlightIndex = NUM_FLIGHTS_TO_LOAD;
  numFlights=0;  


  constructor(private flightsService : FlightsService, private activatedRoute: ActivatedRoute ){}
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'origin', 'destination', 'departDay', 'departTime', 'arriveDay', 'arriveTime'];

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
      (flights : Flight[])=>{this._flights = flights; this.showBuyFlights = true;
       },  
      (error : any)=>this.errorMessage = error
    );
      // Get the number of flights available
    this.flightsService.getNumberOfFlights().subscribe(
      num => this.numFlights = num,
      (error: any) => this.errorMessage = error)    

   this.dataSource = new BuyFlightMatDataSource(this.paginator, this.sort, this.flightsService);
  }
}
