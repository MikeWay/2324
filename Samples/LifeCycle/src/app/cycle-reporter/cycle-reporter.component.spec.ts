/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CycleReporterComponent } from './cycle-reporter.component';

describe('Component: CycleReporter', () => {
  it('should create an instance', () => {
    let component = new CycleReporterComponent();
    expect(component).toBeTruthy();
  });
});
