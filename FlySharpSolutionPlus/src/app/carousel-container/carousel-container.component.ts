import { Component, OnInit, HostListener, Input, ViewChild } from '@angular/core';
import { ScreenInfoService } from '../screen-info/screen-info.service';
import { CarouselComponent } from 'angular-responsive-carousel';

/**
 * This component just wraps the IvyCarouselModule and allows direct control of the values being set and the
 * specification of the images to display. It simply avoids cluttering the NewHomeComponent
 *
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.css']
})
export class CarouselContainerComponent implements OnInit {

  public cellsToShow = 1;
  public compHeight=800;    // Based on the height of the images for our carousel
  public cellWidth='100%';

  images = [
    {path: '/assets/images/carousel1.jpg'},
    {path: '/assets/images/carousel2.jpg'},
    {path: '/assets/images/carousel3.jpg'}
]
/*
@ViewChild(CarouselComponent)
  carousel: CarouselComponent;
*/
  constructor(private screenInfo: ScreenInfoService) { }

  get compWidth(): number {
    // The correction factor of -21 was found by Luck and Flaw
    return this.screenInfo.screenWidth;
  }

  ngOnInit(): void {
    // this.carousel.initCarousel();
  }

}
