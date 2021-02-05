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

  originFilter ='';

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

  onFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  /**
   * Version of the flight getter that implements a simple filter
   */

  get flights(): Flight[] {

    if (this.originFilter) {
      return this._flights.filter((flight: Flight) => {
        return flight.origin.startsWith(this.originFilter as string);
      });  // We know it's not undefined or null from the outer if
    } else {
      return this._flights;
    }
  }

}


