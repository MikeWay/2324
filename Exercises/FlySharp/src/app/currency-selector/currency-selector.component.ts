import { Component, Input } from '@angular/core';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Currency } from '../model/currency';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss'
})
export class CurrencySelectorComponent {
  constructor(public state: ApplicationStateService){}
  @Input()
  set currency(currency: Currency){
    this.state.displayCurrency= currency;
  }
  get currency(): Currency {
    return this.state.displayCurrency;
  }  
  currencyChange(currCode: string) {
    let c = this.state.currencies.find(currency => currency.code === currCode);
    this.state.displayCurrency=c!;
  }
}
