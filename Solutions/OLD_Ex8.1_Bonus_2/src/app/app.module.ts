import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { FlightsService } from './flights/flights.service';
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { CurrencyConversionPipe } from './currency-conversion/currency-conversion.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent, PaymentComponent, FlightFilterComponent, MyFlightsComponent, CurrencyConversionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
