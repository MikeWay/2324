/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, inject, waitForAsync } from '@angular/core/testing';
import { MyFlightsComponent } from './my-flights.component';

describe('Component: MyFlights', () => {
  it('should create an instance', () => {
    let component = new MyFlightsComponent();
    expect(component).toBeTruthy();
  });
});
