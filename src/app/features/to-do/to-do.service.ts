import { BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ToDo } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos$: Observable<ToDo[]>;
  private error$: BehaviorSubject<string>;
  private _todos$: BehaviorSubject<ToDo[]>;
  
  constructor(private http: HttpClient) {
    this._todos$ = new BehaviorSubject<ToDo[]>([]);
    this.todos$ = this._todos$.asObservable();
    this.error$ = new BehaviorSubject<string>('');
  }
  
  public init(): void {
    this.http
      .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        catchError(err => this.handleError(err))
      )
      .subscribe(todos => this._todos$.next(todos));
  }

  public addTodo(todo: ToDo): void {
      this._todos$.next([...this._todos$.getValue(), todo]);
      // call the backend
  }

  public removeTodo(todoToRemove: ToDo): void {
    this._todos$.next([...this._todos$.getValue().filter(todo => todo.title != todoToRemove.title)]);
    // call the backend
  }

  public getTodos(): Observable<ToDo[]> {
    return this.todos$;
  }

  public getError(): Observable<string> {
    return this.error$;
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

  handleError(err: any): Observable<never> {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    this.error$.next(errorMessage);
    return throwError(() => errorMessage);
  }
}
