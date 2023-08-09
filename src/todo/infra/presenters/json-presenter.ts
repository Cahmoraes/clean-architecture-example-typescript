import { Presenter } from '@/core/application/presenter'
import { Todo } from '../../application/dtos/todo'

export class JSONPresenter implements Presenter<Todo> {
  public present(todos: Todo[]): Todo[] {
    return todos
  }
}
