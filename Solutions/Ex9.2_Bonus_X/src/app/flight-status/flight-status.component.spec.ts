import { ComponentFixture, fakeAsync, TestBed, tick, } from '@angular/core/testing';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { getTestScheduler, cold } from 'jasmine-marbles';

import { FlightStatusComponent } from './flight-status.component';
import { FlightStatusService } from './flight-status.service';
import { By } from '@angular/platform-browser';
import { WebSocketSubject } from 'rxjs/webSocket';

const testStatus = 'Too windy to fly';

/** A mock of the Subject returned by the flight status service.
 * It's just a marbles based observable with a dummy next method
 */
class MockSubject {
  subscribe(next: any, error: any): Subscription {
    return cold('---a-b', { a: 'Wet', b: testStatus }).subscribe({ next, error });
  }
  next(msg: object): void { }
}

// tslint:disable-next-line: variable-name
const _mockSubject = new MockSubject();


/** A mock of the flight status service */
class MockFlightStatusService {

  constructor(public mockSubject: MockSubject) { }

  connect(): any {
    return this.mockSubject;
  }
}

describe('FlightStatusComponent', () => {
  let component: FlightStatusComponent;
  let fixture: ComponentFixture<FlightStatusComponent>;
  let socketService: FlightStatusService;

  beforeEach(async () => {

    const mockSubjectObj = {
      subscribe: (next: any, error: any) => {
        return cold('---a-b', { a: 'Wet', b: testStatus }).subscribe({ next, error });
      },
      next: jasmine.createSpy('next')
    };

    const mockFlightStatusService = new MockFlightStatusService(mockSubjectObj);



    await TestBed.configureTestingModule({
      imports: [FlightStatusComponent],
      providers: [{ provide: FlightStatusService, useValue: mockFlightStatusService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightStatusComponent);
    component = fixture.componentInstance;
    socketService = TestBed.inject(FlightStatusService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have loaded flight status from the server', () => {
    getTestScheduler().flush();
    fixture.detectChanges();
    expect(component.flightStatus).toEqual(testStatus);
  });

  it('should display an initial flight status', fakeAsync(() => {
    const response = 'All flights are currently on time';
    fixture.detectChanges();
    expect(component.flightStatus).toEqual(response);
  }));

  it('should display value from the an initial flight status', fakeAsync(() => {
    const response = 'All flights are currently on time';
    const ele = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(ele.innerHTML).toEqual(response);
  }));

  it('should display value from the service when the observables are flushed', fakeAsync(() => {
    getTestScheduler().flush();
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(ele.innerHTML).toEqual(testStatus);
  }));

  it('should have called next to set the airport code', () => {
    const mockFlightStatusServce = socketService as unknown as MockFlightStatusService;
    expect(mockFlightStatusServce.mockSubject.next).toHaveBeenCalledWith({ airport: 'JFK' });
  });

});
