import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountComponent } from '../account/account.component';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  declarations: [AccountComponent]
})
export class AccountsModule { }
