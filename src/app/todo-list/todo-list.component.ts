import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
    this.todos = [
      new Todo(1, 'A', false, new Date()),
      new Todo(2, 'B', false, new Date()),
      new Todo(3, 'C', false, new Date())
    ];
  }

}
