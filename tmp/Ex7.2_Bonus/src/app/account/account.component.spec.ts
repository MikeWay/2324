/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AccountComponent } from './account.component';

describe('Component: Account', () => {
  it('should create an instance', () => {
    let component = new AccountComponent();
    expect(component).toBeTruthy();
  });
});
