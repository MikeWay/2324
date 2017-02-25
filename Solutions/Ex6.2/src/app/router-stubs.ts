import { Directive, Component } from '@angular/core';
import { Input } from '@angular/core';

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
