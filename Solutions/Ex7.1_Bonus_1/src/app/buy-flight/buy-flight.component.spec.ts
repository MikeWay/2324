/* tslint:disable:no-unused-variable */


import {BuyFlightComponent} from "./buy-flight.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import { DebugElement, Component, Input } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {By} from "@angular/platform-browser";
import {Flight} from "../model/flight";
import {FLIGHTS, MYFLIGHTS} from "../model/mock-flights";
import { PaymentComponent } from '../payment/payment.component';
import { FlightFilterComponent } from '../flight-filter/flight-filter.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../router-stubs';
import { CurrencyConversionPipe } from '../currency/currency-conversion.pipe';


export class MockFlightsService {

  constructor() { }

  public getFlights() : Flight[]{
    return FLIGHTS;
  }

  public getMyFlights() : Flight[]{
    return MYFLIGHTS;
  }

}

let activatedRoute = new ActivatedRouteStub();

let mockFlightsService = new MockFlightsService();

@Component({
    selector: 'app-payment',
  template: '',
})
class MockPaymentComponent {
  @Input() selectedFlight;
}


describe('Component: BuyFlight', () => {
  let comp: BuyFlightComponent;
  let fixture : ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuyFlightComponent, MockPaymentComponent, FlightFilterComponent, CurrencyConversionPipe
      ],
      providers: [{provide: FlightsService,
      useValue: mockFlightsService },
      {provide : ActivatedRoute, useValue: activatedRoute}]

    });

    fixture = TestBed.createComponent(BuyFlightComponent); // Which creates a test fixture
    comp = fixture.debugElement.componentInstance; // which retrieves an instance of the component under test
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should default showBuyFlights to true', () => {
    comp.onClickBuyFlights();
    expect(comp.showBuyFlights).toBeFalsy();
  });

  it('should set showBuyFlights to false when onClickBuyFlights() is called', () => {
    comp.onClickBuyFlights();
    comp.onClickBuyFlights();
    expect(comp.showBuyFlights).toBeTruthy();
  });

  it('should hide the flights table  when the link is clicked', () => {
    comp.onClickBuyFlights();
    comp.onClickBuyFlights();
    expect(comp.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to false when the link is clicked', () => {
    el = fixture.debugElement.query(By.css('a'));
    el.triggerEventHandler('click', null);
    expect(comp.showBuyFlights).toBeFalsy();
  });

  it('should hide the flights table  when the link is clicked', () => {
    fixture.detectChanges();
    let tableEle = fixture.debugElement.query(By.css('table'));
    expect(tableEle).toBeTruthy();
    el = fixture.debugElement.query(By.css('a'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    tableEle = fixture.debugElement.query(By.css('table'));
    expect(tableEle).toBeFalsy();
  });
});

