import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WebSocketSubject } from 'rxjs/webSocket';
import { FlightStatusService } from '../flight-status-service/flight-status.service';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  templateUrl: './flight-status.html',
  styleUrls: ['./flight-status.css']
})
export class FlightStatus implements OnInit {
  private flightStatusService = inject(FlightStatusService);
  private socket: WebSocketSubject<any> = this.flightStatusService.connect('ws://localhost:8081');
  flightStatus = toSignal(this.socket.asObservable(), { initialValue: 'All flights are currently on time' });

  ngOnInit(): void {
    this.socket.next({ airport: 'JFK' });
  }
}
