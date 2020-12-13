import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {
  buttonDisabled : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  

onClick(){ this.buttonDisabled = true;}

onClickOther(){ this.buttonDisabled = false;}
}
 