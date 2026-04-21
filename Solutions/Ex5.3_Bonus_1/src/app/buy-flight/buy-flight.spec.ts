import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlight } from './buy-flight';

describe('BuyFlight', () => {
  let component: BuyFlight;
  let fixture: ComponentFixture<BuyFlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyFlight],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyFlight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
