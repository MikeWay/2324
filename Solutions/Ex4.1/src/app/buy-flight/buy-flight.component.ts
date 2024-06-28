import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [PaymentComponent],
  templateUrl: './buy-flight.component.html',
  styleUrl: './buy-flight.component.scss'
})
export class BuyFlightComponent implements OnInit {
  flights!: Flight[];
  showBuyFlights = true;
  selectedFlight: Flight | undefined;

  constructor(private stateService: ApplicationStateService)
  {}

  onFlightClick(flight: Flight){
    this.selectedFlight = flight;
  }

  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  ngOnInit(): void {
    this.flights = this.stateService.getFlights();  
  }  
}


