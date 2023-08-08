import { CreatePost } from '../../application/use-cases/create-post'
import { HttpGatewayFactory } from './http-gateway-factory'

export const enum PresenterTypes {
  JSON = 'JSON',
}

export class UseCaseFactory {
  public static createGetTodos(todoGateway: HttpGatewayFactory) {
    return new CreatePost(todoGateway)
  }

  public static createCreateTodo(todoGateway: HttpGatewayFactory) {
    return new CreatePost(todoGateway)
  }
}
