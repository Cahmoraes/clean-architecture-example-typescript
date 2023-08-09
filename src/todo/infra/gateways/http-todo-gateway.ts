import {
  CreateTodoProps,
  TodoGateway,
} from '../../application/gateways/todo-gateway'
import { Todo } from '../../application/dtos/todo'
import { HttpClient } from '@/core/infra/http/http-client'

export const enum TodoEndpoint {
  GET_TODOS = '/todos?_limit=3',
  POST_TODOS = '/posts',
}

export class HttpTodoGateway implements TodoGateway {
  constructor(private httpClient: HttpClient) {}

  public async create(aTodoDTO: CreateTodoProps): Promise<Todo> {
    return this.httpClient.post(TodoEndpoint.POST_TODOS, aTodoDTO)
  }

  public todos(): Promise<Todo[]> {
    return this.httpClient.getAll(TodoEndpoint.GET_TODOS)
  }
}
