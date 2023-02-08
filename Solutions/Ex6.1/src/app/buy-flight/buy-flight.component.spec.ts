import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ApplicationStateService } from '../application-state/application-state.service';

import { BuyFlightComponent } from './buy-flight.component';

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuyFlightComponent ],
      providers:[
        /* BuyFlightComponent takes an ActivatedRoute as a constructor argument. In our code we are accessing
         the params of property ActivatedRoute. The useValue code below creates a very simple Observable as the 
         value of params. It is adequate to meet the needs of the test so far
         */   
        {
          provide: ApplicationStateService
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
});
