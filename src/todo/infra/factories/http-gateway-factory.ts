import { GatewayFactory } from '../../application/factories/gateway-factory'
import { TodoGateway } from '../../application/gateways/todo-gateway'
import { HttpTodoGateway } from '../gateways/http-todo-gateway'
import { HttpClient } from '../http-client'
import { Todo } from '../../application/interfaces/todo'

export class HttpGatewayFactory implements GatewayFactory {
  constructor(private httpClient: HttpClient<Todo>) {}

  public createTodoGateway(): TodoGateway {
    return new HttpTodoGateway(this.httpClient)
  }
}
