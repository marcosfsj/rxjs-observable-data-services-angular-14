import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, distinctUntilChanged, filter, combineLatest, switchMap, startWith } from 'rxjs';

import { ToDosService } from '../../services/to-dos.service';

@Component({
  selector: 'app-to-dos-search',
  templateUrl: './to-dos-search.component.html',
  styleUrls: ['./to-dos-search.component.scss']
})
export class ToDosSearchComponent {

  toDoSearchForm = this.formBuilder.group({
      title: this.formBuilder.control(''),
      completed: this.formBuilder.control(false),
  });

  constructor(private formBuilder: FormBuilder,
              private toDosService: ToDosService,
  ) {}

  validTitle = this.toDoSearchForm.controls.title.valueChanges.pipe(
    startWith(''),
    map(title => title?.trim()),
    distinctUntilChanged(),
    filter(search => search !== ""),
  );

  validCompleted = this.toDoSearchForm.controls.completed.valueChanges.pipe(
    startWith(false),
    distinctUntilChanged(),
    filter(completed => completed !== null),
  );

  results = combineLatest([this.validTitle, this.validCompleted]).pipe(
    switchMap(([title, completed]) => this.toDosService.search(title || '', completed || false).pipe(
      startWith([]),
    ))
  );

}
