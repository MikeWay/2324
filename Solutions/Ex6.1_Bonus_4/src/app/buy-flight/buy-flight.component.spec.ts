import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ApplicationStateService } from '../application-state/application-state.service';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { BuyFlightComponent } from './buy-flight.component';

class MockApplicationStateService {

  displayCurrency = { code: 'GBP', symbol: '£', rate: 1.0 };

  flights = FLIGHTS;

  public getFlights(): Flight[] {
    return FLIGHTS;
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public loadFlights(start: number, count: number, origin?: string, destination?: string) {
  }
}

let spyAppState: any;

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;


  beforeEach(async () => {

    spyAppState = jasmine.createSpyObj<ApplicationStateService>('MyApplicationStateService', [ 'getFlights', 'getMyFlights','loadFlights'],
    {
      displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 }
    });

    spyAppState.getFlights.and.returnValue(FLIGHTS);
    spyAppState.getMyFlights.and.returnValue(MYFLIGHTS);

    //spyAppState = new MockApplicationStateService();
    await TestBed.configureTestingModule({
      imports: [ BuyFlightComponent ],
      providers:[
        /* BuyFlightComponent takes an ActivatedRoute as a constructor argument. In our code we are accessing
         the params of property ActivatedRoute. The useValue code below creates a very simple Observable as the 
         value of params. It is adequate to meet the needs of the test so far
         */   
        {
          provide: ApplicationStateService,
          useValue: spyAppState
        },     
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }]),
          }
        }
      ]
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

  it('should call getFlights twice', () => {
    expect((spyAppState).getFlights.calls.count()).toBe(2);
  });  
});
