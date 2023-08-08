import { GatewayFactory } from '../factories/gateway-factory'
import { TodoGateway } from '../gateways/todo-gateway'
import { Todo } from '../interfaces/todo'
import { Presenter } from '../presenter'

export interface OutputData {
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

  async execute(): Promise<OutputData> {
    const todos = await this.todos()
    return {
      todos: this.presenter.present(todos),
    }
  }

  private async todos(): Promise<Todo[]> {
    return this.todoGateway.todos()
  }
}
