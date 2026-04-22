import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlight } from './buy-flight';
import { provideRouter } from '@angular/router';
import { ApplicationState } from '../application-state/application-state';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

describe('BuyFlight', () => {
  let component: BuyFlight;
  let fixture: ComponentFixture<BuyFlight>;

  beforeEach(async () => {
    const mockApplicationState = {
      flights: FLIGHTS,
      myFlights: MYFLIGHTS,
      displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 },
      error: ''
    } as unknown as ApplicationState;

    await TestBed.configureTestingModule({
      imports: [BuyFlight],
      providers: [provideRouter([])]
    }).overrideComponent(BuyFlight,
      { set: { providers: [{ provide: ApplicationState, useValue: mockApplicationState }] } }
    ).compileComponents();

    fixture = TestBed.createComponent(BuyFlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default showBuyFlights to true', () => {
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to false when onClickBuyFlights() is called', () => {
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeFalsy();
  });

  it('should set showBuyFlights to true when onClickBuyFlights() is called twice', () => {
    component.onClickBuyFlights();
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should have a currency symbol of £', () => {
    expect(component.currencySymbol).toBe('£');
  });
});
