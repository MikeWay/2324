import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  RATE = 0.8;

  transform(value: number, ...args: unknown[]): unknown {
    return 'USD ' + (value * this.RATE).toFixed(2);
  }

}
