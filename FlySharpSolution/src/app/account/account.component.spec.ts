/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, inject, waitForAsync } from '@angular/core/testing';
import { AccountComponent } from './account.component';

describe('Component: Account', () => {
  it('should create an instance', () => {
    let component = new AccountComponent();
    expect(component).toBeTruthy();
  });
});
