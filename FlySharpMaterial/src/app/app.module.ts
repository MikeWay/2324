import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewNavComponent } from './new-nav/new-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
  import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { AccountComponent } from './account/account.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { CurrencyConversionPipe } from './currency/currency-conversion.pipe';
import { TimeDirective } from './time/time.directive';
import { BuyFlightMatComponent } from './buy-flight-mat/buy-flight-mat.component';
import { FlightsService } from './services/flights.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuyFlightMatTableComponent } from './buy-flight-mat-table/buy-flight-mat-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, BuyFlightComponent,
    PaymentComponent, FlightFilterComponent, AccountComponent,
    SpecialOffersComponent,
    MyFlightsComponent,
    CurrencyConversionPipe,
    CurrencyConversionPipe,
    TimeDirective,
    NewNavComponent,
    BuyFlightMatComponent,
    BuyFlightMatTableComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    AppRoutingModule,
    HttpClientModule,
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
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
