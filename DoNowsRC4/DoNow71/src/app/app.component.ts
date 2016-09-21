import {Component } from '@angular/core';
import {PreferencesFormComponent} from "./preferences-form/preferences-form.component";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PreferencesFormComponent],
})


export class AppComponent {
  title = 'app works!';

}
