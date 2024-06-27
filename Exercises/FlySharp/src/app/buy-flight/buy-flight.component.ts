import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-flight',
  standalone: true,
  imports: [],
  templateUrl: './buy-flight.component.html',
  styleUrl: './buy-flight.component.scss'
})
export class BuyFlightComponent {
  flights= FLIGHTS;
  showBuyFlights = false;
}

const FLIGHTS = [
  {id: 11, flightNumber : 'FS1298', origin: 'LAX', destination : 'LHR', departDay : 'Monday',
  departTime : '09:00', arriveDay : 'Monday', arriveTime : '09:00', price : 99.99},
  {id: 12, flightNumber : 'FS1201', origin: 'LAX', destination : 'LHR', departDay : 'Tuesday',
  departTime : '09:00', arriveDay : 'Monday', arriveTime : '09:00', price : 99.99},
  {id: 13, flightNumber : 'FS1211', origin: 'LHR', destination : 'ARN', departDay : 'Wednesday',
  departTime : '09:00', arriveDay : 'Monday', arriveTime : '09:00', price : 99.99},
];
