import { HttpClient } from '@/core/infra/http-client'
import { GatewayFactory } from '../../application/factories/gateway-factory'
import { PostGateway } from '../../application/gateways/post-gateway'
import { HttpPostGateway } from '../gateways/http-post-gateway'

export class HttpGatewayFactory implements GatewayFactory {
  constructor(private httpClient: HttpClient) {}

  public createPostGateway(): PostGateway {
    return new HttpPostGateway(this.httpClient)
  }
}
