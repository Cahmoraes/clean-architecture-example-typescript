import { PostGateway } from '../gateways/post-gateway'

export interface GatewayFactory {
  createPostGateway(): PostGateway
}
