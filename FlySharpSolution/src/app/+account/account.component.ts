import { Component} from '@angular/core';
import { FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { Account } from '../model/account';

@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent {


  accountForm: ControlGroup;

  constructor(fb: FormBuilder) {
      this.accountForm = fb.group({
          firstName: ["", Validators.required],
          familyName : ["", Validators.required],
          email:     ["", Validators.compose([Validators.required, Validators.minLength(10)])],
          address1 : ["", Validators.required],
          address2 : ["", Validators.required],
          city     : ["", Validators.required],
          postCode : ["", Validators.required],
      });
  } 
  onSubmit() {
      console.log("model-based form submitted");
      console.log(this.accountForm.valid);
  }


  /* Get the form data as an Account object */
  get value(): Account {
    return this.accountForm.value;
 }

}
