import { TestBed } from '@angular/core/testing';

import { FlightStatusService } from './flight-status.service';

describe('FlightStatusService', () => {
  let service: FlightStatusService;

  const url = 'ws://localhost:8888';
  let socketMock: any;

  beforeEach(() => {

    function WebSocketStub(theUrl: string): void {
      socketMock = {
        url: theUrl,
        readyState: WebSocket.CONNECTING,
        next: jasmine.createSpy('next'),
        send: jasmine.createSpy('send'),
        close: jasmine.createSpy('close').and.callFake(() => {
          socketMock.readyState = WebSocket.CLOSING;
        })
      };

      return socketMock;
    }
    socketMock = WebSocketStub(url);
    WebSocketStub.OPEN = WebSocket.OPEN;
    WebSocketStub.CLOSED = WebSocket.CLOSED;

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Window,
          useValue: { socketMock },
        }, FlightStatusService
      ]
    });
    service = TestBed.inject(FlightStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the websocket function', () => {
    const message = { key: 'hello' };
    const wsSubject = service.connect(url);
    wsSubject.next(message);
    expect(socketMock.send.calls.count()).toEqual(0);
  });
});
