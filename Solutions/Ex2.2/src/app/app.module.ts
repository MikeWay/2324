import { HomeComponent } from './home/home';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, BuyFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
