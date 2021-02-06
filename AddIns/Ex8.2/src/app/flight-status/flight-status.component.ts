import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css']
})
export class FlightStatusComponent implements OnInit {

  private socket: Subject<any> | undefined;

  public flightStatus = 'All flights are currently on time';

  constructor() { }


  ngOnInit(): void {

  }

}
