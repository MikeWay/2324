import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {

  @Input('appTime')
  private color : string = "white";

  constructor(private el: ElementRef) {
    this.showTime(el);
    this.el.nativeElement.style.fontSize = '2em';
    this.el.nativeElement.style.marginTop = '0.2em';
    this.el.nativeElement.style.float = 'right';
    this.el.nativeElement.style.color = this.color;    
    setInterval(()=>{this.showTime(el)}, 1000);
  }

  private showTime(el: ElementRef) {
    let myDate = new Date();
    el.nativeElement.innerHTML = myDate.toLocaleTimeString("en-US");
  }

}
