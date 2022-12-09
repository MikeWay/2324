import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Account } from '../model/account';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accountForm: FormGroup;

  constructor(fb: FormBuilder) {
      this.accountForm = fb.group({
          firstName: ['', Validators.required],
          familyName : ['', Validators.required],
          email:     ['', Validators.compose([Validators.required, Validators.minLength(10)])],
          address1 : ['', Validators.required],
          address2 : ['', Validators.required],
          city     : ['', Validators.required],
          postCode : ['', Validators.required],
      });
  }
  
  onSubmit(): void {
      console.log('model-based form submitted');
      console.log(this.accountForm.valid);
  }


  /* Get the form data as an Account object */
  get value(): Account {
    return this.accountForm.value;
 }

}
