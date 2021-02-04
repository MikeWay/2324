import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _flights: Flight[] = new Array<Flight>();
  showBuyFlights = true;
  // tslint:disable-next-line: variable-name
  _selectedFlight: Flight | undefined;

  originFilter: string | null = null;
  destinationFilter: string | null = null;

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this._flights = this.flightsService.getFlights();
  }

  onClickBuyFlights(): void {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight): void {
    this._selectedFlight = flight;
  }

  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  set selectedFlight(flight: Flight | undefined) {
    this._selectedFlight = flight;
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
  }

  /**
   * Version of the flight getter that implements a simple filter
   */

  get flights(): Flight[] {
    let flights = this._flights;
    if (this.originFilter) {
      flights = this._flights.filter((flight: Flight) => {
        return flight.origin.startsWith(this.originFilter as string); // Cast OK as we know it's not undefined or null from the outer if
      });
    }
    if (this.destinationFilter) {
      flights = flights.filter((flight: Flight) => {
        return flight.destination.startsWith(this.destinationFilter as string);
      });
    }
    return flights;
  }

}


