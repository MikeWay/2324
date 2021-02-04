import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { BuyFlightComponent } from './buy-flight.component';

class MockFlightsService {

  constructor() { }

  public getFlights(): Flight[] {
    return FLIGHTS;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }
}


let mockFlightsService: FlightsService;

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    mockFlightsService = jasmine.createSpyObj('FlightsService', {
      getFlights: FLIGHTS,
      getMyFlights: MYFLIGHTS
    });
    await TestBed.configureTestingModule({
      declarations: [BuyFlightComponent],
      providers: [{provide: FlightsService, useValue: mockFlightsService }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have called getFlights() once', () => {
    expect(mockFlightsService.getFlights).toHaveBeenCalledTimes(1);
  });

  it('should default showBuyFlights to true', () => {
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to false when onClickBuyFlights() is called', () => {
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeFalsy();
  });

  it('should set showBuyFlights to false when the  link is clicked', () => {
    el = fixture.debugElement.query(By.css('a'));
    el.triggerEventHandler('click', null);
    expect(component.showBuyFlights).toBeFalsy();
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
