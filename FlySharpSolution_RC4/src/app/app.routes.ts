import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './+home/home.component';
import { BuyFlightComponent } from './+buy-flight/buy-flight.component';
import { MyFlightsComponent } from './+my-flights/my-flights.component';
import { AccountComponent } from './+account/account.component';
import {AsyncTestComponent} from "./async-test/async-test.component";

export const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
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
  },
  {
    path: 'test',
    component: AsyncTestComponent
  }  
    
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
