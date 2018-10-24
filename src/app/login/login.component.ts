import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//NOTES for LOGIN
  // So, to recap, when the user logs in, you should send a post request to an API endpoint to validate their credentials.
  // If the credentials are valid, we should get a json web token, and store it in the local storage, and then its better
  // to return a boolean instead of a response object.Finally, in our LOGIN COMPONENT, we get that boolean, and depending
  // on its value, we either navigate the user to a different page which is often the homepage, or display a validation error.
  // This is how we implement the login.

 //ALSO in this project we are using Obsolete Angular project and jwt library, however the above algorithm is still valid. 
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });
  }
}
