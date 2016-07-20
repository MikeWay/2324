import { Component } from '@angular/core';
import {HomeComponent} from "./+Home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import { FlightsService } from './services/flights.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent, BuyFlightComponent],
  providers: [FlightsService]
})
export class AppComponent {
  title = 'Welcome to Fly Sharp';
}
