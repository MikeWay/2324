import { Location } from '@angular/common';
import { Component, DebugElement, NgZone, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { OriginDestinationSelectorComponent } from './org-dest-selector.component';


describe('OriginDestinationSelectorComponent', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let selectorComponent: OriginDestinationSelectorComponent;
  let router = null;
  let loc: Location;
  let fixture;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginDestinationSelectorComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [ FormBuilder, {provide: Router, useValue: routerSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    loc = TestBed.inject(Location);

    fixture = TestBed.createComponent(OriginDestinationSelectorComponent);
    fixture.detectChanges();
    selectorComponent = fixture.debugElement.componentInstance;
  });



  it('should create', () => {
    expect(selectorComponent).toBeTruthy();
  });

  it(' the form should not be valid if origin and destination are the same', ()=>{

    selectorComponent.flightSearchForm.get('origin').setValue('LAX');
    selectorComponent.flightSearchForm.get('destination').setValue('LAX');
    expect(selectorComponent.flightSearchForm.invalid).toBeTruthy();
  });

  it(' the form should not be valid if origin and destination are empty', ()=>{
    selectorComponent.flightSearchForm.get('origin').setValue('');
    selectorComponent.flightSearchForm.get('destination').setValue('');
    expect(selectorComponent.flightSearchForm.invalid).toBeTruthy();
  });

  it(' the form should be valid if origin and destination are different', ()=>{
    selectorComponent.flightSearchForm.get('origin').setValue('LAX');
    selectorComponent.flightSearchForm.get('destination').setValue('LHR');
    expect(selectorComponent.flightSearchForm.invalid).toBeFalsy();
  });


  it(' should route to buy flights when the form is submitted (v2)', ()=>{

      selectorComponent.flightSearchForm.get('origin').setValue('LAX');
      selectorComponent.flightSearchForm.get('destination').setValue('LHR');
      selectorComponent.onSubmit();
      expect(router.navigate).toHaveBeenCalledWith(['buy', { origin: 'LAX', destination: 'LHR' }]);

  });
});
