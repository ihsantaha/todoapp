import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidCredentials: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

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

}
