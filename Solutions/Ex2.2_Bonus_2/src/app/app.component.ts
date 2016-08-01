import { Component } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent,BuyFlightComponent ]
})
export class AppComponent {
  title = 'Welcome to Fly Sharp';
}
