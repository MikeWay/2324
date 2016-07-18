import { Component, OnInit } from '@angular/core';
import {  Router, ROUTER_DIRECTIVES, } from '@angular/router';
import {FlightService } from './services/flight.service';
import {HomeComponent} from "./+home/home.component";
import {AccountComponent} from "./+account/account.component";
import {MyFlightsComponent} from "./+my-flights/my-flights.component";
import {BuyFlightComponent} from "./+buy-flight/buy-flight.component";



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FlightService],
  directives: [ROUTER_DIRECTIVES],
  precompile: [HomeComponent, BuyFlightComponent, MyFlightsComponent, AccountComponent]
})


export class AppComponent implements OnInit {
  title = 'container';
  private tabIndex :string;
  menuCollapsed = true;
  constructor(private router: Router){}


  onTabClick(tab : string){
    this.tabIndex = tab;
//   this.titleService.setTitle(tab);
  }

  menuButtonClick(){
    this.menuCollapsed = !this.menuCollapsed;
  }

  ngOnInit() {
    this.tabIndex = 'home';
    this.router.navigateByUrl("/home");
  }
}
