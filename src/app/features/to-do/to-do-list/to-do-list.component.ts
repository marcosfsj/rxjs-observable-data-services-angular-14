import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {
  error$ = this.toDoService.getError();
  todos$ = this.toDoService.todosNotCompleted$;

  constructor(
    private toDoService: ToDoService,
  ) {}
  
  ngOnInit(): void {
    this.toDoService.init();
  }

  public addTodo(): void {
    this.toDoService.addTodo({userId: 1,
      id: 2,
      title: "bla",
      completed: false});
  }

  public removeTodo(): void {
    this.toDoService.removeTodo({userId: 1,
      id: 2,
      title: "bla",
      completed: false});
  }

}
