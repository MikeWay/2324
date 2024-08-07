import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
  standalone: true
})
export class CurrencyConversionPipe implements PipeTransform {

  transform(value: number, symbol = '£', rate = 0.9): string {
    return symbol + (value * rate).toFixed(2);
  }

}
