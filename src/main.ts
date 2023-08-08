import 'dotenv/config'
import { env } from './core/env'
import { HttpClientFactory } from './todo/infra/http-client/factory/http-client-factory'
import { HttpGatewayFactory } from './todo/infra/factories/http-gateway-factory'
import { UseCaseFactory } from './todo/infra/factories/use-case-factory'

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
