import { Component } from '@angular/core';
import { Forecast } from './forecast/forecast';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'DoNow22';
}
