import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-flight-status',
  standalone: true,
  templateUrl: './flight-status.html',
  styleUrls: ['./flight-status.css']
})
export class FlightStatus implements OnInit {

  private socket: Subject<any> | undefined;

  public flightStatus = 'All flights are currently on time';

  constructor() { }


  ngOnInit(): void {

  }

}
