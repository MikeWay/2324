import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import {MyFlightsComponent} from "./my-flights/my-flights.component";
import {AccountComponent} from "./account/account.component";
import {ModuleWithProviders} from "@angular/core";
import { BuyFlightMatComponent } from './buy-flight-mat/buy-flight-mat.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buy',
    component: BuyFlightMatComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'buy/:origin',
    component: BuyFlightComponent
  },
  {
    path: 'myflights',
    component: MyFlightsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
