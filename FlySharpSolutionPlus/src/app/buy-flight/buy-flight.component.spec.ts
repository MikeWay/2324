import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuyFlightComponent } from './buy-flight.component';
import {FlightsService} from '../flights/flights.service';
import {Component, DebugElement, Input, Pipe, PipeTransform} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Flight} from '../model/flight';
import {BIGFLIGHTS, FLIGHTS, MYFLIGHTS} from '../model/mock-flights';
import {ActivatedRoute, Params} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {CurrencyConversionPipe} from '../currency-conversion/currency-conversion.pipe';


class MockFlightsService {

  constructor() { }

  public getFlights(): Observable<Flight[]> {
    return of<Flight[]>( FLIGHTS);
  }

  public getChunkOfFlights(): Observable<Flight[]> {
    return of<Flight[]>( FLIGHTS);
  }

  public getNumberOfFlights(): Observable<number> {
    return of<number>( 10);
  }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }
}

@Component({
  selector: 'app-payment',
  template: ''
})
class MockAppPaymentComponent {
  @Input()
  public selectedFlight: Flight;

}

@Component({
  selector: 'app-flight-filter',
  template: ''
})
class MockFlightFilterComponent {
  @Input()
  public label: string;
  @Input()
  public initialValue: string;

  public onFilterChange(flight: string) {}

}

@Pipe({
  name: 'currencyConversion'
})
class MockCurrencyConversionPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
  }

}

const mockFlightsService = new MockFlightsService();

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyFlightComponent, MockAppPaymentComponent, MockFlightFilterComponent, MockCurrencyConversionPipe ],
      providers: [{
                    provide: FlightsService,
                    useValue: mockFlightsService
                  },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{id: 1}]),
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
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

  it('should set showBuyFlights to false when onClickBuyFlights() is called', () => {
    component.onClickBuyFlights();
    component.onClickBuyFlights();
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should not try to load more flights when next is pressed if on the last page', () => {
    spyOn(mockFlightsService,'getChunkOfFlights').and.callThrough();
    component.onNext()
    expect(mockFlightsService.getChunkOfFlights).not.toHaveBeenCalled();
  });

  it('should not try to load more flights when previous is pressed if on the first page', () => {
    spyOn(mockFlightsService,'getChunkOfFlights').and.callThrough();
    component.onPrevious()
    expect(mockFlightsService.getChunkOfFlights).not.toHaveBeenCalled();
  });

  it('should try to load more flights when next is pressed if not on the last page', () => {
    spyOn(mockFlightsService,'getChunkOfFlights').and.returnValue(of(BIGFLIGHTS.slice(0,20)));
    spyOn(mockFlightsService,'getNumberOfFlights').and.returnValue(of(25));
    component.ngOnInit();
    fixture.detectChanges();
    component.onNext()
    expect(mockFlightsService.getChunkOfFlights).toHaveBeenCalledTimes(2);
  });

  it('should try to load more flights when previous is pressed if not on the first page', () => {
    spyOn(mockFlightsService,'getChunkOfFlights').and.returnValue(of(BIGFLIGHTS.slice(0,20)));
    spyOn(mockFlightsService,'getNumberOfFlights').and.returnValue(of(25));
    component.ngOnInit();
    fixture.detectChanges();
    component.onNext();
    component.onPrevious();
    expect(mockFlightsService.getChunkOfFlights).toHaveBeenCalledTimes(3); // (once for ngOnInit, once for next and once for previous)
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

  it('should update the originFilter when a value is entered', () => {
    const expected = 'JFK';
    fixture.detectChanges();
    const originFilterDe = fixture.debugElement.query(By.css('app-flight-filter:nth-child(1)'));
    originFilterDe.triggerEventHandler('filterEmitter', expected);
    fixture.detectChanges();
    expect(component.originFilter).toBe(expected);
  });

  it('should update the destinationFilter when a value is entered', () => {
    const expected = 'JFK';
    fixture.detectChanges();
    const destinationFilterDe = fixture.debugElement.queryAll(By.css('app-flight-filter'))[1];
    destinationFilterDe.triggerEventHandler('filterEmitter', expected);
    fixture.detectChanges();
    expect(component.destinationFilter).toBe(expected);
  });
});
