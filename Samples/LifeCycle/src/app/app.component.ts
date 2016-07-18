import { Component } from '@angular/core';

import { CycleReporterComponent } from './cycle-reporter/cycle-reporter.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CycleReporterComponent],
})

export class AppComponent  {

  hasChild : boolean = false;
  counter = 0;


  toggleChild(){
    this.hasChild = !this.hasChild;
    this.counter++;
  }
}
