import { Component } from '@angular/core';
import { MyFlightsComponent } from '../my-flights/my-flights.component';

@Component({
  selector: 'app-my-flights-wrapper',
  standalone: true,
  imports: [MyFlightsComponent],
  templateUrl: './my-flights-wrapper.component.html',
  styleUrl: './my-flights-wrapper.component.scss'
})
export class MyFlightsWrapperComponent {

}
