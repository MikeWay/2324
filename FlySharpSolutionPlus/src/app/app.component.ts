import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ScreenInfoService } from './screen-info/screen-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Fly Sharp';
  navbarOpen = false;


  constructor(private screenInfo: ScreenInfoService){

    // ngOnInit does not seem to be called for the AppComponent so init here
    this.screenInfo.screenWidth = document.body.clientWidth;
    // console.log(`Inner ${window.innerWidth}`) ;//-- width of viewport including any scroll bars
    // console.log(`Width ${document.body.clientWidth}`); // -- viewport exclusing scroll bars
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  /*** BONUS FOR RESPONSIVE */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.screenInfo.screenWidth = document.body.clientWidth;
      // console.log(`Inner ${window.innerWidth}`);// -- width of viewport including any scroll bars
      // console.log(`Width ${document.body.clientWidth}`);// -- viewport exclusing scroll bars
  }


}
