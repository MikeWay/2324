import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

//import { WindComponent } from '../wind/wind.component';
//import {Router} from "@angular/router";
//import {WeatherService} from "../services/weather.service";
import {Weather} from "../entities/weather";
import {WeatherService, WeatherServiceIF} from "../services/weather.service";
import {WindComponent} from "../wind/wind.component";

@Component({
  moduleId: module.id,
  selector: 'app-current-weather',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['current-weather.component.css'],
  directives: [WindComponent]
})

export class CurrentWeatherComponent implements OnInit {

  buttonDisabled : boolean = false;
  @Input()
  _preferedUnits : string;
  debug : string;
  raining = true;
  sunny = false;
  conditions="sunny";
  currentCity = "Berlin";
  values;

  weather : Weather[];
  error: any;

  @Output()
  weatherUpdated : EventEmitter<string>;

  //constructor( private router : Router, private weatherService : WeatherService ) {
  constructor( private weatherService : WeatherService ) {
     this.weatherUpdated = new EventEmitter<string>();
  }

  set preferedUnits(preferedUnits : string) {
  this._preferedUnits = preferedUnits;
  console.log("New value of preferred units is: " + preferedUnits );
}
  get preferedUnits() : string {
    return this._preferedUnits;
  }

  onClick(){
    this.buttonDisabled = true;
    this.weatherUpdated.emit(this.currentCity);
    // this.debug=JSON.stringify(this);
    // console.log(this.preferedUnits);
  }

  onClickOther(){
    this.buttonDisabled = false;
    // this.debug=JSON.stringify(this);
  }

  onClickWarnings(){
    //this.router.navigate(['/warnings'])

  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(
      (weather : Weather[])=>this.weather = weather,
      (error : any)=>this.error = error);

  }


}
