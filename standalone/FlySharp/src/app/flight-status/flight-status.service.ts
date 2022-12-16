import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class FlightStatusService {

  connect(url: string): WebSocketSubject<Record<string, string>> {
    const myWebSocket: WebSocketSubject<Record<string, string>> =
      webSocket(url);
    return myWebSocket;
  }
}
