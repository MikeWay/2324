import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'currencyConversion',
  standalone: true
})
export class CurrencyConversionPipe implements PipeTransform {

  RATE = 0.8;

  constructor(){}


 transform(value: number, symbol: string = '£', rate: number = 1.0): string {
    return symbol + (value * rate).toFixed(2);
  }

}
