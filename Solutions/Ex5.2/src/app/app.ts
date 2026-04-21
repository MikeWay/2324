import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
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
