import { Component,
          AfterContentChecked,
          AfterContentInit,
          AfterViewChecked,
          AfterViewInit,
          DoCheck,
          Input,
          OnChanges,
          OnDestroy,
          OnInit,
          SimpleChange } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-cycle-reporter',
  templateUrl: 'cycle-reporter.component.html',
  styleUrls: ['cycle-reporter.component.css']
})


export class CycleReporterComponent implements
             OnChanges, OnInit, DoCheck,
             AfterContentInit, AfterContentChecked,
             AfterViewInit, AfterViewChecked,
             OnDestroy {

               @Input()  count: number;

               constructor(){
                 this.logIt(`constructor()` );
               }

               ngOnInit(){
                 this.logIt(`Init()` );
               }
               // only called for/if there is an @input variable set by parent.
               ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
                //  let changesMsgs: string[] = [];
                //  for (let propName in changes) {
                //    if (propName === 'name') {
                //      let name = changes['name'].currentValue;
                //      changesMsgs.push(`name ${this.verb} to "${name}"`);
                //    } else {
                //      changesMsgs.push(propName + ' ' + this.verb);
                //    }
                //  }
                 this.logIt(`OnChanges()`);

               }

               // Beware! Called frequently!
               // Called in every change detection cycle anywhere on the page
               ngDoCheck() { this.logIt(`DoCheck`); }

               ngAfterContentInit() { this.logIt(`AfterContentInit`);  }

               // Beware! Called frequently!
               // Called in every change detection cycle anywhere on the page
               ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

               ngAfterViewInit() { this.logIt(`AfterViewInit`); }

               // Beware! Called frequently!
               // Called in every change detection cycle anywhere on the page
               ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

               ngOnDestroy() { this.logIt(`OnDestroy`); }

               protected logIt(msg: string) {
                 console.log(msg + " count = " + this.count);
               }

}
