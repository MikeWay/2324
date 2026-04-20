import { TestBed } from '@angular/core/testing';
import { FlightStatusService } from './flight-status.service';

describe('FlightStatusService', () => {
  let service: FlightStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightStatusService]
    });
    service = TestBed.inject(FlightStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object with a next() method from connect()', () => {
    const subject = service.connect('ws://localhost:8888');
    expect(subject).toBeDefined();
    expect(typeof subject.next).toEqual('function');
  });
});
