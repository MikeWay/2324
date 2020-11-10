import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import {FlightsService} from './flights/flights.service';
import {PaymentComponent} from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import {AccountsModule} from './accounts/accounts.module';
import { CurrencyConversionPipe } from './currency-conversion/currency-conversion.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeDirective } from './time.directive';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NewHomeComponent } from './new-home/new-home.component';
import { OriginDestinationSelectorComponent } from './org-dest-selector/org-dest-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogonComponent } from './logon/logon.component';
import { AuthenticationInterceptor } from './authentication/authentication-interceptor';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent,
    PaymentComponent, FlightFilterComponent, MyFlightsComponent, CurrencyConversionPipe,
    TimeDirective, FlightStatusComponent, CarouselContainerComponent, NewHomeComponent,
    OriginDestinationSelectorComponent, LogonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    NgbModule
  ],
  providers: [FlightsService, { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent],

})
export class AppModule { }
