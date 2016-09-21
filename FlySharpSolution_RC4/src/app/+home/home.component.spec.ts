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
import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HomeComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HomeComponent],
      (component: HomeComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HomeComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HomeComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should not be showing special-offers `', done => {
    builder.createAsync(HomeComponentTestController).then(fixture => {
        let element =  fixture.nativeElement;
      fixture.detectChanges(); //trigger change detection
      expect(element.querySelector('special-offers') === null ).toBe(true);
      done();
    })
    .catch(e => done.fail(e));
  });

  it('should show special-offers when the special offers button is clicked `', done => {
    builder.createAsync(HomeComponentTestController).then(fixture => {
      let element =  fixture.nativeElement;
      fixture.detectChanges(); //trigger change detection
      fixture.nativeElement.querySelector("#special-offers-button").click();
      fixture.detectChanges();
      expect(element.querySelector('special-offers') === null).toBe(false);
      done();
    })
    .catch(e => done.fail(e));
  });
  it('should not show the home-jumbotron div when special-offers is displayed `', done => {
    builder.createAsync(HomeComponentTestController).then(fixture => {
      let element =  fixture.nativeElement;
      fixture.detectChanges(); //trigger change detection
      fixture.nativeElement.querySelector("#special-offers-button").click();
      fixture.detectChanges();
      expect(element.querySelector('#home-jumbotron') === null).toBe(true);
      done();
    })
    .catch(e => done.fail(e));
  });
});

@Component({
  selector: 'test',
  template: `
    <app-home></app-home>
  `,
  directives: [HomeComponent]
})
class HomeComponentTestController {
}
