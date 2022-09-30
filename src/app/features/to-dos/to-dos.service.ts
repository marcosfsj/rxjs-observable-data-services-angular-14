import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ToDo } from './to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  constructor(private http: HttpClient) { }

  toDos$ = this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
    catchError(this.handleError),
  );

  search(title: string, completed: boolean) {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map((toDos: ToDo[]) => toDos.filter(toDo => toDo.title.includes(title) && toDo.completed === completed))
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
