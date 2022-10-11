import { BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ToDo } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todos$: Observable<ToDo[]>;
  todosNotCompleted$:  Observable<ToDo[]>;
  private error$: BehaviorSubject<string>;
  private _todos$: BehaviorSubject<ToDo[]>;
  
  constructor(private http: HttpClient) {
    this._todos$ = new BehaviorSubject<ToDo[]>([]);
    this.todos$ = this._todos$.asObservable();
    this.todosNotCompleted$ = this.todos$.pipe(
      map((todos) => todos.filter(todo => !todo.completed))
    );
    this.error$ = new BehaviorSubject<string>('');
  }
  
  public init(): void {
    this.http
      .get<ToDo[]>('api/todos') 
      .pipe(
        catchError(err => this.handleError(err))
      )
      .subscribe(todos => this._todos$.next(todos));
  }

  public addTodo(todo: ToDo): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Required for the in memory web API to assign a unique id
    todo.id = null;
    this.http
      .post<ToDo>('api/todos', todo, {headers}) 
      .pipe(
        catchError(err => this.handleError(err))
      );
    this._todos$.next([...this._todos$.getValue(), todo]);
  }

  public removeTodo(todoToRemove: ToDo): void {
    this._todos$.next([...this._todos$.getValue().filter(todo => todo.title != todoToRemove.title)]);
    // call the backend
  }

  public getError(): Observable<string> {
    return this.error$.asObservable();
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
