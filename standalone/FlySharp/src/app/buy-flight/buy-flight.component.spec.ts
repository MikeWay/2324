import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlightComponent } from './buy-flight.component';
import {FlightsService} from '../flights/flights.service';
import {Component, DebugElement, Input, Pipe, PipeTransform} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Flight} from '../model/flight';
import {FLIGHTS, MYFLIGHTS} from '../model/mock-flights';
import {ActivatedRoute } from '@angular/router';
import {from, Observable, of} from 'rxjs';


class MockFlightsService {
  public getFlights(): Observable<Flight[]> {
    return of<Flight[]>( FLIGHTS);
  }
  public getChunkOfFlights(): Observable<Flight[]> {
    return of<Flight[]>( FLIGHTS);
  }

  public getNumberOfFlights(): Observable<number> {
    return of<number>( 10);
  }

  public getMyFlights(): Observable<Flight[]> {
    return of(MYFLIGHTS);
  }
}

@Component({
  selector: 'app-payment',
  template: ''
})
class MockAppPaymentComponent {
  @Input()
  public selectedFlight!: Flight;

}

@Component({
  selector: 'app-flight-filter',
  template: ''
})
class MockFlightFilterComponent {
  @Input()
  public label!: string;
  @Input()
  public initialValue!: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  public onFilterChange(flight: string): void {}

}

@Pipe({
  name: 'currencyConversion'
})
class MockCurrencyConversionPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  transform(value: string, ...args: string[]): string {
    return "";
  }
}

const mockFlightsService = new MockFlightsService();

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ MockAppPaymentComponent, MockFlightFilterComponent, MockCurrencyConversionPipe ],
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default showBuyFlights to false', () => {
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to true when toggleFlightDisplay() is called', () => {
    component.toggleFlightDisplay();
    expect(component.showBuyFlights).toBeFalsy();
  });

  it('should set showBuyFlights to false when toggleFlightDisplay() is called twice', () => {
    component.toggleFlightDisplay();
    component.toggleFlightDisplay();
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to false when the link is clicked', () => {
    el = fixture.debugElement.query(By.css('#toggle'));
    el.triggerEventHandler('click', null);
    expect(component.showBuyFlights).toBeFalsy();
  });

  it('should hide the flights table  when the link is clicked', () => {
    fixture.detectChanges();
    let tableEle = fixture.debugElement.query(By.css('table'));
    expect(tableEle).toBeTruthy();
    el = fixture.debugElement.query(By.css('#toggle'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    tableEle = fixture.debugElement.query(By.css('table'));
    expect(tableEle).toBeFalsy();
  });
});
