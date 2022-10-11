import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDo } from '../features/to-do/to-do.model';

export class MockData implements InMemoryDbService {

  createDb(): { todos: ToDo[]} {
    const todos: ToDo[] = [
      {
        userId: 1,
        id: 1,
        title: 'Do the dishes',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'Read the bible',
        completed: false,
      },
    ];
    return { todos };
  }
}
