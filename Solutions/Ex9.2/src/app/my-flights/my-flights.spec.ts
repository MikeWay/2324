import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { MyFlights } from './my-flights';
import { ApplicationState } from '../application-state/application-state';

describe('MyFlights', () => {
  let component: MyFlights;
  let fixture: ComponentFixture<MyFlights>;

  beforeEach(async () => {
    const mockApplicationState = {
      flights: FLIGHTS,
      myFlights: MYFLIGHTS,
      displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 },
      error: ''
    } as unknown as ApplicationState;

    await TestBed.configureTestingModule({
      imports: [MyFlights]
    }).overrideComponent(MyFlights,
      { set: { providers: [{ provide: ApplicationState, useValue: mockApplicationState }] } })
      .compileComponents();

    fixture = TestBed.createComponent(MyFlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
