import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFlights } from './my-flights';

describe('MyFlights', () => {
  let component: MyFlights;
  let fixture: ComponentFixture<MyFlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFlights]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty flights array by default', () => {
    expect(component.flights).toEqual([]);
  });
});