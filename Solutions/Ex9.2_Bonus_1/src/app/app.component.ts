import { Component } from '@angular/core';
import { NgClass } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home.component';
import { BuyFlightComponent } from './buy-flight/buy-flight.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { TimeDirective } from './time/time.directive';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, BuyFlightComponent, NgClass, RouterLink, CurrencySelectorComponent, TimeDirective,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {    
  title = 'Fly Sharp';
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
