import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeComponent } from './new-home.component';
import { By } from '@angular/platform-browser';
import { CarouselContainerComponent } from '../carousel-container/carousel-container.component';
import { Component } from '@angular/core';

class MockScreenInfo {
  public screenWidth = 66;
}

@Component({
  selector: 'app-carousel',
  template: ''
})
class MockCarouselContainerComponent {

}

@Component({
  selector: 'app-flight-status',
  template: ''
})
class MockFlightStatusComponent {


}

@Component({
  selector: 'app-org-dest-selector',
  template: ''
})
class MockOriginDestinationSelectorComponent {


}

describe('NewHomeComponent', () => {
  let component: NewHomeComponent;
  let fixture: ComponentFixture<NewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHomeComponent, MockCarouselContainerComponent, MockFlightStatusComponent, MockOriginDestinationSelectorComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Not much to test! Just check it has the correct child components
  it('should have a FlightStatus panel', () => {
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('app-flight-status'));
    expect(ele).toBeTruthy();
  });

  it('should have a Flight Search  panel', () => {
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('app-org-dest-selector'));
    expect(ele).toBeTruthy();
  });

  it('should have an image carousel container', () => {
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('app-carousel'));
    expect(ele).toBeTruthy();
  });

});
