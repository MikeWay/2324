import { TimeDirective } from './time.directive';
import {Component, DebugElement} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentComponent} from './payment/payment.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: '<h1 appTime></h1>'

})
class TestComponent {}

describe('TimeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugEle: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugEle = fixture.debugElement.query(By.css('h1[appTime]'));
  });

  it('should create an instance', () => {
    expect(debugEle).toBeTruthy();
  });
});
