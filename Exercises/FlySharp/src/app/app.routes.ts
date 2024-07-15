import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { HomeComponent } from './home/home.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { MyFlightsWrapperComponent } from './my-flights-wrapper/my-flights-wrapper.component';

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
        component: BuyFlightComponent
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
        component: MyFlightsWrapperComponent
    },
    {
        path: 'account',
        loadChildren: () => import('./accounts/accounts.module').then(mod => mod.AccountsModule)
    },

    {

        path: '**',
        component: HomeComponent
    },


];