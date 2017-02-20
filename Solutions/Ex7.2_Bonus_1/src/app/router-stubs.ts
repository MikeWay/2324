import { Directive, Component, Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})

export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({
    selector: 'router-outlet',
    template: '<p>outlet</p>'
})
export class RouterOutletStubComponent {
    
}




@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}
