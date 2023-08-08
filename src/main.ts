import 'dotenv/config'
import { env } from './core/env'
import { HttpClientFactory } from './todo/infra/http-client/factory/http-client-factory'
import { HttpGatewayFactory as HttpGatewayTodoFactory } from './todo/infra/factories/http-gateway-factory'
import { HttpGatewayFactory as HttpGatewayPostFactory } from './post/infra/factories/http-gateway-factory'
import { UseCaseFactory as UseCaseTodoFactory } from './todo/infra/factories/use-case-factory'
import { UseCaseFactory as UseCasePostFactory } from './post/infra/factories/use-case-factory'

async function main(baseURL: string) {
  const httpClient = HttpClientFactory.create({
    baseURL,
  })

  const httpGatewayTodoFactory = new HttpGatewayTodoFactory(httpClient)
  const httpGatewayPostFactory = new HttpGatewayPostFactory(httpClient)
  const getTodos = UseCaseTodoFactory.createGetTodos(httpGatewayTodoFactory)
  const createTodo = UseCasePostFactory.createCreateTodo(httpGatewayPostFactory)

  try {
    const { todos } = await getTodos.execute()
    console.log(todos)
    console.log('=========== create =========')
    const { post } = await createTodo.execute({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    console.log(post)
  } catch (error) {
    console.error(error)
  }
}

main(env.BASE_URL)
