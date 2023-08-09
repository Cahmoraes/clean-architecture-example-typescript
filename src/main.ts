import 'dotenv/config'
import { env } from './core/env'
import { HttpClientFactory } from './todo/infra/http-client/factory/http-client-factory'
import { HttpGatewayFactory as HttpGatewayTodoFactory } from './todo/infra/factories/http-gateway-factory'
import { HttpGatewayFactory as HttpGatewayPostFactory } from './post/infra/factories/http-gateway-factory'
import { UseCaseFactory as UseCaseTodoFactory } from './todo/infra/factories/use-case-factory'
import { UseCaseFactory as UseCasePostFactory } from './post/infra/factories/use-case-factory'

class Main {
  private readonly httpGatewayTodoFactory: HttpGatewayTodoFactory
  private readonly httpGatewayPostFactory: HttpGatewayPostFactory

  constructor(private baseURL: string) {
    const httpClient = HttpClientFactory.create({
      baseURL: this.baseURL,
    })
    this.httpGatewayTodoFactory = new HttpGatewayTodoFactory(httpClient)
    this.httpGatewayPostFactory = new HttpGatewayPostFactory(httpClient)
  }

  async init(): Promise<void> {
    this.initTodos()
    this.initPosts()
  }

  private async initTodos(): Promise<void> {
    try {
      const getTodosUseCase = UseCaseTodoFactory.createGetTodos(
        this.httpGatewayTodoFactory,
      )
      const { todos } = await getTodosUseCase.execute()
      console.log(todos)
    } catch (error) {
      console.error(error)
    }
  }

  private async initPosts(): Promise<void> {
    try {
      const createPostUseCase = UseCasePostFactory.createCreatePost(
        this.httpGatewayPostFactory,
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
