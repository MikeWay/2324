import { Component, ViewChild } from '@angular/core';
import { Preferences } from '../model/preferences';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-preferences-form',
    imports: [FormsModule, JsonPipe],
    templateUrl: './preferences-form.component.html',
    styleUrl: './preferences-form.component.scss'
})
export class PreferencesFormComponent {
  temperatureUnits = ['F', 'C', 'K'];
  speedUnits = ['Knots', 'MPH', 'KPH' , 'M/S'];
  
  model = new Preferences(  "Long John Silver", "Treasure Island", "F", "Knots", 10 );

  ngOnInit() {
  }

  get jsonData() { return JSON.stringify(this.model); }


}

