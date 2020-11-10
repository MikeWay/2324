import { Component, Directive, HostListener, Input } from '@angular/core';
import { Location } from '@angular/common'

import { TestBed, async, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'router-outlet',
  template: ''
})
// tslint:disable-next-line: component-class-suffix
export class MockRouterOutlet {

}


@Component({
  selector: 'app-home',
  template: ''
})
export class MockAppHomeComponent {

}

@Component({
  selector: 'app-buy-flight',
  template: ''
})
export class MockBuyFlightComponent {

}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
class FakeROuterLinkDirective {

  @Input()
  routerLink = '';

  constructor(
    private router: Router,
  ) { }

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(this.routerLink);
  }
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let routerSpy;

  beforeEach(waitForAsync(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockAppHomeComponent, MockBuyFlightComponent, FakeROuterLinkDirective, MockRouterOutlet
      ],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Fly Sharp'`, () => {
    expect(app.title).toEqual('Fly Sharp');
  });

  it('should have a router-outlet tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('main router-outlet')).toBeTruthy();
  });

  it('should route to /home when the first link is clicked..', () => {
    const link = fixture.debugElement.query(By.css('a'));
    link.triggerEventHandler('click', null);
    fixture.detectChanges();

    const expectedPath = '/home';
    const [actualPath] = routerSpy.navigateByUrl.calls.first().args;
    expect(actualPath).toBe(
      expectedPath,
      'must navigate to the /home view');
  });

  it('should route to /buy when the second link is clicked..', () => {

    const links = fixture.debugElement.queryAll(By.css('a'));
    links[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    const expectedPath = '/buy';
    const [actualPath] = routerSpy.navigateByUrl.calls.first().args;
    expect(actualPath).toBe(
      expectedPath,
      'must navigate to the /buy view');
  });
});
