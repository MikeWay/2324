import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import {MyFlightsComponent} from "./my-flights/my-flights.component";
import {AccountComponent} from "./account/account.component";
import {ModuleWithProviders} from "@angular/core";
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
    component: BuyFlightComponent,
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
  // Without this: the child module routes are parsed and work.
  // Using loadChildren should enable LazyLoading but gives : No NgModule metadata found for 'AccountComponent'. when running ng build or ng serve
  {
    path: 'account',
    loadChildren: 'app/customer-accounts/customer-accounts.module#CustomerAccountsModule'
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
