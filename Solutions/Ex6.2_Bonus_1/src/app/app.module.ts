import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AccountComponent } from './account/account.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { CurrencyConversionPipe } from './currency/currency-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent, PaymentComponent, FlightFilterComponent, AccountComponent, MyFlightsComponent, CurrencyConversionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
