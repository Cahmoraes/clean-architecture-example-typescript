import { CreateTodoProps } from '@/todo/application/gateways/todo-gateway'
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

  public async post<PostType>(_: string, data: PostType): Promise<Todo> {
    this.isCreateTodoDTO(data)
    const newIndexTodo = todos.push({
      ...data,
      id: 3,
      completed: false,
    })
    return todos[this.getLastItem()]
  }

  private getLastItem(): number {
    return todos.length - 1
  }

  private isCreateTodoDTO(
    anObject: unknown,
  ): asserts anObject is CreateTodoProps {
    if (!(anObject instanceof Object)) throw Error('Invalid object')
    if (!Reflect.has(anObject, 'title')) throw Error('Invalid object')
    if (!Reflect.has(anObject, 'userId')) throw Error('Invalid object')
  }

  public async getAll(): Promise<Todo[]> {
    return todos
  }
}
