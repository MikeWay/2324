/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { WindSpeedPipe } from './wind-speed.pipe';

describe('Pipe: WindSpeedPipe', () => {
  it('create an instance', () => {
    let pipe = new WindSpeedPipe();
    expect(pipe).toBeTruthy();
  });
});
