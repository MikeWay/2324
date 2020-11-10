import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

    constructor(private http: HttpClient) {

    }

    login(email:string, password:string ) {
        return this.http.post<string>('http://localhost:8080/login',
            {email, password}).pipe(catchError(this.handleError),tap(res => this.setSession(res)), shareReplay());

        // 1st pipe into tap sets the result into the session
        // 2nd one causes the result to be replayed if there is a second request
      }

    private handleError(error: HttpErrorResponse ){
        if(error.error instanceof ErrorEvent){
            // Client error
            console.error('Http communication error:', error.error.message)
          } else {
            // Server error
            console.error(`Server error: ${error.status}. Message body: ${error.error}`)
            if(error.status === 401){
                return throwError( 'Invalid credentials try user@learningtree.com/password');
            }
          }
          return throwError( 'Unexpected Server error - check the console output');
    }

    private setSession(authResult) {
//        console.log(`=================> ${JSON.stringify(authResult)}`);
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', expiresAt.format());
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}


