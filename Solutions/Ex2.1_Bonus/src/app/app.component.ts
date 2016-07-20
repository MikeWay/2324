import { Component } from '@angular/core';
import {HomeComponent} from "./+Home/home.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent]
})
export class AppComponent {
  title = 'Welcome to Fly Sharp';
}
