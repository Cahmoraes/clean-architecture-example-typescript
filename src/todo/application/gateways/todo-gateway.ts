import { Todo } from '../interfaces/todo'

export interface TodoGateway {
  todos(): Promise<Todo[]>
}
