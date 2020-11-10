import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ScreenInfoService } from '../screen-info/screen-info.service';

import { CarouselContainerComponent } from './carousel-container.component';


@Component({
/* tslint:disable-next-line */
  selector: 'carousel',
  template: ''
})
class MockCarouselComponent {
  @Input()
  public images: string[];
  @Input()
  public cellsToShow: string;
  @Input()
  public height: string;
  @Input()
  public width: string;
  @Input()
  public cellWidth: string;

}
class MockScreenInfo {
  public screenWidth = 42;

}

describe('CarouselContainerComponent', () => {
  let component: CarouselContainerComponent;
  let fixture: ComponentFixture<CarouselContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselContainerComponent, MockCarouselComponent ],
      providers: [{ provide: ScreenInfoService,
          useClass: MockScreenInfo
      },]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a componentWidth of 42 ', () => {
    expect(component.compWidth).toBe(42);
  });

  it('should a have cell width of 100% ', () => {
    expect(component.cellWidth).toMatch('100%');
  });

  it('should set cellsToShow to 1 ', () => {
    expect(component.cellsToShow).toBe(1);
  });

  it('should have a carousel child component', ()=> {
    const carouselChild = fixture.debugElement.query(By.css('carousel'));
    expect(carouselChild).toBeTruthy();
  });
});
