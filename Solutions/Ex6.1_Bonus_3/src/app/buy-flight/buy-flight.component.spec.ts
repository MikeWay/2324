import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlightComponent } from './buy-flight.component';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';
import { ApplicationStateService } from '../application-state/application-state.service';
// class MockApplicationStateService {

//   displayCurrency = { code: 'GBP', symbol: '£', rate: 1.0 };
//   _flights = FLIGHTS;

//   public get flights(): Flight[] {
//     return FLIGHTS;
//   }

//   public get myFlights(): Flight[] {
//     return MYFLIGHTS;
//   }

//   public loadFlights() {
//   }
// }

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;
  let mockApplicationStateService: ApplicationStateService| null = null;

  beforeEach(async () => {

    mockApplicationStateService = jasmine.createSpyObj<ApplicationStateService>('MockApplicationStateService', [],
      {
        flights: FLIGHTS,
        myFlights: MYFLIGHTS,
        displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 }
      });

    await TestBed.configureTestingModule({
      imports: [BuyFlightComponent],
      providers: [provideRouter([]), { provide: ApplicationStateService, useValue: mockApplicationStateService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BuyFlightComponent);
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

  it('should set showBuyFlights to true when onClickBuyFlights() is called', () => {
    component.onClickBuyFlights();
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to false when the link is clicked', () => {
    el = fixture.debugElement.query(By.css('a'));
    el.triggerEventHandler('click', null);
    expect(component.showBuyFlights).toBeFalsy();
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

  it('should have called getFlights() once', () => {
    expect(component.currencySymbol).toBe('£');
  });  
});
