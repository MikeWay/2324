import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication-service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent  {

  form:FormGroup;
  error = '';

  constructor(private fb:FormBuilder,
               private authService: AuthenticationService,
               private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  login() {
      const val = this.form.value;

      if (val.email && val.password) {
          this.authService.login(val.email, val.password)
              .subscribe(
                  (tok) => {
                      console.log('User is logged in. Token: ' + JSON.stringify(tok));
                      this.router.navigateByUrl('/');
                  },
                  (err) => this.error = err
              );
      }
  }
}
