import { Component, HostListener } from '@angular/core';
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
    this.screenInfo.screenWidth = document.body.clientWidth;
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  /*** BONUS FOR RESPONSIVE */
  @HostListener('window:resize', ['$event'])
  onResize(/*event:any*/) {
      this.screenInfo.screenWidth = document.body.clientWidth;
  }

}
