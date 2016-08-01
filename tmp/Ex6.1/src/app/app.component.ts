import {Component, OnInit} from '@angular/core';
import {HomeComponent} from "./+Home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import { FlightsService } from './services/flights.service';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent, BuyFlightComponent, ROUTER_DIRECTIVES],
  providers: [FlightsService],

})
export class AppComponent implements OnInit {
  title = 'Welcome to Fly Sharp';
  tabIndex : string;

  constructor(private router: Router){}


  ngOnInit(){
   this.router.navigateByUrl("/home");
    this.tabIndex = "/home";
  }
}
