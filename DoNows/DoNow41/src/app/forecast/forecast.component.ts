import {Component, OnInit, OnDestroy} from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { WeatherServiceIF } from "../services/weather.service";

@Component({
  moduleId: module.id,
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
})

export class ForecastComponent implements OnInit, OnDestroy  {

    private sub : any;
  private sub2 : any;
  private forecast : string;
  private mylocation : string = "Netherland";
  private unit : string;

  // constructor(private router : Router, private route: ActivatedRoute, private weatherService : WeatherService ){
  //
  // }


  constructor(private weatherService : WeatherServiceIF){}
  ngOnInit(){
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
    this.sub2.unsubscribe();
  }
}
