import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {HttpClientModule} from "@angular/common/http";
import {SpecialOffersComponent} from "./special-offers/special-offers.component";
import {TimeDirective} from "./time/time.directive";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule } from '@angular/material';
import { BuyFlightMatComponent } from './buy-flight-mat/buy-flight-mat.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent,
    PaymentComponent, FlightFilterComponent, AccountComponent,
    SpecialOffersComponent,
    MyFlightsComponent,
    CurrencyConversionPipe,
    CurrencyConversionPipe,
    TimeDirective,
    MainNavComponent,
    BuyFlightMatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
