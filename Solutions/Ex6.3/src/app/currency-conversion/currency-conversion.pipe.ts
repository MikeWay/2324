import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  RATE = 0.8;

  transform(value: any, args?: any): any {
    return 'USD ' + value.toFixed(2);
  }

}
