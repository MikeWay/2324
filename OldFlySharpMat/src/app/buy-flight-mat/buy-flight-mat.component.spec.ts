
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFlightMatComponent } from './buy-flight-mat.component';

describe('BuyFlightMatComponent', () => {
  let component: BuyFlightMatComponent;
  let fixture: ComponentFixture<BuyFlightMatComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyFlightMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFlightMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
