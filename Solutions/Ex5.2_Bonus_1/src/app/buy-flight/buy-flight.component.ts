import { Component, OnInit } from '@angular/core';
import {FlightsService} from '../flights/flights.service';
import {Flight} from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {


  // tslint:disable-next-line: variable-name
  _flights: (Flight)[] = new Array<Flight>();
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter: string | null = null;

  constructor( private flightsService: FlightsService ) { }

  ngOnInit(): void {
    this._flights = this.flightsService.getFlights();
  }

  onFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  onClickBuyFlights(): void {
    this.showBuyFlights = !this.showBuyFlights;
  }

  get flights(): Flight[] {
    /**
     * Version of the flight getter that implements a simple filter
     */

    if (this.originFilter) {
      return this._flights.filter((flight: Flight) => {
        return flight.origin.startsWith(this.originFilter as string);
      });  // We know it's not undefined or null from the outer if
    } else {
      return this._flights;
    }
  }

  onFlightClick(flight: Flight): void {
    this.selectedFlight = flight;
  }
}

