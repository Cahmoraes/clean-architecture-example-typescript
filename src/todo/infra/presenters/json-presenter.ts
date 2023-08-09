import { Todo } from '../../application/dtos/todo'
import { Presenter } from '../../application/presenter'

export class JSONPresenter implements Presenter<Todo> {
  public present(todos: Todo[]): Todo[] {
    return todos
  }
}
