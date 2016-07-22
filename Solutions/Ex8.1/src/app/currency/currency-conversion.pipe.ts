import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  RATE = 0.8;

  transform(value: number, rateStr : string, moreArgs?: any): any {
    let rate = parseFloat(rateStr);
    return "USD " + value * rate;
  }

}
