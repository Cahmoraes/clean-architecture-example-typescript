import { GatewayFactory } from '../factories/gateway-factory'
import { TodoGateway } from '../gateways/todo-gateway'
import { Todo } from '../interfaces/todo'

export interface CreateTodoInput {
  title: string
  body: string
  userId: number
}

export interface CreateTodoOutput {
  todo: Todo
}

export class CreateTodo {
  private todoGateway: TodoGateway

  constructor(gatewayFactory: GatewayFactory) {
    this.todoGateway = gatewayFactory.createTodoGateway()
  }

  public async execute(input: CreateTodoInput): Promise<CreateTodoOutput> {
    const todo = await this.todoGateway.create(input)
    return { todo }
  }
}
