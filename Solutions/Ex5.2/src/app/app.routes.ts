import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BuyFlight } from './buy-flight/buy-flight';
import { MyFlights } from './my-flights/my-flights';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'buy', component: BuyFlight },
  { path: 'buy/:origin', component: BuyFlight },
  { path: 'buy/:origin/:destination', component: BuyFlight },
  { path: 'myflights', component: MyFlights },
  { path: 'account', loadChildren: () => import('./accounts/accounts-module').then(mod => mod.AccountsModule) },
  { path: '**', component: Home }
];
