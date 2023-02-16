import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FlightsService } from '../flights/flights.service';
import { FLIGHTS, MYFLIGHTS } from '../model/mock-flights';

import { MyFlightsComponent } from './my-flights.component';

describe('MyFlightsComponent', () => {
  let component: MyFlightsComponent;
  let fixture: ComponentFixture<MyFlightsComponent>;

  beforeEach(async () => {

    const mockFlightsService = jasmine.createSpyObj('FlightsService', {
      getFlights: FLIGHTS,
      getMyFlights: of(MYFLIGHTS)
    });

    await TestBed.configureTestingModule({
      providers: [{provide: FlightsService, useValue: mockFlightsService}],
      imports: [ MyFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
