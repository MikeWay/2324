import { Component, OnInit } from '@angular/core';
import { FormBuilder, Control, ControlGroup, Validators } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css']
})
export class TestComponent implements OnInit {

loginForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  doLogin(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }
  ngOnInit() {
  }

}
