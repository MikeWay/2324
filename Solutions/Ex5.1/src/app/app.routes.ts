import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BuyFlight } from './buy-flight/buy-flight';
import { MyFlights } from './my-flights/my-flights';
import { Account } from './account/account';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'buy', component: BuyFlight },
  { path: 'myflights', component: MyFlights },
  { path: 'account', component: Account },
  { path: '**', component: Home }
];
