import { BehaviorSubject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ToDo } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos$ = new BehaviorSubject<ToDo[]>([]);

  constructor(private http: HttpClient) { }

  public init(): void {
    this.http
      .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        catchError(this.handleError),
      )
      .subscribe(todos => {
        this.todos$.next(todos);
      });
  }

  public addTodo(todo: ToDo): void {
    // add todo to the list of todos and call next
    // call the backend
  }

  public getTodos(): Observable<ToDo[]> {
    return this.todos$;
  }

  public getNotCompletedTodos(): Observable<ToDo[]> {
    return this.todos$.pipe(
      map((todos) => todos.filter(todo => !todo.completed))
    );
  }

  public getCount(): Observable<number> {
    return this.todos$.pipe(
      map(todos => todos.length)
    );
  }

  handleError(err: any, caught: Observable<any>): Observable<never> {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
