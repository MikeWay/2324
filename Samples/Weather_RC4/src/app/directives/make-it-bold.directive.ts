import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[MakeItBold]'
})
export class MakeItBold {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight= 'bold';
  }
  
  @Input('MakeItBold')
  set fontSize(size : string){
    this.el.nativeElement.style.fontSize  = size;
  }

}
