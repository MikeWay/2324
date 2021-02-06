import { Component, DebugElement, Input, Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FlightsService } from '../flights/flights.service';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { BuyFlightComponent } from './buy-flight.component';


@Component({
  selector: 'app-flight-filter',
  template: ''
})
class MockFlightFilterComponent {
  @Input() initialValue = '';
}

@Component({
  selector: 'app-payment',
  template: ''
})
class MockPaymentComponent {
  @Input() selectedFlight = null;
}

@Pipe({
  name: 'currencyConversion'
})
export class MockCurrencyConversionPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    return '';
  }
}


class MockFlightsService {

  constructor() { }

  public getFlights(): Observable<Flight[]> {
    return of(FLIGHTS);
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }
}


let mockFlightsService: FlightsService;

const mockActivatedRoute = { params: of(['LHR']) };

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;

  beforeEach(async () => {
    mockFlightsService = jasmine.createSpyObj('FlightsService', {
      getFlights: of(FLIGHTS),
      getMyFlights: MYFLIGHTS
    });
    await TestBed.configureTestingModule({
      declarations: [BuyFlightComponent, MockFlightFilterComponent, MockPaymentComponent, MockCurrencyConversionPipe],
      providers: [{ provide: FlightsService, useValue: mockFlightsService }, { provide: ActivatedRoute, useValue: mockActivatedRoute }],
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

  // it('should set showBuyFlights to false when onClickBuyFlights() is called', () => {
  //   component.onClickBuyFlights();
  //   expect(component.showBuyFlights).toBeFalsy();
  // });

  // it('should set showBuyFlights to false when the  link is clicked', () => {
  //   el = fixture.debugElement.query(By.css('a'));
  //   el.triggerEventHandler('click', null);
  //   expect(component.showBuyFlights).toBeFalsy();
  // });

  // it('should hide the flights table when the link is clicked', () => {
  //   fixture.detectChanges();
  //   let tableEle = fixture.debugElement.query(By.css('table'));
  //   expect(tableEle).toBeTruthy();
  //   el = fixture.debugElement.query(By.css('a'));
  //   el.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   tableEle = fixture.debugElement.query(By.css('table'));
  //   expect(tableEle).toBeFalsy();
  // });
});
