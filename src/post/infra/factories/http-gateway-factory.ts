import { GatewayFactory } from '../../application/factories/gateway-factory'
import { PostGateway } from '../../application/gateways/post-gateway'
import { HttpTodoGateway } from '../gateways/http-todo-gateway'
import { HttpClient } from '../http-client'
import { Post } from '@/post/application/interfaces/post'

export class HttpGatewayFactory implements GatewayFactory {
  constructor(private httpClient: HttpClient<Post>) {}

  public createPostGateway(): PostGateway {
    return new HttpTodoGateway(this.httpClient)
  }
}
