import { provideRouter, RouterConfig } from '@angular/router';


import {ForecastComponent} from "./forecast/forecast.component";
import {HomeComponent} from "./home/home.component";
import {WarningsComponent} from "./warnings/warnings.component";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {PreferencesFormComponent} from "./preferences-form/preferences-form.component";

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forecast/:location/:units', component: ForecastComponent },
  { path: 'forecastq', component: ForecastComponent },
  { path: 'warnings', component: WarningsComponent },
  { path: 'current', component: CurrentWeatherComponent },
  { path: 'preferences', component: PreferencesFormComponent }
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

