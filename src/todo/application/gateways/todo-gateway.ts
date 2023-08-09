import { Todo } from '../dtos/todo'

export type CreateTodoProps = Omit<Todo, 'id' | 'completed'>

export interface TodoGateway {
  todos(): Promise<Todo[]>
  create(aTodoDTO: CreateTodoProps): Promise<Todo>
}
