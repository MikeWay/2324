import { Component } from '@angular/core';
import { ForecastComponent } from './forecast/forecast.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [ForecastComponent]
})
export class AppComponent {
  title = 'DoNow22';
}
