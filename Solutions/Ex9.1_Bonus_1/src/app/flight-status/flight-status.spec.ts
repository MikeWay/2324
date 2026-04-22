import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { FlightStatus } from './flight-status';
import { FlightStatusService } from '../flight-status-service/flight-status-service';
import { By } from '@angular/platform-browser';

const testStatus = 'Too windy to fly';

describe('FlightStatus', () => {
  let component: FlightStatus;
  let fixture: ComponentFixture<FlightStatus>;
  let mockSubject: Subject<any>;
  let nextSpy: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    mockSubject = new Subject<any>();
    nextSpy = vi.fn();

    const mockFlightStatusService = {
      connect: vi.fn().mockReturnValue({
        subscribe: (next: any, error: any) => mockSubject.subscribe({ next, error }),
        asObservable: () => mockSubject.asObservable(),
        next: nextSpy
      })
    };

    await TestBed.configureTestingModule({
      imports: [FlightStatus],
      providers: [{ provide: FlightStatusService, useValue: mockFlightStatusService }]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(FlightStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have loaded flight status from the server', () => {
    mockSubject.next(testStatus);
    expect(component.flightStatus()).toEqual(testStatus);
  });

  it('should display an initial flight status', () => {
    expect(component.flightStatus()).toEqual('All flights are currently on time');
  });

  it('should display value from initial flight status', () => {
    const ele = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(ele.innerHTML).toEqual('All flights are currently on time');
  });

  it('should display value from the service when the observables emit', () => {
    mockSubject.next(testStatus);
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(ele.innerHTML).toEqual(testStatus);
  });

  it('should have called next to set the airport code', () => {
    expect(nextSpy).toHaveBeenCalledWith({ airport: 'JFK' });
  });
});
