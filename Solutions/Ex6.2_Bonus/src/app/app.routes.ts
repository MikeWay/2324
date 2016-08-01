import {AccountComponent} from "./account/account.component";
import {MyFlightsComponent} from "./my-flights/my-flights.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {provideRouter, RouterConfig} from "@angular/router";

const routes: RouterConfig = [
  {
    path: '',
    component: AppComponent
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


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
