import { Component, OnDestroy } from "@angular/core";
import { FlightStatusComponent } from "../flight-status/flight-status.component";
import { OrgDestSelectorComponent } from "../org-dest-selector/org-dest-selector.component";

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
    standalone: true,
    imports: [FlightStatusComponent, MatGridListModule, MatCardModule, OrgDestSelectorComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class Home {
  specialOffer = '10% off all round-the-World flights';
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver){
    this.breakpointObserver
      .observe(['(max-width:750px)'])
      .subscribe((state: BreakpointState)=> {
        this.isSmallScreen = state.matches;
      })
  }
}