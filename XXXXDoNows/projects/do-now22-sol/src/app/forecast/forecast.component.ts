import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  mylocation = 'Somewhere over the rainbow';
}
