import { Component, enableProdMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferencesFormComponent } from './preferences-form/preferences-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PreferencesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DoNow71';
}
