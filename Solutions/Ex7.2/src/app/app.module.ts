import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { PaymentComponent } from "./payment/payment.component";
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { CurrencyComponent } from "./currency/currency.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PaymentComponent,
        FlightFilterComponent,
        CurrencyComponent
    ]
})
export class AppModule { }
