import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[time]'
})
export class Time {

  constructor(el : ElementRef ) {
    this.setStyle(el);
    this.showTime(el);
    setInterval(() => this.showTime(el));
  }

  private showTime(el: ElementRef){
    let myDate =  new Date();
    el.nativeElement.innerHTML = myDate.toLocaleTimeString("en-US");
  }
  private setStyle(el: ElementRef){
    el.nativeElement.style.fontSize = '2em';
    el.nativeElement.style.marginTop = '0.2em';
    el.nativeElement.style.float = 'right';
  }

}
