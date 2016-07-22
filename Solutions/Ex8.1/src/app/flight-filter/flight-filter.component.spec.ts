/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FlightFilterComponent } from './flight-filter.component';

describe('Component: FlightFilter', () => {
  it('should create an instance', () => {
    let component = new FlightFilterComponent();
    expect(component).toBeTruthy();
  });
});
