import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { BuyFlight } from './buy-flight/buy-flight';
import { MyFlightsWrapper } from './my-flights-wrapper/my-flights-wrapper';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'buy', component: BuyFlight },
  { path: 'buy/:origin', component: BuyFlight },
  { path: 'buy/:origin/:destination', component: BuyFlight },
  { path: 'myflights', component: MyFlightsWrapper },
  { path: 'account', loadChildren: () => import('./accounts/accounts-module').then(mod => mod.AccountsModule) },
  { path: '**', component: HomeComponent }
];
