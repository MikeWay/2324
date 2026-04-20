import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { BuyFlight } from './buy-flight/buy-flight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, BuyFlight, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Fly Sharp');
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
