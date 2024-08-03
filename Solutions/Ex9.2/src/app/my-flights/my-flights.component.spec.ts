import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { MyFlightsComponent } from './my-flights.component';
import { ApplicationStateService } from '../application-state/application-state.service';

describe('MyFlightsComponent', () => {
  let component: MyFlightsComponent;
  let fixture: ComponentFixture<MyFlightsComponent>;

  beforeEach(async () => {
    const spyApplicationStateService = jasmine.createSpyObj<ApplicationStateService>('MockApplicationStateService', [],
      {
          flights: FLIGHTS,
          myFlights: MYFLIGHTS,
          displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 }
      });

    await TestBed.configureTestingModule({
      imports: [ MyFlightsComponent ]
    }).overrideComponent(MyFlightsComponent,
      { set: { providers: [{ provide: ApplicationStateService, useValue: spyApplicationStateService }] } })
    .compileComponents();

    fixture = TestBed.createComponent(MyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
