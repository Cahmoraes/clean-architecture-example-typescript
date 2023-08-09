import 'dotenv/config'
import { env } from './core/env'
import { HttpClientFactory } from './todo/infra/http-client/factory/http-client-factory'
import { UseCaseFactory } from './core/infra/http-client/factories/use-case-factory'
import { HttpGatewayFactory } from './core/infra/http-client/factories/http-gateway-factory'

class Main {
  private readonly httpGatewayFactory: HttpGatewayFactory

  constructor(private baseURL: string) {
    const httpClient = HttpClientFactory.create({
      baseURL: this.baseURL,
    })
    this.httpGatewayFactory = new HttpGatewayFactory(httpClient)
  }

  async init(): Promise<void> {
    this.initTodos()
    this.initPosts()
  }

  private async initTodos(): Promise<void> {
    try {
      const getTodosUseCase = UseCaseFactory.createGetTodos(
        this.httpGatewayFactory,
      )
      const { todos } = await getTodosUseCase.execute()
      console.log(todos)
    } catch (error) {
      console.error(error)
    }
  }

  private async initPosts(): Promise<void> {
    try {
      const createPostUseCase = UseCaseFactory.createCreatePost(
        this.httpGatewayFactory,
      )
      console.log('=========== create =========')
      const { post } = await createPostUseCase.execute({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      console.log(post)
    } catch (error) {
      console.error(error)
    }
  }
}

new Main(env.BASE_URL).init()
