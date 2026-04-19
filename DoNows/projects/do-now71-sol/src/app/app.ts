import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferencesForm } from './preferences-form/preferences-form';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, PreferencesForm],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
  title = 'DoNow71';
}
