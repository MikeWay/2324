import { TimeDirective } from './time.directive';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentComponent} from './payment/payment.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: `<div class="debug-border">
  <h1 appTime></h1><h2 appTime="blue"></h2>
  </div>`

})
class TestComponent {}

describe('TimeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugEle: DebugElement;
  let directiveEles: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, TimeDirective ],
      schemas:      [ NO_ERRORS_SCHEMA ]  // Allows HTML rules to be broken!
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    directiveEles = fixture.debugElement.queryAll(By.css('[appTime]'));
    component = fixture.componentInstance;
    debugEle = fixture.debugElement.query(By.css('[appTime]'));
  });

  it('should create an instance', () => {
    expect(debugEle).toBeTruthy();
  });

  it('should have two timeDirectives', () => {
    expect(directiveEles.length).toBe(2);
  });

  it('should color <h1> text "white"', () => {
    const color = directiveEles[0].nativeElement.style.color;
    expect(color).toBe('white');
  });

  it('should color <h2> text "blue"', () => {
    const color = directiveEles[1].nativeElement.style.color;
    expect(color).toBe('blue');
  });

});
