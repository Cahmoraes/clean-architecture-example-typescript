import { Presenter } from '@/core/application/presenter'
import { GatewayFactory } from '../factories/gateway-factory'
import { TodoGateway } from '../gateways/todo-gateway'
import { Todo } from '../dtos/todo'

export interface GetTodosOutput {
  todos: Todo[]
}

export class GetTodos {
  private todoGateway: TodoGateway

  constructor(
    gatewayFactory: GatewayFactory,
    private presenter: Presenter<Todo>,
  ) {
    this.todoGateway = gatewayFactory.createTodoGateway()
  }

  async execute(): Promise<GetTodosOutput> {
    const todos = await this.todos()
    return {
      todos: this.presenter.present(todos),
    }
  }

  private async todos(): Promise<Todo[]> {
    return this.todoGateway.todos()
  }
}
