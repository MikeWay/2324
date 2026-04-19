import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: 'app.html',
  styleUrls: ['app.scss']
})
export class App {
  title = 'app works!';
  user! : string;
  allKeys! : string;
}
