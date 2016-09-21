import {AccountComponent} from "./account/account.component";
import {MyFlightsComponent} from "./my-flights/my-flights.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
