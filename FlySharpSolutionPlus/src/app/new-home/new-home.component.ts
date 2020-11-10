import { Component, OnInit } from '@angular/core';
import { ScreenInfoService } from '../screen-info/screen-info.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent {

  public specialOffer = '10% off all round-the-World flights';

  constructor() { }

}
