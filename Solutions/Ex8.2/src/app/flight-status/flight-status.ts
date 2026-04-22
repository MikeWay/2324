import { Component, OnInit, inject, signal } from '@angular/core';
import { FlightStatusService } from '../flight-status-service/flight-status-service';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  templateUrl: './flight-status.html',
  styleUrls: ['./flight-status.css']
})
export class FlightStatus implements OnInit {
  private flightStatusService = inject(FlightStatusService);
  private socket = this.flightStatusService.connect('ws://localhost:8081');

  public flightStatus = signal('All flights are currently on time');

  ngOnInit(): void {
    this.socket.subscribe(
      (status: any) => { this.flightStatus.set(status); },
      (error: any) => { console.error('WebSocket error', error); }
    );
    this.socket.next({ airport: 'JFK' });
  }
}
