import { Presenter } from '@/core/application/presenter'
import { Todo } from '../../application/dtos/todo'
import { GetTodos } from '../../application/use-cases/get-todos'
import { JSONPresenter } from '../presenters/json-presenter'
import { HttpGatewayFactory } from './http-gateway-factory'

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
}
