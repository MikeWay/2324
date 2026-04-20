import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
})
export class CurrencyConversionPipe implements PipeTransform {
  transform(value: number, symbol: string = '£', rate: number = 0.9): string {
    return symbol + (value * rate).toFixed(2);
  }
}
