import { Component } from '@angular/core';
import {FlightsService} from "./services/flights.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlightsService ]
})
export class AppComponent {
  title = "Welcome to Fly Sharp";
}
