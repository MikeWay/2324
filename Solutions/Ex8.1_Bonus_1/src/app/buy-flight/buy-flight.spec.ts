import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

import { BuyFlight } from './buy-flight';
import { ApplicationState } from '../application-state/application-state';
import { FLIGHTS } from '../model/mock-flights';

describe('BuyFlight', () => {
  let component: BuyFlight;
  let fixture: ComponentFixture<BuyFlight>;
  let el: DebugElement;
  let flightsSpy: any;
  let stateServiceStub: any;

  beforeEach(async () => {
    // Step 41: spy function returning FLIGHTS
    flightsSpy = vi.fn().mockReturnValue(FLIGHTS);
    // Step 42: replace flights property with getter that calls the spy
    stateServiceStub = {
      get flights() { return flightsSpy(); },
      displayCurrency: { code: 'USD', symbol: '$', rate: 0.9 }
    };

    await TestBed.configureTestingModule({
      imports: [BuyFlight],
      providers: [provideRouter([]),
        { provide: ApplicationState, useValue: stateServiceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyFlight);
    component = fixture.componentInstance;
    await fixture.whenStable();
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

  it('should set showBuyFlights to false when the link is clicked', () => {
    el = fixture.debugElement.query(By.css('a'));
    el.triggerEventHandler('click', null);
    expect(component.showBuyFlights).toBeFalsy();
  });

  it('should have a currency symbol of $', () => {
    expect(component.currencySymbol).toBe('$');
  });

  // Step 43
  it('should get the correct flights from the state service', () => {
    expect(component.flights).toEqual(FLIGHTS);
    expect(flightsSpy).toHaveBeenCalled();
  });

  it('should hide the flights table when the link is clicked', () => {
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
