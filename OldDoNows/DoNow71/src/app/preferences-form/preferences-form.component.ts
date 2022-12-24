import { Component, OnInit } from '@angular/core';
import { Preferences } from '../entities/preferences';


@Component({
  selector: 'app-preferences-form',
  templateUrl: 'preferences-form.component.html',
  styleUrls: ['preferences-form.component.css'],
})
export class PreferencesFormComponent implements OnInit {

  temperatureUnits = ['F', 'C', 'K'];
  speedUnits = ['Knots', 'MPH', 'KPH' , 'M/S'];

  model = new Preferences(  "Long John Silver", "Treasure Island", "F", "Knots", 10 );


  ngOnInit() {
  }


  get jsonData() { return JSON.stringify(this.model); }
}
