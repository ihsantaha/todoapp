import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoDataService } from '../services/data/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  message: string;

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    // this.todos = [
    //   new Todo(1, 'A', false, new Date()),
    //   new Todo(2, 'B', false, new Date()),
    //   new Todo(3, 'C', false, new Date())
    // ];

    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Ihsan').subscribe(
      response => this.todos = response
    );
  }

  addTodo() {
    this.router.navigate(['todo-list', -1]);
  }

  updateTodo(id: number) {
    this.router.navigate(['todo-list', id]);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('Ihsan', id).subscribe(
      response => {
        this.message =  `Successfully deleted todo item ${id}`;
        this.refreshTodos();
      }
    );
  }

}
