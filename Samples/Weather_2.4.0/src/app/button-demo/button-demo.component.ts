import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent {

buttonDisabled : boolean = false;

onClick(){ this.buttonDisabled = true;}

onClickOther(){ this.buttonDisabled = false;}


}
