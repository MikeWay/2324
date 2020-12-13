import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
