import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FlightStatusService } from './flight-status.service';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css']
})
export class FlightStatusComponent implements OnInit {

  private socket: Subject<any> | undefined;

  public flightStatus = 'All flights are currently on time';

  constructor(private flightStatusService: FlightStatusService ) { }


	
  ngOnInit(): void {
    this.socket = this.flightStatusService.connect('ws://localhost:8081');
    this.socket.subscribe(
       dataFromServer => { this.flightStatus = dataFromServer },
       err => console.error(`Web socket connection error: ${JSON.stringify(err)}`)
    );

    this.socket.next({airport: 'JFK'});
}

}
