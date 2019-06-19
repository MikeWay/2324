import {Component, OnInit, OnDestroy} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})

export class ForecastComponent implements OnInit, OnDestroy  {

  private sub: any;
  private sub2: any;
  private forecast: string;
  mylocation = 'Somewhere over the rainbow';
  private unit: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
