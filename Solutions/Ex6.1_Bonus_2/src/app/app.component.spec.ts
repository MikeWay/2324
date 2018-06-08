/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { FlightsService } from './flights/flights.service';
import { PaymentComponent } from './payment/payment.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, HomeComponent, BuyFlightComponent, PaymentComponent, FlightFilterComponent
      ],
      providers: [FlightsService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'FlySharp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FlySharp');
  }));

});
