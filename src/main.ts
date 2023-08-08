import 'dotenv/config'
import { UseCaseFactory } from './domain/todo/infra/factories/use-case-factory'
import { HttpClientFactory } from './domain/todo/infra/http-client/factory/http-client-factory'
import { HttpGatewayFactory } from './domain/todo/infra/factories/http-gateway-factory'
import { env } from './core/env'

async function main(baseURL: string) {
  const httpClient = HttpClientFactory.create({
    baseURL,
  })

  const httpGatewayFactory = new HttpGatewayFactory(httpClient)
  const getTodos = UseCaseFactory.createGetTodos(httpGatewayFactory)

  try {
    const { todos } = await getTodos.execute()
    console.log(todos)
  } catch (error) {
    console.error(error)
  }
}

main(env.BASE_URL)
