import { ElementRef } from '@angular/core';
import { TimeDirective } from './time.directive';

let spanEle = document.createElement('span');
let ref = new ElementRef(spanEle);

beforeEach(() => {
  spanEle = document.createElement('span');
  ref = new ElementRef(spanEle);
});

describe('TimeDirective', () => {
  it('should create an instance', () => {
    const directive = new TimeDirective(ref);
    expect(directive).toBeTruthy();
  });
});
