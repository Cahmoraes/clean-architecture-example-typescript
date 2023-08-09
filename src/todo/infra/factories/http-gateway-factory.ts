import { GatewayFactory } from '../../application/factories/gateway-factory'
import { TodoGateway } from '../../application/gateways/todo-gateway'
import { HttpTodoGateway } from '../gateways/http-todo-gateway'
import { HttpClient } from '@/core/infra/http-client'

export class HttpGatewayFactory implements GatewayFactory {
  constructor(private httpClient: HttpClient) {}

  public createTodoGateway(): TodoGateway {
    return new HttpTodoGateway(this.httpClient)
  }
}
