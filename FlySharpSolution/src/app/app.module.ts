import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import {Time} from "./time/time.directive";
import {FlightFilterComponent} from "./flight-filter/flight-filter.component";
import {PaymentComponent} from "./payment/payment.component";
import {CurrencyConversionPipe} from "./currency/currency-conversion.pipe";
import {routing} from "./app.routes";
import {MyFlightsComponent} from "./my-flights/my-flights.component";
import {AccountComponent} from "./account/account.component";
import {SpecialOffersComponent} from "./special-offers/special-offers.component";
import {FlightsService} from "./services/flights.service";
import {JsonPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyFlightComponent,
    Time ,
    PaymentComponent,
    FlightFilterComponent,
    CurrencyConversionPipe,
    MyFlightsComponent,
      AccountComponent,
    SpecialOffersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
