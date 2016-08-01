/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { Time } from './time.directive';
import {ElementRef} from "@angular/core";

describe('Directive: Time', () => {


  beforeEach(()=> addProviders([ElementRef]));

  it('should create an instance', inject([ElementRef], (e : ElementRef) => {
    let directive = new Time(e);
    expect(directive).toBeTruthy();
  }));
});
