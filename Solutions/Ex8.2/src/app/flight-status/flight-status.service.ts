import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class FlightStatusService {

  constructor() { }

  	
public connect(url: string) : WebSocketSubject<any> {

  const myWebSocket: WebSocketSubject<any> = webSocket(url);

  return myWebSocket;

}
}
