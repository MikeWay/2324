import { AccountComponent } from './../account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
  path: '',
  component:AccountComponent
},
{
  path: 'account',
  component:AccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAccountsRoutingModule { }
