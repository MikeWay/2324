import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  
  private _selectedFlight: Flight | undefined;

  constructor() { }

  public get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }
  
  @Input()
  public set selectedFlight(value: Flight | undefined) {
    this._selectedFlight = value;
  }

  
  ngOnInit(): void {
  }

}
