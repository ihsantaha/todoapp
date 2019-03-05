import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidCredentials: string;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  onLogin() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.invalidCredentials = '';
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidCredentials = 'Invalid Credentials';
    }
  }

  onBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data);
        this.invalidCredentials = '';
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidCredentials = 'Invalid Credentials';
      }
    )
  }

}
