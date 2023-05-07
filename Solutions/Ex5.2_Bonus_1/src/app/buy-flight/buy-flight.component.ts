import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from '../payment/payment.component';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.scss'],
  standalone: true,
  imports: [CommonModule,PaymentComponent, FlightFilterComponent],
})
export class BuyFlightComponent implements OnInit {

  _flights!: Flight[];
  showBuyFlights = true;
  selectedFlight: Flight | undefined;
  originFilter = '';
  destinationFilter = '';

  constructor(private stateService: ApplicationStateService, private activatedRoute: ActivatedRoute) { }

	
  get flights(): Flight[] {
    return this._flights.filter(flight => this.orginDestinationFilter(flight)? flight : null);
 
  }

  onOriginFilterChange(filterValue: string): void {
    this.originFilter = filterValue;
  }

  onDestinationFilterChange(filterValue: string): void {
    this.destinationFilter = filterValue;
  }  

  onClickBuyFlights() {
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFlightClick(flight: Flight): void {
    this.selectedFlight = flight;
  }


  ngOnInit(): void {
    this._flights = this.stateService.getFlights();
    this.activatedRoute.params.subscribe({
      next: params => {
        this.originFilter = params['origin']?params['origin']:''
        this.destinationFilter = params['destination']?params['destination']:''
      }
    })
  }

	
  private orginDestinationFilter(flight: Flight): boolean {
    if(this.originFilter !== ''){
      if(!flight.origin.startsWith(this.originFilter)) return false;  
    }
    if(this.destinationFilter !== ''){
      if(!flight.destination.startsWith(this.destinationFilter)) return false;  
    }    
    return true;
  }  
}


