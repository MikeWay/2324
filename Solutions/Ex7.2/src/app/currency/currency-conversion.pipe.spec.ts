/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CurrencyConversionPipe } from './currency-conversion.pipe';

describe('Pipe: CurrencyConversion', () => {
  it('create an instance', () => {
    let pipe = new CurrencyConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
