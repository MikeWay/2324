import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Component } from '@angular/core';
import { TimeDirective } from './time.directive';


@Component({
  selector : 'mock-selector',
  template : "<span appTime></span>"
})
class MockComponent {

}

describe('TimeDirective', () => {
  let fixture : ComponentFixture<MockComponent>;
  let el: DebugElement;
  let nativeElement;
  let span;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        TimeDirective, MockComponent
      ],
    })
    .createComponent(MockComponent);
    fixture.detectChanges();
    //nativeElement = fixture.debugElement.nativeElement; // which retrieves an instance of the component under test   
    span = fixture.debugElement.query(By.css('span')); 
  });


  it('should create an instance', () => {
    const directive = new TimeDirective(new ElementRef(span));
    expect(directive).toBeTruthy();
  });

  it('should set the font size to 2em', () => {
    const fontSize = span.nativeElement.style.fontSize;
    expect(fontSize).toBe('2em');
  });  
});
