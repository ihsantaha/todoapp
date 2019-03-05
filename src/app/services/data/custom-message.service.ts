import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomMessageService {

  constructor(private http: HttpClient) { }

  getCustomMessage() {
    return this.http.get<HelloWorldBean>('http://localhost:8085/hello-world-bean');
  }

  getVariableMessage(message: string) {
    let headers = new HttpHeaders({Authorization: this.createBasicAuthHeader()})

    return this.http.get<HelloWorldBean>(`http://localhost:8085/hello-world/${message}`, {headers});
  }

  createBasicAuthHeader() {
    let username = 'Ihsan';
    let password = 'Password';
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeader;
  }

}

export class HelloWorldBean {
  constructor(public message: string) {}
}
