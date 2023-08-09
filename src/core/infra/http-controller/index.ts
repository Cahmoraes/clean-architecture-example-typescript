import { UseCaseFactory } from '@/core/application/factories/use-case-factory'
import { HttpServer } from '../http-server'
import { HttpGatewayFactory } from '../http-gateway/factory/http-gateway-factory'

export class HttpController {
  constructor(
    private httpServer: HttpServer,
    private httpGatewayFactory: HttpGatewayFactory,
    private useCaseFactory: UseCaseFactory,
  ) {
    console.log(this.httpGatewayFactory)
    console.log(this.useCaseFactory)

    this.httpServer.on('get', '/todos', async () => {
      try {
        const getTodosUseCase = this.useCaseFactory.createGetTodos()
        const { todos } = await getTodosUseCase.execute()
        console.log(todos)
      } catch (error) {
        console.error(error)
      }
    })

    this.httpServer.on('get', '/posts', async () => {
      try {
        const createPostUseCase = this.useCaseFactory.createCreatePost()
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
    })
  }
}
