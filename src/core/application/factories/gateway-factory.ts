import { PostGateway } from '@/post/application/gateways/post-gateway'
import { TodoGateway } from '@/todo/application/gateways/todo-gateway'

export interface GatewayFactory {
  createTodoGateway(): TodoGateway
  createPostGateway(): PostGateway
}
