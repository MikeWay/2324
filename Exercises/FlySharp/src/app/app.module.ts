import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent, AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaymentComponent,
    FlightFilterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
