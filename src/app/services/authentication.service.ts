import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'Ihsan' && password === 'Taha') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    return !(sessionStorage.getItem('authenticatedUser') === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
