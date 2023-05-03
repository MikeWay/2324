import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MYFLIGHTS } from '../model/mock-flights';

import { MyFlightsComponent } from './my-flights.component';
import { ApplicationStateService } from '../application-state/application-state.service';

describe('MyFlightsComponent', () => {
  let component: MyFlightsComponent;
  let fixture: ComponentFixture<MyFlightsComponent>;

  beforeEach(async () => {

    // const mockFlightsService = jasmine.createSpyObj('FlightsService', {
    //   getFlights: FLIGHTS,
    //   getMyFlights: of(MYFLIGHTS)
    // });

    const mockApplicationStateService = jasmine.createSpyObj('ApplicationStateService', {}, {myFlights$: of(MYFLIGHTS)})

    await TestBed.configureTestingModule({
      providers: [{provide: ApplicationStateService, useValue: mockApplicationStateService}],
      imports: [ MyFlightsComponent ]
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
