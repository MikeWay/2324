import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  flights: Flight[] = new Array<Flight>();
  showBuyFlights = true;
  // tslint:disable-next-line: variable-name
  _selectedFlight: Flight | undefined;

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
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
}


