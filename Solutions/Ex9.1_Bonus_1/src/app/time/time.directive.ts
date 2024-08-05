import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTime]',
  standalone: true
})
export class TimeDirective {

  @Input('appTime')
  textColor = 'white';

  constructor(private el: ElementRef) { 
    this.showTime(el);
    setInterval(() => {this.showTime(el)}, 1000);
  }

  private showTime(el: ElementRef): void {
    let myDate =  new Date();
    el.nativeElement.innerHTML = myDate.toLocaleTimeString("en-US");
  }  
  
    
  ngOnInit(): void {
      this.el.nativeElement.style.fontSize = '2em';
      this.el.nativeElement.style.marginTop = '0.2em';
      this.el.nativeElement.style.marginLeft = '2em';      
      this.el.nativeElement.style.color = this.textColor;
  }  
}

