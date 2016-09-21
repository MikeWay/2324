import {Component, OnInit} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import { FlightsService } from './services/flights.service';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {Time} from "./time/time.directive";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent,BuyFlightComponent, ROUTER_DIRECTIVES, Time ],
  providers: [FlightsService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
  title = 'Welcome to Fly Sharp';
  tabIndex : string;

  constructor(private router: Router){}

  onTabClick(tabIndex : string){
    this.tabIndex = tabIndex;
  }

  ngOnInit(){
    this.tabIndex="/home";
    this.router.navigateByUrl("/home");

  }
}
