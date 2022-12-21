import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { FlightStatusService } from './flight-status.service';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.scss']
})
export class FlightStatusComponent implements OnInit {
  private socket: Subject<Record<string, string>> | undefined;

  public flightStatus = 'All flights are currently on time';

  constructor(private flightStatusService: FlightStatusService) { }


  ngOnInit(): void {
    this.socket = this.flightStatusService.connect('ws://localhost:8081');
    this.socket.subscribe(
      dataFromServer => this.flightStatus = dataFromServer as unknown as string,  // Cast needed as input to Socket is Record and subscription is a string!
      err => console.error(`Web socket connection error: ${JSON.stringify(err)}`)
    );
    this.socket.next({ airport: 'JFK' });
  }
}
