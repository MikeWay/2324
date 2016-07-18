import { Component, OnInit } from '@angular/core';

import { Preferences } from '../entities/preferences'
import {FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-preferences-form',
  templateUrl: 'preferences-form.component.html',
  styleUrls: ['preferences-form.component.css'],
  directives: [FORM_DIRECTIVES],
})
export class PreferencesFormComponent implements OnInit {

  temperatureUnits = ['F', 'C', 'K'];
  speedUnits = ['Knots', 'MPH', 'KPH' , 'M/S'];

  model = new Preferences(  "Long John Silver", "Treasure Island", "F", "Knots", 10 );


  ngOnInit() {
  }


  get jsonData() { return JSON.stringify(this.model); }
}
