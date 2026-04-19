import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeather } from './current-weather/current-weather';

@Component({
    selector: 'app-root',
    imports: [ CurrentWeather],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
  title = 'DoNow61';
}
