import { Component, OnInit, inject } from '@angular/core';
import { FlightStatusService } from '../flight-status-service/flight-status-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  templateUrl: './flight-status.html',
  styleUrls: ['./flight-status.css']
})
export class FlightStatus implements OnInit {
  private flightStatusService = inject(FlightStatusService);
  private socket = this.flightStatusService.connect('ws://localhost:8081');

  public flightStatus = toSignal(this.socket.asObservable(), { initialValue: 'All flights are currently on time' });

  ngOnInit(): void {
    this.socket.next({ airport: 'JFK' });
  }
}
