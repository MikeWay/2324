import {Component, OnInit, animate, style, state, transition, trigger} from '@angular/core';

import { Preferences } from '../entities/preferences'

@Component({
  selector: 'app-preferences-form',
  templateUrl: 'preferences-form.component.html',
  styleUrls: ['preferences-form.component.css'],
  animations: [
    trigger('myanimate', [
      state('on', style({
        opacity : 1
      })),
      state('off',   style({
        opacity : 0
      })),
      transition('on => off', animate('1000ms ease-out')),
      transition('off => on', animate('1000ms ease-in'))
    ])]
  })
export class PreferencesFormComponent implements OnInit {

  temperatureUnits = ['F', 'C', 'K'];
  speedUnits = ['Knots', 'MPH', 'KPH' , 'M/S'];
  onOff = "on";

  model = new Preferences(  "Long John Silver", "Treasure Island", "F", "Knots", 10 );


  ngOnInit() {
  }


  get jsonData() { return JSON.stringify(this.model); }

  onShow(){
    this.onOff = "on";
  }

  onHide(){
    this.onOff = "off";
  }
}
