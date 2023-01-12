import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ApplicationStateService } from './application-state/application-state.service';

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

@Component({
  selector: 'app-currency',
  template: ''
})
export class MockCurrencyComponent {

}

describe('AppComponent', () => {


    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, BrowserAnimationsModule
      ],
      declarations: [
        AppComponent, MockAppHomeComponent, MockBuyFlightComponent,MockCurrencyComponent
      ]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Fly Sharp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Fly Sharp');
  });

  it('should have a router-outlet tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
