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
import { MyFlightsComponent } from './my-flights.component';
import { FlightService } from '../services/flight.service';

describe('Component: MyFlights', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyFlightsComponent, FlightService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyFlightsComponent],
      (component: MyFlightsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyFlightsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyFlightsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-flights></app-my-flights>
  `,
  directives: [MyFlightsComponent]
})
class MyFlightsComponentTestController {
}
