import { HttpClient } from '.'
import { Todo } from '../../application/interfaces/todo'

const todos: Todo[] = [
  { userId: 1, id: 1, title: 'fake title', completed: false },
  {
    userId: 1,
    id: 2,
    title: 'fake title 2',
    completed: false,
  },
  { userId: 1, id: 3, title: 'fake title 3', completed: false },
]

export class FakeHttpClientAdapter implements HttpClient<Todo> {
  public async get(): Promise<Todo> {
    return todos[0]
  }

  public async getAll(): Promise<Todo[]> {
    return todos
  }
}
