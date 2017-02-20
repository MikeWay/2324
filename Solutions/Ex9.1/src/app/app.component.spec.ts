/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { AccountComponent } from './account/account.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RouterLinkStubDirective, RouterOutletStubComponent
      ],
      //providers : [{provide: APP_BASE_HREF, useValue: '/'}],
        imports: [
    //RouterModule.forRoot(routes),
        ]
    });
    TestBed.compileComponents();
  });



  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Welcome to Fly Sharp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Fly Sharp');
  }));

});
