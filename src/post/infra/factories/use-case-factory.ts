import { CreatePost } from '../../application/use-cases/create-post'
import { HttpGatewayFactory } from './http-gateway-factory'

export const enum PresenterTypes {
  JSON = 'JSON',
}

export class UseCaseFactory {
  public static createCreatePost(todoGateway: HttpGatewayFactory) {
    return new CreatePost(todoGateway)
  }
}
