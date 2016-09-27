import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="jumbotron" *ngIf="!showSpecialOffers" id="home-jumbotron">
  <h1>FlySharp</h1>
  <p>The Angular Airline</p>
  <p>
    <button class="btn btn-lg btn-primary"  (click)="onClickSpecialOffers()" id="special-offers-button">Special Offers &raquo;</button>
  </p>
</div>

<special-offers *ngIf="showSpecialOffers"></special-offers>`,
})
export class HomeComponent {
  specialOffer="10% off all round-the-World flights";
}
