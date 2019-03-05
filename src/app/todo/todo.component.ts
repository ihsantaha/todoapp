import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('Ihsan', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.addTodo('Ihsan', this.todo).subscribe(
        data => {
          this.router.navigate(['todo-list']);
        }
      );
    } else {
      this.todoService.updateTodo('Ihsan', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todo-list']);
        }
      );
    }
  }

}
