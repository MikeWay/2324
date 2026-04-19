import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing-module';
import { Account } from '../account/account';

@NgModule({
  declarations: [Account],
  imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
