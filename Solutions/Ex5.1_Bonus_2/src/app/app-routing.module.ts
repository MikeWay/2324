import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { HomeComponent } from './home/home.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';

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
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
