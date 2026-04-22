import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../account/account';
import { AccountsRoutingModule } from './accounts-routing-module';

@NgModule({
  declarations: [Account],
  imports: [CommonModule, AccountsRoutingModule],
})
export class AccountsModule {}
