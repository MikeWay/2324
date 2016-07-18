import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BuyFlightComponent } from './buy-flight.component';
import { FlightService } from '../services/flight.service';

describe('Component: BuyFlight', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BuyFlightComponent, FlightService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BuyFlightComponent],
      (component: BuyFlightComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BuyFlightComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BuyFlightComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-buy-flight></app-buy-flight>
  `,
  directives: [BuyFlightComponent]
})
class BuyFlightComponentTestController {
}
