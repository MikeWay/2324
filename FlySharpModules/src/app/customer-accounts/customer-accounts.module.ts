import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './../account/account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAccountsRoutingModule } from './customer-accounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerAccountsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AccountComponent]
})
export class CustomerAccountsModule { }
