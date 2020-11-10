import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlightFilterComponent } from './flight-filter.component';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';


describe('FlightFilterComponent', () => {
  let component: FlightFilterComponent;
  let fixture: ComponentFixture<FlightFilterComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initialValue in the input control', () => {
    component.initialValue='ABC';
    el = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();

    expect(el.nativeElement.value).toBe('ABC');
  });

  it('should emit the input value when a key is released', () => {
    let emitterValue = '';
    component.initialValue='ABCD';
    el = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
    component.filterEmitter.subscribe((value)=>{emitterValue=value});
    el.triggerEventHandler('keyup', null);

    expect(emitterValue).toBe('ABCD');
  });
});
