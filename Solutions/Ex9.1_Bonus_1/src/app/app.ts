import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { CurrencySelector } from './currency-selector/currency-selector';
import { Time } from './time/time';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass, CurrencySelector, Time],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly title = signal('Fly Sharp');
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
