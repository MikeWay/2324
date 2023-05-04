import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlightComponent, SHOW_BUY_FLIGHTS_STATE } from './buy-flight.component';
import { FlightsService } from '../flights/flights.service';
import { Component, DebugElement, Input, Pipe, PipeTransform } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Flight } from '../model/flight';
import { FLIGHTS, FLIGHTS_25, FLIGHTS_43, MYFLIGHTS } from '../model/mock-flights';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, of, ReplaySubject } from 'rxjs';
import { ApplicationStateService } from '../application-state/application-state.service';


// class MockFlightsService {
//   public getFlights(): Observable<Flight[]> {
//     return of<Flight[]>(FLIGHTS);
//   }
//   public getChunkOfFlights(): Observable<Flight[]> {
//     return of<Flight[]>(FLIGHTS);
//   }

//   public getNumberOfFlights(): Observable<number> {
//     return of<number>(10);
//   }

//   public getMyFlights(): Observable<Flight[]> {
//     return of(MYFLIGHTS);
//   }
// }

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
  public onFilterChange(flight: string): void { }

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



class MockApplicationService {
  private flightsSubject = new ReplaySubject<Flight[]>(1);
  private flightsCountSubject = new ReplaySubject<number>(1);  

  flights$: Observable<Flight[]> = this.flightsSubject.asObservable();
  flightsCount$: Observable<number> = this.flightsCountSubject.asObservable();  

  flightsData = FLIGHTS_25;

  constructor(){
    this.setFlights(FLIGHTS_25);
  }

  setFlights(flights: Flight[]){
    this.flightsSubject.next(flights);
  }

  getAccount = () => of({});

  displayCurrency = {'symbol': '£', rate: 1};
}


describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;
  let el: DebugElement;
  let mockApplicationService = new MockApplicationService();   


  beforeEach(async () => {
    mockApplicationService = new MockApplicationService();    

    await TestBed.configureTestingModule({
      declarations: [MockAppPaymentComponent, MockFlightFilterComponent, MockCurrencyConversionPipe],
      providers: [
      {
        provide: ApplicationStateService,
        useValue: mockApplicationService
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
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(BuyFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should default showBuyFlights to true', () => {
    expect(component.showBuyFlights).toBeTruthy();
  });

  it('should set showBuyFlights to false when toggleFlightDisplay() is called', () => {
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

  it('should show  20 flights in the table', () => {
    component.showBuyFlights = true;
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(rows.length).toBe(20);
  });

  it('should load a second page of flights when next() is called', ()=> {
    fixture.detectChanges();
    component.onNext();
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(rows.length).toBe(5);    
  });

  it('should have a flight number of FS1 in row 1', ()=> {  
    fixture.detectChanges();
    expect(getTableCellData(fixture, 1, 2)).toBe("FS1");    
  }); 

  it('should have a flight number of FS21 in row 1 after next() is called', ()=> {
    
    fixture.detectChanges();
    component.onNext();
    fixture.detectChanges();
    expect(getTableCellData(fixture, 1, 2)).toBe("FS21");    
  });  

  it('should show the 1st page of 20 flights when next() is followed by previous()', ()=> {
    fixture.detectChanges();
    component.onNext();
    fixture.detectChanges();
    let rows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(rows.length).toBe(5);    
    component.onPrevious();
    fixture.detectChanges();
    rows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(rows.length).toBe(20);    

  });



it('should have a flight number of FS41 in row 1 after next() is called twice', ()=> {
  mockApplicationService.setFlights(FLIGHTS_43);
  fixture.detectChanges();
  component.onNext();
  fixture.detectChanges();
  component.onNext();
  fixture.detectChanges(); 
  expect(getTableCellData(fixture, 1, 2)).toBe("FS41");    
});  

it('should have a flight number of FS21 in row 1 after next() is called twice then previous() once', ()=> {
  mockApplicationService.flightsData = FLIGHTS_43;
 
  fixture.detectChanges();
  component.onNext();
  fixture.detectChanges();
  component.onNext();
  fixture.detectChanges();  
  component.onPrevious();
  fixture.detectChanges();    
  expect(getTableCellData(fixture, 1, 2)).toBe("FS21");    
});

});

/** toggleFlightDisplay
 * Gets the text at the specified row and col within a table
 * Note: row and col are 1 based (not zero)
*/

function getTableCellData(fixture: ComponentFixture<BuyFlightComponent>, row: number, col: number) : string  {
  let eleText='ERROR';
  const query: string = 'table tbody tr:nth-child(' + row + ') td:nth-child(' + col + ')';
  console.log('QUERY: ' + query);
  const deTD = fixture.debugElement.query(By.css(query));
  const td = deTD.nativeElement as Element;
  if(td && td.firstChild&& td.firstChild.textContent){
    eleText = td.firstChild.textContent;
  }
  return eleText;
}
