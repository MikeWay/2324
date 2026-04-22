import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTime]',
})
export class Time implements OnInit {
  @Input('appTime') color = 'white';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = '2em';
    this.el.nativeElement.style.margin = '10px';
    this.el.nativeElement.style.color = this.color || 'white';
    this.showTime();
    setInterval(() => this.showTime(), 1000);
  }

  showTime(): void {
    this.el.nativeElement.innerHTML = new Date().toLocaleTimeString();
  }
}
