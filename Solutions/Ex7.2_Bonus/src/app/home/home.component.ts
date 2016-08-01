import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  template: `<h1>Special Offer of the month {{specialOffer}}</h1>`
})
export class HomeComponent {
  specialOffer = "10% of all round-the-World flights";
}
