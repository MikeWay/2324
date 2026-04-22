import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelector } from './currency-selector';
import { ApplicationState } from '../application-state/application-state';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

describe('CurrencySelector', () => {
  let component: CurrencySelector;
  let fixture: ComponentFixture<CurrencySelector>;

  beforeEach(async () => {
    const mockApplicationState = {
      flights: FLIGHTS,
      myFlights: MYFLIGHTS,
      displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 },
      error: ''
    } as unknown as ApplicationState;

    await TestBed.configureTestingModule({
      imports: [CurrencySelector]
    }).overrideComponent(CurrencySelector,
      { set: { providers: [{ provide: ApplicationState, useValue: mockApplicationState }] } })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencySelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
