import { ElementRef } from '@angular/core';
import { TimeDirective } from './time.directive';

describe('TimeDirective', () => {
  let spanEle = document.createElement('span');
  let ref = new ElementRef(spanEle);

  beforeEach(() => {
    spanEle = document.createElement('span');
    ref = new ElementRef(spanEle);
  });

  it('should create an instance', () => {
    const directive = new TimeDirective(ref);
    expect(directive).toBeTruthy();
  });
});
