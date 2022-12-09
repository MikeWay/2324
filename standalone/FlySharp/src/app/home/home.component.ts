import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],  
  template: `<h1>Special Offer of the month {{specialOffer}}</h1>`,
})
export class HomeComponent {
  specialOffer = '10% off all round-the-World flights';
}