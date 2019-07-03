import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyFlightMatComponent } from './buy-flight-mat/buy-flight-mat.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { AccountComponent } from './account/account.component';
import { BuyFlightMatTableComponent } from './buy-flight-mat-table/buy-flight-mat-table.component';

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
    component: BuyFlightMatTableComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'buy/:origin',
    component: BuyFlightMatTableComponent,
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
