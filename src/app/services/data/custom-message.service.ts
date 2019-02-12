import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomMessageService {

  constructor(private http: HttpClient) { }

  getCustomMessage() {
    return this.http.get<HelloWorldBean>('http://localhost:8085/hello-world-bean');
  }
  
  getVariableMessage(message: string) {
    return this.http.get<HelloWorldBean>(`http://localhost:8085/hello-world/${message}`);
  }

}

export class HelloWorldBean {
  constructor(public message: string) {}
}
