import {
  Component, EventEmitter, OnInit, Input, Output, trigger, state, style, transition,
  animate
} from '@angular/core';

import {Flight} from '../model/flight';


@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css'],
  animations: [
    trigger('animate', [
      state('inactive', style({
        opacity : 0
      })),
      state('active',   style({
        opacity : 1
      })),
      transition('void => active', [
        style({opacity : 0}),
        animate('1000ms ease-in')
      ]),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class PaymentComponent implements OnInit {

  @Output() onPaymentComplete = new EventEmitter<string>();
  @Input() label: string;
  @Input() selectedFlight: Flight;
  animate = "inactive";

  constructor() {}


  onSubmit(){
    //  this.onPaymentComplete.emit("value");
    if(this.animate === "inactive"){
      this.animate = "active";
    } else {
      this.animate = "inactive";
    }

  }

  ngOnInit() {
    this.animate = 'active';

  }

}
