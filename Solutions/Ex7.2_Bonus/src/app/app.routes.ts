import {RouterConfig, provideRouter} from "@angular/router";
import {HomeComponent} from "./+Home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import {MyFlightsComponent} from "./my-flights/my-flights.component";
import {AccountComponent} from "./account/account.component";
import {AppComponent} from "./app.component";
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
