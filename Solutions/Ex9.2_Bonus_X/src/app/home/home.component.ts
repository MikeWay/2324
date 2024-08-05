import { Component } from "@angular/core";
import { FlightStatusComponent } from "../flight-status/flight-status.component";
import { OrgDestSelectorComponent } from "../org-dest-selector/org-dest-selector.component";


@Component({
  selector: 'app-home',
    standalone: true,
    imports: [FlightStatusComponent, OrgDestSelectorComponent ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  specialOffer = '10% off all round-the-World flights';
}