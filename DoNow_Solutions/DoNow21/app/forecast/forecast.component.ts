import {Component, OnInit, OnDestroy} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styles: ['p {color:blue;}'],
})

export class ForecastComponent implements OnInit, OnDestroy  {

  private sub : any;
  private sub2 : any;
  private forecast : string;
  mylocation : string = "Somewhere over the rainbow";
  private unit : string;

  constructor(){
  }

  ngOnInit(){
  }

  ngOnDestroy(){
  }
}
