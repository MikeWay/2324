import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { BuyFlight } from './buy-flight/buy-flight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, BuyFlight],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Fly Sharp');
}
