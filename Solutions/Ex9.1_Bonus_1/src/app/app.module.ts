import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { AccountComponent } from './account/account.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { routes } from './app.routes';
import { CurrencyConversionPipe } from './currency/currency-conversion.pipe';
import { RouterModule } from '@angular/router';
import { TimeDirective } from './time/time.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent,
    PaymentComponent, FlightFilterComponent, AccountComponent,
    MyFlightsComponent, CurrencyConversionPipe, CurrencyConversionPipe, TimeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
