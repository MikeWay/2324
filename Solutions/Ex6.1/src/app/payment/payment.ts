import { Component, Input } from '@angular/core';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  private _selectedFlight: Flight | undefined;

  @Input()
  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  set selectedFlight(value: Flight | undefined) {
    this._selectedFlight = value;
  }
}
