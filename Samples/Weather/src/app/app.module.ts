import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ButtonDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
