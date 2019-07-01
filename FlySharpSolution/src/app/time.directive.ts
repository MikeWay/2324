import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective implements OnInit {

  @Input('appTime')
  public color = 'white';

  constructor(private el: ElementRef) {
    this.showTime(el);
    setInterval(() => {this.showTime(el); }, 1000);
  }

  private showTime(el: ElementRef) {
    const myDate = new Date();
    el.nativeElement.innerHTML = myDate.toLocaleTimeString('en-US');
  }

  ngOnInit() {
    this.el.nativeElement.style.fontSize = '2em';
    this.el.nativeElement.style.marginTop = '0.2em';
    this.el.nativeElement.style.float = 'right';
    this.el.nativeElement.style.color = this.color;
  }
}
