import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
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
    loadComponent: () =>
    import('./buy-flight/buy-flight.component').then((x) => x.BuyFlightComponent),
    pathMatch: 'prefix'
  },
  {
    path: 'buy/:origin',
    loadComponent: () =>
    import('./buy-flight/buy-flight.component').then((x) => x.BuyFlightComponent),
  },
  {
    path: 'myflights',
    component: MyFlightsComponent
  },


  {
    path: 'account',
    component: AccountComponent
    //loadChildren: () => import('./accounts/accounts.module').then(mod => mod.AccountsModule)
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
