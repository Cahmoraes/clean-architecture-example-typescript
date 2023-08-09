import { CreatePost } from '@/post/application/use-cases/create-post'
import { Todo } from '@/todo/application/interfaces/todo'
import { Presenter } from '@/todo/application/presenter'
import { GetTodos } from '@/todo/application/use-cases/get-todos'
import { JSONPresenter } from '@/todo/infra/presenters/json-presenter'
import { HttpGatewayFactory } from '../../infra/http-gateway/factory/http-gateway-factory'

export const enum PresenterTypes {
  JSON = 'JSON',
}

export class UseCaseFactory {
  public static createGetTodos(todoGateway: HttpGatewayFactory) {
    return new GetTodos(todoGateway, this.createPresenter())
  }

  private static createPresenter(): Presenter<Todo> {
    switch (process.env.PRESENTER) {
      case PresenterTypes.JSON:
        return new JSONPresenter()
      default:
        return new JSONPresenter()
    }
  }

  public static createCreatePost(todoGateway: HttpGatewayFactory) {
    return new CreatePost(todoGateway)
  }
}
