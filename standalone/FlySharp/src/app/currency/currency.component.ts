import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Currency } from '../model/curency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
  
})
export class CurrencyComponent {
  currencies: Currency[] = this.state.currencies;
  constructor(public state: ApplicationStateService){}

  @Input()
  set currency(currency: Currency){
    this.state.displayCurrency= currency;
  }

  get currency(): Currency {
    return this.state.displayCurrency;
  }
}
