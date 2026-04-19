import { Component } from '@angular/core';
import { MyFlights } from '../my-flights/my-flights';

@Component({
  selector: 'app-my-flights-wrapper',
  imports: [MyFlights],
  templateUrl: './my-flights-wrapper.html',
  styleUrl: './my-flights-wrapper.scss',
})
export class MyFlightsWrapper {}
