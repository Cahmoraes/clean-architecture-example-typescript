import { TodoGateway } from '../../application/gateways/todo-gateway'
import { Todo } from '../../application/interfaces/todo'
import { HttpClient } from '../http-client'

export const enum TodoEndpoint {
  GET_TODOS = '/todos?_limit=3',
}

export class HttpTodoGateway implements TodoGateway {
  constructor(private httpClient: HttpClient<Todo>) {}

  public todos(): Promise<Todo[]> {
    return this.httpClient.getAll(TodoEndpoint.GET_TODOS)
  }
}
