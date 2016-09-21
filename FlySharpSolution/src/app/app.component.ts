// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }


import {Component, OnInit} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {BuyFlightComponent} from "./buy-flight/buy-flight.component";
import { FlightsService } from './services/flights.service';
import {RouterModule, Router} from "@angular/router";
import {Time} from "./time/time.directive";

@Component({
 // moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

})
export class AppComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(){
  }
}
