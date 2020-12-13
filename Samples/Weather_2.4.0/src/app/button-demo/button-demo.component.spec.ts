import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemoComponent } from './button-demo.component';

describe('ButtonDemoComponent', () => {
  let component: ButtonDemoComponent;
  let fixture: ComponentFixture<ButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('the button should be enabled after onClickOther()',
    ( ) => {
      component.buttonDisabled = true;
      component.onClickOther();
      expect(component.buttonDisabled).toBeFalsy();
    });
  

  it('the update button should be enabled after clicking the other button',( ) => {  fixture.detectChanges();

    let buttonEle =   fixture.debugElement.query(By.css('#otherButton'));

    buttonEle.triggerEventHandler('click', null);

    let updateButtonEle = 	fixture.debugElement.query(By.css('#updateButton'));
   expect(updateButtonEle.nativeElement.disabled)        .toBeFalsy();
  });

});
