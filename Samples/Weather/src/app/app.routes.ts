import {ForecastComponent} from "./forecast/forecast.component";
import {HomeComponent} from "./home/home.component";
import {WarningsComponent} from "./warnings/warnings.component";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {PreferencesFormComponent} from "./preferences-form/preferences-form.component";
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forecastq/:location/:units', component: ForecastComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: 'warnings', component: WarningsComponent },
  { path: 'current', component: CurrentWeatherComponent },
  { path: 'preferences', component: PreferencesFormComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
