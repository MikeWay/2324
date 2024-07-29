import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlightsWrapperComponent } from './my-flights-wrapper.component';

describe('MyFlightsWrapperComponent', () => {
  let component: MyFlightsWrapperComponent;
  let fixture: ComponentFixture<MyFlightsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFlightsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFlightsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
