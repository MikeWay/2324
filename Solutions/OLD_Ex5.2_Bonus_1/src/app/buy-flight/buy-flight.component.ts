import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';

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


  constructor(private flightsService : FlightsService ){}

  onFilterChange(filterValue: string) {
    this.originFilter = filterValue;
  }


  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight : Flight){
    this.selectedFlight = flight;
  }

  get flights(): Flight[] {
    /**
     * Version of the flight getter that implements a simple filter
     */
    if (this.originFilter != null) {
      return this._flights.map((flight) => {
        console.log(flight);
        let match = flight.origin.startsWith(this.originFilter);
        if (match) {
          return flight;
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



