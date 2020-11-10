import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyFlightsComponent } from './my-flights.component';
import { FlightsService } from '../flights/flights.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

/**
 * Variant of the MyFlightsComponent test which uses a spy rather than a mock
 */

describe('MyFlightsComponent', () => {
  let component: MyFlightsComponent;
  let fixture: ComponentFixture<MyFlightsComponent>;
  let flightsServiceSpy;

  /** The beforeEach function here works fine as a single block. The reason being that there is currently
   * np asynchronous code in the component under tes.
   */
  beforeEach(() => {

    const spy = jasmine.createSpyObj('FlightsService', ['getMyFlights']);

    TestBed.configureTestingModule({
      declarations: [ MyFlightsComponent ],
      providers: [{provide: FlightsService, useValue: spy} ]
    })
    .compileComponents();

    // Must be done before createComponent.
    flightsServiceSpy = TestBed.inject(FlightsService) as jasmine.SpyObj<FlightsService>;

    fixture = TestBed.createComponent(MyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMyFlights', () => {
    flightsServiceSpy.getMyFlights.and.returnValue(MYFLIGHTS);
    expect(flightsServiceSpy.getMyFlights.calls.count()).toBe(1);
  });
});
