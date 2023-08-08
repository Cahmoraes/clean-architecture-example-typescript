import { TodoGateway } from '../gateways/todo-gateway'

export interface GatewayFactory {
  createTodoGateway(): TodoGateway
}
