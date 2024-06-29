import { Component, Input } from '@angular/core';
import { Flight } from '../model/flight';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  private _selectedFlight: Flight | undefined;

  @Input() 
  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }
  set selectedFlight(flight: Flight | undefined){
    this._selectedFlight = flight;
  }

}
