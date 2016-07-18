import {
  Component, EventEmitter, OnInit, Input, Output, trigger, state, style, transition,
  animate
} from '@angular/core';
import {FlightService} from '../services/flight.service';
import {Flight} from '../model/flight';

import {PaymentComponent} from '../payment/payment.component';

@Component({
  moduleId: module.id,
  selector: 'app-buy-flight',
  templateUrl: 'buy-flight.component.html',
  styleUrls: ['buy-flight.component.css'],
  directives: [PaymentComponent],
  animations: [
    trigger('animateState', [
      // state('inactive', style({
      //   opacity: 1,
      //   backgroundColor: 'blue',
      // })),
      // state('active',   style({
      // //   opacity: 0.5,
      //    backgroundColor: 'red',
      // })),
      transition('inactive => void', [
        style({opacity : 0, backgroundColor: 'yellow',}),
        animate('5000ms')
      ]),
      transition('void => inactive', [
        style({opacity : 1, backgroundColor: 'white',}),
        animate('5000ms')
      ]),

      // transition('inactive => active', animate(1)),
      // transition('active => inactive', animate('5000ms'))
    ])
  ]
})
export class BuyFlightComponent implements OnInit {
  flights : Flight[];
  selectedFlight: Flight;
  active= true;
  showPayment=false;
  _animateState = false;


  constructor(private flightService: FlightService) {}

  private onFlightClick(flight : Flight){
    this._animateState = true;
    this.showPayment = true;
    this.selectedFlight = flight;

  }

  get animateState() : string {
    return this._animateState ? 'active' : 'inactive';
  }
  private toggleState(){
   // this._animateState = !this._animateState;
  }

  private onPaymentComplete(){
    this.showPayment = false;
  }

  ngOnInit() {
    this.flights = this.flightService.getFlights();
    this.selectedFlight = this.flights[0];

  }

}
