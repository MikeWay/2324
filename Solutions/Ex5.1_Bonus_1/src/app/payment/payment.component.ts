import { Component, OnInit } from '@angular/core';
import {Flight} from "../model/flight";
import {Input} from "@angular/core";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private _selectedFlight: Flight;

  @Input() 
  
  set selectedFlight( flight: Flight){
    this._selectedFlight = flight;
  }

  get selectedFlight( ) : Flight{
    return this._selectedFlight;
  }
  constructor() { }

  ngOnInit() {
  }

}
