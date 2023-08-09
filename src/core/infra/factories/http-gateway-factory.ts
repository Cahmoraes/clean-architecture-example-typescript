import { GatewayFactory } from '@/core/application/factories/gateway-factory'
import { PostGateway } from '@/post/application/gateways/post-gateway'
import { HttpPostGateway } from '@/post/infra/gateways/http-post-gateway'
import { TodoGateway } from '@/todo/application/gateways/todo-gateway'
import { HttpTodoGateway } from '@/todo/infra/gateways/http-todo-gateway'
import { HttpClient } from '../http-client'

export class HttpGatewayFactory implements GatewayFactory {
  constructor(private httpClient: HttpClient) {}

  public createPostGateway(): PostGateway {
    return new HttpPostGateway(this.httpClient)
  }

  public createTodoGateway(): TodoGateway {
    return new HttpTodoGateway(this.httpClient)
  }
}
