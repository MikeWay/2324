import { Component, Input } from '@angular/core';
import { ApplicationState } from '../application-state/application-state';
import { Currency } from '../model/currency';

@Component({
  selector: 'app-currency-selector',
  imports: [],
  templateUrl: './currency-selector.html',
  styleUrl: './currency-selector.scss',
})
export class CurrencySelector {
  constructor(public state: ApplicationState) {}

  @Input()
  set currency(currency: Currency) {
    this.state.displayCurrency = currency;
  }
  get currency(): Currency {
    return this.state.displayCurrency;
  }

  currencyChange(currCode: string) {
    let c = this.state.currencies.find(currency => currency.code === currCode);
    this.state.displayCurrency = c!;
  }
}
