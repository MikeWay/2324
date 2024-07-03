import { Injectable } from '@angular/core';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { Flight } from '../model/flight';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  _flights = FLIGHTS;
  currencies: Currency[] = [{ code: 'GBP', symbol: '£', rate: 1.0 },
    { code: 'USD', symbol: '$', rate: 0.9 },
    { code: 'EUR', symbol: '€', rate: 0.92 },  
    { code: 'SEK', symbol: 'kr ', rate: 12.0 }
  ];
  
   
  
    displayCurrency: Currency = this.currencies[2];  

  public getFlights(): Flight[] {
    return this._flights;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }  
}
