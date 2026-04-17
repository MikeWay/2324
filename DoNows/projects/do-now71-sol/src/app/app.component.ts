import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferencesFormComponent } from './preferences-form/preferences-form.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, PreferencesFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DoNow71';
}
