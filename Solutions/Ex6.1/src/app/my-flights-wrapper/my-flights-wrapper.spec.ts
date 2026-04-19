import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlightsWrapper } from './my-flights-wrapper';

describe('MyFlightsWrapper', () => {
  let component: MyFlightsWrapper;
  let fixture: ComponentFixture<MyFlightsWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFlightsWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(MyFlightsWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
