import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuyFlightComponent} from './buy-flight/buy-flight.component';
import {MyFlightsComponent} from './my-flights/my-flights.component';
import {AccountComponent} from './account/account.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { LogonComponent } from './logon/logon.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: NewHomeComponent
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
    path: 'buy/:origin/:destination',
    component: BuyFlightComponent
  },
  {
    path: 'myflights',
    component: MyFlightsComponent
  },
  {
    path: 'account',
    loadChildren: () => import('./accounts/accounts.module').then(mod => mod.AccountsModule)
  },
  {
    path: 'logon',
    component: LogonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
