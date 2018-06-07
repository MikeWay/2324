import { AccountComponent } from './../account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from '../customer-accounts/dummy/dummy.component';

const routes: Routes = [  {
  path: '',
  component:AccountComponent
},
{
  path: 'buy',
  component:DummyComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAccountsRoutingModule { }
