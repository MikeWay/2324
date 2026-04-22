import { ElementRef } from '@angular/core';
import { Time } from './time';

describe('Time', () => {
  let el: HTMLSpanElement;
  let elRef: ElementRef;
  let directive: Time;

  beforeEach(() => {
    el = document.createElement('span');
    elRef = new ElementRef(el);
    directive = new Time(elRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
