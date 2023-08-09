import { CreatePost } from '@/post/application/use-cases/create-post'
import { Todo } from '@/todo/application/dtos/todo'
import { GetTodos } from '@/todo/application/use-cases/get-todos'
import { JSONPresenter } from '@/todo/infra/presenters/json-presenter'
import { HttpGatewayFactory } from '../../infra/http-gateway/factory/http-gateway-factory'
import { Presenter } from '../presenter'

export const enum PresenterTypes {
  JSON = 'JSON',
}

export class UseCaseFactory {
  constructor(private todoGateway: HttpGatewayFactory) {}

  public createGetTodos() {
    return new GetTodos(this.todoGateway, this.createPresenter())
  }

  private createPresenter(): Presenter<Todo> {
    switch (process.env.PRESENTER) {
      case PresenterTypes.JSON:
        return new JSONPresenter()
      default:
        return new JSONPresenter()
    }
  }

  public createCreatePost() {
    return new CreatePost(this.todoGateway)
  }
}
