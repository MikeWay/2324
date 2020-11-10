import { Location } from '@angular/common';
import { Component, DebugElement, NgZone, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { OriginDestinationSelectorComponent } from './org-dest-selector.component';



// A stub component to keep the router configuration happy
@Component({
  selector: 'app-nowhere',
  template: ''
})
class MockComponent {

}

@Component({
  template: '<app-org-dest-selector></app-org-dest-selector><router-outlet></router-outlet>'
})
class HostComponent {
  @ViewChild(OriginDestinationSelectorComponent)
  selectorComponent: OriginDestinationSelectorComponent;

}

describe('OriginDestinationSelectorComponent', () => {
  let hostComponent: HostComponent;
  let selectorComponent: OriginDestinationSelectorComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let router = null;
  let loc: Location;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginDestinationSelectorComponent, HostComponent ],
      imports: [RouterTestingModule.withRoutes([  {
        path: 'buy',
        component: MockComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'buy/:origin',
        component: MockComponent
      },]), FormsModule, ReactiveFormsModule],
      providers: [ FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    loc = TestBed.inject(Location);

    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
    selectorComponent = hostComponent.selectorComponent;
  });

  it('should create the host', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should create', () => {
    expect(hostComponent.selectorComponent).toBeTruthy();
  });

  it(' the form should not be valid if origin and destination are the same', ()=>{

    selectorComponent.flightSearchForm.get('origin').setValue('LAX');
    selectorComponent.flightSearchForm.get('destination').setValue('LAX');
    expect(hostComponent.selectorComponent.flightSearchForm.invalid).toBeTruthy();
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


  // Note: waitForAsync() wraps a test function in an asynchronous test zone.
  // The test will automatically complete when all asynchronous calls within this zone are done.
  // Can be used to wrap an inject call.
  it(' should route to buy flights when the form is submitted', waitForAsync(()=>{
    hostFixture.ngZone.run(() => {
      selectorComponent.flightSearchForm.get('origin').setValue('LAX');
      selectorComponent.flightSearchForm.get('destination').setValue('LHR');
      selectorComponent.onSubmit();
    });
    hostFixture.whenStable().then(() => {
      expect(loc.path()).toBe('/buy;origin=LAX;destination=LHR');
    });
  }));
});
