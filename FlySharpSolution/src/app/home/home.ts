import { Component, inject, OnInit, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
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
export class Home implements OnInit {
  specialOffer = '10% off all round-the-World flights';
  cols = signal(2);

  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width:750px)']).subscribe(result => {
      this.cols.set(result.matches ? 1 : 2);
    });
  }
}
