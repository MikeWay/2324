import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class FlightStatusService {

  connect(url: string): WebSocketSubject<string> {
    const myWebSocket: WebSocketSubject<string> =
      webSocket(url);
    return myWebSocket;
  }
}
