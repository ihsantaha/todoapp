import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password); 
    let headers = new HttpHeaders({Authorization: basicAuthHeader})

    return this.http.get<AuthenticationBean>(
        `http://localhost:8085/basicauth`, 
        {headers}).pipe(
            map(
                data => {
                    sessionStorage.setItem('authenticatedUser', username);
                    sessionStorage.setItem('token', basicAuthHeader);
                    return data;
                }
            )
        );
  }

  isUserLoggedIn() {
    return !(sessionStorage.getItem('authenticatedUser') === null); 
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser'); 
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem('token'); 
  }

}

export class AuthenticationBean {
    constructor(public message: string) {}
}