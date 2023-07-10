import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlightComponent } from './buy-flight.component';

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyFlightComponent]
    });
    fixture = TestBed.createComponent(BuyFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
