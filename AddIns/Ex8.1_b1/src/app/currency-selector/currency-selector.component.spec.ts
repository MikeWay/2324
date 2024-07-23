import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectorComponent } from './currency-selector.component';
import { ApplicationStateService } from '../application-state/application-state.service';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

describe('CurrencySelectorComponent', () => {
  let component: CurrencySelectorComponent;
  let fixture: ComponentFixture<CurrencySelectorComponent>;

  beforeEach(async () => {
    const spyApplicationStateService = jasmine.createSpyObj<ApplicationStateService>('MockApplicationStateService', [],
      {
          flights: FLIGHTS,
          myFlights: MYFLIGHTS,
          displayCurrency: { code: 'GBP', symbol: '£', rate: 1.0 }
      });    
    await TestBed.configureTestingModule({
      imports: [CurrencySelectorComponent]
    }).overrideComponent(CurrencySelectorComponent,
      { set: { providers: [{ provide: ApplicationStateService, useValue: spyApplicationStateService }] } })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
