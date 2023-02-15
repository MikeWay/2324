import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../model/flight';
import { FormsModule } from '@angular/forms';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  _selectedFlight: Flight | undefined;
  model: Payment = new Payment();

  @Input()
  get selectedFlight(): Flight | undefined {
    return this._selectedFlight;
  }

  set selectedFlight(flight: Flight | undefined){
    this._selectedFlight = flight;
  }

  get jsonModel(): string {
    return JSON.stringify(this.model);
  }   

  onSubmit(): void {
    alert(this.jsonModel);
  }  
}
