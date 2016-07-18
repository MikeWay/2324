import { Component, OnInit } from '@angular/core';
import { SpecialOffersComponent } from '../special-offers/special-offers.component';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [SpecialOffersComponent]
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
