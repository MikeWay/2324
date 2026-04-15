import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { BuyFlight } from './buy-flight/buy-flight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, BuyFlight],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Fly Sharp');

}
