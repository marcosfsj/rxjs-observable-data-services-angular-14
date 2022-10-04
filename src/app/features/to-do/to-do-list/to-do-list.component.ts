import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todos$ = this.toDoService.getNotCompletedTodos();
  count$ = this.toDoService.getCount();

  constructor(
    private toDoService: ToDoService,
  ) {}
  
  ngOnInit(): void {
    this.toDoService.init();
  }

}
