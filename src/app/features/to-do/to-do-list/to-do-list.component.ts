import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  constructor(
    private toDoService: ToDoService,
  ) { }

  toDos$ = this.toDoService.toDos$;

}
