import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-forecast',
  templateUrl: './forecast.html',
  styleUrls: ['./forecast.css']
})
export class Forecast {
  mylocation = 'Somewhere over the rainbow';
}
