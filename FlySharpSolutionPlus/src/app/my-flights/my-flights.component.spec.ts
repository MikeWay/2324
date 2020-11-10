import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyFlightsComponent } from './my-flights.component';
import { FlightsService } from '../flights/flights.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

class MockFlightsService {

  constructor() { }

  public getMyFlights(): Flight[] {
    return MYFLIGHTS;
  }
}


describe('MyFlightsComponent', () => {
  let component: MyFlightsComponent;
  let fixture: ComponentFixture<MyFlightsComponent>;

  /** The beforeEach function here works fine as a single block. The reason being that there is currently
   * np asynchronous code in the component under tes.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFlightsComponent ],
      providers: [{provide: FlightsService, useClass: MockFlightsService} ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
