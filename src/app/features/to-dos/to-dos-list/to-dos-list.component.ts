import { Component } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-dos-list',
  templateUrl: './to-dos-list.component.html',
  styleUrls: ['./to-dos-list.component.scss']
})
export class ToDosListComponent {

  constructor(
    private toDoService: ToDosService,
  ) { }

  toDos$ = this.toDoService.toDos$;

}
