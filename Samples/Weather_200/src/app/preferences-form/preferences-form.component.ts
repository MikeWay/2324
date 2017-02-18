import {Component, OnInit, ChangeDetectorRef} from '@angular/core';

import { Preferences } from '../entities/preferences'
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-preferences-form',
  templateUrl: 'preferences-form.component.html',
  styleUrls: ['preferences-form.component.css'],
})
export class PreferencesFormComponent implements OnInit {

  temperatureUnits = ['F', 'C', 'K'];
  speedUnits = ['Knots', 'MPH', 'KPH' , 'M/S'];
  error;

  model = new Preferences(  "Long John Silver", "Treasure Island", "F", "Knots", 10 );

  constructor(private weatherService : WeatherService, private cd: ChangeDetectorRef){}


  ngOnInit() {
  }

  onSubmit(){
    let theId : number;
    this.weatherService.updatePreferences(this.model).subscribe(
      (id : number)=> {theId = id; this.cd.markForCheck()},
      (err)=> this.error = err
    );

  }

  get jsonData() { return JSON.stringify(this.model); }
}
