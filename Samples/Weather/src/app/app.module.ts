import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WindSpeedPipe} from "./pipe/wind-speed.pipe";
import {HomeComponent} from "./home/home.component";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {MakeItBold} from "./directives/make-it-bold.directive";
import {ForecastComponent} from "./forecast/forecast.component";
import {PreferencesFormComponent} from "./preferences-form/preferences-form.component";
import {WarningsComponent} from "./warnings/warnings.component";
import {routing} from "./app.routes";
import {WindComponent} from "./wind/wind.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentWeatherComponent,
    MakeItBold,
    ForecastComponent,
    PreferencesFormComponent,
    WarningsComponent,
    WindComponent,
    WindSpeedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
