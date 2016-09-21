import { Component, OnInit } from '@angular/core';
import { SpecialOffersComponent } from '../special-offers/special-offers.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  private showSpecialOffers = false;

  constructor() {}

  onClickSpecialOffers(){
    this.showSpecialOffers = true;

  }

  ngOnInit() {
  }

}
