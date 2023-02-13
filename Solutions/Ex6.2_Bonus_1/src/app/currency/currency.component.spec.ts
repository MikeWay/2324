import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationStateService } from '../application-state/application-state.service';

import { CurrencyComponent } from './currency.component';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CurrencyComponent ],
      providers: [{provide: ApplicationStateService, useValue: {}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
