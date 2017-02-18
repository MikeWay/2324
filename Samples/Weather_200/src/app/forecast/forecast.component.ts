import {Component, OnInit, OnDestroy} from '@angular/core';

import {ActivatedRoute, Router, Params} from "@angular/router";
import {WeatherServiceIF, WeatherService} from "../services/weather.service";
import { MakeItBold } from '../directives/make-it-bold.directive';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styles: ['p {color:blue;}'],
})

export class ForecastComponent implements OnInit, OnDestroy  {

    private sub : any;
  private sub2 : any;
  private forecast : string;
  private mylocation : string = "Netherland";
  private unit : string;

  constructor(private router : Router, private route: ActivatedRoute, private weatherService : WeatherService ){}


  ngOnInit(){

    this.route.queryParams.subscribe((params: Params) => {
      this.mylocation = params['location'];
      this.unit = params['units'];
      console.log("Location is now: " + this.mylocation)
      this.forecast = this.weatherService.getForecast(this.mylocation);
    });

    // this.sub = this.route.params.subscribe(params => {
    //   this.mylocation = params['location'];
    //   this.unit = params['units'];
    //   console.log("Location is now: " + this.mylocation)
    //   this.forecast = this.weatherService.getForecast(this.mylocation);
    // });

    // this.sub2 = this.router.routerState.queryParams.subscribe(params => {
    //   this.mylocation = params['location'];
    //   this.unit = params['units'];
    //   console.log("Location is now (set by query parameters) : " + this.mylocation + " Units " + this.unit )
    //   this.forecast = this.weatherService.getForecast(this.mylocation);
    // });
  }

  ngOnDestroy(){
    //this.sub.unsubscribe();
    //this.sub2.unsubscribe();
  }
}
