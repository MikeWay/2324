import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
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
