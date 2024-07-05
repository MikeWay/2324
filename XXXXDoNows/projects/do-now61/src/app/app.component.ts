import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrentWeatherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoNow41';
}
