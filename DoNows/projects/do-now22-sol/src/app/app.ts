import { Component } from '@angular/core';
import { Forecast } from './forecast/forecast';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [Forecast]
})
export class App {
  title = 'DoNow22';
}
