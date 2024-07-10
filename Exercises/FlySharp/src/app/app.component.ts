import { Component } from '@angular/core';
import {NgClass} from '@angular/common'
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, BuyFlightComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fly Sharp';
  navbarOpen = false;

  toggleNavbar(){
    this.navbarOpen = ! this.navbarOpen;
  }
}
