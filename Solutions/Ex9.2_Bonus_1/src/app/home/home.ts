import { Component } from '@angular/core';
import { FlightStatus } from '../flight-status/flight-status';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { OrgDestSelectorComponent } from '../org-dest-selector/org-dest-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlightStatus, MatGridListModule, MatCardModule, OrgDestSelectorComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  specialOffer = '10% off all round-the-World flights';
}
