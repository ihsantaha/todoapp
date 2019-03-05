import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8085/users/${username}/todo-list`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8085/users/${username}/todo-list/${id}`);
  }

  addTodo(username: string, todo: Todo) {
    console.log('X');
    return this.http.post(`http://localhost:8085/users/${username}/todo-list`, todo);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    console.log('Y');
    return this.http.put(`http://localhost:8085/users/${username}/todo-list/${id}`, todo);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`http://localhost:8085/users/${username}/todo-list/${id}`);
  }
}
