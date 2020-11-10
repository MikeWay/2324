import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      providers:[FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Not much to test on this component as it really is just a stub...
  it('should have 7 input controls', () => {
    fixture.detectChanges();
    const inputCount = fixture.debugElement.queryAll(By.css('form input')).length

    // let tableEle = fixture.debugElement.query(Element..all());
    expect(inputCount).toBe(7);
  });

  it('should not call onSubmit if the form is invalid', () => {
    spyOn(component,'onSubmit');
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('button[type=submit]'))
    submitButton.triggerEventHandler('click', null);

    // let tableEle = fixture.debugElement.query(Element..all());
    expect(component.onSubmit).not.toHaveBeenCalled();
  });

  it('should enable the submit button if the form is valid', () => {
    spyOn(component,'onSubmit');
    spyOnProperty(component.accountForm,'valid').and.returnValue(true);
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('button[type=submit]'));
    const buttonEle = submitButton.nativeElement as HTMLButtonElement;
    expect(buttonEle.disabled).toBe(false);
  });

  it('should disable the submit button if the form is invalid', () => {
    spyOn(component,'onSubmit');
    spyOnProperty(component.accountForm,'valid').and.returnValue(false);
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('button[type=submit]'));
    const buttonEle = submitButton.nativeElement as HTMLButtonElement;
    expect(buttonEle.disabled).toBe(true);
  });

  it('should call onSubmit in response to ngSubmit', () => {
    spyOn(component,'onSubmit');
    fixture.detectChanges();
    const formDe = fixture.debugElement.query(By.css('form'));
    formDe.triggerEventHandler('ngSubmit', null);

    expect(component.onSubmit).toHaveBeenCalled();
  });

});
