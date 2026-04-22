import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class FlightStatusService {
  connect(url: string): WebSocketSubject<any> {
    return webSocket<any>(url);
  }
}
