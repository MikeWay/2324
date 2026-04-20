import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { FlightStatusService } from './flight-status.service';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  templateUrl: './flight-status.html',
  styleUrls: ['./flight-status.css']
})
export class FlightStatus implements OnInit {

  private socket: WebSocketSubject<any> | undefined;
  public flightStatus = 'All flights are currently on time';

  constructor(private flightStatusService: FlightStatusService) { }

  ngOnInit(): void {
    this.socket = this.flightStatusService.connect('ws://localhost:8081');
    this.socket.subscribe(
      dataFromServer => this.flightStatus = dataFromServer as string,
      err => console.error(`Web socket connection error: ${JSON.stringify(err)}`)
    );
    this.socket.next({ airport: 'JFK' });
  }
}
